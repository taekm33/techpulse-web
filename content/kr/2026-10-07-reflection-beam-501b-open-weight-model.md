---
title: "Reflection AI, 첫 오픈웨이트 모델 'Beam' 공개 — 501B MoE, 가중치는 '이달 중' Apache 2.0으로"
summary: "미국 AI 스타트업 Reflection AI가 2026년 10월 5일(미국 시간) 첫 오픈웨이트 모델 Beam을 발표했다. 총 501B 파라미터 중 23B만 활성화되는 희소 MoE 구조로, 코딩·추론·에이전트 작업을 겨냥했다. 회사는 GLM-5.2와 비슷한 추론 점수를 3~4배 적은 추론 연산으로 낸다고 주장하지만 독립 검증은 아직 없다. 가중치·기술 보고서는 '이달 중' Apache 2.0으로 공개 예정이고, 지금은 대기자 명단을 통한 제한적 조기 접근만 가능하다. 국내 개발자가 확인할 점을 공개 자료 기준으로 정리했다."
category: "ai-news"
date: "2026-10-07"
readingTime: 6
tags: ["Reflection AI", "Beam", "오픈웨이트", "MoE", "오픈소스 AI"]
---

<div class="article-tldr">
전 구글 딥마인드 연구자들이 세운 <strong>Reflection AI</strong>가 2026년 10월 5일(미국 시간) 첫 오픈웨이트 모델 <strong>Beam</strong>을 발표했다. 총 <strong>501B</strong> 파라미터 가운데 토큰마다 <strong>23B</strong>만 쓰는 희소 MoE(전문가 혼합) 구조이며, 코딩·에이전트 작업에 초점을 맞췄다. 회사는 가중치를 <strong>Apache 2.0</strong> 라이선스로 <strong>"이달 중"</strong> 공개하겠다고 밝혔지만, 발표 시점에 내려받을 수 있는 가중치는 없다. 성능 수치는 모두 회사 자체 측정이며 독립 검증 전이다. 국내 기업·개발자라면 지금은 '공개 일정과 라이선스를 확인하고 평가 계획을 세우는 단계'로 보는 것이 맞다.
</div>

이 글은 Reflection AI 공식 블로그와 언론 보도를 바탕으로 한 공개 자료 분석이다. 모델을 실행하거나 벤치마크를 재현하지 않았다.

## 누구에게 중요한가

자체 서버에 모델을 올려 써야 하는 기업(데이터 반출이 어려운 금융·공공·제조), 중국계 오픈 모델(GLM, Qwen, Kimi, DeepSeek) 사용에 내부 규정상 부담이 있는 조직, 그리고 코딩 에이전트용 오픈 모델을 고르는 개발팀이 주된 대상이다. Reflection은 발표문에서 Beam이 '서구권 오픈웨이트 프런티어'를 앞당긴다고 소개하고 있어, 모델 출처(어느 나라 회사인가)를 따지는 조직이라면 선택지가 하나 늘어나는 셈이다.

## 확인된 사실 — 공식 블로그 기준

Reflection은 <a href="https://reflection.ai/blog/introducing-beam" target="_blank" rel="noopener">공식 블로그 발표문</a>에서 Beam을 "Reflection의 첫 오픈웨이트 모델"이라고 소개했다.

<div class="article-stats">
<strong>구조</strong> 희소 MoE, 총 501B / 활성 23B 파라미터<br/>
<strong>사전학습</strong> 23.8조 토큰 (웹 + 라이선스 확보 데이터)<br/>
<strong>강화학습</strong> NVIDIA GB300 GPU 1만 500장, 4주, 롤아웃 1억 건 이상<br/>
<strong>컨텍스트</strong> 미드트레이닝으로 유효 길이 100만 토큰까지 확장(회사 설명)<br/>
<strong>입력</strong> 텍스트 전용 (이미지 등 멀티모달 입력 미지원)<br/>
<strong>라이선스</strong> Apache 2.0 (가중치 공개 시)<br/>
<strong>공개 일정</strong> 가중치·기술 보고서·모델 카드 "이달 중"
</div>

현재 상태에 대해 회사는 Beam이 "최종 레드팀과 평가를 진행 중"이며, 초기 버전을 "선별된 사용자 그룹"에 먼저 제공하고 있다고 밝혔다. 조기 접근은 <a href="https://platform.reflection.ai/" target="_blank" rel="noopener">Reflection 플랫폼</a>의 대기자 명단으로 신청한다. 가중치 공개 때는 실행·평가·파인튜닝용 문서와 스택을 함께 내놓고, 여러 유통 파트너와 오픈소스 라이브러리 연동도 같이 시작하겠다고 했다. 파트너 이름과 API 가격은 발표문에 없다.

## 성능 주장 — 회사 자체 수치, 장단점이 함께 있다

회사의 핵심 주장은 효율이다. 발표문은 고급 추론 벤치마크에서 GLM-5.2와 비슷한 점수를 내면서 추론 연산은 3~4배 적게 쓴다고 밝혔다. 다만 <a href="https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/" target="_blank" rel="noopener">TechCrunch</a>는 이 성능 주장이 아직 독립적으로 검증되지 않았다고 짚었다.

회사가 공개한 표를 보면 Beam이 모든 항목에서 앞서는 것은 아니다. 일부만 옮기면 다음과 같다(모두 회사 공개 수치, NR은 미보고).

| 벤치마크 | Beam | GLM 5.2 | Kimi K3 | Qwen 3.8 Max |
|---|---|---|---|---|
| SWE-bench Verified | 80.9 | NR | NR | NR |
| Terminal Bench v2.1 | 80.1 | 81.0 | 88.3 | 86.6 |
| SWE Bench Pro v1 | 65.5 | 62.1 | NR | 67.7 |
| GPQA Diamond | 90.5 | 91.2 | 93.5 | 92.6 |
| HLE (도구 없음) | 36.2 | 40.5 | 46.9 | 43.6 |

회사도 Kimi K3 같은 프런티어 오픈 모델이 일부 영역에서 여전히 앞선다고 인정했다. 즉 Beam의 메시지는 '최고 점수'보다 '활성 23B로 이 정도'라는 효율 쪽에 가깝다.

## 배경 — 모델 없이 몸값부터 키운 회사

Reflection은 그동안 대규모 투자와 연산 계약으로 주목받았지만 공개 모델은 없었다. TechCrunch는 6월 Reflection이 SpaceX와 2026년 7월부터 매달 1억 5천만 달러, 2029년까지 최대 63억 달러 규모의 <a href="https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab" target="_blank" rel="noopener">연산 계약을 맺었다고 보도</a>했다. Beam은 그 투자가 처음으로 결과물로 나온 사례다.

## 미확인·전망 (사실과 구분)

- **한국어 성능**: 발표문에 한국어나 다국어 대화 성능 언급이 없다. **미확인**이다. (표의 'SWEBench Multilingual'은 여러 프로그래밍 언어 코딩 벤치마크로, 한국어 능력과는 별개다.)
- **국내 이용 조건·원화 가격**: 조기 접근의 국가 제한, API 요금, 원화 가격 모두 **미확인**이다.
- **공개 일정**: "이달 중"은 회사 계획일 뿐 확정 날짜가 아니다.
- **구동 비용(추산)**: 501B 파라미터를 16비트로 저장하면 단순 계산으로 약 1TB이다. 활성 파라미터가 23B라도 전체 가중치는 메모리에 올려야 하므로, 개인 PC보다는 다중 GPU 서버나 클라우드 제공자를 통해 쓰게 될 가능성이 크다. 양자화 버전 제공 여부는 미확인이다.

## 국내 개발자·기업에 미치는 영향

Apache 2.0은 상업적 이용·수정·재배포를 허용하는 대표적인 관대한 라이선스다(<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">라이선스 원문</a>). 실제로 이 조건으로 공개되면, 국내 기업이 사내 서버에 올려 파인튜닝하고 제품에 넣는 데 라이선스상 걸림돌은 적은 편이다. 다만 실제 배포 때 별도 이용 정책이 붙는지는 공개 후 모델 카드로 확인해야 한다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. 평가해 볼 계획이라면 Reflection 플랫폼에서 조기 접근 대기자 명단에 등록한다(승인 기준은 미공개).<br/>
2. 가중치 공개 시 <strong>모델 카드의 라이선스 문구</strong>가 Apache 2.0 그대로인지, 추가 이용 정책이 있는지 먼저 확인한다.<br/>
3. 회사 벤치마크 대신 <strong>자기 업무 데이터(한국어 문서, 사내 코드베이스)</strong>로 짧은 평가 세트를 미리 만들어 둔다.<br/>
4. 1TB 안팎의 가중치를 올릴 GPU 메모리와 비용을 따져 보고, 직접 호스팅과 클라우드 제공자 이용 중 어느 쪽이 맞는지 정한다.
</div>

## 한계

이 글은 발표 당일 공개된 회사 블로그와 보도만을 근거로 했다. 기술 보고서와 모델 카드가 아직 나오지 않아 학습 데이터 구성, 안전성 평가 결과, 한국어 성능은 확인할 수 없었다. 벤치마크는 회사가 고른 항목과 설정으로 측정한 값이므로, 가중치 공개 뒤 제3자 평가가 나오면 결론이 달라질 수 있다.

<p><em>최종 확인일 2026-10-07.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://reflection.ai/blog/introducing-beam" target="_blank" rel="noopener">Reflection AI 블로그 — Introducing Beam (2026-10-05)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">Apache Software Foundation — Apache License 2.0 원문</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/" target="_blank" rel="noopener">TechCrunch — Reflection, 오픈웨이트 모델 Beam 공개 (2026-10-05)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab" target="_blank" rel="noopener">TechCrunch — SpaceX, Reflection AI와 연산 계약 (2026-06-22)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Reflection AI, 첫 오픈웨이트 모델 Beam 발표 — 총 501B / 활성 23B 희소 MoE, 텍스트 전용</li>
<li>가중치·기술 보고서는 "이달 중" Apache 2.0으로 공개 예정, 현재는 대기자 명단 기반 제한적 조기 접근</li>
<li>"GLM-5.2급 추론을 3~4배 적은 연산으로"는 회사 주장 — 독립 검증 전, 여러 항목에서 경쟁 모델보다 낮은 점수도 공개</li>
<li>한국어 성능·국내 이용 조건·가격은 미확인</li>
<li>도입을 검토한다면 라이선스 문구 확인, 자체 한국어 평가 세트 준비, 구동 인프라 산정부터</li>
</ul>
</div>
