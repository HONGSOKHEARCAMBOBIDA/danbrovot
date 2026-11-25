// Generates the sample SVG artwork in public/images. Replace these files with real photos any time.
import { writeFileSync } from 'node:fs'

const out = (n, s) => writeFileSync(new URL(`../public/images/${n}`, import.meta.url), s)
const W = 1200, H = 675

const motifs = {
  history: (c) => // stepped temple towers
    [[330, 380, 90], [470, 330, 110], [600, 270, 130], [730, 330, 110], [870, 380, 90]]
      .map(([x, y, w]) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="${H - 120 - y}" fill="${c}"/><polygon points="${x - w / 2},${y} ${x},${y - w * 0.9} ${x + w / 2},${y}" fill="${c}"/>`).join('') +
    `<rect x="260" y="${H - 120}" width="680" height="16" fill="${c}"/>`,
  biography: (c) => // portrait silhouette
    `<circle cx="600" cy="270" r="95" fill="${c}"/><path d="M380 ${H - 100} C380 440 480 390 600 390 C720 390 820 440 820 ${H - 100} Z" fill="${c}"/>`,
  knowledge: (c) => // concentric light rings
    [230, 170, 110, 50].map((r, i) => `<circle cx="600" cy="320" r="${r}" fill="none" stroke="${c}" stroke-width="${i === 3 ? 0 : 6}" ${i === 3 ? `fill="${c}"` : ''}/>`).join('') +
    `<circle cx="600" cy="320" r="50" fill="${c}"/>`,
  stories: (c) => // open book
    `<path d="M600 200 C520 170 420 170 330 200 L330 460 C420 430 520 430 600 460 Z" fill="${c}"/><path d="M600 200 C680 170 780 170 870 200 L870 460 C780 430 680 430 600 460 Z" fill="${c}" opacity=".7"/>`,
}

const palettes = [['#78151B', '#F2D9D6'], ['#222222', '#E9D3B4'], ['#8B1018', '#FFFFFF'], ['#3A2A26', '#E8C9A0']]

const cover = (cat, p, label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}"><rect width="${W}" height="${H}" fill="${p[0]}"/><rect x="0" y="${H - 120}" width="${W}" height="120" fill="#000" opacity=".18"/>${motifs[cat](p[1])}</svg>`

const items = [
  ['angkor-wat', 'history', 0], ['jayavarman-vii', 'history', 1],
  ['albert-einstein', 'biography', 1], ['marie-curie', 'biography', 0], ['chuon-nath', 'biography', 3],
  ['why-sky-is-blue', 'knowledge', 2], ['honey-never-spoils', 'knowledge', 3], ['rosetta-stone', 'stories', 1],
]
items.forEach(([slug, cat, p]) => out(`cover-${slug}.svg`, cover(cat, palettes[p], slug)))
out('video-angkor.svg', cover('history', palettes[0], 'angkor'))
out('video-sky.svg', cover('knowledge', palettes[2], 'sky'))
out('video-curie.svg', cover('biography', palettes[1], 'curie'))

// Eagle logo (stylised head in profile). Replace logo.svg / favicon.svg with your real logo.
const eagle = (bg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${bg}"/><path d="M24 74 C20 52 30 30 52 27 C65 26 74 33 77 42 L91 53 C85 56 79 55 75 52 C73 63 65 72 52 77 Z" fill="#fff"/><path d="M24 74 C30 66 40 62 48 62 C44 68 40 74 36 82 Z" fill="#fff" opacity=".75"/><circle cx="62" cy="42" r="4" fill="${bg}"/><path d="M55 36 L70 39" stroke="${bg}" stroke-width="3" stroke-linecap="round"/></svg>`
out('logo.svg', eagle('#8B1018'))
writeFileSync(new URL('../public/favicon.svg', import.meta.url), eagle('#8B1018'))

out('og-cover.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#78151B"/><g transform="translate(90 205) scale(2.2)">${eagle('#8B1018').replace(/<\/?svg[^>]*>/g, '')}</g><text x="360" y="300" font-family="Noto Sans Khmer, sans-serif" font-size="84" font-weight="700" fill="#fff">ចំណេះដឹងគឺជាអំណាច</text><text x="360" y="380" font-family="Inter, sans-serif" font-size="42" fill="#F2D9D6">Knowledge is Power</text></svg>`)
