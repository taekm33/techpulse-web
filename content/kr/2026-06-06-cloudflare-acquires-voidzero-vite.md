---
title: "Cloudflare, Vite 개발사 Voidzero 인수 — 봇 트래픽이 처음으로 인간 트래픽 추월"
summary: "Cloudflare가 Vite·Rolldown·Vitest 등 자바스크립트 툴체인을 보유한 Voidzero를 인수했다. 인수 발표와 함께 아젠틱 봇이 전체 인터넷 트래픽의 57%를 넘어 인간 트래픽을 사상 처음으로 추월했다는 통계도 공개됐다."
category: "it-news"
date: "2026-06-06"
readingTime: 5
tags: ["Cloudflare", "Voidzero", "Vite", "AI 에이전트", "개발 도구"]
---

<div class="article-tldr">
Cloudflare가 오픈소스 자바스크립트 빌드 툴체인 생태계인 Voidzero(Vite, Vitest, Rolldown, Oxc)를 인수했다. 동시에 Cloudflare는 인터넷 역사상 처음으로 아젠틱 봇 트래픽이 인간 트래픽을 추월(57% 이상)했다는 데이터를 공개하며, AI 네이티브 웹 시대의 도래를 공식 선언했다.
</div>

## Cloudflare × Voidzero: AI 시대의 빌드 파이프라인 재편

2026년 6월 5일, Cloudflare는 Vite 창시자 Evan You가 이끄는 Voidzero 팀 전체를 인수한다고 발표했다. 인수 금액은 공개되지 않았다. Evan You와 팀원들은 Cloudflare에 합류한 뒤에도 Vite 및 관련 오픈소스 프로젝트의 개발 리더십을 계속 유지한다.

### Voidzero가 보유한 도구들

| 프로젝트 | 역할 | 특징 |
|---------|------|------|
| Vite | 프론트엔드 빌드 도구 | 주간 다운로드 1억 3천만+ |
| Vitest | 단위 테스트 러너 | Vite 네이티브 통합 |
| Rolldown | Rust 기반 번들러 | Rollup 대체, 속도 대폭 향상 |
| Oxc | Rust 기반 툴체인 | 린터·파서·트랜스파일러 통합 |

<div class="article-stats">

| 지표 | 수치 |
|------|------|
| Cloudflare Vite 플러그인 주간 다운로드 | 1,400만 회 |
| 전체 Vite 주간 다운로드 중 점유율 | 10% 이상 |
| Cloudflare AI 사용량 증가율(수개월 내) | 600% |
| Vite 생태계 지원 펀드 규모 | 100만 달러 |
| 인터넷 아젠틱 봇 트래픽 비율 | 57% 이상 |
| 인간 트래픽 비율 | 43% 미만 |

</div>

## 왜 Vite인가 — Cloudflare의 전략적 이유

Cloudflare의 핵심 인프라인 Workers와 Pages는 이미 Vite 생태계와 깊이 연결돼 있다. Cloudflare Vite 플러그인 단독으로도 주간 1,400만 다운로드를 기록하며 전체 Vite 다운로드의 10%를 차지한다. 여기에 Rolldown의 Rust 기반 번들링 속도와 Oxc의 통합 툴체인을 더하면 **AI가 생성한 코드를 분석·번들·테스트하는 파이프라인 전체를 Cloudflare 플랫폼 위에서 완결**할 수 있다.

Cloudflare는 AI 코딩 에이전트가 대량의 코드를 생성하는 시대에, 빌드 및 번들링 파이프라인이 플랫폼 경쟁력의 핵심이 될 것으로 판단했다.

<div class="article-callout info">

**Vite 생태계 펀드:** Cloudflare는 인수와 함께 100만 달러 규모의 Vite 생태계 펀드를 조성했다. 이 펀드는 Vite 코어 팀이 관리하며 독립적인 오픈소스 기여자와 유지관리자를 지원한다. 오픈소스 지속 가능성에 대한 Cloudflare의 공개적 약속이라는 점에서 의미가 있다.

</div>

## 역사적 전환점: 봇이 인간을 넘어섰다

이번 인수 발표에서 가장 충격적인 수치는 제품 자체가 아닌 트래픽 통계였다. Cloudflare CEO 매튜 프린스는 X(구 트위터)에 다음과 같이 밝혔다:

> *"아젠틱 트래픽이 인간 트래픽을 처음으로 추월했다. 2027년 말쯤 될 것이라 예상했고, 그다음엔 2027년 초라고 수정했는데, 아젠틱 트래픽이 워낙 빠르게 성장하면서 이미 인터넷 역사상 최초로 봇이 인간 트래픽을 넘어섰다."*

현재 Cloudflare 네트워크에서 아젠틱 봇 트래픽이 57% 이상, 인간 트래픽이 43% 미만이다. 이 수치는 AI 코딩 에이전트, 자동화 파이프라인, LLM 기반 웹 크롤러 등이 만들어내는 비인간 요청이 폭발적으로 증가한 결과다.

<div class="article-callout tip">

**개발자 시사점:** 아젠틱 트래픽이 과반을 넘어섰다는 것은 웹 인프라 설계 관점에서 근본적인 재검토를 요구한다. Rate limiting, bot detection, API 설계 모두 인간 중심 전제에서 벗어나 에이전트 패턴에 맞게 재설계해야 할 시점이 됐다.

</div>

## 맥락: 직원 20% 감원 직후

이번 인수는 Cloudflare가 전체 직원의 20%(약 1,100명)를 해고한 지 한 달 만에 이뤄졌다. 회사는 더 슬림하고 AI 중심적인 조직을 구축하겠다는 방향을 명확히 했다. Voidzero 인수는 그 방향의 첫 번째 대형 행보다.

<div class="article-keypoints">

### 핵심 요약

- Cloudflare가 Vite·Vitest·Rolldown·Oxc를 보유한 Voidzero 인수, Evan You 팀은 오픈소스 리더십 유지
- Cloudflare Vite 플러그인 주간 1,400만 다운로드, AI 사용량 600% 급증이 인수 배경
- Vite 생태계 100만 달러 펀드 별도 조성으로 오픈소스 지속성 보장
- 역사상 최초로 아젠틱 봇 트래픽(57%)이 인간 트래픽(43%) 추월
- 인수는 AI 코드 생성 시대에 빌드 파이프라인 통제권 확보 전략

</div>

Cloudflare의 Voidzero 인수는 단순한 M&A를 넘어선다. 인터넷 트래픽의 과반이 에이전트로 채워진 세계에서, 빌드 툴체인과 엣지 인프라를 동시에 통제하는 플레이어가 되겠다는 선언이다.
