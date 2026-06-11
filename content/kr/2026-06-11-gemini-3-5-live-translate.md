---
title: "Gemini 3.5 Live Translate 출시: 70개 언어 실시간 음성 번역의 새 시대"
summary: "Google이 70개 이상의 언어를 지원하는 실시간 음성-음성 번역 모델 Gemini 3.5 Live Translate를 출시했습니다. Gemini Live API, Google Translate, Google Meet에서 즉시 사용 가능합니다."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["gemini", "번역", "실시간", "google", "speech-to-speech"]
---

<div class="article-tldr">
<strong>3줄 요약:</strong> Google이 6월 9일 실시간 음성-음성 번역 모델 <strong>Gemini 3.5 Live Translate</strong>를 공개했습니다. 70개 이상 언어를 자동 감지·번역하며, 화자의 억양·속도·음조까지 자연스럽게 재현합니다. Gemini Live API(공개 프리뷰)·Google Translate 앱(iOS/Android)·Google Meet(기업 비공개 프리뷰)에서 즉시 사용할 수 있습니다.
</div>

<div class="article-stats">
<div class="stat-item"><span class="stat-number">70+</span><span class="stat-label">지원 언어 수</span></div>
<div class="stat-item"><span class="stat-number">2,000+</span><span class="stat-label">Google Meet 지원 언어 조합</span></div>
<div class="stat-item"><span class="stat-number">128K</span><span class="stat-label">입력 토큰 컨텍스트 한도</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/TNwKs39uSVk" title="Introducing Gemini 3.5 Live Translate" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 실시간 통역, 이제 스마트폰 하나로

언어 장벽을 허무는 AI 번역 기술이 새로운 단계에 접어들었습니다. Google은 2026년 6월 9일, 차세대 실시간 음성 번역 모델 **Gemini 3.5 Live Translate**를 공식 출시했습니다. 이 모델은 Gemini 3.5 패밀리의 일원으로, 단순 텍스트 번역을 넘어 **음성→음성(speech-to-speech)** 번역을 실시간으로 구현합니다.

기존 턴바이턴(turn-by-turn) 번역 시스템은 화자가 말을 마친 뒤 번역을 시작했기 때문에 자연스러운 대화 흐름이 끊기는 문제가 있었습니다. Gemini 3.5 Live Translate는 발화가 진행되는 동시에 번역을 생성합니다. 화자보다 불과 몇 초 뒤처진 채 자연스럽게 대화를 따라가므로, 마치 인간 동시통역사를 옆에 둔 듯한 경험을 제공합니다.

## 어떻게 동작하나요?

모델의 핵심 강점은 **자동 언어 감지**와 **음성 자연성** 두 가지입니다.

별도의 언어 설정 없이도 입력 음성의 언어를 자동으로 인식하고, 목표 언어로 즉시 번역을 시작합니다. 번역된 음성은 원 화자의 억양(intonation)·속도(pacing)·음조(pitch)를 최대한 보존합니다. 소음이 많은 환경에서도 강인한 성능(noise robustness)을 발휘해 회의실·방송 스튜디오·현장 인터뷰 등 다양한 상황에서 사용할 수 있습니다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 Tip</strong><br>Gemini Live API에서 <code>translationConfig</code> 안의 <code>targetLanguageCode</code>를 BCP-47 코드(예: <code>"ko"</code>, <code>"ja"</code>)로 지정하면 원하는 언어로 실시간 번역 스트림을 받을 수 있습니다. <code>echoTargetLanguage: true</code>로 설정하면 이미 목표 언어로 말하는 경우도 그대로 에코합니다.</div>
</div>

## 기술 사양 한눈에 보기

| 항목 | 내용 |
|---|---|
| 모델 ID | `gemini-3.5-live-translate-preview` |
| 입력 형식 | 오디오(음성 스트림) |
| 출력 형식 | 번역된 오디오 + 텍스트 트랜스크립트 |
| 지원 언어 | 70개 이상 (BCP-47 코드 기준) |
| 입력 오디오 포맷 | 16-bit PCM, 16kHz, 모노 |
| 출력 오디오 포맷 | 16-bit PCM, 24kHz, 모노 |
| 입력 토큰 한도 | 131,072 tokens |
| 출력 토큰 한도 | 65,536 tokens |
| 기반 모델 | Gemini 3 Pro |

## 어디서 사용할 수 있나요?

Google은 세 가지 채널을 통해 동시 배포를 진행했습니다.

**① 개발자 공개 프리뷰**: Gemini Live API와 Google AI Studio에서 지금 바로 통합할 수 있습니다. `gemini-3.5-live-translate-preview` 모델 코드를 사용하면 됩니다.

**② Google Translate 앱**: Android와 iOS 전 세계 사용자에게 순차적으로 롤아웃됩니다. 이어폰을 연결하면 훨씬 자연스러운 청취 경험을 제공합니다. Android 사용자는 추가로 '청취 모드(listening mode)'를 사용할 수 있어 이어폰 없이도 스마트폰을 귀에 대면 번역된 음성을 바로 들을 수 있습니다.

**③ Google Meet 기업 비공개 프리뷰**: 기존 5개 언어에서 70개 이상 언어로 대폭 확대되며, 하나의 회의에서 2,000개 이상의 언어 조합을 지원합니다. 연내 전체 출시를 목표로 합니다.

## 실용적인 활용 시나리오

- **다국어 팀 원격 회의**: 영어·일본어·한국어 참가자가 각자의 모국어로 자유롭게 발언하면서도 실시간으로 이해할 수 있습니다.
- **국제 교육**: 강사가 한 언어로 강의하면 수강생은 선호하는 언어로 실시간 청취합니다.
- **여행 및 현장 업무**: 스마트폰 하나로 70개 언어권 현지인과 대화할 수 있습니다.
- **콘텐츠 더빙**: 영상 콘텐츠를 다국어로 실시간 더빙하는 파이프라인 구축이 가능합니다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>알아두면 좋은 점</strong><br>현재 모델은 프리뷰 단계로, 오랜 침묵 이후 목소리가 달라지거나 빠른 다중 화자 환경에서 음성이 불일치하는 제한 사항이 있습니다. Google DeepMind 모델 카드에 알려진 한계가 상세히 공개되어 있습니다.</div>
</div>

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>70개 이상 언어 자동 감지·실시간 음성-음성 번역 지원</li>
<li>화자의 억양·속도·음조를 자연스럽게 보존하는 음성 합성</li>
<li>Gemini Live API 공개 프리뷰로 개발자 즉시 사용 가능</li>
<li>Google Meet에서 2,000+ 언어 조합 지원 (기업 비공개 프리뷰)</li>
<li>Google Translate iOS·Android 앱에서 이어폰 없이도 사용 가능 (Android)</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/" target="_blank" rel="noopener noreferrer">Google 공식 블로그: Gemini 3.5 Live Translate 출시 발표</a><br>— <a href="https://ai.google.dev/gemini-api/docs/live-api/live-translate" target="_blank" rel="noopener noreferrer">Gemini Live API 번역 개발자 문서 (코드 예제 포함)</a><br>— <a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.5-live-translate-preview" target="_blank" rel="noopener noreferrer">gemini-3.5-live-translate-preview 모델 사양 페이지</a><br>— <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer">Google AI Studio에서 바로 체험하기</a></div></div>
