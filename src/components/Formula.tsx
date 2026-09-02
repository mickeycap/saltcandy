import { SectionHead } from './SectionHead'

type Stat = {
  value: string
  unit: string
  label: string
  note: string
  tone: 'primary' | 'accent'
}

const STATS: Stat[] = [
  {
    value: '380',
    unit: 'mg',
    label: 'Sodium',
    note: 'The mineral you actually sweat out, in the amount you actually lose.',
    tone: 'primary',
  },
  {
    value: '210',
    unit: 'mg',
    label: 'Potassium',
    note: 'Works the other side of the same pump. Sodium without it is half a job.',
    tone: 'accent',
  },
  {
    value: '60',
    unit: 'mg',
    label: 'Magnesium',
    note: 'Glycinate, not oxide — it absorbs, and it will not send you to the bathroom.',
    tone: 'primary',
  },
  {
    value: '1',
    unit: 'g',
    label: 'Sugar',
    note: 'Allulose does the sweetening. Enough to be candy, not enough to be a drink.',
    tone: 'accent',
  },
]

export function Formula() {
  return (
    <section id="formula" className="border-y-2 border-border bg-band py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="The formula"
          title="What's in every four pieces"
          lede="No proprietary blends, no rounding up. This is the whole mineral load, and it is identical in both tins."
        />

        {/* 2px gaps over an ink ground print as rules at every breakpoint */}
        <dl className="rule mt-12 grid grid-cols-1 gap-[2px] rounded-tin bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-surface p-6 sm:p-7">
              <dt className="stamp text-subtle-foreground">{stat.label}</dt>
              <dd className="mt-3">
                <p
                  className={`font-display text-5xl leading-none font-semibold ${
                    stat.tone === 'primary'
                      ? 'text-primary-text'
                      : 'text-accent-text'
                  }`}
                >
                  {stat.value}
                  <span className="ml-1 font-mono text-xl font-medium text-ink">
                    {stat.unit}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {stat.note}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        {/* The one thing that is not identical between the two tins. */}
        <p className="rule mt-6 flex flex-col gap-3 rounded-tin bg-surface px-6 py-5 sm:flex-row sm:items-baseline sm:gap-5">
          <span className="stamp shrink-0 text-accent-text">The one difference</span>
          <span className="text-sm leading-relaxed text-muted-foreground">
            Coral Grapefruit carries{' '}
            <strong className="font-semibold text-ink">75mg of caffeine</strong>{' '}
            from green tea, about a cup of coffee. Sea Salt Citrus carries{' '}
            <strong className="font-semibold text-ink">none</strong>. Everything
            above stays the same either way.
          </span>
        </p>
      </div>
    </section>
  )
}
