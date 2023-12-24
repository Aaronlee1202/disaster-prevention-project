import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// const prod = import.meta.env.PROD ? 'production' : 'development';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/disaster-prevention-project/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
