---
title: "Google Releases DiffusionGemma: An Open Model That Generates Text Up to 4x Faster"
summary: "Google DeepMind has released DiffusionGemma, a 26B Mixture-of-Experts open model using text diffusion to generate entire blocks of 256 tokens in parallel. It achieves 1,000+ tokens per second on a single H100 GPU under Apache 2.0 license — a potential leap for real-time interactive AI applications."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["DiffusionGemma", "Google", "OpenModel", "TextDiffusion", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Google DeepMind released DiffusionGemma, an experimental open model that generates 256 tokens simultaneously using a diffusion-based approach instead of sequential token prediction. It hits 1,000+ tokens/sec on an H100 and runs on consumer RTX 5090/4090 GPUs. Apache 2.0 license, available now on Hugging Face.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/r305-aQTaU0" title="Text Diffusion — Brendan O'Donoghue, Google DeepMind (AI Engineer)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Bottleneck Problem DiffusionGemma Solves

Every standard language model — GPT, Gemini, Llama — generates text one token at a time. This sequential process is fundamentally constrained by GPU memory bandwidth: the model must stream its entire weight set through a narrow pipe for each individual token. Even the most powerful hardware can only push tokens so fast.

DiffusionGemma abandons this architecture entirely. Borrowing from image diffusion research, it generates an entire block of 256 tokens simultaneously by iteratively denoising a "canvas" of random tokens until a coherent output emerges. By giving the GPU's tensor cores a far larger chunk of work per pass, the memory bandwidth bottleneck largely disappears.

<div class="article-stats">
<div class="article-stats__item"><span class="article-stats__number">4–5×</span><span class="article-stats__label">Faster inference than autoregressive models on dedicated GPUs</span></div>
<div class="article-stats__item"><span class="article-stats__number">1,000+</span><span class="article-stats__label">Tokens per second on a single NVIDIA H100</span></div>
<div class="article-stats__item"><span class="article-stats__number">3.8B</span><span class="article-stats__label">Active parameters during inference (26B total, sparse MoE)</span></div>
</div>

## Architecture Breakdown

DiffusionGemma is built on the 26B A4B (4B active) Mixture-of-Experts variant of the Gemma 4 architecture. The sparse MoE design means only 3.8B parameters activate during any given inference pass — making it fit within the 24GB VRAM of a consumer NVIDIA RTX 5090 or 4090 when quantized.

| Feature | Description |
|---------|-------------|
| Discrete text diffusion | Shifts from causal token generation to block-autoregressive multi-canvas sampling |
| Bidirectional attention | Every token attends to all others in the 256-token block, including future tokens |
| Intelligent self-correction | Iterative refinement lets the model catch and fix mistakes before finalizing output |
| NVFP4 quantization | 4-bit floating-point on Blackwell GPUs for near-lossless accuracy at maximum speed |
| Adaptive computation | The model decides how many denoising steps to use — fewer for easy tasks, more for hard ones |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Why Bidirectional Attention Matters</strong><br>Autoregressive models are causally constrained — once a token is generated, it can't be revised. DiffusionGemma's bidirectional attention means it can generate a preliminary answer, reason through a problem, spot the error, and go back to fix the initial output. In one demo, it initially guessed 60 for a math problem, refined to 49, then corrected to the right answer of 39 after finishing its chain of reasoning — something GPT-4o and Gemini 2.5 Flash failed to do on the same prompt.</div>
</div>

## What Low Latency Unlocks

Google DeepMind researchers stress that the speed advantage isn't just about doing the same things faster — it enables entirely new categories of applications. Demos shown at AI Engineer conference included:

- **Live Wikipedia**: A fake Wikipedia page with HTML generated on the fly for every click
- **AI Reddit**: Entire comment threads, post text, and images generated in real time
- **Generative OS**: Every click generates the next screen of a fully AI-produced operating system
- **Voice-to-app**: A complete todo app with sorting and completed state built in 15 seconds via voice commands

The key insight is that at 1,000+ tokens per second, AI-generated content becomes indistinguishable from pre-loaded content from a user's perspective.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Important Caveats</strong><br>DiffusionGemma is experimental and its overall output quality is currently lower than standard Gemma 4 on most benchmarks (MMLU Pro: 77.6% vs. 82.6%; AIME 2026: 69.1% vs. 88.3%). It also has lower throughput at large batch sizes, making it less cost-effective for high-QPS cloud serving. Google recommends standard Gemma 4 for production quality workloads; DiffusionGemma is best suited for local, speed-critical, interactive research.</div>
</div>

## Getting Started

DiffusionGemma is available now under the Apache 2.0 license. Deployment options include:

- **Hugging Face Transformers**: Load via `google/diffusiongemma-26B-A4B-it`
- **vLLM**: Supported with Red Hat integration for high-throughput serving
- **MLX**: For Apple Silicon deployment
- **NVIDIA NIM**: Packaged as a microservice for enterprise deployments
- **NVIDIA NeMo AutoModel** and **Unsloth**: For fine-tuning
- **Hackable Diffusion**: A modular JAX toolbox for composable experimentation

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>DiffusionGemma generates 256 tokens in parallel per forward pass, delivering up to 4–5× faster inference than autoregressive models</li>
<li>Runs at 1,000+ tokens/sec on H100, 700+ on RTX 5090 — practical for local deployment</li>
<li>Bidirectional attention enables genuine self-correction during generation, overcoming a key LLM limitation</li>
<li>Available now on Hugging Face under Apache 2.0 — free for commercial and research use</li>
<li>Quality currently trails standard Gemma 4; optimized for speed-critical local workflows, not production cloud serving</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Downloads</strong><br>— <a href="https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/" target="_blank" rel="noopener noreferrer">Google Blog: Introducing DiffusionGemma (June 10, 2026)</a><br>— <a href="https://deepmind.google/models/gemma/diffusiongemma/" target="_blank" rel="noopener noreferrer">Google DeepMind: DiffusionGemma Model Page</a><br>— <a href="https://ai.google.dev/gemma/docs/diffusiongemma" target="_blank" rel="noopener noreferrer">Google AI for Developers: DiffusionGemma Developer Guide</a><br>— <a href="https://huggingface.co/google/diffusiongemma-26B-A4B-it" target="_blank" rel="noopener noreferrer">Hugging Face: Download DiffusionGemma 26B A4B IT</a></div></div>
