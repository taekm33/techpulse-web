---
title: "Moonshot AI, 2.8조 파라미터 Kimi K3 공개 — 오픈웨이트 AI 프론티어 격차 사라지나"
summary: "중국 AI 스타트업 Moonshot AI가 7월 27일 역대 최대 규모 오픈웨이트 모델인 Kimi K3(2.8조 파라미터)를 공개했다. 코딩·에이전트 벤치마크에서 Claude Fable 5, GPT-5.6 Sol에 필적하는 성능을 보이며, 미국 주요 폐쇄형 AI 기업들의 가격 전략에 정면 도전장을 내밀었다."
category: "ai-news"
date: "2026-07-27"
readingTime: 5
tags: ["Kimi K3", "오픈소스AI", "Moonshot AI", "중국AI", "LLM"]
---

<div class="article-tldr">
중국 스타트업 Moonshot AI가 2026년 7월 27일 Kimi K3의 전체 가중치(웨이트)를 Hugging Face에 공개했다. 2.8조(2.8 trillion) 파라미터로 역대 최대 규모 오픈웨이트 모델이며, 코딩·에이전트 벤치마크에서 Claude Fable 5·GPT-5.6 Sol에 근접하거나 앞서는 성능을 냈다. 다운로드만 하면 누구나 자체 인프라에서 실행·파인튜닝·배포할 수 있어 미국 주요 AI 기업들의 유료 API 시장에 직접적인 충격을 주고 있다.
</div>

2026년 AI 시장의 가장 뜨거운 화두는 "오픈웨이트 모델이 얼마나 빠르게 프론티어에 도달하는가"였다. 그 답이 7월 27일 나왔다. Moonshot AI가 Kimi K3의 전체 가중치를 무료로 공개하면서, 누구나 다운로드 한 번으로 세계 최고 수준의 AI 모델을 자체 서버에서 돌릴 수 있게 됐다.

## 수치로 본 Kimi K3

Kimi K3는 혼합 전문가(Mixture-of-Experts, MoE) 아키텍처를 채택했다. 전체 896개의 전문가 네트워크 중 토큰당 16개만 활성화해, 실제 추론에 쓰이는 파라미터는 약 500억(50B) 개 수준이다. 이 설계 덕분에 2.8조 파라미터라는 천문학적 규모에도 불구하고 추론 비용을 현실적인 수준으로 유지할 수 있다.

<div class="article-stats">
<strong>총 파라미터</strong> 2.8조 (역대 오픈웨이트 모델 최대)<br/>
<strong>활성 파라미터</strong> 약 500억 (토큰당 16개 전문가 활성화)<br/>
<strong>컨텍스트 윈도우</strong> 100만 토큰<br/>
<strong>Program Bench 점수</strong> 77.8 (전체 1위)<br/>
<strong>Arena 프론트엔드 코드 리더보드</strong> 1,679점 (1위, Claude Fable 5 1,631점 제쳐)<br/>
<strong>다운로드 용량</strong> 약 594 GB (MXFP4 safetensors 기준)
</div>

Moonshot이 공개한 두 가지 아키텍처 혁신은 **Kimi Delta Attention**과 **Attention Residuals**다. 회사 측에 따르면 이 기술은 100만 토큰 컨텍스트에서 디코딩 속도를 최대 6.3배 끌어올린다. 100만 토큰이면 긴 소설 한 편이나 수천 페이지 분량의 코드베이스를 한 번에 처리할 수 있는 수준이다.

## 벤치마크: 어디서 1위, 어디서 4위

벤치마크 결과는 솔직하다. Artificial Analysis의 AI 인텔리전스 지수에서 K3는 4위를 기록했다. 1위 Claude Fable 5, 2위 GPT-5.6 Sol, 3위 Claude Opus 4.8에 뒤처진다. Moonshot 스스로도 이 격차를 인정했다.

| 벤치마크 | Kimi K3 | Claude Fable 5 | GPT-5.6 Sol |
|---|---|---|---|
| AI 인텔리전스 지수 | 57점 (4위) | 1위 | 2위 |
| Program Bench | **77.8 (1위)** | — | — |
| Terminal Bench 2.1 | 2위 | — | 1위 |
| BrowseComp | **1위** | — | — |
| Arena 프론트엔드 코드 | **1,679점 (1위)** | 1,631점 | 1,618점 |

그러나 집계 지수보다 중요한 것은 개별 지표다. 코딩·에이전트·웹 리서치 등 개발자가 실제로 많이 쓰는 작업에서 K3는 이미 세계 1위다. "종합 1위가 아니어도 된다. 내가 쓰는 작업에서 1위면 충분하다"는 것이 오픈웨이트 생태계의 논리다.

<div class="article-callout info">
<strong>오픈웨이트 vs 오픈소스</strong><br/>
Moonshot은 학습 코드나 데이터셋이 아닌 학습된 모델 가중치만 공개했다. 라이선스는 수정 MIT 라이선스(Modified MIT License)로 보고된다. 대부분의 실용적 목적 — 자체 서버 배포, 파인튜닝, 상업적 사용 — 에는 충분한 개방성이다. 단, 완전한 재현을 원하는 연구자에게는 제한이 있다.
</div>

## 자체 운영의 현실: 스토리지 1.4 TB

K3를 직접 돌리려면 상당한 인프라가 필요하다. Hugging Face 커뮤니티 분석에 따르면 MXFP4 기준 스토리지만 약 1.4 테라바이트에 달하고, 여기에 런타임 오버헤드와 KV 캐시를 더하면 더 늘어난다. 개인 PC나 소규모 스타트업에는 부담이지만, 이미 GPU 인프라를 보유한 기업·연구소·대형 AI 팀에게는 충분히 현실적인 선택지다.

즉시 시작하려는 개발자를 위해 Together AI와 Modal은 가중치 공개 당일(day-zero)부터 호스팅 접근을 제공하기로 했다.

<div class="article-callout tip">
<strong>개발자를 위한 빠른 시작 경로</strong><br/>
자체 인프라가 없다면 Together AI 또는 Modal의 Kimi K3 호스팅 API를 이용하면 된다. 두 서비스 모두 가중치 공개 당일부터 접근 가능하다. 코딩·에이전트 작업에서의 높은 성능을 저렴한 비용으로 바로 테스트해볼 수 있는 최단 경로다.
</div>

## 지정학적 파장: 수출 통제의 한계

K3의 공개는 단순한 기술 이벤트가 아니다. 미국 정부는 고성능 AI 칩 수출 통제를 통해 중국 AI의 발전 속도를 늦추려 해왔다. 그런데 Moonshot은 그 제약 속에서도 2.8조 파라미터 모델을 학습시켰고, 이제 가중치를 전 세계에 무료 배포하고 있다.

"파일을 배포하고 나면 봉쇄할 수 없다(you can't embargo a file once it's already in circulation)." 가중치가 인터넷에 풀리는 순간, 어떤 서버에서도 구동할 수 있다. 미국 정부가 중국 AI 모델 접근 제한을 검토 중인 상황에서, 이미 배포된 가중치를 회수하는 것은 사실상 불가능에 가깝다.

백악관은 중국 오픈소스 모델 접근 제한을 검토 중이며, 트럼프 행정부는 Kimi K3가 미국 기술을 도용했다고 주장했다. 중국 상무부 역시 AI 모델과 학습 데이터의 대외 수출 통제를 검토 중인 것으로 알려졌다. AI 모델이 전략 자산임을 양국 모두가 인식하고 있다는 방증이다.

## 서구 AI 기업에 미치는 영향

Moonshot의 기업 가치는 5월 20억 달러 자금 조달 당시 200억 달러로 평가됐고, IPO 전 최대 500억 달러 가치로 투자 유치를 준비 중이라는 보도도 나왔다. 연간 반복 매출(ARR)은 이미 3억 달러에 달한다. K3 오픈소스화는 개발자 생태계에 대한 포석이자, 홍콩 IPO를 앞두고 브랜드 가치를 극대화하는 전략이기도 하다.

OpenAI, Anthropic, Google에게 진짜 위협은 K3가 당장 자신들을 추월하는 것이 아니다. 위협은 "K3 정도면 충분하다"고 판단하는 기업들이 늘어나는 것이다. 오픈웨이트 모델은 추론 비용을 API 가격이 아닌 인프라 비용으로 바꾼다. 마진이 투명해지는 순간, 기존 AI 기업들의 가격 정책이 흔들린다.

<div class="article-keypoints">
<ul>
<li>Moonshot AI가 2026년 7월 27일 2.8조 파라미터 Kimi K3 가중치를 Hugging Face에 무료 공개 — 역대 최대 오픈웨이트 모델.</li>
<li>코딩 벤치마크(Program Bench, Arena 프론트엔드 코드)에서 Claude Fable 5·GPT-5.6 Sol을 앞서 1위 달성.</li>
<li>AI 인텔리전스 종합 지수는 4위 — Moonshot 스스로 상위 2개 폐쇄형 모델과의 격차를 인정, 선제적 솔직함 발휘.</li>
<li>수정 MIT 라이선스로 상업적 배포·파인튜닝 허용 — MXFP4 기준 약 1.4 TB 스토리지 필요.</li>
<li>미국 수출 통제의 실효성에 의문 — 가중치가 배포된 이후 회수 사실상 불가능, 지정학적 파장 주목.</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://huggingface.co/moonshotai/Kimi-K3" target="_blank" rel="noopener">Hugging Face — Kimi K3 모델 페이지</a><br/>
<a href="https://glitchwire.com/news/kimi-k3-open-sources-today-the-frontier-gap-just-shrunk/" target="_blank" rel="noopener">Glitchwire — Kimi K3 Open-Sources Today. The Frontier Gap Just Shrunk.</a><br/>
<a href="https://startupfortune.com/moonshot-ai-releases-kimi-k3-open-weights-making-the-worlds-largest-open-weight-model-free-to-download/" target="_blank" rel="noopener">Startup Fortune — Moonshot AI releases Kimi K3 open weights</a>
</div>
