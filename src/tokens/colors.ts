/**
 * Tråkke Design System – Nordisk Ro
 * Color Tokens
 *
 * Inspired by Norwegian nature: forests, paper-like neutrals,
 * and functional colors for outdoor navigation.
 */

// =============================================================================
// BRAND COLORS
// The forest greens that define Tråkke's identity
// =============================================================================

export const brand = {
  /** Primary brand color - Tråkke forest green */
  primary: '#3e4533',
  /** Softer variant for secondary UI elements */
  soft: '#606756',
  /** Light tint for backgrounds and subtle highlights */
  tint: '#e9ece6',
} as const;

// =============================================================================
// NEUTRAL COLORS
// Warm, paper-like neutrals without blue cast
// =============================================================================

export const neutral = {
  /** Pure white for surfaces */
  white: '#ffffff',
  /** Main app background - warm off-white */
  background: '#fafaf7',
  /** Cards, panels, overlays */
  surface: '#ffffff',
  /** Subtle background for inputs and disabled states */
  surfaceSubtle: '#f2f3f0',
  /** Standard borders */
  border: '#e4e5e1',
  /** Stronger borders for visual separation */
  borderStrong: '#c9ccc5',
  /** Darkest neutral for high contrast */
  black: '#0a0b0a',
} as const;

// =============================================================================
// TEXT COLORS
// Three levels of text contrast for clear hierarchy
// =============================================================================

export const text = {
  /** Primary text - headings, body copy */
  primary: '#1a1d1b',
  /** Secondary text - descriptions, subtitles */
  muted: '#4a4f47',
  /** Tertiary text - labels, help text, placeholders */
  soft: '#7c8278',
  /** Inverse text on dark backgrounds */
  inverse: '#ffffff',
} as const;

// =============================================================================
// FUNCTIONAL COLORS
// Semantic colors for specific UI purposes
// =============================================================================

export const functional = {
  /** GPS position, info states, links, focus rings */
  blue: '#1e6ce0',
  /** Waypoints, alerts, destructive actions, errors */
  red: '#d0443e',
  /** Success states, confirmations, completed actions */
  green: '#2e9e5b',
  /** Warnings, caution states */
  yellow: '#d4a012',
  /** Special POI marker (tilfluktsrom) */
  shelter: '#fbbf24',
} as const;

// =============================================================================
// FUNCTIONAL COLOR STATES
// Hover, active, and disabled variants
// =============================================================================

export const functionalStates = {
  blue: {
    hover: '#1a5ec4',
    active: '#1550a8',
    light: '#e8f1fc',
  },
  red: {
    hover: '#b93a35',
    active: '#a3332f',
    light: '#fdeaea',
  },
  green: {
    hover: '#278a4f',
    active: '#217644',
    light: '#e8f7ed',
  },
  yellow: {
    hover: '#b8890f',
    active: '#9c740d',
    light: '#fef9e8',
  },
} as const;

// =============================================================================
// OVERLAY COLORS
// Transparent layers for panels floating above map
// =============================================================================

export const overlay = {
  /** Strong overlay for bottom sheets and modals */
  strong: 'rgba(255, 255, 255, 0.92)',
  /** Soft overlay for subtle backgrounds */
  soft: 'rgba(250, 250, 246, 0.6)',
  /** Selection highlight for routes and areas */
  selection: 'rgba(62, 69, 51, 0.18)',
  /** Dark overlay for backdrops */
  backdrop: 'rgba(10, 11, 10, 0.5)',
  /** Scrim for image overlays */
  scrim: 'rgba(10, 11, 10, 0.3)',
} as const;

// =============================================================================
// DARK MODE COLORS (Future enhancement)
// =============================================================================

export const dark = {
  brand: {
    primary: '#8b9a7a',
    soft: '#a3b194',
    tint: '#2a2d26',
  },
  neutral: {
    background: '#121414',
    surface: '#1a1d1b',
    surfaceSubtle: '#222524',
    border: '#333633',
    borderStrong: '#444844',
  },
  text: {
    primary: '#f0f1ef',
    muted: '#b8bab5',
    soft: '#8a8d87',
  },
} as const;

// =============================================================================
// COLOR TOKENS OBJECT
// Complete color system export
// =============================================================================

export const colors = {
  brand,
  neutral,
  text,
  functional,
  functionalStates,
  overlay,
  dark,
} as const;

// =============================================================================
// CSS CUSTOM PROPERTY NAMES
// For generating CSS variables
// =============================================================================

export const colorCssVars = {
  // Brand
  '--trk-brand': brand.primary,
  '--trk-brand-soft': brand.soft,
  '--trk-brand-tint': brand.tint,

  // Neutrals
  '--trk-white': neutral.white,
  '--trk-bg': neutral.background,
  '--trk-surface': neutral.surface,
  '--trk-surface-subtle': neutral.surfaceSubtle,
  '--trk-border': neutral.border,
  '--trk-border-strong': neutral.borderStrong,
  '--trk-black': neutral.black,

  // Text
  '--trk-text': text.primary,
  '--trk-text-muted': text.muted,
  '--trk-text-soft': text.soft,
  '--trk-text-inverse': text.inverse,

  // Functional
  '--trk-blue': functional.blue,
  '--trk-red': functional.red,
  '--trk-green': functional.green,
  '--trk-yellow': functional.yellow,
  '--trk-shelter': functional.shelter,

  // Functional states
  '--trk-blue-hover': functionalStates.blue.hover,
  '--trk-blue-active': functionalStates.blue.active,
  '--trk-blue-light': functionalStates.blue.light,
  '--trk-red-hover': functionalStates.red.hover,
  '--trk-red-active': functionalStates.red.active,
  '--trk-red-light': functionalStates.red.light,
  '--trk-green-hover': functionalStates.green.hover,
  '--trk-green-active': functionalStates.green.active,
  '--trk-green-light': functionalStates.green.light,

  // Overlays
  '--trk-overlay-strong': overlay.strong,
  '--trk-overlay-soft': overlay.soft,
  '--trk-selection': overlay.selection,
  '--trk-backdrop': overlay.backdrop,
  '--trk-scrim': overlay.scrim,
} as const;

export type ColorToken = keyof typeof colorCssVars;
export type BrandColor = keyof typeof brand;
export type NeutralColor = keyof typeof neutral;
export type TextColor = keyof typeof text;
export type FunctionalColor = keyof typeof functional;
