---
title: "구글 Gemini Managed Agents API 공개 — HTTP 호출 하나로 상태 유지 AI 에이전트 즉시 실행"
summary: "Google I/O 2026에서 발표된 Gemini Managed Agents API는 단일 엔드포인트 호출로 격리된 Linux 샌드박스 내 상태 유지 AI 에이전트를 즉시 생성한다. ADK 2.0 GA와 함께 에이전트 개발 인프라의 복잡성을 API 호출 하나로 압축했다."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["Google", "Gemini", "Managed Agents API", "ADK 2.0", "AI 에이전트", "Google I/O 2026"]
---

<div class="article-tldr">
구글이 Google I/O 2026에서 <strong>Gemini Managed Agents API</strong>와 <strong>ADK 2.0</strong>을 공개했다. Managed Agents API는 VM 프로비저닝·Docker·오케스트레이션 없이 단일 HTTP 호출(POST /v1beta/interactions)만으로 격리된 Linux 샌드박스에서 상태 유지 AI 에이전트를 실행한다. 에이전트 인프라 구축의 복잡성이 API 한 줄로 압축됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/VGpfnbr7rso" title="Build long-running agents with Google's Agentic Stack | The Agent Factory" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트 인프라 문제를 API 호출 하나로 해결

AI 에이전트를 프로덕션에 배포하려면 VM 프로비저닝, Docker 설정, 상태 관리 데이터베이스, 오케스트레이션 레이어 등 복잡한 인프라가 필요했다. **Gemini Managed Agents API**는 이 모든 문제를 단일 HTTP 호출로 해결한다.

핵심 메커니즘은 `POST /v1beta/interactions` 엔드포인트다. 에이전트 ID와 프롬프트를 전달하면 구글이 격리된 Linux 컨테이너를 프로비저닝하고, 그 안에서 에이전트를 실행한 뒤 결과를 반환한다. 에이전트는 Bash 터미널을 가지고 있고, 패키지 설치 및 파일 쓰기가 가능하다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">7일</span>
<span class="stat-label">샌드박스 TTL — 동일 environment_id로 세션 재개 가능</span>
</div>
<div class="stat-item">
<span class="stat-number">55일</span>
<span class="stat-label">유료 플랜 interaction 보관 기간 (무료: 1일)</span>
</div>
<div class="stat-item">
<span class="stat-number">5개 언어 GA</span>
<span class="stat-label">ADK 2.0 — Python·TypeScript·Go·Java·Kotlin 정식 지원</span>
</div>
</div>

## 상태 유지가 핵심 차별점

Managed Agents API의 핵심 특징은 **상태 유지(stateful)** 기능이다. 매번 새로운 컨텍스트를 생성하는 단순 코드 실행 샌드박스와 달리, Managed Agents API는 각 인터랙션 응답에 `environment_id`를 반환한다. 다음 요청에 이 ID를 전달하면 에이전트가 정확히 같은 환경(파일시스템, 설치된 패키지, 현재 상태)에서 재개된다. 별도 데이터베이스, 큐, 상태 머신이 필요 없다.

이를 통해 며칠 또는 몇 주에 걸쳐 실행되는 **장기 실행 에이전트(long-running agents)**가 가능해진다. 예를 들어:
- HR 온보딩 조율 에이전트 (사람의 서명을 기다리며 며칠간 대기)
- 자율적으로 OS를 구축하는 에이전트
- Blender에서 며칠에 걸쳐 3D 비디오 스토어를 생성하는 에이전트

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>개발자 시작 팁</strong><br>Managed Agents API 사용에는 `google-genai` Python 패키지 v1.55.0 이상이 필요하다. 기본 관리 에이전트는 `antigravity-preview-05-2026`으로, Gemini 3.5 Flash 기반이며 구글 자체 프로덕트에 사용되는 것과 동일한 런타임을 사용한다. 네트워크 격리는 기본값(off)이며, 명시적 allowlist로 외부 접근을 활성화할 수 있다.</div>
</div>

## ADK 2.0: 그래프 기반 워크플로 엔진으로 전면 개편

Google I/O 2026과 함께 **Agent Development Kit(ADK) 2.0**이 GA(정식 출시)됐다. 가장 큰 변화는 기존 계층적 실행기(hierarchical executor)를 **그래프 기반 워크플로 엔진**으로 교체한 것이다. 이 변화는 동적 모델 주도 추론부터 엄격한 결정론적 파이프라인까지 연속적인 스펙트럼에서 선택할 수 있게 한다.

ADK 2.0의 주요 기능:

| 기능 | 설명 |
|------|------|
| 그래프 기반 워크플로 엔진 | 동적 추론 ↔ 결정론적 파이프라인 스펙트럼 |
| Collaborative Workflows | 병렬·순차 실행이 가능한 서브에이전트 팀 구성 |
| 다국어 GA | Python, TypeScript, Go, Java, Kotlin |
| Agent CLI | `agy` 커맨드, 기존 Gemini CLI 대체 |
| Antigravity 2.0 IDE | VS Code 기반, 최대 5개 병렬 에이전트 관리 뷰 |

## Antigravity 2.0 — 에이전트 전용 IDE

구글은 Managed Agents API와 함께 **Antigravity 2.0**을 풀 데스크탑 IDE로 업그레이드했다. VS Code 기반으로 제작됐으며, 최대 5개의 에이전트를 병렬로 오케스트레이션하는 Manager View를 제공한다. CLI(`agy`)도 함께 출시됐으며, 기존 Gemini CLI를 대체한다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>가용성 정보</strong><br>— Gemini Managed Agents API: 공개 프리뷰 (Antigravity, Deep Research 에이전트 내장)<br>— ADK 2.0: Python·TS·Go·Java·Kotlin GA<br>— Antigravity 2.0 IDE: 공개 프리뷰<br>— 요금: 무료 프리뷰 ~ 월 $700 최고 쿼터 플랜<br>— 커스텀 에이전트: ADK로 구축 후 자체 인프라 호스팅 가능</div>
</div>

## OpenAI·Anthropic과의 차이점

유사한 클라우드 호스팅 에이전트 아키텍처(OpenAI Codex, Anthropic Claude Code)와 비교할 때, Gemini Managed Agents API의 핵심 차이점은 **격리(isolation) 기본값**이다. Gemini는 구글 인프라에서 네트워크가 격리된 상태로 에이전트를 실행한다. 외부 접근은 명시적 allowlist로 활성화해야 한다. Claude Code 등은 로컬 또는 완전한 네트워크 접근으로 실행된다. 두 접근 방식은 서로 다른 위협 모델과 배포 맥락에 최적화됐다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Gemini Managed Agents API: POST 한 번으로 격리 Linux 샌드박스에서 상태 유지 에이전트 즉시 실행</li>
<li>environment_id로 세션 재개 — 데이터베이스·큐·상태 머신 불필요</li>
<li>ADK 2.0 GA: 그래프 기반 워크플로 엔진, Python·TS·Go·Java·Kotlin 지원</li>
<li>Antigravity 2.0 IDE: VS Code 기반, 최대 5개 병렬 에이전트 관리 뷰</li>
<li>장기 실행 에이전트(며칠~몇 주 지속) 공식 지원 — 상태 체크포인트·이벤트 기반 대기·분리 평가</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://byteiota.com/gemini-managed-agents-api-stateful-ai-agents-one-call/" target="_blank" rel="noopener noreferrer">Gemini Managed Agents API 상세 기술 분석 — byteiota</a><br>— <a href="https://google.github.io/adk-docs/2.0" target="_blank" rel="noopener noreferrer">Google ADK 2.0 공식 문서</a><br>— <a href="https://www.youtube.com/watch?v=VGpfnbr7rso" target="_blank" rel="noopener noreferrer">Google Cloud Tech — 장기 실행 에이전트 빌드 실습 영상</a><br>— <a href="https://www.youtube.com/watch?v=OdrOmc_RX8A" target="_blank" rel="noopener noreferrer">Google for Developers — Gemini API로 에이전트 빌드 (Google I/O 2026)</a></div></div>
