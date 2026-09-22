---
title: "구글, 암호화된 데이터 위에서 AI를 돌리는 오픈소스 컴파일러 'HEIR' 공개"
summary: "구글이 동형암호(FHE) 컴파일러 툴체인 HEIR를 공개했다. 학습된 AI 모델을 '암호화된 입력' 위에서 그대로 추론하도록 변환해, 서버가 원본 데이터를 전혀 보지 못한 채 결과만 돌려주게 만든다. 추천·사기탐지·침입탐지·핫워드 등 4개 실증 사례를 함께 공개했다."
category: "dev-trend"
date: "2026-08-16"
draft: true
readingTime: 6
tags: ["구글", "동형암호", "FHE", "프라이버시", "AI인프라"]
---

<div class="article-tldr">
구글이 8월 14일 동형암호(Homomorphic Encryption) 오픈소스 컴파일러 <strong>HEIR</strong>를 공개했다. HEIR는 이미 학습된 AI 모델을 <strong>암호화된 입력 위에서 그대로 추론</strong>하도록 변환하는 툴체인으로, 서버는 암호문만 처리하고 원본 데이터는 끝까지 보지 못한다. 구글은 추천·신용카드 사기탐지·네트워크 침입탐지·핫워드 감지 등 <strong>4개 실증 응용</strong>을 함께 내놨다. 목표는 암호학 전문가가 아니어도 '원클릭'으로 암호화 추론을 붙이게 만드는 것.
</div>

구글이 프라이버시 컴퓨팅 도구모음(Private Computing Toolkit)에 새 무기를 추가했다. 8월 14일 구글 스태프 소프트웨어 엔지니어 제러미 쿤(Jeremy Kun)이 공식 블로그를 통해 공개한 <strong>HEIR</strong>(Homomorphic Encryption Intermediate Representation)는 동형암호를 위한 오픈소스 컴파일러 툴체인이자 개발 플랫폼이다. 핵심 기능은 하나로 요약된다. <strong>평문 위에서 동작하도록 학습된 AI 모델을, 암호문 위에서 동작하도록 자동 변환</strong>하는 것.

## 동형암호가 바꾸는 트레이드오프

기존 보안의 딜레마는 분명했다. 종단간 암호화(E2EE)로 데이터를 보호하면 서비스 제공자가 그 데이터를 활용하는 기능(스팸·바이러스 탐지 등)을 제공하지 못한다. 반대로 기능을 제공하려면 데이터를 서버에 노출해야 한다. 의료·금융처럼 규제가 강한 영역일수록 이 상충은 더 뼈아프다.

동형암호(FHE)는 이 구도를 근본적으로 바꾼다. <strong>암호문 상태 그대로 연산을 수행</strong>할 수 있어, 서버는 암호화된 입력을 처리해 암호화된 결과를 돌려주면서도 그 안의 어떤 정보도 들여다보지 못한다. 예컨대 클라우드가 사용자의 특성값을 전혀 모른 채 콘텐츠 추천을 제공할 수 있다. 비용 오버헤드가 남아 있지만, 구글은 "이제 프라이버시 대 기능의 문제가 '비용'의 문제로 옮겨갔고, 그 비용은 빠르게 내려가고 있다"고 설명한다.

## HEIR가 푸는 진짜 문제 — '사용성'

동형암호의 걸림돌은 성능만이 아니었다. 기존 프로그램을 FHE로 효율적으로 옮기려면 암호학자 팀이 붙어 수작업으로 변환해야 했다. HEIR는 이 사용성 장벽을 겨냥한다. 개발자는 파이썬으로 프로그램을 작성하고 어떤 값이 비밀(secret)인지 타입만 표시하면, 나머지 컴파일은 HEIR가 처리한다. 내부적으로는 컴파일러 인프라 MLIR을 기반으로 삼아 복잡한 모델을 여러 단계(dialect)로 표현·확장하며, OpenFHE·Lattigo 같은 표준 FHE 라이브러리용 코드를 생성한다.

구글은 2023년 이 프로젝트를 하겠다고 밝힌 이후 커뮤니티의 호응을 얻었다고 했다. HEIR는 단순 도구를 넘어 연구 플랫폼으로도 자리 잡아, 암호학자들이 자신의 최적화에 집중하면서 테스트·벤치마킹·비교에는 기존 인프라를 재사용하게 됐다. 현재까지 HEIR를 기반으로 4편의 피어리뷰 논문이 나왔다.

<div class="article-stats">
<strong>공개일</strong> 2026년 8월 14일 (구글 공식 블로그, 제러미 쿤)<br/>
<strong>성격</strong> 동형암호용 오픈소스 컴파일러 툴체인 · 개발 플랫폼<br/>
<strong>기반</strong> MLIR · 생성 대상 라이브러리 OpenFHE · Lattigo<br/>
<strong>실증 응용</strong> 4종 (단일 스레드 CPU 기준 지연시간 측정)<br/>
<strong>HEIR 기반 피어리뷰 논문</strong> 4편<br/>
<strong>프로젝트 착수 발표</strong> 2023년
</div>

## 4개의 실증 응용

구글은 "동형암호가 얼마나 멀리 왔는지"를 보여주기 위해 HEIR로 컴파일한 네 가지 비공개(private) 추론 사례를 공개했다. 모두 소스코드가 깃허브에 공개돼 있다.

| 응용 | 협업 | 무엇을 지키나 |
|---|---|---|
| 딥러닝 추천 모델(DLRM) | Belfort Labs · LG · 뉴욕대 | 사용자 특성값을 노출하지 않고 콘텐츠 추천 |
| 신용카드 사기 탐지 | Niobium · hardshell.ai | 거래 원본을 감추면서 사기 판별 |
| 네트워크 침입 탐지(Kitsune) | Niobium | 패킷 내용을 공개하지 않고 이상 탐지 |
| 핫워드 감지 | Belfort Labs | 음성 녹음 프라이버시를 지키며 호출어 인식 |

지연시간은 모두 단일 스레드 CPU 기준으로 제시됐다. 구글은 Belfort·Niobium·Cornami·Optalysys 등 동형암호 하드웨어 가속기 업체들과 협력 중이며, 이 가속기의 지연 개선 효과는 조만간 별도로 시연할 계획이라고 밝혔다.

<div class="article-callout tip">
<strong>왜 지금 중요한가</strong> AI가 개인·규제 데이터로 확장될수록 "데이터를 넘기지 않고도 AI 기능을 쓰는" 방식의 가치가 커진다. HEIR는 그 진입장벽(암호학 전문성)을 컴파일러로 낮추려는 시도다.
</div>

## 남은 과제와 전망

HEIR가 '원클릭 암호화 추론'이라는 비전에 도달했다고 보기엔 이르다. 동형암호의 연산 비용 오버헤드는 여전히 크고, 제시된 지연시간도 단일 스레드 CPU 기준이라 대규모 실서비스로 직행하기엔 거리가 있다. 다만 방향은 분명하다. FHE의 병목이 '가능/불가능'에서 '얼마나 싸게'로 옮겨가는 국면에서, 변환을 자동화하는 컴파일러 계층과 전용 하드웨어 가속기가 맞물리면 프라이버시 보존 AI의 실용화 시점이 앞당겨진다. 구글이 이를 오픈소스로 풀었다는 점은, 표준·생태계 주도권까지 함께 노린 포석으로 읽힌다.

<div class="article-keypoints">
<ul>
<li>구글이 동형암호 오픈소스 컴파일러 HEIR 공개(8/14). 학습된 AI 모델을 암호문 입력 위에서 추론하도록 자동 변환.</li>
<li>개발자는 파이썬으로 작성하고 비밀 값 타입만 표시 → 나머지는 HEIR가 컴파일. MLIR 기반, OpenFHE·Lattigo 백엔드.</li>
<li>추천·사기탐지·침입탐지·핫워드 등 4개 실증 응용 공개(소스 공개, 단일 스레드 CPU 기준).</li>
<li>Belfort·Niobium·Cornami·Optalysys 등 FHE 가속기 업체와 협력. 병목은 '가능성'에서 '비용'으로 이동.</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/" target="_blank" rel="noopener">Google 공식 블로그 — How Google is Making Private AI Practical with Homomorphic Encryption</a><br/>
<a href="https://heir.dev/" target="_blank" rel="noopener">HEIR — 공식 프로젝트 사이트</a><br/>
<a href="https://github.com/google/heir" target="_blank" rel="noopener">GitHub — google/heir (오픈소스 저장소)</a><br/>
<a href="https://arxiv.org/abs/2508.11095" target="_blank" rel="noopener">arXiv — HEIR: A Universal Compiler for Homomorphic Encryption</a>
</div>
