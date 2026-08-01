---
title: "AMD, 자사 GPU만으로 훈련한 완전 개방형 MoE 'Instella-MoE' 공개 — 엔비디아 없는 프론티어 실험"
summary: "AMD가 총 160억·활성 28억 파라미터의 완전 개방형 Mixture-of-Experts 언어모델 Instella-MoE-16B-A3B를 공개했다. Instinct MI300X·MI325X GPU와 ROCm 스택만으로 사전학습부터 강화학습까지 전 과정을 처리했고, 가중치·데이터 믹스·학습 코드를 전 단계 공개했다. 개방형 모델 중 최고 평균 점수를 기록했다."
category: "ai-news"
date: "2026-08-02"
readingTime: 6
tags: ["AMD", "오픈소스AI", "MoE", "Instinct", "엔비디아"]
---

<div class="article-tldr">
AMD가 완전 개방형 Mixture-of-Experts(MoE) 언어모델 <strong>Instella-MoE-16B-A3B</strong>를 공개했다. 총 160억 파라미터 중 토큰당 28억만 활성화하는 희소 구조로, 엔비디아 GPU가 아닌 자사 Instinct MI300X·MI325X와 ROCm 소프트웨어만으로 사전학습부터 강화학습까지 전 과정을 훈련했다. 가중치·데이터 믹스·학습 설정·코드를 모든 단계에서 공개해 재현 가능성을 강조했다.
</div>

AMD가 자사 하드웨어·소프트웨어 스택만으로 프론티어급 언어모델을 처음부터 끝까지 학습할 수 있음을 입증하는 결과물을 내놨다. ROCm 블로그를 통해 공개된 Instella-MoE는 "완전 개방형(fully open)" 을 표방하며, 단순히 가중치만 푸는 오픈웨이트를 넘어 학습 데이터 믹스, 학습 구성, 중간 체크포인트, 추론 코드까지 전부 배포한다. 사실상 엔비디아 CUDA 생태계에 대한 정면 대안 실험이다.

## 무엇을 공개했나

Instella-MoE는 디코더 전용 MoE 구조로, 27개 디코더 레이어와 히든 사이즈 2048을 갖는다. MoE 레이어는 공유 전문가 2개 + 라우팅 전문가 6개(총 64개 후보 중 선택) 구성이며, 토큰당 28억 파라미터만 활성화한다. 사전학습에는 웹·코드·수학·과학 데이터 7.1조 토큰이 투입됐고, 이후 미드트레이닝 → 컨텍스트 4K→64K 확장 → SFT → DPO → 강화학습(RL)의 다단계 파이프라인을 거쳤다. AMD는 이 모든 단계의 체크포인트를 허깅페이스에 올렸다.

<div class="article-stats">
<strong>총 파라미터</strong> 160억 (토큰당 활성 28억)<br/>
<strong>학습 하드웨어</strong> AMD Instinct MI300X · MI325X (ROCm)<br/>
<strong>사전학습 토큰</strong> 7.1조<br/>
<strong>컨텍스트 길이</strong> 4K → 64K 확장<br/>
<strong>라이선스</strong> Research RAIL (연구·학술용)
</div>

## 아키텍처·시스템 혁신

핵심은 두 가지 기법이다. 첫째 **Gated MLA**(Gated Multi-head Latent Attention)는 다중 헤드 잠재 어텐션에 입력 조건부 게이트를 곱해 저효용 어텐션 반응을 선택적으로 억제, 표현력을 높인다. 둘째 **FarSkip-Collective**는 전문가 병렬 학습에서 통신과 연산을 겹쳐 통신 병목(버블)을 줄인다. AMD에 따르면 FarSkip-Collective는 사전학습을 12.7% 가속했고, SGLang 추론 프레임워크와 결합 시 첫 토큰 지연(TTFT)을 최대 39.2% 낮췄다. 강화학습은 AMD Instinct GPU 위에서 오픈소스 Miles RL 프레임워크로 처리됐다.

## 성능은 어느 정도인가

| 구분 | Instella-MoE | 비교 대상 |
|---|---|---|
| Base 평균 | 76.7 (개방형 최고) | Moonlight-16B-A3B 76.2 · OLMo-3-7B 70.1 |
| WinoGrande | 86.5 (평가 모델 중 1위) | — |
| HumanEval+ | 65.7 | — |
| Think 평균 | 73.22 (개방형 최고) | Olmo3-7B-Think 71.97 · Gemma-4-E4B 70.47 |
| IFEval (RL 후) | 83.70 (DPO 77.08→) | — |

Base 모델은 완전 개방형 모델 중 최고 평균 76.7을 기록해 Moonlight-16B-A3B(76.2)를 앞섰고, 오픈웨이트 강자 Qwen3.5-4B-Base(79.5)에만 뒤졌다. 후처리를 마친 Think 모델은 평균 73.22로 역시 개방형 최고치를 찍었다. 주목할 점은 이 성능을 토큰당 28억 파라미터만 켜서 달성했다는 것 — 두 배 이상 파라미터를 쓰는 밀집 모델(OLMo-3-7B)을 능가한다.

<div class="article-callout tip">
"완전 개방형"과 "상업적 사용 가능"은 다르다. Instella-MoE 가중치는 <strong>Research RAIL 라이선스</strong>로 연구·학술 목적에 한정된다. 상용 서비스에 그대로 얹을 수 있는 모델이 아니라는 점에 유의해야 한다.
</div>

## 의미와 전망

AI 학습 인프라는 사실상 엔비디아 CUDA가 독점해 왔다. Instella-MoE의 진짜 메시지는 벤치마크 점수보다 "엔비디아 없이도 MoE 프론티어 학습의 전 과정(사전학습→RL)이 AMD 스택에서 돌아간다"는 실증에 있다. Primus·Miles·SGLang 같은 오픈 프레임워크와 결합해 재현 레시피 전체를 공개한 것도 학계·오픈소스 진영에는 큰 자산이다. 다만 연구용 라이선스 제약과 아직 미공개인 기술 보고서, 검증되지 않은 다국어 능력은 남은 과제다. 그럼에도 하드웨어 2위 사업자가 소프트웨어 종속을 깨려는 신호로서 이번 공개의 상징성은 작지 않다.

<div class="article-keypoints">
<ul>
<li>AMD가 총 160억·활성 28억 파라미터의 완전 개방형 MoE 'Instella-MoE-16B-A3B'를 공개 — 전 학습 단계 가중치·데이터·코드 배포.</li>
<li>엔비디아 GPU 없이 Instinct MI300X·MI325X + ROCm만으로 사전학습부터 강화학습까지 전 과정 훈련.</li>
<li>Base 평균 76.7·Think 평균 73.22로 개방형 모델 중 최고, 토큰당 28억 활성으로 더 큰 밀집 모델 능가.</li>
<li>Gated MLA·FarSkip-Collective로 학습 12.7% 가속·TTFT 최대 39.2% 단축. 단, 라이선스는 연구용(Research RAIL).</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://rocm.blogs.amd.com/artificial-intelligence/instella-moe/README.html" target="_blank" rel="noopener">AMD ROCm 블로그 — Introducing Instella-MoE</a><br/>
<a href="https://huggingface.co/amd/Instella-MoE-16B-A3B-Base" target="_blank" rel="noopener">Hugging Face — amd/Instella-MoE-16B-A3B-Base</a><br/>
<a href="https://huggingface.co/amd/Instella-MoE-16B-A3B-Think" target="_blank" rel="noopener">Hugging Face — amd/Instella-MoE-16B-A3B-Think</a><br/>
<a href="https://github.com/AMD-AGI/Instella-MoE" target="_blank" rel="noopener">GitHub — AMD-AGI/Instella-MoE (학습 코드)</a>
</div>
