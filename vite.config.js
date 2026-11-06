import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => dist folder kisi bhi hosting / sub-path par chal jata hai
export default defineConfig({
  plugins: [react()],
  base: './',
})
