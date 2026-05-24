import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import build from '@hono/vite-build/cloudflare-workers'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx'
    })
  ]
})