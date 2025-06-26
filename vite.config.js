import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  base: '/', // custom domain = root
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  buildEnd() {
    fs.writeFileSync('dist/CNAME', 'gravience.com') // ✅ this ensures the `gh-pages` branch has CNAME
  }
})
