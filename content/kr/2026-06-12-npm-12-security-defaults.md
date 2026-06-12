---
title: "npm 12, 설치 스크립트 기본 차단으로 보안 강화 — 7월 배포 예정"
summary: "GitHub이 발표한 npm v12는 npm install 시 의존성의 설치 스크립트 자동 실행을 기본 차단한다. Shai-Hulud 공급망 워먹 공격을 계기로 마련된 이번 변경은 수년간 개발자들이 요구해온 보안 개선이다."
category: "dev-trend"
date: "2026-06-12"
readingTime: 5
tags: ["npm", "보안", "공급망공격", "JavaScript", "개발자도구"]
---

<div class="article-tldr">
<strong>한 줄 요약:</strong> GitHub이 2026년 6월 9일 발표한 <strong>npm v12</strong>는 7월 출시 예정으로, `npm install` 시 의존성의 `preinstall`·`install`·`postinstall` 스크립트를 기본적으로 차단한다. Git 의존성 자동 해석과 원격 URL 의존성도 기본 비활성화된다. pnpm·Bun·Deno는 이미 이 보안 기본값을 적용하고 있어 npm이 마지막으로 변경하는 주요 패키지 관리자가 됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/gwTQLZSIlsU" title="A single PR just hijacked the NPM registry..." loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 변경 배경: Shai-Hulud 공급망 워먹

이번 npm 12 변경의 직접적 배경은 2026년 5월 11일 발생한 **Shai-Hulud(미니) 공급망 공격**이다. TeamPCP로 불리는 위협 그룹은 GitHub Actions 워크플로 취약점을 연쇄 악용해 TanStack 등 42개 패키지 84개 버전에 악성 코드를 심었다. 주간 다운로드 1,200만 건 이상의 TanStack React Router가 피해를 입었으며, 워먹은 수 시간 만에 170여 개 패키지로 자기 전파했다.

핵심 공격 벡터는 단 하나였다: **npm install 시 자동으로 실행되는 postinstall 스크립트**. 이 스크립트가 실행 권한 없이도 피해자 머신에서 자동으로 자격증명을 탈취할 수 있었다.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">42개</span><span class="stat-label">직접 피해 패키지 수</span></div>
<div class="stat-item"><span class="stat-number">170+</span><span class="stat-label">자기 전파 후 피해 패키지</span></div>
<div class="stat-item"><span class="stat-number">1,200만+</span><span class="stat-label">TanStack React Router 주간 다운로드</span></div>
<div class="stat-item"><span class="stat-number">2026.07</span><span class="stat-label">npm 12 출시 예정</span></div>
</div>

## npm 12의 3가지 핵심 변경

### 1. `allowScripts` 기본값 OFF

`npm install`이 더 이상 의존성의 `preinstall`, `install`, `postinstall` 스크립트를 자동 실행하지 않는다. 네이티브 모듈 빌드(`node-gyp` 포함)도 대상이다. 허용이 필요한 패키지는 두 가지 방법으로 관리한다:

```bash
# 허용 목록 확인
npm approve-scripts --allow-scripts-pending

# 신뢰하는 패키지 허용
npm approve-scripts

# 차단할 패키지 명시
npm deny-scripts
```

결과는 `package.json`의 `allowScripts` 필드에 기록되며, 버전 핀 형태(`[email protected]: true`)로 저장된다. **이 파일을 커밋해 팀 전체에 공유해야 한다.**

### 2. `--allow-git` 기본값 NONE

Git URL 의존성(`git+https://...`, `github:org/repo`)이 자동으로 해석되지 않는다. Git 의존성의 `.npmrc`가 Git 실행 파일을 덮어써 `--ignore-scripts`를 우회하는 코드 실행 경로를 차단한다. 명시적 허용이 필요하다:

```bash
npm install --allow-git=github:org/repo
```

### 3. `--allow-remote` 기본값 NONE

HTTPS tarball 등 원격 URL 의존성이 자동 설치되지 않는다. 직접 의존성과 트랜지티브 의존성 모두 해당된다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>지금 바로 준비하는 방법</strong><br>npm 11.16.0 이상으로 업그레이드하면 npm 12에서 깨질 동작에 대한 경고를 미리 확인할 수 있다. <code>npm approve-scripts --allow-scripts-pending</code>으로 스크립트를 사용하는 패키지 목록을 확인하고, 신뢰하는 것만 허용 목록에 추가한 뒤 <code>package.json</code>을 커밋하면 업그레이드 준비 완료다.</div>
</div>

## 패키지 관리자별 설치 스크립트 정책 비교

| 패키지 관리자 | 기본 동작 | 허용 목록 지원 |
|-------------|---------|-------------|
| npm 11.x (현재) | 자동 실행 (경고만) | advisory only |
| **npm 12 (7월 예정)** | **기본 차단, 허용 목록 필요** | **allowScripts (package.json)** |
| pnpm v10+ | 기본 차단 | trustedDependencies |
| Yarn Berry | 기본 차단 | – |
| Bun | 기본 차단 + 화이트리스트 | trustedDependencies |
| Deno | 기본 차단 | deno approve-scripts |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Breaking Change 주의</strong><br>esbuild, node-gyp 기반의 네이티브 모듈(sharp, canvas, bcrypt 등)을 사용하는 프로젝트는 빌드가 즉시 깨질 수 있다. CI/CD 파이프라인에서 npm 12로 업그레이드하기 전에 반드시 <code>npm approve-scripts --allow-scripts-pending</code>으로 영향받는 패키지를 파악하고 허용 목록을 <code>package.json</code>에 커밋해야 한다.</div>
</div>

## 보안 커뮤니티 반응

개발자 커뮤니티는 대체로 긍정적이다. "npm이 pnpm·Bun·Deno처럼 안전한 기본값을 갖게 된 것은 수년간 요구해온 일"이라는 반응이 주를 이룬다. 다만 일부 개발자들은 "이제 공격자들이 설치 스크립트 대신 모듈 코드 자체에서 악성 행위를 할 것"이라며 완벽한 해결책이 아니라는 점도 지적했다. 이번 변경은 가장 흔한 자동 실행 공격 벡터를 제거하는 것이지, npm 레지스트리 전체를 안전하게 만드는 것은 아니다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>npm v12 (7월 출시 예정): 의존성 설치 스크립트 기본 차단 — 명시적 허용 목록 필요</li>
<li>Git 의존성·원격 URL 의존성도 기본 차단 — 공급망 공격 경로 대폭 축소</li>
<li>npm 11.16.0으로 업그레이드하면 npm 12 예비 경고 확인 가능 (지금 시작 권장)</li>
<li>npm이 주요 패키지 관리자 중 마지막으로 설치 스크립트 기본 차단 도입</li>
<li>esbuild·node-gyp 등 네이티브 모듈 사용 프로젝트는 마이그레이션 필수</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/" target="_blank" rel="noopener noreferrer">GitHub 공식 Changelog — npm v12 주요 변경 사항</a><br>— <a href="https://www.bleepingcomputer.com/news/security/github-announces-npm-security-changes-to-tackle-supply-chain-attacks/" target="_blank" rel="noopener noreferrer">BleepingComputer — npm 12 보안 변경 심층 분석</a><br>— <a href="https://github.com/npm/rfcs/pull/868" target="_blank" rel="noopener noreferrer">npm RFC PR #868 — 설치 스크립트 옵트인 방식 전환 원안</a></div></div>
