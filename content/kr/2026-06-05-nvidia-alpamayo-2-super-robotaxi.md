---
title: "NVIDIA Alpamayo 2 Super: 레벨4 로보택시를 위한 320억 파라미터 오픈 추론 모델 공개"
summary: "NVIDIA가 GTC 타이페이에서 레벨4 자율주행 개발을 위한 32B 파라미터 오픈 비전-언어-액션(VLA) 모델 Alpamayo 2 Super를 발표했다. AlpaGym, OmniDreams 등 완전한 자율주행 개발 파이프라인도 함께 공개됐다."
category: "ai-news"
date: "2026-06-05"
readingTime: 5
tags: ["NVIDIA", "자율주행", "로보택시", "VLA모델", "물리AI"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> NVIDIA가 GTC 타이페이에서 레벨4 자율주행을 위한 32B 파라미터 오픈 추론 VLA 모델 Alpamayo 2 Super를 공개했다. 함께 발표된 AlpaGym(폐루프 강화학습 프레임워크)과 OmniDreams(포토리얼리스틱 시나리오 생성 모델)는 데이터 캡처부터 훈련, 차량 배포까지 이어지는 완전한 자율주행 개발 파이프라인을 구성한다.
</div>

## 개요: 로보택시 시대를 여는 오픈 AI 모델

NVIDIA가 2026년 6월 1일 GTC 타이페이에서 Alpamayo 시리즈의 최신작인 **Alpamayo 2 Super**를 발표했다. 전체 주행 스택에 걸쳐 추론, 계획, 행동을 수행하는 32억 파라미터 추론 기반 비전-언어-액션(VLA) 모델로, 지금까지 NVIDIA가 공개한 가장 강력한 오픈 추론 모델이다.

단순한 모델 공개를 넘어 NVIDIA는 자율주행 개발의 전체 파이프라인을 완성하는 세 가지 도구를 함께 선보였다. AlpaGym(폐루프 강화학습 프레임워크), OmniDreams(포토리얼리스틱 폐루프 AV 시나리오 생성 세계 모델), 그리고 NVIDIA Agent Toolkit 기반의 물리 AI 에이전트 스킬이 그것이다.

<div class="article-stats">
<h3>Alpamayo 2 Super 핵심 스펙</h3>
<ul>
  <li>🧠 <strong>모델 크기:</strong> 320억 파라미터 (32B)</li>
  <li>🚗 <strong>대상:</strong> 레벨4 자율주행 로보택시</li>
  <li>📂 <strong>공개 방식:</strong> 오픈소스 (GitHub 추론 코드 + Hugging Face 가중치)</li>
  <li>🗓️ <strong>가용성:</strong> 2026년 여름 예정</li>
  <li>🌐 <strong>지원 언어/플랫폼:</strong> 전체 드라이빙 스택 (비전+언어+액션 통합)</li>
</ul>
</div>

## VLA 모델이란? 왜 자율주행에 중요한가

VLA(Vision-Language-Action) 모델은 시각 정보 이해, 언어적 추론, 실제 행동 생성을 하나의 모델에서 통합적으로 처리한다. 자율주행의 경우 카메라 피드를 처리하고, 교통 상황을 언어적으로 추론하며, 조향·가속·제동 명령을 직접 생성하는 것을 의미한다.

기존 자율주행 시스템이 인식·판단·제어를 별도 모듈로 나눴다면, VLA 접근법은 이 과정을 단일 모델로 통합해 더 유연하고 일반화 능력이 뛰어난 시스템을 지향한다. Alpamayo 2 Super는 CoC(Chain-of-Causality) 레이블 방식으로 훈련돼 주행 결정의 인과적 맥락을 이해한다.

<div class="article-callout tip">
<strong>개발자를 위한 핵심 포인트</strong><br>
Alpamayo 2 Super는 올 여름 GitHub(추론 코드)과 Hugging Face(모델 가중치)를 통해 무료로 공개된다. NVIDIA Agent Toolkit의 물리 AI 에이전트 스킬을 활용하면 시뮬레이션, 데이터 생성, 폐루프 훈련 워크플로우를 자동화할 수 있다.
</div>

## AlpaGym: 시뮬레이션으로 도로 전에 학습하다

AlpaGym은 자율주행 모델을 실제 도로 배포 전에 결정의 결과를 통해 훈련시키는 오픈소스 고처리량 폐루프 강화학습(RL) 프레임워크다. 기존 오픈루프 훈련이 녹화된 데이터를 기준으로 모델을 평가하는 방식이라면, AlpaGym은 지속적인 결정-관찰 사이클을 통해 모든 제동, 조향, 내비게이션 선택이 환경에 영향을 미치는 진정한 폐루프 학습을 구현한다.

AlpaSim 마이크로서비스 시뮬레이션 스택과 NVIDIA Omniverse NuRec 위에 구축된 AlpaGym은 Alpamayo에게 오픈루프 사전훈련에서 폐루프 미세조정까지 이어지는 연속적인 개발 경로를 제공한다.

## OmniDreams: 희귀 시나리오를 대규모로 생성하다

자율주행 시스템의 최대 과제 중 하나는 롱테일(long-tail) 시나리오, 즉 실제 도로에서는 드물게 발생하지만 치명적일 수 있는 상황이다. OmniDreams는 이러한 드문 주행 시나리오를 포토리얼리스틱 품질로 대규모 생성할 수 있는 생성형 세계 모델이다.

| 구성 요소 | 역할 | 특징 |
|-----------|------|------|
| Alpamayo 2 Super | 추론·계획·행동 통합 VLA 모델 | 32B 파라미터, 오픈소스 |
| AlpaGym | 폐루프 RL 훈련 프레임워크 | AlpaSim + NuRec 기반 |
| OmniDreams | 포토리얼리스틱 시나리오 생성 | 롱테일 드라이빙 시나리오 특화 |
| NuRec Neural Reconstruction | 실 세계 데이터 → 3D 포토리얼리스틱 씬 재구성 | 멀티 센서 설정 지원 |
| CoC Auto-Labeling | 원시 주행 영상 자동 인과 레이블링 | 인간 어노테이션 불필요 |

<div class="article-callout info">
<strong>CoC Auto-Labeling Pipeline</strong><br>
NVIDIA는 원시 주행 클립에서 인과적으로 연결된 CoC 레이블을 인간 어노테이션 없이 자동 생성하는 CoC Auto-Labeling Pipeline도 GitHub에 오픈소스로 공개했다. 이는 체화된 추론 모델을 대규모로 훈련하는 데 필요한 인과적 훈련 데이터 기반을 제공한다.
</div>

<div class="article-keypoints">
<h3>핵심 포인트 요약</h3>
<ul>
  <li>NVIDIA 최강 오픈 추론 모델 Alpamayo 2 Super(32B VLA) 발표, 2026년 여름 오픈소스 공개 예정</li>
  <li>AlpaGym: 폐루프 RL로 시뮬레이션에서 실제 주행 결과 기반 훈련 가능</li>
  <li>OmniDreams: 포토리얼리스틱 롱테일 시나리오 대규모 생성</li>
  <li>CoC Auto-Labeling으로 인간 어노테이션 없이 인과적 훈련 데이터 생성</li>
  <li>전체 파이프라인이 데이터 캡처→시뮬레이션→훈련→차량 배포를 통합</li>
</ul>
</div>

## 시장 맥락: 오픈 자율주행 AI의 의미

Alpamayo 2 Super의 오픈소스 공개는 자율주행 분야에서 특히 의미심장하다. Waymo나 Tesla의 독점 시스템과 달리, 개발자와 연구자들이 레벨4 수준의 자율주행 VLA 모델을 자유롭게 활용·개선할 수 있게 된다. NVIDIA는 OpenRouter, Fireworks, Baseten 같은 플랫폼을 통해 개발자 접근성을 더욱 높일 계획이다.

자율주행 시장이 레벨4 상용화를 향한 임계점에 다가가고 있는 지금, NVIDIA의 이번 발표는 하드웨어(GPU, Drive 플랫폼)에서 소프트웨어 AI 스택 전반으로 영향력을 확장하려는 전략적 움직임으로 풀이된다.
