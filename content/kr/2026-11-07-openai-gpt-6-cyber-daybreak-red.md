---
title: "오픈AI 'GPT-6 Cyber' 공개 — 자체 평가 최고 '심각' 등급 보안 모델, 승인받은 Daybreak Red 고객에게만"
summary: "오픈AI가 11월 5일(현지시간) 취약점 발견·익스플로잇 검증·패치 후보 작성에 특화한 GPT-6 Cyber를 공개했다. ExploitGym 48.5%(이전 32.1%), 범위 밖 공격 회피 99.93%를 내세웠고 리눅스 커널 권한 상승 익스플로잇 948개, 파이어폭스 고위험 취약점 81개를 사례로 들었다. 준비성 프레임워크에서 '심각(Critical)' 등급을 받아 승인된 일부 Daybreak Red 고객에게 API·Codex로만 제공되며 가격은 100만 토큰당 입력 20달러·출력 100달러다. 국내 보안팀이 지금 할 수 있는 일과 한계를 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-11-07"
readingTime: 7
tags: ["오픈AI", "OpenAI", "GPT-6 Cyber", "Daybreak", "사이버보안", "리눅스 커널", "파이어폭스"]
---

<div class="article-tldr">
오픈AI가 <strong>2026년 11월 5일(미국 시간)</strong> 보안 연구 특화 모델 <a href="https://openai.com/ko-KR/index/introducing-gpt-6-cyber/" target="_blank" rel="noopener">GPT-6 Cyber</a>를 공개했다. GPT-6 Astra를 바탕으로 취약점 발견, 익스플로잇(공격 코드) 검증, 패치 후보 작성을 추가 학습한 모델이다. 오픈AI는 자체 준비성 프레임워크(Preparedness Framework)에서 사이버 역량을 최고 단계인 <strong>'심각(Critical)'</strong>으로 분류했고, 그래서 일반 공개 대신 <strong>승인받은 일부 Daybreak Red 고객</strong>에게만 API와 Codex로 먼저 제공한다. 일반 ChatGPT·API 이용자는 쓸 수 없다.
</div>

이 글은 오픈AI 공식 발표(한국어판 포함), 시스템 카드, 개발자 문서, 리눅스 연구 보고서와 국내외 보도를 바탕으로 한 공개 자료 분석이다. 모델에 접근하거나 성능을 재현해 보지 않았으며, 아래 수치는 모두 오픈AI 발표 또는 보도 내용이다.

## 누구에게 중요한가

- **기업·기관 보안팀(레드팀, 취약점 진단 조직)**: 승인 범위 안에서 익스플로잇까지 자동 검증하는 상용 모델이 나왔다. 도입하려면 Daybreak 신청과 심사가 먼저다.
- **리눅스 서버·클라우드 운영자**: 오픈AI는 같은 모델 계열로 리눅스 커널에서 권한 상승 익스플로잇 948개를 만들었다고 밝혔다. 모델을 쓰지 않더라도 커널 패치 주기를 다시 볼 이유가 생겼다.
- **오픈소스 유지관리자**: 대량 취약점 보고와 AI 작성 패치 후보가 늘어날 가능성이 크다. 오픈AI는 유지관리자용 지원 프로그램(Patch the Planet)을 함께 운영한다.
- **일반 사용자**: 직접 쓸 일은 없지만, 파이어폭스·리눅스 보안 업데이트가 잦아질 수 있다. 업데이트를 미루지 않는 것이 가장 실질적인 대응이다.

## 확인된 사실 — 오픈AI 공식 자료 기준

<div class="article-stats">
<strong>공개일</strong> 2026년 11월 5일(미국 시간), 국내 보도는 11월 6일<br/>
<strong>기반 모델</strong> GPT-6 Astra의 사이버 특화 변형(시스템 카드)<br/>
<strong>ExploitGym</strong> 48.5% (GPT-5.6 Cyber 32.1%, 상대 51% 향상)<br/>
<strong>웹 침투 테스트 재현율</strong> 40.3% (GPT-6 Astra 32.0%)<br/>
<strong>RemoteExploitBench</strong> 과제 95% 완료 (Daybreak Blue의 GPT-6 Astra는 100% 거절)<br/>
<strong>범위 밖 공격 회피</strong> 99.93%(안전 프롬프트 없이) / 100%(적용 시), 이전 모델 94.49%<br/>
<strong>등급</strong> 준비성 프레임워크 사이버 '심각(Critical)', 이전 모델은 '높음(High)'<br/>
<strong>컨텍스트</strong> 105만 토큰, 최대 출력 12만 8,000토큰, 텍스트·이미지 입력<br/>
<strong>가격</strong> 100만 토큰당 입력 20달러 / 캐시 입력 2달러 / 출력 100달러(단문 컨텍스트 기준)<br/>
<strong>제공 범위</strong> 승인된 일부 Daybreak Red 고객, API·Codex
</div>

<a href="https://deploymentsafety.openai.com/gpt-6-cyber/introduction" target="_blank" rel="noopener">시스템 카드</a>는 이 모델을 취약점 발견, 익스플로잇 개발, 웹 침투 테스트 같은 <strong>승인된 보안 작업</strong>을 위한 변형으로 설명한다. 사이버 영역의 불필요한 거절은 줄이고, 사용자가 허가한 범위를 지키며, 사이버 외 영역의 거절은 유지하도록 후속 학습했다는 것이 회사 설명이다. 가격·사양은 <a href="https://developers.openai.com/api/docs/models/gpt-6-cyber" target="_blank" rel="noopener">개발자 문서의 모델 페이지</a>에서 확인했으며, 문서는 "Daybreak Red 접근 권한과 승인이 필요하다"고 명시한다.

### 실제 코드베이스 사례

- **리눅스 커널**: 오픈AI는 11월 4일 보고서 <a href="https://openai.com/index/a-thousand-fewer-paths-to-root/" target="_blank" rel="noopener">"A thousand fewer paths to root"</a>에서 자동 파이프라인이 후보 2,308건을 찾고 1,724건을 재현했으며, 고유 취약점 948개에 대해 일반 사용자를 root로 올리는 <strong>로컬 권한 상승(LPE)</strong> 익스플로잇을 만들었다고 밝혔다. API 비용은 약 121만 달러, 익스플로잇당 약 1,279달러였다. 7월 GPT-5.6 Sol로 같은 방식을 돌렸을 때는 166개였다. 치명적 발견 304건은 패치 후보와 함께 유지관리자에게 전달했다.
- **파이어폭스**: 모질라가 고위험으로 분류한 새 취약점 81개의 증거와 재현 테스트를 만들었고, 이미 알려진 문제 30개가 기존 평가보다 심각하다는 점도 보였다고 오픈AI는 밝혔다. 모질라는 10월 29일 블로그 <a href="https://blog.mozilla.org/en/firefox/privacy-security/defending-patch-gap/" target="_blank" rel="noopener">"Defending the patch gap against automated attackers"</a>에서 2월부터 앤트로픽·오픈AI의 프런티어 모델로 버그를 찾아 왔고, 2025년 같은 기간보다 보안 수정을 7배 넘게 배포했다고 적었다.

## 미확인·전망 (사실과 구분)

- **독립 검증 없음**: 벤치마크(ExploitGym, RemoteExploitBench 등)와 948개·81개 수치는 모두 오픈AI 발표다. CSO Online 등은 948건 전체의 수정 현황이 공개되지 않았다고 지적했다. AI타임스는 실제 소프트웨어·하드웨어 취약점 평가(FrontierCyber)에서는 GPT-6 Astra보다 낮은 점수(288개 중 90개 대 96개)였다고 보도했다.
- **한국 이용 가능 여부**: 오픈AI 발표문은 한국어판이 있지만, Daybreak 승인 대상에 국가 제한이 있는지, 국내 기업이 승인된 사례가 있는지는 공개 자료에서 찾지 못했다(<strong>미확인</strong>). 한국어 코드 주석·문서 처리 성능을 따로 평가한 자료도 없다.
- **원화 가격**: 공식 가격은 달러로만 공개됐다. 원화 청구가는 <strong>미확인</strong>이며 환율과 부가세에 따라 달라진다.
- **접근 확대 시점**: 오픈AI는 "곧" 모든 Daybreak Red 고객으로 넓히겠다고만 밝혔다. 구체적 일정은 없다.
- **Daybreak Blue 데이터 정책**: The Hacker News는 오픈AI가 11월 29일부터 개인 계정의 Daybreak Blue 세션 내용을, '모델 개선' 설정을 꺼도 오용 방지 학습에 쓸 계획이라고 보도했다. 해당 계정을 쓰는 연구자는 공식 약관 원문을 따로 확인하는 것이 좋다.

## 국내 보안팀·운영자에 미치는 영향

가장 큰 의미는 모델 자체보다 오픈AI 리눅스 보고서의 결론에 있다. 보고서는 단기적으로 <strong>"최신 패치가 적용되지 않은 시스템의 저권한 계정은, 자원이 풍부한 공격자에게는 root와 사실상 같다"</strong>고 적었다. 948개는 원격 침입이 아니라 이미 발판(계정·프로세스)을 얻은 뒤의 권한 상승이라는 점에서 범위가 좁지만, 공유 서버·CI 러너·멀티테넌트 환경을 운영하는 조직에는 바로 해당되는 이야기다.

두 번째는 비용 구조다. 출력 100만 토큰당 100달러는 범용 모델보다 높은 단가이고, 오픈AI 리눅스 보고서 기준으로 성공한 익스플로잇 하나에 평균 약 359달러, 전체 실행 비용을 고유 익스플로잇 수로 나누면 약 1,279달러가 들었다. 오픈AI는 과거 버그바운티 금액과 비교해 훨씬 싸다고 주장하지만, 보고서 스스로 모든 결과를 사람 연구자가 검토한 뒤 보고했다고 밝힌 만큼 숙련 인력 비용은 따로 잡아야 한다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>커널 패치 주기 점검</strong>: 리눅스 서버의 커널 업데이트·재부팅(또는 라이브 패치) 주기를 확인하고, 저권한 계정이 많은 공유 호스트부터 우선순위를 둔다.<br/>
2. <strong>격리 계층 재검토</strong>: 오픈AI 보고서가 권고한 대로 컨테이너만 믿지 말고 gVisor·Firecracker 같은 샌드박스 계층으로 피해 범위를 줄일 수 있는지 검토한다.<br/>
3. <strong>브라우저 자동 업데이트 유지</strong>: 모질라는 수정 공개 후 보급 전까지의 틈(패치 갭)을 노리는 공격을 경고했다. 사내 파이어폭스 업데이트 지연 정책이 있다면 줄인다.<br/>
4. <strong>도입을 검토한다면</strong>: <a href="https://openai.com/daybreak/" target="_blank" rel="noopener">Daybreak 페이지</a>에서 개인·조직 신청이 가능하다. 오픈AI는 신청자 신원과 사용 계획을 심사한 뒤 승인한다고 밝혔고, 보도에 따르면 Daybreak Red API는 승인된 IP 대역에서만 쓰도록 제한된다. 사내 승인 범위(Rules of Engagement) 문서를 먼저 준비하는 것이 좋다.<br/>
5. <strong>비교 기준 정하기</strong>: 다른 보안 특화 모델과 비교할 때는 토큰 단가보다 "검증된 발견 1건당 비용"과 검토 인력 시간을 기준으로 삼는다.
</div>

## 한계

이 글은 11월 7일 확인한 오픈AI 공식 발표·시스템 카드·개발자 문서·리눅스 보고서, 모질라 블로그, 그리고 The Verge·The Hacker News·SecurityWeek·CSO Online·AI타임스·전자신문 보도에 근거했다. 모델에 접근할 수 없어 어떤 수치도 재현하지 못했다. 가격과 제공 범위는 바뀔 수 있다. 일부 보도에 나온 "948건 중 588건은 이전에 알려지지 않은 취약점" 같은 수치는 오픈AI 원문에서 확인하지 못해 본문에 넣지 않았다.

<p><em>최종 확인일 2026-11-07.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://openai.com/ko-KR/index/introducing-gpt-6-cyber/" target="_blank" rel="noopener">OpenAI — GPT‑6 Cyber: 정렬된 사이버 보안 에이전트의 새로운 지평 (2026-11-05, 한국어판)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://deploymentsafety.openai.com/gpt-6-cyber/introduction" target="_blank" rel="noopener">OpenAI Deployment Safety Hub — GPT-6 Cyber 시스템 카드</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://developers.openai.com/api/docs/models/gpt-6-cyber" target="_blank" rel="noopener">OpenAI 개발자 문서 — GPT-6-Cyber 모델 페이지(사양·가격·접근 조건)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://openai.com/index/a-thousand-fewer-paths-to-root/" target="_blank" rel="noopener">OpenAI — A thousand fewer paths to root (2026-11-04, 리눅스 커널 연구)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://openai.com/daybreak/" target="_blank" rel="noopener">OpenAI — Daybreak 프로그램 안내·신청</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.mozilla.org/en/firefox/privacy-security/defending-patch-gap/" target="_blank" rel="noopener">Mozilla — Defending the patch gap against automated attackers (2026-10-29)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.theverge.com/ai-artificial-intelligence/1027599/openai-gpt-6-cyber-launch" target="_blank" rel="noopener">The Verge — OpenAI says GPT-6 Cyber is better at finding vulnerabilities without going out of bounds</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://thehackernews.com/2026/11/openai-launches-gpt-6-cyber-after-ai.html" target="_blank" rel="noopener">The Hacker News — OpenAI Launches GPT-6 Cyber After AI Helps Find 81 Firefox Flaws, 948 Linux Exploits</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.securityweek.com/openai-says-new-gpt-6-cyber-model-hunts-flaws-without-crossing-the-line/" target="_blank" rel="noopener">SecurityWeek — OpenAI Says New GPT-6 Cyber Model Hunts Flaws Without Crossing the Line</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.csoonline.com/article/4245265/openai-built-an-ai-pipeline-to-find-exploit-and-patch-linux-flaws.html" target="_blank" rel="noopener">CSO Online — OpenAI built an AI pipeline to find, exploit and patch Linux flaws</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.aitimes.com/news/articleView.html?idxno=217074" target="_blank" rel="noopener">AI타임스 — 오픈AI, 'GPT-6 사이버' 출시…취약점 공격 성공률 51% 향상</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.etnews.com/20261106000142" target="_blank" rel="noopener">전자신문 — 오픈AI, 사이버보안 특화 AI 모델 'GPT-6 사이버' 공개</a>
</div>

<div class="article-keypoints">
<ul>
<li>오픈AI, 11월 5일 보안 특화 모델 GPT-6 Cyber 공개 — 자체 준비성 프레임워크 사이버 '심각(Critical)' 등급</li>
<li>ExploitGym 48.5%(이전 32.1%), 범위 밖 공격 회피 99.93% — 모두 회사 발표, 독립 검증 전</li>
<li>리눅스 커널 LPE 익스플로잇 948개(비용 약 121만 달러), 파이어폭스 고위험 취약점 81개를 사례로 제시</li>
<li>승인된 일부 Daybreak Red 고객에게만 API·Codex 제공, 100만 토큰당 입력 20달러·출력 100달러</li>
<li>국내 이용 가능 여부·원화 가격은 미확인 — 당장은 커널 패치 주기와 샌드박스 계층 점검이 현실적 대응</li>
</ul>
</div>
