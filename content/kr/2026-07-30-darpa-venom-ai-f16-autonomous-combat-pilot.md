---
title: "DARPA, AI 조종사가 F-16 전투기를 직접 날렸다 — VENOM 프로그램의 역사적 첫 자율비행"
summary: "미 국방부 DARPA가 실전형 F-16에 AI 자율비행 키트(VAK)를 장착해 첫 자율 비행에 성공했다. 인간 조종사 없이도 스위치 하나로 AI가 전투기를 제어하는 시대가 열렸다."
category: "dev-trend"
date: "2026-07-30"
readingTime: 5
tags: ["DARPA", "AI조종사", "자율전투기", "VENOM", "군사AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: DARPA와 미 공군이 VENOM 프로그램을 통해 F-16 전투기에 AI 자율비행 키트를 장착, 2026년 7월 첫 자율비행에 성공했다. AI가 실제 전투기를 조종하며 사람은 모니터링만 하는 '루프상 인간(human-on-the-loop)' 방식이 현실이 됐다. 총 6대의 F-16이 개조되며, 향후 다대다 공중전 시나리오까지 확장 예정이다.
</div>

## AI 조종사가 실제 전투기에 올라타다

2026년 7월, 미국 플로리다 에글린 공군기지(Eglin AFB)에서 역사적인 장면이 펼쳐졌다. 겉보기에는 평범한 F-16 소티(sortie)처럼 보였지만, 조종간을 실제로 움직인 것은 사람이 아니라 AI였다.

DARPA(방위고등연구계획국)와 미 공군이 공동으로 추진 중인 **VENOM(Viper Experimentation and Next-generation Operations Model)** 프로그램이 드디어 첫 자율비행 이정표를 달성했다. 인간 조종사는 여전히 조종석에 앉아 있었지만, 실질적인 비행 제어는 AI 에이전트가 담당했다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">$1억 3,200만</span>
<span class="stat-label">DARPA의 AIR 프로그램 투자액</span>
</div>
<div class="stat-item">
<span class="stat-number">6대</span>
<span class="stat-label">VENOM 키트로 개조된 F-16 전투기 수</span>
</div>
<div class="stat-item">
<span class="stat-number">스위치 1개</span>
<span class="stat-label">인간→AI 조종 전환에 필요한 조작</span>
</div>
<div class="stat-item">
<span class="stat-number">3년+</span>
<span class="stat-label">VAK 키트 개발 및 시뮬레이션 기간</span>
</div>
</div>

## VENOM 자율비행 키트(VAK)란?

VENOM Autonomy Kit(VAK)는 F-16의 **핵심 소프트웨어를 전혀 건드리지 않고** 기체의 비행제어 시스템 및 임무 시스템에 후장착(aftermarket) 방식으로 연결되는 자율비행 인터페이스다.

핵심 특징은 조종사가 **스위치 하나만 누르면** 기존 수동 조종 모드와 AI 자율 조종 모드 사이를 즉시 전환할 수 있다는 점이다. 안전을 위해 조종사는 항상 동승하며 AI의 행동을 실시간으로 모니터링하고 언제든 개입할 수 있다. 이를 'human-on-the-loop(루프상 인간)'이라고 부른다.

물리적으로는 **자동 스로틀(auto-throttle)** 이 추가돼 AI가 추력까지 직접 제어할 수 있다. 비행제어 표면(조종면)은 기존 비행제어 컴퓨터(FCS)를 통해 작동한다.

<div class="article-callout info">
<strong>ACE 프로그램과의 연결:</strong> VENOM은 DARPA의 ACE(Air Combat Evolution) 프로그램에서 파생됐다. ACE는 AI 조종사가 X-62 VISTA 항공기에서 F-16과 실제 공중전(도그파이트)을 벌인 선구적 프로그램으로, VENOM은 이 성과를 실전 기체에 확장 적용한 것이다.
</div>

## AIR 프로그램: 다음 단계는 다대다 공중전

VENOM의 성공은 DARPA의 더 큰 계획인 **AIR(Artificial Intelligence Reinforcements)** 프로그램의 핵심 기반이다. AIR는 인간과 무인기가 협력하는 다중기체 시각외거리(BVR, Beyond Visual Range) 공중전에서 AI가 지배적인 전술 자율성을 갖추게 하는 것을 목표로 한다.

테스트 로드맵은 다음과 같다:

| 단계 | 시나리오 | 설명 |
|------|----------|------|
| 1단계 | 기본 비행 기동 | 도그파이트(근거리 공중전) |
| 2단계 | 1대1, 시각 범위 내 | 근거리 단독 전투 |
| 3단계 | 1대1, 시각 범위 외(BVR) | 장거리 미사일 전투 |
| 4단계 | 2대2 | 다중기체 협동 전투 |
| 5단계 | 4대4 | 복잡한 편대 전투 시나리오 |

브리그 장군 제임스 발피아니(Valpiani) DARPA 프로그램 매니저는 "4대4 시나리오는 신임 조종사가 능숙해지는 데 1~2년이 걸리는 극도로 복잡한 임무"라고 설명했다.

<div class="article-callout tip">
<strong>실전 기체 활용의 의미:</strong> 기존 ACE 프로그램은 X-62 VISTA라는 고도로 개조된 특수 항공기를 사용했다. VENOM은 현재 실전 배치된 표준 F-16에 AI를 탑재함으로써, AI 조종사가 실제 조종사와 동일한 센서·무기·통신 환경에서 학습하고 검증된다는 점에서 훨씬 현실적이고 즉각적인 전술적 의미를 갖는다.
</div>

## 협업전투기(CCA)로 가는 징검다리

VENOM에서 검증된 AI 전투 에이전트는 궁극적으로 **CCA(Collaborative Combat Aircraft)** 프로그램에 이식된다. CCA는 인간 조종사가 지휘하는 유인기 편대에 자율 무인기들이 협력하는 미래 공중전 개념이다. 현재 제너럴 아토믹스의 **FQ-42**와 안두릴 인더스트리스의 **FQ-44**가 CCA 후보 기체로 개발 중이다.

발피아니는 "AI가 현대 전장의 복잡성을 인간이 관리하는 데 엄청난 잠재력을 갖고 있다"고 말하면서도, "전쟁의 안개와 마찰 속에서 전투 AI의 성능과 신뢰성에 관한 어려운 질문들이 여전히 많다"고 인정했다.

<div class="article-keypoints">
<h3>핵심 포인트 정리</h3>
<ul>
<li>DARPA VENOM 프로그램, 실전 F-16에 AI 자율비행 키트(VAK) 장착 후 첫 자율비행 성공 (2026년 7월)</li>
<li>F-16 핵심 소프트웨어 수정 없이 후장착 방식으로 구현 — 스위치 하나로 인간↔AI 전환</li>
<li>인간 조종사는 항상 동승, 실시간 모니터링 및 즉시 개입 가능 ('human-on-the-loop')</li>
<li>총 6대의 F-16 개조, 향후 4대4 다중기체 시나리오까지 단계적 확장 예정</li>
<li>DARPA AIR 프로그램에 $1억 3,200만 투자, 최종 목표는 무인 CCA에 AI 이식</li>
</ul>
</div>

군사 AI의 진화는 단순한 자동화를 넘어, 전장의 패러다임 자체를 바꾸고 있다. VENOM이 성공적으로 실전 F-16에 AI 조종사를 탑재한 것은 그 변화의 명확한 신호탄이다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16" target="_blank" rel="noopener">DARPA 공식 발표 — DARPA, U.S. Air Force fly AI-controlled F-16</a><br/>
· <a href="https://www.stripes.com/branches/air_force/2026-07-20/first-venom-autonomous-jet-flight-22317435.html" target="_blank" rel="noopener">Stars and Stripes — First VENOM autonomous jet flight</a><br/>
· <a href="https://theaviationist.com/2026/07/16/darpa-usaf-fly-f-16-venom-autonomy-modification/" target="_blank" rel="noopener">The Aviationist — DARPA and USAF fly F-16 with VENOM autonomy modification</a><br/>
</div>
