---
title: "Claude Fable 5 정식 출시 — 일반 사용자도 Mythos급 AI를 만나다"
summary: "Anthropic이 2026년 6월 9일 Claude Fable 5를 전격 공개했다. Mythos 아키텍처 기반의 가장 강력한 범용 공개 모델로, SWE-Bench Pro 91점으로 GPT-5.5(62점)·Opus 4.8(63점)을 크게 앞선다. API는 오늘부터 사용 가능하고, 구독 플랜은 6월 22일까지 무료 포함된다."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Anthropic", "Claude", "Fable5", "Mythos", "AI모델"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic이 6월 9일 Claude Fable 5를 공개 출시했다. Mythos급 역량을 일반 사용자에게 제공하는 첫 번째 모델로, 코딩·지식 업무·비전·과학 연구에서 기존 Claude 모델을 압도한다. API에서는 `claude-fable-5`로 즉시 사용 가능하며, 입력 $10/백만 토큰, 출력 $50/백만 토큰이다. 구독 사용자는 6월 22일까지 추가 비용 없이 이용 가능하고 이후엔 사용 크레딧이 필요하다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/GrdEid8H6H4" title="We Tested Anthropic's Fable 5 for a Week" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 무슨 일이 일어났나?

2026년 6월 9일, Anthropic이 **Claude Fable 5**를 일반 공개했다. 이는 Anthropic이 이전까지 제한된 파트너(Project Glasswing)에게만 제공했던 **Mythos 아키텍처** 기반 모델을 처음으로 일반 사용자에게 개방한 것이다.

같은 날 기존 Glasswing 파트너를 위한 업그레이드 버전인 **Claude Mythos 5**도 함께 출시됐다. Fable 5와 Mythos 5는 동일한 기반 모델이지만, Fable 5에는 사이버보안·생물학·화학·모델 증류 관련 요청에 대해 Claude Opus 4.8으로 자동 전환되는 **안전 장치(safeguards)** 가 탑재돼 있다. Anthropic에 따르면 이 안전 전환은 전체 세션의 5% 미만에서만 발생한다.

<div class="article-stats">
<strong>주요 수치</strong>
<ul>
  <li>🏆 <strong>SWE-Bench Pro 점수:</strong> Fable 5 — 91점 vs Opus 4.8 — 63점 vs GPT-5.5 — 62점</li>
  <li>💰 <strong>API 가격:</strong> 입력 $10/백만 토큰 · 출력 $50/백만 토큰 (Opus 대비 2배)</li>
  <li>📅 <strong>구독 무료 포함 기간:</strong> 6월 9일 ~ 6월 22일 (Pro·Max·Team·Enterprise)</li>
  <li>🔗 <strong>컨텍스트 창:</strong> 1백만 토큰</li>
  <li>🛡️ <strong>안전 전환 비율:</strong> 전체 세션의 5% 미만</li>
</ul>
</div>

## Fable 5가 주목받는 이유

### 코딩 성능의 질적 도약

Every의 CEO Dan Shipper는 일주일 동안 Fable 5를 테스트한 결과를 공개했다. 자체 개발한 '시니어 엔지니어 벤치마크'에서 **91/100점**을 기록해, 이전 최고 점수인 Opus 4.8의 63점을 28점 차이로 앞질렀다. 이는 경험 많은 인간 엔지니어가 한 번의 프롬프트로 달성하는 점수와 동일하다.

모델의 가장 큰 차이점은 **장기 실행 능력**이다. 기존 모델이 반복 확인을 필요로 하던 복잡한 멀티-파일 코드베이스 작업을 Fable 5는 더 적은 지시로 자율적으로 완료한다.

### 새로운 모델 계층 구조

Claude 라인업이 확장됐다:

| 모델 | 특성 | 용도 |
|------|------|------|
| Haiku | 초경량·초고속 | 단순 자동화 |
| Sonnet | 균형형 | 일반 업무 |
| Opus | 복잡한 협업용 | 동기적 복잡 업무 |
| **Fable (Mythos급)** | **최고 역량·공개** | **자율 장기 프로젝트** |
| Mythos | 최고 역량·제한 | 사이버보안·인프라 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>지금 당장 써볼 수 있는 방법</strong><br>API에서는 모델 ID <code>claude-fable-5</code>로 즉시 사용 가능하다. Python SDK: <code>pip install anthropic</code> 후 <code>model="claude-fable-5"</code>로 호출. 6월 22일까지 Pro·Max·Team 구독자는 추가 비용 없이 이용 가능하므로, 지금이 무료로 테스트할 최적의 타이밍이다.</div>
</div>

## 어디서 사용할 수 있나?

Fable 5는 다음 플랫폼에서 즉시 사용 가능하다:

- **Claude API** (`claude-fable-5` 모델 ID)
- **Amazon Bedrock** 및 **Claude Platform on AWS**
- **Microsoft Foundry**
- **Claude.ai** (Pro·Max·Team·Enterprise — 6월 22일까지 포함)

Anthropic은 용량 제한을 이유로 6월 23일부터 구독 플랜에서 Fable 5를 제외하고 사용 크레딧 방식으로 전환할 예정이다. 충분한 용량이 확보되는 대로 다시 구독에 포함할 계획이라고 밝혔다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Mythos 5는 무엇이 다른가?</strong><br>Mythos 5는 Fable 5와 동일한 모델이지만 사이버보안·생물학·화학 관련 안전 전환이 해제된 버전이다. 현재 Project Glasswing 파트너(사이버 방어 기관, 핵심 인프라 제공업체)에게만 제공된다. 향후 미국 정부와 협력해 신뢰할 수 있는 접근 프로그램(trusted access program)을 통해 확대될 예정이다. 생명과학 연구자를 위한 별도 생물학 프로그램도 준비 중이다.</div>
</div>

## GitHub Copilot과 AWS의 반응

GitHub의 Thomas Dohmke CEO는 "Fable 5는 GitHub이 서비스하는 개발자들에게 실질적인 발전"이라며 "초기 테스트에서 자율성과 신뢰성이 이전 모델을 뛰어넘는 수준으로 장기 코딩 작업을 수행했다"고 밝혔다. Amazon Bedrock에서도 같은 날 Fable 5가 출시됐으며, AWS는 이를 "야심적이고 장기 실행되는 복잡한 작업을 위한 모델"로 소개했다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>Anthropic이 6월 9일 Claude Fable 5를 공개 출시 — Mythos급 역량 최초 일반 공개</li>
  <li>SWE-Bench Pro 91점으로 GPT-5.5(62점), Opus 4.8(63점)을 크게 앞선 코딩 성능</li>
  <li>API·Amazon Bedrock·Microsoft Foundry·Claude.ai에서 즉시 사용 가능</li>
  <li>구독 사용자 6월 22일까지 무료, 이후엔 사용 크레딧 필요</li>
  <li>Mythos 5는 동일 모델이나 안전 장치 해제 — Project Glasswing 파트너 전용</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/anthropics/anthropic-sdk-python" target="_blank" rel="noopener noreferrer">Anthropic Python SDK (GitHub) — claude-fable-5 호출 방법</a><br>— <a href="https://pypi.org/project/anthropic/" target="_blank" rel="noopener noreferrer">PyPI: anthropic 패키지 — pip install anthropic</a><br>— <a href="https://github.com/anthropics/courses" target="_blank" rel="noopener noreferrer">Anthropic Courses (GitHub) — API 사용 예제 및 튜토리얼</a></div></div>
