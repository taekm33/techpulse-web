---
title: "OpenAI의 미공개 AI '아스트라', 10년 이상 미해결 수학 난제 10개 동시 정복"
summary: "OpenAI가 미공개 모델 Astra로 50년 이상 미해결된 수학 문제 10개를 단돈 약 280만 원($2,000)의 연산 비용으로 풀어냈으며, 모든 증명은 Lean 4로 기계 검증됐다."
category: "ai-news"
date: "2026-08-04"
readingTime: 5
tags: ["OpenAI", "Astra", "수학AI", "수학증명", "GPT"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — OpenAI의 차세대 모델 Astra가 수십 년간 미해결 상태였던 수학 문제 10개를 동시에 해결했습니다. 총 연산 비용은 단 2,000달러(약 280만 원)였으며, 모든 증명은 Lean 4 형식 증명 언어로 기계 검증되어 GitHub에 공개됐습니다. AI가 수학계를 근본적으로 바꾸고 있다는 평가가 나옵니다.
</div>

## 인류가 풀지 못했던 문제들, AI가 2,000달러로 해결

2026년 8월 1일, OpenAI는 미공개 모델 **Astra**가 수학 및 이론 컴퓨터 과학 분야의 오래된 난제 10개를 해결했다고 발표했습니다. 각 문제는 최소 10년 이상 인류가 주요 진전을 이루지 못했던 것들입니다.

OpenAI는 249페이지 분량의 논문과 함께 모든 증명에 대한 **Lean 4 증명 인증서**를 Apache 2.0 라이선스로 GitHub에 공개했습니다. "sorry" 카운트(미완성 증명 표시)는 0으로, 10개 문제 전부가 완전히 형식 증명됐음을 의미합니다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">10개</span>
<span class="stat-label">10년 이상 미해결 수학 난제 동시 해결</span>
</div>
<div class="stat-item">
<span class="stat-number">$2,000</span>
<span class="stat-label">GPT-5.6 Sol API 기준 총 연산 비용 (약 280만 원)</span>
</div>
<div class="stat-item">
<span class="stat-number">249페이지</span>
<span class="stat-label">공개 논문 분량, Lean 4 증명 인증서 포함</span>
</div>
<div class="stat-item">
<span class="stat-number">0</span>
<span class="stat-label">Lean 4 'sorry' 카운트 — 모든 증명 완전 검증</span>
</div>
</div>

## 어떤 문제들을 풀었나

이번 성과 중 가장 주목받는 것은 **비-소픽 군(non-sofic group)의 명시적 구성**입니다. 수학자 그로모프(Mikhail Gromov)가 1999년 소픽성(soficity) 개념을 정립한 이후, 지금까지 알려진 모든 군(group)은 소픽 성질을 가졌습니다. 수학자들은 모든 가산 군이 소픽이라는 추측을 오랫동안 믿어 왔지만, Astra는 이를 반증하는 단 하나의 반례를 찾아냈습니다.

그 밖에도 다음 문제들이 포함됩니다:

| 문제 분야 | 해결 내용 |
|---|---|
| 군론 | 비-소픽 군의 명시적 구성 (Gromov, 1999~) |
| 작용소 대수 | Connes의 강직성 추측 반증 |
| 볼록 기하학 | Ehrhart의 부피 추측 증명 |
| 에르되시 문제 | Problem 183 등 3개 해결 (다색 라이시 수 포함) |
| 고차원 구 충전 | 3차원 이상의 구 충전 밀도 한계 규명 |
| 양자 병렬 반복 | 양자 게임 이론 난제 해결 |

에르되시 문제 전문 데이터베이스를 운영하는 토머스 블룸(Thomas Bloom)은 이 결과들을 "빅 뉴스"라고 평가했습니다.

<div class="article-callout tip">
<strong>핵심 포인트:</strong> Lean 4의 커널은 증명을 수락하거나 거부하는 이분법적 판단을 하기 때문에, 독립적인 검증은 단순히 컴파일러로 인증서를 실행하는 것만으로 가능합니다. 별도의 전문가 검토 없이도 증명의 정확성을 확인할 수 있는 혁신적인 방식입니다.
</div>

## OpenAI 수학 연구팀의 반응

OpenAI 수학 연구 총괄 세바스티앙 뷔벡(Sebastien Bubeck)은 이 결과를 "아름답다(beautiful)"고 표현했으며, 연구 과학자 노암 브라운(Noam Brown)은 "과학적 추론 분야에서의 중요한 도약"이라고 평했습니다.

런던 퀸 메리 대학교의 아비셱 사하(Abhishek Saha) 교수는 이렇게 말했습니다. "10개 중 어느 것 하나도 단독으로 중요하고 인상적인 성취입니다. 일부는 반례이고, 일부는 실제 증명이지만, 모두 누구도 이전에 시도하지 않았던 방식으로 기존 결과를 매우 기술적으로 조합한 것들입니다."

<div class="article-callout info">
<strong>배경:</strong> OpenAI는 지난 5월 내부 AI 모델로 에르되시의 '단위 거리(unit distance)' 추측 반례를 최초로 발견한 바 있습니다. 같은 달 Claude Fable 5도 거의 100년된 야코비안 추측(Jacobian conjecture)의 반례를 발견했습니다. AI에 의한 수학적 발견이 급가속 중입니다.
</div>

## AI와 수학계의 긴장 관계

이번 발표는 AI 기업과 수학 커뮤니티의 갈등이 고조되는 시점에 이루어졌습니다. 국제수학연맹(IMU)은 6월에 "라이덴 선언(Leiden Declaration)"을 통해 AI 기업들이 저작권 동의 없이 연구를 활용하고 동료 심사를 우회하며 증명과 공로 인정 기준을 훼손한다고 공식 성명을 발표했습니다.

또한 일부 수학자들은 OpenAI의 "모든 문제에서 10년 이상 주요 진전 없음"이라는 최초 발표 내용이 부정확하다고 지적했고, OpenAI는 이를 수정하기도 했습니다.

<div class="article-keypoints">
<h3>핵심 요약</h3>
<ul>
<li>OpenAI Astra, 10년+ 미해결 수학 난제 10개 동시 해결 (2026년 8월 1일 발표)</li>
<li>총 연산 비용 약 2,000달러, Lean 4 형식 증명으로 완전 검증</li>
<li>비-소픽 군 최초 구성, Connes 추측 반증 등 군론·대수학 역사적 성과 포함</li>
<li>Astra는 아직 미공개 모델이며 연방 AI 안전 심사를 통과해야 출시 가능</li>
<li>AI 수학 발견의 가속화에 수학계는 기회와 우려를 동시에 표명 중</li>
</ul>
</div>

AI의 수학 능력이 폭발적으로 성장하면서, 향후 2~3년 내에 더 깊은 수학 이론 문제들도 AI가 풀어낼 수 있을 것이라는 전망이 나오고 있습니다. 수학이라는 학문의 본질 자체가 변하는 시대가 도래하고 있습니다.
