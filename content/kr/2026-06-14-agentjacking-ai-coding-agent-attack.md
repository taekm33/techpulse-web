---
title: "에이전트재킹(Agentjacking): 가짜 버그 리포트 하나로 AI 코딩 에이전트를 탈취하다"
summary: "Tenet Security가 공개한 Agentjacking 공격은 Sentry의 공개 DSN과 MCP를 악용해 Claude Code·Cursor·Codex 등을 악성 코드 실행 도구로 전환시킵니다. 2,388개 조직이 노출됐으며 통제 테스트 성공률은 85%에 달합니다."
category: "hot-issue"
date: "2026-06-14"
readingTime: 5
tags: ["agentjacking", "ai-security", "mcp", "sentry", "coding-agent"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> 보안 연구팀 Tenet Security가 AI 코딩 에이전트를 탈취하는 새로운 공격 기법 "Agentjacking"을 공개했습니다. Sentry의 공개 DSN과 MCP(Model Context Protocol)를 결합해 Claude Code, Cursor, Codex가 공격자가 심어놓은 악성 npm 패키지를 개발자 권한으로 실행하게 만드는 방식입니다. 악성 코드도, 도용된 자격증명도, 전통적 의미의 해킹도 없이 2,388개 조직이 위험에 노출됐습니다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/0YPd6coRLZM" title="Agentjacking PoC Demo – Tenet Security Threat Labs" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 배경: AI 에이전트가 신뢰하는 외부 도구

2026년 현재, Claude Code·Cursor·Codex 등 AI 코딩 에이전트는 MCP(Model Context Protocol)를 통해 Sentry 같은 외부 서비스와 연결되어 있습니다. 개발자가 "Sentry의 미해결 오류를 수정해줘"라고 요청하면 에이전트는 Sentry MCP 서버를 통해 오류 이벤트를 읽고 수정 절차를 자동 실행합니다.

Tenet Security의 연구팀은 이 '자동 신뢰' 흐름의 구조적 취약점을 발견했습니다. 에이전트는 Sentry가 반환하는 데이터를 시스템 신호로 취급하기 때문에, 공격자가 주입한 조작 데이터와 진짜 오류 데이터를 구별하지 못합니다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Agentjacking의 핵심 원리</strong><br>공격자는 피해자의 인프라에 전혀 접근하지 않습니다. 공개 API와 에이전트의 묵시적 신뢰를 활용할 뿐입니다. 모든 과정이 "인가된" 행동으로 처리되므로 기존 보안 도구가 탐지하지 못합니다.</div>
</div>

## 공격 메커니즘: 5단계 체인

**1단계: DSN 수집**  
Sentry DSN(Data Source Name)은 에러 전송을 위해 웹사이트 JavaScript 소스에 의도적으로 공개되는 쓰기 전용 자격증명입니다. 공격자는 타깃 사이트의 소스에서 손쉽게 찾아낼 수 있습니다.

**2단계: 가짜 오류 이벤트 주입**  
공격자는 별도 인증 없이 Sentry 수집 엔드포인트에 POST 요청만으로 악성 오류 이벤트를 삽입합니다.

**3단계: Sentry 공식 안내처럼 위장**  
주입된 이벤트의 `message` 필드와 컨텍스트 키 이름에 마크다운으로 정밀하게 작성된 "Resolution" 섹션을 포함시킵니다. MCP 서버가 반환할 때 Sentry 자체 템플릿과 시각적으로 완전히 동일하게 보입니다.

**4단계: 에이전트가 악성 명령 수신**  
개발자가 "Sentry 미해결 오류 수정해줘"라고 요청하면, 에이전트는 MCP를 통해 Sentry를 조회하고 조작된 이벤트를 공식 진단 결과로 받아 신뢰합니다.

**5단계: 개발자 권한으로 코드 실행**  
에이전트는 `npx @attacker-controlled-package --diagnose` 같은 명령을 공개 npm 레지스트리에서 다운로드해 **개발자의 전체 권한으로** 실행합니다.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">2,388</span><span class="stat-label">노출된 조직 수 (포천 500 포함)</span></div>
<div class="stat-item"><span class="stat-number">85%</span><span class="stat-label">통제 테스트 성공률</span></div>
<div class="stat-item"><span class="stat-number">100+</span><span class="stat-label">실제 에이전트 실행 확인 건수</span></div>
</div>

## 탈취 후 피해 범위

공격 성공 시 얻을 수 있는 자산은 광범위합니다.

| 탈취 가능 자산 | 구체적 예시 |
|---|---|
| 환경 변수 | API 키, 데이터베이스 자격증명 |
| 클라우드 크레덴셜 | AWS 키, GCP 서비스 계정 토큰 |
| 소스코드 접근권 | GitHub 토큰, 비공개 저장소 URL |
| CI/CD 파이프라인 | 배포 시크릿, 코드 서명 키 |
| 지속적 접근 | 백도어 설치, 원격 접속 유지 |

## 기존 보안 도구가 탐지 못하는 이유

Agentjacking은 EDR(엔드포인트 탐지·대응), WAF, IAM, VPN을 모두 통과합니다. Tenet은 이를 **"Authorized Intent Chain(인가 의도 체인)"**이라 명명했는데, 공격 흐름의 모든 단계가 정상적이고 인가된 행동으로 보이기 때문입니다.

더욱 충격적인 것은 프롬프트 방어도 통하지 않는다는 점입니다. 에이전트에 "신뢰할 수 없는 데이터는 무시하라"고 명시적으로 지시해도, 주입된 Sentry 데이터는 외부 사용자 입력이 아닌 내부 시스템 응답으로 취급돼 실행됩니다.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body"><strong>문제의 범위는 Sentry에 국한되지 않습니다</strong><br>이 취약점의 근본 원인은 Sentry가 아니라 에이전트가 외부 데이터를 처리하는 방식 자체입니다. GitHub 이슈, 지원 티켓, 문서 등 에이전트가 읽는 모든 외부 데이터 경로에서 동일한 위험이 존재합니다. 별도 연구에서는 AI 이메일 에이전트가 피싱 이메일 하나로 AWS 키를 유출한 사례도 보고됐습니다.</div>
</div>

## Sentry의 대응과 한계

Tenet은 2026년 6월 3일 Sentry에 책임감 있는 공개를 진행했습니다. Sentry 리더십은 같은 날 문제를 인정했지만 근본 수정은 거부하며 **"기술적으로 방어 불가능(technically not defensible)"**이라고 밝혔습니다. 이후 특정 페이로드 문자열을 차단하는 전역 콘텐츠 필터만 추가됐는데, 이는 공격 원인이 아닌 증상에 대한 임시방편입니다.

## 실질적 방어 조치

<div class="article-keypoints">
<ul>
<li>AI 에이전트가 MCP 도구 응답에서 읽은 코드를 자동 실행하지 않도록 설정</li>
<li>에이전트 세션에 최소 권한 원칙 적용 — 개발자 전체 권한 부여 지양</li>
<li>에이전트가 생성하는 npm/pip install, npx 명령은 사람이 검토 후 실행</li>
<li>MCP 도구의 외부 데이터를 "신뢰할 수 없는 사용자 입력"으로 취급하도록 시스템 프롬프트 구성</li>
<li>Sentry DSN 노출 현황 파악 및 에이전트-MCP 연결 감사 수행</li>
<li>에이전트가 실행하는 명령에 대한 실시간 모니터링 체계 구축</li>
</ul>
</div>

## 결론

AI 에이전트가 터미널을 실행하고, 코드를 커밋하고, 클라우드 API를 호출하는 시대에 공격 면적은 코드베이스를 훨씬 넘어섭니다. Agentjacking이 보여주는 교훈은 명확합니다. 에이전트에 연결된 모든 외부 도구는 잠재적인 공격 경로이며, 보안 설계는 에이전트가 행동을 결정하는 순간에 집중되어야 합니다.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/" target="_blank" rel="noopener noreferrer">Tenet Security 공식 Agentjacking 연구 보고서 (전체 기술 분석)</a><br>— <a href="https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html" target="_blank" rel="noopener noreferrer">The Hacker News: Agentjacking 공격 심층 보도</a><br>— <a href="https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/" target="_blank" rel="noopener noreferrer">Infosecurity Magazine: AI 에이전트 공격 방어 가이드</a></div></div>
