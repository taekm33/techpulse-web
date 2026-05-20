import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'TechPulse — AI & IT 뉴스',
    template: '%s | TechPulse',
  },
  description: 'AI·IT 기술 트렌드를 가장 빠르고 정확하게. GPT, Claude, 빅테크 소식과 AI 도구 리뷰를 전달합니다.',
  openGraph: {
    siteName: 'TechPulse',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@techpulsekr',
  },
}

const themeScript = `(function(){try{var t=localStorage.getItem('tp-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
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
