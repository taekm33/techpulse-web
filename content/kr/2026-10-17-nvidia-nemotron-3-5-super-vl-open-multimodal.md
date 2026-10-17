---
title: "엔비디아 '네모트론 3.5 슈퍼 VL' 공개 — 상업 이용 가능한 120B 오픈 멀티모달 에이전트 모델, 한국어 지원은 미확인"
summary: "엔비디아가 2026년 10월 15일(미국 시간) 텍스트·이미지·문서·영상을 함께 처리하는 오픈 웨이트 모델 Nemotron 3.5 Super VL을 공개했다. 총 1200억 파라미터 중 토큰당 120억만 쓰는 MoE 구조이고, 컨텍스트는 최대 100만 토큰, 라이선스는 상업 이용을 허용하는 OpenMDW-1.1이다. 성능 수치 대부분은 엔비디아 자체 발표이며 외부 종합 지수는 높지 않다. 공식 지원 언어 목록에 한국어가 명시되지 않아 국내 팀은 자체 데이터 평가가 먼저다. 공개 자료 기준으로 정리했다."
category: "ai-news"
date: "2026-10-17"
readingTime: 6
tags: ["엔비디아", "네모트론", "Nemotron 3.5 Super VL", "오픈 웨이트", "멀티모달", "AI 에이전트"]
---

<div class="article-tldr">
엔비디아가 2026년 10월 15일(미국 시간, 한국 시간 16일) 오픈 웨이트 멀티모달 모델 <strong>Nemotron 3.5 Super VL</strong>을 내놓았다. 총 <strong>1200억 파라미터, 활성 120억</strong>의 MoE 모델로 텍스트·이미지·문서·영상(최대 2분)을 입력받고, 컨텍스트는 <strong>최대 100만 토큰</strong>이다. 라이선스 <strong>OpenMDW-1.1</strong>은 상업 이용을 허용한다. 엔비디아는 같은 급 오픈 모델 대비 최대 5배 처리량을 주장하지만, 외부 종합 지수(Artificial Analysis)에서는 26점으로 최상위 폐쇄형 모델과 격차가 크다. 공식 자료에 한국어가 지원 언어로 명시되지 않아 한국어 성능은 <strong>미확인</strong>이다.
</div>

이 글은 엔비디아 공식 기술 블로그·모델 카드와 언론 보도를 바탕으로 한 공개 자료 분석이다. 모델을 실행하거나 벤치마크를 재현하지 않았다.

## 누구에게 중요한가

- **사내 문서·영수증·차트 처리 에이전트를 만드는 국내 기업**: 데이터를 외부 API로 보내지 않고 자체 서버에서 돌릴 수 있는 상업용 오픈 모델 선택지가 하나 늘었다.
- **엔비디아 GPU(H100·H200·B200·DGX Spark)를 이미 가진 팀**: 엔비디아가 자사 하드웨어에 맞춰 4비트(NVFP4) 버전까지 함께 내놓았다.
- **API로만 쓰려는 개발자**: OpenRouter 등 여러 호스팅 업체가 출시일부터 유료 API를 열었다.
- **한국어 품질이 핵심인 서비스**: 공식 지원 언어 목록이 없어 도입 전 평가가 반드시 필요하다.

## 확인된 사실 — 엔비디아 공식 자료 기준

엔비디아는 10월 15일 <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/" target="_blank" rel="noopener">개발자 블로그</a>에서 이 모델이 추론·지시 수행·도구 호출과 이미지·문서·영상 이해를 한 모델에 묶었다고 설명했다. 상위 모델 Nemotron 3 Ultra에서 증류(distillation)해 만들었다고 밝혔다.

<div class="article-stats">
<strong>공개일</strong> 2026-10-15(미국) / 한국 시간 10-16<br/>
<strong>구조</strong> Mamba-2·트랜스포머 하이브리드 MoE, 총 120B·활성 12B, 레이어당 전문가 512개<br/>
<strong>입력</strong> 텍스트, 이미지(JPEG·PNG), 영상(MP4, 최대 2분) / 출력 텍스트<br/>
<strong>컨텍스트</strong> 최대 100만 토큰(입출력 공유, 배포 레시피에 따라 더 작을 수 있음)<br/>
<strong>라이선스</strong> OpenMDW-1.1 — 상업·비상업 이용 가능<br/>
<strong>배포 형식</strong> BF16(맞춤 학습용), NVFP4(최적화 배포용)<br/>
<strong>권장 하드웨어(BF16)</strong> H100 4장 또는 GB200 2장, Linux, vLLM·SGLang
</div>

<a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16" target="_blank" rel="noopener">허깅페이스 BF16 모델 카드</a>는 배포 하드웨어로 H100 4장 또는 GB200 2장을 적었다. 엔비디아 블로그가 말하는 "단일 GPU" 실행은 4비트 <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4" target="_blank" rel="noopener">NVFP4 버전</a>과 DGX Spark 같은 엔비디아 장비를 전제로 한다. 블랙웰 GPU에서는 가중치·활성값 모두 4비트로, 그 이전 세대에서는 가중치만 4비트로 돈다.

라이선스 원문은 <a href="https://github.com/OpenMDW/OpenMDW/blob/main/1.1/LICENSE.OpenMDW-1.1" target="_blank" rel="noopener">OpenMDW-1.1</a>에 공개돼 있다. 엔비디아 <a href="https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard" target="_blank" rel="noopener">build.nvidia.com 모델 카드</a>는 상업·비상업 이용이 가능하다고 적었다. 다만 엔비디아가 호스팅하는 체험용 API는 별도 약관(NVIDIA API Trial Terms)을 따른다.

배포 경로는 허깅페이스·ModelScope·OpenRouter, 엔비디아 NIM 컨테이너, 그리고 Amazon SageMaker JumpStart·Google Cloud·Microsoft Foundry·OCI다. 엔비디아는 같은 날 로컬용 소형 모델 Bolt 74B-A9B(24GB 메모리)도 공개했고, 4GB급 Bolt E4B는 10월 23일 나온다고 보도됐다.

## 성능 주장 — 대부분 엔비디아 자체 수치

엔비디아가 밝힌 대표 수치는 다음과 같다. 모두 회사 발표이며 독립 재현 결과는 아직 제한적이다.

| 항목 | 엔비디아 발표 수치 |
|---|---|
| 차트 추론(CharXiv) | 80.8%(파이썬 실행 허용 시 84%) |
| SWE-bench Verified | 71.10 |
| Terminal-Bench 2.1 | 60.67 |
| OSWorld-Verified | 51.14 |
| 에이전트 처리량 | 같은 급 오픈 모델 대비 단일 GPU에서 최대 5배 |
| OCRBench v2 | 영어 68.12 / 중국어 59.15(한국어 항목 없음) |

외부 평가는 엇갈린다. <a href="https://the-decoder.com/nvidias-nemotron-3-5-super-vl-is-an-open-model-built-to-run-enterprise-ai-agents-nonstop/" target="_blank" rel="noopener">The Decoder</a>는 Artificial Analysis 지능 지수에서 이 모델이 26점으로, 최상위 폐쇄형 모델(58점)에 크게 못 미친다고 전했다. 반면 같은 매체는 EXO Labs가 DGX Spark에서 비교한 모델 가운데 이보다 정확하면서 빠른 모델은 없었다고 평가했다고 보도했다. 즉 "최고 성능" 모델이라기보다 "엔비디아 장비에서 빠르고, 맞춤 학습하기 좋은" 모델로 보는 편이 정확하다.

고객 사례도 소개됐다. 엔비디아 블로그에 따르면 Scale AI는 추론 비용을 40분의 1, 지연을 5분의 1로 줄였고, Ramp는 영수증 처리 지연을 10분의 1로 줄였다. 이는 각 회사가 자기 업무에 맞춰 추가 학습한 결과이며, 기본 모델 성능으로 일반화할 수 없다.

## 미확인·전망 (사실과 구분)

- **한국어 지원**: 모델 카드에는 지원 언어 목록이 없다. 학습 데이터 설명에서 한국어가 다국어 웹 크롤링 대상 15개 언어 중 하나로 나오지만, 이는 학습 데이터 출처일 뿐 품질 보증이 아니다. 엔비디아가 별도로 강조한 언어는 인도 22개 언어다. 한국어 성능은 **미확인**이다.
- **원화 가격**: 웨이트는 무료다. 호스팅 API는 <a href="https://openrouter.ai/nvidia/nemotron-3.5-super-vl" target="_blank" rel="noopener">OpenRouter</a> 기준 업체별로 100만 토큰당 입력 0.10~0.25달러, 출력 0.40~1.25달러다. 원화 공식 가격은 없고, 환율과 카드 수수료에 따라 달라진다.
- **국내 클라우드 제공**: AWS·구글 클라우드·마이크로소프트·OCI의 서울 리전 제공 여부, 국내 클라우드 업체의 도입 계획은 공식 자료에 없어 **미확인**이다.
- **실제 업무 성능**: 엔비디아 수치는 자사 평가 환경(NeMo Gym 등)에서 나온 것이 섞여 있다. 독립 벤치마크가 더 쌓여야 판단할 수 있다.

## 국내 개발팀에 미치는 영향

가장 큰 의미는 **상업 이용이 가능한 대형 오픈 멀티모달 모델**이라는 점이다. 금융·의료·공공처럼 데이터를 외부로 보내기 어려운 조직은 영수증·청구서·차트·긴 PDF 처리를 사내 서버에서 할 수 있는 후보가 생겼다. 엔비디아는 학습 데이터와 강화학습 환경까지 공개해, 자사 업무 데이터로 추가 학습하는 경로를 열어 뒀다.

반대로 비용 구조는 엔비디아 하드웨어에 묶인다. BF16을 그대로 돌리려면 H100 4장이 필요하고, "단일 GPU" 성능은 블랙웰 세대의 4비트 연산을 전제로 한다. 보유 GPU가 앰페어(A100) 세대라면 기대한 속도가 나오지 않을 수 있다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>먼저 API로 평가</strong>: OpenRouter 같은 호스팅 API로 자사 한국어 문서·이미지 20~50건을 넣어 추출 정확도를 확인한다. 서버를 사기 전에 가장 싸게 판단할 수 있는 방법이다.<br/>
2. <strong>한국어 OCR 별도 점검</strong>: 공식 OCR 수치에 한국어가 없으므로 한글 스캔 문서, 세로쓰기, 표가 섞인 PDF를 따로 시험한다.<br/>
3. <strong>하드웨어 확인</strong>: 보유 GPU 세대(호퍼·블랙웰 여부)와 메모리를 확인하고, NVFP4 버전과 BF16 버전 중 무엇을 쓸지 정한다.<br/>
4. <strong>라이선스 검토</strong>: OpenMDW-1.1 원문을 법무팀과 확인한다. 엔비디아 호스팅 체험 API는 별도 약관이라 운영 서비스에 쓰기 전에 조건을 따로 본다.<br/>
5. <strong>민감 데이터 업무</strong>: 외부 API 평가 단계에서는 개인정보가 없는 샘플만 쓴다.
</div>

## 한계

이 글은 10월 15~16일 공개된 엔비디아 기술 블로그, 허깅페이스·build.nvidia.com 모델 카드, OpenRouter 페이지, 언론 보도만을 근거로 했다. 벤치마크와 고객 사례는 엔비디아 또는 고객사 발표다. 한국어 성능, 국내 리전 제공, 원화 가격은 공식 자료로 확인할 수 없었다. 호스팅 가격은 업체가 수시로 바꾼다.

<p><em>최종 확인일 2026-10-17.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/" target="_blank" rel="noopener">NVIDIA 기술 블로그 — Nemotron 3.5 Super VL 발표 (2026-10-15)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16" target="_blank" rel="noopener">NVIDIA 허깅페이스 — BF16 모델 카드</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4" target="_blank" rel="noopener">NVIDIA 허깅페이스 — NVFP4 모델 카드</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard" target="_blank" rel="noopener">build.nvidia.com — 모델 카드·라이선스 안내</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/OpenMDW/OpenMDW/blob/main/1.1/LICENSE.OpenMDW-1.1" target="_blank" rel="noopener">OpenMDW-1.1 라이선스 원문</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://openrouter.ai/nvidia/nemotron-3.5-super-vl" target="_blank" rel="noopener">OpenRouter — 모델 페이지·호스팅 업체별 가격(플랫폼 자체 자료)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://the-decoder.com/nvidias-nemotron-3-5-super-vl-is-an-open-model-built-to-run-enterprise-ai-agents-nonstop/" target="_blank" rel="noopener">The Decoder — 외부 지수 26점·하드웨어 종속성 분석 (2026-10-15)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://interestingengineering.com/ai-robotics/nvidia-nemotron-35-super-vl-5x-faster" target="_blank" rel="noopener">Interesting Engineering — Super VL·Bolt 모델 출시 일정 (2026-10-15)</a>
</div>

<div class="article-keypoints">
<ul>
<li>엔비디아, 10월 15일 오픈 웨이트 멀티모달 모델 Nemotron 3.5 Super VL 공개 — 총 120B·활성 12B MoE, 최대 100만 토큰</li>
<li>라이선스 OpenMDW-1.1로 상업 이용 가능, BF16과 4비트 NVFP4 버전 동시 공개</li>
<li>BF16 권장 사양 H100 4장 또는 GB200 2장 — "단일 GPU"는 4비트·엔비디아 장비 전제</li>
<li>벤치마크 대부분 엔비디아 자체 수치, 외부 종합 지수는 26점으로 최상위 모델과 격차</li>
<li>한국어 지원·국내 리전·원화 가격은 미확인 — API로 한국어 문서부터 평가할 것</li>
</ul>
</div>
