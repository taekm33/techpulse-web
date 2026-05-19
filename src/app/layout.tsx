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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <style>{`
          body {
            font-family: 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont,
              'Segoe UI', system-ui, sans-serif;
          }
          code, pre, .mono {
            font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
