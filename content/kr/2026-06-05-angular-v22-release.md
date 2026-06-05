---
title: "Angular v22 정식 출시: Signal Forms·WebMCP·AI 에이전트 스킬 지원"
summary: "구글이 Angular v22를 공식 출시했다. Signal Forms와 Angular Aria가 프로덕션 안정 버전으로 전환됐으며, WebMCP 실험적 지원과 AI 에이전트 스킬이 새롭게 추가돼 AI 네이티브 개발 플랫폼으로의 전환을 선언했다."
category: "dev-trend"
date: "2026-06-05"
readingTime: 5
tags: ["Angular", "Angular22", "WebMCP", "SignalForms", "프론트엔드"]
---

<div class="article-tldr">
Angular v22가 정식 출시됐다. 이번 릴리스의 핵심은 Signal Forms·Angular Aria·비동기 반응성 API의 프로덕션 안정화, 그리고 AI 에이전트 스킬과 WebMCP 실험적 지원이다. 구글은 이번 버전을 통해 Angular를 단순한 프론트엔드 프레임워크에서 AI 네이티브 개발 플랫폼으로 포지셔닝한다.
</div>

## 3가지 주요 API 안정화

Angular v22에서 가장 중요한 변화는 오랫동안 개발자 프리뷰 상태였던 핵심 기능들의 프로덕션 안정화다.

### Signal Forms
Angular의 반응성 원시 타입(Signals)을 기반으로 구축된 Signal Forms는 기존 ReactiveFormsModule의 복잡성 없이 선언적이고 타입 안전한 폼 관리를 제공한다. v21에서 개발자 프리뷰로 도입된 이후 커뮤니티 피드백을 수렴해 v22에서 안정 버전으로 전환됐다.

### Angular Aria
접근성 패턴 라이브러리 Angular Aria도 안정 버전이 됐다. 개발자가 비즈니스 로직과 스타일에만 집중하면 접근성 규격 준수는 Angular Aria가 처리하는 구조다. 모든 사용자, 모든 입력 방식에 대응하는 앱 개발이 이제 공식 지원된다.

### resource / httpResource API
비동기 반응성 API인 `resource`와 `httpResource`가 프로덕션 준비 완료 상태가 됐다. 서버 데이터를 Signals와 통합하는 방식의 표준으로 자리잡을 전망이다.

<div class="article-stats">

| 기능 | v21 상태 | v22 상태 |
|------|----------|----------|
| Signal Forms | 개발자 프리뷰 | ✅ 안정 |
| Angular Aria | 개발자 프리뷰 | ✅ 안정 |
| resource / httpResource | 개발자 프리뷰 | ✅ 안정 |
| WebMCP | 미지원 | 실험적 지원 |
| AI 에이전트 스킬 | 미지원 | 신규 도입 |

</div>

## AI 네이티브 개발 플랫폼으로의 전환

Angular 팀은 v22를 단순한 기능 업데이트가 아닌 AI 시대의 개발 플랫폼으로의 진화로 정의한다. 세 가지 축으로 이를 구현했다.

### Angular MCP 도구 안정화
Angular MCP(Model Context Protocol) 서버가 이번 릴리스에서 안정 버전으로 전환됐다. `devserver.start`와 `devserver.stop` 도구를 통해 AI 코딩 에이전트가 개발 서버를 직접 제어할 수 있게 됐으며, 테스트·E2E 도구도 안정화됐다.

### Angular 에이전트 스킬
AI 코딩 도구의 학습 데이터가 Angular의 최신 패턴을 충분히 반영하지 못하는 문제를 해결하기 위해 **Angular Agent Skills**를 도입했다.

- **angular-developer**: 최신 Angular 모범 사례 및 Signal Forms·Angular Aria 심층 가이드. 140줄 미만의 파일이 필요할 때만 심층 참조를 동적으로 로드하는 점진적 공개 방식 채택
- **angular-new-app**: Angular를 처음 에이전트 환경에서 시작하는 개발자를 위한 환경 설정 가이드

<div class="article-callout tip">
Angular 에이전트 스킬은 Google Antigravity를 포함한 모든 에이전트 환경에서 즉시 사용 가능하다. AI가 최신 Angular 패턴으로 코드를 작성하도록 컨텍스트를 보강해 신규 프로젝트 품질을 크게 높일 수 있다.
</div>

## 실험적 WebMCP 지원

Angular v22의 가장 전향적인 기능은 **WebMCP** 실험적 지원이다. WebMCP는 웹 페이지가 AI 에이전트를 위한 구조화된 도구를 노출할 수 있는 새로운 웹 표준 제안이다. AI 어시스턴트가 DOM 조작 없이 앱과 직접 상호작용할 수 있게 된다.

Angular v22의 WebMCP 지원 범위:
- 앱 전체, 라우트, 서비스 단위 도구 정의
- Signal Forms에서 자동으로 도구 생성

Chrome 149도 같은 날 WebMCP 실험적 디버깅 도구를 DevTools에 추가했다는 점에서 웹 표준으로의 채택 가능성이 높아지고 있다.

<div class="article-callout info">
Chrome 149 DevTools에 WebMCP 디버깅 패널이 추가됐다. `#devtools-webmcp-support` 및 `#enable-webmcp-testing` 플래그를 활성화하면 WebMCP 도구 스키마 검사와 수동 실행이 가능하다.
</div>

## API 개선 사항

### @Service 데코레이터
`@Injectable({ providedIn: 'root' })` 패턴을 대체하는 직관적인 `@Service` 데코레이터가 도입됐다. 복잡한 설정이나 생성자 주입이 필요한 경우에는 여전히 `@Injectable`을 사용하면 된다.

### 비동기 의존성 주입
`injectAsync` API로 대형 서비스의 온디맨드 코드 분할이 가능해졌다. 기존에는 컴포넌트·라우트만 지연 로드할 수 있었지만, 이제 서비스도 비동기로 로드해 초기 번들 크기를 줄일 수 있다.

<div class="article-keypoints">

**핵심 포인트**
- Signal Forms, Angular Aria, resource/httpResource API가 v22에서 프로덕션 안정 버전으로 전환
- Angular MCP 도구 안정화로 AI 에이전트가 개발 서버를 직접 제어 가능
- Angular Agent Skills 도입으로 AI 코딩 도구의 최신 패턴 이해도 향상
- 실험적 WebMCP 지원으로 웹 앱이 AI 에이전트를 위한 구조화된 API를 노출 가능
- @Service 데코레이터 및 injectAsync API로 코드 가독성과 성능 동시 개선

</div>

Angular v22는 프레임워크의 안정성을 높이는 동시에, AI 에이전트 시대의 개발 방식을 선도하는 두 가지 목표를 성공적으로 달성했다. WebMCP와 에이전트 스킬이 표준으로 자리잡으면, Angular는 AI가 직접 다루는 첫 번째 주류 프론트엔드 프레임워크로 기록될 수 있다.
