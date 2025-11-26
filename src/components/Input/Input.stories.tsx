import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Komponenter/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Fleksibel tekstinput med støtte for validering, ikoner og flere varianter.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Stedsnavn',
    placeholder: 'Skriv inn stedsnavn...',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Søk',
    placeholder: 'Søk etter ruter...',
    iconStart: 'search',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Koordinater',
    placeholder: '59.9139, 10.7522',
    helperText: 'Format: breddegrad, lengdegrad (desimalgrader)',
    iconStart: 'location_on',
  },
};

export const WithError: Story = {
  args: {
    label: 'E-post',
    type: 'email',
    value: 'ugyldig-epost',
    error: 'Vennligst skriv inn en gyldig e-postadresse',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Brukernavn',
    value: 'fjellansen',
    success: 'Brukernavnet er tilgjengelig',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Søk',
    placeholder: 'Skriv for å søke...',
    value: 'Besseggen',
    clearable: true,
    iconStart: 'search',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deaktivert felt',
    value: 'Kan ikke redigeres',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="sm" label="Liten" placeholder="Liten input..." />
      <Input size="md" label="Medium" placeholder="Medium input..." />
      <Input size="lg" label="Stor" placeholder="Stor input..." />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input variant="default" label="Default" placeholder="Standard variant..." />
      <Input variant="filled" label="Filled" placeholder="Fylt variant..." />
      <Input variant="outlined" label="Outlined" placeholder="Outline variant..." />
    </div>
  ),
};
