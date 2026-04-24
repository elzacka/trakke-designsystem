/**
 * TRÅKKE DESIGNSYSTEM
 * Checkbox Component
 */

import React, { forwardRef, InputHTMLAttributes, useEffect, useId, useRef } from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon';
import styles from './Checkbox.module.scss';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Størrelse */
  size?: CheckboxSize;
  
  /** Ledetekst */
  label?: string;
  
  /** Hjelpetekst */
  helperText?: string;
  
  /** Feilmelding */
  error?: string | boolean;
  
  /** Delvis avkrysset (indeterminate) */
  indeterminate?: boolean;
  
  /** Ekstra CSS-klasser */
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      indeterminate = false,
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
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const el = internalRef.current;
      if (el) el.indeterminate = indeterminate;
    }, [indeterminate]);
    
    const containerClasses = clsx(
      styles.container,
      styles[`size-${size}`],
      {
        [styles.disabled]: disabled,
        [styles.hasError]: hasError,
      },
      className
    );

    return (
      <div className={containerClasses}>
        <label className={styles.label} htmlFor={id}>
          <input
            ref={(node) => {
              internalRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            type="checkbox"
            id={id}
            disabled={disabled}
            className={styles.input}
            aria-invalid={hasError}
            aria-checked={indeterminate ? 'mixed' : undefined}
            aria-describedby={
              hasError && typeof error === 'string' ? helperId
              : helperText ? helperId
              : undefined
            }
            {...props}
          />
          <span className={styles.checkbox}>
            <Icon 
              name={indeterminate ? 'remove' : 'check'} 
              size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14}
              className={styles.checkIcon}
            />
          </span>
          {label && <span className={styles.labelText}>{label}</span>}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
