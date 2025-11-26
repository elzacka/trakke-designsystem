/**
 * TRÅKKE DESIGNSYSTEM
 * Spinner Component
 * 
 * Loading-indikator med flere størrelser og varianter.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './Spinner.module.scss';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export type SpinnerVariant = 'default' | 'brand' | 'white' | 'muted';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Størrelse på spinneren */
  size?: SpinnerSize;
  
  /** Fargevariant */
  variant?: SpinnerVariant;
  
  /** Tilgjengelighetsmerkelapp */
  label?: string;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

// Størrelse mapping
const sizeMap: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

/**
 * Spinner-komponent for Tråkke Design System
 * 
 * @example
 * // Standard spinner
 * <Spinner />
 * 
 * @example
 * // Stor spinner med merkelapp
 * <Spinner size="lg" label="Laster inn kart..." />
 * 
 * @example
 * // Hvit spinner for mørk bakgrunn
 * <Spinner variant="white" size="sm" />
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'md',
      variant = 'default',
      label = 'Laster...',
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Beregn pikselstørrelse
    const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 20;
    
    const combinedStyle: React.CSSProperties = {
      width: pixelSize,
      height: pixelSize,
      ...style,
    };
    
    const spinnerClasses = clsx(
      styles.spinner,
      styles[`variant-${variant}`],
      className
    );

    return (
      <div
        ref={ref}
        className={spinnerClasses}
        style={combinedStyle}
        role="status"
        aria-label={label}
        {...props}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.track}
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
          />
          <circle
            className={styles.indicator}
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.srOnly}>{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
