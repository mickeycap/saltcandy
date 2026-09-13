import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import appCss from '../styles.css?url'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CookieConsent } from '../components/CookieConsent'
import { NotFound } from '../components/NotFound'
import { INDEXABLE } from '../lib/site'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#F8F4E9' },
      ...(INDEXABLE ? [] : [{ name: 'robots', content: 'noindex, nofollow' }]),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      // Preload only the faces that paint above the fold (heading + body).
      { rel: 'preload', href: '/fonts/geist-latin-700-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-latin-400-normal.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png', sizes: '180x180' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <>
      <a href="#main" className="sr-only-focusable pill bg-primary text-primary-foreground">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
