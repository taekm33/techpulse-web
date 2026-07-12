---
title: "깃허브 코파일럿 토큰 과금 시행 — 일부 개발자 월 75만 원 폭탄 청구"
summary: "깃허브가 6월 1일부터 코파일럿을 토큰 기반 과금(AI Credits)으로 전환했다. 헤비 유저는 기존 월 29달러에서 750달러 이상으로 비용이 폭등한 사례도 속출하고 있다."
category: "dev-trend"
date: "2026-06-05"
readingTime: 5
tags: ["GitHub", "Copilot", "AI코딩", "토큰과금", "개발자도구"]
---

<div class="article-tldr">
<strong>3줄 요약</strong>
<ul>
<li>깃허브 코파일럿이 6월 1일부터 정액제에서 토큰 기반 AI Credits 과금 체계로 전환</li>
<li>에이전트·추론 모델 헤비 유저의 경우 월 요금이 29달러에서 750달러 이상으로 25배 이상 급등 사례 보고</li>
<li>자동완성 기능은 여전히 무제한 무료이며, 가벼운 사용자는 큰 영향 없을 전망</li>
</ul>
</div>

깃허브(GitHub)가 2026년 6월 1일부터 코파일럿(Copilot)의 과금 방식을 전면 개편했다. 기존의 월정액 '프리미엄 요청 단위(PRU)' 방식을 폐지하고, 실제 사용량에 비례한 **AI Credits** 체계로 전환한 것이다. 이 변화는 무거운 에이전트 워크로드나 고급 추론 모델을 자주 쓰는 개발자들을 중심으로 거센 반발을 불러일으키고 있다.

레딧(Reddit), X(구 트위터), 깃허브 커뮤니티 포럼에는 기존 월 29달러(코파일럿 Pro)나 50달러 요금제를 쓰던 개발자들이 750달러, 심지어 3,000달러 이상의 청구서를 받았다는 글이 쏟아지고 있다. 기술 매체 테크크런치(TechCrunch)는 이를 "What a joke(농담도 아니고)"라는 개발자 반응으로 요약했다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-value">$10/월</span>
<span class="stat-label">Copilot Pro 기본 요금 (유지)</span>
</div>
<div class="stat-item">
<span class="stat-value">최대 25배+</span>
<span class="stat-label">헤비 유저 비용 증가 폭</span>
</div>
<div class="stat-item">
<span class="stat-value">무제한</span>
<span class="stat-label">인라인 자동완성 (여전히 무료)</span>
</div>
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/dhfTaSGYQ4o" title="GitHub Copilot 시작하기 (GitHub 공식)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 무엇이 바뀌었나

새 체계에서 AI Credits는 입력 토큰, 출력 토큰, 캐시 토큰을 포함한 **실제 토큰 소비량**에 따라 차감된다. 각 모델(GPT-4.1, Claude 3.7 Sonnet 등)의 API 요금에 연동되며, 월별 구독 플랜에 포함된 무료 크레딧을 초과하면 초과분이 청구된다.

Pro 플랜($10/월), Pro+($39/월), Business($19/사용자/월), Enterprise($39/사용자/월)의 기본 구독 가격은 유지됐다. 문제는 포함된 크레딧 한도를 넘어서는 **초과 사용 비용**이다. 에이전트 모드(Copilot Agent)나 멀티 스텝 코딩 워크플로우에 추론 모델을 반복 사용하면 크레딧이 매우 빠르게 소진된다.

<div class="article-callout tip">
<strong>절약 팁:</strong> 인라인 자동완성은 여전히 모든 플랜에서 무제한·무료다. 채팅이나 에이전트 모드 사용 빈도를 줄이고, 가벼운 모델(GPT-4o Mini 등)을 기본으로 설정하면 비용을 크게 낮출 수 있다.
</div>

## 엇갈리는 반응

개발자 커뮤니티의 반응은 엇갈린다. 반발하는 측은 "예측 불가능한 비용 구조"와 "사전 고지 부족"을 비판한다. 반면 긍정적으로 보는 측은 "사용한 만큼 내는 공정한 구조"라며, 가벼운 사용자는 오히려 저렴해질 수 있다고 주장한다. 실제로 주로 인라인 자동완성만 쓰는 개발자라면 $10 Pro 플랜의 기본 크레딧으로 충분히 커버될 가능성이 높다.

## 대안 도구로의 이탈 움직임

이번 과금 개편을 계기로 일부 개발자들은 Cursor, Windsurf 등 대안 AI 코딩 도구로의 이전을 검토하고 있다. DEV Community에는 비용 가이드와 대안 비교글이 쏟아지고 있으며, 깃허브 커뮤니티 토론 스레드(#192948)에는 수천 건의 댓글이 달렸다.

<div class="article-callout info">
<strong>참고:</strong> 깃허브 블로그에 게시된 공식 설명에 따르면, 무거운 에이전트 작업이나 추론 모델을 자주 사용하지 않는 경우 월 비용은 기존과 거의 동일하거나 오히려 저렴할 수 있다.
</div>

## 요금 체계 비교

| 플랜 | 기존 월 요금 | 새 월 기본 요금 | 초과 사용 시 |
|---|---|---|---|
| Copilot Pro | $10 | $10 | AI Credits 추가 과금 |
| Copilot Pro+ | $39 | $39 | AI Credits 추가 과금 |
| Copilot Business | $19/사용자 | $19/사용자 | AI Credits 추가 과금 |
| Copilot Enterprise | $39/사용자 | $39/사용자 | AI Credits 추가 과금 |

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>6월 1일부터 코파일럿이 토큰 기반 AI Credits 과금으로 전환, PRU 방식 폐지</li>
<li>에이전트 모드·추론 모델 헤비 유저는 월 수백~수천 달러 청구 사례 속출</li>
<li>인라인 자동완성은 여전히 무제한 무료로 라이트 유저는 큰 영향 없음</li>
<li>Cursor, Windsurf 등 대안 도구로의 이탈 움직임 가속화</li>
<li>기본 구독 가격은 유지, 투명한 가격표 제공이 긍정적 평가도 받음</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://github.com/features/copilot GitHub Copilot 공식 소개 페이지" target="_blank" rel="noopener"></a><br/>
· <a href="https://docs.github.com/copilot/concepts/billing/individual-plans" target="_blank" rel="noopener">GitHub Copilot 요금·빌링 공식 문서</a><br/>
· <a href="https://github.blog/" target="_blank" rel="noopener">GitHub 공식 블로그</a><br/>
</div>
