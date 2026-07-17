---
title: "Mira Murati's Thinking Machines Drops Inkling: The Largest American Open-Weight AI Model Yet"
summary: "Thinking Machines Lab, founded by former OpenAI CTO Mira Murati, has released Inkling — a 975-billion-parameter multimodal model trained from scratch under an Apache 2.0 license, making it the most capable Western open-weights model for agentic tasks."
category: "ai-news"
date: "2026-07-17"
readingTime: 5
tags: ["Inkling", "ThinkingMachines", "OpenSourceAI", "MiraMurati", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong>
<ul>
  <li>Thinking Machines Lab released <strong>Inkling</strong>, a 975B-parameter open-weight model under Apache 2.0 — trained from scratch, with all weights on Hugging Face.</li>
  <li>It posts 74.1% on MCP Atlas (nearly 30 points above Nvidia Nemotron 3 Ultra) and 77.6% on SWE-Bench Verified, the best scores among Western open-weight models on agentic benchmarks.</li>
  <li>For the first time, developers who need a powerful open-weight alternative to Chinese models have a genuinely competitive Western option.</li>
</ul>
</div>

## The Wait Is Over

When Mira Murati left OpenAI in September 2024, she said she was stepping away to "do her own exploration." On July 15, 2026, that exploration shipped. Thinking Machines Lab — the company she founded in February 2025 — released **Inkling**, its first model, and the announcement was characteristically spare: "Our first model, Inkling. Trained from scratch, weights are open, fine-tunable on Tinker today."

The model clears two bars that matter in the current open-source AI landscape: it is genuinely large (975 billion parameters), and it is genuinely open (Apache 2.0, full weights, no use-case restrictions).

<div class="article-stats">
<div class="stat-item">
  <span class="stat-number">975B</span>
  <span class="stat-label">Total Parameters</span>
</div>
<div class="stat-item">
  <span class="stat-number">74.1%</span>
  <span class="stat-label">MCP Atlas Score — top Western open-weight model</span>
</div>
<div class="stat-item">
  <span class="stat-number">77.6%</span>
  <span class="stat-label">SWE-Bench Verified</span>
</div>
<div class="stat-item">
  <span class="stat-number">$12B</span>
  <span class="stat-label">Company Valuation (July 2025 funding round)</span>
</div>
</div>

## What Inkling Is

Inkling is a dense, multimodal language model — not a mixture-of-experts architecture like many competitors. Running it at native 16-bit precision requires over **two terabytes of GPU memory**, the equivalent of roughly eight Nvidia B300 accelerators or sixteen H200s. For teams with more modest hardware, Thinking Machines also released an NVFP4 quantized version that cuts that requirement in half.

The model is available today on Hugging Face as a free download and through the company's **Tinker platform**, which adds a web interface, API access, and fine-tuning tools. Third-party inference providers — TogetherAI, Fireworks, Modal, Databricks, and Baseten — are listed as coming soon.

Alongside Inkling, Thinking Machines previewed **Inkling-Small**: a 276-billion-parameter MoE model with just 12 billion active parameters. In testing, it reportedly matches the larger model on most reasoning benchmarks while prioritizing lower latency. Its weights will be released once testing is complete; no timeline was given.

<div class="article-callout tip">
<strong>Why "trained from scratch" matters</strong><br>
Most high-performing open-weight models are fine-tunes or distillations of proprietary models, which carries derivative licensing risk. A model built entirely from scratch has a clean IP lineage — important for enterprises operating under compliance, security, or export-control constraints, and for anyone who wants full transparency into training data and methodology.
</div>

## Benchmark Breakdown

Inkling's standout results are concentrated in **agentic and coding tasks**, which are increasingly where enterprise AI deployments actually live.

| Benchmark | Inkling | Nvidia Nemotron 3 Ultra | GLM 5.2 | Kimi K2.6 |
|---|---|---|---|---|
| MCP Atlas (agentic tool use) | **74.1%** | ~45% | — | — |
| SWE-Bench Verified (code bug fix) | **77.6%** | 70.7% | — | — |
| FORTRESS Adversarial (safety) | **78.0%** | — | — | — |
| Terminal Bench 2.1 (coding agents) | 63.8% | — | **82.7%** | — |
| Humanity's Last Exam (PhD reasoning) | — | — | — | leads |

The MCP Atlas result deserves particular attention: MCP (Model Context Protocol) is the open standard for connecting AI agents to external tools, and 74.1% completion on a diverse task suite is a meaningful signal of real-world agentic reliability. Being nearly 30 points ahead of the next Western open-weight competitor is a significant margin, not a rounding error.

The honest caveat: Chinese open-weight models still lead in some domains. Z.ai's GLM 5.2 scores 82.7% on Terminal Bench 2.1 versus Inkling's 63.8%, and Kimi K2.6 holds the lead on Humanity's Last Exam. The competitive gap is narrowing, but it hasn't closed everywhere.

<div class="article-callout info">
<strong>What is FORTRESS Adversarial?</strong><br>
It measures how consistently a model refuses genuinely harmful prompts without over-blocking legitimate ones — essentially a combined safety and helpfulness score. Inkling's 78.0% is the highest reported among any open-weight model in the comparison set, suggesting Thinking Machines prioritized responsible deployment alongside capability.
</div>

## Company Background: Quiet and Well-Funded

Thinking Machines Lab spent its first 17 months almost entirely silent — no blog posts, no benchmarks, no previews. That silence was backed by serious capital. In July 2025, the company closed a **$2 billion funding round at a $12 billion valuation**, led by Andreessen Horowitz with Nvidia, Accel, ServiceNow, Cisco, AMD, and Jane Street participating. It was one of the largest seed-stage rounds in Silicon Valley history.

Reports from November 2025 indicated Thinking Machines had begun exploring a follow-on at a **$50 billion valuation**. Those talks collapsed by January 2026, leaving the company funded but not yet at the scale it had sought.

Murati's personal history adds context. When OpenAI's board fired Sam Altman in November 2023, she was named interim CEO for five days before Altman was reinstated. She returned to the CTO role and left the company roughly ten months later. She has said since that she wanted to explore what was possible with more independence and better design decisions than she felt were achievable inside OpenAI.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>Inkling is the largest-parameter Western open-weight model and the most capable on agentic benchmarks — marking a genuine shift in the open-source AI landscape.</li>
  <li>The Apache 2.0 license means zero restrictions on commercial use, fine-tuning, or redistribution.</li>
  <li>Developers can access Inkling today via Hugging Face (download) or Tinker (API + fine-tuning).</li>
  <li>Chinese open-weight models maintain a lead in some specific domains; the Western catch-up is real but incomplete.</li>
  <li>Inkling-Small (276B/12B active parameters) is forthcoming and may be the more practical option for latency-sensitive production deployments.</li>
</ul>
</div>

## What Comes Next

The release of Inkling shifts the calculus for teams that wanted a capable open-weight model but were unwilling to rely on Chinese-origin weights for compliance, security, or geopolitical reasons. Until now, Meta's Llama series was the dominant Western choice — strong, but trailing the frontier on agentic tasks. Inkling lands clearly ahead on those specific benchmarks.

Whether the performance lead holds as competitors respond remains to be seen. Thinking Machines has already signaled that Inkling is "the first of several new models under development." The open-source frontier is moving fast in both hemispheres.


<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://thinkingmachines.ai/" target="_blank" rel="noopener">Thinking Machines Lab (official site)</a><br/>
· <a href="https://huggingface.co/thinkingmachines" target="_blank" rel="noopener">Thinking Machines on Hugging Face</a><br/>
· <a href="https://tinker-docs.thinkingmachines.ai/" target="_blank" rel="noopener">Tinker Docs (official)</a><br/>
</div>
