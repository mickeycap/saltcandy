/// <reference types="vite/client" />

/** Set at build time in vite.config.ts: true only for Vercel production. */
declare const __INDEXABLE__: boolean

interface ImportMetaEnv {
  /** Public. The confirmed production origin, e.g. https://example.com — no trailing slash. */
  readonly VITE_SITE_URL?: string
}
