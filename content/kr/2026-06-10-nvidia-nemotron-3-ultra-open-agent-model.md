---
title: "NVIDIA Nemotron 3 Ultra: 550B 완전 오픈 MoE 모델로 에이전트 AI 시대 선언"
summary: "NVIDIA가 550B 파라미터의 Nemotron 3 Ultra를 공개했다. 55B 활성 파라미터로 동급 최고 추론 성능을 제공하며, 가중치·데이터·레시피 모두 오픈소스로 공개한다. 에이전트 워크플로에서 비용을 최대 30% 절감한다."
category: "dev-trend"
date: "2026-06-10"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "오픈소스AI", "에이전트AI", "MoE"]
---

<div class="article-tldr">
<strong>한눈에 보기:</strong> NVIDIA가 Nemotron 3 Ultra를 출시했다. 550B 총 파라미터 중 55B를 활성화하는 Mixture-of-Experts 모델로, 에이전트 워크플로에서 BF16 대비 최대 5배 빠른 추론 속도와 30% 낮은 비용을 제공한다. 가중치·데이터·학습 레시피를 Linux Foundation의 OpenMDW-1.1 라이선스로 완전 공개한다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트 AI를 위한 새로운 오픈 프론티어 모델

AI가 "질문에 답하는 도구"에서 "지속적으로 작업을 수행하는 에이전트"로 진화하면서, 단순한 응답 품질보다 긴 컨텍스트에서의 효율성이 중요해졌다. NVIDIA의 Nemotron 3 Ultra는 이 요구에 정면으로 응답한다. 550B 총 파라미터 중 55B만 활성화하는 MoE 구조로 프론티어급 성능을 유지하면서도 추론 비용을 획기적으로 낮췄다.

<div class="article-stats">
<strong>📊 주요 수치</strong>
<ul>
<li>총 파라미터: <strong>550B</strong> (활성 파라미터: 55B)</li>
<li>NVFP4 Blackwell 추론 속도: BF16 대비 <strong>최대 5배</strong></li>
<li>에이전트 태스크 비용 절감: <strong>최대 30%</strong></li>
<li>지원 GPU: Hopper, Blackwell, Ampere (단일 체크포인트)</li>
<li>라이선스: Linux Foundation <strong>OpenMDW-1.1</strong> (완전 오픈)</li>
</ul>
</div>

## 핵심 아키텍처 혁신

Nemotron 3 Ultra의 성능 뒤에는 네 가지 핵심 아키텍처 혁신이 있다.

| 혁신 | 설명 |
|---|---|
| Hybrid Mamba-Transformer | Mamba와 Transformer 레이어 혼합 — 긴 컨텍스트 처리 효율화 |
| LatentMoE | 전문가 라우팅 개선으로 동일 추론 비용에 4배 많은 전문가 활용 |
| NVFP4 양자화 | Hopper/Blackwell/Ampere 전 아키텍처에서 단일 체크포인트 실행 |
| 멀티토큰 예측 | 멀티턴 작업에서 생성 속도 향상 |

**Hybrid Mamba-Transformer 레이어:** 기존 순수 Transformer 모델의 병목인 긴 시퀀스 처리를 Mamba 레이어가 보완한다. 수백 번의 턴이 이어지는 에이전트 워크플로에서 특히 효과적이다.

**LatentMoE:** 같은 추론 비용으로 4배 더 많은 전문가를 활용할 수 있는 라우팅 메커니즘이다. "빠른 모델이 더 똑똑한 모델"이라는 Nemotron 팀의 원칙 아래, 속도와 지능의 동시 향상을 추구한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 팁</strong><br>Nemotron 3 Ultra는 Hermes 에이전트 하네스 및 OpenCode와 직접 통합된다. NVIDIA NIM 마이크로서비스로 패키징되어 클라우드·온프레미스·엣지 환경에 배포 가능하다. HuggingFace에서 BF16 및 NVFP4 가중치를 직접 다운로드할 수 있으며, build.nvidia.com에서 즉시 사용해볼 수 있다.</div>
</div>

## Multi-Teacher 온-폴리시 증류 — Nemotron 연합의 힘

단순한 자체 개발을 넘어, NVIDIA는 Nemotron Coalition을 통해 10개 이상의 도메인 특화 티처 모델에서 밀도 높은 피드백을 받아 Nemotron 3 Ultra를 학습시켰다. 이를 통해 코딩, 연구, 기업 특화 작업 등 다양한 도메인에서 지속적인 성능 향상과 파인튜닝이 가능하다.

SWE-bench와 Terminal bench 2.0에서의 실험 결과, Nemotron 3 Ultra는 비교 모델 대비 총 토큰과 턴당 토큰을 모두 적게 사용하면서 동등한 성능을 달성했다. 이 효율성이 에이전트 비용 30% 절감으로 이어진다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>이용 가능 플랫폼</strong><br>Perplexity Pro 구독 또는 API, OpenRouter, Anaconda, build.nvidia.com에서 즉시 사용 가능. HuggingFace에서 가중치 다운로드, NVIDIA NIM 마이크로서비스로 어디서나 배포 가능. 학습 레시피와 쿡북은 GitHub에서 제공된다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>550B 총 파라미터 / 55B 활성 파라미터 MoE — 에이전트 AI 최적화</li>
<li>NVFP4로 Hopper·Blackwell·Ampere 단일 체크포인트, BF16 대비 최대 5배 빠른 추론</li>
<li>에이전트 워크플로 비용 최대 30% 절감 (SWE-bench, Terminal bench 실증)</li>
<li>가중치·데이터·레시피 완전 오픈 — Linux Foundation OpenMDW-1.1 라이선스</li>
<li>Hermes, OpenCode 등 에이전트 하네스와 직접 통합 지원</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 다운로드</strong><br>— <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" target="_blank" rel="noopener noreferrer">NVIDIA 기술 블로그: Nemotron 3 Ultra 상세 분석</a><br>— <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4" target="_blank" rel="noopener noreferrer">HuggingFace: Nemotron 3 Ultra 가중치 다운로드 (NVFP4)</a><br>— <a href="https://build.nvidia.com/nvidia/nemotron-3-ultra" target="_blank" rel="noopener noreferrer">build.nvidia.com: Nemotron 3 Ultra 즉시 사용해보기</a><br>— <a href="https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf" target="_blank" rel="noopener noreferrer">NVIDIA 공식 기술 보고서 (PDF)</a></div></div>
