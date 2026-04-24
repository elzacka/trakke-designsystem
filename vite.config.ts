import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: './tsconfig.build.json', include: ['src'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname!, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname!, 'src/index.ts'),
        'tokens/index': resolve(import.meta.dirname!, 'src/tokens/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${resolve(import.meta.dirname!, 'src/styles/_colors.scss')}" as *;`,
      },
    },
  },
});
