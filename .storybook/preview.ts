import type { Preview } from '@storybook/react';
import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fafaf7' },
        { name: 'dark', value: '#1a1d1b' },
        { name: 'white', value: '#ffffff' },
        { name: 'brand', value: '#3e4533' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    locale: {
      name: 'Sprak',
      description: 'Sprakinnstilling',
      defaultValue: 'nb',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'nb', title: 'Norsk bokmal' },
          { value: 'nn', title: 'Norsk nynorsk' },
          { value: 'en', title: 'English' },
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
