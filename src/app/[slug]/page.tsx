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
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
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
    .slice(0, 4)

  return (
    <>
      <Header locale={locale} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 56 }}>

          {/* Article */}
          <article style={{ paddingTop: 40, paddingBottom: 80 }}>

            {/* Breadcrumb */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'var(--ink3)',
            }}>
              <a href="/" style={{ color: 'var(--ink3)' }}>home</a>
              <span>/</span>
              <span style={{ color: 'var(--accent)' }}>{catLabel}</span>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <span className="tp-tag tp-tag--accent">{catLabel}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: 'var(--ink)',
              marginBottom: 18,
            }}>{article.title}</h1>

            {/* Summary */}
            {article.summary && (
              <p style={{
                fontSize: 17,
                color: 'var(--ink2)',
                lineHeight: 1.65,
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: '1px solid var(--line)',
              }}>{article.summary}</p>
            )}

            {/* Meta */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 40,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'var(--ink3)',
            }}>
              <time>{dateStr}</time>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--line2)', display: 'inline-block' }} />
              <span>{readLabel}</span>
            </div>

            {/* Body */}
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Tags */}
            {article.tags.length > 0 && (
              <div style={{
                marginTop: 48,
                paddingTop: 24,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
              }}>
                {article.tags.map(tag => (
                  <span key={tag} className="tp-tag tp-tag--muted">#{tag}</span>
                ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside style={{ borderLeft: '1px solid var(--line)', paddingLeft: 28, paddingTop: 40 }}>
            <div style={{ position: 'sticky', top: 24 }}>
              {related.length > 0 && (
                <>
                  <p style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--ink3)',
                    marginBottom: 4,
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
      </div>

      <Footer locale={locale} />

      <style>{`
        @media (max-width: 900px) {
          main > div, div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          aside { display: none; }
        }
      `}</style>
    </>
  )
}
