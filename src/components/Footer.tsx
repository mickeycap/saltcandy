import { Emblem } from './Emblem'
import { BoltDivider, Sparkle } from './Motifs'
import { Wordmark } from './Nav'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="grain bg-cream py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Emblem title={null} className="h-20 w-20" />
        <Wordmark className="text-3xl" />

        <div className="flex items-center gap-4">
          <Sparkle className="h-3.5 w-3.5 text-accent" />
          <BoltDivider className="h-6 w-44 text-accent" />
          <Sparkle className="h-3.5 w-3.5 text-accent" />
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {['Flavors', 'Formula', 'Ritual', 'FAQ'].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="stamp text-ink transition-colors hover:text-primary-text"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="stamp text-subtle-foreground">
          © {year} Salty Sour Suckers · Drink water
        </p>
      </div>
    </footer>
  )
}
