import { getArticles, CATEGORIES } from '../lib/articles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

function fmtShort(dateStr: string, locale: 'kr' | 'en') {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (locale === 'kr') {
    return `${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
  }
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function fmtFull(dateStr: string, locale: 'kr' | 'en') {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (locale === 'kr') {
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
  }
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function HomePage() {
  const locale = LOCALE
  const isKr = locale === 'kr'
  const articles = getArticles(locale)
  const featured = articles.find(a => a.featured) || articles[0]
  const trending = articles.filter(a => a.slug !== featured?.slug).slice(0, 6)
  const listArticles = articles.filter(a => a.slug !== featured?.slug).slice(0, 18)

  const catCards = Object.entries(CATEGORIES).slice(0, 3).map(([key, cat]) => ({
    key,
    cat,
    article: articles.find(a => a.category === key),
  }))

  const avgRead = articles.length
    ? Math.round(articles.reduce((s, a) => s + a.readingTime, 0) / articles.length)
    : 0

  return (
    <>
      <Header locale={locale} />

      {/* ── Hero ───────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <section className="tp-hero">
          {/* Featured cover */}
          {featured && (
            <Link href={`/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="tp-hero__tags">
                <span className="tp-tag tp-tag--accent">
                  {CATEGORIES[featured.category]?.[locale] || featured.category}
                </span>
                <span className="tp-tag tp-tag--muted">FEATURED</span>
              </div>
              <h1 className="tp-hero__title">{featured.title}</h1>
              <p className="tp-hero__sub">{featured.summary}</p>
              <div className="tp-hero__bylinerow">
                <div className="tp-byline">
                  <div className="tp-avatar" />
                  <span>TechPulse</span>
                  <span style={{ color: 'var(--line2)', margin: '0 2px' }}>·</span>
                  <span>{fmtFull(featured.date, locale)}</span>
                  <span style={{ color: 'var(--line2)', margin: '0 2px' }}>·</span>
                  <span>{featured.readingTime}{isKr ? '분' : 'min'}</span>
                </div>
                <span className="tp-cta">
                  {isKr ? '읽기' : 'READ'} <span className="tp-arrow">→</span>
                </span>
              </div>

              {/* Metrics */}
              <div className="tp-hero__metrics">
                <div className="tp-hero__metrics-label">
                  {isKr ? '현황 데이터' : 'SITE METRICS'}
                </div>
                <div className="tp-metric-grid">
                  <div className="tp-metric">
                    <div className="tp-metric__k">ARTICLES</div>
                    <div className="tp-metric__v">{articles.length}<span>{isKr ? '개' : ''}</span></div>
                    <div className="tp-metric__d">↑ active</div>
                  </div>
                  <div className="tp-metric">
                    <div className="tp-metric__k">CATEGORIES</div>
                    <div className="tp-metric__v">{Object.keys(CATEGORIES).length}<span>{isKr ? '개' : ''}</span></div>
                    <div className="tp-metric__d">↑ total</div>
                  </div>
                  <div className="tp-metric">
                    <div className="tp-metric__k">AVG READ</div>
                    <div className="tp-metric__v">{avgRead}<span>min</span></div>
                    <div className="tp-metric__d">↑ per article</div>
                  </div>
                  <div className="tp-metric">
                    <div className="tp-metric__k">UPDATED</div>
                    <div className="tp-metric__v" style={{ fontSize: 14 }}>
                      {fmtShort(articles[0]?.date || '', locale)}
                    </div>
                    <div className="tp-metric__d">↑ latest</div>
                  </div>
                  <div className="tp-metric">
                    <div className="tp-metric__k">LANG</div>
                    <div className="tp-metric__v">{locale.toUpperCase()}</div>
                    <div className="tp-metric__d">↑ active</div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Trending sidebar */}
          <div>
            <div className="tp-trend__head">
              <span>{isKr ? '트렌딩' : 'Trending'}</span>
              <span className="tp-mono-mute" style={{ fontSize: 9 }}>
                {isKr ? '최신순' : 'LATEST'}
              </span>
            </div>
            {trending.map((a, i) => (
              <Link
                key={a.slug}
                href={`/${a.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div className="tp-trend">
                  <span className="tp-trend__n">0{i + 1}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="tp-trend__cat">
                      {CATEGORIES[a.category]?.[locale] || a.category}
                    </div>
                    <div className="tp-trend__title">{a.title}</div>
                  </div>
                  <span className="tp-trend__v">{a.readingTime}m</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Category cards ─────────────────── */}
      {catCards.some(c => c.article) && (
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <section className="tp-section">
            <div className="tp-section__head">
              <span className="tp-section__title">{isKr ? '카테고리별 최신' : 'By Category'}</span>
              <Link href="/category/ai-news" className="tp-cta">
                {isKr ? '전체 보기' : 'All articles'} <span className="tp-arrow">→</span>
              </Link>
            </div>
            <div className="tp-cards">
              {catCards.map(({ key, cat, article }) =>
                article ? (
                  <Link
                    key={key}
                    href={`/${article.slug}`}
                    className="tp-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="tp-img" style={{ height: 72, marginBottom: 14 }}>
                      <span>{isKr ? cat.kr : cat.en}</span>
                    </div>
                    <div className="tp-card__tags">
                      <span className="tp-tag tp-tag--accent">{isKr ? cat.kr : cat.en}</span>
                    </div>
                    <div className="tp-card__title">{article.title}</div>
                    <p className="tp-card__desc">{article.summary}</p>
                    <div className="tp-card__meta">
                      <span>{fmtShort(article.date, locale)}</span>
                      <span>·</span>
                      <span>{article.readingTime}min</span>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        </div>
      )}

      {/* ── Latest articles list ───────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <section className="tp-section">
          <div className="tp-section__head">
            <span className="tp-section__title">{isKr ? '최신 기사' : 'Latest Articles'}</span>
          </div>
          <div className="tp-list">
            <div className="tp-list__head">
              <span>#</span>
              <span>{isKr ? '날짜' : 'DATE'}</span>
              <span>{isKr ? '제목' : 'TITLE'}</span>
              <span>{isKr ? '카테고리' : 'CATEGORY'}</span>
              <span>{isKr ? '읽기' : 'MIN'}</span>
            </div>
            {listArticles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/${a.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div className="tp-list__row">
                  <span className="tp-list__time" style={{ color: 'var(--accent)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="tp-list__time">{fmtShort(a.date, locale)}</span>
                  <span className="tp-list__title">{a.title}</span>
                  <span className="tp-list__author">
                    {CATEGORIES[a.category]?.[locale] || a.category}
                  </span>
                  <span className="tp-list__min">{a.readingTime}m</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Newsletter ─────────────────────── */}
      <div className="tp-nl-wrap">
        <div className="tp-grid-bg" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="tp-newsletter">
            <div>
              <div className="tp-newsletter__kicker">
                {'> '}{isKr ? '뉴스레터 구독' : 'NEWSLETTER'}_
              </div>
              <h2 className="tp-newsletter__title">
                {isKr ? (
                  <>AI/IT 소식을<br /><em>매주 받아보세요</em></>
                ) : (
                  <>Stay in the<br /><em>AI Loop</em></>
                )}
              </h2>
              <p className="tp-newsletter__sub">
                {isKr
                  ? '매주 엄선된 AI·IT 뉴스, 도구 리뷰, 개발 트렌드를 받아보세요.'
                  : 'Curated AI & tech news, tool reviews, and dev trends — every week.'
                }
              </p>
              <p className="tp-newsletter__bonus">
                {isKr ? '✦ 무료 · 언제든 해지 가능' : '✦ Free · Unsubscribe anytime'}
              </p>
            </div>
            <div>
              <div className="tp-prompt">
                <span className="tp-prompt__sigil">{'>'}</span>
                <input
                  className="tp-prompt__input"
                  type="email"
                  placeholder="email@example.com"
                  aria-label="Email"
                  readOnly
                />
                <button type="button" className="tp-prompt__run">SUBSCRIBE</button>
              </div>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                color: 'var(--ink3)',
                marginTop: 10,
                letterSpacing: '0.04em',
              }}>
                {isKr ? '// 뉴스레터 서비스 준비 중입니다' : '// newsletter coming soon'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer locale={locale} />
    </>
  )
}
