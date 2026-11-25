import { watchEffect, toValue, type MaybeRefOrGetter } from 'vue'
import { settings } from '@/data/settings'
import type { SeoMeta } from '@/types'

const site = settings.siteUrl.replace(/\/$/, '')

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Updates title, description, canonical, Open Graph and Twitter tags for the current page. */
export function useSeo(meta: MaybeRefOrGetter<SeoMeta>) {
  watchEffect(() => {
    const m = toValue(meta)
    const image = new URL(m.image ?? settings.ogImage, site + '/').href
    const url = site + m.path
    document.title = m.title
    setMeta('name', 'description', m.description)
    setMeta('property', 'og:type', m.type ?? 'website')
    setMeta('property', 'og:site_name', settings.name)
    setMeta('property', 'og:title', m.title)
    setMeta('property', 'og:description', m.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', m.title)
    setMeta('name', 'twitter:description', m.description)
    setMeta('name', 'twitter:image', image)
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url
  })
}
