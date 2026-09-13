/**
 * Cookie / storage consent.
 *
 * The prototype loads no analytics, pixels or marketing scripts, so the only
 * storage in use is this preference record itself (strictly necessary). The
 * gate is still real: anything optional added later must check `isAllowed()`
 * before loading, and a rejection must keep it off.
 */
export type OptionalCategory = 'analytics' | 'marketing'

export type Consent = {
  version: 1
  decidedAt: string
  analytics: boolean
  marketing: boolean
}

export const CONSENT_KEY = 'shift.consent.v1'
const OPEN_EVENT = 'shift:consent:open'
const CHANGE_EVENT = 'shift:consent:change'

const isBrowser = () => typeof window !== 'undefined'

export function readConsent(): Consent | null {
  if (!isBrowser()) return null
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      (parsed as Consent).version === 1 &&
      typeof (parsed as Consent).analytics === 'boolean' &&
      typeof (parsed as Consent).marketing === 'boolean'
    ) {
      return parsed as Consent
    }
    return null
  } catch {
    return null
  }
}

export function writeConsent(choice: Pick<Consent, 'analytics' | 'marketing'>): Consent {
  const record: Consent = { version: 1, decidedAt: new Date().toISOString(), ...choice }
  if (isBrowser()) {
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
    } catch {
      /* storage unavailable (private mode, blocked) — treat as session-only */
    }
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: record }))
  }
  return record
}

/** Withdraw consent entirely: the banner will show again. */
export function clearConsent() {
  if (!isBrowser()) return
  try {
    window.localStorage.removeItem(CONSENT_KEY)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: null }))
}

export function isAllowed(category: OptionalCategory): boolean {
  return readConsent()?.[category] === true
}

export function openPreferences() {
  if (isBrowser()) window.dispatchEvent(new Event(OPEN_EVENT))
}

export function onOpenPreferences(handler: () => void) {
  if (!isBrowser()) return () => {}
  window.addEventListener(OPEN_EVENT, handler)
  return () => window.removeEventListener(OPEN_EVENT, handler)
}

export function onConsentChange(handler: (c: Consent | null) => void) {
  if (!isBrowser()) return () => {}
  const listener = (e: Event) => handler((e as CustomEvent<Consent | null>).detail)
  window.addEventListener(CHANGE_EVENT, listener)
  return () => window.removeEventListener(CHANGE_EVENT, listener)
}
