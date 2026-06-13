---
title: "WWDC26: Apple, Siri를 완전 재설계 — Siri AI로 진정한 AI 어시스턴트 도약"
summary: "Apple이 WWDC26 키노트(6월 8일)에서 Siri를 처음부터 새로 만든 'Siri AI'를 공개했다. Apple Intelligence 차세대 아키텍처를 기반으로 개인 컨텍스트 이해·광범위 웹 지식·화면 인식을 갖춘 대화형 어시스턴트로, iOS 27·iPadOS 27·macOS 27·visionOS 27에서 개발자 베타 테스트가 시작됐다."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["Apple", "SiriAI", "WWDC26", "AppleIntelligence", "iOS27"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Apple이 WWDC26(2026년 6월 8일)에서 <strong>Siri AI</strong>를 발표했다. 수십 년간 사용하던 Siri를 완전히 뜯어고친 버전으로, 차세대 Apple Intelligence와 Apple Foundation Model을 기반으로 개인 컨텍스트 이해, 화면 인식, 광범위 웹 검색, 풍부한 대화 기록을 제공한다. iOS 27 개발자 베타가 즉시 시작됐으며 올 하반기 일반 베타가 예정돼 있다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/hF8swzNR1-o" title="Apple WWDC 2026 June 8: Introducing Siri AI and more" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Siri AI: 왜 이번엔 다른가

그간 Apple의 AI 전략은 경쟁사 대비 다소 보수적이라는 평가를 받아왔다. WWDC26에서 Apple은 그 인식을 바꾸려는 가장 큰 도박을 꺼냈다. **Siri AI**는 단순히 기능을 추가한 업데이트가 아니라, 기반 아키텍처부터 완전히 새로 설계한 어시스턴트다.

Craig Federighi Apple 소프트웨어 엔지니어링 수석 부사장은 "더 지능적이고, 더 박식하고, 더 유능한 Siri"라고 표현했다. Apple은 이를 가능하게 한 핵심 기술로 **차세대 Apple Foundation Model**과 **Private Cloud Compute(PCC)** 아키텍처를 꼽는다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">8백만</span>
<span class="article-stats__label">WWDC26 공식 키노트 유튜브 조회수</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">iOS 27+</span>
<span class="article-stats__label">지원 OS (개발자 베타 즉시 시작)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">5개 플랫폼</span>
<span class="article-stats__label">iPhone·iPad·Mac·Watch·Vision Pro 동기화</span>
</div>
</div>

## 주요 신기능

### 개인 컨텍스트 이해 (Personal Context)

Siri AI는 사용자의 메시지, 이메일, 사진, 캘린더 등 기기 내 데이터를 직접 검색할 수 있다. "지난주에 엄마가 보낸 레시피 찾아줘", "내 다음 항공편이 몇 시야?" 같은 자연어 질문에 앱을 열지 않고도 답할 수 있다.

### 화면 인식 (On-Screen Awareness)

사용자가 현재 보고 있는 화면 내용을 기반으로 맥락에 맞는 도움을 제공한다. 특정 앱의 콘텐츠, 텍스트, UI 요소를 인식하고 관련 정보나 행동을 제안한다.

### 광범위한 웹 지식 (Broad World Knowledge)

기기 내 정보로 답할 수 없는 질문은 최신 웹 검색을 통해 답변을 생성한다. 단순 링크 제공이 아닌, 정보를 종합해 직접 답변을 제시한다.

### 전용 Siri 앱

처음으로 **Siri 전용 앱**이 생겼다. 대화 기록을 되돌아보고 이전 대화를 이어갈 수 있으며, iCloud를 통해 iPhone·iPad·Mac·Apple Watch·Vision Pro 간 대화 기록이 비공개로 동기화된다.

### 확장된 시스템 전체 앱 동작

앱 간 경계를 넘어 동작하는 **시스템 전체 앱 액션(systemwide app actions)** 이 대폭 확대됐다. "이 사진 편집해서 메일로 보내줘" 같은 멀티-앱 작업이 자연어 한 문장으로 가능해진다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>개발자를 위한 기회</strong><br>
Apple은 <strong>SiriKit</strong>·<strong>App Intents</strong> API를 통해 앱이 Siri AI의 시스템 전체 액션에 깊이 통합될 수 있도록 지원한다. iOS 27 개발자 베타에서 지금 바로 연동 개발을 시작할 수 있다.
</div>
</div>

## 프라이버시: PCC의 역할

Apple의 핵심 차별화 포인트는 **프라이버시**다. Siri AI의 요청이 기기 밖에서 처리될 때는 **Private Cloud Compute(PCC)** 서버를 사용한다. PCC는 처리 완료 후 사용자 데이터를 저장하지 않으며, Apple도 제3자도 해당 데이터에 접근할 수 없음을 외부 전문가가 언제든 검증할 수 있다고 Apple은 강조한다.

| 처리 방식 | 위치 | 데이터 저장 |
|-----------|------|------------|
| 기기 내 처리 | iPhone/iPad/Mac 칩 | 기기 내 보관 |
| Private Cloud Compute | Apple 서버 | 처리 후 즉시 삭제 |
| 제3자 AI (ChatGPT 등) | 외부 서버 | Apple 제어 외 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>EU 사용자 주의</strong><br>
EU 규정 대응 문제로 <strong>iOS·iPadOS·watchOS에서는 EU 지역에 초기 Siri AI를 제공하지 않는다.</strong> Mac 및 Apple Vision Pro의 EU 사용자에는 제공된다. Apple은 EU에서 프라이버시·보안을 유지하면서 서비스 제공 방법을 계속 모색 중이라고 밝혔다.
</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Siri AI는 처음부터 다시 설계한 완전히 새로운 어시스턴트 — 단순 업데이트 아님</li>
<li>개인 컨텍스트(메시지·이메일·사진)·화면 인식·웹 지식 통합</li>
<li>전용 Siri 앱: 대화 기록 열람 및 기기 간 동기화 지원</li>
<li>Private Cloud Compute로 클라우드 처리 시에도 프라이버시 보호</li>
<li>iOS 27 개발자 베타 즉시 시작, 일반 베타는 올 하반기 예정 (EU iOS/iPadOS 제외)</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://developer.apple.com/wwdc26/" target="_blank" rel="noopener noreferrer">WWDC26 공식 페이지 — 세션 영상 전체 모음</a><br>— <a href="https://developer.apple.com/videos/play/wwdc2026/101/" target="_blank" rel="noopener noreferrer">WWDC26 키노트 공식 영상 (Apple Developer)</a><br>— <a href="https://developer.apple.com/documentation/sirikit" target="_blank" rel="noopener noreferrer">SiriKit 공식 문서 — Siri AI 연동 개발 시작</a><br>— <a href="https://developer.apple.com/machine-learning/" target="_blank" rel="noopener noreferrer">Apple Machine Learning — Core ML·Apple Intelligence 개발 가이드</a></div></div>
