---
title: "NVIDIA Nemotron 3 Ultra: A 550B Open Model Built for Long-Running AI Agents"
summary: "NVIDIA releases Nemotron 3 Ultra, a fully open 550B-parameter MoE model delivering 5x throughput and 30% lower cost versus comparable open models — designed from the ground up for multi-turn agentic workflows."
category: "ai-news"
date: "2026-06-06"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "AI Agents", "Open Source AI", "MoE"]
---

<div class="article-tldr">
NVIDIA released Nemotron 3 Ultra on June 4, 2026 — a 550B-parameter Mixture-of-Experts model with only 55B active parameters per token. It delivers 5x higher throughput than comparable open models, cuts agentic task costs by up to 30%, and is fully open including weights, data, and training recipes under the OpenMDW-1.1 license.
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## The Most Capable Open Model for Agentic AI

NVIDIA's Nemotron 3 Ultra isn't just another large language model. It was purpose-built for the way modern AI systems actually work: multi-step planning, tool calls, sub-agent delegation, long context tracking, and error recovery across dozens of turns. Where most benchmarks test single-turn question answering, Nemotron 3 Ultra was optimized for the full agentic loop.

<div class="article-stats">

| Metric | Value |
|--------|-------|
| Total Parameters | 550B |
| Active Parameters per Token | 55B |
| Throughput vs. peers | 5x higher |
| Agentic task cost reduction | Up to 30% |
| SWE-bench Verified score | 65–70.4% |
| Context window | Up to 256K tokens |
| Pretraining data | 10T tokens + 212B targeted additions |

</div>

## Four Architectural Innovations

**Hybrid Mamba-Transformer Layers**
Mamba layers handle sequence efficiency for long-context processing, while Transformer layers maintain precise recall when agents need to retrieve specific facts from large windows. This hybrid lets the model stay fast on routine generation while still handling detailed retrieval tasks.

**NVFP4 Quantization**
A single checkpoint runs across NVIDIA Hopper, Blackwell, and Ampere GPU architectures. On Blackwell, NVFP4 delivers up to 5x higher throughput vs. BF16 — meaning teams don't need to maintain multiple deployment artifacts for different hardware generations.

**LatentMoE Expert Routing**
Supports more efficient routing across reasoning, code generation, tool calls, and domain-specific logic — the mix of tasks a real agentic workflow encounters in a single session.

**Multi-Token Prediction (MTP)**
Predicts multiple future tokens in a single forward pass, improving throughput for long outputs and multi-turn exchanges without sacrificing accuracy.

<div class="article-callout tip">

**Developer tip:** Nemotron 3 Ultra achieves consistent SWE-bench Verified scores of 65–70.4% across Pi, OpenHands, Hermes, OpenCode, and Mini SWE Agent. It doesn't require a specific framework, so it drops into existing agent stacks with minimal integration effort.

</div>

## Multi-Teacher On-Policy Distillation

The training methodology — called MOPD — uses more than 10 domain-specialized teacher models simultaneously. Each teacher scores the student model's attempts in its area of expertise. Teachers and the student co-evolve during training, enabling progressive specialization across domains more efficiently than single-teacher approaches.

## Targeted Pretraining Additions

On top of a 10 trillion token pretraining foundation, NVIDIA added 212B targeted tokens:

| Domain | Tokens Added | Benchmark Gain |
|--------|-------------|----------------|
| Synthetic legal data | 4B | LegalBench: 64.6% → 74.7% |
| Wiki-based synthetic data | 35B | SimpleQA: 40.2% → 50.2% |
| Refreshed GitHub code | 173B | Code recency through Sept 2025 |

<div class="article-callout info">

**Also launching:** Nemotron 3.5 Content Safety is a 4B open guardrail model for classifying unsafe, disallowed, or policy-violating content across text, images, and combined inputs. Nemotron 3.5 ASR extends the cache-aware streaming architecture to 40+ languages with sub-100ms latency — targeting real-time voice orchestration in agentic systems.

</div>

## Availability

Nemotron 3 Ultra is fully open — weights, data, and recipes — under the OpenMDW-1.1 license from the Linux Foundation. It's available on Hugging Face, as an NVIDIA NIM microservice, and across AWS JumpStart, Google Cloud, Microsoft Foundry, CoreWeave, DigitalOcean, Fireworks AI, Together AI, and 15+ other inference platforms. Developers can also try it on Perplexity Pro.

<div class="article-keypoints">

### Key Takeaways

- 550B MoE architecture, 55B active parameters — frontier accuracy in a smaller active footprint
- 5x throughput and 30% lower cost vs. comparable open models
- Hybrid Mamba-Transformer + NVFP4 + LatentMoE + MTP architecture
- Fully open: weights, data, training recipes under OpenMDW-1.1 (commercial-friendly)
- Consistent SWE-bench Verified 65–70.4% across all major agent harnesses

</div>

Nemotron 3 Ultra represents the clearest sign yet that open models are reaching parity with closed frontier systems for agentic workloads. For teams building production agent pipelines, a fully open, commercially licensed model at this performance level significantly changes the build-vs-buy calculation.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://developer.nvidia.com/nemotron" target="_blank" rel="noopener">NVIDIA Developer — Nemotron</a><br/>
· <a href="https://blogs.nvidia.com/" target="_blank" rel="noopener">NVIDIA Blog</a><br/>
· <a href="https://huggingface.co/nvidia" target="_blank" rel="noopener">NVIDIA on Hugging Face</a>
</div>
