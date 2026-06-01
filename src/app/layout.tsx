import type { Metadata } from 'next'
import './globals.css'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'
const BASE_URL = LOCALE === 'kr' ? 'https://techpulse.co.kr' : 'https://technologypulse.app'
const isKr = LOCALE === 'kr'

export const metadata: Metadata = {
  title: {
    default: isKr ? 'TechPulse — AI & IT 뉴스' : 'TechPulse — AI & Tech News',
    template: '%s | TechPulse',
  },
  description: isKr
    ? 'AI·IT 기술 트렌드를 가장 빠르고 정확하게. GPT, Claude, 빅테크 소식과 AI 도구 리뷰를 전달합니다.'
    : 'Fast, accurate AI & tech news for builders and thinkers. Model releases, startup funding, dev tools, and more.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    siteName: 'TechPulse',
    type: 'website',
    locale: isKr ? 'ko_KR' : 'en_US',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    site: isKr ? '@techpulsekr' : '@techpulseai',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

const themeScript = `(function(){try{var t=localStorage.getItem('tp-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={isKr ? 'ko' : 'en'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {isKr && <meta name="google-site-verification" content="dRVqX_ziUp8cB_P1bKNBsi-t6vK_NXw8u53hBjO00oY" />}
        {isKr && <meta name="naver-site-verification" content="dcefbf9811b03d8b51f637c56b0914e6f2194ede" />}
        {!isKr && <meta name="google-site-verification" content="r9Y-lKtvI9CvT0zZfGrje8SIL9czNbmggXl4hyY1kUE" />}
        {!isKr && <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4YRL0FBE2D" />
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-4YRL0FBE2D');` }} />
        </>}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="tp" id="tp-root" data-theme="dark">
          {children}
        </div>
      </body>
    </html>
  )
}
