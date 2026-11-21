---
title: "구글 월드 모델 '지니 4', 연구 프리뷰 끝내고 AI 울트라·Gemini API로 확대 — 초당 약 0.10달러, 국내 제공 여부는 미확인"
summary: "구글이 11월 18일(미국 시간) 실시간 상호작용 월드 모델 Genie 4를 Project Genie의 AI 울트라 구독자에게, 19일에는 Gemini API·AI 스튜디오 개발자에게 열었다. 720p·24fps 영상과 음성을 동시에 만들고 문장으로 세계를 바꿀 수 있으며, API는 유료 등급 키가 필요하고 오디오 포함 초당 약 0.10달러다. 국내 이용자가 확인할 조건과 미확인 사항을 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-11-21"
readingTime: 6
tags: ["구글", "Google", "딥마인드", "Genie 4", "지니 4", "월드 모델", "Gemini API", "AI 울트라"]
---

<div class="article-tldr">
구글이 10월 27일 연구 프리뷰로 공개한 월드 모델 <strong>지니 4(Genie 4)</strong>를 일반 이용자와 개발자에게 넓혔다. <strong>11월 18일</strong>에는 <a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/" target="_blank" rel="noopener">Project Genie에서 자격을 갖춘 구글 AI 울트라 구독자</a>에게, <strong>11월 19일</strong>에는 <a href="https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/" target="_blank" rel="noopener">Gemini API와 구글 AI 스튜디오</a>에 풀었다. 문장이나 이미지 한 장으로 걸어 다닐 수 있는 가상 세계를 만들고, 진행 중에 날씨·조명·사물을 문장으로 바꿀 수 있다. API 요금은 개발자 문서 기준 <strong>오디오 포함 초당 약 0.10달러</strong>다.
</div>

이 글은 구글 공식 블로그 두 편, 구글 딥마인드 연구 소개 글, AI 스튜디오 개발자 문서, 해외 보도를 바탕으로 한 공개 자료 분석이다. 모델을 실행해 품질이나 지연 시간을 재현하지 않았으며, 아래 수치는 구글 문서나 보도에 적힌 내용이다.

## 누구에게 중요한가

- **게임·메타버스·영상 기획자**: 짧은 장면을 그려 보고 걸어 다니며 분위기를 확인하는 시제품 도구로 쓸 수 있다. 구글은 활용처로 시제품 제작, 공간 디자인 시각화를 들었다.
- **로봇·AI 에이전트 연구자**: 구글은 로봇과 AI 에이전트 훈련용 가상 환경을 주요 용도로 제시했다. 딥마인드 소개 글에는 휴머노이드 로봇이 체커를 두는 장면을 지니 4로 시뮬레이션한 사례가 나온다.
- **구글 AI 울트라 구독자**: 추가 결제 없이 Project Genie에서 쓸 수 있는 첫 대상이다. AI 프로 구독자는 아직 대기자 명단만 열려 있다.
- **API로 서비스를 붙이려는 국내 개발사**: 초 단위 과금이라 사용 시간이 곧 비용이다. 도입 전에 세션 길이와 동시 접속 규모를 먼저 계산해야 한다.

## 확인된 사실 — 구글 공식 자료 기준

<div class="article-stats">
<strong>단계</strong> 10월 27일 연구 프리뷰(신뢰 테스터) → 11월 18일 Project Genie(울트라) → 11월 19일 Gemini API·AI 스튜디오<br/>
<strong>API 모델 ID</strong> genie-4 (Interactions API, v1beta, WebRTC 또는 WebSocket 연결)<br/>
<strong>출력</strong> 1280×720(16:9), 24fps, 48kHz 스테레오 오디오 — 세로(9:16)·프레임 수 변경 미지원<br/>
<strong>입력</strong> 텍스트, 16:9 시작 이미지 1장, 키보드·카메라 조작 — 실시간 마이크·웹캠 입력, 함수 호출 미지원<br/>
<strong>요금</strong> 유료 등급 키 필요, 프레임당 240 영상 출력 토큰(초당 5,760토큰), 오디오 포함 초당 약 0.10달러<br/>
<strong>반응 속도(문서 제시)</strong> 첫 화면까지 약 5~9초, 진행 중 문장 변경 반영 약 1~2초<br/>
<strong>워터마크</strong> 모든 영상·오디오에 SynthID 삽입
</div>

<a href="https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/" target="_blank" rel="noopener">딥마인드의 10월 27일 소개 글</a>은 지니 4를 "음악·환경음·대화를 함께 만드는 첫 실시간 월드 모델"로 설명했고, 제미나이 모델이 장면 계획과 일관성 점검을 맡는 구조라고 밝혔다. 당시에는 신뢰 테스터 대상 연구 프리뷰였고, 울트라 구독자와 API 조기 파트너가 다음 순서라고 예고했다. 이번 두 발표로 그 예고가 실행된 셈이다.

18일 블로그에는 지니 4 외에 기존 지니 3 체험도 바뀐 내용이 있다. 지니 3로 만든 세계는 생성 1회당 탐색 시간이 <strong>60초에서 최대 3분</strong>으로 늘었고, 360도 파노라마를 바탕으로 세계를 만들거나 여러 세계를 이어 붙이는 기능이 추가됐다. 이 3분은 지니 3 기준이며, 지니 4의 세션 길이는 블로그에 적혀 있지 않다.

## 미확인·전망 (사실과 구분)

- **국내 제공 여부**: 18일 블로그와 개발자 문서 어디에도 지원 국가 목록이나 한국 언급이 없다. 앞서 5월에는 지니 3 기반 Project Genie가 "전 세계 성인 울트라 구독자"에게 열렸다고 엔가젯이 보도했지만, 지니 4의 '자격 있는 구독자' 범위가 한국을 포함하는지는 <strong>미확인</strong>이다.
- **세션 길이**: 개발자 문서의 한계 항목은 "60~90초가 지나면 화면 안정성이 떨어질 수 있고, 최대 120초"라고 적었다. 이것이 API 세션의 공식 상한인지, 품질 안내인지는 문서만으로 분명하지 않다(<strong>미확인</strong>).
- **한국어 프롬프트**: 지원 언어는 공개되지 않았다. 한국어 문장으로 세계를 만들거나 바꿀 수 있는지, 생성 대사가 한국어로 나오는지는 <strong>미확인</strong>이다.
- **원화 가격**: API 요금은 달러로만 공개됐다. 국내 AI 울트라 월 구독료가 이번에 바뀌었는지도 확인되지 않았다. 디크립트는 미국 기준 울트라 요금을 월 199.99달러로 전했다.
- **정식 출시 여부**: 구글은 "이제 개발자에게 제공한다"고만 했고, 정식(GA) 또는 프리뷰 표시는 없다. API 경로가 v1beta인 점으로 보아 조건이 바뀔 가능성이 있다.

## 국내 이용자에게 미치는 영향

가장 먼저 따져볼 것은 비용이다. 문서의 초당 약 0.10달러를 그대로 곱하면 1분에 약 6달러, 1시간에 약 360달러다. 문서가 적은 120초를 꽉 채우면 한 번에 약 12달러가 된다. 이는 필자의 단순 계산이며, 실제 청구액은 오디오 포함 여부, 환율, 부가세에 따라 달라진다. 소비자용 서비스에 붙이기보다는 내부 기획·연구용으로 시간을 정해 쓰는 쪽이 현실적인 단가다.

서버 위치도 고려할 점이다. 문서는 데이터센터가 미국, 서유럽, 일본에 있고, 동아시아에서도 왕복 150ms 미만이 목표라고 적었다. 한국은 일본 리전과 가까워 지연이 크게 불리하지 않을 가능성이 있지만, 실제 체감 지연은 국내 네트워크 조건에서 확인해야 한다.

콘텐츠 제약도 있다. 문서는 실존 인물, 공인, 저작권 있는 브랜드·캐릭터가 들어간 프롬프트나 이미지는 차단되거나 스트림이 끊길 수 있다고 밝혔다. 국내 게임·IP를 그대로 넣어 시안을 만드는 용도로는 제약이 걸릴 수 있다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>울트라 구독자</strong>: <a href="https://labs.google/projectgenie" target="_blank" rel="noopener">Project Genie 페이지</a>에 접속해 지니 4 메뉴가 보이는지 확인한다. 보이지 않으면 국내 계정이 이번 대상에 들어가지 않았을 수 있다.<br/>
2. <strong>프로 구독자</strong>: 같은 페이지의 대기자 명단에 등록한다. 구글은 프로 제공 시점을 밝히지 않았다.<br/>
3. <strong>개발사</strong>: <a href="https://aistudio.google.com/docs/genie" target="_blank" rel="noopener">AI 스튜디오 지니 문서</a>의 가격·한도 항목을 먼저 읽고, 유료 등급 키로 짧은 세션부터 시험한다. 세션 시간 상한과 월 예산 알림을 코드에 미리 넣는다.<br/>
4. <strong>프롬프트 설계</strong>: 실존 인물·브랜드 IP는 피하고, 16:9 시작 이미지를 준비한다. 한국어 프롬프트가 되는지는 짧은 시험으로 먼저 확인한다.<br/>
5. <strong>결과물 활용</strong>: 모든 출력에 SynthID 워터마크가 들어간다. 외부 공개용 영상에 쓰려면 AI 생성 표시 정책을 함께 정한다.
</div>

## 한계

이 글은 11월 21일 확인한 구글 블로그(11월 18일·19일), 딥마인드 연구 소개 글(10월 27일), AI 스튜디오 지니 문서, 디크립트·테크크런치·엔가젯 보도에 근거했다. 모델을 실행하지 않았으므로 화질, 일관성, 지연 시간을 평가하지 않았다. 구글이 밝힌 약점으로는 카메라 지연, 복잡한 물리 상호작용, 실시간 오디오 정확도, 장면의 장기 일관성이 있다. 요금과 제공 범위는 바뀔 수 있다.

<p><em>최종 확인일 2026-11-21.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/" target="_blank" rel="noopener">Google Blog — Genie 4, Project Genie에서 울트라 구독자 대상 제공 (2026-11-18)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/" target="_blank" rel="noopener">Google Blog — Genie 4 is now available on the Gemini API (2026-11-19)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/" target="_blank" rel="noopener">Google DeepMind — Genie 4: A new generation of world simulation (2026-10-27)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aistudio.google.com/docs/genie" target="_blank" rel="noopener">Google AI Studio 문서 — Genie 4 (요금·출력 사양·한계)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://decrypt.co/383572/google-genie-4-ultra-subscribers-build-ai-worlds-real-time" target="_blank" rel="noopener">Decrypt — Google's Genie 4 Is Here, Letting Ultra Subscribers Build AI Worlds in Real Time</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/" target="_blank" rel="noopener">TechCrunch — Google's Genie 4 world model adds audio, more realistic worlds, and real-time steering</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.engadget.com/2176797/project-genie-adds-google-street-view-integration-and-goes-live-for-global-ai-ultra-users/" target="_blank" rel="noopener">Engadget — Project Genie goes live for global AI Ultra users (2026-05, 지니 3 시기)</a>
</div>

<div class="article-keypoints">
<ul>
<li>구글 지니 4, 10월 연구 프리뷰 이후 11월 18일 Project Genie(AI 울트라), 19일 Gemini API·AI 스튜디오로 확대</li>
<li>720p·24fps 영상과 48kHz 스테레오 오디오를 실시간 생성, 진행 중 문장으로 날씨·조명·사물 변경</li>
<li>API는 유료 등급 키 필요, 오디오 포함 초당 약 0.10달러 — 단순 계산 시 1분 약 6달러</li>
<li>프로 구독자는 대기자 명단, 지니 3 탐색 시간은 60초→3분으로 확대</li>
<li>한국 제공 여부, 한국어 프롬프트 지원, 지니 4 세션 상한, 원화 가격은 미확인</li>
</ul>
</div>
