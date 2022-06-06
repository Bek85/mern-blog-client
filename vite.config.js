import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { 'react-blog': path.resolve(__dirname, './src') },
  },

  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },

  plugins: [react()],
});
