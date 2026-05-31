import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export const metadata: Metadata = {
  title: LOCALE === 'kr' ? 'TechPulse 소개' : 'About TechPulse',
  description: LOCALE === 'kr'
    ? 'TechPulse는 AI·IT 기술 트렌드를 빠르고 정확하게 전달하는 한국어/영어 테크 미디어입니다.'
    : 'TechPulse is a bilingual AI & tech media platform delivering fast, accurate insights for builders and thinkers.',
}

export default function AboutPage() {
  const locale = LOCALE
  const isKr = locale === 'kr'

  return (
    <>
      <Header locale={locale} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 100px' }}>

        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.16em',
          color: 'var(--accent)',
          marginBottom: 12,
          textTransform: 'uppercase',
        }}>
          {isKr ? '// about us' : '// about us'}
        </div>

        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 700,
          letterSpacing: '-0.035em',
          marginBottom: 20,
          color: 'var(--ink)',
        }}>
          {isKr ? 'TechPulse 소개' : 'About TechPulse'}
        </h1>

        <p style={{
          fontSize: 17,
          lineHeight: 1.75,
          color: 'var(--ink2)',
          marginBottom: 48,
          borderBottom: '1px solid var(--line)',
          paddingBottom: 32,
        }}>
          {isKr
            ? 'TechPulse는 AI·IT 기술 트렌드를 빠르고 정확하게 전달하는 테크 미디어입니다. 개발자, IT 종사자, 기술 관심자를 위해 매일 최신 AI/IT 뉴스, 도구 리뷰, 개발 트렌드를 한국어와 영어로 제공합니다.'
            : 'TechPulse is a fast, accurate AI & tech media platform built for builders, developers, and technology enthusiasts. We deliver daily AI/IT news, tool reviews, and development trend analysis in both Korean and English.'
          }
        </p>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 56,
        }}>
          {[
            { v: '100+', k: isKr ? '아티클' : 'Articles', d: isKr ? '발행됨' : 'Published' },
            { v: '6', k: isKr ? '카테고리' : 'Categories', d: isKr ? 'AI·IT 커버' : 'AI & IT covered' },
            { v: '2', k: isKr ? '언어' : 'Languages', d: 'KR + EN' },
          ].map(({ v, k, d }) => (
            <div key={k} style={{
              padding: '20px 16px',
              border: '1px solid var(--line)',
              borderRadius: 4,
              background: 'var(--panel)',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 28,
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '-0.04em',
                marginBottom: 4,
              }}>{v}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--ink3)' }}>{d}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
            {isKr ? '우리의 미션' : 'Our Mission'}
          </h2>
          <div style={{ lineHeight: 1.8, color: 'var(--ink2)', fontSize: 15 }}>
            {isKr ? (
              <>
                <p style={{ marginBottom: 16 }}>AI가 세상을 바꾸고 있는 지금, 정확하고 깊이 있는 정보는 그 어느 때보다 중요합니다. TechPulse는 단순한 뉴스 요약을 넘어 <strong style={{ color: 'var(--ink)' }}>인사이트와 분석</strong>을 제공합니다.</p>
                <p style={{ marginBottom: 16 }}>매일 전 세계 AI/IT 업계의 주요 소식을 발굴하고, 한국 독자와 영미권 독자 모두가 실용적으로 활용할 수 있는 콘텐츠로 재구성합니다.</p>
                <p>우리의 목표는 <strong style={{ color: 'var(--accent)' }}>&quot;AI/IT의 맥박&quot;</strong> — 기술의 흐름을 가장 빠르고 정확하게 짚어드리는 것입니다.</p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: 16 }}>As AI reshapes every industry, having access to accurate, timely, and insightful information is more critical than ever. TechPulse goes beyond news summaries to provide <strong style={{ color: 'var(--ink)' }}>analysis and actionable insights</strong>.</p>
                <p style={{ marginBottom: 16 }}>Every day, we identify the most significant developments in global AI/IT, and reshape them into content that both Korean and English-speaking audiences can apply in their work.</p>
                <p>Our goal: to be <strong style={{ color: 'var(--accent)' }}>&quot;Your AI &amp; Tech Pulse&quot;</strong> — the fastest, most accurate read on technology&apos;s heartbeat.</p>
              </>
            )}
          </div>
        </section>

        {/* What we cover */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
            {isKr ? '커버 영역' : 'What We Cover'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { cat: 'AI News', desc: isKr ? '새 모델 출시, 기업 발표, 연구 성과' : 'Model releases, company announcements, research' },
              { cat: 'IT News', desc: isKr ? '빅테크 동향, 제품 출시, 정책' : 'Big tech trends, product launches, policy' },
              { cat: 'Tool Review', desc: isKr ? 'AI 도구 실사용 후기, 비교 분석' : 'Hands-on AI tool reviews and comparisons' },
              { cat: 'Dev Trend', desc: isKr ? '오픈소스, 프레임워크, 개발 동향' : 'Open source, frameworks, dev ecosystem' },
              { cat: 'Startup', desc: isKr ? '펀딩, 유망 스타트업, 인수합병' : 'Funding, emerging startups, M&A' },
              { cat: 'Hot Issue', desc: isKr ? '커뮤니티 논란, 바이럴 콘텐츠' : 'Viral stories, community debates' },
            ].map(({ cat, desc }) => (
              <div key={cat} style={{
                padding: '14px 16px',
                border: '1px solid var(--line)',
                borderRadius: 4,
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: 4,
                  textTransform: 'uppercase',
                }}>{cat}</div>
                <div style={{ fontSize: 13, color: 'var(--ink2)' }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Channels */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
            {isKr ? '운영 채널' : 'Our Channels'}
          </h2>
          <div style={{ lineHeight: 1.8, color: 'var(--ink2)', fontSize: 15 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}>
              {isKr ? (
                <>
                  <a href="https://techpulse.co.kr" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>KR SITE</div>
                    <div style={{ fontSize: 13 }}>techpulse.co.kr</div>
                  </a>
                  <a href="https://blog.naver.com/taekm33" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>NAVER BLOG</div>
                    <div style={{ fontSize: 13 }}>blog.naver.com/taekm33</div>
                  </a>
                  <a href="https://instagram.com/techpulse.kr" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>INSTAGRAM</div>
                    <div style={{ fontSize: 13 }}>@techpulse.kr</div>
                  </a>
                  <a href="https://youtube.com/@TechPulseKR" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>YOUTUBE</div>
                    <div style={{ fontSize: 13 }}>@TechPulseKR</div>
                  </a>
                </>
              ) : (
                <>
                  <a href="https://technologypulse.app" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>EN SITE</div>
                    <div style={{ fontSize: 13 }}>technologypulse.app</div>
                  </a>
                  <a href="https://instagram.com/technologypulse.ai" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>INSTAGRAM</div>
                    <div style={{ fontSize: 13 }}>@technologypulse.ai</div>
                  </a>
                  <a href="https://youtube.com/@TechnologyPulseAI" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>YOUTUBE</div>
                    <div style={{ fontSize: 13 }}>@TechnologyPulseAI</div>
                  </a>
                  <a href="https://x.com/techpulseai" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 16px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--ink2)', textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', marginBottom: 4 }}>X / TWITTER</div>
                    <div style={{ fontSize: 13 }}>@techpulseai</div>
                  </a>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{
          padding: '20px 24px',
          border: '1px solid var(--line)',
          borderRadius: 4,
          background: 'var(--panel)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          color: 'var(--ink3)',
          lineHeight: 1.7,
        }}>
          <p style={{ marginBottom: 6, color: 'var(--ink2)', fontWeight: 600 }}>
            {isKr ? '// 면책 고지' : '// Disclaimer'}
          </p>
          <p>
            {isKr
              ? '본 사이트의 콘텐츠는 정보 제공 목적으로 작성되었으며, 투자·법률·의료 조언이 아닙니다. 중요한 결정 전에는 전문가와 상담하시기 바랍니다.'
              : 'Content on this site is for informational purposes only and does not constitute investment, legal, or professional advice. Consult a qualified professional before making important decisions.'
            }
          </p>
        </div>
      </div>

      <Footer locale={locale} />
    </>
  )
}
