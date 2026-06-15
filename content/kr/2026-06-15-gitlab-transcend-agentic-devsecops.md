---
title: "GitLab Transcend 2026: 에이전트 규모 DevSecOps를 위한 4가지 핵심 혁신 공개"
summary: "GitLab이 Transcend 2026 컨퍼런스에서 에이전트 규모 소프트웨어 개발을 위한 네 가지 핵심 신기능을 발표했다. 차세대 SCM으로 에이전트 작업 속도 50배, GitLab Orbit 컨텍스트 그래프로 환각 45배 감소 등 수치로 검증된 성과를 제시했다."
category: "dev-trend"
date: "2026-06-15"
readingTime: 5
tags: ["GitLab", "DevSecOps", "에이전트AI", "GitLabOrbit", "개발자도구"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — GitLab이 Transcend 2026(런던, 6월 10일)에서 에이전트 규모 DevSecOps를 위한 <strong>4가지 혁신</strong>을 공개했다. ① 차세대 SCM(작업 속도 50배↑) ② GitLab Orbit 컨텍스트 그래프(환각 45배↓) ③ Governance for Agents(에이전트 행동 감사·제어) ④ GitLab Flex(유연한 에이전트 크레딧 모델). GitLab은 지난 분기 연간 매출 10억 달러를 돌파했다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/ekcw1yn21jQ" title="GitLab Transcend - Keynote" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트 규모에서 드러나는 균열

GitLab CEO Bill Staples는 키노트를 이렇게 시작했다. "엔지니어링 팀이 에이전트 활동을 확장할수록, 인간 속도의 소프트웨어 개발을 위해 만들어진 인프라·거버넌스·상용 모델에서 균열이 드러나고 있다." 오늘 발표된 4가지 신기능은 이 균열을 정면으로 겨냥한다.

Transcend 2026에는 런던 현장과 전 세계 1만 5천 명 이상의 등록 참가자가 함께했다. Mercedes-Benz, Google Cloud, AWS, Stanford SWEPR 연구팀이 파트너로 나섰다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">50×</span>
<span class="article-stats__label">차세대 SCM 에이전트 작업 속도 향상</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">45×</span>
<span class="article-stats__label">GitLab Orbit 환각 감소</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">11×</span>
<span class="article-stats__label">Orbit 도입 에이전트 응답 속도 향상</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">$1B+</span>
<span class="article-stats__label">GitLab 연간 매출 (직전 분기 돌파)</span>
</div>
</div>

## 혁신 1: 차세대 SCM — 프라이빗 베타

기존 Git 서버는 에이전트가 레포지터리 전체를 클론해야 하는 구조다. 에이전트가 대규모 코드베이스에서 작업할 때 불필요한 네트워크 트래픽과 토큰 낭비가 발생한다.

**차세대 Source Code Management(SCM)**은 에이전트가 필요한 파일만 서버 사이드에서 쿼리할 수 있게 한다. 각 에이전트는 태스크에 필요한 최소 가시성으로 제한되며, 그 결과:

- 에이전트 작업 완료 속도 **최대 50배 향상**
- 토큰 소비 **최대 2배 절감**
- 네트워크 트래픽 **최대 1,000배 감소**

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>대기자 명단 등록</strong><br>차세대 SCM은 현재 프라이빗 베타다. GitLab Ultimate 고객은 <a href="https://gitlab.com/explore" target="_blank" rel="noopener noreferrer">gitlab.com/explore</a>에서 대기자 신청이 가능하다.</div>
</div>

## 혁신 2: GitLab Orbit — 퍼블릭 베타

에이전트는 코드·작업 항목·파이프라인·배포·프로덕션 신호를 각각 다른 맥락에서 이해한다. 이 파편화된 정보가 환각(hallucination)의 주요 원인이다.

**GitLab Orbit**은 소프트웨어 수명주기 전반을 하나의 **컨텍스트 그래프**로 통합한다. 에이전트와 엔지니어가 같은 정보원을 쿼리하게 된다. 내부 테스트 결과:

- 에이전트 응답 속도 **최대 11배 향상**
- 토큰 사용량 **최대 4.5배 절감**
- 환각 **최대 45배 감소**

Orbit은 독립 데이터 제품으로도 제공되며, 오픈 API를 통해 서드파티 에이전트와 외부 도구에서도 같은 컨텍스트 레이어를 활용할 수 있다.

## 혁신 3: Governance for Agents — 프라이빗 베타

에이전트가 코드를 커밋하고, 취약점을 수정하고, 배포를 트리거한다면 — 감사(Audit) 없이는 규정 준수가 불가능하다.

**Governance for Agents**는 모든 에이전트 행동에 신원(Identity), 정책(Policy), 감사(Audit), 승인(Approval)을 적용한다. 입력값, 추론 과정, 도구 호출, 고위험 또는 이상 활동을 실시간으로 모니터링하고, 기존 GitLab Ultimate 보안 에이전트의 취약점 분류·수정 자동화 기능과도 통합된다.

| 제어 계층 | 기능 |
|-----------|------|
| 신원 | 에이전트별 고유 ID 및 권한 범위 |
| 정책 | 예산·권한 경계 자동 집행 |
| 감사 | 입력·추론·도구 호출 전체 로그 |
| 승인 | 고위험 행동 전 인간 검토 게이트 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>혁신 4: GitLab Flex</strong><br>플랫폼 시트, GitLab 크레딧, 신규 기능을 하나의 연간 약정으로 묶어 매월 필요에 따라 조정하는 상업 모델이다. 계약 수정 없이 유연한 에이전트 비용 관리가 가능하다.</div>
</div>

## Stanford 연구: AI가 엔지니어 생산성을 어떻게 바꾸는가

Transcend 2026에서 Stanford SWEPR(Software Engineering Productivity Research) 그룹이 600개 이상 조직을 대상으로 한 연구 결과를 공개했다. 에이전트 AI 도입이 엔지니어링 생산성에 실질적으로 어떤 영향을 미치는지 정량적으로 분석한 최초의 대규모 연구 중 하나다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>차세대 SCM: 에이전트 속도 50배↑, 토큰 2배 절감, 네트워크 1,000배↓ (프라이빗 베타).</li>
<li>GitLab Orbit: 컨텍스트 그래프로 환각 45배 감소, 응답 속도 11배 향상 (퍼블릭 베타).</li>
<li>Governance for Agents: 에이전트 모든 행동에 신원·정책·감사·승인 적용 (프라이빗 베타).</li>
<li>GitLab Flex: 시트·크레딧·기능을 하나의 연간 약정으로 월별 조정 가능.</li>
<li>GitLab은 직전 분기 연간 매출 10억 달러 돌파, 5만 개 이상 조직에 서비스 제공.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://gitlab.com/explore" target="_blank" rel="noopener noreferrer">GitLab Explore — 공개 프로젝트 탐색 및 GitLab Orbit 대기자 신청</a><br>— <a href="https://gitlab.com/gitlab-org/gitlab" target="_blank" rel="noopener noreferrer">GitLab 오픈소스 저장소 — 플랫폼 소스코드 및 이슈 트래커</a><br>— <a href="https://gitlab.com/gitlab-com/www-gitlab-com" target="_blank" rel="noopener noreferrer">gitlab-com/www-gitlab-com — GitLab 공식 문서 및 블로그 소스</a></div></div>
