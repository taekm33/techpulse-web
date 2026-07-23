---
title: "Google, Gemini 3.6 Flash 출시 — 토큰 17% 절감에 가격까지 인하"
summary: "구글이 Gemini 3.6 Flash, 3.5 Flash-Lite, 3.5 Flash Cyber 3종 모델을 공개했다. 코딩·에이전트 워크플로우 성능이 대폭 향상됐으며 API 가격도 낮아졌다."
category: "ai-news"
date: "2026-07-23"
readingTime: 5
tags: ["Google", "Gemini", "AI 모델", "LLM", "개발자도구"]
---

<div class="article-tldr">
구글이 2026년 7월 21일 Gemini 3.6 Flash, Gemini 3.5 Flash-Lite, Gemini 3.5 Flash Cyber 세 모델을 동시에 발표했다. 핵심은 효율성과 비용 절감 — 기존 3.5 Flash 대비 출력 토큰이 17% 줄었고 API 가격도 내렸다. 동시에 사이버보안 특화 모델도 처음으로 선보였다.
</div>

## Gemini 3.6 Flash: 효율과 성능을 동시에 잡다

구글의 새 워크호스 모델 **Gemini 3.6 Flash**는 개발자 피드백을 반영해 3.5 Flash의 고질적 문제였던 코드 생성 품질을 크게 개선했다. Artificial Analysis Index 기준으로 출력 토큰 사용량이 전작 대비 17% 감소했고, 일부 벤치마크(DeepSWE)에서는 최대 65%까지 토큰 절감 효과가 관측됐다.

성능 향상도 뚜렷하다. 코딩 벤치마크 **DeepSWE**에서 49%(3.5 Flash는 37%), ML 연구 벤치마크 **MLE Bench**에서 63.9%(전작 49.7%), 컴퓨터 사용 능력 평가 **OSWorld-Verified**에서 83.0%(전작 78.4%)를 기록했다. 지식 컷오프 날짜도 2025년 1월에서 **2026년 3월**로 업데이트됐다.

가격도 인하됐다. 입력 $1.50/백만 토큰, 출력 **$7.50/백만 토큰**으로 기존 출력 가격 $9.00 대비 약 17% 저렴해졌다.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-value">17%</span>
    <span class="stat-label">출력 토큰 절감 (vs 3.5 Flash)</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">49%</span>
    <span class="stat-label">DeepSWE 코딩 벤치마크 점수</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">83%</span>
    <span class="stat-label">OSWorld 컴퓨터 사용 점수</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">$7.50</span>
    <span class="stat-label">출력 토큰 가격 (백만 토큰당)</span>
  </div>
</div>

## 3.5 Flash-Lite: 초고속·초저가 에이전트용 모델

**Gemini 3.5 Flash-Lite**는 초당 **350 토큰**이라는 놀라운 출력 속도를 자랑한다. 가격은 입력 $0.30/백만 토큰, 출력 $2.50/백만 토큰으로 고처리량 프로덕션 환경에 최적화됐다.

성능도 예상 이상이다. Terminal-Bench 2.1에서 54%(3.1 Flash-Lite는 31%), GDPval-AA v2에서 1140점(3.1 Flash-Lite는 642점)을 기록했다. 더 놀라운 점은 일부 벤치마크에서 한 세대 위 모델인 **3 Flash를 능가**한다는 것이다. SWE-Bench Pro(54.2% vs. 49.6%), OSWorld-Verified(74.0% vs. 65.1%)에서 3 Flash를 앞섰다.

구글 검색의 AI Overview 기능에도 이 모델이 적용될 예정이다.

<div class="article-callout tip">
<strong>개발자 팁</strong><br/>
Flash-Lite는 thinking level 설정이 가능하다. 고속·저비용 작업에는 minimal/low 레벨을, 복잡한 멀티스텝 서브에이전트 워크플로우에는 higher 레벨을 사용하면 비용과 성능 사이의 최적 균형을 맞출 수 있다.
</div>

## 3.5 Flash Cyber: AI 보안 특화 모델 첫 등장

**Gemini 3.5 Flash Cyber**는 구글이 처음 선보이는 사이버보안 특화 모델로, 보안 취약점 탐지·검증·패치에 최적화됐다. CodeMender 플랫폼과 통합 제공되며, 여러 Flash Cyber 에이전트가 협력해 단일 통합 보고서를 생성하는 방식으로 동작한다.

인기 벤치마크 **CyberGym**에서 최상위권 성능을 달성했다고 구글은 밝혔다. 다만 이중 사용(dual-use) 우려로 현재는 정부 기관 및 신뢰할 수 있는 파트너에게만 제한 공개(Limited-Access Pilot)로 제공된다.

<div class="article-callout info">
<strong>Gemini 4 예고</strong><br/>
구글은 이번 발표와 함께 차세대 Gemini 4 모델의 사전 학습(pre-training)이 시작됐음을 공개했다. "역대 가장 야심찬 사전 학습 실행"이라고 밝혔으나 출시 일정은 미공개다. 3.5 Pro도 파트너사와 테스트 중이며 준비되는 대로 공개할 예정이다.
</div>

## 모델 비교표

| 모델 | 입력 가격 | 출력 가격 | 출력 속도 | 주요 특징 |
|------|-----------|-----------|-----------|-----------|
| Gemini 3.6 Flash | $1.50/1M | $7.50/1M | 일반 | 코딩·에이전트 워크호스 |
| Gemini 3.5 Flash-Lite | $0.30/1M | $2.50/1M | 350 tok/s | 초고속·고처리량 |
| Gemini 3.5 Flash Cyber | 비공개 | 비공개 | - | 보안 특화, 제한 제공 |

<div class="article-keypoints">
<h3>핵심 요약</h3>
<ul>
  <li>Gemini 3.6 Flash: 토큰 17% 절감 + 코딩·지식업무 성능 향상 + 가격 인하</li>
  <li>3.5 Flash-Lite: 초당 350 토큰, 3 Flash보다 빠르면서 더 저렴</li>
  <li>3.5 Flash Cyber: 보안 취약점 특화 모델, 정부·파트너 한정 공개</li>
  <li>Gemini 4 사전 학습 시작 공식 발표 — 차기 세대 예고</li>
  <li>3.6 Flash 지식 컷오프 2026년 3월로 대폭 업데이트</li>
</ul>
</div>

Google은 이번 출시를 통해 에이전트 AI 시대에 맞는 효율 중심 모델 전략을 명확히 했다. 개발자들은 구글 AI Studio, Android Studio, Gemini API를 통해 즉시 사용 가능하며, 일반 사용자는 Gemini 앱에서 새 모델을 경험할 수 있다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
&middot; <a href="https://blog.google/products/gemini/" target="_blank" rel="noopener">Google 블로그 &mdash; Gemini</a><br/>
&middot; <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener">Gemini API 개발자 문서 (Google AI for Developers)</a><br/>
&middot; <a href="https://deepmind.google/models/gemini/" target="_blank" rel="noopener">Google DeepMind &mdash; Gemini 모델</a><br/>
</div>
