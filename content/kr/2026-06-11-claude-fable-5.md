---
title: "Claude Fable 5 정식 출시: Mythos급 성능을 모두에게"
summary: "Anthropic이 역대 가장 강력한 범용 AI 모델 Claude Fable 5를 공개했다. 수일 단위의 장기 자율 작업에 특화되며, 사이버보안·생물학 안전장치를 탑재해 일반 사용자도 사용 가능하다."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["Claude", "Anthropic", "AI 모델", "Fable 5", "에이전트 AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic이 2026년 6월 9일 Claude Fable 5를 정식 공개했다. Mythos급 추론 능력에 사이버보안·생물학 분야 안전 분류기를 탑재해 일반 출시가 가능해졌다. 소프트웨어 엔지니어링, 금융 분석, 법률·과학 연구 등 분야에서 기존 최고 모델들을 제치고 1위에 올랐으며, 며칠 단위로 자율 운영이 가능한 최초의 공개 모델이다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">$10</span><span class="article-stats__label">백만 입력 토큰당 (달러)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">$50</span><span class="article-stats__label">백만 출력 토큰당 (달러)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">&lt;5%</span><span class="article-stats__label">안전장치 폴백 발생률</span></div>
  <div class="article-stats__item"><span class="article-stats__value">수일</span><span class="article-stats__label">최대 자율 운영 기간</span></div>
</div>

## 드디어 열린 Mythos급 모델

Anthropic은 지난 4월 Project Glasswing을 통해 Claude Mythos Preview를 사이버 방어자 그룹에만 제한 공개했다. 공개 범위를 좁혔던 이유는 명확했다. 해당 모델이 수천 건의 사이버보안 취약점을 자동으로 식별하는 능력을 보였기 때문이다. 공격자에게 쥐어줄 경우 막대한 피해가 우려됐다.

몇 달간의 안전장치 개선 끝에 Anthropic은 **Claude Fable 5**를 일반 공개했다. Fable 5는 Mythos와 동일한 기반 모델이지만, 사이버보안·생물학·화학 관련 고위험 요청을 자동으로 감지해 Claude Opus 4.8로 폴백하는 분류기를 내장한다. 폴백 발생 빈도는 전체 세션의 5% 미만으로, 대부분의 사용자는 Mythos 수준의 성능을 그대로 경험하게 된다.

## 장기 자율 에이전트의 새 기준

Fable 5의 가장 큰 차별점은 **장기 자율 운영** 능력이다. 기존 모델들이 단일 세션 내 작업에 머물렀다면, Fable 5는 며칠에 걸친 복잡한 프로젝트를 사람의 개입 없이 진행할 수 있다.

Stripe는 초기 테스트에서 "5천만 라인짜리 Ruby 코드베이스 전체 마이그레이션을 하루 만에 완료했다"고 보고했다. 같은 작업을 수행하기 위해 기존 팀은 두 달 이상이 필요했다. GitHub Copilot 팀 역시 "장기 코딩 작업의 자율성과 신뢰도가 이전 벤치마크를 크게 뛰어넘는다"고 평가했다.

Cognition의 FrontierCode 평가에서도 Fable 5는 프론티어 모델 중 최고 점수를 기록했다. 이 평가는 고품질 프로덕션 코드베이스 기준을 충족하면서 어려운 코딩 과제를 해결하는 능력을 측정한다.

## 비전·금융·법률·과학 전방위 성능 향상

소프트웨어 엔지니어링을 넘어 다양한 분야에서도 두각을 드러냈다.

- **금융**: Hebbia의 시니어급 금융 추론 벤치마크에서 1위, IMC는 거래 분석 평가에서 "사실 조회, 개념 추론, 근본 원인 분석, 기대값 분석 전 분야 최고 점수"라고 밝혔다.
- **비전**: 과학 그래프에서 정밀 수치 추출, 스크린샷만으로 웹 앱 소스코드 재현 등 비전 기반 작업에서 신규 최고 성능 달성.
- **메모리·장문 컨텍스트**: 수백만 토큰에 걸친 작업에서도 집중력을 유지하며 파일 기반 메모리로 결과물을 개선한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 팁</strong><br>API에서 모델 ID <code>claude-fable-5</code>로 즉시 사용 가능하다. Task budgets(<code>task-budgets-2026-03-13</code> 헤더)와 메모리 도구, 코드 실행을 지원한다. 안전 분류기로 인한 폴백 처리를 위해 fallback 로직을 코드에 반드시 포함시킬 것을 권장한다.</div>
</div>

## 모델 비교

| 모델 | 특징 | 안전장치 | 가용성 |
|------|------|----------|--------|
| Claude Fable 5 | Mythos급 성능, 일반 공개용 | 사이버보안·생물학 분류기 포함 | 전체 공개 |
| Claude Mythos 5 | Fable 5와 동일 기반 | 분류기 부분 해제 | Project Glasswing 파트너 한정 |
| Claude Opus 4.8 | 이전 최고 범용 모델 | 표준 | 전체 공개 |

## 가격 및 이용 방법

Fable 5와 Mythos 5 모두 입력 토큰 백만 개당 **$10**, 출력 토큰 백만 개당 **$50**으로 책정됐다. Claude Mythos Preview 대비 절반 이하 가격이다.

구독 플랜의 경우 6월 22일까지는 Pro, Max, Team, Enterprise 요금제에 추가 비용 없이 포함된다. 이후에는 사용 크레딧이 필요하며, Anthropic은 용량 확보 즉시 구독 플랜에 다시 포함할 예정이다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Claude Mythos 5란?</strong><br>Fable 5와 동일한 기반 모델이지만, 사이버보안·생물학 안전장치가 부분적으로 해제된 버전이다. 현재는 Project Glasswing 파트너(주로 사이버 방어 기관)에게만 제공되며, 조만간 더 넓은 신뢰 접근 프로그램으로 확대될 예정이다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Claude Fable 5는 Mythos급 능력을 일반에 공개한 첫 번째 모델로, 수일 단위 자율 에이전트 작업 가능</li>
<li>사이버보안·생물학 고위험 요청은 Opus 4.8로 자동 폴백, 5% 미만 세션에서만 발생</li>
<li>소프트웨어 엔지니어링, 금융, 법률, 과학 연구 등 전 분야 프론티어 벤치마크 최고 성능</li>
<li>API 모델 ID <code>claude-fable-5</code>, 입력 $10·출력 $50 / 백만 토큰</li>
<li>6월 22일까지 기존 구독 플랜에 무료 포함, 이후 크레딧 필요</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic 공식 발표: Claude Fable 5 & Mythos 5</a><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5" target="_blank" rel="noopener noreferrer">Claude API 문서: Fable 5 통합 가이드 및 모델 ID</a><br>— <a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener noreferrer">Anthropic Claude Fable 5 제품 페이지</a><br>— <a href="https://aws.amazon.com/about-aws/whats-new/2026/06/claude-fable-5-aws/" target="_blank" rel="noopener noreferrer">AWS: Amazon Bedrock에서 Claude Fable 5 사용하기</a></div></div>
