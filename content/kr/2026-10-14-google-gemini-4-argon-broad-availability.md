---
title: "구글 '제미나이 4 아르곤' 일반 공개 — 유료 구독자·API 개발자부터, 한국 이용 조건은 아직 미확인"
summary: "구글이 2026년 10월 13일(미국 시간) 프런티어 모델 Gemini 4 Argon을 9월 30일 사이버 방어 파트너 한정 공개에 이어 개발자·기업·유료 구독자에게 넓혔다. 제미나이 앱과 검색 AI 모드는 Google AI Pro·Ultra 구독자, API는 유료 등급 전용이며 무료 이용자는 대상이 아니다. API 요금은 11월 30일까지 입력 100만 토큰당 2달러·출력 10달러의 출시 할인가이고 12월 1일부터 두 배가 된다. 국내 개발자와 구독자가 확인할 점을 공개 자료 기준으로 정리했다."
category: "ai-news"
date: "2026-10-14"
readingTime: 6
tags: ["구글", "제미나이", "Gemini 4 Argon", "Gemini API", "AI 모드"]
---

<div class="article-tldr">
구글이 2026년 10월 13일(미국 시간, 한국 시간 14일 새벽) 프런티어 모델 <strong>Gemini 4 Argon(제미나이 4 아르곤)</strong>의 이용 범위를 크게 넓혔다. 9월 30일 발표 때는 사이버 방어 파트너에게만 열었지만, 이번에는 <strong>유료 API 개발자·기업</strong>, 그리고 <strong>Google AI Pro·Ultra 구독자</strong>(제미나이 앱, 검색 AI 모드)가 쓸 수 있게 됐다. 무료 이용자는 대상이 아니다. API 요금은 <strong>11월 30일까지</strong> 출시 할인가(입력 100만 토큰당 2달러, 출력 10달러)이고 <strong>12월 1일부터 두 배</strong>로 오른다. 한국에서의 제공 여부와 원화 구독료는 공식 자료에 명시되지 않아 <strong>미확인</strong>이다.
</div>

이 글은 구글 공식 블로그·개발자 문서와 언론 보도를 바탕으로 한 공개 자료 분석이다. 모델을 실행하거나 벤치마크를 재현하지 않았다.

## 누구에게 중요한가

- **Gemini API로 서비스를 만드는 국내 개발팀**: 새 최상위 모델이 유료 등급에 바로 열렸고, 할인 기간이 7주 남짓이라 지금 평가하느냐가 비용에 영향을 준다.
- **Google AI Pro·Ultra 구독자**: 추가 결제 없이 제미나이 앱과 AI 모드에서 모델을 고를 수 있게 됐다(단, 국내 계정 적용 여부는 아래 '미확인' 참고).
- **보안 조직**: 구글은 사이버 방어용 'Fairwind 프로그램' 참여 기관을 수백 곳 더 늘린다고 밝혔다.
- **무료 이용자**: 이번 공개 대상이 아니다. 무료 제미나이 앱과 API 무료 등급에서는 Argon을 쓸 수 없다.

## 확인된 사실 — 구글 공식 자료 기준

구글 딥마인드의 코라이 카부크추오글루(Koray Kavukcuoglu)는 10월 13일 <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/" target="_blank" rel="noopener">공식 블로그</a>에서 Argon이 API를 통해 개발자와 기업에 "전 세계적으로" 제공된다고 밝혔다. 같은 날 <a href="https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" target="_blank" rel="noopener">제미나이 앱 공지</a>는 "Google AI Pro와 Ultra 구독자"가 Argon을 쓸 수 있다고 적었다.

<div class="article-stats">
<strong>발표 경과</strong> 9월 30일 공개(사이버 방어 파트너 한정) → 10월 13일 개발자·기업·유료 구독자로 확대<br/>
<strong>제미나이 앱·검색 AI 모드</strong> Google AI Pro·Ultra 구독자<br/>
<strong>Google Antigravity(에이전트 개발 도구)</strong> Ultra 구독자<br/>
<strong>Gemini API</strong> 유료 등급 전용, 모델 ID <code>gemini-4-argon</code><br/>
<strong>API 요금(출시 할인, ~11/30)</strong> 입력 100만 토큰당 2달러 / 출력 10달러(사고 토큰 포함)<br/>
<strong>API 요금(12/1~)</strong> 입력 4달러 / 출력 20달러<br/>
<strong>토큰 한도</strong> 입출력 통합 100만 토큰(구글 설명)
</div>

요금 세부는 <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noopener">Gemini API 가격 문서</a>에 나와 있다. 캐시된 입력은 100만 토큰당 0.10달러(12월부터 0.20달러)이며 자동(implicit) 캐싱만 지원한다. 배치 처리는 표준 요금의 절반이다. 문서는 Argon이 무료 등급에서 제공되지 않는다고 명시한다.

제미나이 앱에는 '작업(tasks)' 모드가 함께 들어왔다. 채팅창의 토글로 전환하며, 사용자가 컴퓨터를 떠나 있어도 제미나이가 일을 이어 간다고 구글은 설명한다. 연결 가능한 앱은 40개 이상이며 Instacart, OpenTable, Adobe, Shopify가 예로 나왔다. 해외 생활 서비스 위주라 국내 이용자에게 바로 쓸모 있는 연동은 제한적일 수 있다.

## 성능 주장 — 대부분 구글 자체 수치

구글은 Argon이 금융·코딩·법률·세무 업무를 묶은 Vals Index에서 1위, 로봇·공간 추론 벤치마크 ERQA에서 87%를 기록했다고 밝혔다. 9월 30일 <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" target="_blank" rel="noopener">첫 발표문</a>에는 장기 소프트웨어 엔지니어링 벤치마크 DeepSWE v1.1 77.9%가 실렸다. 간접 프롬프트 인젝션 벤치마크(Gray Swan)에서는 15회 적응형 공격 기준 성공률을 0.7%로 낮췄다고 했다.

외부 평가로는 <a href="https://www.engadget.com/2285023/google-gemini-4-argon-is-now-available-in-the-gemini-app-and-ai-mode-in-search/" target="_blank" rel="noopener">Engadget</a>이 Artificial Analysis 지수에서 Argon이 OpenAI GPT-6 Astra와 같은 수준이며, 출시 할인가 기준 작업당 비용은 60% 수준이라고 전했다. 이 수치는 보도를 옮긴 것으로 이 글에서 원자료를 확인하지 않았다. 할인 종료 뒤에는 비용 비교 결과가 달라질 수 있다.

## 미확인·전망 (사실과 구분)

- **한국 계정 적용 여부**: 구글 발표문은 "전 세계" 제공을 말하지만 국가 목록은 없다. <a href="https://blog.google/intl/ko-kr/products/gemini-4-argon-kr/" target="_blank" rel="noopener">구글 코리아 블로그의 9월 30일 한국어 발표문</a>에도 국내 일정은 없다. 국내 Pro·Ultra 계정에서 Argon이 보이는지는 **미확인**이다.
- **한국어 지원**: 제미나이 앱 자체는 <a href="https://support.google.com/gemini/answer/13575153?hl=ko" target="_blank" rel="noopener">고객센터 문서</a>상 대한민국과 한국어를 지원한다. 그러나 Argon의 한국어 성능과 AI 모드의 한국어 Argon 선택 가능 여부는 공식 언급이 없어 **미확인**이다. <a href="https://www.searchenginejournal.com/google-gemini-4-argon-ai-mode/592806/" target="_blank" rel="noopener">Search Engine Journal</a>은 AI 모드 적용이 단계적이며 지원 언어가 명시되지 않았다고 보도했다.
- **원화 구독료**: 보도 기준 미국 Google AI Pro는 월 19.99달러다. 국내 원화 요금과 Argon 포함 조건은 이 글 작성 시점에 확인하지 못했다(**미확인**).
- **작업 모드 국가 제한**: <a href="https://siliconangle.com/2026/10/13/gemini-4-argon-reaches-gemini-app-pro-and-ultra-subscribers-alongside-a-new-tasks-mode/" target="_blank" rel="noopener">SiliconANGLE</a>은 구글 요금제 페이지를 근거로 작업 모드가 일부 국가에서만 제공된다고 전했다. 한국 포함 여부는 **미확인**이다.
- **후속 모델**: 구글은 "Gemini 4 제품군의 나머지"를 이후 내놓겠다고만 밝혔고 일정은 없다.

## 국내 개발자·구독자에게 미치는 영향

가장 실질적인 변화는 비용 구조다. 할인가(입력 2달러/출력 10달러)는 12월 1일 정가(4달러/20달러)의 절반이다. 지금 성능 평가를 하면 저렴하지만, 서비스 원가는 반드시 정가 기준으로 계산해야 한다. 할인가로 계산한 원가를 그대로 쓰면 12월부터 API 비용이 두 배가 된다.

입출력 통합 100만 토큰 한도는 긴 코드베이스나 대량 문서를 한 번에 다루는 작업에 유리하다. 다만 출력 토큰에는 사고 토큰도 포함돼 과금되므로, 긴 추론을 켜면 출력 비용이 예상보다 커질 수 있다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>구독자</strong>: 제미나이 앱의 모델 선택 메뉴와 검색 AI 모드의 '+' 메뉴에서 Argon이 보이는지 확인한다. 보이지 않으면 단계적 배포 중이거나 국내 미제공일 수 있다.<br/>
2. <strong>개발자</strong>: 결제가 연결된 유료 등급 키로 <code>gemini-4-argon</code>을 호출해 자사 한국어 데이터로 짧은 평가 세트를 돌려 본다. 할인가가 적용되는 11월 30일 전에 끝내는 것이 비용상 유리하다.<br/>
3. <strong>원가 계산</strong>: 사고 토큰을 포함한 출력량을 측정하고, 12월 1일 정가(입력 4달러/출력 20달러)로 월 비용을 다시 계산한다.<br/>
4. <strong>비용 절감</strong>: 반복되는 긴 시스템 프롬프트는 자동 캐싱(입력가의 5%)을, 실시간성이 필요 없는 작업은 배치(절반 가격)를 검토한다.
</div>

## 한계

이 글은 10월 13일 공개된 구글 공식 블로그·개발자 문서와 언론 보도만을 근거로 했다. 벤치마크와 안전성 수치는 구글 측 발표이며 독립 재현 결과는 아직 제한적이다. 한국 계정의 실제 노출 여부, 원화 가격, 한국어 성능은 공식 자료로 확인할 수 없었다. 단계적 배포 중이라 이용 범위가 며칠 사이에 바뀔 수 있다.

<p><em>최종 확인일 2026-10-14.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/" target="_blank" rel="noopener">Google 블로그 — Gemini 4 Argon 일반 공개 (2026-10-13)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" target="_blank" rel="noopener">Google 블로그 — 제미나이 앱 Argon 제공·작업 모드 (2026-10-13)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/" target="_blank" rel="noopener">Google 블로그 — 개발자용 Gemini 4 Argon (2026-10-13)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noopener">Google AI for Developers — Gemini API 가격 문서</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" target="_blank" rel="noopener">Google 블로그 — Gemini 4 Argon 첫 발표 (2026-09-30)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/intl/ko-kr/products/gemini-4-argon-kr/" target="_blank" rel="noopener">구글 코리아 블로그 — 제미나이 4 아르곤 한국어 발표문 (2026-09-30)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://support.google.com/gemini/answer/13575153?hl=ko" target="_blank" rel="noopener">Gemini 고객센터 — 지원 국가·언어</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.engadget.com/2285023/google-gemini-4-argon-is-now-available-in-the-gemini-app-and-ai-mode-in-search/" target="_blank" rel="noopener">Engadget — 제미나이 앱·AI 모드에 Argon 제공 (2026-10-13)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.searchenginejournal.com/google-gemini-4-argon-ai-mode/592806/" target="_blank" rel="noopener">Search Engine Journal — AI 모드에 Argon 추가 (2026-10-13)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://siliconangle.com/2026/10/13/gemini-4-argon-reaches-gemini-app-pro-and-ultra-subscribers-alongside-a-new-tasks-mode/" target="_blank" rel="noopener">SiliconANGLE — Pro·Ultra 구독자 제공과 작업 모드 (2026-10-13)</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글, 10월 13일 Gemini 4 Argon을 유료 API 개발자·기업, Google AI Pro·Ultra 구독자에게 확대 공개(무료 이용자 제외)</li>
<li>API 출시 할인가 입력 2달러/출력 10달러(100만 토큰당), 12월 1일부터 4달러/20달러로 두 배</li>
<li>입출력 통합 100만 토큰 한도, 모델 ID <code>gemini-4-argon</code>, 무료 등급 미제공</li>
<li>벤치마크는 대부분 구글 자체 수치 — 독립 평가는 아직 제한적</li>
<li>한국 계정 적용 여부·원화 가격·한국어 성능은 미확인 — 할인 기간 안에 자체 데이터로 평가하고 정가 기준으로 원가를 잡을 것</li>
</ul>
</div>
