---
title: "Reflection AI Unveils Beam, a 501B Open-Weight MoE — Weights Promised Under Apache 2.0 'Later This Month'"
summary: "Reflection AI announced Beam on October 5, 2026, its first open-weight model: a sparse mixture-of-experts with 501B total and 23B active parameters, aimed at coding, reasoning and agentic work. The company says it matches GLM-5.2 on advanced reasoning benchmarks with 3-4x less inference compute, a claim not yet independently verified. Weights, a technical report and a model card are due later this month under Apache 2.0; for now access is limited to a waitlist. Here is what is confirmed, what is not, and how teams evaluating open models should prepare."
category: "ai-news"
date: "2026-10-07"
readingTime: 6
tags: ["Reflection AI", "Beam", "open-weight models", "MoE", "open source AI"]
---

<div class="article-tldr">
<strong>Reflection AI</strong>, the lab founded by former Google DeepMind researchers, announced <strong>Beam</strong> on October 5, 2026 — its first open-weight model and its first public model release. Beam is a sparse MoE with <strong>501B</strong> total and <strong>23B</strong> active parameters, tuned for coding and agentic tasks. The weights are <em>not</em> downloadable yet: Reflection says they will ship <strong>later this month</strong> under <strong>Apache 2.0</strong>. Every benchmark figure so far comes from the company itself. If you run open models in production, treat this as a "plan your evaluation" moment rather than a "switch now" moment.
</div>

This piece is an analysis of public materials — Reflection's announcement post and press coverage. We have not run the model or reproduced any benchmark.

## Who should care

Three groups. Teams that self-host models for data-residency or compliance reasons. Organizations whose procurement or security policies make Chinese-origin open models (GLM, Qwen, Kimi, DeepSeek) hard to approve — Reflection explicitly frames Beam as advancing "the Western open-weight frontier." And developers choosing a base model for coding agents, where Reflection concentrated its training effort.

## What is confirmed

According to the <a href="https://reflection.ai/blog/introducing-beam" target="_blank" rel="noopener">official announcement</a>:

<div class="article-stats">
<strong>Architecture</strong> Sparse MoE, 501B total / 23B active parameters<br/>
<strong>Pretraining</strong> 23.8T tokens from web and proprietary licensed data<br/>
<strong>RL run</strong> 10.5K NVIDIA GB300 GPUs for four weeks, 100M+ rollouts, ~1.3B sandboxes<br/>
<strong>Context</strong> Effective length extended to 1M tokens in midtraining (company description)<br/>
<strong>Modality</strong> Text-only<br/>
<strong>License</strong> Apache 2.0 (at weights release)<br/>
<strong>Timeline</strong> Weights, technical report, model card and developer artifacts "later this month"
</div>

Reflection says Beam is "undergoing final red-teaming and evaluations" and that an early version is available to "a select group of users" via a waitlist on <a href="https://platform.reflection.ai/" target="_blank" rel="noopener">its platform</a>. At release, it plans to ship documentation and a full stack for running, evaluating and fine-tuning, along with distribution partners and integrations with open-source libraries. The post names no partners and lists no API pricing.

## The performance claims — and where Beam trails

The headline claim is efficiency: scores comparable to GLM-5.2 on advanced reasoning benchmarks "while using 3–4× less inference compute." <a href="https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/" target="_blank" rel="noopener">TechCrunch</a> noted that these claims have not been independently verified.

Reflection's own tables are candid that Beam does not lead everywhere. A selection (company-reported; NR = not reported):

| Benchmark | Beam | GLM 5.2 | Kimi K3 | Qwen 3.8 Max |
|---|---|---|---|---|
| SWE-bench Verified | 80.9 | NR | NR | NR |
| Terminal Bench v2.1 | 80.1 | 81.0 | 88.3 | 86.6 |
| SWE Bench Pro v1 | 65.5 | 62.1 | NR | 67.7 |
| GPQA Diamond | 90.5 | 91.2 | 93.5 | 92.6 |
| HLE (no tools) | 36.2 | 40.5 | 46.9 | 43.6 |

The company itself acknowledges that frontier open models like Kimi K3 remain ahead in some areas. The pitch is "strong results per active parameter," not "best open model."

## Context: a well-funded lab's first ship

Reflection has drawn attention mostly for capital and compute, not models. In June, TechCrunch reported a <a href="https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab" target="_blank" rel="noopener">compute deal with SpaceX</a> worth $150 million a month from July 2026 through 2029, up to $6.3 billion in total. Beam is the first public output of that investment.

## Unconfirmed / outlook (kept separate from facts)

- **Exact release date**: "later this month" is a plan, not a date.
- **Pricing and hosted availability**: no API price, no named cloud partners, and no regional restrictions are disclosed — all **unconfirmed**.
- **Non-English quality**: the post does not discuss multilingual chat performance. ("SWEBench Multilingual" covers multiple programming languages, not human languages.)
- **Serving cost (our estimate)**: 501B parameters at 16-bit precision is roughly 1 TB of weights by simple arithmetic. Even with only 23B active per token, the full model must sit in memory, so most teams will likely use multi-GPU servers or a hosting provider. Whether quantized checkpoints ship at launch is unconfirmed.

## What this means for you

Apache 2.0 (<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">full text</a>) permits commercial use, modification and redistribution, with an express patent grant. If Beam ships under those terms without extra use restrictions, it would be one of the least encumbered large open models from a US lab — a meaningful point for legal and procurement reviews. Confirm the actual model card before relying on that.

<div class="article-callout tip">
<strong>Practical next steps</strong><br/>
1. If you want early access, join the waitlist on Reflection's platform (selection criteria are not published).<br/>
2. When weights land, read the <strong>model card's license section</strong> first — check for any acceptable-use policy layered on top of Apache 2.0.<br/>
3. Build a small <strong>task-specific eval set</strong> now (your repos, your tickets, your terminal workflows) so you can compare Beam with your current model within days of release.<br/>
4. Size the hardware: price out ~1 TB-class serving versus a managed endpoint before committing.
</div>

## Limitations

This analysis relies only on the launch-day announcement and press reports. With no technical report or model card yet, training-data composition, safety-evaluation results and real-world latency cannot be assessed. All scores reflect the company's chosen benchmarks and settings; third-party evaluations after the weights release may change the picture.

<p><em>Last verified 2026-10-07.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://reflection.ai/blog/introducing-beam" target="_blank" rel="noopener">Reflection AI — Introducing Beam (2026-10-05)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">Apache Software Foundation — Apache License, Version 2.0</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/" target="_blank" rel="noopener">TechCrunch — Reflection debuts Beam open-weight model (2026-10-05)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab" target="_blank" rel="noopener">TechCrunch — SpaceX inks compute deal with Reflection AI (2026-06-22)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Reflection AI's first open-weight model, Beam: 501B total / 23B active sparse MoE, text-only</li>
<li>Weights, tech report and model card promised "later this month" under Apache 2.0; waitlist-only access today</li>
<li>"GLM-5.2-level reasoning at 3–4× less compute" is a company claim, not yet independently verified</li>
<li>Company tables show Beam trailing Kimi K3 and Qwen 3.8 Max on several benchmarks</li>
<li>Prepare now: license review, a task-specific eval set, and a serving-cost estimate</li>
</ul>
</div>
