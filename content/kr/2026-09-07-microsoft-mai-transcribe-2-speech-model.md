---
title: "MS, 시간당 10센트 음성인식 ‘MAI-Transcribe-2’ 공개 — OpenAI·구글·일레븐랩스 정조준"
summary: "마이크로소프트 AI가 9월 3일 자체 음성인식 모델 MAI-Transcribe-2를 공개했다. 60개 언어를 지원하고 화자 분리·단어 단위 타임스탬프를 기본 탑재했으며, 오디오 시간당 0.10달러라는 시장 최저가로 OpenAI·구글·일레븐랩스를 정면 겨냥했다. 5개월 만에 세 번째 음성 모델로, MS의 ‘OpenAI 의존 탈피’ 전략이 가장 빠르게 성숙한 분야다."
category: "ai-news"
date: "2026-09-07"
readingTime: 6
tags: ["마이크로소프트", "음성인식", "MAI", "STT", "OpenAI"]
---

<div class="article-tldr">
마이크로소프트 AI가 현지시간 9월 3일 자체 음성인식(STT) 모델 <strong>MAI-Transcribe-2</strong>를 공개했다. 60개 언어를 지원하고 화자 분리(diarization)·단어 단위 타임스탬프·코드 스위칭을 기본 기능으로 담았으며, 가격은 오디오 <strong>시간당 0.10달러(연말까지 한시 특가)</strong>다. 회사는 이 모델이 정확도·속도·가격 모두에서 OpenAI GPT-Transcribe, 구글 Gemini 3.5 Transcribe, 일레븐랩스 Scribe v2를 앞선다고 주장했다. 5개월 사이 세 번째 음성 모델로, MS가 OpenAI 의존을 줄이고 자체 모델을 제품에 이식하는 전략이 가장 빠르게 결실을 본 사례다.
</div>

마이크로소프트 AI가 9월 3일 목요일 새 음성인식 모델 **MAI-Transcribe-2**를 출시했다. 회사는 이 모델을 “세계에서 가장 빠르고, 가장 정확하며, 가장 저렴한 음성인식 모델”로 규정했다. 가장 눈길을 끄는 건 가격이다. 오디오 시간당 0.10달러(10센트). 불과 5개월 전 이 라인의 첫 모델(MAI-Transcribe-1)이 시간당 0.36달러였던 것과 비교하면 약 72% 인하다. 콜센터 오디오를 연 10만 시간 처리하는 기업이라면 연간 청구액이 3만6,000달러에서 1만 달러로 떨어진다.

## 기본에 담은 기능, 프리미엄으로 팔던 것들

언어 지원은 60개로, 6월 MAI-Transcribe-1.5의 43개, 4월 첫 버전의 25개에서 빠르게 늘었다. 마이크로소프트는 스튜디오급 깨끗한 오디오가 아니라 배경 소음·저품질 녹음·겹치는 발화 같은 “현실의 지저분한 오디오”를 겨냥해 만들었다고 설명했다.

핵심은 언어 수보다 기본 제품에 무엇을 묶었느냐다. 화자 분리는 다자 녹음에서 누가 무엇을 말했는지 구분해 회의록을 실제로 쓸 수 있게 만든다. 단어 단위 타임스탬프는 검색·편집·영상 정렬을 가능하게 한다. 키워드 바이어싱은 약품명·제품 코드·사람 이름 같은 도메인 전문 용어를 미리 학습시켜 오인식을 줄인다. 자동 언어 식별로 사용자가 언어를 미리 지정할 필요도 없다.

특히 두 기능이 두드러진다. 출력 스타일을 “축어(verbatim)”와 “클린(clean)”으로 고를 수 있어, 컴플라이언스·법무팀은 “음…” 같은 필러와 말더듬까지 그대로 남기고, 자막·노트용에는 필러를 제거한 깔끔한 텍스트를 얻는다. 코드 스위칭은 문장 중간에 언어가 바뀌는 대화를 처리하는데, 마이크로소프트는 힝글리시(Hinglish)·스팽글리시(Spanglish)를 명시적으로 지목했다. 전문 업체들이 각각 프리미엄을 붙여 팔던 기능들을, MS는 10센트에 전부 포함시켰다.

<div class="article-stats">
<strong>출시일</strong> 2026년 9월 3일 (현지시간)<br/>
<strong>가격</strong> 오디오 시간당 $0.10 (연말까지 한시 특가)<br/>
<strong>지원 언어</strong> 60개 · FLEURS 평균 단어오류율(WER) 5.2%<br/>
<strong>제공처</strong> Microsoft Foundry · MAI Playground · OpenRouter
</div>

## 벤치마크 주장, 어떻게 읽어야 하나

마이크로소프트의 성능 주장은 세 가지 서로 다른 잣대에 기댄다. 첫째, 다국어 음성인식 표준 벤치마크 FLEURS에서 60개 언어 평균 WER 5.2%로 1위. 다만 이 수치는 6월 1.5 버전의 3.7%보다 오히려 올라갔는데, 이는 성능 후퇴가 아니라 저자원 언어까지 포함해 평균을 낸 결과일 가능성이 크다. 구매자라면 언어별 세부 수치를 요구하는 게 좋다.

둘째, 독립 벤치마크 업체 Artificial Analysis의 WER 리더보드에서 2위이며 ‘정확도-지연시간 파레토 프론티어’를 정의한다고 밝혔다. 6월엔 3위였으니 일레븐랩스를 앞질렀다는 의미다. 셋째, 속도는 Artificial Analysis 평가 기준 OpenAI GPT-Transcribe보다 10배, 일레븐랩스 Scribe v2보다 7배, 구글 Gemini 3.5 Transcribe보다 5배 빠르다고 주장했다.

| 항목 | MAI-Transcribe-2 | 직전(1.5, 6월) |
|---|---|---|
| 지원 언어 | 60개 | 43개 |
| FLEURS 평균 WER | 5.2% | 3.7% |
| Artificial Analysis 순위 | 2위 | 3위 |
| 시간당 가격 | $0.10 | — |

## 5개월에 세 모델, 그리고 ‘OpenAI 탈피’

속도가 진짜 이야기다. 4월 2일 MAI-Transcribe-1(25개 언어, $0.36), 6월 2일 1.5(43개 언어, 키워드 바이어싱), 그리고 9월 3일 2.0(60개 언어, 화자 분리·타임스탬프·코드 스위칭, $0.10). 5개월 만에 세 번, 매번 언어 범위를 약 40%씩 늘리며 경쟁사가 상위 요금제에 가둬둔 기능을 기본에 넣었다.

이 배경엔 무스타파 술레이만 마이크로소프트 AI CEO가 언급한 “관료주의에서 해방된 10인 소규모 집중 팀” 구조가 있다. 그는 이 모델이 “다른 최고 수준 모델의 절반 GPU 비용”으로 돌아가 큰 비용 절감이 된다고 밝혔다.

<div class="article-callout info">
전략적 맥락: 마이크로소프트는 OpenAI에 130억 달러 이상을 투자하고 애저·오피스·코파일럿에 그 모델을 얹어 왔다. 그러나 2025년 10월과 2026년 4월의 두 차례 파트너십 개정으로 독자 노선의 여지가 넓어졌고, 그때마다 자체 MAI 모델이 뒤따랐다. 7월 블룸버그 보도에 따르면 MS는 이미 워드·엑셀 일부 프롬프트를 자체 MAI 모델로 처리하기 시작했다. 음성인식은 문제 범위가 명확하고 지표가 객관적이라, 이 대체 전략의 첫 성숙 분야가 됐다.
</div>

## 남는 질문들

발표는 벤치마크엔 구체적이지만 실무 질문은 열어뒀다. 0.10달러가 언제까지인지 종료일과 정상가가 명시되지 않았고, 음성 에이전트·실시간 자막에 필요한 스트리밍(실시간) 성능은 언급이 없다. 60개 언어 평균 5.2%가 주요 언어 3%·저자원 언어 12%를 뭉뚱그린 것일 수 있어 언어별 검증이 필요하며, 화자 분리 정확도를 나타내는 별도 지표도 제시되지 않았다. 의료·법률·금융 오디오를 다루는 만큼 데이터 보존·학습 활용 여부 등 데이터 처리 정책도 규제 산업에는 중요한 확인 사항이다.

<div class="article-callout tip">
실무 관점: 전사(轉寫)가 “가격 협상이 필요 없는 수준”으로 싸지는 국면이다. 다만 도입 전에는 (1) 특가 종료 후 정상가, (2) 실시간 스트리밍 지원 여부, (3) 내 업무에 쓰이는 언어의 개별 정확도, (4) 화자 분리 오류율, (5) 데이터 잔존·재학습 정책을 서면으로 확인하라. 리더보드 1위와 실서비스 배포 사이의 간극은 대개 이 다섯 가지에서 갈린다.
</div>

## 의미와 전망

MAI-Transcribe-2는 단일 제품 발표라기보다 하나의 ‘템플릿’에 가깝다. 마이크로소프트 AI는 이미지·음성·전사·코드·추론·사이버보안까지 모달리티별 특화 모델을 찍어내며, 각 모델을 저비용으로 최적화해 프론티어 랩보다 싸게 값을 매기고 자사 제품에 조용히 이식한다. GPT나 제미나이를 전 분야에서 이기려는 게 아니라, 대부분의 엔터프라이즈 워크로드를 남에게 비용 지불 없이 처리하고 남는 용량은 전문 업체가 못 맞추는 가격에 파는 포트폴리오 전략이다. 전사는 그 전략이 가장 먼저 무르익은 분야일 뿐이다.

<div class="article-keypoints">
<ul>
<li>MS AI가 9월 3일 음성인식 모델 MAI-Transcribe-2 공개 — 시간당 $0.10(연말까지 한시 특가), 5개월 전 대비 약 72% 인하.</li>
<li>60개 언어 지원, 화자 분리·단어 단위 타임스탬프·코드 스위칭(힝글리시·스팽글리시)을 기본 탑재.</li>
<li>FLEURS 60개 언어 평균 WER 5.2%로 1위 주장, Artificial Analysis WER 리더보드 2위, GPT-Transcribe 대비 10배 속도 주장.</li>
<li>4월→6월→9월 5개월 만의 세 번째 음성 모델. 술레이만 CEO의 ‘10인 팀’·‘절반 GPU 비용’ 발언.</li>
<li>OpenAI 의존 축소 전략의 첫 성숙 분야 — 이미 워드·엑셀 일부에 자체 MAI 모델 투입(블룸버그).</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/" target="_blank" rel="noopener">Microsoft AI — MAI-Transcribe-2 공식 발표</a><br/>
<a href="https://venturebeat.com/infrastructure/microsoft-ais-mai-transcribe-2-undercuts-openai-google-and-elevenlabs-on-price-and-speed" target="_blank" rel="noopener">VentureBeat — Microsoft AI’s MAI-Transcribe-2 undercuts OpenAI, Google and ElevenLabs on price and speed</a><br/>
<a href="https://artificialanalysis.ai/speech-to-text/non-streaming" target="_blank" rel="noopener">Artificial Analysis — Speech-to-Text 리더보드 (독립 벤치마크)</a>
</div>
