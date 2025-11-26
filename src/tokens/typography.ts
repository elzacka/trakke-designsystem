/**
 * Tråkke Design System – Nordisk Ro
 * Typography Tokens
 *
 * Typography system using Exo 2 for brand expression
 * and system fonts for optimal performance and privacy.
 */

// =============================================================================
// FONT FAMILIES
// =============================================================================

export const fontFamily = {
  /** Brand font - Exo 2 for headings and brand elements */
  brand: "'Exo 2', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  /** Body font - optimized system font stack */
  body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
  /** Monospace for coordinates, codes, and technical data */
  mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
  /** Icon font - Material Symbols Outlined */
  icons: "'Material Symbols Outlined'",
} as const;

// =============================================================================
// FONT SIZES
// REM-based for accessibility (base: 16px)
// =============================================================================

export const fontSize = {
  /** 10px - Micro labels, badges */
  '2xs': '0.625rem',
  /** 12px - Small labels, captions */
  xs: '0.75rem',
  /** 13px - Help text, metadata */
  sm: '0.8125rem',
  /** 14px - Secondary body text */
  md: '0.875rem',
  /** 15px - Default body text */
  base: '0.9375rem',
  /** 16px - Enhanced body, small headings */
  lg: '1rem',
  /** 18px - Section headings */
  xl: '1.125rem',
  /** 20px - Page headings */
  '2xl': '1.25rem',
  /** 24px - Large headings */
  '3xl': '1.5rem',
  /** 28px - Display headings */
  '4xl': '1.75rem',
  /** 32px - Hero headings */
  '5xl': '2rem',
  /** 40px - Giant display */
  '6xl': '2.5rem',
} as const;

// =============================================================================
// FONT WEIGHTS
// =============================================================================

export const fontWeight = {
  /** Light - brand name, elegant display */
  light: '300',
  /** Normal - body text */
  normal: '400',
  /** Medium - buttons, labels, emphasis */
  medium: '500',
  /** Semibold - headings, important text */
  semibold: '600',
  /** Bold - strong emphasis */
  bold: '700',
} as const;

// =============================================================================
// LINE HEIGHTS
// =============================================================================

export const lineHeight = {
  /** Tight - headings, single-line elements */
  none: '1',
  /** Compact - buttons, badges */
  tight: '1.2',
  /** Snug - short text blocks */
  snug: '1.35',
  /** Normal - body text */
  normal: '1.5',
  /** Relaxed - long-form content */
  relaxed: '1.625',
  /** Loose - very readable text */
  loose: '1.75',
} as const;

// =============================================================================
// LETTER SPACING
// =============================================================================

export const letterSpacing = {
  /** Tighter - large headings */
  tighter: '-0.02em',
  /** Tight - medium headings */
  tight: '-0.01em',
  /** Normal - body text */
  normal: '0',
  /** Wide - small caps, labels */
  wide: '0.02em',
  /** Wider - uppercase labels */
  wider: '0.04em',
  /** Widest - all-caps badges */
  widest: '0.08em',
} as const;

// =============================================================================
// TEXT STYLES
// Pre-composed typography styles
// =============================================================================

export const textStyle = {
  // Display styles (brand font)
  displayLarge: {
    fontFamily: fontFamily.brand,
    fontSize: fontSize['6xl'],
    fontWeight: fontWeight.light,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tighter,
  },
  displayMedium: {
    fontFamily: fontFamily.brand,
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.light,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  displaySmall: {
    fontFamily: fontFamily.brand,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },

  // Heading styles
  headingLarge: {
    fontFamily: fontFamily.body,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  headingMedium: {
    fontFamily: fontFamily.body,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.normal,
  },
  headingSmall: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Title styles
  titleLarge: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  titleMedium: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  titleSmall: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Body styles
  bodyLarge: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodyMedium: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.md,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Label styles
  labelLarge: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
  labelMedium: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
  labelSmall: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.wider,
  },

  // Caption & Help text
  caption: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  overline: {
    fontFamily: fontFamily.body,
    fontSize: fontSize['2xs'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase' as const,
  },

  // Monospace styles
  code: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  codeSmall: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const typographyCssVars = {
  // Font families
  '--trk-font-brand': fontFamily.brand,
  '--trk-font-body': fontFamily.body,
  '--trk-font-mono': fontFamily.mono,
  '--trk-font-icons': fontFamily.icons,

  // Font sizes
  '--trk-text-2xs': fontSize['2xs'],
  '--trk-text-xs': fontSize.xs,
  '--trk-text-sm': fontSize.sm,
  '--trk-text-md': fontSize.md,
  '--trk-text-base': fontSize.base,
  '--trk-text-lg': fontSize.lg,
  '--trk-text-xl': fontSize.xl,
  '--trk-text-2xl': fontSize['2xl'],
  '--trk-text-3xl': fontSize['3xl'],
  '--trk-text-4xl': fontSize['4xl'],
  '--trk-text-5xl': fontSize['5xl'],
  '--trk-text-6xl': fontSize['6xl'],

  // Font weights
  '--trk-font-light': fontWeight.light,
  '--trk-font-normal': fontWeight.normal,
  '--trk-font-medium': fontWeight.medium,
  '--trk-font-semibold': fontWeight.semibold,
  '--trk-font-bold': fontWeight.bold,

  // Line heights
  '--trk-leading-none': lineHeight.none,
  '--trk-leading-tight': lineHeight.tight,
  '--trk-leading-snug': lineHeight.snug,
  '--trk-leading-normal': lineHeight.normal,
  '--trk-leading-relaxed': lineHeight.relaxed,
  '--trk-leading-loose': lineHeight.loose,

  // Letter spacing
  '--trk-tracking-tighter': letterSpacing.tighter,
  '--trk-tracking-tight': letterSpacing.tight,
  '--trk-tracking-normal': letterSpacing.normal,
  '--trk-tracking-wide': letterSpacing.wide,
  '--trk-tracking-wider': letterSpacing.wider,
  '--trk-tracking-widest': letterSpacing.widest,
} as const;

export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;
export type TextStyle = keyof typeof textStyle;
