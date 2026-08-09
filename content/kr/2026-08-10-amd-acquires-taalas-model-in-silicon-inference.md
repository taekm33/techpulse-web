---
title: "AMD, 모델을 칩에 '각인'하는 Taalas 인수…추론 전용 실리콘 승부수"
summary: "AMD가 8월 6일 캐나다 스타트업 Taalas를 인수한다고 밝혔다. Taalas는 학습된 모델 가중치를 실리콘에 직접 새겨 넣는 '모델-인-실리콘' 방식으로, 범용성을 포기하는 대신 특정 모델의 추론 속도를 극단적으로 끌어올린다. 데모 칩은 Llama 3.1 8B에서 사용자당 초당 1만6000토큰 이상을 처리했다. 학습보다 추론 수요가 커지는 국면에서 GPU 대기업이 처음으로 이 기술을 사들였다."
category: "ai-news"
date: "2026-08-10"
readingTime: 6
tags: ["AMD", "Taalas", "AI칩", "인퍼런스", "반도체"]
---

<div class="article-tldr">
AMD가 8월 6일, 학습된 AI 모델을 실리콘에 <strong>직접 각인</strong>하는 토론토 스타트업 <strong>Taalas(탈라스)</strong>를 인수한다고 발표했다. Taalas는 모델의 구조와 가중치를 칩에 굳혀 넣어 <strong>범용성을 포기하는 대신 추론 속도를 극대화</strong>한다. 데모 칩(HC1)은 Llama 3.1 8B를 인코딩해 사용자당 <strong>초당 1만6000토큰 이상</strong>(Taalas 제시 약 1만7000토큰, 약 200W)을 냈다. 인수가는 비공개. 학습보다 추론 수요가 커지는 시점에, 대형 GPU 벤더가 '모델-인-실리콘' 기술을 사들인 <strong>첫 사례</strong>다.
</div>

AMD가 추론 전용 실리콘 경쟁에 한 발 더 들어갔다. 회사는 캐나다 토론토의 AI 칩 스타트업 Taalas를 인수하기로 합의했다고 8월 6일 밝혔다. Taalas는 범용 GPU에 모델을 얹어 돌리는 대신, 특정 모델의 아키텍처와 학습된 파라미터 자체를 칩 회로에 새겨 넣는 접근을 택한다. 그 결과 추론은 극단적으로 빨라지지만, 칩 하나는 사실상 하나의 모델에만 묶인다. 인수 금액은 공개되지 않았다.

## '모델-인-실리콘'이란

일반적인 AI 가속기는 외부 메모리에서 가중치를 계속 읽어 와 연산한다. 이때 병목은 연산기가 아니라 메모리 대역폭, 이른바 '메모리 월(memory wall)'이다. Taalas는 이 문제를 아예 우회한다. 모델 가중치를 마스크 ROM 형태로 칩 안에 고정해, 외부 메모리를 오가는 비용을 없애는 것이다. 대표 칩 HC1은 TSMC N6 공정에서 약 530억 개 트랜지스터로 Llama 3.1 8B 전체를 담았고, Taalas는 사용자당 초당 약 1만7000토큰(약 200W)을 낼 수 있다고 제시했다. 회사는 이를 엔비디아 H200·B200 대비 수십 배 빠른 수치라고 주장한다(제조사 주장, 독립 벤치마크로 아직 검증되지 않음).

<div class="article-stats">
<strong>발표</strong> 2026년 8월 6일 · AMD, Taalas 인수 합의<br/>
<strong>Taalas</strong> 2023년 토론토 설립 · 누적 투자 약 2억1900만 달러<br/>
<strong>데모 칩 HC1</strong> TSMC N6 · 약 530억 트랜지스터 · Llama 3.1 8B 인코딩<br/>
<strong>성능(제조사 제시)</strong> 사용자당 초당 약 1만7000토큰 · 약 200W<br/>
<strong>인수가</strong> 비공개
</div>

## 극단적 속도의 대가 — 유연성

이 방식의 약점은 분명하다. 가중치를 실리콘에 굳혀 넣으므로, 칩은 각인된 그 모델만 돌릴 수 있다. 모델이 바뀌면 새 칩을 떠야 한다. Taalas는 모델별로 약 100개 금속층 중 2개 층만 커스터마이즈해, 특정 모델용 칩을 TSMC에서 약 2개월 만에 찍어낼 수 있다고 설명한다. 그럼에도 '한 칩=한 모델'이라는 제약은 모델이 빠르게 교체되는 프런티어 영역보다는, 대량·장기 서빙되는 안정된 모델에 유리한 구조다.

| 항목 | 범용 GPU | Taalas 모델-인-실리콘 |
|---|---|---|
| 가중치 위치 | 외부 HBM 메모리 | 칩 내부에 각인 |
| 병목 | 메모리 대역폭 | 상당 부분 해소 |
| 유연성 | 여러 모델 실행 | 칩당 단일 모델 |
| 강점 | 범용·연구·학습 | 특정 모델 대량 추론 |

## AMD는 왜 샀나

AMD는 Taalas 칩을 자사 Instinct GPU 옆에 배치해, Helios 랙과 Epyc CPU에 함께 묶고 ROCm 소프트웨어로 프로그래밍하는 그림을 그린다. AMD AI 그룹 담당 임원은 목표가 '선택지'라며, 고객에게 "모든 AI 워크로드에 맞는 올바른 컴퓨팅"을 제공하는 것이라고 밝혔다. 즉 GPU를 대체하는 게 아니라, 추론이라는 특정 전장에서 GPU가 놓치는 효율을 메우는 보완재로 붙이겠다는 것이다.

<div class="article-callout info">
Taalas는 트랜스포머 전용 ASIC을 만드는 Etched 등과 함께 '특정 워크로드를 하드웨어에 굳힌다'는 흐름의 대표주자다. 창업자 류비사 바이치는 앞서 AI 칩 기업 텐스토렌트(Tenstorrent)를 세운 인물로, 2026년 2월 스텔스를 벗은 지 반년 만에 대형 GPU 벤더에 안겼다.
</div>

## 관전 포인트

핵심은 두 가지다. 첫째, '한 칩=한 모델' 제약을 실제 데이터센터 운영에서 어떻게 소화하느냐다. 모델 교체 주기가 짧으면 각인 칩의 경제성은 흔들린다. 둘째, 제조사 제시 성능이 독립 벤치마크에서 재현되느냐다. 초당 토큰 수와 전력 효율은 아직 Taalas 자체 수치이며, 실사용 환경의 지연·정확도까지 포함한 검증이 남아 있다.

<div class="article-callout tip">
이번 인수의 의미는 단순한 스타트업 M&A가 아니라 '추론 시대의 하드웨어 분화'다. 학습은 범용 GPU, 대량 추론은 전용 실리콘으로 갈라지는 초기 신호로 읽으면 정확하다. 다만 성능 주장은 제조사 기준이므로, 상용 배치와 3자 벤치마크가 나오기 전까지는 보수적으로 볼 필요가 있다.
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/5284344" target="_blank" rel="noopener">The Register — AMD acquires AI chip startup Taalas (8/6)</a><br/>
· <a href="https://siliconangle.com/2026/08/06/amd-acquires-taalas-hardwire-ai-models-silicon/" target="_blank" rel="noopener">SiliconANGLE — AMD acquires Taalas to hardwire AI models into silicon (8/6)</a><br/>
· <a href="https://the-decoder.com/amd-acquires-taalas-a-startup-that-bakes-ai-models-directly-into-silicon/" target="_blank" rel="noopener">The Decoder — AMD acquires Taalas (8/6)</a><br/>
· <a href="https://www.forbes.com/sites/jonmarkman/2026/08/09/amd-buys-taalas-the-startup-that-carves-ai-models-into-silicon/" target="_blank" rel="noopener">Forbes — AMD Buys Taalas, The Startup That Carves AI Models Into Silicon (8/9)</a>
</div>

<div class="article-keypoints">
<ul>
<li>AMD가 8월 6일 토론토 스타트업 Taalas 인수 합의 발표(인수가 비공개)</li>
<li>Taalas는 모델 가중치를 실리콘에 각인하는 '모델-인-실리콘'으로 메모리 월을 우회</li>
<li>데모 칩 HC1: TSMC N6·약 530억 트랜지스터, Llama 3.1 8B에서 사용자당 초당 약 1만7000토큰(제조사 제시)</li>
<li>대가는 유연성 — 칩당 단일 모델, 모델 교체 시 새 칩 필요(모델별 약 2개월 제조)</li>
<li>대형 GPU 벤더가 모델-인-실리콘을 산 첫 사례 → 학습(범용 GPU)과 추론(전용 실리콘)의 분화 신호</li>
</ul>
</div>
