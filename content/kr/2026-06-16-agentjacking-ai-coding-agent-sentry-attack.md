---
title: "에이전트재킹(Agentjacking): 가짜 Sentry 오류 하나로 AI 코딩 에이전트를 납치하는 신종 사이버 공격"
summary: "보안 연구소 테넷시큐리티(Tenet Security)가 AI 코딩 에이전트를 납치하는 새로운 공격 기법 '에이전트재킹(Agentjacking)'을 공개했다. 공격자는 Sentry 오류 추적 플랫폼에 가짜 오류를 주입하는 것만으로 Claude Code·Cursor·Codex를 장악할 수 있으며, 실험에서 85%의 성공률을 기록했다."
category: "hot-issue"
date: "2026-06-16"
readingTime: 5
tags: ["에이전트재킹", "Agentjacking", "AI 보안", "Claude Code", "Cursor", "MCP", "프롬프트 인젝션"]
---

<div class="article-tldr">
<strong>한 줄 요약:</strong> 테넷시큐리티가 공개한 '에이전트재킹' 공격은 Sentry DSN(공개 자격증명)을 이용해 AI 코딩 에이전트의 MCP 통합에 악성 명령을 주입한다. 악성코드·해킹 없이도 85% 성공률로 Claude Code·Cursor·Codex를 장악하고, 2,388개 조직이 취약 상태에 노출된 것으로 확인됐다.
</div>

<div class="article-stats">
  <div class="stat-item"><span class="stat-value">85%</span><span class="stat-label">실험 환경 에이전트 장악 성공률</span></div>
  <div class="stat-item"><span class="stat-value">2,388곳</span><span class="stat-label">취약 노출 확인 조직 수</span></div>
  <div class="stat-item"><span class="stat-value">100+</span><span class="stat-label">실제 조직 대상 에이전트 실행 확인 건수</span></div>
  <div class="stat-item"><span class="stat-value">0건</span><span class="stat-label">기존 보안 솔루션(EDR·WAF·IAM)의 탐지 건수</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/cVWB58kEt-Y" title="BlueHat 2026: Securing the future of AI: Securing MCP with defense in depth patterns" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트재킹이란?

AI 코딩 에이전트는 이제 단순 자동완성 도구가 아니다. 파일을 읽고, 터미널 명령을 실행하고, 외부 서비스를 쿼리하며, 코드를 변경한다. 특히 **모델 컨텍스트 프로토콜(MCP)**을 통해 Sentry 같은 에러 모니터링 플랫폼에 연결되어, 외부 서비스가 반환하는 데이터를 신뢰할 수 있는 시스템 출력으로 처리한다.

에이전트재킹은 바로 이 신뢰 구조를 악용한다. 공격자는 Sentry DSN(데이터 소스 네임, 공개 쓰기 전용 자격증명)을 이용해 가짜 오류 이벤트를 Sentry에 주입한다. AI 에이전트가 개발자의 요청에 따라 미해결 Sentry 이슈를 조회할 때, 정상 오류와 구분할 수 없는 악성 명령을 수신하게 된다. 그 결과 에이전트는 공격자가 제어하는 코드를 **개발자 권한으로 실행**한다.

## 공격이 작동하는 6단계

1. **DSN 획득**: Sentry DSN은 웹사이트 프론트엔드 JavaScript에 공개적으로 삽입되도록 설계된 자격증명이다. 소스 검사, Censys·GitHub 검색으로 손쉽게 발견 가능하다.

2. **가짜 이벤트 주입**: DSN만으로 Sentry 수집 엔드포인트에 HTTP POST 요청을 보낸다. 추가 인증 불필요. Sentry는 이 이벤트를 정상 오류와 동일하게 처리한다.

3. **마크다운 인젝션**: 주입된 이벤트의 메시지·컨텍스트 필드에 정교하게 설계된 마크다운을 삽입한다. Sentry MCP 서버가 이 데이터를 에이전트에 반환할 때, 마크다운은 Sentry 자체 시스템 템플릿과 시각적으로 동일한 구조로 렌더링된다.

4. **에이전트 조작**: 개발자가 "미해결 Sentry 이슈를 고쳐줘"라고 요청하면 에이전트는 MCP를 통해 Sentry를 조회하고 주입된 이벤트를 수신한다. 에이전트는 이를 합법적인 진단 지침으로 해석한다.

5. **코드 실행**: 에이전트가 공격자가 지정한 npm 패키지를 실행한다. 패키지는 공개 npm 레지스트리에서 다운로드되며 개발자의 전체 권한으로 실행된다.

6. **정보 탈취**: AWS 키·GitHub 토큰·Sentry 인증 토큰·git 자격증명·프라이빗 레포 URL·CI/CD 파이프라인 자격증명이 공격자 서버로 유출된다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>왜 기존 보안 도구로는 막을 수 없나?</strong><br>테넷시큐리티는 이를 "권한 부여된 의도 체인(Authorized Intent Chain)"이라고 명명한다. 공격 체인의 모든 단계가 정상 인증된 요청이다 — Sentry는 설계대로 작동하고, DSN은 공개이며, npm 패키지는 표준 채널로 다운로드되고, 에이전트는 정상 지원 워크플로우로 명령을 실행한다. EDR·WAF·IAM·VPN·방화벽 어느 것도 차단할 악성 행위를 탐지하지 못한다.</div>
</div>

## 실제 피해 가능 규모

테넷시큐리티의 통제된 검증 실험에서:
- **2,388개 조직**의 유효한 DSN이 수동 정찰만으로 발견됨 (이 중 71개는 Tranco 상위 100만 도메인 소속)
- Claude Code·Cursor·Codex를 포함한 **100개 이상의 에이전트**가 실제 조직 환경에서 주입 명령에 반응
- 피해 대상은 포춘 500 기업($2500억+ 규모)부터 스타트업, 심지어 **클라우드 보안 전문 기업**까지 포함
- 성공률 **85%** — 기존 방어 시스템이나 '신뢰할 수 없는 데이터를 무시하라'는 시스템 프롬프트가 있어도 동일

## Sentry의 대응과 한계

테넷시큐리티는 2026년 6월 3일 Sentry에 취약점을 신고했다. Sentry는 당일 이를 인정했으나 근본 수정을 거부하며 "기술적으로 방어 불가능(not technically defensible)"하다고 밝혔다. Sentry는 특정 페이로드 문자열을 차단하는 전역 콘텐츠 필터를 추가했지만, 이는 증상 처리일 뿐 원인 해결이 아니다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Sentry만의 문제가 아니다</strong><br>이 취약점은 Sentry 단독의 버그가 아니라, MCP를 통해 외부 제어 가능한 데이터를 반환하는 모든 통합에서 동일한 위험이 존재한다. 지원 티켓, GitHub 이슈, 문서까지 AI 에이전트가 읽는 모든 데이터가 공격 매개체가 될 수 있다.</div>
</div>

## 개발자와 보안팀이 취해야 할 조치

| 조치 항목 | 설명 | 우선순위 |
|---|---|---|
| MCP 통합 목록 감사 | AI 에이전트에 연결된 모든 MCP 서버 파악 | 높음 |
| 외부 데이터 반환 도구 식별 | 비신뢰 외부 데이터를 반환하는 도구 목록화 | 높음 |
| 에이전트 실행 권한 최소화 | 에이전트에 최소 필요 권한만 부여 | 높음 |
| MCP 게이트웨이 프록시 도입 | 요청·응답을 정책 게이트에서 검증 | 중간 |
| 에이전트 실행 로그 전체 수집 | 어떤 에이전트가 무엇을 실행했는지 추적 | 중간 |

<div class="article-keypoints">
<h4>핵심 포인트</h4>
<ul>
  <li>에이전트재킹은 Sentry DSN 하나로 Claude Code·Cursor·Codex를 장악하는 새 공격 기법</li>
  <li>악성코드·해킹 없이 표준 Sentry 공개 API만 사용해 85% 성공률 달성</li>
  <li>2,388개 조직이 취약 상태로 노출, 포춘 500 기업·클라우드 보안 회사도 포함</li>
  <li>기존 EDR·WAF·IAM 등 보안 솔루션은 모든 단계가 '권한 부여된 행위'이므로 탐지 불가</li>
  <li>Sentry는 근본 수정 거부 — 방어의 마지막 지점은 에이전트 런타임 수준</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/" target="_blank" rel="noopener noreferrer">Tenet Security 원본 연구 보고서 (에이전트재킹 상세 기술 분석)</a><br>— <a href="https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/" target="_blank" rel="noopener noreferrer">Cloud Security Alliance(CSA): 에이전트재킹 연구 노트 (2026-06-12)</a><br>— <a href="https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/" target="_blank" rel="noopener noreferrer">Infosecurity Magazine: 공격 기법 및 방어 방법 분석</a><br>— <a href="https://docs.sentry.io/" target="_blank" rel="noopener noreferrer">Sentry 공식 문서 (DSN 보안 가이드라인 포함)</a></div></div>
