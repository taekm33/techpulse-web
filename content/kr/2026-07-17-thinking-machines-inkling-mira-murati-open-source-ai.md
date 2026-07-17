---
title: "미라 무라티의 'Inkling' 공개: 처음부터 학습한 975B 오픈소스 AI 모델 등장"
summary: "전 OpenAI CTO 미라 무라티가 설립한 Thinking Machines Lab이 아파치 2.0 라이선스 기반의 975억 파라미터 오픈웨이트 모델 'Inkling'을 공개했다. 현재까지 미국에서 공개된 오픈웨이트 모델 중 가장 큰 규모다."
category: "ai-news"
date: "2026-07-17"
readingTime: 5
tags: ["Inkling", "Thinking Machines", "오픈소스AI", "미라무라티", "LLM"]
---

<div class="article-tldr">
<strong>3줄 요약</strong>
<ul>
  <li>미라 무라티(전 OpenAI CTO) 설립 스타트업 Thinking Machines Lab이 975B 파라미터 멀티모달 AI 모델 <strong>Inkling</strong>을 아파치 2.0 라이선스로 공개했다.</li>
  <li>허깅페이스에서 무료 다운로드 가능하며, 에이전틱 벤치마크 MCP Atlas에서 74.1%로 서방 오픈웨이트 모델 중 최고 성능을 기록했다.</li>
  <li>중국 주요 오픈소스 모델(DeepSeek V4, GLM 5.2, Kimi K2.6)과 견줄 수 있는 실질적인 서방 대안이 처음으로 등장했다는 평가다.</li>
</ul>
</div>

## 미라 무라티, 드디어 베일 벗다

2024년 9월 OpenAI를 떠난 미라 무라티가 약 2년 만에 결과물을 내놨다. 2025년 2월 그가 창업한 **Thinking Machines Lab**은 7월 15일(현지시간) 첫 번째 모델 **Inkling**을 공개했다. 핵심은 단 하나다. "완전히 처음부터(from scratch) 학습했으며, 모든 가중치가 공개(open weights)된다."

무라티는 X(구 트위터)에 "우리의 첫 번째 모델, Inkling. 처음부터 학습했고, 가중치는 공개됐으며, 오늘부터 Tinker에서 파인튜닝이 가능하다"고 밝혔다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-number">975B</span>
  <span class="stat-label">전체 파라미터 수</span>
</div>
<div class="stat-item">
  <span class="stat-number">74.1%</span>
  <span class="stat-label">MCP Atlas 벤치마크 점수 (서방 오픈웨이트 1위)</span>
</div>
<div class="stat-item">
  <span class="stat-number">77.6%</span>
  <span class="stat-label">SWE-Bench Verified 점수</span>
</div>
<div class="stat-item">
  <span class="stat-number">Apache 2.0</span>
  <span class="stat-label">라이선스 (상업적 이용·파인튜닝 자유)</span>
</div>
</div>

## 모델 사양: 규모가 곧 경쟁력

Inkling은 **975억 파라미터** 규모의 멀티모달 모델로, 원래 정밀도(16비트)로 실행하려면 GPU 메모리 **2TB 이상**이 필요하다. 엔비디아 B300 기준 약 8장, 또는 H200 기준 16장에 해당하는 규모다. 고사양 하드웨어가 부담스러운 개발자를 위해 NVFP4 양자화(Quantized) 버전도 함께 공개됐으며, 이 경우 필요 GPU를 절반으로 줄일 수 있다.

이 외에도 Thinking Machines는 **Inkling-Small**을 함께 예고했다. 총 2,760억 파라미터에 활성 파라미터 120억 수준의 MoE(Mixture of Experts) 구조로, 대부분의 추론 벤치마크에서 대형 모델과 유사한 성능을 보인다고 밝혔다. 가중치는 테스트 완료 후 공개 예정이다.

<div class="article-callout tip">
<strong>Tinker 플랫폼이란?</strong><br>
Thinking Machines가 제공하는 API 및 파인튜닝 플랫폼이다. Inkling 기반으로 자신만의 모델을 커스터마이징할 수 있으며, TogetherAI, Fireworks, Modal, Databricks, Baseten 등 서드파티 서비스 연동도 준비 중이다.
</div>

## 벤치마크 성적: 에이전트 분야에서 두각

Inkling의 강점은 **에이전틱(Agentic) 작업**에서 특히 두드러진다.

| 벤치마크 | Inkling | Nvidia Nemotron 3 Ultra | GLM 5.2 (중국) | Kimi K2.6 (중국) |
|---|---|---|---|---|
| MCP Atlas | **74.1%** | ~45% | — | — |
| SWE-Bench Verified | **77.6%** | 70.7% | — | — |
| FORTRESS Adversarial | **78.0%** | — | — | — |
| Terminal Bench 2.1 | 63.8% | — | **82.7%** | — |
| Humanity's Last Exam | — | — | — | 리드 |

MCP Atlas는 모델 컨텍스트 프로토콜(MCP)을 활용해 AI 에이전트가 실제 도구를 사용해 작업을 완료하는 비율을 측정한다. Inkling의 74.1%는 서방 최강 경쟁자인 엔비디아 Nemotron 3 Ultra를 약 30포인트 차이로 앞선다.

반면 중국 모델은 일부 벤치마크에서 여전히 우위를 보인다. Z.ai의 GLM 5.2는 Terminal Bench 2.1에서 82.7%로 Inkling의 63.8%를 크게 앞서고, Kimi K2.6은 박사급 과학 추론 테스트인 Humanity's Last Exam에서 선두를 유지한다.

<div class="article-callout info">
<strong>왜 '처음부터 학습'이 중요한가?</strong><br>
기존 오픈소스 모델 대부분은 OpenAI나 메타 등 기존 모델의 가중치를 기반으로 파인튜닝된 파생 모델이다. Inkling처럼 완전히 새로 학습된 모델은 라이선스 분쟁 위험이 없고, 데이터·학습 과정의 투명성이 높다는 이점이 있다. 규제·보안에 민감한 기업 고객에게 특히 중요한 요소다.
</div>

## 배경: 12억 달러 유니콘에서 공개 모델까지

Thinking Machines Lab은 2025년 7월 a16z를 리드 투자자로 엔비디아, Accel, ServiceNow, Cisco, AMD, Jane Street 등의 참여 아래 **120억 달러 밸류에이션으로 20억 달러**를 조달했다. 당시 실리콘밸리 역사상 최대 규모의 시드 라운드 중 하나로 기록됐다. 이후 2025년 11월 500억 달러 밸류에이션의 추가 라운드를 추진했으나 2026년 1월 협상이 결렬된 바 있다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>Inkling은 미국산 오픈웨이트 모델 중 최초로 중국 오픈소스 AI와 경쟁 가능한 규모·성능에 도달했다.</li>
  <li>아파치 2.0 라이선스 적용으로 상업적 이용과 파인튜닝이 제약 없이 가능하다.</li>
  <li>에이전틱 코딩·도구 사용 벤치마크에서 서방 오픈웨이트 모델 중 최고 성능을 기록했다.</li>
  <li>중국 모델이 리드하는 일부 영역(터미널 코딩, 고난이도 추론)에서는 아직 격차가 남아 있다.</li>
  <li>Tinker 플랫폼을 통해 곧바로 파인튜닝 및 API 활용이 가능하며, 허깅페이스에서 무료 다운로드도 지원한다.</li>
</ul>
</div>

## 전망: 오픈소스 AI 지형 변화의 신호탄

Inkling 공개는 서방 AI 기업들이 독점 모델로만 경쟁하던 구도에 균열을 낸다. 현재까지 서방의 강력한 오픈웨이트 모델은 메타의 Llama 계열이 사실상 유일한 선택지였지만, Inkling은 에이전틱 사용 시나리오에서 이를 확연히 뛰어넘는다. 규제·보안·데이터 주권 이유로 중국산 모델을 채택하기 어려웠던 서방 기업들에게는 새로운 실질적 대안이 생긴 셈이다.
