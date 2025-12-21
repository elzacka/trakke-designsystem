import { addons } from '@storybook/manager-api';

addons.setConfig({
  sidebar: {
    showRoots: true,
  },
  initialActive: 'sidebar',
});

// Redirect to Introduksjon on initial load
if (window.location.pathname.endsWith('/') || window.location.search === '') {
  const url = new URL(window.location.href);
  if (!url.searchParams.has('path')) {
    url.searchParams.set('path', '/docs/introduksjon--docs');
    window.history.replaceState({}, '', url.toString());
  }
}
