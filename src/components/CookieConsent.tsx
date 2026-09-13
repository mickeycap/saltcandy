import { useEffect, useId, useRef, useState } from 'react'
import {
  clearConsent,
  onOpenPreferences,
  readConsent,
  writeConsent,
  type Consent,
} from '../lib/consent'
import { Link } from '@tanstack/react-router'

/**
 * Consent UI. Renders nothing until mounted so server HTML never guesses the
 * visitor's choice. Accept and Reject are equally prominent; Manage opens a
 * native <dialog> (focus trap + Escape for free). The footer's "Cookie
 * preferences" reopens it at any time so consent can be withdrawn.
 */
export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [consent, setConsent] = useState<Consent | null>(null)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const headingId = useId()
  const descId = useId()

  useEffect(() => {
    const current = readConsent()
    setConsent(current)
    setAnalytics(current?.analytics ?? false)
    setMarketing(current?.marketing ?? false)
    setMounted(true)
    return onOpenPreferences(() => {
      const c = readConsent()
      setAnalytics(c?.analytics ?? false)
      setMarketing(c?.marketing ?? false)
      dialogRef.current?.showModal()
    })
  }, [])

  function decide(choice: { analytics: boolean; marketing: boolean }) {
    setConsent(writeConsent(choice))
    dialogRef.current?.close()
  }

  const showBanner = mounted && consent === null

  return (
    <>
      {showBanner ? (
        <div
          role="region"
          aria-label="Cookie preferences"
          className="consent-banner border-t border-ink/15 bg-cream p-4 sm:p-5"
        >
          <p className="text-sm font-semibold text-ink">Cookies and storage</p>
          <p className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
            This site only uses strictly necessary storage — your choice here is
            the only thing it saves. Optional analytics and marketing tools are
            currently disabled. See the{' '}
            <Link to="/privacy" className="font-medium text-link underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
            <button
              type="button"
              onClick={() => decide({ analytics: false, marketing: false })}
              className="pill min-h-11 border border-ink/25 px-4 text-sm text-ink hover:border-ink hover:bg-ink/5"
            >
              Reject optional
            </button>
            <button
              type="button"
              onClick={() => decide({ analytics: true, marketing: true })}
              className="pill min-h-11 border border-ink/25 px-4 text-sm text-ink hover:border-ink hover:bg-ink/5"
            >
              Accept optional
            </button>
            <button
              type="button"
              onClick={() => dialogRef.current?.showModal()}
              className="col-span-2 py-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline sm:py-2"
            >
              Manage preferences
            </button>
          </div>
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-labelledby={headingId}
        aria-describedby={descId}
        className="m-auto w-[min(92vw,32rem)] rounded-card border border-ink/15 bg-cream p-6 text-ink shadow-2xl backdrop:bg-ink/50 sm:p-8"
        onClose={() => {
          /* Closing without deciding keeps the banner up. */
        }}
      >
        <form method="dialog" onSubmit={(e) => e.preventDefault()}>
          <h2 id={headingId} className="text-2xl">Cookie preferences</h2>
          <p id={descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Choose which optional categories may be used. You can change this
            any time from the footer.
          </p>

          <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            <li className="flex items-start justify-between gap-4 py-4">
              <div>
                <p className="font-semibold">Strictly necessary</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Stores this preference. Nothing else. Always on.
                </p>
              </div>
              <span className="mt-1 shrink-0 rounded-pill bg-surface px-3 py-1 text-xs font-semibold text-ink">Always on</span>
            </li>
            <Toggle
              label="Analytics"
              description="Not currently used. No analytics script is loaded on this prototype, whatever you choose."
              checked={analytics}
              onChange={setAnalytics}
            />
            <Toggle
              label="Marketing"
              description="Not currently used. No pixels or ad tools are loaded on this prototype."
              checked={marketing}
              onChange={setMarketing}
            />
          </ul>

          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => decide({ analytics: false, marketing: false })}
              className="pill min-h-11 border border-ink/25 px-5 text-sm text-ink hover:border-ink hover:bg-ink/5"
            >
              Reject optional
            </button>
            <button
              type="button"
              onClick={() => decide({ analytics, marketing })}
              className="pill min-h-11 bg-primary px-5 text-sm text-primary-foreground hover:bg-primary-hover"
            >
              Save preferences
            </button>
          </div>
          {consent ? (
            <button
              type="button"
              onClick={() => {
                clearConsent()
                setConsent(null)
                dialogRef.current?.close()
              }}
              className="mt-4 text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
              Withdraw consent and ask me again
            </button>
          ) : null}
        </form>
      </dialog>
    </>
  )
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  const id = useId()
  return (
    <li className="flex items-start justify-between gap-4 py-4">
      <div>
        <label htmlFor={id} className="font-semibold">{label}</label>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <input
        id={id}
        type="checkbox"
        role="switch"
        aria-checked={checked}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-9 shrink-0 cursor-pointer appearance-none rounded-pill bg-ink/20 transition-colors before:block before:h-4 before:w-4 before:translate-x-0.5 before:translate-y-0.5 before:rounded-full before:bg-cream before:transition-transform checked:bg-ink checked:before:translate-x-[1.125rem]"
      />
    </li>
  )
}
