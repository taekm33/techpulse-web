---
title: "NVIDIA Cosmos 3 공개 — 로봇·자율주행을 위한 오픈 물리적 AI 세계 기반 모델"
summary: "NVIDIA가 GTC Taipei(Computex 2026)에서 Cosmos 3를 발표했다. 텍스트·이미지·영상·사운드·액션을 하나의 오픈 모델로 처리하는 혼합 트랜스포머 아키텍처로, 물리적 AI 훈련 주기를 '수개월에서 수일'로 단축한다."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["NVIDIA", "Cosmos 3", "Physical AI", "로봇공학", "자율주행", "오픈소스 AI"]
---

<div class="article-tldr">
NVIDIA가 2026년 5월 31일 GTC Taipei(Computex 2026)에서 <strong>Cosmos 3</strong>를 공식 발표했다. 세계 최초의 완전 오픈 옴니모델로, 비전 추론·세계 생성·액션 예측을 단일 혼합 트랜스포머(Mixture-of-Transformers) 아키텍처에 통합했다. 로봇공학·자율주행·비전 AI 시스템의 훈련 및 검증 주기를 수개월에서 수일로 줄이며, 가중치는 Hugging Face에서 누구나 무료로 내려받을 수 있다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/q7Hj3J9SOXw" title="Introducing NVIDIA Cosmos 3: The Open Model That Thinks, Generates, and Acts" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Cosmos 3란 무엇인가

NVIDIA Cosmos 3는 물리적 AI를 위한 프런티어 기반 모델(Foundation Model)이다. 기존 Cosmos 시리즈가 Predict(미래 예측), Transfer(도메인 변환), Reason(물리 이해), Policy(액션 생성) 등 역할별로 분리된 모델로 구성됐다면, Cosmos 3는 이 모든 기능을 **하나의 옴니모델(omnimodel)**로 통합했다.

이 모델은 다음을 동시에 처리할 수 있다.
- **입력**: 텍스트, 이미지, 영상, 주변 사운드, 액션
- **출력**: 텍스트, 이미지, 영상, 주변 사운드, 액션

물리 법칙을 준수하는 합성 영상 생성, 정책 훈련·평가를 위한 폐쇄 루프 시뮬레이션, 로봇용 세계 액션 모델(WAM) 구축이 단일 모델로 가능해진다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">64B</span>
<span class="stat-label">Cosmos 3 Super 파라미터 수 (데이터센터급 추론)</span>
</div>
<div class="stat-item">
<span class="stat-number">16B</span>
<span class="stat-label">Cosmos 3 Nano 파라미터 수 (워크스테이션·엣지 배포)</span>
</div>
<div class="stat-item">
<span class="stat-number">수개월 → 수일</span>
<span class="stat-label">물리적 AI 훈련 및 검증 주기 단축 효과</span>
</div>
</div>

## 두 가지 모델: Nano vs Super

NVIDIA는 Cosmos 3를 두 가지 크기로 출시했다.

| 모델 | 파라미터 | 주요 용도 | 하드웨어 타깃 |
|------|---------|---------|------------|
| Cosmos 3 Nano | 16B | 고속 엣지 추론, 실시간 로봇 | NVIDIA RTX PRO 6000 |
| Cosmos 3 Super | 64B | 최고 정밀도 합성 데이터 생성, 고급 물리 추론 | NVIDIA Hopper / Blackwell GPU |
| Cosmos 3 Edge | 출시 예정 | 실시간 엣지 추론 | 엣지 기기 |

Super 모델은 데이터센터 환경에서 대규모 합성 데이터 생성과 고도화된 물리 추론에 최적화됐고, Nano 모델은 워크스테이션급 GPU에서 로봇의 실시간 추론을 지원한다.

## 혼합 트랜스포머 아키텍처

Cosmos 3의 핵심은 **Mixture-of-Transformers(MoT)** 아키텍처다. 이 구조는 기존 비전-언어 모델(VLM), 세계 모델, 세계 액션 모델(WAM), 비전-언어-액션(VLA) 모델 등 여러 아키텍처의 특성을 흡수해 단일 시스템에 통합한다.

덕분에 Cosmos 3는 단순히 "미래를 예측"하는 것을 넘어 로봇이나 자율주행 차량이 행동하기 전에 **먼저 생각(Think before Act)**할 수 있도록 돕는다. 즉, 시각 추론 → 물리적으로 정확한 합성 영상 생성 → 액션 생성까지의 전 파이프라인이 하나의 모델에서 작동한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 시작 가이드</strong><br>Cosmos 3 모델 가중치는 Hugging Face(nvidia/Cosmos-3-Nano, nvidia/Cosmos-3-Super)에서 즉시 내려받을 수 있다. 후처리 훈련 스크립트와 예제 코드는 GitHub(github.com/nvidia/cosmos)에서, NIM 마이크로서비스를 통한 최적화 배포는 build.nvidia.com에서 체험할 수 있다.</div>
</div>

## NVIDIA Cosmos Coalition — 오픈 생태계 구축

NVIDIA는 Cosmos 3 발표와 함께 **NVIDIA Cosmos Coalition**을 출범시켰다. Agile Robots, Black Forest Labs, Generalist, LTX, Runway, Skild AI 등이 창립 멤버로 참여해 차세대 세계 모델 구축에 협력한다. 이 연합을 통해 다양한 도메인의 전문 세계 모델이 오픈 생태계에서 개발·공유될 전망이다.

## 오픈소스 데이터셋 6종 동시 공개

NVIDIA는 모델 외에도 **합성 데이터 생성(SDG) 데이터셋 6종**을 오픈소스로 공개했다. 로봇공학, 물리 시뮬레이션, 공간 추론, 인체 동작, 자율주행, 창고 환경을 각각 커버하는 데이터셋이다. Cosmos 3 및 다른 모델의 후처리 훈련(post-training)에 활용할 수 있다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>가용성 안내</strong><br>— Cosmos 3 Nano, Cosmos 3 Super: 즉시 사용 가능<br>— Cosmos 3 Edge: 출시 예정<br>— Cosmos 3 Reasoner NIM 마이크로서비스: 현재 제공 중<br>— Cosmos 3 Generator NIM: 곧 출시 예정<br>— 파트너 인프라: Baseten, CoreWeave, Microsoft Azure, Nebius, Deep Infra, Classmethod 지원</div>
</div>

## 왜 물리적 AI에 세계 모델이 필요한가

로봇이나 자율주행 차량을 훈련시키려면 방대한 실세계 데이터가 필요하다. 하지만 현실 데이터 수집은 비용이 막대하고, 위험한 엣지 케이스는 수집 자체가 어렵다. Cosmos 3는 물리 법칙을 준수하는 **합성 영상과 시나리오를 대규모로 생성**해 이 문제를 해결한다. 실제로 NVIDIA의 내부 테스트에서 물리적 AI 훈련·검증 사이클이 수개월에서 수일 수준으로 압축됐다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Cosmos 3는 세계 최초의 완전 오픈 옴니모델 — 텍스트·이미지·영상·사운드·액션 멀티모달 I/O 지원</li>
<li>Mixture-of-Transformers 아키텍처로 VLM·세계 모델·WAM·VLA를 단일 시스템에 통합</li>
<li>Cosmos 3 Nano(16B)와 Super(64B) 두 가지 크기, 가중치 즉시 오픈소스 공개</li>
<li>NVIDIA Cosmos Coalition 출범 — Agile Robots, Runway 등 파트너 생태계 구축</li>
<li>합성 데이터 생성 데이터셋 6종 동시 공개, NIM 마이크로서비스로 프로덕션 배포 지원</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai" target="_blank" rel="noopener noreferrer">NVIDIA 공식 보도자료 — Cosmos 3 론칭</a><br>— <a href="https://github.com/nvidia/cosmos" target="_blank" rel="noopener noreferrer">GitHub — NVIDIA Cosmos 오픈소스 코드·예제</a><br>— <a href="https://developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3/" target="_blank" rel="noopener noreferrer">NVIDIA 개발자 블로그 — Cosmos 3 기술 심층 가이드</a><br>— <a href="https://blogs.nvidia.com/blog/cosmos-3-physical-ai-open-world-foundation-model/" target="_blank" rel="noopener noreferrer">NVIDIA 블로그 — "행동 전에 먼저 생각하는 Cosmos 3"</a></div></div>
