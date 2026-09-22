---
title: "구글 A2A, 앤트로픽 MCP와 한 지붕으로…AI 에이전트 표준 'AAIF' 통합"
summary: "구글의 에이전트 간 통신 표준 A2A가 8월 20일 리눅스 재단 산하 '에이전틱 AI 재단(AAIF)'에 정식 합류했다. 앤트로픽의 MCP와 함께 AI 에이전트 경제의 두 핵심 표준이 하나의 중립 거버넌스 아래 모이면서, 특정 벤더에 종속되지 않는 상호운용 에이전트 생태계의 밑그림이 뚜렷해졌다."
category: "dev-trend"
date: "2026-08-26"
draft: true
readingTime: 6
tags: ["A2A", "MCP", "AI에이전트", "리눅스재단", "오픈소스"]
---

<div class="article-tldr">
구글의 에이전트 간 통신 프로토콜 <strong>A2A(Agent2Agent)</strong>가 2026년 8월 20일 리눅스 재단이 운영하는 <strong>에이전틱 AI 재단(AAIF)</strong>에 정식 합류했다. 이로써 앤트로픽이 기증한 <strong>MCP(Model Context Protocol)</strong>와 함께, AI 에이전트 생태계의 두 핵심 표준이 같은 중립 거버넌스 아래 모였다. AAIF는 2025년 12월 창립 후 1년도 안 돼 회원사가 49곳에서 <strong>250곳 이상</strong>으로 늘었고, AWS·앤트로픽·블록·블룸버그·클라우드플레어·구글·마이크로소프트·오픈AI가 플래티넘 회원으로 이름을 올렸다. MCP는 '에이전트↔도구' 수직 연결을, A2A는 '에이전트↔에이전트' 수평 통신을 담당한다.
</div>

AI 에이전트가 서로 대화하는 방식을 정하는 개방형 표준들이 하나의 지붕 아래 모이고 있다. 리눅스 재단 산하 에이전틱 AI 재단(AAIF)은 8월 20일 구글의 A2A 프로토콜이 재단의 정식 프로젝트로 합류했다고 밝혔다. 이미 앤트로픽의 MCP가 창립 프로젝트로 들어와 있던 만큼, 에이전트 경제를 떠받치는 두 축이 같은 중립 기구 안에 자리 잡게 됐다.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/CQywdSdi5iA" title="The Model Context Protocol (MCP)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## 두 표준은 어떻게 다른가

핵심은 '역할 분담'이다. A2A와 MCP 모두 에이전트 중심 프로토콜이지만 스택에서 서로 다른 층을 맡는다. 앤트로픽이 창립 프로젝트로 기증한 MCP는 에이전트와 도구·데이터 사이의 <strong>수직 연결</strong>을 표준화한다. 모델이 로컬 리소스, 검색 결과, 기업 데이터베이스에 접근하는 방식을 규정한다. 반면 구글이 개발한 A2A는 두 자율 시스템이 작업을 협상하고, 신원 자격증명을 교환하며, 조직 경계를 넘어 상태를 유지하는 <strong>수평 통신</strong>을 담당한다.

AAIF의 설명을 빌리면 "A2A는 협업의 경계(collaborative edge)에, MCP는 도구 통합의 경계(tool integration edge)에 위치한다." 두 표준을 한데 모은 것은, 벤더별로 쪼개진 폐쇄형 에이전트 프로토콜의 시대가 저물고 있다는 신호로 읽힌다.

<div class="article-stats">
<strong>A2A 합류일</strong> 2026년 8월 20일<br/>
<strong>AAIF 창립</strong> 2025년 12월 9일 (리눅스 재단)<br/>
<strong>회원사</strong> 창립 49곳 → 250곳 이상<br/>
<strong>창립 프로젝트</strong> MCP(앤트로픽) · goose(블록) · AGENTS.md(오픈AI)
</div>

## 경쟁사들이 한자리에 모인 이유

AAIF 플래티넘 등급 회원 명단은 보기 드문 업계 합의를 보여준다. AWS, 앤트로픽, 블록, 블룸버그, 클라우드플레어, 구글, 마이크로소프트, 오픈AI가 모두 같은 거버넌스 모델에 서명했다. 단순한 협력을 넘어, 신기술 주기마다 반복되던 파편화에 맞서는 방어적 선택이라는 분석이 나온다. 인프라가 중립 거버넌스 아래에서 안정되면, 경쟁의 무게중심은 '프로토콜 소유'에서 '에이전트의 추론 품질과 도구 접근 깊이'로 옮겨간다.

| 구분 | MCP | A2A |
|---|---|---|
| 개발 | 앤트로픽 (2024년 공개) | 구글 |
| 역할 | 에이전트↔도구·데이터 수직 연결 | 에이전트↔에이전트 수평 통신 |
| 위치 | 도구 통합의 경계 | 협업의 경계 |
| AAIF 편입 | 창립 프로젝트(2025.12) | 2026.08.20 합류 |

A2A는 2026년 3월 첫 안정판(v1.0)을 내놓으며 다중 프로토콜 바인딩과 버전 협상, 멀티테넌시, 그리고 암호학적 신원 검증을 위한 '서명된 에이전트 카드(signed agent cards)'를 추가했다. 이미 모바일 플랫폼, 클라우드 AI 인프라, 금융, 공급망, 기업 IT 등 실제 프로덕션 환경에서 쓰이고 있다.

<div class="article-callout info">
두 표준이 <strong>합쳐지는</strong> 것은 아니다. A2A와 MCP는 각자의 기술 운영위원회(technical steering committee)를 둔 별개 프로젝트로 유지된다. 다만 행정적으로 한 지붕 아래 놓이면서 개발 로드맵이 서로 보완적으로 정렬되도록 조율된다.
</div>

## 개발자와 기업에 주는 의미

기업 개발자 입장에서 가치는 즉각적이다. '구글 진영이냐, 앤트로픽 진영이냐'를 택할 필요 없이, 통신(A2A)과 도구 통합(MCP)을 함께 다루는 결합 아키텍처 위에서 곧바로 에이전트를 설계할 수 있다. 참고로 MCP는 이미 발행된 서버가 1만 개를 넘어섰고, 오픈AI의 AGENTS.md는 6만 개 이상의 오픈소스 프로젝트에 채택됐다. 표준화가 진행될수록 보안 패치의 전파와 데이터 흐름 검증도 더 빠르고 엄격해질 수 있다.

<div class="article-callout tip">
에이전트 도입을 검토 중인 팀이라면, 이제 벤더 선택 기준에 <strong>"A2A·MCP 같은 AAIF 거버넌스 표준을 프로덕션 수준으로 지원하는가"</strong>를 명시적으로 넣는 것이 좋다. 프로토콜 종속을 줄이고 멀티벤더 전환 여지를 확보하는 실질적 안전장치다.
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://aaif.io/blog/a2a-joins-aaif" target="_blank" rel="noopener">Agentic AI Foundation — A2A joins AAIF's open agentic stack</a><br/>
· <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" target="_blank" rel="noopener">Linux Foundation — Formation of the Agentic AI Foundation (AAIF)</a><br/>
· <a href="https://www.forbes.com/sites/janakirammsv/2026/08/19/agent2agent-joins-the-agentic-ai-foundation-alongside-mcp/" target="_blank" rel="noopener">Forbes — Agent2Agent Joins The Agentic AI Foundation Alongside MCP</a><br/>
· <a href="https://tech.yahoo.com/ai/gemini/articles/google-a2a-protocol-joins-aaif-020554895.html" target="_blank" rel="noopener">Yahoo Tech — Google's A2A Protocol Joins AAIF</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글 A2A가 8월 20일 리눅스 재단 산하 AAIF에 정식 합류, 앤트로픽 MCP와 한 지붕 아래로</li>
<li>MCP는 에이전트↔도구 수직 연결, A2A는 에이전트↔에이전트 수평 통신 담당</li>
<li>AAIF 회원사 창립 49곳→250곳 이상, 플래티넘에 AWS·구글·MS·오픈AI 등 경쟁사 총출동</li>
<li>두 표준은 별개 프로젝트로 유지되지만 로드맵은 보완적으로 정렬</li>
<li>개발자는 통신+도구 통합 결합 아키텍처로 벤더 종속 없이 에이전트 설계 가능</li>
</ul>
</div>
