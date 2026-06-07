---
title: "구글, Gemma 4 12B 공개… 인코더 없는 최초 멀티모달 로컬 AI, 16GB VRAM으로 오디오까지 처리"
summary: "구글이 Gemma 4 12B를 출시했다. 인코더 없는 통합 아키텍처로 텍스트·이미지·오디오를 단일 모델에서 처리하며, 16GB VRAM 노트북에서 완전히 로컬 실행이 가능하다. macOS 데스크탑 앱과 OpenAI 호환 로컬 API 서버도 함께 제공된다."
category: "ai-news"
date: "2026-06-07"
readingTime: 5
tags: ["Google", "Gemma", "로컬AI", "멀티모달", "오픈소스"]
---

<div class="article-tldr">
구글이 Gemma 4 12B를 공개했다. Gemma 패밀리 최초의 중형 멀티모달 모델로, 별도의 비전·오디오 인코더 없이 텍스트·이미지·오디오를 통합 아키텍처에서 처리한다. 개발자 노트북 16GB VRAM 수준에서 완전한 로컬 실행이 가능하며, macOS 데스크탑 앱, OpenAI 호환 로컬 API 서버(litert-lm serve), 멀티토큰 예측(MTP) 최적화 버전이 함께 제공된다.
</div>

구글의 로컬 AI 전략이 한 단계 도약했다. Gemma 4 12B는 단순히 '더 작은 Gemini'가 아니다. 기존 Gemma 모델들이 시각·음성 처리에 무거운 멀티스테이지 인코더를 필요로 했던 것과 달리, 이 모델은 인코더 없는 단일 통합 아키텍처로 모든 모달리티를 소화한다. 이 설계 선택이 로컬 배포를 현실적으로 만드는 핵심 요인이다.

## Gemma 4 12B의 네 가지 주요 이정표

<div class="article-stats">

| 이정표 | 내용 | 의미 |
|--------|------|------|
| 인코더 프리 아키텍처 | 별도 비전·오디오 인코더 불필요 | 모델 크기 대비 멀티모달 처리 효율 극대화 |
| 오디오 입력 지원 | Gemma 패밀리 최초 중형 모델 오디오 지원 | 기존엔 소형 Edge 모델에만 가능 |
| 로컬 실행 요구사항 | 16GB VRAM 노트북 또는 통합 메모리 | 일반 개발자 MacBook Pro에서 동작 |
| macOS 데스크탑 앱 | 최초 공개 | 인스톨 즉시 오프라인 음성·시각 인터랙션 |

</div>

<div class="article-callout tip">
**지금 바로 시작하는 방법**: LM Studio나 Ollama로 클릭 몇 번이면 실행 가능하다. Hugging Face와 Kaggle에서 사전학습·인스트럭션 튜닝 체크포인트를 직접 다운로드할 수 있다. `litert-lm serve` CLI 명령으로 OpenAI 호환 로컬 API 서버를 즉시 실행할 수 있어, Continue, Aider, Hermes 등 기존 개발 도구와 코드 수정 없이 연결된다. Apple Silicon MacBook에서는 Google AI Edge Gallery 앱으로 오프라인 실행이 가능하다.
</div>

## LiteRT-LM: 로컬 실행 인프라의 핵심

구글은 Gemma 4 12B와 함께 LiteRT-LM 기반의 두 가지 개발자 통합도 공식 출시했다.

**macOS 네이티브 앱**: Google AI Edge Gallery가 데스크탑 플랫폼으로 확장됐다. Apple Silicon GPU를 활용해 Gemma 4 12B를 완전 오프라인으로 실행하며, 챗 버블 안에서 Python 코드를 작성·실행하고 과학 차트를 플로팅할 수 있는 샌드박스 환경이 포함된다. Google AI Edge Eloquent 앱도 Mac에서 Gemma 12B를 이용한 음성 편집 입력을 지원한다.

**드롭인 로컬 API 서버**: `litert-lm serve` 명령 하나로 OpenAI 호환 로컬 API 서버를 실행할 수 있다. 상태 없는 프리픽스 캐싱(stateless prefix caching)이 메모리에서 대화 기록을 즉시 일치시켜 프리필 지연을 제거한다.

<div class="article-callout info">
**멀티토큰 예측(MTP) 최적화**: Gemma 4 12B는 별도의 MTP 최적화 모델을 함께 제공한다. 단일 포워드 패스에서 여러 토큰을 동시에 예측해 로컬 추론 속도를 높인다. 16GB VRAM 제약이 있는 환경에서 실용적인 응답 속도를 확보하기 위한 핵심 설계다.
</div>

## 에이전트 워크플로우를 위한 Gemma Skills 저장소

구글은 Gemma 4 12B 출시와 함께 공식 **Gemma Skills 저장소**를 오픈했다. 에이전트가 최신 Gemma 역량을 활용해 빌드할 수 있도록 설계된 스킬 라이브러리다.

<div class="article-keypoints">

**Gemma 4 12B 배포 생태계**
- **로컬 실행**: LM Studio, Ollama, Google AI Edge Gallery, LiteRT-LM CLI
- **클라우드 배포**: Gemini Enterprise Agent Platform Model Garden, Cloud Run, GKE
- **파인튜닝**: Hugging Face Transformers, llama.cpp, MLX, SGLang, vLLM, Unsloth 지원
- **에이전트 통합**: litert-lm serve로 Continue, Aider, Hermes, OpenCode와 즉시 연결
- **라이선스**: 오픈소스 (상용 사용 가능)

</div>

| 비교 항목 | Gemma 4 12B | 이전 Gemma 모델 |
|-----------|------------|----------------|
| 아키텍처 | 인코더 없는 통합 구조 | 별도 비전 인코더 필요 |
| 오디오 지원 | 중형 모델 최초 지원 | 소형 Edge 모델에만 가능 |
| 로컬 실행 요건 | 16GB VRAM | 동급 성능 대비 더 높은 사양 필요 |
| macOS 앱 | 공식 데스크탑 앱 제공 | 미제공 |

Gemma 4 12B의 의미는 단순한 성능 향상을 넘는다. 인코더 없는 통합 아키텍처로 멀티모달 AI를 일반 개발자 노트북에서 실행 가능하게 만든 것은, 클라우드 의존 없이 개인정보 보호와 오프라인 동작이 필요한 기업·의료·교육 환경에서 새로운 배포 시나리오를 열어준다.
