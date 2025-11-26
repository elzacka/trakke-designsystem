import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Komponenter/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Standard' },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="success">Suksess</Badge>
      <Badge variant="warning">Advarsel</Badge>
      <Badge variant="danger">Fare</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="default" outline>Default</Badge>
      <Badge variant="brand" outline>Brand</Badge>
      <Badge variant="success" outline>Suksess</Badge>
      <Badge variant="warning" outline>Advarsel</Badge>
      <Badge variant="danger" outline>Fare</Badge>
      <Badge variant="info" outline>Info</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="success" icon="check">Lagret</Badge>
      <Badge variant="warning" icon="warning">Advarsel</Badge>
      <Badge variant="danger" icon="error">Feil</Badge>
      <Badge variant="info" icon="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge size="sm">Liten</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Stor</Badge>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge variant="success" dot />
      <Badge variant="warning" dot />
      <Badge variant="danger" dot />
      <Badge variant="info" dot />
    </div>
  ),
};
