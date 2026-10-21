---
title: "딥시크, 실서비스 추론 엔진 'DeepInfer' 오픈소스 공개 — 블랙웰·어센드 950 전용, KV 캐시는 빠졌다"
summary: "딥시크가 2026년 10월 20일 자사 서비스에 쓰는 추론 프레임워크 DeepInfer를 Apache 2.0으로 깃허브에 공개했다. 지원 모델은 DeepSeek-V4.1-Flash 하나, 지원 하드웨어는 엔비디아 SM100(블랙웰) GPU와 화웨이 어센드 950 NPU 두 종류다. 하루 155조 토큰 처리, GPU 시간당 매출 38달러 같은 운영 수치도 함께 공개했지만 모두 회사 자체 수치다. KV 캐시 관리와 프리필·디코드 분리 같은 대규모 운영 핵심 기능은 이번 공개에서 빠졌다. 국내 팀이 당장 쓸 수 있는지, 무엇부터 확인할지 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-10-21"
readingTime: 6
tags: ["딥시크", "DeepSeek", "DeepInfer", "추론 엔진", "오픈소스", "DeepSeek-V4.1-Flash"]
---

<div class="article-tldr">
딥시크가 10월 20일(보도 기준) 자사 실서비스를 돌리는 추론 프레임워크 <strong>DeepInfer</strong>를 <strong>Apache 2.0</strong> 라이선스로 공개했다. 지원 모델은 <strong>DeepSeek-V4.1-Flash</strong> 하나뿐이고, 공식 지원 하드웨어는 <strong>엔비디아 SM100(블랙웰) GPU</strong>와 <strong>화웨이 어센드 950 NPU</strong>다. 딥시크는 클러스터 하나가 하루 <strong>155조 토큰</strong>을 처리하고, 비수기 요금 기준 매출이 <strong>GPU 시간당 38달러</strong>라고 밝혔다. 다만 이번 공개본은 오프라인 추론용이며 <strong>KV 캐시 시스템, 프리필·디코드 분리, 복제본 간 부하 분산</strong>은 들어 있지 않다. H100·A100 같은 이전 세대 GPU는 지원 목록에 없다.
</div>

이 글은 딥시크 깃허브 저장소·배포 문서·허깅페이스 모델 카드와 언론 보도를 바탕으로 한 공개 자료 분석이다. 코드를 빌드하거나 성능을 재현하지 않았다.

## 누구에게 중요한가

- **DeepSeek 모델을 자체 서버에 올리려는 기업·연구실**: 딥시크가 실제 서비스에 쓰는 최적화 기법을 공개 코드로 볼 수 있게 됐다.
- **추론 비용을 다루는 MLOps·인프라 엔지니어**: 추측 디코딩, 전문가 병렬화(EP), 프리필 축소 같은 기법의 실서비스 구현이 공개됐다.
- **블랙웰(B200·GB200)이나 어센드 950을 확보한 클라우드·호스팅 업체**: 바로 시험해 볼 수 있는 대상이다.
- **H100·A100 위주로 GPU를 보유한 국내 팀**: 공식 지원 대상이 아니어서 기대치를 조정해야 한다.

## 확인된 사실 — 딥시크 공식 자료 기준

<a href="https://github.com/deepseek-ai/DeepInfer" target="_blank" rel="noopener">DeepInfer 깃허브 저장소</a>는 이 프로젝트를 "DeepSeek 모델을 위한 고성능·대규모 추론 프레임워크"로 소개하고, 자사 서비스의 기반이라고 적었다. 이번 공개는 "대규모 서빙에 필요한 핵심 기능을 갖춘 오프라인 추론"이라고 범위를 밝혔다. 원래 vLLM을 바탕으로 만들었고 SGLang·TensorRT-LLM에서 아이디어를 얻었다고 감사 문구에 적었다.

<div class="article-stats">
<strong>공개</strong> 2026-10-20(딥시크 X 계정·깃허브, 보도 기준)<br/>
<strong>라이선스</strong> 코드 Apache 2.0 / V4.1-Flash 가중치 MIT<br/>
<strong>지원 모델</strong> DeepSeek-V4.1-Flash(기본 체크포인트 V4.1-Flash-1017)<br/>
<strong>지원 하드웨어</strong> 엔비디아 SM100 GPU, 화웨이 어센드 950 NPU<br/>
<strong>빌드 요건</strong> Linux, GCC 13 이상, Python 3.12, CUDA 13 또는 CANN 9.2<br/>
<strong>사용 커널</strong> FlashMLA, DeepGEMM, DeepEP, TileKernels, DeepSelect, TileLang 커널<br/>
<strong>미포함</strong> KV 캐시 시스템, 프리필·디코드 분리, 데이터 병렬 복제본 간 부하 분산
</div>

주요 기능은 저장소 README에 정리돼 있다. 어텐션 데이터 병렬화와 MoE 전문가 병렬화(EP+EPLB), 초안 토큰을 신뢰도에 따라 골라 검증하는 추측 디코딩(DSpark), 슬라이딩 윈도 어텐션 구간의 프리필 재계산을 줄이는 기법, 비동기 스케줄링, 정규식·JSON 스키마·EBNF 기반 구조화 출력이 포함된다. 실행마다 같은 결과를 내는 배치 불변 추론과 결정적 샘플링은 <strong>엔비디아에서만</strong> 동작한다고 명시돼 있다.

모델 쪽 정보는 <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank" rel="noopener">허깅페이스 V4.1-Flash-1017 모델 카드</a>에 있다. 모델 크기는 7630억 파라미터, 권장 컨텍스트는 100만 토큰이며 저장소와 가중치 모두 MIT 라이선스다. 함께 공개된 <a href="https://github.com/deepseek-ai/deepseek-recipe" target="_blank" rel="noopener">deepseek-recipe</a>는 딥시크 공식 API와 같은 방식으로 요청을 토큰으로 바꾸는 라이브러리다.

## 운영 수치 — 공개됐지만 회사 자체 발표

딥시크는 <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/doc/inference_deployment_qa.md" target="_blank" rel="noopener">배포 Q&A 문서</a>에서 실제 운영 구조를 꽤 자세히 공개했다. 외부 기관이 검증한 수치는 아니다.

| 항목 | 딥시크 공개 내용 |
|---|---|
| 처리량 | 클러스터 하나가 하루 155조 토큰 처리 |
| 매출 | 비수기 요금 기준 GPU 시간당 38달러 |
| 최소 효율 단위 | 프리필 GPU 64장 + 디코드 GPU 64장(약 1:1) |
| KV 캐시 보관 | 72시간 이상 목표, 3FS 클러스터에 약 100PiB SSD |
| 추측 검증 개선 효과 | 처리량 4~7% 증가(랭크당 약 60개 동시 시퀀스 기준) |
| 공개 커널과 내부 버전 차이 | FlashMLA 디코딩 커널 5~10% 느림, 전체 성능 차이는 최대 5% |

README의 성능 그래프는 프리필에 SM100 GPU 4장, 디코드에 64장을 써서 측정했다. 즉 성능 그래프는 여러 노드에 걸친 블랙웰 구성을, 운영 수치는 GPU 128장 이상 배포를 전제로 한다.

## 미확인·전망 (사실과 구분)

- **H100·A100에서의 동작**: README에 적힌 지원 하드웨어는 SM100과 어센드 950뿐이다. 호퍼·앰페어 세대에서 빌드되거나 돌아가는지는 공식 자료로 확인되지 않아 **미확인**이다.
- **한국어 품질**: DeepInfer는 추론 엔진이라 언어와 직접 관계는 없다. 다만 대상 모델인 V4.1-Flash 모델 카드에도 지원 언어 목록이 없어 한국어 성능은 **미확인**이다.
- **국내 클라우드에서 SM100 확보**: 국내 리전에서 B200·GB200 인스턴스를 바로 빌릴 수 있는지, 어센드 950을 국내에서 쓸 수 있는지는 공식 자료가 없어 **미확인**이다.
- **향후 공개 범위**: 딥시크는 앞으로 나올 모델의 추론 코드도 같은 저장소에 올리겠다고 했다고 SiliconANGLE이 전했다. KV 캐시·부하 분산 코드는 내부 인프라와 강하게 묶여 있다는 이유로 빠졌고, 공개 시점은 밝히지 않았다.
- **미국 정부 조치**: SiliconANGLE과 The Next Web은 공개 하루 전 미국 정부가 연방 민간기관에 딥시크 제품 제거를 지시했다고 보도했다. 이 글에서는 해당 지시 원문을 확인하지 못했다.

## 국내 개발팀에 미치는 영향

가장 실용적인 의미는 **"딥시크가 자기 모델을 어떻게 싸게 돌리는지"를 코드 수준에서 볼 수 있게 됐다**는 점이다. 추측 디코딩, 대규모 전문가 병렬화, 프리필 축소 같은 기법은 vLLM·SGLang을 쓰는 팀에게도 참고가 된다. The Next Web은 vLLM 프로젝트가 DeepInfer의 아이디어를 반영해 V4.1-Flash 지원을 개선하겠다고 밝혔다고 전했다.

반면 **소규모 자체 호스팅 비용이 당장 내려간다고 보기는 어렵다.** 공개 수치는 GPU 128장 단위 배포를 전제로 하고, 대규모 운영에 필수인 KV 캐시·프리필·디코드 분리 코드는 빠졌다. GPU 몇 장으로 V4.1-Flash를 돌리려는 팀이라면 모델 카드가 권장하는 vLLM·SGLang 경로가 여전히 현실적이다.

API로 쓰는 경우는 별개다. <a href="https://api-docs.deepseek.com/quick_start/pricing" target="_blank" rel="noopener">딥시크 API 가격표</a>는 달러로만 표시되며, V4.1-Flash 기준 100만 토큰당 입력(캐시 미적중) 0.15~0.3달러, 출력 0.6~1.2달러다. 피크 시간(평일 UTC 01~04시, 06~10시)은 <strong>한국 시간 평일 오전 10시~오후 1시, 오후 3시~7시</strong>에 해당해 국내 업무 시간과 겹친다. 그 밖의 시간은 절반 가격이다. 원화 공식 가격은 없다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>보유 GPU부터 확인</strong>: SM100(블랙웰) 또는 어센드 950이 아니면 DeepInfer는 공식 지원 대상이 아니다. 이 경우 vLLM·SGLang으로 V4.1-Flash를 띄우는 편이 안전하다.<br/>
2. <strong>코드는 읽을거리로 활용</strong>: 자체 추론 스택을 운영한다면 README의 기능 목록과 배포 Q&A 문서를 먼저 읽고, 자기 환경에 옮길 만한 기법(신뢰도 기반 추측 검증, 프리필 축소)을 골라 본다.<br/>
3. <strong>블랙웰 보유 팀은 소규모로 재현</strong>: 저장소의 스윕 스크립트(examples/sweep)로 자기 장비에서 수치를 다시 잰 뒤 기존 엔진과 비교한다. 회사 그래프를 그대로 믿지 않는다.<br/>
4. <strong>API 사용 시 시간대 조정</strong>: 배치 작업은 한국 시간 저녁·주말 등 비수기로 옮기면 비용이 절반이 된다.<br/>
5. <strong>보안·규정 검토 분리</strong>: 자체 서버에서 돌리는 오픈소스 코드와 딥시크 앱·API 사용은 데이터 흐름이 다르다. 사내 정책은 둘을 나눠 검토하고, 공공기관은 소속 기관 지침을 따른다.
</div>

## 한계

이 글은 10월 20~21일 확인한 딥시크 깃허브 저장소(README·배포 Q&A·라이선스), 허깅페이스 모델 카드, 딥시크 API 가격 페이지, 언론 보도만을 근거로 했다. 처리량·매출·성능 그래프는 모두 딥시크 자체 수치이며 외부 재현 결과는 아직 없다. 이전 세대 GPU 지원, 한국어 성능, 국내 클라우드 제공 여부는 확인할 수 없었다. API 가격은 바뀔 수 있다.

<p><em>최종 확인일 2026-10-21.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/deepseek-ai/DeepInfer" target="_blank" rel="noopener">DeepSeek 깃허브 — DeepInfer 저장소·README</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/doc/inference_deployment_qa.md" target="_blank" rel="noopener">DeepSeek 깃허브 — 추론 배포 Q&A(운영 수치)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/LICENSE" target="_blank" rel="noopener">DeepInfer 라이선스(Apache 2.0) 원문</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/deepseek-ai/deepseek-recipe" target="_blank" rel="noopener">DeepSeek 깃허브 — deepseek-recipe</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank" rel="noopener">DeepSeek 허깅페이스 — V4.1-Flash-1017 모델 카드</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://api-docs.deepseek.com/quick_start/pricing" target="_blank" rel="noopener">DeepSeek API 문서 — 모델·가격</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://siliconangle.com/2026/10/20/deepseek-open-sources-deepinfer-the-inference-framework-behind-its-production-services/" target="_blank" rel="noopener">SiliconANGLE — DeepInfer 공개와 배경 (2026-10-20)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://thenextweb.com/news/deepseek-deepinfer-open-source-inference-engine" target="_blank" rel="noopener">The Next Web — 비용 의미와 vLLM 반응 (2026-10-20)</a>
</div>

<div class="article-keypoints">
<ul>
<li>딥시크, 10월 20일 실서비스 추론 엔진 DeepInfer를 Apache 2.0으로 공개 — 지원 모델은 V4.1-Flash 하나</li>
<li>공식 지원 하드웨어는 엔비디아 SM100(블랙웰)과 화웨이 어센드 950뿐, H100·A100은 미확인</li>
<li>하루 155조 토큰·GPU 시간당 38달러 등 운영 수치 공개 — 모두 딥시크 자체 발표</li>
<li>KV 캐시·프리필·디코드 분리·부하 분산 코드는 빠져 대규모 운영을 그대로 복제할 수는 없음</li>
<li>소규모 팀은 vLLM·SGLang 경로 유지, API는 한국 시간 저녁·주말 비수기 활용</li>
</ul>
</div>
