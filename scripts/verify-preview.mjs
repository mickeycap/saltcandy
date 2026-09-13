import assert from 'node:assert/strict'
const base = process.argv[2] || 'http://127.0.0.1:3103'
const titles = new Set()
for (const path of ['/', '/our-story', '/privacy', '/terms']) {
  const response = await fetch(base + path)
  assert.equal(response.status, 200, path)
  const html = await response.text()
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1)
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]
  assert.ok(title && !titles.has(title))
  titles.add(title)
  for (const text of ['name="description"', 'rel="canonical"', 'property="og:image"', 'noindex']) assert.ok(html.includes(text), path + text)
  assert.match(response.headers.get('x-robots-tag') || '', /noindex/)
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff')
  console.log('PASS', path, title, 'metadata + noindex + security headers')
}
const missing = await fetch(base + '/this-page-does-not-exist')
assert.equal(missing.status, 404)
assert.match(await missing.text(), /Back to SHIFT/)
console.log('PASS custom HTTP 404')
const sitemap = await (await fetch(base + '/sitemap.xml')).text()
assert.equal((sitemap.match(/<loc>/g) || []).length, 4)
assert.match(sitemap, /<urlset/)
console.log('PASS sitemap: 4 canonical routes')
for (const path of ['/robots.txt','/favicon.svg','/favicon.ico','/icons/apple-touch-icon.png','/og/shift-social.png','/shift/hero-v2-640.webp','/shift/hero-v2-1200.webp','/shift/hero-v2-1536.webp','/shift/morning-v2-480.webp','/shift/morning-v2-960.webp','/shift/evening-v2-480.webp','/shift/evening-v2-960.webp']) {
  const response = await fetch(base + path)
  assert.equal(response.status, 200, path)
  assert.ok((await response.arrayBuffer()).byteLength > 0)
  console.log('PASS asset', path)
}
console.log('All HTTP preview checks passed:', base)
