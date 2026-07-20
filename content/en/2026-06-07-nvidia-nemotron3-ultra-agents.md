---
title: "NVIDIA Releases Nemotron 3 Ultra: 550B Open Model Built for Long-Running AI Agents"
summary: "NVIDIA's Nemotron 3 Ultra is a fully open 550B-parameter Mixture-of-Experts model designed to make long-running agent workflows faster and cheaper, delivering 5× higher throughput and 30% lower cost than comparable open models."
category: "ai-news"
date: "2026-06-07"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "Open Source AI", "Agentic AI", "MoE"]
---

<div class="article-tldr">
NVIDIA has launched Nemotron 3 Ultra, a 550B-parameter sparse Mixture-of-Experts model with 55B active parameters during inference. Fully open — weights, data, and training recipes included — it delivers 5× higher throughput than comparable open models and reduces agentic task costs by up to 30%, while achieving SWE-bench Verified scores of 65–70.4%.
</div>

NVIDIA is entering the open frontier model race with a model purpose-built for what most current LLMs struggle with: long, multi-step agent workflows that involve planning, tool calling, sub-agent delegation, output validation, and error recovery across dozens of turns. Nemotron 3 Ultra isn't optimized for single-turn chat benchmarks — it's optimized for the messy, extended reality of production agentic systems.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Performance Numbers That Matter for Agents

<div class="article-stats">

| Metric | Figure | Comparison |
|--------|--------|------------|
| Total parameters | 550B | 55B active at inference |
| Throughput gain | 5× | vs. comparable open models |
| Cost reduction | Up to 30% | SWE-bench & Terminal Bench 2.0 |
| SWE-bench Verified | 65–70.4% | Consistent across frameworks |

</div>

The 30% cost reduction is particularly meaningful in agent contexts. Because agentic loops accumulate token costs with every turn, a model that completes the same task using fewer tokens per turn — as Nemotron 3 Ultra does in benchmark testing — creates compounding savings at scale. NVIDIA's data shows this holds across Pi, OpenHands, Hermes, OpenCode, and Mini SWE Agent frameworks, suggesting the efficiency gains aren't harness-specific.

<div class="article-callout tip">
**Deployment options**: Nemotron 3 Ultra is available via Perplexity Pro, OpenRouter, Anaconda, and build.nvidia.com API. Download weights directly from Hugging Face, spin up an optimized instance via NVIDIA NIM, or deploy through AWS JumpStart, Amazon EKS, Google Cloud, Microsoft Foundry, CoreWeave, Together AI, and a dozen other cloud providers. Starter cookbooks are available to get running in minutes.
</div>

## Four Architectural Innovations Driving the Numbers

**Hybrid Mamba-Transformer layers**: Mamba layers handle long-context efficiency for the extended sequences that agent workflows generate, while Transformer layers preserve precise recall when agents need to retrieve specific facts from large context windows. The combination avoids the attention-vs-efficiency tradeoff that plagues pure transformer models at scale.

**NVFP4 quantization**: A single NVFP4 checkpoint runs across NVIDIA Hopper, Blackwell, and Ampere GPUs — eliminating the multi-checkpoint management complexity of other large models. On Blackwell, NVFP4 delivers up to 5× higher throughput versus BF16 at equivalent interactivity.

**LatentMoE**: More efficient expert routing enables the model to fluidly handle workflows that span reasoning, code generation, tool calls, and domain-specific logic — exactly the mix found in real enterprise agent pipelines.

**Multi-Token Prediction (MTP)**: Predicting multiple future tokens in a single forward pass improves throughput for the long outputs and extended multi-turn exchanges that agent work generates.

<div class="article-callout info">
**Training methodology**: Nemotron 3 Ultra uses Multi-Teacher On-Policy Distillation (MOPD), where more than ten domain-specialized teacher models score the student model's own attempts during training. The pretraining base of 10T tokens was extended with 212B new tokens: 4B synthetic legal tokens (lifting LegalBench from 64.6% to 74.7%), 35B synthesized Wikipedia-based tokens, and 173B refreshed GitHub code tokens. NVIDIA also released 10M new SFT samples, 1M RL tasks, and 15 new RL environments alongside the model.
</div>

## Two Additional Models in the Release

<div class="article-keypoints">

**What's launching alongside Nemotron 3 Ultra**
- **Nemotron 3.5 Content Safety**: A 4B open guardrail model for classifying unsafe, policy-violating, or disallowed content across text, images, and combined inputs — designed as an efficient safety layer for enterprise AI deployments
- **Nemotron 3.5 ASR**: A multilingual automatic speech recognition model supporting 40+ languages in a single checkpoint, with sub-100ms latency for real-time voice orchestration in agentic systems. The English predecessor already powers voice input in GitHub Copilot CLI for 20M+ developers; the multilingual version now brings that architecture to global deployments
- **Open licensing**: All releases adopt OpenMDW-1.1, the Linux Foundation's permissive license for open AI model distributions, covering architecture, parameters, documentation, and software under a single framework

</div>

## Why This Release Matters

The open model landscape has been dominated by Meta's Llama series and Chinese labs such as Alibaba and DeepSeek. NVIDIA's entry with a fully open 550B-parameter model — backed by one of the world's largest GPU and infrastructure ecosystems — shifts the dynamic considerably. Developers can run Nemotron 3 Ultra on NVIDIA-optimized infrastructure from day one, with enterprise-grade tooling, NIM microservices, and a growing list of cloud partners already lined up.

For teams building production agent systems, the combination of frontier accuracy, 5× throughput gains, measurable cost reduction, and fully open weights makes Nemotron 3 Ultra a serious contender for the backbone of the next generation of enterprise AI applications.

<div class="article-callout info">
<strong>Related Reading &middot; Official Sources</strong><br/>
&middot; <a href="https://developer.nvidia.com/nemotron" target="_blank" rel="noopener">NVIDIA Nemotron</a><br/>
&middot; <a href="https://huggingface.co/nvidia" target="_blank" rel="noopener">NVIDIA on Hugging Face</a><br/>
&middot; <a href="https://blogs.nvidia.com/" target="_blank" rel="noopener">NVIDIA blog</a><br/>
</div>
