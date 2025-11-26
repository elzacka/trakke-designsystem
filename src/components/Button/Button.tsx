/**
 * TRÅKKE DESIGNSYSTEM
 * Button Component
 * 
 * En fleksibel knapp-komponent med flere varianter, størrelser og states.
 * Støtter ikoner, loading state, og full tilgjengelighet.
 */

import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Icon, IconName } from '../Icon';
import { Spinner } from '../Spinner';
import styles from './Button.module.scss';

export type ButtonVariant = 
  | 'primary'      // Hovedhandling - brand-grønn
  | 'secondary'    // Sekundærhandling - outline
  | 'tertiary'     // Tertiær - ghost/text
  | 'danger'       // Farlig handling - rød
  | 'success'      // Bekreftelse - grønn
  | 'ghost';       // Minimal styling

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  /** Visuell variant av knappen */
  variant?: ButtonVariant;
  
  /** Størrelse på knappen */
  size?: ButtonSize;
  
  /** Gjør knappen full bredde */
  fullWidth?: boolean;
  
  /** Ikon som vises før teksten */
  iconStart?: IconName;
  
  /** Ikon som vises etter teksten */
  iconEnd?: IconName;
  
  /** Kun ikon, ingen tekst (krever aria-label) */
  iconOnly?: boolean;
  
  /** Viser loading-spinner */
  loading?: boolean;
  
  /** Tekst som vises under loading */
  loadingText?: string;
  
  /** Deaktiverer knappen */
  disabled?: boolean;
  
  /** Innhold i knappen */
  children?: ReactNode;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

/**
 * Button-komponent for Tråkke Design System
 * 
 * @example
 * // Primær knapp
 * <Button variant="primary">Lagre rute</Button>
 * 
 * @example
 * // Knapp med ikon
 * <Button variant="secondary" iconStart="add">Legg til punkt</Button>
 * 
 * @example
 * // Kun ikon
 * <Button variant="ghost" iconOnly aria-label="Lukk">
 *   <Icon name="close" />
 * </Button>
 * 
 * @example
 * // Loading state
 * <Button loading loadingText="Lagrer...">Lagre</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      iconStart,
      iconEnd,
      iconOnly = false,
      loading = false,
      loadingText,
      disabled = false,
      children,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    
    // Beregn ikonstørrelse basert på knappstørrelse
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
    
    const buttonClasses = clsx(
      styles.button,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      {
        [styles.fullWidth]: fullWidth,
        [styles.iconOnly]: iconOnly,
        [styles.loading]: loading,
        [styles.disabled]: isDisabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <span className={styles.loadingSpinner}>
            <Spinner size={iconSize} />
          </span>
        )}
        
        {/* Start icon */}
        {iconStart && !loading && (
          <Icon 
            name={iconStart} 
            size={iconSize} 
            className={styles.iconStart}
            aria-hidden="true"
          />
        )}
        
        {/* Button content */}
        {!iconOnly && (
          <span className={styles.content}>
            {loading && loadingText ? loadingText : children}
          </span>
        )}
        
        {/* End icon */}
        {iconEnd && !loading && (
          <Icon 
            name={iconEnd} 
            size={iconSize} 
            className={styles.iconEnd}
            aria-hidden="true"
          />
        )}
        
        {/* Icon only content */}
        {iconOnly && children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
