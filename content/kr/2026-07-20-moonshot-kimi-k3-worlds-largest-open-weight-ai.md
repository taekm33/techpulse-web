---
title: "세계 최대 오픈소스 AI 모델 Kimi K3 등장 — 2.8조 파라미터로 미국 빅테크에 도전장"
summary: "중국 스타트업 Moonshot AI가 2.8조 파라미터의 오픈 웨이트 모델 Kimi K3를 공개했다. 역대 최대 규모의 오픈소스 AI로, 벤치마크에서 GPT-5.6 Sol과 Claude Fable 5에 근접한 성능을 기록하며 미중 AI 경쟁의 새 국면을 열었다."
category: "ai-news"
date: "2026-07-20"
readingTime: 5
tags: ["KimiK3", "MoonshotAI", "오픈소스AI", "중국AI", "LLM"]
---

<div class="article-tldr">
<div class="article-tldr__label">TL;DR</div>
<p>Moonshot AI가 2026년 7월 16일 2.8조 파라미터 오픈 웨이트 모델 <strong>Kimi K3</strong>를 출시했다. 세계 최대 규모의 오픈소스 AI로, 코딩·추론·장기 에이전트 작업에서 GPT-5.6 Sol을 제치는 벤치마크를 기록했다. 7월 27일 전체 모델 가중치를 공개 배포할 예정이며, 가격은 서방 경쟁사 대비 최대 3분의 1 수준이다.</p>
</div>

## Kimi K3란 무엇인가

베이징 기반 AI 스타트업 **Moonshot AI**가 2026년 7월 16일 공개한 **Kimi K3**는 2.8조(2.8 Trillion) 파라미터를 갖춘 오픈 웨이트 대형 언어 모델이다. 이는 DeepSeek V4 Pro(1.6조)나 자사의 이전 모델 Kimi K2(1조)를 크게 웃도는 수치로, 오픈소스 AI 역사상 가장 큰 모델이라는 타이틀을 단번에 거머쥐었다.

아키텍처 측면에서 Kimi K3는 **Kimi Delta Attention**과 **Attention Residuals**라는 두 가지 신기술을 도입했다. 896개의 전문가 모듈 중 16개를 선택적으로 활성화하는 **Mixture-of-Experts(MoE)** 방식을 채택해, 전 세대 대비 약 2.5배 향상된 학습 스케일링 효율을 달성했다고 회사 측은 밝혔다.

<div class="article-stats">
<div class="article-stats__item">
  <span class="article-stats__value">2.8조</span>
  <span class="article-stats__label">파라미터 수 (역대 최대 오픈소스)</span>
</div>
<div class="article-stats__item">
  <span class="article-stats__value">100만</span>
  <span class="article-stats__label">토큰 컨텍스트 윈도우</span>
</div>
<div class="article-stats__item">
  <span class="article-stats__value">$15</span>
  <span class="article-stats__label">출력 토큰 100만 개당 가격 (Fable 5는 $50)</span>
</div>
</div>

## 벤치마크 성적 — 어디까지 따라잡았나

Moonshot AI가 공개한 내부 평가 및 제3자 독립 평가를 종합하면, Kimi K3는 현존 최고 성능의 독점 모델들에 상당히 근접해 있다.

| 벤치마크 | Kimi K3 | GPT-5.6 Sol | Claude Fable 5 |
|----------|---------|-------------|----------------|
| GDPval-AA v2 (실세계 업무) | 1,687 | 1,747.8 | 1,815 |
| AA-Briefcase (장기 에이전트) | 1,527 | 1,495 | 1,587 |
| BrowseComp (정보 탐색) | 91.2 | — | — |
| Frontend Code Arena (Arena.ai) | **1위 (1,679)** | 2위 | 3위 |
| FrontierSWE (소프트웨어 엔지니어링) | 3위 | 1위 | 2위 |

특히 **프론트엔드 코딩** 분야에서는 Claude Fable 5와 GPT-5.6 Sol을 모두 앞서 1위를 차지했다. Arena.ai CEO 아나스타시오스 안젤로풀로스는 "연 최대 릴리즈일 수 있으며, 중국 오픈소스 모델이 미국 모델을 추월한 순간"이라고 평가했다.

<div class="article-callout tip">
<strong>주목할 점:</strong> Kimi K3의 벤치마크는 현재 Moonshot AI 내부 보고와 일부 제3자 평가에 기반한다. 7월 27일 오픈 웨이트 공개 이후 커뮤니티 독립 검증이 이루어질 예정이므로, 수치는 변동될 수 있다.
</div>

## 48시간 자율 에이전트 데모

Moonshot AI가 가장 인상적인 데모로 꼽은 사례는 **자율 칩 설계** 시나리오다. Kimi K3는 48시간 동안 인간의 개입 없이 오픈소스 전자 설계 자동화(EDA) 도구만을 활용해 자기 자신의 소형 버전을 구동할 수 있는 프로토타입 AI 칩 설계를 완료했다. 결과물은 면적 4mm², 100MHz 타이밍 수렴을 달성한 기능성 칩 설계도였다.

또 다른 데모에서는 **계산 천체물리학 연구 재현** 작업을 약 2시간 만에 처리했다. 숙련된 연구자에게는 통상 1~2주가 걸리는 작업으로, 20편 이상의 논문 검토, 300개 이상의 상태방정식 평가, 3,000줄 이상의 파이썬 코드 생성, 인터랙티브 대시보드 제작까지 포함된 완전 자율 워크플로였다.

## 가격 — 서방 경쟁사 대비 3분의 1

Kimi K3의 가격 정책은 또 하나의 파격이다. 100만 입력 토큰에 $3(캐시 적중 시 $0.30), 출력 토큰 100만 개에 $15로 책정되었다. Claude Fable 5의 $50, GPT-5.6 Sol의 $30과 비교하면 상당한 가격 우위다. 7월 27일 전체 가중치가 공개되면 자체 서버에서 비용 없이 실행하는 것도 가능해진다.

<div class="article-callout info">
<strong>전략적 맥락:</strong> Kimi K3 출시 타이밍은 2026 세계인공지능대회(WAIC, 상하이) 개막 직전이다. 알리바바와 텐센트의 투자를 받은 Moonshot AI는 홍콩 상장을 앞두고 300억 달러 기업가치에 20억 달러 추가 투자 유치를 추진 중인 것으로 알려졌다.
</div>

## 또 다른 'DeepSeek 모멘트'가 될까

2025년 1월 DeepSeek R1이 등장했을 때 미국 기술주 시가총액 약 1조 달러가 증발하며 시장에 충격을 줬다. Kimi K3도 그에 버금가는 파급력이 있다는 분석이 잇따른다. Constellation Research 분석가 홀거 뮬러는 "역대 최대 오픈 웨이트 모델, 멀티모달 비전 피드백, 경쟁사 대비 저렴한 가격이라는 세 가지 차별점이 동시에 존재한다"며 "또 다른 DeepSeek 모멘트가 될 수 있다"고 전망했다.

다만 한 가지 유의사항이 있다. Moonshot AI는 Anthropic으로부터 무단 모델 증류(distillation) 혐의를 받은 바 있으며, 트럼프 행정부는 이를 '적대적 행위'로 규정하고 있다. 오픈 웨이트 공개가 미국의 수출 통제 논의에 어떤 영향을 미칠지도 주목된다.

<div class="article-keypoints">
<h3>핵심 요약</h3>
<ul>
  <li>2.8조 파라미터 — 역대 최대 오픈 웨이트 AI 모델</li>
  <li>프론트엔드 코딩 벤치마크(Arena.ai)에서 Claude Fable 5·GPT-5.6 Sol 제치고 1위</li>
  <li>48시간 자율 에이전트로 AI 칩 설계 완료, 2시간에 천체물리학 연구 재현</li>
  <li>출력 토큰 가격 $15 — Claude Fable 5($50) 대비 70% 저렴</li>
  <li>7월 27일 전체 모델 가중치 공개 예정 (MIT 라이선스 기반)</li>
</ul>
</div>
