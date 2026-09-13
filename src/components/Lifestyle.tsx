import { ArrowLink } from './LaunchCta'
export function Lifestyle() {
  return (
    <section id="moments" className="wrap lifestyle-grid">
      <figure className="lifestyle-photo"><img src="/shift/morning-v2-960.webp" srcSet="/shift/morning-v2-480.webp 480w, /shift/morning-v2-960.webp 960w" sizes="(min-width: 768px) 45vw, 90vw" width={1536} height={1024} alt="Sunlit golden hard candy concept beside lemon and fresh ginger" loading="lazy" /><figcaption>A little candy. A moment for you.</figcaption></figure>
      <div className="lifestyle-copy"><p className="eyebrow">The good in the in-between</p><h2>Your day is full.<br />This moment<br />is yours.</h2><p>Between the first coffee and the last open tab, there’s room for something small and good. A bright bite. A little pause. Just because.</p><div className="moments-list"><span>The first coffee</span><span>The afternoon pause</span><span>The long way home</span><span>The last light</span></div><ArrowLink to="/" hash="launch-updates">Get launch updates</ArrowLink></div>
    </section>
  )
}
