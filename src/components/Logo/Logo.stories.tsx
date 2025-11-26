import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: 'full',
    size: 'md',
    color: 'brand',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Logo variant="full" />
      <Logo variant="icon" />
      <Logo variant="text" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Logo size="xs" />
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
      <Logo size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '16px', background: '#fafaf7' }}>
        <Logo color="brand" />
      </div>
      <div style={{ padding: '16px', background: '#3e4533' }}>
        <Logo color="white" />
      </div>
      <div style={{ padding: '16px', background: '#ffffff', border: '1px solid #e0e2dd' }}>
        <Logo color="dark" />
      </div>
    </div>
  ),
};

export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: 'brand' },
  },
  args: {
    color: 'white',
    size: 'lg',
  },
};
