---
title: "Microsoft, 자체 개발 AI 7종 공개 — MAI-Thinking-1부터 MAI Code-1-Flash까지"
summary: "Microsoft AI가 Build 2026에서 추론·이미지·음성·전사·코딩 모델을 망라한 MAI 패밀리 7종을 발표했다. 자체 데이터로 처음부터 학습한 MAI-Thinking-1은 SWE-Bench Pro에서 Claude Opus 4.6에 견줄 만한 성능을 기록했으며, Microsoft 자체 칩 Maia 200에서도 구동된다."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["Microsoft", "MAI", "AI모델", "추론AI", "MicrosoftBuild"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft AI가 Build 2026에서 <strong>MAI 패밀리 7종</strong>을 공개했다. 추론 모델 MAI-Thinking-1은 35B 활성 파라미터의 MoE 구조로 AIME 2025에서 97%, SWE-Bench Pro에서 53%를 달성했다. 외부 모델 증류 없이 자체 데이터만으로 학습했으며, 사내 Maia 200 칩에서 GB-200 대비 1.4배 전력 효율을 달성한다고 밝혔다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Microsoft가 AI 모델 자체 개발에 나선 이유

OpenAI와의 독점적 협력 관계를 유지해 온 Microsoft가 Build 2026을 통해 처음으로 대규모 자체 개발 모델 패밀리를 선보였다. Mustafa Suleyman Microsoft AI CEO는 이를 **"Humanist Superintelligence(인본주의적 초지능)"** 로 향하는 여정의 첫 발이라고 설명했다. 사람을 대체하는 AI가 아니라, 사람의 역량을 증폭시키는 AI를 만들겠다는 철학적 전제가 깔려 있다.

핵심은 **Hill-Climbing Machine** 이라는 개념이다. 데이터·보상·환경·컴퓨트를 지속적으로 개선해 모델 역량이 체계적으로 향상되도록 설계한 공동 학습 파이프라인으로, 단발성 모델 출시가 아닌 지속적인 역량 상승을 목표로 삼는다.

## MAI 패밀리 7종 상세

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">7종</span>
<span class="article-stats__label">동시 공개 모델 수</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">97%</span>
<span class="article-stats__label">MAI-Thinking-1 AIME 2025 정확도</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">53%</span>
<span class="article-stats__label">SWE-Bench Pro 점수 (Claude Opus 4.6 수준)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">1.4×</span>
<span class="article-stats__label">Maia 200 전력 효율 (vs NVIDIA GB-200)</span>
</div>
</div>

| 모델 | 범주 | 주요 특징 |
|------|------|-----------|
| MAI-Thinking-1 | 추론 | 35B 활성 파라미터 MoE, 256k 컨텍스트, SWE-Bench Pro 53% |
| MAI-Code-1-Flash | 코딩 | 5B 활성 파라미터, GitHub Copilot 통합 최적화 |
| MAI-Image-2.5 | 이미지 | 텍스트→이미지 생성 및 편집, Flash 변형 포함 |
| MAI-Image-2.5-Flash | 이미지(경량) | Arena 점수 Nano Banana Pro 초과 |
| MAI-Transcribe-1.5 | 전사 | 세계 최고 정확도, 기존 대비 5배 빠른 속도, 43개 언어 |
| MAI-Voice-2 | 음성 | 15개 언어 자연스러운 음성 합성, 짧은 샘플로 목소리 적응 |
| MAI-Voice-2-Flash | 음성(경량) | 고속·저비용 MAI-Voice-2 변형 (출시 예정) |

## MAI-Thinking-1 기술 상세

MAI-Thinking-1은 전체 파라미터 약 1조 개 중 35B가 활성화되는 **Sparse Mixture of Experts** 구조를 채택해, 훨씬 큰 모델과 비슷한 추론 성능을 훨씬 낮은 추론 비용으로 달성한다. 256k 토큰 컨텍스트 윈도우를 지원해 긴 코드베이스 분석이나 문서 이해에도 적합하다.

학습 방식에서 가장 두드러지는 점은 **제3자 모델 증류를 완전히 배제**했다는 것이다. OpenAI나 Anthropic 같은 외부 모델의 출력물을 학습 데이터로 사용하지 않고, 자체 수집한 추적 가능하고 엔터프라이즈급 품질의 데이터만 사용했다. Surge의 전문 평가자 1,276개 태스크 블라인드 평가에서 MAI-Thinking-1은 Claude Sonnet 4.6보다 선호도가 높았다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 접근 방법</strong><br>MAI-Thinking-1은 현재 Microsoft Foundry 프라이빗 프리뷰로 제공되며, 곧 MAI Playground에서 퍼블릭 프리뷰가 시작된다. MAI-Code-1-Flash는 GitHub Copilot에 통합되어 VS Code 및 Microsoft 스택 전반에서 사용 가능하다.</div>
</div>

## Mayo Clinic 협업과 의료 AI

MAI 패밀리 발표와 함께 Microsoft는 Mayo Clinic과 공동으로 **의료 특화 프런티어 AI 모델**을 개발한다고 밝혔다. Mayo Clinic의 익명화된 임상 데이터와 종단적 인사이트를 Microsoft의 기반 AI 기술과 결합해, 임상 의사결정 지원과 진단 보조에 특화된 모델을 만드는 것이 목표다.

<div class="article-callout info">
<div class="article-callout__icon">📌</div>
<div class="article-callout__body"><strong>기업 채택 포인트</strong><br>MAI 모델은 <strong>Frontier Tuning</strong>을 통해 기업이 자체 데이터로 모델 가중치를 직접 조정할 수 있다. 동일한 모델을 Azure, 온프레미스, Windows 등 다양한 환경에 배포할 수 있어 하이브리드 클라우드 전략을 구사하는 기업에 유리하다. Majorana 2 양자 칩과의 장기 통합 계획도 함께 발표됐다.</div>
</div>

## 경쟁 구도 변화

Microsoft의 자체 모델 공개는 AI 모델 시장의 경쟁 지형을 바꾼다. OpenAI·Google·Anthropic 세 강자 위주였던 대형 언어 모델 시장에 Microsoft라는 거대 자본과 엔터프라이즈 채널을 갖춘 새 플레이어가 참전한 셈이다. 특히 GitHub Copilot에 최적화된 MAI-Code-1-Flash는 기존 Copilot 사용자들의 코딩 경험을 직접 바꿀 수 있어, 수억 명의 개발자 기반을 가진 GitHub 생태계에서의 파급력이 클 것으로 예상된다.

<div class="article-keypoints">
<strong>핵심 정리</strong>
<ul>
<li>Microsoft가 Build 2026에서 추론·코딩·이미지·음성·전사 모델 7종으로 구성된 MAI 패밀리를 발표</li>
<li>MAI-Thinking-1은 외부 모델 증류 없이 자체 데이터만으로 학습, AIME 2025 97%·SWE-Bench Pro 53% 달성</li>
<li>자사 Maia 200 칩에서 NVIDIA GB-200 대비 전력 효율 1.4배 향상</li>
<li>MAI-Code-1-Flash는 GitHub Copilot에 통합, MAI-Thinking-1은 Microsoft Foundry 프라이빗 프리뷰 제공 중</li>
<li>Mayo Clinic과 의료 특화 프런티어 모델 공동 개발 발표</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 공식 발표 (Microsoft AI)</a><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">MAI 패밀리 7종 전체 발표 블로그</a><br>— <a href="https://azure.microsoft.com/en-us/products/ai-foundry/" target="_blank" rel="noopener noreferrer">Microsoft AI Foundry — MAI 모델 접근 경로</a></div></div>
