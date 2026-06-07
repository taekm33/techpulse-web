---
title: "마이크로소프트, M365 에이전트를 위한 Work IQ API 일반 공개 예고 — 6월 16일 GA"
summary: "마이크로소프트가 Microsoft 365 데이터와 앱에 에이전트가 접근할 수 있는 Work IQ API의 일반 공개 일정(6월 16일)을 발표했다. Copilot을 구동하는 것과 동일한 인텔리전스 레이어를 외부 개발자에게 개방하며, AI 크레딧 비용 관리 대시보드도 함께 출시된다."
category: "dev-trend"
date: "2026-06-07"
readingTime: 5
tags: ["MicrosoftWorkIQ", "M365API", "엔터프라이즈AI", "Copilot", "개발자API"]
---

<div class="article-tldr">
마이크로소프트가 2026년 6월 2일 <strong>Work IQ API</strong>의 일반 공개(GA) 일정을 2026년 6월 16일로 확정했다. 이 API 세트는 에이전트가 Microsoft 365 데이터와 앱을 이해하고 조작할 수 있는 표준 인터페이스다. 현재 GitHub 퍼블릭 프리뷰를 통해 개발을 시작할 수 있으며, AI 크레딧 사용량과 지출 한도를 관리하는 새로운 비용 관리 대시보드도 함께 공개된다.
</div>

## Work IQ란 무엇인가

Work IQ는 **Microsoft 365의 새로운 인텔리전스 레이어**다. 조직 내에서 업무가 어떻게 이루어지는지 이해하고, 에이전트가 그 컨텍스트를 기반으로 행동할 수 있는 기반을 제공한다. 쉽게 말해 Copilot이 이미 사용하고 있는 M365 데이터 접근 및 작업 실행 인프라를 외부 개발자와 IT 관리자에게도 개방하는 것이다.

마이크로소프트의 Charles Lamanna 부사장은 "소프트웨어는 사람을 위해 만들어진 애플리케이션에서 사용자를 대신해 추론·검색·행동할 수 있는 에이전트로 진화하고 있다"며 이 전환을 위한 새로운 API 표면이 필요하다고 밝혔다.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-number">6월 16일</span>
    <span class="stat-label">Work IQ API 일반 공개(GA) 예정일</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">지금 가능</span>
    <span class="stat-label">GitHub 퍼블릭 프리뷰를 통한 개발 시작</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">256K</span>
    <span class="stat-label">MAI-Thinking-1 컨텍스트 윈도우 (Work IQ API 사용 가능)</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">첫 번째</span>
    <span class="stat-label">AI 크레딧 비용 관리 대시보드 적용 제품</span>
  </div>
</div>

## API 도메인 구성

Work IQ API는 에이전트가 M365 생태계와 상호작용하는 데 필요한 여러 도메인으로 구성된다. 현재 퍼블릭 프리뷰에서 확인할 수 있는 주요 도메인은 다음과 같다:

- **컨텍스트 검색**: 이메일, 회의, 문서, Teams 대화 등에서 관련 컨텍스트 검색
- **업무 실행**: 에이전트가 M365 앱에서 직접 액션 수행
- **조직 인텔리전스**: 팀·조직 구조·작업 패턴 이해
- **데이터 보안**: 기존 M365 권한 모델 기반 데이터 접근 제어

<div class="article-callout tip">
**개발자 액션**: Work IQ API는 현재 GitHub 퍼블릭 프리뷰에서 사용 가능하다. GA(6월 16일) 전에 프리뷰로 개발을 시작하면 출시 즉시 운영 환경에 배포할 수 있다. Microsoft Foundry를 통해 MAI-Thinking-1 같은 MS 자체 모델과 통합하는 것도 고려할 만하다.
</div>

## AI 크레딧 비용 관리 대시보드

Work IQ API와 함께 Microsoft 365 관리 센터에 새로운 **AI 크레딧 비용 관리 대시보드**가 출시된다. IT 관리자는 다음을 수행할 수 있다:

| 기능 | 설명 |
|------|------|
| 사용량 검토 | 에이전트·서비스별 AI 크레딧 소비 현황 파악 |
| 결제 방식 설정 | 선불(Prepaid) 또는 종량제(Pay-as-you-go) 선택 |
| 지출 한도 설정 | 테넌트·그룹·사용자 단위 지출 상한선 설정 |
| 크레딧 요청 관리 | 사용자의 크레딧 요청 승인·거부 |

Work IQ API가 첫 번째 적용 제품이며, 향후 Copilot Credits를 사용하는 다른 제품들도 이 대시보드로 통합 관리될 예정이다. Microsoft Copilot Studio도 순차적으로 포함된다.

## 엔터프라이즈 에이전트 개발에 미치는 영향

Work IQ API가 중요한 이유는 **접근할 수 있는 데이터의 질**에 있다. M365는 대부분의 기업에서 이메일, 회의, 문서, 팀 커뮤니케이션의 핵심 허브다. 에이전트가 이 데이터에 구조화된 방식으로 접근할 수 있으면, 단순한 Q&A 봇을 넘어 실제 업무 맥락을 이해하는 에이전트를 구축할 수 있다.

예를 들어:
- "이번 주 John의 회의 내용을 요약하고 후속 조치가 필요한 항목을 정리해줘"
- "우리 팀이 Q1에 논의한 예산 관련 이메일을 찾아 분기 보고서 초안을 작성해줘"
- "다음 주 클라이언트 미팅 전에 관련 문서와 이전 대화를 준비해줘"

<div class="article-callout info">
**보안 주의사항**: Work IQ API는 기존 Microsoft 365의 역할 기반 접근 제어(RBAC) 위에서 동작한다. 에이전트는 사용자가 원래 접근할 수 있는 데이터만 처리할 수 있다. 엔터프라이즈 배포 시 서비스 계정 권한 범위를 신중하게 설계해야 한다.
</div>

## LangChain·AutoGen과의 비교

기존의 M365 데이터 접근은 Microsoft Graph API를 통해 이루어졌는데, 이는 에이전트 친화적 설계보다 CRUD 작업 중심이었다. Work IQ API는 에이전트가 **목표 지향적으로** M365 데이터를 소비하고 행동하는 방식으로 설계됐다는 점에서 차이가 있다.

LangChain이나 AutoGen 같은 프레임워크와 함께 사용하면 M365 컨텍스트를 완전히 이해하는 엔터프라이즈 에이전트를 더 쉽게 구축할 수 있을 것으로 기대된다.

<div class="article-keypoints">

## 핵심 포인트

- **GA 일정**: 2026년 6월 16일 Work IQ API 일반 공개 확정
- **지금 시작**: GitHub 퍼블릭 프리뷰로 GA 전 개발 착수 가능
- **Copilot 동일 레이어**: MS Copilot이 사용하는 M365 인텔리전스 인프라를 외부 개방
- **비용 관리**: 테넌트·그룹·사용자 단위 AI 크레딧 지출 한도 설정 가능
- **에이전트 친화 설계**: Microsoft Graph API 대비 에이전트 목표 지향적 인터페이스
- **확장 계획**: Copilot Studio 등 AI 크레딧 제품 순차적 대시보드 통합 예정

</div>

## 개발자에게 주는 기회

Work IQ API는 엔터프라이즈 SaaS 개발자, 컨설팅 회사, 내부 IT 팀에게 새로운 카테고리의 제품을 만들 기회를 제공한다. M365 데이터를 컨텍스트로 삼는 에이전트는 범용 AI 도구보다 조직 특화 가치를 더 잘 제공할 수 있다. 6월 16일 GA 이후 이 API를 빠르게 통합한 제품이 엔터프라이즈 AI 에이전트 시장에서 우선 채택될 가능성이 높다.
