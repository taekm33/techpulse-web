---
title: "NVIDIA Nemotron 3 Ultra: A Fully Open 550B MoE Model Built for Agentic AI"
summary: "NVIDIA released Nemotron 3 Ultra, a fully open 550B-parameter Mixture-of-Experts model with 55B active parameters. It delivers frontier reasoning at up to 5× faster inference and 30% lower cost for long-running agent workflows, with weights, data, and training recipes all publicly available."
category: "dev-trend"
date: "2026-06-10"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "OpenSource", "AgenticAI", "MoE"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> NVIDIA Nemotron 3 Ultra is a 550B-parameter open Mixture-of-Experts model with 55B active parameters, designed specifically for long-running agentic workflows. It achieves up to 5× faster inference via NVFP4 quantization on Blackwell GPUs and lowers agentic task costs by up to 30%. Weights, training data, and recipes are fully open under the Linux Foundation's OpenMDW-1.1 license.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Built for the New Reality of Agentic AI

AI is no longer just something you ask a question to — it is an agent that works on your behalf, planning, coding, testing, and iterating across long sessions. This new paradigm demands models that are not just accurate, but fast and cost-efficient across hundreds of turns. NVIDIA Nemotron 3 Ultra is purpose-built for this world.

<div class="article-stats">
<strong>📊 Key Numbers</strong>
<ul>
<li>Total parameters: <strong>550B</strong> (active parameters: 55B)</li>
<li>NVFP4 inference speed on Blackwell: up to <strong>5× faster</strong> than BF16</li>
<li>Agentic task cost reduction: up to <strong>30%</strong></li>
<li>GPU support: Hopper, Blackwell, Ampere (single checkpoint)</li>
<li>License: Linux Foundation <strong>OpenMDW-1.1</strong> (fully open)</li>
</ul>
</div>

## Four Architectural Innovations Behind the Performance

| Innovation | What It Does |
|---|---|
| Hybrid Mamba-Transformer | Mamba layers handle long contexts efficiently where pure Transformers struggle |
| LatentMoE | 4× more experts at the same inference cost via improved routing |
| NVFP4 quantization | Runs one checkpoint across Hopper, Blackwell, and Ampere GPUs |
| Multi-token prediction | Faster generative speed, especially in multi-turn agent tasks |

**Hybrid Mamba-Transformer:** Standard Transformer architectures are memory- and compute-heavy over very long sequences. By mixing Mamba layers with Transformer layers, Nemotron 3 Ultra handles the extended context windows that coding and research agents typically require without the usual performance degradation.

**LatentMoE:** Traditional MoE models route tokens to a fixed set of experts. LatentMoE enables four times as many experts at the same inference cost, increasing effective model capacity without a proportional increase in compute. This directly supports the Nemotron team's design philosophy: faster models are smarter models, because faster training and inference enable more experience during post-training.

**NVFP4 across all NVIDIA GPU architectures:** A single NVFP4 checkpoint runs on Hopper, Blackwell, and Ampere GPUs — enterprises do not need to maintain separate weights for different hardware generations. On Blackwell, NVFP4 delivers up to 5× higher throughput per GPU compared to BF16 at equivalent interactivity levels.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Developer Note</strong><br>Nemotron 3 Ultra integrates directly with NVIDIA's Hermes agentic harness and OpenCode. It is packaged as an NVIDIA NIM microservice and can be deployed on-premises, in cloud, or at the edge. Download BF16 or NVFP4 weights from HuggingFace, try it instantly on build.nvidia.com, or explore it via OpenRouter and Perplexity Pro. Cookbooks and training recipes are available on GitHub.</div>
</div>

## Multi-Teacher Distillation and the Nemotron Coalition

Rather than training in isolation, NVIDIA used Multi-Teacher On-Policy Distillation — gathering dense feedback from over ten domain-specific teacher models throughout training. This is done in partnership with the Nemotron Coalition, a community of companies that contribute to improving the model before it is released.

The result is strong performance across diverse domains: coding agents can plan, code, test, and debug end-to-end; research agents can search, evaluate, and synthesize across hundreds of sources. On SWE-bench and Terminal bench 2.0, Nemotron 3 Ultra completed benchmarks using fewer total tokens and fewer tokens per turn than comparable models — translating directly to a 30% reduction in cost for agentic task completion.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Where to Access It</strong><br>Immediately available on Perplexity Pro (subscription or API), OpenRouter, Anaconda, and build.nvidia.com. Download weights from HuggingFace. Deploy anywhere using NVIDIA NIM microservices. Full training recipes, cookbooks, and documentation are available on GitHub and the NVIDIA Developer portal.</div>
</div>

## Fully Open Under OpenMDW-1.1

Nemotron 3 Ultra is fully open — weights, training data, and recipes. NVIDIA is moving Nemotron releases to the Linux Foundation's OpenMDW-1.1 license, which covers the full set of model materials (architecture, parameters, documentation, software, and related artifacts) under a single permissive framework. This makes Nemotron 3 Ultra one of the most comprehensively open frontier-class models available, enabling enterprises to fine-tune and deploy on their own infrastructure without licensing complexity.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>550B total / 55B active MoE architecture optimized for long-running agentic workflows</li>
<li>NVFP4 enables up to 5× faster inference on Blackwell vs. BF16, single checkpoint across GPU generations</li>
<li>Up to 30% lower cost per agentic task completion, verified on SWE-bench and Terminal bench 2.0</li>
<li>Fully open: weights, data, and recipes under Linux Foundation OpenMDW-1.1</li>
<li>Native integration with Hermes agentic harness and OpenCode; available on OpenRouter, Perplexity, and HuggingFace</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources, Downloads &amp; Docs</strong><br>— <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" target="_blank" rel="noopener noreferrer">NVIDIA Technical Blog: Nemotron 3 Ultra Deep Dive</a><br>— <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4" target="_blank" rel="noopener noreferrer">HuggingFace: Download Nemotron 3 Ultra Weights (NVFP4)</a><br>— <a href="https://build.nvidia.com/nvidia/nemotron-3-ultra" target="_blank" rel="noopener noreferrer">build.nvidia.com: Try Nemotron 3 Ultra Now</a><br>— <a href="https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf" target="_blank" rel="noopener noreferrer">NVIDIA Official Technical Report (PDF)</a></div></div>
