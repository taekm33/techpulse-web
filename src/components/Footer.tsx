import Link from 'next/link'

interface FooterProps {
  locale: 'kr' | 'en'
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear()
  const isKr = locale === 'kr'

  return (
    <footer className="tp-footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="tp-footer__top">
          {/* Brand */}
          <div className="tp-footer__brand">
            <div className="tp-logo" style={{ flexShrink: 0 }}>tp</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>TechPulse</div>
              <p className="tp-footer__desc">
                {isKr
                  ? 'AI·IT 기술 트렌드를 빠르고 정확하게 전달합니다.'
                  : 'Fast, accurate AI & tech news for builders and thinkers.'
                }
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="tp-footer__h">CONTENT</p>
            <ul className="tp-footer__ul">
              <li><Link href="/category/ai-news">{isKr ? 'AI 뉴스' : 'AI News'}</Link></li>
              <li><Link href="/category/it-news">{isKr ? 'IT 뉴스' : 'IT News'}</Link></li>
              <li><Link href="/category/tool-review">{isKr ? 'AI 도구 리뷰' : 'Tool Reviews'}</Link></li>
              <li><Link href="/category/dev-trend">{isKr ? '개발 트렌드' : 'Dev Trends'}</Link></li>
              <li><Link href="/category/startup">{isKr ? '스타트업' : 'Startup'}</Link></li>
              <li><Link href="/category/hot-issue">{isKr ? '핫이슈' : 'Hot Issues'}</Link></li>
            </ul>
          </div>

          {/* Sites */}
          <div>
            <p className="tp-footer__h">SITES</p>
            <ul className="tp-footer__ul">
              <li><a href="https://techpulse.co.kr">techpulse.co.kr</a></li>
              <li><a href="https://technologypulse.app">technologypulse.app</a></li>
              {isKr && <li><a href="https://blog.naver.com/taekm33" target="_blank" rel="noopener">네이버 블로그</a></li>}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <p className="tp-footer__h">FOLLOW</p>
            <ul className="tp-footer__ul">
              {isKr ? (
                <>
                  <li><a href="https://instagram.com/techpulse.kr" target="_blank" rel="noopener">Instagram</a></li>
                  <li><a href="https://youtube.com/@TechPulseKR" target="_blank" rel="noopener">YouTube</a></li>
                  <li><a href="https://x.com/techpulsekr" target="_blank" rel="noopener">X / Twitter</a></li>
                </>
              ) : (
                <>
                  <li><a href="https://instagram.com/technologypulse.ai" target="_blank" rel="noopener">Instagram</a></li>
                  <li><a href="https://youtube.com/@TechnologyPulseAI" target="_blank" rel="noopener">YouTube</a></li>
                  <li><a href="https://x.com/techpulseai" target="_blank" rel="noopener">X / Twitter</a></li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="tp-footer__bottom">
          <span>© {year} TechPulse. All rights reserved.</span>
          <span>{isKr ? 'AI/IT의 맥박 · Your AI & Tech Pulse' : 'Your AI & Tech Pulse'}</span>
        </div>
      </div>
    </footer>
  )
}
