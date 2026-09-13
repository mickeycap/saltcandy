import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { ProductConcepts } from '../components/ProductConcepts'
import { Philosophy } from '../components/Philosophy'
import { Lifestyle } from '../components/Lifestyle'
import { Faq } from '../components/Faq'
import { LaunchSignup } from '../components/LaunchSignup'
import { pageHead, SITE_NAME, SITE_URL, TAGLINE } from '../lib/site'

export const Route = createFileRoute('/')({
  head: () => ({
    ...pageHead({
      title: TAGLINE,
      description:
        'SHIFT is a candy brand in development: Morning Shift (salty lemon + ginger) and Evening Shift (tart cherry). Candy first, function second. Join the launch list.',
      path: '/',
    }),
    scripts: [
      {
        type: 'application/ld+json',
        // Organization/WebSite only. No Product/Offer schema: nothing is for
        // sale and no reviews, ratings or availability exist to describe.
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/`, slogan: TAGLINE },
            { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/` },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <ProductConcepts />
      <Philosophy />
      <Lifestyle />
      <Faq />
      <LaunchSignup />
    </>
  )
}
