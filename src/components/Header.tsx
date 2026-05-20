'use client'
import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  locale: 'kr' | 'en'
}

const NAV_KR = [
  { href: '/', label: 'AI 뉴스' },
  { href: '/category/it-news', label: 'IT 뉴스' },
  { href: '/category/tool-review', label: '도구 리뷰' },
  { href: '/category/dev-trend', label: '개발 트렌드' },
  { href: '/category/startup', label: '스타트업' },
]

const NAV_EN = [
  { href: '/', label: 'AI News' },
  { href: '/category/it-news', label: 'IT News' },
  { href: '/category/tool-review', label: 'Tool Reviews' },
  { href: '/category/dev-trend', label: 'Dev Trends' },
  { href: '/category/startup', label: 'Startup' },
]

export default function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const nav = locale === 'kr' ? NAV_KR : NAV_EN
  const siteUrl = locale === 'kr' ? 'https://techpulse.co.kr' : 'https://technologypulse.app'
  const altUrl = locale === 'kr' ? 'https://technologypulse.app' : 'https://techpulse.co.kr'
  const altLabel = locale === 'kr' ? 'EN' : 'KR'

  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 3,
      zIndex: 50,
      boxShadow: '0 1px 0 var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              color: 'var(--accent-purple)',
            }}>◈</span>
            <span style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>TechPulse</span>
            {locale === 'kr' && (
              <span style={{
                fontSize: 11,
                color: 'var(--text-tertiary)',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}>테크펄스</span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
            {nav.map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: 13,
                color: 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: lang switch */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href={altUrl} style={{
              fontSize: 12,
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'var(--text-tertiary)',
              letterSpacing: '0.08em',
              border: '1px solid var(--border)',
              padding: '4px 10px',
              borderRadius: 4,
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-tertiary)'
            }}
            >
              {altLabel}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: 4,
                display: 'none',
              }}
              className="mobile-menu-btn"
              aria-label="메뉴"
            >
              <span style={{ display: 'block', fontSize: 18, lineHeight: 1 }}>{open ? '✕' : '≡'}</span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div style={{
            borderTop: '1px solid var(--border)',
            padding: '16px 0',
          }} className="mobile-nav">
            {nav.map(item => (
              <Link key={item.href} href={item.href}
                style={{ display: 'block', padding: '10px 0', fontSize: 14, color: 'var(--text-secondary)' }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
