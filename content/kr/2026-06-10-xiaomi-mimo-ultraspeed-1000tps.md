---
title: "Xiaomi MiMo-V2.5-Pro UltraSpeed — 1조 파라미터 모델, 초당 1,000 토큰 돌파"
summary: "Xiaomi와 TileRT가 공동 개발한 MiMo-V2.5-Pro-UltraSpeed가 1조 파라미터 모델 최초로 초당 1,000 토큰(최대 1,200 TPS)을 달성했다. 전용 하드웨어 없이 표준 8-GPU 서버에서 FP4 양자화·DFlash 추론·TileRT 런타임 3가지 기술 조합으로 구현했다."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Xiaomi", "MiMo", "AI추론", "LLM", "오픈소스"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Xiaomi가 2026년 6월 8일 MiMo-V2.5-Pro-UltraSpeed를 출시했다. 1조 파라미터 MoE 모델이 일반 8-GPU 서버에서 초당 1,000+ 토큰(피크 1,200 TPS)을 생성한다. GPT-5.5의 약 15배, Claude Opus 4.6의 약 14배 속도다. FP4 양자화, DFlash 추론, TileRT 런타임 3종 기술 조합의 성과다. API 트라이얼은 6월 9~23일이며 FP4-DFlash 체크포인트는 오픈소스로 공개됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/3-6FrkfMbLU" title="Mimo V2.5 Pro — API Pricing and Real World Tests" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 무슨 일이 일어났나?

2026년 6월 8일, Xiaomi가 인퍼런스 전문 기업 TileRT와 공동으로 **MiMo-V2.5-Pro-UltraSpeed**를 발표했다. 이는 1조 파라미터급 대형 언어 모델 사상 최초로 초당 1,000 토큰(TPS)의 디코딩 속도 장벽을 돌파한 사례다. 피크 속도는 데모 기준 1,200 TPS에 달했다.

이 속도가 얼마나 놀라운지 비교해보면, Artificial Analysis 기준으로 GPT-5.5는 68 TPS, Claude Opus 4.6은 71 TPS, Gemini Flash는 192 TPS다. MiMo UltraSpeed는 이 중 가장 빠른 Gemini Flash보다 5배 이상 빠르다.

<div class="article-stats">
<strong>주요 수치</strong>
<ul>
  <li>🚀 <strong>디코딩 속도:</strong> 1,000+ TPS (피크 1,200 TPS)</li>
  <li>📊 <strong>경쟁 모델 대비:</strong> GPT-5.5(68 TPS) 대비 ~15배, Opus 4.6(71 TPS) 대비 ~14배</li>
  <li>💻 <strong>하드웨어:</strong> 표준 8-GPU 단일 노드 (전용 실리콘 불필요)</li>
  <li>⚡ <strong>속도 개선:</strong> 기존 MiMo-V2.5-Pro 대비 ~10배</li>
  <li>💰 <strong>가격:</strong> 기존 MiMo-V2.5-Pro API의 3배 (속도는 10배)</li>
</ul>
</div>

## 세 가지 핵심 기술

Xiaomi는 이 돌파구를 '모델-시스템 극한 코디자인(extreme model-system codesign)'이라고 부른다. 세 기술 중 하나만으로는 1,000 TPS를 달성하기 어려우며, 세 가지 시너지가 핵심이다.

### 1. FP4(MXFP4) 양자화

MoE 전문가(Expert) 레이어에만 FP4 양자화를 적용해 모델 크기를 대폭 줄이고 메모리 접근 오버헤드를 낮췄다. QAT(Quantization-Aware Training) 방식으로 훈련해 양자화로 인한 성능 손실을 최소화했다.

### 2. DFlash 추론

블록 수준 마스킹 병렬 예측 기반의 추론(speculative decoding) 방법이다. 한 번의 순전파(forward pass)에서 토큰 블록 전체를 예측하고 검증한다. 코딩 벤치마크에서 단계당 평균 수용 토큰 길이 6.30을 달성해 기존 자기회귀(autoregressive) 방식보다 훨씬 많은 토큰을 한 번에 처리한다.

### 3. TileRT 런타임

TileRT가 이 독특한 양자화·추론 파이프라인에 맞게 특화 설계한 컴파일 엔진과 연산 커널이다. GPU를 최대한 활용해 연산자 오버헤드를 제거한다.

| 기술 | 역할 | 핵심 이점 |
|------|------|----------|
| FP4(MXFP4) 양자화 | MoE 전문가 레이어 경량화 | 메모리 대역폭 병목 해소 |
| DFlash 추론 | 블록 단위 병렬 토큰 예측 | 단계당 수용 토큰 수 증가 |
| TileRT 런타임 | 맞춤형 컴파일·커널 | GPU 활용률 극대화 |
| **조합 결과** | 단일 8-GPU 표준 노드 | **1,000+ TPS 달성** |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>왜 추론 속도가 중요한가?</strong><br>1,000 TPS는 단순히 '더 빠른 타이핑'이 아니다. 이 속도에서는 AI가 수십 개의 추론 경로를 병렬로 실행하거나, 실시간 에이전트 루프를 운영하거나, 100 TPS 미만에서는 불가능했던 지연 시간 제약 업무(사기 감지, 트레이딩 신호 생성)를 처리할 수 있게 된다. AI 애플리케이션 패러다임 자체가 달라진다.</div>
</div>

## 기존 특수 하드웨어 대안과의 차이

Cerebras(웨이퍼 스케일 통합)나 Groq(온칩 SRAM 전용 아키텍처) 같은 경쟁사들도 고속 추론을 달성했다. 하지만 이들은 수백만 달러짜리 전용 하드웨어가 필요하다. MiMo UltraSpeed의 차별점은 **일반 상용 GPU**에서만 소프트웨어 기법으로 같은 수준의 속도를 달성했다는 점이다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>UltraSpeed는 별도 모델이 아니다</strong><br>UltraSpeed는 새로운 모델이 아니라 기존 MiMo-V2.5-Pro 모델 위에 레이어된 서빙 모드(serving mode)다. 1조 파라미터 전체 아키텍처를 가속하는 것이며, 축소·증류된 버전이 아니다. 따라서 기존 MiMo-V2.5-Pro의 추론 능력과 코딩 벤치마크 성능은 그대로 유지된다. Xiaomi는 MiMo-V2.5-Pro-FP4-DFlash 체크포인트를 Hugging Face에 오픈소스로 공개했다.</div>
</div>

## API 트라이얼 접근 방법

현재 UltraSpeed는 제한된 애플리케이션 기반 트라이얼로만 제공된다. 기업과 전문 개발자를 우선 승인하며, 승인이 보장되지는 않는다.

- **트라이얼 기간:** 2026년 6월 9일 ~ 23일 (베이징 시간 기준)
- **가격:** 기존 MiMo-V2.5-Pro API 대비 3배 (약 10배 속도)
- **API 전용:** 토큰 플랜 미지원
- **신청:** platform.xiaomimimo.com/ultraspeed

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>Xiaomi × TileRT, 1조 파라미터 모델 초당 1,000+ TPS 세계 최초 달성 (피크 1,200 TPS)</li>
  <li>전용 하드웨어 없이 일반 8-GPU 서버에서 소프트웨어 기법(FP4+DFlash+TileRT)만으로 실현</li>
  <li>GPT-5.5 대비 ~15배, Claude Opus 4.6 대비 ~14배 속도</li>
  <li>FP4-DFlash 체크포인트는 Hugging Face에 오픈소스 공개</li>
  <li>6월 9~23일 API 트라이얼 신청 가능 (기업·전문 개발자 우선)</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/XiaomiMiMo/MiMo" target="_blank" rel="noopener noreferrer">XiaomiMiMo GitHub 공식 저장소 — MiMo 모델 및 기술 문서</a><br>— <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM (GitHub) — 오픈소스 LLM 추론 엔진, MiMo 모델 서빙에 활용 가능</a><br>— <a href="https://pypi.org/project/vllm/" target="_blank" rel="noopener noreferrer">PyPI: vllm 패키지 — pip install vllm으로 로컬 추론 환경 구축</a></div></div>
