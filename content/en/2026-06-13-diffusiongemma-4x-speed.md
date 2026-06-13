---
title: "DiffusionGemma: Google's Open LLM That Writes Text All at Once — 4x Faster Than Autoregressive Models"
summary: "Google DeepMind's DiffusionGemma abandons token-by-token generation in favor of a text diffusion approach that fills 256-token blocks in parallel, achieving 1,000+ tokens per second on H100 GPUs — up to 4x faster than autoregressive LLMs."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["DiffusionGemma", "Google", "TextDiffusion", "OpenSourceAI", "LLMSpeed"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Google DeepMind released <strong>DiffusionGemma</strong> under the Apache 2.0 license on June 10, 2026. Instead of predicting one token at a time, it simultaneously fills a 256-token "canvas" and iteratively refines it — a process borrowed from image diffusion models. The result: 1,000+ tokens per second on a single H100, up to 4x faster than comparable autoregressive LLMs. A quantized version runs on a consumer RTX 4090 (24 GB VRAM) fully offline.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Jy4RgnvruqI" title="DiffusionGemma: the LLM that writes text ALL AT ONCE — live on an RTX 4090" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Why Autoregressive LLMs Have a Speed Ceiling

Every mainstream language model — GPT, Claude, Gemini — generates text using an **autoregressive** loop: predict one token, commit it, then use everything generated so far to predict the next. Each step requires a full forward pass through the network, and most of that pass is spent reading and writing memory rather than doing useful math. The GPU ends up memory-bandwidth-bound, leaving its raw compute largely idle.

DiffusionGemma solves this by shifting the bottleneck from memory bandwidth to **raw compute**. Inspired by text-to-image diffusion models, it places all 256 token slots on a "canvas" at once, makes a rough guess for all of them simultaneously, then refines iteratively — locking in high-confidence tokens each pass and re-sampling the rest. Simple answers converge in ~12 passes; complex reasoning uses up to 48. Because there's no sequential token dependency, GPU utilization jumps dramatically.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">4×</span>
<span class="article-stats__label">Max speed gain vs. autoregressive</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">1,000+</span>
<span class="article-stats__label">Tokens/sec on NVIDIA H100</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">~18 GB</span>
<span class="article-stats__label">VRAM (quantized, consumer GPU)</span>
</div>
</div>

## Architecture: 26B MoE, Only 4B Active Parameters

DiffusionGemma builds on the Gemma 4 26B Mixture-of-Experts (MoE) backbone. Total parameters are 26B, but only **~4B activate per inference step**, keeping the memory footprint small enough to fit on consumer hardware when quantized.

Key technical highlights:

- **Bidirectional attention**: Every token in the 256-slot canvas can attend to every other token simultaneously — the end of a sentence can be resolved before its middle.
- **Multi-canvas generation**: Canvases chain sequentially, enabling long-form outputs beyond 256 tokens.
- **NVFP4 support**: Native 4-bit floating-point on NVIDIA Blackwell GPUs for additional throughput on enterprise hardware.
- **Multimodal inputs**: Accepts text, image, and video inputs (audio not yet supported).

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>Who should use DiffusionGemma?</strong><br>
It's optimized for workflows where <em>generation speed</em> matters most: inline code completion, real-time interactive editing, non-linear text structures. For maximum accuracy — math reasoning, hard coding benchmarks — the standard autoregressive Gemma 4 models still win. Google itself notes DiffusionGemma is "experimental" and not recommended as a production replacement for high-quality tasks.
</div>
</div>

## Benchmark Comparison

| Metric | DiffusionGemma | Gemma 4 (Autoregressive) |
|--------|---------------|--------------------------|
| Speed (H100) | 1,000+ tok/s | ~250 tok/s |
| Speed (RTX 5090) | 700+ tok/s | ~200 tok/s |
| MMLU (general knowledge) | −5 pts vs. baseline | Baseline |
| GPQA (grad-level science) | −9 pts vs. baseline | Baseline |
| HumanEval (coding) | −8 pts vs. baseline | Baseline |
| VRAM (quantized) | ~18 GB | ~18 GB |

The accuracy trade-off is real but modest — and for speed-critical applications, 4x faster generation is often worth it.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>Run it on a single RTX 4090 — 4 steps</strong><br>
1. Download <code>unsloth/diffusiongemma-26B-A4B-it-GGUF</code> (Q4_K_M, ~16 GB)<br>
2. Check out llama.cpp diffusion sampler PR #24423 and build with CUDA<br>
3. Run: <code>llama-cli -m model.gguf -n 2048 -p "your prompt"</code><br>
4. Expect ~100 tok/s, ~19 GB VRAM — fully offline, no API key needed.
</div>
</div>

## What New Applications Does This Unlock?

Google DeepMind's internal demos showed DiffusionGemma powering experiences impossible at autoregressive latencies: a fake Wikipedia where every page is generated on-the-fly as you click, a Reddit clone where AI comments and images appear instantly, an OS-like interface where each click renders the next screen, and a voice-built todo app completed in 15 seconds. These are latency-sensitive, interactive, local-first workflows that become viable when generation speed crosses ~2,000 tokens/sec.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>DiffusionGemma is the first open-weights text diffusion LLM — generating 256 tokens in parallel rather than one at a time.</li>
<li>Up to 4x faster than autoregressive equivalents: 1,000+ tok/s on H100, 700+ on RTX 5090.</li>
<li>Apache 2.0 license — free to download, run locally, and fine-tune.</li>
<li>Accuracy is modestly lower than same-size autoregressive models; best for speed-first use cases.</li>
<li>Quantized version fits on a single consumer RTX 4090 (24 GB VRAM) for fully offline deployment.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Documentation</strong><br>— <a href="https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/" target="_blank" rel="noopener noreferrer">Google Blog: Introducing DiffusionGemma</a><br>— <a href="https://ai.google.dev/gemma/docs/diffusiongemma" target="_blank" rel="noopener noreferrer">Google AI for Developers: DiffusionGemma Developer Docs</a><br>— <a href="https://deepmind.google/models/gemma/diffusiongemma/" target="_blank" rel="noopener noreferrer">Google DeepMind: Model Overview Page</a><br>— <a href="https://huggingface.co/google/diffusiongemma-26B-A4B-it" target="_blank" rel="noopener noreferrer">Hugging Face: Download Model Weights (Apache 2.0)</a></div></div>
