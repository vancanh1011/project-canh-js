import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components"
    },
  },
});

