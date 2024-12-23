import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SoukhyaAyur/",
  build: {
    assetsInlineLimit: 0, // Ensures images aren't inlined into JS
  },
})
