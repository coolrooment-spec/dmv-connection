import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This is set to root because you are using a custom domain (dmvconnection.com)
  build: {
    outDir: 'dist',
  }
})
