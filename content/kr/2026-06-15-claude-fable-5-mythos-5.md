---
title: "Anthropic, 역대 최강 AI 클로드 Fable 5 공개 — 출시 3일 만에 전면 서비스 중단"
summary: "Anthropic이 6월 9일 Mythos급 역량의 Claude Fable 5와 Mythos 5를 공개했지만, 출시 3일 만인 6월 12일 두 모델 모두 전면 접근이 중단됐다. 역사적 성능과 충격적 중단 배경을 집중 분석한다."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["claude", "anthropic", "fable5", "ai모델", "llm"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic이 <strong>Claude Fable 5</strong>를 출시했다. 이전까지 제한 파트너에게만 제공됐던 Mythos급 역량을 안전 장치(Safety Guardrail)와 함께 일반에 공개한 최초의 모델이다. 입력 $10·출력 $50(백만 토큰 기준)로 Claude Mythos Preview 대비 절반 이하 가격이다. 그러나 출시 3일 만인 <strong>6월 12일 전면 접근이 중단</strong>됐으며, 복구 일정은 공개되지 않았다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Mythos 클래스란 무엇인가

Anthropic의 모델 계층은 Haiku(경량) → Sonnet(균형) → Opus(고성능) → **Mythos(최상위)** 순으로 구성된다. Mythos 클래스는 이전까지 Claude Mythos Preview라는 이름으로 미국 정부의 Project Glasswing 참여 사이버보안 파트너에게만 제한 제공됐다. 그 이유는 단 하나 — 이 모델이 **수천 개의 제로데이 취약점을 자동으로 발견할 수 있는 수준**이기 때문이었다.

Fable 5는 이 Mythos 역량에 광범위한 **안전 레이어**를 씌워 일반 공개를 가능하게 한 모델이다. 사이버보안·생물학 관련 고위험 쿼리는 자동으로 Opus 4.8로 리다이렉트되며, 유해 활용 가능성이 차단된다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">$10</span>
<span class="article-stats__label">입력 토큰 (백만 기준)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">$50</span>
<span class="article-stats__label">출력 토큰 (백만 기준)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">6월 22일</span>
<span class="article-stats__label">유료 구독 무료 이용 예정 종료일</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">6월 12일</span>
<span class="article-stats__label">서비스 전면 중단일 (현재 접근 불가)</span>
</div>
</div>

## Fable 5 vs Mythos 5: 같은 뿌리, 다른 열쇠

Anthropic은 6월 9일 두 모델을 동시 발표했다.

| 항목 | Claude Fable 5 | Claude Mythos 5 |
|------|---------------|-----------------|
| 기반 모델 | 동일 | 동일 |
| 사이버보안 세이프가드 | 적용 (고위험 쿼리 리다이렉트) | 해제 |
| 생물학·화학 세이프가드 | 적용 | 일부 해제 (예정) |
| 공개 범위 | 전체 유료 구독자 | Project Glasswing 파트너 한정 |
| 가격 (입력/출력) | $10 / $50 (백만 토큰) | 동일 |

Mythos 5는 Fable 5와 동일한 기반 모델이지만 **세이프가드가 해제**된 버전이다. 현재는 미국 정부와의 협력 프레임워크인 **Project Glasswing** 참여 기관(사이버보안 방어 조직, 핵심 인프라 제공업체)에게만 제공된다. Anthropic은 추후 신뢰 접근 프로그램(Trusted Access Program)을 통해 생물학 연구자 등으로 대상을 확대할 계획이다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>API에서 Fable 5 사용하기</strong><br>서비스 복구 후 API에서는 모델 ID <code>claude-fable-5</code>로 호출할 수 있다. Claude API와 소비 기반 Enterprise 플랜은 출시 첫날부터 완전 지원됐다. Pro·Max·Team 구독자는 6월 22일까지 무료 사용 예정이었으나, 6월 12일 이후 전면 중단 상태다.</div>
</div>

## 며칠이 지나도 포기하지 않는 에이전트

Fable 5의 가장 큰 차별점은 **장시간 자율 작업 능력**이다. Anthropic은 "수일간 인간 개입 없이도 복잡한 프로젝트를 유지할 수 있다"고 발표했다. 코딩뿐 아니라 금융 모델링, 법률 문서 검토, 경제 연구처럼 기존에는 전문가의 지속적인 감독이 필요했던 영역으로 적용 범위가 확장된다.

Anthropic이 설명한 설계 원칙은 단순하다: **"과제의 길이와 복잡성이 길어질수록 Fable 5의 다른 모델 대비 우위가 커진다."**

## 출시 3일 만의 충격 — 서비스 중단 배경

6월 9일 출시, 6월 12일 중단. Anthropic은 공식 페이지에 짧은 메시지를 게재했다: *"We are suspending access to Claude Fable 5 and Claude Mythos 5. We apologize for this disruption to our customers and are working to restore access as soon as possible."*

구체적인 중단 사유는 밝히지 않았다. 업계는 ① 예상을 초과한 수요로 인한 인프라 과부하, ② 안전 시스템에서 예상치 못한 엣지케이스 발견, ③ 용량 확보를 위한 임시 조치 중 하나일 가능성을 제기하고 있다. 복구 일정은 6월 15일 현재 공개되지 않았다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>사이버보안 세이프가드의 작동 방식</strong><br>Fable 5는 사이버 공격 코드 작성, 취약점 익스플로잇 생성 등 고위험 영역의 쿼리를 자동으로 Opus 4.8로 리다이렉트한다. Anthropic은 "현재는 세이프가드가 광범위하게 적용되지만, 안전한 요청은 더 잘 허용하도록 지속적으로 정밀화할 계획"이라고 밝혔다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Claude Fable 5는 Mythos급 역량에 사이버보안·생물학 세이프가드를 적용해 일반 공개한 최초 모델이다.</li>
<li>Claude Mythos 5는 동일 기반 모델이며, 세이프가드 해제 버전으로 Project Glasswing 파트너에게만 제공된다.</li>
<li>가격은 입력 $10·출력 $50(백만 토큰)으로 Mythos Preview 대비 절반 이하.</li>
<li>수일간 자율 작업 지속 능력이 핵심 차별점이며, 코딩·연구·금융·법률 등에서 두각.</li>
<li>출시 3일 만인 6월 12일 전면 접근 중단. 복구 일정 미공개 (6월 15일 현재).</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic 공식 발표 — Claude Fable 5 & Mythos 5 론칭 상세 내용</a><br>— <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">Claude 공식 제품 페이지 — 현재 접근 가능 모델 및 서비스 상태 확인</a><br>— <a href="https://www.anthropic.com/api" target="_blank" rel="noopener noreferrer">Anthropic API 문서 — claude-fable-5 모델 ID, 가격, 연동 가이드</a></div></div>
