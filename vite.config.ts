import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
  plugins: [
    reactRouter(),
    vanillaExtractPlugin(),
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./app/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'), // 실제 폴더 경로에 맞게 조정
    },
  },
});
