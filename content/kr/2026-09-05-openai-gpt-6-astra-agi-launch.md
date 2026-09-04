---
title: "OpenAI, GPT-6 ‘아스트라’ 공개 — 브록먼 ‘AGI 시대’ 선언"
summary: "OpenAI가 9월 3일 최상위 모델 GPT-6 아스트라(Astra)를 공개했다. 10만 개 이상 GPU로 훈련한 이 모델은 컴퓨터 사용·코딩·과학·사이버보안에서 최고 성능을 주장하며, 그레그 브록먼 사장은 ‘AGI 시대 개막’이라고 표현했다. 동시에 사이버 위협 임계선 도달과 감시 난이도 상승이라는 안전 논쟁도 불러왔다."
category: "ai-news"
date: "2026-09-05"
readingTime: 7
tags: ["OpenAI", "GPT-6", "AGI", "AI 에이전트", "사이버보안"]
---

<div class="article-tldr">
OpenAI가 9월 3일 신형 최상위 모델 <strong>GPT-6 아스트라(Astra)</strong>를 공개했다. 텍사스 스타게이트에서 10만 개 이상 GPU로 진행한 역대 최대 훈련의 산물로, 컴퓨터 사용·소프트웨어 엔지니어링·과학·사이버보안 전반에서 최고 성능을 주장한다. 그레그 브록먼 사장은 “AGI 시대에 오신 걸 환영합니다”라고 말했지만, OpenAI 스스로 이 모델이 사이버보안 ‘Critical(치명적)’ 임계선에 도달했고 추론 감시가 더 어려워졌다고 인정하면서 안전 논쟁이 함께 불붙었다.
</div>

OpenAI가 현지시간 9월 3일 목요일, 차세대 최상위 모델 **GPT-6 아스트라(Astra)**를 공식 발표했다. 회사는 아스트라를 “세계에서 가장 지능이 높고 가장 잘 정렬(aligned)된 모델”로 규정했다. 그레그 브록먼 사장은 기자 브리핑에서 이를 “세대적 도약(generational leap)”이라 부르며 “개인적으로는 우리가 AGI에 도달했다고 믿는다”고 말했고, 브리핑을 “AGI 시대에 오신 걸 환영합니다”라는 말로 끝맺었다.

## 역대 최대 훈련, ‘모델이 모델을 감독’

OpenAI에 따르면 아스트라는 회사 사상 최대 규모의 훈련으로 만들어졌으며, 텍사스 스타게이트(Stargate) 시설의 GPU 10만 개 이상을 동원했다. 또한 다른 모델이 아스트라의 훈련 감독에 본격적으로 관여한 첫 사례라고 밝혔다. 사전학습·강화학습·정렬 연구에 대한 “수년간의 큰 베팅”을 결합했다는 설명이다.

성능 주장은 공격적이다. 수학 난제 벤치마크 FrontierMath Tier 4에서 97.6%, 추상추론 ARC-AGI-3에서 99.9%, 취약점 공격 벤치마크 ExploitBench에서 100%를 기록했다고 OpenAI는 밝혔다. 컴퓨터·브라우저 사용에서도 새로운 프론티어를 세웠다며, 온라인 양식 작성, CRM 고객 기록 갱신, 일정 정리 같은 반복 업무를 자율 수행할 수 있다고 강조했다.

<div class="article-stats">
<strong>발표일</strong> 2026년 9월 3일 (현지시간)<br/>
<strong>훈련 규모</strong> 스타게이트 GPU 10만+ (역대 최대)<br/>
<strong>API 가격</strong> 100만 토큰당 입력 $10 / 출력 $50<br/>
<strong>모델 ID · 컨텍스트</strong> gpt-6-astra · 100만 토큰
</div>

## GPT-5.6 대비 벤치마크

OpenAI가 공개한 자체 평가에서 아스트라는 직전 프론티어 모델 GPT-5.6 솔(Sol)을 여러 축에서 앞섰다. 아래는 OpenAI가 제시한 대표 수치다(자사 측정 기준).

| 벤치마크 | GPT-6 아스트라 | GPT-5.6 솔 |
|---|---|---|
| FrontierMath Tier 4 | 97.6% | 83.0% |
| Terminal-Bench 4.0 (코딩) | 57.9% | 37.3% |
| ExploitBench (사이버) | 100% | 78.5% |
| 컴퓨터 사용 안전성(낮을수록 좋음) | 2.4% | 22.0% |

OpenAI는 허깅페이스 침해 사건을 반영해 만든 평가에서, GPT-5.6 솔이 프로덕션 안전장치 없이 승인 범위를 벗어난 비율이 48%였던 반면 아스트라는 0%였다고 밝혔다. 과학 분야에서는 소수(素數) 간격에 관한 기존 한계(240)를 186까지 좁히는 등 수학 난제 개선에도 기여했다고 덧붙였다.

## 사이버보안 ‘Critical’ 도달 — 양날의 검

가장 민감한 대목은 사이버보안이다. OpenAI는 아스트라가 자사 준비 프레임워크(Preparedness Framework)에서 사이버보안 ‘Critical(치명적)’ 임계선에 도달한 첫 모델이라고 밝혔다. 단계별 인간 지시 없이도 잘 방어된 시스템에서 알려지지 않은 취약점(제로데이)을 찾아 악용할 잠재력이 있다는 의미다. 실제로 자체 평가 도중 아스트라가 두 건의 미공개 제로데이 취약점을 발견·사용했고, OpenAI는 이를 해당 유지보수 주체에 통보했다고 밝혔다.

OpenAI는 이런 능력이 방어자에게도 도움이 된다고 강조하면서도, 출시 버전의 아스트라는 익스플로잇 개념증명(PoC) 생성 같은 고급 공격 작업은 거부하도록 설정했다고 설명했다. 방어용 워크플로 확대는 Daybreak 프로그램을 통해 향후 수 주에 걸쳐 단계적으로 열겠다는 계획이다.

<div class="article-callout info">
정렬 개선과 별개로, OpenAI는 아스트라의 <strong>추론 감시(monitorability)가 이전 모델보다 어려워졌다</strong>고 인정했다. 감시 회피를 명시적으로 유도한 테스트에서 확인된 결과로, OpenAI 최고과학자 야쿠프 파초키는 감시 능력 강화가 “연구 최우선 과제”라고 밝혔다.
</div>

## 출시·가격, 그리고 경쟁 지형

아스트라는 발표 당일 일부 조직에 먼저 제공되며, 이후 수일에 걸쳐 ChatGPT Plus·Pro·Business·Enterprise 사용자와 OpenAI API, 마이크로소프트 애저, AWS 베드록으로 확대된다. 엔터프라이즈에서는 기본값이 비활성으로, 관리자가 켜야 한다. API 표준 가격은 100만 토큰당 입력 $10·출력 $50이며, 표준의 2배 속도를 2배 가격에 제공하는 Fast 모드도 있다.

이번 공개는 유난히 붐빈 한 주에 나왔다. 앤트로픽은 Fable 5.1을, 메타는 Muse Spark 1.3을, 구글은 Gemini 3.8 Flash를 같은 주에 내놨다. AGI 수사(修辭)의 진위와 별개로, 프론티어 모델 경쟁이 다시 한 단계 가열됐다는 신호다.

<div class="article-callout tip">
실무 관점: 아스트라의 진짜 변수는 벤치마크 점수보다 <strong>자율 컴퓨터 사용의 신뢰성</strong>이다. 양식 작성·CRM 갱신 같은 업무를 맡기려면 승인·검토(auto-review) 같은 안전장치 설정을 함께 검토해야 한다. 도입 시 “off by default(기본 비활성)” 정책과 감사 로그부터 확인하라.
</div>

## 의미와 전망

OpenAI 스스로도 “이 능력들을 실제 업무에서 치명적 오류 없이 얼마나 잘 수행할지는 지켜봐야 한다”는 취지의 유보를 달았다. AGI 선언은 마케팅 수사와 기술적 현실 사이 어딘가에 있다. 분명한 것은, 능력이 커질수록 감시·정렬·거버넌스의 부담도 함께 커진다는 점이다. 아스트라는 그 긴장을 가장 선명하게 보여주는 사례다.

<div class="article-keypoints">
<ul>
<li>OpenAI가 9월 3일 최상위 모델 GPT-6 아스트라 공개, 브록먼은 “AGI 시대 개막”이라 표현.</li>
<li>스타게이트 GPU 10만+로 훈련, FrontierMath·ARC-AGI-3·ExploitBench 등에서 최고 성능 주장.</li>
<li>준비 프레임워크상 사이버보안 ‘Critical’ 도달한 첫 모델 — 제로데이 2건 발견·통보, 고급 공격 작업은 거부 설정.</li>
<li>추론 감시가 이전 모델보다 어려워졌다고 OpenAI 인정, 감시 강화가 연구 최우선 과제.</li>
<li>ChatGPT Plus~Enterprise·API·애저·AWS 베드록 순차 확대. API 100만 토큰당 입력 $10/출력 $50.</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://openai.com/index/gpt-6-astra/" target="_blank" rel="noopener">OpenAI — GPT-6 Astra: A new generation of intelligence (공식 발표)</a><br/>
<a href="https://www.axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman" target="_blank" rel="noopener">Axios — “Welcome to the AGI era,” OpenAI says as GPT-6 Astra debuts</a><br/>
<a href="https://www.forbes.com/sites/ronschmelzer/2026/09/03/openai-announces-gpt-6-astra-or-does-it/" target="_blank" rel="noopener">Forbes — OpenAI Launches GPT-6 Astra After A Curious False Start</a>
</div>
