import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Komponenter/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'En fleksibel knapp-komponent med flere varianter, storrelser og states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'ghost'],
      description: 'Visuell variant av knappen',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Storrelse pa knappen',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktiverer knappen',
    },
    loading: {
      control: 'boolean',
      description: 'Viser loading-spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Gjor knappen full bredde',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Lagre rute',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Avbryt',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Les mer',
    variant: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Slett rute',
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    children: 'Bekreft',
    variant: 'success',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Legg til punkt',
    variant: 'primary',
    iconStart: 'add',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    iconOnly: true,
    'aria-label': 'Lukk',
    children: null,
    iconStart: 'close',
  },
};

export const Loading: Story = {
  args: {
    children: 'Lagrer...',
    variant: 'primary',
    loading: true,
    loadingText: 'Lagrer...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Ikke tilgjengelig',
    variant: 'primary',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Liten</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Stor</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
