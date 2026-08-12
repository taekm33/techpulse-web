---
title: "약한 모델로 강한 모델의 '속마음'을 훔친다 — OpenAI·앤트로픽·구글 추론 API의 재생(replay) 취약점"
summary: "연구진이 OpenAI·앤트로픽·구글의 암호화된 추론 블록을 같은 계열의 약한 모델에 재생해 숨겨진 chain-of-thought를 평문으로 복원했다. 공개된 에이전트 로그 6,708건에서 31만여 개 추론 블록을 해독하고 API 키·비밀번호 등 수백 건의 비밀을 추출했다. 세 업체는 서버측 완화조치를 배포했다."
category: "hot-issue"
date: "2026-08-13"
readingTime: 6
tags: ["AI보안", "LLM", "추론모델", "프롬프트인젝션", "OpenAI", "앤트로픽", "구글"]
---

<div class="article-tldr">
OpenAI·앤트로픽·구글의 추론 API가 대화 문맥 유지를 위해 주고받는 '암호화된 추론 블록'이, 사용자·세션·모델에 묶이지 않고 업체 전체가 공유하는 단일 키로만 서명돼 있었다. 연구진은 강한 플래그십 모델이 만든 블록을 같은 계열의 값싼 모델에 그대로 재생(replay)해, 숨겨진 chain-of-thought를 평문으로 받아냈다. 공개된 에이전트 로그 6,708건에서 31만여 개 블록을 해독해 API 키·비밀번호 등 수백 건의 비밀을 복원했다. 세 업체는 서버측 완화조치를 배포했고, 원본 공격 재현은 막혔다고 연구진은 밝혔다.
</div>

추론(reasoning) 모델이 최종 답을 내놓기 전에 거치는 내부 '생각'은 업체들이 영업비밀이자 안전장치로 여겨 평문으로 노출하지 않는다. 대신 API는 이 추론 흔적을 **암호화된 봉투(encrypted envelope)** 형태로 클라이언트에 넘기고, 다음 호출에서 그대로 되돌려 받아 여러 턴에 걸친 문맥을 서버 상태 저장 없이 유지한다. 2026년 8월 12일 공개된 논문 「Stealing Reasoning Traces from Proprietary LLM APIs」는 바로 이 설계에서 큰 구멍을 찾아냈다.

## 어떻게 뚫렸나 — '약한 모델을 복호화 오라클로'

핵심은 암호를 깨는 것이 아니다. 봉투 자체는 그대로 두고, **그 봉투를 받아 처리하는 쪽의 허점**을 노린다. 연구진에 따르면 세 업체 모두 추론 봉투를 사용자 계정·세션 ID·모델 등급에 암호학적으로 묶지 않고, 업체 전역에서 통용되는 단일 키로 인증했다. 그 결과 강하게 보호되는 플래그십 모델이 만든 봉투를 같은 업체의 다른 모델에 그대로 밀어 넣을 수 있었다.

공격은 값싸고 가벼운 모델을 일종의 '복호화 오라클'로 쓴다. 프런티어 모델(예: Claude Opus 4.8)이 뱉은 암호화 추론 블록을 캡처해, 같은 계열의 소형 모델(예: Claude Haiku 4.5)의 호출에 끼워 넣고 "그 내부 생각을 그대로 옮겨 적으라"고 지시한다. 소형 모델은 플래그십에 걸린 강한 안티-디스틸레이션·안전 가드레일이 약하기 때문에, 순순히 숨겨진 추론을 평문으로 출력한다. 논문은 OpenAI의 GPT 계열, 구글의 Gemini 계열에서도 동일한 교차-모델 호환성을 확인했다고 밝혔다.

<div class="article-stats">
<strong>논문</strong> Stealing Reasoning Traces from Proprietary LLM APIs (arXiv:2608.09867)<br/>
<strong>공개일</strong> 2026-08-12<br/>
<strong>분석한 공개 에이전트 로그</strong> 6,708건<br/>
<strong>해독한 추론 블록</strong> 315,320개<br/>
<strong>복원된 비밀(일부)</strong> API 키 62개 · 비밀번호 33개 등 수백 건
</div>

## 실제로 뭐가 새어 나왔나

연구진은 GitHub·Hugging Face 등에 공개된 에이전트 트랜스크립트 6,708건을 분석해 315,320개의 추론 블록을 해독했다. 여기서 벤치마크 데이터를 제외하고도 실제 사용자 세션에서 나온 수백 건의 개인정보·자격증명이 나왔다 — API 키 62개, 비밀번호 33개, 접근 토큰과 개인 이메일 등. 특히 위험한 지점은, 이 중 상당수가 **눈에 보이는 답변에는 전혀 없고 숨겨진 추론 안에만** 존재했다는 것이다. 개발자가 화면에 보이는 대화를 아무리 깔끔히 지워도, 봉투 안에 남은 비밀은 다른 계정이 그대로 재생해 꺼내 갈 수 있었다.

| 업체 | 봉투를 만든 플래그십 | 복호화 오라클로 쓴 약한 모델 |
|---|---|---|
| 앤트로픽 | Claude Opus 4.8 / Sonnet 5 | Claude Haiku 4.5 |
| OpenAI | GPT-5.6 / GPT-5 | GPT-5.6 Luna · GPT-5-mini급 |
| 구글 | Gemini 3 / 3.1 Pro | Gemini 3.1 Flash 계열 |

## 정보 유출을 넘어 — 보이지 않는 프롬프트 인젝션

같은 '이식성(portability)'은 공격 표면을 하나 더 연다. 연구진은 악성 지시를 심은 암호화 추론 블록을 만든 뒤, 이를 무관한 작업에 재생해 수신 모델이 공격자가 의도한 행동(예: 파일 업로드)을 수행하도록 유도하는 개념증명을 시연했다. 지시문이 **보이는 텍스트에는 나타나지 않으므로**, 대화 기록만 검사하는 모니터링 도구는 이를 놓친다. 자율 에이전트 워크플로에는 특히 치명적이다.

<div class="article-callout info">
연구진이 제시한 남용 경로는 네 가지다 — ① 독점 추론을 훔쳐 모델 디스틸레이션에 활용, ② 타인이 공개한 트레이스에서 사생활 데이터 추출, ③ 안전한 답변 뒤에 숨겨진 유해 콘텐츠 복원, ④ 불투명 추론 블록 안에 프롬프트 인젝션 은닉.
</div>

## 지금 상태와 남은 물음

연구진은 발견 내용을 세 업체와 Microsoft·Hugging Face에 책임 있게 공개했고, 세 업체 모두 서버측 완화조치를 배포했다. 논문의 재현성 진술에 따르면 **주요 추출 공격은 2026년 8월 기준 더 이상 재현되지 않는다.** 다만 열린 물음도 남는다. 세 업체가 이 결함을 공식적으로 확인하는 공개 성명을 냈는지는 명확하지 않으며, 이미 공개 저장소에 올라간 수십만 개의 추론 블록이 여전히 해독 가능한지는 별개의 문제다. 이 연구는 2026년 5월 존스홉킨스 암호학자 매튜 그린(Matthew Green)이 암호화 추론 블록의 세션·계정 간 재생 가능성을 보인 선행 연구를, 대규모 비밀 추출 기법으로 끌어올린 것이다.

<div class="article-callout tip">
에이전트를 만드는 개발자라면: 공개하는 로그에서 추론 블록·불투명 서명 필드를 반드시 제거하라. 화면에 보이는 텍스트만 정제(sanitize)하는 것으로는 부족하다 — 비밀은 봉투 안에 남는다.
</div>

## 의미와 전망

이번 사건은 'CoT를 감춰 두면 안전하다'는 가정이 얼마나 무른지 보여준다. 암호화는 깨지지 않았지만, 그 봉투를 **누가·어느 모델이 열 수 있는지**를 묶어 두지 않은 설계 하나가 세 대형 업체 전부를 동시에 노출시켰다. 추론 봉투를 생성 모델·세션·사용자에 암호학적으로 바인딩하고, 다른 등급 모델로 넘어온 블록을 거부하며, 레거시 서명 키를 회전(rotate)해 과거 로그의 봉투를 무효화하는 것이 근본 처방으로 제시된다. 에이전트가 도처에서 돌아가는 시대에, '숨겨진 사고'는 더 이상 안전한 은닉처가 아니다.

<div class="article-keypoints">
<ul>
<li>강한 모델이 만든 암호화 추론 블록을 같은 계열 약한 모델에 재생하면, 숨겨진 chain-of-thought가 평문으로 복원된다.</li>
<li>원인은 암호 해독이 아니라, 봉투를 사용자·세션·모델에 묶지 않고 업체 전역 단일 키로만 인증한 설계.</li>
<li>공개 로그 6,708건에서 31만여 블록 해독 → API 키 62개·비밀번호 33개 등 수백 건 유출. 다수는 보이는 답변엔 없고 추론 안에만 존재.</li>
<li>정보 유출뿐 아니라, 보이지 않는 프롬프트 인젝션 통로가 된다.</li>
<li>세 업체는 서버측 완화조치 배포로 원본 공격을 차단했으나, 이미 공개된 블록의 잔존 위험은 별개 문제.</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://arxiv.org/abs/2608.09867" target="_blank" rel="noopener">논문: Stealing Reasoning Traces from Proprietary LLM APIs (arXiv)</a><br/>
<a href="https://thehackernews.com/2026/08/openai-anthropic-google-api-flaw-let.html" target="_blank" rel="noopener">The Hacker News — OpenAI, Anthropic, Google API Flaw Let Weaker AI Models Decode Stronger Models' Reasoning</a><br/>
<a href="https://cybersecuritynews.com/top-ai-models-apis-flaw-exposes-hidden-reasoning/" target="_blank" rel="noopener">Cyber Security News — LLM APIs Vulnerability Exposes Hidden Reasoning Traces</a><br/>
<a href="https://blog.cryptographyengineering.com/2026/05/29/fooling-around-with-encrypted-reasoning-blobs/" target="_blank" rel="noopener">Matthew Green — Fooling around with encrypted reasoning blobs (선행 연구, 2026-05)</a>
</div>
