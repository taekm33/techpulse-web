import Link from 'next/link'

interface FooterProps {
  locale: 'kr' | 'en'
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      marginTop: 80,
      padding: '40px 0',
      color: 'var(--text-tertiary)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ color: 'var(--accent-purple)', fontFamily: 'monospace' }}>◈</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '-0.01em' }}>TechPulse</span>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.6, maxWidth: 280 }}>
              {locale === 'kr'
                ? 'AI·IT 기술 트렌드를 빠르고 정확하게.'
                : 'Fast, accurate AI & tech news for builders.'
              }
            </p>
          </div>

          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12, color: 'var(--text-tertiary)' }}>
                {locale === 'kr' ? '채널' : 'Channels'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {locale === 'kr' ? (
                  <>
                    <a href="https://blog.naver.com/taekm33" target="_blank" rel="noopener" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>네이버 블로그</a>
                    <a href="https://instagram.com/techpulse.kr" target="_blank" rel="noopener" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>인스타그램</a>
                    <a href="https://youtube.com/@TechPulseKR" target="_blank" rel="noopener" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>유튜브</a>
                  </>
                ) : (
                  <>
                    <a href="https://instagram.com/technologypulse.ai" target="_blank" rel="noopener" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Instagram</a>
                    <a href="https://youtube.com/@TechPulseAI" target="_blank" rel="noopener" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>YouTube</a>
                  </>
                )}
              </div>
            </div>

            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12, color: 'var(--text-tertiary)' }}>
                {locale === 'kr' ? '사이트' : 'Sites'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="https://techpulse.co.kr" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>techpulse.co.kr</a>
                <a href="https://technologypulse.app" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>technologypulse.app</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 12 }}>© {year} TechPulse. All rights reserved.</p>
          <p style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--accent-purple)', opacity: 0.6 }}>AI/IT의 맥박 · Your AI & Tech Pulse</p>
        </div>
      </div>
    </footer>
  )
}
