---
title: "GitHub Agentic Workflows 퍼블릭 프리뷰 — 마크다운 파일 하나로 이슈 트리아지·CI 분석 자동화"
summary: "GitHub이 2026년 6월 11일 Agentic Workflows를 퍼블릭 프리뷰로 공개했다. 자연어 마크다운 파일로 자동화 규칙을 정의하면 GitHub Actions 내 AI 에이전트가 이슈 트리아지, CI 실패 분석, 문서 업데이트 등 추론 기반 작업을 처리한다. Copilot·Claude·Codex·Gemini 중 에이전트 엔진을 선택할 수 있다."
category: "dev-trend"
date: "2026-06-14"
readingTime: 5
tags: ["GitHub", "AgenticWorkflows", "GitHubActions", "개발자도구", "AI자동화"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — GitHub Agentic Workflows가 6월 11일 퍼블릭 프리뷰로 전환됐다. 마크다운 파일로 자동화 목표를 서술하면 GitHub Actions가 이를 YAML로 컴파일하고, AI 에이전트가 이슈 트리아지·CI 실패 분석·문서 업데이트를 자율적으로 처리한다. 에이전트는 기본적으로 읽기 전용 권한으로 작동하며 샌드박스 컨테이너 안에서 실행된다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/0XTyicuhdKE" title="GitHub Agentic Workflows: Automation That Actually Reads the Room | DEM350" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 기존 GitHub Actions와의 차이점

기존 GitHub Actions는 개발자가 YAML 파일로 트리거·스텝·조건을 직접 명시해야 했다. 이슈가 "라벨이 `bug`이고 PR이 없으면" 같은 조건 분기는 복잡한 중첩 YAML로 표현해야 했고, 코드 문맥을 이해하는 추론은 불가능했다.

GitHub Agentic Workflows는 다른 접근법을 택한다. **자연어 마크다운으로 원하는 결과를 서술**하면, CLI 도구(`gh aw`)가 이를 표준 Actions YAML로 컴파일한다. 이 YAML은 AI 에이전트를 Actions runner 안에서 실행하며, 에이전트가 코드·이슈·PR·CI 로그를 읽고 추론해 작업을 수행한다.

예를 들어 이슈 트리아지 워크플로우는 이렇게 정의한다:

```
새 이슈가 열리면 유형과 우선순위로 라벨을 붙이고,
중복 이슈를 찾아 링크하며, 설명이 불명확하면
명확한 질문을 달고 적합한 팀원에게 할당하라.
```

이 마크다운 파일 하나가 복수의 GitHub Actions 단계를 대체한다.

## 설계 원칙: 안전하게 자동화하기

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">읽기 전용</span>
<span class="article-stats__label">에이전트 기본 권한</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">샌드박스</span>
<span class="article-stats__label">Agent Workflow Firewall 내 실행</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">4종</span>
<span class="article-stats__label">지원 AI 엔진 (Copilot·Claude·Codex·Gemini)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">100%</span>
<span class="article-stats__label">기존 runner 그룹·정책 재사용</span>
</div>
</div>

GitHub은 이 기능을 퍼블릭 프리뷰로 내놓으면서 보안에 특히 신경 쓴 흔적을 곳곳에 남겼다.

- **무결성 필터(integrity filter)** — 에이전트가 접근할 수 있는 GitHub 콘텐츠 범위를 제한
- **기본 읽기 전용 권한** — 명시적으로 쓰기 권한을 부여하지 않으면 에이전트는 리포지터리를 읽기만 함
- **Agent Workflow Firewall** — 샌드박스 컨테이너에서 실행되며 외부 통신 제한
- **Safe Outputs 검증** — 에이전트가 제안한 변경사항을 출력 전 검증
- **전용 위협 탐지 잡** — 모든 변경사항 적용 전 스캔

생성되는 Actions YAML은 기존 runner 그룹·정책·시크릿 체계를 그대로 재사용한다. 조직이 이미 Actions에 투자한 거버넌스 구조를 새로 바꿀 필요가 없다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>빠른 시작: 10분 안에 첫 에이전틱 워크플로우 실행하기</strong><br>1. CLI 확장 설치: <code>gh extension install github/gh-aw</code><br>2. 리포지터리 루트에서: <code>gh aw add-wizard githubnext/agentics/daily-repo-status</code><br>3. 에이전트 엔진 선택(Copilot·Claude·Codex·Gemini) 및 API 키 설정<br>4. 워크플로우 실행 후 자동 생성된 이슈 리포트 확인</div>
</div>

## 지원 AI 엔진과 인증 방식

GitHub Agentic Workflows는 특정 AI 공급사에 종속되지 않는다. 설치 마법사에서 다음 중 하나를 선택할 수 있다.

| 에이전트 엔진 | 필요한 시크릿 |
|-------------|------------|
| GitHub Copilot | `COPILOT_GITHUB_TOKEN` |
| Claude (Anthropic) | `ANTHROPIC_API_KEY` |
| Codex (OpenAI) | `OPENAI_API_KEY` |
| Gemini (Google) | `GEMINI_API_KEY` |

엔진 선택은 워크플로우 파일 수준에서 이루어지므로, 이슈 트리아지에는 Copilot을, 코드 분석에는 Claude를 사용하는 식으로 조합이 가능하다.

## 실제 자동화 가능한 작업들

GitHub Next의 `agentics` 리포지터리에는 즉시 사용 가능한 프리빌트 워크플로우가 제공된다.

- **이슈 트리아지** — 유형·우선순위 라벨 부착, 중복 감지, 질문 자동 댓글
- **CI 실패 분석** — 로그를 읽고 원인 요약 및 수정 제안 PR 생성
- **문서 업데이트** — 코드 변경을 감지하고 관련 문서 자동 갱신
- **일일 리포지터리 상태 보고** — 활동 요약, 미결 이슈·PR 현황을 이슈로 작성
- **컴플라이언스 체크** — PR이 팀 가이드라인을 준수하는지 자동 검토

<div class="article-callout info">
<div class="article-callout__icon">📌</div>
<div class="article-callout__body"><strong>PAT 없이도 작동</strong><br>6월 11일 업데이트에서 Agentic Workflows는 별도의 Personal Access Token 없이도 동작하도록 개선됐다. 초기에는 PAT이 필요했으나, 이 요구사항이 제거되어 팀 전체가 별도 토큰 관리 없이 바로 사용할 수 있게 됐다.</div>
</div>

## 로컬·웹·모바일 워크플로우 편집

아직 퍼블릭 프리뷰 단계이지만, 워크플로우를 만드는 방법은 이미 다양하다.

1. **GitHub 웹 인터페이스** — Copilot 채팅으로 워크플로우를 몇 분 안에 생성
2. **VS Code / Claude Code / Codex / Cursor** — `gh aw init` 후 코딩 에이전트에게 위임
3. **GitHub 모바일 앱** — 초기화된 리포지터리에서 Copilot 채팅으로 편집
4. **CLI 직접 편집** — 마크다운 파일을 직접 작성하고 `gh aw compile`로 YAML 생성

<div class="article-keypoints">
<strong>핵심 정리</strong>
<ul>
<li>GitHub Agentic Workflows가 6월 11일 퍼블릭 프리뷰로 전환 — 이슈 트리아지·CI 분석·문서 업데이트를 AI가 처리</li>
<li>마크다운으로 자동화 목표를 서술하면 Actions YAML로 자동 컴파일</li>
<li>Copilot·Claude·Codex·Gemini 중 에이전트 엔진 선택 가능</li>
<li>기본 읽기 전용 권한·샌드박스 실행·Safe Outputs 검증으로 보안 설계</li>
<li>기존 Actions runner 그룹·정책 100% 재사용 가능</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/" target="_blank" rel="noopener noreferrer">GitHub Changelog: Agentic Workflows 퍼블릭 프리뷰 발표</a><br>— <a href="https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/quickstart" target="_blank" rel="noopener noreferrer">GitHub 공식 문서: 첫 에이전틱 워크플로우 퀵스타트</a><br>— <a href="https://github.github.com/gh-aw/setup/quick-start/" target="_blank" rel="noopener noreferrer">GitHub Agentic Workflows 설정 가이드 (gh-aw CLI)</a></div></div>
