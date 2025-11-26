/**
 * TRÅKKE DESIGNSYSTEM
 * Card Component
 * 
 * Fleksibel kortkomponent for gruppering av relatert innhold.
 */

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Card.module.scss';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visuell variant */
  variant?: CardVariant;
  
  /** Intern padding */
  padding?: CardPadding;
  
  /** Gjør kortet klikkbart */
  clickable?: boolean;
  
  /** Callback ved klikk */
  onPress?: () => void;
  
  /** Deaktiver kortet */
  disabled?: boolean;
  
  /** Full bredde */
  fullWidth?: boolean;
  
  /** Barn (innhold) */
  children: ReactNode;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

/**
 * Card-komponent for Tråkke Design System
 * 
 * @example
 * // Enkel kort
 * <Card>
 *   <h3>Rutenavn</h3>
 *   <p>12.5 km • 450 m stigning</p>
 * </Card>
 * 
 * @example
 * // Klikkbart kort
 * <Card clickable onPress={handleClick}>
 *   <RoutePreview />
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'md',
      clickable = false,
      onPress,
      disabled = false,
      fullWidth = false,
      children,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      onClick?.(e);
      onPress?.();
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled || !clickable) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPress?.();
      }
    };
    
    const cardClasses = clsx(
      styles.card,
      styles[`variant-${variant}`],
      styles[`padding-${padding}`],
      {
        [styles.clickable]: clickable,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
      },
      className
    );

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={clickable ? handleClick : onClick}
        onKeyDown={handleKeyDown}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-disabled={clickable && disabled ? true : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Sub-components for composition
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={clsx(styles.header, className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={clsx(styles.content, className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={clsx(styles.footer, className)} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

export default Card;
