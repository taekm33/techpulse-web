---
title: "AI 코딩 에이전트가 GitHub를 무너뜨리자, 마이크로소프트는 라이벌 AWS로 향했다"
summary: "AI 코딩 에이전트가 쏟아내는 트래픽이 GitHub의 가용성 기준을 무너뜨리면서, 마이크로소프트가 자사 클라우드 경쟁사인 AWS의 컴퓨팅 용량을 임시로 끌어다 쓰고 있다는 사실이 확인됐다. GitHub는 5월에만 9건의 서비스 장애를 겪었고, 6월 가용성은 '쓰리나인' 기준에 크게 못 미치는 것으로 추정된다."
category: "dev-trend"
date: "2026-06-17"
readingTime: 5
tags: ["GitHub", "AWS", "AI코딩에이전트"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Mc3I3Aua2iw" title="AI Agents Are Breaking Microsoft GitHub" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> 마이크로소프트가 2026년 6월 16일, GitHub를 지원하기 위해 자사 최대 클라우드 경쟁사인 AWS의 컴퓨팅 용량을 추가로 도입했다고 확인했다. AI 코딩 에이전트가 쉬지 않고 만들어내는 트래픽이 예상을 뛰어넘는 속도로 폭증하면서 GitHub는 5월에만 9건의 서비스 장애를 겪었고, 6월 가용성은 99% 미달로 추정된다. Azure 마이그레이션이 진행 중이지만 수요 증가 속도를 따라가지 못해, AWS 활용은 구조적 재설계가 끝날 때까지의 임시방편으로 풀이된다.</div>

마이크로소프트가 자사의 가장 전략적인 개발자 플랫폼인 GitHub의 트래픽 일부를 경쟁사 AWS로 우회시키고 있다는 사실이 비즈니스 인사이더의 단독 보도와 마이크로소프트의 확인을 통해 드러났다. 원인은 명확하다 — AI 코딩 에이전트가 인간 개발자와는 전혀 다른 패턴으로, 쉬지 않고 GitHub API를 두드리고 있기 때문이다.

## 어떤 숫자도 예상하지 못한 트래픽 증가

<div class="article-stats">
<div><strong>2.75억 건</strong><br>주간 커밋 수(2026년 4월 기준)</div>
<div><strong>9건</strong><br>2026년 5월 한 달간 발생한 서비스 장애</div>
<div><strong>325%</strong><br>AI 에이전트가 연 PR 수 증가율(2025.9 → 2026.3, 6개월)</div>
</div>

GitHub COO 카일 다이글은 지난 4월, 플랫폼이 주당 2억 7,500만 건의 커밋을 처리하고 있으며 이는 2025년 전체(10억 건)에서 14배 증가한 2026년 연간 140억 건에 달하는 속도라고 밝혔다. GitHub Actions 컴퓨트 사용량도 2023년 주당 5억 분에서 2025년 10억 분으로 늘었다가, 2026년 초 단 한 주 만에 21억 분을 기록했다. 같은 기간 AI 에이전트가 연 풀리퀘스트는 2025년 9월 약 400만 건에서 2026년 3월 1,700만 건으로 6개월 만에 325% 증가했다.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body">
<strong>왜 사람과 다른가</strong><br>
Cursor, Claude Code, GitHub Copilot, Devin 등 코딩 에이전트는 UI 로그인 없이 API와 커맨드라인으로만 작동하고, 주말도 쉬지 않는다. 에이전트가 여는 PR 하나하나가 데이터베이스 기록, 웹훅 팬아웃, CI 러너 할당, 검색 인덱스 갱신, 아티팩트 저장 등 일련의 인프라 작업을 촉발한다. GitHub CTO 블라드 페도로프는 "빠른 부하 증가와, 국지적 문제가 핵심 서비스 전체로 번지게 만드는 아키텍처 결합, 그리고 비정상 클라이언트의 부하를 덜어내지 못하는 시스템의 한계"를 근본 원인으로 지목했다.</div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>AWS는 시간을 버는 용도일 뿐</strong><br>
GitHub는 2008년 루비온레일즈 기반 모놀리식 구조 위에 만들어졌고, 여전히 핵심부에 200만 라인에 달하는 단일 애플리케이션이 자리잡고 있다. Azure 이전은 2027년 완료를 목표로 진행 중이며 5월 기준 모놀리스 트래픽의 40%가 Azure로 옮겨졌지만, 마이그레이션 속도가 수요 증가를 따라가지 못해 AWS 용량을 임시로 끌어다 쓰는 상황이다. 마이크로소프트는 "Azure 전환을 가속화하는 동시에 멀티클라우드 전략도 계속 검토하고 있다"고 밝혔다.</div>
</div>

## 타임라인으로 보는 위기

| 시점 | 내용 |
|---|---|
| 2025년 10월 | GitHub, 인프라 용량 10배 확장 계획 착수 |
| 2026년 2월 | 목표가 30배로 상향(에이전트 트래픽 폭증 반영) |
| 2026년 4월 9~13일 | 에이전트 세션 대기시간이 평소 15~40초에서 54분까지 치솟음 |
| 2026년 5월 | 서비스 장애 9건 발생 |
| 2026년 6월 16일 | 마이크로소프트, AWS 용량 활용 공식 확인 |

GitHub 가용성 보고서에 따르면 2월과 3월 모두 자체적으로 약속한 '쓰리나인(99.9%)' 기준을 충족하지 못했고, 6월 추정 가용성도 그 기준을 한참 밑돈다. 같은 주, 구글이 SpaceX로부터 2026년 10월부터 2029년 6월까지 매월 9억 2,000만 달러 규모의 AI 컴퓨팅 용량을 임차하는 계약이 알려지면서, AI 에이전트 수요가 업계 전반의 용량 계획을 앞지르고 있다는 패턴이 확인되고 있다.

<div class="article-keypoints">
<ul>
<li>GitHub Actions 기반 CI/CD에 의존하는 엔지니어링 팀은 GitLab CI, CircleCI, 셀프호스팅 러너 등 대체 경로를 미리 마련해 두는 것이 안전하다.</li>
<li>GitHub 상태 페이지를 상시 모니터링하고, 가용성 기준 미달 시 적용되는 보상·구제 조항을 엔터프라이즈 계정팀과 사전에 확인해 둘 필요가 있다.</li>
<li>내부적으로 에이전트형 워크플로의 API 호출량에 속도 제한을 두는 것도, 플랫폼 전체의 과부하에 일조하지 않도록 하는 현실적인 대응책이다.</li>
</ul>
</div>

GitHub COO는 9월까지 가용성 문제가 "점점 줄어들 것"이라는 자신감을 보였지만, 이는 단순한 용량 증설이 아니라 모놀리식 아키텍처의 분리, 부하 차단 메커니즘 구현, 루비에서 Go로의 핵심 경로 마이그레이션이라는 구조적 재설계가 완료돼야 가능한 목표다.

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>
— <a href="https://www.techtimes.com/articles/318481/20260616/githubs-ai-agent-crisis-forces-microsoft-tap-aws-outages-break-enterprise-slas.htm" target="_blank" rel="noopener noreferrer">Tech Times: GitHub's AI Agent Crisis Forces Microsoft to Tap AWS</a><br>
— <a href="https://letsdatascience.com/news/github-capacity-surge-pushes-microsoft-to-aws-13a2ffa4" target="_blank" rel="noopener noreferrer">Let's Data Science: GitHub Capacity Surge Pushes Microsoft to AWS</a><br>
— <a href="https://www.githubstatus.com/" target="_blank" rel="noopener noreferrer">GitHub 공식 상태 페이지(실시간 가용성 확인)</a><br>
— <a href="https://github.blog/news-insights/company-news/" target="_blank" rel="noopener noreferrer">GitHub 공식 블로그: 월간 가용성 보고서</a>
</div>
</div>
