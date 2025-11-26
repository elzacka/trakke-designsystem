/**
 * Tråkke Design System – Nordisk Ro
 * IconButton Component
 */

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './IconButton.css';

export type IconButtonVariant = 'default' | 'primary' | 'ghost' | 'destructive';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: IconButtonVariant;
  /** Button size */
  size?: IconButtonSize;
  /** Icon element */
  icon: ReactNode;
  /** Accessible label (required for icon-only buttons) */
  'aria-label': string;
  /** Loading state */
  loading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      icon,
      loading = false,
      className = '',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classes = [
      'trk-icon-button',
      `trk-icon-button--${variant}`,
      `trk-icon-button--${size}`,
      loading && 'trk-icon-button--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <span className="trk-icon-button__spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="31.4 31.4"
              />
            </svg>
          </span>
        ) : (
          <span className="trk-icon-button__icon" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
