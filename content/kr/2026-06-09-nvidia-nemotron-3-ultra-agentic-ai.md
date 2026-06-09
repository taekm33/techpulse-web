---
title: "NVIDIA Nemotron 3 Ultra 출시 — 에이전트 AI를 위한 완전 오픈 550B 추론 모델"
summary: "NVIDIA가 550B 파라미터의 오픈 MoE 모델 Nemotron 3 Ultra를 출시했다. 장시간 실행 에이전트 워크플로에 최적화되어 동급 오픈 모델 대비 5배 빠른 추론 속도와 30% 낮은 비용을 달성한다. 가중치·데이터·레시피 전체가 공개되며 OpenMDW-1.1 라이선스 하에 상업적 활용이 가능하다."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "에이전트AI", "오픈모델", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — NVIDIA가 2026년 6월 4일 Nemotron 3 Ultra를 공개했다. 550B 파라미터(활성 55B) Hybrid Mamba-Transformer MoE 아키텍처로 장시간 에이전트 워크플로에 특화되어 있다. 동급 오픈 모델 대비 5배 빠른 추론, 30% 낮은 비용을 구현하며 가중치·데이터·레시피가 완전 공개된다. Linux Foundation의 OpenMDW-1.1 라이선스로 상업적 배포가 가능하다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Nemotron 3 Ultra란?

NVIDIA가 Nemotron 3 패밀리의 최상위 모델 **Nemotron 3 Ultra**를 공개했다. 이 모델은 단순한 챗봇이나 단일 쿼리 응답이 아닌, **장시간 자율 에이전트 워크플로**를 위해 설계됐다. 코딩 에이전트, 리서치 에이전트, 멀티 에이전트 파이프라인이 주 사용 대상이다.

Nemotron 3 Ultra는 550B 총 파라미터 중 **55B만 추론 시 활성화**되는 Sparse MoE 구조로, 높은 지능을 유지하면서 추론 비용을 대폭 낮췄다. NVIDIA의 발표에 따르면 동급 오픈 모델과 비교해 **5배 빠른 처리량**, SWE-bench 및 Terminal bench 2.0 기준 **30% 낮은 비용**을 달성했다.

<div class="article-stats">
<strong>주요 수치</strong>
<ul>
  <li>🧠 <strong>총 550B 파라미터</strong> (활성 55B, Sparse MoE)</li>
  <li>⚡ <strong>동급 오픈 모델 대비 5배 빠른 추론 처리량</strong></li>
  <li>💰 <strong>에이전트 태스크 비용 30% 절감</strong> (SWE-bench 기준)</li>
  <li>📏 <strong>1M 토큰 컨텍스트</strong> (Ruler@1M 95% 달성)</li>
  <li>📂 <strong>완전 오픈: 가중치 + 데이터 + 레시피 모두 공개</strong></li>
</ul>
</div>

## 핵심 아키텍처 혁신 4가지

Nemotron 3 Ultra는 단순한 스케일업이 아닌 여러 아키텍처 혁신의 조합이다.

### 1. Hybrid Mamba-Transformer
- **Mamba 레이어**: 긴 컨텍스트 처리 효율 극대화 — 에이전트가 수백 번의 도구 호출을 누적하는 장시간 워크플로에 최적
- **Transformer 레이어**: 대규모 컨텍스트 내 특정 정보 정확 회수(recall) 유지

두 아키텍처의 장점을 선택적으로 결합해 1M 토큰 컨텍스트를 실용적으로 활용할 수 있다.

### 2. LatentMoE
기존 MoE의 전문가 라우팅을 개선한 LatentMoE는 같은 추론 비용으로 4배 많은 전문가를 활용한다. 추론, 코드 생성, 도구 호출, 도메인 특화 로직이 혼재하는 에이전트 워크플로에서 특히 효과적이다.

### 3. NVFP4 양자화
단일 NVFP4 체크포인트가 **NVIDIA Hopper, Blackwell, Ampere GPU 모두**에서 동작한다. BF16 대비 Blackwell에서 5배 높은 처리량을 실현하며, GPU 아키텍처별 별도 최적화 없이 통합 배포가 가능하다.

### 4. 멀티토큰 예측(MTP)
단일 포워드 패스에서 여러 미래 토큰을 동시에 예측해 긴 출력과 멀티턴 워크플로의 생성 속도를 향상시킨다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>즉시 사용 방법</strong><br>Nemotron 3 Ultra는 다음 경로로 즉시 접근 가능하다: <strong>Perplexity Pro</strong> 구독 시 API·UI 사용, <strong>OpenRouter·Together AI·DeepInfra</strong> 등 주요 추론 플랫폼, <strong>Hugging Face</strong>에서 가중치 직접 다운로드, <strong>NVIDIA NIM 마이크로서비스</strong>로 온프레미스 배포. AWS JumpStart, Amazon Bedrock, Baseten 등 엔터프라이즈 클라우드에서도 지원된다.</div>
</div>

## Multi-Teacher On-Policy Distillation (MOPD)

Nemotron 3 Ultra의 후훈련(post-training) 방식도 독특하다. **MOPD**는 10개 이상의 도메인 특화 교사 모델을 동시에 활용하는 훈련 방법이다. 각 교사 모델이 자신의 전문 영역에서 Ultra의 응답을 평가하고, Ultra는 자신이 생성한 시도(attempt)에서 실시간으로 학습한다. 이를 통해 학생-교사 모델이 함께 진화(co-evolution)하며 도메인 전반의 추론 능력이 향상된다.

| 훈련 데이터 규모 | 수치 |
|---|---|
| 사전훈련 토큰 | 10T + 212B 추가 도메인 토큰 |
| SFT 샘플 (누적) | 5,000만 건 |
| RL 태스크 (누적) | 200만 건 |
| RL 환경 (누적) | 55개 |
| 신규 SFT 샘플 | 1,000만 건 |
| 신규 RL 환경 | 15개 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>OpenMDW-1.1 라이선스</strong><br>Nemotron 3 Ultra는 Linux Foundation의 OpenMDW-1.1(Model, Data, Weights) 라이선스로 배포된다. 이는 모델 아키텍처, 파라미터, 문서, 소프트웨어를 단일 프레임워크로 커버하는 새로운 오픈 AI 라이선스다. 기업은 도메인 특화 파인튜닝 후 상업적 배포가 가능하다.</div>
</div>

## 에이전트 생태계: Hermes + OpenClaw + NIM

Ultra는 단독 모델이 아닌 에이전트 생태계와 함께 작동하도록 설계됐다. NVIDIA는 함께 다음을 출시했다:

- **Hermes Agent**: 계획, 도구 호출, 메모리를 제공하는 에이전트 하네스
- **NemoClaw**: Hermes와 OpenCode를 연결하는 오픈소스 오케스트레이션 레이어
- **NVIDIA OpenShell**: 에이전트와 생성 코드를 안전하게 격리하는 보안 런타임 환경

코딩 에이전트는 OpenCode에서 수 시간에 걸쳐 계획·코딩·테스트·디버깅을 반복하고, 리서치 에이전트는 Hermes를 통해 수백 개 소스를 검색·교차 검증한다. Ultra는 이 두 워크플로 모두에서 최적화되어 있다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>550B 파라미터(활성 55B) Hybrid Mamba-Transformer MoE — 장시간 에이전트 워크플로 특화</li>
  <li>동급 오픈 모델 대비 5배 빠른 추론, 30% 낮은 에이전트 태스크 비용</li>
  <li>1M 토큰 컨텍스트(Ruler@1M 95%), NVFP4로 Hopper/Blackwell/Ampere 통합 지원</li>
  <li>가중치·데이터·레시피 완전 공개 — OpenMDW-1.1 상업적 활용 가능</li>
  <li>Hermes·NemoClaw·OpenShell 에이전트 생태계와 네이티브 통합</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" target="_blank" rel="noopener noreferrer">NVIDIA 기술 블로그: Nemotron 3 Ultra 공식 발표</a><br>— <a href="https://research.nvidia.com/labs/nemotron/Nemotron-3/" target="_blank" rel="noopener noreferrer">NVIDIA Research: Nemotron 3 패밀리 논문 및 자료</a><br>— <a href="https://huggingface.co/nvidia/Nemotron-3-Ultra-550B" target="_blank" rel="noopener noreferrer">Hugging Face: 가중치 다운로드</a><br>— <a href="https://build.nvidia.com/nvidia/nemotron-3-ultra" target="_blank" rel="noopener noreferrer">build.nvidia.com: API 체험 및 NIM 마이크로서비스</a></div></div>
