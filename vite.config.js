import path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    reactRefresh()
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
})
