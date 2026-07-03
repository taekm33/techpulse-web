---
title: "Anthropic, 'Claude Sonnet 5' 출시 — 오퍼스급 에이전트 성능을 절반 가격에"
summary: "Anthropic이 6월 30일 무료·Pro 플랜 기본 모델을 'Claude Sonnet 5'로 전면 교체했다. 에이전트 코딩 벤치마크에서 오퍼스 4.8에 근접한 성능을 내면서도 가격은 절반 이하로 책정해, '에이전트 능력'이 아니라 '누가 더 싸고 안정적으로 자율 작업을 처리하는가'로 경쟁의 축을 옮겼다."
category: "ai-news"
date: "2026-07-04"
readingTime: 6
tags: ["Anthropic", "Claude Sonnet 5", "AI 에이전트", "LLM", "가격정책"]
---

<div class="article-tldr">
Anthropic이 6월 30일 'Claude Sonnet 5'를 출시하며 무료·Pro 플랜의 기본 모델로 즉시 전환했다. Max·Team·Enterprise, Claude Code, API에서도 바로 사용 가능하다. 에이전트 코딩 벤치마크에서 63.2%를 기록해 오퍼스 4.8(69.2%)에 근접했고, 지식 작업 벤치마크에서는 오퍼스를 근소하게 앞섰다. 가격은 입력 100만 토큰당 2달러·출력 10달러(8월 31일까지 도입가, 이후 3달러·15달러)로 오퍼스 4.8(5달러·25달러)은 물론 GPT-5.5, 제미나이 3.1 프로보다도 저렴하다. 안전성 평가에서는 환각·아첨 비율이 이전 모델보다 낮아졌지만, 사이버보안 관련 위험 행동 억제력은 오퍼스급보다는 여전히 낮다.
</div>

Anthropic이 지난 2월 출시한 'Sonnet 4.6'을 4개월 만에 교체했다. 6월 30일(현지시간) 공개된 Claude Sonnet 5는 이날부터 무료·Pro 플랜의 기본 모델이 됐고, Max·Team·Enterprise 사용자와 Claude Code, Claude Platform(API)에서도 `claude-sonnet-5`로 곧바로 이용할 수 있다.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/uhJJgc-0iTQ" width="100%" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Building more effective AI agents (Anthropic)"></iframe>
</div>

## 오퍼스급 성능을 절반 가격에

Anthropic은 이번 발표에서 "몇 달 전만 해도 더 크고 비싼 모델이 필요했던 수준의 계획 수립·도구 사용·자율 실행을 해낸다"고 설명했다. 지금까지 소넷(Sonnet)급 모델은 코딩·도구 사용의 입문 단계였고, 진짜 에이전트 성능은 오퍼스(Opus)급의 몫이었다. 이번 버전은 그 격차를 좁히는 데 초점을 맞췄다.

<div class="article-stats">
<strong>출시일</strong> 2026년 6월 30일<br/>
<strong>기본 모델 전환</strong> 무료·Pro 플랜 즉시 적용<br/>
<strong>도입 가격</strong> 입력 $2 / 출력 $10 (100만 토큰당, 8월 31일까지)<br/>
<strong>정가 전환</strong> 9월 1일부터 입력 $3 / 출력 $10 → $15
</div>

## 벤치마크로 본 실력 — 오퍼스 4.8과의 격차

Anthropic이 공개한 에이전트 코딩 벤치마크에서 Sonnet 5는 63.2%를 기록해 전작 Sonnet 4.6(58.1%)을 크게 앞섰고, 상위 모델 Opus 4.8(69.2%)에도 상당히 근접했다. 지식 작업 평가에서는 오히려 Opus 4.8을 소폭 웃도는 결과가 나왔다.

| 모델 | 에이전트 코딩 벤치마크 | 100만 토큰당 가격(입력/출력) |
|---|---|---|
| Sonnet 4.6 | 58.1% | $3 / $15 |
| **Sonnet 5** | **63.2%** | $2~3 / $10~15 |
| Opus 4.8 | 69.2% | $5 / $25 |

Anthropic은 에이전트 검색 평가 BrowseComp와 컴퓨터 사용 평가 OSWorld-Verified에서도 Sonnet 5의 비용 대비 성능 곡선을 공개했다. 낮은 노력(effort) 수준에서도 Sonnet 4.6보다 확실히 개선됐고, 노력 수준을 높이면 일부 과제에서 Opus 4.8과 맞먹는 수준까지 도달한다.

<div class="article-callout tip">
Anthropic 스스로도 "더 높은 정확도가 필요한 과제에는 여전히 Opus 4.8이 낫다"고 인정한다. 실무에서는 노력(effort) 수준을 과제 난이도에 맞춰 조절해, 단순 반복 작업은 Sonnet 5로 비용을 아끼고 고난도 판단이 필요한 작업만 Opus로 넘기는 이원화 전략이 합리적이다.
</div>

## 안전성 평가 — 개선됐지만 오퍼스만큼은 아니다

Anthropic의 사전 배포 안전성 평가에 따르면 Sonnet 5는 Sonnet 4.6보다 전반적인 '바람직하지 않은 행동' 발생률이 낮다. 악의적 요청 거부와 프롬프트 인젝션(하이재킹 시도) 저항력이 개선됐고, 환각과 아첨 행동 비율도 낮아졌다.

<div class="article-callout info">
다만 Anthropic은 자동화된 행동 감사에서 Sonnet 5가 상위 모델인 Opus 4.8, Claude Mythos Preview보다는 여전히 높은 오정렬(misaligned) 행동 비율을 보였다고 밝혔다. 사이버보안 관련 위험 작업 수행 능력도 Opus급보다 훨씬 낮게 설계됐으며, Firefox 취약점 공격 개발 평가에서는 완전한 익스플로잇 성공 사례가 없었다(부분 성공률만 Sonnet 4.6보다 소폭 상승). 이에 따라 Opus 4.7·4.8과 동일한 수준의 사이버 가드레일이 기본 적용된다.
</div>

## 경쟁 구도 — '누가 더 싸게, 안정적으로'

Sonnet 5의 등장은 업계 전반의 흐름과 맞물린다. TechCrunch는 이번 출시가 최근 나온 OpenAI의 GPT-5.6 Sol(서브에이전트 분할 실행), 구글의 Gemini 3.5 Flash(대화형에서 에이전트형으로 전환) 발표와 같은 맥락이라고 짚었다. 에이전트 능력 자체는 이제 모든 가격대의 '기본값'이 됐고, 남은 경쟁 축은 "누가 더 싸고 신뢰성 있게 자율 작업을 해내느냐"로 옮겨가고 있다는 진단이다.

실제로 Sonnet 5는 Opus 4.8은 물론 GPT-5.5, 제미나이 3.1 프로보다 저렴하게 책정됐다(다만 제미나이 3.5 플래시보다는 여전히 비싸다). Zapier·Lovable 등 초기 접근 파트너들은 "이전 모델이라면 중간에 멈췄을 다단계 작업을 끝까지 자율적으로 완수했다"고 평가했다.

## 시사점

Sonnet 5는 새로운 모델이라기보다 '가격 재편'에 가깝다. Anthropic은 소넷급 모델에도 오퍼스급에 근접한 에이전트 능력을 담아, 도입 가격 기준으로 오퍼스 대비 5분의 1 이하의 출력 단가를 제시했다. 다만 토크나이저 변경으로 동일 입력이 이전보다 최대 1.35배 많은 토큰으로 계산될 수 있어, 실사용 비용 절감폭은 워크로드에 따라 달라질 수 있다는 점은 유의할 부분이다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.anthropic.com/news/claude-sonnet-5" target="_blank" rel="noopener">Anthropic 공식 발표 — Introducing Claude Sonnet 5 (2026.06.30)</a><br/>
· <a href="https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/" target="_blank" rel="noopener">TechCrunch — Anthropic launches Claude Sonnet 5 as a cheaper way to run agents (6/30)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic이 6월 30일 Claude Sonnet 5를 출시, 무료·Pro 플랜 기본 모델로 즉시 전환</li>
<li>에이전트 코딩 벤치마크 63.2% — 전작 대비 대폭 개선, 오퍼스 4.8(69.2%)에 근접</li>
<li>가격은 입력 $2·출력 $10(8월 31일까지 도입가), 9월부터 $3·$15로 정가 전환 — 오퍼스 4.8보다 저렴</li>
<li>안전성: 환각·아첨 비율 개선, 프롬프트 인젝션 저항력 강화 — 다만 오퍼스급보다 오정렬 행동은 여전히 높음</li>
<li>사이버보안 위험 작업 수행력은 오퍼스급보다 낮게 설계, Opus 4.7·4.8과 동일한 가드레일 기본 적용</li>
<li>OpenAI GPT-5.6 Sol, 구글 Gemini 3.5 Flash와 함께 '에이전트 AI 기본값 경쟁'이 가격·신뢰성 싸움으로 전환</li>
</ul>
</div>
