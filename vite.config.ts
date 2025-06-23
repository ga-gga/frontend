import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), reactRouter()],
});
