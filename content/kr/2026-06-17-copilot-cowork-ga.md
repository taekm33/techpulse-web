---
title: "M365 Copilot Cowork 전 세계 정식 출시 — 엔진은 자사 모델 아닌 앤트로픽 Claude"
summary: "마이크로소프트가 3개월간의 프리뷰를 마치고 Copilot Cowork를 전 세계 정식 출시했다. 채팅을 넘어 복잡한 다단계 작업을 끝까지 실행하는 에이전트형 서비스로, 출시 시점 기본 엔진은 자사 모델이 아닌 앤트로픽의 Opus 4.8·Sonnet 4.6이다. 사용량 기반 과금과 비용 관리 기능도 함께 도입됐다."
category: "ai-news"
date: "2026-06-17"
readingTime: 5
tags: ["MicrosoftCopilot", "Anthropic", "에이전트형AI"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/7himk_LjcgI" title="Copilot Cowork in Microsoft 365: Five Powerful Use Cases to Automate Your Work" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> 마이크로소프트가 2026년 6월 16일, Microsoft 365 Copilot의 에이전트형 기능 'Copilot Cowork'를 전 세계에 정식 출시했다. 3개월 프리뷰 기간 동안 포춘 500대 기업의 절반 이상이 사용했으며, 정식 출시 시점 기본 모델은 앤트로픽의 Opus 4.8과 Sonnet 4.6이다. 사용량 기반 과금(Copilot Credit당 0.01달러)과 지출 한도·사용량 알림 등 비용관리 기능이 함께 제공되며, 마이크로소프트는 자체 모델인 'Cowork 1'을 향후 수 주 내 저비용 옵션으로 출시할 계획이다.</div>

마이크로소프트가 Microsoft 365 Copilot을 단순 챗봇에서 끝까지 일을 완수하는 에이전트로 전환시키는 핵심 기능 'Copilot Cowork'의 전 세계 정식 출시(GA)를 발표했다. Frontier 프리뷰 3개월간 액센추어, 아바나드, 캐피털그룹, 코크, 오레두 카타르, 취리히 보험 등을 포함해 포춘 500대 기업의 절반 이상이 이를 사용했다.

## 채팅이 아니라 "완료된 결과물"을 돌려준다

<div class="article-stats">
<div><strong>50%+</strong><br>프리뷰 기간 사용한 포춘 500대 기업 비율</div>
<div><strong>30~40%</strong><br>동일 작업 기준, Claude Cowork(M365 커넥터) 대비 비용 절감률(MS 자체 테스트)</div>
<div><strong>$0.01</strong><br>Copilot Credit 1개당 PayGo 단가</div>
</div>

Copilot Cowork는 복잡하고 장시간 소요되는 멀티툴 작업을 사용자가 정의하면, 초안이나 추천이 아니라 "완료된 결과"를 끝까지 실행해 돌려주는 방식으로 동작한다. 마이크로소프트에 따르면 한 엔지니어링 팀은 배치 작업 스프레드시트를 안전하게 수정하고 변경 후 의존성 흐름도를 자동 생성하도록 Cowork를 학습시켰고, 한 팀은 두 제품 버전 간 약 4,000개 파일을 비교해 수 주가 걸릴 작업을 단축했으며, 한 영업 리더는 정체된 파이프라인을 Cowork에 맡겨 후속조치가 끊긴 거래들의 순위 목록을 받아 일주일치 검토를 하루 아침으로 줄였다.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body">
<strong>정작 기본 엔진은 자사 모델이 아니다</strong><br>
정식 출시 시점에서 Copilot Cowork는 앤트로픽의 Opus 4.8과 Sonnet 4.6 위에서 작동한다. Frontier 고객은 GPT 5.5도 선택할 수 있으며, 마이크로소프트는 더 저렴한 자체 모델 'Cowork 1'을 향후 몇 주 내 출시해 일상적 작업의 비용을 낮출 계획이라고 밝혔다. 마이크로소프트는 동일 작업 기준 내부 테스트에서 Copilot Cowork가 'Claude Cowork(M365 커넥터 연동)' 대비 평균 30~40% 더 저렴했다고 주장했다.</div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>비용관리, 이번 출시의 핵심 화두</strong><br>
사용량 기반 과금이라 비용 예측이 어렵다는 고객 피드백을 반영해, 마이크로소프트는 관리자가 테넌트·그룹·사용자 단위로 지출 한도를 설정하고 사용량 알림 임계값을 정할 수 있는 기능을 함께 출시했다. 작업은 경량·중간·중작업 세 가지 패턴으로 분류되며, 비용 추정용 스프레드시트도 공개됐다. Frontier 프리뷰에 참여했던 테넌트는 7월 1일까지 과금 유예 기간이 적용된다.</div>
</div>

## 출시와 함께 들어온 변화들

| 항목 | 내용 |
|---|---|
| 기본 모델(GA) | Anthropic Opus 4.8, Sonnet 4.6(Frontier에서는 GPT 5.5도 가능) |
| 자체 모델 | Cowork 1, 출시 예정(저비용 옵션) |
| 신규 플러그인(즉시 이용) | Enosix, Harvey, LSEG, Miro, monday.com, Moody's, Morningstar, S&P Global Energy, TeamsMaestro |
| 플러그인(출시 예정) | Adobe, Atlassian, Box, Canva, CB Insights, Databricks, MoneyForward, Templafy |
| 보안·컴플라이언스 | 감사 로그, DSPM, eDiscovery, 내부 위험 관리, 데이터 수명주기 관리(6/22 GA), 커뮤니케이션 컴플라이언스 |

요금 체계는 Microsoft 365 Copilot 사용자 라이선스(USL)를 전제로, 모델 사용량·컨텍스트 검색·툴 호출·런타임 네 가지 요소로 계산되는 Copilot Credit 기반 사용량제다. 고정 요금제(P3)로 사전 약정 시 할인도 제공된다.

<div class="article-keypoints">
<ul>
<li>경쟁사 에이전트(Claude Cowork 등)와의 비용 비교 수치는 마이크로소프트 자체 테스트 결과이므로, 실제 도입 전 자사 워크로드 기준 파일럿 테스트로 재검증하는 것이 안전하다.</li>
<li>사용량 기반 과금 체계에서는 관리자가 지출 한도·사용량 알림을 미리 설정해두지 않으면 예상치 못한 비용 급증이 발생할 수 있다.</li>
<li>출시 시점 기본 엔진이 자사 모델이 아닌 앤트로픽 모델이라는 점은, 마이크로소프트가 자체 'Cowork 1' 모델을 통해 비용 구조를 어떻게 재편할지 지켜볼 핵심 변수다.</li>
</ul>
</div>

Copilot Cowork는 현재 Microsoft 365 Copilot 고객 전체에 전 세계 정식 제공되며, 관리자는 테넌트 내 활성화 여부와 대상자를 직접 결정할 수 있다(기본값은 비활성).

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>
— <a href="https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/" target="_blank" rel="noopener noreferrer">Microsoft 365 공식 블로그: Copilot Cowork is now generally available</a><br>
— <a href="https://www.techradar.com/pro/microsoft-makes-copilot-cowork-open-to-everyone-and-wants-to-help-you-tackle-even-the-trickiest-work-tasks" target="_blank" rel="noopener noreferrer">TechRadar: Microsoft makes Copilot Cowork open to everyone</a><br>
— <a href="https://cryptobriefing.com/microsoft-copilot-cowork-general-availability/" target="_blank" rel="noopener noreferrer">Crypto Briefing: Microsoft Copilot Cowork goes live worldwide with Anthropic Claude integration</a>
</div>
</div>
