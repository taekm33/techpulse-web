---
title: "메타, 코딩 특화 AI 'Muse Spark 1.1' 공개 — 저커버그 3년 만에 X 복귀 게시물"
summary: "메타 슈퍼인텔리전스랩스가 에이전틱 코딩·툴 사용에 특화된 멀티모달 모델 Muse Spark 1.1을 공개하고 개발자용 Meta Model API 퍼블릭 프리뷰를 시작했다. 입력 100만 토큰당 1.25달러라는 공격적 가격으로 OpenAI·Anthropic이 장악한 코딩 AI 시장에 도전장을 던졌다."
category: "ai-news"
date: "2026-07-10"
readingTime: 5
tags: ["MuseSpark", "Meta", "에이전틱코딩", "슈퍼인텔리전스랩스", "AI모델API"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — 메타가 2026년 7월 9일(현지시간) 에이전틱 코딩·툴 사용·컴퓨터 사용에 특화된 멀티모달 추론 모델 <strong>Muse Spark 1.1</strong>을 공개했다. 동시에 개발자가 API로 접근할 수 있는 <strong>Meta Model API</strong> 퍼블릭 프리뷰도 시작해, 메타도 OpenAI·Anthropic처럼 유료 API 사업에 뛰어들었다. 가격은 입력 100만 토큰당 1.25달러·출력 100만 토큰당 4.25달러로 책정됐다. 마크 저커버그는 이번 출시를 알리며 2023년 이후 약 3년 만에 X(옛 트위터)에 직접 글을 올렸다.
</div>

메타 슈퍼인텔리전스랩스(MSL)는 7월 9일 공식 블로그를 통해 Muse Spark 1.1을 발표했다. 지난 4월 공개된 초대 Muse Spark의 후속작으로, 계획·오케스트레이션이 필요한 에이전트 작업과 대규모 코드베이스에서의 버그 수정·기능 구현·마이그레이션 성능을 크게 끌어올렸다고 회사는 설명했다.

## 무엇이 달라졌나 — 에이전트·코딩·컴퓨터 사용

메타에 따르면 Muse Spark 1.1은 100만 토큰 컨텍스트 윈도우를 능동적으로 관리하며, 이전 작업 내용을 기억하고 필요한 정보만 압축해 유지한다. 메인 에이전트로 동작할 때는 상황을 파악해 계획을 세우고 병렬 서브에이전트에 실행을 위임하며, 서브에이전트로 동작할 때는 맡은 작업 범위를 지키고 필요 시 메인 에이전트에게 에스컬레이션한다.

컴퓨터 사용 영역에서는 매 단계 클릭 대신 자동화가 빠를 때는 스크립트를 작성하고, 직접 조작이 간단할 때는 클릭하는 식으로 상황에 따라 전략을 바꾸도록 학습됐다고 메타는 밝혔다. 코딩 영역에서는 플래닝 모드·목표 조건화·서브에이전트 위임·컨텍스트 압축 등 널리 쓰이는 에이전틱 코딩 하네스와도 매끄럽게 맞물리도록 설계됐다.

<div class="article-stats">
<strong>공개일</strong> 2026년 7월 9일 (미국 현지시간)<br/>
<strong>모델 성격</strong> 멀티모달 추론·에이전틱 코딩·컴퓨터 사용 특화<br/>
<strong>컨텍스트 윈도우</strong> 100만 토큰<br/>
<strong>API 가격</strong> 입력 100만 토큰당 $1.25 · 출력 100만 토큰당 $4.25<br/>
<strong>제공 경로</strong> Meta AI 앱·meta.ai '싱킹' 모드 + Meta Model API 퍼블릭 프리뷰
</div>

## 가격 경쟁 — Claude Haiku·GPT-5.6과 비슷한 구간

테크크런치는 로이터를 인용해 이번 가격이 Anthropic의 Claude Haiku 4.5, OpenAI의 GPT-5.6 Luna와 비슷한 수준(다소 웃도는 정도)이라고 전했다. 메타의 메시지는 명확하다 — 대규모 에이전틱 워크로드, 버그 수정, 대규모 코드 마이그레이션처럼 기업들이 점점 더 AI 기업에 맡기려는 자동화 작업을 감당할 수 있다는 것.

| 구분 | 내용 |
|---|---|
| 초기 파트너 반응 | Replit CEO Amjad Masad "완전한 에이전틱 기반 모델"이라 평가 |
| | Cline CEO Saoud Rizwan "대규모 코딩 워크로드를 실제로 돌릴 수 있는 가격대의 강력한 툴 사용" |
| | Box VP Yashodha Bhavnani "엔터프라이즈 평가셋에서 최상위 프론티어 모델과 경쟁력 있는 성능" |
| 안전성 | Meta의 '고급 AI 스케일링 프레임워크' 기준 화학·생물, 사이버보안, 통제 상실 등 전 위험군에서 안전 마진 내 운영 확인 |

메타는 같은 주 화요일(7월 7일) 첫 이미지 생성 모델 'Muse Image'도 출시한 바 있어, 이번 주는 메타 AI 사업 확장의 분수령으로 평가된다.

<div class="article-callout tip">
기업이 코딩 에이전트 도입을 검토 중이라면 모델 벤치마크 점수만 볼 게 아니라 실제 워크로드 기준 토큰 단가·컨텍스트 관리 방식·기존 에이전틱 하네스와의 호환성을 함께 비교하는 것이 중요하다. Muse Spark 1.1의 등장으로 코딩 AI 시장의 가격 경쟁이 한층 치열해질 전망이다.
</div>

## 저커버그의 3년 만의 X 복귀

테크크런치에 따르면 마크 저커버그는 이번 출시를 알리며 X에 직접 글을 남겼는데, 이는 2023년 X(당시 트위터)가 브랜드를 바꾼 시점 이후 처음이다. 그는 Muse Spark를 "매우 저렴한 가격의 강력한 에이전틱·코딩 모델"이라 소개하며 "에이전틱 성능·툴 사용·컴퓨터 사용에서 가장 강하다"고 밝혔다. 그는 또한 "더 나올 것이 많다"고 덧붙여 후속 모델 출시를 예고했다.

<div class="article-callout info">
메타는 이번 발표에 앞서 4월 최초 Muse Spark, 7월 7일 Muse Image를 잇따라 선보이며 슈퍼인텔리전스랩스 출범 이후 모델 출시 속도를 눈에 띄게 높이고 있다. 알렉산더 왕이 이끄는 이 조직의 성과가 실제 기업 고객 확보로 이어질지가 다음 관전 포인트다.
</div>

## 의미와 전망

메타의 이번 진입은 다소 늦은 감이 있다. OpenAI와 Anthropic은 이미 오래전부터 유사한 에이전틱 코딩 모델을 제공해 왔다. 그러나 공격적인 가격 책정과 100만 토큰 컨텍스트, 기존 개발 도구와의 호환성을 앞세운 만큼 시장 판도에 적지 않은 영향을 줄 수 있다는 평가다. 코딩 AI를 둘러싼 경쟁이 성능뿐 아니라 가격과 생태계 호환성 싸움으로 확장되는 흐름이 뚜렷해지고 있다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/" target="_blank" rel="noopener">Meta AI 공식 블로그 — Introducing Muse Spark 1.1</a><br/>
· <a href="https://techcrunch.com/2026/07/09/meta-enters-the-crowded-ai-coding-battle-with-muse-spark-1-1/" target="_blank" rel="noopener">TechCrunch — Meta enters the crowded AI coding battle with Muse Spark 1.1 (7/9)</a><br/>
· <a href="https://fortune.com/2026/07/09/meta-muse-spark-1-1-release-alexandr-wang-superintelligence-labs-mark-zuckerberg/" target="_blank" rel="noopener">Fortune — Meta releases latest AI model Muse Spark 1.1 (7/9)</a><br/>
· <a href="https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/" target="_blank" rel="noopener">Meta AI 공식 블로그 — Introducing Muse Image and Muse Video</a>
</div>

<div class="article-keypoints">
<ul>
<li>메타 슈퍼인텔리전스랩스가 7월 9일 에이전틱 코딩 특화 모델 Muse Spark 1.1 공개</li>
<li>Meta Model API 퍼블릭 프리뷰 동시 시작 — 입력 100만 토큰당 $1.25·출력 $4.25</li>
<li>100만 토큰 컨텍스트, 서브에이전트 위임·컴퓨터 사용·코딩 하네스 호환 강화</li>
<li>Claude Haiku 4.5·GPT-5.6 Luna와 비슷한 가격대로 OpenAI·Anthropic에 도전</li>
<li>저커버그, 2023년 이후 처음으로 X에 직접 출시 소식 게시</li>
</ul>
</div>
