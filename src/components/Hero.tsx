import { ArrowLink, LaunchCta } from './LaunchCta'
export function Hero() {
  return (
    <section className="shift-hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> A little something good is coming</p>
          <h1>Candy for<br /><span>moments.</span></h1>
          <p className="hero-intro">A bright beginning.<br />A cherry on the end of your day.</p>
          <p className="hero-description">Meet SHIFT. Thoughtful candy concepts with bold flavor and a little room for you. From the first pause to the last.</p>
          <div className="hero-actions"><LaunchCta /><ArrowLink to="/" hash="products">Meet your moments</ArrowLink></div>
          <p className="hero-note">Candy first. Function second. Always in that order.</p>
        </div>
        <figure className="hero-art">
          <img src="/shift/hero-v2-1200.webp" srcSet="/shift/hero-v2-640.webp 640w, /shift/hero-v2-1200.webp 1200w, /shift/hero-v2-1536.webp 1536w" sizes="(min-width: 1024px) 56vw, 100vw" width={1536} height={1024} alt="Cream Morning Shift and plum Evening Shift concept pouches, with lemon, ginger, cherries and golden and ruby candies" fetchPriority="high" />
          <figcaption><span>01 / 02</span> Two moments. One sweet idea.<span className="concept-label">Concept packaging · in development</span></figcaption>
        </figure>
      </div>
      <div className="moment-strip"><span>Big on flavor</span><span aria-hidden="true">✳</span><span>Made for the in-between</span><span aria-hidden="true">✳</span><span>A little pause, all yours</span></div>
    </section>
  )
}
