---
title: "Google Launches DiffusionGemma: 4× Faster Text Generation With Parallel Diffusion"
summary: "Google's open experimental model abandons sequential token generation for parallel 256-token canvas denoising, hitting 1,000+ tokens/sec on an H100 GPU. Released under Apache 2.0 on Hugging Face."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["DiffusionGemma", "Google", "DeepMind", "open-source", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Google DeepMind released <strong>DiffusionGemma</strong> on June 10, 2026 — an experimental open model that replaces token-by-token generation with parallel diffusion over a 256-token canvas. It achieves up to 4× faster text generation than conventional LLMs, with 1,000+ tokens/sec on an H100. Available under Apache 2.0.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Jy4RgnvruqI" title="DiffusionGemma: the LLM that writes text ALL AT ONCE — live on an RTX 4090" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is DiffusionGemma?

Google DeepMind introduced **DiffusionGemma** on June 10, 2026, as an experimental open model that rethinks how text is generated at a fundamental level. Built on the Gemma 4 26B Mixture-of-Experts architecture, it swaps the standard autoregressive (one-token-at-a-time) generation loop for **discrete text diffusion** — generating entire blocks of text simultaneously through iterative refinement.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">4×</span><span class="stat-label">faster than autoregressive LLMs</span></div>
<div class="stat-item"><span class="stat-number">1,000+</span><span class="stat-label">tokens/sec on a single H100</span></div>
<div class="stat-item"><span class="stat-number">700+</span><span class="stat-label">tokens/sec on RTX 5090</span></div>
<div class="stat-item"><span class="stat-number">3.8B</span><span class="stat-label">active parameters at inference (26B total)</span></div>
</div>

## Why Autoregressive LLMs Hit a Speed Wall

Every standard LLM must load the full model weights from GPU memory to predict each single next token. This makes inference **memory-bandwidth-bound** — a fundamental bottleneck that no amount of raw GPU compute can fully overcome. You're limited by how fast you can shuttle data, not how fast you can crunch numbers.

DiffusionGemma sidesteps this entirely. It initializes a **canvas of 256 random tokens**, then runs multiple denoising passes over the entire canvas simultaneously. Each forward pass processes 256 tokens at once, reducing the number of memory transfers by roughly **10×** compared to autoregressive generation — shifting the bottleneck from memory bandwidth to raw compute, which scales much more favorably with modern hardware.

## How Uniform State Diffusion Works

Unlike image diffusion models that add continuous Gaussian noise, DiffusionGemma uses **Uniform State Diffusion** — a discrete approach where tokens are replaced with random vocabulary entries rather than blurred numerically.

The generation loop looks like this:

1. Initialize a 256-token canvas with random tokens
2. Run a full denoising pass over the entire canvas with bidirectional attention
3. Lock in the tokens the model is most confident about
4. Locked tokens become context for the next refinement pass
5. Repeat until the canvas converges to coherent text

This bidirectional attention mechanism — where every token can attend to all other tokens — is what makes DiffusionGemma particularly powerful for **non-linear tasks** like code infilling, inline editing, and structured document generation.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Runs on Consumer Hardware</strong><br>Quantized (Q4_K_M), DiffusionGemma requires only about 16–18 GB of VRAM, making it runnable on a single RTX 4090 (24 GB). With llama.cpp's diffusion sampler, users have reported around 100 tokens/sec fully offline. The quantized model weighs approximately 16 GB vs. ~50 GB for the full-precision version.</div>
</div>

## Ecosystem and Tooling

Google has launched DiffusionGemma with broad toolchain support from day one:

| Tool | Role |
|------|------|
| Hugging Face Transformers | Standard inference |
| vLLM (Red Hat integration) | High-throughput production serving |
| MLX | Apple Silicon optimized inference |
| llama.cpp | Local quantized execution (PR in progress) |
| NVIDIA NIM | Enterprise microservice deployment |
| Unsloth / NVIDIA NeMo | Fine-tuning |
| Hackable Diffusion (JAX) | Official modular fine-tuning toolbox |

NVIDIA collaborated on hardware-level optimizations spanning consumer GPUs (RTX 4090/5090 with quantization) through enterprise servers (Hopper and Blackwell using NVFP4 kernels), enabling near-lossless accuracy at accelerated compute throughput.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Quality Trade-off Is Real</strong><br>DiffusionGemma is explicitly an experimental model optimized for speed. It scores approximately 5–9 points lower than its autoregressive Gemma 4 counterpart on standard benchmarks (general knowledge, graduate-level science, coding). For production workloads where output quality is the priority, Google recommends sticking with autoregressive Gemma 4 models.</div>
</div>

## Where DiffusionGemma Shines

The model's ultra-low latency opens up workflows that were impractical with slower autoregressive generation:

- **Real-time inline editing**: suggest completions as the user types, with negligible delay
- **Code infilling**: complete missing code blocks using bidirectional context from both before and after the gap
- **Rapid iteration**: generate dozens of draft variations in the time a standard model produces one
- **Structured output**: JSON, tables, and non-linear document formats where global consistency matters
- **Interactive local AI**: chatbots and assistants that feel genuinely instant on personal hardware

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>DiffusionGemma: 26B MoE (3.8B active at inference), Apache 2.0, open weights on Hugging Face</li>
<li>Up to 4× faster than autoregressive LLMs — 1,000+ tokens/sec on H100, 700+ on RTX 5090</li>
<li>Bidirectional attention enables strong performance on code infilling and non-linear generation</li>
<li>Runs on a single RTX 4090 (24 GB VRAM) when quantized (~16–18 GB)</li>
<li>Scores ~5–9 points lower on quality benchmarks vs. autoregressive Gemma 4 — experimental, not production-ready</li>
<li>Supported by vLLM, MLX, Hugging Face Transformers, NVIDIA NIM from launch day</li>
</ul>
</div>

## Access and Deployment

DiffusionGemma weights are available immediately on Hugging Face (`google/diffusiongemma-26B-A4B-it`) under Apache 2.0. The model is also accessible via Google's Vertex AI Model Garden and Kaggle. Detailed architecture documentation and inference guides are available through Google AI for Developers.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://github.com/google-deepmind/gemma" target="_blank" rel="noopener noreferrer">Google DeepMind Gemma (GitHub) — Official repository with architecture docs and code</a><br>— <a href="https://github.com/ggml-org/llama.cpp" target="_blank" rel="noopener noreferrer">llama.cpp (GitHub) — Local quantized inference engine with DiffusionGemma support</a><br>— <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM (GitHub) — High-throughput serving engine with DiffusionGemma integration</a></div></div>
