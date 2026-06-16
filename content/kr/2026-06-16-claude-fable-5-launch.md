---
title: "Claude Fable 5 출시: 역대 최강 Claude 모델, 일반 공개"
summary: "Anthropic이 Mythos급 성능을 일반 사용자에게 공개하는 Claude Fable 5를 6월 9일 정식 출시했다. SWE-bench Verified 95%, 수일간 자율 작동 가능한 에이전트 역량이 특징이다."
category: "ai-news"
date: "2026-06-16"
readingTime: 5
tags: ["Claude", "Anthropic", "AI모델", "LLM", "에이전트AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic이 6월 9일 Claude Fable 5를 일반 출시했다. Mythos 클래스 능력에 안전 장치를 더한 모델로, SWE-bench Verified 95%, SWE-bench Pro 80%를 기록했다. 가격은 입력 $10/출력 $50(백만 토큰)으로 Claude Mythos Preview 대비 절반 이하다. 수일간 개입 없이 자율 운용되는 장기 에이전트 작업에 최적화됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Fable 5가 등장한 배경

Anthropic의 이전 최강 모델이었던 Claude Mythos Preview는 사이버보안 취약점을 수천 건 찾아낼 수 있을 만큼 강력했다. 그래서 Anthropic은 악용 위험을 이유로 일반 공개를 보류하고, 미국 정부 및 핵심 인프라 보안 파트너(Project Glasswing)에만 제공해 왔다.

이후 Anthropic은 고위험 요청(사이버보안·생물학)을 자동 검출해 Claude Opus 4.8로 리다이렉트하는 안전 분류 시스템을 완성했다. 이 장치 덕분에 Mythos급 두뇌를 일반 사용자에게 공개할 수 있게 된 것이 Fable 5다.

동시에 출시된 Claude Mythos 5는 동일 모델에서 사이버보안 안전 장치를 해제한 버전으로, 여전히 Project Glasswing 파트너와 승인된 생물학 연구자에게만 제공된다.

## 핵심 성능 수치

<div class="article-stats">
  <div class="article-stat-item">
    <span class="stat-value">95%</span>
    <span class="stat-label">SWE-bench Verified</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">80%</span>
    <span class="stat-label">SWE-bench Pro</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">680만+</span>
    <span class="stat-label">공식 발표 영상 조회수(6월 9일 출시)</span>
  </div>
</div>

Fable 5는 단순 벤치마크를 넘어 실제 소프트웨어 엔지니어링 업무(코딩 에이전트, 연구, 법률·금융 분석)에서 사람 개입 없이 수일을 버티는 것을 목표로 설계됐다.

## Fable 5 vs Mythos Preview 비교

| 항목 | Claude Mythos Preview | Claude Fable 5 |
|---|---|---|
| 접근 범위 | Glasswing 파트너 한정 | 일반 공개 |
| 가격(입력/출력) | 더 높음 | $10/$50(100만 토큰) |
| 사이버 안전 장치 | 없음 | 자동 분류·리다이렉트 |
| 장기 에이전트 | 가능 | 더욱 강화 |
| 생물학 안전 장치 | 없음 | 고위험 요청 차단 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>구독 플랜 이용자 주의</strong><br>Claude API와 소비 기반 Enterprise 플랜에서는 Fable 5를 즉시 사용 가능하다. 하지만 Pro·Max·Team 등 구독 플랜은 6월 22일까지 무료 포함 후, 6월 23일부터 사용 크레딧 소모 방식으로 전환된다. Anthropic은 충분한 인프라 확보 이후 구독 플랜에도 기본 제공으로 복원할 계획이다.</div>
</div>

## 에이전트 시대를 위한 설계

Fable 5의 가장 큰 차별점은 **장기 자율 운용 능력**이다. 코딩, 연구, 재무 분석, 법률 검토 등 복잡한 다단계 작업을 수일간 인간 개입 없이 처리할 수 있다. Anthropic의 Managed Agents 플랫폼과 결합하면 더욱 강력한 에이전트 파이프라인을 구성할 수 있다.

지원 기능:
- **Effort 제어** 및 **Task Budgets** (태스크 예산 설정으로 비용 관리)
- **Memory Tool** — 세션 간 맥락 유지
- **Code Execution** — 샌드박스 코드 실행
- **Context Editing** (컨텍스트 관리 베타)

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>API 모델 ID</strong><br>개발자는 <code>claude-fable-5</code> 모델 ID로 Claude API, Amazon Bedrock, Google Vertex AI, Microsoft Foundry에서 즉시 사용 가능하다. Mythos 5는 <code>claude-mythos-5</code>이며 Glasswing 파트너 한정이다.</div>
</div>

## Project Glasswing과 안전 철학

Anthropic은 Claude Mythos Preview를 통해 미국 정부와 협력해 핵심 소프트웨어 인프라의 취약점을 선제적으로 수정해 왔다. Fable 5는 이 경험에서 얻은 안전 분류 기술을 적용, "강력하면서도 광범위하게 접근 가능한 AI"라는 목표를 실현한 첫 번째 사례다.

Anthropic은 앞으로도 안전 장치를 지속 정교화해 고위험 도메인에서 더 많은 안전 요청이 통과될 수 있도록 개선할 예정이다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Claude Fable 5는 Mythos급 역량을 일반 공개한 최초의 Anthropic 모델</li>
<li>SWE-bench Verified 95%, SWE-bench Pro 80% 달성</li>
<li>입력 $10/출력 $50(100만 토큰) — Mythos Preview 대비 50% 이상 저렴</li>
<li>수일간 자율 작동하는 장기 에이전트 작업에 최적화</li>
<li>고위험 요청은 안전 분류기가 자동으로 Opus 4.8로 우회</li>
<li>Claude Mythos 5도 동시 출시(Glasswing 파트너 전용)</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic 공식 발표 — Claude Fable 5 & Mythos 5</a><br>— <a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener noreferrer">Claude Fable 5 제품 페이지 (가격·가용성)</a><br>— <a href="https://platform.claude.ai/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5.md" target="_blank" rel="noopener noreferrer">개발자 문서 — API 통합 및 모델 ID 안내</a></div></div>
