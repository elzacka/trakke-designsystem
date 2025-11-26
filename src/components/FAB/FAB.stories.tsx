import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from './FAB';

const meta: Meta<typeof FAB> = {
  title: 'Komponenter/FAB',
  component: FAB,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Floating Action Button med støtte for utvidbar meny.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FAB>;

export const Simple: Story = {
  args: {
    icon: 'add',
    onClick: () => alert('FAB klikket!'),
    'aria-label': 'Legg til',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', position: 'relative', background: '#f5f5f2' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithMenu: Story = {
  args: {
    icon: 'menu',
    items: [
      { id: 'search', icon: 'search', label: 'Søk', onClick: () => console.log('Søk') },
      { id: 'location', icon: 'my_location', label: 'Min posisjon', onClick: () => console.log('Posisjon') },
      { id: 'layers', icon: 'layers', label: 'Kartlag', onClick: () => console.log('Lag') },
      { id: 'download', icon: 'download', label: 'Last ned kart', onClick: () => console.log('Last ned'), group: 'actions' },
      { id: 'settings', icon: 'settings', label: 'Innstillinger', onClick: () => console.log('Innstillinger'), group: 'actions' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ height: '500px', position: 'relative', background: '#f5f5f2' }}>
        <Story />
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '32px', 
      padding: '40px',
      alignItems: 'center',
      background: '#f5f5f2',
      borderRadius: '12px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '12px',
          background: 'var(--trk-brand, #3e4533)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>sm (40px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '56px', 
          height: '56px', 
          borderRadius: '16px',
          background: 'var(--trk-brand, #3e4533)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>add</span>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>md (56px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '64px', 
          height: '64px', 
          borderRadius: '18px',
          background: 'var(--trk-brand, #3e4533)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>lg (64px)</div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '32px', 
      padding: '40px',
      alignItems: 'center',
      background: '#f5f5f2',
      borderRadius: '12px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '56px', 
          height: '56px', 
          borderRadius: '16px',
          background: 'var(--trk-brand, #3e4533)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>add</span>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '56px', 
          height: '56px', 
          borderRadius: '16px',
          background: 'var(--trk-surface, #ffffff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--trk-text, #1a1d1b)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>add</span>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '56px', 
          height: '56px', 
          borderRadius: '16px',
          background: 'var(--trk-surface, #ffffff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--trk-brand, #3e4533)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>add</span>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>surface</div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
