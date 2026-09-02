import type { Product } from '../lib/catalog'
import { FlavorCard } from './FlavorCard'
import { SectionHead } from './SectionHead'

export function Flavors({ products }: { products: Product[] }) {
  return (
    <section id="flavors" className="grain bg-cream py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="The lineup"
          title="Two tins"
          lede="Identical mineral load, identical price. One has caffeine in it and one does not — that is the whole decision."
        />
        <ul className="mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <li key={product.id} className="flex">
              <FlavorCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
