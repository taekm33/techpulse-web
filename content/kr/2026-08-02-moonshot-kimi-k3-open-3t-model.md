---
draft: true
title: "세계 최초 3조 파라미터급 오픈소스 모델 'Kimi K3' 등장 — 독점 AI와 정면 승부"
summary: "중국 AI 스타트업 Moonshot AI가 2.8조 파라미터의 완전 공개 모델 Kimi K3를 출시했다. 오픈 모델 최초로 3조 파라미터 클래스에 진입해 GPT-5.6 Sol, Claude Fable 5와 대등한 코딩·추론 성능을 기록하며 독점 AI 생태계에 강력한 도전장을 던졌다."
category: "ai-news"
date: "2026-08-02"
readingTime: 5
tags: ["Kimi K3", "오픈소스AI", "MoE", "Moonshot AI", "중국AI"]
---

<div class="article-tldr">
중국 AI 스타트업 <strong>Moonshot AI</strong>가 <strong>Kimi K3</strong>를 공개했다. 2.8조 파라미터 규모로, 오픈 모델 역사상 처음으로 3조 파라미터 클래스에 진입한 모델이다. MoE(Mixture-of-Experts) 아키텍처로 토큰당 1,040억 파라미터만 활성화하고, 100만 토큰 컨텍스트 창을 지원한다. 코딩·추론·에이전틱 벤치마크에서 GPT-5.6 Sol, Claude Fable 5에 근접하거나 일부 항목에서 앞서며 독점 모델 우위에 균열을 냈다.
</div>

AI 모델 경쟁에서 파라미터 규모는 오랫동안 독점 기업의 특권이었다. OpenAI, Anthropic, Google 등이 막대한 자본을 앞세워 초대형 모델을 선점하는 동안, 오픈소스 진영은 700억~2,000억 파라미터 언저리에 머물러 왔다. Moonshot AI의 Kimi K3는 그 벽을 처음으로 넘었다.

## 규모의 새 기준

Kimi K3의 공식 스펙은 **총 2.8조 파라미터, 토큰당 1,040억 활성 파라미터**다. 총 896개 전문가(Expert) 중 토큰당 16개만 활성화하는 희소 MoE 구조 덕분에, 실제 추론 비용은 파라미터 수에 비해 훨씬 낮다. 레이어는 93개(밀집 1개 + MoE 92개), 어텐션 헤드는 96개, 어휘 사전은 16만 토큰 규모다. 컨텍스트 창은 1,048,576 토큰으로, 오픈 모델 중 최대 수준이다.

<div class="article-stats">
<strong>총 파라미터</strong> 2.8조 (활성 1,040억 / 토큰)<br/>
<strong>전문가 구조</strong> 896개 중 16개 활성 (Stable LatentMoE)<br/>
<strong>컨텍스트 창</strong> 1,048,576 토큰 (약 100만)<br/>
<strong>API 입력 가격</strong> 캐시 히트 $0.30/M · 미스 $3.00/M 토큰<br/>
<strong>API 출력 가격</strong> $15.00/M 토큰<br/>
<strong>모달리티</strong> 텍스트·이미지 (MoonViT-V2 비전 인코더 탑재)
</div>

## 세 가지 핵심 아키텍처 혁신

**Kimi Delta Attention(KDA)** 는 선형 어텐션을 확장하기 위한 효율적인 기반으로 설계됐다. 기존 소프트맥스 어텐션의 이차 복잡도 문제를 완화하면서도 긴 시퀀스에서 정보 손실을 최소화한다. **Attention Residuals(AttnRes)** 는 레이어를 거칠수록 이전 어텐션 표현을 선택적으로 재활용해 깊이 방향 추론 능력을 높인다. 일반적인 잔차 연결이 덧셈 누적 방식인 것과 달리 필요한 정보만 선별해 불러온다.

**Stable LatentMoE** 는 라우터 점수의 분위수(quantile)에서 직접 전문가 할당을 유도하는 방식(Quantile Balancing)으로, 기존 MoE의 불안정한 부하 균형 문제를 해소한다. Moonshot 측은 이 세 가지 혁신 덕분에 K2 대비 **스케일링 효율 2.5배**를 달성했다고 밝혔다.

## 벤치마크: 독점 모델과 어깨를 나란히

| 벤치마크 | Kimi K3 | GPT-5.6 Sol | Claude Fable 5 |
|---|---|---|---|
| GPQA Diamond | 93.5 | 94.1 | 92.6 |
| Terminal-Bench 2.1 | 88.3 | 88.8 | 88.0 |
| ProgramBench | **77.8** | 77.6 | 76.8 |
| SWE-Marathon | **42.0** | 39.0 | 35.0 |
| BrowseComp | **91.2** | 90.4 | 88.0 |
| MCPMark-Verified | **94.5** | 92.9 | 87.4 |

SWE-Marathon(실제 소프트웨어 엔지니어링 장기 태스크)과 BrowseComp(복합 웹 검색 추론), MCPMark(MCP 도구 호출 정확도)에서 독점 모델을 앞선 것은 특히 주목할 성과다. 반면 복잡한 수학 추론(CritPt), 장기 에이전트 평가(HLE-Full) 등 일부 항목에서는 GPT-5.6 Sol과 Claude Fable 5에 뒤처져 여전히 개선 여지가 있다.

<div class="article-callout tip">
Kimi K3는 <strong>항상 추론 모드가 켜져</strong> 있고, API 호출 시 <code>reasoning_effort</code> 파라미터로 low·high·max 중 선택 가능하다(기본값 max). 비용 절감이 필요한 배치 작업엔 low 모드 활용을 권장한다.
</div>

## 출시 이후: 압도적 수요와 API 일시 중단

모델 가중치는 2026년 7월 27일 공식 공개됐다. 출시 직후 수요가 Moonshot AI의 서버 용량을 초과해 API 신규 구독이 일시 중단됐다. Together AI를 통한 API 접근과 GitHub에서 오픈 가중치 직접 다운로드가 가능해 개발자들이 자체 인프라에서 구동할 수 있다. 가격은 캐시 히트 입력 기준 $0.30/M 토큰으로, 주요 독점 모델 대비 상당히 낮은 편이다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://www.kimi.com/blog/kimi-k3" target="_blank" rel="noopener">Moonshot AI 공식 기술 블로그 — Kimi K3</a><br/>
<a href="https://github.com/MoonshotAI/Kimi-K3" target="_blank" rel="noopener">GitHub — MoonshotAI/Kimi-K3 (모델 스펙·벤치마크)</a><br/>
<a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart" target="_blank" rel="noopener">Kimi API 개발자 문서 — K3 빠른 시작</a>
</div>

## 오픈 AI 생태계에 미치는 영향

Kimi K3의 등장은 두 가지 측면에서 업계에 시사점을 던진다. 첫째, **파라미터 규모의 민주화**다. 수조 파라미터 모델이 더 이상 빅테크만의 영역이 아님을 입증했다. 둘째, **중국 AI의 추격**이다. Moonshot AI는 지난 12개월 중 9개월간 오픈 모델 규모의 최전선을 유지해 왔으며, 이번 Kimi K3는 그 정점이다. 독점 모델 의존도를 낮추고 싶은 기업·연구기관에게 3조 파라미터급 오픈 가중치가 선택지로 추가됐다는 사실은 AI 시장 구도를 장기적으로 바꿀 수 있는 변수다.

<div class="article-keypoints">
<ul>
<li>Moonshot AI가 2.8조 파라미터 오픈 모델 Kimi K3 공개 — 오픈소스 사상 최초 3조 파라미터 클래스 진입.</li>
<li>Stable LatentMoE로 토큰당 1,040억 파라미터만 활성화, K2 대비 스케일링 효율 2.5배 향상.</li>
<li>SWE-Marathon·BrowseComp·MCPMark에서 GPT-5.6 Sol·Claude Fable 5 추월, 코딩·에이전틱 분야 강세.</li>
<li>입력 $0.30/M(캐시 히트) 저렴한 가격으로 제공, 출시 직후 압도적 수요로 API 신규 구독 일시 중단.</li>
</ul>
</div>
