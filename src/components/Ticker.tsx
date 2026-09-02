import { Sparkle } from './Motifs'

const ITEMS = [
  '380mg sodium',
  'Salty · Refreshing · Recharging',
  '1g sugar',
  'Vegan',
  '210mg potassium',
  'One with caffeine, one without',
  '60mg magnesium glycinate',
  'Gluten-free',
  'Third-party tested',
  'Two tins · $12 each',
]

function Run({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-6 pr-6"
      aria-hidden={ariaHidden || undefined}
    >
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-6 whitespace-nowrap">
          <span className="stamp text-primary-foreground">{item}</span>
          <Sparkle className="h-3 w-3 shrink-0 text-primary-foreground/70" />
        </li>
      ))}
    </ul>
  )
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y-2 border-border bg-violet-deep py-3">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Run ariaHidden={false} />
        <Run ariaHidden />
      </div>
    </div>
  )
}
