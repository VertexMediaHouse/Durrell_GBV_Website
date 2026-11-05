import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { PAGES } from './src/site.js'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Writes dist/<route>/index.html per page with its own <title>/description, so static hosts
// serve deep links and crawlers/link previews see per-page meta without running JS.
const perRouteHtml = () => ({
  name: 'per-route-html',
  apply: 'build',
  closeBundle() {
    const base = readFileSync('dist/index.html', 'utf8')
    for (const p of PAGES) {
      const html = base
        .replace(/<title>.*?<\/title>/, `<title>${esc(p.title)}</title>`)
        .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(p.description)}`)
        .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(p.title)}`)
        .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(p.description)}`)
      const dir = `dist${p.path}`
      mkdirSync(dir, { recursive: true })
      writeFileSync(`${dir}/index.html`.replace('//', '/'), html)
    }
    writeFileSync('dist/404.html', base)
  },
})

export default defineConfig({
  plugins: [react(), tailwindcss(), perRouteHtml()],
})
