---
title: "NASA·IBM, 달 과학 전용 오픈소스 AI 파운데이션 모델 공개"
summary: "NASA와 IBM 리서치가 달 표면 분석을 위한 오픈소스 AI 파운데이션 모델을 공개했다. 달 정찰궤도선(LRO) 17년치 데이터로 학습해 크레이터 지도화·화산 지형 탐지·극지 얼음 예측을 지원하며, 가중치와 코드가 허깅페이스·깃허브에 전면 공개됐다."
category: "ai-news"
date: "2026-09-11"
draft: true
readingTime: 6
tags: ["NASA", "IBM", "파운데이션모델", "오픈소스", "우주"]
---

<div class="article-tldr">
NASA가 IBM 리서치·여러 대학과 함께 달 과학을 위한 오픈소스 AI 파운데이션 모델 'NASA-IBM Lunar Foundation Model'을 공개했다. 달 정찰궤도선(LRO)이 17년간 모은 약 200만 장의 이미지 타일로 사전학습했으며, 크레이터 지도화·젊은 화산 지형 식별·극지 얼음 안정성 추정 같은 과제에 소량의 라벨 데이터만으로 적응할 수 있다. 모델 가중치와 전체 코드는 허깅페이스와 깃허브에 무료로 공개됐다.
</div>

NASA가 인공지능을 달 연구에 본격 도입한다. NASA는 9월 10일(현지시간) IBM 리서치 및 여러 학술기관과의 협업으로 개발한 **NASA-IBM Lunar Foundation Model**을 공개했다. 달 과학만을 위해 만들어진 최초 수준의 오픈소스 AI 모델로, NASA의 달 정찰궤도선(Lunar Reconnaissance Orbiter, LRO) 데이터를 중심으로 학습됐다. 모델은 누구나 쓸 수 있도록 [허깅페이스](https://huggingface.co/collections/nasa-ibm-ai4science/nasa-ibm-lunar-fm-and-downstream-models)에 공개됐고, 전체 코드베이스는 [깃허브](https://github.com/NASA-IMPACT/NASA-IBM-Lunar-Foundation-Model)에서 내려받아 실험할 수 있다.

## 17년치 달 데이터로 학습한 파운데이션 모델

파운데이션 모델은 특정 과제용 알고리즘을 처음부터 만들고 학습시키는 전통적 방식과 달리, 방대한 비라벨 데이터로 미리 사전학습된다. 이렇게 얻은 폭넓은 지식 덕분에 소량의 라벨 데이터로 빠르게 미세조정(fine-tuning)해 여러 과학 영역에 두루 적용할 수 있다.

이 모델의 학습에는 LRO가 지난 17년간 축적한 데이터가 쓰였다. LRO는 달 표면 대부분을 세밀하게 촬영해 사실상 이음매 없는 고해상도 모자이크를 만들었고, 이 미션이 생산한 데이터량은 NASA의 다른 모든 행성 미션을 합친 것보다 크다. NASA-IBM 모델은 이 데이터에서 추출한 약 200만 개의 이미지 타일로 학습됐다. 여기에는 1m 해상도 고해상도 카메라 이미지 100만 장 이상과 100m 해상도 다분광 이미지 약 96만 4천 장이 포함된다. NASA의 GRAIL(중력 회복·내부 실험실)과 루나 프로스펙터, JAXA(일본 우주항공연구개발기구)의 셀레네(SELENE) 등 다른 미션의 고해상도 영상·지형 데이터도 함께 활용됐다.

<div class="article-stats">
<strong>학습 이미지 타일</strong> 약 200만 개<br/>
<strong>고해상도 이미지</strong> 100만+ 장 (1m 해상도)<br/>
<strong>다분광 이미지</strong> 약 96만 4천 장 (100m 해상도)<br/>
<strong>LRO 데이터 축적 기간</strong> 17년<br/>
<strong>공개 형태</strong> 오픈소스 (허깅페이스 가중치 + 깃허브 코드)
</div>

## 크레이터·화산·극지 얼음을 한 모델로

사전학습이 끝난 덕분에 행성과학자는 적은 라벨 데이터만으로 모델을 다양한 달 연구 과제에 맞게 조정할 수 있다. 대표 활용처는 세 가지다.

| 과제 | 과학적 의미 |
|---|---|
| 크레이터 지도화 | 모든 크레이터는 충돌로 생기므로, 개수·크기 측정은 달 표면 연대 추정과 태양계 역사 재구성의 핵심이다 |
| 젊은 화산 지형(불규칙 마리아 패치) 식별 | 상대적으로 젊어 보이는 이 구조는 기존 달 냉각 연대와 충돌해, 달의 열 진화를 다시 이해할 실마리가 된다 |
| 극지 얼음 안정성 추정 | 영구 음영 지역은 수십억 년간 얼음을 가둘 만큼 차갑다. 얼음이 안정적으로 존재할 위치를 예측하면 미래 탐사 자원 지도에 도움이 된다 |

NASA에 따르면 모델은 평가한 모든 과제에서 여러 강력한 기준 모델과 대등하거나 그 이상의 성능을 냈으며, 특히 극지 얼음 안정성 추정에서는 뚜렷한 우위를 보였다. 실제 검증 사례로, 아인슈타인 크레이터 인근에 스페이스X 로켓 잔해가 충돌한 전후 LRO 영상을 비교해 기존 크레이터(파란 상자)를 탐지하고 새로 생긴 충돌 크레이터(빨간 상자)를 짚어냈다. 충돌 후 영상은 사전학습에서 제외됐기 때문에, 관측 사이의 새로운 표면 변화를 미세조정으로 인식할 수 있음을 보여준 셈이다.

<div class="article-callout tip">
파운데이션 모델의 핵심은 '재사용'이다. 한 번 사전학습한 모델을 크레이터·화산·얼음 등 서로 다른 과제에 소량의 데이터로 재활용할 수 있어, 매번 전용 모델을 처음부터 학습시키던 비용과 시간을 크게 줄인다.
</div>

## 오픈 사이언스 전략의 확장

<div class="article-callout info">
"NASA는 수십 년에 걸쳐 달에 대한 방대한 과학 기록을 쌓아왔지만, 데이터 수집은 일의 일부일 뿐입니다. 우리는 그 데이터를 과학자들이 더 쉽게 탐색하고 활용할 수 있게 만들어야 합니다. 이 모델은 NASA의 페타바이트급 과학 데이터에 AI를 접목할 때 무엇이 가능한지 보여줍니다." — 케빈 머피(Kevin Murphy), NASA 본부 최고 과학데이터책임자 겸 최고 데이터·AI책임자 대행
</div>

이번 모델은 NASA 최고과학데이터책임관실이 추진하는 '과학을 위한 AI(AI for science)' 전략의 일부다. NASA와 IBM의 협업으로 만들어진 모델군에는 지구 관측용 프리스비(Prithvi) 모델과 태양물리학용 수리야(Surya) 모델이 이미 포함돼 있으며, 이번 달 모델이 여기에 합류했다. 모델은 오픈소스 툴킷 테라토치(TerraTorch)에 통합됐고, 연구 커뮤니티를 위해 머신러닝용 사전학습 데이터셋과 벤치마크, 그리고 허깅페이스에 공개된 기술 보고서가 함께 배포됐다.

개발에는 앨라배마 헌츠빌 마셜 우주비행센터의 Impact AI 팀이 주도적으로 참여했고, NASA 과학미션국 행성과학과, 고다드 우주비행센터, 에임스 연구센터와 협력했다. 여기에 대학우주연구협회(USRA), SETI 연구소, 메릴랜드대 볼티모어 카운티(UMBC), 하워드대 등 학계 전문가들이 힘을 보탰다.

## 의미와 전망

이번 공개는 두 가지 흐름이 만나는 지점에 있다. 하나는 우주 과학 데이터의 폭증이고, 다른 하나는 특정 도메인에 특화된 과학용 파운데이션 모델의 확산이다. NASA가 가중치와 코드, 데이터셋까지 전면 공개한 것은 재현 가능한 연구를 보장하고 전 세계 연구자가 직접 모델을 비교·개선하도록 하려는 의도로 읽힌다. 달 남극 얼음 자원 탐사와 유인 탐사 계획이 본격화되는 국면에서, 표면 분석을 자동화·가속하는 이런 도구는 실제 탐사 전략 수립의 밑바탕이 될 수 있다.

<div class="article-keypoints">
<ul>
<li>NASA·IBM이 달 과학 전용 오픈소스 AI 파운데이션 모델을 공개, 가중치·코드·데이터셋을 허깅페이스와 깃허브에 전면 개방</li>
<li>LRO 17년치 데이터에서 뽑은 약 200만 개 이미지 타일로 사전학습, GRAIL·루나 프로스펙터·JAXA 셀레네 데이터도 활용</li>
<li>크레이터 지도화·젊은 화산 지형 식별·극지 얼음 안정성 추정에 적용, 특히 얼음 안정성 추정에서 기준 모델 대비 우위</li>
<li>지구 관측 프리스비, 태양물리 수리야에 이은 NASA 'AI for science' 전략의 세 번째 도메인 모델</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://science.nasa.gov/science-research/artificial-intelligence-lunar-foundation-model/" target="_blank" rel="noopener">NASA Science — NASA, IBM Launch AI Foundation Model for Lunar Science</a><br/>
<a href="https://huggingface.co/collections/nasa-ibm-ai4science/nasa-ibm-lunar-fm-and-downstream-models" target="_blank" rel="noopener">Hugging Face — NASA-IBM Lunar FM 및 다운스트림 모델 컬렉션</a><br/>
<a href="https://github.com/NASA-IMPACT/NASA-IBM-Lunar-Foundation-Model" target="_blank" rel="noopener">GitHub — NASA-IBM Lunar Foundation Model 코드베이스</a><br/>
<a href="https://science.nasa.gov/artificial-intelligence-science" target="_blank" rel="noopener">NASA — Artificial Intelligence for Science</a>
</div>
