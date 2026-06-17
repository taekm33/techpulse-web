---
title: "출시 3일 만에 정지된 Claude Fable 5, 미국 정부가 앤트로픽에 무슨 일을 시켰나"
summary: "앤트로픽이 6월 9일 공개한 최강 모델 Claude Fable 5와 Mythos 5가 미 상무부의 수출통제 지시로 6월 12일 전 세계 모든 사용자에게서 차단됐다. 탈옥 의혹부터 양측의 반박까지 정리했다."
category: "ai-news"
date: "2026-06-17"
readingTime: 5
tags: ["Anthropic", "Claude", "AI규제"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/jfoVr4g6HvU" title="Anthropic disables top AI models after US foreign access order" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> 앤트로픽이 6월 9일 공개한 Mythos급 공개 모델 Claude Fable 5와, 기업 한정 모델 Mythos 5가 6월 12일 미 상무부의 수출통제 지시로 전 세계 모든 사용자에게서 차단됐다. 정부는 "탈옥(jailbreak) 가능성"을 근거로 들었지만, 앤트로픽은 "좁고 비범용적인 우회일 뿐이며 GPT-5.5 등 다른 공개 모델에서도 동일하게 가능한 수준"이라며 강하게 반박했다.
</div>

지난 6월 9일, 앤트로픽은 사이버보안 분야에서 압도적 성능을 보인 비공개 모델 Mythos를 일반 사용자도 쓸 수 있도록 안전장치를 더한 **Claude Fable 5**와, 기업 한정으로 제공되는 **Claude Mythos 5**를 공개했다. 출시 직후 월가와 정부 관계자들의 관심을 받았던 두 모델은 불과 76시간 만에 운명이 바뀌었다.

6월 12일 오후 5시 21분(미 동부시간), 앤트로픽은 미 상무부로부터 국가안보를 이유로 든 수출통제 지시를 받았다. 핵심 내용은 "미국 내외 모든 외국인(앤트로픽 자사의 외국 국적 직원 포함)에게 Fable 5와 Mythos 5 접근을 즉시 중단하라"는 것이었다. 누가 외국인인지 실시간으로 구분할 방법이 없었던 앤트로픽은 결국 전체 사용자에 대해 두 모델을 비활성화했다. Opus 4.8, Sonnet 4.6, Haiku 등 다른 모델은 영향을 받지 않았다.

<div class="article-stats">
<div><strong>76시간</strong><br>출시부터 차단까지 걸린 시간</div>
<div><strong>5:21pm ET</strong><br>상무부 지시 접수 시각 (6/12)</div>
<div><strong>CVE 0건</strong><br>구체적 결함 명시 없이 발동된 조치</div>
</div>

## 정부의 근거와 앤트로픽의 반박

상무부는 누군가 Fable 5의 안전장치를 우회(탈옥)하는 방법을 발견했다고만 밝혔을 뿐, 구체적인 기술적 근거는 제공하지 않았다. 앤트로픽이 구두로 전달받은 내용을 정리하면, 문제가 된 우회 방식은 "모델에게 특정 코드베이스를 읽고 결함을 고치게 하는" 수준의 좁고 비범용적인(non-universal) 탈옥이었다.

앤트로픽은 이에 대해 다음과 같이 반박했다.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body">
<strong>앤트로픽 공식 입장</strong><br>
"우리가 검토한 시연은 이미 알려진 소소한 취약점을 식별하는 수준이었고, 다른 공개 모델(OpenAI GPT-5.5 포함)도 우회 없이 동일하게 찾아낼 수 있는 능력이다. 이 기준을 업계 전체에 적용하면 모든 프런티어 모델의 신규 배포가 멈출 것이다."
</div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>알아두면 좋은 배경</strong><br>
Fable 5·Mythos 5는 4월 공개된 'Claude Mythos Preview'의 후속작으로, 이 모델은 'Project Glasswing'이라는 사이버보안 이니셔티브를 통해 일부 보안기업에만 제한 공개됐었다. 앤트로픽은 국방부와의 갈등(공급망 위험 지정)으로 이미 정부와 마찰을 겪고 있었고, 이번 조치는 그 갈등의 연장선이라는 해석도 나온다.
</div>
</div>

## 타임라인 한눈에 보기

| 시각 | 사건 |
|---|---|
| 6/9 | Claude Fable 5 / Mythos 5 일반 공개 |
| 6/12 오후 1시 ET | 상무부가 앤트로픽에 전화로 비활성화 지시 |
| 6/12 오후 5:21 ET | 정식 수출통제 지시 문서 접수 |
| 6/12 저녁 | 앤트로픽, 전 세계 모든 고객 대상 두 모델 비활성화 |
| 6/15 | 앤트로픽 고위 임원, 백악관과 협의 진행 |

## 개발자·기업 사용자가 챙겨야 할 것

<div class="article-keypoints">
<ul>
<li>Fable 5·Mythos 5를 워크플로에 통합했던 기업은 즉시 Opus 4.8 등 대체 모델로 전환해야 한다.</li>
<li>API 직접 호출로 Mythos를 쓰던 경우 시간당 비용이 매우 높았다는 보고가 많아, 대체 모델 전환 시 비용 구조도 함께 재검토해야 한다.</li>
<li>이번 사례는 정부가 특정 모델을 "너무 강력하다"는 이유로 차단할 수 있다는 선례로 거론되고 있어, 프런티어 모델에 의존하는 서비스는 단일 모델·단일 제공사 의존도를 낮추는 것이 안전하다.</li>
</ul>
</div>

앤트로픽은 이번 사태를 "오해"로 규정하며 가능한 빨리 접근을 복원하겠다고 밝혔지만, 이 글 작성 시점까지 구체적인 복원 일정은 발표되지 않았다.

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>
— <a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener noreferrer">앤트로픽 공식 성명: Fable 5·Mythos 5 접근 정지 관련</a><br>
— <a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener noreferrer">CNBC: Anthropic disables access to Fable 5, Mythos 5</a><br>
— <a href="https://cyberscoop.com/us-government-anthropic-fable-5-mythos-5-export-controls/" target="_blank" rel="noopener noreferrer">CyberScoop: 정부 지시 전문 분석 및 업계 반응</a>
</div>
</div>
