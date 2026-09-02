import { createFileRoute } from '@tanstack/react-router'
import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import { Flavors } from '../components/Flavors'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Nav } from '../components/Nav'
import { Ritual } from '../components/Ritual'
import { Ticker } from '../components/Ticker'
import { getProducts, type Product } from '../lib/catalog'
import { Formula } from '../components/Formula'

const SITE = 'https://saltysoursuckers.com'

const TITLE = 'Salty Sour Suckers — Salty-Sour Electrolyte Candy in a Pocket Tin'
const DESCRIPTION =
  'Pressed salty-sour tablets with 380mg sodium, 210mg potassium and 60mg magnesium glycinate. Two tins at $12 — one with 75mg caffeine, one with none.'

export const Route = createFileRoute('/')({
  loader: async () => ({ products: await getProducts() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: SITE },
      { property: 'og:site_name', content: 'Salty Sour Suckers' },
      { property: 'og:image', content: `${SITE}/img/og-cover.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'The Salty Sour Suckers S-cubed emblem beside two pocket tins of electrolyte candy',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: `${SITE}/img/og-cover.png` },
    ],
    links: [{ rel: 'canonical', href: SITE }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(buildSchema(loaderData?.products ?? [])),
      },
    ],
  }),
  component: IndexPage,
})

/** ItemList of Product nodes, built from the catalog layer — never hardcoded. */
function buildSchema(products: Product[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Salty Sour Suckers electrolyte candy tins',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `${SITE}/products/${product.handle}`,
        name: `${product.title} — Salty Sour Suckers Electrolyte Candy`,
        description: product.blurb,
        sku: product.handle,
        image: `${SITE}${product.image.url}`,
        brand: { '@type': 'Brand', name: 'Salty Sour Suckers' },
        category: 'Electrolyte candy',
        offers: {
          '@type': 'Offer',
          url: `${SITE}/products/${product.handle}`,
          price: product.price.amount,
          priceCurrency: product.price.currencyCode,
          availability: product.available
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        },
        additionalProperty: [
          { name: 'Sodium', value: `${product.electrolytes.sodiumMg} mg` },
          { name: 'Potassium', value: `${product.electrolytes.potassiumMg} mg` },
          { name: 'Magnesium', value: `${product.electrolytes.magnesiumMg} mg` },
          { name: 'Sugar', value: `${product.electrolytes.sugarG} g` },
          { name: 'Calories', value: `${product.electrolytes.caloriesKcal} kcal` },
          { name: 'Caffeine', value: `${product.caffeineMg} mg` },
          { name: 'Salinity', value: `${product.salinity} of 5` },
        ].map((property) => ({ '@type': 'PropertyValue', ...property })),
      },
    })),
  }
}

function IndexPage() {
  const { products } = Route.useLoaderData()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Flavors products={products} />
        <Formula />
        <Ritual />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
