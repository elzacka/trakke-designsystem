/**
 * TRÅKKE DESIGNSYSTEM
 * Text Component - Typography primitive
 */

import React, { forwardRef, ElementType, ComponentPropsWithRef } from 'react';
import { clsx } from 'clsx';
import styles from './Text.module.scss';

export type TextVariant = 
  | 'display-lg' | 'display-md' | 'display-sm'
  | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4'
  | 'body-lg' | 'body-md' | 'body-sm'
  | 'label-lg' | 'label-md' | 'label-sm'
  | 'caption';

export type TextColor = 'default' | 'muted' | 'soft' | 'brand' | 'success' | 'warning' | 'danger' | 'inherit';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right';

type TextOwnProps<T extends ElementType> = {
  as?: T;
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
};

type TextProps<T extends ElementType> = TextOwnProps<T> & Omit<ComponentPropsWithRef<T>, keyof TextOwnProps<T>>;

const defaultElements: Record<TextVariant, ElementType> = {
  'display-lg': 'h1', 'display-md': 'h1', 'display-sm': 'h2',
  'heading-1': 'h1', 'heading-2': 'h2', 'heading-3': 'h3', 'heading-4': 'h4',
  'body-lg': 'p', 'body-md': 'p', 'body-sm': 'p',
  'label-lg': 'span', 'label-md': 'span', 'label-sm': 'span',
  'caption': 'span',
};

function TextComponent<T extends ElementType = 'span'>(
  { as, variant = 'body-md', color = 'default', weight, align, truncate = false, className, ...props }: TextProps<T>,
  ref: React.ForwardedRef<Element>
) {
  const Component = as || defaultElements[variant] || 'span';
  
  const textClasses = clsx(
    styles.text,
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    weight && styles[`weight-${weight}`],
    align && styles[`align-${align}`],
    { [styles.truncate]: truncate },
    className
  );

  return <Component ref={ref} className={textClasses} {...props} />;
}

export const Text = forwardRef(TextComponent) as <T extends ElementType = 'span'>(
  props: TextProps<T> & { ref?: React.ForwardedRef<Element> }
) => React.ReactElement | null;

export default Text;
