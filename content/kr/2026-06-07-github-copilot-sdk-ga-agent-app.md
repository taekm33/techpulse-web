---
title: "깃허브 코파일럿 SDK 정식 출시, 에이전트 네이티브 데스크톱 앱도 공개"
summary: "깃허브가 마이크로소프트 빌드 2026에서 코파일럿 SDK 정식 버전과 에이전트 중심 데스크톱 앱을 발표했다. Node.js부터 Rust·Java까지 6개 언어를 지원하며, 같은 에이전트 런타임 위에서 내부 도구부터 고객용 AI 기능까지 구축할 수 있다."
category: "dev-trend"
date: "2026-06-07"
readingTime: 5
tags: ["GitHub", "Copilot", "SDK", "에이전트AI", "개발자도구"]
---

<div class="article-tldr">
깃허브 코파일럿 SDK가 정식 버전(GA)으로 출시됐다. Node.js/TypeScript, Python, Go, .NET, Rust, Java 등 6개 언어를 지원하며, GA 시점에 Rust와 Java가 새롭게 추가됐다. 마이크로소프트 빌드 2026에서는 에이전트 네이티브 데스크톱 경험인 깃허브 코파일럿 앱도 함께 공개됐다.
</div>

깃허브가 마이크로소프트 빌드 2026을 통해 에이전트 개발 생태계를 대폭 확장했다. 이번 발표의 핵심은 코파일럿 앱이 기반하는 것과 동일한 에이전트 런타임을 개발자들이 자체 서비스에 직접 내장할 수 있게 됐다는 것이다. CI/CD 어시스턴트부터 고객용 AI 기능까지, 단일 런타임 위에서 구축하는 시대가 열렸다.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/dhfTaSGYQ4o" title="Getting started with GitHub Copilot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 코파일럿 SDK GA: 6개 언어로 에이전트 런타임 개방

<div class="article-stats">

| 지원 언어 | 설치 명령 | GA 신규 여부 |
|-----------|-----------|-------------|
| Node.js / TypeScript | `npm install @github/copilot-sdk` | 기존 |
| Python | `pip install github-copilot-sdk` | 기존 |
| Go | `go get github.com/github/copilot-sdk/go` | 기존 |
| .NET | `dotnet add package GitHub.Copilot.SDK` | 기존 |
| Rust | `cargo add github-copilot-sdk` | **GA 신규** |
| Java | Maven / Gradle | **GA 신규** |

</div>

프리뷰 이후 주요 개선 사항으로는 멀티 클라이언트 워크플로우 지원(서로 다른 클라이언트가 동일 세션에 도구와 권한을 기여 가능), 슬래시 명령어와 대화형 입력 프롬프트 전 SDK 지원, 느리거나 실패하는 연결 디버깅을 위한 진단 개선 등이 포함됐다. API 표면은 프리뷰 피드백을 바탕으로 안정화돼 프로덕션 준비 상태를 인증받았다.

<div class="article-callout tip">
**접근성**: 깃허브 코파일럿 SDK는 기존 코파일럿 구독자(코파일럿 Free 포함)와, 코파일럿 미구독자가 자체 API 키를 사용하는 BYOK(Bring Your Own Key) 방식 모두에게 제공된다.
</div>

## 에이전트 네이티브 데스크톱 앱: 하나의 뷰에서 전체 작업 흐름 관리

새로운 깃허브 코파일럿 앱은 'My Work' 단일 뷰에서 연결된 리포지토리 전반의 작업 상태를 한눈에 파악할 수 있다. 활성 세션, 이슈, 풀 리퀘스트, 백그라운드 자동화가 모두 이 화면에 집약된다. 현재 코파일럿 Pro, Pro+, Business, Enterprise 사용자를 대상으로 테크니컬 프리뷰로 제공 중이다.

**캔버스(Canvases)**: 인간과 에이전트를 위한 양방향 작업 표면. 계획, 풀 리퀘스트, 브라우저 세션, 터미널, 배포 현황, 워크플로우 상태 등을 표시할 수 있으며, 에이전트가 작업하면서 실시간으로 업데이트한다. 개발자는 같은 표면에서 에이전트 작업을 편집·재정렬·승인·방향 전환할 수 있다.

**샌드박스**: 에이전트가 작동할 경계를 설정한다. 로컬 머신이나 클라우드 중 실행 위치를 선택하고, 보안 정책과 엔터프라이즈 규정 준수를 유지하면서 에이전트 주도 워크플로우를 열어준다.

<div class="article-callout info">
**코드 리뷰 업그레이드**: 코파일럿 코드 리뷰가 '미디엄 티어' 리뷰를 추가했다. 풀 리퀘스트를 더 높은 추론 모델로 라우팅해 정밀도와 재현율을 높이며, 관리자는 리포지토리별로 '낮음' 또는 '중간' 등급을 설정해 위험도에 따라 모델 사용을 최적화할 수 있다.
</div>

## 코파일럿 CLI의 대규모 업데이트

터미널에서 작업하는 개발자를 위한 코파일럿 CLI도 이번 릴리즈에서 대폭 업그레이드됐다.

<div class="article-keypoints">

**코파일럿 CLI 2026 주요 신기능**
- 실험적(`/experimental`) 모드의 재설계된 TUI: 풀 리퀘스트·이슈·Gist에 탭으로 접근 가능
- 음성 모드: 온디바이스 음성-텍스트 변환을 사용해 오디오가 기기 밖으로 전송되지 않음
- `/every` 명령: 반복 프롬프트와 백그라운드 작업을 스케줄링
- 클라우드 자동화: 에이전트가 일정에 따라 실행되거나 깃허브 이벤트에 반응해 이슈를 열고 댓글을 남김
- Memory++와 `/chronicle`: 앱·CLI·VS Code·깃허브닷컴에서 시작된 세션의 컨텍스트를 기기 간·시간에 걸쳐 유지

</div>

## 파트너 에이전트 앱 생태계

LaunchDarkly, Bright, Amplitude, Sonar, Endor Labs, Octopus Deploy, Packfiles, PagerDuty, Miro 등의 파트너가 코파일럿과 통합되는 에이전트 앱을 제공한다. 이슈를 워크플로우에 맞는 새로운 에이전트에 할당하고, 깃허브를 벗어나지 않고 즐겨 사용하는 도구를 연결할 수 있다.

깃허브에 따르면 월간 커밋 수가 14억 건을 넘어 전년 대비 거의 두 배 증가했으며, 주당 깃허브 액션 실행 시간도 20억 분을 돌파했다. 에이전트 네이티브 개발 환경으로의 전환이 단순한 트렌드가 아닌 현실로 자리 잡고 있음을 보여주는 수치다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://github.com/features/copilot" target="_blank" rel="noopener">GitHub Copilot 공식 소개</a><br/>
· <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener">GitHub Copilot 공식 문서</a><br/>
· <a href="https://github.blog/" target="_blank" rel="noopener">GitHub 공식 블로그</a>
</div>
