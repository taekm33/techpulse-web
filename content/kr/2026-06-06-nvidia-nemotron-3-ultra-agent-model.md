---
title: "NVIDIA Nemotron 3 Ultra 출시: 장기 에이전트 워크플로우를 위한 5500억 파라미터 오픈 모델"
summary: "NVIDIA가 5500억 파라미터 MoE 모델 Nemotron 3 Ultra를 공개했다. 55B 활성 파라미터로 프론티어급 추론 성능을 내면서 동급 오픈 모델 대비 5배 빠른 처리량과 30% 낮은 비용을 제공한다."
category: "ai-news"
date: "2026-06-06"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "AI 에이전트", "오픈소스 AI", "MoE"]
---

<div class="article-tldr">
NVIDIA가 장기(long-running) AI 에이전트 워크플로우 전용으로 설계된 오픈 모델 Nemotron 3 Ultra를 출시했다. 총 5500억 파라미터의 Mixture-of-Experts 아키텍처를 채택했으나 토큰당 활성 파라미터는 550억에 불과해, 동급 오픈 모델 대비 5배 높은 처리량과 30% 낮은 에이전트 태스크 비용을 실현한다. 가중치·데이터·레시피 전체가 완전 오픈 공개되며 OpenMDW-1.1 라이선스를 적용해 상업적 활용도 가능하다.
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## NVIDIA, 에이전트 시대를 겨냥한 최대 오픈 모델 발표

NVIDIA가 2026년 6월 4일 Nemotron 3 Ultra를 공개하며 오픈 AI 모델 경쟁의 판도를 새롭게 바꿨다. 이 모델은 단순 채팅 응답이 아닌 **계획 수립, 툴 호출, 서브에이전트 위임, 오류 복구** 등 수십 턴에 걸친 복잡한 에이전트 작업을 위해 설계됐다.

<div class="article-stats">

| 지표 | 수치 |
|------|------|
| 총 파라미터 | 5,500억 (550B) |
| 활성 파라미터(토큰당) | 550억 (55B) |
| 동급 모델 대비 처리량 | 5배 향상 |
| 에이전트 태스크 비용 절감 | 최대 30% |
| SWE-bench Verified 스코어 | 65~70.4% |
| 컨텍스트 윈도우 | 최대 256K 토큰 |
| 사전학습 데이터 | 10조 토큰 + 2120억 추가 토큰 |

</div>

## 핵심 아키텍처 혁신

Nemotron 3 Ultra는 네 가지 새로운 기술적 결정으로 구성된다.

**1. 하이브리드 Mamba-Transformer 레이어**
긴 컨텍스트 처리에서 Mamba 레이어가 시퀀스 효율성을 담당하고, Transformer 레이어는 대형 컨텍스트 윈도우에서 특정 사실을 정밀하게 회수하는 역할을 나눠 맡는다. 멀티턴 에이전트 작업에서 두 아키텍처의 장점을 동시에 활용하는 구조다.

**2. NVFP4 양자화**
단일 체크포인트가 NVIDIA Hopper, Blackwell, Ampere GPU 전 아키텍처에서 실행된다. Blackwell 기준 BF16 대비 최대 5배 높은 처리량을 제공하며, 추론 인프라 분리 없이 클라우드·엣지 공동 배포가 가능하다.

**3. LatentMoE 전문가 라우팅**
추론, 코드 생성, 툴 호출, 도메인 전용 로직 등 다양한 워크플로우에 걸친 전문가 라우팅 효율을 높여 멀티태스크 에이전트 오케스트레이션에서의 지연을 줄인다.

**4. Multi-Token Prediction(MTP)**
단일 포워드 패스에서 여러 토큰을 예측해 긴 출력과 멀티턴 워크플로우에서 생성 속도를 높인다.

<div class="article-callout tip">

**개발자 팁:** Nemotron 3 Ultra는 Pi, OpenHands, Hermes, OpenCode, Mini SWE Agent 등 주요 에이전트 하네스에서 65~70.4%의 SWE-bench Verified 스코어를 일관되게 기록한다. 특정 프레임워크에 종속되지 않으므로 기존 에이전트 스택에 바로 통합할 수 있다.

</div>

## Multi-Teacher On-Policy Distillation(MOPD)

Nemotron 3 Ultra의 훈련 방식인 MOPD는 10개 이상의 도메인별 교사 모델에서 동시에 학습한다. 각 교사 모델이 해당 도메인에서 학생 모델의 시도를 채점하는 방식으로, 도메인 간 추론 능력을 더 효율적으로 향상시킨다. 학생과 교사가 함께 진화하는 공동 진화(co-evolution) 구조로 지속적인 역량 강화가 가능하다.

## 도메인별 사전학습 강화

기본 10조 토큰 사전학습 외에 2120억 개의 추가 토큰이 세 영역에 집중 투입됐다:

- **법률 AI:** 40억 합성 법률 데이터 토큰 → LegalBench 평균 64.6% → 74.7%
- **사실 정확성:** 3500억 위키피디아 기반 합성 데이터 → SimpleQA 40.2% → 50.2%
- **코드 최신성:** 1730억 GitHub 토큰(2025년 9월 30일까지)

<div class="article-callout info">

**추가 출시 모델:** 함께 발표된 Nemotron 3.5 Content Safety(4B)는 텍스트·이미지·복합 입력에서 안전하지 않은 콘텐츠를 분류하는 가드레일 모델이다. Nemotron 3.5 ASR은 40개 이상의 언어를 지원하는 멀티링궐 음성 인식 모델로 100ms 미만 지연을 목표로 한다.

</div>

## 가용성 및 라이선스

Nemotron 3 Ultra는 OpenMDW-1.1 라이선스(Linux Foundation 주도) 하에 가중치·데이터·레시피 전체가 공개된다. Hugging Face에서 가중치를 다운로드하거나 NVIDIA NIM 마이크로서비스로 즉시 배포할 수 있다. AWS JumpStart, Google Cloud, Microsoft Foundry, CoreWeave 등 20개 이상의 플랫폼에서도 이용 가능하다.

<div class="article-keypoints">

### 핵심 요약

- Nemotron 3 Ultra는 550B 파라미터 MoE 모델로, 활성 파라미터 55B만으로 프론티어급 성능 구현
- 동급 오픈 모델 대비 5배 처리량, 에이전트 태스크 비용 30% 절감
- 하이브리드 Mamba-Transformer + NVFP4 + LatentMoE + MTP 등 4가지 아키텍처 혁신 적용
- 완전 오픈(가중치·데이터·레시피), OpenMDW-1.1 상업적 사용 가능
- SWE-bench Verified 65~70.4%로 주요 에이전트 프레임워크 전반에서 일관된 성능

</div>

Nemotron 3 Ultra의 등장은 오픈 AI 에이전트 생태계에 중요한 이정표다. 클로즈드 프론티어 모델에 준하는 성능을 오픈 라이선스로 제공함으로써, 중소 기업과 연구 기관도 비용 부담 없이 강력한 에이전트 시스템을 구축할 수 있는 길이 열렸다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://developer.nvidia.com/nemotron" target="_blank" rel="noopener">NVIDIA Developer — Nemotron</a><br/>
· <a href="https://blogs.nvidia.com/" target="_blank" rel="noopener">NVIDIA 공식 블로그</a><br/>
· <a href="https://huggingface.co/nvidia" target="_blank" rel="noopener">NVIDIA on Hugging Face</a>
</div>
