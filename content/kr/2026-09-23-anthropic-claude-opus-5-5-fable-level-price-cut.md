---
title: "Anthropic '클로드 오퍼스 5.5' 공개…Fable급 성능을 20% 낮춘 가격에"
summary: "Anthropic이 9월 22일 클로드 오퍼스 5.5를 내놨다. 상위 모델 Fable 5.1 수준의 성능을 내면서도 입력·출력 토큰 가격은 오퍼스 5보다 20% 낮췄고, 일반 작업 기준 운영 비용은 40% 절감된다. 코딩·컴퓨터 사용·지식 작업 벤치마크에서 오퍼스 5를 큰 폭으로 앞섰다."
category: "ai-news"
date: "2026-09-23"
readingTime: 6
tags: ["Anthropic", "클로드", "오퍼스5.5", "AI모델", "코딩AI"]
---

<div class="article-tldr">
Anthropic이 2026년 9월 22일 차세대 모델 '클로드 오퍼스 5.5(Claude Opus 5.5)'를 공개했다. 회사는 이 모델이 대부분의 업무에서 상위 라인업인 Fable 5.1 수준의 성능을 내며, 에이전트 코딩·지식 작업·컴퓨터 사용 등에서는 오히려 이를 앞선다고 밝혔다. 동시에 입력·출력 토큰 가격을 오퍼스 5보다 20% 내렸고, 일반적인 워크로드 기준 운영 비용은 40% 절감된다. 출시 첫날부터 Claude 앱·API는 물론 AWS·구글 클라우드·MS 애저, 깃허브 코파일럿에서 바로 쓸 수 있다.
</div>

Anthropic이 9월 22일(현지시간) 새로운 대형 언어모델 '클로드 오퍼스 5.5'를 정식 출시했다. 회사는 이번 모델을 "성능과 안전성 양쪽에서 오퍼스 5를 뛰어넘는 큰 진전"이라고 설명했다. 핵심은 두 가지다. 상위급 성능을 더 낮은 가격에 제공한다는 점, 그리고 코딩·에이전트 작업에서 실측 성능이 눈에 띄게 올랐다는 점이다.

## 값은 내리고 성능은 올렸다

오퍼스 5.5의 API 가격은 입력 100만 토큰당 4달러, 출력 100만 토큰당 20달러다. 각각 오퍼스 5의 5달러·25달러보다 20%씩 낮아졌다. 반복 호출에서 비용을 크게 좌우하는 캐시 읽기 가격은 100만 토큰당 0.20달러로, 오퍼스 5의 0.50달러 대비 60% 저렴하다. Anthropic은 일반적인 작업 기준으로 오퍼스 5.5의 실제 운영 비용이 오퍼스 5보다 약 40% 낮으며, 출력 생성 속도는 30% 이상 빨라졌다고 밝혔다.

<div class="article-stats">
<strong>출시일</strong> 2026년 9월 22일<br/>
<strong>입력/출력 가격</strong> 100만 토큰당 $4 / $20 (오퍼스 5 대비 20%↓)<br/>
<strong>캐시 읽기</strong> 100만 토큰당 $0.20 (60%↓)<br/>
<strong>운영 비용</strong> 일반 작업 기준 40% 절감<br/>
<strong>출력 속도</strong> 오퍼스 5 대비 30% 이상 향상
</div>

## 코딩·에이전트 벤치마크에서 큰 폭 상승

Anthropic이 공개한 벤치마크에서 오퍼스 5.5는 코딩·컴퓨터 사용·지식 작업 전반에서 오퍼스 5를 앞섰다. 특히 실제 개발 환경을 흉내 낸 터미널·코딩 벤치마크의 상승 폭이 컸다.

| 벤치마크 | 오퍼스 5.5 | 오퍼스 5 |
|---|---|---|
| Terminal-Bench 4.0 (터미널 작업) | 66.4% | 52.3% |
| CursorBench 4.0 (에디터 코딩) | 57.8% | 46.6% |
| FrontierCode v1.1 (난이도 높은 코딩) | 54.4% | 48.0% |
| OSWorld 2.0 (컴퓨터 사용, 부분점수) | 81.8% | 74.0% |
| GDPval-AA v2.1 (지식 작업, Elo) | 1846 | 1708 |

Anthropic은 오퍼스 5.5가 여러 벤치마크에서 OpenAI의 GPT-6 아스트라(Astra)에 필적하거나 이를 넘어서면서도, 비용은 그 20~40% 수준이라고 주장했다. 한 초기 테스터는 20만 줄 규모의 코드베이스를 3시간 이내에 감사했다고 전했는데, 이는 오퍼스 5로 20시간 넘게 걸리던 작업이다. 68만 줄 규모의 코드 마이그레이션을 하루 안에 끝낸 사례도 소개됐다.

<div class="article-callout tip">
가격 인하와 캐시 비용 절감이 겹치면서, 반복적인 코드 리뷰·리팩터링처럼 같은 컨텍스트를 여러 번 호출하는 에이전트 워크플로에서 체감 비용 절감 폭이 특히 크다. 대규모 코드베이스를 다루는 팀이라면 오퍼스 5 기반 파이프라인의 비용을 다시 계산해 볼 만하다.
</div>

## 안전성·커뮤니케이션도 손봤다

Anthropic은 성능뿐 아니라 안전성 지표도 강조했다. 회사는 오퍼스 5.5가 자체 자동 행동 감사(behavioral audit)에서 "지금까지 나온 어떤 모델보다 우수한 점수"를 받았고, 프롬프트 인젝션 저항성은 그레이 스완(Gray Swan) 벤치마크에서 상위 모델 Fable 5.1과 동률을 기록했다고 밝혔다. 사이버보안·생물학·모델 증류(distillation) 방지 영역의 안전장치도 함께 적용됐다.

응답 방식도 개선됐다. 오퍼스 5.5는 가장 중요한 정보를 응답 앞머리에 배치하고, 전문 용어 사용을 줄이며, 사용자가 제시한 작문 가이드라인을 더 잘 따른다는 설명이다.

<div class="article-callout info">
Anthropic은 출시에 맞춰 Pro·Max·Team 및 좌석 기반 엔터프라이즈 요금제의 5시간 사용량 한도를 상향했고, 9월 22일부터 10월 22일 사이 한 번 쓸 수 있는 사용량(rate limit) 리셋도 제공한다.
</div>

## 의미와 전망

오퍼스 5.5는 '더 비싼 상위 모델'과 '더 싼 하위 모델'이라는 이분법을 흐리는 방향으로 움직였다. 상위급 성능을 하위급 가격대에 밀어 넣는 전략은, 같은 날 경쟁사들이 잇따라 가격을 내리며 벌어지고 있는 프런티어 모델 가격 경쟁과도 맞닿아 있다. 성능 우위만으로는 고객을 붙잡기 어려워진 시장에서, '성능 대비 비용(price-performance)'이 다음 승부처가 되고 있음을 보여주는 출시다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.anthropic.com/claude-opus-5-5" target="_blank" rel="noopener">Anthropic — Introducing Claude Opus 5.5 (공식 발표)</a><br/>
· <a href="https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot/" target="_blank" rel="noopener">GitHub Changelog — 깃허브 코파일럿에서 오퍼스 5.5 지원 (9/22)</a><br/>
· <a href="https://www.macrumors.com/2026/09/22/anthropic-claude-opus-5-5/" target="_blank" rel="noopener">MacRumors — Anthropic Launches Claude Opus 5.5 (9/22)</a><br/>
· <a href="https://9to5mac.com/2026/09/22/anthropic-upgrades-claude-with-new-opus-5-5-model-details-here/" target="_blank" rel="noopener">9to5Mac — Anthropic upgrades Claude with new Opus 5.5 model (9/22)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic이 9월 22일 클로드 오퍼스 5.5를 출시, 상위급 Fable 5.1 수준 성능을 표방</li>
<li>입력·출력 가격 20%↓, 캐시 읽기 60%↓, 일반 작업 운영 비용 40% 절감, 출력 속도 30%↑</li>
<li>Terminal-Bench 4.0 66.4%·CursorBench 4.0 57.8% 등 코딩·컴퓨터 사용 벤치마크에서 오퍼스 5 대폭 상회</li>
<li>여러 벤치마크에서 GPT-6 아스트라에 필적하며 비용은 20~40% 수준이라 주장</li>
<li>Claude 앱·API·AWS·구글 클라우드·애저·깃허브 코파일럿에서 출시 당일부터 이용 가능</li>
</ul>
</div>
