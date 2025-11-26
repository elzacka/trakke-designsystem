/**
 * TRÅKKE DESIGNSYSTEM
 * Icon Component
 * 
 * Bruker Material Symbols Outlined som ikonbibliotek.
 * Self-hosted for privacy og offline-støtte.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './Icon.module.scss';

/**
 * Tilgjengelige ikonnavn fra Material Symbols
 * Verifisert liste for frilufts- og kartapplikasjoner
 * @see https://fonts.google.com/icons
 */
export type IconName =
  // Navigation & Maps
  | 'map'
  | 'location_on'
  | 'my_location'
  | 'explore'
  | 'directions'
  | 'directions_walk'
  | 'route'
  | 'near_me'
  | 'gps_fixed'
  | 'gps_not_fixed'
  | 'gps_off'
  | 'compass_calibration'
  | 'navigation'
  | 'north'
  // Nature & Outdoor
  | 'forest'
  | 'park'
  | 'landscape'
  | 'terrain'
  | 'hiking'
  | 'directions_bike'
  | 'downhill_skiing'
  | 'kayaking'
  | 'cottage'
  | 'nature'
  | 'nature_people'
  | 'pets'
  | 'water'
  | 'waves'
  | 'air'
  // Weather
  | 'wb_sunny'
  | 'cloud'
  | 'partly_cloudy_day'
  | 'thunderstorm'
  | 'ac_unit'
  | 'thermostat'
  // POI Categories
  | 'local_fire_department'
  | 'emergency'
  | 'local_hospital'
  | 'local_parking'
  | 'local_gas_station'
  | 'restaurant'
  | 'local_cafe'
  | 'hotel'
  | 'wc'
  | 'info'
  | 'help'
  | 'warning'
  | 'dangerous'
  // Actions
  | 'add'
  | 'remove'
  | 'close'
  | 'check'
  | 'edit'
  | 'delete'
  | 'save'
  | 'share'
  | 'download'
  | 'upload'
  | 'refresh'
  | 'sync'
  | 'search'
  | 'filter_list'
  | 'sort'
  | 'menu'
  | 'more_vert'
  | 'more_horiz'
  | 'settings'
  | 'tune'
  | 'install_mobile'
  // Content
  | 'flag'
  | 'bookmark'
  | 'star'
  | 'favorite'
  | 'visibility'
  | 'visibility_off'
  | 'lock'
  | 'lock_open'
  | 'photo_camera'
  | 'image'
  | 'note'
  | 'description'
  // UI Elements
  | 'chevron_left'
  | 'chevron_right'
  | 'expand_more'
  | 'expand_less'
  | 'arrow_back'
  | 'arrow_forward'
  | 'arrow_upward'
  | 'arrow_downward'
  | 'drag_handle'
  | 'drag_indicator'
  // Map Tools
  | 'layers'
  | 'satellite_alt'
  | 'grid_on'
  | 'straighten'
  | 'square_foot'
  | 'zoom_in'
  | 'zoom_out'
  | 'fullscreen'
  | 'fullscreen_exit'
  | 'center_focus_strong'
  // Files & Data
  | 'folder'
  | 'folder_open'
  | 'file_copy'
  | 'cloud_download'
  | 'cloud_upload'
  | 'cloud_off'
  | 'storage'
  | 'sd_card'
  // Communication
  | 'phone'
  | 'email'
  | 'link'
  | 'qr_code'
  | 'notifications'
  | 'notifications_off'
  // Status
  | 'check_circle'
  | 'cancel'
  | 'error'
  | 'report_problem'
  | 'schedule'
  | 'timer'
  | 'hourglass_empty'
  | 'offline_bolt'
  | 'signal_wifi_off'
  | 'battery_alert';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type IconGrade = -25 | 0 | 200;

export type IconFill = boolean;

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Navn på ikonet (Material Symbol) */
  name: IconName;
  
  /** Størrelse på ikonet */
  size?: IconSize;
  
  /** Vekt/tykkelse på ikonet (100-700). Standard: 200 */
  weight?: IconWeight;
  
  /** Gradient for finere vektjustering (-25, 0, eller 200). Standard: -25 */
  grade?: IconGrade;
  
  /** Fylt eller outlined */
  fill?: IconFill;
  
  /** Farge (CSS color value) */
  color?: string;
  
  /** Rotasjon i grader */
  rotate?: number;
  
  /** Spinn-animasjon */
  spin?: boolean;
  
  /** Ekstra CSS-klasser */
  className?: string;
  
  /** Tilgjengelighetsmerkelapp */
  'aria-label'?: string;
  
  /** Skjult for skjermlesere */
  'aria-hidden'?: boolean;
}

// Størrelse mapping
const sizeMap: Record<string, number> = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

/**
 * Icon-komponent for Tråkke Design System
 * 
 * Bruker Material Symbols med variable font for fleksibel styling.
 * 
 * @example
 * // Enkelt ikon
 * <Icon name="forest" />
 * 
 * @example
 * // Med størrelse og farge
 * <Icon name="location_on" size="lg" color="var(--trk-blue)" />
 * 
 * @example
 * // Fylt ikon med vekt
 * <Icon name="favorite" fill weight={600} />
 * 
 * @example
 * // Tilgjengelig ikon
 * <Icon name="warning" aria-label="Advarsel" />
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      size = 'md',
      weight = 200,
      grade = -25,
      fill = false,
      color,
      rotate,
      spin = false,
      className,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      style,
      ...props
    },
    ref
  ) => {
    // Beregn pikselstørrelse
    const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 20;
    
    // Optical size bør matche faktisk størrelse for best lesbarhet
    const opticalSize = pixelSize;
    
    // Kombiner stiler
    const combinedStyle: React.CSSProperties = {
      fontSize: pixelSize,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      color: color,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style,
    };
    
    const iconClasses = clsx(
      styles.icon,
      'material-symbols-outlined',
      {
        [styles.spin]: spin,
      },
      className
    );
    
    // Hvis ingen aria-label, skjul for skjermlesere
    const isAriaHidden = ariaHidden ?? !ariaLabel;

    return (
      <span
        ref={ref}
        className={iconClasses}
        style={combinedStyle}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={isAriaHidden}
        {...props}
      >
        {name}
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
