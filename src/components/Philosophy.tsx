import { Section, SectionHeading } from './Section'

const PRINCIPLES = [
  {
    title: 'Taste is the whole point',
    body: 'If you wouldn’t reach for it as a candy, nothing else matters.',
  },
  {
    title: 'Function that earns its place',
    body: 'Ingredients only at amounts that could matter in a practical serving. No token pinches, no placebo dosing.',
  },
  {
    title: 'Simple, and worked out properly',
    body: 'Short ingredient lists, and attention to how a candy behaves: for teeth, for stomachs, for shipping in summer. Development priorities, not promises.',
  },
]

export function Philosophy() {
  return (
    <Section tone="ink" id="philosophy">
      <SectionHeading
        tone="cream"
        eyebrow="Our philosophy"
        title="Candy first. Function second."
        lede="Candy you’d enjoy as a treat, that fits the moments of your day: work, workouts, breaks, winding down. The order of those words is deliberate."
      />
      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <li key={p.title} className="border-t border-cream/15 pt-6">
            <p className="font-heading text-sm font-bold text-citrus">0{i + 1}</p>
            <h3 className="mt-3 text-xl text-cream">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-cream/80">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
