---
title: "Holo3.1 출시 — 로컬 실행 가능한 컴퓨터 조작 AI 에이전트"
summary: "H Company가 6월 2일 Holo3.1을 공개했다. FP8·NVFP4·Q4 GGUF 양자화 체크포인트를 최초로 제공해 12GB VRAM만으로 로컬 배포가 가능하며, 모바일 환경 지원과 함께 AndroidWorld 벤치마크가 67%에서 79.3%로 향상됐다."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["ai-agent", "computer-use", "오픈소스", "로컬추론", "Holo3"]
---

<div class="article-tldr">
<strong>한눈에 보기:</strong> H Company의 Holo3.1은 컴퓨터 조작(Computer Use) 에이전트 모델 가운데 최초로 FP8·NVFP4·Q4 GGUF 양자화 체크포인트를 공개해 로컬 기기에서 직접 실행할 수 있게 했다. 0.8B부터 35B-A3B까지 4가지 크기로 제공되며 웹·데스크톱·모바일 환경을 모두 지원한다. Apache 2.0 라이선스다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/GRLl-46Z4LY" title="Breaking the Computer Use Frontier - Holo3 | Hands-on Code" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">79.3%</span><span class="article-stats__label">AndroidWorld 점수 (35B-A3B)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2×</span><span class="article-stats__label">NVFP4 추론 속도 향상 vs FP8</span></div>
  <div class="article-stats__item"><span class="article-stats__value">12GB</span><span class="article-stats__label">최소 VRAM (4-bit 양자화)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">140ms</span><span class="article-stats__label">RTX 4090 퍼셉션-투-액션 지연</span></div>
</div>

## Holo3.1이란?

H Company는 2026년 6월 2일 컴퓨터 조작(Computer Use) 에이전트 모델 패밀리 **Holo3.1**을 공개했다. Holo3.1은 화면을 인식하고 마우스·키보드를 직접 조작하는 비전-언어 모델(VLM)로, 전작인 Holo3가 OSWorld-Verified 벤치마크에서 78.85%로 GPT-5.4와 Opus 4.6을 앞질렀던 기반 위에 구축됐다.

이번 업데이트에서 가장 핵심적인 변화는 **로컬 추론 지원**이다. H Company는 처음으로 35B-A3B 모델에 FP8, NVFP4, Q4 GGUF 양자화 체크포인트를 함께 공개했다. 기업 내부 시스템의 스크린샷을 클라우드로 전송하지 않고 사내 서버나 개인 장치에서 직접 에이전트를 실행할 수 있어 데이터 프라이버시 요구사항이 엄격한 금융·의료·법률 분야에서 특히 주목받고 있다.

## 달라진 점 3가지

### 1. 빠른 로컬 추론

NVIDIA DGX Spark에서 NVFP4 W4A16 양자화를 적용하면 에이전트 평균 스텝 시간이 FP8 기준 6.8초에서 3.3초로 약 2배 단축된다. RTX 4090 기준으로는 퍼셉션-투-액션 지연이 **140ms**로, 스크린샷을 원격 서버로 전송하는 클라우드 API 방식보다 4배 빠르다. 4-bit 양자화(bitsandbytes)를 적용하면 12GB VRAM GPU에서도 전체 에이전트 스택을 구동할 수 있다.

### 2. 모바일 환경 공식 지원

Holo3.1은 Android UI 트레이스 데이터를 학습해 모바일 자동화를 공식 지원한다. 35B-A3B 모델의 **AndroidWorld** 벤치마크 점수가 67%에서 **79.3%**로 상승했으며, 소형 4B/9B 모델도 58%에서 72%로 향상됐다. 기존 Holo3 대비 H Company 자체 하네스인 Holotab 기준으로 25% 이상의 성능 개선이 확인됐다.

### 3. 서드파티 프레임워크 호환성 강화

Holo3.1은 기존의 구조화 JSON 출력 외에 OpenAI 호환 함수 호출(function-calling) 프로토콜을 기본 지원한다. LangGraph, CrewAI, AutoGen 등 주요 에이전트 하네스에서 별도 어댑터 레이어 없이 바로 통합 가능하다. 이전 Holo3에서 서드파티 통합 시 발생하던 10~15%의 성능 격차가 이번 릴리스에서 거의 해소됐다.

## 모델 패밀리 비교

| 모델 | 파라미터 | 주요 배포 대상 |
|------|----------|----------------|
| Holo3.1-0.8B | 0.8B | 초경량 엣지 에이전트 |
| Holo3.1-4B | 4B | 비용 효율적 프라이빗 배포 |
| Holo3.1-9B | 9B | 성능·지연 균형형 |
| Holo3.1-35B-A3B | 35B (활성 3B) | SOTA 성능, 엔터프라이즈 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>바로 시작하는 법:</strong> 로컬 컴퓨터 조작 에이전트를 평가하려면 Hugging Face에서 Q4 GGUF 또는 NVFP4 체크포인트를 다운로드해 <code>4B Q4-GGUF</code>를 자신의 하네스에서 실행해 보자. 작업 성공률·지연시간·메모리 세 가지 지표를 측정하고, 함수 호출 종단간 파라미터 매핑도 반드시 검증할 것.
</div>
</div>

## 왜 지금인가?

Hacker News에서 716 업보트를 기록한 별도 포스트는 GPU가 없는 2016년 Intel Xeon에서도 투기적 디코딩(speculative decoding)으로 Gemma 4를 실행하는 데 성공했다고 밝혔다. Holo3.1 출시와 맞물려 "로컬 에이전트 추론의 시대가 본격적으로 열렸다"는 평가가 커뮤니티에서 이어지고 있다.

H Company는 현재 Holo3.1 기반 데스크톱 에이전트 하네스를 개발 중이며, 앞으로 더 많은 환경에서 범용 에이전트 시스템을 구동하는 것을 목표로 한다.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body"><strong>배포 현황:</strong> 모든 모델은 Apache 2.0 라이선스로 Hugging Face에 공개돼 있다. H Company Inference API를 통한 클라우드 접근은 무료 티어로 지원된다.
</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>컴퓨터 조작 에이전트 최초로 FP8·NVFP4·Q4 GGUF 양자화 체크포인트 공개</li>
<li>AndroidWorld 35B-A3B 점수 67% → 79.3%, 4B/9B 모델 58% → 72%</li>
<li>NVFP4로 평균 스텝 시간 6.8초 → 3.3초(약 2배), RTX 4090에서 140ms 달성</li>
<li>OpenAI 호환 함수 호출 지원으로 LangGraph·CrewAI·AutoGen 통합 간소화</li>
<li>0.8B, 4B, 9B, 35B-A3B 4가지 크기, Apache 2.0 오픈소스 공개</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://hcompany.ai/holo3.1" target="_blank" rel="noopener noreferrer">Holo3.1 공식 블로그 (H Company)</a><br>— <a href="https://huggingface.co/blog/hcompany/holo31" target="_blank" rel="noopener noreferrer">Holo3.1 출시 발표 (Hugging Face Blog)</a><br>— <a href="https://hub.hcompany.ai/quickstart" target="_blank" rel="noopener noreferrer">Holo3.1 퀵스타트 가이드 (H Company Hub)</a></div></div>
