import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'
import { articles } from '../src/data/articles'
import { settings } from '../src/data/settings'
import { staticPages } from '../src/config/pages'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/**
 * After `vite build`: writes a pre-rendered HTML shell (title, description, Open Graph, canonical)
 * for every route, plus sitemap.xml and robots.txt. Crawlers and Facebook's link scraper do not run
 * JavaScript, so this is what makes shared article links show the right title and image.
 */
export function seoPlugin(siteUrlEnv?: string): Plugin {
  const siteUrl = (siteUrlEnv || settings.siteUrl).replace(/\/$/, '')
  let outDir = 'dist'

  const tags = (m: { title: string; description: string; path: string; image: string; type: string }) => `<!--seo-->
    <title>${esc(m.title)}</title>
    <meta name="description" content="${esc(m.description)}" />
    <link rel="canonical" href="${siteUrl}${m.path}" />
    <meta property="og:type" content="${m.type}" />
    <meta property="og:site_name" content="${esc(settings.name)}" />
    <meta property="og:title" content="${esc(m.title)}" />
    <meta property="og:description" content="${esc(m.description)}" />
    <meta property="og:url" content="${siteUrl}${m.path}" />
    <meta property="og:image" content="${m.image}" />
    <meta property="og:locale" content="km_KH" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(m.title)}" />
    <meta name="twitter:description" content="${esc(m.description)}" />
    <meta name="twitter:image" content="${m.image}" />
    <!--/seo-->`

  return {
    name: 'seo-prerender',
    apply: 'build',
    configResolved(c) {
      outDir = c.build.outDir
    },
    closeBundle() {
      const html = readFileSync(join(outDir, 'index.html'), 'utf8')
      const abs = (p: string) => (p.startsWith('http') ? p : siteUrl + p)
      const routes = [
        ...staticPages.map((p) => ({ ...p, image: settings.ogImage, type: 'website' })),
        ...articles.map((a) => ({
          path: `/article/${a.slug}`,
          title: `${a.title} | ${settings.name}`,
          description: a.description,
          image: settings.ogImage,
          type: 'article',
        })),
      ]
      for (const r of routes) {
        const page = html.replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, tags({ ...r, image: abs(r.image) }))
        if (r.path === '/') {
          writeFileSync(join(outDir, 'index.html'), page)
        } else {
          const dir = join(outDir, r.path)
          mkdirSync(dir, { recursive: true })
          writeFileSync(join(dir, 'index.html'), page)
        }
      }
      const urls = routes
        .map((r) => {
          const a = articles.find((x) => `/article/${x.slug}` === r.path)
          return `  <url><loc>${siteUrl}${r.path}</loc>${a ? `<lastmod>${a.publishedAt}</lastmod>` : ''}</url>`
        })
        .join('\n')
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
    },
  }
}
