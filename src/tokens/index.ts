/**
 * TRÅKKE DESIGN SYSTEM
 * Design Tokens (JavaScript/TypeScript)
 * 
 * Programmatic access to design tokens for use in JavaScript/TypeScript.
 * For CSS usage, import the SCSS files or use CSS custom properties.
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Brand
  brand: '#3e4533',
  brandLight: '#4d5640',
  brandDark: '#2f3427',
  brandTint: '#e8eae4',
  
  // Neutrals
  bg: '#fafaf7',
  surface: '#ffffff',
  surfaceSubtle: '#f5f5f2',
  text: '#1a1d1b',
  textMuted: '#4a4f4c',
  textSoft: '#6b716e',
  
  // Borders
  border: '#e0e2dd',
  borderSubtle: '#ebeee9',
  borderStrong: '#c8ccc5',
  
  // Functional
  blue: '#1e6ce0',
  blueLight: '#e8f1fc',
  blueDark: '#1555b5',
  
  red: '#d0443e',
  redLight: '#fbeaea',
  redDark: '#a63632',
  
  green: '#2e9e5b',
  greenLight: '#e6f5ec',
  greenDark: '#247a47',
  
  yellow: '#e6a817',
  yellowLight: '#fcf5e3',
  yellowDark: '#b88613',
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '32px',
  8: '40px',
  9: '48px',
  10: '56px',
  11: '64px',
  12: '80px',
  13: '96px',
  14: '128px',
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const fontFamily = {
  primary: "'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace",
} as const;

export const fontSize = {
  xs: '11px',
  sm: '12px',
  base: '14px',
  md: '15px',
  lg: '16px',
  xl: '18px',
  '2xl': '20px',
  '3xl': '24px',
  '4xl': '28px',
  '5xl': '32px',
  '6xl': '40px',
  '7xl': '48px',
} as const;

export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeight = {
  tight: 1.2,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.6,
  loose: 1.75,
} as const;

// ============================================================================
// BORDERS & RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
} as const;

export const borderWidth = {
  0: '0',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(62, 69, 51, 0.08)',
  sm: '0 1px 3px 0 rgba(62, 69, 51, 0.08), 0 1px 2px -1px rgba(62, 69, 51, 0.08)',
  md: '0 4px 6px -1px rgba(62, 69, 51, 0.12), 0 2px 4px -2px rgba(62, 69, 51, 0.08)',
  lg: '0 10px 15px -3px rgba(62, 69, 51, 0.12), 0 4px 6px -4px rgba(62, 69, 51, 0.08)',
  xl: '0 20px 25px -5px rgba(62, 69, 51, 0.16), 0 8px 10px -6px rgba(62, 69, 51, 0.12)',
  '2xl': '0 25px 50px -12px rgba(26, 29, 27, 0.24)',
  focus: '0 0 0 3px rgba(30, 108, 224, 0.4)',
} as const;

// ============================================================================
// ANIMATION
// ============================================================================

export const duration = {
  instant: '0ms',
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '400ms',
  slowest: '500ms',
} as const;

export const easing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: '0',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

export const zIndex = {
  base: 0,
  content: 1,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  mapControls: 400,
  header: 500,
  fab: 600,
  drawer: 700,
  sheet: 800,
  modalBackdrop: 900,
  modal: 1000,
  popover: 1100,
  tooltip: 1200,
  notification: 1300,
  toast: 1400,
  loading: 9000,
  max: 9999,
} as const;
