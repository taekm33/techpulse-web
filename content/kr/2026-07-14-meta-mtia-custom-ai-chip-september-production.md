---
title: "메타 자체 AI칩 MTIA, 9월 양산 돌입 — '엔비디아 청구서' 줄이기 본격화"
summary: "로이터가 내부 메모를 인용해 보도한 바에 따르면, 메타가 최신 MTIA(Meta Training and Inference Accelerator) AI 칩을 오는 9월부터 양산하기 시작한다. 설계는 브로드컴, 제조는 대만 TSMC가 맡고 메모리는 삼성, 스토리지는 샌디스크, 광통신은 스미토모전기가 공급한다. 엔비디아·AMD GPU 의존도를 낮춰 천문학적 컴퓨트 비용을 절감하려는 빅테크 자체 실리콘 경쟁의 최신 국면이다."
category: "it-news"
date: "2026-07-14"
readingTime: 6
tags: ["메타", "MTIA", "AI칩", "브로드컴", "TSMC", "반도체", "엔비디아"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — 메타가 최신 <strong>MTIA</strong> 자체 AI 칩을 <strong>오는 9월부터 양산</strong>한다(로이터, 내부 메모 인용). 칩 <strong>설계는 브로드컴</strong>, <strong>제조는 TSMC</strong>가 맡고 메모리(삼성)·스토리지(샌디스크)·광통신(스미토모전기)까지 공급망이 짜였다. 적어도 한 개 칩은 약 <strong>6주 만에 테스트를 통과</strong>했다. 목적은 명확하다 — <strong>엔비디아·AMD GPU 구매 비용 절감</strong>. 메타는 올해만 컴퓨트 <strong>7GW</strong>를 배치하고 내년 두 배로 늘릴 계획이며, 2026년 설비투자(CapEx)는 <strong>1,250억~1,450억 달러</strong>에 달한다.
</div>

메타(Meta)가 자체 설계한 최신 AI 가속기 칩을 오는 9월부터 양산하기 시작한다고 로이터가 2026년 7월 9일 내부 메모를 인용해 보도했다. 이 칩은 메타가 2023년부터 이어온 <strong>MTIA(Meta Training and Inference Accelerator)</strong> 프로그램의 최신 세대로, 회사가 엔비디아·AMD로부터 사들이는 GPU 비용을 줄이기 위한 핵심 카드다. 내부 메모에 따르면 적어도 한 개 칩은 약 6주 만에 테스트 단계를 통과했다.

## 누가 무엇을 맡나 — 공급망의 재구성

이번 칩은 메타 혼자 만드는 물건이 아니다. 칩 <strong>설계는 브로드컴(Broadcom)</strong>과 협력하되, 실제 <strong>제조는 대만 TSMC</strong>가 담당한다. 여기에 <strong>메모리(RAM)는 삼성</strong>, <strong>스토리지는 샌디스크(SanDisk)</strong>, <strong>광통신 장비는 스미토모전기</strong>가 각각 공급하는 구조다. 즉 하나의 AI 칩 뒤에 미국·대만·한국·일본을 아우르는 다국적 반도체 공급망이 재편되고 있다는 뜻이다.

<div class="article-stats">
<strong>양산 시작</strong> 2026년 9월 예정<br/>
<strong>프로그램</strong> MTIA (Meta Training and Inference Accelerator)<br/>
<strong>설계 파트너</strong> 브로드컴 · <strong>제조</strong> TSMC(대만)<br/>
<strong>부품 공급</strong> 메모리=삼성 · 스토리지=샌디스크 · 광통신=스미토모전기<br/>
<strong>테스트 통과</strong> 최소 1개 칩, 약 6주 소요<br/>
<strong>컴퓨트 배치</strong> 올해 7GW · 내년 두 배 목표<br/>
<strong>2026년 설비투자</strong> 1,250억~1,450억 달러
</div>

## 왜 자체 칩인가 — '엔비디아 청구서'와 모듈형 설계

메타가 자체 칩에 매달리는 이유는 단순하다. AI 학습·추론 수요가 폭증하면서 엔비디아·AMD에 지불하는 GPU 비용이 감당하기 어려운 수준으로 불어났기 때문이다. 메타는 지난 3월 MTIA 프로그램에서 개발한 <strong>네 종류의 신규 칩</strong>을 공개했는데, 일부는 이미 배치됐거나 올해·내년 중 배치될 예정이다. 회사는 이 칩들을 <strong>모듈형 칩렛(chiplet)</strong> 방식으로 설계한다고 밝혔다. AI 워크로드가 워낙 빠르게 변하기 때문에, 칩이 실제 양산에 들어갈 무렵의 요구사항 변화에 유연하게 대응하기 위해서다.

메타는 당시 "각 MTIA 세대는 이전 세대 위에 쌓이며, 모듈형 칩렛을 사용하고 최신 AI 워크로드 통찰과 하드웨어 기술을 반영해 더 짧은 주기로 배치된다"고 설명했다. 실제 용도는 자사 <strong>랭킹·추천 알고리즘 모델 학습</strong>, 광범위한 AI 워크로드, 그리고 자사 앱을 위한 <strong>추론(inference)</strong>이다.

<div class="article-callout tip">
주의할 점은 자체 칩이 GPU를 '대체'하는 게 아니라 '보완'한다는 것이다. 로이터에 따르면 메타는 MTIA로 비용을 아끼면서도 엔비디아·AMD에 여전히 상당한 금액을 지출할 계획이다. 자체 칩은 추천 시스템처럼 워크로드가 명확하고 반복적인 영역에 먼저 투입되고, 최전선 대규모 학습에는 여전히 범용 GPU가 쓰인다. '탈(脫)엔비디아'가 아니라 '엔비디아 의존도 관리'에 가깝다.
</div>

## 컴퓨트 군비 경쟁 — 빅테크 모두가 실리콘 내재화 중

메타만의 움직임이 아니다. 자체 칩으로 엔비디아로 흘러가는 자본을 줄이려는 시도는 빅테크 전반의 흐름이다. OpenAI는 지난 6월 브로드컴과 함께 만든 첫 추론용 커스텀 칩을 공개했고, 앤트로픽은 삼성과 자체 칩 개발을 논의 중인 것으로 전해진다. 아마존은 트레이니엄(Trainium), 구글은 TPU를 이미 수년째 자체 개발해 학습·추론에 쓰고 있다. 급증하는 수요를 노린 AI 칩 스타트업도 우후죽순 생겨나고 있다.

이 모든 배경에는 메타의 막대한 컴퓨트 확장 계획이 있다. 메타는 자사 <strong>Muse Spark</strong> AI 모델 시리즈를 학습·배포하기 위해 전 세계에서 데이터센터·전력 계약을 잇따라 체결하며 수백억 달러를 쏟아붓고 있다. 회사는 올해 컴퓨트 <strong>7GW</strong>를 배치하고 내년 이를 두 배로 늘릴 계획이며, 2026년 설비투자(CapEx)는 <strong>1,250억~1,450억 달러</strong>에 이를 전망이다. 이 거대한 지출 곡선을 조금이라도 낮추려면 자체 실리콘이 필수라는 계산이다.

<div class="article-callout info">
이 기사의 핵심 사실(9월 양산, 6주 테스트 통과, 공급망 구성, 7GW 배치)은 로이터가 입수한 메타 <strong>내부 메모</strong>에 근거한다. 메타는 로이터에 공식 논평을 거부했다. 따라서 구체적 일정은 회사의 공식 확정 발표가 아니라 내부 계획 단계임을 감안해 읽을 필요가 있다.
</div>

## 앞으로 주목할 포인트

관전 포인트는 세 가지다. 첫째, 9월 양산이 실제 일정대로 진행돼 4분기 이후 메타의 GPU 조달 비중을 얼마나 낮추는지다. 둘째, 브로드컴이 메타·OpenAI의 커스텀 칩을 동시에 설계하면서 '엔비디아 대항마 설계 하우스'로 부상하는 흐름이다. 셋째, 자체 칩이 추천·추론을 넘어 최전선 모델 학습까지 확장될 수 있을지다. 이 경계를 넘는 순간이 진짜 '탈엔비디아'의 시작점이 될 것이다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://techcrunch.com/2026/07/09/metas-new-ai-chips-will-begin-production-in-september/" target="_blank" rel="noopener">TechCrunch — Meta's new AI chips will begin production in September (로이터 인용, 7/9)</a><br/>
· <a href="https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/" target="_blank" rel="noopener">Meta AI 블로그 — Scaling MTIA: AI chips for billions (신규 4종 칩 공개, 공식)</a><br/>
· <a href="https://ai.meta.com/blog/meta-training-inference-accelerator-AI-MTIA/" target="_blank" rel="noopener">Meta AI 블로그 — MTIA 프로그램 원년 소개(2023, 공식)</a><br/>
· <a href="https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/" target="_blank" rel="noopener">Meta AI 블로그 — Introducing Muse Spark (컴퓨트 수요 배경, 공식)</a>
</div>

<div class="article-keypoints">
<ul>
<li>메타, 최신 MTIA 자체 AI 칩을 2026년 9월부터 양산 시작 (로이터, 내부 메모 인용)</li>
<li>설계=브로드컴, 제조=TSMC / 메모리=삼성·스토리지=샌디스크·광통신=스미토모전기</li>
<li>목적 = 엔비디아·AMD GPU 구매 비용 절감(대체 아닌 보완) · 모듈형 칩렛 설계</li>
<li>용도 = 랭킹·추천 모델 학습, 광범위 AI 워크로드, 앱 추론 / 2023년부터 자체 칩 생산</li>
<li>배경 = 올해 컴퓨트 7GW 배치·내년 두 배, 2026년 CapEx 1,250억~1,450억 달러 — 빅테크 자체 실리콘 경쟁의 최신 국면</li>
</ul>
</div>
