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
      Components: path.resolve('./src/components'),
      ReduxActions: path.resolve('./src/store/actions'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
});
