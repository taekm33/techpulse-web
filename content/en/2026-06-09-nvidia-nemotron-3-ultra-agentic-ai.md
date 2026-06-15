---
title: "NVIDIA Launches Nemotron 3 Ultra: A Fully Open 550B Model Built for Long-Running AI Agents"
summary: "NVIDIA has released Nemotron 3 Ultra, a fully open 550B-parameter Mixture-of-Experts model optimized for agentic AI workflows. It delivers 5x faster throughput and 30% lower cost than comparable open models, with weights, data, and training recipes all publicly released under the Linux Foundation's OpenMDW-1.1 license."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "agentic AI", "open model", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — NVIDIA released Nemotron 3 Ultra on June 4, 2026. It's a 550B-parameter (55B active) Hybrid Mamba-Transformer MoE model designed specifically for long-running agentic workflows — not single-turn chat. It achieves 5x faster inference throughput and 30% lower task cost than comparable open models, with full open release of weights, data, and recipes under the Linux Foundation's OpenMDW-1.1 license.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Nemotron 3 Ultra?

**NVIDIA Nemotron 3 Ultra** is the flagship of the Nemotron 3 family and NVIDIA's most capable open model to date. Unlike models optimized for single-turn chat, Nemotron 3 Ultra is explicitly built for **long-running agentic AI** — workflows where a model plans, calls tools, reads observations, delegates to sub-agents, validates outputs, and recovers from errors across many turns over extended periods.

Typical use cases: coding agents that plan, write, test, and debug across large codebases over hours; research agents that search, cross-reference, and synthesize findings from hundreds of sources.

<div class="article-stats">
<strong>Key Numbers</strong>
<ul>
  <li>🧠 <strong>550B total parameters</strong> (55B active, Sparse MoE)</li>
  <li>⚡ <strong>5x faster inference throughput</strong> vs. comparable open models</li>
  <li>💰 <strong>30% lower cost per agentic task</strong> (SWE-bench / Terminal bench 2.0)</li>
  <li>📏 <strong>1M token context</strong> (Ruler@1M: 95% accuracy)</li>
  <li>📂 <strong>Fully open: weights + data + recipes all released</strong></li>
</ul>
</div>

## Four Architectural Innovations

### 1. Hybrid Mamba-Transformer Layers
Mamba layers handle long-context efficiency — critical for agentic tasks that accumulate hundreds of tool calls and observations over time. Transformer layers preserve precise fact retrieval from within large context windows. The hybrid combines the best of both architectures.

### 2. LatentMoE Expert Routing
LatentMoE allows Ultra to activate four times more experts at the same inference cost compared to standard MoE routing. This enables the model to fluidly handle diverse workflows spanning reasoning, code generation, tool use, and domain-specific logic within a single pipeline.

### 3. NVFP4 Quantization
A single NVFP4 checkpoint runs natively across **NVIDIA Hopper, Blackwell, and Ampere** GPUs. On Blackwell, NVFP4 delivers up to 5x higher throughput per GPU compared to BF16 at equivalent interactivity — with no per-architecture recompilation needed.

### 4. Multi-Token Prediction (MTP)
MTP predicts multiple future tokens in a single forward pass, reducing generation latency for long outputs. This is especially impactful in multi-turn agentic workflows where the model produces many sequential planning steps.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>How to Get Started</strong><br>Try Nemotron 3 Ultra immediately: <strong>Perplexity Pro</strong> (API + UI), <strong>OpenRouter / Together AI / DeepInfra</strong> (inference platforms), <strong>Hugging Face</strong> (download weights), <strong>NVIDIA NIM microservice</strong> (on-premises deployment). Enterprise cloud options include AWS JumpStart, Amazon Bedrock, and Baseten. Cookbooks and tutorials are available via the NVIDIA developer blog.</div>
</div>

## Multi-Teacher On-Policy Distillation (MOPD)

The post-training methodology is as novel as the architecture. **MOPD** trains Ultra using feedback from 10+ specialized teacher models simultaneously. Each teacher is itself a domain-specific model trained on its own pipeline. As Ultra generates attempts, teachers score the outputs in their area of expertise. This co-evolution between student and teachers drives continuous improvement across domains.

| Training Data | Scale |
|---|---|
| Pre-training tokens | 10T + 212B new domain-targeted tokens |
| Cumulative SFT samples | 50M |
| Cumulative RL tasks | 2M |
| Cumulative RL environments | 55 |
| New SFT samples this release | 10M |
| New RL environments this release | 15 |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>OpenMDW-1.1 License</strong><br>Nemotron 3 Ultra ships under the Linux Foundation's OpenMDW-1.1 (Model, Data, Weights) license — a new permissive license purpose-built for open AI distributions. It covers the full set of model materials under a single framework. Enterprises can fine-tune for domain-specific workflows and deploy commercially anywhere.</div>
</div>

## The Agentic Ecosystem: Hermes, NemoClaw, OpenShell

Ultra is designed to work within an ecosystem rather than in isolation. NVIDIA released three companion tools:

- **Hermes Agent** — an agentic harness providing planning loops, tool calls, and memory management
- **NemoClaw** — an open-source orchestration layer that connects Hermes and OpenCode with Ultra as the inference engine
- **NVIDIA OpenShell** — a secure sandboxed runtime that isolates agent-generated code and enforces governance policies

Together these enable end-to-end agentic workflows: a coding agent in OpenCode can iterate on a codebase for hours inside OpenShell, with NemoClaw managing orchestration and Ultra providing reasoning.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>550B total / 55B active Hybrid Mamba-Transformer MoE — designed for long-running agent workflows</li>
  <li>5x faster throughput and 30% lower cost vs. comparable open models on agentic benchmarks</li>
  <li>1M token context (Ruler@1M: 95%), NVFP4 runs on Hopper/Blackwell/Ampere from one checkpoint</li>
  <li>Fully open: weights, data, recipes — commercially usable under OpenMDW-1.1</li>
  <li>Native integration with Hermes, NemoClaw, and OpenShell for production agentic deployment</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Download Links</strong><br>— <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" target="_blank" rel="noopener noreferrer">NVIDIA Technical Blog: Nemotron 3 Ultra Official Announcement</a><br>— <a href="https://research.nvidia.com/labs/nemotron/Nemotron-3/" target="_blank" rel="noopener noreferrer">NVIDIA Research: Nemotron 3 Family Papers & Resources</a><br>— <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16" target="_blank" rel="noopener noreferrer">Hugging Face: Download Nemotron 3 Ultra Weights</a><br>— <a href="https://build.nvidia.com/nvidia/nemotron-3-ultra" target="_blank" rel="noopener noreferrer">build.nvidia.com: Try via API & NIM Microservice</a></div></div>
