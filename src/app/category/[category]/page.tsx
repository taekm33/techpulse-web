import { getArticles, CATEGORIES } from '../../../lib/articles'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ArticleCard from '../../../components/ArticleCard'
import { notFound } from 'next/navigation'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map(cat => ({ category: cat }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const locale = LOCALE
  const cat = CATEGORIES[category]
  if (!cat) notFound()

  const isKr = locale === 'kr'
  const articles = getArticles(locale).filter(a => a.category === category)
  const catLabel = isKr ? cat.kr : cat.en

  return (
    <>
      <Header locale={locale} />

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', paddingTop: 48 }}>

        {/* Header */}
        <div style={{ marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--border)' }}>
          <span className={cat.class} style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            color: 'var(--cat-color, var(--accent-purple))',
            display: 'block',
            marginBottom: 8,
          }}>Category</span>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}>{catLabel}</h1>
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', marginTop: 8, fontFamily: 'monospace' }}>
            {articles.length} {isKr ? '개 기사' : 'articles'}
          </p>
        </div>

        {/* Articles grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '0 48px',
        }}>
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <p style={{ color: 'var(--text-tertiary)', fontFamily: 'monospace', fontSize: 13, padding: '48px 0' }}>
            {isKr ? '아직 기사가 없습니다.' : 'No articles yet.'}
          </p>
        )}
      </main>

      <Footer locale={locale} />
    </>
  )
}
