import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port : 5173,
    proxy: {
        '^/v1/.*': {
            target: 'http://16.16.166.106/',
            changeOrigin: true,
            secure: false
        }
    }
},
})
