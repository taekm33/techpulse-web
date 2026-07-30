---
title: "2.8조 파라미터 오픈소스 AI 등장: 문샷 AI, Kimi K3 가중치 전면 공개"
summary: "중국 스타트업 문샷 AI가 2.8조 파라미터 규모의 Kimi K3 모델 가중치를 공개했다. 역대 최대 공개 오픈웨이트 모델로, Claude Fable 5와 맞먹는 성능을 보여준다."
category: "ai-news"
date: "2026-07-28"
readingTime: 5
tags: ["KimiK3", "오픈소스AI", "문샷AI", "거대언어모델", "MoE"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: 중국 AI 스타트업 문샷 AI(Moonshot AI)가 2026년 7월 27일 Kimi K3의 전체 모델 가중치를 Hugging Face를 통해 공개했다. 2.8조 파라미터, 100만 토큰 컨텍스트 윈도우를 갖춘 이 모델은 역대 가장 큰 오픈웨이트 AI 모델이다. 벤치마크에서 Claude Fable 5와 GPT-5.6 Sol에 근접하거나 일부 항목에서 앞서는 성능을 보여준다.
</div>

## 역대 최대 오픈 가중치 모델 공개

2026년 7월 27일 자정(UTC 기준), 중국 AI 스타트업 **문샷 AI(Moonshot AI)**가 자사 최신 플래그십 모델 **Kimi K3**의 전체 가중치를 공개했다. 지금까지 공개된 오픈웨이트 AI 모델 중 가장 큰 **2.8조(2.8T) 파라미터** 규모로, AI 업계에 새로운 이정표를 세웠다.

Hugging Face를 통해 배포된 이 모델은 **MXFP4 양자화** 형식으로 저장돼 있으며 다운로드 용량만 약 **1.4테라바이트(TB)**에 달한다. 개인 PC나 단순한 서버로는 실행이 불가능하고, 8개 이상의 Nvidia H100 GPU 또는 2TB 이상의 VRAM을 갖춘 환경이 필요하다.

<div class="article-stats">
<div class="stat">
  <span class="stat-value">2.8T</span>
  <span class="stat-label">전체 파라미터 수</span>
</div>
<div class="stat">
  <span class="stat-value">104B</span>
  <span class="stat-label">추론 시 활성 파라미터</span>
</div>
<div class="stat">
  <span class="stat-value">1M</span>
  <span class="stat-label">컨텍스트 윈도우 (토큰)</span>
</div>
<div class="stat">
  <span class="stat-value">1.4TB</span>
  <span class="stat-label">모델 가중치 다운로드 크기</span>
</div>
</div>

## MoE 아키텍처와 컴퓨트 효율

Kimi K3는 **혼합 전문가(Mixture-of-Experts, MoE)** 아키텍처를 채택했다. 전체 2.8조 파라미터 중 896개의 전문가 레이어가 있으며, 각 추론 요청마다 **16개의 전문가**만 활성화된다. 이 덕분에 실제 추론 시에는 **1040억(104B) 파라미터**만 작동해 연산 비용을 크게 절감할 수 있다.

문샷 AI는 새로운 모델 아키텍처가 이전 세대 K2 대비 **컴퓨트 단위당 2.5배 더 높은 지능**을 제공한다고 밝혔다. 단순히 파라미터 수만 늘린 것이 아니라 설계 효율을 혁신적으로 높였다는 주장이다.

<div class="article-callout tip">
<strong>개발자 활용 팁</strong>: Kimi K3 가중치는 상업적 사용이 가능한 라이선스 하에 공개됐다. 기업은 사내 데이터로 파인튜닝하거나 자체 인프라에서 호스팅해 API 의존도를 낮출 수 있다. 단, 전체 학습 데이터와 학습 파이프라인은 공개되지 않아 완전한 오픈소스는 아니다.
</div>

## 두 가지 버전: K3 Max와 K3 Swarm Max

문샷 AI는 Kimi K3를 두 가지 버전으로 출시했다:

| 버전 | 특화 분야 | 주요 용도 |
|------|-----------|-----------|
| **K3 Max** | 일반 대화, 추론, 코딩 | 챗봇, 코딩 보조, 에이전트 작업 |
| **K3 Swarm Max** | 멀티에이전트 오케스트레이션 | 대규모 소프트웨어 엔지니어링, 연구 협업 |

K3 Swarm Max는 여러 AI 에이전트가 협력하는 복잡한 장기 워크플로우를 위해 설계됐다. 이는 AI 업계 전반이 단순 챗봇에서 자율적인 에이전트 시스템으로 이동하는 흐름을 반영한다.

## 벤치마크 성과: 프론트엔드 코딩 1위, 에이전틱 추론 2위

벤치마크 결과는 인상적이다:

- **Arena.ai 프론트엔드 코드 아레나**: 출시 직후 1위 달성. Claude Fable 5를 제치고 웹 앱 코드 생성 능력에서 선두를 차지했다.
- **AA-Briefcase (Artificial Analysis)**: 에이전틱 지식 작업에서 Elo 점수 **1,543점**으로 2위. Claude Fable 5(1위)에 이어 GPT-5.6 Sol, Claude Sonnet 5, Claude Opus 4.8을 앞섰다.
- **루브릭 통과율**: 51%(Fable 5는 56%)로 최상위권에 근접.

다만 비용 측면에서는 과제가 있다. Artificial Analysis에 따르면 벤치마크 작업당 평균 **$10.57**로, 이전 세대 K2.6 대비 약 10배 높다. 느린 추론 속도와 긴 컨텍스트 처리가 주된 원인이다.

<div class="article-callout info">
<strong>오픈 vs. 클로즈드 AI 논쟁</strong>: Kimi K3 공개는 AI 정책 논쟁과 맞물려 있다. 미국 기업들(OpenAI, Anthropic)은 보안과 오남용 우려로 자사 모델을 비공개로 유지하는 반면, 딥시크·알리바바·문샷 AI 등 중국 기업들은 오픈웨이트 전략으로 글로벌 개발자 커뮤니티 확보에 나서고 있다. Nvidia CEO 젠슨 황을 포함해 OpenAI, Google, AMD 등 50개 이상의 기업이 오픈웨이트 모델 규제 반대 서한에 서명했다.
</div>

<div class="article-keypoints">
<h4>핵심 포인트</h4>
<ul>
  <li>Kimi K3는 역대 최대 오픈웨이트 AI 모델(2.8T 파라미터)로 Hugging Face에서 다운로드 가능</li>
  <li>MoE 아키텍처로 추론 시 104B 파라미터만 활성화, 이전 K2 대비 컴퓨트 효율 2.5배 향상</li>
  <li>1M 토큰 컨텍스트 윈도우 및 네이티브 비주얼 이해 기능 내장</li>
  <li>프론트엔드 코딩 벤치마크 1위, 에이전틱 작업 전반 2위(Claude Fable 5에 이어)</li>
  <li>자체 호스팅에는 H100 GPU 8개 이상 또는 2TB 이상의 VRAM 필요</li>
  <li>미국 정부는 문샷 AI가 Anthropic 모델 증류 및 제한된 Nvidia 하드웨어를 사용했다고 주장</li>
</ul>
</div>

## AI 패권 경쟁의 새로운 전선: 누가 개발자에게 더 많이 열어주나

Kimi K3의 등장은 단순한 성능 경쟁을 넘어선다. 이제 AI 주도권 싸움은 **누가 더 강력한 AI를 더 많은 사람들의 손에 직접 쥐어주느냐**의 문제로 확장되고 있다.

DeepSeek, 알리바바, Z.ai, MiniMax, 문샷 AI 등 중국 AI 기업들은 지난 1년간 추론·코딩·에이전틱 워크로드에서 미국 최고 모델과의 성능 격차를 빠르게 좁혀왔다. 2.8조 파라미터 모델이 누구나 다운로드해 활용할 수 있는 시대가 열리면서, 연구기관·스타트업·클라우드 사업자 모두 새로운 기회를 맞이하고 있다.

불과 1년 전만 해도 상상하기 어려웠던 일이 현실이 됐다. 프론티어급 AI를 운영하기 위한 인프라 장벽은 여전히 높지만, 그 장벽을 넘는 주체의 범위는 분명 넓어지고 있다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://huggingface.co/moonshotai/Kimi-K3" target="_blank" rel="noopener">Moonshot AI 공식 모델 저장소 — moonshotai/Kimi-K3 (Hugging Face)</a><br/>
· <a href="https://thenewstack.io/kimi-k3-open-weights/" target="_blank" rel="noopener">The New Stack — Moonshot opens Kimi K3 weights, but few can run it</a><br/>
</div>
