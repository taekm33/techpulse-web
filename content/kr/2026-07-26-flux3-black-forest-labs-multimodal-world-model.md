---
title: "FLUX 3 출시: 영상·오디오·로봇을 하나의 AI 모델로 통합한 세계 모델의 등장"
summary: "Black Forest Labs가 이미지·영상·오디오·로봇 액션을 단일 아키텍처로 학습한 FLUX 3를 공개했다. 아우디 생산라인에 실제 배포돼 소프트 바디 조작 작업을 자동화하며 물리적 AI 시대의 시작을 알렸다."
category: "ai-news"
date: "2026-07-26"
readingTime: 5
tags: ["FLUX 3", "Black Forest Labs", "멀티모달 AI", "물리적 AI", "로봇공학"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: Black Forest Labs(BFL)가 2026년 7월 23일 FLUX 3를 공개했다. 이미지·영상·오디오·로봇 액션을 단일 가중치로 동시 학습한 최초의 대형 생성 모델이다. 로봇 모델 FLUX-mimic은 이미 아우디 생산라인에 배포돼 기존 로보틱스로는 불가능했던 소프트 바디 조작을 수행하고 있다. 공개 이틀 만에 업계의 이목이 집중됐다.
</div>

## 하나의 모델이 영상·오디오·로봇을 모두 다룬다

생성형 AI 시장은 지금까지 각 모달리티별 전문 모델이 주류였다. 이미지는 Stable Diffusion 계열, 영상은 Sora·Veo·Kling, 오디오는 ElevenLabs, 로봇 제어는 별도의 VLA(Vision-Language-Action) 모델이 맡았다.

Black Forest Labs는 이 분리를 무너뜨렸다. FLUX 3는 텍스트→이미지, 텍스트→영상, 이미지→영상, 영상 편집, 오디오 생성, 그리고 로봇 액션 예측을 **동일한 가중치 하나로 처리**한다. BFL의 창업팀은 Stable Diffusion의 잠재 확산(latent diffusion) 아키텍처를 설계한 팀으로, 이번 FLUX 3는 그 연장선상에서 스케일을 영상·오디오·물리 세계로 확장한 것이다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">20초</span>
<span class="stat-label">단일 생성 패스에서 출력되는 최대 영상 길이 (720p, 오디오 포함)</span>
</div>
<div class="stat-item">
<span class="stat-number">27분</span>
<span class="stat-label">FLUX-mimic 로봇이 새 조작 태스크를 학습하는 데 필요한 로봇 데이터 수집 시간 (기존 대비 60배 절감)</span>
</div>
<div class="stat-item">
<span class="stat-number">101ms</span>
<span class="stat-label">센서 입력→모터 출력 엔드투엔드 반응 시간 (인간 시각 반응 시간과 동등)</span>
</div>
<div class="stat-item">
<span class="stat-number">10%→0%</span>
<span class="stat-label">로봇 액션 추가 학습 초기 영상 품질 저하 → 3,500 스텝 후 완전 회복</span>
</div>
</div>

## 영상 생성과 로봇 제어가 같은 문제다

BFL이 주장하는 핵심 명제는 이것이다: **영상 생성과 로봇 액션 예측은 본질적으로 같은 문제다.** 두 과제 모두 물체가 어떻게 움직이고, 표면이 어떻게 반응하고, 원인과 결과가 어떻게 연결되는지를 이해해야 한다. BFL은 이 가설을 FLUX 3 훈련 과정에서 검증했다고 발표했다.

로봇 액션 데이터를 추가했을 때 처음에는 인간 평가 기준 영상 품질이 약 10% 저하됐다. 그러나 약 3,500 훈련 스텝 이후 모델은 영상 품질을 완전히 회복하면서 로봇 액션 예측 능력까지 습득했다. BFL은 이를 "영상을 현실감 있게 생성하는 데 필요한 세계 표현이 로봇이 물리 조작을 수행하는 데 필요한 정보와 동일하다"는 증거로 해석한다.

<div class="article-callout tip">
<strong>세계 모델 관점</strong>: FLUX 3는 단순한 생성 모델이 아니라 물리 법칙을 내재화한 '세계 모델'로 설계됐다. BFL 창업자 Robin Rombach는 "우리는 이제 다목적·유능·통합 시각 모델의 가능성을 막 긁기 시작하고 있다"고 밝혔다. 이미지 편집에서 시뮬레이션, 물리적 AI, 컴퓨터 사용에 이르기까지 프론티어는 활짝 열려 있다는 평가다.
</div>

## 아우디 생산라인에 이미 배포 중

FLUX-mimic은 FLUX 3 아키텍처 위에서 구현된 로봇 모델이다. BFL과 mimic robotics의 파트너십으로 개발됐으며, FLUX 3의 영상 예측 경로에서 추출한 중간 특성(feature) 위에 경량 액션 디코더를 추가하는 방식으로 동작한다. 별도의 로봇 학습 모델을 처음부터 구축하지 않아도 된다는 뜻이다.

가장 눈에 띄는 사실은 이 시스템이 이미 **실제 아우디 생산 시설에서 운영 중**이라는 점이다. 아우디 프로덕션 랩의 Christoph Schneider는 "이 로봇들이 기존 로보틱스로는 불가능했던 복잡한 소프트 바디(연질 소재) 조작 작업을 해결하는 것을 목격했다. 이는 생산·물류 전반에 걸쳐 유연한 자동화를 확장하는 데 큰 영향을 줄 수 있다"고 밝혔다.

<div class="article-callout info">
<strong>샘플 효율성의 의미</strong>: 기존 VLA 모델이 새 조작 태스크 학습에 30시간 이상의 로봇 데이터를 필요로 했다면, FLUX-mimic은 30분 분량의 데이터로 동일한 결과를 낸다고 BFL은 주장한다. 이 60배의 차이가 사실이라면 산업용 로봇 배포의 경제성이 근본적으로 바뀐다. 단, 독립적 검증은 아직 진행 중이다.
</div>

## 오픈웨이트 출시가 게임 체인저가 될 수 있다

현재 FLUX 3 Video는 선정된 파트너에 한해 게이티드(gated) 얼리 액세스로 제공 중이다. FLUX 3 Action(FLUX-mimic 포함)도 마찬가지다. FLUX 3 Image는 수주 내 출시 예정이다.

전략적으로 더 중요한 것은 **FLUX 3 Dev**, 즉 오픈웨이트 버전이다. BFL의 전작 FLUX.1 모델 패밀리는 수억 건의 다운로드를 기록하며 커뮤니티에서 수천 개의 파인튜닝 모델, LoRA 어댑터, ComfyUI 통합을 낳았다. FLUX 3 Dev가 출시되면 영상·오디오·이미지를 단일 아키텍처로 생성하는 최초의 공개 오픈웨이트 모델이 된다. 현재 이 범주에 해당하는 오픈웨이트 모델은 존재하지 않는다.

## FLUX 3 구성 요소 현황

| 구성 요소 | 기능 | 현재 상태 |
|---|---|---|
| FLUX 3 Video | 최대 20초 영상 (720p, 오디오 포함) | 게이티드 얼리 액세스 |
| FLUX 3 Action (FLUX-mimic) | 로봇 액션 예측, 아우디 배포 중 | 파트너 얼리 액세스 |
| FLUX 3 Image | 고급 이미지 생성·편집 | 수주 내 출시 예정 |
| FLUX 3 Dev | 오픈웨이트 멀티모달 백본 | 2026년 하반기 예정 |

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>FLUX 3는 이미지·영상·오디오·로봇 액션을 단일 가중치로 학습한 최초의 대형 생성 모델이다.</li>
<li>로봇 모델 FLUX-mimic은 아우디 생산라인에서 소프트 바디 조작을 실제로 수행 중이다.</li>
<li>새 로봇 태스크 학습에 필요한 데이터가 30시간→30분으로 줄었다는 주장은 독립 검증 대기 중이다.</li>
<li>오픈웨이트 버전 FLUX 3 Dev 출시 시 커뮤니티 파인튜닝 생태계가 로봇·영상·오디오 전 방위로 확산될 수 있다.</li>
<li>영상 생성과 로봇 제어가 동일한 세계 표현을 공유한다는 BFL의 명제가 사실이라면, 물리적 AI의 패러다임이 바뀐다.</li>
</ul>
</div>

FLUX 3는 아직 완전히 공개되지 않았다. 하지만 아우디 생산라인이라는 실제 현장에서의 검증, 그리고 오픈웨이트 출시 계획은 단순한 발표 이상의 무게를 갖는다. '세계를 이해하는 모델'이 콘텐츠 생성을 넘어 물리 세계를 움직이기 시작했다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://bfl.ai/blog/flux-3" target="_blank" rel="noopener">Black Forest Labs — FLUX 3 공식 발표 (블로그)</a><br/>
· <a href="https://huggingface.co/black-forest-labs" target="_blank" rel="noopener">Black Forest Labs 공식 Hugging Face 페이지</a><br/>
· <a href="https://www.manilatimes.net/2026/07/23/tmt-newswire/globenewswire/black-forest-labs-unveils-flux-3-a-new-multimodal-frontier-model-for-visual-intelligence/2390494" target="_blank" rel="noopener">Black Forest Labs, FLUX 3 공개 (GlobeNewswire 보도자료)</a><br/>
</div>
