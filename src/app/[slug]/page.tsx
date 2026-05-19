import { getArticle, getArticles, CATEGORIES } from '../../lib/articles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ArticleCard from '../../components/ArticleCard'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export async function generateStaticParams() {
  const articles = getArticles(LOCALE)
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(LOCALE, slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.summary,
  }
}

async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)
  return result.toString()
}

function formatDate(dateStr: string, locale: 'kr' | 'en') {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (locale === 'kr') {
    return `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일`
  }
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const locale = LOCALE
  const article = getArticle(locale, slug)
  if (!article) notFound()

  const html = await renderMarkdown(article.content)
  const cat = CATEGORIES[article.category]
  const catLabel = cat ? (locale === 'kr' ? cat.kr : cat.en) : article.category
  const dateStr = formatDate(article.date, locale)
  const isKr = locale === 'kr'
  const readLabel = isKr ? `${article.readingTime}분 읽기` : `${article.readingTime} min read`

  const related = getArticles(locale)
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3)

  return (
    <>
      <Header locale={locale} />

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 64 }}>

          {/* Article */}
          <article style={{ maxWidth: '72ch', paddingTop: 48 }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>Home</a>
              <span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>/</span>
              <span className={cat?.class} style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                color: 'var(--cat-color, var(--accent-purple))',
              }}>{catLabel}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: 20,
            }}>{article.title}</h1>

            {/* Summary */}
            {article.summary && (
              <p style={{
                fontSize: 17,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: '1px solid var(--border)',
              }}>{article.summary}</p>
            )}

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <time style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{dateStr}</time>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-hover)', display: 'inline-block' }} />
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{readLabel}</span>
            </div>

            {/* Body */}
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Tags */}
            {article.tags.length > 0 && (
              <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {article.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 11,
                    color: 'var(--text-tertiary)',
                    fontFamily: 'monospace',
                    padding: '2px 8px',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                  }}>#{tag}</span>
                ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside style={{ borderLeft: '1px solid var(--border)', paddingLeft: 32, paddingTop: 48 }}>
            <div style={{ position: 'sticky', top: 24 }}>
              {related.length > 0 && (
                <>
                  <p style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: 'monospace',
                    color: 'var(--text-tertiary)',
                    marginBottom: 8,
                  }}>
                    {isKr ? '관련 기사' : 'Related'}
                  </p>
                  {related.map(a => (
                    <ArticleCard key={a.slug} article={a} variant="compact" />
                  ))}
                </>
              )}
            </div>
          </aside>
        </div>
      </main>

      <Footer locale={locale} />

      <style>{`
        @media (max-width: 900px) {
          main > div { grid-template-columns: 1fr !important; }
          aside { display: none; }
        }
      `}</style>
    </>
  )
}
