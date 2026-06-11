---
title: "NVIDIA Nemotron 3 Ultra: An Open 550B Model Built for Long-Running Agents"
summary: "NVIDIA's fully open 550B-parameter MoE model delivers 5x faster inference and 30% lower cost than comparable open models, with a 1M-token context window optimized for complex, multi-step agentic workflows."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["nvidia", "nemotron", "open-source", "agents", "reasoning"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> NVIDIA launched <strong>Nemotron 3 Ultra</strong> on June 4, 2026 — a fully open 550B-parameter Mixture-of-Experts model built specifically for long-running AI agents. It delivers up to 5x faster inference and 30% lower cost than comparable open models, features a 1M-token context window, and releases weights, data, and training recipes under the Linux Foundation's OpenMDW-1.1 license.
</div>

<div class="article-stats">
<div class="stat-item"><span class="stat-number">550B</span><span class="stat-label">Total Parameters (55B Active)</span></div>
<div class="stat-item"><span class="stat-number">5×</span><span class="stat-label">Faster Inference vs. Peers</span></div>
<div class="stat-item"><span class="stat-number">1M</span><span class="stat-label">Context Window (Tokens)</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/D8LIIvQVGS4" title="Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## A New Frontier for Open Agentic AI

NVIDIA completed its Nemotron 3 model family on June 4, 2026 with the release of **Nemotron 3 Ultra** — a 550B-parameter open language model designed from the ground up for the demands of real-world agentic AI systems. Unlike general-purpose models scaled up after the fact, Nemotron 3 Ultra was trained with an agent-focused post-training pipeline that prioritizes multi-step planning, tool use, code generation, long-context reasoning, and workflow orchestration.

The defining characteristic of Nemotron 3 Ultra is **complete openness**: NVIDIA releases the base model, post-trained checkpoint, NVFP4-quantized checkpoint, training data, and training recipe — all publicly available on Hugging Face under the Linux Foundation's new OpenMDW-1.1 license.

## The Architecture: LatentMoE Hybrid Mamba-Transformer

The performance gains in Nemotron 3 Ultra come from a novel **LatentMoE** architecture that combines three components:

**Mamba-2 SSM layers**: State Space Models dramatically reduce KV cache memory requirements and improve throughput for long sequences — the primary bottleneck in long-running agent workflows that accumulate tens of thousands of tokens of context.

**Mixture-of-Experts (MoE)**: Despite having 550B total parameters, only 55B are activated per forward pass, keeping per-token compute costs comparable to a ~55B dense model while benefiting from the knowledge of a 550B-scale model.

**Multi-Token Prediction (MTP)**: Predicts multiple tokens per forward pass, improving generation speed for the multi-turn tasks common in agentic systems.

Combined with NVFP4 pre-training (4-bit floating-point quantization), this architecture achieves **5.9× higher throughput** than GLM-5.1-754B-A40B on an 8K input / 64K output configuration.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Reasoning Mode</strong><br>Nemotron 3 Ultra supports configurable reasoning via the chat template. Set <code>enable_thinking=True</code> to activate the internal chain-of-thought trace before the final response — ideal for complex planning tasks. Set it to <code>False</code> for lower-latency conversational use cases. The NVFP4 quantized checkpoint is recommended for production deployments to maximize throughput.</div>
</div>

## Model Specifications

| Property | Value |
|---|---|
| Total Parameters | 550B (55B active) |
| Architecture | LatentMoE: Mamba-2 + MoE + Attention + MTP |
| Context Length | Up to 1,000,000 tokens |
| Pre-training Data | 20 trillion tokens |
| Languages | English, French, Spanish, Italian, German, Japanese, Korean, Hindi, Brazilian Portuguese, Chinese |
| Min GPU Requirement | 16× H100 or 8× H200/GB200 |
| License | OpenMDW-1.1 (Linux Foundation) |
| Release Date | June 4, 2026 |

## Why It Matters for Agentic Workflows

Most frontier-scale models are too slow and expensive for the kind of long-horizon, multi-tool agent tasks that enterprise AI systems require. Nemotron 3 Ultra addresses this directly.

In benchmarks on **SWE-bench** and **Terminal Bench 2.0**, Nemotron 3 Ultra completed tasks using fewer total tokens and fewer tokens per turn than comparable models. This translates to **up to 30% lower cost** for agentic workflows — a meaningful saving when agents run hundreds of turns per task.

The model was also trained using **Multi-Teacher On-Policy Distillation (MOPD)**, which funnels feedback from over ten domain-specific teacher models into a single unified model. This gives Nemotron 3 Ultra strong performance across diverse domains — code, math, science, RAG, tool use — without requiring separate specialized models.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Deployment Options</strong><br>Nemotron 3 Ultra is packaged as an NVIDIA NIM microservice, allowing the same checkpoint to run across Hopper, Blackwell, and Ampere GPU architectures. It's available on AWS JumpStart, Azure, CoreWeave, Together AI, OpenRouter, DeepInfra, and a dozen other inference platforms. Enterprise teams can also deploy on-premises using NVIDIA DGX systems.</div>
</div>

## Available Checkpoints on Hugging Face

Three checkpoints are publicly available:

- **NVFP4** (`NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`): Post-trained + quantized — recommended for production
- **BF16** (`NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`): Full-precision post-trained model
- **Base BF16** (`NVIDIA-Nemotron-3-Ultra-550B-A55B-Base-BF16`): Pre-trained base for custom fine-tuning

All three support the same single-checkpoint deployment approach across GPU architectures. Cookbooks for vLLM, SGLang, and TRT-LLM are available in the NVIDIA developer resources.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>550B-parameter fully open MoE model with weights, data, and training recipe all public</li>
<li>Up to 5.9× faster inference than comparable open models via hybrid Mamba-Transformer architecture</li>
<li>30% lower cost for agentic tasks (fewer total tokens per task completion)</li>
<li>1M-token context window ideal for long-form document and codebase analysis</li>
<li>NVIDIA NIM packaging enables identical deployment across cloud, on-prem, and edge environments</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Resources & Documentation</strong><br>— <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" target="_blank" rel="noopener noreferrer">NVIDIA Technical Blog: Nemotron 3 Ultra Launch Post</a><br>— <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16" target="_blank" rel="noopener noreferrer">Hugging Face: Download Model Weights</a><br>— <a href="https://developer.nvidia.com/topics/ai/nemotron" target="_blank" rel="noopener noreferrer">NVIDIA Developer: Nemotron Hub (cookbooks, fine-tuning guides)</a><br>— <a href="https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-ultra-550b-a55b" target="_blank" rel="noopener noreferrer">NVIDIA NIM API Reference Documentation</a></div></div>
