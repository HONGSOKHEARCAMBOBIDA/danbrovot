import { settings } from '../data/settings'
import { categories } from '../data/categories'

export interface PageMeta {
  path: string
  title: string
  description: string
}

/** Single source of truth for static page titles/descriptions (router, SEO, sitemap). */
export const staticPages: PageMeta[] = [
  { path: '/', title: `${settings.name} | ${settings.sloganEn}`, description: settings.description },
  ...categories.map((c) => ({
    path: c.path,
    title: `${c.title} (${c.titleEn}) | ${settings.name}`,
    description: c.description,
  })),
  {
    path: '/videos',
    title: `វីដេអូអប់រំ | ${settings.name}`,
    description: 'វីដេអូអប់រំអំពីប្រវត្តិសាស្ត្រ បុគ្គលល្បីៗ និងចំណេះដឹងទូទៅ ដែលចែករំលែកតាមទំព័រ Facebook របស់យើង។',
  },
  {
    path: '/about',
    title: `អំពីយើង | ${settings.name}`,
    description: 'ស្វែងយល់ពីគោលបំណងនៃគេហទំព័រចំណេះដឹង និងរបៀបដែលយើងជ្រើសរើស និងចែករំលែកខ្លឹមសារ។',
  },
]

export const navItems = [
  { label: 'ទំព័រដើម', to: '/' },
  { label: 'ប្រវត្តិសាស្ត្រ', to: '/history' },
  { label: 'បុគ្គលល្បីៗ', to: '/biography' },
  { label: 'ចំណេះដឹង', to: '/knowledge' },
  { label: 'វីដេអូ', to: '/videos' },
  { label: 'អំពីយើង', to: '/about' },
]
