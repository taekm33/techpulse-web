---
title: "중국 AI의 더블 펀치: Kimi K3와 Qwen3.8, 미국 AI 패권에 도전장"
summary: "문샷 AI의 Kimi K3(2.8조 파라미터)와 알리바바의 Qwen3.8이 연달아 공개되며 미국 AI 독주 체제에 균열을 내고 있다."
category: "ai-news"
date: "2026-07-21"
readingTime: 5
tags: ["Kimi K3", "Qwen3.8", "중국AI", "오픈소스", "AI경쟁"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — 중국 AI 스타트업 문샷 AI가 세계 최대 오픈소스 모델 Kimi K3(2.8조 파라미터)를 공개했고, 알리바바는 바로 뒤이어 Qwen3.8을 선보이며 "Fable 5에만 뒤진다"고 주장했다. 2025년 DeepSeek 충격 이후 최대 규모의 중국발 AI 공세다.
</div>

## 중국 AI, 이틀 만에 세계 1·2위 주장

2026년 7월 16일, 베이징 스타트업 **문샷 AI**는 Kimi K3를 공개하며 오픈소스 AI 모델 역사를 다시 썼다. 파라미터 수만 **2.8조(2.8T)**에 달해 DeepSeek V4-Pro(1.6T)의 약 두 배, 자사 전작 Kimi K2(1T)의 세 배에 이른다. 문샷은 독자 개발한 **Kimi Delta Attention**과 **Attention Residuals** 아키텍처를 결합해 Kimi K2 대비 약 2.5배 향상된 스케일링 효율을 달성했다고 밝혔다.

사흘 뒤인 7월 19일, **알리바바**가 상하이 세계인공지능컨퍼런스(WAIC) 현장에서 Qwen3.8-Max-Preview를 전격 공개했다. 2.4조 파라미터 규모에 텍스트뿐 아니라 이미지·영상·문서까지 처리하는 멀티모달 모델로, "현재 Anthropic의 Claude Fable 5에만 뒤처진다"는 주장을 내세웠다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-value">2.8T</span>
  <span class="stat-label">Kimi K3 파라미터 수 (세계 최대 오픈소스)</span>
</div>
<div class="stat-item">
  <span class="stat-value">2.4T</span>
  <span class="stat-label">Qwen3.8 파라미터 수</span>
</div>
<div class="stat-item">
  <span class="stat-value">1M</span>
  <span class="stat-label">Kimi K3 컨텍스트 윈도우 (토큰)</span>
</div>
<div class="stat-item">
  <span class="stat-value">$0.30</span>
  <span class="stat-label">K3 캐시 입력 가격 (100만 토큰당)</span>
</div>
</div>

## 벤치마크 성적: 오픈소스의 한계를 깨다

독립 평가 기관 Artificial Analysis가 발표한 인텔리전스 인덱스에서 Kimi K3는 Claude Opus 4.8과 유사한 수준으로 3위권에 진입했다. GDPval-AA v2 벤치마크에서는 GPT-5.5와 Claude Opus 4.8을 앞섰고, BrowseComp(정보 탐색 능력) 점수는 **91.2/100**으로 최고 수준을 기록했다.

특히 Kimi K3는 48시간의 자율 에이전트 운용만으로 4제곱밀리미터짜리 AI 칩 설계를 완료하는 데모를 선보여 업계를 놀라게 했다. 기존에 숙련 연구자가 1~2주 걸리던 작업을 불과 2시간 만에 처리했다는 사례도 공개됐다.

<div class="article-callout tip">
<strong>개발자 팁</strong>: Kimi K3는 현재 <a href="https://kimi.com" target="_blank">kimi.com</a>에서 무료 체험 가능하며, 7월 27일 전체 모델 웨이트가 공개된다. 자동 컨텍스트 캐싱을 기본 지원해 별도 캐시 파라미터 설정이 필요 없다.
</div>

## 미국의 반응: "AI 레이스를 잃고 있다"

전 백악관 AI 고문 데이비드 색스는 Kimi K3의 성과에 대해 "우려스럽다. 이것이 AI 경쟁에서 뒤처지는 방식"이라고 경고했다. 트럼프 행정부는 최근 **'Gold Eagle'** 프로그램을 통해 최고 수준 AI 모델 접근을 정부가 통제하는 방향으로 정책을 강화하고 있다. 지난달엔 상무부 수출 통제 명령으로 Anthropic의 Fable 5가 전 세계 사용자에게 접근 차단되기도 했다.

| 모델 | 개발사 | 파라미터 | 공개 방식 | 컨텍스트 |
|------|--------|---------|---------|---------|
| Kimi K3 | 문샷 AI | 2.8T | 오픈 웨이트(7/27) | 1M 토큰 |
| Qwen3.8 | 알리바바 | 2.4T | 오픈 웨이트(미정) | 미공개 |
| DeepSeek V4-Pro | DeepSeek | 1.6T | 오픈 웨이트 | 128K 토큰 |
| Grok 4.5 | xAI | ~1.5T | 비공개 | 미공개 |
| Claude Fable 5 | Anthropic | 비공개 | 비공개(제한적) | 미공개 |

<div class="article-callout info">
<strong>주목할 점</strong>: Qwen3.8은 현재 독립 벤치마크 점수가 전혀 공개되지 않았다. 알리바바의 "Fable 5에만 뒤진다"는 주장은 자체 평가에 근거한 마케팅 문구일 수 있으며, 7월 27일 Kimi K3 웨이트 공개 이후 독립 검증이 본격화될 전망이다.
</div>

## 오픈소스 전략이 게임체인저인 이유

미국 주요 AI 기업들이 최고 성능 모델을 비공개로 유지하는 동안, 중국 AI 기업들은 오픈 웨이트 전략으로 글로벌 개발자 생태계를 공략하고 있다. Meta를 제외한 OpenAI, Anthropic 등은 최신 모델 파라미터를 공개하지 않는 반면, 문샷·알리바바·DeepSeek는 모델 자체를 무료로 다운로드·수정할 수 있게 열어두고 있다.

뱅크오브아메리카 애널리스트들은 "Kimi K3가 중국 AI 모델의 성능 한계치를 끌어올렸다"며 알리바바의 중국 오픈소스 리더십이 새로운 도전에 직면했다고 평가했다.

<div class="article-keypoints">
<h4>핵심 포인트</h4>
<ul>
<li>문샷 AI Kimi K3: 2.8조 파라미터, 세계 최대 오픈소스 모델, 7월 27일 웨이트 공개 예정</li>
<li>알리바바 Qwen3.8: 2.4조 파라미터, 멀티모달 지원, 독립 벤치마크는 아직 미공개</li>
<li>Kimi K3는 GDPval-AA·BrowseComp 등 여러 벤치마크에서 GPT-5.5·Claude Opus 4.8 초과</li>
<li>미국은 'Gold Eagle' 프로그램으로 정부 주도 AI 접근 통제 강화에 나섰다</li>
<li>2025년 DeepSeek 이후 최대 규모의 중국발 오픈소스 공세로, 미·중 AI 격차가 재차 좁혀지고 있다</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://qwenlm.github.io/" target="_blank" rel="noopener">Qwen 공식 블로그</a><br/>
· <a href="https://huggingface.co/Qwen" target="_blank" rel="noopener">Qwen on Hugging Face</a><br/>
· <a href="https://huggingface.co/moonshotai" target="_blank" rel="noopener">Moonshot AI (Kimi) on Hugging Face</a><br/>
</div>
