/**
 * Site-wide constants and the per-page <head> builder.
 *
 * SITE_URL is a documented placeholder until the production domain is
 * confirmed (see LAUNCH-BLOCKERS.md). INDEXABLE is a build-time boolean set in
 * vite.config.ts from VERCEL_ENV, so previews carry noindex and production does
 * not. The meta tag below is what search engines honour; robots.txt is not.
 */
export const SITE_NAME = 'SHIFT'
export const TAGLINE = 'Candy for moments.'

export const SITE_URL_PLACEHOLDER = 'https://shift.example'
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? SITE_URL_PLACEHOLDER).replace(/\/+$/, '')
export const SITE_URL_IS_PLACEHOLDER = !import.meta.env.VITE_SITE_URL

export const INDEXABLE: boolean = typeof __INDEXABLE__ === 'boolean' ? __INDEXABLE__ : false

export const SOCIAL_IMAGE = `${SITE_URL}/og/shift-social.png`

type PageHeadInput = {
  title: string
  description: string
  /** Route path starting with "/" */
  path: string
}

/** Every route builds its head through this so titles, canonicals and social
 *  cards stay consistent and the preview noindex can never be forgotten. */
export function pageHead({ title, description, path }: PageHeadInput) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
  const fullTitle = path === '/' ? `${SITE_NAME} | ${TAGLINE}` : `${title} | ${SITE_NAME}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      ...(INDEXABLE ? [] : [{ name: 'robots', content: 'noindex, nofollow' }]),
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: SOCIAL_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_NAME}: ${TAGLINE}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: SOCIAL_IMAGE },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}
