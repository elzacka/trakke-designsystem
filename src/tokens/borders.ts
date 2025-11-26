/**
 * Tråkke Design System – Nordisk Ro
 * Border Tokens
 *
 * Border radii and widths for consistent component styling.
 */

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const borderRadius = {
  /** No radius */
  none: '0',
  /** Small radius for tags, badges */
  sm: '6px',
  /** Medium radius for inputs, small cards */
  md: '8px',
  /** Large radius for buttons, cards */
  lg: '12px',
  /** Extra large for sheets, modals */
  xl: '16px',
  /** 2x large for bottom sheets */
  '2xl': '20px',
  /** 3x large for special surfaces */
  '3xl': '24px',
  /** Full radius for pills, avatars */
  full: '9999px',
} as const;

// =============================================================================
// BORDER WIDTH
// =============================================================================

export const borderWidth = {
  /** No border */
  '0': '0',
  /** Hairline border (1px) */
  '1': '1px',
  /** Standard border (2px) */
  '2': '2px',
  /** Thick border (3px) */
  '3': '3px',
  /** Heavy border (4px) */
  '4': '4px',
} as const;

// =============================================================================
// SEMANTIC BORDERS
// =============================================================================

export const semanticBorder = {
  /** Default border */
  default: `${borderWidth['1']} solid var(--trk-border)`,
  /** Strong border for emphasis */
  strong: `${borderWidth['1']} solid var(--trk-border-strong)`,
  /** Focus ring */
  focus: `${borderWidth['2']} solid var(--trk-blue)`,
  /** Error border */
  error: `${borderWidth['1']} solid var(--trk-red)`,
  /** Success border */
  success: `${borderWidth['1']} solid var(--trk-green)`,
  /** Transparent border for consistent sizing */
  transparent: `${borderWidth['1']} solid transparent`,
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const borderCssVars = {
  // Radius
  '--radius-none': borderRadius.none,
  '--radius-sm': borderRadius.sm,
  '--radius-md': borderRadius.md,
  '--radius-lg': borderRadius.lg,
  '--radius-xl': borderRadius.xl,
  '--radius-2xl': borderRadius['2xl'],
  '--radius-3xl': borderRadius['3xl'],
  '--radius-full': borderRadius.full,

  // Width
  '--border-0': borderWidth['0'],
  '--border-1': borderWidth['1'],
  '--border-2': borderWidth['2'],
  '--border-3': borderWidth['3'],
  '--border-4': borderWidth['4'],
} as const;

export type BorderRadius = keyof typeof borderRadius;
export type BorderWidth = keyof typeof borderWidth;
