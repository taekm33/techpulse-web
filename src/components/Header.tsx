'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface HeaderProps {
  locale: 'kr' | 'en'
}

const NAV_KR = [
  { href: '/', label: '/home' },
  { href: '/category/ai-news', label: '/ai-뉴스' },
  { href: '/category/it-news', label: '/it-뉴스' },
  { href: '/category/tool-review', label: '/도구' },
  { href: '/category/dev-trend', label: '/개발' },
  { href: '/category/startup', label: '/스타트업' },
]

const NAV_EN = [
  { href: '/', label: '/home' },
  { href: '/category/ai-news', label: '/ai-news' },
  { href: '/category/it-news', label: '/it-news' },
  { href: '/category/tool-review', label: '/tools' },
  { href: '/category/dev-trend', label: '/dev' },
  { href: '/category/startup', label: '/startup' },
]

const TICKER_DATA = [
  { sym: 'NVDA', val: '135.26', chg: '+2.31%', up: true },
  { sym: 'MSFT', val: '429.10', chg: '+0.84%', up: true },
  { sym: 'GOOGL', val: '178.55', chg: '-0.41%', up: false },
  { sym: 'META', val: '612.80', chg: '+1.22%', up: true },
  { sym: 'AAPL', val: '211.35', chg: '+0.31%', up: true },
  { sym: 'AMZN', val: '224.60', chg: '-0.18%', up: false },
]

function kstTime() {
  const now = new Date()
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  return kst.toISOString().slice(11, 19) + ' KST'
}

export default function Header({ locale }: HeaderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    setTime(kstTime())
    const id = setInterval(() => setTime(kstTime()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tp-theme') as 'dark' | 'light' | null
      const pref = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      applyTheme(pref)
    } catch (e) {}
  }, [])

  function applyTheme(t: 'dark' | 'light') {
    setTheme(t)
    const root = document.getElementById('tp-root')
    if (root) root.setAttribute('data-theme', t)
    document.documentElement.setAttribute('data-theme', t)
    try { localStorage.setItem('tp-theme', t) } catch (e) {}
  }

  const nav = locale === 'kr' ? NAV_KR : NAV_EN
  const altUrl = locale === 'kr' ? 'https://technologypulse.app' : 'https://techpulse.co.kr'
  const altLabel = locale === 'kr' ? 'EN' : 'KR'
  const isKr = locale === 'kr'

  return (
    <>
      {/* Ticker bar */}
      <div className="tp-ticker">
        <span className="tp-ticker__live">
          <span className="tp-blink">●</span>
          LIVE
        </span>
        {TICKER_DATA.map(item => (
          <span key={item.sym} style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
            <span style={{ color: 'var(--ink3)' }}>{item.sym}</span>
            <span>{item.val}</span>
            <span style={{ color: item.up ? 'var(--up)' : 'var(--down)' }}>{item.chg}</span>
          </span>
        ))}
        <span className="tp-ticker__time">{time}</span>
      </div>

      {/* Main header */}
      <header className="tp-header">
        {/* Brand */}
        <Link href="/" className="tp-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="tp-logo">tp</div>
          <div>
            <div className="tp-brand__name">TechPulse</div>
            <div className="tp-brand__sub">{isKr ? 'AI/IT의 맥박' : 'YOUR AI & TECH PULSE'}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="tp-nav">
          {nav.map(item => (
            <Link key={item.href} href={item.href} className="tp-nav__item">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="tp-header__right">
          <div className="tp-theme">
            <button
              className={theme === 'dark' ? 'is-on' : ''}
              onClick={() => applyTheme('dark')}
              title="Dark mode"
            >◐</button>
            <button
              className={theme === 'light' ? 'is-on' : ''}
              onClick={() => applyTheme('light')}
              title="Light mode"
            >☀</button>
          </div>

          <a href={altUrl} className="tp-lang">{altLabel}</a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="tp-mobile-btn"
            aria-label="메뉴"
          >
            {mobileOpen ? '✕' : '≡'}
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      {mobileOpen && (
        <div style={{
          background: 'var(--panel)',
          borderBottom: '1px solid var(--line)',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="tp-nav__item"
              style={{ display: 'block' }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .tp-mobile-btn {
          display: none;
          background: none;
          border: 1px solid var(--line);
          color: var(--ink2);
          width: 32px; height: 32px;
          font-size: 16px; border-radius: 2px;
          align-items: center; justify-content: center;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .tp-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
