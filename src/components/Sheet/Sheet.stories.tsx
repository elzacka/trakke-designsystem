import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from './Sheet';
import { Button } from '../Button';
import { Input } from '../Input';
import { useState } from 'react';

const meta: Meta<typeof Sheet> = {
  title: 'Komponenter/Sheet',
  component: Sheet,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Responsiv sheet-komponent: bottom sheet på mobil, modal på desktop.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

const SheetDemo = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => setOpen(true)}>Åpne Sheet</Button>
      <Sheet {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    title: 'Søk',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input label="Stedsnavn" placeholder="Søk etter sted..." iconStart="search" />
        <p>Bruk søkefeltet for å finne steder, ruter eller POI-er.</p>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    title: 'Lagre rute',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input label="Rutenavn" placeholder="Gi ruten et navn..." />
        <Input label="Beskrivelse" placeholder="Legg til en beskrivelse..." />
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <Button variant="secondary" fullWidth>Avbryt</Button>
        <Button variant="primary" fullWidth>Lagre</Button>
      </div>
    ),
  },
};

export const HalfHeight: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    title: 'Rutedetaljer',
    subtitle: 'Besseggen via Memurubu',
    defaultHeight: 'half',
    children: (
      <div>
        <p><strong>Distanse:</strong> 14.5 km</p>
        <p><strong>Stigning:</strong> 1,100 m</p>
        <p><strong>Estimert tid:</strong> 6-8 timer</p>
        <p><strong>Vanskelighetsgrad:</strong> Krevende</p>
      </div>
    ),
  },
};

export const FullHeight: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    title: 'Kartinnstillinger',
    defaultHeight: 'full',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Her kan du justere kartvisningen og velge hvilke lag som skal vises.</p>
        <p>Innhold som fyller hele sheet-høyden...</p>
      </div>
    ),
  },
};
