---
title: "Gemma 4 Arrives on Amazon Bedrock: Open-Weight AI for Enterprise"
summary: "AWS announced on June 15 that Google DeepMind's Gemma 4 model family is now available on Amazon Bedrock. Three variants — 31B Dense, 26B-A4B MoE, and E2B — bring Apache 2.0 open weights, 256K context, multimodal input, and native function calling to AWS's managed inference platform."
category: "ai-news"
date: "2026-06-16"
readingTime: 5
tags: ["Gemma4", "AmazonBedrock", "GoogleDeepMind", "OpenWeight", "AWS"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Amazon Bedrock added Google DeepMind's Gemma 4 family on June 15, 2026. Three instruction-tuned variants (31B Dense, 26B-A4B MoE, E2B) are available under Apache 2.0. All support 256K token context windows, multimodal text+image input, and native function calling. Developers can access them via a fully managed AWS service — no GPU provisioning required.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/jZVBoFOJK-Q" title="What's new in Gemma 4" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Makes This Integration Significant

Google DeepMind launched Gemma 4 in April 2026, marking the first time an open-weight model family from Google was released under the Apache 2.0 license — meaning commercial use, fine-tuning, and redistribution are all permitted without royalties.

The Bedrock integration takes that openness and wraps it in AWS's managed infrastructure. Developers and enterprises get the performance of Gemma 4 without operating inference stacks, provisioning model weights, or managing GPU clusters. AWS's **Model Deployment Account isolation** architecture — with zero operator access to model internals — means regulated industries (finance, healthcare, government) can use Gemma 4 without sacrificing compliance posture.

## Model Comparison

| Model | Architecture | Parameters | Context | Modalities |
|---|---|---|---|---|
| Gemma 4 31B | Dense | 30.7B total | 256K | Text, Image |
| Gemma 4 26B-A4B | Mixture-of-Experts | 25.2B / 3.8B active | 256K | Text, Image |
| Gemma 4 E2B | Dense (PLE) | 5.1B / 2.3B effective | 128K | Text, Image |

All three variants include built-in reasoning mode, native function calling for agentic workflows, and out-of-the-box support for 35+ languages with pre-training across 140+.

<div class="article-stats">
  <div class="article-stat-item">
    <span class="stat-value">256K</span>
    <span class="stat-label">Max context window (tokens)</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">140+</span>
    <span class="stat-label">Pre-training languages</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">89.2%</span>
    <span class="stat-label">AIME 2026 (Gemma 4 31B Thinking)</span>
  </div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>The MoE Efficiency Argument</strong><br>Gemma 4 26B-A4B activates only 3.8B parameters per request despite having 25.2B total parameters. This Mixture-of-Experts design delivers 27B-class intelligence at a fraction of the inference cost. For high-throughput agentic pipelines where cost-per-call matters, this model hits a strong price/performance point.</div>
</div>

## Getting Started on Bedrock

AWS supports Gemma 4 through the **bedrock-mantle** endpoint with OpenAI Python SDK compatibility — meaning existing OpenAI-style codebases can switch to Gemma 4 with minimal changes.

**Model IDs:**
- `google.gemma-4-31b` — 30.7B Dense
- `google.gemma-4-26b-a4b` — 26B Mixture-of-Experts
- `google.gemma-4-e2b` — Compact 5.1B Dense

**Service tiers available:** Standard (on-demand shared throughput), Priority (reserved capacity), and Flex (cost-optimized for batch workloads).

**Launch regions:** US East (N. Virginia, Ohio), US West (Oregon), Europe (Frankfurt). Additional regions will expand over time.

## Benchmark Performance

| Benchmark | Gemma 4 31B Thinking | Gemma 4 26B-A4B Thinking |
|---|---|---|
| AIME 2026 (Math) | 89.2% | 88.3% |
| LiveCodeBench v6 | 80.0% | 77.1% |
| GPQA Diamond (Science) | 84.3% | 82.3% |
| MMMLU Multilingual | 85.2% | 82.6% |
| τ2-bench Agentic (Retail) | 86.4% | 85.5% |
| Arena AI Elo (text) | 1452 | 1441 |

The 26B-A4B nearly matches the 31B on all benchmarks while activating a fraction of the parameters per call — the practical efficiency gain is substantial in production.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Open Weights, Your Way</strong><br>Because Gemma 4 is Apache 2.0, you're not locked into Bedrock. Download the weights from Hugging Face for local deployment, fine-tune on proprietary data with your preferred framework, and audit the architecture independently. Bedrock provides the fastest path to production; the open weights provide the option to go deeper.</div>
</div>

## Why Open-Weight Enterprise AI Is Having a Moment

The Bedrock launch illustrates a broader trend: open-weight models are reaching the capability threshold where enterprises no longer need to default to closed APIs for frontier performance. Gemma 4 31B now competes with models that were considered closed-model territory six months ago, while giving organizations the auditability and deployment flexibility that Apache 2.0 enables.

With AWS handling the infrastructure and Google DeepMind supplying the intelligence-per-parameter efficiency, the barrier for enterprise teams to deploy, fine-tune, and customize frontier AI has dropped significantly.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Gemma 4 family (31B, 26B-A4B MoE, E2B) is live on Amazon Bedrock as of June 15, 2026</li>
<li>Apache 2.0 license — commercial use, fine-tuning, and redistribution all permitted</li>
<li>MoE architecture activates only 3.8B of 25.2B parameters per call — significant cost efficiency</li>
<li>256K context window enables full codebase analysis and multi-turn agents</li>
<li>OpenAI SDK-compatible API makes migration low-friction</li>
<li>Model Deployment Account isolation meets enterprise and regulatory security requirements</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Getting Started</strong><br>— <a href="https://aws.amazon.com/blogs/machine-learning/introducing-gemma-4-models-on-amazon-bedrock/" target="_blank" rel="noopener noreferrer">AWS Blog — Introducing Gemma 4 on Amazon Bedrock</a><br>— <a href="https://deepmind.google/models/gemma/gemma-4/" target="_blank" rel="noopener noreferrer">Google DeepMind Gemma 4 — Model Cards & Downloads</a><br>— <a href="https://ai.google.dev/gemma" target="_blank" rel="noopener noreferrer">Google AI for Developers — Gemma Getting Started Guide</a></div></div>
