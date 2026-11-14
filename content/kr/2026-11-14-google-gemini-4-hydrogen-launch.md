---
title: "구글 '제미나이 4 하이드로젠' 출시 — 무료 이용자도 앱·검색에서 사용, API는 3.8 플래시의 두 배 가격(내년 1월부터 같아져)"
summary: "구글이 11월 12일(미국 시간, 한국 시간 13일 새벽 3시) 빠른 실행용 모델 Gemini 4 Hydrogen을 공개하고 제미나이 앱·구글 검색·AI 스튜디오·API에 순차 배포를 시작했다. API 가격은 100만 토큰당 입력 1.50달러·출력 7.50달러로, 지금은 Gemini 3.8 플래시의 두 배지만 플래시 가격이 2027년 1월 1일 같은 수준으로 오른다. 국내 이용자가 확인할 제공 범위, 전환 시점 판단 기준, 미확인 사항을 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-11-14"
readingTime: 7
tags: ["구글", "Google", "제미나이", "Gemini 4 Hydrogen", "하이드로젠", "AI 모델", "API 가격", "구글 검색"]
---

<div class="article-tldr">
구글이 <strong>2026년 11월 12일 오전 10시(태평양 시간), 한국 시간 13일 새벽 3시</strong>에 <a href="https://blog.google/intl/ko-kr/company-news/technology/introducing-gemini-4-hydrogen-kr/" target="_blank" rel="noopener">제미나이 4 하이드로젠(Gemini 4 Hydrogen)</a>을 공개했다. 장기 추론용 카본·아르곤과 달리 코딩·에이전트 작업을 빠르게 처리하는 모델로, 기존 3.8 플래시의 후속이다. 무료 이용자도 제미나이 앱(자동 모델 선택)과 구글 검색에서 쓰게 되고, API 가격은 100만 토큰당 <strong>입력 1.50달러·출력 7.50달러</strong>다.
</div>

이 글은 구글 공식 블로그(영문·한국어), Gemini API 문서와 가격표, 국내외 보도를 바탕으로 한 공개 자료 분석이다. 모델을 돌려 속도나 점수를 재현하지 않았으며, 아래 수치는 모두 구글 발표 또는 보도 내용이다.

## 누구에게 중요한가

- **제미나이 앱·구글 검색을 쓰는 일반 이용자**: 별도 구독 없이 바뀐다. 검색의 AI 모드 기본 모델이 하이드로젠으로 교체됐고, 앱에서는 무료 계정도 자동 모델 선택으로 하이드로젠 답변을 받는다.
- **Gemini 3.8 플래시로 서비스를 운영하는 국내 개발사**: 단가가 지금 당장은 두 배다. 다만 플래시가 내년 1월 1일 같은 가격으로 오르므로, 남은 약 7주 동안 전환 테스트를 끝내는 것이 현실적인 일정이다.
- **구글 AI 프로·울트라 구독자**: 에이전트 개발 환경 안티그래비티와 구글 스프레드시트 속 제미나이에서 먼저 쓸 수 있다.
- **콘텐츠·쇼핑몰 운영자**: 구글은 이번을 "검색 역대 최대 모델 업그레이드"라고 불렀다. 검색 답변에 표·이미지·비교가 늘어나는 만큼 유입 경로 변화를 지켜볼 필요가 있다.

## 확인된 사실 — 구글 공식 자료 기준

<div class="article-stats">
<strong>공개일</strong> 2026년 11월 12일 10시(태평양 시간) = 한국 시간 11월 13일 03시, 순차 배포<br/>
<strong>API 모델 ID</strong> gemini-4-hydrogen (무료·유료 등급 모두 제공)<br/>
<strong>가격(100만 토큰당, 유료)</strong> 입력 1.50달러 · 출력 7.50달러(사고 토큰 포함) · 캐시 0.075달러(암묵적 캐싱만)<br/>
<strong>컨텍스트</strong> 입력·사고·출력 합산 1,048,576토큰, 동기 출력 최대 65,536토큰, 백그라운드 실행 시 최대 100만 토큰<br/>
<strong>사고 수준</strong> low · medium · high(기본) · xhigh(신규)<br/>
<strong>회사 제시 성능</strong> AA 지능 지수 51점(아르곤 50점, xhigh 54점), 터미널벤치 4.1 57%(3.8 플래시 18.2%), 작업 완료 2.5배 빠름<br/>
<strong>제공처</strong> AI 스튜디오·Gemini API, 비즈니스용 제미나이, 제미나이 앱, 구글 검색, 안티그래비티(AI 프로·울트라)
</div>

<a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/" target="_blank" rel="noopener">구글 딥마인드 코라이 카바쿨루 수석부사장의 발표문</a>은 하이드로젠을 "단독으로 일상 업무를 처리하거나, 카본·아르곤과 짝을 이뤄 실행 엔진 역할을 하는 모델"로 소개했다. 같은 날 안티그래비티에는 작업 단계마다 카본과 하이드로젠을 자동으로 바꿔 쓰는 <strong>오케스트레이터</strong>가 추가됐다. 구글은 터미널벤치 4.0에서 오케스트레이터가 카본 단독에 가까운 성공률을 내면서 할당량은 평균 24% 덜 쓰고 19% 빨리 끝냈다고 밝혔다.

<a href="https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen" target="_blank" rel="noopener">개발자 문서</a>는 3.8 플래시 대비 지어낸 주장을 5분의 1 이하로 줄였고, 맥락이 부족하면 추측 대신 그 사실을 알린다고 설명한다. Gemini Managed Agents의 안티그래비티 에이전트 기본 모델도 하이드로젠으로 바뀌었다. 안전성 항목에서는 에이전트 작업의 과잉 개입을 최대 81% 줄였고, 내부 정직성 평가에서 96.7%를 기록했다고 밝혔다.

### 가격: 지금은 두 배, 1월부터는 같다

<a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener">공식 가격표</a>에서 3.8 플래시는 <strong>2026년 12월 31일까지 입력 0.75달러·출력 3.75달러</strong>, <strong>2027년 1월 1일부터 1.50달러·7.50달러</strong>로 적혀 있다. 하이드로젠은 처음부터 1.50달러·7.50달러이고 변경 예정 표시가 없다. 즉 연말까지는 같은 작업량에 비용이 두 배이고, 1월부터는 표준 입출력 단가가 같아진다. 캐시 단가는 1월 이후에도 다르다(하이드로젠 0.075달러, 플래시 0.15달러). 무료 등급에서는 입력 내용이 구글 제품 개선에 쓰이고, 유료 등급에서는 쓰이지 않는다고 가격표에 명시돼 있다.

## 미확인·전망 (사실과 구분)

- **독립 검증**: 벤치마크와 속도 수치는 구글 발표다. AI타임스는 박스(Box) CEO가 자사 에이전트 정확도가 74%에서 79%로 올랐다고 밝혔고, 재피어 평가에서 51.1%로 아르곤(51.3%)과 비슷했다고 전했다. 같은 보도는 터미널벤치에서 클로드 소네트 5.5(63.9%)에는 못 미쳤다고 적었다. 이 글에서는 해당 평가 원문을 따로 확인하지 않았다.
- **한국어 성능**: 구글은 "AI 모드가 지원하는 모든 언어"에서 이해력이 좋아졌다고 했지만, <strong>한국어 전용 평가 수치는 공개되지 않았다</strong>(미확인).
- **국내 반영 시점**: 구글은 "전 세계 순차 배포"라고만 밝혔다. 국내 계정의 앱 모델 메뉴와 검색 AI 모드에 언제 완전히 반영되는지는 <strong>미확인</strong>이다. 발표 직후에는 메뉴에 보이지 않을 수 있다.
- **원화 가격**: API 가격은 달러로만 공개됐다. 아이티데일리는 입력 약 1,996원·출력 약 9,981원, 토큰포스트는 약 2,000원·1만 원으로 환산했지만 실제 청구액은 환율·부가세에 따라 달라진다(<strong>공식 원화 가격 미확인</strong>). 구글 AI 프로·울트라의 국내 구독료가 이번에 바뀌었는지도 확인되지 않았다.
- **모델 구조**: 보도에 따르면 모델 카드는 하이드로젠이 카본을 바탕으로 만들어졌다고 밝혔지만, 매개변수 수 등 내부 구조는 공개되지 않았다.

## 국내 이용자에게 미치는 영향

구글코리아 블로그에 발표문 한국어판이 같은 날 올라왔고, 지디넷코리아·AI타임스·IT조선 등 국내 매체도 13일 일제히 보도했다. 검색 쪽 변화는 <a href="https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/" target="_blank" rel="noopener">구글 검색 블로그</a>에 정리돼 있다. 여러 조건이 섞인 질문이나 오타가 있는 질문을 더 잘 이해하고, 질문을 하위 주제로 나눠 동시에 찾는 '쿼리 팬아웃'으로 더 넓은 링크를 연결한다는 내용이다. 9to5Google과 AI타임스는 하이드로젠이 AI 모드의 기본 모델이 됐고, AI 개요에서도 어려운 질문에 쓰인다고 전했다.

개발사에게 핵심은 전환 시점이다. 3.8 플래시를 쓰는 서비스라면 12월 31일까지는 플래시가 절반 가격이다. 한편 1월 1일부터 같은 가격이 되면, 그때부터는 구글이 내세운 품질 개선을 같은 돈으로 얻는 셈이 된다. 가격만 보면 "연말까지는 플래시로 운영하며 하이드로젠을 시험하고, 1월 전에 전환"하는 흐름이 자연스럽다. 다만 실제 비용은 사고 토큰 사용량에 좌우되므로, 같은 작업에서 두 모델의 총 토큰을 비교해야 한다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>일반 이용자</strong>: 제미나이 앱 모델 메뉴에서 '4 Hydrogen'이 보이는지 확인한다. 무료 계정은 메뉴 대신 자동 선택으로 적용된다. 검색 AI 모드 답변은 전처럼 출처 링크를 눌러 원문을 확인한다.<br/>
2. <strong>3.8 플래시 운영사</strong>: 실제 요청 샘플을 하이드로젠의 low·medium·high·xhigh 네 단계로 돌려 품질과 총 토큰을 비교하고, 기준을 넘는 가장 낮은 단계를 고른다(구글 문서 권장 방식).<br/>
3. <strong>전환 전 점검</strong>: 하이드로젠은 명시적 캐싱을 지원하지 않는다. 기존 코드가 명시적 캐시에 기대고 있다면 수정이 필요하다. 8,192처럼 낮게 걸어 둔 max_output_tokens는 사고 토큰 때문에 답이 잘릴 수 있으니 올린다.<br/>
4. <strong>비용 일정</strong>: 12월 31일 전후로 3.8 플래시 단가가 두 배가 되므로, 그 전에 월 예산과 전환 일정을 확정한다. 아르곤·카본을 쓰고 있다면 단순 반복 작업을 하이드로젠으로 넘길 수 있는지도 본다.<br/>
5. <strong>민감 데이터</strong>: 무료 등급 입력은 구글 제품 개선에 쓰인다. 고객 정보가 들어가는 시험은 유료 등급에서 한다.
</div>

이전 모델과의 관계는 TechPulse의 <a href="/2026-10-14-google-gemini-4-argon-broad-availability/">제미나이 4 아르곤 확대 출시 기사</a>에서 함께 볼 수 있다.

## 한계

이 글은 11월 14일 확인한 구글 공식 블로그(영문·한국어·검색·개발자), AI 스튜디오 개발자 문서와 가격표, 9to5Google·AI타임스·지디넷코리아·아이티데일리·토큰포스트 보도에 근거했다. 모델을 실행해 어떤 수치도 재현하지 않았다. 가격과 제공 범위는 바뀔 수 있으며, 모델 카드의 세부 안전성 평가는 다루지 않았다.

<p><em>최종 확인일 2026-11-14.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/intl/ko-kr/company-news/technology/introducing-gemini-4-hydrogen-kr/" target="_blank" rel="noopener">구글코리아 블로그 — '제미나이 4 하이드로젠(Hydrogen)'을 소개합니다 (2026-11-12)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/" target="_blank" rel="noopener">Google Blog — Introducing Gemini 4 Hydrogen (영문 원문)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/" target="_blank" rel="noopener">Google Blog — Gemini 4 Hydrogen: everyday coding and agentic workflows for developers</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/" target="_blank" rel="noopener">Google Blog — Google Search gets a major upgrade with Gemini 4 Hydrogen</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen" target="_blank" rel="noopener">Gemini API 문서 — What's new in Gemini 4 Hydrogen</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener">Gemini API 문서 — Gemini Developer API pricing</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://9to5google.com/2026/11/12/gemini-4-hydrogen-launch/" target="_blank" rel="noopener">9to5Google — Google announces Gemini 4 Hydrogen with 'significant leaps' in speed, intelligence</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.aitimes.com/news/articleView.html?idxno=217352" target="_blank" rel="noopener">AI타임스 — 구글, '제미나이 4 하이드로젠' 출시…상위 모델 '아르곤' 성능 추월</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.aitimes.com/news/articleView.html?idxno=217360" target="_blank" rel="noopener">AI타임스 — 구글 "검색 역대 최대 AI 모델 업그레이드"…최신 '하이드로젠' 적용</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://zdnet.co.kr/view/?no=20261113131244" target="_blank" rel="noopener">지디넷코리아 — 구글, '제미나이 4 하이드로젠' 공개…검색·코딩 속도 높여</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.itdaily.kr/news/articleView.html?idxno=242917" target="_blank" rel="noopener">아이티데일리 — 구글, 일상 업무 특화 '제미나이 4 하이드로젠' 출시</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.tokenpost.kr/news/ai/437353" target="_blank" rel="noopener">토큰포스트 — 구글 평가서 작업 2.5배 빨라…제미나이 4 하이드로젠 공개</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글, 한국 시간 11월 13일 새벽 3시 제미나이 4 하이드로젠 공개 — 카본·아르곤보다 빠른 실행용, 3.8 플래시 후속</li>
<li>무료 이용자도 제미나이 앱(자동 선택)·구글 검색에서 사용, AI 모드 기본 모델로 교체</li>
<li>API 100만 토큰당 입력 1.50달러·출력 7.50달러 — 연말까지 3.8 플래시의 두 배, 2027년 1월 1일부터 같은 단가</li>
<li>사고 수준 4단계(xhigh 신규), 명시적 캐싱 미지원 — 전환 전 코드 점검 필요</li>
<li>성능 수치는 구글 발표 기준, 한국어 전용 평가·국내 반영 시점·공식 원화 가격은 미확인</li>
</ul>
</div>
