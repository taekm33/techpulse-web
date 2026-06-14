---
title: "Databricks, AI 에이전트 통합 메타하네스 'Omnigent' 오픈소스 공개"
summary: "Apache Spark 창시자 Matei Zaharia 주도로 Databricks가 Claude Code·Codex·Pi 등 여러 AI 에이전트를 하나의 인터페이스로 조합·통제하는 오픈소스 메타하네스 Omnigent를 공개했습니다. Apache 2.0 라이선스, 알파 버전으로 즉시 사용 가능합니다."
category: "dev-trend"
date: "2026-06-14"
readingTime: 5
tags: ["omnigent", "databricks", "ai-agents", "meta-harness", "open-source"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> Databricks가 2026년 6월 13일 오픈소스 메타하네스 Omnigent를 공개했습니다. 기존 AI 코딩 에이전트(Claude Code, Codex, Pi)가 각 에이전트 개별 레이어에서 동작했다면, Omnigent는 이들을 통합하는 상위 레이어입니다. 다수의 에이전트를 하나의 정책으로 제어하고, 라이브 세션을 팀원과 실시간 공유하며, 터미널·웹·데스크탑·모바일에서 동일 세션에 접근할 수 있습니다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/heouBA5U1bE" title="Genie Code in action – Databricks 공식 AI 에이전트 엔드투엔드 데모" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트 하네스의 다음 단계: 메타하네스

오늘날 AI 코딩 에이전트들은 각자의 하네스(harness) 위에서 동작합니다. 하네스는 모델을 에이전트로 만드는 스캐폴딩으로, 파일 읽기·터미널 실행·API 호출 같은 능력을 부여하는 레이어입니다. Claude Code, Codex, Pi가 각각 하네스입니다.

Databricks는 이 다음 추상화 레이어가 **메타하네스**라고 봅니다. 여러 하네스를 동시에 감싸는 층으로, 각 에이전트가 어떤 LLM을 내부적으로 사용하든 동일한 정책·세션·협업 방식이 적용됩니다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>핵심 인사이트</strong><br>에이전트 하네스가 모델 교체를 가능하게 했다면, 메타하네스는 하네스 자체를 교체 가능하게 만듭니다. Omnigent에서는 Claude Code에서 Codex로의 전환이 한 줄 코드 변경으로 끝납니다.</div>
</div>

## Omnigent의 세 가지 핵심 가치

### 1. 조합(Composition)

Omnigent는 Claude Code, Codex, Pi, 사용자 정의 에이전트를 단일 인터페이스 아래 묶습니다. 여러 에이전트가 하나의 태스크를 병렬로 처리하거나, 각각 다른 하위 태스크를 맡아 협력하는 멀티에이전트 워크플로우를 코드 재작성 없이 구성할 수 있습니다.

### 2. 통제(Control)

기존 에이전트 정책은 프롬프트 기반이어서 에이전트가 우회하거나 맥락 변화에 따라 무력화될 수 있었습니다. Omnigent의 정책은 **상태 추적형(stateful)**입니다. 에이전트 행동을 실시간으로 추적하고, 비용 예산 초과 시 일시정지, npm install 이후 git push 차단 같은 맥락 인식 규칙을 메타하네스 레이어에서 강제합니다.

### 3. 협업(Collaboration)

에이전트 세션을 URL로 공유할 수 있습니다. 팀원이 라이브 세션에 참여해 에이전트 작업물을 함께 검토하고, 파일에 코멘트를 달고, 세션을 포크하거나 직접 제어권을 가져올 수 있습니다.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">Apache 2.0</span><span class="stat-label">오픈소스 라이선스</span></div>
<div class="stat-item"><span class="stat-number">138+</span><span class="stat-label">출시 이틀 만의 GitHub 스타</span></div>
<div class="stat-item"><span class="stat-number">4</span><span class="stat-label">지원 인터페이스 (터미널·웹·데스크탑·모바일)</span></div>
</div>

## 아키텍처

Omnigent는 두 컴포넌트로 구성됩니다.

**Runner:** 어떤 에이전트든 샌드박스 세션으로 감싸 균일한 API를 제공합니다. Omnibox라는 OS 샌드박스가 네트워크 요청을 가로채 에이전트에게 크레덴셜이 직접 노출되지 않도록 합니다. GitHub 토큰은 이그레스 프록시를 통해 승인된 요청에만 주입됩니다.

**Server:** 정책과 세션 공유를 담당하며 터미널·웹앱·API 등 모든 인터페이스에 동일한 세션을 노출합니다.

## 단일 하네스 vs. Omnigent 메타하네스 비교

| 기능 | 단일 하네스 (예: Claude Code) | Omnigent 메타하네스 |
|---|---|---|
| 에이전트·모델 | 한 하네스, 내부 모델 교체 | Claude Code·Codex·Pi·SDK·커스텀 교체 가능 |
| 전환 비용 | 도구별 재통합 필요 | 한 줄 변경 |
| 인터페이스 | 터미널 또는 전용 UI | 터미널·웹·데스크탑·모바일·API 동기화 |
| 정책 | 허용/거부 목록, 프롬프트 기반 | 상태 추적형 맥락 정책 |
| 비용 관리 | 수동 추적 | 예산 정책으로 임계점 초과 시 자동 일시정지 |
| 협업 | 도구 간 복사·붙여넣기 | URL로 라이브 세션 공유·공동 작업 |
| 클라우드 실행 | 로컬 머신 | Modal·Daytona 클라우드 샌드박스 |
| 라이선스 | 도구별 상이 | Apache 2.0 오픈소스 |

## 설치 및 시작

Omnigent는 Python 3.12+, Node.js 22 LTS, tmux가 필요합니다. 설치는 단일 명령으로 완료됩니다.

```bash
uv tool install -q --python 3.12 git+https://github.com/omnigent-ai/omnigent.git
omnigent
```

실행하면 터미널 UI와 함께 `http://localhost:6767`에 로컬 웹 UI가 자동으로 열립니다. 같은 세션이 브라우저, 같은 네트워크의 모바일, 데스크탑 앱에서 동기화됩니다.

자격증명은 네 가지 유형을 지원합니다: Anthropic·OpenAI 등 1차 API 키, Claude Pro/Max 구독, OpenAI·Anthropic 호환 게이트웨이(OpenRouter, LiteLLM 등), Databricks 워크스페이스.

<div class="article-callout info">
<div class="article-callout__icon">🗓️</div>
<div class="article-callout__body"><strong>Databricks Data + AI Summit 2026</strong><br>Omnigent는 Databricks Data + AI Summit(6월 15-18일, 샌프란시스코 모스콘 센터)에서 공식 발표될 예정입니다. Matei Zaharia의 기조연설에서 라이브 데모와 추가 발표가 예정되어 있습니다.</div>
</div>

## 로드맵

<div class="article-keypoints">
<ul>
<li>메타하네스 레이어의 자동 최적화 (GEPA)</li>
<li>에이전트 내부 코드 기반 인트로스펙션 (MemEx, RLM 유사 기능)</li>
<li>에이전트가 다수 세션에서 작업할 수 있는 Omnigent Server MCP</li>
<li>추가 하네스 통합 확대 (커뮤니티 기여 환영)</li>
<li>Fly.io, Railway, Render, Modal, Daytona 등 배포 타겟 지원 예정</li>
</ul>
</div>

## 결론

Omnigent는 에이전트 생태계의 조각화 문제를 해결하는 인프라 레이어입니다. 단일 에이전트의 성능이 아닌, 여러 에이전트를 안전하게 조합·통제하는 방식 자체를 정의합니다. Kubernetes와 Terraform이 서버 인프라를 추상화했듯, 메타하네스는 에이전트 인프라를 추상화합니다. Apache Spark 창시자가 이 레이어를 오픈소스로 먼저 정의했다는 점이 업계에서 주목받고 있습니다.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/omnigent-ai/omnigent" target="_blank" rel="noopener noreferrer">GitHub: omnigent-ai/omnigent (소스코드, 설치 안내, Apache 2.0)</a><br>— <a href="https://pypi.org/project/omnigent/" target="_blank" rel="noopener noreferrer">PyPI: omnigent 패키지 (pip/uv 설치)</a><br>— <a href="https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents" target="_blank" rel="noopener noreferrer">Databricks 공식 블로그: Omnigent 발표 포스트</a></div></div>
