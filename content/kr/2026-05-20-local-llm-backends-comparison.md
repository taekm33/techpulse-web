---
title: "로컬 LLM 백엔드 완전 비교 2026 — Ollama, LM Studio, vLLM, llama.cpp 어떤 걸 써야 할까"
summary: "내 컴퓨터에서 AI 모델을 직접 실행하는 '로컬 LLM' 시대가 열렸다. Ollama, LM Studio, vLLM, llama.cpp, text-generation-webui 등 주요 백엔드 7종을 성능·편의성·활용 목적별로 완전 비교하고, 상황에 맞는 최적 선택지를 제시한다."
category: "dev-trend"
date: "2026-05-20"
tags: ["로컬LLM", "Ollama", "LMStudio", "vLLM", "llama.cpp", "온프레미스AI", "프라이버시"]
featured: false
readingTime: 10
---

## 왜 지금 로컬 LLM인가

ChatGPT, Claude, Gemini가 넘쳐나는 시대에 굳이 내 컴퓨터에서 LLM을 돌릴 이유가 있을까? 생각보다 많다.

- **프라이버시**: 민감한 사내 문서, 의료 데이터, 법률 계약서를 외부 API에 보낼 수 없는 경우
- **비용**: 월 수백만 원의 API 비용을 절감하려는 기업
- **오프라인 환경**: 인터넷이 없는 현장, 항공기, 보안 망분리 환경
- **커스터마이징**: 파인튜닝된 모델, 특수 목적 모델을 직접 배포
- **레이턴시**: 특정 워크로드에서 로컬이 클라우드보다 빠른 경우

> "2025년 Llama 3.1 405B, Qwen 2.5 72B 수준의 모델이 소비자용 GPU에서 실용적 속도로 동작하기 시작하면서, 로컬 LLM은 더 이상 '괴짜들의 취미'가 아니다." — AI 엔지니어 커뮤니티 공통 인식

<div class="article-tldr"><div class="article-tldr__label">TL;DR</div><p>로컬 LLM 백엔드는 Ollama, LM Studio, vLLM, llama.cpp 등 7종이 있으며, 각각 설치 편의성·성능·대상 사용자가 뚜렷하게 다르다. 개발자에게는 Ollama + OpenWebUI 조합이, 다수 사용자 대상 서버에는 vLLM이, 비개발자에게는 LM Studio 또는 Jan이 최적 선택이다. 한국어 성능을 중시한다면 Qwen 2.5 14B 또는 LG의 EXAONE 3.5 모델을 Ollama로 실행하는 것이 현재 최고의 가성비다.</p></div>

---

## 로컬 LLM 생태계 전체 구조

```
[모델 파일] ─── GGUF / GPTQ / AWQ / SafeTensors
      ↓
[추론 백엔드] ── llama.cpp / vLLM / TensorRT-LLM / ExLlamaV2
      ↓
[프론트엔드/래퍼] ─ Ollama / LM Studio / text-generation-webui / Jan
      ↓
[API 레이어] ─── OpenAI 호환 REST API
      ↓
[클라이언트] ─── 브라우저, Python 코드, LangChain, ChatGPT 대체 UI
```

대부분의 "백엔드"는 사실 **추론 엔진 + 관리 래퍼**의 조합이다. 이 글에서는 최종 사용자가 직접 설치하고 쓰는 레이어를 중심으로 비교한다.

---

## 7대 주요 백엔드 한눈에 보기

| 도구 | 핵심 엔진 | 설치 난이도 | 주요 대상 | GPU 필요 | OpenAI 호환 API |
|---|---|---|---|---|---|
| **Ollama** | llama.cpp | ⭐ 매우 쉬움 | 개발자, 입문자 | 선택 (CPU도 가능) | ✅ |
| **LM Studio** | llama.cpp | ⭐ 매우 쉬움 | 비개발자, 개인 | 선택 | ✅ |
| **vLLM** | 자체 CUDA | ★★★ 어려움 | ML 엔지니어, 서버 | NVIDIA 필수 | ✅ |
| **llama.cpp** | 자체 C++ | ★★ 보통 | 고급 사용자 | 선택 | ✅ (서버 모드) |
| **text-generation-webui** | llama.cpp/ExLlama | ★★ 보통 | 파워유저, 연구자 | 선택 | ✅ (확장) |
| **Jan** | llama.cpp | ⭐ 매우 쉬움 | 비개발자 | 선택 | ✅ |
| **LocalAI** | llama.cpp 외 | ★★★ 어려움 | DevOps, 서버 운영 | 선택 | ✅ |

---

## 각 도구 심층 분석

### 1. Ollama — 로컬 LLM의 표준이 된 도구

**GitHub**: github.com/ollama/ollama | ⭐ 90k+ Stars

Ollama는 `docker pull` 처럼 `ollama pull llama3.1` 한 줄로 모델을 내려받고, `ollama run` 으로 즉시 대화를 시작할 수 있다. macOS, Linux, Windows 모두 지원하며, 설치 후 5분 이면 첫 대화가 가능하다.

**설치 및 기본 사용:**
```bash
# macOS/Linux
curl -fsSL https://ollama.com/install.sh | sh

# 모델 실행 (자동 다운로드 포함)
ollama run llama3.1:8b
ollama run qwen2.5:72b
ollama run deepseek-r1:14b

# OpenAI 호환 API 서버 (기본 포트 11434)
curl http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model": "llama3.1:8b", "messages": [{"role": "user", "content": "안녕"}]}'
```

**지원 모델 허브**: Ollama 공식 라이브러리에 Llama 3.1/3.2/3.3, Qwen 2.5, DeepSeek R1, Phi-4, Gemma 2, Mistral, CodeLlama 등 150개+ 모델 등록. `ollama list`로 설치 목록 확인 가능.

**장점:**
- 설치가 압도적으로 쉬움 (단일 바이너리)
- OpenAI API 완전 호환 → LangChain, OpenWebUI와 바로 연동
- 모델 관리가 편리 (pull/run/list/rm)
- macOS Apple Silicon(M1~M4) 최적화 탁월
- 자동 GPU 가속 (CUDA, Metal, ROCm 자동 감지)

**단점:**
- 고급 설정 옵션이 제한적 (vLLM 대비)
- 배치 처리 성능이 프로덕션용으로는 부족
- 퀀타이제이션 옵션 선택 범위가 llama.cpp 직접 사용보다 좁음

**추천 대상:** 개발자 개인 사용, 사이드 프로젝트, OpenWebUI와 조합, 빠른 프로토타이핑

<div class="article-callout article-callout--tip"><div class="article-callout__icon">💡</div><div class="article-callout__body"><strong>Ollama 빠른 시작 팁</strong><br>처음 로컬 LLM을 시작한다면 <code>ollama run qwen2.5:14b</code> 한 줄로 14B급 한국어 모델을 바로 실행해보자. 모델 자동 다운로드부터 대화까지 5분이면 충분하며, OpenWebUI와 연동하면 ChatGPT와 동일한 UI를 무료로 사용할 수 있다.</div></div>

---

### 2. LM Studio — GUI로 모델 탐색부터 실행까지

**공식사이트**: lmstudio.ai

LM Studio는 Hugging Face의 모델을 GUI에서 검색·다운로드·실행하는 데스크탑 앱이다. 터미널 없이도 로컬 LLM을 경험할 수 있어 비개발자에게 최적이다.

**주요 기능:**
- HuggingFace 모델 내장 검색 & 다운로드
- 채팅 UI 내장 (ChatGPT와 유사한 인터페이스)
- 로컬 서버 모드 (OpenAI API 호환)
- 모델 파라미터 GUI 조정 (Temperature, Context, Top-P 등)
- Windows/macOS/Linux 지원

**장점:**
- 진입 장벽 최저 — 개발 지식 불필요
- GGUF 모델 파일 직접 로드 가능
- 직관적인 UI로 파라미터 실험

**단점:**
- 무거운 앱 (Electron 기반)
- 서버 모드가 Ollama보다 덜 안정적
- 커스텀 스크립팅이 어려움

**추천 대상:** 비개발자, AI 입문자, 모델 탐색 용도

---

### 3. vLLM — 프로덕션 레벨 고성능 추론 서버

**GitHub**: github.com/vllm-project/vllm | ⭐ 40k+ Stars

vLLM은 UC Berkeley에서 개발한 LLM 추론 엔진으로, **PagedAttention** 기술을 통해 GPU 메모리를 OS의 가상 메모리처럼 동적 관리한다. 동시 요청 처리 성능이 Ollama/llama.cpp 대비 2~5배 높다.

**설치 및 실행:**
```bash
pip install vllm

# OpenAI 호환 API 서버 시작
python -m vllm.entrypoints.openai.api_server \
  --model meta-llama/Llama-3.1-8B-Instruct \
  --port 8000 \
  --tensor-parallel-size 2  # GPU 2장 병렬
```

**성능 비교 (Llama 3.1 8B, RTX 4090 기준):**

| 지표 | llama.cpp | Ollama | vLLM |
|---|---|---|---|
| 단일 요청 토큰/초 | ~45 | ~43 | ~55 |
| 동시 10 요청 처리량 | ~90 tok/s | ~85 tok/s | **~420 tok/s** |
| 동시 100 요청 처리량 | OOM 위험 | OOM 위험 | **~1,200 tok/s** |
| GPU 메모리 효율 | 보통 | 보통 | **탁월** |

<div class="article-stats"><div class="article-stat"><div class="article-stat__v">~420 tok/s</div><div class="article-stat__k">vLLM 동시 10 요청 처리량</div></div><div class="article-stat"><div class="article-stat__v">~1,200 tok/s</div><div class="article-stat__k">vLLM 동시 100 요청 처리량</div></div><div class="article-stat"><div class="article-stat__v">2~5배</div><div class="article-stat__k">Ollama·llama.cpp 대비 처리 성능</div></div><div class="article-stat"><div class="article-stat__v">~55 tok/s</div><div class="article-stat__k">vLLM 단일 요청 토큰/초 (RTX 4090)</div></div></div>

**장점:**
- 압도적인 동시 처리 성능 (PagedAttention)
- Continuous Batching으로 GPU 낭비 최소화
- Tensor Parallelism (멀티 GPU 자동 분산)
- LoRA 어댑터 동적 로딩
- OpenAI 완전 호환 API

**단점:**
- NVIDIA GPU 필수 (AMD, Apple Silicon 지원 제한적)
- 설치 복잡 (CUDA 버전 호환성 주의)
- 소형 모델 단일 사용자 환경에선 오버스펙
- 메모리 요구량이 높음

**추천 대상:** 다수 사용자 대상 내부 API 서버, 기업 온프레미스 배포, ML 엔지니어

---

### 4. llama.cpp — 모든 로컬 LLM의 뿌리

**GitHub**: github.com/ggerganov/llama.cpp | ⭐ 70k+ Stars

Georgi Gerganov가 2023년 1월 발표한 이 C++ 추론 엔진은 사실상 모든 로컬 LLM 생태계의 기반이다. Ollama, LM Studio, text-generation-webui 모두 내부적으로 llama.cpp를 사용한다. **GGUF 포맷**을 정의한 프로젝트이기도 하다.

```bash
# 빌드
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp && make -j

# 기본 추론
./llama-cli -m models/qwen2.5-7b-instruct-q4_k_m.gguf \
  -p "한국 AI 산업 전망은?" --temp 0.7

# OpenAI 호환 서버
./llama-server -m models/llama-3.1-8b-q4_k_m.gguf \
  --port 8080 --n-gpu-layers 35
```

**GGUF 퀀타이제이션 선택 가이드:**

| 퀀타이제이션 | 파일 크기 (7B 기준) | 품질 | 속도 | 추천 용도 |
|---|---|---|---|---|
| Q2_K | ~2.8GB | ★★☆☆☆ | 가장 빠름 | VRAM 극도로 부족할 때 |
| Q4_K_M | ~4.4GB | ★★★★☆ | 빠름 | **일반 추천 (가성비 최고)** |
| Q5_K_M | ~5.3GB | ★★★★☆ | 보통 | 품질 중시 |
| Q6_K | ~6.1GB | ★★★★★ | 느림 | 품질 최우선 |
| Q8_0 | ~8.0GB | ★★★★★ | 느림 | fp16에 근접 |
| F16 | ~14GB | ★★★★★ | 가장 느림 | 파인튜닝 기준값 |

<div class="article-callout article-callout--info"><div class="article-callout__icon">ℹ️</div><div class="article-callout__body"><strong>GGUF 퀀타이제이션 선택 기준</strong><br>일반 사용 목적이라면 <strong>Q4_K_M</strong>이 파일 크기·품질·속도의 가성비가 가장 뛰어나 공식적으로 권장된다. VRAM이 충분하다면 Q5_K_M이나 Q6_K를 선택해 답변 품질을 높일 수 있으며, VRAM이 극히 부족한 경우에만 Q2_K를 고려하되 응답 품질 저하를 감수해야 한다.</div></div>

**장점:**
- CPU만으로도 동작 (GPU 없어도 OK)
- Apple Silicon M 시리즈 극도 최적화 (Metal GPU)
- 가장 넓은 모델 포맷 지원
- 퀀타이제이션 레벨 세밀 조정

**단점:**
- 직접 사용 시 터미널 필수
- 배치 처리 성능은 vLLM 대비 낮음
- 모델 관리 도구 없음 (직접 파일 관리)

**추천 대상:** 고급 사용자, 저사양 하드웨어, CPU 전용 환경, 최대 커스터마이징 필요 시

---

### 5. text-generation-webui (oobabooga) — 파워유저를 위한 올인원

**GitHub**: github.com/oobabooga/text-generation-webui | ⭐ 40k+ Stars

"ooba"라고 불리는 이 도구는 브라우저 기반 UI로 다양한 백엔드(llama.cpp, ExLlamaV2, AutoGPTQ 등)를 통합한다. 확장 기능이 풍부하며 RP(Role Play), 소설 창작, 파인튜닝된 모델 실험에 특히 강하다.

**주요 기능:**
- 다중 백엔드 지원 (llama.cpp, ExLlamaV2, GPTQ, AWQ)
- 캐릭터 카드, 시스템 프롬프트 관리
- LoRA 실시간 로딩/언로딩
- 확장 시스템 (번역, TTS, RAG 등 플러그인)
- 멀티모달 지원 (LLaVA 등)

**장점:**
- 가장 많은 기능 제공
- 연구 및 실험에 최적
- 커뮤니티 확장팩 풍부

**단점:**
- 설치 복잡 (Python 환경, 의존성 충돌 잦음)
- UI가 다소 복잡해 입문자에게 부담
- 업데이트 시 호환성 문제 발생 빈번

**추천 대상:** 모델 연구자, 파인튜닝 실험, 창작 용도, LoRA 테스트

---

### 6. Jan — 오프라인 우선 프라이버시 특화 데스크탑 앱

**GitHub**: github.com/janhq/jan | ⭐ 25k+ Stars

Jan은 "AI를 완전히 오프라인으로"를 슬로건으로 하는 데스크탑 앱이다. LM Studio와 비슷하지만 오픈소스이고, 원격 모델(Claude API, OpenAI API)과 로컬 모델을 하나의 인터페이스에서 관리할 수 있다.

**장점:**
- 완전 오픈소스 (MIT 라이선스)
- 로컬 + 원격 모델 통합 관리
- 확장 프로그램 시스템
- 마크다운, 코드 하이라이팅 지원 내장 UI

**단점:**
- Ollama 대비 생태계 작음
- 가끔 안정성 이슈

**추천 대상:** 오프라인 환경, 프라이버시 중시 개인 사용자

---

### 7. LocalAI — 자체 서버에 OpenAI API를 구축하고 싶다면

**GitHub**: github.com/mudler/LocalAI | ⭐ 25k+ Stars

LocalAI는 OpenAI API의 드롭인 대체제다. 텍스트 생성뿐 아니라 **Whisper(음성 인식), Stable Diffusion(이미지 생성), TTS**까지 하나의 OpenAI 호환 엔드포인트로 제공한다.

```yaml
# docker-compose.yml 예시
services:
  localai:
    image: localai/localai:latest-aio-cpu
    ports:
      - "8080:8080"
    volumes:
      - ./models:/build/models
```

**장점:**
- 텍스트·이미지·음성 통합 API
- Docker로 간편 배포
- 기존 OpenAI SDK 코드 변경 없이 사용

**단점:**
- 설정 복잡도가 높음
- 개별 기능은 전문 도구보다 성능 떨어짐

**추천 대상:** DevOps 엔지니어, 멀티모달 API 서버 구축, Kubernetes 배포

---

## 상황별 최적 선택 가이드

### 하드웨어 기준 추천

| 환경 | 추천 도구 | 추천 모델 |
|---|---|---|
| MacBook M1/M2/M3/M4 | Ollama | Llama 3.1 8B Q4, Qwen 2.5 14B Q4 |
| Windows RTX 3080 (10GB) | Ollama 또는 LM Studio | Llama 3.1 8B, Mistral 7B |
| Windows RTX 4090 (24GB) | Ollama 또는 vLLM | Qwen 2.5 32B Q4, Llama 3.1 70B Q2 |
| Ubuntu 서버 A100 (80GB) | vLLM | Llama 3.1 70B, Qwen 2.5 72B |
| CPU 전용 (RAM 32GB+) | llama.cpp | Phi-3.5 mini, Llama 3.2 3B |
| CPU 전용 (RAM 16GB) | llama.cpp | Phi-3.5 mini Q4, Gemma 2B |

### 사용 목적 기준 추천

| 목적 | 추천 도구 | 이유 |
|---|---|---|
| 개인 ChatGPT 대체 | **Ollama + OpenWebUI** | 설치 쉽고 UI 쾌적 |
| 팀 내부 API 서버 | **vLLM** | 동시 접속 성능 압도적 |
| 코딩 어시스턴트 | **Ollama + Continue.dev** | VS Code 플러그인 연동 |
| 문서 요약/RAG 시스템 | **Ollama + LangChain** | OpenAI 호환 API 활용 |
| 모델 실험/연구 | **text-generation-webui** | 다양한 백엔드·파라미터 지원 |
| 오프라인 현장 배포 | **llama.cpp + Jan** | 인터넷 불필요, 경량 |
| Docker/K8s 배포 | **LocalAI** | 컨테이너 네이티브 |
| 비개발자 사용 | **LM Studio 또는 Jan** | GUI, 코드 불필요 |

---

## Ollama + OpenWebUI 조합 — 현재 가장 인기 있는 스택

로컬 LLM 커뮤니티에서 가장 많이 추천되는 조합이다.

```bash
# 1. Ollama 설치 및 모델 준비
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.1:8b
ollama pull qwen2.5:14b

# 2. OpenWebUI Docker 실행
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main

# 3. 브라우저에서 http://localhost:3000 접속
```

**결과**: ChatGPT와 거의 동일한 UI에서 완전 오프라인 AI 어시스턴트 구현 완료.

---

## 성능 최적화 핵심 팁

### GPU 레이어 설정 (n_gpu_layers)
모델 전체를 GPU에 올리지 못할 때, 일부만 GPU에 올려 속도를 높인다:
```bash
# VRAM 8GB 기준 Llama 3.1 8B Q4
ollama run llama3.1:8b  # 자동 감지

# llama.cpp 직접 제어
./llama-server -m model.gguf --n-gpu-layers 28  # 일부만 GPU
./llama-server -m model.gguf --n-gpu-layers 999  # 전체 GPU (VRAM 충분 시)
```

### 컨텍스트 크기 최적화
컨텍스트가 클수록 VRAM 소비가 급격히 증가:

| 컨텍스트 | VRAM 추가 소비 (8B 모델 기준) |
|---|---|
| 2,048 토큰 | +0.5GB |
| 4,096 토큰 | +1.0GB |
| 8,192 토큰 | +2.0GB |
| 32,768 토큰 | +8.0GB |

<div class="article-callout article-callout--warn"><div class="article-callout__icon">⚠️</div><div class="article-callout__body"><strong>컨텍스트 크기 과다 설정 주의</strong><br>컨텍스트를 32K 이상으로 설정하면 8B 모델 기준으로만 추가 VRAM이 8GB 이상 소모되어 OOM(Out of Memory) 오류가 발생할 수 있다. 기본값(2K~4K)에서 시작해 실제 필요한 대화 길이에 맞게 단계적으로 늘리고, VRAM 사용량을 모니터링하며 최적값을 찾는 것을 권장한다.</div></div>

> 실제 작업에 필요한 컨텍스트 크기만 설정하는 것이 성능 최적화의 핵심이다.

---

## 한국어 성능이 좋은 로컬 모델 추천

| 모델 | 파라미터 | 한국어 수준 | VRAM 요구량 | 비고 |
|---|---|---|---|---|
| **Qwen 2.5 14B Q4** | 14B | ★★★★★ | 10GB | 현재 최고 가성비 |
| Qwen 2.5 72B Q4 | 72B | ★★★★★ | 45GB+ | 최고 품질 |
| EXAONE 3.5 7.8B | 7.8B | ★★★★★ | 6GB | LG AI 한국어 특화 |
| Llama 3.1 8B Q4 | 8B | ★★★☆☆ | 6GB | 영어 강점 |
| Gemma 2 9B Q4 | 9B | ★★★☆☆ | 7GB | 코딩 강점 |
| DeepSeek R1 14B | 14B | ★★★★☆ | 10GB | 추론 특화 |

**한국어 로컬 LLM 최고 추천**: LG에서 공개한 **EXAONE 3.5** 시리즈는 한국어에 특화된 오픈소스 모델로, Ollama에서 직접 실행 가능하다.

```bash
ollama run exaone3.5:7.8b
```

---

## 결론 — 로컬 LLM 백엔드 선택 요약

```
나에게 맞는 백엔드는?

비개발자 or 처음 시작하는가?
  → LM Studio 또는 Jan

개발자, 개인 사용 or 사이드 프로젝트?
  → Ollama (+ OpenWebUI)

팀 서버 or 다수 사용자 대상?
  → vLLM (NVIDIA GPU) 또는 Ollama (소규모)

최대 성능 튜닝 필요?
  → llama.cpp 직접 사용

모델 연구/실험/LoRA 테스트?
  → text-generation-webui

Docker/K8s, 멀티모달 API 서버?
  → LocalAI
```

로컬 LLM 생태계는 2025~2026년을 기점으로 성숙 단계에 접어들었다. Ollama 하나만으로도 왠만한 개인 및 소규모 팀의 요구를 충족할 수 있으며, 프로덕션 트래픽이 생기는 시점에 vLLM으로 전환하는 전략이 현재로서는 가장 합리적이다.

<div class="article-keypoints"><div class="article-keypoints__title">📌 핵심 정리</div><ul><li>입문자·비개발자는 <strong>LM Studio 또는 Jan</strong>, 개발자 개인 사용은 <strong>Ollama + OpenWebUI</strong>, 팀 서버는 <strong>vLLM</strong>, 최대 커스터마이징은 <strong>llama.cpp</strong>이 각각 최적 선택이다.</li><li>vLLM의 PagedAttention 기술은 동시 100 요청 기준 llama.cpp 대비 처리량이 10배 이상이지만 NVIDIA GPU가 필수이며, Apple Silicon·CPU 환경에서는 Ollama 또는 llama.cpp가 더 실용적이다.</li><li>한국어 성능을 최우선으로 한다면 <strong>Qwen 2.5 14B Q4_K_M</strong> 또는 LG AI Research의 <strong>EXAONE 3.5 7.8B</strong>를 Ollama로 실행하는 것이 현재 최고 가성비다.</li><li>GGUF 퀀타이제이션은 일반 용도에서 <strong>Q4_K_M</strong>을 기본으로, 컨텍스트 크기는 실제 필요 범위에서 시작해 VRAM 여유에 따라 단계적으로 늘리는 전략이 성능 최적화의 핵심이다.</li></ul></div>

---

## 참고 자료

1. [Ollama 공식 문서](https://ollama.com/docs)
2. [llama.cpp GitHub](https://github.com/ggerganov/llama.cpp)
3. [vLLM 공식 문서](https://docs.vllm.ai)
4. [LM Studio 공식사이트](https://lmstudio.ai)
5. [OpenWebUI GitHub](https://github.com/open-webui/open-webui)
6. [text-generation-webui GitHub](https://github.com/oobabooga/text-generation-webui)
7. [Jan GitHub](https://github.com/janhq/jan)
8. [LocalAI 공식 문서](https://localai.io)
9. [EXAONE 3.5 — LG AI Research](https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct)
10. [Hugging Face GGUF 모델 허브](https://huggingface.co/models?library=gguf)
11. [vLLM PagedAttention 논문 (arXiv:2309.06180)](https://arxiv.org/abs/2309.06180)
12. [로컬 LLM 벤치마크 — LocalLLMBench](https://github.com/Mozilla-Ocho/llamafile)

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://ollama.com/" target="_blank" rel="noopener">Ollama 공식</a> · <a href="https://lmstudio.ai/" target="_blank" rel="noopener">LM Studio 공식</a><br/>
· <a href="https://docs.vllm.ai/" target="_blank" rel="noopener">vLLM 공식 문서</a> · <a href="https://github.com/ggerganov/llama.cpp" target="_blank" rel="noopener">llama.cpp (GitHub)</a>
</div>