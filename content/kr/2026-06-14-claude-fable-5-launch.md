---
title: "Anthropic 클로드 Fable 5 정식 출시: Mythos급 AI가 일반 공개 문을 두드리다"
summary: "Anthropic이 2026년 6월 9일 역대 가장 강력한 공개 모델 Claude Fable 5를 출시했습니다. Mythos급 성능을 지닌 이 모델은 안전 분류기를 통해 사이버보안·생물학 위험을 제어하면서 수일간의 자율 작업이 가능하며, 코딩·지식 업무·비전 벤치마크에서 모든 경쟁 모델을 앞섰습니다."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["claude-fable-5", "anthropic", "ai-model", "llm", "benchmark"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> Anthropic이 Claude Fable 5를 정식 출시했습니다. 이전까지 Project Glasswing을 통해 사이버보안 파트너에게만 제공되던 Mythos 수준의 능력을 일반 대중에 개방했습니다. 코딩, 지식 업무, 비전, 자율 작업 지속성 등 거의 모든 벤치마크에서 1위를 기록하며, 입력 토큰당 $10, 출력 토큰당 $50의 가격에 Claude API, AWS Bedrock, Vertex AI, Microsoft Foundry에서 즉시 사용 가능합니다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5 – Anthropic 공식 발표 영상" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 왜 지금인가: Mythos에서 Fable로

Claude Mythos는 처음부터 일반 공개 모델이 아니었습니다. Anthropic이 훈련과 테스트를 마쳤을 때, 이 모델이 수천 개의 사이버보안 취약점을 발견할 수 있음을 확인했기 때문입니다. 공개하지 않고 전 세계 핵심 소프트웨어를 보호하는 사람들에게 먼저 넘겨 취약점을 닫았습니다.

Claude Fable 5는 이 딜레마의 해답입니다. Mythos와 동일한 기반 모델이지만 **안전 분류기(safety classifier)**를 통해 고위험 영역 요청을 자동으로 검토하고 Opus 4.8으로 리다이렉트합니다. 사이버보안·생물학 위험은 통제하면서 Mythos급 성능을 대중에 개방하는 방식입니다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Fable 5와 Mythos 5의 차이</strong><br>Fable 5는 안전 분류기가 적용된 일반 공개 모델입니다. Mythos 5는 동일한 기반 모델에서 일부 분류기를 제거한 버전으로, Project Glasswing 파트너(사이버보안 기관, 선택된 생물학 연구자)에게만 제한 제공됩니다. 가격과 성능은 두 모델이 동일합니다.</div>
</div>

## 주요 벤치마크 성과

<div class="article-stats">
<div class="stat-item"><span class="stat-number">29% → 46%</span><span class="stat-label">FrontierCode 벤치마크 (출시 당일 업데이트)</span></div>
<div class="stat-item"><span class="stat-number">90%+</span><span class="stat-label">Anthropic 핵심 분석 벤치마크 (Opus 대비 +10p)</span></div>
<div class="stat-item"><span class="stat-number">97.0%</span><span class="stat-label">AIME 2025 수학 추론 벤치마크</span></div>
</div>

| 영역 | 성과 |
|---|---|
| 소프트웨어 엔지니어링 | FrontierCode 1위, CursorBench 1위, ViBench 1위 |
| 수학·과학 | AIME 2025 97.0%, AIME 2026 94.5% |
| 금융 지식 업무 | Hebbia Finance Benchmark 1위 |
| 비전 | 과학 그래프 수치 추출, 스크린샷→웹앱 재구현 |
| 자율 작업 | 수일간 개입 없이 작동, 자체 메모리 도구 활용 |

## 실제 활용 사례: Stripe와 50M줄 Ruby 마이그레이션

Stripe는 Fable 5 초기 테스트에서 5,000만 줄 규모의 Ruby 코드베이스 전체 마이그레이션을 **단 하루**에 완료했다고 보고했습니다. 이는 전체 팀이 두 달 이상 매달려야 할 작업이었습니다. 단순히 빠른 것이 아니라 고품질 프로덕션 코드베이스 기준을 충족하는 방식으로 수행됐습니다.

금융 분석 회사 IMC는 트레이딩 분석 평가에서 Fable 5가 사실 조회, 개념 추론, 근본 원인 분석, 기대값 분석 등 거의 전 항목에서 만점에 가까운 성과를 냈다고 밝혔습니다.

<div class="article-callout info">
<div class="article-callout__icon">📊</div>
<div class="article-callout__body"><strong>비전 능력의 도약</strong><br>Fable 5는 최소한의 도구만으로 게임 「포켓몬스터 파이어레드」를 클리어했습니다. 이전 Claude 모델들은 추가 하네스 지원이 있어도 이 게임에서 고전했습니다. 이는 복잡한 비주얼 추론과 장기 계획 수립 능력의 향상을 상징적으로 보여줍니다.</div>
</div>

## 가격 및 가용성

Fable 5는 입력 토큰당 **$10**, 출력 토큰당 **$50**으로 Claude Mythos Preview 가격의 절반 이하입니다. 프롬프트 캐싱을 활용하면 입력 토큰의 90% 할인이 적용됩니다.

사용 가능한 플랫폼:
- Claude API (claude-fable-5)
- Claude Platform on AWS (Amazon Bedrock)
- Google Cloud (Vertex AI)
- Microsoft Foundry

구독 플랜의 경우 2026년 6월 22일까지는 Pro, Max, Team, Enterprise 모든 플랜에서 추가 비용 없이 Fable 5를 사용할 수 있습니다. 이후에는 사용량 크레딧이 필요합니다.

## 지원 기능

Fable 5는 다음 기능을 기본 지원합니다.

<div class="article-keypoints">
<ul>
<li>100만 토큰 컨텍스트 창 (기본), 요청당 최대 128k 출력 토큰</li>
<li>Effort 파라미터 및 작업 예산(task-budgets) 베타</li>
<li>메모리 도구, 코드 실행, 프로그래매틱 도구 호출</li>
<li>컨텍스트 관리(context-management) 베타: 도구 결과 정리</li>
<li>컴팩션(Compaction) 및 비전(Vision)</li>
<li>API model ID: claude-fable-5</li>
</ul>
</div>

## 안전 설계: 분류기 기반 라우팅

Fable 5의 안전 시스템은 이전 모델들과 다른 접근법을 씁니다. 고위험 영역(사이버보안, 생물학 등)에 대한 요청을 **자동으로 탐지**하고 Opus 4.8로 리다이렉트합니다. 이렇게 하면 Fable 5의 강력한 능력을 활용하면서도 Mythos 수준의 사이버·생물학 위험은 차단할 수 있습니다.

분류기는 현재 광범위하게 적용되어 있지만 Anthropic은 안전한 요청을 더 정확하게 허용하는 방향으로 지속 개선할 계획임을 밝혔습니다.

## 결론

Claude Fable 5는 단순한 성능 향상이 아닌 AI 개발의 새로운 패러다임을 제시합니다. 모델이 수일간 자율적으로 작동하고, 스스로 테스트를 작성하며, 복잡한 코드베이스 마이그레이션을 독립적으로 수행하는 능력은 소프트웨어 엔지니어링 팀의 작업 방식을 근본적으로 바꿀 수 있습니다. Anthropic이 이 성능을 안전 분류기와 결합해 일반 공개한 것은 강력한 AI와 안전한 AI가 반드시 양립 불가능하지 않다는 것을 보여주는 중요한 시도입니다.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic 공식 발표: Claude Fable 5 & Mythos 5 출시 (전체 벤치마크 포함)</a><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5.md" target="_blank" rel="noopener noreferrer">Claude 개발자 문서: API 통합 가이드 및 지원 기능 (공식)</a><br>— <a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener noreferrer">Claude Fable 5 공식 페이지: 벤치마크 및 가격 안내</a></div></div>
