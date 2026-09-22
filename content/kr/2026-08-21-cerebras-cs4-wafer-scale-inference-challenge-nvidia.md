---
title: "세레브라스 CS-4 공개 — '웨이퍼 한 장짜리 칩' 3장으로 GPU보다 최대 30배 빠른 추론"
summary: "세레브라스가 차세대 웨이퍼 스케일 엔진 WSE-3 터보 3장으로 만든 랙 규모 시스템 CS-4를 공개했다. AI 연산 750 PFLOPS, GPT-OSS-120B에서 사용자당 초당 4,400토큰 이상으로 GPU 대비 최대 30배 빠른 추론 속도를 주장하며, 와트당 처리량은 전작 CS-3의 최대 10배다. 첫 출하는 이번 분기다."
category: "ai-news"
date: "2026-08-21"
draft: true
readingTime: 6
tags: ["세레브라스", "AI칩", "추론", "엔비디아", "웨이퍼스케일"]
---

<div class="article-tldr">
세레브라스 시스템즈(NASDAQ: CBRS)가 8월 18일 CS-4를 공개했다. 손바닥만 한 GPU 대신 사람 손바닥의 수십 배 크기인 '웨이퍼 스케일 엔진'을 통째로 쓰는 회사로, 이번엔 신형 WSE-3 터보 3장을 한 랙에 묶었다. AI 연산 750 PFLOPS, 메모리 대역폭 129.6 PB/s, GPT-OSS-120B 추론에서 사용자당 초당 4,400토큰 이상으로 GPU 기반 시스템 대비 최대 30배 빠르다고 주장한다. 와트당 처리량은 전작 CS-3의 최대 10배. 초점은 학습이 아니라 '추론 속도'이며, 엔비디아 GPU가 지배해 온 추론 시장을 정면으로 겨냥한다. 첫 출하는 이번 분기(2026년 3분기)다.
</div>

세레브라스가 자사 표현으로 "업계에서 가장 빠른 AI 가속기"라는 CS-4를 발표했다. 대부분의 AI 칩이 작은 실리콘 다이 여러 개를 잇는 방식이라면, 세레브라스는 웨이퍼 한 장을 통째로 하나의 프로세서로 쓰는 독특한 노선을 고수해 왔다. CS-4는 그 최신형 웨이퍼 3장을 하나의 랙 규모 시스템으로 묶은 것으로, 새 플랫폼 아키텍처 '넥서스(Nexus)'의 첫 제품이다.

## 무엇을 공개했나

CS-4는 신형 WSE-3 터보(WSE-3T) 3장으로 구성된다. 시스템 전체로는 AI 연산 750 PFLOPS, I/O 대역폭 7.2 Tbps, 메모리 대역폭 129.6 PB/s를 낸다. 컴퓨트 패브릭 대역폭은 160.5 PB/s로 뛰고, 웨이퍼 간 지연은 최저 2마이크로초까지 떨어져 대규모 클러스터 구성과 50조 파라미터 이상 모델 지원이 가능하다고 회사는 설명한다. 핵심 메시지는 '속도가 곧 생산성'이라는 것이다. 앤드루 펠드먼 CEO는 "빠른 추론은 곧 작은 모델을 뜻하던 시절이 있었지만, CS-4는 가장 큰 프런티어 모델에서 업계 최고 속도를 낸다"고 밝혔다.

<div class="article-stats">
<strong>AI 연산</strong> 750 PFLOPS (CS-3의 6배)<br/>
<strong>메모리 대역폭</strong> 129.6 PB/s<br/>
<strong>추론 속도</strong> 사용자당 4,400+ TPS (GPT-OSS-120B)<br/>
<strong>GPU 대비</strong> 최대 30배 빠름 · 와트당 처리량 CS-3의 최대 10배<br/>
<strong>구성</strong> WSE-3 터보 3장 · 넥서스 플랫폼 1호<br/>
<strong>첫 출하</strong> 2026년 3분기
</div>

## 숫자가 말하는 것

세레브라스가 내세운 벤치마크는 GPT-OSS-120B 기준이다. 동일 프롬프트에서 CS-4가 사용자당 초당 4,400토큰 이상을 뽑아, GPU 솔루션 대비 최대 30배 빠르다는 것이 핵심 주장이다. 숀 리 CTO는 "30배 빠르다는 건 응답이 빠르게 느껴지는 데 그치지 않는다. 같은 벽시계 시간 안에 열 배 넘는 추론·검증·도구 사용 여지를 준다"며 에이전트형 워크로드에서의 실익을 강조했다. 다만 세레브라스도 각주에서 실제 처리량은 모델 구조·문맥 길이·정밀도·서빙 구성에 따라 달라진다고 명시했다. 벤치마크가 특정 오픈웨이트 모델 한 종에 기반한 자체 측정치라는 점은 감안해야 한다.

| 지표 | CS-3 (웨이퍼 1장) | CS-4 (웨이퍼 3장) |
|---|---|---|
| AI 연산 | 125 PFLOPS | 750 PFLOPS |
| 메모리 대역폭 | 21.6 PB/s | 129.6 PB/s |
| 온칩 패브릭 대역폭 | 26.7 PB/s | 160.5 PB/s |
| 시스템 I/O 대역폭 | 1.2 Tbps | 7.2 Tbps |
| I/O 지연 | 5마이크로초 | 2마이크로초 |

## 칩과 시스템 설계

CS-4의 엔진 WSE-3 터보는 여전히 '역대 최대 AI 프로세서'다. 4조 개 트랜지스터와 90만 개 AI 최적화 코어를 46,225제곱밀리미터 실리콘에 담고, 44GB SRAM을 웨이퍼에 직접 통합했다. 전작 대비 웨이퍼당 AI 연산은 250 PFLOPS로, 메모리 대역폭은 43.2 PB/s로 각각 두 배가 됐다. 시스템 설계도 바꿨다. 연산부를 뒤쪽에 수직으로 붙이는 '백팩(Backpack)' 모듈로 전원부와 분리해, 배치 시간을 며칠에서 몇 시간으로 줄이고 부품 수를 절반으로 낮췄다고 밝혔다. 전력 변환 회로를 프로세서에서 약 50mm 떨어진 위치에서 0.5mm 수준까지 100배 가깝게 옮겨 보드 단 전력 손실을 거의 없앤 점도 특징이다.

<div class="article-callout tip">
'30배'라는 헤드라인은 학습이 아니라 추론(inference), 그것도 '사용자당 토큰 생성 속도(TPS/user)' 기준이다. 총 처리량(throughput)이나 학습 성능과는 다른 지표이며, 코딩 에이전트·추론형 서비스처럼 응답 지연이 곧 제품 경험을 좌우하는 영역을 겨냥한 수치다.
</div>

## 왜 지금 중요한가

AI 지출의 무게중심이 학습에서 추론으로 옮겨가면서, 엔비디아 GPU가 사실상 독점해 온 추론 시장에 대안 아키텍처가 비집고 들어갈 틈이 커졌다. 세레브라스의 승부수는 '많은 작은 칩을 잇는 대신 웨이퍼를 통째로 쓴다'는 것으로, 칩 간 통신 병목을 줄여 속도에서 앞선다는 논리다. 다만 30배·10배 같은 수치는 독립 검증이 아닌 자체 벤치마크이며, 실제 워크로드·모델 크기별 성능은 3분기 출하 이후 외부 테스트로 가려질 것이다. 세레브라스는 OpenAI·G42·AWS 등을 주요 고객으로 두고 있으며, 이번 제품이 추론 경쟁 구도에 얼마나 균열을 낼지가 관전 포인트다.

<div class="article-keypoints">
<ul>
<li>세레브라스가 8월 18일 CS-4 공개 — 신형 WSE-3 터보 웨이퍼 3장으로 만든 랙 규모 시스템, 넥서스 플랫폼 1호</li>
<li>AI 연산 750 PFLOPS, 메모리 대역폭 129.6 PB/s, 웨이퍼 간 지연 최저 2μs, 50조 파라미터 이상 모델 지원 주장</li>
<li>GPT-OSS-120B 추론에서 사용자당 4,400+ TPS로 GPU 대비 최대 30배, 와트당 처리량은 CS-3의 최대 10배(자체 벤치마크)</li>
<li>WSE-3 터보: 트랜지스터 4조 개·코어 90만 개·SRAM 44GB, 웨이퍼당 연산·메모리 대역폭 각 2배</li>
<li>백팩 모듈·전력 변환 근접 배치 등 시스템 설계 개편, 첫 출하는 2026년 3분기 — 추론 시장에서 엔비디아 정조준</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://investors.cerebras.ai/news-releases/news-release-details/cerebras-unveils-cs-4-30-times-faster-gpu-based-solutions" target="_blank" rel="noopener">Cerebras — Cerebras Unveils CS-4: Up to 30 Times Faster than GPU-based Solutions (공식 보도자료)</a><br/>
<a href="https://www.hpcwire.com/off-the-wire/cerebras-introduces-cs-4-with-750-pflops-of-ai-compute/" target="_blank" rel="noopener">HPCwire — Cerebras Introduces CS-4 with 750 PFLOPS of AI Compute</a><br/>
<a href="https://www.techzine.eu/news/infrastructure/143699/cerebras-launches-cs-4-for-faster-ai-inference/" target="_blank" rel="noopener">Techzine — Cerebras launches CS-4 for faster AI inference</a><br/>
<a href="https://qz.com/cerebras-cs-4-server-system-ai-inference-081926" target="_blank" rel="noopener">Quartz — Cerebras CS-4 server system claims 30x faster AI inference</a>
</div>
