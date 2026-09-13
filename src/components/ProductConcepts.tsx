import { CONCEPTS } from '../lib/products'
import { LaunchCta } from './LaunchCta'
export function ProductConcepts() {
  return (
    <section id="products" className="collection wrap">
      <div className="section-topline"><p className="eyebrow">The first two flavor directions</p><span className="edition">The SHIFT collection / 001</span></div>
      <div className="collection-heading"><h2>Different moments.<br />Same you.</h2><p>Something bright. Something deep.<br />Two candy concepts to make the everyday<br className="desktop-break" /> a little more delicious.</p></div>
      <div className="concept-grid">
        {CONCEPTS.map((concept, index) => (
          <article key={concept.slug} className={`flavor-card ${concept.tone}`}>
            <div className="flavor-photo">
              <img src={`/shift/${concept.tone}-v2-960.webp`} srcSet={`/shift/${concept.tone}-v2-480.webp 480w, /shift/${concept.tone}-v2-960.webp 960w`} sizes="(min-width: 768px) 46vw, 92vw" width={1536} height={1024} alt={index === 0 ? 'Golden candy concept with fresh lemon and ginger in warm sunlight' : 'Ruby candy concept with tart cherries on lavender stone'} loading="lazy" />
              <span className="flavor-number">0{index + 1} / {index === 0 ? 'DAY' : 'DUSK'}</span><span className="development-tag">In development</span>
            </div>
            <div className="flavor-copy">
              <p className="eyebrow">{concept.moment}</p>
              <h3>{concept.name}</h3><p className="flavor-name">{concept.flavorDirection}</p>
              <p className="flavor-description">{concept.description}</p>
              <div className="flavor-bottom"><LaunchCta variant="text" /><span className="mini-horizon" aria-hidden="true" /></div>
              <details className="concept-details"><summary>What we’re exploring <span aria-hidden="true">+</span></summary><p>{concept.functionDirection}. Hard or sour candy is our starting point; ingredients, format and serving size may change. No functional benefits are claimed.</p></details>
            </div>
          </article>
        ))}
      </div>
      <p className="collection-note">A taste of the direction, not the finished product. Images are concept illustrations. Nothing is for sale yet.</p>
    </section>
  )
}
