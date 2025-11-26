/**
 * Tråkke Design System – Nordisk Ro
 * Shadow Tokens
 *
 * Subtle, natural shadows that provide depth without distraction.
 */

// =============================================================================
// SHADOW SCALE
// =============================================================================

export const shadow = {
  /** No shadow */
  none: 'none',
  /** Subtle shadow for hover states */
  xs: '0 1px 2px 0 rgba(10, 11, 10, 0.05)',
  /** Small shadow for cards */
  sm: '0 1px 3px 0 rgba(10, 11, 10, 0.08), 0 1px 2px -1px rgba(10, 11, 10, 0.08)',
  /** Medium shadow for dropdowns */
  md: '0 4px 6px -1px rgba(10, 11, 10, 0.08), 0 2px 4px -2px rgba(10, 11, 10, 0.08)',
  /** Large shadow for modals */
  lg: '0 10px 15px -3px rgba(10, 11, 10, 0.08), 0 4px 6px -4px rgba(10, 11, 10, 0.08)',
  /** Extra large shadow for floating elements */
  xl: '0 20px 25px -5px rgba(10, 11, 10, 0.08), 0 8px 10px -6px rgba(10, 11, 10, 0.08)',
  /** 2x large shadow for high elevation */
  '2xl': '0 25px 50px -12px rgba(10, 11, 10, 0.16)',
} as const;

// =============================================================================
// SEMANTIC SHADOWS
// =============================================================================

export const semanticShadow = {
  /** Button hover shadow */
  button: '0 4px 12px rgba(62, 69, 51, 0.15)',
  /** Button pressed shadow */
  buttonPressed: '0 2px 4px rgba(62, 69, 51, 0.1)',
  /** FAB shadow */
  fab: '0 8px 24px rgba(10, 11, 10, 0.2)',
  /** Sheet shadow */
  sheet: '0 -4px 20px rgba(10, 11, 10, 0.08)',
  /** Toast notification shadow */
  toast: '0 12px 40px rgba(10, 11, 10, 0.12)',
  /** Tooltip shadow */
  tooltip: '0 4px 12px rgba(10, 11, 10, 0.12)',
  /** Map marker shadow */
  marker: '0 2px 6px rgba(10, 11, 10, 0.3)',
  /** Focus ring shadow */
  focus: '0 0 0 3px rgba(30, 108, 224, 0.4)',
  /** Error focus ring */
  focusError: '0 0 0 3px rgba(208, 68, 62, 0.4)',
  /** Success focus ring */
  focusSuccess: '0 0 0 3px rgba(46, 158, 91, 0.4)',
} as const;

// =============================================================================
// INNER SHADOWS
// =============================================================================

export const innerShadow = {
  /** Subtle inset */
  sm: 'inset 0 1px 2px rgba(10, 11, 10, 0.05)',
  /** Medium inset for inputs */
  md: 'inset 0 2px 4px rgba(10, 11, 10, 0.05)',
  /** Pressed button state */
  pressed: 'inset 0 2px 4px rgba(10, 11, 10, 0.1)',
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const shadowCssVars = {
  '--shadow-none': shadow.none,
  '--shadow-xs': shadow.xs,
  '--shadow-sm': shadow.sm,
  '--shadow-md': shadow.md,
  '--shadow-lg': shadow.lg,
  '--shadow-xl': shadow.xl,
  '--shadow-2xl': shadow['2xl'],

  '--trk-shadow-button': semanticShadow.button,
  '--trk-shadow-button-pressed': semanticShadow.buttonPressed,
  '--trk-shadow-fab': semanticShadow.fab,
  '--trk-shadow-sheet': semanticShadow.sheet,
  '--trk-shadow-toast': semanticShadow.toast,
  '--trk-shadow-tooltip': semanticShadow.tooltip,
  '--trk-shadow-marker': semanticShadow.marker,
  '--trk-shadow-focus': semanticShadow.focus,
  '--trk-shadow-focus-error': semanticShadow.focusError,
  '--trk-shadow-focus-success': semanticShadow.focusSuccess,

  '--trk-shadow-inner-sm': innerShadow.sm,
  '--trk-shadow-inner-md': innerShadow.md,
  '--trk-shadow-inner-pressed': innerShadow.pressed,
} as const;

export type Shadow = keyof typeof shadow;
export type SemanticShadow = keyof typeof semanticShadow;
