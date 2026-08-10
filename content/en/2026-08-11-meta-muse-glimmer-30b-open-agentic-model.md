---
title: "Meta Releases 'Muse Glimmer,' a 30B Open Agentic Model That Runs on Your Laptop"
summary: "Meta Superintelligence Labs released Muse Glimmer, a 30-billion-parameter agentic model, under Apache 2.0 on August 10. Distilled from the closed flagship Muse Spark, it runs fully offline on a single 24GB consumer GPU or a Mac thanks to 4-bit quantization."
category: "ai-news"
date: "2026-08-11"
readingTime: 6
tags: ["Meta", "open-weights", "AI agents", "local LLM", "Muse Glimmer"]
---

<div class="article-tldr">
On August 10, Meta Superintelligence Labs released <strong>Muse Glimmer</strong>, a 30-billion-parameter agentic model, as open weights under the permissive Apache 2.0 license. Distilled from the closed flagship Muse Spark, it is compressed to roughly 4-bit precision so it fits under 20GB and runs offline on a single 24GB consumer GPU or an M4/M5 Max Mac. It targets local agents that call tools, write code, and read screenshots — and it lands as Zuckerberg pushes Washington to loosen rules on open-source AI.
</div>

Meta has shipped an agentic model that runs on personal hardware without a cloud call. Released on August 10 by Meta Superintelligence Labs, **Muse Glimmer** is a 30-billion-parameter (30B) multimodal model whose weights went straight to Hugging Face under Apache 2.0. The story here is not the parameter count but the deployment target: where most frontier models depend on data centers and network access, Glimmer is built to run always-on and offline on one consumer GPU or a single laptop.

## A 'small flagship' distilled from Muse Spark

Glimmer was not trained from scratch. It is a compressed version of Meta's closed top-tier model, **Muse Spark**, transferred through logit distillation. Meta built it in three phases: pre-training used logit distillation on Muse Spark's outputs; mid-training added longer-context, agent-heavy data with richer reasoning traces; and post-training combined supervised fine-tuning with on-policy distillation and reinforcement learning across general, reasoning, coding, and agentic domains.

The result puts part of the closed Spark's capability into a downloadable form. Spark stays closed-weight, while only the smaller Glimmer can be downloaded, fine-tuned, and self-hosted.

<div class="article-stats">
<strong>Model size</strong> 30B parameters (incl. vision tower), dense causal transformer<br/>
<strong>License</strong> Apache 2.0 (commercial use and modification allowed)<br/>
<strong>Context</strong> 131,072+ tokens · knowledge cutoff 2026-01-04<br/>
<strong>I/O</strong> text + image input, text output · 100+ languages
</div>

## How Meta squeezed 30B into 24GB

At full precision a 30B model needs over 55GB of memory — more than any consumer GPU offers. Meta quantized the weights to roughly 4-bit, bringing the language model under 20GB. The remaining headroom holds the perception encoder for image understanding, the KV cache, and a drafter model for faster inference, all inside a 24GB or 32GB envelope. Two quantized builds ship:

| Build | Target VRAM | Avg. degradation |
|---|---|---|
| K-Quant-Dynamic | 32GB | 0.2% |
| K-Quant-17GB | 24GB | 1.0% |

Degradation is averaged over accuracy metrics across 15 common benchmarks; Meta says agentic tasks see minimal to no loss. Speed comes from DFlash, a block-level speculative decoding scheme: a drafter proposes a 16-token block that the main model verifies in parallel. That lifts throughput from 74.9 to 233.4 tokens/sec on an RTX 5090 (a 3.1x speedup), 26.6 to 50.2 on an M5 Max, and 23.7 to 37.8 on an M4 Max.

## Benchmarks: strong on agents and reasoning, weaker on computer use

Meta compared Glimmer against same-class models Gemma4-31B and Qwen3.6-27B. Glimmer led MCP Atlas at 75.5 versus 54.2 and 62.5, and also led on DeepSearch QA (74.6), SWE-Bench Pro (51.2), and reasoning benchmarks including AIME 2026 (94.7) and IFBench (77.0). It trailed on tasks that directly drive a screen or terminal, where Qwen3.6-27B led OSWorld-Verified (75.6 vs. Glimmer's 65.9) and TerminalBench 2.1. In short: strong on agentic orchestration and reasoning, still weak on computer-use work.

<div class="article-callout tip">
For practitioners, the real question is less about benchmark wins than about what you can move offline or on-prem. Local agents in healthcare, legal, financial services, and the public sector — where data residency, offline operation, or latency rule out a cloud call — are the first candidates. Meta advises adding system-level guardrails rather than exposing the model as a bare endpoint.
</div>

## Ecosystem and context

The weights are downloadable now from Hugging Face, with rolling support for local and edge frameworks (Ollama, LM Studio, llama.cpp, ExecuTorch, MLX), scaled serving (vLLM, SGLang), and hosting partners such as Together AI, Fireworks AI, and OpenRouter. Hardware optimization is underway with AMD, Arm, Dell, Intel, and NVIDIA.

The launch arrived as Zuckerberg urged the U.S. to remove barriers to open-source AI, feeding an American debate over whether increasingly capable models should be freely distributed or kept under tighter control. Meta effectively answered with a concrete artifact: a downloadable 30B agent model. On safety, Meta stated that Glimmer does not meet the "Frontier AI" definition in its Advanced AI Scaling Framework, rating chem/bio, cyber, and loss-of-control risk at moderate or lower.

<div class="article-keypoints">
<ul>
<li>Meta released the 30B agentic model Muse Glimmer as Apache 2.0 open weights on August 10.</li>
<li>Distilled from the closed Muse Spark; 4-bit quantization lets it run fully offline on a 24GB consumer GPU or a Mac.</li>
<li>DFlash speculative decoding delivers a 3.1x speedup (233 tok/s) on an RTX 5090.</li>
<li>Leads on MCP Atlas, DeepSearch QA, and SWE-Bench Pro; trails Qwen3.6-27B on OSWorld and terminal tasks.</li>
<li>Lands amid Zuckerberg's push to loosen open-source AI rules, reigniting the U.S. openness debate.</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model" target="_blank" rel="noopener">Meta AI Research — Introducing Muse Glimmer (official announcement)</a><br/>
<a href="https://huggingface.co/collections/meta-models/muse-glimmer" target="_blank" rel="noopener">Hugging Face — Muse Glimmer model weights</a><br/>
<a href="https://techcrunch.com/2026/08/10/metas-new-glimmer-ai-model-offers-a-hint-at-zuckerbergs-personal-intelligence-vision/" target="_blank" rel="noopener">TechCrunch — Meta's new Glimmer AI model</a><br/>
<a href="https://www.engadget.com/2233312/metas-open-source-muse-glimmer-model-can-run-on-a-single-computer/" target="_blank" rel="noopener">Engadget — Muse Glimmer runs on a single computer</a>
</div>
