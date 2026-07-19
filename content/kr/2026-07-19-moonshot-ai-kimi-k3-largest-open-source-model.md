---
title: "중국 Moonshot AI, 세계 최대 오픈소스 AI 모델 'Kimi K3' 공개 — 2.8조 파라미터로 미국 빅테크 정면 도전"
summary: "중국 AI 스타트업 Moonshot AI가 2.8조 파라미터 규모의 오픈소스 모델 Kimi K3를 발표했다. 세계 최대 오픈가중치 모델로, GPT-5.6과 Anthropic Opus 4.8을 벤치마크에서 능가한다고 주장하며 글로벌 AI 패권 경쟁에 새 국면을 열었다."
category: "ai-news"
date: "2026-07-19"
readingTime: 5
tags: ["Kimi K3", "Moonshot AI", "오픈소스 AI", "중국 AI", "대형언어모델"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Moonshot AI가 2.8조 파라미터의 오픈가중치 모델 Kimi K3를 공개했다. 세계 최대 규모 오픈소스 AI로, Arena.ai 웹 UI 벤치마크 1위, GPU 최적화 테스트에서 GPT-5.6 Sol·Opus 4.8 상회를 기록했다. 입력 토큰당 $3, 출력 토큰당 $15의 API 가격을 책정했으며, 7월 27일 전체 모델 가중치를 공개 예정이다.
</div>

## 세계를 놀라게 한 2.8조 파라미터 모델

2026년 7월 19일, 중국 베이징 기반 AI 스타트업 **Moonshot AI**의 창업자 Yang Zhilin이 NVIDIA GPU Technology Conference(GTC) 무대에 올라 **Kimi K3**를 전 세계에 공개했다. 2.8조(2.8 trillion) 파라미터 규모로, 현재까지 공개된 오픈가중치 모델 중 단연 최대다.

Moonshot AI는 이번 발표 불과 두 달 전인 2026년 5월, Meituan과 Alibaba 주도 하에 **20억 달러(약 2조 7,000억 원) 규모의 투자**를 유치해 기업 가치를 200억 달러 이상으로 끌어올렸다. 2023년 3월 창립 이후 불과 3년 만에 GTC 키노트 자리를 차지한 셈이다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-value">2.8조</span>
  <span class="stat-label">파라미터 수 (세계 최대 오픈소스)</span>
</div>
<div class="stat-item">
  <span class="stat-value">100만</span>
  <span class="stat-label">토큰 컨텍스트 윈도우</span>
</div>
<div class="stat-item">
  <span class="stat-value">$20B+</span>
  <span class="stat-label">Moonshot AI 기업 가치</span>
</div>
<div class="stat-item">
  <span class="stat-value">$3 / $15</span>
  <span class="stat-label">입력 / 출력 토큰당 API 가격 (백만 토큰 기준)</span>
</div>
</div>

## 벤치마크 성과: 미국 최강 모델과 어깨를 나란히

Kimi K3는 다양한 독립 벤치마크에서 주목할 만한 성과를 냈다.

| 벤치마크 기관 | 결과 |
|---|---|
| Arena.ai (웹 UI 생성) | **1위** |
| Vals AI (전체 순위) | Fable 5에 이어 **2위**, GPT-5.6 Sol 앞섬 |
| Artificial Analysis | GPT-5.5, Anthropic Opus 4.8과 **동급** |
| GPU 커널 최적화 | Fable 5(fallback 포함)와 경쟁, GPT-5.6 Sol·Opus 4.8 **상회** |

Moonshot AI는 특히 GPU 커널 최적화 — AI 하드웨어 활용률을 극대화하고 지연 시간을 줄이는 기술 — 분야에서 두각을 나타냈다고 강조했다. 이는 데이터센터 운영 효율과 직결되는 중요한 지표다.

<div class="article-callout tip">
<strong>개발자를 위한 팁:</strong> Kimi K3는 지금 바로 kimi.com에서 Google 계정이나 전화번호로 가입해 무료로 체험할 수 있다. 전체 모델 가중치(Full weights)는 7월 27일 공개 예정이므로, 로컬 배포나 파인튜닝을 계획 중인 개발자라면 그날을 놓치지 말자.
</div>

## 오픈소스 전략: 왜 지금, 왜 오픈가중치인가

Moonshot AI의 오픈소스 전략은 우연이 아니다. 2025년 1월 DeepSeek R1의 등장으로 중국 AI 시장 판도가 뒤집히며, 한때 월간 활성 사용자 기준 3위를 달리던 Kimi는 7위로 미끄러졌다. 이후 회사는 **Kimi K2(2025년 7월)** → **K2.5(2026년 1월)** → **K3(2026년 7월)**로 이어지는 오픈소스 행보를 이어왔다.

오픈가중치 모델의 핵심 가치는 개발자 자율성에 있다. GPT 시리즈처럼 API 호출마다 비용을 지불하는 폐쇄형 모델과 달리, Kimi K3는 직접 다운로드해 자사 인프라에서 운용할 수 있다. 이는 데이터 주권이 중요한 기업 시장과, 비용 통제가 필요한 스타트업 생태계 모두에서 강력한 차별점이다.

경쟁사 오픈소스 모델과의 파라미터 규모 비교를 보면 그 격차가 극명하다: DeepSeek(1.6조) → Xiaomi(1.02조) → Alibaba(397B) → MiniMax(개발 중, 2.7조 예정). Moonshot AI의 K3는 현 시점 타의 추종을 불허한다.

<div class="article-callout info">
<strong>맥락 정보:</strong> 이번 발표는 상하이에서 열리는 2026 세계인공지능대회(WAIC)를 앞두고 전략적으로 타이밍을 잡은 것이다. 중국 국영통신사 신화사는 K3 출시를 "중국 AI 모델 발전의 새로운 걸음"이라 보도했으며, 베이징 중관촌학원 원장은 "중국 오픈소스 모델들이 고립된 돌파구에서 집단적 전진으로 이동하고 있다"고 평가했다.
</div>

## 기술적 혁신: 무엇이 K3를 다르게 만드는가

Moonshot AI는 K3에 두 가지 핵심 아키텍처 혁신을 적용했다고 밝혔다. 첫째는 컴퓨팅 효율성 개선으로, 동일 성능을 더 적은 연산으로 달성할 수 있게 한다. 둘째는 **장기 코딩 작업(long-horizon coding)** 특화 설계로, 최소한의 인간 개입만으로 복잡한 소프트웨어 개발 태스크를 완수할 수 있도록 한다.

코딩 도구 생태계와의 연계도 주목할 부분이다. Moonshot AI는 K3 발표 당일, 오픈소스 코딩 에이전트 **Kimi Code**의 v0.25.0과 v0.26.0을 동시에 출시했다. 이 업데이트는 확장된 서브에이전트 툴링, 백그라운드 작업 관리, 보안 패치 등을 담고 있으며, Anthropic의 Claude Code 및 Google의 Gemini CLI와 정면으로 경쟁한다.

## 글로벌 AI 생태계에 미치는 파장

이번 K3 공개는 단순한 모델 하나의 출시를 넘어 몇 가지 중요한 시사점을 던진다.

**미국 독주 체제의 균열:** Z.ai의 GLM-5.2가 서방 분석가들이 "최소 6개월 뒤처져 있다"던 통념을 깼고, 이제 K3는 파라미터 규모에서 전 세계를 앞섰다.

**오픈소스 생태계의 중심축 이동:** Meta의 LLaMA 시리즈가 주도하던 오픈소스 생태계에 중국발 초대형 모델이 진입하면서, 글로벌 오픈소스 AI 개발자 커뮤니티의 구심점이 달라질 수 있다.

**AI 민주화의 역설:** 세계 최대 파라미터 모델이 오픈소스로 풀린다는 것은, 고성능 AI에 대한 접근성을 높이는 동시에 지정학적 AI 통제 논의를 복잡하게 만든다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
  <li>Kimi K3: 2.8조 파라미터, 100만 토큰 컨텍스트, 현존 최대 오픈가중치 모델</li>
  <li>Arena.ai 웹 UI 벤치마크 1위, Vals AI 전체 2위 (GPT-5.6 Sol 앞섬)</li>
  <li>API 가격: 입력 $3, 출력 $15 (백만 토큰 기준) — 경쟁력 있는 가격 책정</li>
  <li>7월 27일 전체 모델 가중치 공개 예정</li>
  <li>Kimi Code v0.25.0/0.26.0 동시 출시로 코딩 에이전트 생태계 강화</li>
  <li>Moonshot AI 기업 가치 $20B+ 돌파, 2026년 5월 $2B 투자 유치 완료</li>
</ul>
</div>
