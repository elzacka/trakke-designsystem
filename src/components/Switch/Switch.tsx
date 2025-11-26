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
  labelPosition?: 'left' | 'right';
  className?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ size = 'md', label, helperText, labelPosition = 'right', disabled = false, className, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    
    const containerClasses = clsx(
      styles.container,
      styles[`size-${size}`],
      styles[`label-${labelPosition}`],
      { [styles.disabled]: disabled },
      className
    );

    return (
      <div className={containerClasses}>
        <label className={styles.label} htmlFor={id}>
          {labelPosition === 'left' && label && <span className={styles.labelText}>{label}</span>}
          <input ref={ref} type="checkbox" role="switch" id={id} disabled={disabled} className={styles.input} {...props} />
          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>
          {labelPosition === 'right' && label && <span className={styles.labelText}>{label}</span>}
        </label>
        {helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
