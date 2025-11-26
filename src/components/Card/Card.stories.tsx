import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Button } from '../Button';
import { Badge } from '../Badge';

const meta: Meta<typeof Card> = {
  title: 'Komponenter/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Fleksibel kortkomponent for gruppering av relatert innhold.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h3 style={{ margin: 0 }}>Besseggen</h3>
          <Badge variant="brand">Krevende</Badge>
        </CardHeader>
        <CardContent>
          <p>En av Norges mest populære fjellturer med spektakulær utsikt over Gjende og Bessvatnet.</p>
        </CardContent>
        <CardFooter>
          <span>14.5 km</span>
          <span>1,100 m stigning</span>
        </CardFooter>
      </>
    ),
    padding: 'md',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <CardContent>
        <h3 style={{ margin: '0 0 8px' }}>Elevated Card</h3>
        <p style={{ margin: 0 }}>Standard kort med skygge.</p>
      </CardContent>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <CardContent>
        <h3 style={{ margin: '0 0 8px' }}>Outlined Card</h3>
        <p style={{ margin: 0 }}>Kort med kantlinje.</p>
      </CardContent>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onPress: () => alert('Kort klikket!'),
    children: (
      <CardContent>
        <h3 style={{ margin: '0 0 8px' }}>Klikkbart kort</h3>
        <p style={{ margin: 0 }}>Klikk for å åpne detaljer.</p>
      </CardContent>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <>
        <CardContent>
          <h3 style={{ margin: '0 0 8px' }}>Preikestolen</h3>
          <p style={{ margin: 0 }}>Ikonisk fjellplatå med 604 meters loddrett fall.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm">Start tur</Button>
          <Button variant="secondary" size="sm">Lagre</Button>
        </CardFooter>
      </>
    ),
  },
};
