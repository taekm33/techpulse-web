---
title: "마이크로소프트, MAI 모델 7종 공개… OpenAI 의존 탈피하고 '초지능' 독자 노선"
summary: "마이크로소프트가 Build 2026에서 자체 개발 AI 모델 7종(MAI 패밀리)을 공개했다. 추론·코딩·이미지·음성·트랜스크립션을 아우르는 멀티모달 제품군이며, OpenAI와의 계약 제한 해제 후 6개월 만에 나온 성과다."
category: "ai-news"
date: "2026-06-06"
readingTime: 5
tags: ["Microsoft", "MAI", "Build2026", "MAI-Thinking-1", "초지능"]
---

<div class="article-tldr">
마이크로소프트가 Build 2026 행사에서 자체 AI 연구소(Microsoft AI Superintelligence Team)가 개발한 모델 7종을 'MAI 패밀리'라는 이름으로 공개했다. 추론, 코딩, 이미지 생성, 음성 합성, 음성 인식 등 멀티모달 풀스택을 처음으로 독자적으로 갖춘 것이다. 약 6개월 전 OpenAI와의 계약 제한이 해제된 이후 처음 나온 대규모 자체 모델 발표다.
</div>

마이크로소프트는 2026년 6월 2일 Build 2026 행사에서 외부 모델에 의존하지 않는 순수 자체 개발 AI 제품군을 처음으로 완전한 형태로 공개했다. 마이크로소프트 AI CEO 무스타파 술레이만(Mustafa Suleyman)은 행사 후 인터뷰에서 "약 6개월 전 OpenAI와의 계약 조건이 변경되면서 비로소 초지능 연구를 독자적으로 추진할 수 있는 권한을 얻었다"고 밝혔다. 그 결과물이 이번 MAI 패밀리다.

## MAI 패밀리 7종 한눈에 보기

| 모델명 | 역할 | 주요 특징 |
|--------|------|-----------|
| MAI-Thinking-1 | 플래그십 추론 모델 | SWE-Bench Pro에서 Claude Opus 4.6과 동급, 256K 토큰 컨텍스트 |
| MAI-Code-1-Flash | 경량 코딩 모델 | GitHub Copilot·VS Code 전용 최적화, 50억 활성 파라미터 |
| MAI-Image-2.5 | 텍스트→이미지 + 이미지 편집 | Arena AI 이미지 리더보드 3위 |
| MAI-Image-2.5 Flash | 이미지 경량 버전 | 비용 효율 극대화 |
| MAI-Transcribe-1.5 | 음성 인식 | 43개 언어, 세계 최고 정확도 주장 |
| MAI-Voice-2 | 음성 합성 | 15개 언어+, 짧은 샘플로 음성 복제 |
| MAI-Voice-2 Flash | 음성 합성 경량 버전 | 초저비용 패키지 (출시 예정) |

<div class="article-stats">

| 지표 | 수치 |
|------|------|
| MAI-Thinking-1 파라미터 구성 | 35B 활성 / 약 1조 전체 (MoE) |
| AIME 2025 점수 | 97.0% |
| MAI 엑셀 특화 모델 효율 | GPT 5.4 수준, 최대 10배 비용 절감 |

</div>

## MAI-Thinking-1: '힐 클라이밍 머신'의 핵심

MAI-Thinking-1은 35억 활성 파라미터와 약 1조 총 파라미터로 구성된 희소 MoE(Mixture of Experts) 모델이다. 마이크로소프트는 이를 "힐 클라이밍 머신(Hill-Climbing Machine)"의 핵심으로 소개했다. 힐 클라이밍 머신이란 데이터, 보상 신호, 환경, 컴퓨팅 자원을 계속 업그레이드하면서 모델 성능을 지속적으로 끌어올리는 파이프라인 전략이다.

이 모델은 제3자 모델로부터의 지식 증류(distillation) 없이 처음부터 독자적으로 훈련되었다. 데이터도 상업적으로 라이선스된 클린 데이터만 사용했다는 점을 강조하며, 기업 신뢰성을 강점으로 내세우고 있다.

<div class="article-callout tip">
**개발자 주목**: MAI-Code-1-Flash는 GitHub Copilot과 VS Code에 깊이 통합된 경량 코딩 모델이다. 50억 활성 파라미터로 Claude Haiku 수준의 성능을 더 낮은 비용에 제공한다. OpenRouter, Fireworks, Baseten을 통해 개발자가 직접 모델 가중치를 파인튜닝(fine-tuning)할 수 있는 것도 처음이다.
</div>

## 엔터프라이즈 맞춤화: 프론티어 튜닝

Build 2026의 또 다른 핵심 발표는 '프론티어 튜닝(Frontier Tuning)'이다. 기업이 자체 데이터와 워크플로우로 MAI 모델을 강화학습(RL) 기반으로 특화 훈련시키는 기능이다. 마이요 클리닉(Mayo Clinic), EY, Land O'Lakes, Pearson 등이 초기 도입 파트너로 참여하고 있다. 특히 Mayo Clinic과는 의료 특화 프론티어 모델을 공동 개발하는 파트너십을 체결했다.

<div class="article-callout info">
**배경**: 마이크로소프트는 OpenAI에 누적 130억 달러 이상을 투자하며 AI 전략을 구축해왔다. 그러나 약 6개월 전 계약 조건이 재협상되면서 독자적인 초지능 연구가 허용됐다. MAI 패밀리는 이 독립 선언의 첫 번째 완전한 결과물이다. 자체 AI 가속기 Maia 200은 GB200 대비 30% 비용 효율이 높은 것으로 알려졌다.
</div>

## OpenAI와의 관계는 어떻게?

마이크로소프트는 OpenAI와의 파트너십을 유지하면서도 독자 노선을 병행한다. 술레이만 CEO는 "모델 공급업체 포트폴리오가 다양한 것은 약점이 아니라 강점"이라며 OpenAI와의 협력이 계속될 것임을 확인했다. 그러나 2030년까지 완전 자립적인 프론티어 AI 연구소를 목표로 한다는 방향은 분명하다. Azure 기반으로 Maia 200 실리콘을 공동 최적화하면서 "더 저렴하고 강력한 MAI 모델"을 구현하겠다는 로드맵이 가시화되고 있다.

<div class="article-keypoints">

**핵심 포인트**
- 마이크로소프트 Build 2026에서 자체 개발 MAI 모델 7종 공개
- MAI-Thinking-1: 35B 활성/1T 전체 MoE 모델, SWE-Bench에서 Claude Opus 4.6 동급
- OpenAI 계약 제한 해제 6개월 후 첫 완전한 멀티모달 독자 제품군
- 프론티어 튜닝으로 기업별 맞춤 RL 훈련 지원, Mayo Clinic 등과 협업
- Maia 200 자체 실리콘, GB200 대비 30% 비용 효율 우위 주장

</div>
