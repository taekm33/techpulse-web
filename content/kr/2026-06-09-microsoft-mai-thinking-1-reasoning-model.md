---
title: "Microsoft MAI-Thinking-1 공개 — 자체 개발 추론 모델, SWE-Bench·AIME에서 최상위권 성능"
summary: "Microsoft AI가 증류 없이 자체 데이터와 Maia 200 칩으로 훈련한 첫 번째 추론 모델 MAI-Thinking-1을 공개했다. 35B 활성 파라미터 MoE 아키텍처로 SWE-Bench Pro 53%를 달성해 Claude Opus 4.6과 어깨를 나란히 한다."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["Microsoft", "MAI-Thinking-1", "추론모델", "AI", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft AI가 Microsoft Build 2026에서 MAI-Thinking-1을 포함한 7개 MAI 모델 패밀리를 공개했다. MAI-Thinking-1은 35B 활성 파라미터 MoE 모델로 AIME 2025에서 97%, SWE-Bench Pro에서 53%를 기록하며 타사 데이터 증류 없이 자체 역량만으로 프런티어급 추론 성능을 입증했다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## MAI-Thinking-1이란?

2026년 6월 2일, Microsoft AI의 CEO Mustafa Suleyman은 Microsoft Build 2026 키노트에서 7개의 신규 MAI 모델 패밀리를 공개했다. 그 중심에는 **MAI-Thinking-1** — Microsoft AI의 첫 번째 독자 추론 모델 — 이 있다.

MAI-Thinking-1의 핵심 특징은 단 하나다: **완전한 자체 개발**. 타사 모델로부터 데이터를 증류(distillation)하지 않고, Microsoft의 자체 클린 데이터셋과 보상 시스템, 그리고 자체 AI 칩 **Maia 200**으로 처음부터 훈련되었다. 6월 8일 업데이트된 발표 자료에 따르면, Maia 200과 GB-200(NVIDIA)를 직접 벤치마크로 최적화한 첫 모델이기도 하다.

<div class="article-stats">
<strong>주요 수치</strong>
<ul>
  <li>⚙️ <strong>35B 활성 파라미터</strong> (MoE 총 ~1T 파라미터)</li>
  <li>📐 <strong>256K 컨텍스트 윈도우</strong> (600페이지 문서 분량)</li>
  <li>🏆 <strong>AIME 2025: 97.0%</strong> · AIME 2026: 94.5%</li>
  <li>💻 <strong>SWE-Bench Pro: 53%</strong> (Claude Opus 4.6과 동등)</li>
  <li>👥 <strong>Surge 인간 평가</strong>: Sonnet 4.6 대비 선호도 우위</li>
</ul>
</div>

## 아키텍처와 훈련 방식

MAI-Thinking-1은 **Sparse Mixture-of-Experts(MoE)** 아키텍처를 채택한다. 총 파라미터는 약 1조(~1T)이지만, 추론 시에는 35B만 활성화되어 훨씬 큰 모델과 경쟁할 수 있는 비용 효율을 확보했다.

훈련 파이프라인의 특이점은 투명성과 청결성에 있다. Microsoft는 "우리의 데이터셋은 깨끗하고, 추적 가능하며, 엔터프라이즈 수준"이라고 명시했다. 이는 불투명한 데이터 파이프라인에 대한 업계의 우려를 직접 겨냥한 포지셔닝이다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 팁</strong><br>MAI-Thinking-1은 Chat Completions API와 호환되며 function calling을 지원한다. Azure Foundry Private Preview를 통해 기업용 배포가 가능하고, MAI Playground 퍼블릭 프리뷰가 곧 출시될 예정이다.</div>
</div>

## 경쟁 모델 비교

| 모델 | SWE-Bench Pro | AIME 2025 | 활성 파라미터 | 컨텍스트 |
|------|:---:|:---:|:---:|:---:|
| MAI-Thinking-1 | **53%** | **97.0%** | 35B | 256K |
| Claude Opus 4.6 | ~53% | — | 비공개 | — |
| Claude Sonnet 4.6 | — | — | 비공개 | — |
| GPT-4.5 | — | — | 비공개 | 128K |

SWE-Bench Pro는 실제 GitHub 이슈 해결 능력을 측정하는 가장 까다로운 코딩 벤치마크 중 하나다. MAI-Thinking-1이 이 벤치마크에서 Claude Opus 4.6과 동등한 성능을 보인다는 점은 Microsoft AI의 독자 훈련 역량이 상당한 수준에 도달했음을 시사한다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>MAI 모델 패밀리 전체 라인업</strong><br>Build 2026에서 공개된 7개 모델: MAI-Thinking-1(추론), MAI-Code-1-Flash(코딩), MAI-Image-2.5 / 2.5-Flash(이미지), MAI-Voice-2 / 2-Flash(음성), MAI-Transcribe-1.5(전사). Microsoft AI는 이를 "인간 중심 초지능(Humanist Superintelligence)"을 향한 로드맵의 첫 구체적 산물로 규정했다.</div>
</div>

## 엔터프라이즈 포지셔닝

MAI-Thinking-1이 기업 고객에게 매력적인 이유는 성능만이 아니다. Microsoft Foundry와의 네이티브 통합을 통해 Azure의 기존 보안·컴플라이언스·거버넌스 워크플로를 그대로 유지할 수 있다. 함수 호출(function calling), 멀티레이어 지시 준수, 엔터프라이즈 스타일 기본 응답 등이 기업 운용 환경에 최적화되어 있다.

또한 Microsoft는 이 모델이 자사의 Maia 200 칩에서 최적화되었음을 강조했다. AI 칩 공급망에 대한 의존도를 줄이는 동시에, 자체 칩과 자체 모델의 결합으로 추론 비용을 낮출 수 있는 길을 열었다는 점에서 장기적 전략 가치가 크다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>MAI-Thinking-1은 타사 증류 없이 Microsoft 자체 데이터·칩으로 훈련된 최초 독자 추론 모델</li>
  <li>35B 활성 MoE 구조로 SWE-Bench Pro 53%, AIME 2025 97% 달성 — 훨씬 큰 모델과 경쟁</li>
  <li>256K 컨텍스트, function calling, Chat Completions API 호환으로 즉시 기업 적용 가능</li>
  <li>Microsoft Foundry Private Preview로 공개, MAI Playground 퍼블릭 프리뷰 예정</li>
  <li>Maia 200 칩 기반 최적화로 NVIDIA 의존도 감소 및 자체 AI 스택 완성도 강화</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 공식 발표 (Microsoft AI)</a><br>— <a href="https://microsoft.ai/models/mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 모델 페이지 및 Foundry 프리뷰 신청</a><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">7개 MAI 모델 패밀리 전체 소개 블로그</a></div></div>
