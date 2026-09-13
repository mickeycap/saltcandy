import { Link } from '@tanstack/react-router'
import { useEffect, useId, useRef, useState } from 'react'
import { Logo } from './Logo'
import { LaunchCta } from './LaunchCta'

const NAV = [
  { label: 'The candy', to: '/' as const, hash: 'products' },
  { label: 'Our story', to: '/our-story' as const },
  { label: 'FAQ', to: '/' as const, hash: 'faq' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="wrap flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link to="/" className="rounded-md" aria-label="SHIFT home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-[0.9375rem] font-medium text-ink/80 transition-colors hover:text-ink"
              activeProps={{ className: 'text-ink' }}
              activeOptions={{ exact: true, includeHash: false }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LaunchCta className="hidden md:inline-flex" />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-ink/10 bg-cream md:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-ink/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 px-3 pb-2">
            <LaunchCta className="w-full" onClick={() => setOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  )
}
