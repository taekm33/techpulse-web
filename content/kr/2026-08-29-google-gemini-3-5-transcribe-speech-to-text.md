---
title: "구글, '제미나이 3.5 트랜스크라이브' 공개…음성인식 WER 2.6%로 정밀도 승부"
summary: "구글이 8월 26일 최신 음성-텍스트 변환 모델 '제미나이 3.5 트랜스크라이브(Gemini 3.5 Transcribe)'를 공개했다. 비스트리밍 기준 평균 단어오류율(WER) 2.6%, 스트리밍 4.0%로 자사 이전 모델 Chirp 3를 앞서고, 85개 이상 언어를 자동 감지한다. 실시간 스트리밍과 사전 녹음 처리용 두 개의 API로 제공되며, Gboard 램블러·맥용 제미나이 앱·안티그래비티에 이미 탑재됐다."
category: "ai-news"
date: "2026-08-29"
readingTime: 6
tags: ["구글", "제미나이", "음성인식", "STT", "AI모델"]
---

<div class="article-tldr">
구글이 8월 26일 <strong>제미나이 3.5 트랜스크라이브(Gemini 3.5 Transcribe)</strong>를 공개했다. "가장 정밀한 음성-텍스트 모델"이라는 설명대로 핵심은 정확도다. 서드파티 분석기관 Artificial Analysis 측정 기준 <strong>비스트리밍 WER 2.6%, 스트리밍 4.0%</strong>를 기록했고, <strong>85개 이상 언어</strong>를 자동 감지한다. 단순 받아쓰기를 넘어 "음, 어" 같은 군더더기를 제거하고, "화요일—아니 수요일" 같은 자기 수정을 알아서 정리한다. 실시간용과 사전 녹음용 <strong>두 개의 API</strong>로 나뉘며, 개발자·기업용 퍼블릭 프리뷰로 열렸다.
</div>

음성 인터페이스 경쟁이 '얼마나 잘 알아듣느냐'에서 '얼마나 깔끔하게 정리해 주느냐'로 옮겨가고 있다. 구글은 8월 26일 제미나이 3.5 트랜스크라이브를 공개하며, 배경 소음·전문 용어·말더듬(disfluency)에 취약한 기존 음성인식과 달리 "원본 오디오를 곧바로 정확하고 다듬어진 서식 있는 텍스트로 변환한다"고 밝혔다. 모델은 이미 안드로이드 Gboard의 램블러(Rambler), 맥용 제미나이 앱 등 자사 제품에 적용돼 있다.

## 두 개의 API로 나눈 이유

이 모델은 하나가 아니라 두 개의 별도 API로 제공된다. 용도가 다르기 때문이다.

실시간 스트리밍용 `gemini-3.5-transcribe-live`는 Live API를 통해 양방향 연속 스트리밍을 1초 미만 지연으로 처리한다. 음성 에이전트나 실시간 자막처럼 즉각 반응이 필요한 앱을 겨냥한다. 반면 사전 녹음 처리용 `gemini-3.5-transcribe`는 Interactions API로 회의 녹음·통화 기록 등을 화자 구분과 단어 단위 타임스탬프까지 붙여 변환한다. 통화 후 분석 파이프라인 같은 배치 작업에 맞다.

<div class="article-stats">
<strong>비스트리밍 WER</strong> 2.6% (Artificial Analysis 측정)<br/>
<strong>스트리밍 WER</strong> 4.0%<br/>
<strong>지원 언어</strong> 85개 이상 자동 감지<br/>
<strong>화자 구분</strong> 사전 녹음 최대 3명(3명 초과는 실험적)<br/>
<strong>실시간 지연</strong> 1초 미만(sub-second)
</div>

## Chirp 3 대비 무엇이 달라졌나

구글은 2025년 전작 Chirp 3 대비 "중대한 도약"이라고 표현했다. 수치로 보면 최종 변환까지 걸리는 시간(time to final transcription)이 70% 단축됐다. 다국어 벤치마크 FLEURS에서는 상위 언어·로케일 기준 스트리밍 5.50% WER, 비스트리밍 5.04% WER로 Chirp 3를 앞섰다.

정확도 외에 눈에 띄는 건 '작업 위임' 기능이다. 함수 호출(function calling)을 통해 이미지 생성·파일 분석 같은 복잡한 작업을 다른 제미나이 모델에 넘길 수 있다. 맥용 제미나이 앱에서 음성만으로 로컬 파일을 요약하거나 커서 위치에 이미지를 생성하는 식이다.

| 항목 | 제미나이 3.5 트랜스크라이브 | 이전(Chirp 3) 대비 |
|---|---|---|
| 비스트리밍 WER | 2.6% (Artificial Analysis) | 개선 |
| 스트리밍 WER | 4.0% | 개선 |
| FLEURS 스트리밍 WER | 5.50% | Chirp 3 상회 |
| 최종 변환 지연 | — | 70% 단축 |
| 화자 구분 | 최대 3명(타임스탬프 포함) | 신규 강화 |

<div class="article-callout info">
WER(단어오류율, Word Error Rate)은 낮을수록 좋다. 구글이 제시한 2.6%·4.0%는 자체가 아닌 서드파티 Artificial Analysis 측정치라는 점, 그리고 FLEURS 다국어 벤치마크에서는 5%대로 올라간다는 점을 함께 봐야 한다. 즉 영어 위주 환경과 85개 언어 전반의 실제 성능에는 차이가 있을 수 있다.
</div>

## 어디서 쓸 수 있나

배포 범위는 개발자·기업·일반 사용자로 나뉜다. 개발자는 구글 AI 스튜디오의 제미나이 API와 안티그래비티(Antigravity)에서 퍼블릭 프리뷰로 접근할 수 있다. 기업은 제미나이 엔터프라이즈 에이전트 플랫폼에서 프리뷰로 쓸 수 있고, 고객 응대용 제미나이 엔터프라이즈 CX에도 곧 들어간다. 일반 사용자는 맥용 제미나이 앱(영어)과 안드로이드 램블러에서 이미 체험할 수 있으며, 크롬 브라우저에서 웹 입력창 어디서나 말로 입력하는 기능이 곧 추가된다.

<div class="article-callout tip">
직접 써볼 수 있는 가장 쉬운 경로는 안드로이드 Gboard의 램블러 기능과 맥용 제미나이 앱이다. 개발자라면 구글 AI 스튜디오에서 `gemini-3.5-transcribe`(사전 녹음)와 `gemini-3.5-transcribe-live`(실시간) 두 모델명을 구분해 호출하면 된다. LiveKit·Pipecat·LangChain·Vercel 등 음성 인프라 플랫폼이 Live API 연동을 이미 지원한다.
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/" target="_blank" rel="noopener">Google — Intelligent transcription with Gemini 3.5 Transcribe (공식 발표)</a><br/>
· <a href="https://ai.google.dev/gemini-api/docs/transcribe" target="_blank" rel="noopener">Google — Gemini API 트랜스크립션 공식 문서</a><br/>
· <a href="https://9to5google.com/2026/08/26/gemini-3-5-transcribe/" target="_blank" rel="noopener">9to5Google — Google launches Gemini 3.5 Transcribe</a><br/>
· <a href="https://www.engadget.com/2244799/google-gemini-latest-transcription-model-can-turn-ramblings-into-structured-text/" target="_blank" rel="noopener">Engadget — Google's latest transcription model turns ramblings into structured text</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글, 8월 26일 최신 음성-텍스트 모델 '제미나이 3.5 트랜스크라이브' 공개</li>
<li>Artificial Analysis 측정 비스트리밍 WER 2.6%·스트리밍 4.0%, 85개 이상 언어 자동 감지</li>
<li>실시간(`-live`)·사전 녹음 두 API로 분리, 사전 녹음은 최대 3명 화자 구분·타임스탬프</li>
<li>전작 Chirp 3 대비 최종 변환 지연 70% 단축, 함수 호출로 타 제미나이 모델에 작업 위임</li>
<li>개발자·기업 퍼블릭 프리뷰, Gboard 램블러·맥 앱·안티그래비티 탑재, 크롬 지원 예정</li>
</ul>
</div>
