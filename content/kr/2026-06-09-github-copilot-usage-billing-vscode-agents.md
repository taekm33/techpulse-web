---
title: "GitHub Copilot 토큰 종량제 돌입 — VS Code 에이전트 안정화, 개발자 반응은?"
summary: "6월 1일부터 GitHub Copilot이 사용량 기반 과금(AI Credits)으로 전환됐다. 동시에 VS Code에서 에이전트 창이 정식 안정화되고 에어갭 BYOK 지원이 추가됐다. 혜택과 비용 충격이 교차하고 있다."
category: "dev-trend"
date: "2026-06-09"
readingTime: 5
tags: ["GitHub Copilot", "VS Code", "AI 코딩", "사용량 과금", "개발자 도구"]
---

<div class="article-tldr">
2026년 6월 1일, GitHub Copilot이 정액 요금제에서 <strong>토큰 사용량 기반 AI Credits 과금</strong>으로 전환됐다. 동시에 VS Code에서는 에이전트 창이 안정화 버전으로 출시되고, 에어갭 환경에서도 동작하는 BYOK(자체 키 사용)가 지원됐다. 비용 투명성이 높아진 반면, 일부 개발자는 하루 만에 한 달 크레딧을 소진하는 상황이 발생했다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/mv6MMQ2j128" title="How to ship from issue to merge with the GitHub Copilot app | demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 토큰 종량제 시대 개막 — 무엇이 달라졌나

6월 1일 이전까지 Copilot은 "프리미엄 요청(PRU)" 단위로 사용량을 계산했다. 짧은 질문이든 수십 분 걸리는 에이전트 작업이든 같은 1요청으로 처리됐다. 이 구조가 무너졌다.

이제 모든 Copilot 플랜은 **GitHub AI Credits**로 과금된다. 1 AI Credit = $0.01 USD이며, 모델과 입·출력 토큰 수에 따라 다르게 차감된다. 가벼운 모델에 간단한 질문 한 번은 1크레딧 미만이지만, 최고 성능 모델로 대규모 코드베이스를 대상으로 한 에이전트 세션은 수백 크레딧을 소비할 수 있다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">1,500</span>
<span class="stat-label">Copilot Pro 월 포함 크레딧 ($10/월)</span>
</div>
<div class="stat-item">
<span class="stat-number">7,000</span>
<span class="stat-label">Copilot Pro+ 월 포함 크레딧 ($39/월)</span>
</div>
<div class="stat-item">
<span class="stat-number">20,000</span>
<span class="stat-label">Copilot Max 월 포함 크레딧 ($100/월)</span>
</div>
</div>

## 플랜별 크레딧 구조

| 플랜 | 월 가격 | 기본 크레딧 | Flex 추가 | 총 크레딧 |
|------|--------|------------|---------|---------|
| Copilot Pro | $10 | 1,000 | 500 | **1,500** |
| Copilot Pro+ | $39 | 3,900 | 3,100 | **7,000** |
| Copilot Max | $100 | 10,000 | 10,000 | **20,000** |

- 기본 크레딧(Base): 구독 가격과 1:1 매칭, 변경 없음
- Flex 추가분: AI 경제성 변화에 따라 조정될 수 있는 변동 항목
- 코드 자동완성·Next Edit Suggestions: 모든 유료 플랜에서 크레딧 차감 없이 무제한 제공

## 개발자 반응 — 크레딧 충격

전환 첫 주, 개발자 커뮤니티에서는 예상치 못한 크레딧 소비 속도에 관한 글이 쏟아졌다:

- "Minesweeper 게임 만들기" 프롬프트 한 번에 **94 크레딧** 소비
- 복잡한 프롬프트 한 번에 **171 크레딧**
- "프롬프트 몇 개" 입력 후 **700 크레딧** 소진
- Copilot 에이전트 기반 커밋 두 번에 **5,000 크레딧** — Copilot Max 한 달 치 25%

왜 이런 일이 생기는가? 에이전트 모드는 하나의 작업을 처리하면서 모델을 여러 차례 호출한다. 긴 대화 스레드를 유지하면 이전 메시지 전체가 매 요청마다 입력 토큰으로 포함된다. 채팅을 3일째 이어가고 있다면, 그 3일치 대화가 매번 전송된다는 뜻이다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>크레딧 아끼는 실전 팁</strong><br>— <strong>Auto Model Selection 사용:</strong> 10% 할인 적용됨<br>— <strong>긴 대화 스레드 피하기:</strong> 새 채팅을 자주 시작해 컨텍스트 토큰 절감<br>— <strong>가벼운 작업엔 경량 모델:</strong> 커밋 메시지·리네임 등에 nano 모델 활용<br>— <strong>Settings에서 모델 라우팅 지정:</strong> 관리자는 작업 유형별 모델 분리 설정 가능<br>— <strong>Daily 크레딧 사용량 모니터링:</strong> GitHub Settings → Billing에서 실시간 확인</div>
</div>

## VS Code 에이전트 창 — 안정화 출시

비용 이슈와 함께 대규모 기능 업데이트도 있었다. GitHub는 5월부터 6월 초까지 VS Code v1.120~v1.123을 연속으로 출시하며 에이전트 기능을 대폭 강화했다.

### 에이전트 창(Agents Window) 안정화 (v1.120, 5월 13일)
실험적 기능이던 에이전트 창이 **Stable Preview**로 격상됐다. 여러 프로젝트에 걸친 변경 사항 검토, 병렬 작업스트림 관리, 세션 유지 등 멀티스텝 코딩 작업을 파일 개별 편집 없이 지시하는 전용 UI다.

### 원격 에이전트 지원 (v1.121, 5월 20일)
SSH 또는 Dev Tunnels를 통해 원격 머신에서 에이전트 세션을 실행할 수 있다. 로컬 클라이언트 연결이 끊겨도 **세션이 계속 실행**된다.

### 에어갭 BYOK (v1.122, 5월 28일)
가장 중요한 업데이트다. 이전까지 Copilot BYOK는 GitHub OAuth 인증을 반드시 거쳐야 했다 — 인터넷이 필요했다. v1.122부터는 **GitHub OAuth 없이도** BYOK 모델을 구성하면 Chat 뷰가 활성화된다. 요청은 직접 설정한 공급자(Anthropic·Azure·Gemini·OpenAI·Ollama 등)로 라우팅된다.

완전한 에어갭 환경에서는 Ollama나 vLLM 같은 로컬 추론 서버를 BYOK 공급자로 설정하면 인터넷 없이 동작한다. `COPILOT_OFFLINE` 환경변수를 추가하면 텔레메트리까지 차단된다.

### 엔터프라이즈 관리 플러그인 (6월 5일, 공개 프리뷰)
Copilot Business·Enterprise 관리자는 조직 전체에 배포할 커스텀 에이전트·스킬·MCP 설정을 `.github-private/.github/copilot/settings.json` 한 곳에서 관리할 수 있게 됐다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>규제 산업 개발자에게</strong><br>에어갭 BYOK + FedRAMP Moderate 인증(2026년 4월 취득) + 엔터프라이즈 관리 플러그인의 조합은 국방·의료·금융 기관이 Copilot 도입을 막아온 마지막 장벽을 제거했다. 네트워크 격리 환경 전체 조직 배포가 이제 기술적으로 가능하다.</div>
</div>

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>6월 1일부터 GitHub Copilot이 토큰 사용량 기반 AI Credits 과금 체계로 전환됐다.</li>
<li>일부 개발자는 복잡한 에이전트 세션 몇 번으로 한 달치 크레딧을 빠르게 소진하는 상황 발생.</li>
<li>VS Code v1.120~v1.123을 통해 에이전트 창 안정화·원격 에이전트·에어갭 BYOK 순차 출시.</li>
<li>에어갭 환경에서도 Ollama·vLLM 같은 로컬 모델로 완전 오프라인 AI 코딩 워크플로 구현 가능.</li>
<li>엔터프라이즈 관리 플러그인으로 조직 전체에 Copilot 설정을 중앙 배포할 수 있게 됐다.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/features/copilot/plans" target="_blank" rel="noopener noreferrer">GitHub Copilot 플랜 및 가격 공식 페이지</a><br>— <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot 기능 개요 페이지</a><br>— <a href="https://github.com/microsoft/Lens" target="_blank" rel="noopener noreferrer">Microsoft Lens 모델 (GitHub) — 효율적 이미지 생성 AI 참고</a><br>— <a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener noreferrer">OpenAI Cookbook — AI 코딩 에이전트 활용 예제</a></div></div>
