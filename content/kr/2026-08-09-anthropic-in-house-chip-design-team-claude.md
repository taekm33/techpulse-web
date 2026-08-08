---
title: "앤트로픽, 자체 AI 칩 설계팀 꾸린다…클로드 '하드웨어-모델 공동 설계' 승부수"
summary: "앤트로픽이 8월 5일 클로드 전용 커스텀 AI 칩을 설계할 사내 실리콘팀을 구성 중이라고 확인했다. 하드웨어와 모델을 함께 설계해 대규모 서비스에서 속도와 토큰당 비용을 개선하겠다는 전략으로, 반도체 엔지니어를 최대 48만5000달러 연봉에 채용한다. 엔비디아·구글·AWS·AMD 칩을 병행하는 멀티칩 기조는 유지한다."
category: "ai-news"
date: "2026-08-09"
readingTime: 6
tags: ["앤트로픽", "AI칩", "클로드", "반도체", "인퍼런스"]
---

<div class="article-tldr">
앤트로픽이 자사 AI 모델 <strong>클로드(Claude)</strong> 전용 커스텀 칩을 설계할 <strong>사내 실리콘 설계팀</strong>을 꾸리고 있다고 8월 5일 확인했다. 목표는 하드웨어와 모델을 함께 설계(co-design)해 대규모 추론 서비스에서 속도를 높이고 토큰당 비용을 낮추는 것이다. 하드웨어·소프트웨어를 아우르는 반도체 엔지니어를 최대 <strong>48만5000달러</strong> 연봉으로 채용 중이며, 엔비디아·구글 TPU·AWS 트레이니엄·AMD를 함께 쓰는 <strong>멀티칩 기조는 유지</strong>한다.
</div>

앤트로픽이 칩 경쟁에 뛰어든다. 회사는 클로드를 더 빠르고 저렴하게 대규모로 서빙하기 위해, 자체 AI 칩을 설계할 사내 팀을 구성하고 있다고 밝혔다. 비즈니스 인사이더가 처음 보도하고 앤트로픽 대변인이 확인했으며, 테크크런치·로이터 등이 뒤이어 다뤘다. 회사는 하드웨어와 모델을 나란히 개발할, 하드웨어와 소프트웨어를 두루 아는 엔지니어를 찾고 있다고 설명했다.

## 왜 직접 칩을 설계하나

핵심은 '공동 설계(co-design)'다. 범용 가속기에 모델을 맞추는 대신, 칩 아키텍처를 클로드의 어텐션 연산 특성에 맞춰 설계하면 같은 전력·비용으로 더 많은 토큰을 처리할 수 있다. 매일 수십억 토큰을 서빙하는 규모에서는 이 효율 차이가 곧 원가 경쟁력으로 직결된다. 복수 매체는 앤트로픽이 이 접근으로 <strong>토큰당 추론 비용을 약 절반까지</strong> 낮추는 것을 목표로 삼는다고 전했다(회사가 공식 수치로 확정한 것은 아니며, 보도·분석 기준의 목표치다).

<div class="article-stats">
<strong>확인 시점</strong> 2026년 8월 5일 · 비즈니스 인사이더 최초 보도, 앤트로픽 확인<br/>
<strong>채용</strong> 하드웨어+소프트웨어 배경 반도체 엔지니어, 연봉 약 32만~48만5000달러<br/>
<strong>목표</strong> 하드웨어-모델 공동 설계로 대규모 추론 속도·토큰당 비용 개선<br/>
<strong>멀티칩</strong> 엔비디아 · 구글 TPU · AWS 트레이니엄 · AMD 병행 유지
</div>

## 자체 칩이 아니라 '멀티칩' 전략

주의할 점은 이번 움직임이 기존 칩 공급사와의 결별이 아니라는 것이다. 앤트로픽은 엔비디아 GPU, 구글 TPU, AWS 트레이니엄, AMD를 함께 활용하는 멀티칩 접근을 이어간다고 밝혔다. 앞서 대규모 TPU 용량을 확보한 데 이어, 자체 설계 역량을 '한 축 더' 추가해 공급 협상력과 효율을 함께 끌어올리려는 포석에 가깝다.

| 항목 | 내용 |
|---|---|
| 접근 방식 | 하드웨어-모델 공동 설계(co-design) |
| 1차 목적 | 대규모 추론에서 속도↑ · 토큰당 비용↓ |
| 채용 대상 | HW/SW 겸비 반도체 엔지니어 |
| 제조 | 삼성 등 파운더리 파트너 검토 보도(미확정) |
| 병행 칩 | 엔비디아 · 구글 TPU · AWS 트레이니엄 · AMD |

## 제조는 누가 — 삼성 거론

설계와 별개로 실제 생산(파운드리)을 누가 맡을지는 아직 열려 있다. 일부 보도는 앤트로픽이 삼성을 잠재적 제조 파트너로 검토했다고 전했으나, 회사는 자체 생산 여부나 양산 시점에 대해 구체적으로 밝히지 않았다. 즉 '지금 당장 앤트로픽 칩이 나온다'가 아니라, 설계 역량을 사내에 심는 초기 단계로 읽는 게 정확하다.

<div class="article-callout info">
자체 칩 설계는 오픈AI(브로드컴 협업)·구글(TPU)·아마존(트레이니엄)·메타(MTIA)가 이미 걸어온 길이다. 앤트로픽의 합류는 '프런티어 모델 기업은 결국 실리콘까지 내재화한다'는 흐름을 다시 확인시킨다.
</div>

## 관전 포인트

당장의 관건은 두 가지다. 첫째, 공동 설계가 실제로 토큰당 비용을 얼마나 줄이는지—이는 API 가격과 마진에 직접 영향을 준다. 둘째, 설계에서 양산까지의 시간이다. 설계팀 구성은 시작일 뿐이고, 검증·테이프아웃·양산에는 통상 수 년이 걸린다. 그전까지 앤트로픽의 실질 인프라는 여전히 엔비디아·구글·AWS·AMD 위에서 돌아간다.

<div class="article-callout tip">
'자체 칩' 발표를 읽을 때는 '설계'와 '양산'을 구분해야 정확하다. 이번 건은 설계 인력 확보 단계이며, 상용 칩 출시·시점은 회사가 확정하지 않았다. 공동 설계의 성패는 결국 공개될 벤치마크와 API 가격 변화로 검증될 것이다.
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://techcrunch.com/2026/08/05/anthropic-is-hiring-an-ai-chip-design-team/" target="_blank" rel="noopener">TechCrunch — Anthropic is hiring an AI chip design team (8/5)</a><br/>
· <a href="https://www.forbes.com/sites/jonmarkman/2026/08/06/anthropic-enters-the-ai-chip-race-with-in-house-chip-team/" target="_blank" rel="noopener">Forbes — Anthropic Enters The AI Chip Race With In-House Chip Team (8/6)</a><br/>
· <a href="https://www.techrepublic.com/article/news-anthropic-custom-ai-chip-team-confirmed/" target="_blank" rel="noopener">TechRepublic — Anthropic Is Hiring Engineers to Build Its Own AI Chips</a><br/>
· <a href="https://www.newsbytesapp.com/news/science/anthropic-to-build-custom-ai-chips-to-power-claude/story" target="_blank" rel="noopener">NewsBytes — Anthropic to build custom AI chips to power Claude</a>
</div>

<div class="article-keypoints">
<ul>
<li>앤트로픽이 8월 5일 클로드 전용 커스텀 칩을 설계할 사내 실리콘팀 구성을 확인(비즈니스 인사이더 최초 보도)</li>
<li>전략의 핵심은 하드웨어-모델 공동 설계로 대규모 추론에서 속도↑·토큰당 비용↓</li>
<li>반도체 엔지니어를 약 32만~48만5000달러 연봉에 채용 중</li>
<li>엔비디아·구글 TPU·AWS 트레이니엄·AMD를 병행하는 멀티칩 기조 유지, 결별 아님</li>
<li>제조 파트너로 삼성 검토 보도(미확정)·양산 시점 미공개 → 지금은 설계 역량 내재화 초기 단계</li>
</ul>
</div>
