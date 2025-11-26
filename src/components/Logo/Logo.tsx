/**
 * TRÅKKE DESIGNSYSTEM
 * Logo Component - Tråkke brand logo
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon';
import styles from './Logo.module.scss';

export type LogoVariant = 'full' | 'icon' | 'text';
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LogoColor = 'brand' | 'white' | 'dark';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  variant?: LogoVariant;
  size?: LogoSize;
  color?: LogoColor;
  className?: string;
}

const sizeConfig = {
  xs: { icon: 20, text: 14 },
  sm: { icon: 24, text: 16 },
  md: { icon: 28, text: 18 },
  lg: { icon: 32, text: 22 },
  xl: { icon: 40, text: 28 },
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ variant = 'full', size = 'md', color = 'brand', className, ...props }, ref) => {
    const config = sizeConfig[size];
    
    const logoClasses = clsx(
      styles.logo,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`color-${color}`],
      className
    );

    return (
      <div ref={ref} className={logoClasses} aria-label="Tråkke" {...props}>
        {variant !== 'text' && (
          <Icon 
            name="forest" 
            size={config.icon} 
            weight={200}
            grade={-25}
            className={styles.icon} 
            aria-hidden="true"
          />
        )}
        {variant !== 'icon' && (
          <span className={styles.text} style={{ fontSize: config.text }}>
            Tråkke
          </span>
        )}
      </div>
    );
  }
);

Logo.displayName = 'Logo';
export default Logo;
