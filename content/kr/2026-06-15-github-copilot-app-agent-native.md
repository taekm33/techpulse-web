---
title: "GitHub Copilot 앱 출시 — 이슈에서 머지까지 에이전트가 처리하는 에이전트 네이티브 데스크톱"
summary: "GitHub이 Build 2026에서 에이전트 네이티브 데스크톱 앱 GitHub Copilot App을 공개했다. Git worktree로 격리된 병렬 에이전트 세션, 자동 Agent Merge, Copilot SDK GA, 로컬·클라우드 샌드박스가 핵심 기능이다."
category: "dev-trend"
date: "2026-06-15"
readingTime: 5
tags: ["github", "copilot", "에이전트", "개발툴", "devtools"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — GitHub이 Build 2026에서 <strong>GitHub Copilot App</strong>을 공개했다. 이슈 선택 → 코드 작성 → PR 제출 → 머지까지 전 주기를 에이전트와 함께 단일 인터페이스에서 처리하는 데스크톱 경험이다. Git worktree로 각 에이전트 세션을 격리하고, Agent Merge가 PR 리뷰·충돌·CI 패스를 자동 처리한다. Copilot Pro~Enterprise 사용자 대상 기술 프리뷰로 제공 중이다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/8OcHV-Yo5Ac" title="4 GitHub updates from Microsoft Build" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 개발자 워크플로의 재설계

GitHub의 월간 커밋 수는 전년 대비 거의 두 배 늘어 **14억 건/월**을 돌파했다. GitHub Actions는 주당 **20억 분** 이상 실행된다. 이 폭발적 성장의 배경은 하나 — 에이전트가 코드를 쓰기 시작했다.

문제는 에이전트가 작업하는 방식이 기존 IDE나 웹 인터페이스와 맞지 않는다는 점이다. 여러 에이전트가 동시에 다른 이슈를 처리해야 하고, PR을 제출한 후에도 머지까지 지속적인 관리가 필요하다. GitHub Copilot App은 이 에이전트 시대의 워크플로를 위해 처음부터 설계됐다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">14억</span>
<span class="article-stats__label">GitHub 월간 커밋 수 (전년 대비 2배)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">20억 분</span>
<span class="article-stats__label">주간 GitHub Actions 실행 시간</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">6종</span>
<span class="article-stats__label">Copilot SDK 지원 언어 (Node/TS, Python, Go, .NET, Rust, Java)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">GA</span>
<span class="article-stats__label">GitHub Copilot SDK 정식 출시 상태</span>
</div>
</div>

## 핵심 기능 4가지

### 1. My Work — 에이전트 통합 제어 센터
앱을 열면 **My Work** 뷰가 현재 작업 중인 모든 리포지토리의 이슈, PR, 활성 에이전트 세션, 백그라운드 자동화를 한 화면에 보여준다. 리포지토리를 추가하면 클론이 필요 없다 — 앱이 직접 로드한다.

### 2. Git Worktree 기반 병렬 에이전트
에이전트에게 여러 이슈를 동시에 할당하면, 앱은 각 세션을 **Git worktree**로 격리한다. 에이전트들이 병렬로 작업하되 서로 충돌하지 않는다. 기존의 stash·branch 관리 없이도 여러 작업이 동시에 진행된다.

### 3. Agent Merge
PR을 제출한 후 **Agent Merge를 활성화**하면 Copilot이 해당 PR을 끝까지 책임진다. CI 체크를 감시하고, 코드 리뷰 피드백에 대응하고, 머지 충돌을 자동 해결한다. 인간 개발자는 최종 승인만 담당한다.

### 4. 캔버스(Canvas) — 에이전트와의 양방향 작업 공간
캔버스는 브라우저 세션, 터미널, 배포 상태, 워크플로 상태 등을 에이전트와 공유하는 **양방향 작업 공간**이다. 에이전트가 캔버스를 업데이트하면 개발자가 직접 편집·재정렬·승인·방향 전환을 할 수 있다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>지금 바로 시작하기</strong><br>GitHub Copilot App은 현재 Copilot Pro, Pro+, Business, Enterprise 사용자 대상 기술 프리뷰로 제공된다. <a href="https://github.com/features/copilot" target="_blank">github.com/features/copilot</a>에서 접근 가능하다. 설치 후 리포지토리를 앱에 추가하면 클론 없이 즉시 에이전트 세션을 시작할 수 있다.</div>
</div>

## GitHub Copilot SDK — 누구나 에이전트 앱을 만들 수 있다

Build 2026에서 **Copilot SDK**가 정식 출시(GA)됐다. Node.js/TypeScript, Python, Go, .NET, Rust, Java 6개 언어를 지원하며, GitHub Copilot 앱 자체를 구동하는 동일한 에이전트 런타임을 외부 애플리케이션에 그대로 내장할 수 있다. 사내 코드 분석 도구, 릴리스 노트 생성기, 지원 워크플로 에이전트 등 어떤 것이든 이 런타임 위에 구축된다.

파트너 에이전트 앱도 동시에 출시됐다. LaunchDarkly, Bright, Amplitude, Sonar, Endor Labs, Octopus, Miro가 초기 파트너다.

| 기능 | 설명 | 상태 |
|------|------|------|
| Copilot App | 에이전트 네이티브 데스크톱 | 기술 프리뷰 |
| Git Worktree 격리 | 병렬 에이전트 세션 충돌 방지 | 포함 |
| Agent Merge | PR CI·리뷰·충돌 자동 처리 | 포함 |
| 캔버스 | 에이전트-개발자 양방향 작업공간 | 포함 |
| Copilot CLI 음성 모드 | 음성으로 Copilot CLI 조작 | 신규 출시 |
| Rubber Duck 에이전트 | CLI 내장 비판적 사고 도우미 | 신규 출시 |
| Copilot SDK | 에이전트 런타임 외부 내장 | GA (6개 언어) |
| 클라우드·로컬 샌드박스 | 에이전트 실험·격리 환경 | 신규 출시 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Copilot CLI의 새 기능 2가지</strong><br>① <strong>음성 모드(Voice Mode)</strong> — Copilot CLI를 음성으로 조작할 수 있다. ② <strong>Rubber Duck 에이전트</strong> — CLI에 내장된 비판적 사고 도우미로, 코드를 즉시 수정하는 대신 문제를 함께 생각하고 개선 방향을 제시하는 역할을 한다. 고무 오리 디버깅 기법을 AI로 구현한 개념이다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>GitHub Copilot App은 이슈→코딩→PR→머지 전 주기를 에이전트와 함께 처리하는 에이전트 네이티브 데스크톱이다.</li>
<li>Git worktree로 에이전트 세션을 격리해 병렬 작업 충돌 없이 다수 이슈를 동시 처리한다.</li>
<li>Agent Merge가 CI·코드 리뷰·충돌을 자동 처리해 인간은 최종 승인만 담당한다.</li>
<li>GitHub Copilot SDK가 GA 출시 — 동일 에이전트 런타임을 6개 언어로 외부 앱에 내장 가능.</li>
<li>현재 Copilot Pro~Enterprise 사용자 대상 기술 프리뷰, 클라우드·로컬 샌드박스 포함.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/" target="_blank" rel="noopener noreferrer">GitHub 공식 블로그 — Copilot App 에이전트 네이티브 데스크톱 경험 발표문</a><br>— <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot 제품 페이지 — 기능 소개 및 기술 프리뷰 접근</a><br>— <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot 공식 문서 — SDK 사용법, 에이전트 통합, 설정 가이드</a></div></div>
