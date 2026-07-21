---
title: "NVIDIA Releases Nemotron 3 Ultra: Open 550B MoE Model Cuts Agent Costs 30%"
summary: "NVIDIA's fully open Nemotron 3 Ultra delivers 5x higher throughput and 30% lower cost for long-running agentic workflows. The 550B-parameter MoE model ships with weights, data, and training recipes under a permissive open license."
category: "ai-news"
date: "2026-06-08"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "OpenModel", "MoE", "AIAgents"]
---

<div class="article-tldr">
NVIDIA has released <strong>Nemotron 3 Ultra</strong>, a 550B-parameter Mixture-of-Experts model optimized for long-running agentic workflows. With only 55B active parameters, it achieves <strong>5x higher throughput</strong> than comparable open models and reduces agentic task costs by <strong>30%</strong>. Weights, training data, and recipes are fully open under the permissive OpenMDW-1.1 license. SWE-Bench Verified scores range from 65% to 70.4% across major agent harnesses.
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote with Jensen Huang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What Is Nemotron 3 Ultra

Nemotron 3 Ultra is NVIDIA's answer to a specific problem: frontier-class AI models are too slow and too expensive for long-running agent workflows. An agent that plans, calls tools, corrects errors, and validates results across dozens of sequential steps burns through compute at a rate that makes most frontier models economically impractical at scale.

NVIDIA's approach is a 550B-total-parameter Mixture-of-Experts architecture where only 55B parameters are active per token. This sparse activation provides the reasoning capability of a much larger model while keeping inference costs manageable. The result, according to NVIDIA's benchmarks, is 5x higher throughput and 30% lower cost per agentic task completion versus comparable open models.

The model is entirely open — weights, training data, and recipes — available now through NVIDIA NIM microservices and on Hugging Face.

## Four Architectural Innovations

**Hybrid Mamba-Transformer layers.** Mamba layers handle long-context efficiency: they process streaming information without quadratic attention overhead, which matters when agents need to track long task histories. Transformer layers preserve precise factual recall when the agent needs to retrieve specific information from a large context window. The combination avoids the typical trade-off between the two.

**NVFP4 quantization.** A single model checkpoint runs on NVIDIA Hopper, Blackwell, and Ampere GPU architectures. This cross-generation compatibility removes the infrastructure headache of maintaining different model versions for different hardware generations. On Blackwell, NVFP4 delivers up to 5x higher throughput compared to BF16.

**LatentMoE.** Improves expert routing efficiency across the diverse sub-tasks that agentic workflows require — reasoning, code generation, tool calls, and domain-specific logic often appear in the same session.

**Multi-token prediction (MTP).** Predicts multiple future tokens in a single forward pass, reducing generation time for long outputs and multi-turn conversations.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">550B</span>
<span class="stat-label">Total parameters (55B active)</span>
</div>
<div class="stat-item">
<span class="stat-number">5x</span>
<span class="stat-label">Throughput vs. comparable open models</span>
</div>
<div class="stat-item">
<span class="stat-number">30%</span>
<span class="stat-label">Lower cost per agentic task</span>
</div>
</div>

## How It Was Trained: Multi-Teacher On-Policy Distillation

Nemotron 3 Ultra introduces a training method called **MOPD (Multi-Teacher On-Policy Distillation)**. More than 10 domain-specific teacher models are trained, each with its own specialized pipeline. During training, the student model generates its own attempts at tasks while each teacher scores the result in its area of expertise. This co-evolution between students and teachers enables continuous improvement across domains without requiring distillation from third-party models.

The pretraining foundation is 10 trillion tokens. Three domain gaps were specifically targeted:

- **Legal:** 4B tokens of synthetic legal data — LegalBench average improved from 64.6% to 74.7%
- **Knowledge:** 35B synthesized Wikipedia-based tokens — SimpleQA improved from 40.2% to 50.2%
- **Code:** 173B refreshed GitHub tokens through September 30, 2025

The release also includes 10M new SFT samples, 1M new RL tasks, and 15 new RL environments.

<div class="article-callout tip">
<strong>Infrastructure note:</strong> The single NVFP4 checkpoint running across Hopper, Blackwell, and Ampere means organizations with mixed GPU generations — common in enterprise data centers — can standardize on one model deployment rather than maintaining separate model versions per hardware type.
</div>

## Benchmark Results

| Benchmark | Nemotron 3 Ultra | What It Measures |
|-----------|:---:|---|
| SWE-Bench Verified | 65–70.4% | Real-world software engineering on GitHub issues |
| Claw-Eval (pass@3) | 76.9% | Autonomous agent execution capability |
| GDPval | 72.9% | Real-world office and knowledge-work delivery |
| GPQA Diamond | Top tier | Advanced knowledge and complex reasoning |

Performance is consistent across Pi, OpenHands, Hermes, OpenCode, and Mini SWE Agent harnesses — 65% to 70.4% regardless of which framework is used. This framework-agnostic consistency is practically significant: teams don't need to tune deployment infrastructure to preserve model quality.

<div class="article-callout info">
<strong>License:</strong> Nemotron 3 Ultra ships under <strong>OpenMDW-1.1</strong>, the Linux Foundation's permissive license purpose-built for open AI model distributions. It covers architecture, parameters, documentation, software, and related artifacts under a single framework — enabling commercial fine-tuning and redistribution.
</div>

## Companion Models

Two additional models launch alongside Nemotron 3 Ultra:

**Nemotron 3.5 Content Safety** — A 4B-parameter guardrail model covering 23 safety categories across text, images, and combined inputs in 12 languages. Designed for use as an inference-time safety filter, an LLM safety judge, or a foundation for domain-specific safety policy training.

**Nemotron 3.5 ASR** — A multilingual streaming speech recognition model supporting 40+ languages in a single checkpoint. Sub-100ms latency enables natural real-time voice orchestration for agent swarms. The English predecessor already powers voice input in Microsoft GitHub Copilot CLI, used by more than 20 million developers.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Nemotron 3 Ultra is a fully open 550B MoE model with 55B active parameters, delivering 5x throughput over comparable open models.</li>
<li>30% lower cost per agentic task, validated on SWE-bench and Terminal bench 2.0.</li>
<li>Single NVFP4 checkpoint runs on Hopper, Blackwell, and Ampere — no per-generation model variants needed.</li>
<li>Fully open: weights, data, recipes under OpenMDW-1.1 permissive license for commercial fine-tuning.</li>
<li>Companion releases: Nemotron 3.5 Content Safety (4B guardrail, 12 languages) and Nemotron 3.5 ASR (40+ language streaming speech).</li>
</ul>
</div>

## Why This Matters

NVIDIA is establishing itself not just as the dominant hardware vendor but as a major open model provider. Nemotron 3 Ultra's combination of full openness, cross-generation hardware compatibility, and genuine agentic efficiency creates a credible alternative to closed API models for enterprise deployment.

For AI teams evaluating whether to build on closed frontier APIs or self-hosted open models, the efficiency and cost data from Nemotron 3 Ultra shifts the calculus meaningfully. A 30% cost reduction and 5x throughput gain are not marginal improvements — they change the economics of running production agentic systems at scale.

The broader signal is that the open model ecosystem is maturing fast enough to challenge closed models on the metrics that enterprise buyers care most about: cost, performance, and control.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://developer.nvidia.com/nemotron" target="_blank" rel="noopener">NVIDIA Nemotron developer hub</a><br/>
· <a href="https://build.nvidia.com/nvidia" target="_blank" rel="noopener">NVIDIA NIM (build.nvidia.com)</a><br/>
· <a href="https://huggingface.co/nvidia" target="_blank" rel="noopener">NVIDIA on Hugging Face — open weights</a><br/>
</div>
