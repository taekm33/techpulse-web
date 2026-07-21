---
title: "NVIDIA Nemotron 3 Ultra 출시 — 오픈 550B MoE, 에이전트 비용 30% 절감"
summary: "NVIDIA가 장시간 실행 에이전트를 위한 550B 파라미터 오픈 MoE 모델 Nemotron 3 Ultra를 공개했다. 동급 오픈 모델 대비 5배 높은 처리량과 30% 낮은 에이전트 작업 비용을 달성했다."
category: "ai-news"
date: "2026-06-08"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "오픈모델", "MoE", "AI에이전트"]
---

<div class="article-tldr">
NVIDIA가 <strong>Nemotron 3 Ultra</strong>를 출시했다. 550B 파라미터 MoE(전문가 혼합) 구조로 실제 활성 파라미터는 55B에 불과하지만, 동급 오픈 모델 대비 <strong>5배 높은 처리량</strong>과 <strong>에이전트 작업 비용 30% 절감</strong>을 달성한다. 가중치·데이터·학습 레시피가 모두 공개된 완전 오픈 모델이며, SWE-Bench Verified에서 65~70.4%를 기록했다.
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote with Jensen Huang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Nemotron 3 Ultra란

NVIDIA가 에이전트 워크플로우를 위해 설계한 대규모 오픈 언어 모델이다. 단순한 단일 Q&A보다 계획→도구 호출→오류 수정→결과 검증으로 이어지는 **장시간 복합 작업**에 최적화됐다. 모든 가중치와 데이터, 학습 레시피가 공개돼 기업이 도메인별로 직접 파인튜닝하고 어디서나 배포할 수 있다.

### 핵심 아키텍처 혁신 4가지

1. **하이브리드 Mamba-Transformer** — 긴 컨텍스트 처리 효율을 높이면서 정확한 정보 검색 능력도 유지한다. Mamba 레이어는 시퀀스 효율, Transformer 레이어는 사실 정확성을 담당한다.
2. **NVFP4 양자화** — Hopper, Blackwell, Ampere 세 세대 NVIDIA GPU 아키텍처에서 단일 체크포인트로 구동된다. Blackwell 기준 BF16 대비 최대 5배 처리량 향상.
3. **LatentMoE** — 추론·코드 생성·도구 호출·도메인별 로직을 오가는 워크플로우에서 전문가 라우팅을 효율화한다.
4. **다중 토큰 예측(MTP)** — 하나의 포워드 패스에서 여러 미래 토큰을 예측해 긴 멀티턴 출력 속도를 높인다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">550B</span>
<span class="stat-label">전체 파라미터 수</span>
</div>
<div class="stat-item">
<span class="stat-number">5x</span>
<span class="stat-label">동급 오픈 모델 대비 처리량</span>
</div>
<div class="stat-item">
<span class="stat-number">30%</span>
<span class="stat-label">에이전트 작업 비용 절감</span>
</div>
</div>

## 학습 방법론: Multi-Teacher On-Policy Distillation

Nemotron 3 Ultra는 **MOPD(Multi-Teacher On-Policy Distillation)**라는 학습 기법으로 훈련됐다. 10개 이상의 도메인 특화 교사 모델이 각 분야에서 Ultra의 추론을 평가하고 점수를 매기는 방식이다. 학생 모델이 직접 시도를 생성하는 동안 교사 모델들이 실시간으로 피드백을 제공하며, 학생과 교사가 함께 진화한다.

사전 학습 데이터는 10조 토큰 기반이며 세 가지 도메인을 보강했다.

- **법률:** 40억 합성 법률 토큰 추가 → LegalBench 평균 64.6%→74.7%
- **지식:** 350억 위키 기반 합성 토큰 → SimpleQA 40.2%→50.2%
- **코드:** 2025년 9월까지 GitHub 코드 1730억 토큰 갱신

<div class="article-callout tip">
<strong>실무 팁:</strong> NVFP4 단일 체크포인트가 Hopper·Blackwell·Ampere GPU 모두에서 작동하므로, 세대가 다른 GPU 클러스터를 혼합 운용하는 기업도 단일 모델로 인프라를 통일할 수 있다.
</div>

## 벤치마크 성능

| 벤치마크 | Nemotron 3 Ultra | 비교 모델 |
|---------|:---:|---|
| SWE-Bench Verified | 65~70.4% | 다양한 에이전트 하네스에서 일관된 성능 |
| GPQA Diamond | 상위권 | 복잡한 지식·추론 |
| Claw-Eval (pass@3) | 76.9% | 자율 에이전트 실행 능력 |
| GDPval | 72.9% | 실제 오피스 업무 처리 능력 |

NVFP4 덕분에 SWE-bench와 Terminal bench 2.0 실험에서 같은 결과를 얻는 데 필요한 총 토큰 수와 턴당 토큰 수가 모두 감소했다.

<div class="article-callout info">
<strong>라이선스:</strong> Nemotron 3 Ultra는 Linux Foundation의 오픈 AI 모델 배포 전용 퍼미시브 라이선스인 <strong>OpenMDW-1.1</strong>로 공개된다. 가중치, 데이터, 레시피 전체가 이 단일 프레임워크 하에 커버된다.
</div>

## 함께 출시된 모델들

- **Nemotron 3.5 Content Safety** — 4B 파라미터 가드레일 모델. 텍스트·이미지·복합 입력에서 23개 안전 카테고리, 12개 언어를 지원한다.
- **Nemotron 3.5 ASR** — 40개 이상 언어를 지원하는 다국어 스트리밍 음성 인식 모델. 100ms 미만 지연으로 실시간 음성 에이전트 오케스트레이션 가능. GitHub Copilot CLI의 음성 입력을 구동한다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Nemotron 3 Ultra는 550B 파라미터 MoE 모델로, 55B만 활성화돼 동급 오픈 모델 대비 5배 처리량을 낸다.</li>
<li>에이전트 작업 비용을 30% 절감하며, SWE-Bench Verified 65~70% 수준의 코딩 에이전트 능력을 갖춘다.</li>
<li>Hopper·Blackwell·Ampere 세 GPU 세대에서 단일 NVFP4 체크포인트로 구동된다.</li>
<li>가중치·데이터·레시피 완전 공개, OpenMDW-1.1 퍼미시브 라이선스로 상업적 파인튜닝 가능.</li>
<li>Nemotron 3.5 Content Safety(4B 가드레일), Nemotron 3.5 ASR(40+ 언어)도 함께 출시됐다.</li>
</ul>
</div>

## 전망

NVIDIA가 칩 제조사를 넘어 오픈 AI 모델 생태계의 핵심 공급자로 자리를 굳히고 있다. Nemotron 3 Ultra의 완전 오픈 정책은 기업들이 폐쇄 API 종속 없이 자체 인프라에서 프런티어급 에이전트를 구동할 수 있는 경로를 열어준다. 처리량 효율과 비용 절감이 검증되면서 오픈 모델이 클로즈드 모델의 실질적인 대안으로 부상하는 속도가 빨라질 것으로 보인다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://developer.nvidia.com/nemotron" target="_blank" rel="noopener">NVIDIA Nemotron 개발자 허브</a><br/>
· <a href="https://build.nvidia.com/nvidia" target="_blank" rel="noopener">NVIDIA NIM (build.nvidia.com)</a><br/>
· <a href="https://huggingface.co/nvidia" target="_blank" rel="noopener">NVIDIA on Hugging Face — 오픈 가중치</a><br/>
</div>
