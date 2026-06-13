---
title: "Anthropic, 최강 AI 모델 Claude Fable 5 공개 — 안전장치 논란까지"
summary: "Anthropic이 6월 9일 차세대 Mythos급 모델 Claude Fable 5를 전 세계에 출시했다. 강력한 성능과 함께 도입된 안전 분류기가 연구자·개발자 작업을 몰래 격하(downgrade)한다는 논란이 즉각 불거졌고, 회사는 공개 사과와 함께 투명성 개선 업데이트를 배포했다."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["Claude", "Anthropic", "AI모델", "Fable5", "AI안전성"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic이 6월 9일 역대 가장 강력한 공개 모델 <strong>Claude Fable 5</strong>를 출시했다. Mythos급 역량을 안전 분류기와 함께 패키징했지만, 출시 직후 보안 연구자·개발자들의 정당한 작업을 무통보 격하했다는 비판을 받았다. Anthropic은 빠르게 사과하고 폴백(fallback) 가시화 패치를 배포했다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5 — Anthropic" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Claude Fable 5란?

Anthropic은 2026년 6월 9일, **Claude Fable 5**를 정식 출시했다. Fable 5는 기존에 극소수 정부 파트너에게만 제공되던 **Mythos급** 역량을 일반 사용자가 쓸 수 있도록 안전 분류기를 탑재해 공개한 모델이다. 전임 모델인 Claude Mythos Preview가 사이버보안 분야에서 너무 강력해 공개가 보류됐던 것과 대비되는 결정이다.

Fable 5는 복잡한 다단계 작업을 며칠에 걸쳐 자율적으로 수행할 수 있는 **장기 에이전트(long-horizon agent)** 역량이 핵심이다. 금융·법률·연구·소프트웨어 엔지니어링 등 전문 분야에서 최소한의 감독만으로 대규모 프로젝트를 소화할 수 있다는 점이 차별화 포인트다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">$10</span>
<span class="article-stats__label">입력 100만 토큰 당 (USD)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">$50</span>
<span class="article-stats__label">출력 100만 토큰 당 (USD)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">621만</span>
<span class="article-stats__label">공개 4일 유튜브 조회수</span>
</div>
</div>

## 안전 분류기: 설계 vs. 과잉 차단

Fable 5에는 **사이버보안·생물학·화학·의료** 분야의 요청을 자동 심사하는 분류기가 내장됐다. 분류기가 위험으로 판단한 요청은 Claude Opus 4.8으로 폴백(fallback)된다. Anthropic은 "강력한 모델을 안전하게 광범위 배포하기 위한 불가피한 선택"이라고 설명했다.

그러나 출시 직후 문제가 드러났다. 보안 연구자, 과학자, 개발자들이 **정당한 업무임에도 통보 없이 Opus 4.8로 강등**되는 사례가 속출했다. 일부 사용자는 Fable 5와 대화하고 있다고 생각했으나 실제로는 더 약한 모델의 응답을 받고 있었다. Fortune은 이를 "비밀 방해 공작(secret sabotage)"이라 보도했고, The Register도 무해한 프롬프트가 거부되는 사례를 다수 문서화했다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>Anthropic 공식 입장</strong><br>
Anthropic은 수일 내에 공식 사과를 발표했다. 이제 분류기가 개입할 경우 <strong>사용자에게 명시적으로 Opus 4.8로 전환됐음을 알리도록</strong> 패치를 배포했다. 단, 역량 제한 자체는 유지된다.
</div>
</div>

## Claude Mythos 5: 더 강력한 제한판

동일한 기반 모델인 **Claude Mythos 5**도 동시 출시됐으나, 이는 미국 정부와의 협력 프로그램인 **Project Glasswing** 파트너와 소수의 사이버 방어 기관에만 제공된다. Mythos 5는 사이버보안 분야의 안전장치가 해제돼 세계 최고 수준의 취약점 탐지·분석 역량을 갖는다고 알려졌다.

## 이용 가능 플랫폼

| 플랫폼 | 상태 |
|--------|------|
| Claude API (직접) | 즉시 사용 가능 |
| Amazon Bedrock (N. Virginia, Stockholm) | 즉시 사용 가능 |
| Google Vertex AI | 즉시 사용 가능 |
| Microsoft Foundry | 즉시 사용 가능 |
| Pro/Max/Team 구독 | 6월 22일까지 무료 포함, 이후 별도 크레딧 |
| Claude Mythos 5 | Glasswing 파트너 한정 |

API 모델 ID는 `claude-fable-5`, Mythos는 `claude-mythos-5`다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>개발자 주의사항</strong><br>
Claude Fable 5를 API에서 호출할 때 분류기 개입으로 인한 <strong>거부 응답(refusal)</strong>을 처리하는 로직을 반드시 추가해야 한다. 필요 시 다른 모델로 재시도하는 폴백 전략도 설계 단계에서 고려할 것.
</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Claude Fable 5는 Mythos급 성능을 일반에 공개한 최초 모델</li>
<li>안전 분류기가 사이버보안·생물학 등 고위험 요청을 Opus 4.8로 폴백</li>
<li>출시 직후 정당한 작업도 무통보 격하된다는 논란 → Anthropic 사과 및 패치</li>
<li>API 가격: 입력 $10/백만 토큰, 출력 $50/백만 토큰</li>
<li>구독 플랜 포함은 6월 22일까지, 이후 별도 크레딧 필요</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5.md" target="_blank" rel="noopener noreferrer">Claude Fable 5 공식 API 문서 및 변경사항</a><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/overview" target="_blank" rel="noopener noreferrer">Claude 모델 전체 목록 및 비교 (공식)</a><br>— <a href="https://platform.claude.com" target="_blank" rel="noopener noreferrer">Claude Platform — API 키 발급 및 시작하기</a></div></div>
