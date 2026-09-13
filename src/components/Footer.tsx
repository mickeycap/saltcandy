import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'
import { openPreferences } from '../lib/consent'
import { TAGLINE } from '../lib/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <Logo size="lg" />
          <p className="mt-3 text-lg font-medium text-ink">{TAGLINE}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Products, packaging, ingredients and claims are in development and
            subject to review. Nothing on this site is currently for sale.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-ink">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" hash="products" className="text-ink/80 hover:text-ink">Products</Link></li>
            <li><Link to="/our-story" className="text-ink/80 hover:text-ink">Our story</Link></li>
            <li><Link to="/" hash="faq" className="text-ink/80 hover:text-ink">FAQ</Link></li>
            <li><Link to="/" hash="launch-updates" className="font-semibold text-link hover:text-link-hover">Get launch updates</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="text-sm font-semibold text-ink">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/privacy" className="text-ink/80 hover:text-ink">Privacy policy</Link></li>
            <li><Link to="/terms" className="text-ink/80 hover:text-ink">Terms and conditions</Link></li>
            <li>
              <button
                type="button"
                onClick={openPreferences}
                className="text-ink/80 underline-offset-4 hover:text-ink hover:underline"
              >
                Cookie preferences
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hairline">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SHIFT. All rights reserved.</p>
          <p>Prototype site · draft legal pages pending review</p>
        </div>
      </div>
    </footer>
  )
}
