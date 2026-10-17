---
title: "NVIDIA Nemotron 3.5 Super VL: a Commercially Licensed 120B Open Multimodal Model for Agents — What the Numbers Do and Don't Show"
summary: "On October 15, 2026, NVIDIA released Nemotron 3.5 Super VL, an open-weight mixture-of-experts model (120B total, 12B active parameters) that reads text, images, documents and short video, with up to a 1M-token context and the commercial-use OpenMDW-1.1 license. Most performance figures are NVIDIA's own, and the model scores 26 on the Artificial Analysis Intelligence Index, well behind top closed models. This analysis of public materials covers hardware needs, hosted API prices, licensing and how to evaluate it."
category: "ai-news"
date: "2026-10-17"
readingTime: 6
tags: ["NVIDIA", "Nemotron", "Nemotron 3.5 Super VL", "open weights", "multimodal", "AI agents"]
---

<div class="article-tldr">
NVIDIA released <strong>Nemotron 3.5 Super VL</strong> on October 15, 2026. It is an open-weight mixture-of-experts model with <strong>120B total and 12B active parameters</strong>, accepting text, images and up to two minutes of video, with a context window of <strong>up to 1M tokens</strong>. The <strong>OpenMDW-1.1</strong> license allows commercial use. NVIDIA claims up to 5x the agentic throughput of similar-size open models, but third-party scoring is modest: <strong>26</strong> on the Artificial Analysis Intelligence Index versus 58 for the leading closed model. Think of it as a fast, customizable model for NVIDIA hardware, not a frontier-model replacement.
</div>

This is an analysis of public materials: NVIDIA's technical blog and model cards, a hosted-API listing, and press coverage. We did not run the model or reproduce any benchmark.

## Who should care

- **Teams building document, receipt, chart or PDF agents** that must keep data on their own infrastructure for compliance reasons.
- **Organizations already on Hopper or Blackwell GPUs** (H100, H200, B200, GB200, DGX Spark), since NVIDIA shipped a 4-bit NVFP4 build tuned for that hardware.
- **Developers who just want an API**: several hosts listed paid endpoints on launch day.
- **Anyone planning to fine-tune**: NVIDIA published datasets, training recipes and RL environments alongside the weights.

## What is confirmed

NVIDIA's <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/" target="_blank" rel="noopener">developer blog post</a> describes a single model combining reasoning, instruction following and tool use with image, document and video understanding, distilled from the larger Nemotron 3 Ultra.

<div class="article-stats">
<strong>Released</strong> October 15, 2026<br/>
<strong>Architecture</strong> Hybrid Mamba-2/Transformer MoE, 120B total / 12B active, 512 routed experts per MoE layer<br/>
<strong>Inputs</strong> Text, JPEG/PNG images, MP4 video up to 2 minutes; text output<br/>
<strong>Context</strong> Up to 1M tokens, shared by input and output<br/>
<strong>License</strong> OpenMDW-1.1, commercial and non-commercial use<br/>
<strong>Builds</strong> BF16 (for customization), NVFP4 (for optimized deployment)<br/>
<strong>BF16 deployment</strong> 4x H100 or 2x GB200, Linux, vLLM or SGLang
</div>

The <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16" target="_blank" rel="noopener">BF16 model card</a> lists 4x H100 or 2x GB200 for deployment. The "single GPU" framing in NVIDIA's blog refers to the <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4" target="_blank" rel="noopener">NVFP4 checkpoint</a> on NVIDIA hardware such as DGX Spark. On Blackwell it runs 4-bit weights and activations; on earlier GPUs only the weights are 4-bit.

The license text is published as <a href="https://github.com/OpenMDW/OpenMDW/blob/main/1.1/LICENSE.OpenMDW-1.1" target="_blank" rel="noopener">OpenMDW-1.1</a>, and the <a href="https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard" target="_blank" rel="noopener">build.nvidia.com model card</a> says the model is ready for commercial or non-commercial use. NVIDIA's hosted trial endpoint is governed separately by its API Trial Terms of Service.

Distribution covers Hugging Face, ModelScope, OpenRouter, NVIDIA NIM containers on NGC, and the major clouds: Amazon SageMaker JumpStart, Google Cloud, Microsoft Foundry and OCI. NVIDIA also shipped Bolt 74B-A9B, a local model that fits in 24GB of memory; a 4GB Bolt E4B is reported for October 23.

## Performance claims: mostly NVIDIA's own

| Benchmark | NVIDIA-reported result |
|---|---|
| CharXiv reasoning | 80.8% (84% with Python) |
| SWE-bench Verified | 71.10 |
| SWE-bench Pro | 51.78 |
| Terminal-Bench 2.1 | 60.67 |
| OSWorld-Verified | 51.14 |
| BrowseComp | 78 |
| Agentic throughput | Up to 5x similar-size open models on one GPU |

Some results were produced with NVIDIA's NeMo Gym or internal scaffolding, according to the model card, so they are not all directly comparable with other vendors' numbers.

Independent signals point in two directions. <a href="https://the-decoder.com/nvidias-nemotron-3-5-super-vl-is-an-open-model-built-to-run-enterprise-ai-agents-nonstop/" target="_blank" rel="noopener">The Decoder</a> reports the 26-point Artificial Analysis score, far below the top closed model's 58, and notes the model is slightly less accurate than some rivals on SWE-bench Pro. The same report cites EXO Labs finding that on DGX Spark no other tested model was both more accurate and faster. The Decoder also calls NVIDIA's open-model push self-serving, since getting the best speed effectively means buying NVIDIA hardware.

NVIDIA's blog highlights customer results: Scale AI cut inference cost 40x and latency 5x on vendor-credit processing, and Ramp cut receipt-extraction latency 10x. These come from task-specific post-training and say little about the base model on your workload.

## Unconfirmed or still open

- **Language coverage**: The model card gives no supported-language list. NVIDIA emphasized Indic languages, releasing a 2.8T-token dataset across 22 Indian languages. Quality in other languages is unconfirmed.
- **OCR beyond English and Chinese**: OCRBench v2 results are published only for English (68.12) and Chinese (59.15).
- **Cloud regions**: Which regions on each cloud host the model was not stated.
- **Bolt E4B**: The October 23 date comes from press reports, not a dated NVIDIA product page we could cite.

## Cost and what it means for buyers

The weights are free. Hosted pricing on <a href="https://openrouter.ai/nvidia/nemotron-3.5-super-vl" target="_blank" rel="noopener">OpenRouter</a> ranged on launch week from $0.10 input / $0.40 output per million tokens (Crusoe, DeepInfra) to $0.25 / $1.25 (Venice), with Together and CoreWeave in between. That is cheap next to frontier closed APIs. But the Intelligence Index gap means you are buying speed, privacy and tunability, not top-tier general reasoning.

Self-hosting changes the math. Running BF16 needs four H100s, and the headline single-GPU speed assumes Blackwell's 4-bit math. On A100-class or older hardware, expect less than the published throughput.

<div class="article-callout tip">
<strong>What you can do now</strong><br/>
1. <strong>Start with a hosted API</strong>: run 20 to 50 of your real documents, receipts or charts through an OpenRouter endpoint and score extraction accuracy before buying any hardware.<br/>
2. <strong>Compare on your task</strong>: test it against the model you use today on the same set. The 26-point index score says little about narrow extraction work, in either direction.<br/>
3. <strong>Check your GPUs</strong>: confirm whether you have Hopper or Blackwell, then choose between NVFP4 (deployment) and BF16 (fine-tuning).<br/>
4. <strong>Read the license</strong>: have counsel review OpenMDW-1.1, and review NVIDIA's trial API terms separately before any production use.<br/>
5. <strong>Protect data in the pilot</strong>: send only non-sensitive samples to third-party hosts until you move in-house.
</div>

## Limitations

This piece relies on NVIDIA's October 15 blog post, the Hugging Face and build.nvidia.com model cards, OpenRouter's listing and press coverage. Benchmarks and customer results are vendor-reported. Hosted prices change often. Independent evaluations are still limited a few days after release.

<p><em>Last verified 2026-10-17.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/" target="_blank" rel="noopener">NVIDIA Technical Blog — Nemotron 3.5 Super VL announcement (2026-10-15)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16" target="_blank" rel="noopener">NVIDIA on Hugging Face — BF16 model card</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4" target="_blank" rel="noopener">NVIDIA on Hugging Face — NVFP4 model card</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard" target="_blank" rel="noopener">build.nvidia.com — model card and license terms</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/OpenMDW/OpenMDW/blob/main/1.1/LICENSE.OpenMDW-1.1" target="_blank" rel="noopener">OpenMDW-1.1 license text</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://openrouter.ai/nvidia/nemotron-3.5-super-vl" target="_blank" rel="noopener">OpenRouter — model page and per-provider prices (platform's own listing)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://the-decoder.com/nvidias-nemotron-3-5-super-vl-is-an-open-model-built-to-run-enterprise-ai-agents-nonstop/" target="_blank" rel="noopener">The Decoder — Intelligence Index score and hardware lock-in analysis (2026-10-15)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://interestingengineering.com/ai-robotics/nvidia-nemotron-35-super-vl-5x-faster" target="_blank" rel="noopener">Interesting Engineering — Super VL and Bolt release timing (2026-10-15)</a>
</div>

<div class="article-keypoints">
<ul>
<li>NVIDIA released Nemotron 3.5 Super VL on October 15: open-weight MoE, 120B total / 12B active, up to 1M-token context</li>
<li>OpenMDW-1.1 license allows commercial use; BF16 and 4-bit NVFP4 builds published</li>
<li>BF16 deployment needs 4x H100 or 2x GB200; the single-GPU claim assumes NVFP4 on NVIDIA hardware</li>
<li>Benchmarks are mostly NVIDIA's; Artificial Analysis scores it 26 vs. 58 for the top closed model</li>
<li>Hosted API from about $0.10/$0.40 per million tokens — pilot on your own documents before committing</li>
</ul>
</div>
