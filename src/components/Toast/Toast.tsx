/**
 * TRÅKKE DESIGNSYSTEM
 * Toast Component - Notification system
 */

import React, { forwardRef, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Icon, IconName } from '../Icon';
import { Button } from '../Button';
import styles from './Toast.module.scss';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  title?: string;
  message: string;
  icon?: IconName;
  showIcon?: boolean;
  dismissible?: boolean;
  duration?: number;
  onDismiss?: () => void;
  action?: { label: string; onClick: () => void };
  className?: string;
}

const defaultIcons: Record<ToastVariant, IconName> = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ variant = 'info', title, message, icon, showIcon = true, dismissible = true, duration, onDismiss, action, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      if (duration && duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          onDismiss?.();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss]);

    if (!isVisible) return null;

    const handleDismiss = () => { setIsVisible(false); onDismiss?.(); };

    const toastClasses = clsx(styles.toast, styles[`variant-${variant}`], className);

    return (
      <div ref={ref} className={toastClasses} role="alert" aria-live="polite" {...props}>
        {showIcon && <Icon name={icon || defaultIcons[variant]} size={20} className={styles.icon} />}
        <div className={styles.content}>
          {title && <p className={styles.title}>{title}</p>}
          <p className={styles.message}>{message}</p>
        </div>
        {action && <Button variant="tertiary" size="sm" onClick={action.onClick}>{action.label}</Button>}
        {dismissible && (
          <Button variant="ghost" size="sm" iconOnly onClick={handleDismiss} aria-label="Lukk">
            <Icon name="close" size={16} />
          </Button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';
export default Toast;
