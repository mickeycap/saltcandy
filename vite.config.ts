import { defineConfig, type Plugin } from 'vite'
import { mkdirSync, writeFileSync } from 'node:fs'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Indexability is decided at build time from Vercel's environment: only a
 * production deployment omits the noindex meta tag and X-Robots-Tag header.
 * Previews, branch deploys and local builds are always noindex.
 */
const isProduction = process.env.VERCEL_ENV === 'production'

/** Confirmed production origin, or the documented placeholder (LAUNCH-BLOCKERS.md). */
const siteUrl = (process.env.VITE_SITE_URL ?? 'https://shift.example').replace(/\/+$/, '')

const PUBLIC_ROUTES = ['/', '/our-story', '/privacy', '/terms'] as const

/**
 * Writes public/sitemap.xml at the start of the build so Nitro's static asset
 * manifest includes it. (The Start plugin's own sitemap step runs after Nitro
 * has snapshotted its assets, so its file 404s from the server.) Lists only
 * the intended public routes; the 404 is deliberately absent. Gitignored.
 */
function shiftSitemap(): Plugin {
  return {
    name: 'shift-sitemap',
    apply: 'build',
    buildStart() {
      const lastmod = new Date().toISOString().slice(0, 10)
      const urls = PUBLIC_ROUTES.map(
        (path) =>
          `  <url>\n    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.6'}</priority>\n  </url>`,
      )
      mkdirSync('public', { recursive: true })
      writeFileSync(
        'public/sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
      )
    },
  }
}

export default defineConfig({
  define: {
    __INDEXABLE__: JSON.stringify(isProduction),
  },
  plugins: [
    tailwindcss(),
    shiftSitemap(),
    tanstackStart({
      // Static pages: prerender to HTML at build for fast first paint. The
      // sitemap is produced by shiftSitemap() above, not the plugin.
      pages: PUBLIC_ROUTES.map((path) => ({ path })),
      sitemap: { enabled: false },
      prerender: { enabled: true, crawlLinks: false, autoStaticPathsDiscovery: false },
    }),
    // nitro() compiles the server build into the output Vercel deploys.
    nitro({
      // Pre-compress static assets so any host (and the local node server)
      // serves gzip/brotli without relying on edge compression.
      compressPublicAssets: { gzip: true, brotli: true },
      routeRules: {
        '/**': {
          headers: {
            'X-Content-Type-Options': 'nosniff',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'X-Frame-Options': 'DENY',
            'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
            // HSTS intentionally NOT set: enable only after the production
            // domain and any subdomains are confirmed (see LAUNCH-BLOCKERS.md).
            ...(isProduction ? {} : { 'X-Robots-Tag': 'noindex, nofollow' }),
          },
        },
      },
    }),
    viteReact(),
  ],
})
