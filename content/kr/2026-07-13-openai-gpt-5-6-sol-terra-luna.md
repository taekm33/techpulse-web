---
title: "OpenAI GPT-5.6 공개: Sol·Terra·Luna 3단계 모델과 ChatGPT Work 에이전트"
summary: "OpenAI가 7월 9일 GPT-5.6 시리즈를 전면 공개했다. Sol·Terra·Luna 세 가지 티어로 구성된 이번 라인업은 최대 100만 토큰 컨텍스트와 750 토큰/초의 추론 속도를 자랑하며, 업무 자동화 에이전트 ChatGPT Work도 함께 출시됐다."
category: "ai-news"
date: "2026-07-13"
readingTime: 5
tags: ["OpenAI", "GPT-5.6", "LLM", "ChatGPT", "AI에이전트"]
---

<div class="article-tldr">
OpenAI가 2026년 7월 9일 GPT-5.6 시리즈를 공개했다. 플래그십 모델 Sol, 균형형 Terra, 경제형 Luna의 3단계 구조로, 모두 100만 토큰 컨텍스트 윈도우와 최대 12만 8천 토큰 출력을 지원한다. Sol은 Cerebras 인프라 위에서 최대 750 토큰/초로 동작해 사실상 실시간 추론이 가능하다. 동시에 발표된 ChatGPT Work는 단순 질의응답을 넘어 완전한 업무 수행이 가능한 에이전트로, AI가 "답을 주는 도구"에서 "일을 완수하는 동료"로 전환되는 신호탄이라는 평가를 받고 있다.
</div>

## GPT-5.6란 무엇인가

OpenAI는 2026년 6월 26일 약 20개 정부 승인 기관을 대상으로 제한 프리뷰를 시작한 뒤, 7월 9일 오전 10시(PT) GPT-5.6 시리즈를 전체 사용자에게 개방했다. GPT-5.5 대비 향상된 추론 능력과 함께 훨씬 낮아진 가격이 핵심이다. Terra 모델은 GPT-5.5와 경쟁 가능한 성능을 유지하면서 비용은 절반 수준으로 낮췄다.

세 모델의 지식 컷오프는 모두 2026년 2월 16일로 동일하며, API와 ChatGPT 인터페이스 모두에서 즉시 사용 가능하다.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-value">750</span>
    <span class="stat-label">토큰/초 (Sol on Cerebras)</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">1M</span>
    <span class="stat-label">컨텍스트 윈도우 (전 모델)</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">128K</span>
    <span class="stat-label">최대 출력 토큰</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">3개</span>
    <span class="stat-label">모델 티어 (Sol·Terra·Luna)</span>
  </div>
</div>

## 모델별 특성과 가격

GPT-5.6는 용도와 예산에 따라 선택할 수 있는 세 가지 모델로 구성된다.

| 모델 | 특성 | 입력 가격 (1M 토큰) | 출력 가격 (1M 토큰) |
|------|------|---------------------|---------------------|
| **Sol** | 최고 성능 플래그십 | $5 | $30 |
| **Terra** | 균형형 (GPT-5.5 수준 성능) | $2.50 | $15 |
| **Luna** | 경제형 고속 처리 | $1 | $6 |

Sol은 OpenAI의 최고 성능 모델로, Cerebras 칩 위에서 최대 750 토큰/초라는 놀라운 속도를 제공한다. 복잡한 코딩·분석·장문 처리에 적합하다. Terra는 일상적인 업무에 GPT-5.5 수준 성능을 제공하면서 비용을 50% 절감할 수 있는 실용적 선택지다. Luna는 가장 저렴하면서도 강력한 능력을 갖춰 대규모 배치 처리나 비용 민감 서비스에 최적화돼 있다.

<div class="article-callout info">
세 모델 모두 100만 토큰 컨텍스트 윈도우를 지원해, 수백 페이지 분량의 문서나 대규모 코드베이스를 단일 세션에서 처리할 수 있다. 기존 GPT-4 계열 대비 약 8배 확장된 규모다.
</div>

## ChatGPT Work: 에이전트 시대의 시작

GPT-5.6와 함께 공개된 ChatGPT Work는 단순한 질의응답 AI를 넘어서는 업무 자동화 에이전트다. 좁고 명확히 정의된 작업에서 사람의 개입 없이 처음부터 끝까지 일을 완수하는 것이 목표다.

예를 들어, "지난 분기 영업 데이터를 분석해 주요 고객사별 요약 보고서를 작성하라"는 지시를 주면 ChatGPT Work가 데이터 수집, 분석, 보고서 작성까지 자율적으로 처리한다. 이는 2026년이 "에이전트의 해"로 불리게 된 핵심 이유 중 하나다.

<div class="article-callout tip">
개발자라면 GPT-5.6 Luna를 기본 추론 모델로 설정하고, 복잡한 작업에만 Terra 또는 Sol로 동적 라우팅하는 전략이 비용 효율적이다. OpenAI API의 모델 라우팅 기능과 결합하면 평균 API 비용을 40~60% 절감할 수 있다.
</div>

## 경쟁 구도와 시장 영향

GPT-5.6 출시는 현재 치열해진 AI 모델 경쟁에서 또 하나의 이정표다. Anthropic의 Claude Sonnet 5, xAI의 Grok 4.5, 중국의 Z.ai GLM-5.2 등 여러 강력한 모델이 동시에 시장에 존재하는 상황에서, OpenAI는 성능과 가격 모두에서 경쟁력을 확보하는 전략을 택했다.

특히 Terra 모델의 가격 인하는 API를 활용하는 스타트업과 중소기업에 큰 혜택이다. 기존 GPT-5.5 기반 서비스를 운영 중이라면 별도의 코드 변경 없이 같은 성능을 절반 비용으로 이용할 수 있다.

<div class="article-keypoints">

### 핵심 포인트

- **3단계 라인업**: Sol(최고 성능)·Terra(균형형)·Luna(경제형)으로 용도별 최적 선택 가능
- **전 모델 100만 토큰**: 초장문 문서·코드베이스 단일 세션 처리 지원
- **750 토큰/초**: Cerebras 위의 Sol이 구현한 사실상 실시간 추론
- **ChatGPT Work**: 자율 업무 수행 에이전트의 상용화 본격 시작
- **가격 경쟁력**: Terra가 GPT-5.5 대비 절반 가격에 동급 성능 제공

</div>

## 전망

GPT-5.6의 등장은 단순한 모델 업데이트가 아니다. 세 가지 티어 전략은 AI가 특정 전문가만의 도구에서 모든 개발자·기업·개인의 일상 인프라로 전환되는 흐름을 가속한다. ChatGPT Work를 통한 에이전트 상용화는 향후 기업 IT 인프라의 재편으로 이어질 가능성이 높다. AI가 "쓰는" 시대에서 AI가 "일하는" 시대로의 전환이 본격화되고 있다.
