---
title: "Google Gemma 4, Amazon Bedrock 정식 지원 — 오픈 웨이트 모델의 엔터프라이즈 시대"
summary: "AWS가 6월 15일 Amazon Bedrock에서 Google DeepMind의 Gemma 4 모델 패밀리(31B·26B-A4B·E2B)를 공개했다. Apache 2.0 라이선스, 256K 컨텍스트, 네이티브 함수 호출, 멀티모달 입력 지원으로 엔터프라이즈 워크로드에 최적화됐다."
category: "ai-news"
date: "2026-06-16"
readingTime: 5
tags: ["Gemma4", "AmazonBedrock", "GoogleDeepMind", "오픈웨이트", "AWS"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Amazon Bedrock이 6월 15일 Google DeepMind의 Gemma 4 패밀리(31B Dense, 26B-A4B MoE, E2B Dense-PLE) 3종을 지원하기 시작했다. Apache 2.0 오픈 웨이트, 256K 토큰 컨텍스트, 멀티모달(텍스트+이미지), 네이티브 함수 호출이 특징이다. 인프라 없이 완전 관리형 서비스로 즉시 사용 가능하다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/jZVBoFOJK-Q" title="What's new in Gemma 4" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Gemma 4가 Bedrock에 온 의미

Google DeepMind는 올해 4월 Gemma 4를 출시하며 오픈 웨이트 모델 최초로 Apache 2.0 라이선스를 채택했다. 이번 Amazon Bedrock 통합으로 AWS 개발자·기업은 별도 GPU 인프라나 가중치 호스팅 없이 완전 관리형 환경에서 Gemma 4를 활용할 수 있게 됐다.

Bedrock의 **Model Deployment Account 격리** 구조와 운영자 접근 제로 원칙이 모델 수준 보안을 보장하므로, 규제 산업(금융·의료·공공)의 엔터프라이즈 도입이 훨씬 쉬워졌다.

<div class="article-stats">
  <div class="article-stat-item">
    <span class="stat-value">256K</span>
    <span class="stat-label">최대 컨텍스트 윈도우(토큰)</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">140+</span>
    <span class="stat-label">사전 훈련 언어 수</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">3</span>
    <span class="stat-label">Bedrock 출시 시 지원 아키텍처(Dense·MoE·PLE)</span>
  </div>
</div>

## Gemma 4 패밀리 상세 비교

| 모델 | 아키텍처 | 파라미터 | 컨텍스트 | 모달리티 |
|---|---|---|---|---|
| Gemma 4 31B | Dense | 30.7B | 256K | 텍스트·이미지 |
| Gemma 4 26B-A4B | Mixture-of-Experts | 25.2B 전체 / 3.8B 활성 | 256K | 텍스트·이미지 |
| Gemma 4 E2B | Dense (PLE) | 5.1B 전체 / 2.3B 유효 | 128K | 텍스트·이미지 |

세 모델 모두 **빌트인 추론 모드**, **네이티브 함수 호출**, **35개 이상 언어 즉시 지원**을 제공한다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>MoE 모델의 비용 효율</strong><br>Gemma 4 26B-A4B는 전체 파라미터 25.2B 중 요청당 3.8B만 활성화하는 MoE 구조다. 대형 모델 수준의 지능을 소형 모델 수준의 추론 비용으로 제공한다. 처리량 대비 비용을 낮춰야 하는 에이전트 워크플로우에 특히 적합하다.</div>
</div>

## Bedrock에서 Gemma 4 쓰는 법

AWS는 OpenAI Python SDK 호환 `bedrock-mantle` 엔드포인트를 통해 Gemma 4를 호출할 수 있도록 지원한다. 기존 OpenAI SDK 코드를 최소 수정으로 Gemma 4로 전환할 수 있다는 뜻이다.

**모델 ID**:
- `google.gemma-4-31b` — Gemma 4 31B Dense
- `google.gemma-4-26b-a4b` — Gemma 4 26B MoE
- `google.gemma-4-e2b` — Gemma 4 E2B Compact

**서비스 티어**: Standard(기본), Priority(우선 처리), Flex(비용 최적화) 3단계 선택 가능.

출시 리전: US East(버지니아·오하이오), US West(오레곤), Europe(프랑크푸르트).

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>오픈 웨이트의 장점</strong><br>Apache 2.0 라이선스이므로 가중치를 직접 다운로드해 자체 서버에 배포하거나 독점 데이터로 파인튜닝할 수 있다. 모델 아키텍처와 훈련 방법론을 독립적으로 검증(감사)할 수 있어 규제 요구사항 충족에도 유리하다.</div>
</div>

## 성능 지표 — 경량 모델이 강한 이유

Gemma 4 31B(Thinking 모드 기준):
- AIME 2026 수학: 89.2%
- LiveCodeBench v6 코딩: 80.0%
- GPQA Diamond 과학 지식: 84.3%
- τ2-bench 에이전트 도구 사용: 86.4%(Retail)
- Arena AI(텍스트) Elo: 1452

특히 26B-A4B MoE 모델이 31B Dense와 거의 유사한 점수를 내면서 추론 비용은 크게 절감해 실제 프로덕션에서의 효율이 뛰어나다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Amazon Bedrock에서 Gemma 4 패밀리 3종 정식 지원 시작(2026년 6월 15일)</li>
<li>Apache 2.0 — 상업적 사용·파인튜닝·재배포 모두 자유</li>
<li>MoE 아키텍처(26B-A4B)로 대형 모델 성능을 소형 비용에 구현</li>
<li>256K 컨텍스트 윈도우로 전체 코드베이스 분석·멀티턴 에이전트 가능</li>
<li>OpenAI Python SDK 호환 API로 마이그레이션 장벽 최소화</li>
<li>Model Deployment Account 격리로 엔터프라이즈 보안 요건 충족</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://aws.amazon.com/blogs/machine-learning/introducing-gemma-4-models-on-amazon-bedrock/" target="_blank" rel="noopener noreferrer">AWS 공식 블로그 — Amazon Bedrock Gemma 4 출시 발표</a><br>— <a href="https://deepmind.google/models/gemma/gemma-4/" target="_blank" rel="noopener noreferrer">Google DeepMind Gemma 4 공식 페이지 (모델 카드·다운로드)</a><br>— <a href="https://ai.google.dev/gemma" target="_blank" rel="noopener noreferrer">Google AI for Developers — Gemma 시작 가이드 및 문서</a></div></div>
