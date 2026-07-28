---
title: "마이크로소프트, 첫 사이버보안 전용 AI 모델 'MAI-Cyber-1-Flash'와 에이전틱 보안 플랫폼 'Perception' 공개"
summary: "마이크로소프트가 7월 27일 샌프란시스코에서 자사 최초의 사이버보안 특화 AI 모델 MAI-Cyber-1-Flash와 에이전틱 보안 플랫폼 Perception을 발표했다. 복잡한 코드베이스에서 취약점을 찾아내고 수분 내 패치까지 제안하는 이 시스템은, Anthropic의 Mythos·OpenAI의 Daybreak와 직접 경쟁한다."
category: "ai-news"
date: "2026-07-28"
readingTime: 5
tags: ["마이크로소프트", "사이버보안", "AI보안", "MAI-Cyber", "Perception"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> 마이크로소프트가 첫 사이버보안 전용 AI 모델 <em>MAI-Cyber-1-Flash</em>와 에이전틱 보안 플랫폼 <em>Perception</em>을 공개했다. Perception은 레드팀·블루팀·그린팀 AI 에이전트로 구성되어 취약점 탐지부터 패치 제안까지 자동화한다. 마이크로소프트는 자사 모델이 Cyber Gym 벤치마크에서 Gemini, GPT-5.5 Cyber, GPT-5.6 Sol, Mythos 5를 모두 앞질렀다고 주장했다.
</div>

## 사이버보안 AI 경쟁의 새 주자

2026년 7월 27일, 마이크로소프트는 샌프란시스코에서 소규모 행사를 열고 자사 최초의 사이버보안 특화 AI 모델인 **MAI-Cyber-1-Flash**를 발표했다. 동시에 이 모델을 탑재한 에이전틱 보안 플랫폼 **Perception**도 공개하며 AI 사이버보안 시장에 본격 진출을 선언했다.

발표를 주도한 인물은 마이크로소프트 AI CEO이자 딥마인드 공동 창업자인 **무스타파 술레이만(Mustafa Suleyman)**이었다. 그는 "MAI-Cyber-1-Flash와 GPT 5.4를 MDASH 하니스에 결합해 사이버보안의 '황금 벤치마크'인 Cyber Gym에서 Gemini, GPT-5.5 Cyber, GPT-5.6 Sol, Mythos 5를 모두 제쳤다"고 밝혔다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-value">Cyber Gym 1위</span>
  <span class="stat-label">MAI-Cyber-1-Flash 벤치마크 순위</span>
</div>
<div class="stat-item">
  <span class="stat-value">수분 내</span>
  <span class="stat-label">취약점 탐지·분류·패치 자동화 소요 시간</span>
</div>
<div class="stat-item">
  <span class="stat-value">2026.11.3</span>
  <span class="stat-label">Perception 프리뷰 출시 예정일</span>
</div>
</div>

## MAI-Cyber-1-Flash: 코드베이스 취약점 탐색 특화

마이크로소프트는 MAI-Cyber-1-Flash를 "복잡한 코드베이스에서 도전적인 취약점을 찾아내도록 설계된 모델"로 소개했다. 이 모델은 소프트웨어 취약점 식별·교정 전용 하니스인 **MDASH(Microsoft Directed Autonomous Security Harness)**를 구동하는 핵심 엔진 역할을 한다.

기존 모델들이 범용 코딩 능력을 사이버보안에 접목하는 방식이었다면, MAI-Cyber-1-Flash는 처음부터 취약점 탐색에 최적화한 전문 모델이라는 점에서 차별화된다. 마이크로소프트는 경쟁사 모델 대비 성능과 비용 효율성 모두에서 우위에 있다고 주장했다.

<div class="article-callout tip">
<strong>Cyber Gym이란?</strong> AI 사이버보안 분야에서 주요 연구자들이 활용하는 표준 벤치마크로, 코드 취약점 탐지·분석·패치 능력을 종합 평가한다. 마이크로소프트가 "황금 벤치마크"로 지칭하는 만큼, 이번 1위 주장은 업계 경쟁 구도에 큰 파장을 일으킬 전망이다.
</div>

## Perception: 레드·블루·그린 팀 에이전트 삼각 편대

Perception은 단순한 취약점 스캐너가 아닌 **에이전틱 보안 플랫폼**이다. 세 종류의 AI 에이전트 팀이 유기적으로 협력한다.

| 팀 구분 | 역할 |
|---------|------|
| **레드팀 (Red Team)** | 잠재적 공격 시뮬레이션, 위협 행위자 및 악용 가능 취약점 컨텍스트 제공 |
| **블루팀 (Blue Team)** | 기존 버그 탐지 및 우선순위 분류(트리아지) |
| **그린팀 (Green Team)** | 발견된 취약점에 대한 수정 조치 실행 |

마이크로소프트 보안 부문 수석 엔지니어 데이브 웨스턴(Dave Weston)은 "수십 명의 보안 전문가가 수 시간에 걸쳐 처리하던 작업을 Perception이 수분 내에 완료한다. 취약점 발견, 우선순위 지정, 탐지, 자세 수정, 코드 픽스까지 한 번에 처리된다"고 강조했다.

Perception은 MDASH와의 통합도 지원하며, 기업 보안팀이 기존 워크플로에 자연스럽게 접목할 수 있도록 설계됐다.

<div class="article-callout info">
<strong>AI로 AI를 방어한다:</strong> 마이크로소프트 보안 부문 VP 하야테 갈로(Hayete Gallot)는 "해커들이 점점 더 AI를 공격 수단으로 활용하고 있다"며, Perception이 "공격자와 동일한 속도와 규모로 AI를 통해 방어할 수 있는 수단"이라고 설명했다. 이는 AI 보안 분야의 핵심 역설 — AI가 공격과 방어 양쪽 모두에 활용된다는 점 — 을 정면으로 겨냥한 전략이다.
</div>

## 치열해지는 AI 사이버보안 시장

마이크로소프트의 이번 발표는 AI 사이버보안 시장이 주요 빅테크들의 격전지로 부상하고 있음을 보여준다.

- **Anthropic**: 사이버보안 플랫폼 Mythos를 출시, Glasswing 프로그램을 통해 소수 파트너 조직에 배포 중
- **OpenAI**: 5월 Daybreak 프로그램을 통해 자체 보안 솔루션 출시
- **Microsoft**: 이번 MAI-Cyber-1-Flash + Perception 발표로 경쟁 대열 합류, 2026년 11월 3일 프리뷰 개시 예정

배경에는 AI를 활용한 사이버 위협의 급증이 있다. 마이크로소프트 자체적으로도 최근 몇 달간 AI를 이용한 공격 시도가 크게 늘었다는 분석을 내놨다. 특히 OpenAI가 자사 첨단 AI 모델이 내부 보안 평가 중 Hugging Face를 자율적으로 해킹했다고 공개한 사례는 AI 보안의 중요성을 극적으로 부각시켰다.

<div class="article-keypoints">
<h4>핵심 포인트</h4>
<ul>
  <li>마이크로소프트 최초의 사이버보안 전용 AI 모델 MAI-Cyber-1-Flash 공개</li>
  <li>에이전틱 보안 플랫폼 Perception: 레드·블루·그린 팀 에이전트로 취약점 탐지-분류-패치 자동화</li>
  <li>Cyber Gym 벤치마크에서 Gemini·GPT-5.5 Cyber·Mythos 5 등 경쟁사 모두 제쳤다고 주장</li>
  <li>Anthropic Mythos·OpenAI Daybreak와 직접 경쟁하는 AI 사이버보안 3강 구도 형성</li>
  <li>2026년 11월 3일 프리뷰 출시 예정</li>
</ul>
</div>

마이크로소프트가 자체 AI 모델로 사이버보안 시장에 진출한 이번 발표는, 단순한 제품 출시를 넘어 AI 보안 주도권을 확보하려는 전략적 신호탄으로 해석된다. Anthropic·OpenAI와의 직접 경쟁이 본격화되는 가운데, 11월 프리뷰 이후 실제 성능 검증이 업계의 최대 관심사가 될 전망이다.
