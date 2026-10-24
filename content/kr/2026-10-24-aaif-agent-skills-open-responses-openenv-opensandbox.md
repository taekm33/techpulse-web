---
title: "앤트로픽 Agent Skills·오픈AI Open Responses, 리눅스재단 AAIF로 — 에이전트 표준 4종 합류, 국내 개발팀이 볼 것"
summary: "리눅스재단 산하 에이전틱 AI 재단(AAIF)이 2026년 10월 22일(현지) 앤트로픽의 Agent Skills, 오픈AI의 Open Responses, 허깅페이스의 OpenEnv, 알리바바의 OpenSandbox를 새 호스팅 프로젝트로 받아들였다. 이로써 AAIF 프로젝트는 출범 10개월여 만에 3개에서 10개로 늘었다. 새 제품 출시가 아니라 이미 쓰이던 포맷·사양·도구의 관리 주체가 한 회사에서 중립 재단으로 바뀐 것이다. 무엇이 확인됐고 무엇이 아직 미정인지, 국내 개발팀이 지금 점검할 것을 공개 자료 분석으로 정리했다."
category: "dev-trend"
date: "2026-10-24"
readingTime: 6
tags: ["AAIF", "Agent Skills", "Open Responses", "OpenEnv", "OpenSandbox", "AI 에이전트", "리눅스재단"]
---

<div class="article-tldr">
리눅스재단 산하 <strong>에이전틱 AI 재단(AAIF)</strong>이 10월 22일(미국 서부 시간, 한국 시간 23일) 산호세에서 열린 AGNTCon + MCPCon 북미 행사에서 새 프로젝트 4개를 발표했다. 앤트로픽의 <strong>Agent Skills</strong>(에이전트용 작업 지침 패키지 포맷), 오픈AI의 <strong>Open Responses</strong>(여러 모델 회사에 공통으로 쓰는 API 사양), 허깅페이스의 <strong>OpenEnv</strong>(강화학습 환경 프레임워크), 알리바바의 <strong>OpenSandbox</strong>(에이전트 실행용 격리 환경)다. AAIF 호스팅 프로젝트는 2025년 12월 출범 당시 3개에서 <strong>10개</strong>가 됐다. 네 가지 모두 이미 공개돼 쓰이던 프로젝트이며, 이번에 바뀐 것은 <strong>관리 주체</strong>다. 당장 코드를 고쳐야 하는 변화는 공식 자료에 없다.
</div>

이 글은 리눅스재단·AAIF 보도자료와 AAIF 블로그, 각 프로젝트 깃허브 저장소, 언론 보도를 바탕으로 한 공개 자료 분석이다. 각 도구를 설치하거나 성능을 재현하지 않았다.

## 누구에게 중요한가

- **Claude Code 등에서 스킬(SKILL.md)을 만들어 쓰는 팀**: 사내 스킬을 다른 에이전트 도구로 옮길 수 있는 근거가 한 회사의 문서에서 재단이 관리하는 표준으로 바뀐다.
- **여러 모델 API를 함께 쓰는 서비스 개발자**: Open Responses는 회사마다 다른 요청·응답·도구 호출 형식을 하나로 맞추려는 사양이다.
- **에이전트를 학습·평가하는 연구팀**: OpenEnv는 강화학습 환경을 공통 인터페이스로 만들고 공유하는 틀이다.
- **에이전트가 코드를 실행하는 제품을 만드는 팀**: OpenSandbox는 코드 실행·파일·브라우저 작업을 격리 환경에서 돌리는 플랫폼이다.

## 확인된 사실 — 공식 발표 기준

<a href="https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox" target="_blank" rel="noopener">리눅스재단 보도자료</a>에 따르면 발표일은 2026년 10월 22일, 장소는 산호세 매케너리 컨벤션센터에서 22~23일 열린 AGNTCon + MCPCon 북미 행사다. 기존 AAIF 프로젝트는 MCP(모델 컨텍스트 프로토콜), goose, AGENTS.md, A2A(Agent2Agent) 프로토콜, Agent Router, agentgateway다.

<div class="article-stats">
<strong>발표</strong> 2026-10-22(미국 서부 시간) / 한국 시간 10-23<br/>
<strong>AAIF 호스팅 프로젝트</strong> 3개(2025-12 출범) → 10개<br/>
<strong>Agent Skills</strong> 앤트로픽 기증 · 코드 Apache 2.0, 문서 CC BY 4.0<br/>
<strong>Open Responses</strong> 오픈AI 기증 · Responses API 기반 사양 · Apache 2.0(저장소 표기)<br/>
<strong>OpenEnv</strong> 허깅페이스 기증 · 강화학습 환경, MCP·Gym 인터페이스<br/>
<strong>OpenSandbox</strong> 알리바바 기증 · Apache 2.0 · Docker·Kubernetes 런타임
</div>

| 프로젝트 | 기증 | 무엇인가 | 공식 저장소 |
|---|---|---|---|
| Agent Skills | 앤트로픽 | 지침·스크립트·자료를 폴더(SKILL.md 중심)로 묶어 에이전트가 필요할 때 불러 쓰는 포맷 | <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener">agentskills/agentskills</a> |
| Open Responses | 오픈AI | 요청·응답·스트리밍 이벤트·도구 호출 형식을 공통화한 다중 공급자 API 사양 | <a href="https://github.com/openresponses/openresponses" target="_blank" rel="noopener">openresponses/openresponses</a> |
| OpenEnv | 허깅페이스 | reset()·step()·state() 인터페이스로 강화학습 환경을 만들고 공유하는 프레임워크 | <a href="https://github.com/huggingface/OpenEnv" target="_blank" rel="noopener">huggingface/OpenEnv</a> |
| OpenSandbox | 알리바바 | 에이전트의 코드 실행·명령·파일·브라우저 작업을 격리 환경에서 돌리는 플랫폼 | <a href="https://github.com/opensandbox-group/OpenSandbox" target="_blank" rel="noopener">opensandbox-group/OpenSandbox</a> |

<a href="https://aaif.io/blog/agent-skills-sharing-team-expertise-across-ai-agents" target="_blank" rel="noopener">AAIF의 Agent Skills 소개 글</a>은 70개 넘는 에이전트 플랫폼이 이 포맷을 지원하고, skills.sh 레지스트리에 7개월 동안 100만 개 넘는 스킬이 올라왔으며 설치 수는 약 2억 8천만 회라고 적었다. 이 수치는 Vercel 자료를 인용한 것으로, 외부 감사를 거친 숫자는 아니다. 앞으로는 여러 회사의 메인테이너로 구성된 기술운영위원회가 방향을 정한다고 했다. 이 글은 "스킬은 지침을 줄 뿐 권한을 주지 않는다"는 점도 분명히 했다.

<a href="https://aaif.io/blog/what-open-responses-changes-for-ai-developers" target="_blank" rel="noopener">Open Responses 소개 글</a>은 Databricks 모델 서빙이 Claude·Gemini·자체 호스팅 오픈 모델에 Open Responses 엔드포인트를 제공하고, Vercel AI Gateway도 같은 형식의 API를 연다고 소개했다. 사양 원문은 <a href="https://www.openresponses.org/specification" target="_blank" rel="noopener">openresponses.org</a>에 있다. 공급자는 고유 기능을 이름이 겹치지 않는 확장으로 붙일 수 있다.

<a href="https://github.com/opensandbox-group/OpenSandbox" target="_blank" rel="noopener">OpenSandbox 저장소</a>는 파이썬, 자바·코틀린, 타입스크립트·자바스크립트, C#·.NET, Go SDK와 CLI, MCP 서버를 제공한다고 밝혔다. <a href="https://aaif.io/blog/training-agents-for-real-world-tasks-with-openenv" target="_blank" rel="noopener">OpenEnv 소개 글</a>은 환경을 Docker로 묶어 허깅페이스 Spaces에 올릴 수 있고, TRL 학습 라이브러리와 연동된다고 설명했다.

## 미확인·전망 (사실과 구분)

- **기존 사양이 바뀌는지**: 재단 이관 뒤 SKILL.md 형식이나 Open Responses 스키마가 바뀐다는 공지는 없다. 기술위원회 구성과 첫 개정 일정도 공개되지 않아 **미확인**이다.
- **앤트로픽·오픈AI 제품 반영**: Claude가 Open Responses를 공식 지원하거나 오픈AI 제품이 Agent Skills 포맷을 쓴다는 발표는 이번 자료에 없다. 위 Databricks 사례는 중계 플랫폼의 지원이다. **미확인**.
- **한국어 문서·커뮤니티**: 네 프로젝트 모두 공식 문서는 영어이며 한국어 번역본은 확인하지 못했다(**미확인**).
- **국내 참여**: <a href="https://aaif.io/members" target="_blank" rel="noopener">AAIF 회원사 페이지</a>에는 10월 24일 기준 다날, NHN KCP, 갤럭시아머니트리, 한국전자통신연구원(ETRI) 등이 올라 있다. 이들이 새 프로젝트 개발에 참여하는지는 **미확인**이다.
- **표준 정착 여부**: Techstrong.ai는 다음 시험대가 이 거버넌스 모델이 경쟁사들 사이에서 실제 상호운용으로 이어지느냐라고 짚었다. 재단 이관이 곧 업계 전체 채택을 뜻하지는 않는다.

## 국내 개발팀에 미치는 영향

가장 실질적인 변화는 **벤더 종속 위험이 줄어든다는 신호**다. 사내 업무 지식을 스킬로 쌓아 온 팀은 특정 에이전트 도구에만 묶일 걱정을 조금 덜 수 있다. 여러 모델 API를 섞어 쓰는 서비스라면 공급자별 어댑터 코드를 Open Responses 한 형식으로 줄일 여지가 생긴다.

다만 **지금 바로 바뀌는 것은 거의 없다.** 네 프로젝트는 이미 공개돼 있었고, 라이선스도 대부분 Apache 2.0으로 그대로다. 보안 측면에서는 주의가 필요하다. 스킬 생태계가 커지면서 외부 스킬에 악성 지시가 섞이는 사례가 이미 보고됐다(<a href="/2026-09-28-ai-agent-skills-placeholder-domains-clickfix-scam/">본지 9월 28일자 보도</a> 참고). 재단 표준이 됐다고 외부 스킬이 안전해지는 것은 아니다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>사내 스킬 점검</strong>: 쓰고 있는 SKILL.md가 <a href="https://agentskills.io" target="_blank" rel="noopener">agentskills.io</a> 사양(최소 name·description 메타데이터 + 지침)에 맞는지 확인해 두면 다른 도구로 옮기기 쉽다.<br/>
2. <strong>외부 스킬은 코드처럼 검토</strong>: 공개 레지스트리에서 받은 스킬은 포함된 스크립트와 링크를 읽어 본 뒤 쓴다. 스킬은 권한을 주지 않으므로 에이전트 권한은 따로 최소화한다.<br/>
3. <strong>다중 모델 서비스는 사양 비교부터</strong>: Open Responses 사양과 지금 쓰는 API 형식의 차이를 정리해 보고, 이미 쓰는 게이트웨이(Databricks·Vercel 등)가 지원하는지 확인한다.<br/>
4. <strong>코드 실행 에이전트는 격리 설계 확인</strong>: 자체 샌드박스가 없다면 OpenSandbox의 Docker 로컬 실행으로 시험해 보고, 운영 적용 전 사내 보안 기준으로 따로 검토한다.<br/>
5. <strong>거버넌스 참여 경로 파악</strong>: 표준 방향에 의견을 내려면 각 저장소의 이슈·토론이나 AAIF 회원 가입 경로를 이용할 수 있다.
</div>

## 한계

이 글은 10월 22~24일 확인한 리눅스재단·AAIF 보도자료, AAIF 블로그 4건, 각 프로젝트 깃허브 저장소, AAIF 회원사 페이지, 언론 보도만을 근거로 했다. 스킬 수·설치 수 같은 채택 지표는 AAIF와 Vercel이 밝힌 수치이며 독립 검증되지 않았다. 기술위원회 구성, 사양 개정 일정, 각 회사 제품의 지원 계획은 확인할 수 없었다. 회원사 목록은 바뀔 수 있다.

<p><em>최종 확인일 2026-10-24.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox" target="_blank" rel="noopener">리눅스재단 보도자료 — AAIF 새 프로젝트 4종 (2026-10-22)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aaif.io/news/agentic-ai-foundation-announces-four-new-projects" target="_blank" rel="noopener">AAIF 뉴스 — 새 프로젝트 발표</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aaif.io/blog/agent-skills-sharing-team-expertise-across-ai-agents" target="_blank" rel="noopener">AAIF 블로그 — Agent Skills</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aaif.io/blog/what-open-responses-changes-for-ai-developers" target="_blank" rel="noopener">AAIF 블로그 — Open Responses</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aaif.io/blog/training-agents-for-real-world-tasks-with-openenv" target="_blank" rel="noopener">AAIF 블로그 — OpenEnv</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aaif.io/blog/the-sandbox-as-an-agent-primitive" target="_blank" rel="noopener">AAIF 블로그 — OpenSandbox</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener">깃허브 — Agent Skills 사양 저장소</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.openresponses.org/specification" target="_blank" rel="noopener">Open Responses 사양 원문</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aaif.io/members" target="_blank" rel="noopener">AAIF 회원사 목록</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.unite.ai/agentic-ai-foundation-adds-four-projects-to-reach-10-in-first-year/" target="_blank" rel="noopener">Unite.AI — 첫해 10개 프로젝트 도달 (2026-10-22)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://techstrong.ai/building-with-ai/featured/agentic-ai-foundation-adds-four-new-open-agent-projects/" target="_blank" rel="noopener">Techstrong.ai — 오픈 거버넌스 관점 해설 (2026-10-23)</a>
</div>

<div class="article-keypoints">
<ul>
<li>AAIF, 10월 22일 Agent Skills·Open Responses·OpenEnv·OpenSandbox 4종 편입 — 호스팅 프로젝트 3개 → 10개</li>
<li>새 제품이 아니라 이미 공개된 프로젝트의 관리 주체가 한 회사에서 중립 재단으로 이동</li>
<li>Agent Skills 채택 지표(70개+ 플랫폼, 100만+ 스킬)는 재단·Vercel 자체 수치</li>
<li>사양 개정 일정, 앤트로픽·오픈AI 제품의 상호 지원, 한국어 문서는 미확인</li>
<li>국내 팀은 SKILL.md 사양 준수 점검, 외부 스킬 보안 검토, 다중 모델 API 형식 비교부터</li>
</ul>
</div>
