import { Link } from '@tanstack/react-router'
import { Symbol } from './Logo'

export function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      {/* React 19 hoists these into <head>; the root notFoundComponent has no
          route head() of its own. Not-found responses are already noindex. */}
      <title>Page not found — SHIFT</title>
      <meta name="description" content="That page doesn’t exist on the SHIFT prelaunch site." />
      <Symbol className="h-16 w-16" />
      <p className="mt-8 text-sm font-semibold tracking-wide text-link uppercase">404</p>
      <h1 className="mt-2 text-4xl sm:text-5xl">This moment isn’t here.</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
        The page you’re looking for doesn’t exist, or it moved. The site is
        small — everything worth finding is a step away.
      </p>
      <Link to="/" className="pill mt-8 bg-primary text-primary-foreground hover:bg-primary-hover">
        Back to SHIFT
      </Link>
    </section>
  )
}
