import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-gif-expert',
  build: {
    outDir: 'docs' // Cambia la carpeta de salida a 'docs'
  }
})
