import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

/**
 * The one primary conversion action. Every instance goes to the same signup
 * section on the homepage — no competing purchase, account or quiz CTAs.
 */
export function LaunchCta({
  variant = 'primary',
  className = '',
  children = 'Get launch updates',
  onClick,
}: {
  variant?: 'primary' | 'secondary' | 'text'
  className?: string
  children?: ReactNode
  onClick?: () => void
}) {
  const styles =
    variant === 'primary'
      ? 'pill bg-primary text-primary-foreground hover:bg-primary-hover'
      : variant === 'secondary'
        ? 'pill border border-ink/25 text-ink hover:border-ink hover:bg-ink/5'
        : 'inline-flex items-center gap-1.5 font-semibold text-link underline-offset-4 hover:text-link-hover hover:underline'
  return (
    <Link to="/" hash="launch-updates" onClick={onClick} className={`${styles} ${className}`}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  )
}

/** Secondary in-page link with the board's arrow treatment. */
export function ArrowLink({
  to,
  hash,
  children,
  className = '',
}: {
  to: '/' | '/our-story' | '/privacy' | '/terms'
  hash?: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      hash={hash}
      className={`inline-flex items-center gap-1.5 font-semibold text-link underline-offset-4 hover:text-link-hover hover:underline ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
