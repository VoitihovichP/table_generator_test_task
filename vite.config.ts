import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./'),
      Styles: path.resolve('./src/styles'),
      Models: path.resolve('./src/models'),
      Components: path.resolve('./src/components'),
      Hooks: path.resolve('./src/hooks'),
      Utils: path.resolve('./src/utils')
    },
  },
});
