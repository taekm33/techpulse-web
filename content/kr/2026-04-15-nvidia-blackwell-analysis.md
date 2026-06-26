---
title: "NVIDIA Blackwell GPU 완전 분석 — AI 시대 반도체 혁명"
summary: "NVIDIA Blackwell 아키텍처는 전작 Hopper(H100) 대비 AI 학습 성능을 최대 4배, 추론 성능을 최대 30배 끌어올리며 AI 인프라의 판도를 바꾸고 있다. B200, GB200 NVL72 슈퍼칩의 구체적 스펙부터 클라우드 도입 현황, AMD와의 경쟁 구도까지 총망라한다."
category: "it-news"
date: "2026-04-15"
tags: ["NVIDIA", "Blackwell", "GPU", "AI반도체", "B200", "GB200"]
featured: false
readingTime: 11
---

## Blackwell 아키텍처 개요 — 라인업과 포지셔닝

NVIDIA Blackwell은 2024년 GTC에서 처음 공개된 차세대 GPU 아키텍처로, 전작 Hopper(H100/H200)를 대체하며 AI 데이터센터 시장을 겨냥한다. 젠슨 황 CEO는 이를 "컴퓨팅 역사상 가장 빠른 칩"이라고 표현했으며, 실제 벤치마크 결과들이 그 주장을 뒷받침하고 있다.

<div class="article-tldr"><div class="article-tldr__label">TL;DR</div><p>NVIDIA Blackwell(B200/GB200)은 전작 Hopper(H100) 대비 AI 학습 성능을 최대 4.6배, LLM 추론 성능을 최대 30배 향상시킨 차세대 GPU 아키텍처다. FP4 네이티브 지원과 NVLink 5.0, HBM3e 메모리 혁신을 통해 토큰당 전력 효율을 60~70% 절감하며 AI 인프라 비용 구조를 근본적으로 바꾸고 있다. Azure, AWS, Google Cloud 등 주요 클라우드가 2025년부터 본격 도입을 시작했으며, 국내 SK하이닉스는 HBM3e 공급의 핵심 수혜자로 부상했다.</p></div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote with Jensen Huang Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 주요 제품 라인업

| 제품명 | 포지셔닝 | 핵심 사양 | 주요 용도 |
|--------|---------|-----------|----------|
| **B100** | 엔터프라이즈 표준 | 192GB HBM3e, 8 PB/s 대역폭 | 클라우드 범용 AI |
| **B200** | 플래그십 데이터센터 | 192GB HBM3e, NVLink 5세대 | 대형 모델 학습·추론 |
| **GB200** | 슈퍼칩 (Grace+Blackwell) | B200 2개 + Grace CPU 통합 | 초대형 LLM 클러스터 |
| **DGX B200** | 완제품 AI 서버 | B200 × 8개, 1.4TB NVSwitch | 연구소·기업 자체 구축 |
| **RTX 5090** | 소비자·크리에이터 | 32GB GDDR7, 91.8 TFLOPS | 로컬 AI 개발·렌더링 |

B200은 단일 GPU로 192GB의 HBM3e 메모리를 탑재하며, 이는 GPT-4 수준의 모델을 단일 칩에서 구동하기에 충분한 용량이다.

---

## Blackwell 아키텍처 기술 심층 분석

Blackwell의 압도적인 성능은 단순한 공정 미세화가 아닌, 여러 핵심 기술들의 복합적 혁신에서 비롯된다.

### NVLink 5.0 — GPU 간 통신의 도약

NVLink 5.0은 Blackwell 세대에 새롭게 도입된 GPU 간 고속 인터커넥트 기술이다. 전 세대 NVLink 4.0이 제공하던 900 GB/s에서 **1.8 TB/s**로 2배 향상됐으며, NVL72 클러스터에서는 NVLink 스위치를 통해 72개 GPU가 **130 TB/s** 총 대역폭의 단일 고속 패브릭으로 연결된다.

기존 InfiniBand 기반 클러스터와의 차이점은 근본적이다. InfiniBand는 네트워크 레이어를 거치는 통신이지만, NVLink 5.0은 PCIe를 우회한 다이렉트 GPU-to-GPU 연결로 레이턴시가 수십 분의 1 수준으로 감소한다. 이는 대형 모델의 텐서 병렬·파이프라인 병렬 학습에서 결정적 이점을 만들어낸다.

또한 NVLink-C2C(Chip-to-Chip) 기술을 통해 GB200 슈퍼칩 내부에서 Grace CPU와 B200 GPU가 **900 GB/s** 대역폭으로 직결된다. 기존 CPU-GPU 간 PCIe 병목(~64 GB/s)을 완전히 제거하는 구조다.

### HBM3e 메모리 — 용량과 속도의 양립

Blackwell은 **HBM3e(High Bandwidth Memory 3e)** 를 채택해 H100의 HBM3 대비 용량과 대역폭을 동시에 끌어올렸다.

- **B200 단일 GPU**: 192GB HBM3e, 8.0 TB/s 메모리 대역폭
- **GB200 NVL72 전체**: 13.8 TB 통합 메모리 풀, GPU 간 논리적 단일 주소 공간 지원
- 메모리 대역폭은 H100(3.35 TB/s) 대비 **2.4배 향상**

HBM3e의 핵심 특징은 스택 당 핀 속도가 4.8 Gbps로 향상된 점이다. NVIDIA는 B200에 8스택 구성을 적용해 이론 피크 대역폭 8.0 TB/s를 달성했다. 이는 대규모 LLM에서 파라미터를 GPU 메모리에 상주시킬 수 있는 용량과, 연산 유닛에 데이터를 충분히 공급하는 속도를 동시에 확보한다는 의미다.

### FP4/FP6 정밀도 지원 — 추론 성능 혁신의 핵심

Blackwell이 추론에서 압도적인 성능을 보이는 핵심은 **FP4(4비트 부동소수점)** 및 **FP6(6비트)** 네이티브 하드웨어 지원이다.

| 정밀도 | B200 성능 | 주요 용도 |
|--------|----------|---------|
| FP64 | 90 TFLOPS | 과학 계산, 시뮬레이션 |
| FP32 | 360 TFLOPS | 범용 학습 |
| BF16/FP16 | 9 PFLOPS | 혼합 정밀도 학습 |
| FP8 | 18 PFLOPS | 고속 학습 |
| FP4 | 72 PFLOPS | 추론 최적화 |

FP4는 이론상 FP16 대비 4배 많은 연산을 동일 전력으로 수행한다. LLM 추론 전개 시 적절한 양자화 기법(GPTQ, AWQ 등)과 결합하면 품질 손실이 1% 미만 수준으로 억제되면서도 처리량이 극적으로 향상된다.

### Transformer Engine v2 — 소프트웨어와 하드웨어의 시너지

NVIDIA의 Transformer Engine은 Hopper에서 처음 도입됐으나, Blackwell의 **Transformer Engine v2**는 FP4/FP6 지원을 추가하고 레이어별 자동 정밀도 조정 알고리즘을 대폭 개선했다.

주요 특징:
- **동적 정밀도 선택**: 레이어별로 FP4~FP32를 자동으로 선택해 정확도와 속도를 최적화
- **세밀한 양자화(Fine-Grained Quantization)**: 가중치와 활성화를 더 작은 블록 단위로 양자화해 정밀도 손실 최소화
- **PyTorch/TensorFlow 네이티브 통합**: 코드 변경 없이 자동 최적화 적용

Transformer Engine v2는 NVIDIA가 소프트웨어 스택 수준에서 하드웨어 성능을 극대화하는 전략의 핵심으로, CUDA 생태계와의 강력한 결합을 통해 경쟁사가 쉽게 모방하기 어려운 해자(Moat)를 형성한다.

<div class="article-callout article-callout--tip"><div class="article-callout__icon">💡</div><div class="article-callout__body"><strong>CUDA 생태계가 곧 NVIDIA의 진짜 해자</strong><br>Blackwell의 하드웨어 혁신 못지않게 중요한 것은 소프트웨어 생태계다. PyTorch·TensorFlow와 네이티브로 통합된 Transformer Engine v2, 20년간 축적된 CUDA 라이브러리, cuDNN/NCCL 최적화는 AMD ROCm이나 Intel oneAPI가 단기간에 따라잡기 어려운 장벽이다. 하드웨어를 구매하는 것이 아니라 전체 소프트웨어 스택을 함께 얻는 셈이다.</div></div>

---

## 주요 제품 라인업 비교

Blackwell 세대 제품군을 스펙 기준으로 상세 비교한다.

| 제품명 | VRAM | TDP | FP8 TFLOPS | 가격 티어 | 주요 타겟 |
|--------|------|-----|-----------|----------|---------|
| **RTX 5090** | 32GB GDDR7 | 575W | ~3,352 TFLOPS | $2,000~3,000 (소비자) | 크리에이터, 로컬 AI 개발 |
| **B100** | 192GB HBM3e | 700W | 14,000+ TFLOPS | $25,000~30,000 | 클라우드 범용 AI 서버 |
| **B200** | 192GB HBM3e | 1,000W | 18,000 TFLOPS | $35,000~40,000 | 플래그십 데이터센터 |
| **GB200 (슈퍼칩)** | 384GB HBM3e (B200 ×2) | 2,700W | 36,000 TFLOPS | $70,000~80,000 | 초대형 LLM 클러스터 |
| **GB200 NVL72 랙** | 13.8TB 통합 풀 | ~600kW | 1,440,000 TFLOPS | $3,000,000~3,500,000 | 하이퍼스케일 AI 인프라 |

RTX 5090은 소비자 라인이지만 Blackwell 아키텍처를 공유하며, 연구자나 소규모 팀이 로컬 환경에서 70B 파라미터 이하 모델을 실험하기에 적합한 포지션이다. 반면 GB200 NVL72 랙은 사실상 단일 구매 단위가 아닌 하이퍼스케일 데이터센터의 기본 빌딩 블록으로 취급된다.

---

## 이전 세대(Hopper) 대비 성능 향상

Blackwell이 전작 대비 얼마나 빠른지를 구체적인 수치로 살펴본다.

### 성능 비교표 (B200 vs H100 기준)

| 성능 지표 | H100 SXM5 | B200 | 향상 배수 |
|----------|----------|------|----------|
| FP8 학습 처리량 | 3.9 PFLOPS | 18 PFLOPS | **4.6× 향상** |
| FP4 추론 처리량 | 미지원 | 72 PFLOPS | 신규 |
| HBM 용량 | 80GB (HBM3) | 192GB (HBM3e) | **2.4× 향상** |
| 메모리 대역폭 | 3.35 TB/s | 8.0 TB/s | **2.4× 향상** |
| NVLink 대역폭 | 900 GB/s | 1.8 TB/s | **2.0× 향상** |
| TDP (전력 소비) | 700W | 1,000W | 43% 증가 |
| 추론 성능 (LLM) | 기준 | 최대 30× | **최대 30× 향상** |
| 토큰당 전력 효율 | 기준 | 60~70% 절감 | **2.5~3× 개선** |

> 추론 성능의 30배 향상은 FP4 정밀도와 새로운 Transformer Engine v2가 결합된 결과다. 실제 LLM 서빙 환경에서는 배치 크기, 모델 아키텍처에 따라 달라지지만, 실사용 벤치마크에서도 10~20배 이상 향상이 일관되게 관찰된다.

단순 성능이 아닌 **토큰당 에너지 효율** 관점에서 Blackwell의 강점이 더 두드러진다. B200은 H100 대비 전력 소모는 43% 늘었지만 처리량은 수배 높아, 토큰당 전력 소비가 **60~70% 절감**된다. 대규모 데이터센터 운영 비용을 고려하면 이는 매우 중요한 지표다.

<div class="article-stats"><div class="article-stat"><div class="article-stat__v">30×</div><div class="article-stat__k">H100 대비 LLM 추론 성능 향상</div></div><div class="article-stat"><div class="article-stat__v">192GB</div><div class="article-stat__k">B200 단일 GPU HBM3e 메모리</div></div><div class="article-stat"><div class="article-stat__v">60~70%</div><div class="article-stat__k">토큰당 전력 소비 절감</div></div><div class="article-stat"><div class="article-stat__v">1.44 ExaFLOPS</div><div class="article-stat__k">GB200 NVL72 FP8 학습 처리량</div></div></div>

---

## AI 워크로드별 성능 분석

Blackwell의 성능 향상은 워크로드 유형에 따라 체감이 다르다. 각 시나리오별로 실질적인 이점을 분석한다.

### LLM 학습 (Pre-training / Fine-tuning)

대형 언어 모델 사전 학습은 가장 연산 집약적인 워크로드로, Blackwell의 FP8 학습 처리량 향상이 직접적으로 작용한다.

- **GPT-4 규모 모델 학습**: H100 클러스터 대비 약 **3~4배 빠른 수렴**
- **Llama 3 70B 파인튜닝**: H100 8개로 48시간 걸리던 작업이 B200 8개로 약 12~15시간으로 단축
- NVLink 5.0의 낮은 레이턴시 덕분에 텐서 병렬·파이프라인 병렬 학습에서 통신 병목이 대폭 줄어들어, 실제 학습 효율(MFU, Model FLOP Utilization)이 H100 대비 상승한다

### 추론(Inference) — LLM 서빙

추론은 Blackwell이 가장 극적인 향상을 보이는 영역이다. FP4 정밀도와 Transformer Engine v2의 시너지가 극대화된다.

- **Llama 3 405B 추론**: H100 대비 B200에서 토큰/초 기준 약 **15~20배 향상**
- **배치 효율**: 고정 전력 예산 내에서 동시에 처리 가능한 요청 수가 크게 증가해 GPU당 서빙 비용이 절감
- **레이턴시**: 첫 토큰까지 걸리는 시간(TTFT)도 단축되어 인터랙티브 AI 애플리케이션의 체감 성능 개선

### 이미지 생성 (Diffusion Models)

Stable Diffusion, FLUX, Sora 등 이미지·비디오 생성 모델도 Blackwell에서 유의미한 가속을 경험한다.

- FP8 및 FP4 혼합 정밀도 추론으로 1024×1024 이미지 생성 속도 H100 대비 **3~5배 향상**
- 고해상도(4K) 비디오 프레임 생성 워크로드에서 VRAM 192GB의 여유 용량이 핵심: 단일 GPU에서 더 큰 배치를 처리 가능
- RTX 5090도 32GB GDDR7을 통해 소비자급에서 이미지 생성 속도를 RTX 4090 대비 2배 이상 끌어올린다

### 과학적 시뮬레이션 (HPC / 기후·분자·물리)

AI뿐 아니라 전통적인 고성능 컴퓨팅(HPC) 워크로드에서도 Blackwell은 진보를 이룬다.

- **FP64 성능**: B200의 90 TFLOPS FP64는 H100(67 TFLOPS) 대비 **34% 향상**
- **기후 모델링**: 대규모 대기·해양 시뮬레이션에서 큰 메모리 용량과 대역폭이 결정적
- **분자 동역학**: GROMACS, AMBER 같은 MD 소프트웨어가 NVIDIA의 공식 최적화를 통해 Blackwell에서 최대 2배 속도 향상을 보고
- **AI for Science**: 단백질 구조 예측(AlphaFold3 등)처럼 AI와 HPC가 결합된 워크로드에서 FP8 학습과 FP64 시뮬레이션을 하나의 GPU에서 유연하게 전환 가능

---

## 데이터센터/클라우드 도입 현황

Blackwell은 2025년 하반기부터 주요 클라우드 사업자를 통해 본격 공급되기 시작했다.

| 클라우드 | 제품 | 서비스명 | 도입 시기 | 특이사항 |
|---------|------|---------|---------|---------|
| **Microsoft Azure** | GB200 NVL72 | ND GB200 v6 시리즈 | 2025년 Q3 GA | OpenAI 전용 클러스터 별도 운영 |
| **Amazon AWS** | B200 | p6 인스턴스 | 2025년 Q4 GA | SageMaker 통합 지원 |
| **Google Cloud** | GB200 | A4 인스턴스 | 2025년 Q4 GA | TPU v5와 병행 제공 |
| **Oracle Cloud** | GB200 NVL72 | BM.GPU.B200 | 2025년 Q3 GA | 베어메탈 단독 제공 |
| **CoreWeave** | GB200 NVL72 | GB200 클러스터 | 2025년 Q2 얼리액세스 | NVIDIA 파트너십, 최초 상용 클러스터 |

**AWS**: p6 인스턴스는 단일 노드에 B200 8개를 탑재하며, SageMaker HyperPod와의 통합으로 수천 GPU 규모 분산 학습 클러스터를 관리형 서비스로 제공한다. 스팟 인스턴스 지원도 예정되어 비용 최적화가 가능하다.

**Azure**: Microsoft는 OpenAI와의 파트너십을 통해 Azure 내 전용 GB200 NVL72 클러스터를 운영하며, GPT-5 계열 모델 학습 인프라로 활용하고 있다. ND GB200 v6 시리즈는 InfiniBand HDR200 기반 노드 간 연결과 NVLink 내부 연결을 조합해 대규모 분산 학습에 최적화됐다.

**Google Cloud**: A4 인스턴스는 Gemini 계열 모델 학습을 위해 내부적으로도 활용되며, 자사 TPU v5e와의 가격·성능 비교를 통해 고객이 워크로드에 맞는 가속기를 선택할 수 있도록 하는 전략이다.

국내에서는 **KT Cloud**와 **NHN Cloud**가 B200 기반 GPU 인스턴스 서비스를 2026년 상반기 출시 예정으로 준비 중이다.

<div class="article-callout article-callout--info"><div class="article-callout__icon">ℹ️</div><div class="article-callout__body"><strong>클라우드 vs. 자체 구축 — 어떤 선택이 유리할까?</strong><br>GB200 NVL72 랙 한 대의 가격은 약 35억 원에 달한다. 스타트업이나 중소 AI 기업에게는 클라우드 인스턴스(Azure ND GB200 v6, AWS p6 등)를 통해 필요할 때만 사용하는 방식이 초기 자본 비용을 절감하는 현실적 선택이다. 반면 대규모 추론 서비스를 안정적으로 운영해야 하는 기업은 장기적으로 자체 구축이 TCO(총소유비용) 면에서 유리할 수 있다.</div></div>

---

## 경쟁사 대응 현황

NVIDIA의 독주에 맞선 경쟁사들의 전략을 살펴본다.

### AMD — MI300X / MI350

AMD의 현세대 데이터센터 GPU인 MI300X는 192GB HBM3 메모리와 5.3 TB/s 대역폭으로 출시 당시 VRAM 용량에서 H100을 앞서며 주목받았다. 그러나 B200과의 직접 비교에서는 FP8 성능이 5.2 PFLOPS 대 18 PFLOPS로 3.5배 격차가 존재한다.

AMD는 2025년 **MI350** 시리즈를 발표하며 CDNA 4 아키텍처와 HBM3e 채택으로 격차 축소를 시도하고 있다. 소프트웨어 측면에서도 ROCm 6.x 버전에서 PyTorch 호환성과 CUDA 마이그레이션 도구가 크게 개선되어 CUDA 종속에서 벗어나려는 기업들의 수요를 흡수하고 있다. Meta와 Microsoft는 AMD GPU를 일부 워크로드에 병행 도입하는 것으로 알려졌다.

### Intel — Gaudi 3

Intel의 Gaudi 3는 128GB HBM2e와 3.7 TB/s 대역폭을 제공하며 가격 경쟁력을 전면에 내세운다. FP8 성능은 약 2 PFLOPS 수준으로 B200의 11분의 1에 불과하지만, AWS와 Intel 자체 클라우드(IDC)에서 서비스되며 초기 AI 도입 기업의 비용 최적화 수단으로 포지셔닝한다. 단, 소프트웨어 생태계 성숙도 면에서 CUDA/ROCm과의 격차가 여전히 크다.

### Google — TPU v5 / Trillium

Google은 자체 설계 ASIC인 TPU v5(Trillium)를 통해 Gemini 모델 학습을 수행한다. TPU는 범용 GPU가 아닌 행렬 연산 특화 설계로, Google 내부 워크로드에서는 NVIDIA GPU 대비 비용 효율이 높다고 알려져 있다. 그러나 범용성이 낮아 외부 고객 채택에는 한계가 있으며, Google Cloud는 TPU와 A4(Blackwell GPU) 인스턴스를 병행 제공하는 전략을 택했다.

### Apple — Apple Silicon (M 시리즈)

Apple의 M4 Ultra 등 Apple Silicon은 단일 패키지에 CPU·GPU·Neural Engine을 통합하며 전력 효율에서 독보적인 위치를 점한다. 그러나 최대 192GB까지 확장 가능한 통합 메모리와 뛰어난 에너지 효율에도 불구하고 데이터센터 클러스터 구성에는 적합하지 않아, Blackwell과의 직접 경쟁 시장은 제한적이다. 주로 엣지·온디바이스 AI 추론에서 강점을 보인다.

---

## 한국 AI 산업에 미치는 영향

### SK하이닉스 — HBM3e 최대 수혜자

Blackwell 세대의 HBM3e 수요 폭증은 SK하이닉스에게 역사적 기회다. NVIDIA B200의 HBM3e 공급에서 SK하이닉스가 약 50% 이상의 점유율을 확보하고 있는 것으로 알려졌으며, HBM3e 단가는 기존 GDDR6 대비 10배 이상 높아 수익성도 월등하다.

- HBM3e 리드타임은 12~18개월로 길게 형성되어 단기 공급 부족이 지속
- SK하이닉스는 청주 M15X 팹을 HBM 전용으로 전환하며 생산 캐파를 대폭 확대
- 2025년 HBM 관련 매출이 전사 반도체 매출의 40% 이상을 차지할 것으로 추정

### 삼성전자 — HBM3e 경쟁 가속

삼성전자는 HBM3e 공급에서 SK하이닉스에 뒤처진 상황을 만회하기 위해 품질 개선과 생산 확대에 집중하고 있다. NVIDIA 공급 벤더 승인을 위한 품질 검증이 지속되고 있으며, 2026년 중 HBM3e 양산 점유율 확대가 업계의 관심사다. 삼성의 파운드리 부문도 TSMC의 CoWoS 패키징 독점에 대응해 자체 2.5D 패키징 기술(H-Cube) 고도화를 추진 중이다.

### 국내 클라우드·AI 기업 영향

- **KT Cloud, NHN Cloud**: B200 기반 GPU 클라우드 서비스 출시로 국내 AI 기업의 인프라 접근성이 향상될 전망
- **네이버, 카카오**: 하이퍼클로바X, KoGPT 등 자사 LLM의 학습·서빙 인프라를 Blackwell 기반으로 전환하는 로드맵을 검토 중
- **AI 스타트업**: 고성능 GPU 접근 비용이 점차 낮아지며, 국내 AI 스타트업의 자체 모델 개발 가능성이 높아질 것으로 기대

<div class="article-callout article-callout--warn"><div class="article-callout__icon">⚠️</div><div class="article-callout__body"><strong>HBM3e 공급망 리스크는 여전히 현재진행형</strong><br>SK하이닉스의 HBM3e 점유율 확대는 국내 반도체 산업의 호재이지만, HBM3e 리드타임이 12~18개월에 달하는 만큼 AI 인프라 투자 계획을 세울 때는 공급 지연 가능성을 반드시 감안해야 한다. 삼성전자의 HBM3e 벤더 승인 여부에 따라 공급 구도가 크게 바뀔 수 있으며, TSMC CoWoS 패키징 병목도 단기 해소가 어렵다.</div></div>

---

## GB200 NVL72 슈퍼칩 — 역대 최강 AI 컴퓨팅 유닛

GB200 NVL72는 NVIDIA가 Blackwell 세대에 새롭게 도입한 혁신적인 클러스터 단위다.

### 구성

- **Grace CPU**: ARM Neoverse V2 기반, 72코어
- **Blackwell GPU**: B200 2개를 NVLink-C2C로 CPU에 직결
- **GB200 = Grace + Blackwell × 2** (단일 소켓 구성)
- **NVL72**: GB200 36개 묶음 → 총 **B200 72개**가 단일 고속 패브릭으로 연결

### NVL72 핵심 스펙

| 항목 | 수치 |
|------|------|
| GPU 수 | 72개 (B200) |
| 총 HBM 메모리 | 13.8 TB |
| GPU 간 대역폭 | 130 TB/s (NVLink 스위치) |
| FP8 학습 처리량 | 1.44 ExaFLOPS |
| FP4 추론 처리량 | 5.18 ExaFLOPS |
| 전력 소비 | ~600 kW (랙 수준) |

NVL72의 가장 큰 특징은 72개 GPU가 **단일 메모리 풀처럼 동작**한다는 점이다. 기존 DGX H100 클러스터에서 InfiniBand로 연결하던 방식과 달리, NVLink 패브릭으로 직결되어 통신 오버헤드가 극적으로 감소한다. GPT-4 규모(~1.8조 파라미터 추정)의 모델도 NVL72 단 1대로 완전히 올라갈 수 있다.

---

## 공급망 이슈와 가격

### 공급 현황

Blackwell은 출시 초기 공급 부족 이슈를 겪었다. TSMC 3nm 공정(CoWoS-L 패키징)을 사용하는 GB200는 패키징 공정의 복잡성으로 인해 2025년 초까지 수율 문제가 제기됐으나, 하반기 이후 안정화 단계에 접어들었다.

주요 공급망 병목:
- **HBM3e 메모리**: SK하이닉스·마이크론·삼성 3사가 공급, 수요 폭증으로 리드타임 12~18개월
- **CoWoS 패키징**: TSMC 독점, 생산 캐파 제한으로 여전히 공급 제한
- **NVLink 스위치**: NVIDIA 자체 설계, 파운드리 일정에 따른 공급 조절

### 가격

| 제품 | 추정 단가 | 비고 |
|------|---------|------|
| B100 (OEM) | $25,000~30,000 | 클라우드 업체 대량 구매 기준 |
| B200 (OEM) | $35,000~40,000 | H100 대비 약 40% 프리미엄 |
| DGX B200 (완제품 서버) | $300,000~400,000 | B200 × 8 포함 |
| GB200 NVL72 랙 | $3,000,000~3,500,000 | 전체 랙 시스템 기준 |

시장 조사 업체 Dell'Oro Group에 따르면 2025년 AI 가속기 시장에서 NVIDIA의 점유율은 여전히 80% 이상을 유지하고 있으며, Blackwell 전환에 따라 2026년 매출은 전년 대비 35~45% 성장이 예측된다.

---

<div class="article-keypoints"><div class="article-keypoints__title">📌 핵심 정리</div><ul><li>Blackwell(B200)은 H100 대비 FP8 학습 성능 4.6배, LLM 추론 성능 최대 30배 향상 — FP4 네이티브 지원과 Transformer Engine v2가 핵심 동력이다.</li><li>GB200 NVL72는 B200 72개를 단일 NVLink 패브릭으로 묶어 13.8TB 통합 메모리 풀과 1.44 ExaFLOPS FP8 처리량을 제공하며, GPT-4급 모델을 단 1랙에 올릴 수 있다.</li><li>Azure, AWS, Google Cloud, Oracle 등 주요 클라우드가 2025년 내 GB200/B200 인스턴스를 GA했으며, 국내 KT Cloud·NHN Cloud도 2026년 상반기 출시를 준비 중이다.</li><li>SK하이닉스는 HBM3e 공급의 최대 수혜자이나, 12~18개월 리드타임과 TSMC CoWoS 패키징 병목으로 공급망 리스크는 당분간 지속될 전망이다.</li></ul></div>

## 참고 자료

1. NVIDIA — [NVIDIA Blackwell Architecture Technical Brief](https://resources.nvidia.com/en-us-blackwell-architecture) (2024)
2. NVIDIA GTC 2024 Keynote — [Jensen Huang: Blackwell Announcement](https://www.nvidia.com/gtc/)
3. AnandTech — [NVIDIA B200 & GB200 NVL72 Deep Dive](https://www.anandtech.com) (2024)
4. The Next Platform — [Inside the GB200 NVL72 Rack](https://www.nextplatform.com) (2025)
5. Dell'Oro Group — [AI Accelerator Market Share Report Q4 2025](https://www.delloro.com)
6. Tom's Hardware — [NVIDIA Blackwell vs AMD MI300X Benchmark Comparison](https://www.tomshardware.com) (2025)
7. TSMC — [CoWoS Advanced Packaging Technology Overview](https://www.tsmc.com) (2024)
8. 전자신문 — [NVIDIA 블랙웰, 국내 클라우드 시장 판도 변화](https://www.etnews.com) (2025)

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.nvidia.com/gtc/keynote/" target="_blank" rel="noopener">NVIDIA — 젠슨 황 GTC 2026 키노트 (Blackwell·Vera Rubin)</a><br/>
· <a href="https://resources.nvidia.com/en-us-blackwell-architecture" target="_blank" rel="noopener">NVIDIA — Blackwell 아키텍처 공식 자료</a><br/>
· <a href="https://www.nvidia.com/gtc/" target="_blank" rel="noopener">NVIDIA GTC 공식 페이지</a>
</div>