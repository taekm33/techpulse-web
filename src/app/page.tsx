import { getArticles, CATEGORIES } from '../lib/articles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import Link from 'next/link'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export default function HomePage() {
  const locale = LOCALE
  const articles = getArticles(locale)
  const featured = articles.find(a => a.featured) || articles[0]
  const recent = articles.filter(a => a.slug !== featured?.slug).slice(0, 9)
  const sidebar = articles.filter(a => a.slug !== featured?.slug).slice(9, 15)

  const isKr = locale === 'kr'

  return (
    <>
      <Header locale={locale} />

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Category strip */}
        <div style={{
          borderBottom: '1px solid var(--border)',
          padding: '16px 0',
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
        }}>
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link key={key} href={`/category/${key}`} className="cat-nav-link" style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
            }}>
              {isKr ? cat.kr : cat.en}
            </Link>
          ))}
        </div>

        {/* Featured + sidebar layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, paddingTop: 8 }}>

          {/* Main column */}
          <div>
            {/* Featured article */}
            {featured && (
              <ArticleCard article={featured} variant="featured" />
            )}

            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '40px 0 8px' }}>
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                color: 'var(--text-tertiary)',
              }}>
                {isKr ? '최신 기사' : 'Latest'}
              </span>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>

            {/* 3-column grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '0 40px',
            }}>
              {recent.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {recent.length === 0 && (
              <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--text-tertiary)' }}>
                <p style={{ fontFamily: 'monospace', fontSize: 13 }}>
                  {isKr ? '아직 기사가 없습니다. 곧 업데이트됩니다.' : 'No articles yet. Coming soon.'}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside style={{ borderLeft: '1px solid var(--border)', paddingLeft: 32 }}>
            <div style={{ position: 'sticky', top: 24 }}>
              <p style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                color: 'var(--text-tertiary)',
                marginBottom: 8,
              }}>
                {isKr ? '더 보기' : 'More'}
              </p>

              {sidebar.map(article => (
                <ArticleCard key={article.slug} article={article} variant="compact" />
              ))}

              {/* About box */}
              <div style={{
                marginTop: 32,
                padding: '20px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 8,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ color: 'var(--accent-purple)', fontFamily: 'monospace', fontSize: 14 }}>◈</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>TechPulse</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {isKr
                    ? 'AI·IT 기술 트렌드를 빠르고 정확하게 전달합니다.'
                    : 'Fast, accurate AI & tech news for builders and thinkers.'
                  }
                </p>
                <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                  {isKr ? (
                    <>
                      <a href="https://instagram.com/techpulse.kr" target="_blank" rel="noopener"
                        style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>Instagram</a>
                      <a href="https://youtube.com/@TechPulseKR" target="_blank" rel="noopener"
                        style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>YouTube</a>
                    </>
                  ) : (
                    <>
                      <a href="https://instagram.com/technologypulse.ai" target="_blank" rel="noopener"
                        style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>Instagram</a>
                      <a href="https://youtube.com/@TechPulseAI" target="_blank" rel="noopener"
                        style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>YouTube</a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer locale={locale} />

      <style>{`
        @media (max-width: 900px) {
          main > div:last-child {
            grid-template-columns: 1fr !important;
          }
          aside {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
