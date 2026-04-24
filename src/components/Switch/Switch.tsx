/**
 * TRÅKKE DESIGNSYSTEM
 * Switch Component
 */

import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import { clsx } from 'clsx';
import styles from './Switch.module.scss';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: SwitchSize;
  label?: string;
  helperText?: string;
  error?: string | boolean;
  labelPosition?: 'left' | 'right';
  className?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      labelPosition = 'right',
      disabled = false,
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const hasError = Boolean(error);

    const containerClasses = clsx(
      styles.container,
      styles[`size-${size}`],
      styles[`label-${labelPosition}`],
      {
        [styles.disabled]: disabled,
        [styles.hasError]: hasError,
      },
      className
    );

    return (
      <div className={containerClasses}>
        <label className={styles.label} htmlFor={id}>
          {labelPosition === 'left' && label && <span className={styles.labelText}>{label}</span>}
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={id}
            disabled={disabled}
            className={styles.input}
            aria-invalid={hasError || undefined}
            aria-describedby={
              hasError && typeof error === 'string' ? helperId
              : helperText ? helperId
              : undefined
            }
            {...props}
          />
          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>
          {labelPosition === 'right' && label && <span className={styles.labelText}>{label}</span>}
        </label>
        {(helperText || (hasError && typeof error === 'string')) && (
          <p
            id={helperId}
            className={clsx(styles.helperText, { [styles.errorText]: hasError })}
          >
            {hasError && typeof error === 'string' ? error : helperText}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
