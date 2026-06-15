---
title: "NVIDIA, 550B 완전 오픈 MoE 모델 Nemotron 3 Ultra 공개 — 에이전트 AI의 새 기준"
summary: "NVIDIA가 550억 파라미터 MoE 구조의 완전 오픈소스 모델 Nemotron 3 Ultra를 출시했다. 5배 빠른 추론 속도와 30% 낮은 비용으로 장시간 에이전트 작업을 처리하며, 가중치·데이터·학습 레시피를 모두 공개했다."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "오픈소스AI", "MoE", "에이전트AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — NVIDIA가 <strong>Nemotron 3 Ultra</strong>를 공개했다. 전체 550B 파라미터, 활성 55B 파라미터의 하이브리드 Mamba-Transformer MoE 구조로, 기존 동급 모델 대비 <strong>5배 빠른 추론</strong>과 <strong>30% 낮은 에이전트 작업 비용</strong>을 달성했다. 가중치·데이터·학습 레시피 모두 Linux Foundation의 OpenMDW-1.1 라이선스로 완전 공개됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트 AI를 위해 태어난 모델

"AI는 더 이상 질문에 답하는 것에 그치지 않는다. 이제 AI는 당신을 대신해 일하는 에이전트다." NVIDIA 공식 발표에서 강조된 이 문장이 Nemotron 3 Ultra의 설계 철학을 요약한다.

코딩 에이전트는 계획을 세우고, 코드를 작성하고, 테스트하고, 디버깅하고, 반복한다. 이 과정이 수 시간에 걸쳐 여러 에이전트에서 동시에 진행된다. Nemotron 3 Ultra는 이런 **장시간 에이전트 워크플로**에서 최고 성능을 내도록 설계됐다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">550B</span>
<span class="article-stats__label">전체 파라미터 (활성 55B)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">5×</span>
<span class="article-stats__label">동급 모델 대비 추론 속도 향상</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">30%</span>
<span class="article-stats__label">에이전트 작업 비용 절감</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">10+</span>
<span class="article-stats__label">도메인 특화 교사 모델 (Multi-Teacher 증류)</span>
</div>
</div>

## 핵심 기술 아키텍처

### 하이브리드 Mamba-Transformer
Nemotron 3 Ultra는 기존 Transformer 레이어에 **SSM(State Space Model) Mamba 레이어**를 결합한 하이브리드 구조를 채택했다. Mamba는 긴 컨텍스트 처리에서 Transformer보다 메모리·계산 효율이 뛰어나, 수백만 토큰에 달하는 에이전트 세션을 처리할 때 핵심적인 이점을 제공한다.

### LatentMoE + NVFP4
**LatentMoE**는 전통적인 MoE보다 4배 많은 전문가(Expert)를 같은 추론 비용으로 활성화할 수 있도록 한다. 더 많은 전문가 = 더 높은 지능, 같은 속도. 또한 **NVFP4 양자화**를 통해 Hopper, Blackwell, Ampere 전 세대 NVIDIA GPU에서 하나의 체크포인트로 구동되며, BF16 대비 최대 5배 높은 처리량을 달성한다.

### Multi-Teacher On-Policy Distillation
10개 이상의 도메인 특화 교사 모델에서 밀도 높은 피드백을 받아 학습하는 방식이다. 학습 데이터 파이프라인과 레시피가 완전히 공개돼 누구나 자신의 도메인에 특화해 파인튜닝할 수 있다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>바로 사용하기</strong><br>Nemotron 3 Ultra는 Perplexity Pro, OpenRouter, Anaconda, build.nvidia.com API에서 즉시 사용 가능하다. NVIDIA NIM 마이크로서비스로 패키징돼 클라우드·온프레미스·엣지 환경 어디서나 배포할 수 있다.</div>
</div>

## 성능 비교

SWE-bench와 Terminal Bench 2.0에서 Nemotron 3 Ultra는 동급 최강 모델들과 비교해 **더 적은 총 토큰**과 **턴당 더 적은 토큰**으로 벤치마크를 완료했다. 이는 에이전트 작업의 실제 비용과 직결된다.

| 특성 | Nemotron 3 Ultra | 동급 경쟁 모델 평균 |
|------|-----------------|-------------------|
| 추론 속도 | 5× 빠름 | 기준 |
| 에이전트 작업 비용 | 30% 절감 | 기준 |
| GPU 호환성 | Hopper·Blackwell·Ampere | 제각각 |
| 라이선스 | 완전 오픈 (OpenMDW-1.1) | 제한적 |
| 가중치 공개 | ✅ | 대부분 ❌ |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>OpenMDW-1.1 라이선스란?</strong><br>Linux Foundation이 AI 모델을 위해 설계한 퍼미시브 라이선스로, 모델 아키텍처·파라미터·문서·소프트웨어·관련 자료를 단일 프레임워크로 포괄한다. 상업적 이용도 가능하며 파인튜닝 후 재배포도 허용된다.</div>
</div>

## 에이전트 하네스 통합

Nemotron 3 Ultra는 NVIDIA의 **NemoClaw** 보안 런타임 및 **Hermes 에이전트 하네스**와 긴밀히 통합된다. OpenCode, Hermes 등 주요 에이전트 프레임워크에서 간단한 JSON 설정 한 줄로 모델을 교체할 수 있다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Nemotron 3 Ultra는 550B/55B 하이브리드 Mamba-Transformer MoE 모델이다.</li>
<li>동급 모델 대비 5배 빠른 추론, 에이전트 작업 비용 30% 절감.</li>
<li>NVFP4 양자화로 Hopper·Blackwell·Ampere 전 세대 GPU에서 동일 체크포인트 구동.</li>
<li>가중치·데이터·레시피 완전 공개 (OpenMDW-1.1), 상업적 파인튜닝·재배포 허용.</li>
<li>Perplexity Pro, OpenRouter, build.nvidia.com, NVIDIA NIM에서 즉시 사용 가능.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/NVIDIA/NeMo" target="_blank" rel="noopener noreferrer">NVIDIA NeMo GitHub — 모델 학습·파인튜닝 프레임워크 공식 저장소</a><br>— <a href="https://github.com/NVIDIA/Megatron-LM" target="_blank" rel="noopener noreferrer">Megatron-LM GitHub — 대규모 분산 학습 라이브러리 (Nemotron 학습 기반)</a><br>— <a href="https://github.com/NVIDIA/NeMo-Guardrails" target="_blank" rel="noopener noreferrer">NeMo Guardrails GitHub — 에이전트 안전 제어 및 가이드레일 라이브러리</a></div></div>
