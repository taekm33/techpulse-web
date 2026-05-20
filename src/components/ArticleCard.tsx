'use client'

import Link from 'next/link'
import { Article, CATEGORIES } from '../lib/types'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'compact' | 'featured'
}

function formatDate(dateStr: string, locale: 'kr' | 'en') {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (locale === 'kr') {
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
  }
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const cat = CATEGORIES[article.category]
  const catLabel = cat ? (article.locale === 'kr' ? cat.kr : cat.en) : article.category
  const dateStr = formatDate(article.date, article.locale)
  const readLabel = article.locale === 'kr' ? `${article.readingTime}분` : `${article.readingTime}min`

  if (variant === 'compact') {
    return (
      <Link href={`/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <article style={{ padding: '13px 0', borderBottom: '1px solid var(--line)' }}>
          <div style={{ marginBottom: 4 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 9,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>{catLabel}</span>
          </div>
          <h3 style={{
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1.4,
            color: 'var(--ink2)',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink2)')}
          >{article.title}</h3>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            color: 'var(--ink3)',
            marginTop: 5,
          }}>{dateStr} · {readLabel}</p>
        </article>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link href={`/${article.slug}`} className="tp-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <article>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <span className="tp-tag tp-tag--accent">{catLabel}</span>
            <span className="tp-tag tp-tag--muted">FEATURED</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            marginBottom: 14,
          }}>{article.title}</h2>
          <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.6, marginBottom: 18 }}>
            {article.summary}
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: 'var(--ink3)',
          }}>
            <span>{dateStr}</span>
            <span>·</span>
            <span>{readLabel}</span>
            <span style={{ marginLeft: 'auto', color: 'var(--accent)' }}>READ →</span>
          </div>
        </article>
      </Link>
    )
  }

  // default
  return (
    <Link href={`/${article.slug}`} className="tp-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <article>
        <div className="tp-card__tags">
          <span className="tp-tag tp-tag--muted">{catLabel}</span>
        </div>
        <h3 className="tp-card__title" style={{ fontSize: 15, marginBottom: 8 }}>
          {article.title}
        </h3>
        {article.summary && (
          <p className="tp-card__desc" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {article.summary}
          </p>
        )}
        <div className="tp-card__meta">
          <span>{dateStr}</span>
          <span>·</span>
          <span>{readLabel}</span>
        </div>
      </article>
    </Link>
  )
}
