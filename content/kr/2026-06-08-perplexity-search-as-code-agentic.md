---
title: "Perplexity 'Search as Code' — AI 에이전트가 직접 검색 파이프라인을 작성한다"
summary: "Perplexity가 고정된 검색 API 대신 AI 모델이 Python으로 맞춤형 검색 워크플로를 직접 생성하는 'Search as Code' 아키텍처를 공개했다. 자사 테스트에서 토큰 사용량 85% 절감, CVE 탐지 정확도 100% 달성을 주장했다."
category: "dev-trend"
date: "2026-06-08"
readingTime: 5
tags: ["Perplexity", "SearchAsCode", "AI에이전트", "검색", "개발트렌드"]
---

<div class="article-tldr">
Perplexity가 2026년 6월 7일 <strong>Search as Code(SaC)</strong> 아키텍처를 공개했다. 기존의 단일 검색 API 호출 방식 대신, AI 모델이 직접 Python 스크립트를 작성해 검색·필터링·중복 제거·재순위 단계를 자유롭게 구성하는 방식이다. Perplexity Agentic Search SDK를 통해 제공되며, Perplexity Computer와 Agent API에서 우선 출시됐다.
</div>

## 기존 검색 API의 한계

지금까지 AI 에이전트가 웹 검색을 수행할 때는 고정된 API 엔드포인트를 호출하고 정해진 형식의 결과를 받는 방식을 써왔다. 이 구조에는 근본적인 한계가 있다. 복잡한 다단계 검색(예: CVE 정보 수집 시 Mozilla, Google, Debian 등 각 벤더의 보안 공시 형식이 모두 다름)에서 단일 응답 구조로는 충분한 정확도를 얻기 어렵다.

Perplexity의 답은 이렇다: **모델이 직접 검색 코드를 작성하게 하라**.

## Search as Code 3계층 구조

SaC 아키텍처는 세 계층으로 구성된다:

1. **모델 계층** — 작업을 이해하고 검색 전략을 결정
2. **샌드박스** — 생성된 Python 코드가 안전하게 실행되는 격리 환경
3. **Agentic Search SDK** — 검색, 필터링, 중복 제거, 재순위 등 개별 함수들을 모듈식으로 제공

모델은 이 세 계층을 활용해 각 작업에 최적화된 검색 파이프라인을 즉석에서 조립한다. 기존 방식처럼 단 한 번의 API 호출로 끝내는 것이 아니라, 검색 → 갭 파악 → 보완 쿼리 실행 → 결과 검증까지 여러 단계를 코드로 표현한다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">85%</span>
<span class="stat-label">토큰 사용량 감소 (Perplexity 자체 테스트)</span>
</div>
<div class="stat-item">
<span class="stat-number">100%</span>
<span class="stat-label">CVE 200건 탐지 정확도 (자체 벤치마크)</span>
</div>
<div class="stat-item">
<span class="stat-number">4/5</span>
<span class="stat-label">벤치마크 카테고리 중 경쟁사 대비 우위 주장</span>
</div>
</div>

## 실전 사례: CVE 취약점 정보 수집

Perplexity가 제시한 시연 사례는 설득력이 있다. 2023~2025년 사이 발표된 CVE 200건을 수집하는 작업에서:

**기존 방식**: 단일 API 호출 → 여러 벤더별 형식 차이 처리 불가 → 정확도 25% 미만

**SaC 방식**: 
1. 모델이 Mozilla, Google 등 각 벤더의 보안 공시 형식에 맞춘 병렬 검색 스크립트 작성
2. 결과를 스캔해 누락 항목 파악 후 보완 쿼리 실행
3. 스키마를 사용해 CVE 번호·영향 제품·패치 버전 일치 여부 검증
4. **결과: 정확도 100%, 토큰 사용량 85% 절감** (Perplexity 자체 수치)

<div class="article-callout tip">
<strong>개발자 관점:</strong> SaC는 특히 정형화된 데이터를 여러 소스에서 집계해야 하는 용도(취약점 수집, 규제 준수 모니터링, 시장 조사 등)에서 효과가 클 것으로 보인다. 검색 로직을 코드로 표현하면 디버깅·버전 관리·재현성도 확보할 수 있다.
</div>

<div class="article-callout info">
<strong>검증 주의:</strong> 위의 성능 수치는 모두 Perplexity 자체 벤치마크 기준이다. WANDR(Perplexity의 광범위 리서치 작업 벤치마크)는 아직 공개되지 않았다. 독립 검증이 나오기 전까지 수치는 참고 지표로만 활용하길 권장한다.
</div>

## 경쟁 구도

| 솔루션 | 접근 방식 | 특징 |
|--------|-----------|------|
| Perplexity SaC | 코드 생성 기반 | 모듈식 파이프라인, 샌드박스 실행 |
| OpenAI Responses API | 고정 엔드포인트 | 안정적이나 유연성 제한 |
| Exa | 의미 기반 검색 | 고품질 결과, 파이프라인 커스터마이징 제한 |
| Tavily | 에이전트 특화 API | 개발자 친화적, 파이프라인 제어 제한 |
| Google AI Search | 네이티브 통합 | 최신 정보 강점, 독점적 생태계 |

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Search as Code는 AI 모델이 직접 Python 검색 워크플로를 작성해 실행하는 새로운 아키텍처다.</li>
<li>3계층(모델·샌드박스·Agentic Search SDK) 구조로 검색, 필터링, 재순위를 모듈식으로 조합한다.</li>
<li>Perplexity 자체 테스트에서 토큰 85% 절감, CVE 탐지 100% 정확도를 주장했으나 독립 검증이 필요하다.</li>
<li>Perplexity Computer와 Agent API에서 우선 제공되며, WANDR 벤치마크도 곧 공개 예정이다.</li>
<li>고정 API의 한계를 코드 생성으로 극복하는 이 방식은 복잡한 다단계 리서치 작업에 특히 유효하다.</li>
</ul>
</div>

## 의미와 전망

SaC가 제시하는 방향은 단순한 성능 개선을 넘어선다. 에이전트가 자신의 도구를 직접 커스터마이징하는 **도구의 도구화(meta-tooling)** 패러다임을 검색 영역에 적용한 것이다. 이 방식이 일반화되면 검색 API 시장의 경쟁 구도 자체가 바뀔 수 있다. 단순히 빠르고 정확한 검색을 제공하는 것을 넘어, 에이전트가 코드로 표현하기 좋은 구조적·모듈식 SDK를 얼마나 잘 제공하느냐가 경쟁력이 된다. Exa, Tavily, Google AI Search가 어떻게 대응할지 주목할 필요가 있다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://research.perplexity.ai/articles/rethinking-search-as-code-generation" target="_blank" rel="noopener">Perplexity Research — Rethinking Search as Code Generation (원문)</a><br/>
· <a href="https://www.perplexity.ai/" target="_blank" rel="noopener">Perplexity — 공식 홈페이지</a><br/>
</div>
