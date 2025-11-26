/**
 * Tråkke Design System – Nordisk Ro
 * Timing & Animation Tokens
 *
 * Smooth, natural animations that enhance without distraction.
 */

// =============================================================================
// DURATION
// =============================================================================

export const duration = {
  /** Instant - 0ms */
  '0': '0ms',
  /** Ultra fast - micro interactions */
  '75': '75ms',
  /** Fast - hover states, small movements */
  '100': '100ms',
  /** Quick - button feedback */
  '150': '150ms',
  /** Standard - most transitions */
  '200': '200ms',
  /** Medium - sheet transitions */
  '300': '300ms',
  /** Slow - complex animations */
  '500': '500ms',
  /** Very slow - page transitions */
  '700': '700ms',
  /** Extra slow - special effects */
  '1000': '1000ms',
} as const;

// =============================================================================
// EASING CURVES
// =============================================================================

export const easing = {
  /** Linear - constant speed */
  linear: 'linear',
  /** Ease in - slow start */
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  /** Ease out - slow end (default for most UI) */
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  /** Ease in-out - slow start and end */
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** Bounce - playful feedback */
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  /** Spring - natural physics */
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  /** Smooth - gentle transitions */
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  /** Sharp - quick response */
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// =============================================================================
// SEMANTIC TRANSITIONS
// Pre-composed transitions for common use cases
// =============================================================================

export const transition = {
  /** Fast hover transitions */
  fast: `${duration['150']} ${easing.out}`,
  /** Standard UI transitions */
  base: `${duration['200']} ${easing.out}`,
  /** Slow, smooth transitions */
  slow: `${duration['300']} ${easing.out}`,
  /** Sheet/modal transitions */
  sheet: `${duration['300']} ${easing.inOut}`,
  /** Bounce effect for feedback */
  bounce: `${duration['300']} ${easing.bounce}`,
  /** Spring effect for playful interactions */
  spring: `${duration['500']} ${easing.spring}`,
  /** None - instant change */
  none: 'none',
} as const;

// =============================================================================
// ANIMATION PRESETS
// =============================================================================

export const animation = {
  /** Fade in */
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: duration['200'],
    easing: easing.out,
  },
  /** Fade out */
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: duration['150'],
    easing: easing.in,
  },
  /** Slide up (for sheets) */
  slideUp: {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
    duration: duration['300'],
    easing: easing.out,
  },
  /** Slide down (for closing sheets) */
  slideDown: {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(100%)' },
    duration: duration['200'],
    easing: easing.in,
  },
  /** Scale up (for modals) */
  scaleUp: {
    from: { transform: 'scale(0.95)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    duration: duration['200'],
    easing: easing.out,
  },
  /** Pulse (for markers, loading) */
  pulse: {
    keyframes: '0%, 100% { opacity: 1; } 50% { opacity: 0.5; }',
    duration: duration['1000'],
    easing: easing.inOut,
    iteration: 'infinite',
  },
  /** Spin (for loading spinners) */
  spin: {
    keyframes: '0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }',
    duration: duration['1000'],
    easing: easing.linear,
    iteration: 'infinite',
  },
  /** Waypoint pulse */
  waypointPulse: {
    keyframes: '0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(208, 68, 62, 0.4); } 50% { transform: scale(1.05); box-shadow: 0 0 0 8px rgba(208, 68, 62, 0); }',
    duration: '2000ms',
    easing: easing.inOut,
    iteration: 'infinite',
  },
} as const;

// =============================================================================
// UI TIMING CONSTANTS
// Application-specific timing values
// =============================================================================

export const uiTiming = {
  /** Auto-hide controls timeout */
  autoHideControls: 5000,
  /** Search input debounce */
  searchDebounce: 300,
  /** POI loading debounce */
  poiDebounce: 1000,
  /** Long press threshold */
  longPress: 500,
  /** Notification display duration */
  notificationDisplay: 3000,
  /** Toast display duration */
  toastDuration: 4000,
  /** Double tap threshold */
  doubleTap: 300,
  /** Swipe velocity threshold */
  swipeVelocity: 0.5,
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const timingCssVars = {
  // Durations
  '--duration-0': duration['0'],
  '--duration-75': duration['75'],
  '--duration-100': duration['100'],
  '--duration-150': duration['150'],
  '--duration-200': duration['200'],
  '--duration-300': duration['300'],
  '--duration-500': duration['500'],
  '--duration-700': duration['700'],
  '--duration-1000': duration['1000'],

  // Easings
  '--ease-linear': easing.linear,
  '--ease-in': easing.in,
  '--ease-out': easing.out,
  '--ease-in-out': easing.inOut,
  '--ease-bounce': easing.bounce,
  '--ease-spring': easing.spring,

  // Semantic transitions
  '--transition-fast': transition.fast,
  '--transition-base': transition.base,
  '--transition-slow': transition.slow,
  '--transition-sheet': transition.sheet,
  '--transition-bounce': transition.bounce,
} as const;

export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
export type Transition = keyof typeof transition;
