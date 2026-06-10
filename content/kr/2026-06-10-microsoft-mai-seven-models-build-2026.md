---
title: "Microsoft Build 2026: MAI 7개 신규 모델 공개 — 자체 제작 AI로 OpenAI·Anthropic에 도전장"
summary: "Microsoft AI가 Build 2026에서 추론·코딩·이미지·음성·전사 등 7개 자체 제작 AI 모델을 한꺼번에 공개했다. 소형 추론 모델 MAI-Thinking-1은 SWE-Bench Pro에서 Claude Opus 4.6과 동급 성능을 보여줬다."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Microsoft", "MAI", "AI모델", "MAI-Thinking-1", "Build2026"]
---

<div class="article-tldr">
<strong>한눈에 보기:</strong> Microsoft AI가 Build 2026에서 MAI-Thinking-1(추론), MAI-Code-1-Flash(코딩), MAI-Image-2.5(이미지), MAI-Transcribe-1.5(전사), MAI-Voice-2(음성) 등 7개 자체 개발 모델을 공개했다. 제3자 증류 없이 자체 데이터로 학습하며 "인간주의적 초지능(Humanist Superintelligence)"을 비전으로 제시했다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Microsoft, 자체 AI 왕국 건설에 나서다

Microsoft가 OpenAI에 수백억 달러를 투자하며 AI 생태계를 이끌어온 지 수년, 이제 스스로 프론티어 모델 개발에 나섰다. Build 2026 무대에서 Mustafa Suleiman Microsoft AI CEO는 7개의 MAI(Microsoft AI) 모델을 한꺼번에 공개했다. 외부 모델 증류 없이 Microsoft가 자체 데이터·학습 파이프라인으로 만든 이 모델들은 "경쟁사 대비 더 나은 가격 대비 성능"을 내세웠다.

<div class="article-stats">
<strong>📊 주요 수치</strong>
<ul>
<li>MAI-Thinking-1 활성 파라미터: <strong>35B</strong> (MoE, 총 ~1T)</li>
<li>SWE-Bench Pro 점수: <strong>53%</strong> (Claude Opus 4.6 동급)</li>
<li>AIME 2025 점수: <strong>97.0%</strong></li>
<li>MAI-Transcribe-1.5 속도: 경쟁 모델 대비 <strong>5배 빠름</strong></li>
<li>MAI-Code-1-Flash 활성 파라미터: <strong>5B</strong></li>
</ul>
</div>

## 7가지 신모델 한눈에

| 모델명 | 카테고리 | 특징 |
|---|---|---|
| MAI-Thinking-1 | 추론·텍스트 | 35B 활성, 256K 컨텍스트, SWE-Bench Pro 최고 수준 |
| MAI-Code-1-Flash | 코딩 | 5B 활성, GitHub Copilot·VS Code 최적화 |
| MAI-Image-2.5 | 이미지 생성·편집 | Arena.ai 2위, 이미지→이미지 편집 지원 |
| MAI-Image-2.5-Flash | 이미지(경량) | 빠르고 비용 효율적인 플래시 버전 |
| MAI-Transcribe-1.5 | 음성 전사 | 43개 언어, 분야별 용어 지원, 경쟁 대비 5배 빠름 |
| MAI-Voice-2 | 음성 합성 | 15개 언어, 짧은 샘플로 음성 복제 가능 |
| MAI-Voice-2-Flash | 음성(경량) | 저비용·초효율 플래시 버전 (출시 예정) |

## MAI-Thinking-1: Microsoft의 첫 번째 LLM

MAI-Thinking-1은 Microsoft AI의 첫 대형 언어 모델로, 추론·수학·소프트웨어 엔지니어링에 특화됐다. MoE(Mixture-of-Experts) 구조로 35B 활성 파라미터를 갖지만 총 파라미터는 ~1조 수준이다. 256K 토큰의 긴 컨텍스트 창을 지원하며, 독립 인간 평가단에서 Sonnet 4.6보다 높은 선호도를 보였다. AIME 2025에서 97.0%, SWE-Bench Pro에서 53%를 기록해 동급 무게 클래스에서 가장 강한 모델 중 하나로 자리매김했다. 가격은 텍스트 입력 100만 토큰당 $5, 이미지 입력은 $8로 책정됐다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 팁</strong><br>MAI-Thinking-1은 현재 Microsoft Foundry에서 프라이빗 프리뷰로 제공된다. 접근 신청 후 MAI Playground에서 공개 프리뷰가 제공될 예정이다. MAI-Code-1-Flash는 GitHub Copilot CLI와 VS Code에 깊이 통합돼 있어 코드 에이전트 작업 효율을 크게 향상시킨다. 모델들은 OpenRouter, Fireworks, Baseten에서도 제공될 예정이다.</div>
</div>

## 코딩 에이전트부터 의료 AI까지

MAI-Code-1-Flash는 5B 활성 파라미터의 소형 모델이지만 GitHub Copilot과 VS Code에 최적화되어 Claude Haiku와 동급의 코딩 성능을 저렴한 비용에 제공한다. MAI-Image-2.5는 텍스트→이미지 생성과 이미지→이미지 편집을 모두 지원하며 Arena.ai 이미지 생성 모델 패밀리 2위에 올랐다.

또한 Microsoft는 이날 Mayo Clinic과 의료 특화 프론티어 AI 모델을 공동 개발한다고 발표했다. Mayo Clinic의 임상 전문성과 비식별화된 임상 데이터, Microsoft의 AI 역량을 결합한 이 모델은 의료 현장의 AI 활용을 한 단계 끌어올릴 것으로 기대된다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>가용성 현황</strong><br>MAI-Thinking-1: Microsoft Foundry 프라이빗 프리뷰 (접근 신청 가능). MAI-Image-2.5, MAI-Transcribe-1.5: Foundry에서 즉시 이용 가능. MAI-Voice-2-Flash: 곧 출시 예정. 모델 파인튜닝은 처음으로 개발자에게도 개방된다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Microsoft가 외부 증류 없이 자체 데이터로 7개 프론티어 AI 모델 개발</li>
<li>MAI-Thinking-1은 SWE-Bench Pro에서 Claude Opus 4.6과 동급 성능, AIME 2025 97.0%</li>
<li>코딩·이미지·음성·전사까지 완전한 멀티모달 라인업으로 AI 생태계 확장</li>
<li>개발자가 직접 모델 가중치 파인튜닝 가능 — 처음으로 개방</li>
<li>Mayo Clinic과 의료 특화 프론티어 AI 공동 개발 발표</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Microsoft AI: 7개 MAI 모델 발표 공식 블로그</a><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 공식 소개 페이지</a><br>— <a href="https://microsoft.ai/models/mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 모델 스펙 및 액세스 신청</a><br>— <a href="https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632" target="_blank" rel="noopener noreferrer">Azure AI Foundry: MAI 모델 가용성 안내</a></div></div>
