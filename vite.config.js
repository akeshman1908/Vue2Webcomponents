import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.js',  // Zorg dat dit wijst naar het hoofdbestand van je component
      name: 'MyWebComponent',  // Naam van je component
      fileName: (format) => `my-web-component.${format}.js`,
      formats: ['umd']  // Gebruik 'umd' om een universele module te genereren
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
