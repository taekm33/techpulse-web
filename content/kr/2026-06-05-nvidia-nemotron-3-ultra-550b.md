---
title: "NVIDIA 'Nemotron 3 Ultra 550B' 공개 — 미국 오픈웨이트 1위, 중국엔 6점 차"
summary: "엔비디아가 컴퓨텍스 2026에서 총 550B 파라미터의 하이브리드 MoE 모델을 공개했다. 미국 오픈웨이트 1위를 달성했지만, 중국 Kimi K2.6에는 인텔리전스 점수 6점 차로 여전히 뒤진다."
category: "ai-news"
date: "2026-06-05"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "오픈소스AI", "LLM", "Computex2026"]
---

<div class="article-tldr">
<strong>3줄 요약</strong>
<ul>
<li>엔비디아가 컴퓨텍스 2026에서 총 550B 파라미터(활성 55B)의 Nemotron 3 Ultra를 발표, 미국 오픈웨이트 AI 최강 모델 등극</li>
<li>Artificial Analysis 인텔리전스 지수 48점으로 미국 1위이나, 중국 Kimi K2.6(54점)에 여전히 뒤처짐</li>
<li>추론 속도 300+ 토큰/초로 동급 중국 모델 대비 최대 6배 빠른 속도 경쟁력 확보</li>
</ul>
</div>

엔비디아(NVIDIA)가 2026년 6월 1일 컴퓨텍스(Computex) 키노트에서 **Nemotron 3 Ultra**를 공개했다. 총 5500억(550B) 파라미터, 활성 파라미터 550억(55B)의 혼합전문가(MoE) 방식 하이브리드 Mamba-Transformer 아키텍처로 구성된 이 모델은 6월 4일 허깅페이스(HuggingFace), OpenRouter, NIM을 통해 공식 출시됐다.

Artificial Analysis와 NVIDIA가 공동 평가한 결과, Nemotron 3 Ultra는 인텔리전스 인덱스에서 **48점**을 기록하며 미국 오픈웨이트 모델 중 1위에 올랐다. 이는 구글의 Gemma 4 31B(39점), Nemotron 3 Super(36점), OpenAI의 gpt-oss-120b(33점)를 크게 앞지르는 수치다. 그러나 중국 Moonshot의 Kimi K2.6(54점), GLM-5.1(51점), MiniMax-M2.7(49점)에는 여전히 뒤처지며, 미·중 오픈소스 AI 격차가 여전히 존재함을 확인했다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-value">550B</span>
<span class="stat-label">전체 파라미터 수</span>
</div>
<div class="stat-item">
<span class="stat-value">300+</span>
<span class="stat-label">토큰/초 추론 속도</span>
</div>
<div class="stat-item">
<span class="stat-value">1M</span>
<span class="stat-label">최대 컨텍스트 토큰</span>
</div>
</div>

## 속도가 핵심 차별화 포인트

Nemotron 3 Ultra의 가장 두드러진 경쟁 우위는 **추론 속도**다. DeepInfra 사전 출시 엔드포인트에서 300토큰/초 이상을 기록했으며, 이는 동급 중국 모델(DeepSeek, Moonshot 등)의 50~100 토큰/초 대비 최대 6배 빠른 수치다. GB200 하드웨어에서 NVFP4 양자화를 적용하면 GLM-5.1 대비 5.9배, Kimi K2.6 대비 4.8배 처리량을 보인다.

<div class="article-callout tip">
<strong>활용 팁:</strong> Nemotron 3 Ultra는 NVFP4 양자화 버전도 함께 제공된다. 엔터프라이즈 환경에서 추론 비용을 최소화하면서도 높은 지능을 원한다면 NVFP4 버전을 검토하자. GB200 기준 Kimi K2.6 대비 4.8배 빠른 처리량을 제공한다.
</div>

## 에이전트 특화 설계

NVIDIA는 이 모델을 장시간 실행되는 에이전트 태스크에 최적화했다고 밝혔다. 1M 토큰 컨텍스트를 지원하며, RULER 벤치마크에서 94.7점을 기록했다. PinchBench 에이전트 생산성 90.0점, SWE-Bench Verified 71.9점으로 코딩 에이전트 성능도 입증했다. 다만 코딩 세부 벤치마크와 장기 계획 수립에서는 Kimi K2.6, GLM-5.1에 뒤처지는 모습을 보였다.

<div class="article-callout info">
<strong>라이선스 안내:</strong> Nemotron 3 Ultra는 NVIDIA Open Model License를 적용해 상업적 사용이 가능하다. 모델 가중치뿐 아니라 훈련 레시피와 주요 학습 데이터 일부도 함께 공개됐다.
</div>

## 주요 벤치마크 비교

| 벤치마크 | Nemotron 3 Ultra | Kimi K2.6 | GLM-5.1 | Qwen3.5 |
|---|---|---|---|---|
| 에이전트 생산성 | 91% | 91% | 84% | 89% |
| 장기 계획 수립 | 33% | 29% | 40% | 30% |
| 코딩 | 54% | 67% | 64% | 53% |
| 지시 따르기 | 82% | 74% | 77% | 78% |
| 전문 업무 처리 | 56% | 56% | 46% | 53% |
| 장문 컨텍스트 | 95% | N/A | N/A | 90% |

인텔리전스 인덱스 점수만 보면 중국 모델이 앞서지만, 지시 따르기·전문 업무 처리·장문 컨텍스트에서는 Nemotron 3 Ultra가 우위를 보인다. 속도와 비용 효율성까지 고려하면 미국 기업 환경에서 충분히 경쟁력 있는 선택지다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>미국 오픈웨이트 AI 모델 중 처음으로 인텔리전스 지수 48점 달성</li>
<li>중국 Kimi K2.6(54점)에 6점 차로 뒤처지며 미·중 AI 격차는 여전히 존재</li>
<li>추론 속도 300+ 토큰/초로 동급 중국 모델 대비 3~6배 빠름</li>
<li>1M 토큰 컨텍스트와 에이전트 특화 설계로 장기 실행 태스크에 강점</li>
<li>상업적 이용 가능한 NVIDIA Open Model License, 훈련 레시피까지 오픈소스 공개</li>
</ul>
</div>
