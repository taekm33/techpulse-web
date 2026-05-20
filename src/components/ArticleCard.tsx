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
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`
  }
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const cat = CATEGORIES[article.category]
  const catLabel = cat ? (article.locale === 'kr' ? cat.kr : cat.en) : article.category
  const dateStr = formatDate(article.date, article.locale)
  const readLabel = article.locale === 'kr' ? `${article.readingTime}분 읽기` : `${article.readingTime} min read`

  if (variant === 'featured') {
    return (
      <Link href={`/${article.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
        <article style={{
          padding: '40px 0 32px',
          borderBottom: '1px solid var(--border)',
          cursor: 'pointer',
        }}
        onMouseEnter={e => (e.currentTarget.querySelector('.feat-title') as HTMLElement).style.color = 'var(--accent-purple)'}
        onMouseLeave={e => (e.currentTarget.querySelector('.feat-title') as HTMLElement).style.color = 'var(--text-primary)'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span className={cat?.class} style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              color: 'var(--cat-color, var(--accent-purple))',
              background: 'var(--accent-purple-dim)',
              padding: '3px 8px',
              borderRadius: 3,
            }}>{catLabel}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-hover)', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{dateStr}</span>
          </div>
          <h2 className="feat-title" style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: 18,
            transition: 'color 0.15s',
            maxWidth: '80%',
          }}>{article.title}</h2>
          <p style={{
            fontSize: 16,
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '65ch',
            marginBottom: 24,
          }}>{article.summary}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{readLabel}</span>
            <span style={{ fontSize: 14, color: 'var(--accent-purple)' }}>→</span>
          </div>
        </article>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link href={`/${article.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
        <article style={{
          padding: '14px 0',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 5 }}>
            <span className={cat?.class} style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              color: 'var(--cat-color, var(--accent-purple))',
              flexShrink: 0,
            }}>{catLabel}</span>
          </div>
          <h3 style={{
            fontSize: 13.5,
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '-0.01em',
            color: 'var(--text-secondary)',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >{article.title}</h3>
          <p style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 4, fontFamily: 'monospace' }}>{dateStr}</p>
        </article>
      </Link>
    )
  }

  // default card
  return (
    <Link href={`/${article.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
      <article style={{
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span className={cat?.class} style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            color: 'var(--cat-color, var(--accent-purple))',
          }}>{catLabel}</span>
          <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'var(--border-hover)', display: 'inline-block' }} />
          <span style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{dateStr}</span>
        </div>
        <h3 style={{
          fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
          fontWeight: 700,
          lineHeight: 1.35,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: 8,
          transition: 'color 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-purple)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
        >{article.title}</h3>
        {article.summary && (
          <p style={{
            fontSize: 13.5,
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>{article.summary}</p>
        )}
        <p style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 10, fontFamily: 'monospace' }}>{readLabel}</p>
      </article>
    </Link>
  )
}
