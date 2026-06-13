---
title: "Angular v22 출시 — Signal Forms·비동기 API 정식 안정화, Zoneless가 기본값 된다"
summary: "Angular v22가 공개됐다. Signal Forms, Angular Aria, Asynchronous Reactivity API가 모두 프로덕션 안정 버전으로 격상됐으며, OnPush가 기본 변경 감지 전략으로 지정됐다. 현대 Angular 개발의 새로운 기준선이 확립됐다."
category: "dev-trend"
date: "2026-06-13"
readingTime: 5
tags: ["Angular", "Angular22", "SignalForms", "TypeScript", "프론트엔드", "웹개발"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: Angular v22(2026년 6월 3일 출시)는 Signal Forms, Angular Aria, resource·httpResource API를 모두 프로덕션 안정 상태로 격상시켰다. OnPush가 새로운 기본 변경 감지 전략이 되고, 새로운 @Service 데코레이터·injectAsync·템플릿 스프레드 문법 등 개발자 경험을 크게 향상시킨 다수의 API가 추가됐다. TypeScript 6를 지원한다.
</div>

## Signal 시대의 성숙: "프로덕션 준비 완료"

Angular 팀은 v22를 한마디로 요약한다: **"Production Ready is the Name of the Game."** 지난 두 메이저 버전 동안 실험적(experimental) 또는 개발자 프리뷰(developer preview) 상태로 유지됐던 세 가지 핵심 API가 이번 릴리스에서 모두 안정(stable)으로 격상됐다.

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/0nFiHt4sr8o" title="Building scalable AI powered web apps with Angular" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 안정화된 3대 핵심 API

### 1. Signal Forms — 반응형 폼의 완전한 재설계

Signal Forms는 Reactive Forms의 강력함과 Template-driven Forms의 직관성, 그리고 Angular Signals의 반응성을 하나로 합쳤다. v22에서 프로덕션 안정 버전이 됐으며, Angular Material 및 Angular Aria와의 완전한 통합도 이뤄졌다.

```typescript
import { form } from "@angular/forms/signals";

class Payment {
  readonly paymentModel = signal({ paymentType: '', amount: 0 });
  readonly f = form(paymentModel, schema => {
    required(schema.paymentType, { message: 'Required field' });
  });
}
```

핵심 장점: 필드 하나가 변경될 때 불필요한 전체 리렌더링이 없고, TypeScript 타입 시스템과 완벽하게 통합된다.

### 2. Angular Aria — 모든 사용자를 위한 접근성 패턴

v21에서 도입된 Angular Aria가 v22에서 정식 안정 버전이 됐다. 12가지 UI 접근성 패턴이 Signal Forms와 완전히 통합되며 테스트 하네스도 제공된다. 개발자는 스타일과 비즈니스 로직에 집중하면 되고, 접근성 처리는 프레임워크가 담당한다.

### 3. Asynchronous Reactivity — resource·httpResource 안정화

HTTP 요청을 신호(Signal) 기반으로 선언적으로 처리할 수 있는 `resource`·`rxResource`·`httpResource` API가 모두 안정화됐다.

```typescript
export class WeatherComponent {
  selectedCity = signal('Seoul');
  weather = httpResource<{ temperature: number }>(() =>
    `https://api.example.com/v1/forecast/${this.selectedCity()}`
  );
}
```

`selectedCity` 신호가 바뀌면 HTTP 요청이 자동으로 재실행된다. 로딩·에러·데이터 상태를 명시적으로 관리할 필요가 없다.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">3개</span><span class="stat-label">이번 릴리스에서 안정화된 핵심 API</span></div>
<div class="stat-item"><span class="stat-number">100K+</span><span class="stat-label">GitHub 스타 (angular/angular)</span></div>
<div class="stat-item"><span class="stat-number">TypeScript 6</span><span class="stat-label">공식 지원</span></div>
<div class="stat-item"><span class="stat-number">OnPush</span><span class="stat-label">신규 기본 변경 감지 전략</span></div>
</div>

## 변경 감지 전략의 새 기본값: OnPush

v22부터 새 애플리케이션에서 **OnPush가 기본 변경 감지 전략**으로 지정된다. 이는 Zoneless Angular의 방향과 일치하며, 개발자가 별도로 명시하지 않아도 성능 최적화가 적용된다. 기존의 `ChangeDetectionStrategy.Default`는 `ChangeDetectionStrategy.Eager`로 이름이 바뀐다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>마이그레이션 안내</strong><br>v21에서 v22로 업그레이드 시 Angular CLI의 자동 마이그레이션 스크립트가 기존 <code>ChangeDetectionStrategy.Default</code> 값을 <code>Eager</code>로 자동 변환한다. <code>ng update @angular/core@22</code>를 실행하면 된다.</div>
</div>

## 개발자 경험(DX) 향상 주요 기능

| 기능 | 설명 |
|------|------|
| `@Service` 데코레이터 | `@Injectable({ providedIn: 'root' })` 대체 — 간결한 싱글턴 서비스 정의 |
| `injectAsync` | 서비스 비동기 지연 로딩 — 코드 스플리팅 지원 |
| 템플릿 스프레드 문법 | `[class]="{...styles}"`, `[...array]` 등 배열·객체 스프레드 지원 |
| 화살표 함수 | 템플릿 내 인라인 화살표 함수 허용 |
| @switch 다중 케이스 | 여러 케이스가 동일 출력 공유 가능, 소진 검사(exhaustive check) 추가 |
| HTML 요소 주석 | `<div // comment attr="val">` 형태의 속성 레벨 주석 지원 |
| Platform Navigation API | Router가 브라우저 네이티브 Navigation API와 통합 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>@boundary: 에러 경계 (개발자 프리뷰, Q3 2026 예정)</strong><br>Angular v22는 템플릿 수준의 에러 경계 문법인 <code>@boundary { ... } @error (let err) { ... }</code>를 미리보기로 공개했다. 결제 흐름 같은 고위험 컴포넌트가 오류 시 페이지 전체를 중단시키지 않고 폴백 UI를 표시할 수 있게 된다.</div>
</div>

<div class="article-keypoints">
<h3>핵심 요점</h3>
<ul>
<li>Signal Forms·Angular Aria·resource/httpResource API 모두 프로덕션 안정 버전으로 격상</li>
<li>OnPush가 새 애플리케이션의 기본 변경 감지 전략 — Zoneless 방향 가속화</li>
<li>@Service 데코레이터·injectAsync·템플릿 스프레드·화살표 함수 등 DX 크게 개선</li>
<li>TypeScript 6 공식 지원, Angular MCP 도구 안정화</li>
<li>@boundary 에러 경계 문법 Q3 2026 개발자 프리뷰 예정</li>
<li>Webpack 지원 및 @angular-devkit/build-angular v22에서 deprecated</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 다운로드</strong><br>— <a href="https://github.com/angular/angular/releases/tag/v22.0.0" target="_blank" rel="noopener noreferrer">Angular v22.0.0 공식 GitHub 릴리스 노트</a><br>— <a href="https://github.com/angular/angular/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Angular CHANGELOG (전체 변경 사항)</a><br>— <a href="https://github.com/angular/angular-cli/releases" target="_blank" rel="noopener noreferrer">Angular CLI 최신 릴리스 다운로드</a></div></div>
