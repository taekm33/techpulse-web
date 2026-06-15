---
title: "Microsoft, Build 2026서 자체 개발 AI 모델 7종 공개 — OpenAI 의존 탈피 선언"
summary: "Microsoft AI가 Build 2026에서 이미지·음성·전사·추론·코딩 모델을 포함한 MAI 7종 패밀리를 발표했다. 자사 데이터로만 학습한 이 모델들은 GitHub Copilot, VS Code에 즉시 통합되며 MS의 AI 스택 독립을 알리는 신호탄이 됐다."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["microsoft", "mai", "build2026", "ai모델", "githubcopilot"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft AI가 Build 2026에서 <strong>MAI 모델 7종</strong>을 한 번에 공개했다. 이미지(MAI-Image-2.5), 음성(MAI-Voice-2), 전사(MAI-Transcribe-1.5), 추론(MAI-Thinking-1), 코딩(MAI-Code-1-Flash)이 핵심이며, OpenAI 또는 제3자 모델 데이터 없이 Microsoft 자체 데이터로만 학습됐다. MAI-Code-1-Flash는 GitHub Copilot과 VS Code에 즉시 배포됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## "Humanist Superintelligence" — MS의 새 선언

Microsoft AI CEO Mustafa Suleyman은 Build 2026 키노트에서 "우리의 목표는 **인간주의적 초지능(Humanist Superintelligence)**"이라고 선언했다. 사람을 대체하는 AI가 아니라, 사람을 섬기도록 설계된 AI를 만들겠다는 포부다. 그리고 그 첫 번째 구체적 결과물이 MAI 패밀리다.

업계가 더 주목한 것은 기술보다 철학이다. Suleyman은 "우리는 제3자 모델로부터 증류(Distillation)하지 않는다. 우리 데이터는 깨끗하고, 추적 가능하며, 엔터프라이즈급"이라고 강조했다. OpenAI의 GPT 시리즈에 사실상 의존해 온 Microsoft가 자체 AI 스택 구축을 공식화한 것이다.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">7종</span>
<span class="article-stats__label">동시 발표 모델 수</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">43개</span>
<span class="article-stats__label">MAI-Transcribe-1.5 지원 언어</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">51.2%</span>
<span class="article-stats__label">MAI-Code-1-Flash SWE-Bench Pro 점수</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">5B</span>
<span class="article-stats__label">MAI-Code-1-Flash 활성 파라미터</span>
</div>
</div>

## 7종 모델 완전 분석

### MAI-Image-2.5 & Flash
텍스트→이미지 생성과 이미지→이미지 편집 모두 지원하는 멀티모달 이미지 모델이다. Arena 리더보드에서 이미지 편집 기준 **2위**를 기록, Google의 Nano Banana Pro를 제쳤다. Flash 변형은 프로덕션 규모에서의 비용·속도 효율을 극대화한다. PowerPoint와 OneDrive에 즉시 통합됐으며, Microsoft Foundry를 통해 개발자에게도 개방된다.

### MAI-Transcribe-1.5
FLEURS 다국어 벤치마크에서 43개 언어 전반에 걸쳐 **최고 WER(단어 오류율)**을 달성한 전사 모델이다. 동급 정확도 모델 대비 최대 **5배 빠른** 처리 속도를 자랑하며, 1시간 분량 오디오를 15초 이내에 전사한다. 도메인 특화 키워드를 입력하면 WER을 최대 30% 추가 개선하는 **Keyword Biasing** 기능도 탑재됐다. Copilot, Teams, GitHub, Dynamics 365 Contact Centre에 통합 중이다.

### MAI-Voice-2 & Flash
15개 언어에서 고품질 자연어 음성을 생성하며, 짧은 샘플만으로 화자 목소리에 적응하는 **보이스 클로닝** 기능을 갖췄다. Flash 변형은 초저지연 실시간 음성 에이전트 구축을 위한 최적화 버전이다.

### MAI-Thinking-1
Microsoft AI 최초의 **추론 전용** 모델이다. AIME 2025에서 97.0%, AIME 2026에서 94.5%를 기록하며 동급 모델 대비 강력한 수학·과학 추론 능력을 보여줬다. SWE 작업에서도 블라인드 인간 평가에서 Claude Sonnet 4.6 대비 우위를 기록했다. Microsoft Foundry에서 비공개 프리뷰로 먼저 제공된다.

### MAI-Code-1-Flash
5B 활성 파라미터로 **SWE-Bench Pro에서 51.2%**를 달성한 소형 고성능 코딩 모델이다. GitHub Copilot CLI와 VS Code에 최적화됐으며, Claude Haiku 4.5 대비 SWE-Bench Pro에서 16포인트 앞선다. 동일한 작업을 SWE-Bench Verified 기준 60% 더 적은 토큰으로 처리해 레이턴시와 비용을 동시에 낮춘다. **아답티브 솔루션 길이 제어(Adaptive Solution Length Control)** 기술로 간단한 요청은 간결하게, 복잡한 요청에는 충분한 추론 예산을 자동 배분한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 접근 방법</strong><br>MAI 모델들은 <strong>Microsoft Foundry</strong>를 통해 접근할 수 있으며, OpenRouter, Fireworks AI, Baseten에서도 제공된다. 특이하게도 Foundry를 통해 <strong>모델 가중치를 직접 파인튜닝</strong>하는 것이 처음으로 허용된다. MAI-Code-1-Flash는 VS Code GitHub Copilot에서 모델 피커를 통해 즉시 선택 가능하다.</div>
</div>

## MAI 패밀리 한눈에 보기

| 모델 | 카테고리 | 주요 수치 | 주요 제품 통합 |
|------|---------|---------|-------------|
| MAI-Image-2.5 | 이미지 생성·편집 | Arena 이미지 편집 2위 | PowerPoint, OneDrive |
| MAI-Image-2.5-Flash | 이미지 (경량) | 고효율 변형 | Foundry |
| MAI-Transcribe-1.5 | 음성→텍스트 | 43개 언어 1위 WER | Copilot, Teams, GitHub |
| MAI-Voice-2 | 텍스트→음성 | 15개 언어 | Copilot |
| MAI-Voice-2-Flash | 음성 (경량) | 초저지연 | 음성 에이전트 |
| MAI-Thinking-1 | 추론 | AIME 2026 94.5% | Foundry (비공개 프리뷰) |
| MAI-Code-1-Flash | 코딩 | SWE-Bench Pro 51.2% | GitHub Copilot, VS Code |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Mayo Clinic과의 의료 AI 공동 개발</strong><br>Suleyman은 MAI 발표와 함께 Microsoft와 Mayo Clinic이 공동으로 의료 특화 프론티어 AI 모델을 개발한다고 발표했다. Mayo Clinic의 익명화된 임상 데이터와 종단 의학적 인사이트를 Microsoft의 AI 역량과 결합하는 이 협력은 헬스케어 영역에서 MAI의 첫 번째 핵심 도메인 적용 사례가 된다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>Microsoft AI가 Build 2026에서 이미지·전사·음성·추론·코딩 7종 MAI 모델을 동시 공개했다.</li>
<li>OpenAI 등 제3자 모델 데이터 없이 MS 자체 데이터로만 학습 — AI 스택 독립을 공식화했다.</li>
<li>MAI-Code-1-Flash는 5B 파라미터로 SWE-Bench Pro 51.2%, VS Code·GitHub Copilot에 즉시 배포.</li>
<li>MAI-Transcribe-1.5는 43개 언어 최고 WER 달성, 경쟁 모델 대비 5배 빠른 처리 속도.</li>
<li>Foundry, OpenRouter, Fireworks, Baseten에서 제공되며 최초로 가중치 직접 파인튜닝 허용.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Microsoft AI 공식 발표 — MAI 7종 모델 상세 사양 및 비전</a><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 소개 — 추론 모델 벤치마크 및 Foundry 접근 방법</a><br>— <a href="https://microsoft.ai/news/introducingmai-code-1-flash/" target="_blank" rel="noopener noreferrer">MAI-Code-1-Flash 소개 — GitHub Copilot 통합 및 SWE-Bench 상세 결과</a></div></div>
