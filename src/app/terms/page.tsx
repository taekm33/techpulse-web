import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export const metadata: Metadata = {
  title: LOCALE === 'kr' ? '이용약관' : 'Terms of Service',
  description: LOCALE === 'kr'
    ? 'TechPulse 서비스 이용에 관한 약관입니다.'
    : 'Terms and conditions for using TechPulse.',
}

export default function TermsPage() {
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
          color: 'var(--ink3)',
          marginBottom: 12,
          textTransform: 'uppercase',
        }}>
          {isKr ? '법적 고지' : 'Legal Notice'}
        </div>

        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: 8,
          color: 'var(--ink)',
        }}>
          {isKr ? '이용약관' : 'Terms of Service'}
        </h1>

        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          color: 'var(--ink3)',
          marginBottom: 48,
          borderBottom: '1px solid var(--line)',
          paddingBottom: 24,
        }}>
          {isKr ? '최종 업데이트: 2026년 5월 1일' : 'Last updated: May 1, 2026'}
        </p>

        <div style={{ lineHeight: 1.8, color: 'var(--ink2)', fontSize: 15 }}>
          {isKr ? (
            <>
              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>1. 약관 동의</h2>
                <p>TechPulse(techpulse.co.kr, 이하 &quot;서비스&quot;)를 이용하시면 본 이용약관에 동의하신 것으로 간주합니다. 동의하지 않으시면 서비스 이용을 중단해 주시기 바랍니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>2. 서비스 설명</h2>
                <p>TechPulse는 AI, IT 기술, 개발, 스타트업 관련 뉴스 및 분석 콘텐츠를 제공하는 미디어 플랫폼입니다. 당사는 정보 제공을 목적으로 하며, 콘텐츠는 정보 제공 목적으로만 활용되어야 합니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>3. 지적 재산권</h2>
                <p style={{ marginBottom: 12 }}>사이트 내 모든 콘텐츠(텍스트, 이미지, 로고, 디자인 등)는 TechPulse의 지적 재산이며, 저작권법에 의해 보호됩니다.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>개인적, 비상업적 목적으로의 열람 및 인용은 허용됩니다</li>
                  <li>출처 표시 없는 무단 복제·배포는 금지됩니다</li>
                  <li>상업적 이용 시 반드시 사전 서면 동의가 필요합니다</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>4. 이용자 의무</h2>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>서비스를 불법적인 목적으로 이용하지 않을 것</li>
                  <li>서비스의 정상적인 운영을 방해하는 행위를 하지 않을 것</li>
                  <li>타인의 권리를 침해하는 방식으로 서비스를 이용하지 않을 것</li>
                  <li>자동화된 수단으로 콘텐츠를 대량 수집(스크래핑)하지 않을 것</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>5. 면책 조항</h2>
                <p style={{ marginBottom: 12 }}>TechPulse는 다음에 대해 책임을 지지 않습니다.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>콘텐츠의 정확성, 완전성, 최신성에 관한 보증</li>
                  <li>서비스 이용으로 인해 발생한 직·간접적 손해</li>
                  <li>외부 링크 사이트의 콘텐츠 및 서비스</li>
                  <li>서비스 중단 또는 오류로 인한 손해</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>6. 광고</h2>
                <p>당사는 Google AdSense 등 제3자 광고 서비스를 통해 광고를 게재합니다. 광고주의 콘텐츠 및 서비스에 대해 당사는 책임을 지지 않습니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>7. 서비스 변경 및 종료</h2>
                <p>당사는 사전 고지 없이 서비스의 일부 또는 전부를 변경, 중단, 종료할 수 있습니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>8. 준거법 및 관할</h2>
                <p>본 약관은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 대한민국 법원을 관할 법원으로 합니다.</p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>9. 문의</h2>
                <div style={{
                  marginTop: 16,
                  padding: '16px 20px',
                  border: '1px solid var(--line)',
                  borderRadius: 4,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12,
                  color: 'var(--ink2)',
                }}>
                  <p>이메일: taejawow@gmail.com</p>
                  <p>사이트: techpulse.co.kr</p>
                </div>
              </section>
            </>
          ) : (
            <>
              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>1. Acceptance of Terms</h2>
                <p>By accessing or using TechPulse (technologypulse.app, &quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the Service.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>2. Service Description</h2>
                <p>TechPulse is a media platform providing news, analysis, and commentary on artificial intelligence, technology, software development, and startups. All content is for informational purposes only.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>3. Intellectual Property</h2>
                <p style={{ marginBottom: 12 }}>All content on this site (text, images, logos, design) is the intellectual property of TechPulse and is protected by copyright law.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Personal, non-commercial viewing and limited quotation is permitted</li>
                  <li>Reproduction or distribution without attribution is prohibited</li>
                  <li>Commercial use requires prior written consent</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>4. User Responsibilities</h2>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Do not use the Service for any unlawful purpose</li>
                  <li>Do not interfere with or disrupt the Service</li>
                  <li>Do not infringe on the rights of others</li>
                  <li>Do not scrape or mass-collect content using automated means</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>5. Disclaimer of Warranties</h2>
                <p style={{ marginBottom: 12 }}>TechPulse makes no warranties regarding:</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>The accuracy, completeness, or timeliness of any content</li>
                  <li>Uninterrupted or error-free operation of the Service</li>
                  <li>The content or services provided through external links</li>
                </ul>
                <p style={{ marginTop: 12 }}>The Service is provided &quot;as is&quot; without warranties of any kind.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>6. Limitation of Liability</h2>
                <p>TechPulse shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use the Service.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>7. Advertising</h2>
                <p>We display advertisements through Google AdSense and similar third-party services. We are not responsible for advertiser content or services.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>8. Modifications</h2>
                <p>We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>9. Contact</h2>
                <div style={{
                  marginTop: 16,
                  padding: '16px 20px',
                  border: '1px solid var(--line)',
                  borderRadius: 4,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12,
                  color: 'var(--ink2)',
                }}>
                  <p>Email: taejawow@gmail.com</p>
                  <p>Website: technologypulse.app</p>
                </div>
              </section>
            </>
          )}
        </div>
      </div>

      <Footer locale={locale} />
    </>
  )
}
