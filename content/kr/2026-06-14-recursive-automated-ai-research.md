---
title: "AI가 AI 연구를 한다 — Recursive의 '유레카 머신', 세 벤치마크 동시 SOTA 달성"
summary: "Recursive Superintelligence가 자체 개발한 자동화 AI 연구 시스템의 초기 결과를 공개했다. NanoChat, NanoGPT Speedrun, NVIDIA SOL-ExecBench 세 벤치마크에서 기존 최고 기록을 모두 경신했으며, AI가 스스로 아이디어를 제안하고 코드를 작성해 실험을 검증하는 완전 자율 연구 루프를 구현했다."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["Recursive", "자동화AI연구", "자기개선AI", "GPU커널", "NanoGPT"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Recursive Superintelligence가 6월 11일 <strong>자동화 AI 연구 시스템</strong>의 첫 성과를 공개했다. NanoChat(BPB 0.9372→0.9109), NanoGPT Speedrun(79.7초→77.5초), NVIDIA SOL-ExecBench(SOL 점수 0.699→0.754)에서 모두 기존 SOTA를 경신했다. 인간 연구자 없이 AI가 연구 루프 전체를 자율적으로 실행한 결과다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/PMCBt-4b0Nc" title="Recursive Superintelligence: Why Self-Improving AI is the Next Frontier" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## "AI가 코드이고, AI는 코드를 작성한다"

Recursive Superintelligence의 공동창업자 Richard Socher는 회사의 핵심 테제를 이렇게 요약한다. **AI는 코드다. 그리고 이제 AI는 코드를 작성할 수 있다.** 이 두 사실이 맞물리는 순간, 자기 개선 루프가 닫힌다.

Recursive가 목표로 하는 것은 단순한 코드 생성 AI가 아니다. 과학적 방법론 자체를 자동화하는 시스템, 즉 **재귀적 자기 개선 초지능(RSI)** 이다. 6월 11일 공개된 결과는 그 v0.1, 회사가 "유레카 머신"이라 부르는 첫 번째 구현체의 성과다. 설립 한 달 만에 47억 달러 기업가치를 인정받은 팀이 첫 번째 기술적 성과를 공개한 것이다.

## 시스템의 작동 방식: 완전 자율 연구 루프

이 시스템이 특별한 이유는 연구 루프의 모든 단계를 AI가 직접 수행한다는 점이다.

1. **아이디어 제안** — 목표 성능을 개선할 수 있는 가설을 자율적으로 생성
2. **구현** — 제안된 아이디어를 실제 코드로 작성
3. **실험 실행** — 코드를 실제 GPU/환경에서 실행해 결과 측정
4. **검증** — 보상 해킹·분산 문제를 제거하고 진짜 개선인지 확인
5. **다음 실험 결정** — 이전 결과를 바탕으로 다음에 탐색할 방향 선택

시스템은 여러 연구 스레드를 동시에 실행하며, 이전 실험에서 얻은 유용한 정보를 유지하고, 유망한 분기를 결합한다. 특히 **한 태스크에서 발견한 최적화 패턴(메모리 전송 전략, 블로킹 방법, 리덕션 기법)을 다른 관련 태스크에 자동으로 재활용**하는 능력이 GPU 커널 최적화 벤치마크에서 두드러진 성과를 냈다.

## 세 벤치마크 성과 상세

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">0.9109</span>
<span class="article-stats__label">NanoChat BPB (기존 최고: 0.9372)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">77.5초</span>
<span class="article-stats__label">NanoGPT Speedrun 학습 시간 (기존: 79.7초)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">0.754</span>
<span class="article-stats__label">SOL-ExecBench SOL 점수 (기존: 0.699)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">18%</span>
<span class="article-stats__label">하드웨어 한계까지 남은 격차 감소율</span>
</div>
</div>

| 벤치마크 | 과제 | 이전 SOTA | Recursive | 개선 |
|---------|------|-----------|-----------|------|
| NanoChat Autoresearch | 5분 고정 예산으로 소형 LM 학습 | 0.9372 BPB | 0.9109 BPB | 1.3배 학습 속도 향상 |
| NanoGPT Speedrun | 8×H100에서 검증 손실 3.28 달성 최단 시간 | 79.7초 | 77.5초 | 2.2초 단축 |
| SOL-ExecBench | 235개 실제 GPU 커널 최적화 | 0.699 | 0.754 | 하드웨어 한계 격차 18% 감소 |

**NanoGPT Speedrun**은 Andrej Karpathy가 시작한 벤치마크로, 지난 2년 넘게 인간 커뮤니티가 83회의 기여를 통해 약 45분에서 79.7초까지 줄여 온 매우 최적화된 기록이다. Recursive의 AI 시스템은 그 위에서 추가로 2.2초를 더 단축했다 — 이는 최근 인간 기여자들의 성과와 비슷하거나 더 큰 개선폭이다.

**SOL-ExecBench**는 NVIDIA가 공식 운영하는 GPU 커널 벤치마크로, SOL 점수 0.5는 PyTorch 기준 구현, 1.0은 하드웨어 이론적 한계를 의미한다. 235개 커널 전체에서 동시에 실행된 Recursive 시스템은 이전 최고 0.699에서 0.754로 올렸으며, NVIDIA 공식 리더보드에서 전체 1위 및 4개 서브 카테고리 1위를 기록했다.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>이 발견들이 안전한 이유</strong><br>Recursive는 AI가 발견한 해법들이 "창의적이고 무해한(creative and benign)" 접근법임을 확인하고, 오픈소스로 공개해 커뮤니티가 직접 검증할 수 있게 했다. 명백한 최적화나 위험한 아이디어가 아닌 새로운 접근법이 발견되었음을 강조했다.</div>
</div>

## 창업팀과 자본 배경

Recursive의 공동창업자 7명은 모두 AI 프런티어 출신이다. CEO Richard Socher(NLP 분야 창업 경험), Tim Rocktäschel, Alexey Dosovitskiy(Vision Transformer ViT 저자), Josh Tobin, Caiming Xiong, Yuandong Tian(Meta FAIR 연구 과학자 디렉터, ELF OpenGo 공동저자), Tim Shi, Jeff Clune(Darwin Gödel Machine 논문 저자)으로 구성된다. 이 중 4명은 Jeff Clune와 함께 Darwin Gödel Machine 논문을 공동 저술했다.

5월에 Google Ventures를 공동 리더로 하는 투자에서 $650M을 유치, 기업가치 $4.65B를 인정받았다. 30명 미만의 팀으로 창업 한 달 만에 세 가지 외부 검증 가능한 SOTA 결과를 낸 것은 이 밸류에이션에 대한 직접적인 답이다.

<div class="article-callout info">
<div class="article-callout__icon">📌</div>
<div class="article-callout__body"><strong>다음 단계 로드맵</strong><br>Recursive의 로드맵은 1단계로 AI 과학 연구 자체를 자동화하는 "50,000명의 박사" 수준 시스템을 구축하고, 2단계에서 이 시스템을 신약 개발·배터리 소재·핵융합 물리학 같은 인류의 핵심 과제에 적용하는 것이다. 현재 이 자동화 연구 시스템을 더 복잡한 실제 과학 연구 문제에 적용하는 작업을 진행 중이다.</div>
</div>

<div class="article-keypoints">
<strong>핵심 정리</strong>
<ul>
<li>Recursive Superintelligence가 AI가 스스로 연구 루프를 실행하는 자동화 시스템의 초기 결과 공개</li>
<li>NanoChat·NanoGPT Speedrun·NVIDIA SOL-ExecBench 세 벤치마크 모두 SOTA 달성</li>
<li>2년 넘게 인간 커뮤니티가 최적화한 NanoGPT Speedrun 기록을 추가로 2.2초 단축</li>
<li>NVIDIA 공식 GPU 커널 리더보드 전체 1위 및 4개 서브카테고리 1위 기록</li>
<li>발견 결과는 오픈소스로 공개해 커뮤니티 검증 가능</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://www.recursive.com/articles/first-steps-toward-automated-ai-research" target="_blank" rel="noopener noreferrer">Recursive 공식 발표: 자동화 AI 연구의 첫 발걸음</a><br>— <a href="https://research.nvidia.com/benchmarks/sol-execbench/leaderboard/collection/1/B200" target="_blank" rel="noopener noreferrer">NVIDIA SOL-ExecBench 공식 리더보드</a><br>— <a href="https://www.gv.com/news/recursive-superintelligence-self-improving-ai" target="_blank" rel="noopener noreferrer">Google Ventures — Recursive 투자 발표 및 기술 설명</a></div></div>
