import { CONCEPTS, type Concept } from '../lib/products'
import { LaunchCta } from './LaunchCta'
import { Section, SectionHeading } from './Section'

function ConceptCard({ concept }: { concept: Concept }) {
  const morning = concept.tone === 'morning'
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-card ${
        morning ? 'bg-morning-soft' : 'bg-evening-soft'
      }`}
    >
      <div className="relative px-6 pt-6 sm:px-8 sm:pt-8">
        <p className="absolute top-5 right-5 rounded-pill bg-cream/90 px-3 py-1 text-xs font-semibold tracking-wide text-ink uppercase sm:top-7 sm:right-7">
          {concept.status}
        </p>
        {/* Prototype crop (~355×333) with the pouch label baked in; capped at
            native width so it never softens further. */}
        <picture className="block">
          <source
            type="image/webp"
            srcSet={`${concept.image.webpSmall} ${Math.round(concept.image.width / 2)}w, ${concept.image.webp} ${concept.image.width}w`}
            sizes={`(min-width: 640px) ${concept.image.width}px, min(100vw - 5rem, ${concept.image.width}px)`}
          />
          <img
            src={concept.image.png}
            width={concept.image.width}
            height={concept.image.height}
            alt={concept.image.alt}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full rounded-[calc(var(--radius-card)-0.5rem)]"
            style={{ maxWidth: concept.image.width }}
          />
        </picture>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className={`text-sm font-semibold ${morning ? 'text-cherry' : 'text-cherry'}`}>
          {concept.moment}
        </p>
        <h3 className="mt-2 text-2xl sm:text-3xl">{concept.name}</h3>
        <p className="mt-1 text-lg font-medium text-ink">{concept.flavorDirection}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{concept.description}</p>

        <dl className="mt-6 grid gap-3 border-t border-ink/10 pt-5 text-sm">
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 font-semibold text-ink">Exploring</dt>
            <dd className="text-muted-foreground">{concept.functionDirection}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 font-semibold text-ink">Format</dt>
            <dd className="text-muted-foreground">Hard or sour candy concept — may change during development</dd>
          </div>
        </dl>

        <div className="mt-6">
          <LaunchCta variant="text" />
        </div>
      </div>
    </article>
  )
}

export function ProductConcepts() {
  return (
    <Section id="products">
      <SectionHeading
        eyebrow="Two moments"
        title="Different moments. Same you."
        lede="Both concepts are in development. Flavours, ingredients, formats and serving sizes are still being worked out — and we'd rather get one candy excellent than two candies rushed."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
        {CONCEPTS.map((concept) => (
          <ConceptCard key={concept.slug} concept={concept} />
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Packaging, ingredients and claims are subject to development and review. Nothing shown is for sale.
      </p>
    </Section>
  )
}
