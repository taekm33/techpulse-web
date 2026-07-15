---
title: "마이크로소프트, 자체 AI 모델 7종 공개… 'MAI-Thinking-1'·'MAI-Code-1-Flash'로 OpenAI 의존 탈피 선언"
summary: "마이크로소프트가 빌드 2026에서 자체 개발한 MAI 모델 패밀리 7종을 발표했다. 추론 모델 MAI-Thinking-1은 클로드 소넷 4.6을 블라인드 평가에서 앞섰고, 코딩 모델 MAI-Code-1-Flash는 GitHub Copilot에 직접 통합돼 OpenAI 비용 의존도를 줄이는 전략의 핵심이 됐다."
category: "ai-news"
date: "2026-06-07"
readingTime: 5
tags: ["Microsoft", "MAI", "MAI-Thinking-1", "AI모델", "빌드2026"]
---

<div class="article-tldr">
마이크로소프트가 빌드 2026에서 추론·코딩·이미지·음성·전사(transcription) 모델을 아우르는 7종의 자체 개발 AI 모델 'MAI 패밀리'를 공개했다. 주력 모델인 MAI-Thinking-1은 서드파티 모델 증류 없이 처음부터 학습됐으며 블라인드 사용자 평가에서 클로드 소넷 4.6을 앞섰다. 코딩 모델 MAI-Code-1-Flash는 GitHub Copilot과 VS Code에 직접 통합되어 GPT-5.5 대비 10배 높은 비용 효율을 달성했다.
</div>

마이크로소프트가 AI 스택에서 새로운 층을 열었다. 지금까지 OpenAI·Anthropic 투자와 Azure 인프라 제공자 역할에 집중하던 마이크로소프트가 이번 빌드 2026을 통해 자체 프론티어 모델 개발사로 본격 전환을 선언했다. Mustafa Suleiman Microsoft AI CEO는 "이것은 단순한 모델 출시가 아니라 슈퍼인텔리전스 랩을 구축하는 것"이라고 강조했다.

## MAI 패밀리 7종 한눈에 보기

<div class="article-stats">

| 모델명 | 특징 | 가용 상태 |
|--------|------|-----------|
| MAI-Thinking-1 | 중형 추론 모델, 클로드 소넷 4.6 대비 블라인드 평가 우위 | Microsoft Foundry 비공개 미리보기 |
| MAI-Code-1-Flash | 50억 활성 파라미터 코딩 모델, GitHub Copilot·VS Code 통합 | 일반 출시 |
| MAI-Image-2.5 / Flash | 텍스트→이미지 및 이미지 편집, Arena 점수 Nano Banana Pro 초과 | 출시 |
| MAI Transcribe-1.5 | 세계 최고 정확도 전사 모델, 경쟁 모델 대비 5배 빠름, 43개 언어 | 출시 |
| MAI-Voice-2 | 15개 언어 고품질 음성 생성, 짧은 샘플로 음성 적응 | 출시 |
| Aion 모델 | Windows PC 온디바이스 소형 모델 | 출시 |

</div>

<div class="article-callout tip">
**개발자 접근 방법**: MAI-Thinking-1은 현재 Microsoft Foundry 비공개 미리보기 단계로 관심 등록이 가능하다. MAI-Code-1-Flash는 GitHub Copilot 구독자라면 VS Code에서 즉시 사용 가능하다. MAI 모델들은 OpenRouter, Fireworks, Baseten을 통해서도 이용할 수 있으며, 개발자가 모델 가중치를 직접 파인튜닝할 수 있는 첫 번째 마이크로소프트 외부 공개 모델이기도 하다.
</div>

## OpenAI 의존 탈피 전략의 핵심 수치

이번 발표의 경제적 의미는 명확하다. 컨설팅 기업 맥킨지를 위해 모델을 특화시킨 결과, MAI 모델은 OpenAI GPT-5.5 대비 **10배 높은 비용 효율**을 기록했다. 마이크로소프트는 OpenAI에 130억 달러, Anthropic에 50억 달러를 투자하면서도 두 회사에 토큰 사용료를 지불해왔다. 자체 모델을 Azure에서 직접 구동하면 이 비용이 사라진다.

<div class="article-callout info">
**슈퍼인텔리전스 랩의 의미**: MAI-Thinking-1은 서드파티 모델 증류 없이 엔터프라이즈급 클린 데이터와 상업적으로 라이선스된 데이터로만 처음부터 훈련됐다. Suleiman CEO는 이를 '힐 클라이밍 머신'이라 표현하며 모델 역량의 지속적·장기적 향상 체계를 강조했다.
</div>

## Mayo Clinic과의 의료 AI 협력

7개 모델 발표 외에도 마이크로소프트는 세계 최고 병원 시스템인 Mayo Clinic과 프론티어 의료 AI 모델 공동 개발을 선언했다.

<div class="article-keypoints">

**Mayo Clinic-Microsoft 의료 AI 모델 주요 내용**
- Mayo Clinic의 세계 수준 임상 전문성과 익명화된 임상 데이터를 Microsoft의 AI 인프라와 결합
- 1차 배포: Mayo Clinic 내부 환경에서 조기 및 정확한 진단·치료 계획 수립 지원
- 이후 Microsoft Foundry를 통해 타 의료기관에 Mayo Clinic 전문성을 확산 배포 예정
- 고위험 도메인을 위한 별도 집중 협력 모델로, MAI 일반 패밀리와 독립 운영

</div>

| 투자 기업 | 투자액 | 현황 |
|-----------|--------|------|
| OpenAI | 130억 달러 | IPO 준비 중 |
| Anthropic | 50억 달러 | 2026년 6월 1일 비공개 IPO 신청 |
| Mayo Clinic | 전략적 파트너십 | 의료 AI 공동 개발 |

마이크로소프트의 이번 행보는 AI 생태계에서 '투자자'에서 '모델 공급자'로의 포지션 전환을 의미한다. OpenAI와 Anthropic이 각각 IPO를 추진하는 시점에, 마이크로소프트는 자체 모델 역량을 확보해 두 회사와의 협력 관계를 보완하는 전략을 택했다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://microsoft.ai/" target="_blank" rel="noopener">Microsoft AI 공식</a><br/>
· <a href="https://azure.microsoft.com/en-us/products/ai-foundry" target="_blank" rel="noopener">Microsoft Foundry (Azure AI Foundry)</a><br/>
· <a href="https://news.microsoft.com/" target="_blank" rel="noopener">Microsoft 뉴스</a><br/>
· <a href="https://blogs.microsoft.com/" target="_blank" rel="noopener">Microsoft 공식 블로그</a>
</div>
