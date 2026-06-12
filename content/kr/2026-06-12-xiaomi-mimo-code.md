---
title: "시아오미 MiMo Code 공개 — 200단계 장기 코딩도 끊기지 않는 오픈소스 AI 에이전트"
summary: "시아오미가 MIT 라이선스로 MiMo Code를 오픈소스로 공개했다. 크로스 세션 메모리와 자기 진화 시스템을 탑재해 200단계 이상의 장기 소프트웨어 공학 태스크에서 Claude Code를 능가한다고 주장한다."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["xiaomi", "mimo-code", "ai-coding-agent", "open-source", "terminal"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> 시아오미가 MIT 라이선스 터미널 네이티브 AI 코딩 에이전트 <strong>MiMo Code v0.1.0</strong>을 오픈소스 공개했다. 핵심 차별점은 <strong>크로스 세션 퍼시스턴트 메모리</strong>로, 세션이 닫혀도 프로젝트 컨텍스트를 유지한다. 200단계 이상 복잡 장기 태스크에서 Claude Code를 능가한다는 벤치마크 결과를 함께 발표했다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/08X2cLpra9I" title="Xiaomi MiMo-Code: The Coding Agent That Remembers" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 기억하는 코딩 에이전트의 등장

2026년 6월 10일, 시아오미 MiMo 팀은 터미널 기반 AI 코딩 에이전트 **MiMo Code**를 MIT 라이선스로 오픈소스 공개했다. OpenCode를 포크 기반으로 구축된 이 도구는 코드 읽기·쓰기, 명령 실행, Git 관리뿐 아니라 **퍼시스턴트 메모리 시스템**을 통해 세션이 종료되어도 프로젝트에 대한 깊은 이해를 유지한다.

기존 AI 코딩 에이전트가 세션을 닫으면 모든 컨텍스트를 잃는 것과 달리, MiMo Code는 메모리를 자동으로 정리하고 증류하는 **자기 진화(Self-Evolution)** 메커니즘을 내장한다. GitHub에 공개된 v0.1.0은 출시 이틀 만에 5,700개 이상의 스타를 받으며 개발자 커뮤니티의 주목을 받고 있다.

<div class="article-stats">
<div class="article-stat"><span class="article-stat__value">5,700+</span><span class="article-stat__label">GitHub 스타 (출시 이틀)</span></div>
<div class="article-stat"><span class="article-stat__value">200+</span><span class="article-stat__label">처리 가능 최대 태스크 단계</span></div>
<div class="article-stat"><span class="article-stat__value">100만</span><span class="article-stat__label">MiMo Auto 컨텍스트 토큰</span></div>
</div>

## 핵심 기술 구조: 컴퓨테이션·메모리·진화

공식 기술 블로그에 따르면 MiMo Code의 설계는 세 가지 테마를 축으로 한다. 첫째, **컴퓨테이션** — 메인 루프 상태 기계(State Machine)를 기반으로 목표 주도 자율 루프를 실행하며 서브에이전트 오케스트레이션으로 병렬 작업을 처리한다. 둘째, **메모리** — 구조화된 인코딩 방식으로 프로젝트 지식을 세션 간에 영구 보존한다. 셋째, **진화** — dream/distill 메커니즘이 주기적으로 저장된 컨텍스트를 검토하고 응축해 메모리 품질을 스스로 향상시킨다.

## 다른 에이전트와의 비교

| 기능 | MiMo Code | Claude Code | GitHub Copilot |
|------|-----------|-------------|----------------|
| 크로스 세션 메모리 | ✅ 영구 보존 | ❌ 세션 초기화 | ❌ 세션 초기화 |
| 오픈소스 | ✅ MIT | ❌ 상용 | ❌ 상용 |
| 내장 무료 모델 | ✅ MiMo Auto | ❌ | ❌ |
| 장기 태스크 (200+ 단계) | ✅ 설계 목적 | 제한적 | 제한적 |
| 서브에이전트 오케스트레이션 | ✅ | ✅ | ❌ |
| 보이스 입력 | ✅ (로그인 필요) | ❌ | ❌ |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>바로 설치하기</strong><br>터미널에서 <code>curl -fsSL https://mimo.xiaomi.com/install | bash</code> 또는 <code>npm install -g @mimo-ai/cli</code>로 설치한다. 첫 실행 시 TUI가 자동으로 모델 설정을 안내한다. 기존 Claude Code 자격증명을 한 단계로 임포트할 수 있어 마이그레이션이 간편하다.
</div>
</div>

## 모델 독립성이 핵심 강점

MiMo Code는 특정 모델에 종속되지 않는다. 기본 내장 **MiMo Auto**(한시적 무료, 100만 토큰 컨텍스트 지원, MiMo-V2.5 기반)를 기본값으로 사용하지만, Xiaomi MiMo Platform OAuth 로그인, 기존 Claude Code 설정 임포트, 또는 OpenAI 호환 커스텀 API 직접 연결 중 자유롭게 선택할 수 있다. 공식 블로그가 강조하는 메시지는 명확하다 — 메모리와 워크플로우가 이 제품의 핵심이며, 모델은 사용자가 결정한다.

**Compose 모드**는 "한 사람의 전문 개발팀"을 표방하며 아이디어에서 출시 가능한 제품까지 공업 수준의 딜리버리를 목표로 한다. TenVAD와 MiMo ASR을 활용한 실시간 스트리밍 보이스 인풋도 제공한다(로그인 사용자 전용).

<div class="article-keypoints">
<ul>
<li>MIT 라이선스 오픈소스 터미널 네이티브 코딩 에이전트, OpenCode 포크 기반</li>
<li>크로스 세션 퍼시스턴트 메모리로 세션 종료 후에도 프로젝트 컨텍스트 보존</li>
<li>dream/distill 자기 진화 시스템으로 메모리를 자동 정리·응축</li>
<li>200단계 이상 복잡 소프트웨어 공학 태스크에서 Claude Code 능가 주장</li>
<li>MiMo Auto 무료 모델 내장, OpenAI 호환 API 포함 다양한 모델 지원</li>
</ul>
</div>

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>
— <a href="https://github.com/XiaomiMiMo/MiMo-Code" target="_blank" rel="noopener noreferrer">MiMo Code 공식 GitHub 저장소 (MIT 라이선스, v0.1.0)</a><br>
— <a href="https://github.com/XiaomiMiMo/MiMo-Code/releases/tag/v0.1.0" target="_blank" rel="noopener noreferrer">v0.1.0 릴리즈 노트 및 바이너리 다운로드</a><br>
— <a href="https://raw.githubusercontent.com/XiaomiMiMo/MiMo-Code/main/README.md" target="_blank" rel="noopener noreferrer">README: 설치 방법 · 빠른 시작 · 설정 가이드</a>
</div>
</div>
