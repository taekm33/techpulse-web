---
title: "메타, 노트북에서 도는 30B 오픈 에이전트 모델 'Muse Glimmer' 공개"
summary: "메타 슈퍼인텔리전스 랩이 8월 10일 300억 파라미터 에이전트 모델 Muse Glimmer를 Apache 2.0 라이선스로 공개했다. 4비트 양자화로 24GB 소비자 GPU 한 장이나 맥에서 완전 오프라인 구동되며, 폐쇄형 플래그십 Muse Spark를 증류해 만들었다."
category: "ai-news"
date: "2026-08-11"
readingTime: 6
tags: ["메타", "오픈웨이트", "AI에이전트", "로컬LLM", "Muse Glimmer"]
---

<div class="article-tldr">
메타 슈퍼인텔리전스 랩이 8월 10일 300억 파라미터 에이전트 모델 <strong>Muse Glimmer</strong>를 Apache 2.0 오픈웨이트로 공개했다. 폐쇄형 플래그십 Muse Spark를 증류(distillation)해 만든 이 모델은 4비트 양자화로 20GB 아래까지 줄여 24GB 소비자 GPU 한 장 또는 M4/M5 Max 맥에서 인터넷 없이 돈다. 툴 호출·코딩·화면 이해까지 하는 로컬 에이전트를 겨냥했고, 저커버그의 "오픈소스 AI 규제 완화" 주장과 맞물려 나왔다.
</div>

메타가 클라우드 없이 개인 기기에서 돌아가는 에이전트 모델을 오픈웨이트로 풀었다. 8월 10일 메타 슈퍼인텔리전스 랩(Meta Superintelligence Labs)이 공개한 **Muse Glimmer**는 300억(30B) 파라미터 멀티모달 모델로, 가중치가 Apache 2.0 라이선스로 허깅페이스에 즉시 올라왔다. 핵심은 크기가 아니라 "어디서 도는가"다. 대부분의 프런티어 모델이 데이터센터와 네트워크에 묶여 있는 반면, Glimmer는 소비자 GPU 한 장이나 맥북 한 대에서 오프라인으로 상시 구동되도록 설계됐다.

## Muse Spark를 증류한 '작은 플래그십'

Glimmer는 처음부터 새로 훈련한 모델이 아니라, 메타의 폐쇄형 최상위 모델 **Muse Spark**의 출력을 로짓 증류(logit distillation)로 옮겨 담은 압축판이다. 메타는 이를 세 단계로 만들었다. 프리트레이닝에서 Muse Spark 출력으로 증류하고, 미드트레이닝에서 더 긴 컨텍스트와 에이전트 중심 데이터·추론 흔적을 학습시킨 뒤, 포스트트레이닝에서 지도학습·온폴리시 증류·강화학습을 일반/추론/코딩/에이전트 영역에 걸쳐 결합했다.

결과물은 폐쇄형 Spark의 능력 일부를 "다운로드 가능한 형태"로 옮겨온 셈이다. Spark는 여전히 가중치 비공개로 남고, 작은 Glimmer만 내려받아 파인튜닝·자체 호스팅할 수 있다.

<div class="article-stats">
<strong>모델 규모</strong> 300억 파라미터(비전 타워 포함), 밀집형 causal transformer<br/>
<strong>라이선스</strong> Apache 2.0 (상업적 이용·수정 허용)<br/>
<strong>컨텍스트</strong> 131,072+ 토큰 · 지식 컷오프 2026-01-04<br/>
<strong>입출력</strong> 텍스트+이미지 입력, 텍스트 출력 · 100개 이상 언어
</div>

## 30B를 24GB에 밀어넣은 방법

30B 모델을 풀정밀도로 올리면 55GB가 넘는 메모리가 필요해 어떤 소비자 GPU에도 들어가지 않는다. 메타는 가중치를 약 4비트로 양자화해 언어모델 부분을 20GB 아래로 줄였다. 남는 공간에 이미지 이해용 퍼셉션 인코더, KV 캐시, 그리고 추론 가속용 드래프터까지 24GB 또는 32GB 범위 안에 함께 얹었다. 배포되는 양자화 빌드는 두 종류다.

| 빌드 | 목표 VRAM | 평균 성능 저하 |
|---|---|---|
| K-Quant-Dynamic | 32GB | 0.2% |
| K-Quant-17GB | 24GB | 1.0% |

성능 저하는 15개 표준 벤치마크의 정확도 지표 평균으로, 메타는 "에이전트 과제에서 저하가 사실상 없다"고 밝혔다. 속도는 DFlash라는 블록 단위 추측 디코딩(speculative decoding)으로 끌어올렸다. 드래프터가 한 번에 16토큰 블록을 제안하고 본 모델이 병렬 검증하는 방식으로, RTX 5090에서 초당 74.9 → 233.4 토큰(3.1배), M5 Max에서 26.6 → 50.2 토큰, M4 Max에서 23.7 → 37.8 토큰으로 빨라졌다.

## 벤치마크: 에이전트·추론은 앞서고, 컴퓨터 조작은 뒤진다

메타는 같은 체급인 Gemma4-31B, Qwen3.6-27B와 비교했다. Glimmer는 MCP Atlas에서 75.5점으로 두 경쟁 모델(54.2·62.5)을 크게 앞섰고, DeepSearch QA 74.6, SWE-Bench Pro 51.2, 추론 벤치인 AIME 2026 94.7, IFBench 77.0에서도 우위를 보였다. 반면 화면·터미널을 직접 조작하는 작업에서는 Qwen3.6-27B가 OSWorld-Verified 75.6(Glimmer 65.9), TerminalBench 2.1에서 앞섰다. 즉 에이전트 오케스트레이션과 추론에는 강하지만, 컴퓨터 조작 계열은 아직 약점이라는 뜻이다.

<div class="article-callout tip">
실무자라면 벤치마크 승패보다 "무엇을 오프라인·온프레미스로 옮길 수 있는가"가 핵심이다. 데이터 잔류(residency)·오프라인 구동·지연시간 제약 때문에 클라우드 호출이 어려운 헬스케어·법률·금융·공공 분야의 로컬 에이전트가 1순위 후보다. 다만 메타는 모델을 그대로 엔드포인트로 노출하지 말고 시스템 차원의 가드레일을 얹으라고 권고했다.
</div>

## 생태계와 맥락

가중치는 허깅페이스에서 바로 받을 수 있고, Ollama·LM Studio·llama.cpp·ExecuTorch·MLX 등 로컬/엣지 프레임워크와 vLLM·SGLang 서빙, Together AI·Fireworks·OpenRouter 같은 호스팅 파트너 연동이 순차 제공된다. 하드웨어 최적화는 AMD·Arm·Dell·Intel·NVIDIA와 함께 진행 중이다.

발표는 저커버그가 미국 정부에 오픈소스 AI에 대한 규제 장벽을 낮추라고 촉구하는 흐름과 맞물려 나왔다. 강력한 모델을 자유롭게 배포할 것인가, 더 엄격히 통제할 것인가를 둘러싼 미국 내 논쟁에 메타가 "다운로드 가능한 30B 에이전트 모델"이라는 실물을 던진 셈이다. 안전 측면에서 메타는 Glimmer가 자사 Advanced AI Scaling Framework의 '프런티어 AI' 기준에는 해당하지 않으며 화학·생물·사이버·통제상실 위험을 '보통 이하'로 평가했다고 밝혔다.

<div class="article-keypoints">
<ul>
<li>메타가 8월 10일 300억 파라미터 에이전트 모델 Muse Glimmer를 Apache 2.0 오픈웨이트로 공개.</li>
<li>폐쇄형 Muse Spark를 증류, 4비트 양자화로 24GB 소비자 GPU·맥에서 완전 오프라인 구동.</li>
<li>DFlash 추측 디코딩으로 RTX 5090에서 3.1배(233 tok/s) 가속.</li>
<li>MCP Atlas·DeepSearch QA·SWE-Bench Pro는 앞서고, OSWorld·터미널 작업은 Qwen3.6-27B에 뒤짐.</li>
<li>저커버그의 오픈소스 AI 규제 완화 주장과 맞물려 미국 내 개방 논쟁을 다시 자극.</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model" target="_blank" rel="noopener">Meta AI Research — Introducing Muse Glimmer (공식 발표)</a><br/>
<a href="https://huggingface.co/collections/meta-models/muse-glimmer" target="_blank" rel="noopener">Hugging Face — Muse Glimmer 모델 가중치</a><br/>
<a href="https://techcrunch.com/2026/08/10/metas-new-glimmer-ai-model-offers-a-hint-at-zuckerbergs-personal-intelligence-vision/" target="_blank" rel="noopener">TechCrunch — Meta's new Glimmer AI model</a><br/>
<a href="https://www.engadget.com/2233312/metas-open-source-muse-glimmer-model-can-run-on-a-single-computer/" target="_blank" rel="noopener">Engadget — Muse Glimmer runs on a single computer</a>
</div>
