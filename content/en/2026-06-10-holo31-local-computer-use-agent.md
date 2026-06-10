---
title: "Holo3.1: Computer-Use AI Agents Now Run Locally"
summary: "H Company's Holo3.1 is the first computer-use model family to ship quantized checkpoints for local inference, adding mobile support and native function calling across web, desktop, and mobile environments."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["ai-agent", "computer-use", "open-source", "local-inference", "Holo3"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> H Company released Holo3.1 on June 2, 2026 — the first production-grade computer-use model family to ship quantized weights (FP8, NVFP4, Q4 GGUF) for fully local deployment. The 35B-A3B model now scores 79.3% on AndroidWorld (up from 67%), and agents can run entirely on-device with as little as 12GB of VRAM.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/GRLl-46Z4LY" title="Breaking the Computer Use Frontier - Holo3 | Hands-on Code" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">79.3%</span><span class="article-stats__label">AndroidWorld (35B-A3B)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2×</span><span class="article-stats__label">Speed gain with NVFP4 vs FP8</span></div>
  <div class="article-stats__item"><span class="article-stats__value">140ms</span><span class="article-stats__label">Perception-to-action on RTX 4090</span></div>
  <div class="article-stats__item"><span class="article-stats__value">12GB</span><span class="article-stats__label">Min VRAM (4-bit quant)</span></div>
</div>

## What Is Holo3.1?

H Company's **Holo3.1** is an updated family of Vision-Language Models (VLMs) designed specifically for computer-use agents — systems that perceive a screen and autonomously operate a keyboard and mouse to complete real-world tasks. The original Holo3 (released March 2026) set a new state-of-the-art on OSWorld-Verified at 78.85%, outperforming GPT-5.4 and Opus 4.6 at a fraction of the cost. Holo3.1 builds on that foundation with three major production improvements.

## Three Key Improvements

### 1. Local Quantized Inference

For the first time, H Company ships quantized checkpoints alongside the full-precision model. The 35B-A3B model is available in FP8, NVFP4, and Q4 GGUF formats. On an NVIDIA DGX Spark, NVFP4 (W4A16) cuts average agent step time from 6.8s (FP8) to 3.3s — roughly a 2× end-to-end speedup. On an RTX 4090, perception-to-action latency reaches **140ms**, four times faster than typical cloud API roundtrips. With 4-bit quantization, the full agent stack fits on a 12GB VRAM GPU.

The privacy implication is significant: continuous desktop screenshots never leave the machine. This opens computer-use agents to finance, healthcare, and legal workflows where cloud API transmission is prohibited.

### 2. Mobile Automation

Holo3.1 adds first-class mobile support. Trained on Android UI traces, the 35B-A3B model jumps from 67% to **79.3%** on the AndroidWorld benchmark. The 4B and 9B variants go from 58% to 72%. In H Company's own Holotab product harness, Holo3.1 shows more than 25% improvement over Holo3.

### 3. Native Function Calling

Holo3.1 supports the OpenAI-compatible function-calling protocol alongside its existing structured JSON output. The two execution modes now perform at near-parity, eliminating the 10–15% accuracy gap that hampered Holo3 integration with third-party frameworks. This means Holo3.1 plugs directly into LangGraph, CrewAI, AutoGen, and custom harnesses without adapter layers.

## Model Family

| Model | Parameters | Best For |
|-------|-----------|---------|
| Holo3.1-0.8B | 0.8B | Ultra-lightweight edge agents |
| Holo3.1-4B | 4B | Cost-efficient private deployment |
| Holo3.1-9B | 9B | Balanced performance and latency |
| Holo3.1-35B-A3B | 35B total / 3B active | State-of-the-art production |

All models are built on the Qwen 3.5 base and released under Apache 2.0.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Getting started:</strong> Download the Q4 GGUF or NVFP4 checkpoint from Hugging Face. Start with the 4B Q4-GGUF model on your own harness and benchmark three metrics: task success rate, latency, and memory. Validate end-to-end function-call parameter mapping before scaling up to the 35B model.
</div>
</div>

## Why Local Inference Matters Now

The timing of Holo3.1 is no coincidence. A widely shared Hacker News post (716 upvotes) demonstrated running Gemma 4 on a GPU-free 2016 Intel Xeon using aggressive speculative decoding. The message from the developer community is clear: the local inference era for agentic AI has arrived.

For teams evaluating computer-use vendors, Holo3.1's quantized variants lower the hidden integration cost that often outweighs raw benchmark scores in production decisions. Privacy-sensitive industries — those that cannot stream screenshots to a cloud API — finally have a production-ready option.

H Company is actively developing a desktop agent harness based on Holo3.1, with more deployment environments planned. The goal is a universal computer-use agent that operates across environments, integrates into any agent stack, and runs wherever the workflow lives.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body"><strong>Availability:</strong> All models are Apache 2.0 licensed and available on Hugging Face. H Company's Inference API provides free-tier cloud access for developers who need a managed endpoint before setting up local infrastructure.
</div>
</div>

<div class="article-keypoints">
<strong>Key Points</strong>
<ul>
<li>First computer-use model family to ship FP8, NVFP4, and Q4 GGUF quantized checkpoints for local inference</li>
<li>AndroidWorld: 35B-A3B jumps from 67% to 79.3%; 4B/9B models from 58% to 72%</li>
<li>NVFP4 cuts average step time from 6.8s to 3.3s (~2×); 140ms on RTX 4090</li>
<li>Native OpenAI-compatible function calling for seamless LangGraph, CrewAI, AutoGen integration</li>
<li>Four model sizes (0.8B–35B-A3B), Apache 2.0 license, full agent stack runs on 12GB VRAM</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · How to Use</strong><br>— <a href="https://hcompany.ai/holo3.1" target="_blank" rel="noopener noreferrer">Holo3.1 Official Blog (H Company)</a><br>— <a href="https://huggingface.co/blog/hcompany/holo31" target="_blank" rel="noopener noreferrer">Holo3.1 Launch Announcement (Hugging Face Blog)</a><br>— <a href="https://hub.hcompany.ai/quickstart" target="_blank" rel="noopener noreferrer">Holo3.1 Quickstart Guide (H Company Hub)</a></div></div>
