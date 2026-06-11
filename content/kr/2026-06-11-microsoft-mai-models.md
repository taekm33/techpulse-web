---
title: "Microsoft, 자체 개발 AI 모델 7종 공개 — MAI-Thinking-1부터 MAI-Code-1-Flash까지"
summary: "Microsoft가 Microsoft Build 2026에서 추론·코딩·이미지·음성·전사 분야를 아우르는 7종의 자체 개발 AI 모델 'MAI 패밀리'를 발표했습니다. OpenAI 의존에서 벗어나 독자 AI 역량을 구축하겠다는 선언입니다."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["Microsoft", "MAI", "MAI-Thinking-1", "MAI-Code-1-Flash", "Microsoft Build 2026"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft가 2026년 6월 2일 Microsoft Build에서 자체 개발 AI 모델 7종을 공개했습니다. 추론 모델 <strong>MAI-Thinking-1</strong>(SWE-Bench Pro에서 Claude Opus 4.6과 동급), 코딩 모델 <strong>MAI-Code-1-Flash</strong>(GitHub Copilot 기본 탑재), 이미지·음성·전사 모델까지 한꺼번에 등장했습니다. 타 회사 모델 증류 없이 자체 데이터로 처음부터 학습한 것이 핵심입니다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## OpenAI 의존에서 자립으로

수년간 OpenAI와의 파트너십에 크게 의존해온 Microsoft가 독자 AI 역량 구축의 첫 신호탄을 쐈습니다. Microsoft AI CEO Mustafa Suleyman은 Microsoft Build 2026 기조연설에서 "우리의 목표는 **인본주의적 초지능(Humanist Superintelligence)**"이라며, 오늘 발표하는 7개 모델이 그 여정의 첫걸음이라고 밝혔습니다.

모든 MAI 모델은 타사 모델에서 지식 증류(Distillation)를 하지 않고, 자체적으로 수집·라이선스한 데이터만으로 학습했다는 점을 Microsoft는 강조합니다.

<div class="article-stats">
  <div class="stat-item"><span class="stat-number">7종</span><span class="stat-label">한 번에 발표된 MAI 자체 개발 AI 모델 수</span></div>
  <div class="stat-item"><span class="stat-number">97%</span><span class="stat-label">MAI-Thinking-1의 AIME 2025 정확도</span></div>
  <div class="stat-item"><span class="stat-number">10×</span><span class="stat-label">Frontier Tuning 적용 시 비용 절감 사례</span></div>
</div>

## 7종 모델 상세

### MAI-Thinking-1 — 플래그십 추론 모델
- **규모**: 35B 활성 파라미터, 약 1T 총 파라미터의 희소 혼합 전문가(MoE) 구조
- **성능**: AIME 2025 97%, SWE-Bench Pro 53% (Claude Opus 4.6과 동급)
- **컨텍스트**: 256K 토큰 윈도우 (약 600페이지 문서)
- **특징**: Surge의 전문 평가자 1,276개 태스크 평가에서 Claude Sonnet 4.6보다 선호도 높음
- **가용성**: Microsoft Foundry 프라이빗 프리뷰 시작

### MAI-Code-1-Flash — 추론 효율 특화 코딩 모델
- **규모**: 5B 활성 파라미터 (Claude Haiku급 성능, 더 낮은 비용)
- **특징**: GitHub Copilot VS Code에 즉시 탑재, Adaptive Solution Length Control로 간단한 요청엔 짧게, 복잡한 요청엔 깊게 응답
- **효율**: 동일 문제 해결 시 최대 60% 적은 토큰 사용
- **가용성**: VS Code GitHub Copilot 개인 사용자에게 순차 배포 중

### 기타 5종
| 모델 | 분야 | 주요 특징 |
|------|------|----------|
| MAI-Image-2.5 | 이미지 생성·편집 | Arena 1위권, Flash 변형도 제공 |
| MAI-Image-2.5-Flash | 이미지(경량) | 초고속·저비용 이미지 생성 |
| MAI-Transcribe-1.5 | 음성 전사 | 43개 언어, 경쟁 모델 대비 5배 빠름 |
| MAI-Voice-2 | 음성 합성 | 15개 언어, 짧은 샘플로 목소리 복제 |
| MAI-Voice-2-Flash | 음성 합성(경량) | 초저비용 패키지, 출시 예정 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 접근 방법</strong><br>MAI 모델은 <strong>Microsoft Foundry</strong>를 통해 접근할 수 있습니다. 또한 OpenRouter, Fireworks, Baseten을 통해 외부 개발자에게도 배포되며, 처음으로 모델 가중치 직접 파인튜닝이 허용됩니다.</div>
</div>

## Frontier Tuning — AI를 내 업무에 맞게

단순 모델 제공을 넘어 Microsoft가 제안하는 핵심 개념은 **Frontier Tuning**입니다. 기업의 실제 업무 데이터로 에이전트를 강화학습(RL) 방식으로 파인튜닝해, 일반 모델보다 훨씬 적은 비용으로 더 높은 성능을 냅니다.

실제 사례: Excel 전용으로 튜닝한 MAI 모델이 GPT 5.4와 동등한 성능을 내면서 **비용은 10배 절감**했습니다. 기업 고객 사례에서도 특정 엔터프라이즈 기준으로 튜닝했을 때 약 10배 저렴한 비용으로 최고 승률을 기록했습니다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Mayo Clinic과의 헬스케어 협업</strong><br>Microsoft와 Mayo Clinic이 공동으로 프런티어 헬스케어 AI 모델을 개발합니다. Mayo Clinic의 비식별 임상 데이터와 Microsoft의 AI 역량을 결합해, 조기 진단·치료 계획 수립 등을 지원합니다. 모델 소유권은 Mayo Clinic에 있으며, 검증 후 Microsoft Foundry를 통해 다른 의료기관에도 제공될 예정입니다.</div>
</div>

## 자체 칩(Maia 200)과의 공동 설계

Microsoft는 MAI 모델을 자체 AI 칩 **Maia 200**에 최적화하며 공동 설계(co-design) 접근을 취하고 있습니다. 현재 GB200 대비 **1.4배 효율** 향상을 달성했으며, 차세대 GB200 클러스터가 이미 가동 중입니다.

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>MAI 패밀리 7종은 타사 모델 증류 없이 자체 데이터로 처음부터 학습한 Microsoft 최초 독자 AI 라인업</li>
<li>MAI-Thinking-1은 Claude Opus 4.6 수준의 코딩 성능을 중간 규모(35B 활성 파라미터)로 달성</li>
<li>MAI-Code-1-Flash는 GitHub Copilot에 기본 탑재되어 수억 개발자가 즉시 접하게 됨</li>
<li>Frontier Tuning으로 기업별 맞춤 AI를 최대 10배 저렴하게 구축 가능</li>
<li>자체 칩 Maia 200과 공동 설계로 장기 AI 자립 기반 구축 중</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Microsoft AI 공식 발표: MAI 모델 7종 공개</a><br>— <a href="https://microsoft.ai/models/mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 모델 페이지 (Microsoft AI)</a><br>— <a href="https://microsoft.ai/news/introducingmai-code-1-flash/" target="_blank" rel="noopener noreferrer">MAI-Code-1-Flash 소개 (Microsoft AI)</a></div></div>
