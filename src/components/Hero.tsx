import { Emblem } from './Emblem'
import { Sparkle, WaveRule } from './Motifs'

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-14 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pt-20 lg:pb-32">
        {/* ---- copy ---- */}
        <div>
          <p className="rule inline-block rounded-tin bg-surface-raised px-3 py-1.5 stamp text-ink">
            Small batch · Electrolyte candy
          </p>

          <h1 className="litho mt-7 font-display text-[2.5rem] leading-[0.95] font-semibold text-ink [text-wrap:initial] sm:text-6xl lg:text-[4.25rem]">
            Salty. <span className="text-accent-text">Sour.</span>
            <br />
            Built for
            <br />
            the <span className="text-primary-text">long haul.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Pressed salty-sour tablets with sodium, potassium and magnesium. Two
            tins, one with caffeine and one without — the morning run and the
            last set, covered.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#flavors"
              className="lift rule rounded-tin bg-primary px-6 py-3.5 font-display text-base uppercase tracking-[0.06em] text-primary-foreground block-shadow"
            >
              Shop the tins — $12
            </a>
            <a
              href="#formula"
              className="stamp text-ink underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent-text"
            >
              See the formula
            </a>
          </div>
        </div>

        {/* ---- emblem ---- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Sparkle className="absolute top-2 left-2 h-7 w-7 animate-drift text-accent motion-reduce:animate-none" />
          <Sparkle className="absolute right-6 bottom-10 h-5 w-5 animate-drift text-primary motion-reduce:animate-none [animation-duration:11s]" />

          <div className="rule grain relative rounded-tin bg-surface-raised p-6 block-shadow sm:p-10">
            <p className="stamp text-center text-ink">Salty Sour Suckers · Pocket Tin</p>
            <Emblem className="mx-auto mt-4 w-full max-w-sm animate-rock motion-reduce:animate-none" />
            <div className="mt-5 flex flex-col items-center gap-3">
              <WaveRule className="h-4 w-40 text-info" />
              <p className="stamp text-center text-ink">
                Salty · Refreshing · Recharging
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* wave line at the base of the section */}
      <WaveRule
        className="absolute inset-x-0 bottom-0 h-8 w-full text-info"
        aria-hidden="true"
      />
    </section>
  )
}
