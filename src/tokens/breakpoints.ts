/**
 * Tråkke Design System – Nordisk Ro
 * Breakpoint Tokens
 *
 * Mobile-first responsive breakpoints optimized for outdoor use.
 */

// =============================================================================
// BREAKPOINTS
// Mobile-first: styles apply from this width and up
// =============================================================================

export const breakpoint = {
  /** Extra small - small phones (320px) */
  xs: '320px',
  /** Small - standard phones (480px) */
  sm: '480px',
  /** Medium - large phones, small tablets (640px) */
  md: '640px',
  /** Large - tablets (768px) */
  lg: '768px',
  /** Extra large - large tablets (1024px) */
  xl: '1024px',
  /** 2x large - desktop (1280px) */
  '2xl': '1280px',
  /** 3x large - large desktop (1536px) */
  '3xl': '1536px',
} as const;

// =============================================================================
// BREAKPOINT VALUES (numeric)
// For JavaScript calculations
// =============================================================================

export const breakpointValue = {
  xs: 320,
  sm: 480,
  md: 640,
  lg: 768,
  xl: 1024,
  '2xl': 1280,
  '3xl': 1536,
} as const;

// =============================================================================
// MEDIA QUERIES
// Pre-built media query strings
// =============================================================================

export const mediaQuery = {
  /** Mobile only (up to 767px) */
  mobile: `(max-width: ${breakpointValue.lg - 1}px)`,
  /** Mobile and up (320px+) */
  mobileUp: `(min-width: ${breakpoint.xs})`,
  /** Small phones only */
  smallPhone: `(max-width: ${breakpointValue.sm - 1}px)`,
  /** Tablet portrait (768px - 1023px) */
  tablet: `(min-width: ${breakpoint.lg}) and (max-width: ${breakpointValue.xl - 1}px)`,
  /** Tablet and up (768px+) */
  tabletUp: `(min-width: ${breakpoint.lg})`,
  /** Desktop (1024px+) */
  desktop: `(min-width: ${breakpoint.xl})`,
  /** Large desktop (1280px+) */
  largeDesktop: `(min-width: ${breakpoint['2xl']})`,
  /** Touch device */
  touch: '(hover: none) and (pointer: coarse)',
  /** Mouse/trackpad device */
  mouse: '(hover: hover) and (pointer: fine)',
  /** Reduced motion preference */
  reducedMotion: '(prefers-reduced-motion: reduce)',
  /** Dark mode preference */
  darkMode: '(prefers-color-scheme: dark)',
  /** Light mode preference */
  lightMode: '(prefers-color-scheme: light)',
  /** High contrast mode */
  highContrast: '(prefers-contrast: high)',
  /** Landscape orientation */
  landscape: '(orientation: landscape)',
  /** Portrait orientation */
  portrait: '(orientation: portrait)',
} as const;

// =============================================================================
// CONTAINER QUERIES
// For component-level responsiveness
// =============================================================================

export const containerQuery = {
  /** Small container (< 320px) */
  sm: '(max-width: 320px)',
  /** Medium container (320px - 480px) */
  md: '(min-width: 320px) and (max-width: 480px)',
  /** Large container (> 480px) */
  lg: '(min-width: 480px)',
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const breakpointCssVars = {
  '--breakpoint-xs': breakpoint.xs,
  '--breakpoint-sm': breakpoint.sm,
  '--breakpoint-md': breakpoint.md,
  '--breakpoint-lg': breakpoint.lg,
  '--breakpoint-xl': breakpoint.xl,
  '--breakpoint-2xl': breakpoint['2xl'],
  '--breakpoint-3xl': breakpoint['3xl'],
} as const;

export type Breakpoint = keyof typeof breakpoint;
export type MediaQuery = keyof typeof mediaQuery;
