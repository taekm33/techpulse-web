---
title: "Microsoft MAI-Thinking-1: 자체 개발 추론 모델, Opus 4.6과 코딩 성능 동급"
summary: "Microsoft가 Build 2026에서 공개한 첫 번째 자체 추론 모델 MAI-Thinking-1은 35B 활성 파라미터 MoE 구조로 SWE-Bench Pro 53%를 기록해 Claude Opus 4.6 수준에 이르렀으며, 타 연구소로부터의 증류 없이 자체 데이터만으로 훈련됐다."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["Microsoft", "MAIThinking1", "추론AI", "MicrosoftBuild", "엔터프라이즈AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft AI가 <strong>MAI-Thinking-1</strong>을 공개했다. 35B 활성 파라미터(총 약 1T) MoE 추론 모델로 AIME 2025에서 97%, SWE-Bench Pro에서 53.4%를 기록했다. Anthropic·OpenAI 등 타 연구소 데이터를 증류(distillation)하지 않고, 상용 라이선스가 확보된 자체 데이터만 사용한 점이 기업 고객에게 강점이다. 현재 Microsoft Foundry 비공개 프리뷰 중이며 곧 MAI Playground 공개 프리뷰로 확대될 예정이다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Microsoft가 자체 AI 모델을 만드는 이유

Microsoft는 오랫동안 OpenAI와의 파트너십에 의존해 Copilot과 Azure AI 서비스를 구축해왔다. 그러나 Build 2026에서 Mustafa Suleyman Microsoft AI CEO는 "MAI(Microsoft AI) 모델 패밀리"를 발표하며 방향 전환을 공식화했다. 핵심 메시지는 **"Humanist Superintelligence"** — 인간을 대체하는 것이 아니라 돕는 방향으로 설계된 AI다.

MAI-Thinking-1은 그 첫 번째 텍스트 추론 모델이다. Microsoft가 강조하는 핵심 차별점은 **"Zero Distillation"**: OpenAI, Anthropic, Google 등 어느 연구소의 출력 데이터도 훈련에 사용하지 않았다. 대신 자체적으로 구축한 데이터셋과 강화학습(RL) 파이프라인으로만 역량을 쌓아 올렸다. 이는 기업 고객이 저작권·데이터 출처 리스크를 걱정하지 않아도 된다는 의미다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">97%</span>
<span class="article-stats__label">AIME 2025 수학 벤치마크</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">53.4%</span>
<span class="article-stats__label">SWE-Bench Pro (소프트웨어 엔지니어링)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">1.4×</span>
<span class="article-stats__label">Maia 200 칩 대비 GB-200 추가 효율 향상</span>
</div>
</div>

## 모델 사양과 아키텍처

MAI-Thinking-1은 **MoE(Mixture-of-Experts)** 아키텍처를 채용한다.

- **활성 파라미터**: 35B
- **총 파라미터**: 약 1T (희소 MoE 구조)
- **컨텍스트 윈도우**: 256K 토큰
- **추론(inference) 풋프린트**: 중간 크기 클래스에서 훨씬 큰 모델과 경쟁

희소 MoE 구조 덕분에 추론 비용이 같은 성능대 대형 모델보다 낮다. Microsoft는 내부 비교에서 MAI 모델을 McKinsey 과제에 파인튜닝한 결과, GPT-5.5 대비 최고 승률을 기록하면서 비용은 **10배 절감**됐다고 밝혔다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>MAI 모델 패밀리 전체 라인업</strong><br>
Build 2026에서 함께 공개된 7개 모델: MAI Image 2.5 / MAI Image 2.5 Flash (이미지 생성), MAI Transcribe 1.5 (음성→텍스트, 43개 언어), MAI Voice 2 / MAI Voice 2 Flash (음성 합성), <strong>MAI Thinking 1</strong> (추론), MAI Code 1 Flash (코드, 5B 파라미터 경량). 모두 Microsoft Foundry를 통해 순차 제공 예정이다.
</div>
</div>

## 벤치마크 비교

| 모델 | SWE-Bench Pro | AIME 2025 | 파라미터 (활성) |
|------|--------------|-----------|----------------|
| MAI-Thinking-1 | 53.4% | 97.0% | 35B |
| Claude Opus 4.6 | ~53% | 비공개 | 비공개 |
| Claude Sonnet 4.6 | 낮음 | 비공개 | 비공개 |
| MAI Code 1 Flash | 51% | - | 5B |

MAI-Thinking-1은 동급 모델 대비 최고 수준의 수학·코딩 벤치마크 성능을 보이면서, 추론 비용은 훨씬 큰 모델과 비교 가능한 수준이다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>엔터프라이즈 보안 특징</strong><br>
MAI 모델 전체에는 ▲무단 복제 방지를 위한 음성 워터마킹 ▲저작권 보호 ▲강화학습 루프에서 과도한 거절과 유해 컴플라이언스를 동시에 결함으로 취급하는 안전 설계가 내장됐다. 상세 기술 보고서도 공개되었다.
</div>
</div>

## 자체 칩과의 공동 최적화: Maia 200

MAI-Thinking-1은 Microsoft의 자체 AI 칩 **Maia 200**에 최적화돼 있다. Microsoft에 따르면 GB-200 대비 **성능 1.4배, 와트당 처리량** 추가 향상을 달성했다. 모델과 실리콘을 공동 설계(co-design)함으로써 클라우드 규모에서 경쟁력 있는 비용 효율을 노린다.

앞으로 MAI 모델들은 Microsoft의 차세대 AI PC 플랫폼 **N1X**에도 탑재되어 온디바이스 추론 성능을 끌어올릴 계획이다.

## 전망: Microsoft의 AI 스택 독립

MAI-Thinking-1 출시는 단순한 신모델 발표가 아니다. Microsoft가 **Azure + 자체 모델 + 자체 칩**을 묶어 OpenAI 의존도를 줄이는 수직 통합 전략의 핵심 단계다. 기업 고객에게는 "MAI 모델만 사용하면 데이터가 타 연구소로 넘어가지 않는다"는 보증이 강력한 셀링 포인트가 된다. 오픈소스 가중치 공개 여부는 아직 확정되지 않았다.

<div class="article-keypoints">
<strong>핵심 요약</strong>
<ul>
<li>MAI-Thinking-1은 Microsoft 최초의 자체 개발 추론 모델로, SWE-Bench Pro 53.4%로 Claude Opus 4.6과 동급이다.</li>
<li>타 연구소 출력 증류 없이 자체 데이터만 사용 — 기업 저작권 리스크 최소화.</li>
<li>35B 활성 파라미터 MoE 구조로 훨씬 큰 모델 대비 낮은 추론 비용.</li>
<li>AIME 2025 97%, 수학·추론 역량이 업계 최상위권에 근접.</li>
<li>현재 Microsoft Foundry 비공개 프리뷰, 곧 MAI Playground 공개 프리뷰 예정.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">Microsoft AI 공식 발표: MAI-Thinking-1 소개</a><br>— <a href="https://microsoft.ai/models/mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 모델 페이지 및 Foundry 접근 신청</a><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">7개 MAI 모델 전체 기술 보고서</a></div></div>
