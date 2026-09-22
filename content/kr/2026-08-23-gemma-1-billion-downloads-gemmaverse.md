---
title: "구글 젬마(Gemma) 오픈모델, 다운로드 10억 돌파…'젬마버스'에 변형 모델만 10만 개"
summary: "구글 딥마인드가 오픈 웨이트 모델 젬마(Gemma)의 누적 다운로드 10억 건 돌파를 발표했다. 개발자들이 만든 변형 모델은 10만 개를 넘었고, NASA·인도 국가보건청·예일대 암 연구까지 활용 사례가 우주와 의료로 확장됐다. 오픈 모델 생태계 '젬마버스'가 프런티어 경쟁의 또 다른 축임을 보여준다."
category: "dev-trend"
date: "2026-08-23"
draft: true
readingTime: 6
tags: ["구글", "Gemma", "오픈모델", "딥마인드", "MedGemma"]
---

<div class="article-tldr">
구글 딥마인드가 8월 20일(현지시간) 오픈 웨이트 모델군 <strong>젬마(Gemma)</strong>의 누적 다운로드가 10억 건을 넘었다고 발표했다. 지난 2년간 개발자들이 만든 파생·미세조정 변형 모델은 10만 개를 돌파했고, 이 생태계를 구글은 '젬마버스(Gemmaverse)'라 부른다. 젬마는 로컬 기기·엣지·심지어 우주 궤도까지 배포됐으며, 인도 국가보건청의 1억 명 규모 앱, 예일대·구글의 암 치료 경로 발견, 돌고래 소통 연구(DolphinGemma)에까지 쓰이고 있다. 구글은 커뮤니티 프로젝트를 모으는 'Awesome Gemma' 깃허브 저장소도 함께 공개했다.
</div>

구글 딥마인드는 8월 20일 공식 블로그를 통해 오픈 웨이트 모델 젬마의 누적 다운로드가 10억 건을 넘어섰다고 밝혔다. 발표는 딥마인드의 클레망 파라베(Clement Farabet) 부사장과 올리비에 라콩브(Olivier Lacombe) 프로덕트 디렉터 명의로 나왔다. 구글은 "다운로드 숫자보다 훨씬 중요한 것은 커뮤니티가 그것으로 무엇을 만들고 있는가"라며, 지난 2년간 10만 개가 넘는 젬마 변형 모델이 공개됐다고 강조했다.

## '젬마버스' — 다운로드보다 중요한 생태계

젬마는 2024년 구글이 제미나이(Gemini)와 같은 연구·기술을 기반으로 내놓은 오픈 웨이트 모델군이다. 폐쇄형 API로만 제공되는 대형 상용 모델과 달리, 젬마는 가중치가 공개돼 개발자가 자신의 클라우드·노트북·엣지 기기에서 직접 실행하고 미세조정할 수 있다. 모든 질의를 외부 상용 API로 보내지 않고도 AI를 커스터마이즈할 수 있다는 뜻이다.

<div class="article-stats">
<strong>누적 다운로드</strong> 10억 건 돌파<br/>
<strong>변형 모델</strong> 10만 개 이상 (2년간)<br/>
<strong>발표일</strong> 2026년 8월 20일 · 구글 딥마인드<br/>
<strong>신규 공개</strong> 'Awesome Gemma' 깃허브 저장소
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/sZ2n50YV5kI" title="How is AI helping doctors focus on patient care?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 우주로 간 젬마

구글에 따르면 젬마는 이미 지구 궤도 위에서 돌아가고 있다. NASA, Satlyt, Starcloud 팀이 위성 탑재 상태로 젬마를 구동해 온보드 이미지 분석, 부족한 다운링크 대역폭 최적화, 위성 간 통신 라우팅 등에 활용하고 있다. 연산·전력·통신이 극도로 제약된 환경에서도 복잡한 추론을 수행할 수 있음을 보여주는 사례다.

## 의료·과학으로 넓어진 활용

지상에서의 파급력은 더 구체적이다. 인도 국가보건청(NHA)은 젬마 4와 구글의 오픈소스 '메디컬 데이터 툴킷'을 안드로이드 다운로드 1억 건 이상의 아로기아 세투(Aarogya Setu) 2.0 앱에 통합했다. 복잡한 의료 기록을 표준 디지털 형식으로 변환해, 국민이 여러 의료기관에 걸쳐 자신의 건강 데이터를 안전하게 관리·공유하도록 돕는다.

| 분야 | 활용 사례 | 기반 모델 |
|---|---|---|
| 우주 | 위성 온보드 이미지 분석 (NASA·Starcloud 등) | Gemma |
| 공공의료 | 인도 아로기아 세투 2.0 (1억+ 다운로드) | Gemma 4 |
| 암 연구 | C2S-Scale, 신규 암 치료 경로 발견 | Gemma |
| 임상 | AIIMS 외래 트리아지·우간다 현장 지원 | MedGemma |
| 생물학 | 돌고래 발성 분석 (DolphinGemma) | Gemma |

예일대와 구글 연구진은 단일세포의 '언어'를 해석하는 AI 모델 C2S-Scale을 젬마 위에 구축했다. 구글은 이 모델이 살아있는 세포에서 검증된 새로운 암 치료 경로를 발견했으며, "AI 시스템이 살아있는 세포에서 검증 가능한 새로운 기전적 치료 경로를 만들어낸 첫 사례"라고 설명했다. 의료 특화 모델 메드젬마(MedGemma)는 인도 AIIMS의 외래 환자 분류와 우간다 현장 보건 인력 지원 등 실제 임상 애플리케이션 개발에 쓰이고 있다.

<div class="article-callout tip">
오픈 웨이트 모델의 강점은 데이터 주권과 오프라인 실행이다. 의료 기록·위성 데이터처럼 외부 API로 보내기 어려운 민감·고립 환경일수록, 가중치를 직접 내려받아 온프레미스에서 돌릴 수 있는 젬마 같은 모델의 실효성이 커진다.
</div>

## 오픈 모델 경쟁의 또 다른 전선

10억 다운로드는 프런티어 경쟁이 화제성 높은 초대형 모델뿐 아니라 개발자 생태계를 통해서도 벌어지고 있음을 보여준다. 오픈 모델은 미·중 AI 개발사 간 경쟁의 중요한 축이 됐고, 각 진영은 개발자 채택을 지렛대로 개별 상용 제품을 넘어서는 생태계를 구축하려 한다. 구글은 이번에 커뮤니티 프로젝트·미세조정·튜토리얼·개발 도구를 모으는 'Awesome Gemma' 깃허브 저장소를 젬마버스의 공식 디렉터리로 공개했다.

<div class="article-callout info">
젬마 챌린지(Kaggle)에는 실제 문제 해결을 목표로 한 프로젝트가 1,600건 넘게 제출됐으며, 구글은 곧 수상작을 발표할 예정이라고 밝혔다.
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://blog.google/innovation-and-ai/technology/developers-tools/gemma-one-billion-downloads/" target="_blank" rel="noopener">Google — Inside the Gemmaverse: 젬마 10억 다운로드 공식 발표 (8/20)</a><br/>
· <a href="https://github.com/google-gemma/awesome-gemma" target="_blank" rel="noopener">GitHub — Awesome Gemma 공식 저장소</a><br/>
· <a href="https://deepmind.google/models/gemma/gemmaverse/" target="_blank" rel="noopener">Google DeepMind — Gemmaverse 소개</a><br/>
· <a href="https://thenextweb.com/news/google-gemma-one-billion-downloads-gemmaverse-variants" target="_blank" rel="noopener">The Next Web — 젬마 10억 다운로드 보도</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글 딥마인드, 8월 20일 오픈 모델 젬마 누적 다운로드 10억 건 돌파 발표</li>
<li>개발자가 만든 변형 모델 10만 개 이상 — 생태계 '젬마버스'</li>
<li>NASA 위성, 인도 1억 명 규모 보건 앱, 예일대 암 치료 경로 발견까지 확장</li>
<li>의료 특화 메드젬마(MedGemma)는 인도 AIIMS·우간다 현장 임상에 활용</li>
<li>커뮤니티 디렉터리 'Awesome Gemma' 깃허브 저장소 신규 공개</li>
</ul>
</div>
