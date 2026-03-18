import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react/') ||
              id.includes('react-dom/') ||
              id.includes('react-router')
            ) {
              return 'vendor-react'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion'
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix'
            }
            if (
              id.includes('lucide-react') ||
              id.includes('clsx') ||
              id.includes('tailwind-merge') ||
              id.includes('class-variance-authority')
            ) {
              return 'vendor-ui-utils'
            }
            if (
              id.includes('dompurify') ||
              id.includes('lenis') ||
              id.includes('canvas-confetti')
            ) {
              return 'vendor-utils'
            }
            return 'vendor-misc'
          }
        }
      }
    }
  }
})
