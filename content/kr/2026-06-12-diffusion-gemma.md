---
title: "Google DiffusionGemma 공개 — 기존 LLM보다 최대 4배 빠른 텍스트 생성"
summary: "구글이 토큰-by-토큰 방식을 버리고 256토큰 '캔버스'를 동시에 디노이징하는 실험적 오픈 모델 DiffusionGemma를 출시했다. H100에서 초당 1,000+ 토큰, Apache 2.0 라이선스로 공개."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["DiffusionGemma", "Google", "DeepMind", "오픈소스", "LLM"]
---

<div class="article-tldr">
<strong>한 줄 요약:</strong> 구글이 2026년 6월 10일 텍스트 디퓨전 방식의 실험적 오픈 모델 <strong>DiffusionGemma</strong>를 공개했다. 일반적인 오토리그레시브 방식 대비 최대 4배 빠른 생성 속도를 달성하며, Apache 2.0 라이선스로 Hugging Face에서 내려받을 수 있다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Jy4RgnvruqI" title="DiffusionGemma: the LLM that writes text ALL AT ONCE — live on an RTX 4090" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## DiffusionGemma란?

구글 DeepMind는 2026년 6월 10일 **DiffusionGemma**를 발표했다. 이 모델은 Gemma 4 패밀리의 아키텍처를 기반으로 하면서도 텍스트 생성 방식을 완전히 바꿨다. 기존 LLM이 한 번에 토큰 하나씩 순차적으로 생성하는 '오토리그레시브' 방식을 채택하는 반면, DiffusionGemma는 **256토큰 블록 전체를 동시에 처리**하는 디퓨전 방식을 사용한다.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">4×</span><span class="stat-label">기존 오토리그레시브 대비 빠른 생성</span></div>
<div class="stat-item"><span class="stat-number">1,000+</span><span class="stat-label">H100 기준 초당 토큰 수</span></div>
<div class="stat-item"><span class="stat-number">700+</span><span class="stat-label">RTX 5090 기준 초당 토큰 수</span></div>
<div class="stat-item"><span class="stat-number">3.8B</span><span class="stat-label">추론 시 활성 파라미터 (총 26B MoE)</span></div>
</div>

## 왜 기존 LLM은 느린가?

일반적인 LLM은 다음 토큰 하나를 예측하기 위해 모델 전체 가중치를 GPU 메모리에서 불러와야 한다. 이 과정이 반복되면 **메모리 대역폭**이 병목이 된다. GPU가 아무리 강력해도 메모리 전송 횟수가 많으면 속도를 올리기 어렵다.

DiffusionGemma는 이 한계를 근본적으로 돌파한다. 256개의 임의 토큰('캔버스')으로 시작해, 전체 블록을 동시에 디노이징하는 반복 과정을 거쳐 텍스트를 완성한다. 한 번의 포워드 패스에서 256토큰을 처리하므로 메모리 전송 횟수가 약 **10분의 1**로 줄어든다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>소비자용 GPU에서도 실행 가능</strong><br>DiffusionGemma 26B MoE 모델은 양자화(Q4_K_M) 시 약 16~18GB VRAM만 필요해, RTX 4090(24GB) 단일 카드에서도 실행된다. llama.cpp diffusion 샘플러와 함께 오프라인 로컬 환경에서 초당 약 100 토큰을 달성할 수 있다.</div>
</div>

## 핵심 기술: Uniform State Diffusion

DiffusionGemma의 디퓨전 방식은 이미지 생성에서 사용하는 연속 노이즈 대신, **어휘 전체에서 무작위 토큰으로 치환**하는 이산(discrete) 디퓨전을 사용한다. 이를 'Uniform State Diffusion'이라 부른다.

단계별 동작:
1. 256개의 무작위 토큰으로 캔버스 초기화
2. 전체 캔버스를 대상으로 디노이징 실행
3. 확신도가 높은 토큰부터 순서대로 확정(잠금)
4. 확정된 토큰이 다음 패스의 맥락이 됨
5. 반복을 통해 전체 텍스트 수렴

이 양방향(bidirectional) 어텐션 구조는 코드 인필링, 인라인 편집, 비순차적 텍스트 구조 생성 같은 **비선형 태스크**에서 특히 유리하다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>품질 트레이드오프 주의</strong><br>DiffusionGemma는 속도를 최우선으로 설계된 실험적 모델이다. 일반 지식 벤치마크에서 동급 오토리그레시브 Gemma 4 모델 대비 약 5~9점 낮은 점수를 기록한다. 프로덕션 품질이 중요한 경우에는 Gemma 4 오토리그레시브 모델이 여전히 권장된다.</div>
</div>

## 지원 도구 및 배포 환경

구글은 광범위한 생태계 통합을 즉시 제공한다.

| 도구 | 역할 |
|------|------|
| Hugging Face Transformers | 표준 인퍼런스 |
| vLLM (Red Hat 협업) | 고성능 서빙 |
| MLX | Apple Silicon 최적화 |
| llama.cpp | 로컬 양자화 실행 (PR 통합 예정) |
| NVIDIA NIM | 엔터프라이즈 마이크로서비스 배포 |
| Unsloth / NVIDIA NeMo | 효율적 파인튜닝 |
| Hackable Diffusion (JAX) | 공식 파인튜닝 레시피 |

NVIDIA와의 협업으로 소비자용(RTX 4090/5090)부터 엔터프라이즈(Hopper/Blackwell) 하드웨어까지 최적화됐으며, NVFP4(4비트 부동소수점) 지원으로 Blackwell GPU에서 추가 속도 향상이 가능하다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>DiffusionGemma: 26B MoE, 추론 시 3.8B 활성 파라미터, Apache 2.0 오픈 라이선스</li>
<li>256토큰 캔버스 동시 생성 — H100 기준 초당 1,000+ 토큰, RTX 5090에서 700+</li>
<li>코드 인필링·인라인 편집 등 비선형 태스크에 특히 강점</li>
<li>RTX 4090(24GB) 단일 GPU에서 양자화 실행 가능 (~16~18GB VRAM)</li>
<li>프로덕션 품질 우선이라면 오토리그레시브 Gemma 4 사용 권장</li>
</ul>
</div>

## 어디서 쓰면 가장 효과적인가?

DiffusionGemma의 초저지연 특성은 다음 시나리오에서 진가를 발휘한다:

- **실시간 인라인 편집**: 사용자가 타이핑하는 동안 텍스트를 즉각 제안
- **코드 인필링**: 중간 빠진 코드 블록을 앞뒤 문맥을 모두 참조해 완성
- **반복 초안 작성**: 짧은 주기로 수십 개의 초안을 빠르게 생성 후 선택
- **구조화 출력**: JSON, 테이블, 비선형 문서 생성

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/google-deepmind/gemma" target="_blank" rel="noopener noreferrer">Google DeepMind Gemma 공식 저장소 (GitHub) — 아키텍처 문서 및 코드</a><br>— <a href="https://github.com/ggml-org/llama.cpp" target="_blank" rel="noopener noreferrer">llama.cpp (GitHub) — 로컬 양자화 실행 엔진 (DiffusionGemma 지원 PR 포함)</a><br>— <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM (GitHub) — DiffusionGemma 서빙 지원 고성능 추론 엔진</a></div></div>
