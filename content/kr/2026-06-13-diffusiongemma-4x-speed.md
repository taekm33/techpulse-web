---
title: "DiffusionGemma: 토큰 한 개씩 쓰지 않는 AI — Google이 공개한 4배 빠른 LLM"
summary: "Google DeepMind가 6월 10일 공개한 DiffusionGemma는 기존 자동회귀 방식을 버리고 256개 토큰을 한꺼번에 생성하는 확산(diffusion) 구조를 채택해 H100 GPU에서 초당 1000토큰 이상의 속도를 달성한 오픈 가중치 실험 모델이다."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["DiffusionGemma", "Google", "텍스트확산", "오픈소스AI", "LLM속도"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Google DeepMind가 <strong>DiffusionGemma</strong>를 아파치 2.0 라이선스로 공개했다. 기존 LLM처럼 토큰을 한 개씩 예측하는 대신, 256개 슬롯을 동시에 채우고 반복 정제하는 <strong>텍스트 확산(text diffusion)</strong> 방식으로 동작한다. NVIDIA H100에서 초당 1,000토큰 이상, RTX 5090에서 700토큰 이상을 기록하며 기존 자동회귀 모델 대비 최대 4배 빠른 생성 속도를 보인다. 양자화 버전은 RTX 4090(24 GB) 한 장으로도 구동 가능하다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Jy4RgnvruqI" title="DiffusionGemma: the LLM that writes text ALL AT ONCE — live on an RTX 4090" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 기존 LLM과 무엇이 다른가?

모든 ChatGPT, Claude, Gemini 류 모델은 **자동회귀(autoregressive)** 방식으로 텍스트를 생성한다. "하늘은 파랗다"를 출력하려면 '하', '늘', '은' 순서로 한 글자씩 네트워크를 통과시킨다. 이 과정에서 GPU는 대부분의 시간을 메모리 읽기·쓰기에 낭비하고, 실제 연산(compute)보다 메모리 대역폭이 병목이 된다.

**DiffusionGemma**는 이 구조를 뒤집는다. 이미지 생성의 Stable Diffusion처럼 **노이즈 → 점진적 정제** 과정을 텍스트에 적용한다. 256개 빈 슬롯에 거친 추측치를 동시에 채우고, 매 패스마다 "확신도(entropy)"가 높은 토큰은 고정하고 불확실한 토큰은 다시 정제한다. 단순 질문은 12회 패스, 복잡한 질문은 최대 48회 패스면 완성된다. 토큰별 순차 의존성이 사라지면서 메모리 대역폭 대신 **순수 연산 처리량**이 한계가 되고, GPU 이용률이 대폭 올라간다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">4×</span>
<span class="article-stats__label">자동회귀 대비 최대 속도 향상</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">1,000+</span>
<span class="article-stats__label">토큰/초 (NVIDIA H100 기준)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">~18 GB</span>
<span class="article-stats__label">양자화 VRAM 요구량 (소비자 GPU)</span>
</div>
</div>

## 모델 구조: 26B MoE, 4B 활성 파라미터

DiffusionGemma는 Gemma 4 26B Mixture-of-Experts(MoE) 아키텍처를 기반으로 한다. 총 파라미터는 26B이지만, 인퍼런스 시 활성화되는 파라미터는 **약 4B**에 불과해 메모리 점유가 적다. 양자화 버전 기준으로 소비자용 RTX 4090(24 GB VRAM) 한 장에서도 구동할 수 있다.

핵심 기술 포인트는 다음과 같다:

- **양방향 어텐션(bidirectional attention)**: 생성 중인 256 토큰 블록 전체를 동시에 고려하므로, 중간이 채워지기 전에 문장 끝 단어가 먼저 확정될 수도 있다.
- **멀티캔버스 생성**: 캔버스(256 토큰) 단위로 순차 연결되어 장문 답변도 생성 가능하다.
- **NVFP4 지원**: NVIDIA Blackwell GPU에서 4비트 부동소수점 연산으로 추가 가속이 가능하다.
- **멀티모달 입력**: 텍스트, 이미지, 영상 입력을 지원하나 오디오는 미지원.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>누가 써야 할까?</strong><br>
DiffusionGemma는 생성 <em>속도</em>가 최우선인 워크플로 — 인라인 코드 자동완성, 실시간 인터랙티브 편집, 비선형 텍스트 구조 생성 — 에 적합하다. 반면 수학 추론이나 코딩 벤치마크 정확도는 동급 자동회귀 Gemma 4 모델 대비 5~9포인트 낮다. 최고 품질이 필요한 프로덕션 환경에는 여전히 기존 Gemma 4 모델을 권장한다고 Google도 밝혔다.
</div>
</div>

## 성능 벤치마크

| 지표 | DiffusionGemma | Gemma 4 (자동회귀) |
|------|---------------|-------------------|
| 생성 속도 (H100) | 1,000+ tok/s | ~250 tok/s |
| 생성 속도 (RTX 5090) | 700+ tok/s | ~200 tok/s |
| MMLU (일반 지식) | 기준 대비 -5pt | 기준 |
| GPQA (대학원 과학) | 기준 대비 -9pt | 기준 |
| HumanEval (코딩) | 기준 대비 -8pt | 기준 |
| VRAM (양자화) | ~18 GB | ~18 GB |

정확도는 다소 낮지만, 속도 민감형 환경에서는 탁월한 선택지다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>RTX 4090에서 직접 구동하기</strong><br>
① <code>unsloth/diffusiongemma-26B-A4B-it-GGUF</code> (Q4_K_M, ~16 GB) 다운로드<br>
② llama.cpp의 diffusion 샘플러 PR #24423 체크아웃 후 CUDA 빌드<br>
③ <code>llama-cli -m 모델.gguf -n 2048 -p "프롬프트"</code> 실행<br>
소비자 GPU 기준 약 100 tok/s, VRAM ~19 GB 사용 — 완전 오프라인 구동 가능.
</div>
</div>

## 어떤 응용이 열리나?

Google DeepMind는 내부 데모에서 DiffusionGemma 기반의 실시간 앱들을 선보였다: 모든 HTML·텍스트가 클릭할 때마다 즉석 생성되는 가짜 Wikipedia, AI 코멘트·이미지가 즉시 채워지는 Reddit 클론, 매 클릭이 다음 화면을 생성하는 OS 인터페이스, 15초 만에 음성으로 완성되는 Todo 앱. 이 모든 것이 레이턴시를 초당 2,000토큰 이하로 낮춰야 가능한 워크플로다.

<div class="article-keypoints">
<strong>핵심 요약</strong>
<ul>
<li>DiffusionGemma는 256 토큰을 동시에 병렬 생성하는 최초의 오픈 텍스트 확산 LLM이다.</li>
<li>H100 기준 초당 1,000+ 토큰으로 자동회귀 모델 대비 최대 4배 빠르다.</li>
<li>아파치 2.0 오픈 라이선스로 공개돼 로컬 GPU에서 무료로 구동 가능하다.</li>
<li>정확도는 동급 자동회귀 모델보다 소폭 낮아, 속도 우선 시나리오에 최적화된 선택지다.</li>
<li>양자화 버전 기준 RTX 4090 단일 GPU(24 GB)에서 완전 오프라인 구동된다.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/" target="_blank" rel="noopener noreferrer">Google 공식 블로그: DiffusionGemma 발표</a><br>— <a href="https://ai.google.dev/gemma/docs/diffusiongemma" target="_blank" rel="noopener noreferrer">Google AI for Developers: DiffusionGemma 개발자 문서</a><br>— <a href="https://deepmind.google/models/gemma/diffusiongemma/" target="_blank" rel="noopener noreferrer">Google DeepMind 모델 페이지</a><br>— <a href="https://huggingface.co/google/diffusiongemma-26B-A4B-it" target="_blank" rel="noopener noreferrer">Hugging Face: 모델 가중치 다운로드 (Apache 2.0)</a></div></div>
