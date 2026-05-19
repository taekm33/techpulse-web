export interface Article {
  slug: string
  locale: 'kr' | 'en'
  title: string
  summary: string
  category: string
  date: string
  tags: string[]
  readingTime: number
  content: string
  featured?: boolean
}

export const CATEGORIES: Record<string, { kr: string; en: string; class: string }> = {
  'ai-news':    { kr: 'AI 뉴스',    en: 'AI News',       class: 'cat-ai-news' },
  'it-news':    { kr: 'IT 뉴스',    en: 'IT News',       class: 'cat-it-news' },
  'tool-review':{ kr: 'AI 도구 리뷰', en: 'Tool Review',  class: 'cat-tool-review' },
  'dev-trend':  { kr: '개발 트렌드', en: 'Dev Trend',     class: 'cat-dev-trend' },
  'startup':    { kr: '스타트업',   en: 'Startup',        class: 'cat-startup' },
  'hot-issue':  { kr: '핫이슈',     en: 'Hot Issue',      class: 'cat-hot-issue' },
}
