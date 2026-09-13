import { useId, useState, type FormEvent } from 'react'
import { Section } from './Section'

/**
 * Prelaunch signup — DEMO.
 *
 * No email provider is configured in this repository, so this form validates
 * locally and deliberately does not transmit or store the address anywhere.
 * It never shows a real success message. When a provider is wired up
 * server-side (see LAUNCH-BLOCKERS.md and .env.example), replace `onSubmit`
 * with the server call and only show success on a successful response.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LaunchSignup() {
  const inputId = useId()
  const errorId = useId()
  const noteId = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [demoDone, setDemoDone] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const value = email.trim()
    if (!value) return setError('Enter an email address to continue.')
    if (!EMAIL_RE.test(value)) return setError('That doesn’t look like an email address. Check it and try again.')
    setError(null)
    // Demo: nothing leaves the browser. Do not add a network call here without
    // a server-side handler, validation and abuse protection.
    setDemoDone(true)
    setEmail('')
  }

  return (
    <Section id="launch-updates" className="signup-section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Something sweet is taking shape</p>
        <h2 className="signup-heading">Your next little<br />good thing.</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Follow the first SHIFT. Get launch updates when there’s something real to try.
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          aria-describedby={noteId}
        >
          <div className="flex-1 text-left">
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              id={inputId}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              maxLength={254}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setDemoDone(false)
                if (error) setError(null)
              }}
              placeholder="you@example.com"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className="h-12 w-full rounded-pill border border-ink/25 bg-cream px-5 text-base text-ink placeholder:text-ink/45 focus:border-ink"
            />
            {error ? (
              <p id={errorId} role="alert" className="mt-2 px-2 text-sm font-medium text-danger">
                {error}
              </p>
            ) : null}
          </div>
          <button type="submit" className="pill bg-primary text-primary-foreground hover:bg-primary-hover">
            Get launch updates
          </button>
        </form>

        <p id={noteId} className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-ink">Prototype demo:</strong> this form doesn’t
          send or store anything yet. No email provider is connected.
        </p>

        <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm font-medium text-ink">
          {demoDone ? 'Demo only — nothing was sent or stored. A real confirmation will appear here once a provider is connected.' : ''}
        </p>
      </div>
    </Section>
  )
}
