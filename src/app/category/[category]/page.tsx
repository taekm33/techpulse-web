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

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Category header */}
        <div style={{
          padding: '40px 0 24px',
          borderBottom: '1px solid var(--line)',
          marginBottom: 32,
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--ink3)',
            marginBottom: 10,
          }}>CATEGORY</div>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
            marginBottom: 8,
          }}>{catLabel}</h1>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: 'var(--ink3)',
          }}>
            {articles.length} {isKr ? '개 기사' : 'articles'}
          </p>
        </div>

        {/* Articles grid */}
        {articles.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
            paddingBottom: 64,
          }}>
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            color: 'var(--ink3)',
            padding: '48px 0',
          }}>
            {isKr ? '// 아직 기사가 없습니다' : '// no articles yet'}
          </p>
        )}
      </div>

      <Footer locale={locale} />
    </>
  )
}
