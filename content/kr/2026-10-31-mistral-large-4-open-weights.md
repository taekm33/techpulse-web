---
title: "미스트랄, 1조 파라미터 'Mistral Large 4' 가중치 공개 — 자체 호스팅 가능, 단 MaaS 사업은 별도 라이선스"
summary: "미스트랄 AI가 10월 29일(보도 기준) 10월 초 프리뷰로 내놓았던 Mistral Large 4(별칭 Le Chonk)의 가중치를 허깅페이스에 공개했다. 총 약 1조 파라미터·활성 520억 파라미터의 MoE 멀티모달(텍스트·이미지 입력) 모델이며 컨텍스트는 100만 토큰이다. 라이선스는 수정 MIT 계열인 'Mistral Ecosystem Open-Weight License'로, 상업 이용은 가능하지만 모델을 API 서비스(MaaS)로 파는 사업자는 별도 상업 라이선스가 필요하다. API 가격은 100만 토큰당 입력 0.7달러·출력 2.1달러. 한국어 지원 명시 여부, 국내 사용 조건, 실제 필요한 GPU 규모를 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-10-31"
readingTime: 6
tags: ["미스트랄", "Mistral AI", "Mistral Large 4", "Le Chonk", "오픈 웨이트", "MoE"]
---

<div class="article-tldr">
미스트랄 AI가 <strong>Mistral Large 4(ML4, 별칭 Le Chonk)</strong>의 가중치를 <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank" rel="noopener">허깅페이스</a>에 공개했다. TechCrunch·SiliconANGLE 보도 기준 공개일은 <strong>2026년 10월 29일</strong>이다. 총 <strong>약 1조(문서상 1.05조) 파라미터</strong>, 토큰당 활성 <strong>520억 파라미터</strong>의 MoE 모델이고, 텍스트·이미지를 입력받아 텍스트를 출력한다. 컨텍스트는 <strong>100만 토큰</strong>이다. 라이선스는 상업 이용이 가능한 수정 MIT 계열이지만, <strong>모델을 API 서비스로 판매하는 사업자는 미스트랄과 별도 상업 계약</strong>이 필요하다. 모델 카드에 한국어는 지원 언어로 따로 적혀 있지 않다.
</div>

이 글은 미스트랄 공식 블로그·API 문서·허깅페이스 모델 카드와 언론 보도를 바탕으로 한 공개 자료 분석이다. 모델을 직접 내려받아 실행하거나 벤치마크를 재현하지 않았다.

## 누구에게 중요한가

- **데이터를 외부 API로 보내기 어려운 기업·공공·금융 조직**: 최상위급 성능을 주장하는 모델을 자기 인프라에서 돌릴 수 있는 선택지가 하나 늘었다.
- **코딩 에이전트·보안 자동화를 만드는 개발팀**: 미스트랄은 이 모델을 코딩·사이버보안 특화로 내세웠다.
- **AI 서비스를 재판매하려는 스타트업·클라우드 사업자**: 라이선스의 MaaS 조항을 먼저 확인해야 한다.
- **GPU 몇 장으로 오픈 모델을 돌리는 소규모 팀**: 1조 파라미터 모델은 서버 한 대 수준의 고사양 장비가 필요해 기대치를 조정해야 한다.

## 확인된 사실 — 미스트랄 공식 자료 기준

미스트랄은 10월 6일 <a href="https://mistral.ai/news/mistral-large-4/" target="_blank" rel="noopener">프리뷰 발표</a>에서 "월말까지 가중치를 공개하겠다"고 밝혔고, 이어 <a href="https://mistral.ai/news/mistral-large-4-oss/" target="_blank" rel="noopener">가중치 공개 공지</a>를 냈다. 공지 페이지에는 날짜가 따로 표시돼 있지 않으며, 10월 29일이라는 날짜는 언론 보도 기준이다. SiliconANGLE은 프리뷰 이후 3주간 추가 강화학습을 거쳤다고 전했다.

<div class="article-stats">
<strong>가중치 공개</strong> 2026-10-29(보도 기준), 프리뷰는 2026-10-06<br/>
<strong>규모</strong> 총 약 1조(API 문서 1.05조) / 활성 520억 파라미터, 비전 인코더 16억<br/>
<strong>구조</strong> MoE — 라우팅 전문가 128개 중 토큰당 4개 + 공유 전문가 1개<br/>
<strong>입출력</strong> 텍스트·이미지 입력 → 텍스트 출력<br/>
<strong>컨텍스트</strong> 100만 토큰<br/>
<strong>추론 모드</strong> low / medium / high(기본)<br/>
<strong>라이선스</strong> Mistral Ecosystem Open-Weight License(수정 MIT), MaaS 사업은 별도 상업 라이선스<br/>
<strong>API 가격</strong> 100만 토큰당 입력 0.7달러 / 캐시 입력 0.07달러 / 출력 2.1달러<br/>
<strong>학습</strong> 유럽 내 자체 데이터센터의 엔비디아 그레이스 블랙웰 GPU 3,800장
</div>

가중치는 기본 체크포인트(<code>Mistral-Large-4-1T-A52B</code>)와 블랙웰 GPU용 <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B-NVFP4" target="_blank" rel="noopener">NVFP4 양자화 체크포인트</a> 두 가지로 올라왔다. 모델 카드는 vLLM·SGLang 전용 도커 이미지, Transformers, llama.cpp(GGUF) 등을 배포 경로로 안내한다. API 모델 ID는 <a href="https://docs.mistral.ai/models/mistral-large-4-0" target="_blank" rel="noopener">미스트랄 API 문서</a> 기준 <code>mistral-large-4</code>이며, 공지에는 Microsoft Foundry, <a href="https://build.nvidia.com/mistralai/mistral-large-4-1t-a52b" target="_blank" rel="noopener">엔비디아 호스팅 엔드포인트</a>, OpenRouter도 제공처로 나온다.

## 성능 주장 — 회사 자체 수치

아래는 미스트랄 공지에 실린 수치로, 외부 기관이 독립적으로 재현한 결과가 아니다.

| 항목 | 미스트랄 공개 수치 |
|---|---|
| Terminal-Bench 4.0 | 41% (프리뷰 28%에서 상승) |
| Artificial Analysis 코딩 에이전트 지수 | 48% — GLM-5.3과 동률, 작업당 토큰 47% 적게 사용 |
| FrontierCode 2.0 | 19.7% |
| Artificial Analysis 사이버 지수 | 51% |
| 악의적 사이버 요청 거부율 | 96.6% |

미스트랄은 이를 근거로 "코딩 분야 최고의 오픈 웨이트 모델"이라고 주장했다. TechCrunch도 비교 대상으로 중국 오픈 웨이트 모델 GLM-5.3을 들었다. 폐쇄형 최상위 모델과의 비교는 프리뷰 단계 수치만 공개돼 있어 이번 버전 기준으로는 판단하기 어렵다.

## 미확인·전망 (사실과 구분)

- **한국어 성능**: 모델 카드 본문은 "160개 이상 언어, EU 공식 언어 전부"를 말하지만 한국어를 따로 언급하지 않는다. 허깅페이스 상단 태그는 "39개 언어"로 표시돼 본문과도 맞지 않는다. 한국어 품질은 **미확인**이다.
- **필요한 GPU 규모**: 모델 카드에는 최소 사양이 없다. vLLM·SGLang 예시는 GPU 8장 노드(텐서 병렬 8)를 가정한다. 단순 계산으로 FP8 기준 가중치만 약 1TB라서 80GB급 GPU 8장(640GB)에는 들어가지 않는다. 어떤 GPU 8장이면 충분한지는 공식 자료로 **미확인**이다.
- **국내 이용 조건**: 미스트랄 API의 한국 내 이용 제한 여부, Microsoft Foundry의 한국 리전 제공 여부는 공식 자료에서 확인하지 못해 **미확인**이다. 가격은 달러로만 공시되며 원화 공식 가격은 없다.
- **Le Chat 탑재**: 공지에는 Mistral Studio·Vibe·API만 나오고 소비자용 앱 Le Chat 탑재 여부는 적혀 있지 않다.

## 국내 개발팀에 미치는 영향

가장 큰 의미는 **최상위권 성능을 주장하는 모델을 망 분리 환경이나 자체 데이터센터에 올릴 수 있는 길**이 생겼다는 점이다. 미스트랄 피에르 스톡은 TechCrunch에 "오픈 웨이트이기 때문에 정의상 끊길 수 없는 접근"이라고 말했다. 외부 API 의존을 줄이려는 조직에는 검토할 가치가 있다.

다만 **누구나 쓸 수 있는 모델은 아니다.** 활성 파라미터는 520억이지만 전문가 전체를 메모리에 올려야 하므로 고사양 GPU 서버가 필요하다. 이런 장비가 없다면 API로 먼저 써 보고 자체 호스팅 여부를 판단하는 편이 현실적이다. API 가격(입력 0.7달러·출력 2.1달러)은 미스트랄 이전 Large 계열과 비교하기보다, 지금 쓰는 모델의 실제 청구액과 같은 작업 기준으로 비교해야 한다.

라이선스도 꼼꼼히 봐야 한다. 사내 업무나 자사 제품에 넣어 쓰는 것은 허용되지만, <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE" target="_blank" rel="noopener">라이선스 원문</a>은 모델을 서비스형(MaaS)으로 제공하는 사업에 별도 상업 라이선스를 요구한다. "오픈 웨이트"가 Apache 2.0이나 순수 MIT와 같은 의미는 아니다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>API로 먼저 평가</strong>: Mistral Studio에서 <code>mistral-large-4</code>로 자기 업무 데이터(한국어 포함)를 돌려 보고, 지금 쓰는 모델과 품질·비용을 비교한다.<br/>
2. <strong>한국어는 직접 평가셋으로</strong>: 공식 자료에 한국어가 명시돼 있지 않으므로 요약·코드 주석·고객 응대 등 실제 한국어 과제 수십 건으로 확인한다.<br/>
3. <strong>자체 호스팅 전 장비 계산</strong>: FP8 기준 가중치만 약 1TB다. 보유 GPU 총 메모리와 KV 캐시 여유분을 먼저 계산하고, 블랙웰 장비가 있으면 NVFP4 체크포인트를 검토한다.<br/>
4. <strong>라이선스 검토를 법무와 함께</strong>: 자사 서비스가 MaaS에 해당하는지, 고객에게 모델 API를 재판매하는 구조인지 확인한다.<br/>
5. <strong>회사 벤치마크는 참고만</strong>: 공개 수치는 미스트랄 자체 발표다. 자기 작업 기준 수치를 따로 남긴다.
</div>

## 한계

이 글은 10월 31일 확인한 미스트랄 공식 블로그 두 편, API 문서, 허깅페이스 모델 카드·라이선스, TechCrunch·SiliconANGLE 보도만을 근거로 했다. 성능 수치는 모두 회사 발표이며 외부 재현 결과는 아직 없다. 한국어 품질, 필요한 GPU 사양, 국내 이용 조건은 확인할 수 없었다. 총 파라미터 표기(약 1조 vs 1.05조)와 지원 언어 수(160개 이상 vs 39개 태그)는 공식 자료 안에서도 다르다. 가격은 바뀔 수 있다.

<p><em>최종 확인일 2026-10-31.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://mistral.ai/news/mistral-large-4-oss/" target="_blank" rel="noopener">Mistral AI — Mistral Large 4 (Le Chonk) 가중치 공개 공지</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://mistral.ai/news/mistral-large-4/" target="_blank" rel="noopener">Mistral AI — Mistral Large 4 프리뷰 발표 (2026-10-06)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank" rel="noopener">Mistral 허깅페이스 — Mistral-Large-4-1T-A52B 모델 카드</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE" target="_blank" rel="noopener">Mistral Ecosystem Open-Weight License 원문</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B-NVFP4" target="_blank" rel="noopener">Mistral 허깅페이스 — NVFP4 양자화 체크포인트</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://docs.mistral.ai/models/mistral-large-4-0" target="_blank" rel="noopener">Mistral API 문서 — Mistral Large 4 (모델 ID·가격·컨텍스트)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/" target="_blank" rel="noopener">TechCrunch — 1조 파라미터 모델 가중치 공개 (2026-10-29)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://siliconangle.com/2026/10/29/mistral-releases-open-weights-for-mistral-large-4-providing-sovereign-control-for-the-companys-le-chonk-ai-model/" target="_blank" rel="noopener">SiliconANGLE — 소버린 통제와 추가 학습 (2026-10-29)</a>
</div>

<div class="article-keypoints">
<ul>
<li>미스트랄, 10월 29일(보도 기준) Mistral Large 4 가중치를 허깅페이스에 공개 — 총 약 1조·활성 520억 파라미터 MoE</li>
<li>텍스트·이미지 입력, 100만 토큰 컨텍스트, low·medium·high 추론 모드</li>
<li>수정 MIT 라이선스로 상업 이용 가능, 단 MaaS 사업은 별도 상업 라이선스 필요</li>
<li>코딩·사이버보안 벤치마크는 모두 회사 자체 수치, 한국어 지원은 공식 자료에 명시 없음</li>
<li>FP8 기준 가중치만 약 1TB — 소규모 팀은 API(입력 0.7달러·출력 2.1달러/100만 토큰)로 먼저 평가</li>
</ul>
</div>
