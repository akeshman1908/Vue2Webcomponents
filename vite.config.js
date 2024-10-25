// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: 'src/entry.js',
      name: 'MyComponent',
      fileName: (format) => `my-component.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Externalize dependencies you don't want bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
