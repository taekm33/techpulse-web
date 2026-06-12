---
title: "OpenAI, Codex 강화를 위해 클라우드 실행 스타트업 Ona 인수"
summary: "OpenAI가 보안 클라우드 에이전트 실행 기술을 가진 Ona를 인수해 Codex를 노트북 오프라인 상태에서도 장시간 작동하는 엔터프라이즈 플랫폼으로 확장한다."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["OpenAI", "Codex", "AI에이전트", "클라우드", "엔터프라이즈"]
---

<div class="article-tldr">
<strong>한 줄 요약:</strong> OpenAI가 2026년 6월 11일 클라우드 실행·오케스트레이션 스타트업 <strong>Ona</strong>를 인수한다고 발표했다. Ona의 기술은 AI 에이전트가 사용자 세션이 끊긴 후에도 고객사 클라우드 환경에서 계속 작업할 수 있게 해주며, Codex의 엔터프라이즈 장기 에이전트 시나리오를 대폭 강화할 전망이다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/_-cdky1tbaQ" title="OpenAI + Dell Bring Codex On-Prem (AI Agents Behind the Firewall)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Ona 인수 배경

OpenAI는 6월 11일(현지 시각) 공식 블로그를 통해 **Ona** 인수 계획을 공개했다. Ona는 2백만 명 이상의 개발자가 사용하는 보안 클라우드 개발 환경 전문 스타트업으로, 재현 가능하고 격리된 클라우드 실행 환경 기술을 핵심 자산으로 보유하고 있다.

인수 결정의 직접적 배경은 **Codex의 폭발적 성장**이다. OpenAI에 따르면 현재 Codex는 주간 500만 명 이상이 사용하며, 이는 올해 초 대비 400% 증가한 수치다. 사용 패턴 또한 단순 코드 생성을 넘어 수 시간~수일에 걸친 복합 워크플로 자동화로 진화하고 있어, "세션 종료 후에도 작업이 지속되는" 인프라가 시급해진 상황이었다.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">500만+</span><span class="stat-label">Codex 주간 활성 사용자</span></div>
<div class="stat-item"><span class="stat-number">400%</span><span class="stat-label">올해 초 대비 사용자 증가율</span></div>
<div class="stat-item"><span class="stat-number">200만+</span><span class="stat-label">Ona 클라우드 환경 사용 개발자</span></div>
<div class="stat-item"><span class="stat-number">2026.06.11</span><span class="stat-label">인수 발표일</span></div>
</div>

## Ona가 해결하는 문제: 에이전트의 '집'

기존 Codex(로컬 및 클라우드)는 사용자가 세션을 열고 있는 동안에만 에이전트가 작동한다는 근본적인 제약이 있었다. 코드베이스 전체 리팩토링, 보안 취약점 전수 점검 같은 수십 시간짜리 작업에는 적합하지 않았다.

Ona의 기술은 다음 문제를 해결한다:

- **세션 독립 실행**: 노트북을 닫아도 고객사 클라우드 내부에서 에이전트 작업 지속
- **고객 제어 환경**: 에이전트가 OpenAI의 공용 클라우드가 아닌 **고객사 자체 인프라** 내에서 동작
- **보안 경계 유지**: 자격증명 범위, 활동 로그, 접근 권한을 기업 정책 그대로 적용

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>엔터프라이즈 핵심 포인트</strong><br>Ona의 '고객 제어 실행 모델(customer-controlled execution)'을 통해 기업은 데이터가 자사 클라우드 밖으로 나가지 않으면서도 OpenAI의 지능·오케스트레이션 능력을 그대로 활용할 수 있다. 금융·헬스케어 등 데이터 거버넌스가 엄격한 업종에 결정적 이점이다.</div>
</div>

## Codex 생태계의 전략적 확장

이번 인수는 OpenAI가 Codex를 단순 코딩 도구에서 **범용 엔터프라이즈 자동화 플랫폼**으로 전환하는 전략의 일환이다. OpenAI Core Products Lead Thibault Sottiaux는 "기업은 강력한 에이전트가 자신들의 환경 보안 요건을 충족하면서 실제 업무를 수행하기를 원한다. Ona는 그 요건을 충족하면서 Codex를 더 쉽게 배포할 수 있게 해줄 것"이라고 말했다.

| 구분 | 기존 Codex | Ona 인수 후 |
|------|-----------|------------|
| 실행 환경 | 로컬 샌드박스 또는 OpenAI 호스팅 | 고객사 자체 클라우드 |
| 세션 지속성 | 활성 세션 의존 | 세션 종료 후에도 지속 |
| 데이터 위치 | OpenAI 인프라 경유 | 고객사 네트워크 내부 |
| 엔터프라이즈 보안 | 제한적 | 자격증명·감사 로그 완전 통제 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>인수 절차 현황</strong><br>인수는 규제 당국의 승인 등 통상적 절차가 남아 있으며, 완료 전까지 OpenAI와 Ona는 독립적으로 운영된다. 인수 완료 후 Ona 팀은 OpenAI Codex 팀에 합류해 엔터프라이즈 확장을 가속화할 예정이다.</div>
</div>

## 경쟁 구도: Anthropic·GitHub Copilot과의 대결

엔터프라이즈 AI 코딩 에이전트 시장은 급속히 성장 중이다. Anthropic의 Claude는 KPMG 등 대형 회계·컨설팅 기업에 깊이 침투하고 있으며, GitHub Copilot은 이미 수십만 개의 기업 환경에 배포돼 있다. OpenAI는 이번 Ona 인수를 통해 **데이터 레지던시**와 **보안 경계**라는 엔터프라이즈 도입의 가장 큰 장벽을 낮추는 전략을 선택했다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>OpenAI가 클라우드 실행 스타트업 Ona를 인수해 Codex 엔터프라이즈 장기 에이전트 강화 (2026.06.11)</li>
<li>Codex 주간 사용자 500만+, 올해 초 대비 400% 성장 — 세션 지속성 인프라 필요성 증대</li>
<li>Ona 기술: 노트북 오프라인 후에도 고객사 클라우드 내에서 에이전트 작업 지속</li>
<li>고객 제어 실행 모델로 데이터가 기업 인프라 밖으로 나가지 않음 — 금융·의료 규제 산업에 핵심</li>
<li>Ona 팀은 인수 완료 후 OpenAI Codex 팀 합류 예정</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://openai.com/index/openai-to-acquire-ona/" target="_blank" rel="noopener noreferrer">OpenAI 공식 발표 — OpenAI to acquire Ona</a><br>— <a href="https://developers.openai.com/codex/enterprise/admin-setup" target="_blank" rel="noopener noreferrer">Codex 엔터프라이즈 관리자 설정 가이드 (OpenAI Developers)</a><br>— <a href="https://economictimes.indiatimes.com/tech/artificial-intelligence/openai-to-acquire-ona-to-strengthen-codex-cloud-capabilities/articleshow/131664834.cms" target="_blank" rel="noopener noreferrer">OpenAI의 Ona 인수 배경 분석 — The Economic Times</a></div></div>
