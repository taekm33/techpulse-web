---
title: "알리바바 Qwen 3.8 공개: 2.4조 파라미터로 'Fable 5 다음' 주장"
summary: "알리바바가 WAIC 2026에서 2.4조 파라미터 규모의 멀티모달 AI 모델 Qwen3.8을 공개했다. Kimi K3 출시 이틀 만에 등장한 이 모델은 클로드 Fable 5에 이어 세계 2위라는 자체 평가를 내세웠지만, 독립 벤치마크는 아직 없다."
category: "ai-news"
date: "2026-07-20"
readingTime: 5
tags: ["알리바바", "Qwen3.8", "멀티모달AI", "WAIC2026", "오픈웨이트"]
---

<div class="article-tldr">
<strong>핵심 요약:</strong> 알리바바가 2026년 7월 19일 상하이 세계인공지능대회(WAIC)에서 2.4조(2.4T) 파라미터 규모의 차세대 플래그십 AI 모델 Qwen3.8-Max-Preview를 공개했다. 자체 평가에서 Anthropic의 Claude Fable 5에 이어 두 번째로 강력하다고 주장하지만, 독립적인 벤치마크 검증은 아직 이루어지지 않았다.
</div>

## 중국 AI의 파라미터 경쟁이 '조(兆)' 단위로 진입하다

Kimi K3(2.8조 파라미터)가 출시된 지 불과 이틀 뒤, 알리바바의 Qwen 팀이 2.4조 파라미터 규모의 Qwen3.8을 깜짝 공개했다. 타이밍은 우연이 아니다. 2026년 7월은 글로벌 AI 경쟁이 사실상 '조(兆) 파라미터 시대'로 공식 진입한 달로 역사에 기록될 것이다.

Qwen3.8은 알리바바 Qwen 패밀리 역사상 처음으로 **1조 파라미터를 넘긴 멀티모달 모델**이다. 텍스트, 고해상도 이미지, 비디오, 문서를 동시에 처리할 수 있으며, Sparse Mixture-of-Experts(MoE) 아키텍처를 기반으로 설계되어 방대한 파라미터 규모에도 불구하고 서빙 효율을 최적화했다.

<div class="article-stats">
<div class="stat-item">
  <span class="stat-number">2.4T</span>
  <span class="stat-label">총 파라미터 수</span>
</div>
<div class="stat-item">
  <span class="stat-number">90%</span>
  <span class="stat-label">프리뷰 기간 할인율</span>
</div>
<div class="stat-item">
  <span class="stat-number">1,000+</span>
  <span class="stat-label">WAIC 2026 참가 기업 수</span>
</div>
<div class="stat-item">
  <span class="stat-number">2일</span>
  <span class="stat-label">Kimi K3 출시 후 Qwen3.8 발표까지의 시간</span>
</div>
</div>

## 무엇이 바뀌었나: Qwen3.8의 주요 특징

알리바바 연구원 Shuai Bai는 Qwen3.8의 기술적 세부 사항을 일부 공개했다. 코딩, 풀스택 개발, 데이터 분석, 오피스 워크플로우에서 전작 Qwen3.7-Max를 능가할 것으로 기대된다고 밝혔다.

<div class="article-keypoints">
<h4>Qwen3.8 핵심 포인트</h4>
<ul>
<li>🏗️ <strong>아키텍처:</strong> Sparse MoE 설계 — 2.4T 총 파라미터, 활성 파라미터 수 미공개</li>
<li>🖼️ <strong>멀티모달:</strong> 텍스트·이미지·비디오·문서 동시 처리 (Qwen 최초 1T+ 멀티모달)</li>
<li>💻 <strong>코딩 특화:</strong> 풀스택 개발, 자동 코드 생성, 복잡한 디버깅 최적화</li>
<li>🤝 <strong>호환성:</strong> OpenAI·Anthropic API 규격과 호환, 기존 파이프라인 재구성 불필요</li>
<li>🔓 <strong>오픈 웨이트:</strong> 공개 예정 (일정·라이선스 미확정)</li>
</ul>
</div>

## 접근 방법 및 가격

현재 Qwen3.8-Max-Preview는 알리바바의 **Token Plan** 구독을 통해 표준 가격의 10%(90% 할인)로 이용 가능하다. 코딩 특화 플랫폼인 **Qoder** 및 **QoderWork**에도 통합되었다.

| 플랜 | 가격 | 크레딧 | 특징 |
|------|------|--------|------|
| Lite | $6/월 | 2,500 크레딧/7일 | 개인 개발자용 |
| Pro | $68/월 | 40,000 크레딧/7일 | 에이전트 6~8개 동시 실행 |

<div class="article-callout tip">
<strong>개발자 팁:</strong> Qwen3.8은 OpenAI 및 Anthropic API와 호환되는 엔드포인트를 제공한다. 기존 Claude나 GPT 기반 코딩 에이전트를 Qwen3.8로 빠르게 전환 테스트해볼 수 있으며, 프리뷰 기간 동안 비용은 정상가의 10%에 불과하다.
</div>

## "Fable 5 다음"이라는 주장의 맥락

알리바바는 자체 벤치마크에서 Qwen3.8이 Anthropic Claude Fable 5에 이어 세계 2위라고 주장한다. 그러나 현재까지 모델 카드, 활성 파라미터 수, 독립 기관의 검증 데이터는 공개되지 않았다.

이는 Kimi K3가 처음 출시되었을 때와 동일한 패턴이다 — Moonshot AI 역시 출시 초기 "Fable 5와 GPT-5.6 Sol에 이은 3위"를 자체 주장했으며, 이후 Artificial Analysis·LMArena 등 독립 평가 기관의 결과가 실제 순위를 결정했다.

주목해야 할 미공개 정보:
- **토큰당 활성 파라미터 수** — 실제 서빙 비용과 직결
- **공식 벤치마크 테이블** (Artificial Analysis, LMArena)
- **Hugging Face 리포지터리 및 라이선스**
- **공개 API 가격**

<div class="article-callout info">
<strong>참고:</strong> 2.4T 파라미터 모델을 4비트 양자화로 구동하려면 가중치만 약 1.2TB의 스토리지가 필요하다. H200 GPU 한 장(141GB)으로는 어림도 없으며, 8장을 묶어도 메모리가 빠듯하다. 오픈 웨이트 공개 시 커뮤니티의 실제 구동 가능 여부가 주요 관심사가 될 것이다.
</div>

## AI 모델 파라미터 규모 경쟁 현황 (2026년 7월 기준)

알리바바의 Qwen 시리즈는 불과 10개월 만에 파라미터 규모가 급격히 증가했다:

- **2025년 9월:** Qwen3-Max-Preview — 업계 최초 알리바바의 1조 파라미터 모델
- **2026년 4월:** Qwen 3.6 Max Preview
- **2026년 7월 17일:** Kimi K3 (2.8T) 출시
- **2026년 7월 19일:** Qwen3.8 (2.4T) 공개

## 무엇을 기다려야 하나

Qwen3.8이 "Fable 5 다음"임을 증명하려면 세 가지가 필요하다: ① 공식 모델 카드와 벤치마크, ② 오픈 웨이트 공개 및 라이선스 명확화, ③ Artificial Analysis·LMArena의 독립 평가 점수. 이 세 가지가 확인될 때까지, 2.4조라는 숫자는 마케팅과 실력이 뒤섞인 주장으로 남는다.

그럼에도 불구하고, 중국 AI 생태계가 2026년 7월 한 달 동안 2조 파라미터를 넘나드는 모델을 두 개나 연속으로 공개한 것은 글로벌 AI 경쟁의 판도가 돌이킬 수 없이 변했음을 보여준다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
&middot; <a href="" target="_blank" rel="noopener">Qwen 공식 GitHub https://github.com/QwenLM</a><br/>
&middot; <a href="https://huggingface.co/Qwen" target="_blank" rel="noopener">Qwen on Hugging Face</a><br/>
&middot; <a href="https://qwenlm.github.io/" target="_blank" rel="noopener">Qwen 공식 블로그</a><br/>
</div>
