---
title: "AI가 스스로 찾아낸 '크리스퍼 사촌'…Anthropic, Claude가 발견한 신규 효소 시스템 'ART' 공개"
summary: "Anthropic이 약 950개의 Claude 에이전트를 21시간 돌려 20만 개 넘는 역전사효소 데이터에서 지금까지 알려지지 않은 효소 시스템 'ART'를 찾아냈다고 밝혔다. 크리스퍼(CRISPR)와 닮은 반복 배열 구조를 지녀 유전자 편집 응용 가능성이 거론되지만, 동일 검색을 반복해도 재현되지 않는 한계도 함께 공개됐다."
category: "ai-news"
date: "2026-09-24"
readingTime: 6
tags: ["Anthropic", "Claude", "AI에이전트", "AI과학", "크리스퍼"]
---

<div class="article-tldr">
Anthropic이 AI 모델 Claude를 활용해 바이러스(박테리오파지)에서 지금까지 기록되지 않은 효소 시스템 '배열 연관 역전사효소(ART)'를 발견했다고 9월 23일(현지시간) 발표했다. 약 950개의 Claude 에이전트가 21시간 동안 20만 개가 넘는 역전사효소 데이터를 뒤져 3,500여 개 후보를 추린 결과다. ART는 크리스퍼(CRISPR)와 닮은 반복 DNA 배열을 갖춰 프로그래밍 가능한 유전자 도구로 발전할 가능성이 제기됐다. 다만 동일한 검색을 반복하면 같은 결과가 나오지 않는 재현성 한계도 함께 공개돼, AI 과학 발견의 가능성과 과제를 동시에 드러냈다.
</div>

Anthropic은 자사 AI 모델 Claude가 자율적으로 방대한 유전체 데이터를 탐색해 지금까지 특성이 규명되지 않았던 효소 시스템을 찾아냈다고 밝혔다. 발견된 시스템의 이름은 '배열 연관 역전사효소(Array-associated Reverse Transcriptases, ART)'로, 세균을 감염시키는 바이러스인 박테리오파지의 DNA에서 확인됐다. 이 연구는 동료평가(peer review)를 거치기 전 단계인 프리프린트(preprint)로 공개됐다.

## 950개 에이전트가 21시간 만에 찾아냈다

이번 성과의 핵심은 사람이 아니라 다수의 AI 에이전트가 스스로 데이터를 뒤졌다는 점이다. 연구진은 초기 프롬프트와 방향 설정, 그리고 실험실 검증만 담당했고, 실제 탐색·후보 선별·판단은 에이전트들이 수행했다.

<div class="article-stats">
<strong>투입 에이전트</strong> 약 950개(Claude)<br/>
<strong>소요 시간</strong> 약 21시간<br/>
<strong>소비 토큰</strong> 약 2억 1,000만 토큰<br/>
<strong>탐색 데이터</strong> 역전사효소 20만 개 이상<br/>
<strong>선별 후보</strong> 약 3,500개 → 최종 20개 정밀 분석
</div>

에이전트들은 광대한 DNA 서열 데이터베이스를 훑으며 역전사효소(RT) 계열을 조사하고, 자체 판단으로 흥미로운 후보를 골라냈다. 이후 가장 유망한 후보 20개에 대해 사람이 읽을 수 있는 형태의 분석 보고서를 생성했고, 그중에서 ART 시스템이 도출됐다. 역전사효소 자체는 이전부터 알려진 효소였지만, 그 옆에 붙어 있는 규칙적인 반복 배열과 파트너 유전자의 존재는 기존 유전체 보고서에서 놓쳐 온 부분이었다.

## '크리스퍼'와 닮은 구조가 주목받는 이유

ART 시스템은 세 가지 요소로 구성된다. 역전사효소, 함께 작동하는 파트너 유전자, 그리고 일정한 간격으로 배열된 DNA 반복 서열이다. 특히 이 반복 배열이 유전자 편집 기술의 근간인 크리스퍼(CRISPR) 배열과 구조적으로 유사하다는 점이 학계의 관심을 끌었다.

| 구성 요소 | 역할 |
|---|---|
| 역전사효소(RT) | RNA를 DNA로 되돌려 쓰는 핵심 효소 |
| 파트너 유전자 | RT와 함께 작동하는 것으로 추정되는 유전자 |
| 반복 DNA 배열 | 일정 간격으로 반복, 크리스퍼 배열과 유사 |

초기 실험에서 이 반복 배열은 짧은 RNA 형태로 발현되는 것으로 나타났다. 이는 크리스퍼처럼 특정 서열을 표적으로 삼아 '프로그래밍'할 수 있는 도구로 발전할 여지가 있음을 시사한다. 크리스퍼 분야를 개척한 MIT·브로드연구소의 펑 장(Feng Zhang) 교수는 이번 결과를 검토한 뒤 "AI 에이전트가 생물학적 발견에 기여할 수 있음을 보여주는 흥미로운 사례"라고 평가했다.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/uhJJgc-0iTQ" title="Building more effective AI agents — Anthropic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 성과만큼 분명한 한계 — 재현성

Anthropic은 성과와 함께 한계도 투명하게 공개했다. 동일한 검색을 10차례 더 반복했을 때는 같은 배열을 찾아내지 못했다. 회사는 그 원인으로 탐색 규모가 워낙 크고 에이전트의 행동이 예측하기 어렵다는 점을 들었다. 반면 DNA 서열을 직접 제시한 고정된 테스트에서는 90% 이상의 검출률을 보였다.

<div class="article-callout tip">
AI를 연구 파이프라인에 도입하려는 조직이라면, '한 번의 인상적인 결과'와 '반복 가능한 워크플로'를 구분해서 봐야 한다. 이번 사례는 대규모 자율 탐색이 새로운 가설을 던져 줄 수 있음을 보여주지만, 결과의 재현·검증은 여전히 사람과 실험실의 몫이다.
</div>

## 의미와 전망

이번 발표는 AI가 정보를 정리·요약하는 도구를 넘어, 방대한 과학 데이터에서 사람이 미처 보지 못한 패턴을 스스로 제안하는 단계로 나아가고 있음을 보여준다. 동시에 재현성 문제와 프리프린트 단계라는 점은, AI 발견이 아직 검증·실험이라는 과학의 기본 절차를 대체할 수 없음을 분명히 한다. AI 에이전트가 던진 가설을 사람이 어떻게 검증하고 실제 응용으로 연결하느냐가 앞으로의 관건이다.

<div class="article-callout info">
인공지능이 제시한 후보는 '발견'이 아니라 '검증 대상'이다. ART가 실제 기능과 응용 가치를 갖는지는 추가 실험과 동료평가를 거쳐야 확인된다.
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.anthropic.com/news/claude-discovers-novel-enzyme-system" target="_blank" rel="noopener">Anthropic — Claude가 발견한 신규 효소 시스템 (공식 발표)</a><br/>
· <a href="https://thenextweb.com/news/anthropic-claude-enzyme-system-crispr-like-repeats" target="_blank" rel="noopener">The Next Web — Claude가 찾은 크리스퍼 유사 반복 배열</a><br/>
· <a href="https://www.unite.ai/anthropic-says-claude-discovered-a-new-enzyme-system-resembling-crispr/" target="_blank" rel="noopener">Unite.AI — 크리스퍼를 닮은 신규 효소 시스템 발견</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic, Claude 에이전트가 박테리오파지에서 신규 효소 시스템 'ART' 발견 발표(9/23)</li>
<li>약 950개 에이전트가 21시간·2억 1,000만 토큰으로 20만+ 역전사효소 탐색, 후보 3,500여 개 중 20개 정밀 분석</li>
<li>ART는 크리스퍼와 닮은 반복 배열 구조 → 프로그래밍 가능한 유전자 도구 가능성</li>
<li>크리스퍼 개척자 펑 장 교수도 "흥미로운 사례"로 평가</li>
<li>단, 동일 검색 10회 반복 시 재현 실패 + 프리프린트 단계 — 검증은 사람·실험실의 몫</li>
</ul>
</div>
