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
  useId,
  useRef,
  useState
} from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon';
import { Button } from '../Button';
import styles from './Sheet.module.scss';

export type SheetHeight = 'auto' | 'peek' | 'half' | 'full';

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  defaultHeight?: SheetHeight;
  swipeable?: boolean;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  showHandle?: boolean;
  headerActions?: ReactNode;
  footer?: ReactNode;
  disableScroll?: boolean;
  contentClassName?: string;
  children: ReactNode;
  className?: string;
}

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
    const previousFocusRef = useRef<Element | null>(null);
    const titleId = useId();

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

    // Lock body scroll when open + restore focus on close
    useEffect(() => {
      if (open) {
        previousFocusRef.current = document.activeElement;
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
        const prev = previousFocusRef.current;
        if (prev instanceof HTMLElement) {
          prev.focus();
        }
      };
    }, [open]);

    // Focus trap
    useEffect(() => {
      if (!open) return;

      const sheet = sheetRef.current;
      if (!sheet) return;

      const focusableSelector =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

      const getFocusable = () => sheet.querySelectorAll<HTMLElement>(focusableSelector);

      // Focus first element
      const elements = getFocusable();
      elements[0]?.focus();

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        const focusable = getFocusable();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first?.focus();
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
      const threshold = 50;

      if (deltaY > threshold) {
        if (currentHeight === 'full') {
          setCurrentHeight('half');
        } else if (currentHeight === 'half') {
          setCurrentHeight('peek');
        } else {
          onClose();
        }
      } else if (deltaY < -threshold) {
        if (currentHeight === 'peek') {
          setCurrentHeight('half');
        } else if (currentHeight === 'half') {
          setCurrentHeight('full');
        }
      }
    }, [isDragging, dragStartY, currentHeight, onClose]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientY);
    }, [handleDragStart]);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
      handleDragEnd(e.changedTouches[0].clientY);
    }, [handleDragEnd]);

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
        {showOverlay && (
          <div
            className={styles.overlay}
            onClick={closeOnOverlayClick ? onClose : undefined}
            aria-hidden={true}
          />
        )}

        <div
          ref={(node) => {
            sheetRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          className={sheetClasses}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          {...props}
        >
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

          {(title || showCloseButton || headerActions) && (
            <div className={styles.header}>
              <div className={styles.headerContent}>
                {title && (
                  <div className={styles.titles}>
                    <h2 id={titleId} className={styles.title}>
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

          <div
            className={clsx(
              styles.content,
              { [styles.noScroll]: disableScroll },
              contentClassName
            )}
          >
            {children}
          </div>

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
