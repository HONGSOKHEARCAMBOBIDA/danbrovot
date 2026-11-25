# ចំណេះដឹង — Knowledge is Power

Static Khmer knowledge & history website. Vue 3 + TypeScript + Vite + Element Plus + Vue Router (Composition API, `<script setup>`). No backend, no database.

## Local development

```bash
npm install
cp .env.example .env     # then edit the two values inside
npm run dev              # http://localhost:5173
npm run build            # type-check + production build into dist/
npm run preview          # serve dist/ locally
```

## Project structure

```
src/
  components/{layout,common,articles,videos,home}/
  views/        Home, Category (history/biography/knowledge/stories), Article, Videos, About, NotFound
  router/       routes
  data/         articles.ts · categories.ts · videos.ts · settings.ts   <- all content lives here
  config/       pages.ts (nav + page titles/descriptions)
  composables/  useSeo, useArticles, useFormat
  types/        TypeScript interfaces
  styles/       main.css (design tokens + Element Plus theme)
public/         images/, favicon.svg, robots.txt, _redirects
vite/           seoPlugin.ts (pre-renders meta tags per route, sitemap.xml, robots.txt)
scripts/        generate-images.mjs (creates the sample artwork)
```

## Add an article

Open `src/data/articles.ts` and copy an existing object:

```ts
{
  id: 'a9',                       // unique
  slug: 'my-new-article',         // used in the URL: /article/my-new-article
  title: '…',
  description: '…',               // shown on cards and in search/social previews
  content: `First paragraph.

## Sub-heading

Second paragraph.`,               // blank line = new paragraph, "## " = sub-heading
  image: '/images/my-cover.jpg',  // file placed in public/images/
  category: 'history',            // history | biography | knowledge | stories
  publishedAt: '2026-12-01',      // YYYY-MM-DD
  featured: false,                // true = eligible for "Featured" on the home page
  tags: ['…'],
}
```

The article page, listing page, related articles, sitemap and social meta tags are all generated automatically. Use 16:9 images (e.g. 1200×675).

## Change the Facebook Page URL

Set `VITE_FACEBOOK_URL` in `.env` (and in Cloudflare Pages → Settings → Variables). Page name and contact details are in `src/data/settings.ts`. Video links: edit `facebookUrl` for each item in `src/data/videos.ts`.

## Replace the logo and images

- Logo: replace `public/images/logo.svg` and `public/favicon.svg` (the included eagle is a simple placeholder — use your real page logo).
- Share image: replace `public/images/og-cover.png` (1200×630 PNG or JPG; Facebook does not accept SVG).
- Apple icon: replace `public/apple-touch-icon.png` (180×180).
- Article covers / video thumbnails: put files in `public/images/` and update the `image` / `thumbnail` fields. The included SVGs are sample artwork.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub/GitLab repository.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Build output directory: `dist` · Node version 20 or newer.
4. Add environment variables: `VITE_SITE_URL` (your final URL, no trailing slash) and `VITE_FACEBOOK_URL`.
5. Deploy. `public/_redirects` makes deep links work (single-page-app fallback).

Alternative: `npm run build` then upload `dist/` with Wrangler: `npx wrangler pages deploy dist`.

## SEO

On every build, `vite/seoPlugin.ts` writes a separate HTML file for each page with its own title, description, canonical URL and Open Graph/Twitter tags, plus `sitemap.xml` and `robots.txt` using `VITE_SITE_URL`. Titles/descriptions of static pages are in `src/config/pages.ts`.
