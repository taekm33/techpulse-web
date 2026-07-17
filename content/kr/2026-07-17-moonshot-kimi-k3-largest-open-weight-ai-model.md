---
title: "Kimi K3 등장: 중국 Moonshot AI, 2.8조 파라미터 역대 최대 오픈웨이트 모델 공개"
summary: "중국 AI 스타트업 Moonshot AI가 2.8조 파라미터 규모의 오픈웨이트 모델 'Kimi K3'를 공개했다. 주요 벤치마크에서 Claude Fable 5·GPT-5.6 Sol에 근접하거나 일부 영역에서 앞서며 '제2의 DeepSeek 모멘트'라는 평가를 받고 있다."
category: "ai-news"
date: "2026-07-17"
readingTime: 5
tags: ["KimiK3", "MoonshotAI", "오픈소스AI", "중국AI", "LLM"]
---

<div class="article-tldr">
<strong>3줄 요약</strong>
<ul>
  <li>Moonshot AI가 2.8조 파라미터 규모의 <strong>Kimi K3</strong>를 공개했다. 역대 공개된 오픈웨이트 AI 모델 중 가장 큰 규모다.</li>
  <li>Arena.ai 프론트엔드 코딩 리더보드에서 Claude Fable 5·GPT-5.6 Sol 등 미국 최고 모델을 모두 제치고 1위를 기록했다.</li>
  <li>전체 가중치는 7월 27일 공개 예정이며, Arena CEO는 "올해 AI 분야 최대 출시"라고 평가했다.</li>
</ul>
</div>

## "제2의 DeepSeek 모멘트"

2025년 1월 DeepSeek R1이 AI 업계를 뒤흔든 지 18개월 만에, 중국에서 또 한 번의 충격파가 왔다. 알리바바·텐센트의 투자를 받은 중국 AI 스타트업 **Moonshot AI**가 7월 16일(현지시간) **Kimi K3**를 공개했다. 2.8조(2.8 trillion) 파라미터라는 전례 없는 규모에, 일부 벤치마크에서 미국 최고 모델과 대등하거나 앞서는 성능을 보이며 실리콘밸리와 워싱턴에 경보를 울리고 있다.

Arena.ai CEO 아나스타시오스 안젤로풀로스는 X(구 트위터)에 "올해 AI 단일 출시 중 최대 사건일 수 있으며, 중국 오픈소스 모델이 미국 모델을 처음으로 앞선 순간을 의미한다"고 밝혔다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-number">2.8조</span>
  <span class="stat-label">파라미터 (역대 오픈웨이트 최대 규모)</span>
</div>
<div class="stat-item">
  <span class="stat-number">1M</span>
  <span class="stat-label">토큰 컨텍스트 윈도우</span>
</div>
<div class="stat-item">
  <span class="stat-number">91.2</span>
  <span class="stat-label">BrowseComp 점수 (최고 기록)</span>
</div>
<div class="stat-item">
  <span class="stat-number">7월 27일</span>
  <span class="stat-label">전체 가중치 공개 예정일</span>
</div>
</div>

## 모델 사양: 규모와 능력

Kimi K3의 가장 두드러진 특징은 **2.8조 파라미터**라는 압도적인 규모다. DeepSeek(1.6조), 샤오미(1.02조), 알리바바(3,970억) 등 다른 중국 오픈소스 경쟁자를 훨씬 앞선다. **1백만 토큰 컨텍스트 윈도우**를 지원해 방대한 코드베이스나 긴 문서를 한 번에 처리할 수 있으며, 텍스트와 이미지를 모두 처리하는 멀티모달 기능도 갖췄다.

특히 주목할 만한 기능은 **'비전-인-더-루프(vision-in-the-loop)'** 시스템이다. K3는 화면 캡처를 분석하고, 코드를 수정한 뒤, 결과물의 시각적 출력까지 확인하는 자율 루프를 반복한다. 이를 통해 48시간 동안 자율적으로 자신을 구동할 나노 스케일 칩을 설계한 시연이 공개되기도 했다 — 설계부터 최적화·검증까지 인간의 개입 없이 완료, 100MHz에서 초당 8,700토큰 이상을 처리하는 4㎟ 칩 설계를 완성했다.

<div class="article-callout tip">
<strong>Kimi Code도 함께 업데이트</strong><br>
Moonshot은 K3 출시와 동시에 오픈소스 코딩 에이전트 <strong>Kimi Code</strong> v0.25.0과 v0.26.0을 공개했다. Claude Code, Gemini CLI와 직접 경쟁하는 이 도구에는 서브에이전트 툴링 확장, 백그라운드 작업 관리, 보안 수정 등이 추가됐다.
</div>

## 벤치마크 성적: 어디서 앞서고, 어디서 뒤처지나

| 벤치마크 | Kimi K3 | Claude Fable 5 Max | GPT-5.6 Sol Max | Claude Opus 4.8 |
|---|---|---|---|---|
| GDPval-AA v2 (실무 종합) | 1,687 (3위) | **1,815** (1위) | 1,747.8 (2위) | 1,600 |
| AA-Briefcase (장기 지식 작업) | 1,527 (2위) | **1,587** (1위) | 1,495 (3위) | — |
| BrowseComp (고난이도 정보 탐색) | **91.2** (최고) | — | — | — |
| Arena 프론트엔드 코딩 | **1위** | — | — | — |

가장 눈에 띄는 결과는 **Arena.ai 프론트엔드 코딩 리더보드**다. K3가 Fable 5, GPT-5.6 Sol 등 미국 최고 독점 모델을 모두 제치고 1위를 차지했다. Kimi K2.6 대비 17계단 상승한 수치다. 전반적인 텍스트 순위에서도 K3는 Claude Opus 4.8을 추월하고 GPT-5.6 Sol(표준 버전)과 동급을 기록했다.

## 가격: 미국 모델보다 확연히 저렴

<div class="article-callout info">
<strong>가격 비교</strong><br>
Kimi K3: 입력 $3/백만 토큰(캐시 미스), $0.30(캐시 히트), 출력 $15/백만 토큰<br>
Claude Fable 5: 입력 $1, 출력 <strong>$50</strong>/백만 토큰<br>
GPT-5.6 Sol: 입력 $0.50, 출력 <strong>$30</strong>/백만 토큰<br>
K3의 출력 비용은 Fable 5의 <strong>70% 수준</strong>으로 대폭 저렴하다.
</div>

물론 초기 중국 오픈소스 모델들이 누렸던 극단적인 저가 이미지와는 달리, K3는 미국 중간급 모델과 비슷한 가격대에 위치한다. 그럼에도 Fable 5 대비 출력 비용이 약 30% 수준에 불과해, 프론티어급 성능을 낮은 비용으로 쓸 수 있다는 점은 기업 고객에게 큰 매력이다.

## Moonshot의 귀환

Kimi K3 출시는 Moonshot AI의 劇的인 재기를 의미하기도 한다. 한때 중국 월간 활성 사용자 기준 3위였던 이 회사는 2025년 1월 DeepSeek R1 등장 이후 7위까지 밀려났다. 이후 Kimi K2(2025년 7월), K2.5(2026년 1월) 등 오픈소스 전략으로 방향을 전환, 이번 K3로 세계 최대 오픈소스 모델 자리를 차지하며 극적인 컴백에 성공했다.

현재 Moonshot은 홍콩 상장을 앞두고 **300억 달러(약 41조원) 밸류에이션으로 20억 달러(약 2.7조원)** 추가 투자 유치를 추진 중인 것으로 알려졌다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>Kimi K3는 2.8조 파라미터로 역대 공개된 오픈웨이트 AI 모델 중 최대 규모다.</li>
  <li>Arena.ai 프론트엔드 코딩 1위로, 일부 영역에서 미국 최고 독점 모델을 앞섰다.</li>
  <li>BrowseComp에서 91.2점으로 최고 기록을 세웠으며, 장기 지식 작업(AA-Briefcase) 2위를 기록했다.</li>
  <li>출력 토큰 비용이 Claude Fable 5의 약 30% 수준으로 가격 경쟁력도 갖췄다.</li>
  <li>전체 가중치는 7월 27일 공개 예정 — 독립적인 성능 검증이 가능해지는 진짜 시험대가 될 것이다.</li>
</ul>
</div>

## 전망: 미국 AI 리드는 얼마나 남았나

Constellation Research의 홀거 뮬러 애널리스트는 K3를 "또 다른 DeepSeek 모멘트"가 될 수 있다고 평가하며, "역대 최대 오픈웨이트 모델, 시각 피드백이 가능한 멀티모달, 저렴한 가격이라는 세 가지 조건을 동시에 충족한다"고 밝혔다. Arena CEO는 더 나아가 중국 오픈소스 AI가 미국 모델을 처음으로 추월한 역사적 순간일 수 있다고 주장했다.

단, 공개된 지 몇 시간 만에 쏟아지는 초기 벤치마크와 바이럴 시연은 실제 실사용 성능을 과장할 수 있다는 점을 유의해야 한다. 전체 가중치 공개 이후 개발자들이 직접 모델을 검증하는 7월 27일 이후가 진정한 시험대가 될 것이다.
