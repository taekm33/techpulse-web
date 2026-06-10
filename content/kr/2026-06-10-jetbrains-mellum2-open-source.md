---
title: "JetBrains Mellum2 오픈소스 공개 — 소프트웨어 엔지니어링용 12B MoE 모델"
summary: "JetBrains가 6월 1일 Mellum2를 오픈소스로 공개했다. 12B 파라미터, 활성 2.5B/토큰의 MoE 아키텍처로 동급 밀집 모델 대비 2배 이상 빠른 추론을 제공하며 Apache 2.0 라이선스로 자유롭게 활용 가능하다."
category: "dev-trend"
date: "2026-06-10"
readingTime: 5
tags: ["JetBrains", "오픈소스", "코딩모델", "MoE", "소프트웨어엔지니어링"]
---

<div class="article-tldr">
<strong>한눈에 보기:</strong> JetBrains의 Mellum2는 12B 파라미터 MoE(혼합 전문가) 언어 모델로, 토큰당 2.5B 활성 파라미터만 사용해 밀집 모델 대비 2배 이상 빠른 추론을 실현한다. 코딩·라우팅·RAG·서브에이전트·요약 등 소프트웨어 엔지니어링 워크플로에 최적화됐으며 Apache 2.0으로 공개됐다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/yUW8cBjL0LU" title="JetBrains Mellum2 is FAST — but Ollama Can't Run It (Yet)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">12B</span><span class="article-stats__label">총 파라미터</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2.5B</span><span class="article-stats__label">토큰당 활성 파라미터</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2×+</span><span class="article-stats__label">동급 밀집 모델 대비 추론 속도</span></div>
  <div class="article-stats__item"><span class="article-stats__value">128K</span><span class="article-stats__label">컨텍스트 윈도우</span></div>
</div>

## Mellum2란?

**Mellum2**는 JetBrains가 2026년 6월 1일 오픈소스로 공개한 12B 파라미터 Mixture-of-Experts(MoE) 언어 모델이다. JetBrains는 PyCharm·IntelliJ를 만든 IDE 전문 기업으로, 2024년 말 코드 자동완성 전용 모델 Mellum(4B 밀집)을 공개한 이후 Mellum2에서 자연어와 코드를 모두 다루는 범용 소프트웨어 엔지니어링 모델로 진화했다.

Mellum2의 핵심은 **효율적 추론**이다. 64개의 전문가(expert) 중 매 토큰마다 8개만 활성화하는 MoE 구조를 통해 12B 모델의 역량을 갖추면서도 실제 계산량은 2.5B 밀집 모델 수준으로 유지한다. 결과적으로 동급 오픈소스 모델 대비 **2배 이상 빠른 추론**이 가능해 실시간 워크플로와 프로덕션 배포에 적합하다.

## 기술 아키텍처

Mellum2는 약 10.6조 토큰의 3단계 커리큘럼으로 사전학습됐다. 웹 데이터에서 출발해 코드·수학 비중을 순차적으로 높이며 (23% → 42% → 59%) 코딩 및 수학적 추론 능력을 강화했다.

주요 설계 선택:
- **그룹 쿼리 어텐션(GQA)**: 4개의 KV 헤드로 추론 메모리 효율화
- **슬라이딩 윈도우 어텐션**: 4개 레이어마다 3개에 적용해 장문 컨텍스트 처리 효율 향상
- **멀티 토큰 예측(MTP)**: 보조 사전학습 목표인 동시에 투기적 디코딩의 드래프트 모델로 활용
- **YaRN 컨텍스트 확장**: 레이어 선택적 YaRN으로 128K 컨텍스트 윈도우 달성
- **Muon 옵티마이저 + FP8 혼합 정밀도**: 학습 효율 최적화

## 어디에 쓰는가?

Mellum2는 단일 대화 챗봇이 아니라 **소프트웨어 엔지니어링 시스템의 인프라 레이어**를 겨냥한다.

현대 AI 시스템은 단일 대형 모델 외에도 수많은 보조 호출이 필요하다: 라우팅, 검색(RAG), 요약, 계획, 검증, 도구 호출 등. 이 중 많은 부분이 지연시간에 민감하면서도 최대 모델의 역량이 필요하지 않다. Mellum2는 이 "중간 추론" 워크플로를 위한 모델이다.

| 사용 사례 | 설명 |
|-----------|------|
| 라우팅 | 요청을 적절한 에이전트/도구로 분류 |
| RAG | 문서 검색 후 컨텍스트 요약 |
| 서브에이전트 | 멀티에이전트 파이프라인의 실행 레이어 |
| 코드 생성·편집 | IDE 내 코드 자동완성, 리팩토링 |
| 요약 | 긴 스레드·문서 요약 |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>바로 실행하기:</strong> Ollama로 실행하려면 llama.cpp에 Mellum 아키텍처 PR이 아직 머지되지 않아 빌드 수동 설치가 필요하다. vLLM 기반 서버를 권장한다:<br>
<code>vllm serve JetBrains/Mellum-2-12B-instruct --enable-auto-tool-choice --tool-call-parser hermes --port 8000</code><br>
그 이후 MCP CLI나 Hermes Agent를 연결해 MCP 서버와 통합할 수 있다.
</div>
</div>

## 릴리스 구성

Hugging Face에는 세 가지 체크포인트가 공개됐다:
- **Base**: 사전학습 기반 모델
- **Instruct**: 지시 따르기에 최적화
- **Thinking**: 강화학습으로 추론 트레이스를 생성하는 추론 강화 버전

세 가지 모두 Apache 2.0 라이선스이며, 긴 컨텍스트 확장 전 베이스 모델과 SFT 체크포인트도 함께 공개됐다. 전체 기술 리포트(arXiv 2605.31268)에 아키텍처 결정사항과 데이터 파이프라인이 상세히 기술돼 있다.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body"><strong>경쟁 포지셔닝:</strong> JetBrains는 "Mellum2는 Claude Code처럼 서드파티 API에 의존하는 코딩 도구가 갈 수 없는 곳을 목표로 한다"고 밝혔다. 완전 프라이빗 인프라, 온프레미스 IDE 통합, 커스텀 파인튜닝이 필요한 팀에게 현실적 대안이 된다.
</div>
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>JetBrains Mellum2: 12B MoE 모델, 토큰당 2.5B 활성 파라미터로 2배 이상 빠른 추론</li>
<li>128K 컨텍스트, 64 전문가 구조, MTP로 투기적 디코딩 지원</li>
<li>라우팅·RAG·서브에이전트·코드 생성 등 소프트웨어 엔지니어링 워크플로 특화</li>
<li>Base·Instruct·Thinking 세 가지 체크포인트, Apache 2.0 오픈소스</li>
<li>JetBrains AI Assistant 로컬 모델로 직접 연동 가능</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://blog.jetbrains.com/ai/2026/06/mellum2-goes-open-source-a-fast-model-for-ai-workflows/" target="_blank" rel="noopener noreferrer">Mellum2 오픈소스 공개 발표 (JetBrains AI Blog)</a><br>— <a href="https://huggingface.co/collections/JetBrains/mellum-2" target="_blank" rel="noopener noreferrer">Mellum2 모델 다운로드 (Hugging Face)</a><br>— <a href="https://arxiv.org/abs/2605.31268" target="_blank" rel="noopener noreferrer">Mellum2 기술 리포트 (arXiv)</a></div></div>
