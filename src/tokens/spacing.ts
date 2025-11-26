/**
 * Tråkke Design System – Nordisk Ro
 * Spacing Tokens
 *
 * 4px base unit spacing system for consistent layouts.
 * Mobile-first with comfortable touch targets.
 */

// =============================================================================
// SPACING SCALE
// Based on 4px unit (half of 8px for fine control)
// =============================================================================

export const spacing = {
  /** 0px */
  '0': '0',
  /** 1px - hairline borders */
  px: '1px',
  /** 2px - micro spacing */
  '0.5': '0.125rem',
  /** 4px - tight spacing */
  '1': '0.25rem',
  /** 6px - compact spacing */
  '1.5': '0.375rem',
  /** 8px - standard small spacing */
  '2': '0.5rem',
  /** 10px - enhanced small spacing */
  '2.5': '0.625rem',
  /** 12px - medium spacing */
  '3': '0.75rem',
  /** 14px - comfortable spacing */
  '3.5': '0.875rem',
  /** 16px - standard spacing */
  '4': '1rem',
  /** 20px - enhanced spacing */
  '5': '1.25rem',
  /** 24px - large spacing */
  '6': '1.5rem',
  /** 28px - extra large */
  '7': '1.75rem',
  /** 32px - 2x large */
  '8': '2rem',
  /** 36px */
  '9': '2.25rem',
  /** 40px - section spacing */
  '10': '2.5rem',
  /** 44px - touch target */
  '11': '2.75rem',
  /** 48px - large section */
  '12': '3rem',
  /** 56px */
  '14': '3.5rem',
  /** 64px - major sections */
  '16': '4rem',
  /** 80px */
  '20': '5rem',
  /** 96px */
  '24': '6rem',
  /** 128px */
  '32': '8rem',
  /** 160px */
  '40': '10rem',
  /** 192px */
  '48': '12rem',
  /** 256px */
  '64': '16rem',
} as const;

// =============================================================================
// SEMANTIC SPACING
// Named spacing for common use cases
// =============================================================================

export const semanticSpacing = {
  /** Micro gap between icons and text */
  iconGap: spacing['1.5'],
  /** Compact list item gap */
  listGapTight: spacing['1'],
  /** Standard list item gap */
  listGap: spacing['2'],
  /** Comfortable list item gap */
  listGapLoose: spacing['3'],
  /** Button internal padding (horizontal) */
  buttonPaddingX: spacing['4'],
  /** Button internal padding (vertical) */
  buttonPaddingY: spacing['2.5'],
  /** Input field padding */
  inputPadding: spacing['3'],
  /** Card padding */
  cardPadding: spacing['4'],
  /** Sheet header padding */
  sheetHeaderPadding: spacing['5'],
  /** Sheet content padding */
  sheetContentPadding: spacing['4'],
  /** Section gap within sheets */
  sectionGap: spacing['6'],
  /** Page margin on mobile */
  pagePaddingMobile: spacing['4'],
  /** Page margin on tablet */
  pagePaddingTablet: spacing['6'],
  /** Page margin on desktop */
  pagePaddingDesktop: spacing['8'],
} as const;

// =============================================================================
// TOUCH TARGETS
// WCAG 2.1 Level AAA compliant touch targets
// =============================================================================

export const touchTarget = {
  /** Minimum touch target (44px) - WCAG AAA */
  min: '44px',
  /** Comfortable touch target (48px) */
  comfortable: '48px',
  /** Large touch target (56px) - primary actions */
  large: '56px',
  /** FAB size */
  fab: '56px',
  /** Compact touch target (36px) - inline actions */
  compact: '36px',
} as const;

// =============================================================================
// CONTAINER WIDTHS
// =============================================================================

export const containerWidth = {
  /** Extra small container */
  xs: '320px',
  /** Small container - mobile modals */
  sm: '384px',
  /** Medium container - sheets, cards */
  md: '448px',
  /** Large container - wide sheets */
  lg: '512px',
  /** Extra large container */
  xl: '576px',
  /** 2x large */
  '2xl': '672px',
  /** Full width with max */
  full: '100%',
} as const;

// =============================================================================
// SHEET DIMENSIONS
// =============================================================================

export const sheetDimensions = {
  /** Maximum width for bottom sheets */
  maxWidth: '600px',
  /** Peek height (collapsed) */
  peekHeight: '40vh',
  /** Half height (expanded) */
  halfHeight: '70vh',
  /** Full height */
  fullHeight: '95vh',
  /** Header height */
  headerHeight: '56px',
  /** Handle height */
  handleHeight: '20px',
  /** Border radius */
  borderRadius: '20px',
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const spacingCssVars = {
  // Spacing scale
  '--space-0': spacing['0'],
  '--space-px': spacing.px,
  '--space-0\\.5': spacing['0.5'],
  '--space-1': spacing['1'],
  '--space-1\\.5': spacing['1.5'],
  '--space-2': spacing['2'],
  '--space-2\\.5': spacing['2.5'],
  '--space-3': spacing['3'],
  '--space-3\\.5': spacing['3.5'],
  '--space-4': spacing['4'],
  '--space-5': spacing['5'],
  '--space-6': spacing['6'],
  '--space-7': spacing['7'],
  '--space-8': spacing['8'],
  '--space-9': spacing['9'],
  '--space-10': spacing['10'],
  '--space-11': spacing['11'],
  '--space-12': spacing['12'],
  '--space-14': spacing['14'],
  '--space-16': spacing['16'],
  '--space-20': spacing['20'],
  '--space-24': spacing['24'],
  '--space-32': spacing['32'],

  // Semantic spacing (with simpler names)
  '--trk-space-xs': spacing['1'],
  '--trk-space-sm': spacing['2'],
  '--trk-space-md': spacing['3'],
  '--trk-space-lg': spacing['4'],
  '--trk-space-xl': spacing['6'],
  '--trk-space-2xl': spacing['8'],
  '--trk-space-3xl': spacing['12'],
  '--trk-space-4xl': spacing['16'],

  // Touch targets
  '--trk-touch-min': touchTarget.min,
  '--trk-touch-comfortable': touchTarget.comfortable,
  '--trk-touch-large': touchTarget.large,
  '--trk-touch-compact': touchTarget.compact,
  '--trk-fab-size': touchTarget.fab,

  // Container widths
  '--trk-container-xs': containerWidth.xs,
  '--trk-container-sm': containerWidth.sm,
  '--trk-container-md': containerWidth.md,
  '--trk-container-lg': containerWidth.lg,
  '--trk-container-xl': containerWidth.xl,

  // Sheet dimensions
  '--trk-sheet-max-width': sheetDimensions.maxWidth,
  '--trk-sheet-peek': sheetDimensions.peekHeight,
  '--trk-sheet-half': sheetDimensions.halfHeight,
  '--trk-sheet-full': sheetDimensions.fullHeight,
  '--trk-sheet-header': sheetDimensions.headerHeight,
  '--trk-sheet-radius': sheetDimensions.borderRadius,
} as const;

export type Spacing = keyof typeof spacing;
export type TouchTarget = keyof typeof touchTarget;
export type ContainerWidth = keyof typeof containerWidth;
