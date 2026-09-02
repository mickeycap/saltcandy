import { SectionHead } from './SectionHead'

const QA = [
  {
    q: 'Is this candy or a supplement?',
    a: 'Candy that behaves like an electrolyte mix. It is pressed, it is sour, and you eat it because you want to — the minerals are the reason it exists, not an excuse for the sugar.',
  },
  {
    q: 'How salty and how sour is it, really?',
    a: 'Salty enough that the first piece is a decision. Sour on the front, mineral on the finish. Coral Grapefruit sits at 3/5 and Sea Salt Citrus at 4/5, so start with the grapefruit if you want to work up to it.',
  },
  {
    q: 'Do I still need to drink water?',
    a: 'Yes. Nothing here replaces water, and it is not meant to. Salt and acid drive thirst — the tin is a nudge toward the bottle, plus the minerals that make the water stay with you.',
  },
  {
    q: 'Which tin has the caffeine?',
    a: 'Coral Grapefruit, at 75mg per four pieces — about a cup of coffee, from green tea. Sea Salt Citrus has none at all. Everything else about the two is identical, down to the milligram.',
  },
  {
    q: 'How many pieces in a tin?',
    a: 'Forty pressed pieces, roughly ten servings of four. A tin lives in a pocket for about a week of hard use, longer if you are only topping up.',
  },
  {
    q: 'Who is it actually for?',
    a: 'People who are upright for longer than is convenient. Long runs, long shifts, long nights — the mineral maths is the same for all three. The caffeine is the part you choose.',
  },
  {
    q: "What's not in it?",
    a: 'No taurine, no artificial dyes, no sugar to speak of. Vegan, gluten-free, and third-party tested every batch. The colour in both tins comes from fruit and vegetable concentrate.',
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="border-y-2 border-border bg-surface-raised py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="No small print" title="Straight answers" />

        <dl className="mt-12 grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2">
          {QA.map((item) => (
            <div key={item.q}>
              <dt className="font-display text-lg leading-snug font-semibold uppercase tracking-[0.02em] text-accent-text">
                {item.q}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
