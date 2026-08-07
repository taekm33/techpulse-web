import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'
import { canonicalUrl } from '../../lib/seo'

const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'

export const metadata: Metadata = {
  alternates: { canonical: canonicalUrl('/privacy-policy/') },
  title: LOCALE === 'kr' ? '개인정보처리방침' : 'Privacy Policy',
  description: LOCALE === 'kr'
    ? 'TechPulse의 개인정보 수집·이용·보호에 관한 방침을 안내합니다.'
    : 'Learn how TechPulse collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
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
          {isKr ? '개인정보처리방침' : 'Privacy Policy'}
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
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>1. 개요</h2>
                <p>TechPulse(이하 &quot;당사&quot;, 운영 도메인: techpulse.co.kr)는 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 및 관련 법령을 준수합니다. 본 방침은 당사가 어떤 정보를 수집하고, 어떻게 사용하며, 어떻게 보호하는지를 설명합니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>2. 수집하는 정보</h2>
                <p style={{ marginBottom: 12 }}>당사는 서비스 제공을 위해 다음과 같은 정보를 수집할 수 있습니다.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li><strong>자동 수집 정보:</strong> IP 주소, 브라우저 종류, 방문한 페이지, 방문 시간, 운영체제 등 사이트 방문 시 자동으로 수집되는 정보</li>
                  <li><strong>쿠키 및 유사 기술:</strong> 서비스 개선 및 광고 게재 목적으로 쿠키를 사용합니다</li>
                  <li><strong>문의 정보:</strong> 이용자가 당사에 문의할 경우 이메일 주소 등 연락처 정보</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>3. 정보의 이용 목적</h2>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>서비스 운영 및 콘텐츠 제공</li>
                  <li>서비스 개선 및 이용 통계 분석</li>
                  <li>맞춤형 광고 제공 (Google AdSense 등)</li>
                  <li>이용자 문의 응대</li>
                  <li>법적 의무 이행</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>4. 제3자 광고 서비스 (Google AdSense)</h2>
                <p style={{ marginBottom: 12 }}>당사는 Google AdSense를 통해 광고를 게재합니다. Google은 이용자의 관심사에 맞는 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Google의 광고 쿠키 사용 방식은 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google 광고 정책</a>에서 확인할 수 있습니다</li>
                  <li>이용자는 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google 광고 설정</a>에서 관심 기반 광고를 수신 거부할 수 있습니다</li>
                  <li>또는 <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>www.aboutads.info</a>를 통해 제3자 광고 쿠키를 비활성화할 수 있습니다</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>5. 쿠키 관리</h2>
                <p style={{ marginBottom: 12 }}>이용자는 브라우저 설정을 통해 쿠키를 관리할 수 있습니다. 쿠키를 비활성화할 경우 일부 서비스 기능이 제한될 수 있습니다.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                  <li>Firefox: 설정 → 개인 정보 및 보안 → 쿠키 및 사이트 데이터</li>
                  <li>Safari: 환경설정 → 개인 정보 보호</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>6. 외부 링크</h2>
                <p>당사 사이트에는 외부 웹사이트로의 링크가 포함될 수 있습니다. 외부 사이트의 개인정보 처리 방침은 당사의 방침과 다를 수 있으며, 당사는 외부 사이트의 내용에 대해 책임을 지지 않습니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>7. 정보 보호 조치</h2>
                <p>당사는 이용자의 정보를 보호하기 위해 SSL/TLS 암호화, 접근 제한 등의 기술적·관리적 보호 조치를 취하고 있습니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>8. 이용자 권리</h2>
                <p style={{ marginBottom: 12 }}>이용자는 자신의 개인정보에 대해 다음의 권리를 가집니다.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>개인정보 열람 요청</li>
                  <li>개인정보 정정·삭제 요청</li>
                  <li>개인정보 처리 정지 요청</li>
                </ul>
                <p style={{ marginTop: 12 }}>권리 행사를 위해서는 아래 연락처로 문의하시기 바랍니다.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>9. 방침 변경</h2>
                <p>본 방침은 법령 변경 또는 서비스 변경 시 업데이트될 수 있습니다. 변경 시 본 페이지에 공지합니다.</p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>10. 문의처</h2>
                <p>개인정보 관련 문의사항은 아래로 연락주세요.</p>
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
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>1. Overview</h2>
                <p>TechPulse (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, operating at technologypulse.app) is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>2. Information We Collect</h2>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li><strong>Automatically Collected Information:</strong> IP address, browser type, pages visited, visit timestamps, operating system, and referral URLs</li>
                  <li><strong>Cookies and Similar Technologies:</strong> We use cookies to improve our service and deliver relevant advertisements</li>
                  <li><strong>Contact Information:</strong> If you contact us, we may collect your email address and message content</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>3. How We Use Your Information</h2>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>To operate and improve our website and services</li>
                  <li>To analyze usage patterns and site performance</li>
                  <li>To display relevant advertisements (via Google AdSense)</li>
                  <li>To respond to your inquiries</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>4. Third-Party Advertising (Google AdSense)</h2>
                <p style={{ marginBottom: 12 }}>We use Google AdSense to display advertisements. Google may use cookies to show ads based on your interests and prior visits to our site and other websites.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Learn more about how Google uses data at <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google&apos;s Advertising Policies</a></li>
                  <li>Opt out of interest-based advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google Ad Settings</a></li>
                  <li>Opt out of third-party vendor cookies at <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>www.aboutads.info</a></li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>5. Cookie Management</h2>
                <p style={{ marginBottom: 12 }}>You can control cookies through your browser settings. Disabling cookies may affect some site functionality.</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                  <li>Firefox: Preferences → Privacy &amp; Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>6. External Links</h2>
                <p>Our site may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>7. Data Security</h2>
                <p>We implement SSL/TLS encryption and access controls to protect your information. However, no method of transmission over the internet is 100% secure.</p>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>8. Your Rights</h2>
                <p style={{ marginBottom: 12 }}>Depending on your jurisdiction, you may have the right to:</p>
                <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability (where applicable)</li>
                </ul>
              </section>

              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on this page with a new &quot;Last updated&quot; date.</p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>10. Contact Us</h2>
                <p>For privacy-related inquiries, please reach out:</p>
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
