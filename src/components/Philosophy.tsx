import { ArrowLink } from './LaunchCta'
import { Symbol } from './Logo'
export function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-band">
      <div className="wrap philosophy-grid">
        <div><p className="eyebrow">Our non-negotiable</p><h2>Candy first.<br /><span>Function second.</span></h2><Symbol tone="cream" className="philosophy-symbol" /></div>
        <div className="philosophy-copy"><p className="philosophy-lede">It has to be a candy<br />you’d want anyway.</p><p>Flavor leads. We’re exploring thoughtful ingredients that earn their place in a practical serving. No token pinches. No promises ahead of the science.</p><p>First, get one candy right. Then make room for more.</p><ArrowLink to="/our-story" className="story-link">A little more about us</ArrowLink></div>
      </div>
    </section>
  )
}
