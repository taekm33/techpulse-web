---
title: "AMD Releases 'Instella-MoE,' a Fully Open MoE Trained Entirely on Its Own GPUs — a Frontier Experiment Without NVIDIA"
summary: "AMD has released Instella-MoE-16B-A3B, a fully open Mixture-of-Experts language model with 16B total and 2.8B active parameters. It was trained end-to-end — from pretraining through reinforcement learning — solely on Instinct MI300X and MI325X GPUs with the ROCm stack, with weights, data mixtures and training code released for every stage. It posts the strongest average among fully open models."
category: "ai-news"
date: "2026-08-02"
readingTime: 6
tags: ["AMD", "open-source-ai", "MoE", "Instinct", "NVIDIA"]
---

<div class="article-tldr">
AMD has released <strong>Instella-MoE-16B-A3B</strong>, a fully open Mixture-of-Experts (MoE) language model. Of its 16 billion total parameters, only 2.8 billion activate per token. Crucially, it was trained from scratch through reinforcement learning entirely on AMD's own Instinct MI300X and MI325X GPUs with the ROCm software stack — no NVIDIA hardware. AMD published weights, data mixtures, training configs and code for every stage, emphasizing full reproducibility.
</div>

AMD has delivered proof that a frontier-class language model can be trained end-to-end on its own hardware and software stack. Announced via the ROCm blog, Instella-MoE calls itself "fully open" — going beyond an open-weights drop to release the training data mixtures, training configurations, intermediate checkpoints and inference code. In effect, it is a direct alternative experiment to NVIDIA's dominant CUDA ecosystem.

## What was released

Instella-MoE is a decoder-only MoE with 27 decoder layers and a hidden size of 2048. Each MoE layer uses a shared-plus-routed design — 2 shared experts and 6 routed experts selected from 64 candidates — activating just 2.8B parameters per token. Pretraining consumed 7.1 trillion tokens of web, code, math and science data, followed by a multi-stage pipeline: mid-training, context extension from 4K to 64K, SFT, DPO and reinforcement learning (RL). AMD uploaded checkpoints from every one of these stages to Hugging Face.

<div class="article-stats">
<strong>Total parameters</strong> 16B (2.8B active per token)<br/>
<strong>Training hardware</strong> AMD Instinct MI300X · MI325X (ROCm)<br/>
<strong>Pretraining tokens</strong> 7.1 trillion<br/>
<strong>Context length</strong> 4K → 64K extended<br/>
<strong>License</strong> Research RAIL (academic / research)
</div>

## Architecture and systems innovations

Two techniques stand out. First, **Gated MLA** (Gated Multi-head Latent Attention) multiplies the multi-head latent attention output by an input-conditioned gate, selectively attenuating low-utility attention responses and increasing expressivity. Second, **FarSkip-Collective** modifies MoE connectivity to overlap communication with computation during expert-parallel training, cutting communication bubbles. AMD reports FarSkip-Collective sped up pretraining by 12.7%, and — paired with the SGLang inference framework — reduced Time to First Token (TTFT) by up to 39.2%. The RL stage ran natively on Instinct GPUs via the open-source Miles RL framework.

## How well does it perform

| Metric | Instella-MoE | Comparison |
|---|---|---|
| Base average | 76.7 (best fully open) | Moonlight-16B-A3B 76.2 · OLMo-3-7B 70.1 |
| WinoGrande | 86.5 (top of evaluated models) | — |
| HumanEval+ | 65.7 | — |
| Think average | 73.22 (best fully open) | Olmo3-7B-Think 71.97 · Gemma-4-E4B 70.47 |
| IFEval (after RL) | 83.70 (from DPO 77.08) | — |

The base checkpoint scored a 76.7 average — the strongest among fully open models — edging out Moonlight-16B-A3B (76.2) and trailing only the open-weight Qwen3.5-4B-Base (79.5). The post-trained Think model hit 73.22, again the best among fully open models. The notable part: it achieves this while activating only 2.8B parameters per token, outperforming dense models such as OLMo-3-7B that activate more than twice as many.

<div class="article-callout tip">
"Fully open" is not the same as "commercially usable." The Instella-MoE weights ship under a <strong>Research RAIL license</strong>, limited to research and academic use. This is not a model you can drop directly into a commercial product.
</div>

## Why it matters

AI training infrastructure has effectively been an NVIDIA CUDA monopoly. Instella-MoE's real message lies less in its benchmark scores than in the demonstration that the entire MoE frontier pipeline — pretraining through RL — runs on AMD's stack without NVIDIA. Releasing the full reproducible recipe alongside open frameworks like Primus, Miles and SGLang is a substantial asset for academia and the open-source community. Open questions remain: the research-only license, a technical report that is still forthcoming, and untested multilingual ability. Even so, as a signal from the No. 2 hardware vendor attempting to break the software lock-in, the symbolism of this release is far from trivial.

<div class="article-keypoints">
<ul>
<li>AMD released a fully open MoE, Instella-MoE-16B-A3B (16B total / 2.8B active), publishing weights, data and code for every training stage.</li>
<li>Trained end-to-end — pretraining through RL — on Instinct MI300X · MI325X + ROCm, with no NVIDIA GPUs.</li>
<li>Base average 76.7 and Think average 73.22 are the best among fully open models, beating larger dense models while activating only 2.8B per token.</li>
<li>Gated MLA and FarSkip-Collective delivered a 12.7% training speedup and up to 39.2% lower TTFT — but the license is research-only (Research RAIL).</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://rocm.blogs.amd.com/artificial-intelligence/instella-moe/README.html" target="_blank" rel="noopener">AMD ROCm Blog — Introducing Instella-MoE</a><br/>
<a href="https://huggingface.co/amd/Instella-MoE-16B-A3B-Base" target="_blank" rel="noopener">Hugging Face — amd/Instella-MoE-16B-A3B-Base</a><br/>
<a href="https://huggingface.co/amd/Instella-MoE-16B-A3B-Think" target="_blank" rel="noopener">Hugging Face — amd/Instella-MoE-16B-A3B-Think</a><br/>
<a href="https://github.com/AMD-AGI/Instella-MoE" target="_blank" rel="noopener">GitHub — AMD-AGI/Instella-MoE (training code)</a>
</div>
