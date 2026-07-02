---
title: "Anthropic, 과학자용 AI 워크벤치 'Claude Science' 베타 출시…연구 주기 10배 단축 목표"
summary: "Anthropic이 6월 30일 과학 연구자를 위한 전용 AI 워크벤치 'Claude Science'를 베타 공개했다. 60개 이상의 과학 DB와 멀티에이전트 구조로 게놈·단백질·화학정보 분석을 단일 환경에서 처리하며, 기존 2년짜리 문헌 리뷰를 단기간에 완성한 사례가 이미 나왔다."
category: "ai-news"
date: "2026-07-02"
readingTime: 7
tags: ["Anthropic", "Claude Science", "AI연구", "생명과학", "멀티에이전트"]
---

<div class="article-tldr">
Anthropic이 6월 30일 과학자용 AI 워크벤치 'Claude Science'를 전격 베타 출시했다. PubMed·UniProt·PDB 등 60개 이상의 과학 DB를 단일 인터페이스로 연동하고, 멀티에이전트 구조로 계획·실행·검증을 자동화한다. 연구 데이터는 사용자 인프라 안에서만 처리되며, 노벨상 수상자 존 점퍼 영입과 Coefficient Bio 인수(약 4억 달러)로 다진 생명과학 역량이 토대가 됐다. 최대 3만 달러 크레딧을 지원하는 'AI for Science' 그랜트도 공개됐다.
</div>

Anthropic은 지난해 가을 생명과학 분야 진출을 선언한 이후, 모델 성능 강화와 파트너십 확대를 병행해왔다. 6월 30일(현지시간) 공개된 Claude Science는 그 집대성으로, 단순한 AI 어시스턴트가 아니라 **연구 전 주기를 포괄하는 통합 워크벤치**를 지향한다.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/idtMsa_1yNk" width="100%" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Introducing Claude Science (now in beta)"></iframe>
</div>

## Claude Science가 해결하는 문제

과학 연구의 현실은 고된 반복이다. 연구자들은 서로 다른 스키마와 쿼리 언어를 쓰는 수십 개의 DB를 오가며, PubMed·Jupyter·R·HPC 터미널을 번갈아 전환한다. 데이터를 클러스터로 보내고, 작업 완료를 기다리고, 결과를 다시 끌어오는 과정이 분석 자체보다 오래 걸리는 경우도 많다.

Claude Science는 이 모든 단계를 단일 환경으로 묶는다. 문헌 분석부터 다단계 실험, 논문 그림 생성과 퇴고까지 한 대화 안에서 처리되며, 모든 산출물에는 재현 가능한 코드와 감사 이력이 자동 첨부된다.

## 멀티에이전트 구조: 조율·전문·검수 3단 체계

<div class="article-stats">
<strong>내장 DB·도구</strong> 60개 이상<br/>
<strong>지원 도메인</strong> 게놈학, 단세포 분석, 단백질체학, 구조생물학, 화학정보학<br/>
<strong>구동 모델</strong> Claude Opus 4.8 (기존 모델, 별도 게이팅 없음)<br/>
<strong>지원 플랫폼</strong> macOS · Linux (로컬·SSH·HPC 로그인 노드)<br/>
<strong>그랜트 규모</strong> 프로젝트당 최대 3만 달러 크레딧 (최대 50건)
</div>

Claude Science의 핵심은 **3중 에이전트 구조**다.

- **조율 에이전트(Coordinating Agent)**: 사용자의 자연어 질문을 받아 전략을 수립하고, 60개 이상의 기술·DB 연결 스킬 중 적합한 전문 에이전트에 작업을 분배한다.
- **전문 에이전트(Specialist Agents)**: UniProt·PDB·Ensembl·ClinVar·ChEMBL 등 도메인 특화 소스를 쿼리하고 결과를 합성한다. NVIDIA의 BioNeMo 에이전트 툴킷과 연동해 Evo 2·Boltz-2·OpenFold3 같은 생명과학 모델에도 접근한다.
- **검수 에이전트(Reviewer Agent)**: 파이프라인이 실행되는 동안 인용 오류, 추적 불가 수치, 코드와 그림의 불일치를 실시간 탐지하고 자동 수정한다.

연구자는 세션 어느 지점에서나 포크(fork)해 두 가지 접근법을 동시에 비교할 수 있으며, 대용량 데이터셋은 세션 내 메모리에 한 번만 로드된다.

<div class="article-callout tip">
데이터는 사용자 랩의 인프라(노트북·Linux 서버·HPC) 안에서만 처리된다. 민감한 데이터가 외부로 나가지 않으며, Claude에는 각 단계에 필요한 맥락만 전송된다.
</div>

## 실제 연구 성과: 2년 리뷰를 수주 안에

공식 발표에 포함된 세 가지 사례가 눈에 띈다.

**Manifold Bio(조직 표적 치료제 개발)**: 수백 개의 표적과 수백만 개의 후보 결합체를 평가하는 실험 대상 선정에 Claude Science를 활용했다. 각 조직·표적별로 표면 발현, 트래피킹, 안전성을 평가하고 내부 데이터 맥락을 반영해 후보를 순위화하는 과정을 단대단(end-to-end)으로 처리했다.

**Allen Institute 제롬 르코크(신경과학자)**: 수천 편의 논문을 읽고 핵심 주장과 정량적 결과를 추출해 증거 데이터베이스를 구축하는 20개 커스텀 스킬 기반 '계산 리뷰 템플릿'을 구성했다. 기존에 2년이 걸렸던 종합 리뷰를 100페이지 분량으로 다수 완성했으며, 인용 정확도는 검수 에이전트가 보장했다.

**UCSF 스티븐 프랜시스(역학자)**: 뇌종양(글리오마)의 분자역학 연구에서 복수의 접근법을 활용한 전장 생식세포 분석을 기존 소요 시간의 **10분의 1** 만에 완료했다. 독립 검증을 통해 결과의 정확성도 확인했다.

## 배경: Coefficient Bio 인수와 존 점퍼 합류

Claude Science의 출시 배경에는 두 가지 굵직한 포석이 있다.

4월 Anthropic은 Genentech 출신 계산생물학자들로 구성된 스텔스 바이오테크 스타트업 **Coefficient Bio를 약 4억 달러(주식)에 인수**했다. 10명 미만의 팀이지만 단백질 설계와 바이오분자 모델링 분야의 깊은 전문성을 갖춘 것으로 평가된다.

6월 19일에는 알파폴드를 공동 개발해 **2024년 노벨 화학상**을 받은 존 점퍼가 Google DeepMind를 떠나 Anthropic에 합류한다고 밝혔다. 기초과학 최정점의 연구자를 끌어들인 이번 영입은 Anthropic의 생명과학 전략이 단순한 AI 도구 제공을 넘어 실제 과학 발견에 기여하겠다는 의지의 표현으로 읽힌다.

<div class="article-callout info">
Claude Science는 새로운 AI 모델이 아니다. 기존 Claude Opus 4.8 위에서 구동되며, 특별한 모델 접근 권한이나 게이팅은 없다. 차별화는 모델이 아니라 연구 워크플로 전체를 아우르는 환경과 에이전트 설계에 있다.
</div>

## 가격·접근성·그랜트

Claude Science 베타는 **Pro·Max·Team·Enterprise 플랜** 사용자에게 macOS와 Linux에서 무료로 제공된다. Team·Enterprise 사용자는 관리자가 먼저 활성화해야 한다. 학술·비영리 연구기관 대상 팀 플랜 할인도 별도 신청 가능하다.

**AI for Science 그랜트**: 7월 15일까지 신청 가능하며, 선정 시 최대 3만 달러의 Claude Science 크레딧을 지원한다. Modal은 추가로 선별 프로젝트에 최대 2,000달러 규모의 컴퓨팅 자원을 제공한다. 프로젝트 기간은 2026년 9월 1일 ~ 12월 1일이며, 생물학·바이오메디컬 연구가 우선 분야다. 7월 31일까지 결과 통보 예정.

## 시사점

Claude Science는 Anthropic이 '모델 공급자'를 넘어 특정 산업의 운영 레이어로 자리잡으려는 전략의 일환이다. Claude Code가 소프트웨어 개발에서 그 역할을 했듯, Claude Science는 생명과학·계산과학 분야에서 같은 지위를 노린다. 과학 연구의 생산성을 10배 압축하겠다는 선언이 현실이 될지, 앞으로 나올 독립적 성과 검증이 관건이다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.anthropic.com/news/claude-science-ai-workbench" target="_blank" rel="noopener">Anthropic 공식 발표 — Claude Science, an AI workbench for scientists (2026.06.30)</a><br/>
· <a href="https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/" target="_blank" rel="noopener">TechCrunch — Claude Science: 새 모델이 아닌 워크플로로 과학자를 공략하는 Anthropic</a><br/>
· <a href="https://thenextweb.com/news/john-jumper-nobel-deepmind-leaves-anthropic-alphafold" target="_blank" rel="noopener">The Next Web — 노벨상 수상자 존 점퍼, DeepMind 떠나 Anthropic 합류</a><br/>
· <a href="https://www.statnews.com/2026/06/30/anthropic-release-claude-science-ceo-dario-amodei/" target="_blank" rel="noopener">STAT News — Anthropic releases Claude Science, a product aimed at researchers</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic이 6월 30일 과학자용 AI 워크벤치 'Claude Science'를 베타 출시, Pro·Max·Team·Enterprise 플랜 무료 제공</li>
<li>60개 이상의 과학 DB·도구를 단일 환경으로 통합, 멀티에이전트가 계획·실행·검수 자동화</li>
<li>데이터는 사용자 인프라 안에서만 처리 — 민감 데이터 외부 유출 차단</li>
<li>Allen Institute 사례: 기존 2년 리뷰를 수주 만에 완성, UCSF 역학 연구는 10분의 1 시간</li>
<li>4억 달러 Coefficient Bio 인수 + 노벨상 수상자 존 점퍼 영입이 과학 역량의 토대</li>
<li>AI for Science 그랜트: 7월 15일까지 신청, 선정 팀에 최대 3만 달러 크레딧 지원</li>
</ul>
</div>
