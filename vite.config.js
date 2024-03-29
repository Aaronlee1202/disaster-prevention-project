import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// disaster-prevention-project
export default defineConfig({
  plugins: [vue()],
  base:
    process.env.NODE_ENV === 'production'
      ? '/disaster-prevention-project/'
      : '/NCDR-Topic/2024/NCDRLearningCenter/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
