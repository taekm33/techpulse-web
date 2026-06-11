---
title: "Apple이 완전히 새로 설계한 Siri AI 공개 — WWDC26에서 선보인 차세대 AI 개인 비서"
summary: "Apple이 WWDC 2026에서 Apple Intelligence 기반의 완전히 재설계된 Siri AI를 발표했습니다. 개인 맥락 이해, 온스크린 인식, 광범위한 세계 지식을 갖춘 Siri AI는 iOS 27, iPadOS 27, macOS 27 전 플랫폼에서 제공됩니다."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["Apple", "Siri AI", "Apple Intelligence", "WWDC26", "iOS 27"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Apple이 WWDC 2026(6월 8일)에서 Siri를 처음부터 새로 설계한 <strong>Siri AI</strong>를 공개했습니다. 단순 명령 처리 수준이던 기존 Siri와 달리, Siri AI는 개인 맥락 이해·온스크린 인식·광범위한 웹 지식을 갖춘 본격적인 AI 대화 비서입니다. iOS 27, iPadOS 27, macOS 27, watchOS 27, visionOS 27에서 올해 하반기 베타로 출시될 예정입니다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/hF8swzNR1-o" title="Apple WWDC 2026 June 8: Introducing Siri AI and more" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Siri, 14년 만의 전면 재설계

2011년 iPhone 4S와 함께 등장한 Siri는 오랫동안 "명령어 처리" 수준에 머물러 있었습니다. Apple은 WWDC 2026 기조연설에서 이 한계를 인정하고, Apple Foundation Models 차세대 버전을 기반으로 처음부터 다시 만든 **Siri AI**를 발표했습니다.

Craig Federighi 소프트웨어 엔지니어링 수석 부사장은 "Siri AI는 화면의 맥락, 사용자의 개인 정보, 실시간 웹 지식을 동시에 활용해 사용자가 더 많은 일을 처리할 수 있도록 돕는다"고 밝혔습니다.

<div class="article-stats">
  <div class="stat-item"><span class="stat-number">7.9M</span><span class="stat-label">WWDC26 키노트 YouTube 조회수 (공개 3일)</span></div>
  <div class="stat-item"><span class="stat-number">43개+</span><span class="stat-label">앱 간 시스템 전체 액션 지원</span></div>
  <div class="stat-item"><span class="stat-number">16개</span><span class="stat-label">Apple Intelligence 지원 언어 수</span></div>
</div>

## Siri AI의 핵심 기능

### 1. 개인 맥락 이해 (Personal Context Understanding)
Siri AI는 메시지, 이메일, 사진, 캘린더 등 앱 전반을 검색해 사용자가 필요로 하는 정보를 찾아줍니다. 예를 들어 "친구가 추천한 레스토랑 찾아줘"라고 하면 메시지를 뒤져 링크를 꺼내줍니다. 서드파티 앱도 Spotlight에 통합되면 같은 방식으로 동작합니다.

### 2. 온스크린 인식 (On-Screen Awareness)
화면에 보이는 내용에 대해 바로 질문할 수 있습니다. 친구에게서 파티 초대 문자가 오면 "무엇을 가져가면 좋을지" 바로 브레인스토밍하고, Notes 앱에 레시피를 추가하는 것까지 한 번에 처리합니다.

### 3. 광범위한 세계 지식 (Broad World Knowledge)
실시간 웹 검색을 통해 "다음 일식은 언제야?", "이 뮤지션 공연 일정 있어?" 같은 질문에도 정확하게 답변합니다. 대화를 이어가며 추가 질문도 가능합니다.

### 4. 전용 Siri 앱 및 대화 기록
새로운 Siri 전용 앱이 출시되어 대화를 다시 볼 수 있고, iCloud를 통해 모든 기기 간 대화 기록이 동기화됩니다.

### 5. Visual Intelligence 전 플랫폼 확대
iPhone의 카메라 앱에 통합된 Siri 모드에 이어, iPad와 Mac에서도 스크린샷 및 키보드 단축키로 Visual Intelligence를 이용할 수 있게 됩니다. Apple Vision Pro에서는 3D 공간에서 시선을 맞추는 것만으로 Siri를 호출합니다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자를 위한 팁</strong><br>Siri AI는 <strong>App Intents</strong> 및 <strong>Foundation Models 프레임워크</strong>를 통해 서드파티 앱과 통합됩니다. Apple Developer Program에 등록된 개발자는 iOS 27, iPadOS 27, macOS 27, visionOS 27 베타에서 지금 바로 테스트할 수 있습니다.</div>
</div>

## 프라이버시 설계: Private Cloud Compute

Apple은 "가장 개인적인 어시스턴트는 가장 강력한 프라이버시를 갖춰야 한다"고 강조합니다. Siri AI는 **Private Cloud Compute** 아키텍처를 사용해 클라우드에서 요청을 처리할 때도 개인 데이터가 Apple 서버에 저장되거나 Apple이 접근하지 못하도록 설계됐습니다. 외부 전문가가 언제든 이 프라이버시 약속을 검증할 수 있습니다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>출시 일정 및 지역 제한</strong><br>Siri AI는 2026년 하반기 영어 베타로 시작하며, 이후 다국어 지원을 빠르게 확대할 예정입니다. <strong>EU는 iOS/iPadOS/watchOS에서 초기 미지원</strong>(Mac·Vision Pro는 지원), 중국은 규제 심사 중으로 미지원입니다. 한국어 지원 일정은 아직 미발표 상태입니다.</div>
</div>

## 지원 기기

| 플랫폼 | 최소 요구 기기 |
|--------|--------------|
| iPhone | iPhone 15 Pro / iPhone 16 이상 |
| iPad | iPad mini (A17 Pro), M1 이상 iPad |
| Mac | M1 이상 Mac, MacBook Neo (A18 Pro) |
| Apple Watch | Series 9 이상, Ultra 2, SE 3 (iPhone 연결 필요) |
| Apple Vision Pro | 전 모델 (M5 칩으로 고급 기능 지원) |

## Siri AI vs. 기존 Siri 비교

| 항목 | 기존 Siri | Siri AI |
|------|----------|---------|
| 응답 방식 | 단답형 명령 처리 | 풍부한 대화형 응답 |
| 개인 맥락 | 제한적 | 앱 전반 깊은 통합 |
| 화면 인식 | 없음 | 온스크린 인식 지원 |
| 웹 지식 | 제한적 | 실시간 웹 검색 |
| 대화 기록 | 없음 | 전용 앱 + iCloud 동기화 |
| 작문 도구 | 없음 | 시스템 전반 Writing Tools 통합 |

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Siri AI는 처음부터 새로 설계된 완전히 다른 어시스턴트로, Apple Intelligence 차세대 Foundation Models 기반</li>
<li>개인 맥락 이해, 온스크린 인식, 실시간 웹 지식 — 세 가지 핵심 역량을 동시에 갖춤</li>
<li>Private Cloud Compute로 클라우드 처리 시에도 데이터 저장 없이 프라이버시 보호</li>
<li>iOS 27 등 2026년 하반기 베타 출시, 개발자 테스트는 지금 시작</li>
<li>EU iOS/iPadOS/watchOS 초기 미지원, 한국어 지원 일정 미정</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" target="_blank" rel="noopener noreferrer">Apple 공식 보도자료: Siri AI 발표</a><br>— <a href="https://developer.apple.com/apple-intelligence/" target="_blank" rel="noopener noreferrer">Apple Developer: Apple Intelligence 개발 가이드 (App Intents, Foundation Models 등)</a><br>— <a href="https://developer.apple.com/videos/play/wwdc2026/101/" target="_blank" rel="noopener noreferrer">WWDC26 공식 키노트 영상 (Apple Developer)</a></div></div>
