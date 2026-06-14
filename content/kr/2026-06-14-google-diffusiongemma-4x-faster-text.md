---
title: "Google DiffusionGemma: 기존 LLM보다 최대 4배 빠른 텍스트 생성 오픈모델 공개"
summary: "Google DeepMind가 텍스트 확산(diffusion) 방식을 채택한 26B MoE 오픈모델 DiffusionGemma를 아파치 2.0 라이선스로 공개했다. H100 단일 GPU에서 초당 1,000+ 토큰을 생성하며, 기존 자기회귀(autoregressive) 모델 대비 최대 4~5배 빠른 추론 속도를 자랑한다."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["DiffusionGemma", "Google", "오픈모델", "텍스트확산", "LLM"]
---

<div class="article-tldr">
<strong>3줄 요약:</strong> Google DeepMind가 토큰을 한 번에 256개씩 병렬 생성하는 텍스트 확산 모델 DiffusionGemma를 오픈소스로 공개했다. 기존 자기회귀 LLM보다 최대 4~5배 빠른 추론 속도를 제공하며, RTX 5090/4090 등 소비자용 GPU에서도 동작한다. Apache 2.0 라이선스로 즉시 다운로드 가능하다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/r305-aQTaU0" title="Text Diffusion — Brendan O'Donoghue, Google DeepMind (AI Engineer)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 텍스트 생성의 패러다임 전환: 순차 → 병렬

기존 GPT·Gemma 같은 자기회귀(autoregressive) LLM은 토큰을 한 번에 하나씩 순차적으로 생성한다. 이 방식은 GPU의 메모리 대역폭 병목을 유발해, 하드웨어가 아무리 강력해도 처리 속도에 한계가 있었다.

DiffusionGemma는 이 근본적인 제약을 깨뜨린다. 이미지 확산(diffusion) 모델에서 영감을 받아, **전체 256토큰 블록을 동시에 노이즈 제거(denoising) 방식으로 병렬 생성**한다. GPU의 텐서 코어에 더 큰 연산 청크를 한 번에 전달함으로써 메모리 대역폭 병목을 크게 줄인 것이다.

<div class="article-stats">
<div class="article-stats__item"><span class="article-stats__number">4~5배</span><span class="article-stats__label">기존 자기회귀 모델 대비 추론 속도 향상 (전용 GPU 기준)</span></div>
<div class="article-stats__item"><span class="article-stats__number">1,000+</span><span class="article-stats__label">NVIDIA H100 단일 GPU에서 초당 생성 토큰 수</span></div>
<div class="article-stats__item"><span class="article-stats__number">26B / 3.8B</span><span class="article-stats__label">전체 파라미터 / 추론 시 활성 파라미터 (MoE 구조)</span></div>
</div>

## 기술 구조 상세

DiffusionGemma는 Gemma 4의 26B A4B Mixture-of-Experts(MoE) 아키텍처를 기반으로 한다. 추론 시 활성화되는 파라미터는 3.8B에 불과해, 양자화(quantization) 후 소비자용 NVIDIA RTX 5090/4090(VRAM 24GB)에서도 동작한다.

핵심 기술 특징은 다음과 같다.

| 특징 | 내용 |
|------|------|
| 이산 텍스트 확산 | 순차 생성 → 블록 자기회귀 멀티캔버스 샘플링으로 전환 |
| 양방향 어텐션 | 256토큰을 동시 처리하므로 미래 토큰까지 참조 가능 |
| 지능형 자기 수정 | 전체 블록을 보고 실시간으로 오류 감지·수정 |
| NVFP4 지원 | Blackwell GPU에서 4비트 부동소수점으로 근손실 없이 속도 극대화 |
| 적응형 연산 | 쉬운 쿼리는 짧은 단계로 완료, 어려운 쿼리는 더 많은 단계 사용 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>양방향 추론의 힘</strong><br>자기회귀 모델은 과거 토큰만 볼 수 있어 한번 생성한 토큰을 되돌리기 어렵다. DiffusionGemma는 미래 토큰까지 보는 양방향 어텐션 덕분에 잘못된 답을 스스로 교정할 수 있다. 실험에서 GPT-4o와 Gemini 2.5 Flash가 오답을 고수한 수학 문제를 DiffusionGemma가 중간에 오답을 냈다가 최종적으로 스스로 고쳐 맞힌 사례가 공개됐다.</div>
</div>

## 활용 시나리오: 속도가 새로운 경험을 만든다

Google DeepMind 연구팀은 낮은 지연 시간이 단순히 "같은 것을 더 빠르게" 하는 게 아니라 완전히 새로운 응용을 가능하게 한다고 강조한다. 공개된 데모에는 다음이 포함됐다.

- **실시간 Wikipedia 생성**: HTML 포함 전체 웹 페이지를 클릭할 때마다 즉시 생성
- **AI Reddit**: 게시물에 대한 댓글 전부를 AI가 실시간으로 생성
- **생성형 OS**: 클릭할 때마다 다음 화면을 AI가 즉석에서 생성
- **음성 코딩**: "할 일 앱 만들어줘"라고 말하면 15초 만에 완성

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>주의사항: 실험적 모델</strong><br>DiffusionGemma는 현 단계에서 표준 Gemma 4 대비 전반적인 출력 품질이 낮다. 대용량 배치(batch) 환경에서는 처리량(throughput)이 떨어지는 한계도 있다. 프로덕션 환경에서 최고 품질을 원한다면 표준 Gemma 4 배포를 권장한다. DiffusionGemma는 속도 우선 인터랙티브 로컬 워크플로우 연구용으로 적합하다.</div>
</div>

## 지원 플랫폼 및 도구

DiffusionGemma는 Apache 2.0 라이선스로 공개돼 즉시 활용 가능하다. 다양한 도구를 통한 서빙을 지원한다.

- **Hugging Face Transformers**: `google/diffusiongemma-26B-A4B-it` 모델 ID로 즉시 로드
- **vLLM**: Red Hat 지원을 포함한 고처리량 서빙
- **MLX**: Apple 실리콘 최적화 추론
- **NVIDIA NIM**: 엔터프라이즈 배포용 마이크로서비스
- **Hackable Diffusion**: JAX 기반 파인튜닝 튜토리얼
- **Unsloth / NVIDIA NeMo**: 파인튜닝 대안 옵션

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>토큰을 256개씩 병렬 생성해 기존 AR 모델 대비 최대 4~5배 빠른 추론 속도 달성</li>
<li>H100에서 초당 1,000+ 토큰, RTX 5090에서 700+ 토큰 — 로컬 환경에서도 실용적</li>
<li>양방향 어텐션으로 자기 수정 능력 보유 — 기존 AR 모델의 "한번 틀리면 끝" 한계 극복</li>
<li>Apache 2.0 라이선스로 Hugging Face에서 즉시 다운로드 가능</li>
<li>고품질 프로덕션 환경보다 속도 중심 인터랙티브 워크플로우 연구에 적합</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 다운로드</strong><br>— <a href="https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/" target="_blank" rel="noopener noreferrer">Google 블로그: DiffusionGemma 공식 발표 (2026.06.10)</a><br>— <a href="https://deepmind.google/models/gemma/diffusiongemma/" target="_blank" rel="noopener noreferrer">Google DeepMind: DiffusionGemma 모델 페이지</a><br>— <a href="https://ai.google.dev/gemma/docs/diffusiongemma" target="_blank" rel="noopener noreferrer">Google AI for Developers: DiffusionGemma 개발자 가이드</a><br>— <a href="https://huggingface.co/google/diffusiongemma-26B-A4B-it" target="_blank" rel="noopener noreferrer">Hugging Face: DiffusionGemma 26B A4B IT 모델 다운로드</a></div></div>
