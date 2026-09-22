---
title: "앤트로픽, 클로드가 '스스로' 단백질 결합체 설계 — 15개 표적 중 14개 명중"
summary: "앤트로픽이 클로드가 사람의 개입을 최소화한 채 신규(de novo) 단백질 결합체를 설계해 15개 표적 중 14개에서 실제 결합에 성공했다는 실험 결과를 공개했다. 성공률 22~35%로 업계 통상치(10~15%)를 웃돌았고, 어댑티브 바이오와 트위스트 바이오사이언스가 독립적으로 합성·검증했다."
category: "ai-news"
date: "2026-08-20"
draft: true
readingTime: 6
tags: ["앤트로픽", "클로드", "단백질설계", "AI신약", "바이오"]
---

<div class="article-tldr">
앤트로픽은 클로드가 사람이 작성한 프롬프트 하나를 받은 뒤 대부분의 과정을 자율적으로 수행해 신규 단백질 결합체(de novo protein binder)를 설계했고, 15개 표적 중 14개에서 실제 결합이 확인됐다고 발표했다. 어댑티브 바이오와 트위스트 바이오사이언스가 총 1,320개 설계를 합성해 시험했고, 두 독립 실험실이 354개를 결합 성공으로 확인했다. 성공률은 조건에 따라 22~35%로 업계 통상치 10~15%를 웃돌았다. 앤트로픽은 가장 강력한 모델에서는 생명과학 작업을 여전히 차단하고 있으며, 과학자용 접근 프로그램을 준비 중이라고 밝혔다.
</div>

앤트로픽이 자사 모델 클로드가 신규 단백질 결합체를 사실상 스스로 설계해 실험실 검증을 통과했다는 연구 결과를 공개했다. 단백질 결합체는 특정 표적 단백질에 달라붙도록 설계한 작은 단백질로, 신약·진단·연구 도구의 출발점이 된다. 핵심은 클로드가 사람이 작성한 상세 프롬프트 하나를 받은 뒤, 표적 조사부터 결합 부위 선정, 설계·최적화까지의 과정을 대부분 자율적으로 처리했다는 점이다.

## 무엇을 했나

클로드는 표적을 조사하고 결합 부위(에피토프)를 고른 뒤, 오픈소스 구조·서열 설계 도구들을 스스로 오케스트레이션해 후보를 만들고, 인실리코(컴퓨터상)에서 최적화했다. 이어 용해성·발현 가능성·신규성을 걸러 순위를 매긴 설계안을 내놨다. 실제 단백질 합성과 결합 시험은 외부 파트너인 어댑티브 바이오(Adaptyv Bio)와 트위스트 바이오사이언스(Twist Bioscience)가 맡아, 모델이 생성한 서열을 독립적으로 제작·검증했다.

<div class="article-stats">
<strong>표적 명중</strong> 15개 중 14개<br/>
<strong>생성·시험 설계</strong> 1,320개<br/>
<strong>결합 확인</strong> 354개 (두 독립 실험실 검증)<br/>
<strong>성공률</strong> 22~35% (업계 통상 10~15%)<br/>
<strong>사용 모델</strong> 클로드 Opus 4.8, Mythos Preview
</div>

## 숫자가 말하는 것

성공률이 업계 통상치의 두 배를 넘긴 점도 눈에 띄지만, 개별 사례가 더 인상적이다. 앤트로픽에 따르면 Mythos Preview는 단일 표적 모드에서 RBX1 표적에 대해 40%의 적중률을 기록했다. 이는 어댑티브의 공개 경진대회 참가자 평균 3.7%를 크게 웃도는 수치이며, 최상위 설계는 대회 우승작을 능가하는 고친화도 결합체였다. 일부 강력한 설계는 기존에 발표된 최고의 신규 결합체보다 여러 배 더 강하게 결합했다.

| 항목 | 클로드 | 비교 기준 |
|---|---|---|
| 전체 성공률 | 22~35% | 업계 통상 10~15% |
| RBX1 단일표적 적중률 | 40% (Mythos Preview) | 경진대회 참가자 평균 3.7% |
| 결합 강도 | 최고 설계는 기존 최고치의 수 배 | 기존 발표 최고 de novo 결합체 |

<div class="article-callout tip">
'명중 14/15'라는 헤드라인 숫자만 보면 오해하기 쉽다. 실제로는 표적당 다수의 후보를 만들어 그중 일부가 결합에 성공한 것이며, 핵심 지표는 '표적을 몇 개 커버했나'가 아니라 '생성한 설계 중 몇 %가 실제로 붙었나(성공률)'다.
</div>

## 검증과 반론

이번 결과의 무게는 '독립 검증'에 있다. 설계는 클로드가 했지만, 합성과 결합 시험은 앤트로픽이 아닌 두 외부 실험실이 맡았고, 결합 여부도 양쪽에서 교차 확인됐다. 다만 회의론도 나온다. '파마 브로'로 알려진 마틴 슈크렐리는 이번 성과를 두고 "인상적인 작업이 아니다"라고 깎아내렸다. 단백질 결합체 설계 분야에서는 이미 딥러닝 도구(RFdiffusion 등)가 강력한 성능을 보여왔기에, 클로드의 기여가 '새로운 과학'인지 '기존 도구의 능숙한 오케스트레이션'인지에 대한 평가가 갈린다.

## 안전장치와 남은 물음

앤트로픽은 이 능력이 양날임을 의식하고 있다. 회사는 가장 강력한 모델에서 생명과학 관련 작업을 여전히 차단하고 있으며, 검증된 과학자에게만 여는 별도의 접근 프로그램을 준비 중이라고 밝혔다. 단백질 설계 능력은 신약 개발을 앞당길 수 있는 동시에 생물학적 오남용 우려와도 맞닿아 있어, '누구에게 어디까지 열 것인가'가 기술만큼 중요한 문제로 남는다.

<div class="article-keypoints">
<ul>
<li>앤트로픽 발표: 클로드가 사람 프롬프트 1개를 받은 뒤 자율적으로 신규 단백질 결합체를 설계, 15개 표적 중 14개에서 결합 확인</li>
<li>어댑티브 바이오·트위스트 바이오사이언스가 1,320개 설계를 합성·시험, 두 독립 실험실이 354개 결합 확인</li>
<li>성공률 22~35%로 업계 통상 10~15%를 상회, Mythos Preview는 RBX1에서 40% 적중(참가자 평균 3.7%)</li>
<li>마틴 슈크렐리 등 회의론도 존재 — 기존 딥러닝 도구 대비 기여의 성격을 둘러싼 논쟁</li>
<li>앤트로픽은 최강 모델의 생명과학 작업을 차단, 과학자용 접근 프로그램 준비 중</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://www.anthropic.com/research/Claude-accelerates-protein-design" target="_blank" rel="noopener">Anthropic — How Claude is accelerating protein design and analytical chemistry (공식)</a><br/>
<a href="https://www-cdn.anthropic.com/30bf50e22a01388bb29bf077ee3f244531594b7a.pdf" target="_blank" rel="noopener">Anthropic — Autonomous de novo protein binder design with Claude (연구 보고서 PDF)</a><br/>
<a href="https://www.adaptyvbio.com/blog/anthropic-1" target="_blank" rel="noopener">Adaptyv Bio — Benchmarking Claude's protein designs in the wet lab (파트너 케이스 스터디)</a><br/>
<a href="https://finance.biggo.com/news/098c484e-bac4-4d7e-a4e2-0ca0127b8d37" target="_blank" rel="noopener">BigGo Finance — Anthropic Says Claude Autonomously Designed Proteins, Hitting 14 of 15 Targets</a>
</div>
