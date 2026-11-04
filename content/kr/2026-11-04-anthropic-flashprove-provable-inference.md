---
title: "앤트로픽 'FlashProve' 공개 — 답변이 정말 그 모델에서 나왔는지 암호학으로 증명하는 오픈소스 시제품"
summary: "앤트로픽이 AI 응답이 약속한 모델 가중치에서 나왔음을 영지식 증명(zkSNARK)으로 확인하는 연구 시제품 FlashProve를 Apache 2.0으로 공개했다. 4비트 Llama 4 Maverick(4,000억 파라미터 MoE) 기준 H100 한 장이 초당 약 110토큰 속도로 증명을 만들고, 1,024토큰 요청당 약 19MB 증명을 일반 CPU에서 수십 초 안에 검증한다. 다만 컨텍스트 1,024토큰 제한, 정수 모델·그리디 디코딩 전제, 유지보수 없는 연구 산출물이라는 한계가 있고 실제 서비스 적용 계획은 없다. 국내 개발자·기업에 어떤 의미인지 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-11-04"
readingTime: 6
tags: ["앤트로픽", "Anthropic", "FlashProve", "영지식 증명", "zkSNARK", "AI 보안"]
---

<div class="article-tldr">
앤트로픽이 <strong>FlashProve</strong>를 <a href="https://github.com/anthropics/FlashProve" target="_blank" rel="noopener">GitHub</a>에 <strong>Apache 2.0</strong>으로 공개했다. AI 서비스 제공자가 모델 가중치를 공개하지 않고도 "이 답변은 미리 약속한(커밋한) 바로 그 모델이 만들었다"는 것을 <strong>영지식 증명(zkSNARK)</strong>으로 보여 주는 연구 시제품이다. 4비트 양자화한 <strong>Llama 4 Maverick(4,000억 파라미터 MoE)</strong> 기준으로 H100 GPU 한 장이 초당 약 110토큰 속도로 증명을 만들고, 증명 파일은 1,024토큰 요청당 약 19MB, 검증은 GPU 없이 CPU에서 약 17~21초가 걸린다고 회사는 밝혔다. 실제 서비스 적용 계획은 없고, 저장소는 "유지보수하지 않는 연구 산출물"로 표시돼 있다.
</div>

이 글은 앤트로픽 연구 블로그·기술 보고서·GitHub 저장소 문서와 TechCrunch 보도를 바탕으로 한 공개 자료 분석이다. 코드를 빌드하거나 증명을 생성·검증해 보지는 않았다.

## 누구에게 중요한가

- **API 중계(라우팅)·재판매 서비스를 쓰는 개발팀**: "비싼 모델 요금을 냈는데 실제로는 싼 모델이 답한 것 아닌가"라는 의문을 기술적으로 확인할 수단이 연구 단계에서 제시됐다.
- **AI 모델 평가·감사 기관, 규제 담당자**: 평가한 모델과 실제 서비스되는 모델이 같은지 가중치 없이 확인하는 방법의 실현 가능성을 보여 준다.
- **보안 담당자**: 추론 서버가 침해돼 다른 모델이나 조작된 응답이 섞이는 경우를 탐지하는 용도가 제시됐다.
- **일반 Claude 사용자**: 당장은 바뀌는 것이 없다. TechCrunch는 앤트로픽이나 다른 연구소에 이를 배포할 계획이 없다고 전했다.

## 확인된 사실 — 앤트로픽 공식 자료 기준

앤트로픽 프런티어 레드팀은 <a href="https://www.anthropic.com/research/provable-inference" target="_blank" rel="noopener">"Progress on provable inference for large language models"</a>에서 FlashProve를 소개했다. 블로그 게시일 표기는 <strong>2026년 11월 2일</strong>이고, TechCrunch는 미국 시간 11월 3일(화) 게시로 보도했다. 공동 저자에는 앤트로픽 외에 EPFL·MIT·StarkWare 소속 연구자가 포함됐다.

<div class="article-stats">
<strong>대상 모델</strong> Llama 4 Maverick(4,000억 파라미터 MoE, 4비트, 약 232GB)<br/>
<strong>증명 속도</strong> H100 1장, 배치 24요청 기준 프리필 초당 약 110토큰<br/>
<strong>비용 비교</strong> vLLM으로 같은 길이 프롬프트를 처리하는 GPU 시간의 약 70~95배<br/>
<strong>증명 크기</strong> 1,024토큰 요청당 약 19MB<br/>
<strong>검증</strong> GPU 불필요, 24스레드 약 17초 / 단일 스레드 약 21초(블로그 표기)<br/>
<strong>사전 커밋</strong> 모델당 약 39분, 약 1,600만 요청 후 재커밋 필요<br/>
<strong>컨텍스트 한도</strong> 1,024토큰<br/>
<strong>라이선스</strong> 코드·Lean 증명·문서 모두 Apache 2.0<br/>
<strong>저장소 상태</strong> 버전 0.16.0, 유지보수·기여 접수 없음
</div>

작동 방식은 두 단계다. 먼저 제공자가 가중치의 <strong>커밋먼트(지문)</strong>를 공개한다. 가중치 자체는 감춰진다. 이후 요청마다 GPU가 "커밋한 모델이 이 프롬프트에서 이 토큰들을 낸다"는 증명을 만들고, 사용자는 가중치 없이 CPU에서 이를 검증한다. 앤트로픽은 증명이 가중치·중간 계산값·어떤 전문가(expert)가 작동했는지를 드러내지 않는다고 설명했다. 단, 모델 구조 자체를 숨기는 것은 목표가 아니다.

보안성 주장의 핵심 수학적 명제는 형식 검증 언어 <strong>Lean 4</strong>로 증명했다고 밝혔다. 회사는 Claude가 이 시스템의 최적화 개선을 만들어 냈으며, Claude의 결정이 평가하기 어려운 경우가 많아 Lean으로 감사 가능한 명제를 함께 제공했다고 설명했다. 공개물은 블로그, <a href="https://assets.claude.com/a492b1fea80e6dcfe4e908ed77bd44961f8c02c2.pdf" target="_blank" rel="noopener">기술 보고서</a>, 프로토콜 명세, 증명기와 검증기 두 종(C++ 고속판·Lean 검증판), Lean 증명 등 다섯 가지다.

앤트로픽은 자사 프런티어 안전 로드맵에서 "2026년 9월 30일까지 증명 가능한 추론 시제품 개발"을 목표로 내걸었는데, 이 목표는 추론 트래픽에 서명하고 신뢰 서버에서 재계산하는 <strong>별도 프로젝트</strong>로 달성했고 FlashProve는 같은 목적을 다른 방법으로 추구한 것이라고 블로그에 적었다.

## 증명이 말해 주는 것과 말해 주지 않는 것

저장소의 <a href="https://github.com/anthropics/FlashProve/blob/main/integrations/README.md" target="_blank" rel="noopener">연동 안내 문서</a>는 검증 통과의 의미를 좁게 정의한다. 통과는 "그 커밋먼트 ID로 약속된 정수 모델에서, 검사 범위의 토큰들이 수락 정책을 만족한다"는 뜻일 뿐이다.

- **어떤 모델을 커밋했는지는 알려 주지 않는다.** 커밋먼트가 광고한 모델(예: 특정 버전)과 같은지는 별도의 신뢰 경로로 확인해야 한다. 문서는 커밋먼트 ID를 검사 대상 서버에서 받지 말라고 강조한다.
- **정수 모델·그리디 디코딩이 전제다.** 증명 대상은 부동소수점 모델을 근사한 정수 모델이며, 샘플링(온도 0 초과) 응답은 정확히 맞지 않을 수 있다. 완화 정책인 "clipped gap"으로 통과하면 결과가 <code>YES</code>가 아니라 <code>WITHIN LIMITS</code>로 나오며, 이는 "모델의 답"이라는 보장보다 훨씬 약하다.
- **고속 C++ 검증기 자체는 정리로 증명되지 않았다.** Lean 정리는 프로토콜과 Lean 검증기에 대한 것이며, 문서는 <code>cp_verify</code>와 파이썬 스크립트를 덮는 정리는 없다고 밝힌다.
- **실서비스 연동은 아직 돌려 보지 않았다.** <a href="https://github.com/anthropics/FlashProve/blob/main/guide/how-it-works.md" target="_blank" rel="noopener">작동 원리 문서</a>는 vLLM 등으로 서비스하고 사후에 증명하는 구성이 학습된 모델로 하나의 서비스로 실행된 적은 없다고 적었다.
- **부채널 공격(증명 생성 시간 측정 등)은 범위 밖**이고, 컨텍스트가 1,024토큰으로 짧아 실제 채팅 대화 길이에는 크게 못 미친다.

## 미확인·전망 (사실과 구분)

- **상용 서비스 적용 시점**: 앤트로픽은 "중간 진행 상황 공유이지 완성된 연구가 아니다"라고 밝혔고, TechCrunch는 배포 계획이 없다고 전했다. Claude API에 증명이 붙을지, 언제 붙을지는 **미확인**이다.
- **다른 회사 채택**: 오픈AI·구글 등 다른 모델 제공자가 커밋먼트를 공개할지는 알려진 바 없다.
- **한국어·국내 조건**: 증명은 토큰 단위로 동작해 언어와 무관한 구조로 보이지만, 한국어 프롬프트로 별도 평가한 자료는 없다. 공식 문서는 영어로만 확인됐다. 오픈소스라 국내에서도 내려받을 수 있으며 비용은 무료지만, 증명 생성에는 H100 80GB와 CUDA 13.2 환경이 필요해 장비 비용(원화 기준 산정 자료 없음)이 실질 장벽이다.
- **규제 활용**: 블로그는 규제 기관이 "승인된 모델만 서비스되는지" 확인하는 용도를 제시했지만, 이는 회사가 제시한 가능성이다. 이런 증명을 요구하는 국내 규정은 찾지 못했다(**미확인**).

## 국내 개발자·기업에 미치는 영향

당장 체감할 변화는 없다. 의미는 방향성에 있다. 해외 모델을 중계 플랫폼이나 클라우드 마켓플레이스를 거쳐 쓰는 경우, 지금은 "요청한 모델이 실제로 답했다"는 것을 확인할 기술 수단이 없다. FlashProve는 그런 확인을 가중치 비공개 상태에서도 할 수 있다는 것을 4,000억 파라미터급 모델에서 코드와 함께 공개했다는 점에서 눈여겨볼 만하다. 앤트로픽은 기존 오픈소스 시스템이 "자릿수 단위로 더 느리다"고 주장했지만, 이는 회사 비교이며 외부 재현 결과는 아직 없다.

반대로 비용은 크다. 증명 생성에 추론 GPU 시간의 70~95배가 들고, 1,024토큰 한도를 넘는 긴 대화는 다루지 못한다. 서비스에 붙이기보다는 보안·감사 연구용으로 보는 것이 맞다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>검증기만 빌드해 보기</strong>: 저장소 안내상 1단계(저장된 예제 증명 검증)는 리눅스·g++ 13 이상·RAM 2GB 미만으로 가능하다. 결과가 <code>YES</code>인지와 종료 코드를 함께 확인한다.<br/>
2. <strong>통과의 의미를 팀에 공유</strong>: "검증 통과 = 광고한 모델"이 아니다. 커밋먼트 ID를 어디서 받는지가 신뢰의 출발점이라는 점을 보안 정책 문서에 반영한다.<br/>
3. <strong>중계 서비스 계약 점검</strong>: 지금은 증명이 없으므로, 라우팅 서비스 이용 시 실제 호출 모델 기록·감사 조항이 계약에 있는지 확인한다.<br/>
4. <strong>H100이 있는 연구팀</strong>이라면 저장소의 소형 모델 경로(빌드 약 29분, 실행 수십 초)부터 시도한다. 실제 Maverick 경로는 RAM 330GB, 디스크 245GB가 필요하다.<br/>
5. <strong>회사 수치는 참고만</strong>: 속도·크기 수치는 앤트로픽 발표이며 독립 재현 전이다.
</div>

## 한계

이 글은 11월 4일 확인한 앤트로픽 블로그, 기술 보고서, GitHub 저장소의 README·안내 문서, TechCrunch 보도만을 근거로 했다. 코드를 실행하지 않았고 성능 수치는 모두 회사 발표다. 블로그 게시일(11월 2일 표기)과 보도상 게시일(11월 3일)이 다르게 나타나며, 시간대 차이 때문일 수 있지만 확인하지 못했다. 저장소는 유지보수되지 않는 연구 산출물이라 문서 내용이 이후 바뀌지 않을 수도, 저장소가 정리될 수도 있다.

<p><em>최종 확인일 2026-11-04.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/research/provable-inference" target="_blank" rel="noopener">Anthropic — Progress on provable inference for large language models (2026-11-02)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://assets.claude.com/a492b1fea80e6dcfe4e908ed77bd44961f8c02c2.pdf" target="_blank" rel="noopener">Anthropic — FlashProve 기술 보고서(PDF)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/anthropics/FlashProve" target="_blank" rel="noopener">GitHub anthropics/FlashProve — README(성능·요구 사양·라이선스)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/anthropics/FlashProve/blob/main/integrations/README.md" target="_blank" rel="noopener">FlashProve 연동 안내 — 검증 통과의 의미와 한계</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/anthropics/FlashProve/blob/main/guide/how-it-works.md" target="_blank" rel="noopener">FlashProve 작동 원리 문서</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/" target="_blank" rel="noopener">TechCrunch — Anthropic is working on a system to prove AI models' identity (2026-11-03)</a>
</div>

<div class="article-keypoints">
<ul>
<li>앤트로픽, 답변이 커밋한 모델 가중치에서 나왔음을 증명하는 zkSNARK 시제품 FlashProve를 Apache 2.0으로 공개</li>
<li>4비트 Llama 4 Maverick 기준 H100 1장 초당 약 110토큰 증명, 1,024토큰당 약 19MB, CPU 검증 약 17~21초(회사 수치)</li>
<li>가중치는 숨기지만 모델 구조는 숨기지 않으며, 커밋된 모델이 광고한 모델인지는 별도 확인 필요</li>
<li>컨텍스트 1,024토큰, 정수 모델·그리디 디코딩 전제, 유지보수 없는 연구 산출물 — 배포 계획 없음(TechCrunch)</li>
<li>국내 개발팀은 검증기 빌드로 개념을 익히고, 중계 서비스 계약의 모델 기록·감사 조항부터 점검하는 것이 현실적</li>
</ul>
</div>
