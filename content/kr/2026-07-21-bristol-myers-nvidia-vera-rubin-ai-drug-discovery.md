---
title: "BMS, 엔비디아 '베라 루빈' 슈퍼컴 도입…제약사 첫 신약개발 AI 팩토리"
summary: "브리스톨 마이어스 스퀴브(BMS)가 엔비디아 차세대 베라 루빈 기반 DGX 슈퍼팟을 도입한 첫 생명과학 기업이 됐다. 8대의 DGX 베라 루빈 NVL72로 구성된 이 시스템은 이전 인프라 대비 메가와트당 성능이 최대 10배 높아, 종양·혈액·면역 등 전 신약개발 파이프라인에 AI를 전면 확대한다."
category: "ai-news"
date: "2026-07-21"
readingTime: 6
tags: ["엔비디아", "BMS", "AI신약개발", "베라루빈", "슈퍼컴퓨터"]
---

<div class="article-tldr">
제약사 브리스톨 마이어스 스퀴브(BMS)가 엔비디아의 차세대 '베라 루빈(Vera Rubin)' 아키텍처 기반 DGX 슈퍼팟을 도입하는 첫 생명과학 기업이 됐다. 8대의 DGX 베라 루빈 NVL72 시스템으로 구성돼 교체 대상 인프라 대비 메가와트당 성능이 최대 10배 높으며, BMS는 이를 소수 연구자가 아닌 '전 과학자'에게 개방해 신약개발 전 과정에 AI를 확대한다. 3년 전 첫 슈퍼팟 도입 이후 이어진 협력의 연장선으로, 경쟁이 모델 성능을 넘어 '연산 인프라 확보전'으로 옮겨가고 있음을 보여준다.
</div>

브리스톨 마이어스 스퀴브(BMS)가 7월 20일(현지시간) 엔비디아의 차세대 베라 루빈 아키텍처 기반 DGX 슈퍼팟을 새로 구축한다고 발표했다. 이 시스템은 8대의 DGX 베라 루빈 NVL72로 구성되며, 엔비디아는 이를 "생명과학 업계에서 가장 강력하고 전력 효율이 높은 AI 클러스터"라고 소개했다. BMS는 베라 루빈 기반 슈퍼팟을 도입하는 첫 생명과학 기업이다.

## 핵심은 '더 큰 모델'이 아니라 '모두를 위한 연산'

이번 발표에서 가장 눈에 띄는 대목은 하드웨어 사양보다 접근 방식이다. BMS 리서치 비즈니스 인사이트·기술 담당 부사장 에린 데이비스(Erin Davis)는 이 통합 시스템을 "슈퍼듀퍼팟(SuperDuperPOD)"이라 부르며 "소수 연구자에게만 슈퍼컴을 주는 게 아니라, 말 그대로 모든 과학자에게 개방한다. 누구도 기다릴 필요가 없고, 한계를 통보받지 않는다"고 말했다.

<div class="article-stats">
<strong>도입 기업</strong> 브리스톨 마이어스 스퀴브(BMS)<br/>
<strong>시스템</strong> DGX 베라 루빈 NVL72 8대 (2번째 DGX 슈퍼팟)<br/>
<strong>성능</strong> 교체 인프라 대비 메가와트당 최대 10배<br/>
<strong>협력 기간</strong> 첫 DGX 슈퍼팟 도입 이후 약 3년<br/>
<strong>적용 영역</strong> 종양·혈액·심혈관·면역·신경과학
</div>

## 무엇을 바꾸나 — '예측 우선(Predict First)'과 통합 데이터 평면

BMS는 약 3년간 기존 DGX 슈퍼팟을 운영하며 성과를 축적해 왔다. AI 기반 타깃(약물 표적) 발굴은 이미 수작업 대비 수 주(週)의 시간을 절감해, 연구자가 더 높은 가치의 과학적 판단에 집중하도록 돕고 있다. BMS 팀은 AI로 암 유발 단백질을 선택적으로 분해하도록 설계된 'CELMoD' 화합물 라이브러리를 확장해, 혈액암을 비롯한 여러 질환에서 새로운 표적과 후보물질의 문을 열었다.

1월 치료제 발굴 과학 부문 수석부사장(SVP)으로 역할을 확대한 파얄 셰스(Payal Sheth)는 리드 최적화 단계에 '예측 우선(Predict First)' 방법론을 적용한다고 설명했다. 설계 단계 예측으로 원하는 물성 조건에 맞지 않는 분자를 걸러내, 성공 확률이 가장 높은 분자에 실험 자원을 집중한다는 것이다.

<div class="article-callout tip">
핵심은 연산량 자체가 아니라 '접근성'이다. BMS는 기존 슈퍼팟과 신규 베라 루빈 시스템을 단일 데이터 평면(single data plane)으로 통합해 전 세계 모든 사업장에서 접근할 수 있게 했고, 엔비디아 미션 컨트롤로 관리되는 이 환경에서 연구자는 복잡한 예측을 평이한 자연어(영어)로 실행할 수 있다.
</div>

## 왜 중요한가 — 경쟁의 무게중심이 '인프라'로

이번 도입은 AI 경쟁이 모델 벤치마크를 넘어 '연산 인프라 확보'로 이동하고 있음을 보여주는 또 하나의 신호다. 베라 루빈은 메가와트당 성능을 크게 끌어올려, 전력 소비를 비례적으로 늘리지 않고도 더 크고 정교한 워크로드를 돌릴 수 있게 한다. 데이비스는 대규모 분자 예측과 자체 파운데이션 모델 구축으로 기존 자원이 "포화 상태"라며, 신규 시스템에 이미 소분자·대분자 설계부터 임상 응용, 디지털 트윈까지 워크로드 배분 계획을 매핑해 뒀다고 밝혔다.

<div class="article-callout info">
엔비디아 바이오니모(BioNeMo) 에이전트 툴킷이 포함돼, 예측 실행·모델 학습은 물론 신약개발 파이프라인 전반의 에이전트형(agentic) 워크플로를 지원한다. 데이비스는 "에이전트는 사일로를 가리지 않고 전 영역을 넘나든다. 이제 프로그램과 조직의 경계를 가로질러 의사결정에서 학습할 수 있다는 점이 판을 바꾼다"고 말했다.
</div>

## 전망

BMS는 이 접근을 '하이브리드 지능(hybrid intelligence)'으로 규정한다. 데이터 집약적 실행은 연산 시스템이 맡고, 방향 설정·해석·깊은 전문성이 필요한 판단은 인간 연구자가 책임진다는 개념이다. 셰스는 "인간의 직관은 대체되는 게 아니라 더 정량적인 통찰과 예측으로 증강된다"고 강조했다. 제약사가 클라우드 사업자·AI 연구소를 넘어 엔비디아 최신 인프라의 주요 구매자로 부상한 만큼, 과학·산업 영역으로의 고성능 컴퓨팅 확산은 당분간 이어질 전망이다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://blogs.nvidia.com/blog/bristol-myers-squibb-building-life-science-industrys-most-advanced-ai-factory-on-nvidia-vera-rubin/" target="_blank" rel="noopener">NVIDIA Blog — BMS, 베라 루빈 기반 생명과학 최고 AI 팩토리 구축 (공식, 7/20)</a><br/>
· <a href="https://www.nvidia.com/en-us/data-center/dgx-vera-rubin-nvl72/" target="_blank" rel="noopener">NVIDIA — DGX 베라 루빈 NVL72 제품 페이지</a><br/>
· <a href="https://www.nvidia.com/en-us/data-center/dgx-superpod/" target="_blank" rel="noopener">NVIDIA — DGX 슈퍼팟 개요</a><br/>
· <a href="https://www.pharmexec.com/view/bristol-myers-squibb-collaboration-nvidia--ai-" target="_blank" rel="noopener">Pharmaceutical Executive — BMS·엔비디아 AI 팩토리 협력 확대</a>
</div>

<div class="article-keypoints">
<ul>
<li>BMS가 엔비디아 베라 루빈 기반 DGX 슈퍼팟을 도입한 첫 생명과학 기업이 됨</li>
<li>DGX 베라 루빈 NVL72 8대로 구성, 교체 인프라 대비 메가와트당 최대 10배 성능</li>
<li>기존 슈퍼팟과 통합해 단일 데이터 평면 구성, 전 세계 모든 사업장에서 접근 가능</li>
<li>AI 타깃 발굴은 이미 수 주의 시간 절감, 'CELMoD'·'예측 우선' 방법론에 적용</li>
<li>바이오니모 에이전트 툴킷으로 신약개발 전 과정의 에이전트형 워크플로 지원</li>
<li>경쟁의 무게중심이 모델 성능에서 '연산 인프라 확보전'으로 이동</li>
</ul>
</div>
