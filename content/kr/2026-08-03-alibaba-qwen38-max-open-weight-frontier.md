---
draft: true
title: "알리바바 Qwen3.8-Max 공개 — 2.4조 파라미터 오픈웨이트로 서방 선두 AI에 정면 도전"
summary: "알리바바가 2.4조 파라미터 규모의 최신 플래그십 모델 Qwen3.8-Max를 공식 출시했다. 내부 벤치마크에서 Anthropic Fable 5·GPT-5.6 Sol과 동급 성능을 주장하며, 다음 주 Hugging Face에 오픈웨이트까지 공개 예정이다. 수일 단위 장기 작업을 자율 수행하는 에이전트 능력이 핵심으로, 중국 AI의 미국 추격이 다시 속도를 내고 있다."
category: "ai-news"
date: "2026-08-03"
readingTime: 5
tags: ["알리바바", "Qwen", "오픈웨이트", "AI경쟁", "LLM"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> 알리바바가 2026년 8월 3일 Qwen 계열 사상 가장 큰 모델인 Qwen3.8-Max를 정식 출시했다. 총 2.4조 파라미터(쿼리당 95B 활성)의 MoE 구조로, 내부 테스트에서 Anthropic Fable 5와 GPT-5.6 Sol에 맞먹는 성능을 보였다. 특히 칩 자율 설계·논문 재현·가상 이커머스 운영 등 수일에 걸친 장기 과제를 혼자 처리하는 에이전트 능력이 두드러진다. 모델은 지금 QwenCloud API로 사용 가능하며, 오픈웨이트는 다음 주 공개 예정이다.
</div>

## 무슨 일이 있었나

알리바바는 2026년 8월 3일 공식 블로그를 통해 Qwen3.8-Max를 전 세계에 공개했다. 이 모델은 6월 말 '토큰 플랜' 베타로 한 달 앞서 미리 공개됐지만, 이번 출시로 누구나 QwenCloud에서 사용할 수 있게 됐다. 더 주목할 점은 다음 주 Hugging Face와 ModelScope에서 오픈웨이트까지 무료로 내려받을 수 있다는 점이다. Qwen-Max 급 모델이 오픈웨이트로 공개되는 것은 이번이 처음이다.

출시 배경에는 치열한 중국-미국 AI 경쟁이 있다. 바로 일주일 전인 7월 27일 Moonshot AI가 2.8조 파라미터 오픈웨이트 모델 Kimi K3를 공개했고, 7월 31일에는 ByteDance와 MiniMax도 잇달아 고성능 동영상 생성 모델을 출시했다. 알리바바의 이번 발표는 이 연쇄 출시의 정점이다.

## 아키텍처와 핵심 사양

Qwen3.8-Max는 이전 Qwen3.5 아키텍처를 기반으로 하되 규모를 대폭 키운 혼합 전문가(MoE) 구조다. 총 파라미터는 2.4조지만 쿼리당 활성 파라미터는 95B에 불과해 추론 비용을 억제한다. 멀티모달 처리 범위도 인상적이다. 200페이지 이상의 문서와 100시간 이상의 영상을 단일 입력으로 처리한다.

API 호환성은 OpenAI Chat Completions 포맷과 Anthropic API 프로토콜을 모두 지원한다. 덕분에 Claude Code, Codex, Qoder CLI 등 기존 에이전트 프레임워크에 코드 수정 없이 꽂아 쓸 수 있다. 추론 속도와 정확도 간 균형을 조절하는 `reasoning_effort` 파라미터도 세 단계로 제공한다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">2.4조</span>
<span class="stat-label">총 파라미터 수</span>
</div>
<div class="stat-item">
<span class="stat-number">95B</span>
<span class="stat-label">쿼리당 활성 파라미터</span>
</div>
<div class="stat-item">
<span class="stat-number">93</span>
<span class="stat-label">PaperBench 점수 (비교군 최고)</span>
</div>
<div class="stat-item">
<span class="stat-number">86.6</span>
<span class="stat-label">TerminalBench 2.1 점수</span>
</div>
</div>

## 벤치마크: 알리바바의 주장과 독립 검증

알리바바가 자체 공개한 벤치마크에서 Qwen3.8-Max는 Claude Opus 4.8, Fable 5, GPT-5.6 Sol과 다수 항목에서 동급 또는 우위를 기록했다. 군중 소싱 비교 플랫폼 Arena.AI 리더보드에서도 Fable 5와 Opus 계열 바로 다음 순위에 올랐다.

특히 PaperBench(93점)는 비교군 전체 최고 점수다. 소스 코드 없이 구동 중인 애플리케이션을 역공학으로 재현하는 새 벤치마크 RecreationBench도 함께 공개됐다. TerminalBench 2.1에서는 86.6점으로 GPT-5.6 Sol(88.8)에 2.2점 뒤졌다. 단, 이 수치 전체는 알리바바 내부 측정값이며 독립 검증은 아직 진행 중이다.

| 벤치마크 | Qwen3.8-Max | 비고 |
|---|---|---|
| PaperBench | 93 | 비교군 최고 |
| TerminalBench 2.1 | 86.6 | GPT-5.6 Sol은 88.8 |
| Arena.AI 종합 | 4위권 | Fable 5·Opus 3종 다음 |
| 프론트엔드 코딩 | 3위권 | Claude Opus 2종·Kimi K3 다음 |

<div class="article-callout tip">
<strong>오픈웨이트가 갖는 전략적 의미</strong> 중국 AI 기업들이 잇달아 오픈웨이트 모델을 내놓는 데는 기술 경쟁 외에도 뚜렷한 전략이 있다. 베이징은 오픈 공개를 전 세계 AI 거버넌스에서 중국 영향력을 키우고 국내 AI 기업의 광범위한 채택을 유도하는 수단으로 장려하고 있다. Qwen3.8-Max의 오픈웨이트 공개는 그 흐름에서 가장 규모 있는 사례가 될 전망이다.
</div>

## 장기 에이전트 능력: 진짜 차별점

이번 모델의 가장 주목할 특징은 단순 질의응답을 넘어 며칠에 걸친 복잡한 과제를 스스로 처리하는 장기 에이전트 능력이다. 알리바바는 Qwen3.8-Max가 소프트웨어 자율 개발, 논문 결과 재현 및 개선, 가상 이커머스 사업 운영 시뮬레이션을 성공적으로 수행했다고 밝혔다. 칩 설계 자동화 과제에서도 의미 있는 결과가 보고됐다.

이는 Anthropic의 Fable 5나 OpenAI의 Astra가 추구하는 '멀티에이전트 협업을 통한 장기 추론' 방향과 정확히 겹친다. 미국 프런티어 랩의 핵심 방향을 중국 오픈 모델이 같은 속도로 추격하고 있다는 뜻이다.

## 왜 중요한가

Qwen3.8-Max는 단순한 신규 모델 출시가 아니다. 이번 발표는 세 가지 흐름이 동시에 교차하는 지점이다.

첫째, 중국 AI의 미국 추격이 벤치마크 주장에서 실사용 경쟁력으로 넘어가고 있다. 둘째, 최고급 모델에 오픈웨이트를 붙이는 전략이 서방 폐쇄형 모델과의 차별화 포인트로 자리잡고 있다. 셋째, OpenAI·Anthropic의 폐쇄형 에이전트 플랫폼과 달리 오픈 생태계 친화적인 방향이 글로벌 개발자 채택을 빠르게 확대할 수 있다.

7월 30일 미국 FCC가 중국산 휴머노이드 로봇 수입을 금지하는 등 하드웨어 전선에서는 규제가 강화되는 반면, AI 소프트웨어 전선에서는 오픈웨이트 공개가 그 빈틈을 파고드는 양상이다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>알리바바 Qwen3.8-Max, 2026년 8월 3일 공식 출시 — Qwen 계열 최대·최강 모델</li>
<li>2.4조 파라미터(쿼리당 95B 활성), Fable 5·GPT-5.6 Sol과 동급 성능 주장</li>
<li>오픈웨이트 다음 주 Hugging Face·ModelScope 공개 — Qwen-Max 급 최초</li>
<li>PaperBench 93점 최고, TerminalBench 2.1에서 GPT-5.6 Sol에 2.2점 뒤져</li>
<li>OpenAI·Anthropic API 포맷 모두 지원, Claude Code 등 기존 툴에 바로 호환</li>
<li>Kimi K3·ByteDance·MiniMax 연쇄 출시 속 중국 오픈 AI 공세 정점</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.alibabacloud.com/blog/qwen3-8-max-a-new-bar-for-coding-and-cowork_603421" target="_blank" rel="noopener">Alibaba Cloud — Qwen3.8-Max 공식 블로그 포스트</a><br/>
· <a href="https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/" target="_blank" rel="noopener">The Decoder — Qwen3.8-Max 상세 분석</a><br/>
· <a href="https://www.theverge.com/ai-artificial-intelligence/974342/alibaba-qwen-max-open-weight-ai" target="_blank" rel="noopener">The Verge — China's Alibaba takes another swipe at America's AI supremacy</a><br/>
</div>
