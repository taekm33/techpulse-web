---
title: "오픈AI, 첫 자체 AI 칩 '할라피뇨' 공개 — 브로드컴과 손잡고 엔비디아 추론 아성에 도전"
summary: "오픈AI가 브로드컴과 공동 개발한 첫 자체 AI 가속기 'Jalapeño(할라피뇨)'를 공개했다. LLM 추론에 특화된 이 칩은 설계부터 테이프아웃까지 9개월 만에 완성됐으며, 일반 AI GPU 대비 약 50%의 비용 절감을 내세워 엔비디아가 장악한 추론 시장을 정조준한다."
category: "it-news"
date: "2026-06-30"
readingTime: 6
tags: ["오픈AI", "브로드컴", "AI반도체", "Jalapeño", "엔비디아"]
---

<div class="article-tldr">
오픈AI가 6월 24일 브로드컴과 함께 자체 설계한 첫 AI 가속기 'Jalapeño(할라피뇨)'를 공개했다. LLM 추론(inference)에 특화된 '인텔리전스 프로세서'로, ChatGPT·Codex·API 등 오픈AI가 매일 운영하는 시스템에서 얻은 노하우를 바탕으로 백지에서 설계됐다. 설계부터 제조 테이프아웃까지 단 9개월 — 고성능 반도체로는 이례적으로 빠른 ASIC 개발 주기다. 브로드컴 측은 일반 AI GPU 대비 약 50% 비용 절감을 주장하며, 엔비디아가 사실상 독점해 온 추론 시장에 정면 도전장을 던졌다.
</div>

오픈AI와 브로드컴이 6월 24일(현지시간) 오픈AI의 첫 자체 AI 칩 'Jalapeño(할라피뇨)'를 공개했다. 두 회사가 함께 구축 중인 다세대(multi-generation) 컴퓨팅 플랫폼의 첫 번째 AI 가속기로, 오픈AI가 그리는 LLM 추론의 미래상에 맞춰 설계됐다.

## '인텔리전스 프로세서' — 추론 전용 백지 설계

Jalapeño는 범용 GPU가 아니라 **대규모언어모델(LLM) 추론에 특화된 가속기**다. 오픈AI는 ChatGPT, Codex, API, 그리고 앞으로 나올 에이전트 제품까지 매일 굴리며 쌓은 실제 운영 데이터를 바탕으로 이 칩을 "백지 상태에서" 설계했다고 밝혔다. 자사 워크로드뿐 아니라 업계 전반의 현재·미래 LLM을 두루 겨냥한 범용성도 함께 고려됐다.

<div class="article-stats">
<strong>공개일</strong> 2026년 6월 24일<br/>
<strong>개발 파트너</strong> 브로드컴(Broadcom)<br/>
<strong>개발 기간</strong> 설계→테이프아웃 약 9개월<br/>
<strong>비용 효과</strong> 일반 AI GPU 대비 약 50% 절감(브로드컴 주장)
</div>

특히 눈에 띄는 건 **개발 속도**다. 초기 설계부터 제조 단계인 테이프아웃까지 단 9개월밖에 걸리지 않았는데, 오픈AI와 브로드컴은 이를 고성능 첨단 반도체로서는 역대 가장 빠른 ASIC 개발 주기로 보고 있다. 완성된 칩은 브로드컴의 혹 탄(Hock Tan) CEO와 찰리 카와스(Charlie Kawwas) 사장이 오픈AI의 샘 올트먼 CEO와 그렉 브록만 사장에게 직접 전달했다.

## 왜 자체 칩인가 — '풀스택'을 향한 수직 통합

오픈AI가 자체 칩에 나선 핵심 이유는 **비용과 통제력**이다. 브로드컴 혹 탄 CEO에 따르면 Jalapeño는 일반적인 AI GPU 대비 약 50%의 비용 절감 효과를 보이고 있다. 추론은 모델을 한 번 학습시키고 끝나는 학습(training)과 달리, 사용자가 쓸 때마다 반복적으로 연산이 일어나기 때문에 대규모 서비스에서는 추론 비용이 곧 사업의 손익을 좌우한다.

<div class="article-callout tip">
AI 인프라를 설계하는 기업이라면, 학습용 GPU 확보 못지않게 '추론 단가'를 구조적으로 낮추는 전용 실리콘 전략이 중장기 경쟁력을 가른다는 점을 이번 사례가 보여준다.
</div>

오픈AI는 이 칩을 기반으로 마이크로소프트 등 파트너와 함께 2026년부터 기가와트(GW)급 데이터센터 구축을 본격화한다는 계획이다. 모델·소프트웨어에 이어 칩과 데이터센터까지 직접 통제하는 '풀스택' 전략의 일환이다.

## 엔비디아 추론 아성에 도전

이번 발표의 또 다른 의미는 **엔비디아 견제**다. AI 가속기 시장은 학습·추론 모두 엔비디아가 사실상 독점해 왔지만, 빅테크들은 비용과 공급망 종속을 줄이기 위해 자체 칩으로 눈을 돌리고 있다. 구글(TPU), 아마존(Trainium), 메타 등에 이어 오픈AI까지 자체 추론 칩 대열에 합류하면서, 엔비디아가 가장 큰 수익을 내는 추론 영역에서의 경쟁이 한층 가열될 전망이다.

<div class="article-callout info">
다만 자체 칩이 엔비디아를 곧바로 대체하는 것은 아니다. 설계·검증·양산·소프트웨어 생태계까지 갖추는 데는 시간이 걸리며, Jalapeño 역시 오픈AI 자체 워크로드 최적화에서 출발한다. 단기적으로는 엔비디아와 자체 칩을 병행하는 구도가 이어질 가능성이 크다.
</div>

## 의미와 전망

Jalapeño 공개는 AI 경쟁이 모델 성능을 넘어 **'추론 인프라의 단가 싸움'**으로 본격 확장됐음을 보여준다. 9개월이라는 압축된 개발 주기는 빅테크–반도체 기업 간 협업이 얼마나 빠르게 맞춤형 실리콘을 찍어낼 수 있는지를 입증했다. 실제 양산·배치 성과와 50% 절감 주장의 검증 여부가 향후 관전 포인트다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://openai.com/index/openai-broadcom-jalapeno-inference-chip/" target="_blank" rel="noopener">OpenAI — Jalapeño 추론 칩 공식 발표</a><br/>
· <a href="https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/" target="_blank" rel="noopener">TechCrunch — OpenAI unveils its first custom chip, built by Broadcom (6/24)</a><br/>
· <a href="https://www.cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html" target="_blank" rel="noopener">CNBC — OpenAI and Broadcom reveal Jalapeño first AI chip (6/24)</a>
</div>

<div class="article-keypoints">
<ul>
<li>오픈AI가 브로드컴과 공동 개발한 첫 자체 AI 칩 'Jalapeño'를 6월 24일 공개</li>
<li>LLM 추론 특화 가속기 — ChatGPT·Codex·API 운영 노하우 기반 백지 설계</li>
<li>설계→테이프아웃 9개월(역대 최速 ASIC 주기 주장), 일반 GPU 대비 약 50% 비용 절감</li>
<li>마이크로소프트 등과 2026년부터 GW급 데이터센터 구축 — '풀스택' 수직 통합</li>
<li>구글·아마존에 이어 엔비디아 추론 독점에 도전하는 빅테크 자체 칩 흐름</li>
</ul>
</div>
