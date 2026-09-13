import { Section, SectionHeading } from './Section'

const QA = [
  {
    q: 'What is SHIFT?',
    a: 'A candy brand in development. Two hard or sour candy concepts to start: Morning Shift (salty lemon and ginger) and Evening Shift (tart cherry).',
  },
  {
    q: 'Can I buy it yet?',
    a: 'Not yet, and there’s no launch date. Join the launch list; that’s where we’ll say when there’s something to try.',
  },
  {
    q: 'What’s in it?',
    a: 'Still being worked out. Morning Shift is exploring nootropic ingredients; Evening Shift, magnesium and other evening ingredients. We won’t publish ingredients, amounts, format or serving size until they’re settled and reviewed.',
  },
  {
    q: 'Will it help me focus, or sleep?',
    a: 'We’re not claiming that, and won’t unless a finished formulation supports it. The aim is credible function in a practical serving, not a pinch of something for the label. Until then, it’s a candy.',
  },
  {
    q: 'Is it a supplement or a candy?',
    a: 'A candy. Any functional ingredients have to earn their place in something you’d want to eat anyway.',
  },
  {
    q: 'Why start with just two?',
    a: 'We’d rather prove one excellent candy than launch a range. Get one right, add the second when development and cost make sense, then grow into a small collection.',
  },
]

export function Faq() {
  return (
    <Section id="faq" tone="surface">
      <SectionHeading eyebrow="FAQ" title="Straight answers." />
      <div className="mt-10 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
        {QA.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-6 rounded-md text-left text-lg font-semibold text-ink">
              {item.q}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
