---
title: "GitHub Agentic Workflows 퍼블릭 프리뷰 — 마크다운으로 AI 에이전트를 GitHub Actions에 넣다"
summary: "GitHub이 Agentic Workflows를 퍼블릭 프리뷰로 공개했다. 자연어 마크다운 파일 하나로 이슈 트리아지·CI 실패 분석·문서 업데이트를 처리하는 AI 에이전트를 GitHub Actions 위에서 실행할 수 있다."
category: "dev-trend"
date: "2026-06-12"
readingTime: 5
tags: ["github", "agentic-workflows", "github-actions", "copilot", "ci-cd"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> GitHub이 <strong>Agentic Workflows</strong>를 퍼블릭 프리뷰로 공개했다. 4개월간의 기술 프리뷰를 거쳐 모든 GitHub Copilot 구독자에게 개방됐다. 자연어로 작성한 마크다운 파일이 GitHub Actions YAML로 컴파일되며, 에이전트가 이슈 트리아지·CI 진단·문서 자동 업데이트 같은 판단이 필요한 작업을 자율적으로 처리한다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/XisVQoz5grw" title="How to use agentic workflows for your repos | GitHub Checkout" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## CI/CD와 AI가 하나로 합쳐지다

2026년 6월 11일, GitHub은 **Agentic Workflows**의 퍼블릭 프리뷰를 공식 발표했다. 이번 릴리즈는 기존 GitHub Actions의 결정론적 파이프라인에 **AI 판단 레이어**를 더하는 것을 목표로 한다. 컨테이너 빌드나 아티팩트 패키징 같은 단순 자동화는 기존 Actions가 처리하고, 이슈 분류·CI 실패 원인 분석·문서 업데이트처럼 컨텍스트 이해가 필요한 작업은 에이전트가 맡는다.

핵심 설계 원칙은 "에이전트가 결정하고, 신뢰된 단계가 실행한다"는 분리 구조다. 이 아키텍처 덕분에 AI에게 프로덕션 리포에 대한 무제한 쓰기 권한을 줄 필요 없이 안전하게 운용할 수 있다.

<div class="article-stats">
<div class="article-stat"><span class="article-stat__value">4개월</span><span class="article-stat__label">기술 프리뷰 기간</span></div>
<div class="article-stat"><span class="article-stat__value">전체</span><span class="article-stat__label">Copilot 구독자 개방 (Free~Enterprise)</span></div>
<div class="article-stat"><span class="article-stat__value">10분</span><span class="article-stat__label">첫 워크플로우 설정 소요 시간</span></div>
</div>

## 작동 방식: 마크다운 → Actions YAML

워크플로우 생성은 두 단계로 이루어진다.

1. `.github/workflows/` 디렉토리에 자연어로 작성한 **마크다운 파일**을 추가한다.
2. `gh aw compile` 명령으로 마크다운을 **`.lock.yml`** 형식의 Actions 워크플로우로 컴파일한다.

컴파일된 `.lock.yml`은 일반 GitHub Actions 워크플로우처럼 스케줄 또는 이벤트 트리거로 실행된다. 새로 배울 런타임이 없다. Copilot, Claude(Anthropic), Gemini(Google), OpenAI Codex 중 원하는 AI 엔진을 선택할 수 있으며, `GITHUB_TOKEN`도 이제 지원해 별도의 PAT(Personal Access Token) 생성이 불필요해졌다.

## 사전 제작 워크플로우 예시

| 워크플로우 | 설명 | 트리거 |
|-----------|------|--------|
| 이슈 트리아지 | 새 이슈 분류·라벨 자동 지정 | 이슈 오픈 |
| CI 닥터 | CI 실패 원인 분석 후 수정 제안 PR 생성 | CI 실패 |
| 데일리 리포 | 일일 리포지토리 상태 리포트 이슈 생성 | 스케줄 |
| 문서 동기화 | 코드 변경에 맞춰 문서 자동 업데이트 | PR 머지 |
| 컴플라이언스 검사 | 정책 위반 코드 탐지 및 보고 | 푸시 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>5분 빠른 시작</strong><br><code>gh extension install github/gh-aw</code>로 CLI 익스텐션을 설치한 뒤, <code>gh aw add-wizard githubnext/agentics/daily-repo-status</code>를 실행하면 대화형 설정 마법사가 AI 엔진 선택·시크릿 설정·워크플로우 추가를 안내한다. 처음 실행까지 약 10분이면 충분하다.
</div>
</div>

## 보안 설계가 4개월을 필요로 한 이유

기술 프리뷰가 4주가 아닌 4개월이 걸린 이유는 보안 때문이다. 기술 프리뷰 참여 팀들은 "LLM에 프로덕션 리포에 대한 제한 없는 쓰기 권한을 절대 줄 수 없다"는 피드백을 일관되게 전달했다. GitHub은 **록파일(lockfile)** 과 **안전 출력(safe outputs)** 패턴을 도입해 이 문제를 해결했다. 에이전트는 자체 격리된 컨테이너 환경에서 실행되며, 사용자 권한·시크릿·러너 환경·리뷰 게이트·감사 로그 전반에 걸친 제어 체계가 갖춰져 있다.

<div class="article-keypoints">
<ul>
<li>자연어 마크다운 → <code>gh aw compile</code> → Actions YAML 자동 생성</li>
<li>이슈 트리아지·CI 진단·문서 업데이트 등 판단 필요 작업을 에이전트가 자율 처리</li>
<li>Copilot·Claude·Gemini·Codex 중 AI 엔진 선택 가능</li>
<li>GITHUB_TOKEN 지원으로 PAT 불필요, 보안 리스크 감소</li>
<li>모든 Copilot 구독 플랜(Free~Enterprise) 사용 가능</li>
</ul>
</div>

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>
— <a href="https://github.com/github/gh-aw" target="_blank" rel="noopener noreferrer">GitHub Agentic Workflows CLI (gh-aw) 공식 저장소</a><br>
— <a href="https://github.com/githubnext/agentics" target="_blank" rel="noopener noreferrer">사전 제작 워크플로우 예시 모음 (agentics repo)</a><br>
— <a href="https://github.com/github/gh-aw/releases" target="_blank" rel="noopener noreferrer">gh-aw 릴리즈 히스토리 및 최신 버전 다운로드</a>
</div>
</div>
