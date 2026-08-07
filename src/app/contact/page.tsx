import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'
import { canonicalUrl } from '../../lib/seo'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export const metadata: Metadata = {
  alternates: { canonical: canonicalUrl('/contact/') },
  title: LOCALE === 'kr' ? '문의하기' : 'Contact',
  description: LOCALE === 'kr'
    ? 'TechPulse에 문의하세요. 제보, 광고, 협업 등 모든 문의를 환영합니다.'
    : 'Get in touch with TechPulse. We welcome tips, advertising inquiries, and collaboration proposals.',
}

export default function ContactPage() {
  const locale = LOCALE
  const isKr = locale === 'kr'

  return (
    <>
      <Header locale={locale} />

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px 100px' }}>

        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.16em',
          color: 'var(--accent)',
          marginBottom: 12,
          textTransform: 'uppercase',
        }}>
          {'// contact'}
        </div>

        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.035em',
          marginBottom: 16,
          color: 'var(--ink)',
        }}>
          {isKr ? '문의하기' : 'Contact Us'}
        </h1>

        <p style={{
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--ink2)',
          marginBottom: 48,
          borderBottom: '1px solid var(--line)',
          paddingBottom: 32,
        }}>
          {isKr
            ? '뉴스 제보, 광고 문의, 협업 제안, 오류 신고 등은 아래 이메일로 보내주세요.'
            : 'Send news tips, advertising inquiries, collaboration proposals, and error reports to the email below.'
          }
        </p>

        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56 }}>

          {/* Primary contact */}
          <div style={{
            padding: '24px',
            border: '1px solid var(--accent)',
            borderRadius: 4,
            background: 'var(--panel)',
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 9,
              letterSpacing: '0.16em',
              color: 'var(--accent)',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}>
              {isKr ? '// 이메일 (권장)' : '// Email (preferred)'}
            </div>
            <a
              href="mailto:taejawow@gmail.com"
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--ink)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              taejawow@gmail.com
            </a>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'var(--ink3)',
              marginTop: 8,
            }}>
              {isKr ? '→ 모든 문의 사항' : '→ All inquiries welcome'}
            </p>
          </div>

          {/* Social */}
          {isKr ? (
            <div style={{
              padding: '20px 24px',
              border: '1px solid var(--line)',
              borderRadius: 4,
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 9,
                letterSpacing: '0.16em',
                color: 'var(--ink3)',
                marginBottom: 12,
                textTransform: 'uppercase',
              }}>// SNS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="https://instagram.com/techpulse.kr" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--ink2)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}>
                  → Instagram: @techpulse.kr
                </a>
                <a href="https://x.com/techpulsekr" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--ink2)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}>
                  → X(트위터): @techpulsekr
                </a>
                <a href="https://youtube.com/@TechPulseKR" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--ink2)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}>
                  → YouTube: @TechPulseKR
                </a>
              </div>
            </div>
          ) : (
            <div style={{
              padding: '20px 24px',
              border: '1px solid var(--line)',
              borderRadius: 4,
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 9,
                letterSpacing: '0.16em',
                color: 'var(--ink3)',
                marginBottom: 12,
                textTransform: 'uppercase',
              }}>// Social</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="https://instagram.com/technologypulse.ai" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--ink2)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}>
                  → Instagram: @technologypulse.ai
                </a>
                <a href="https://x.com/techpulseai" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--ink2)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}>
                  → X / Twitter: @techpulseai
                </a>
                <a href="https://youtube.com/@TechnologyPulseAI" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--ink2)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}>
                  → YouTube: @TechnologyPulseAI
                </a>
              </div>
            </div>
          )}
        </div>

        {/* FAQ */}
        <section>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>
            {isKr ? '자주 묻는 질문' : 'Frequently Asked'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {isKr ? (
              <>
                <details style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 4 }}>
                  <summary style={{ fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontSize: 14 }}>뉴스 제보는 어떻게 하나요?</summary>
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>taejawow@gmail.com으로 제목에 [제보]를 붙여 이메일 보내주세요. 검토 후 연락드리겠습니다.</p>
                </details>
                <details style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 4 }}>
                  <summary style={{ fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontSize: 14 }}>광고·협업 문의는 어떻게 하나요?</summary>
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>taejawow@gmail.com으로 [광고 문의] 또는 [협업 제안] 제목으로 연락주세요. 서비스 규모, 타겟, 예산 등을 포함해 주시면 빠른 검토가 가능합니다.</p>
                </details>
                <details style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 4 }}>
                  <summary style={{ fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontSize: 14 }}>기사 오류를 발견했어요.</summary>
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>taejawow@gmail.com으로 [오류 신고]와 함께 해당 기사 URL과 오류 내용을 보내주세요. 확인 즉시 수정하겠습니다.</p>
                </details>
              </>
            ) : (
              <>
                <details style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 4 }}>
                  <summary style={{ fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontSize: 14 }}>How do I submit a news tip?</summary>
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>Email taejawow@gmail.com with &quot;[Tip]&quot; in the subject line. We review all submissions and will follow up if we pursue the story.</p>
                </details>
                <details style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 4 }}>
                  <summary style={{ fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontSize: 14 }}>How do I inquire about advertising or collaboration?</summary>
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>Email taejawow@gmail.com with &quot;[Advertising]&quot; or &quot;[Partnership]&quot; in the subject. Please include your target audience, budget range, and campaign goals for faster review.</p>
                </details>
                <details style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 4 }}>
                  <summary style={{ fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontSize: 14 }}>I found an error in an article.</summary>
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink2)', lineHeight: 1.7 }}>Email taejawow@gmail.com with &quot;[Correction]&quot; in the subject, including the article URL and the specific error. We take accuracy seriously and will correct promptly.</p>
                </details>
              </>
            )}
          </div>
        </section>
      </div>

      <Footer locale={locale} />
    </>
  )
}
