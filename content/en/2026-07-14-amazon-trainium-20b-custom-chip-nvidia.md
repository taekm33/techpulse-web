---
title: "Amazon's Trainium Hits $20B Run Rate — And Could Soon Challenge Nvidia Outside AWS"
summary: "AWS's custom AI silicon business crossed a $20 billion annualized revenue run rate in Q1 2026, Trainium3 is nearly sold out, and Amazon is in early talks to sell chips directly to third-party data centers for the first time in a decade."
category: "it-news"
date: "2026-07-14"
readingTime: 5
tags: ["Amazon", "Trainium", "AI chips", "AWS", "Nvidia"]
---

<div class="article-tldr">
Amazon's homegrown AI chip business — Trainium, Graviton, and Nitro — surpassed a $20 billion annualized revenue run rate in Q1 2026 with triple-digit growth. Trainium2 is completely sold out. Trainium3, which started shipping in early 2026, is already nearly fully subscribed. And for the first time in its history, Amazon is in active talks to sell Trainium racks directly to outside data centers, threatening Nvidia's dominance at the infrastructure layer.
</div>

## The Quiet Rise of Amazon's Silicon Empire

While Nvidia commands the headlines with H100 wait times and B200 launch events, Amazon has been methodically building a parallel AI chip business that is now genuinely large. AWS's custom silicon portfolio — anchored by Trainium for training and Inferentia for inference, alongside the Graviton general-purpose line — crossed a $20 billion annual revenue run rate in Q1 2026 and is growing faster than triple digits year-over-year.

To put that in context: this is a business that barely registered in public financial disclosures three years ago. Today it carries **$225 billion in cumulative revenue commitments** from long-term Trainium contracts.

<div class="article-stats">
<strong>Key Numbers</strong>
<ul>
  <li>📈 <strong>$20B+</strong> — AWS custom silicon annualized run rate, Q1 2026</li>
  <li>💰 <strong>$225B</strong> — Total Trainium revenue commitments on the books</li>
  <li>⚡ <strong>~30%</strong> — Trainium2's price-performance advantage over comparable GPUs</li>
</ul>
</div>

## Trainium3 Is Already Gone

Amazon launched its third-generation Trainium chip in early 2026, and it is already "essentially sold out." The who's-who of AI is behind the demand:

- **OpenAI** locked in roughly **2 gigawatts** of Trainium capacity to power its frontier models — one of the largest single chip commitments in industry history.
- **Anthropic** signed for up to **5 gigawatts** of current and future Trainium chips.
- **Meta** and **Uber** have also secured multi-year commitments.

Trainium2, the predecessor, delivered approximately 30 percent better price-performance than comparable Nvidia GPUs and sold out entirely. The pattern has repeated with Trainium3 at even larger scale.

<div class="article-callout tip">
<strong>Developer Note:</strong> Amazon's Neuron SDK lets teams run PyTorch and JAX workloads on Trainium with minimal code changes. If your team is trying to reduce CUDA lock-in, the tooling has matured significantly — now is a practical time to evaluate a pilot migration.
</div>

## The Big Strategic Shift: Direct Sales to Outside Data Centers

Here is where the story gets structurally interesting. For its entire history, Amazon has kept Trainium chips AWS-exclusive — you could only access them through cloud instances, not buy hardware outright. That may be about to change.

Amazon CEO Andy Jassy disclosed in April 2026 that the company is in early talks to sell Trainium racks directly to third-party data center operators. Jassy called such external sales "highly likely" within the next few years, though no contracts have been signed yet.

If it happens, any organization building its own AI infrastructure — rather than renting capacity from a cloud provider — would gain a credible alternative to Nvidia H-series GPUs for the first time.

| Chip | Status | Use Case |
|------|--------|----------|
| Trainium2 | Sold out | AI model training |
| Trainium3 | Nearly sold out | Large-scale AI training |
| Inferentia2 | Available | Low-latency inference |
| Graviton4 | Generally available | General-purpose compute |

<div class="article-callout info">
<strong>Background:</strong> Trainium is purpose-built for training large models; Inferentia handles inference (serving models to end users). Together they give Amazon a full-stack custom silicon story from training to production — the same end-to-end coverage that makes Nvidia's platform so sticky.
</div>

## What This Means for Nvidia

Nvidia isn't going anywhere in the near term. Its CUDA software ecosystem, the density of developer tooling, and the H200/B200 performance leadership still make it the default for most AI workloads. But the structural dynamics are shifting.

When the world's largest AI spenders — OpenAI and Anthropic together representing the top of the model-training pyramid — are committing gigawatts of capacity to a non-Nvidia chip, the signal is clear: alternatives are viable at the frontier, not just for cost-optimization in commodity inference.

If Amazon's direct-sales talks progress into actual deals, the competitive surface expands beyond cloud pricing wars into the physical datacenter market — territory Nvidia has held nearly unchallenged.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>AWS custom silicon crossed $20B annualized run rate in Q1 2026 with triple-digit YoY growth</li>
  <li>Trainium2 sold out; Trainium3 is nearly fully subscribed months after launch</li>
  <li>$225B in cumulative Trainium revenue commitments from OpenAI, Anthropic, Meta, Uber, and others</li>
  <li>CEO Andy Jassy says direct sales of Trainium to outside data centers are "highly likely"</li>
  <li>Trainium2 delivers ~30% better price-performance than comparable Nvidia GPUs</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://aws.amazon.com/ai/machine-learning/trainium/" target="_blank" rel="noopener">AWS Trainium Official</a><br/>
· <a href="https://aws.amazon.com/machine-learning/neuron/" target="_blank" rel="noopener">AWS Neuron SDK</a><br/>
· <a href="https://press.aboutamazon.com/" target="_blank" rel="noopener">Amazon Newsroom</a><br/>
</div>
