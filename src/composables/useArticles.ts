import { articles } from '@/data/articles'
import type { Article, CategorySlug } from '@/types'

const byDateDesc = (a: Article, b: Article) => b.publishedAt.localeCompare(a.publishedAt)

export const useArticles = () => ({
  all: [...articles].sort(byDateDesc),
  featured: articles.filter((a) => a.featured).sort(byDateDesc),
  latest: (limit: number) => [...articles].sort(byDateDesc).slice(0, limit),
  byCategory: (slug: CategorySlug) => articles.filter((a) => a.category === slug).sort(byDateDesc),
  related: (article: Article, limit = 3) => {
    const sameCat = articles.filter((a) => a.id !== article.id && a.category === article.category)
    const others = articles.filter((a) => a.id !== article.id && a.category !== article.category)
    return [...sameCat, ...others].slice(0, limit)
  },
})
