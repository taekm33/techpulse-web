---
title: "GitHub Agentic Workflows 퍼블릭 프리뷰 — 자연어 마크다운으로 AI가 저장소를 운영한다"
summary: "GitHub이 6월 11일 Agentic Workflows를 퍼블릭 프리뷰로 공개했다. 마크다운 파일에 자연어로 자동화 규칙을 작성하면 GitHub Actions 안에서 AI 에이전트가 이슈 분류, CI 장애 분석, 문서 업데이트 등을 자율 수행한다. 기존 Actions 인프라와 완전 호환된다."
category: "dev-trend"
date: "2026-06-13"
readingTime: 5
tags: ["GitHub", "AI에이전트", "GitHubActions", "개발자도구", "자동화"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — GitHub이 2026년 6월 11일 <strong>Agentic Workflows</strong>를 퍼블릭 프리뷰로 공개했다. 자연어 마크다운 파일 하나로 AI 에이전트가 GitHub Actions 내부에서 이슈 분류·CI 수리·문서 갱신을 자율 처리한다. 기존 러너·정책·YAML 인프라를 재활용하고, 샌드박스와 Agent Workflow Firewall로 보안을 보장한다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/XisVQoz5grw" title="How to use agentic workflows for your repos | GitHub Checkout" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Agentic Workflows란?

**GitHub Agentic Workflows**는 개발자가 저장소 자동화를 자연어 마크다운 파일로 정의하면, GitHub Copilot CLI가 이를 표준 Actions YAML로 컴파일해 실행하는 기능이다. 한 마디로 **"영어(혹은 한국어)로 말하면 자동화가 된다"**는 개념이다.

GitHub Next·GitHub·Azure Core·Microsoft Research가 공동 개발한 이 프로젝트는 소프트웨어 개발 수명 주기(SDLC) 전 구간을 AI로 자동화하는 것을 목표로 한다. 이슈 트리아지(triage), CI 실패 분석·자가 수리, 문서 자동 갱신, 컴플라이언스 리포트 생성 등이 대표 사용 사례다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">18+</span>
<span class="article-stats__label">공식 제공 예제 워크플로 수</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">읽기 전용</span>
<span class="article-stats__label">에이전트 기본 권한 모드</span>
</div>
<parameter name="content">
<div class="article-stats__item">
<span class="article-stats__value">100%</span>
<span class="article-stats__label">기존 Actions 러너·정책 재사용</span>
</div>
</div>

## 어떻게 작동하나?

### 1단계: 마크다운 파일 작성

`.github/workflows/` 아래에 자연어로 작성한 `.md` 파일을 생성한다. 예시:

```markdown
---
trigger: schedule(daily)
permissions: read
outputs: pull_request
---
매일 오전 8시에 메인 브랜치의 오픈 이슈를 분류하라.
버그 레이블이 붙은 이슈는 우선순위 고(High)로 재분류하고,
일주일 이상 비활성 이슈는 자동으로 'stale' 레이블을 부착하라.
변경 내역은 Pull Request로 제출하라.
```

### 2단계: CLI 컴파일

`gh aw compile` 명령 한 줄로 마크다운이 표준 Actions YAML로 변환된다. 생성된 YAML은 버전 관리가 가능하고, 기존 Actions 정책과 완전 호환된다.

### 3단계: 자동 실행

에이전트는 샌드박스 컨테이너 안에서 실행되며 **Agent Workflow Firewall** 뒤에 놓인다. 출력물은 Safe Outputs 프로세스를 거치고, 전용 위협 탐지 작업이 제안된 변경사항을 사전 스캔한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>시작하는 가장 빠른 방법</strong><br>
<code>gh extension install github/gh-agentic-workflows</code>로 CLI 확장을 설치하고, <a href="https://github.com/github-early-access" target="_blank" rel="noopener noreferrer">GitHub Early Access</a>에서 퍼블릭 프리뷰를 신청한다. 이미 GitHub Actions를 사용 중이라면 기존 러너 그룹을 그대로 활용할 수 있다.
</div>
</div>

## 보안 설계

Agentic Workflows는 보안을 기본값으로 삼는다.

| 보안 레이어 | 설명 |
|------------|------|
| 읽기 전용 기본 권한 | 에이전트는 기본적으로 저장소 콘텐츠를 읽기만 한다 |
| 샌드박스 컨테이너 | 외부 네트워크 접근 차단, 격리 환경 실행 |
| Agent Workflow Firewall | 허용된 API 엔드포인트만 접근 허용 |
| Safe Outputs 프로세스 | 출력물의 안전성 자동 검증 |
| 위협 탐지 작업 | 제안된 코드 변경 전 스캔 |
| 무개인 액세스 토큰 | PAT 없이도 동작 (6월 11일 업데이트) |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>실제 활용 사례</strong><br>
Home Assistant 오픈소스 프로젝트는 이미 이슈 트리아지에 Agentic Workflows를 도입해 메인테이너 부담을 대폭 줄였다. Astro 프레임워크는 "슈퍼 Dependabot"으로 프레임워크 업그레이드 PR을 자동 생성하고 있다.
</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>2026년 6월 11일 퍼블릭 프리뷰 공개 — 누구나 신청 가능</li>
<li>자연어 마크다운 → 표준 Actions YAML 자동 변환</li>
<li>에이전트 기본 권한은 읽기 전용, 변경사항은 PR 형태로 제출</li>
<li>기존 GitHub Actions 러너·정책·인프라 완전 재사용</li>
<li>이슈 트리아지·CI 자가수리·문서 갱신·컴플라이언스 보고가 주 사용 사례</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions 공식 소개 및 시작 가이드</a><br>— <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot — Agentic Workflows 구동 엔진</a><br>— <a href="https://github.com/github-early-access" target="_blank" rel="noopener noreferrer">GitHub Early Access — 퍼블릭 프리뷰 신청</a></div></div>
