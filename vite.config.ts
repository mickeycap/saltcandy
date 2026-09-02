import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // nitro() compiles the server build into the output Vercel deploys as a
  // Function. Vercel zero-config detects TanStack Start / Nitro from this.
  plugins: [tailwindcss(), tanstackStart(), nitro(), viteReact()],
})
