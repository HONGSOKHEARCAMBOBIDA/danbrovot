export type CategorySlug = 'history' | 'biography' | 'knowledge' | 'stories'
export type CategoryIcon = 'clock' | 'user' | 'bulb' | 'book'

export interface Category {
  slug: CategorySlug
  title: string
  titleEn: string
  description: string
  icon: CategoryIcon
  /** Route path of the listing page */
  path: string
}

export interface Article {
  id: string
  slug: string
  title: string
  description: string
  /** Paragraphs separated by a blank line. A line starting with "## " is a sub-heading. */
  content: string
  image: string
  category: CategorySlug
  /** ISO date: YYYY-MM-DD */
  publishedAt: string
  featured: boolean
  tags: string[]
}

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  /** Link to the video on Facebook (opens in a new tab). */
  facebookUrl: string
  publishedAt: string
}

export interface SiteSettings {
  name: string
  nameEn: string
  slogan: string
  sloganEn: string
  description: string
  siteUrl: string
  facebookUrl: string
  facebookPageName: string
  logo: string
  /** Use a PNG/JPG for best Facebook sharing results */
  ogImage: string
  contact: { email: string; phone: string; address: string }
}

export interface NavItem {
  label: string
  to: string
}

export interface SeoMeta {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}
