---
title: "구글, 제미나이 3.6 Flash·3.5 Flash-Lite 출시…더 싸고 빨라졌지만 'Pro'는 또 없었다"
summary: "구글 딥마인드가 7월 21일 제미나이 3.6 Flash와 3.5 Flash-Lite, 그리고 보안 특화 3.5 Flash Cyber를 공개했다. 3.6 Flash는 출력 토큰을 17% 줄이고 가격을 낮췄으며 코딩·지식노동 성능도 끌어올렸다. 다만 오래 기다려온 플래그십 3.5 Pro는 이번에도 빠졌고, 딥마인드는 제미나이 4 사전학습 착수를 예고했다."
category: "ai-news"
date: "2026-07-22"
readingTime: 6
tags: ["구글", "제미나이", "Gemini", "AI모델", "AI가격경쟁"]
---

<div class="article-tldr">
구글 딥마인드가 7월 21일(현지시간) 제미나이 3.6 Flash와 3.5 Flash-Lite, 보안 특화 모델 3.5 Flash Cyber를 한꺼번에 공개했다. 주력 모델인 3.6 Flash는 이전 3.5 Flash 대비 출력 토큰을 17% 적게 쓰면서 가격은 낮췄고, 코딩·지식노동·컴퓨터 사용 벤치마크에서 고르게 개선됐다. 지식 컷오프도 2025년 1월에서 2026년 3월로 당겨졌다. 하지만 5월부터 기다려온 플래그십 '제미나이 3.5 Pro'는 이번에도 빠졌다. 딥마인드는 3.5 Pro는 파트너 테스트 중이며, 동시에 '가장 야심 찬' 제미나이 4 사전학습을 시작했다고 밝혔다.
</div>

구글 딥마인드가 7월 21일 신규 제미나이 모델 세 종을 공개했다. 에이전트를 대규모로 운영하는 고객을 겨냥해 효율·지연시간·안정성을 앞세운 '워크호스(주력)' 라인업으로, 코딩과 비용 효율을 정조준했다. 하지만 이번 발표에서 가장 주목받은 건 무엇을 냈느냐가 아니라 무엇이 빠졌느냐다. 구글의 최상위 플래그십 '제미나이 3.5 Pro'가 또 한 번 자리를 비웠다.

## 제미나이 3.6 Flash — 토큰 17% 절감에 가격 인하

이번 발표의 핵심은 주력 모델 제미나이 3.6 Flash다. 지난 5월 I/O 2026에서 공개된 3.5 Flash의 후속으로, 개발자·고객 피드백을 반영해 "작업 전반에서 토큰 효율을 높였다"는 것이 구글의 설명이다. Artificial Analysis Index 기준 이전 3.5 Flash 대비 출력 토큰을 17% 적게 쓰고, 다단계 워크플로를 처리할 때 추론 단계와 도구 호출 횟수도 줄였다.

가격도 내렸다. 출력 100만 토큰당 9달러였던 3.5 Flash에서 7.5달러로 낮췄고, 입력은 100만 토큰당 1.5달러다. 성능은 올리고 값은 내리는, 최근 격화된 AI 가격 경쟁의 전형적인 수순이다.

<div class="article-stats">
<strong>발표일</strong> 2026년 7월 21일 · 구글 딥마인드<br/>
<strong>공개 모델</strong> 제미나이 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber<br/>
<strong>3.6 Flash 가격</strong> 입력 $1.50 · 출력 $7.50 (100만 토큰당, 이전 출력 $9)<br/>
<strong>출력 토큰</strong> 3.5 Flash 대비 17% 절감 (Artificial Analysis Index)<br/>
<strong>지식 컷오프</strong> 2025년 1월 → 2026년 3월<br/>
<strong>빠진 것</strong> 플래그십 제미나이 3.5 Pro (2월 이후 미갱신)
</div>

## 벤치마크로 본 개선

구글이 제시한 수치를 보면 3.6 Flash는 코딩과 연구 작업에서 뚜렷하게 나아졌다. 코딩에서는 "더 적은 불필요한 코드 수정과 실행 루프로 더 높은 정밀도"를 낸다는 설명이다.

| 항목 | 벤치마크 | 3.5 Flash | 3.6 Flash |
|---|---|---|---|
| 코딩 | DeepSWE | 37% | 49% |
| ML 연구 | MLE Bench | 49.7% | 63.9% |
| 지식노동 | GDPval-AA | 1349 | 1421 |
| 컴퓨터 사용 | OSWorld-Verified | 78.4% | 83% |

## 3.5 Flash-Lite와 Flash Cyber

함께 공개된 제미나이 3.5 Flash-Lite는 에이전트 검색·문서 처리처럼 높은 처리량과 낮은 지연이 필요한 작업용이다. 3월의 3.1 Flash-Lite보다 "확연히 나은 품질"을 내면서 가격은 입력 100만 토큰당 0.3달러, 출력 2.5달러로 이 클래스에서 가장 저렴한 축이다. Terminal-Bench 2.1(54% vs 31%)과 긴 문맥 처리(GDM-MRCR v2 72.2% vs 60.1%)에서 전작을 크게 앞섰다.

세 번째는 보안 특화 모델 3.5 Flash Cyber다. 코드 보안 취약점을 대규모로 탐지·검증·패치하는 데 초점을 맞췄고, 구글의 자동 보안 도구 코드멘더(CodeMender)가 이 모델의 에이전트를 활용한다. 다만 오남용 우려 때문에 정부·신뢰 파트너 대상 제한적 파일럿으로만 먼저 제공된다.

<div class="article-callout info">
제미나이 3.6 Flash와 3.5 Flash-Lite는 발표 당일부터 제미나이 앱에서 쓸 수 있고, Flash-Lite는 검색에도 적용된다. 개발자는 구글 안티그래비티(Antigravity)·AI 스튜디오·안드로이드 스튜디오를 통해 접근할 수 있다.
</div>

## 그런데 왜 또 'Pro'는 없나

이번 발표의 진짜 이야기는 빈자리에 있다. 구글의 최상위 플래그십 제미나이 Pro는 2월 이후 갱신되지 않았다. 그사이 OpenAI는 GPT-5.5를 내고 GPT-5.6 계열을 배포하기 시작했고, Anthropic은 Claude Opus 4.8·Sonnet 5를 출시하고 Fable 5 접근을 넓혔다. 경쟁 랩들의 출시 속도가 그만큼 빨랐다.

앞서 지난주 블룸버그는 구글이 내부 성능 목표를 맞추지 못해 3.5 Pro 출시가 지연되고 있다고 보도했다(본지 7월 19일 기사 참조). 딥마인드 제품 총괄 로건 킬패트릭은 21일 3.5 Pro를 파트너와 함께 테스트 중이며 "곧 안착하기를 바란다"고 밝혔다.

<div class="article-callout tip">
Flash·Flash-Lite 같은 '효율' 모델을 먼저 촘촘히 내놓는 전략은 대규모 에이전트 운영 고객을 붙잡는 데 유효하다. 그러나 복잡한 추론·코딩의 최상단을 책임지는 Pro 공백이 길어질수록, 프런티어 이미지 경쟁에서는 불리하게 작용할 수 있다.
</div>

## 의미와 전망

구글은 이번 라인업으로 '싸고 빠르고 안정적인' 프로덕션 모델이라는 실리를 챙겼다. 가격 인하와 토큰 절감은 에이전트를 대량으로 돌리는 기업 입장에서 직접적인 비용 절감으로 이어진다. 동시에 딥마인드는 "가장 야심 찬 사전학습에 이미 착수했다"며 제미나이 4를 예고해, 다음 승부처를 최상위 모델로 옮기려는 의도를 드러냈다. 관건은 Pro 공백을 언제 메우느냐다. 실속형 모델로 저변을 지키는 사이 플래그십을 완성하지 못하면, 최상위 코딩·추론 워크로드의 주도권을 경쟁사에 계속 내줄 위험이 있다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" target="_blank" rel="noopener">Google (The Keyword) — 제미나이 3.6 Flash·3.5 Flash-Lite·Flash Cyber 공식 발표</a><br/>
· <a href="https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/" target="_blank" rel="noopener">TechCrunch — 구글, 신규 제미나이 3종 공개…하지만 3.5 Pro는 없었다 (7/21)</a><br/>
· <a href="https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/" target="_blank" rel="noopener">9to5Google — 제미나이 3.6 Flash·3.5 Flash-Lite 출시, 제미나이 4 예고 (7/21)</a><br/>
· <a href="https://www.bloomberg.com/news/articles/2026-07-16/google-gemini-launch-delayed-as-tech-falls-short-of-internal-goals" target="_blank" rel="noopener">Bloomberg — 제미나이 출시 지연, 내부 목표 미달 (7/16, 배경)</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글 딥마인드, 7월 21일 제미나이 3.6 Flash·3.5 Flash-Lite·3.5 Flash Cyber 공개</li>
<li>3.6 Flash: 출력 토큰 17% 절감, 출력 가격 $9→$7.5, 지식 컷오프 2026년 3월로</li>
<li>코딩(DeepSWE 49% vs 37%)·ML연구(MLE Bench 63.9% vs 49.7%) 등 전반 개선</li>
<li>Flash Cyber는 보안 취약점 탐지·패치용, 정부·신뢰 파트너 대상 제한 파일럿</li>
<li>플래그십 3.5 Pro는 이번에도 제외 — 딥마인드는 제미나이 4 사전학습 착수 예고</li>
</ul>
</div>
