---
title: "DeepSeek Open-Sources DeepInfer, Its Production Inference Engine — Blackwell and Ascend 950 Only, No KV Cache Layer"
summary: "On October 20, 2026, DeepSeek published DeepInfer, the inference framework behind its own services, on GitHub under Apache 2.0. It supports one model, DeepSeek-V4.1-Flash, on two hardware targets: NVIDIA SM100 (Blackwell) GPUs and Huawei Ascend 950 NPUs. DeepSeek also disclosed operating figures, including 155 trillion tokens per day on a single cluster and $38 of revenue per GPU-hour, all self-reported. The release leaves out the KV cache system, prefill/decode disaggregation, and replica load balancing. This is an analysis of public materials covering what the release changes for self-hosters, API users, and U.S. organizations."
category: "ai-news"
date: "2026-10-21"
readingTime: 6
tags: ["DeepSeek", "DeepInfer", "LLM inference", "open source", "DeepSeek-V4.1-Flash", "Blackwell"]
---

<div class="article-tldr">
DeepSeek released <strong>DeepInfer</strong>, the engine that serves its production traffic, under the <strong>Apache 2.0</strong> license on October 20. It currently runs only <strong>DeepSeek-V4.1-Flash</strong>, and the README lists only <strong>NVIDIA SM100 (Blackwell)</strong> GPUs and <strong>Huawei Ascend 950</strong> NPUs as supported hardware. A companion deployment document says one DeepSeek cluster serves <strong>155 trillion tokens a day</strong> and earns <strong>$38 per GPU-hour</strong> at off-peak prices. What shipped is an offline inference engine: the <strong>KV cache system, prefill/decode disaggregation, and cross-replica load balancing are not included</strong>. Hopper (H100/H200) and older GPUs are not on the supported list.
</div>

This piece is an analysis of public materials: DeepSeek's GitHub repository and deployment notes, the Hugging Face model card, DeepSeek's API pricing page, and press coverage. We did not build the code or reproduce any benchmark.

## Who should care

- **Teams self-hosting open-weight models** who want to see how a frontier lab actually serves a 763B-parameter MoE model at scale.
- **Inference and platform engineers** working on vLLM or SGLang stacks, since DeepInfer descends from vLLM and documents its production tricks.
- **GPU clouds and neoclouds with B200/GB200 capacity**, who can now benchmark DeepSeek's own serving path against their current stack.
- **U.S. public-sector teams and contractors**, who need to separate "open-source code we run ourselves" from "DeepSeek products and services" in their compliance reviews.

## What DeepSeek actually released

The <a href="https://github.com/deepseek-ai/DeepInfer" target="_blank" rel="noopener">DeepInfer repository</a> describes the project as a "high-performance, large-scale inference framework for DeepSeek models" and says this release provides "offline inference with the core features needed for serving at scale." The acknowledgments say it was built primarily on vLLM, with inspiration from SGLang and TensorRT-LLM.

<div class="article-stats">
<strong>Announced</strong> Oct 20, 2026 (DeepSeek's X account and GitHub, per press reports)<br/>
<strong>License</strong> Apache 2.0 for the code; MIT for the V4.1-Flash weights<br/>
<strong>Models</strong> DeepSeek-V4.1-Flash (default checkpoint V4.1-Flash-1017)<br/>
<strong>Hardware</strong> NVIDIA SM100 GPUs, Huawei Ascend 950 NPUs<br/>
<strong>Build requirements</strong> Linux, GCC 13+, Python 3.12, CUDA 13 or CANN 9.2<br/>
<strong>Kernels</strong> FlashMLA, DeepGEMM, DeepEP, TileKernels, DeepSelect, custom TileLang kernels<br/>
<strong>Not included</strong> KV cache system, prefill/decode disaggregation, DP replica load balancing
</div>

Feature-wise, the README lists attention data parallelism with MoE expert parallelism and load balancing (EP + EPLB), a speculative decoding scheme called DSpark that uses a confidence signal to decide which draft tokens to verify, bounded replay to cut prefill work around sliding-window attention, asynchronous scheduling, and structured output via regex, JSON schema, or EBNF grammars. Batch-invariant inference and deterministic sampling are documented as <strong>NVIDIA-only</strong>.

The target model's <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank" rel="noopener">Hugging Face card</a> lists a 763B-parameter model with a recommended 1M-token context, with both repository and weights under MIT. DeepSeek also published <a href="https://github.com/deepseek-ai/deepseek-recipe" target="_blank" rel="noopener">deepseek-recipe</a>, which tokenizes requests the same way its official API does, so self-hosted output formatting can match the hosted service.

## The numbers DeepSeek disclosed (self-reported)

The most unusual part of the release is a <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/doc/inference_deployment_qa.md" target="_blank" rel="noopener">deployment Q&A document</a> that describes DeepSeek's production topology and economics. None of these figures have been independently audited.

| Item | DeepSeek's stated figure |
|---|---|
| Daily volume | 155 trillion tokens per day on a single cluster |
| Revenue | $38 per GPU-hour at off-peak ("valley") pricing |
| Smallest efficient unit | 64 prefill GPUs + 64 decode GPUs (roughly 1:1) |
| KV cache retention | Goal of 72+ hours, on a 3FS cluster with ~100 PiB of SSD |
| Dynamic speculative verification | +4–7% throughput at ~60 concurrent sequences per rank |
| Open vs. internal kernels | Public FlashMLA decode kernel 5–10% slower; end-to-end gap at most 5% |

The README's Pareto charts were measured on 4 SM100 GPUs for prefill and 64 for decode. In other words, the charts assume a multi-node Blackwell setup, and the economics describe a deployment of at least 128 GPUs, not a single node.

## Unconfirmed or forward-looking

- **Hopper and older GPUs**: The README names only SM100 and Ascend 950. Whether DeepInfer builds or performs well on H100/H200 or A100 is **unconfirmed**.
- **Missing pieces**: SiliconANGLE reports DeepSeek said the KV cache and load-balancing code is tightly coupled to internal infrastructure, and that future models' inference code will land in the same repository. No timeline was given.
- **Federal context**: SiliconANGLE and The Next Web both reported that, a day before the release, the U.S. government ordered federal civilian agencies to remove DeepSeek products. We could not locate the directive's text for this article, so its scope as applied to self-hosted Apache-licensed code is **unconfirmed**.
- **Independent benchmarks**: As of publication there are no third-party reproductions of DeepSeek's charts.

## What it means in practice

For most teams, DeepInfer is **a reference implementation first and a drop-in engine second**. Engineers running vLLM or SGLang get a documented look at how DeepSeek handles wide expert parallelism, confidence-gated speculative decoding, and prefill reduction in production. The Next Web reports the vLLM project said it would fold ideas from DeepInfer into its own V4.1-Flash support, so many users may benefit indirectly without switching engines.

What it does not do is make small-scale self-hosting cheap overnight. The disclosed economics depend on 128-GPU deployment units plus a KV cache layer that was not released. A team with a handful of GPUs is still better served by the vLLM and SGLang paths listed on the model card.

For API users, the <a href="https://api-docs.deepseek.com/quick_start/pricing" target="_blank" rel="noopener">pricing page</a> lists V4.1-Flash at $0.15–$0.30 per million cache-miss input tokens and $0.60–$1.20 per million output tokens. Peak hours are weekdays 01:00–04:00 and 06:00–10:00 UTC, which works out to roughly 9 p.m.–midnight and 2–6 a.m. Eastern (6–9 p.m. and 11 p.m.–3 a.m. Pacific) while daylight time is in effect. Most of the U.S. workday therefore already falls in the half-price off-peak window.

<div class="article-callout tip">
<strong>What you can do now</strong><br/>
1. <strong>Check your hardware first</strong>: If you are not on SM100 (B200/GB200) or Ascend 950, treat DeepInfer as reading material and keep serving V4.1-Flash through vLLM or SGLang.<br/>
2. <strong>Mine the docs</strong>: Read the README feature list and the deployment Q&A before the code. The speculative-verification and prefill-reduction sections are the most portable ideas.<br/>
3. <strong>Reproduce before you believe</strong>: Blackwell owners can run the repo's sweep script (examples/sweep) on their own cluster and compare against their current engine rather than relying on DeepSeek's charts.<br/>
4. <strong>Separate code from service in compliance reviews</strong>: Self-hosted Apache 2.0 code and the DeepSeek app or API involve different data flows. Government teams and contractors should get guidance from their agency or counsel before adopting either.<br/>
5. <strong>Watch the repo</strong>: The KV cache and disaggregation pieces are what would make DeepSeek's economics reproducible. Their release, if it happens, is the next milestone to track.
</div>

## Limitations

This article relies on DeepSeek's GitHub repository (README, deployment Q&A, license), the Hugging Face model card, DeepSeek's API pricing page, and press reports checked on October 20–21. Throughput, revenue, and performance figures are DeepSeek's own. Support for older GPUs, the scope of the reported federal directive, and third-party benchmark results could not be confirmed. API prices can change.

<p><em>Last verified 2026-10-21.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/deepseek-ai/DeepInfer" target="_blank" rel="noopener">DeepSeek on GitHub — DeepInfer repository and README</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/doc/inference_deployment_qa.md" target="_blank" rel="noopener">DeepSeek on GitHub — inference deployment Q&A</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/deepseek-ai/DeepInfer/blob/main/LICENSE" target="_blank" rel="noopener">DeepInfer Apache 2.0 license text</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/deepseek-ai/deepseek-recipe" target="_blank" rel="noopener">DeepSeek on GitHub — deepseek-recipe</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank" rel="noopener">DeepSeek on Hugging Face — V4.1-Flash-1017 model card</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://api-docs.deepseek.com/quick_start/pricing" target="_blank" rel="noopener">DeepSeek API docs — models and pricing</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://siliconangle.com/2026/10/20/deepseek-open-sources-deepinfer-the-inference-framework-behind-its-production-services/" target="_blank" rel="noopener">SiliconANGLE — DeepInfer release and background (2026-10-20)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://thenextweb.com/news/deepseek-deepinfer-open-source-inference-engine" target="_blank" rel="noopener">The Next Web — cost implications and vLLM response (2026-10-20)</a>
</div>

<div class="article-keypoints">
<ul>
<li>DeepSeek open-sourced DeepInfer under Apache 2.0 on Oct 20; it serves only DeepSeek-V4.1-Flash for now</li>
<li>Supported hardware is NVIDIA SM100 (Blackwell) and Huawei Ascend 950; Hopper support is unconfirmed</li>
<li>Self-reported figures: 155T tokens/day per cluster, $38 revenue per GPU-hour at off-peak prices</li>
<li>KV cache, prefill/decode disaggregation, and replica load balancing were held back</li>
<li>Small teams should stay on vLLM/SGLang; U.S. API users already sit mostly in the off-peak window</li>
</ul>
</div>
