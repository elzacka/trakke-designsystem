/**
 * TRÅKKE DESIGNSYSTEM
 * FAB (Floating Action Button) Component
 * 
 * Primær handlingsknapp som flyter over kartet.
 * Støtter utvidbar meny med grupperte elementer.
 */

import React, { 
  forwardRef, 
  HTMLAttributes, 
  useCallback, 
  useEffect, 
  useState,
  useRef
} from 'react';
import { clsx } from 'clsx';
import { Icon, IconName } from '../Icon';
import styles from './FAB.module.scss';

export type FABSize = 'sm' | 'md' | 'lg';

export type FABVariant = 'primary' | 'secondary' | 'surface';

export type FABPosition = 
  | 'bottom-right' 
  | 'bottom-left' 
  | 'bottom-center'
  | 'top-right' 
  | 'top-left';

export interface FABMenuItem {
  /** Unik ID */
  id: string;
  
  /** Ikon for elementet */
  icon: IconName;
  
  /** Ledetekst */
  label: string;
  
  /** Callback ved klikk */
  onClick: () => void;
  
  /** Deaktiver elementet */
  disabled?: boolean;
  
  /** Skjul elementet */
  hidden?: boolean;
  
  /** Gruppe-ID for visuell gruppering */
  group?: string;
}

export interface FABProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Ikon når lukket */
  icon?: IconName;
  
  /** Ikon når åpen (standard: close) */
  iconOpen?: IconName;
  
  /** Størrelse */
  size?: FABSize;
  
  /** Fargevariant */
  variant?: FABVariant;
  
  /** Posisjon på skjermen */
  position?: FABPosition;
  
  /** Meny-elementer (om tom, FAB er en enkel knapp) */
  items?: FABMenuItem[];
  
  /** Callback ved klikk (om ingen items) */
  onClick?: () => void;
  
  /** Om menyen er åpen */
  open?: boolean;
  
  /** Callback når meny åpnes/lukkes */
  onOpenChange?: (open: boolean) => void;
  
  /** Tilgjengelighetsmerkelapp */
  'aria-label'?: string;
  
  /** Vis etiketter ved siden av ikoner */
  showLabels?: boolean;
  
  /** Deaktiver haptisk feedback */
  disableHaptics?: boolean;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

// Stagger delay for menu items (ms)
const STAGGER_DELAY = 30;

/**
 * FAB-komponent for Tråkke Design System
 */
export const FAB = forwardRef<HTMLDivElement, FABProps>(
  (
    {
      icon = 'menu',
      iconOpen = 'close',
      size = 'md',
      variant = 'primary',
      position = 'bottom-right',
      items = [],
      onClick,
      open: controlledOpen,
      onOpenChange,
      'aria-label': ariaLabel,
      showLabels = true,
      disableHaptics = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;
    
    const fabRef = useRef<HTMLButtonElement>(null);
    
    const toggleMenu = useCallback(() => {
      const newValue = !isOpen;
      
      if (!isControlled) {
        setInternalOpen(newValue);
      }
      
      onOpenChange?.(newValue);
      
      if (!disableHaptics && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }, [isOpen, isControlled, onOpenChange, disableHaptics]);
    
    const handleMainClick = useCallback(() => {
      if (items.length > 0) {
        toggleMenu();
      } else {
        onClick?.();
        
        if (!disableHaptics && 'vibrate' in navigator) {
          navigator.vibrate(10);
        }
      }
    }, [items.length, toggleMenu, onClick, disableHaptics]);
    
    const handleItemClick = useCallback((item: FABMenuItem) => {
      if (item.disabled) return;
      
      item.onClick();
      toggleMenu();
      
      if (!disableHaptics && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }, [toggleMenu, disableHaptics]);
    
    useEffect(() => {
      if (!isOpen) return;
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          toggleMenu();
          fabRef.current?.focus();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, toggleMenu]);
    
    useEffect(() => {
      if (!isOpen) return;
      
      const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(`.${styles.container}`)) {
          toggleMenu();
        }
      };
      
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }, [isOpen, toggleMenu]);
    
    const groupedItems = items.reduce((acc, item) => {
      if (item.hidden) return acc;
      const group = item.group || 'default';
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {} as Record<string, FABMenuItem[]>);
    
    const groups = Object.entries(groupedItems);
    let itemIndex = 0;
    
    const containerClasses = clsx(
      styles.container,
      styles[`position-${position}`],
      className
    );
    
    const mainButtonClasses = clsx(
      styles.mainButton,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      { [styles.open]: isOpen }
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {items.length > 0 && (
          <div 
            className={clsx(styles.menu, { [styles.menuOpen]: isOpen })}
            role="menu"
            aria-hidden={!isOpen}
          >
            {groups.map(([groupName, groupItems]) => (
              <div key={groupName} className={styles.group}>
                {groupItems.map((item) => {
                  const currentIndex = itemIndex++;
                  
                  return (
                    <button
                      key={item.id}
                      className={clsx(styles.menuItem, { [styles.disabled]: item.disabled })}
                      onClick={() => handleItemClick(item)}
                      disabled={item.disabled}
                      role="menuitem"
                      tabIndex={isOpen ? 0 : -1}
                      style={{
                        animationDelay: isOpen ? `${currentIndex * STAGGER_DELAY}ms` : undefined,
                      }}
                    >
                      <span className={styles.menuItemIcon}>
                        <Icon name={item.icon} size={20} />
                      </span>
                      {showLabels && (
                        <span className={styles.menuItemLabel}>{item.label}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}
        
        <button
          ref={fabRef}
          type="button"
          className={mainButtonClasses}
          onClick={handleMainClick}
          aria-label={ariaLabel || (items.length > 0 ? (isOpen ? 'Lukk meny' : 'Åpne meny') : undefined)}
          aria-expanded={items.length > 0 ? isOpen : undefined}
          aria-haspopup={items.length > 0 ? 'menu' : undefined}
        >
          <Icon 
            name={isOpen ? iconOpen : icon} 
            size={size === 'sm' ? 20 : size === 'lg' ? 28 : 24}
            className={styles.icon}
          />
        </button>
      </div>
    );
  }
);

FAB.displayName = 'FAB';

export default FAB;
