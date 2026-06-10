---
title: "Xiaomi MiMo UltraSpeed Breaks 1,000 Tokens/Second on a 1-Trillion-Parameter Model"
summary: "Xiaomi and TileRT achieved 1,000+ tokens per second (peak 1,200 TPS) on a 1-trillion-parameter model using a standard 8-GPU commodity node. No custom silicon required. The result comes from three co-designed techniques: FP4 quantization, DFlash speculative decoding, and the TileRT inference engine."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Xiaomi", "MiMo", "AI Inference", "LLM", "Open Source"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Xiaomi launched MiMo-V2.5-Pro-UltraSpeed on June 8, 2026, breaking the 1,000 tokens-per-second barrier on a 1-trillion-parameter model for the first time — using only commodity GPUs. The technique combines FP4 quantization, DFlash speculative decoding, and a purpose-built TileRT inference engine on a single standard 8-GPU node. A developer API trial runs June 9–23; the FP4-DFlash checkpoint is open-sourced on Hugging Face.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/3-6FrkfMbLU" title="Mimo V2.5 Pro — API Pricing and Real World Tests" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Happened

On June 8, 2026, Xiaomi — in collaboration with inference partner TileRT — released **MiMo-V2.5-Pro-UltraSpeed**, achieving what they describe as an industry first: a 1-trillion-parameter large language model decoding at over 1,000 tokens per second on a single standard 8-GPU commodity node, with peak throughput reaching approximately 1,200 tokens per second.

To put those numbers in context: according to Artificial Analysis benchmarks, GPT-5.5 (what most ChatGPT users interact with) runs at about 68 TPS. Claude Opus 4.6 lands around 71 TPS. Gemini Flash, previously among the fastest available models, reaches 192 TPS. MiMo UltraSpeed does 1,000+ — on a model that matches Opus on coding benchmarks.

<div class="article-stats">
<strong>Key Numbers</strong>
<ul>
  <li>🚀 <strong>Decode speed:</strong> 1,000+ TPS (peak ~1,200 TPS in demos)</li>
  <li>📊 <strong>Vs. competitors:</strong> ~15× faster than GPT-5.5 (68 TPS), ~14× faster than Opus 4.6 (71 TPS)</li>
  <li>💻 <strong>Hardware:</strong> Single standard 8-GPU commodity node — no custom silicon</li>
  <li>⚡ <strong>Speedup vs. baseline:</strong> ~10× over standard MiMo-V2.5-Pro API</li>
  <li>💰 <strong>Pricing:</strong> 3× the standard MiMo-V2.5-Pro API rate</li>
</ul>
</div>

## The Three-Layer Technique

Xiaomi calls the approach "extreme model-system codesign." No single technique gets to 1,000 TPS; all three layers working together do.

### 1. FP4 (MXFP4) Quantization

FP4 quantization is applied exclusively to the Mixture-of-Experts (MoE) Expert layers — not the full model. This dramatically shrinks the model's memory footprint and reduces bandwidth overhead. Crucially, the quantization uses Quantization-Aware Training (QAT), which means the model learned to operate in FP4 precision during training, preserving capability close to the full-precision baseline.

### 2. DFlash Speculative Decoding

DFlash is a speculative decoding method based on block-level masked parallel prediction. Instead of generating one token per forward pass, DFlash predicts and verifies an entire masked block of tokens in a single step. In coding benchmarks, it achieves an average accepted token length of 6.30 per step — a significant multiplier over standard autoregressive generation.

### 3. TileRT Inference Engine

TileRT built a custom compilation engine and compute kernels specifically optimized for this combined FP4 + DFlash pipeline. The runtime adapts dynamically to the characteristics of speculative decoding, keeping the GPU fully utilized and eliminating common operator overhead.

| Component | Role | Benefit |
|-----------|------|---------|
| FP4 (MXFP4) Quantization | Compress MoE Expert layers | Lower memory footprint, higher bandwidth |
| DFlash Speculative Decoding | Block-level parallel token prediction | More tokens accepted per step |
| TileRT Inference Engine | Custom compilation + kernels | Removes operator overhead |
| **Combined Result** | Single 8-GPU commodity node | **1,000+ TPS on 1T model** |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Why Inference Speed Is a Paradigm Shift</strong><br>At 1,000 TPS, inference speed stops being a bottleneck and becomes a capability multiplier. You can run dozens of reasoning paths in parallel, power real-time agentic loops, and tackle latency-sensitive workloads — fraud detection, trading signal generation, multi-agent coordination — that were simply impossible at 60–70 TPS. The paradigm shifts from "AI you ask a question" to "AI that works continuously in the background."</div>
</div>

## How It Compares to Custom Silicon

Companies like Cerebras (wafer-scale integration) and Groq (on-chip SRAM custom architecture) have achieved similar extreme inference speeds — but required purpose-built, multi-million-dollar hardware. Xiaomi's key claim is achieving comparable throughput on **commodity GPUs through software co-design alone**, making the approach deployable on standard cloud or on-premises infrastructure.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>UltraSpeed Is a Serving Mode, Not a New Model</strong><br>UltraSpeed is not a new or smaller model. It's a serving mode layered on top of the existing MiMo-V2.5-Pro flagship — accelerating the full 1-trillion-parameter architecture. The model's capabilities remain the same; only how fast it generates output changes. The FP4-DFlash checkpoint, including quantized weights and DFlash parameters, is open-sourced on Hugging Face for community testing and verification.</div>
</div>

## API Trial Details

The UltraSpeed API is available as a limited, application-based trial:

- **Trial window:** June 9 – June 23, 2026 (Beijing time / UTC+8)
- **Pricing:** 3× the standard MiMo-V2.5-Pro API rate
- **Access:** API only; Token Plan not supported
- **Priority:** Enterprises and professional developers with genuine business needs
- **Apply at:** platform.xiaomimimo.com/ultraspeed

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>First-ever 1,000+ TPS decode speed on a 1-trillion-parameter model — achieved with commodity GPUs, not custom silicon</li>
  <li>Three co-designed techniques: FP4 quantization + DFlash speculative decoding + TileRT runtime</li>
  <li>~15× faster than GPT-5.5 and ~14× faster than Claude Opus 4.6 at equivalent task quality</li>
  <li>FP4-DFlash checkpoint open-sourced on Hugging Face for community testing</li>
  <li>Developer API trial open June 9–23 (enterprise and professional dev priority)</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Resources &amp; Docs</strong><br>— <a href="https://github.com/XiaomiMiMo/MiMo" target="_blank" rel="noopener noreferrer">XiaomiMiMo GitHub — official MiMo model repository and technical docs</a><br>— <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM (GitHub) — open-source LLM inference engine compatible with MiMo models</a><br>— <a href="https://pypi.org/project/vllm/" target="_blank" rel="noopener noreferrer">PyPI: vllm — pip install vllm to set up local inference</a></div></div>
