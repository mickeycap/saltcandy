import { SectionHead } from './SectionHead'

const STEPS = [
  {
    index: '01',
    phase: 'Before',
    title: 'Pre-load',
    body: 'Two pieces and a glass of water an hour out. Salt first, then the water goes where you need it instead of straight through you.',
    rail: 'bg-violet',
  },
  {
    index: '02',
    phase: 'During',
    title: 'Hold the line',
    body: 'One piece every forty-five minutes. Long run, double shift, or four hours on a floor — the interval does not change.',
    rail: 'bg-coral',
  },
  {
    index: '03',
    phase: 'After',
    title: 'Repair',
    body: 'Four pieces before bed. The magnesium works overnight, which is the only shift you are not awake for.',
    rail: 'bg-wave',
  },
]

export function Ritual() {
  return (
    <section id="ritual" className="grain bg-cream py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="The ritual"
          title="How people use it"
          lede="Three moments, one tin. It reads the same whether the long thing ahead of you is a route, a rota or a room."
        />

        <ol className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.index}
              className="rule flex rounded-tin bg-surface-raised p-0 block-shadow"
            >
              <span className={`w-2 shrink-0 ${step.rail}`} aria-hidden="true" />
              <div className="p-6">
                <p className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-bold text-ink">
                    {step.index}
                  </span>
                  <span className="stamp text-subtle-foreground">
                    {step.phase}
                  </span>
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
