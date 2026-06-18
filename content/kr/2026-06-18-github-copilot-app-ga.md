---
title: "GitHub Copilot 앱, 정식 출시 — 이슈부터 머지까지 한 앱에서 끝낸다"
summary: "깃허브가 macOS·Windows·Linux용 GitHub Copilot 앱을 정식 출시(GA)했다. 이슈·PR을 한 곳에 모으고, 작업마다 격리된 워크트리에서 에이전트 세션을 동시에 돌리며, 'agent merge'가 리뷰·CI·머지까지 자동으로 처리한다."
category: "dev-trend"
date: "2026-06-18"
readingTime: 5
tags: ["GitHubCopilot", "에이전트형개발", "개발자도구"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/mv6MMQ2j128" title="How to ship from issue to merge with the GitHub Copilot app | demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> 깃허브가 2026년 6월 17일, 데스크톱 전용 'GitHub Copilot 앱'을 macOS·Windows·Linux에서 정식 출시(GA)했다. 프리뷰 이후 캔버스(Canvas), 클라우드 자동화, 모델·도구 선택(BYO) 기능이 추가됐다. 모든 이슈와 PR을 한 인박스에 모으고, 작업별로 격리된 git 워크트리에서 동시에 여러 에이전트 세션을 실행하며, 'agent merge' 기능이 코드 리뷰 처리·CI 통과·브랜치 정리까지 사람 개입 없이 끝낸다.</div>

깃허브가 에이전트 기반 개발을 위한 네이티브 데스크톱 앱인 'GitHub Copilot 앱'의 정식 출시를 발표했다. 지난 6월 초 마이크로소프트 빌드(Microsoft Build) 2026에서 기술 프리뷰로 처음 공개된 이후 약 2주 만에 GA로 전환됐다.

## 챗봇이 아니라 "작업 관제실"

<div class="article-stats">
<div><strong>3개 OS</strong><br>지원 플랫폼(macOS·Windows·Linux)</div>
<div><strong>1개 인박스</strong><br>모든 저장소의 이슈·PR을 한 화면에 통합</div>
<div><strong>N개 워크트리</strong><br>세션마다 격리된 git 워크트리에서 병렬 작업</div>
</div>

이 앱의 핵심은 "이슈에서 시작해 머지까지" 전체 소프트웨어 개발 생명주기(SDLC)를 하나의 화면에서 처리한다는 점이다. 사용자의 이슈와 PR을 'Active(내게 할당/내가 연 것)', 'Review requested(리뷰 대기)', 'Done(정리 대상)' 섹션으로 자동 분류하고, GitHub 검색 쿼리로 커스텀 섹션도 만들 수 있다. 각 항목을 클릭해 새 세션을 시작하면 해당 브랜치가 독립된 git 워크트리로 체크아웃되어, 한 탭에서 파일을 수정해도 다른 세션에 영향을 주지 않는다. 더 이상 git stash나 checkout을 반복하며 컨텍스트를 잃을 필요가 없다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>agent merge가 PR을 "끝까지" 끌고 간다</strong><br>몇 분마다 리뷰 스레드 처리 여부, CI 통과 여부, 브랜치 정리 상태를 점검해 막힌 부분이 있으면 스스로 해결하고, 정말 막히면 사람에게 알린다. 막힘이 없으면 PR을 자동으로 머지한다.</div>
</div>

## 프리뷰 이후 추가된 3가지: 캔버스·클라우드 자동화·BYO

기술 프리뷰 단계 이후 추가된 기능도 눈에 띈다. 첫째, 'Canvas'는 사용자와 에이전트가 계획·PR·터미널·브라우저 세션 같은 작업 표면을 양방향으로 공유해, 진행 상황이 채팅 로그에 묻히지 않고 시각적으로 드러나게 한다. 둘째, 'Cloud automations'는 반복 작업(스테일 브랜치 정리, 신규 이슈 트리아지 등)을 클라우드에서 예약 실행해, 로컬 PC가 켜져 있지 않아도 동작한다. 셋째, 'Bring your own model and tools'는 세션마다 사용할 모델을 고르고 MCP 서버를 통해 외부 도구를 연결할 수 있게 했다 — 깃허브 공식 데모에서는 Claude Code, Codex 등 서드파티 에이전트도 함께 노출된다.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body">
<strong>접근 조건</strong><br>유료 GitHub Copilot 구독(Pro 이상)이 필요하며, Copilot Business/Enterprise 플랜에서는 조직·엔터프라이즈 관리자가 정책에서 Copilot CLI를 활성화해야 앱에 접근할 수 있다.</div>
</div>

## 요금 구조

| 플랜 | 월 비용(사용자당) | 비고 |
|---|---|---|
| Free | $0 | 월 2,000회 완성, Haiku 4.5·GPT-5 mini 등 |
| Pro | $10 | Copilot 앱·클라우드 에이전트·코드 리뷰, 월 $15 크레딧 |
| Pro+ | $39 | Opus 등 프리미엄 모델, 감사 로그, 월 $70 크레딧 |
| Max | $100 | 신규 모델 우선 접근, Pro+ 대비 2.9배 이상 사용량 |

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>이슈·PR 인박스 통합 + 작업별 격리 워크트리로 컨텍스트 전환 비용을 제거</li>
<li>agent merge가 리뷰·CI·머지까지 자동 처리해 PR을 "셀프 머지"하게 만듦</li>
<li>Canvas, 클라우드 자동화, BYO 모델/도구로 프리뷰 대비 기능 확장</li>
<li>유료 Copilot 플랜(Pro 이상) 필요, 기업은 관리자 정책 설정 필수</li>
</ul>
</div>

데모 영상에서 깃허브 직원은 "일주일 전엔 PR 하나를 머지하는 게 좋은 하루였는데, 오늘은 세 개가 스스로 머지되고 이슈 두 개는 이미 진행 중이었다"고 말했다. 채팅창에 묻혀 있던 에이전트 작업을 시각적인 '관제실'로 끌어올린 것이 이번 GA의 핵심 변화다.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/" target="_blank" rel="noopener noreferrer">GitHub 공식 체인지로그: GitHub Copilot 앱 정식 출시</a><br>— <a href="https://gh.io/gh-copilot-app-download" target="_blank" rel="noopener noreferrer">GitHub Copilot 앱 다운로드 및 제품 페이지</a><br>— <a href="https://gh.io/github-app-docs" target="_blank" rel="noopener noreferrer">GitHub Copilot 앱 공식 문서</a></div></div>
