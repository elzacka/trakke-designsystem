/**
 * TRÅKKE DESIGNSYSTEM
 * Sheet Component
 * 
 * Responsiv sheet-komponent som vises som bottom sheet på mobil
 * og sentrert modal på desktop. Støtter swipe-gestures og flere høyder.
 */

import React, { 
  forwardRef, 
  HTMLAttributes, 
  ReactNode, 
  useCallback, 
  useEffect, 
  useRef, 
  useState 
} from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon';
import { Button } from '../Button';
import styles from './Sheet.module.scss';

export type SheetHeight = 'auto' | 'peek' | 'half' | 'full';

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  /** Om sheet-en er åpen */
  open: boolean;
  
  /** Callback når sheet-en skal lukkes */
  onClose: () => void;
  
  /** Tittel på sheet-en */
  title?: string;
  
  /** Undertittel */
  subtitle?: string;
  
  /** Standard høyde på mobil */
  defaultHeight?: SheetHeight;
  
  /** Tillat swipe for å endre høyde */
  swipeable?: boolean;
  
  /** Vis bakgrunnsoverlay */
  showOverlay?: boolean;
  
  /** Lukk ved klikk på overlay */
  closeOnOverlayClick?: boolean;
  
  /** Lukk ved Escape-tast */
  closeOnEscape?: boolean;
  
  /** Vis lukkeknapp */
  showCloseButton?: boolean;
  
  /** Vis drag-handle */
  showHandle?: boolean;
  
  /** Ekstra innhold i header (til venstre for lukkeknapp) */
  headerActions?: ReactNode;
  
  /** Footer-innhold */
  footer?: ReactNode;
  
  /** Deaktiver scroll i innholdet */
  disableScroll?: boolean;
  
  /** Ekstra CSS-klasser for innholdsområdet */
  contentClassName?: string;
  
  /** Barn (innhold) */
  children: ReactNode;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

// Height thresholds for snap points (percentage of viewport)
const HEIGHT_THRESHOLDS = {
  peek: 0.25,
  half: 0.5,
  full: 0.9,
};

/**
 * Sheet-komponent for Tråkke Design System
 * 
 * @example
 * // Enkel sheet
 * <Sheet open={isOpen} onClose={handleClose} title="Søk">
 *   <SearchContent />
 * </Sheet>
 * 
 * @example
 * // Sheet med swipe og footer
 * <Sheet 
 *   open={isOpen} 
 *   onClose={handleClose}
 *   title="Rutedetaljer"
 *   swipeable
 *   defaultHeight="half"
 *   footer={<Button onClick={handleSave}>Lagre rute</Button>}
 * >
 *   <RouteDetails />
 * </Sheet>
 */
export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  (
    {
      open,
      onClose,
      title,
      subtitle,
      defaultHeight = 'auto',
      swipeable = true,
      showOverlay = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      showHandle = true,
      headerActions,
      footer,
      disableScroll = false,
      contentClassName,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [currentHeight, setCurrentHeight] = useState<SheetHeight>(defaultHeight);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartY, setDragStartY] = useState(0);
    const sheetRef = useRef<HTMLDivElement>(null);
    
    // Handle escape key
    useEffect(() => {
      if (!open || !closeOnEscape) return;
      
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, closeOnEscape, onClose]);
    
    // Lock body scroll when open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);
    
    // Focus trap
    useEffect(() => {
      if (!open) return;
      
      const sheet = sheetRef.current;
      if (!sheet) return;
      
      // Find focusable elements
      const focusableElements = sheet.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      // Focus first element
      firstElement?.focus();
      
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };
      
      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }, [open]);
    
    // Drag handlers
    const handleDragStart = useCallback((clientY: number) => {
      if (!swipeable) return;
      setIsDragging(true);
      setDragStartY(clientY);
    }, [swipeable]);
    
    const handleDragEnd = useCallback((clientY: number) => {
      if (!isDragging) return;
      setIsDragging(false);
      
      const deltaY = clientY - dragStartY;
      const threshold = 50; // pixels
      
      // Swipe down
      if (deltaY > threshold) {
        if (currentHeight === 'full') {
          setCurrentHeight('half');
        } else if (currentHeight === 'half') {
          setCurrentHeight('peek');
        } else {
          onClose();
        }
      }
      // Swipe up
      else if (deltaY < -threshold) {
        if (currentHeight === 'peek') {
          setCurrentHeight('half');
        } else if (currentHeight === 'half') {
          setCurrentHeight('full');
        }
      }
    }, [isDragging, dragStartY, currentHeight, onClose]);
    
    // Touch handlers
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientY);
    }, [handleDragStart]);
    
    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
      handleDragEnd(e.changedTouches[0].clientY);
    }, [handleDragEnd]);
    
    // Mouse handlers (for desktop testing)
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      handleDragStart(e.clientY);
    }, [handleDragStart]);
    
    const handleMouseUp = useCallback((e: React.MouseEvent) => {
      handleDragEnd(e.clientY);
    }, [handleDragEnd]);
    
    if (!open) return null;
    
    const sheetClasses = clsx(
      styles.sheet,
      styles[`height-${currentHeight}`],
      {
        [styles.dragging]: isDragging,
      },
      className
    );

    return (
      <div className={styles.container}>
        {/* Overlay */}
        {showOverlay && (
          <div 
            className={styles.overlay}
            onClick={closeOnOverlayClick ? onClose : undefined}
            aria-hidden="true"
          />
        )}
        
        {/* Sheet */}
        <div
          ref={(node) => {
            // Handle both refs
            (sheetRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          className={sheetClasses}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'sheet-title' : undefined}
          {...props}
        >
          {/* Handle */}
          {showHandle && (
            <div 
              className={styles.handleArea}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <div className={styles.handle} />
            </div>
          )}
          
          {/* Header */}
          {(title || showCloseButton || headerActions) && (
            <div className={styles.header}>
              <div className={styles.headerContent}>
                {title && (
                  <div className={styles.titles}>
                    <h2 id="sheet-title" className={styles.title}>
                      {title}
                    </h2>
                    {subtitle && (
                      <p className={styles.subtitle}>{subtitle}</p>
                    )}
                  </div>
                )}
                
                <div className={styles.headerActions}>
                  {headerActions}
                  
                  {showCloseButton && (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconOnly
                      onClick={onClose}
                      aria-label="Lukk"
                      className={styles.closeButton}
                    >
                      <Icon name="close" size={20} />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Content */}
          <div 
            className={clsx(
              styles.content, 
              { [styles.noScroll]: disableScroll },
              contentClassName
            )}
          >
            {children}
          </div>
          
          {/* Footer */}
          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Sheet.displayName = 'Sheet';

export default Sheet;
