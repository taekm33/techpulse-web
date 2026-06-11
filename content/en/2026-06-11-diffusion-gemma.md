---
title: "DiffusionGemma: Google's Open Model That Generates Text 4× Faster"
summary: "Google has released DiffusionGemma, an experimental open model that applies image diffusion techniques to text generation. It generates entire 256-token blocks simultaneously, achieving up to 4× faster inference on dedicated GPUs compared to autoregressive models."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["DiffusionGemma", "Google", "Text Diffusion", "Open Source AI", "LLM Inference"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Google released DiffusionGemma on June 10, 2026. This 26B Mixture-of-Experts model generates text via diffusion rather than token-by-token autoregression, achieving 1,000+ tokens/sec on a single NVIDIA H100 and 700+ on an RTX 5090. Released under Apache 2.0 on Hugging Face. Best suited for local, low-concurrency inference where latency matters more than throughput.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/r305-aQTaU0" title="Text Diffusion — Brendan O'Donoghue, Google DeepMind" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">4×</span><span class="article-stats__label">faster than autoregressive LLMs</span></div>
  <div class="article-stats__item"><span class="article-stats__value">1,000+</span><span class="article-stats__label">tokens/sec on H100</span></div>
  <div class="article-stats__item"><span class="article-stats__value">26B</span><span class="article-stats__label">total parameters (MoE)</span></div>
  <div class="article-stats__item"><span class="article-stats__value">3.8B</span><span class="article-stats__label">active params at inference</span></div>
</div>

## The Core Idea: Treating Text Like an Image

For years, image generation has been dominated by diffusion models — systems that start from random noise and iteratively refine it into a coherent picture. DiffusionGemma applies this same paradigm to language.

A traditional LLM is a typewriter. It produces one token at a time, left to right. Each step requires streaming the model's full weights and KV cache through GPU memory — a bandwidth-bound process that leaves compute underutilized, especially for a single user running locally.

DiffusionGemma flips this:

1. **The canvas**: The model initializes a block of 256 tokens as random noise placeholders.
2. **Iterative refinement**: Multiple forward passes progressively "denoise" the block, locking in confident tokens and using them as context for the rest.
3. **Convergence**: The full paragraph emerges coherently in far fewer memory transfers than autoregression requires.

By doing 24 passes to generate 256 tokens instead of 256 individual passes, DiffusionGemma performs roughly 10× fewer memory transfers — translating directly into higher tokens per second on memory-bandwidth-constrained hardware.

## Bidirectional Attention: Self-Correction During Generation

Because every token in the 256-token canvas attends to every other token simultaneously, DiffusionGemma can do something autoregressive models fundamentally cannot: **correct its own mistakes in real time**.

In a demo from Google DeepMind researcher Brendan O'Donoghue, the model was given a multi-step arithmetic problem with the answer of 39. After the first forward pass, it had written "60." After the second pass — having seen more of its own reasoning — it changed to "49." By the third pass, it had completed the full reasoning chain and corrected itself to "39." Both GPT-4o and Gemini 2.5 Flash got the same problem wrong and stuck with their incorrect answers.

This bidirectional reasoning isn't just useful for math. It enables genuinely new application patterns:

- **Code infilling**: Fix specific lines in-place without regenerating surrounding context
- **Inline editing**: Insert a paragraph into existing text, coherently constrained by what comes before and after
- **Adaptive compute**: The model naturally spends more denoising steps on harder prompts and fewer on easy ones — measured internally, harder evals consistently triggered longer generation times

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Best Use Cases</strong><br>DiffusionGemma shines in <strong>local, single-user, low-latency</strong> scenarios: real-time code editing, voice-driven coding, interactive chat, and rapid prototyping. For high-QPS cloud serving with large batches, standard autoregressive Gemma 4 models remain more cost-efficient due to better hardware utilization at scale.</div>
</div>

## Model Specs and Hardware Support

| Feature | DiffusionGemma | Standard Gemma 4 (Autoregressive) |
|---------|---------------|----------------------------------|
| Inference speed (single GPU) | Up to 4× faster | Baseline |
| Batch serving (cloud) | Higher cost per token | More efficient |
| Attention direction | Bidirectional | Causal (left-to-right only) |
| Output quality | Experimental (lower than Gemma 4) | Production standard |
| License | Apache 2.0 | Model-specific |
| Active parameters | 3.8B (from 26B MoE) | Varies |

**Hardware compatibility** spans consumer to enterprise:
- **Consumer GPUs**: RTX 4090, RTX 5090 (quantized for ≤18GB VRAM)
- **Enterprise**: NVIDIA H100, Blackwell, with NVFP4 kernel optimization
- **On-device**: DGX Spark and DGX Station for local workstation deployment

**Supported frameworks**: vLLM (with Red Hat integration), Hugging Face Transformers, MLX. Fine-tuning via Hackable Diffusion (JAX), Unsloth, and NVIDIA NeMo. Cloud deployment through Google Cloud Model Garden and NVIDIA NIM.

## What Can You Build With It?

Low-latency text generation unlocks fundamentally new application categories. Google's internal demos showed:

- A fully generated-on-the-fly Wikipedia clone — HTML and all — where every click generates the next page in real time
- A voice-driven coding session where a developer built a complete to-do app from scratch in 15 seconds by voice
- Sudoku solving after fine-tuning — a task autoregressive models struggle with because DiffusionGemma's bidirectional attention lets it reason about the whole grid at once

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Note on Apple Silicon</strong><br>DiffusionGemma's speedup relies on shifting the inference bottleneck from memory bandwidth to compute throughput. Apple Silicon Macs use unified memory architectures that can remain memory-bandwidth-bound — so the same 4× acceleration may not apply there. Dedicated NVIDIA GPU hardware is required to see the full benefit.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Generates 256-token blocks simultaneously via diffusion — up to 4× faster than token-by-token autoregressive LLMs on dedicated GPUs</li>
<li>Bidirectional attention enables real-time self-correction during generation — a structural advantage over autoregressive models</li>
<li>26B MoE, 3.8B active parameters — fits in ≤18GB VRAM (quantized), accessible on consumer RTX 4090/5090 GPUs</li>
<li>Apache 2.0 license — free to download, use, and fine-tune from Hugging Face</li>
<li>Experimental model — best for speed-critical local workflows; use standard Gemma 4 for production quality requirements</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · How to Get Started</strong><br>— <a href="https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/" target="_blank" rel="noopener noreferrer">Google Blog: Introducing DiffusionGemma</a><br>— <a href="https://developers.googleblog.com/diffusiongemma-the-developer-guide/" target="_blank" rel="noopener noreferrer">Google Developers: DiffusionGemma Developer Guide (vLLM serving, fine-tuning)</a><br>— <a href="https://deepmind.google/models/gemini-diffusion/" target="_blank" rel="noopener noreferrer">Google DeepMind: Gemini Diffusion Research Page</a></div></div>
