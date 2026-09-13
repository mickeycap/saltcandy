import { Section, SectionHeading } from './Section'

const QA = [
  {
    q: 'What is SHIFT?',
    a: 'A candy brand in development. We’re starting with two hard or sour candy concepts — Morning Shift (salty lemon and ginger) and Evening Shift (tart cherry) — made to taste good first, and to fit a moment in your day second.',
  },
  {
    q: 'Can I buy it yet?',
    a: 'Not yet. Nothing on this site is for sale, and there’s no launch date to announce. The most useful thing you can do is join the launch list; that’s the only place we’ll say when there’s something real to try.',
  },
  {
    q: 'What’s in it?',
    a: 'That’s still being worked out. Morning Shift is exploring nootropic ingredients and Evening Shift is exploring magnesium and other evening-oriented ingredients — but ingredients, amounts, format and serving size are all under development, and we won’t publish them until they’re settled and reviewed.',
  },
  {
    q: 'Will it help me focus, or sleep?',
    a: 'We’re not making that claim, and we won’t unless a finished formulation genuinely supports it. What we can say is what we’re aiming for: credible function in a practical serving, not a pinch of something for the label. Until then, treat SHIFT as what it is — a candy.',
  },
  {
    q: 'Is it a supplement or a candy?',
    a: 'A candy. Function is the second word in our philosophy on purpose. Any functional ingredients are there to earn their place within something you’d want to eat anyway.',
  },
  {
    q: 'Why start with just two?',
    a: 'Because we’d rather prove one excellent candy than launch a range. The plan is to get one right, bring in the second when development and cost make sense, and grow into a small collection for different moments from there.',
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
