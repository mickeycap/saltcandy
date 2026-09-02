import { Sparkle } from './Motifs'

export function CtaBand() {
  return (
    <section className="border-y-2 border-border bg-accent py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <Sparkle className="h-6 w-6 animate-drift text-accent-foreground motion-reduce:animate-none" />
        <h2 className="font-display text-4xl leading-tight font-semibold text-accent-foreground sm:text-5xl">
          Pocket-sized hydration
          <br className="hidden sm:block" /> with a mean streak.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-balance text-accent-foreground">
          One of each, or four of the one you liked. Ships flat, fits a pocket.
        </p>
        <a
          href="#flavors"
          className="lift rule rounded-tin bg-cream px-7 py-3.5 font-display text-base uppercase tracking-[0.06em] text-ink block-shadow"
        >
          Build your 4-pack
        </a>
      </div>
    </section>
  )
}
