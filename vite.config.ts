import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        homepage: 'index.html',
        designDictionary: 'design-dictionary/index.html',
        manuals: 'manuals/index.html',
      },
    },
  },
})
