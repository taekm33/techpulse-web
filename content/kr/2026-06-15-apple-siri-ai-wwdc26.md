---
title: "Apple, 완전히 새로운 Siri AI 공개 — WWDC26에서 개인 맥락 이해 AI 비서 출시"
summary: "Apple이 WWDC26에서 Apple Intelligence 기반의 완전히 새로운 Siri AI를 발표했다. 개인 맥락 이해, 온스크린 인식, 방대한 세계 지식을 갖춘 대화형 AI 비서로, iOS 27·iPadOS 27·macOS 27에서 개발자 테스트가 시작됐다."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["Apple", "SiriAI", "WWDC26", "AppleIntelligence", "iOS27"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Apple이 WWDC26에서 <strong>Siri AI</strong>를 공개했다. 기존 Siri와 달리 개인 메시지·이메일·사진까지 검색하는 <strong>개인 맥락 이해</strong>, 화면에서 일어나는 일을 파악하는 <strong>온스크린 인식</strong>, 거의 모든 주제에 답하는 <strong>광범위한 세계 지식</strong>을 탑재했다. iOS 27 / iPadOS 27 / macOS 27에서 개발자 테스트 중이며, 올가을 베타 출시 예정이다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/hF8swzNR1-o" title="Apple WWDC 2026 June 8: Introducing Siri AI and more" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Siri가 완전히 달라졌다

2011년 처음 등장한 이후 크고 작은 업데이트를 거듭해 온 Siri가 WWDC26에서 사실상 완전히 새로 태어났다. Apple은 이번 버전에 **Siri AI**라는 별도 이름을 붙이며, 기존과의 단절을 명확히 선언했다.

Craig Federighi Apple 소프트웨어 엔지니어링 SVP는 "광범위한 세계 지식으로 거의 모든 주제에 최신 답변을 제공하고, 온스크린 인식과 개인 맥락 이해를 통해 사용자가 앱 전반에서 자연스럽게 행동을 취할 수 있도록 돕는다"고 설명했다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">8M+</span>
<span class="article-stats__label">WWDC26 키노트 유튜브 조회수</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">5종</span>
<span class="article-stats__label">Siri AI 지원 플랫폼 (iOS·iPadOS·macOS·watchOS·visionOS)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">2027</span>
<span class="article-stats__label">Siri AI가 탑재되는 OS 버전</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">2026 가을</span>
<span class="article-stats__label">사용자 대상 베타 출시 목표</span>
</div>
</div>

## 핵심 기능 세 가지

### 1. 개인 맥락 이해 (Personal Context Understanding)
Siri AI는 사용자의 메시지, 이메일, 사진, 캘린더, 메모를 검색해 개인화된 답변을 제공한다. 예를 들어 "엄마가 알려준 의사 연락처 찾아줘"라고 하면 메시지 앱을 직접 뒤져 정보를 꺼내온다.

### 2. 온스크린 인식 (Onscreen Awareness)
현재 화면에 무엇이 있는지 파악하고 그에 맞는 도움을 제공한다. 웹 기사를 읽는 중에 "이 사람 누구야?"라고 물으면 화면에 표시된 이름을 인식해 추가 정보를 검색한다.

### 3. 광범위한 세계 지식 (Broad World Knowledge)
실시간 정보에 기반해 날씨, 스포츠 결과, 뉴스, 계산 등 거의 모든 주제에 대화 형식으로 답한다. 기존 Siri처럼 인터넷 검색 결과로 넘기는 것이 아니라 직접 답변을 합성한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 팁</strong><br>Siri AI는 <code>developer.apple.com</code>의 Apple Developer Program을 통해 iOS 27 베타로 지금 바로 테스트할 수 있다. SiriKit 문서에서 새 Intents API와 App Intents 통합 방법을 확인하자.</div>
</div>

## 새로운 아키텍처와 프라이버시

Siri AI는 **Apple Intelligence**의 차세대 아키텍처 위에 구현됐다. Apple은 온디바이스 처리를 최우선으로 삼았으며, 클라우드 처리가 필요한 경우 **Private Cloud Compute**를 통해 애플 서버에서 처리하되 Apple조차 사용자 데이터에 접근할 수 없도록 설계했다고 밝혔다.

| 처리 계층 | 설명 | 프라이버시 수준 |
|-----------|------|----------------|
| 온디바이스 | 개인 데이터 처리 (메시지·사진·메모) | 완전 로컬 |
| Private Cloud Compute | 복잡한 추론 작업 | 서버 무접근 보장 |
| 외부 LLM (선택) | ChatGPT 등 서드파티 모델 | 사용자 동의 필요 |

Siri AI는 별도의 **전용 앱**을 통해 대화 기록을 기기 간 동기화해 이어볼 수 있다. 또한 **Visual Intelligence** 기능도 대폭 확장해 카메라로 본 사물·음식·식물 등을 즉시 인식한다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>지원 기기</strong><br>iPhone 16 시리즈 이상, iPhone 15 Pro/Pro Max, iPad mini(A17 Pro), M1 이상 iPad·Mac, Apple Vision Pro, Apple Watch Series 9 이상. EU 지역은 iOS·iPadOS·watchOS에서 초기 미지원(법적 검토 중).</div>
</div>

## 경쟁 구도: 삼성·구글·마이크로소프트와의 차이

삼성의 Galaxy AI, 구글의 Gemini, 마이크로소프트의 Copilot이 이미 각자의 AI 비서 생태계를 구축한 가운데 Apple의 Siri AI가 뒤늦게 합류한 모양새다. 그러나 Apple이 강조하는 차별점은 **프라이버시 우선 설계**와 **하드웨어-소프트웨어-서비스 통합**이다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Siri AI는 Apple Intelligence 차세대 아키텍처 기반으로 완전히 새롭게 설계됐다.</li>
<li>개인 맥락 이해, 온스크린 인식, 세계 지식 세 가지 핵심 능력을 갖췄다.</li>
<li>Private Cloud Compute로 클라우드 처리 시에도 Apple조차 데이터 열람 불가.</li>
<li>iOS 27 / iPadOS 27 / macOS 27 / watchOS 27 / visionOS 27 전 플랫폼 지원.</li>
<li>2026년 가을 영어 베타 출시, 이후 다국어 지원 확대 예정.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://developer.apple.com/apple-intelligence/" target="_blank" rel="noopener noreferrer">Apple Intelligence 개발자 페이지 — 공식 기능 개요 및 API 소개</a><br>— <a href="https://developer.apple.com/videos/play/wwdc2026/101/" target="_blank" rel="noopener noreferrer">WWDC26 키노트 영상 — Apple Developer (Siri AI 소개 27:53~)</a><br>— <a href="https://developer.apple.com/documentation/sirikit/" target="_blank" rel="noopener noreferrer">SiriKit 공식 문서 — Siri AI App Intents 통합 가이드</a><br>— <a href="https://developer.apple.com/machine-learning/" target="_blank" rel="noopener noreferrer">Apple Machine Learning — Core ML·Create ML 최신 문서</a></div></div>
