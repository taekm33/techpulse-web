---
title: "메이투안 'LongCat-2.0' 오픈소스 공개 — 두 달간 정체 숨기고 오픈라우터 1위 지킨 1.6조 파라미터 모델"
summary: "중국 메이투안이 1.6조 파라미터 MoE 모델 'LongCat-2.0'을 MIT 라이선스로 오픈소스 공개했다. 엔비디아 GPU 없이 국산 가속기 5만 개로 사전학습했다고 주장하며, 정체를 숨긴 채 두 달간 오픈라우터 호출량 상위권을 지켜온 스텔스 모델 'Owl Alpha'의 실체였음이 드러났다. 다만 실제 가중치 공개는 아직이다."
category: "ai-news"
date: "2026-07-05"
readingTime: 6
tags: ["메이투안", "LongCat-2.0", "오픈소스 LLM", "중국 AI", "국산 반도체", "MoE"]
---

<div class="article-tldr">
중국 메이투안이 6월 30일 1.6조 파라미터 MoE(전문가 혼합) 모델 'LongCat-2.0'을 MIT 라이선스로 오픈소스 공개했다. 네이티브 100만 토큰 컨텍스트를 지원하며, 엔비디아 GPU 없이 국산 AI 가속기 5만 개로만 사전학습했다고 발표했다. 이 모델은 정체를 숨긴 채 두 달간 오픈라우터에서 호출량 세계 상위권을 지켜온 스텔스 모델 'Owl Alpha'였음이 이번에 확인됐다. SWE-bench Pro 벤치마크에서 GPT-5.5를 근소하게 앞섰지만, 실제 모델 가중치는 아직 공개되지 않아 "공개 예정"이라는 안내만 떠 있는 상태다.
</div>

중국 배달 플랫폼 기업 메이투안(美团)이 자체 개발한 대형언어모델 'LongCat-2.0'을 깃허브·허깅페이스·자사 플랫폼을 통해 공개했다. 총 1.6조 개 파라미터를 가진 MoE 구조로, 실제 추론 시 활성화되는 파라미터는 평균 약 480억 개 수준이다.

## 두 달간 정체를 숨긴 '스텔스 모델'이었다

이번 발표에서 가장 눈에 띄는 대목은 LongCat-2.0이 완전히 새로운 모델이 아니라는 점이다. 오픈라우터(OpenRouter)와 자사 longcat.ai를 통해 프리뷰 버전이 익명의 'Owl Alpha'라는 이름으로 이미 두 달 가까이 운영되고 있었다. 이 기간 동안 Owl Alpha는 오픈라우터 전체 호출량 기준 세계 상위 3위권을 유지했고, 에이전트 프레임워크별 월간 사용량 집계에서도 Hermes Agent 1위, Claude Code 연동 2위, OpenClaw 3위를 기록한 것으로 알려졌다. 메이투안은 이번 공식 발표를 통해 이 스텔스 모델의 정체가 LongCat-2.0이었음을 확인했다.

<div class="article-stats">
<strong>공개일</strong> 2026년 6월 30일<br/>
<strong>총 파라미터</strong> 1.6조 개 (MoE, 평균 활성 파라미터 약 480억 개)<br/>
<strong>컨텍스트 윈도우</strong> 네이티브 100만 토큰<br/>
<strong>라이선스</strong> MIT (완전 오픈소스)<br/>
<strong>학습 인프라</strong> 국산 AI 가속기(ASIC) 약 5만 개, 엔비디아 GPU 미사용 주장
</div>

## 국산 칩만으로 사전학습 — 검증은 아직

메이투안 측 설명에 따르면 LongCat-2.0은 사전학습(pretraining) 단계부터 엔비디아 칩을 전혀 사용하지 않고, 중국산 AI 가속기 약 5만 개로 구성된 슈퍼클러스터에서 학습됐다. 이는 기존 중국 모델들과 비교해도 진전된 주장이다. 예컨대 딥시크(DeepSeek)의 V4-pro는 추론 단계에서는 국산 칩을 활용했지만, 연산량이 훨씬 많은 사전학습 단계에서는 여전히 해외산 반도체에 의존한 것으로 알려져 있다. 다만 이 학습 인프라 주장은 메이투안 측 발표에 근거한 것으로, 독립적인 제3자 검증은 아직 이뤄지지 않았다는 점은 유의할 필요가 있다.

## 벤치마크 — GPT-5.5를 근소하게 앞서

메이투안이 공개한 자체 벤치마크에 따르면 LongCat-2.0은 코딩 에이전트 평가에서 경쟁력 있는 성적을 냈다.

| 벤치마크 | LongCat-2.0 | 비교 모델 |
|---|---|---|
| SWE-bench Pro | 59.5 | GPT-5.5 58.6 |
| Terminal-Bench 2.1 | 70.8 | — |
| SWE-bench Multilingual | 77.3 | — |
| FORTE(기업 워크플로 시뮬레이터) | 73.2 | — |

<div class="article-callout tip">
SWE-bench Pro에서 GPT-5.5를 앞섰다는 수치 자체는 인상적이지만, 이는 메이투안이 자체 공개한 결과다. 프런티어급 모델 비교 벤치마크는 평가 설정에 따라 편차가 크므로, 독립 기관의 재현 검증이 나오기 전까지는 참고 수치로 받아들이는 편이 안전하다.
</div>

## 아직 못 받은 것 — 가중치는 "공개 예정"

발표 시점 기준으로 깃허브와 허깅페이스 저장소 모두 실제 모델 가중치 대신 "모델 가중치 공개 예정 — 곧 만나요(Model weights coming soon)" 안내만 게시돼 있다. 즉 라이선스와 기술 문서는 공개됐지만, 개발자가 직접 내려받아 구동해볼 수 있는 단계는 아직 아니다.

<div class="article-callout info">
MIT 라이선스는 상업적 활용까지 포함한 가장 개방적인 오픈소스 라이선스 중 하나다. 1.6조 파라미터급 모델에 이 라이선스를 적용한다고 예고한 것 자체가 이례적이지만, 실제 가중치가 언제 어떤 형태(양자화 여부, 파일 크기 등)로 배포될지는 아직 확정되지 않았다. 실사용 가능 여부는 가중치 공개 이후 다시 확인이 필요하다.
</div>

## 시사점

LongCat-2.0은 오픈소스 여부와 학습 인프라 국산화라는 두 축에서 동시에 화제를 모으고 있다. 다만 두 주장 모두 아직 검증이 필요한 단계다. 학습 인프라의 국산화 정도는 제3자 검증이, 가중치 오픈소스는 실제 배포가 이뤄져야 실체를 확인할 수 있다. 오픈라우터 상위권을 두 달간 익명으로 지켜온 실적 자체는 실사용 지표로 이미 확인된 부분이라, 향후 가중치 공개와 독립 벤치마크 결과가 이 모델의 실제 위상을 가를 것으로 보인다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.longcatai.org/models/longcat-2" target="_blank" rel="noopener">LongCat-2.0 공식 모델 페이지 (longcatai.org)</a><br/>
· <a href="https://www.scmp.com/tech/tech-trends/article/3358854/china-debuts-biggest-ai-model-trained-local-chips-meituan-releases-longcat-20" target="_blank" rel="noopener">South China Morning Post — China debuts biggest AI model trained on local chips (2026.06.30)</a><br/>
· <a href="https://siliconangle.com/2026/06/30/chinas-meituan-open-sources-massive-longcat-2-0-ai-model-saying-trained-domestic-chips/" target="_blank" rel="noopener">SiliconANGLE — China's Meituan open-sources massive LongCat-2.0 AI model (2026.06.30)</a>
</div>

<div class="article-keypoints">
<ul>
<li>메이투안이 6월 30일 1.6조 파라미터 MoE 모델 'LongCat-2.0'을 MIT 라이선스로 오픈소스 공개</li>
<li>네이티브 100만 토큰 컨텍스트, 국산 AI 가속기 약 5만 개로 사전학습(제3자 검증은 미확인)</li>
<li>두 달간 익명 운영된 스텔스 모델 'Owl Alpha'의 정체가 LongCat-2.0이었음을 이번에 확인 — 오픈라우터 호출량 세계 상위 3위권 유지</li>
<li>SWE-bench Pro 59.5로 GPT-5.5(58.6) 근소하게 앞섬(자체 발표 수치)</li>
<li>공개 시점 기준 실제 모델 가중치는 미배포 — 깃허브·허깅페이스에 "공개 예정" 안내만 게시</li>
<li>딥시크 V4-pro와 달리 사전학습 단계부터 국산 칩만 사용했다고 주장 — 중국 AI 반도체 자립 서사에 새 사례 추가</li>
</ul>
</div>
