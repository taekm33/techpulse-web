---
title: "Microsoft Build 2026: 독자 개발 MAI 모델 7종 공개 — MAI-Thinking-1·MAI-Code-1-Flash 포함"
summary: "Microsoft가 Build 2026에서 자체 개발한 MAI 모델 패밀리 7종을 발표했다. 추론 특화 MAI-Thinking-1부터 이미지 생성, 음성, 전사, 코딩 모델까지 멀티모달 풀스택을 한 번에 공개하며 OpenAI 의존도를 줄이는 행보를 보였다."
category: "ai-news"
date: "2026-06-08"
readingTime: 5
tags: ["Microsoft", "MAI", "빌드2026", "MAI-Thinking-1", "GitHub Copilot"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft가 6월 2일 Build 2026에서 MAI-Thinking-1(추론), MAI-Code-1-Flash(코딩), MAI-Image-2.5(이미지), MAI-Voice-2(음성), MAI-Transcribe-1.5(전사) 등 7종의 자체 개발 AI 모델을 공개했다. OpenAI·Anthropic 외에 독자 AI 기술력을 쌓겠다는 신호로 업계가 주목하고 있다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## "Hill-Climbing Machine" — Microsoft AI의 독자 노선 선언

Microsoft AI CEO **Mustafa Suleyman**은 Build 2026 기조연설에서 MAI 패밀리를 '인본주의적 초지능(Humanist Superintelligence)'을 향한 첫 번째 구체적 성과로 소개했다. 이 모델들은 OpenAI 또는 다른 서드파티 모델의 지식 증류(distillation) 없이, 엔터프라이즈 등급의 클린 데이터와 상업적으로 허가된 데이터로 처음부터 학습됐다는 점을 강조했다.

<div class="article-stats">
  <div class="article-stats__item">
    <span class="article-stats__value">7종</span>
    <span class="article-stats__label">신규 MAI 모델 발표</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">35B</span>
    <span class="article-stats__label">MAI-Thinking-1 활성 파라미터</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">43개</span>
    <span class="article-stats__label">MAI-Transcribe-1.5 지원 언어</span>
  </div>
</div>

## MAI 모델 전체 라인업

| 모델 | 모달리티 | 특징 | 상태 |
|------|---------|------|------|
| MAI-Thinking-1 | 텍스트/추론 | 35B 활성파라미터 MoE, 256K 컨텍스트, SWE-Bench Pro 기준 Opus 4.6 수준 | 비공개 프리뷰 |
| MAI-Code-1-Flash | 코딩 | GitHub Copilot·VS Code 전용 최적화 | GA (개인 구독자) |
| MAI-Image-2.5 | 이미지 | 텍스트→이미지 + 이미지 편집, Arena #3 | Foundry 출시 |
| MAI-Image-2.5 Flash | 이미지 | 빠른 추론 변형 | Foundry 출시 |
| MAI-Voice-2 | 음성 | 15개 언어 TTS + 목소리 클로닝 | Azure Speech |
| MAI-Transcribe-1.5 | 전사(STT) | 43개 언어, FLEURS 벤치 #1 | Azure Speech |
| MAI-Voice-2 Flash | 음성 | 빠른 추론 변형 | 출시 예정 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>MAI-Thinking-1 성능은?</strong><br>
MAI-Thinking-1은 35B 활성 파라미터를 갖는 MoE(Mixture of Experts) 구조다. 독립적인 블라인드 평가에서 Claude Sonnet 4.6보다 선호됐으며, SWE-Bench Pro에서 Claude Opus 4.6과 동급이라고 Microsoft는 주장했다. 256K 토큰 컨텍스트를 지원하며 엔터프라이즈 환경에 특화됐다.</div>
</div>

## GitHub Copilot에 바로 녹아든 MAI-Code-1-Flash

**MAI-Code-1-Flash**는 5B 활성 파라미터의 경량 코딩 모델로 GitHub Copilot 개인 사용자 및 VS Code에 즉시 배포됐다. 별도 설정 없이 'Auto' 피커가 자동으로 라우팅하며, 단순 요청에는 간결하게, 복잡한 작업에는 더 많은 추론 예산을 배분하는 'adaptive thinking'이 특징이다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Surface RTX Spark Dev Box</strong><br>
Build 2026에서 함께 발표된 Surface RTX Spark Dev Box는 NVIDIA RTX Spark GPU와 128GB 통합 메모리로 최대 120B 파라미터 LLM을 로컬에서 구동할 수 있다. 1페타플롭 AI 연산을 제공하며 올해 미국에서 출시 예정이다.</div>
</div>

## Microsoft Foundry: 에이전트 개발 원스톱 플랫폼

Build 2026에서 Microsoft는 **Microsoft Foundry**를 에이전트 개발·배포·운영의 통합 플랫폼으로 강화했다.

- **Toolboxes**: MCP 클라이언트용 단일 엔드포인트, 인증·거버넌스 자동 처리
- **Work IQ API**: 6월 16일 GA 예정, Microsoft 365 데이터(메일·캘린더·파일) 에이전트 접근
- **Web IQ**: AI 퍼스트 웹 검색, 차세대 대안 대비 2.5배 빠른 실시간 그라운딩
- **Frontier Tuning**: 기업 컴플라이언스 경계 내에서 RL 기반 모델 커스터마이징

<div class="article-keypoints">
<strong>핵심 요약</strong>
<ul>
  <li>Microsoft가 OpenAI 의존도 낮추며 자체 AI 모델 패밀리 MAI 7종 공개</li>
  <li>MAI-Thinking-1: 35B 활성 파라미터 추론 모델, SWE-Bench Pro에서 Opus 4.6 수준</li>
  <li>MAI-Code-1-Flash: GitHub Copilot·VS Code에 즉시 배포된 경량 코딩 모델</li>
  <li>MAI-Image-2.5: Arena 이미지 생성 #3, 이미지 편집까지 지원</li>
  <li>Microsoft Foundry 에이전트 플랫폼 대규모 업데이트, Work IQ API 6/16 GA 예정</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">MAI 7종 모델 공식 발표 (Microsoft AI)</a><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 상세 소개</a><br>— <a href="https://microsoft.ai/news/introducingmai-code-1-flash/" target="_blank" rel="noopener noreferrer">MAI-Code-1-Flash 상세 소개</a><br>— <a href="https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632" target="_blank" rel="noopener noreferrer">Microsoft Foundry MAI 모델 가격 및 가용성 정보</a></div></div>
