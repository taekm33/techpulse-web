---
title: "DiffusionGemma: 기존 LLM보다 4배 빠른 텍스트 생성 실험 모델 공개"
summary: "Google이 텍스트 확산 방식을 적용한 오픈 실험 모델 DiffusionGemma를 공개했다. 전통적인 자동회귀 방식 대신 256개 토큰을 동시에 생성해 단일 GPU에서 최대 4배 빠른 추론 속도를 달성한다."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["DiffusionGemma", "Google", "텍스트 확산", "오픈소스 AI", "LLM 추론"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Google이 2026년 6월 10일 DiffusionGemma를 공개했다. 26B Mixture of Experts(MoE) 구조의 이 실험 모델은 자동회귀 방식 대신 텍스트 확산(text diffusion)을 사용해 단일 NVIDIA H100에서 1,000+ 토큰/초를 달성한다. Apache 2.0 라이선스로 Hugging Face에서 무료 다운로드 가능하다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/r305-aQTaU0" title="Text Diffusion — Brendan O'Donoghue, Google DeepMind" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">4×</span><span class="article-stats__label">기존 대비 추론 속도</span></div>
  <div class="article-stats__item"><span class="article-stats__value">1,000+</span><span class="article-stats__label">토큰/초 (H100 단일)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">26B</span><span class="article-stats__label">총 파라미터 (MoE)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">3.8B</span><span class="article-stats__label">추론 시 활성 파라미터</span></div>
</div>

## 텍스트도 이미지처럼: 확산 모델의 언어 적용

AI 이미지 생성 분야에서는 확산(diffusion) 모델이 이미 표준으로 자리 잡았다. 잡음(noise)에서 시작해 반복 정제를 통해 이미지를 완성하는 방식이다. DiffusionGemma는 이 원리를 텍스트 생성에 적용한다.

기존 LLM(GPT, Gemma 등)은 **자동회귀(autoregressive)** 방식, 즉 왼쪽에서 오른쪽으로 한 토큰씩 생성한다. GPU는 각 토큰마다 전체 모델 가중치를 메모리에서 불러와야 하므로, 단일 사용자 환경에서는 GPU 활용률이 매우 낮다. DiffusionGemma는 이 비효율을 뒤집는다.

**캔버스 방식**: 모델이 256개 토큰 블록을 무작위 노이즈로 초기화한 뒤, 여러 번의 정제 단계를 거쳐 최종 텍스트로 수렴시킨다. 한 번의 포워드 패스에 더 많은 연산을 집중시켜 GPU·TPU의 대역폭 병목 문제를 해소한다.

## 양방향 주의와 자기 수정 능력

텍스트 확산의 또 다른 장점은 **양방향 어텐션(bidirectional attention)**이다. 자동회귀 모델은 이미 생성된 과거 토큰만 참조할 수 있다. DiffusionGemma는 아직 생성되지 않은 미래 토큰도 참조할 수 있어 전체 맥락을 고려해 텍스트를 생성하고, 오류가 있으면 되돌아가 수정할 수 있다.

Google DeepMind 연구원 Brendan O'Donoghue가 공개한 데모에서, 수학 문제에 대해 첫 포워드 패스에서 잘못된 답(60)을 생성했지만, 추론 과정을 거치면서 두 번째 패스에서 49로, 세 번째에서 최종 정답 39로 스스로 수정했다. GPT-4o와 Gemini 2.5 Flash는 동일 문제에서 틀린 답을 유지했다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 활용 팁</strong><br>DiffusionGemma는 로컬 추론 환경에서 가장 빛난다. 단일 사용자 또는 소규모 배치 시나리오(인라인 코드 편집, 실시간 대화, 코드 자동완성)에 최적이다. 대규모 클라우드 서빙 환경에서는 자동회귀 모델이 더 비용 효율적일 수 있다.</div>
</div>

## 실험적 한계와 생산 권장 사항

DiffusionGemma는 **실험적(experimental) 모델**로 공식 분류된다. Google은 최고 품질이 요구되는 프로덕션 환경에서는 표준 Gemma 4 모델 사용을 권장한다. 주요 특성 비교는 다음과 같다.

| 특성 | DiffusionGemma | Gemma 4 (자동회귀) |
|------|---------------|-------------------|
| 추론 속도 (단일 GPU) | 최대 4× 빠름 | 기준 |
| 배치 처리 (클라우드) | 비용 상승 가능 | 효율적 |
| 어텐션 방향 | 양방향 | 단방향 |
| 출력 품질 | 실험적 (낮을 수 있음) | 프로덕션 표준 |
| 라이선스 | Apache 2.0 | 제품별 상이 |
| 활성 파라미터 | 3.8B (26B MoE) | 모델별 상이 |

## 하드웨어 지원 및 사용 방법

NVIDIA와의 협업을 통해 소비자용 GPU부터 엔터프라이즈 서버까지 폭넓은 하드웨어를 지원한다.

- **소비자 GPU**: RTX 4090, RTX 5090에서 양자화(quantized) 실행 지원
- **엔터프라이즈**: H100, Blackwell, NVFP4 커널 최적화
- **추론 프레임워크**: vLLM(Red Hat 지원), Hugging Face Transformers, MLX
- **파인튜닝**: Hackable Diffusion(JAX), Unsloth, NVIDIA NeMo
- **클라우드 배포**: Google Cloud Model Garden, NVIDIA NIM

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Apple Silicon에서의 성능 주의</strong><br>DiffusionGemma의 속도 이점은 GPU/TPU의 <strong>연산 집약도(arithmetic intensity)</strong> 증가에서 비롯된다. Apple Silicon Mac처럼 통합 메모리 아키텍처를 사용하는 환경은 여전히 메모리 대역폭 병목이 발생할 수 있어 동일한 가속 효과를 얻지 못할 수 있다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>텍스트 확산 기술로 256토큰 블록을 병렬 생성 → 단일 GPU에서 최대 4배 빠른 추론</li>
<li>양방향 어텐션 덕분에 생성 중 자기 수정 가능 — 자동회귀 모델의 한계 극복</li>
<li>26B MoE 구조, 추론 시 3.8B 파라미터만 활성화 → 소비자용 GPU(VRAM 18GB 이상)에서 실행 가능</li>
<li>Apache 2.0 라이선스, Hugging Face에서 즉시 다운로드 가능</li>
<li>실험적 모델 — 프로덕션 최고 품질 작업에는 표준 Gemma 4 권장</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/" target="_blank" rel="noopener noreferrer">Google 공식 블로그: DiffusionGemma 소개</a><br>— <a href="https://developers.googleblog.com/diffusiongemma-the-developer-guide/" target="_blank" rel="noopener noreferrer">Google Developers 블로그: DiffusionGemma 개발자 가이드 (vLLM 서빙, 파인튜닝)</a><br>— <a href="https://deepmind.google/models/gemini-diffusion/" target="_blank" rel="noopener noreferrer">Google DeepMind: Gemini Diffusion 연구 페이지</a></div></div>
