import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Komponenter/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Icon-komponenten bruker Material Symbols Outlined med variable font for fleksibel styling.

**Standardverdier (matcher Tråkke PWA):**
- \`weight\`: 200 (lett og elegant)
- \`grade\`: -25 (for lettere utseende)
- \`fill\`: false (outlined)

**Optical size (\`opsz\`):** Settes automatisk basert på ikonstørrelse for optimal lesbarhet.

**Hierarki:**
- Primary/FAB: weight 400, fill
- Standard UI: weight 200
- Sekundaer: weight 200, opacity 0.8
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['map', 'search', 'menu', 'close', 'add', 'favorite', 'settings', 'hiking', 'forest', 'location_on'],
      description: 'Navn på ikonet (Material Symbol)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Størrelse på ikonet',
    },
    weight: {
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700],
      description: 'Vekt/tykkelse på ikonet',
    },
    grade: {
      control: 'select',
      options: [-25, 0, 200],
      description: 'Gradient for finere vektjustering',
    },
    fill: {
      control: 'boolean',
      description: 'Fylt eller outlined',
    },
    color: {
      control: 'color',
      description: 'Farge på ikonet',
    },
    rotate: {
      control: { type: 'range', min: 0, max: 360, step: 45 },
      description: 'Rotasjon i grader',
    },
    spin: {
      control: 'boolean',
      description: 'Spinn-animasjon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'hiking',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="forest" size="xs" />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>xs (14px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="forest" size="sm" />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>sm (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="forest" size="md" />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>md (20px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="forest" size="lg" />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>lg (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="forest" size="xl" />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>xl (32px)</div>
      </div>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      {[100, 200, 300, 400, 500, 600, 700].map((weight) => (
        <div key={weight} style={{ textAlign: 'center' }}>
          <Icon name="hiking" size="lg" weight={weight as 100 | 200 | 300 | 400 | 500 | 600 | 700} />
          <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>{weight}</div>
        </div>
      ))}
    </div>
  ),
};

export const FillVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="favorite" size="xl" fill={false} />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>Outlined</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="favorite" size="xl" fill={true} />
        <div style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>Filled</div>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  name: 'Med tekst (inline)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0, fontSize: '16px' }}>
        <Icon name="location_on" size="md" color="var(--trk-brand, #3e4533)" />
        Frognerseteren, Oslo
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0, fontSize: '14px' }}>
        <Icon name="hiking" size="sm" />
        12,5 km · 3t 45min
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0, fontSize: '13px' }}>
        <Icon name="terrain" size="sm" />
        Moderat krevende
      </p>
    </div>
  ),
};

export const IconButton: Story = {
  name: 'Som knapp',
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          border: 'none',
          borderRadius: '12px',
          background: 'var(--trk-surface, #fff)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          cursor: 'pointer',
        }}
        aria-label="Søk"
      >
        <Icon name="search" size="lg" />
      </button>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          border: 'none',
          borderRadius: '16px',
          background: 'var(--trk-brand, #3e4533)',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          cursor: 'pointer',
        }}
        aria-label="Meny"
      >
        <Icon name="menu" size="lg" fill weight={400} grade={0} />
      </button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="forest" size="xl" color="var(--trk-brand, #3e4533)" />
      <Icon name="location_on" size="xl" color="var(--trk-blue, #1e6ce0)" />
      <Icon name="warning" size="xl" color="var(--trk-orange, #e07b1e)" />
      <Icon name="error" size="xl" color="var(--trk-red, #d93636)" />
      <Icon name="check_circle" size="xl" color="var(--trk-green, #2d8a4e)" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    name: 'sync',
    size: 'lg',
    spin: true,
  },
};

export const OutdoorIcons: Story = {
  name: 'Friluftsliv-ikoner',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' }}>
      {[
        'hiking', 'forest', 'terrain', 'landscape', 'cottage', 'park',
        'nature', 'water', 'waves', 'directions_bike', 'kayaking', 'downhill_skiing',
        'wb_sunny', 'cloud', 'partly_cloudy_day', 'ac_unit', 'thunderstorm', 'air',
      ].map((name) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <Icon name={name as any} size="lg" />
          <div style={{ fontSize: '11px', marginTop: '6px', color: '#666' }}>{name}</div>
        </div>
      ))}
    </div>
  ),
};

export const MapIcons: Story = {
  name: 'Kart-ikoner',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' }}>
      {[
        'map', 'location_on', 'my_location', 'explore', 'navigation', 'route',
        'layers', 'satellite_alt', 'zoom_in', 'zoom_out', 'fullscreen', 'gps_fixed',
      ].map((name) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <Icon name={name as any} size="lg" />
          <div style={{ fontSize: '11px', marginTop: '6px', color: '#666' }}>{name}</div>
        </div>
      ))}
    </div>
  ),
};
