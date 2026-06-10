---
title: "Cohere North Mini Code 오픈소스 출시 — H100 한 장으로 돌리는 에이전틱 코딩 모델"
summary: "Cohere가 2026년 6월 9일 첫 번째 오픈소스 에이전틱 코딩 모델 North Mini Code 1.0을 공개했다. 총 파라미터 300억, 활성 파라미터 30억의 MoE 구조로 단일 H100에서 실행된다. Apache 2.0 라이선스로 완전 자유롭게 사용·수정·상용화가 가능하다."
category: "dev-trend"
date: "2026-06-10"
readingTime: 5
tags: ["Cohere", "NorthMiniCode", "오픈소스", "AI코딩", "에이전트"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Cohere가 6월 9일 North Mini Code 1.0을 Apache 2.0 라이선스로 오픈소스 공개했다. 총 300억 파라미터, 활성 30억 파라미터(MoE 아키텍처)로 단일 H100에서 실행되며 256K 토큰 컨텍스트를 지원한다. Claude Fable 5($50/백만 토큰)의 직접적 대안으로, 하드웨어를 소유한 팀이 완전한 데이터 주권을 유지하면서 온프레미스 코딩 에이전트를 운영할 수 있게 한다.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/WUwTmJPK0GU" title="Testing Cohere North Mini Code Locally on H100" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 무슨 일이 일어났나?

2026년 6월 9일, Cohere가 **North Mini Code 1.0**을 Apache 2.0 라이선스로 공개했다. 이는 Cohere 최초의 오픈소스 에이전틱 코딩 모델이자, 'North' 모델 패밀리의 첫 번째 제품이다.

Cohere 공동창업자 Nick Frosst는 출시 직후 "지금 그 어느 때보다도 이 기술은 공개적으로 개발되어야 한다고 생각한다. 소형, 오픈소스, 투명하고 주권적인 AI — 크고 비싸고 독점적인 AI의 반대편에 서겠다"고 밝혔다.

<div class="article-stats">
<strong>주요 수치</strong>
<ul>
  <li>⚙️ <strong>모델 크기:</strong> 총 300억 파라미터, 활성 30억 파라미터 (MoE 128 전문가 중 8개 활성화)</li>
  <li>📏 <strong>컨텍스트:</strong> 256K 토큰 총 컨텍스트, 최대 64K 토큰 생성</li>
  <li>🖥️ <strong>최소 하드웨어:</strong> H100 × 1개 (FP8 기준)</li>
  <li>📜 <strong>라이선스:</strong> Apache 2.0 (상용 사용·수정·배포 완전 자유)</li>
  <li>📈 <strong>벤치마크:</strong> Artificial Analysis 코딩 인덱스 33.4점</li>
</ul>
</div>

## 왜 지금 오픈소스 코딩 모델인가?

현재 AI 코딩 도구 시장은 구독·종량제(Claude Fable 5, GitHub Copilot, Cursor) 또는 전용 클라우드 제공업체에 의존하는 구조다. Fable 5는 출력 토큰당 $50/백만 토큰으로 고품질이지만 비용이 높고 데이터가 외부로 나간다.

North Mini Code의 포지셔닝은 다음과 같다:

1. **완전한 데이터 주권**: 코드베이스가 외부 서버로 전송되지 않는다
2. **예측 가능한 비용**: 하드웨어 임대 비용만 발생, 토큰 단가 없음
3. **커스터마이징 자유**: Apache 2.0으로 파인튜닝·수정·내부 배포 완전 허용
4. **공급망 통제**: 벤더 정책 변경·서비스 중단에 영향받지 않음

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Mac Studio에서도 실행 가능</strong><br>Nick Frosst가 MLX를 이용해 약 20GB RAM의 Mac Studio에서 North Mini Code를 직접 실행하는 것을 시연했다. 활성 파라미터가 30억에 불과해 추론 시 실제 연산량은 30B 밀집 모델이 아닌 3B 모델 수준이다. H100이 없어도 Mac M-시리즈 기기에서 실험 가능하다.</div>
</div>

## 모델 아키텍처 상세

North Mini Code는 **MoE(Mixture-of-Experts)** 아키텍처를 채택했다. 총 128개 전문가(Expert) 네트워크 중 토큰당 8개만 활성화된다. 이 구조 덕분에:

- 전체 파라미터는 30B지만 추론 시 연산량은 약 3B 수준
- 단일 H100(80GB VRAM, FP8 기준) 한 장에서 실행 가능
- Devstral Small 2(240억 파라미터 밀집 모델) 대비 2.8배 높은 출력 처리량

또한 에이전틱 소프트웨어 엔지니어링에 특화해 설계됐다:

| 능력 | 설명 |
|------|------|
| 서브-에이전트 오케스트레이션 | 복잡한 작업을 하위 에이전트로 위임·조율 |
| 시스템 아키텍처 매핑 | 코드베이스 전체 구조 이해 |
| 코드 리뷰 | 멀티파일 리뷰 및 개선 제안 |
| 터미널 작업 | 셸 명령, 패키지 스크립트, CLI 도구 |
| OpenCode 호환 | 주요 코딩 에이전트와 바로 연동 가능 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>주의할 점: 상세 출력 토큰 수</strong><br>Artificial Analysis 독립 테스트에서 North Mini Code는 비슷한 크기의 경쟁 모델 대비 약 3배 많은 출력 토큰을 생성했다. 이는 높은 대역폭·지연 시간이 필요한 고빈도 파이프라인에서 비용이 빠르게 누적될 수 있음을 의미한다. 실제 워크로드로 직접 측정해보는 것이 중요하다.</div>
</div>

## Fable 5 vs North Mini Code: 어떤 것을 선택해야 하나?

| 기준 | Claude Fable 5 | North Mini Code |
|------|----------------|-----------------|
| 운영 방식 | 관리형 클라우드 | 자체 운영(온프레미스/클라우드) |
| 비용 구조 | $50/백만 출력 토큰 | 하드웨어 비용만 |
| 데이터 주권 | 클라우드 전송 | 로컬 유지 |
| 라이선스 | 독점 | Apache 2.0 |
| 설정 복잡도 | 없음(API 키만) | H100 필요·환경 구성 필요 |
| 성능 수준 | 최고급 | 경쟁력 있는 소형 |

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
  <li>Cohere가 6월 9일 North Mini Code 1.0 Apache 2.0 오픈소스 공개 — 첫 번째 오픈소스 에이전틱 코딩 모델</li>
  <li>총 30B 파라미터, 활성 3B(MoE) — 단일 H100에서 실행, Mac Studio도 가능</li>
  <li>256K 토큰 컨텍스트, 64K 최대 생성 — 대규모 코드베이스 처리 가능</li>
  <li>Claude Fable 5($50/M 출력 토큰)의 완전한 온프레미스 대안</li>
  <li>Hugging Face에서 가중치 무료 다운로드, Apache 2.0으로 상용 활용 가능</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://github.com/CohereLabs" target="_blank" rel="noopener noreferrer">CohereLabs GitHub — North Mini Code 가중치 및 공식 코드</a><br>— <a href="https://github.com/cohere-ai/cohere-python" target="_blank" rel="noopener noreferrer">Cohere Python SDK (GitHub) — API 연동 공식 라이브러리</a><br>— <a href="https://pypi.org/project/cohere/" target="_blank" rel="noopener noreferrer">PyPI: cohere 패키지 — pip install cohere로 즉시 API 사용</a></div></div>
