/**
 * TRÅKKE DESIGNSYSTEM
 * Input Component
 * 
 * Fleksibel tekstinput med støtte for validering, ikoner og flere varianter.
 */

import React, { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { clsx } from 'clsx';
import { Icon, IconName } from '../Icon';
import styles from './Input.module.scss';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputVariant = 'default' | 'filled' | 'outlined';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Størrelse på input */
  size?: InputSize;
  
  /** Visuell variant */
  variant?: InputVariant;
  
  /** Ledetekst (label) */
  label?: string;
  
  /** Hjelpetekst under input */
  helperText?: string;
  
  /** Feilmelding (vises i stedet for hjelpetekst) */
  error?: string | boolean;
  
  /** Suksessmelding */
  success?: string | boolean;
  
  /** Ikon på venstre side */
  iconStart?: IconName;
  
  /** Ikon på høyre side */
  iconEnd?: IconName;
  
  /** Tilpasset innhold på venstre side */
  prefix?: ReactNode;
  
  /** Tilpasset innhold på høyre side */
  suffix?: ReactNode;
  
  /** Vis klareknapp når det er innhold */
  clearable?: boolean;
  
  /** Callback når klareknappen trykkes */
  onClear?: () => void;
  
  /** Full bredde */
  fullWidth?: boolean;
  
  /** Ekstra CSS-klasser */
  className?: string;
  
  /** Ekstra CSS-klasser for input-wrapper */
  wrapperClassName?: string;
}

/**
 * Input-komponent for Tråkke Design System
 * 
 * @example
 * // Enkel input
 * <Input label="Stedsnavn" placeholder="Søk etter sted..." />
 * 
 * @example
 * // Med ikon og hjelpetekst
 * <Input 
 *   label="Koordinater" 
 *   iconStart="location_on"
 *   helperText="Format: 59.9139° N, 10.7522° E"
 * />
 * 
 * @example
 * // Med feilmelding
 * <Input 
 *   label="E-post"
 *   type="email"
 *   error="Ugyldig e-postadresse"
 * />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      label,
      helperText,
      error,
      success,
      iconStart,
      iconEnd,
      prefix,
      suffix,
      clearable = false,
      onClear,
      fullWidth = false,
      disabled = false,
      required = false,
      className,
      wrapperClassName,
      id: providedId,
      value,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    
    // Determine state
    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;
    const hasValue = Boolean(value);
    
    // Icon sizes based on input size
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
    
    const containerClasses = clsx(
      styles.container,
      {
        [styles.fullWidth]: fullWidth,
      },
      wrapperClassName
    );
    
    const inputWrapperClasses = clsx(
      styles.inputWrapper,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      {
        [styles.hasError]: hasError,
        [styles.hasSuccess]: hasSuccess,
        [styles.disabled]: disabled,
        [styles.hasIconStart]: iconStart || prefix,
        [styles.hasIconEnd]: iconEnd || suffix || (clearable && hasValue),
      },
      className
    );

    return (
      <div className={containerClasses}>
        {/* Label */}
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        
        {/* Input wrapper */}
        <div className={inputWrapperClasses}>
          {/* Prefix / Start icon */}
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          {iconStart && !prefix && (
            <Icon 
              name={iconStart} 
              size={iconSize} 
              className={styles.iconStart}
              aria-hidden="true"
            />
          )}
          
          {/* Input */}
          <input
            ref={ref}
            id={id}
            className={styles.input}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            value={value}
            {...props}
          />
          
          {/* Clear button */}
          {clearable && hasValue && !disabled && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={onClear}
              aria-label="Tøm felt"
              tabIndex={-1}
            >
              <Icon name="close" size={16} />
            </button>
          )}
          
          {/* Suffix / End icon */}
          {suffix && <span className={styles.suffix}>{suffix}</span>}
          {iconEnd && !suffix && !(clearable && hasValue) && (
            <Icon 
              name={iconEnd} 
              size={iconSize} 
              className={styles.iconEnd}
              aria-hidden="true"
            />
          )}
        </div>
        
        {/* Helper text or error message */}
        {(hasError || helperText || hasSuccess) && (
          <div 
            id={hasError ? errorId : helperId}
            className={clsx(styles.helperText, {
              [styles.errorText]: hasError,
              [styles.successText]: hasSuccess,
            })}
            role={hasError ? 'alert' : undefined}
          >
            {hasError && typeof error === 'string' ? error : null}
            {hasSuccess && typeof success === 'string' ? success : null}
            {!hasError && !hasSuccess && helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
