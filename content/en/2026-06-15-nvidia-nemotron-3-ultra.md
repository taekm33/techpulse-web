---
title: "NVIDIA Releases Nemotron 3 Ultra: Open 550B MoE Model Built for Long-Running Agents"
summary: "NVIDIA launched Nemotron 3 Ultra, a fully open 550B-parameter Mixture-of-Experts model optimized for long-running agentic workflows. It delivers 5x faster inference and 30% lower task cost, with weights, data, and training recipes released under the Linux Foundation's OpenMDW-1.1 license."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "OpenSourceAI", "MoE", "AgenticAI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — NVIDIA released <strong>Nemotron 3 Ultra</strong>, a 550B-parameter (55B active) hybrid Mamba-Transformer MoE model. It is <strong>5x faster</strong> than comparable models and reduces agentic task costs by <strong>30%</strong>. Weights, training data, and recipes are fully open under the Linux Foundation's OpenMDW-1.1 license.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Built for the Agentic Era

NVIDIA's framing for Nemotron 3 Ultra is unambiguous: "AI is no longer just a thing you ask a question to. Now it's an agent that works on your behalf." Coding agents plan, write, test, debug, and iterate across large codebases. Research agents search, evaluate, cross-reference, and synthesize across hundreds of sources. These workflows run for hours — and Nemotron 3 Ultra was designed from scratch to handle them efficiently.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">550B</span>
<span class="article-stats__label">Total parameters (55B active)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">5×</span>
<span class="article-stats__label">Faster inference vs. comparable models</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">30%</span>
<span class="article-stats__label">Lower cost on agentic workloads</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">10+</span>
<span class="article-stats__label">Domain-specific teacher models in distillation</span>
</div>
</div>

## Technical Architecture

### Hybrid Mamba-Transformer Layers
The core architectural innovation is a hybrid of Transformer and **Mamba (SSM) layers**. State space models handle long-context sequences with significantly lower memory and compute than pure attention, making Nemotron 3 Ultra practical for agentic sessions that span millions of tokens.

### LatentMoE for Expert Routing
**LatentMoE** enables four times as many experts to be available at the same inference cost as conventional MoE routing. The result: more domain-specialized capacity without sacrificing speed.

### NVFP4 Cross-Architecture Quantization
A single NVFP4 checkpoint runs on NVIDIA Hopper, Blackwell, and Ampere GPUs. On Blackwell, it delivers up to **5x higher throughput** versus BF16 at equivalent interactivity levels.

### Multi-Teacher On-Policy Distillation
Nemotron 3 Ultra is trained with dense feedback from over ten domain-specific teacher models. The full data pipeline, training recipes, and weights are released openly, enabling fine-tuning for any specialized domain.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Try It Now</strong><br>Nemotron 3 Ultra is available today on Perplexity Pro, OpenRouter, Anaconda, and <a href="https://build.nvidia.com" target="_blank" rel="noopener noreferrer">build.nvidia.com</a>. It is packaged as an NVIDIA NIM microservice for cloud, on-premises, or edge deployment.</div>
</div>

## Benchmark Performance

On SWE-bench and Terminal Bench 2.0, Nemotron 3 Ultra completed agentic benchmarks using fewer total tokens and fewer tokens per turn than comparable models.

| Attribute | Nemotron 3 Ultra | Comparable Open Models |
|-----------|-----------------|----------------------|
| Inference speed | 5× faster | Baseline |
| Agentic task cost | 30% lower | Baseline |
| GPU compatibility | Hopper, Blackwell, Ampere | Varies |
| License | Fully open (OpenMDW-1.1) | Mostly restricted |
| Weights open | ✅ | Mostly ❌ |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>What is OpenMDW-1.1?</strong><br>The Linux Foundation's permissive license purpose-built for AI model distributions. It covers architecture, parameters, documentation, software, and related artifacts under one framework, and permits commercial use and redistribution after fine-tuning.</div>
</div>

## Agent Framework Integration

Nemotron 3 Ultra integrates natively with NVIDIA's **NemoClaw** secure runtime and **Hermes** agent harness. Swapping in the model in OpenCode or Hermes requires a single-line JSON config change. NVIDIA also released cookbooks and Hugging Face model cards to help teams start in minutes.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>The Nemotron Coalition</strong><br>Rather than building the model in isolation, NVIDIA formed the Nemotron Coalition — a group of partner companies that jointly contribute data and evaluations before each release. Nemotron 4 is already in development.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Nemotron 3 Ultra is a 550B/55B hybrid Mamba-Transformer MoE model optimized for long-running agentic tasks.</li>
<li>5x faster inference and 30% lower cost versus comparable models on agentic benchmarks.</li>
<li>NVFP4 quantization runs one checkpoint across Hopper, Blackwell, and Ampere GPUs.</li>
<li>Fully open: weights, data, and training recipes released under OpenMDW-1.1.</li>
<li>Available now on Perplexity Pro, OpenRouter, build.nvidia.com, and as an NVIDIA NIM microservice.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Resources</strong><br>— <a href="https://github.com/NVIDIA/NeMo" target="_blank" rel="noopener noreferrer">NVIDIA NeMo GitHub — official training and fine-tuning framework</a><br>— <a href="https://github.com/NVIDIA/Megatron-LM" target="_blank" rel="noopener noreferrer">Megatron-LM GitHub — large-scale distributed training library underlying Nemotron</a><br>— <a href="https://github.com/NVIDIA/NeMo-Guardrails" target="_blank" rel="noopener noreferrer">NeMo Guardrails GitHub — safety controls and guardrail library for agents</a></div></div>
