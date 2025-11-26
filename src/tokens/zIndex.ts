/**
 * Tråkke Design System – Nordisk Ro
 * Z-Index Tokens
 *
 * Layering hierarchy for consistent stacking context.
 */

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

export const zIndex = {
  /** Below everything */
  behind: -1,
  /** Base layer - normal content */
  base: 0,
  /** Slightly elevated - cards, surfaces */
  elevated: 10,
  /** Sticky elements - headers, toolbars */
  sticky: 100,
  /** Dropdown menus */
  dropdown: 200,
  /** Overlay layer - map overlays */
  overlay: 300,
  /** FAB and floating buttons */
  fab: 400,
  /** Modal dialogs */
  modal: 500,
  /** Bottom sheets */
  sheet: 600,
  /** Popovers and tooltips */
  popover: 700,
  /** Toast notifications */
  toast: 800,
  /** Highest layer - critical alerts */
  max: 9999,
} as const;

// =============================================================================
// SEMANTIC Z-INDEX
// Application-specific layering
// =============================================================================

export const semanticZIndex = {
  /** Map canvas */
  mapCanvas: zIndex.base,
  /** Map markers and overlays */
  mapMarkers: zIndex.elevated,
  /** Map controls (zoom, compass) */
  mapControls: zIndex.sticky,
  /** App header */
  header: zIndex.sticky + 10,
  /** Search panel */
  searchPanel: zIndex.overlay,
  /** FAB menu */
  fabMenu: zIndex.fab,
  /** FAB menu backdrop */
  fabBackdrop: zIndex.fab - 1,
  /** Bottom sheet */
  bottomSheet: zIndex.sheet,
  /** Sheet backdrop */
  sheetBackdrop: zIndex.sheet - 1,
  /** Modal dialog */
  modalDialog: zIndex.modal,
  /** Modal backdrop */
  modalBackdrop: zIndex.modal - 1,
  /** Tooltip */
  tooltip: zIndex.popover,
  /** Toast notification */
  notification: zIndex.toast,
  /** Loading overlay */
  loadingOverlay: zIndex.max - 1,
} as const;

// =============================================================================
// CSS CUSTOM PROPERTIES
// =============================================================================

export const zIndexCssVars = {
  '--z-behind': zIndex.behind,
  '--z-base': zIndex.base,
  '--z-elevated': zIndex.elevated,
  '--z-sticky': zIndex.sticky,
  '--z-dropdown': zIndex.dropdown,
  '--z-overlay': zIndex.overlay,
  '--z-fab': zIndex.fab,
  '--z-modal': zIndex.modal,
  '--z-sheet': zIndex.sheet,
  '--z-popover': zIndex.popover,
  '--z-toast': zIndex.toast,
  '--z-max': zIndex.max,
} as const;

export type ZIndex = keyof typeof zIndex;
export type SemanticZIndex = keyof typeof semanticZIndex;
