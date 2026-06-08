---
title: "MiniMax M3: The First Open-Weight Model with Frontier Coding, 1M Context, and Native Multimodality"
summary: "MiniMax launched M3 on May 31, 2026 — the first open-weight model to combine frontier-level coding (59% SWE-Bench Pro), a 1-million-token context window, and native multimodal input. Its custom MiniMax Sparse Attention architecture delivers 15x faster decoding, while pricing starts at $0.30/M input tokens."
category: "dev-trend"
date: "2026-06-08"
readingTime: 5
tags: ["MiniMax", "OpenSourceAI", "LLM", "CodingAgents", "Multimodal"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — MiniMax M3 is the first open-weight model to combine frontier coding (59% on SWE-Bench Pro, ahead of GPT-5.5), a 1M-token context window, and native multimodal support. Its custom MSA architecture makes long-context inference up to 15x faster and 10x cheaper. Weights are coming to Hugging Face soon; the API is live today.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/5Atmc4wW1k0" title="MiniMax M3: Rivals Opus, 17x Cheaper, Fully Open!" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The "Three Conditions" No Open Model Had Combined Before

MiniMax released **MiniMax M3** on May 31, 2026, framing it as the first model to crack what they call the three conditions that only closed-source frontier models had previously achieved simultaneously:

1. **Frontier-level coding and agentic capability** — 59% on SWE-Bench Pro
2. **Ultra-long context** — 1 million tokens natively
3. **Native multimodality** — images, video input, and desktop computer operation out of the box

<div class="article-stats">
  <div class="article-stats__item">
    <span class="article-stats__value">59.0%</span>
    <span class="article-stats__label">SWE-Bench Pro Score</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">1M</span>
    <span class="article-stats__label">Token Context Window</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">15×</span>
    <span class="article-stats__label">Faster Decoding vs. Alternatives</span>
  </div>
</div>

## MiniMax Sparse Attention (MSA): The Architecture Behind the Speed

The technical core of M3 is **MiniMax Sparse Attention (MSA)**, a new attention architecture that bypasses the memory and compute bottleneck traditional transformers hit at long contexts.

- At 1M context: cost per token is just **1/10th** of the previous generation
- **9x** acceleration in the prefill stage
- **15x** acceleration in the decoding stage
- **4x** higher compute speed vs. comparable open-source solutions

This matters enormously for agents. Long-running agent tasks — 24-hour sessions, thousands of tool calls — constantly accumulate context. M3 can hold an entire codebase, thousands of log entries, or an hour-long video in memory without degrading.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>What does MiniMax say it actually did with M3?</strong><br>
MiniMax demonstrated M3 autonomously reproducing experiments from an ICLR top paper over 12 hours, running continuously for 24 hours without reference code and making ~2,000 tool calls, and improving FP8 matrix multiplication hardware utilization on a Hopper GPU from 7.6% to 71.3%.</div>
</div>

## Benchmark Comparison

| Benchmark | MiniMax M3 | GPT-5.5 | Claude Opus 4.7 |
|-----------|-----------|---------|----------------|
| SWE-Bench Pro | **59.0%** | 58.6% | ~53% |
| MCP Atlas | **74.2%** | — | — |
| Terminal-Bench 2.1 | 66.0% | 83.4% | 69.7% |
| Video-MME | 84.6% | — | — |

M3 leads GPT-5.5 on SWE-Bench Pro — making it the highest-scoring open-weight model on that benchmark. However, it trails GPT-5.5 on Terminal-Bench 2.1, so the performance advantage is selective rather than across the board.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Pricing and How to Access Today</strong><br>
Model weights are not yet public, but M3 is live via API, OpenRouter, MiniMax Code (code.minimax.io), and the Hermes agent. An introductory 50% discount brings pricing to $0.30/M input tokens and $1.20/M output tokens — roughly 17x cheaper than Claude Opus on a per-token basis at current rates.</div>
</div>

## The Chinese Open-Source AI Wave

M3 doesn't arrive in isolation. Within days of each other in late May/early June 2026, three Chinese AI labs dropped frontier open-weight models: MiniMax M3, Zhipu's GLM-5.1 (SWE-Bench Pro leader among open models), and Moonshot's Kimi K2.6 (86.3% on BrowseComp agent benchmark). This coordinated open-source strategy from Chinese labs is fundamentally disrupting the assumption that frontier AI requires a closed-source, expensive commercial model.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>MiniMax M3: first open-weight model to combine frontier coding, 1M context, and native multimodality</li>
  <li>MSA architecture delivers 15x faster decoding and 10x lower cost at 1M token context</li>
  <li>59% SWE-Bench Pro — narrows the gap between open and closed frontier models</li>
  <li>Live today via API/OpenRouter; Hugging Face weights and full tech report releasing soon</li>
  <li>Part of a broader wave of high-capability open-weight models from Chinese AI labs</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://www.minimax.io/blog/minimax-m3" target="_blank" rel="noopener noreferrer">MiniMax M3 Official Launch Blog</a><br>— <a href="https://www.minimax.io/models/text/m3" target="_blank" rel="noopener noreferrer">MiniMax M3 Model Page and Docs</a><br>— <a href="https://platform.minimax.io" target="_blank" rel="noopener noreferrer">MiniMax API Platform — Developer Access</a><br>— <a href="https://huggingface.co/MiniMaxAI" target="_blank" rel="noopener noreferrer">MiniMax on Hugging Face — Weights Releasing Soon</a></div></div>
