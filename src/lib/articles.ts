import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Article } from './types'

export type { Article } from './types'
export { CATEGORIES } from './types'

const contentDir = path.join(process.cwd(), 'content')

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / 250)
}

export function getArticles(locale: 'kr' | 'en'): Article[] {
  const dir = path.join(contentDir, locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))

  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug: file.replace(/\.md$/, ''),
        locale,
        title: data.title ?? '',
        summary: data.summary ?? '',
        category: data.category ?? 'ai-news',
        date: data.date ?? '',
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content),
        content,
        featured: data.featured ?? false,
      } as Article
    })
    .filter(a => a.title)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticle(locale: 'kr' | 'en', slug: string): Article | null {
  const file = path.join(contentDir, locale, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    locale,
    title: data.title ?? '',
    summary: data.summary ?? '',
    category: data.category ?? 'ai-news',
    date: data.date ?? '',
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
    content,
    featured: data.featured ?? false,
  }
}
