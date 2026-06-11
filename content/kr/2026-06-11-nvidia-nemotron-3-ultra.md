---
title: "NVIDIA Nemotron 3 Ultra 출시: 에이전트 AI를 위한 오픈 550B 추론 모델"
summary: "NVIDIA가 장기 실행 AI 에이전트를 위해 설계된 550B 파라미터 오픈 MoE 모델 Nemotron 3 Ultra를 공개했습니다. 동급 오픈 모델 대비 5배 빠른 추론 속도와 30% 낮은 비용을 제공합니다."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["nvidia", "nemotron", "오픈소스", "에이전트", "추론모델"]
---

<div class="article-tldr">
<strong>3줄 요약:</strong> NVIDIA가 6월 4일 오픈 550B 파라미터 MoE 모델 <strong>Nemotron 3 Ultra</strong>를 출시했습니다. 하이브리드 Mamba-Transformer 아키텍처로 동급 오픈 모델 대비 최대 5배 빠른 추론과 30% 낮은 비용을 실현합니다. 가중치·학습 데이터·레시피 모두 공개되어 있어 도메인 특화 파인튜닝이 자유롭습니다.
</div>

<div class="article-stats">
<div class="stat-item"><span class="stat-number">550B</span><span class="stat-label">총 파라미터 (55B 활성)</span></div>
<div class="stat-item"><span class="stat-number">5×</span><span class="stat-label">동급 대비 추론 속도 향상</span></div>
<div class="stat-item"><span class="stat-number">1M</span><span class="stat-label">최대 컨텍스트 토큰 수</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## 에이전트 AI를 위해 태어난 오픈 거대 모델

NVIDIA가 2026년 6월 4일 **Nemotron 3 Ultra**를 공개하며 Nemotron 3 패밀리를 완성했습니다. 이 모델은 단순한 대형 언어 모델이 아니라, **장기 실행(long-running) AI 에이전트 워크플로**를 위해 특별히 설계된 추론 특화 모델입니다. 코드 작성·디버깅, 멀티스텝 계획 수립, 도구 사용, 심층 연구 등 복잡한 자율 작업에서 두각을 나타냅니다.

모델은 완전한 개방성을 자랑합니다. 가중치(weights), 학습 데이터(open data), 학습 레시피(open recipes)가 모두 공개되어 있어 누구든 Hugging Face에서 내려받아 도메인 특화 파인튜닝을 진행할 수 있습니다.

## 혁신적인 하이브리드 아키텍처: LatentMoE

Nemotron 3 Ultra의 핵심은 **LatentMoE**라는 하이브리드 아키텍처입니다. 이는 SSM(State Space Models)의 일종인 Mamba-2 레이어와 MoE(Mixture-of-Experts) 레이어, 그리고 선택적 Attention 레이어를 혼합한 구조입니다.

- **Mamba-2**: KV 캐시 부담을 줄이고 긴 컨텍스트 처리 속도를 대폭 향상
- **MoE**: 55B 활성 파라미터만 사용해 연산 효율 극대화
- **MTP(Multi-Token Prediction)**: 한 번의 포워드 패스에서 여러 토큰을 예측해 생성 속도 향상
- **NVFP4 사전 학습**: 4비트 부동소수점 양자화로 GPU 컴퓨팅 처리량 최대화

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>추론 모드 전환 팁</strong><br>채팅 템플릿에서 <code>enable_thinking=True</code>로 설정하면 모델이 내부 추론 트레이스를 먼저 생성한 뒤 최종 답변을 반환합니다. 복잡한 에이전트 워크플로에는 활성화, 빠른 응답이 필요한 대화형 태스크에는 비활성화하는 것이 권장됩니다.</div>
</div>

## 성능 지표 한눈에 보기

| 항목 | 내용 |
|---|---|
| 총 파라미터 | 550B (활성 55B) |
| 아키텍처 | LatentMoE (Mamba-2 + MoE + Attention) + MTP |
| 컨텍스트 길이 | 최대 100만 토큰 |
| 사전 학습 토큰 | 20조(20 trillion) 텍스트 토큰 |
| 지원 언어 | 영어, 프랑스어, 스페인어, 이탈리아어, 독일어, 일본어, 한국어, 힌디어, 포르투갈어(브라질), 중국어 |
| 최소 GPU 요구 | 16× H100 또는 8× H200/GB200 |
| 라이선스 | OpenMDW-1.1 (Linux Foundation) |
| 추론 속도 | 동급 모델 대비 최대 5.9× 빠름 |

## 왜 에이전트 AI에 최적화됐나?

기존 거대 언어 모델은 추론 비용과 속도 문제로 장기 실행 에이전트에 적합하지 않았습니다. Nemotron 3 Ultra는 **SWE-bench**와 **Terminal Bench 2.0** 벤치마크에서 동급 오픈 모델 대비 더 적은 총 토큰으로 작업을 완료했습니다. 에이전트 태스크 비용을 최대 30% 낮출 수 있는 것으로 알려졌습니다.

**Multi-Teacher On-Policy Distillation (MOPD)** 방법론을 통해 10개 이상의 도메인 특화 교사 모델로부터 지속적으로 개선됩니다. 이는 단일 모델을 한 번 학습하는 기존 방식과 달리, 모델이 배포 후에도 계속 향상될 수 있는 기반을 제공합니다.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>배포 옵션</strong><br>NVIDIA NIM 마이크로서비스로 패키징되어 있어 클라우드, 온프레미스, 엣지 어디서나 동일한 체크포인트 하나로 배포 가능합니다. AWS JumpStart, Azure, CoreWeave, Together AI, OpenRouter 등 주요 인퍼런스 플랫폼에서도 즉시 사용할 수 있습니다.</div>
</div>

## 가중치 다운로드 및 시작하기

세 가지 체크포인트가 Hugging Face에 공개됩니다.

- `NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`: 사후 학습 + NVFP4 양자화 (배포 권장)
- `NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`: 사후 학습 BF16 버전
- `NVIDIA-Nemotron-3-Ultra-550B-A55B-Base-BF16`: 베이스 모델

vLLM, SGLang, TRT-LLM 등 주요 추론 프레임워크와의 통합이 지원되며, Unsloth·NVIDIA NeMo를 사용한 파인튜닝 튜토리얼도 제공됩니다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>550B 파라미터, 55B 활성 파라미터의 완전 오픈 MoE 하이브리드 모델</li>
<li>동급 오픈 모델 대비 최대 5.9배 빠른 추론, 30% 낮은 에이전트 비용</li>
<li>100만 토큰 컨텍스트 지원으로 장문 문서·코드베이스 분석에 탁월</li>
<li>가중치·데이터·레시피 모두 공개 (OpenMDW-1.1 라이선스)</li>
<li>NVIDIA NIM으로 패키징되어 클라우드·온프레미스 어디서나 동일 배포</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>— <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" target="_blank" rel="noopener noreferrer">NVIDIA 기술 블로그: Nemotron 3 Ultra 공식 발표</a><br>— <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16" target="_blank" rel="noopener noreferrer">Hugging Face: 모델 가중치 다운로드</a><br>— <a href="https://developer.nvidia.com/topics/ai/nemotron" target="_blank" rel="noopener noreferrer">NVIDIA Developer: Nemotron 개발자 허브 (쿡북·튜토리얼)</a><br>— <a href="https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-ultra-550b-a55b" target="_blank" rel="noopener noreferrer">NVIDIA NIM API 레퍼런스 문서</a></div></div>
