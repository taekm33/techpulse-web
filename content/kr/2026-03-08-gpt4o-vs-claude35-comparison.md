---
title: "GPT-4o vs Claude 3.5 Sonnet — 실전 성능 완전 비교"
summary: "OpenAI의 GPT-4o와 Anthropic의 Claude 3.5 Sonnet은 2024~2025년 LLM 시장을 양분한 최강 모델이다. 벤치마크 수치부터 코딩, 수학, 창작, 한국어 처리까지 6개 항목을 실전 테스트로 비교했다. 어떤 작업에 어떤 모델이 더 적합한지, API 비용까지 고려한 최종 가이드를 제공한다."
category: "ai-news"
date: "2026-03-08"
tags: ["GPT4o", "Claude", "AI비교", "OpenAI", "Anthropic", "LLM벤치마크"]
featured: false
readingTime: 11
---

## 두 모델 개요

### GPT-4o

GPT-4o(오, "Omni"의 약자)는 OpenAI가 2024년 5월 공개한 플래그십 모델이다. 텍스트·이미지·오디오를 하나의 신경망에서 처리하는 진정한 멀티모달 아키텍처를 채택했다. 기존 GPT-4 Turbo 대비 2배 빠른 속도와 절반 수준의 API 가격을 실현하면서도 성능을 유지해 상용화에 최적화된 모델로 평가받는다.

### Claude 3.5 Sonnet

Claude 3.5 Sonnet은 Anthropic이 2024년 6월 출시한 모델로, 같은 해 10월 업그레이드된 버전(claude-3-5-sonnet-20241022)이 공개됐다. Claude 3 Opus를 뛰어넘는 성능을 Sonnet급 속도·비용으로 제공한다는 점에서 큰 반향을 일으켰다. 특히 코딩 능력과 긴 문서 처리에서 업계 최고 수준으로 평가된다. 또한 '컴퓨터 사용(Computer Use)' 기능을 세계 최초로 지원해 AI 에이전트 분야에서 주목받고 있다.

> 두 모델 모두 "현재 최고의 AI"를 놓고 치열하게 경쟁 중이다. GPT-4o는 멀티모달과 생태계 통합에서 강점을 보이고, Claude 3.5 Sonnet은 코딩과 장문 이해에서 우위를 점한다.

<div class="article-tldr"><div class="article-tldr__label">TL;DR</div>
<p>GPT-4o는 멀티모달 지원과 생태계 통합에서 앞서고, Claude 3.5 Sonnet은 코딩·장문 처리·과학적 추론에서 우세하다. API 입력 비용은 Claude가 40% 저렴하고, 캐싱 활용 시 최대 8배 차이가 난다. 단일 모델보다 작업 유형에 따라 두 모델을 병행하는 하이브리드 전략이 현실적으로 가장 효과적이다.</p></div>

---

## 스펙 비교 한눈에 보기

두 모델의 핵심 사양을 한 테이블에 정리했다. API를 도입하기 전에 확인해야 할 가장 기초적인 차이점이다.

| 항목 | GPT-4o | Claude 3.5 Sonnet |
|---|---|---|
| **컨텍스트 창** | 128K 토큰 | **200K 토큰** |
| **멀티모달 지원** | 텍스트·이미지·오디오·비디오 | 텍스트·이미지 |
| **입력 가격 (1M 토큰)** | $5.00 | **$3.00** |
| **출력 가격 (1M 토큰)** | $15.00 | $15.00 |
| **학습 데이터 컷오프** | 2023년 10월 | 2024년 4월 |
| **일반 사용자 접근** | ChatGPT (무료·Plus·Team) | Claude.ai (무료·Pro·Team) |
| **API 제공** | OpenAI API | Anthropic API / AWS Bedrock / GCP Vertex |
| **캐시 프롬프트 할인** | 50% | **90%** |
| **배치 API 할인** | 50% | 50% |
| **Computer Use 지원** | 미지원 | **지원 (베타)** |

컨텍스트 창 크기는 실무에서 결정적인 차이를 만든다. 200K 토큰은 약 15만 단어 분량으로, 일반적인 소설 한 권 분량의 텍스트를 단일 요청에서 처리할 수 있다. 대형 코드베이스 전체를 컨텍스트에 넣고 분석해야 하는 시나리오라면 Claude 3.5 Sonnet이 구조적으로 유리하다.

<div class="article-stats">
<div class="article-stat"><div class="article-stat__v">200K</div><div class="article-stat__k">Claude 컨텍스트 창 (토큰)</div></div>
<div class="article-stat"><div class="article-stat__v">128K</div><div class="article-stat__k">GPT-4o 컨텍스트 창 (토큰)</div></div>
<div class="article-stat"><div class="article-stat__v">$3.00</div><div class="article-stat__k">Claude 입력 비용 (1M 토큰)</div></div>
<div class="article-stat"><div class="article-stat__v">$5.00</div><div class="article-stat__k">GPT-4o 입력 비용 (1M 토큰)</div></div>
<div class="article-stat"><div class="article-stat__v">90%</div><div class="article-stat__k">Claude 캐시 프롬프트 할인율</div></div>
<div class="article-stat"><div class="article-stat__v">8x</div><div class="article-stat__k">캐싱 적용 시 최대 비용 차이</div></div>
</div>

---

## 벤치마크 성능 비교

주요 AI 벤치마크에서 두 모델의 공식 발표 수치를 비교한다. 벤치마크는 특정 능력의 단면을 측정하는 도구이므로, 단순 수치보다 **어떤 벤치마크에서 어느 모델이 강한지**를 파악하는 것이 중요하다.

| 벤치마크 | GPT-4o | Claude 3.5 Sonnet | 우위 | 측정 영역 |
|---|---|---|---|---|
| **MMLU** | 88.7% | 88.7% | 동점 | 57개 분야 지식 종합 |
| **HumanEval** | 90.2% | **92.0%** | Claude | Python 코드 생성 |
| **MATH** | **76.6%** | 71.1% | GPT-4o | 경쟁 수학 문제 |
| **GPQA Diamond** | 53.6% | **59.4%** | Claude | 대학원 수준 과학 추론 |
| **SWE-bench Verified** | 49.0% | **49.0%** | 동점 | 실제 GitHub 이슈 해결 |
| **MGSM** | 90.5% | **91.6%** | Claude (소폭) | 다국어 수학 추론 |
| **MathVista** | **63.8%** | 58.9% | GPT-4o | 시각적 수학 문제 |
| **MMMU** | **69.1%** | 68.3% | GPT-4o (소폭) | 멀티모달 이해 |
| **DROP** | 83.4% | **88.3%** | Claude | 이산 추론·독해 |
| **HellaSwag** | **98.4%** | 95.4% | GPT-4o | 상식 추론 |

**벤치마크 해석 포인트**

- **MMLU 동점**: 두 모델 모두 일반 지식 폭에서 최상위권이다. 실질적 차이는 특정 도메인에서 발생한다.
- **HumanEval vs MATH**: Claude는 코드 생성, GPT-4o는 수치 계산에 강하다. 이 차이는 실무에서도 반복적으로 관찰된다.
- **GPQA**: 5.8%p 차이는 통계적으로 유의미하다. Claude의 과학적 추론 능력이 실질적으로 앞선다는 근거가 된다.
- **SWE-bench**: 실제 소프트웨어 버그를 자율적으로 수정하는 벤치마크로, 두 모델 모두 약 49~50% 수준이다. 업계 전체 기준으로 최상위권이지만 절반 이상의 문제는 여전히 풀지 못한다.

> 벤치마크 수치는 참고 지표일 뿐이다. 실제 업무 적합성은 아래의 영역별 심층 비교에서 확인하라.

---

## 영역별 심층 비교

### 코딩 능력

코딩은 두 모델의 차이가 가장 뚜렷하게 드러나는 영역이다.

**GPT-4o 예시 — Python 비동기 크롤러 생성**

```python
# GPT-4o 생성 코드 (간결하고 실용적)
import asyncio
import aiohttp
from bs4 import BeautifulSoup

async def fetch_page(session, url):
    async with session.get(url) as response:
        return await response.text()

async def crawl(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_page(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
    return [BeautifulSoup(html, 'html.parser').title.text
            for html in results if html]
```

**Claude 3.5 Sonnet 예시 — 동일 작업 + 에러 처리·타입 힌트 포함**

```python
# Claude 3.5 Sonnet 생성 코드 (견고하고 프로덕션 수준)
import asyncio
import aiohttp
from bs4 import BeautifulSoup
from typing import Optional
import logging

logger = logging.getLogger(__name__)

async def fetch_page(
    session: aiohttp.ClientSession,
    url: str,
    timeout: int = 10
) -> Optional[str]:
    try:
        async with session.get(url, timeout=aiohttp.ClientTimeout(total=timeout)) as response:
            response.raise_for_status()
            return await response.text()
    except (aiohttp.ClientError, asyncio.TimeoutError) as e:
        logger.warning(f"Failed to fetch {url}: {e}")
        return None

async def crawl(urls: list[str]) -> list[dict]:
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_page(session, url) for url in urls]
        results = await asyncio.gather(*tasks)

    output = []
    for url, html in zip(urls, results):
        if html:
            soup = BeautifulSoup(html, 'html.parser')
            output.append({
                "url": url,
                "title": soup.title.text.strip() if soup.title else "N/A"
            })
    return output
```

Claude 3.5 Sonnet은 요청하지 않아도 타입 힌트, 에러 핸들링, 로깅을 자동으로 포함하는 경향이 있어 프로덕션 수준의 코드 품질을 보여준다. GPT-4o는 더 간결하고 빠른 프로토타이핑에 유리하다.

**코딩 소결**: Claude 3.5 Sonnet 우세 (특히 복잡한 디버깅, 대형 코드베이스 이해)

<div class="article-callout article-callout--tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>코딩 작업 선택 팁</strong><br>빠른 프로토타입이나 간단한 스크립트 생성에는 GPT-4o가 적합하다. 프로덕션 배포를 목표로 하거나 타입 안전성·에러 처리가 중요한 코드라면 Claude 3.5 Sonnet을 사용하면 초안 품질부터 차이가 난다.</div>
</div>

---

### 창의적 글쓰기

창작 분야에서는 두 모델의 성향 차이가 뚜렷하다.

- **GPT-4o**: 다양한 문체 모방에 능하고, 유머·위트가 자연스럽다. 짧은 카피라이팅, 마케팅 문구, 소셜미디어 콘텐츠에서 강점을 보인다. 지시어를 약간만 바꿔도 전혀 다른 톤의 결과물을 빠르게 생성한다.
- **Claude 3.5 Sonnet**: 장문 서사 구조가 탄탄하고, 논리적 흐름이 일관된 글을 쓴다. 보고서, 기술 문서, 긴 에세이에서 강점을 보인다. Constitutional AI 훈련 방식으로 인해 내용이 더 신중하고 균형 잡혀 있다.

실제 마케팅 현장에서는 GPT-4o로 다수의 카피 후보를 빠르게 생성한 뒤, Claude로 최종 선택안을 다듬는 조합 전략이 활용되기도 한다.

**창작 소결**: 단문 창작·카피는 GPT-4o, 장문 구조화 글쓰기는 Claude 우위

---

### 수학 및 추론

복잡한 수학 문제에서는 GPT-4o가 MATH 벤치마크 기준 더 높은 점수(76.6% vs 71.1%)를 기록했다. 특히 단계별 수식 풀이에서 GPT-4o가 더 체계적인 접근을 보인다는 평가가 많다.

반면 GPQA(대학원 수준 과학 문항)에서는 Claude 3.5 Sonnet이 59.4%로 GPT-4o(53.6%)를 5.8%p 앞섰다. 이는 단순 계산보다 다단계 추론과 논리적 일관성이 요구되는 문제에서 Claude가 강점을 갖고 있음을 시사한다.

실무적으로는 다음과 같이 구분된다.

- 금융 모델링, 통계 계산, 수식이 많은 과학 계산: **GPT-4o** 추천
- 복잡한 법적 논리 추론, 다단계 의사결정 분석, 인과관계 파악: **Claude 3.5 Sonnet** 추천

**수학·추론 소결**: 수식 계산은 GPT-4o, 과학적 추론·논리는 Claude 3.5 소폭 우위

---

### 코드 분석 및 리뷰

코드를 작성하는 능력과 기존 코드를 이해하고 검토하는 능력은 별개다. 이 영역에서는 컨텍스트 창 크기가 직접적인 영향을 미친다.

- **GPT-4o (128K)**: 중소규모 코드베이스 리뷰에는 충분하다. 단일 파일이나 몇 개의 모듈을 넣고 버그를 찾는 작업에 적합하다.
- **Claude 3.5 Sonnet (200K)**: 대형 모노레포, 복잡한 마이크로서비스 아키텍처도 한 번에 넣을 수 있다. PR 리뷰, 보안 감사, 레거시 코드 이해 작업에서 실질적 우위가 나타난다.

실제 엔터프라이즈 팀에서는 Claude를 코드 리뷰 자동화 파이프라인에 연동하는 사례가 늘고 있다. 전체 변경 사항과 관련 컨텍스트를 한 번에 넣고 구조적 문제를 짚어내는 방식이다.

**코드 분석·리뷰 소결**: Claude 3.5 Sonnet 명확한 우위 (200K 컨텍스트 + 코딩 벤치마크 복합 효과)

<div class="article-callout article-callout--tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>컨텍스트 창 크기가 왜 중요한가</strong><br>200K 토큰은 소설 한 권 분량(약 15만 단어)에 해당한다. 대형 코드베이스나 수십 페이지 계약서를 단일 요청으로 처리할 수 있다는 의미다. 128K와 200K의 차이는 작아 보이지만, 실제 엔터프라이즈 워크로드에서는 작업 가능 여부 자체를 가르는 기준이 되기도 한다.</div>
</div>

---

### 한국어 능력

MGSM(다국어 수학 추론)에서 Claude 3.5 Sonnet이 91.6%로 GPT-4o(90.5%)를 앞섰다. 한국어 자연스러움 측면에서는 두 모델 모두 수준이 높지만, 현장에서 다음과 같은 경향이 관찰된다.

- **GPT-4o**: 구어체, 일상 대화, 짧은 답변에서 더 자연스럽다. 한국어 인터넷 표현이나 유행어도 비교적 잘 반영한다.
- **Claude 3.5 Sonnet**: 격식체, 보고서, 기술 문서 번역·작성에서 오류가 적고 표현이 정확하다. 전문 용어의 한영 혼용 처리가 더 일관적이다.

TechPulse 운영 경험상 기술 문서, 뉴스 기사, 분석 리포트 작성에는 Claude가 한 단계 높은 완성도를 보인다. 짧은 SNS 게시글, 댓글 답변, 일상적인 챗봇 응답에는 GPT-4o가 더 자연스럽다.

**한국어 소결**: 격식 문서·기술 번역은 Claude, 일상 대화·구어체는 GPT-4o 소폭 우위

<div class="article-callout article-callout--tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>하이브리드 전략이 정답</strong><br>마케팅팀이라면 GPT-4o로 SNS 카피 10개를 빠르게 뽑고, Claude로 최종안을 정제하는 조합이 효율적이다. 개발팀이라면 빠른 코드 스니펫은 GPT-4o, PR 전체 리뷰와 문서 작성은 Claude로 역할을 나누면 두 모델의 장점을 모두 활용할 수 있다.</div>
</div>

---

## 실제 사용 시나리오별 비교

이론적 벤치마크와 영역별 비교를 넘어, 실제 업무에서 마주치는 구체적인 시나리오 5가지로 비교한다.

| 시나리오 | 권장 모델 | 이유 |
|---|---|---|
| SaaS 제품의 PR 코드 리뷰 자동화 | Claude 3.5 Sonnet | 200K 컨텍스트로 대용량 diff도 처리, 코드 품질 벤치마크 우세 |
| 이커머스 챗봇 (상품 질문·CS 대응) | GPT-4o | 자연스러운 구어체, 빠른 응답, ChatGPT 생태계와 통합 용이 |
| 법률 계약서 50페이지 검토 및 리스크 추출 | Claude 3.5 Sonnet | 긴 문서 통째로 처리, 논리 추론 우위, 격식 문어체 정확도 |
| 마케팅 SNS 카피 100개 대량 생성 | GPT-4o | 다양한 문체·톤 전환이 빠르고 창의적, 배치 API로 비용 절감 |
| 데이터 분석 파이썬 스크립트 작성 및 디버깅 | Claude 3.5 Sonnet | 타입 힌트·에러 처리 자동 포함, 복잡한 pandas/numpy 로직 설명 정확 |

각 시나리오에서 이길 수 있는 모델은 명확히 갈린다. 하나의 모델로 모든 것을 해결하려는 접근보다, 작업 유형별로 적합한 모델을 선택하는 전략이 실질적인 생산성 향상으로 이어진다.

---

## API 가격 비교

| 항목 | GPT-4o | Claude 3.5 Sonnet |
|---|---|---|
| 입력 (1M 토큰) | $5.00 | $3.00 |
| 출력 (1M 토큰) | $15.00 | $15.00 |
| 컨텍스트 창 | 128K 토큰 | **200K 토큰** |
| 이미지 입력 | 지원 | 지원 |
| 캐시 프롬프트 할인 | 지원 (50%) | **지원 (90%)** |
| 배치 API 할인 | 지원 (50%) | 지원 (50%) |

> Claude 3.5 Sonnet은 입력 토큰 비용이 GPT-4o보다 40% 저렴하고, 프롬프트 캐싱 할인율이 최대 90%로 장문 문서를 반복 처리하는 기업에게 비용 효율성이 훨씬 높다.

---

## 가격 대비 성능(가성비) 분석

단순히 "어느 모델이 더 싸냐"가 아니라 **같은 비용으로 어느 모델이 더 나은 결과를 만드느냐**가 핵심이다.

**입력 비용 측면**

월 1억 토큰의 입력을 처리한다고 가정하면:

- GPT-4o: $500
- Claude 3.5 Sonnet: $300 (40% 절감)

**캐싱 효과를 고려한 실제 비용**

시스템 프롬프트와 컨텍스트가 반복되는 RAG 파이프라인이나 에이전트 시스템에서는 캐싱 할인이 결정적이다.

- GPT-4o의 캐시 히트율 50% 적용 시: $250
- Claude의 캐시 히트율 90% 적용 시: **$30**

실제 기업 워크로드에서 캐시 히트율이 높은 시스템이라면 Claude의 비용 이점은 최대 8배 이상이 될 수 있다.

**출력 비용은 동일**

두 모델 모두 출력 1M 토큰당 $15.00으로 동일하다. 출력이 입력보다 많은 시나리오(긴 보고서 자동 생성 등)에서는 비용 차이가 줄어든다.

**가성비 결론**: 입력 중심 워크로드(분석, 리뷰, 요약)에서는 Claude 3.5 Sonnet이 압도적 비용 이점. 출력 중심 워크로드(콘텐츠 생성)에서는 양 모델이 동급.

---

## 어떤 모델을 선택해야 할까?

벤치마크와 가격을 모두 고려한 최종 선택 가이드다.

**Claude 3.5 Sonnet을 선택해야 할 때**

- 코드베이스 분석, PR 리뷰, 자동화 파이프라인을 구축하는 개발팀
- 법률, 의료, 금융 등 긴 전문 문서를 반복적으로 처리하는 기업
- 한국어 격식 문서(보고서, 기술 문서, 번역)의 정확도가 중요한 경우
- 입력 토큰이 많고 캐싱 효과가 큰 RAG/에이전트 시스템을 운영하는 경우
- Computer Use 기능을 활용한 브라우저·OS 자동화를 탐색하는 팀

**GPT-4o를 선택해야 할 때**

- 이미지, 오디오, 비디오를 함께 처리하는 멀티모달 애플리케이션
- ChatGPT 플러그인, GPT 스토어, Azure OpenAI와 통합된 기존 인프라가 있는 경우
- 짧고 빠른 응답이 필요한 소비자향 챗봇이나 CS 자동화 서비스
- 마케팅·광고 카피, 다양한 문체의 단문 창작 작업
- 수학 집약적 교육 서비스 또는 과학 계산 워크플로우

**두 모델을 병행해야 할 때**

실제 프로덕션 환경에서는 단일 모델보다 하이브리드 전략이 더 효과적인 경우가 많다. 예를 들어 코드 생성은 Claude, 이미지 분석은 GPT-4o로 라우팅하는 방식이다. 주요 AI 오케스트레이션 프레임워크(LangChain, LlamaIndex, DSPy)는 모두 복수 모델 라우팅을 지원한다.

---

## 2026년 현재 시점 업데이트

이 비교 리뷰의 기준 시점은 2024~2025년이지만, 두 모델은 2026년 현재 이미 다음 세대로 진화했다.

**OpenAI 측 변화**

- GPT-4o는 **GPT-4.1** (2025년 4월 출시)로 사실상 대체됐다. GPT-4.1은 더 긴 컨텍스트(1M 토큰), 향상된 코딩 능력, 낮아진 API 가격을 제공한다. 또한 GPT-4.1 mini 및 GPT-4.1 nano 경량 버전도 출시되어 비용 구조가 더욱 다양해졌다.
- o3, o4-mini 등 추론 특화 모델 계열도 등장해, 단순 언어 모델과 추론 모델의 역할 분화가 이뤄지고 있다.

**Anthropic 측 변화**

- Claude 3.5 Sonnet은 **Claude Sonnet 4.x** 시리즈로 발전했다. Claude 4 계열은 확장된 컨텍스트, 강화된 에이전트 기능, 개선된 다국어 처리를 제공한다.
- Claude Opus 4는 최상위 모델로 복잡한 멀티스텝 추론에서 한층 더 높은 성능을 보인다.
- Computer Use는 베타를 넘어 점진적으로 안정화 단계에 접어들고 있다.

**2026년 관점에서의 시사점**

GPT-4o vs Claude 3.5 Sonnet 비교는 지금의 GPT-4.1 vs Claude Sonnet 4.x 비교의 전신이다. 핵심 강점과 약점의 방향성은 여전히 유효하다. 다만 절대적인 수치와 가격은 최신 공식 문서를 기준으로 재확인하는 것이 필수적이다. AI 모델의 진화 속도는 빠르고, 오늘의 최적 선택이 6개월 뒤에는 바뀔 수 있다.

---

## 총평 및 결론

GPT-4o와 Claude 3.5 Sonnet은 각각 다른 철학과 강점을 가진 탁월한 모델이다. "어느 것이 더 좋냐"는 질문보다 "어떤 용도에 어떤 모델을 쓸 것인가"가 더 올바른 질문이다.

| 항목 | 승자 |
|---|---|
| 코딩 능력 | Claude 3.5 Sonnet |
| 수학 계산 | GPT-4o |
| 과학적 추론 | Claude 3.5 Sonnet |
| 멀티모달 | GPT-4o (소폭) |
| 한국어 정확도 | Claude 3.5 Sonnet |
| 창작·카피 | GPT-4o |
| 장문 처리 | Claude 3.5 Sonnet |
| 입력 비용 효율 | Claude 3.5 Sonnet |
| 생태계·통합 | GPT-4o |
| 코드 리뷰·분석 | Claude 3.5 Sonnet |

개발자와 기술 기업에게는 **Claude 3.5 Sonnet**이 코딩 보조, 문서 처리, 에이전트 구축에서 한 발 앞선다. 반면 멀티모달 중심의 소비자 앱이나 OpenAI 생태계에 이미 투자된 조직은 **GPT-4o**가 자연스러운 선택이다. 두 모델을 상황에 따라 병행 활용하는 하이브리드 전략이 현실적으로 가장 강력한 접근이다.

<div class="article-keypoints"><div class="article-keypoints__title">📌 핵심 정리</div>
<ul><li>Claude 3.5 Sonnet은 코딩·장문 처리·과학적 추론·한국어 격식 문서에서 우위이며, 200K 컨텍스트 창이 대형 코드베이스와 장문 문서 작업에서 결정적 이점을 제공한다.</li><li>GPT-4o는 멀티모달(이미지·오디오·비디오) 처리, 단문 창작·카피, 구어체 한국어, 수학 계산에서 강점을 보이며 OpenAI 생태계와의 통합이 용이하다.</li><li>API 비용 측면에서 Claude는 입력 토큰이 40% 저렴하고 캐싱 할인율이 90%로, 반복 처리가 많은 RAG·에이전트 시스템에서 최대 8배의 비용 차이가 발생할 수 있다.</li><li>단일 모델 고집보다 작업 유형에 따라 두 모델을 병행하는 하이브리드 전략이 가장 효율적이며, LangChain·LlamaIndex·DSPy 등 주요 프레임워크는 복수 모델 라우팅을 모두 지원한다.</li></ul></div>

---

## 참고 자료

1. OpenAI. (2024). *GPT-4o System Card*. https://openai.com/research/gpt-4o-system-card
2. Anthropic. (2024). *Claude 3.5 Sonnet Model Card*. https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52.pdf
3. LMSYS Chatbot Arena. (2024). *Leaderboard — GPT-4o vs Claude 3.5 Sonnet*. https://chat.lmsys.org/?leaderboard
4. Papers With Code. (2024). *MMLU Benchmark*. https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu
5. SWE-bench. (2024). *SWE-bench Verified Leaderboard*. https://www.swebench.com
6. Scale AI. (2024). *SEAL Leaderboards — Coding*. https://scale.com/leaderboard
