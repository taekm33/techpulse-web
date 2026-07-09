---
title: "SpaceXAI, 'Grok 4.5' 출시 — Cursor 인수 후 첫 코딩 특화 AI, Opus급 성능을 절반 가격에"
summary: "Elon Musk의 SpaceXAI가 공개한 Grok 4.5는 Cursor 데이터로 학습한 혼합전문가(MoE) 모델로, Opus 4.7 대비 80% 저렴한 가격에 유사한 성능을 주장하며 AI 코딩 시장을 흔들고 있다."
category: "ai-news"
date: "2026-07-09"
readingTime: 5
tags: ["Grok4.5", "SpaceXAI", "Cursor", "코딩AI", "MoE모델"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — SpaceXAI가 2026년 7월 8일 <strong>Grok 4.5</strong>를 공개했다. 지난 몇 주 전 SpaceXAI의 기업공개(IPO) 이후 처음 선보이는 모델로, 6조 달러 규모의 AI 코딩 스타트업 <strong>Cursor 인수</strong>로 확보한 수조 개 토큰 분량의 개발자 데이터를 학습에 활용했다. Elon Musk는 "Opus급 성능이지만 더 빠르고 토큰 효율이 높다"고 밝혔으며, 입력 토큰당 $2·출력 토큰당 $6의 공격적인 가격으로 경쟁사 대비 최대 80% 저렴하다.
</div>

## 왜 지금 주목해야 하는가

2026년 AI 코딩 시장은 모든 주요 플레이어가 '가장 뛰어난 코딩 모델'을 두고 치열하게 경쟁하는 레드 오션이다. OpenAI의 GPT-5.5, Anthropic의 Claude Opus 4.7, Google의 Gemini 등이 각축을 벌이는 가운데, SpaceXAI는 **Cursor 인수**라는 카드를 꺼내 들었다. Cursor가 보유한 실제 개발자-코드베이스 상호작용 데이터는 기존 모델이 학습하기 어려운 '현장 지식'을 담고 있다는 점에서 Grok 4.5의 차별점이 된다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-number">$2/M</span>
  <span class="stat-label">입력 토큰 가격 (Opus 4.7 대비 60% 저렴)</span>
</div>
<div class="stat-item">
  <span class="stat-number">$6/M</span>
  <span class="stat-label">출력 토큰 가격 (Opus 4.7 $25 대비 76% 저렴)</span>
</div>
<div class="stat-item">
  <span class="stat-number">2x</span>
  <span class="stat-label">경쟁 모델 대비 토큰 효율 (SpaceXAI 주장)</span>
</div>
<div class="stat-item">
  <span class="stat-number">수만 대</span>
  <span class="stat-label">학습에 사용된 NVIDIA GB300 GPU 수</span>
</div>
</div>

## Cursor 인수가 만들어낸 데이터 우위

Grok 4.5의 가장 독특한 점은 학습 데이터다. SpaceXAI는 6조 달러(약 600억 달러)에 Cursor를 인수하면서 **수조 개 토큰에 달하는 개발자 인터랙션 데이터**를 손에 넣었다.

이 데이터에는 두 가지 핵심 레이어가 존재한다.

1. **코드베이스 이해 데이터** — 기존 소프트웨어와 개발자가 코드를 탐색·수정·디버깅하는 패턴
2. **에이전트-환경 상호작용 데이터** — AI 에이전트가 실제로 도구를 사용하고, 오류를 수정하고, 멀티 레포지토리 태스크를 처리하는 방식

Cursor 측은 공식 발표에서 "이 데이터셋 덕분에 모델이 소프트웨어 그 자체뿐 아니라 개발자가 일하는 방식과 에이전트가 환경과 상호작용하는 방식 모두를 학습할 수 있었다"고 설명했다.

<div class="article-callout tip">
<strong>개발자 팁:</strong> Grok 4.5는 Cursor 데스크톱·웹·iOS·CLI·SDK에서 즉시 사용 가능하다. 출시 첫 주에 개인 및 팀 플랜 사용자의 모델 사용량이 2배로 제공되니, 지금이 실제 프로젝트에서 성능을 검증해볼 최적의 기회다.
</div>

## 아키텍처 — 혼합 전문가(MoE) 설계

Grok 4.5는 **Mixture-of-Experts(MoE)** 아키텍처를 채택했다. MoE 모델은 단일 거대 모델 대신 여러 전문 서브네트워크('전문가')를 조건부로 활성화하는 방식으로, 전체 파라미터 수 대비 추론 비용을 낮출 수 있어 '토큰 효율 2배' 주장의 기술적 근거가 된다.

SpaceXAI는 수만 대의 **NVIDIA GB300 GPU** 클러스터에서 대규모 학습을 진행했으며, 중복 제거·품질 점수화·도메인 집중 선별 등 정교한 데이터 필터링 파이프라인을 적용했다고 밝혔다.

## 가격 비교 — 경쟁사와의 정면 승부

| 모델 | 입력 ($/1M 토큰) | 출력 ($/1M 토큰) | 특이점 |
|---|---|---|---|
| **Grok 4.5** | $2 | $6 | Cursor 통합, MoE |
| Grok 4.5 Fast | $4 | $18 | 빠른 추론 최적화 |
| Anthropic Opus 4.7 | $5 | $25 | 복합 추론 특화 |
| OpenAI Sol (GPT-5.6) | $5 | $30 | 정부 심사 대상 |
| OpenAI Luna (GPT-5.6) | $1 | $6 | 경량 티어 |

Grok 4.5는 출력 토큰 가격 기준 Opus 4.7보다 **76% 저렴**하다. 실제 토큰 효율이 2배라면, 동일 비용 대비 성능 우위는 더욱 벌어진다.

<div class="article-callout info">
<strong>EU 사용자 주의:</strong> Grok 4.5는 출시 당시 EU 지역에서는 사용할 수 없으며, 7월 말 EU 출시가 예정되어 있다. 규제 환경에 따른 제한으로, GDPR 등 EU 데이터 규정 적합성 심사가 진행 중인 것으로 보인다.
</div>

## 실제 성능 — 무엇을 잘하나

SpaceXAI와 Cursor는 Grok 4.5가 특히 강점을 보이는 영역으로 다음을 제시했다.

- **대규모 코드베이스 탐색** — 수백 개 파일, 다중 레포지토리에 걸친 장기 태스크
- **Rust·C/C++ 난도 높은 시스템 프로그래밍** — 낮은 수준의 메모리·성능 최적화 코드
- **에이전트 루프** — 도구 사용, 오류 수정, 환경 탐색이 반복되는 자율 작업
- **도메인 확장** — 소프트웨어 엔지니어링 외에 데이터 사이언스, 금융, 법무 등 지식 집약 업무

Elon Musk는 X에서 "Grok 4.5는 내부 평가 기준으로 Opus 4.7과 대략 동등하지만, 훨씬 빠르다. 성능·속도·비용의 조합이 경쟁력의 원천"이라고 설명했다.

<div class="article-keypoints">
<h3>핵심 포인트 요약</h3>
<ul>
  <li>SpaceXAI IPO 이후 첫 모델, 6조 달러 Cursor 인수의 첫 성과물</li>
  <li>입력 $2/M · 출력 $6/M — Opus 4.7 대비 최대 76% 저렴한 가격</li>
  <li>Cursor의 수조 토큰 개발자 데이터로 학습한 코딩 특화 MoE 모델</li>
  <li>첫 주 Cursor 사용자 사용량 2배 제공 (개인·팀 플랜)</li>
  <li>EU는 7월 말 출시 예정, API는 Cursor SDK 통해 접근 가능</li>
</ul>
</div>

## 전망 — AI 코딩 모델 전쟁의 새 국면

Grok 4.5의 출시는 단순한 새 모델 발표를 넘어 AI 생태계 재편을 상징한다. SpaceXAI가 Cursor를 인수하면서 단순 '모델 회사'에서 **개발 도구 + AI 인프라 수직 통합 플레이어**로 변신했기 때문이다. 실제 개발자 워크플로와 코드베이스 데이터에 대한 직접 접근권은 외부 모델 공급자가 복제하기 어려운 경쟁 우위다. 같은 날 OpenAI의 GPT-5.6 Sol 출시와 GPT-Live 발표가 겹친 만큼, 7월 둘째 주는 2026년 AI 역사에서 가장 치열했던 한 주로 기록될 것이다.
