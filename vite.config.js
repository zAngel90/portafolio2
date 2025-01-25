import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: true
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  base: '/',
})
