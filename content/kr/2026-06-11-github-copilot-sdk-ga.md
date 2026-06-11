---
title: "GitHub Copilot SDK 정식 출시: 에이전트 런타임을 내 앱에 직접 심는다"
summary: "GitHub Copilot SDK가 정식 출시(GA)됐습니다. Node.js·Python·Go·.NET·Rust·Java 6개 언어를 지원하며, 에이전트 네이티브 데스크톱 앱 'GitHub Copilot App'도 기술 프리뷰로 공개됐습니다."
category: "dev-trend"
date: "2026-06-11"
readingTime: 5
tags: ["github", "copilot", "sdk", "에이전트", "개발도구"]
---

<div class="article-tldr">
<strong>3줄 요약:</strong> Microsoft Build 2026에서 <strong>GitHub Copilot SDK</strong>가 정식 버전(GA)으로 출시됐습니다. Copilot의 에이전트 런타임을 6개 언어로 자체 앱에 직접 내장할 수 있으며, 새로운 데스크톱 앱 <strong>GitHub Copilot App</strong>도 기술 프리뷰로 공개됐습니다. 클라우드·로컬 샌드박스 기능도 함께 추가됐습니다.
</div>

<div class="article-stats">
<div class="stat-item"><span class="stat-number">6</span><span class="stat-label">지원 언어/런타임</span></div>
<div class="stat-item"><span class="stat-number">GA</span><span class="stat-label">정식 출시 (2026-06-02)</span></div>
<div class="stat-item"><span class="stat-number">180M+</span><span class="stat-label">GitHub 전체 개발자 수</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/R5ouLL_UA3o" title="Not sure where to start with the GitHub Copilot SDK?" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Copilot 에이전트 런타임이 이제 내 앱 속으로

2026년 6월 2일 Microsoft Build에서 GitHub은 **Copilot SDK 정식 버전(GA)**을 발표했습니다. 공개 프리뷰 이후 CI/CD 어시스턴트, 내부 개발 도구, 고객 대면 AI 기능 등 수많은 프로젝트에 활용되어 온 SDK가 이제 프로덕션 수준의 안정적인 API로 자리 잡았습니다.

Copilot SDK의 핵심은 GitHub Copilot 제품 전체를 구동하는 **에이전트 루프(agent loop)**를 그대로 제공한다는 점입니다. 계획 수립(planning), 도구 호출(tool invocation), 파일 편집(file edits), 스트리밍(streaming), 멀티턴 세션(multi-turn sessions) — 이 모든 기능을 직접 오케스트레이션 레이어를 만들 필요 없이 사용할 수 있습니다.

## 6개 언어로 즉시 설치

```bash
# Node.js / TypeScript
npm install @github/copilot-sdk

# Python
pip install github-copilot-sdk

# Go
go get github.com/github/copilot-sdk/go

# .NET
dotnet add package GitHub.Copilot.SDK

# Rust (GA 신규 추가)
cargo add github-copilot-sdk

# Java (GA 신규 추가, Maven/Gradle 지원)
```

GA에서 새로 추가된 Rust와 Java SDK는 기존 언어와 동일한 에이전트 런타임에 연결됩니다. Rust SDK는 Copilot CLI 바이너리를 기본으로 번들링합니다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>BYOK(Bring Your Own Key) 지원</strong><br>GA부터 Copilot 구독 없이도 BYOK 방식으로 SDK를 사용할 수 있습니다. 기업 내부 도구를 만들거나 Copilot 구독을 아직 가지지 않은 외부 사용자를 위한 서비스를 구축할 때 유용합니다.</div>
</div>

## GitHub Copilot App: 에이전트 네이티브 데스크톱 경험

SDK 발표와 함께 새로운 **GitHub Copilot App**도 기술 프리뷰로 공개됐습니다. 이 앱은 단순한 에디터 확장이 아닌, 에이전트 작업을 위한 전용 데스크톱 환경입니다.

**My Work 뷰**: 연결된 저장소 전체의 작업 현황 — 활성 세션, 이슈, 풀 리퀘스트, 백그라운드 자동화 — 을 한 화면에서 확인합니다.

**캔버스(Canvas)**: 인간과 에이전트가 함께 사용하는 양방향 작업 공간. 에이전트가 계획·PR·브라우저 세션·터미널 등을 캔버스에 업데이트하면 개발자가 실시간으로 편집·승인·방향 전환을 지시할 수 있습니다.

**격리된 작업공간**: 모든 에이전트 세션은 독립된 Git 워크트리에서 실행되어 병렬 에이전트가 서로 간섭하지 않습니다.

**Agent Merge**: 에이전트가 코드 리뷰·CI 체크·머지까지 자동으로 진행합니다.

## 클라우드 & 로컬 샌드박스

GA와 함께 **클라우드 샌드박스**와 **로컬 샌드박스**도 공개 프리뷰로 제공됩니다.

- **로컬 샌드박스**: `/sandbox enable` 명령어로 현재 세션의 Copilot 도구 실행을 격리된 환경에서만 허용. Microsoft MXC 기술 기반으로 macOS·Linux·Windows에서 일관된 격리 경험 제공.
- **클라우드 샌드박스**: `copilot --cloud`로 GitHub 호스팅 일회용 Linux 환경 시작. 로컬 리소스를 소비하지 않고 병렬 태스크를 오프로드 가능.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>파트너 에이전트 앱 생태계</strong><br>GitHub Copilot App에는 LaunchDarkly, Amplitude, Sonar, PagerDuty, Miro 등 파트너사의 에이전트 앱도 통합됩니다. 이슈를 외부 에이전트에게 바로 할당하고, GitHub를 벗어나지 않고 전체 워크플로를 관리할 수 있습니다.</div>
</div>

## GA에서 달라진 점 요약

| 항목 | 프리뷰 | GA |
|---|---|---|
| 지원 언어 | Node.js, Python, Go, .NET | + Rust, Java (신규) |
| 멀티 클라이언트 | 미지원 | 지원 (다중 클라이언트가 동일 세션 기여 가능) |
| 슬래시 명령어 | 일부 SDK | 전체 SDK 지원 |
| 진단 도구 | 기본 | 개선된 연결 오류 디버깅 |
| API 안정성 | 변경 가능 | 프로덕션 준비 완료 |

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>GitHub Copilot SDK 정식 출시 — 에이전트 런타임을 6개 언어로 자체 앱에 내장 가능</li>
<li>Rust·Java SDK GA 신규 추가, 멀티 클라이언트 및 슬래시 명령어 전 SDK 지원</li>
<li>에이전트 네이티브 데스크톱 앱 GitHub Copilot App 기술 프리뷰 (Windows/macOS/Linux)</li>
<li>로컬·클라우드 샌드박스로 에이전트 도구 실행 환경 격리 가능</li>
<li>Copilot 구독자는 물론 BYOK 방식으로도 SDK 이용 가능</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/" target="_blank" rel="noopener noreferrer">GitHub Changelog: Copilot SDK 정식 출시 공지</a><br>— <a href="https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/" target="_blank" rel="noopener noreferrer">GitHub 블로그: GitHub Copilot App 에이전트 네이티브 데스크톱 소개</a><br>— <a href="https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/" target="_blank" rel="noopener noreferrer">GitHub Changelog: 클라우드 & 로컬 샌드박스 공개 프리뷰</a><br>— <a href="https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/" target="_blank" rel="noopener noreferrer">GitHub Copilot App 기술 프리뷰 다운로드 (Windows/macOS/Linux)</a></div></div>
