---
draft: true
title: "구글 딥마인드 '제미나이 로보틱스 2' 공개 — 발끝부터 손끝까지, AI가 휴머노이드 전신을 제어한다"
summary: "구글 딥마인드가 휴머노이드 로봇의 전신(全身) 제어와 정밀 손동작, 로봇 간 협업까지 가능케 하는 물리 AI 모델 '제미나이 로보틱스 2'를 공개했다. VLA·추론·온디바이스 3종 모델로 구성되며, 새로운 로봇 몸체에 몇 시간 만에 적응한다."
category: "ai-news"
date: "2026-07-31"
readingTime: 6
tags: ["구글딥마인드", "제미나이", "휴머노이드", "물리AI", "로보틱스"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: 구글 딥마인드가 2026년 7월 30일 '제미나이 로보틱스 2(Gemini Robotics 2)'를 공개했다. 기존 상반신 위주 조작을 넘어 <strong>휴머노이드 전신 제어</strong>(발끝~손끝), 22자유도 다섯손가락 손의 정밀 조작, 여러 로봇이 협력하는 <strong>다중 로봇 협업</strong>을 지원한다. 실행(VLA)·추론(ER)·온디바이스 3종 모델로 구성되며, 온디바이스 모델은 완전히 새로운 로봇 몸체에 <strong>몇 시간(예제 200개 미만)</strong> 만에 적응한다. 추론 모델 ER 2는 구글 AI 스튜디오에서 바로 사용 가능하다.
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/4lSQnrMC6nY" title="Gemini Robotics 2 brings whole body intelligence to robots" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## AI가 로봇의 '몸 전체'를 갖게 되다

지금까지 대부분의 로봇은 좁고 반복적인 작업을 위해 사전 프로그래밍되거나 사람이 원격 조종해 왔다. 스스로 학습하거나 예측 불가능한 환경에 적응하는 능력이 부족했고, 한 로봇에서 익힌 기술을 다른 몸체로 옮기는 것도 매우 어려웠다.

구글 딥마인드가 2026년 7월 30일 공개한 **제미나이 로보틱스 2**는 이 벽을 정면으로 겨냥한다. 카롤리나 파라다(Carolina Parada)가 발표한 이번 모델은 "차세대 진짜 적응형 로봇을 구동하는 지능층"으로 소개됐다. 핵심은 세 가지 — 지능형 **전신 제어**, 향상된 **손 조작 정밀도**, 그리고 **다중 로봇 협업**이다.

예를 들어 제미나이 로보틱스 2는 휴머노이드가 걷고, 웅크리고, 몸을 뻗어 물건을 조작하며 어질러진 방을 정리하도록 만들 수 있다. 필요하면 다른 로봇과 팀을 이뤄 더 빠르게 일을 끝낸다.

## 3종 모델 구성: 실행·추론·온디바이스

제미나이 로보틱스 2는 역할이 다른 세 개의 모델로 나뉜다.

| 모델 | 유형 | 역할 |
|------|------|------|
| Gemini Robotics 2 | VLA (비전-언어-행동) | 시각·언어 입력을 모터 제어로 변환. 휴머노이드 전신·양팔 로봇 제어 |
| Gemini Robotics ER 2 | ER (체화 추론 VLM) | '고차원 두뇌' 역할. 다단계 작업 계획·진행 추적, 다중 로봇 조율 |
| Gemini Robotics On-Device 2 | 온디바이스 VLA | 네트워크 없이 로컬 실행. 새 로봇 몸체에 빠르게 적응 |

VLA 모델은 시각과 언어 지시를 실제 모터 제어로 바꿔 로봇이 행동하게 한다. ER 모델은 방을 관찰하고, 필요한 단계를 추론하며, VLA와 협력해 작업을 수행하고 완료까지 진행 상황을 추적하는 '두뇌'다. 이 구조 덕분에 로봇은 수백 개의 결정이 필요한 수 분 길이의 복잡한 작업을 수행하고, 단계가 실패하면 스스로 수정하며, 처음 보는 상황에도 일반화할 수 있다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">3종</span>
<span class="stat-label">모델 구성 (VLA·ER·온디바이스)</span>
</div>
<div class="stat-item">
<span class="stat-number">22자유도</span>
<span class="stat-label">SharpaWave 다섯손가락 손</span>
</div>
<div class="stat-item">
<span class="stat-number">몇 시간</span>
<span class="stat-label">새 로봇 몸체 적응 시간(예제 &lt;200개)</span>
</div>
<div class="stat-item">
<span class="stat-number">수 분</span>
<span class="stat-label">단일 작업 길이(수백 개 결정 포함)</span>
</div>
</div>

## 휴머노이드 전신 제어의 첫걸음

세상은 인간의 움직임에 맞춰 설계돼 있다. 좁고 어질러진 공간에서 손을 뻗고, 몸을 굽히고, 균형을 잡아야 한다. 이전 모델이 휴머노이드의 상반신만 제어해 탁상 작업을 수행했다면, 제미나이 로보틱스 2는 물리 AI를 **전신 동작**으로 확장했다.

딥마인드는 앱트로닉(Apptronik)의 **아폴로 2(Apollo 2)** 휴머노이드에 "물뿌리개를 아래 선반의 초록색 통에 넣어줘"라고 지시하는 시연을 공개했다. 아폴로는 지시를 처리해 탁자로 걸어가 물뿌리개를 집고, 선반으로 몇 걸음 이동한 뒤 목적지에 정확히 내려놓았다. 딥마인드는 "아직 동작 속도에는 개선의 여지가 많지만, 전신 협응이 필요한 복잡한 실제 작업으로 가는 중요한 진전"이라고 밝혔다.

## 손끝의 정밀함, 그리고 로봇 팀워크

가정과 일터에서 진짜 쓸모 있으려면 로봇에게는 섬세함이 필요하다. 제미나이 로보틱스 2는 손이든 그리퍼든 다양한 엔드이펙터에서 새로운 수준의 물리적 손재주를 발휘한다. 아폴로 2의 5손가락·22자유도 **SharpaWave 손**으로 매듭을 묶거나 지퍼백을 밀봉하는 섬세한 동작을 수행하고, **프랑카 듀오(Franka Duo)**의 2지 병렬 그리퍼로 빽빽한 포장 같은 복잡한 작업도 처리한다.

<div class="article-callout info">
<strong>딥마인드가 공개한 벤치마크(일부):</strong> 전신 조작에서 아폴로 2는 탁자 집기 68.4%, 바닥 집기 45.7%, 선반 집기 76.3%의 성공률을 보였다. 그리퍼(프랑카 듀오)는 정밀 삽입 89.6%로 높았다. 반면 다섯손가락 정밀 조작은 전구 풀기 92%인 반면 전구 끼우기 36%, 쓰레기봉투 묶기 44%로, 멀티핑거 손재주는 여전히 도전 과제로 남아 있다.
</div>

또한 이번 업데이트로 **다중 로봇 협업**이 도입됐다. ER 2가 여러 로봇 사이의 소통과 조율을 맡아, 한 대로는 불가능한 복잡한 워크플로를 서로 다른 종류의 로봇들이 함께 해결한다.

## 네트워크 없이도 작동하는 온디바이스 모델

많은 로봇 응용은 네트워크 지연이나 인터넷 연결 없이 작동해야 한다. **제미나이 로보틱스 온디바이스 2**는 이런 제약을 겨냥해 로봇 기기에서 로컬로 실행되도록 최적화된 가장 효율적인 VLA다.

이 모델은 태생적으로 다중 몸체(multi-embodiment)를 지원하며, 제미나이 로보틱스 1.5의 '모션 전이(motion transfer)' 기법을 계승했다. 형태·센서·자유도가 크게 다른 새로운 양팔 로봇에도 **보통 200개 미만의 예제와 몇 시간의 적응**만으로 대응한다.

<div class="article-callout tip">
<strong>안전은 기본값:</strong> 딥마인드는 에이전트 안전을 측정하는 새 벤치마크 <strong>ASIMOV-Agentic</strong>을 함께 공개했다. 추론 에이전트가 VLA의 안전하지 않은 도구 호출을 거부하는 능력, 작업 가능 여부를 예측하고 불확실할 때 사람의 개입을 먼저 요청하는 능력을 측정한다. ER 2는 사람이 가까이 오면 이를 감지해 안전 정지시키는 등, 딥마인드 역대 가장 안전한 로보틱스 모델로 평가됐다.
</div>

## 사용 방법과 의미

추론 모델 **Gemini Robotics ER 2**는 구글 AI 스튜디오(Google AI Studio)에서 바로 사용할 수 있고, 제미나이 엔터프라이즈 에이전트 플랫폼에서는 비공개 프리뷰로 제공된다. VLA·온디바이스 모델은 앱트로닉·보스턴 다이내믹스·애자일 로봇 등 초기 접근 파트너에게 우선 공개된다.

딥마인드는 제미나이 로보틱스 2를 "물리 세계에서 AGI를 푸는 여정의 중요한 이정표"라고 표현했다. 단일 작업 자동화를 넘어 범용 지능으로 나아가는 것이 목표라는 것이다.

<div class="article-keypoints">
<h3>핵심 포인트 정리</h3>
<ul>
<li>구글 딥마인드, 물리 AI 모델 '제미나이 로보틱스 2' 공개 (2026년 7월 30일)</li>
<li>상반신 조작을 넘어 휴머노이드 전신 제어(발끝~손끝) 실현 — 앱트로닉 아폴로 2로 시연</li>
<li>VLA(실행)·ER(추론)·온디바이스 3종 모델 구성, ER 2는 다중 로봇 협업 조율</li>
<li>온디바이스 모델은 새 로봇 몸체에 예제 200개 미만·몇 시간 만에 적응</li>
<li>ER 2는 구글 AI 스튜디오에서 즉시 사용 가능, VLA·온디바이스는 초기 파트너 대상</li>
<li>새 안전 벤치마크 ASIMOV-Agentic 공개, 역대 가장 안전한 로보틱스 모델로 평가</li>
</ul>
</div>

물리 세계에서 스스로 판단하고 움직이는 로봇은 오랜 꿈이었다. 제미나이 로보틱스 2가 실제 휴머노이드의 전신을 지능적으로 제어하기 시작했다는 사실은, 그 꿈이 실험실을 넘어 현실로 성큼 다가왔다는 신호다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/" target="_blank" rel="noopener">Google DeepMind 공식 블로그 — Gemini Robotics 2 brings whole body intelligence to robots</a><br/>
· <a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/" target="_blank" rel="noopener">Google 개발자 블로그 — Gemini Robotics ER 2</a><br/>
· <a href="https://thenextweb.com/news/gemini-robotics-2-whole-body-humanoid-control" target="_blank" rel="noopener">The Next Web — Gemini Robotics 2 controls whole humanoids</a><br/>
· <a href="https://www.marktechpost.com/2026/07/30/google-deepmind-gemini-robotics-2-whole-body-control-dexterity-multi-robot-collaboration/" target="_blank" rel="noopener">MarkTechPost — Google DeepMind ships three physical AI models</a><br/>
</div>
