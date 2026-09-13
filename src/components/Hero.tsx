import { ArrowLink, LaunchCta } from './LaunchCta'
import { Horizon } from './Horizon'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="wrap grid items-center gap-10 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-pill border border-ink/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase">
            <span className="h-2 w-2 rounded-full bg-citrus" aria-hidden="true" />
            In development
          </p>
          <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
            Candy for moments.
          </h1>
          <p className="mt-5 max-w-md text-xl leading-snug text-ink sm:text-2xl">
            From the first pause to the last.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Two candies in development: Morning Shift and Evening Shift. Made to
            taste good first.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <LaunchCta />
            <ArrowLink to="/" hash="products">
              See the concepts
            </ArrowLink>
          </div>
        </div>

        {/* Prototype hero crop: 492×289 source with baked-in labels. Never
            upscaled past its native width. */}
        <figure className="relative mx-auto w-full max-w-[492px] lg:max-w-none">
          <Horizon className="absolute inset-0 -z-10 h-full w-full rounded-card" />
          <picture className="block p-3 sm:p-5">
            <source
              type="image/webp"
              srcSet="/shift/hero-scene-sm.webp 246w, /shift/hero-scene.webp 492w"
              sizes="(min-width: 1024px) 492px, min(100vw - 2.5rem, 492px)"
            />
            <img
              src="/shift/hero-scene.png"
              width={492}
              height={289}
              alt="Morning Shift and Evening Shift concept pouches on a cream surface with lemon, ginger, cherries and hard candies"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="mx-auto w-full max-w-[492px] rounded-[calc(var(--radius-card)-0.4rem)] shadow-[0_24px_60px_-30px_var(--color-plum)]"
            />
          </picture>
          <figcaption className="sr-only">Prototype product concepts, packaging in development.</figcaption>
        </figure>
      </div>
      <div className="hairline" />
    </section>
  )
}
