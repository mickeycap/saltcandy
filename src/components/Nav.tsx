import { Emblem } from './Emblem'
import { BoltDivider } from './Motifs'

const LINKS = [
  { href: '#flavors', label: 'Flavors' },
  { href: '#formula', label: 'Formula' },
  { href: '#ritual', label: 'Ritual' },
  { href: '#faq', label: 'FAQ' },
]

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display uppercase tracking-[0.06em] ${className}`}>
      <span className="text-primary-text">Salty Sour</span>{' '}
      <span className="text-ink">Suckers</span>
    </span>
  )
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-cream">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-4 sm:px-6"
      >
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <Emblem title={null} className="h-9 w-9 shrink-0" />
          <Wordmark className="text-base leading-none sm:text-xl" />
          <span className="sr-only">Salty Sour Suckers home</span>
        </a>

        <BoltDivider className="hidden h-4 w-20 text-accent lg:block" />

        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="stamp text-ink transition-colors hover:text-primary-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#flavors"
          className="lift rule ml-auto shrink-0 rounded-tin bg-accent px-3 py-2.5 stamp whitespace-nowrap text-accent-foreground block-shadow-sm sm:px-4 lg:ml-0"
        >
          Get a tin
        </a>
      </nav>
    </header>
  )
}
