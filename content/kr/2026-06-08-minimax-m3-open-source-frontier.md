---
title: "MiniMax M3: 프런티어 코딩 + 100만 토큰 + 멀티모달, 세계 최초 오픈웨이트 모델"
summary: "중국 AI 스타트업 MiniMax가 공개한 M3는 세계 최초로 프런티어급 코딩, 100만 토큰 컨텍스트, 네이티브 멀티모달 세 가지를 동시에 구현한 오픈웨이트 모델이다. SWE-Bench Pro 59%, MCP Atlas 74.2%로 상용 모델에 정면 도전장을 내밀었다."
category: "dev-trend"
date: "2026-06-08"
readingTime: 5
tags: ["MiniMax", "오픈소스AI", "LLM", "코딩에이전트", "멀티모달"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — MiniMax M3는 프런티어 코딩(SWE-Bench Pro 59%), 100만 토큰 컨텍스트, 이미지·비디오 입력을 동시에 지원하는 첫 오픈웨이트 모델이다. 독자 개발 MSA(MiniMax Sparse Attention) 아키텍처로 디코딩 속도를 기존 대비 15배 끌어올렸으며, 모델 가중치를 Hugging Face에 공개 예정이다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/5Atmc4wW1k0" title="MiniMax M3: Rivals Opus, 17x Cheaper, Fully Open!" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## "세 가지 조건을 동시에 갖춘 유일한 오픈 모델"

MiniMax는 5월 31일(현지 시각) **MiniMax M3**를 공개했다. 발표 당시 MiniMax는 "100만 토큰 컨텍스트, 네이티브 멀티모달, 프런티어 코딩 세 가지를 동시에 갖춘 유일한 오픈웨이트 모델"이라고 강조했다. 폐쇄형 최상위 모델들만 이 조합을 구현해 왔던 상황에서, M3는 그 문을 오픈 소스 커뮤니티에 처음으로 열었다.

<div class="article-stats">
  <div class="article-stats__item">
    <span class="article-stats__value">59.0%</span>
    <span class="article-stats__label">SWE-Bench Pro 점수</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">1M</span>
    <span class="article-stats__label">토큰 컨텍스트 윈도우</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">15×</span>
    <span class="article-stats__label">MSA 아키텍처 디코딩 가속</span>
  </div>
</div>

## MSA: 하드웨어 병목을 돌파하는 새 어텐션 아키텍처

M3의 핵심 기술은 **MiniMax Sparse Attention(MSA)**이다. 기존 트랜스포머의 어텐션 연산이 시퀀스 길이의 제곱에 비례해 메모리와 연산을 소모하는 데 반해, MSA는 KV 파티셔닝과 연산자 수준 최적화로 이를 획기적으로 줄였다.

- 1M 컨텍스트에서 토큰당 연산 비용 = 이전 세대 대비 **1/10**
- prefill 단계 **9배**, decoding 단계 **15배** 가속
- 유사한 오픈소스 솔루션 대비 처리 속도 **4배**

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>에이전트에서 100만 토큰이 왜 중요한가?</strong><br>
장기 에이전트 작업(24시간 이상 지속, 수천 번의 도구 호출)은 세션 중 누적되는 컨텍스트 때문에 자주 실패한다. M3는 전체 코드베이스, 수천 건의 로그, 또는 긴 비디오를 한 번에 넣어두고 일관성 있게 추론할 수 있다.</div>
</div>

## 벤치마크: 상용 프런티어 모델과 어깨를 나란히

| 벤치마크 | MiniMax M3 | GPT-5.5 | Claude Opus 4.7 | Gemini 3.1 Pro |
|---------|-----------|---------|----------------|----------------|
| SWE-Bench Pro | **59.0%** | 58.6% | ~53% | - |
| MCP Atlas | **74.2%** | - | - | - |
| Terminal-Bench 2.1 | 66.0% | 83.4% | 69.7% | - |
| VideoMME | 84.6% | - | - | - |

SWE-Bench Pro에서 GPT-5.5를 소폭 앞서는 성능은 오픈웨이트 모델 최초다. 단, Terminal-Bench 2.1에서는 GPT-5.5에 뒤처져 있어 모든 영역에서 우세하지는 않다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>현재 이용 방법</strong><br>
모델 가중치는 아직 공개 전이지만, MiniMax API(platform.minimax.io), OpenRouter, MiniMax Code(code.minimax.io), Hermes 에이전트를 통해 지금 바로 사용할 수 있다. 출시 초기 50% 할인이 적용되어 입력 $0.30/1M, 출력 $1.20/1M 수준이다.</div>
</div>

## 네이티브 멀티모달: 이미지·비디오·데스크톱 조작

M3는 텍스트 외에 이미지와 비디오 입력을 기본 지원하며, 데스크톱 조작(computer-use) 기능도 포함한다. 영상 이해 벤치마크 Video-MME에서 84.6%를 기록했다. MiniMax는 향후 이미지·오디오 출력 기능도 추가할 계획이다.

<div class="article-keypoints">
<strong>핵심 요약</strong>
<ul>
  <li>MiniMax M3: 프런티어 코딩 + 1M 토큰 + 네이티브 멀티모달 = 오픈웨이트 최초 결합</li>
  <li>MSA 아키텍처로 디코딩 15배 가속, 1M 컨텍스트에서 비용 1/10 절감</li>
  <li>SWE-Bench Pro 59%로 GPT-5.5를 소폭 앞서는 코딩 성능</li>
  <li>현재 API/OpenRouter로 이용 가능, 모델 가중치는 곧 Hugging Face 공개 예정</li>
  <li>Chinese AI lab들의 오픈소스 전략이 글로벌 LLM 시장 판도를 바꾸고 있다</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.minimax.io/blog/minimax-m3" target="_blank" rel="noopener noreferrer">MiniMax M3 공식 발표 블로그</a><br>— <a href="https://www.minimax.io/models/text/m3" target="_blank" rel="noopener noreferrer">MiniMax M3 모델 페이지 및 사용 안내</a><br>— <a href="https://platform.minimax.io" target="_blank" rel="noopener noreferrer">MiniMax API 플랫폼 — 개발자 접근</a><br>— <a href="https://huggingface.co/MiniMaxAI" target="_blank" rel="noopener noreferrer">MiniMax Hugging Face 모델 저장소 (가중치 공개 예정)</a></div></div>
