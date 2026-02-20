//vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/landing-sasha/' : '/', // 👈 en dev usa "/", en build usa "/landing-sasha/"
}))