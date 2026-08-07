---
draft: true
title: "LG AI리서치, 한국 최대 750B 파라미터 소버린 AI 'K-EXAONE 2.0' 아파치 2.0으로 오픈소스 공개"
summary: "LG AI리서치가 한국 최대 규모 AI 기반 모델 K-EXAONE 2.0(750B)을 상업적 이용이 자유로운 아파치 2.0 라이선스로 허깅페이스에 공개했다. 24개 벤치마크 평균 70.1점, 장문 이해·에이전트 능력·안전성에서 글로벌 선두 모델들과 경쟁하거나 능가한다."
category: "ai-news"
date: "2026-08-01"
readingTime: 5
tags: ["LG", "K-EXAONE", "소버린AI", "오픈소스", "거대언어모델"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: LG AI리서치가 2026년 7월 31일 한국 최대 규모 AI 기반 모델인 <strong>K-EXAONE 2.0(7500억 파라미터)</strong>을 허깅페이스에 오픈소스로 공개했다. 과학기술정보통신부 '소버린 AI 기반 모델 프로젝트' 2단계 산출물로, 라이선스를 <strong>아파치 2.0으로 전환</strong>해 제한 없이 상업적 활용이 가능해졌다. 24개 벤치마크 평균 70.1점으로 1단계 모델(63.3점) 대비 10% 이상 개선됐으며, 장문 이해·에이전트·안전성 항목에서 <strong>GLM-5.1, DeepSeek V4 Pro Max, Qwen3.5를 능가</strong>하거나 대등한 성능을 보였다.
</div>

## 한국 독자 개발 최대 AI 모델의 등장

한국 정부가 추진하는 '소버린 AI 기반 모델 프로젝트'의 두 번째 성과물이 공개됐다. LG AI리서치가 2026년 7월 31일 공개한 **K-EXAONE 2.0**은 파라미터 수 **7500억(750B)** 으로, 이전 1단계 모델(2360억)보다 3배 이상 규모가 커졌다. 모델 아키텍처 설계부터 데이터 준비, 대규모 분산 학습, 추론 인프라 구축까지 모든 단계를 LG AI리서치 연구팀이 독자적으로 완수했다는 점이 가장 큰 의미다.

이번 공개와 함께 라이선스도 **아파치 2.0**으로 바뀌었다. 상업적 사용에 제한이 없어 기업·연구기관 누구든 자유롭게 활용할 수 있다.

## 24개 벤치마크로 측정한 성능

LG AI리서치는 9개 카테고리, 24개 벤치마크에 걸친 종합 평가 결과를 함께 공개했다.

| 평가 항목 | K-EXAONE 2.0 | GLM-5.1 | DeepSeek V4 Pro Max | Qwen3.5 |
|----------|-------------|---------|---------------------|---------|
| 24개 벤치마크 평균 | **70.1** | — | — | — |
| OpenAI-MRCR (장문 이해) | **94.4** | 71.5 | — | — |
| Ko-LongBench (장문 이해) | **89.6** | 83.6 | — | — |
| Tau3-Bench Banking (에이전트) | **14.2** | 11.5 | — | 13.4 |
| KGC-Safety (안전성) 평균 | **94.6** | 71.3 | 65.2 | 89.0 |

장문 이해 부문에서는 OpenAI-MRCR 94.4점, Ko-LongBench 89.6점으로 GLM-5.1을 10% 이상 앞섰다. 에이전트 도구 사용 능력(Tau3-Bench Banking)에서도 GLM-5.1과 Qwen3.5를 모두 넘었다. 코딩 및 에이전틱 코딩 벤치마크 3종에서는 1단계 모델 대비 약 **30% 향상**됐다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">750B</span>
<span class="stat-label">파라미터 (한국 최대 규모 AI 기반 모델)</span>
</div>
<div class="stat-item">
<span class="stat-number">70.1점</span>
<span class="stat-label">24개 벤치마크 평균 (1단계 63.3점 대비 +10%↑)</span>
</div>
<div class="stat-item">
<span class="stat-number">+30%</span>
<span class="stat-label">코딩·에이전틱 코딩 벤치마크 3종 성능 향상</span>
</div>
<div class="stat-item">
<span class="stat-number">10개 언어</span>
<span class="stat-label">지원 (한·영·스페인·독·일·베트남 + 프·이탈·포·폴란드어 추가)</span>
</div>
</div>

## 안전성과 한국적 맥락

K-EXAONE 2.0은 성능뿐 아니라 **안전성**에도 방점을 찍었다. 한국 사회 맥락과 국제 윤리 기준에 맞춘 AI 안전성 평가 지표인 KGC-Safety와 지정학적 민감 상황 안전성 지표 ROK-Fortress에서 평균 **94.6점**을 기록했다. GLM-5.1(71.3점), DeepSeek V4 Pro Max(65.2점), Qwen3.5(89.0점)보다 모두 높은 수치다.

<div class="article-callout info">
<strong>다국어 지원 확대:</strong> K-EXAONE 2.0은 한국어·영어·스페인어·독일어·일본어·베트남어에 이어 이번에 <strong>프랑스어·이탈리아어·포르투갈어·폴란드어</strong>를 추가해 총 10개 언어를 지원한다. LG AI리서치 측은 "한국 개발 AI 기반 모델 중 가장 많은 언어를 지원한다"고 밝혔으며, 이를 통해 글로벌 시장에서의 소버린 AI 기술 경쟁력을 높이겠다는 방침이다.
</div>

## 멀티모달 EXAONE 4.5와 산업별 확장

K-EXAONE 2.0 공개와 함께 LG AI리서치는 비전-언어 모델(VLM) **EXAONE 4.5**의 성과도 강조했다. EXAONE 4.5는 13개 평가 벤치마크 평균에서 GPT-5 mini, Claude Sonnet 4.5, Qwen3-VL을 능가하는 멀티모달 성능을 달성했다고 밝혔다.

LG AI리서치는 K-EXAONE 생태계 확장 계획도 발표했다. 제조·바이오·금융·공공 부문을 겨냥한 도메인 특화 전문가 AI 모델을 다음 주 추가로 공개할 예정이며, 일반 사용자가 K-EXAONE 2.0을 직접 체험할 수 있는 서비스도 준비 중이다.

<div class="article-callout tip">
<strong>개발자를 위한 안내:</strong> K-EXAONE 2.0은 <strong>허깅페이스(Hugging Face)</strong>에서 아파치 2.0 라이선스로 내려받을 수 있다. 소버린 AI 기반 모델 프로젝트의 공개 평가 플랫폼도 2단계 평가를 마무리하는 단계다. 현재 모델은 연구 및 상업적 목적 모두에 제한 없이 활용 가능하다.
</div>

## 소버린 AI가 왜 중요한가

'소버린 AI'란 해외 모델이나 기술 의존 없이 국가·기업이 자체적으로 개발·운영하는 AI를 뜻한다. 특정 언어와 문화권에 최적화되어 있고, 데이터 주권과 보안 요구를 충족할 수 있다는 점에서 정부·공공기관·금융 등 민감한 분야에서 특히 수요가 높다.

K-EXAONE 2.0은 한국이 글로벌 AI 경쟁에서 독자적인 프론티어급 모델을 보유하게 됐다는 의미를 갖는다. 임우형 LG AI리서치 공동대표는 "이 모델은 최종 목적지가 아닌 출발점"이라며 "더 높은 품질의 데이터, 지속적인 사후 학습, 강화학습, 정교한 추론 기술을 통해 K-EXAONE을 계속 발전시켜 나갈 것"이라고 밝혔다.

<div class="article-keypoints">
<h3>핵심 포인트 정리</h3>
<ul>
<li>LG AI리서치, 7500억 파라미터 K-EXAONE 2.0 허깅페이스 공개 (2026년 7월 31일)</li>
<li>아파치 2.0 라이선스로 전환 — 상업적 이용 제한 없음</li>
<li>24개 벤치마크 평균 70.1점, 1단계(63.3점) 대비 10% 이상 향상</li>
<li>장문 이해(OpenAI-MRCR 94.4)·에이전트·안전성에서 GLM-5.1, DeepSeek, Qwen3.5 능가</li>
<li>코딩·에이전틱 코딩 벤치마크 약 30% 향상, 지원 언어 10개로 확대</li>
<li>EXAONE 4.5 VLM, GPT-5 mini·Claude Sonnet 4.5·Qwen3-VL 멀티모달 성능 능가</li>
<li>다음 주 산업 특화 AI 모델 추가 공개 및 일반 사용자 체험 서비스 예정</li>
</ul>
</div>

한국이 독자 개발한 프론티어급 AI 기반 모델이 오픈소스로 세상에 나왔다. K-EXAONE 2.0이 글로벌 경쟁자들과 어깨를 나란히 하는 성능을 증명한 지금, 다음 행보인 도메인 특화 모델과 추론 고도화가 어디까지 이어질지 주목된다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.lgresearch.ai/news/view?seq=678" target="_blank" rel="noopener">LG AI Research 공식 보도자료 — K-EXAONE 2.0 공개</a><br/>
· <a href="https://huggingface.co/LGAI-EXAONE" target="_blank" rel="noopener">허깅페이스 — LGAI-EXAONE 모델 페이지</a><br/>
</div>
