/**
 * TRÅKKE DESIGNSYSTEM
 * Badge Component
 * 
 * Liten etikett for status, telling eller kategorisering.
 */

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Icon, IconName } from '../Icon';
import styles from './Badge.module.scss';

export type BadgeVariant = 
  | 'default' 
  | 'brand' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visuell variant */
  variant?: BadgeVariant;
  
  /** Størrelse */
  size?: BadgeSize;
  
  /** Ikon før tekst */
  icon?: IconName;
  
  /** Prikk uten tekst */
  dot?: boolean;
  
  /** Avrundet pill-form */
  pill?: boolean;
  
  /** Outline stil */
  outline?: boolean;
  
  /** Innhold */
  children?: ReactNode;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      icon,
      dot = false,
      pill = true,
      outline = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const iconSize = size === 'sm' ? 12 : size === 'lg' ? 16 : 14;
    
    const badgeClasses = clsx(
      styles.badge,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      {
        [styles.dot]: dot,
        [styles.pill]: pill,
        [styles.outline]: outline,
        [styles.hasIcon]: icon,
      },
      className
    );

    if (dot) {
      return (
        <span ref={ref} className={badgeClasses} {...props}>
          <span className={styles.dotInner} />
        </span>
      );
    }

    return (
      <span ref={ref} className={badgeClasses} {...props}>
        {icon && <Icon name={icon} size={iconSize} className={styles.icon} />}
        {children && <span className={styles.content}>{children}</span>}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
