---
title: "China's Moonshot AI Drops Kimi K3 — The World's Largest Open-Weight Model at 2.8 Trillion Parameters"
summary: "Chinese startup Moonshot AI unveiled Kimi K3, a 2.8-trillion-parameter open-weight model that beats GPT-5.6 Sol on several benchmarks and nearly matches Anthropic's Fable 5 — at a fraction of the price. Full weights drop July 27."
category: "ai-news"
date: "2026-07-18"
readingTime: 5
tags: ["Kimi K3", "Moonshot AI", "open-source AI", "China AI", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Moonshot AI released <strong>Kimi K3</strong>, a 2.8-trillion-parameter open-weight model that ranks second overall on independent benchmarks behind only Anthropic's Fable 5 — while undercutting US rival pricing by up to 70%. Full model weights go public on July 27, 2026. Industry observers are calling it a potential "second DeepSeek moment."
</div>

## A New Record for Open-Source AI

On July 16, 2026, Beijing-based startup Moonshot AI — backed by Alibaba and Tencent — unveiled **Kimi K3** at the World Artificial Intelligence Conference (WAIC) in Shanghai. With 2.8 trillion parameters, it is the largest open-weight AI model ever built, roughly doubling the previous leader, DeepSeek V4-Pro, which topped out at 1.6 trillion parameters.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-value">2.8T</span>
    <span class="stat-label">Parameters — world's largest open-weight model</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">1M</span>
    <span class="stat-label">Token context window</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">$15</span>
    <span class="stat-label">Per 1M output tokens — vs. Fable 5's $50</span>
  </div>
</div>

## Benchmark Performance: Closing the Gap

Independent evaluators have placed Kimi K3 in striking distance of the best US proprietary models across a range of tests.

| Benchmark | Kimi K3 | GPT-5.6 Sol | Fable 5 |
|---|---|---|---|
| Vals AI Overall Ranking | **2nd** | 3rd | 1st |
| Arena.ai Frontend Engineering | **1st (1,679)** | Lower | Lower |
| GDPval-AA v2 (real-world tasks) | 3rd (1,687) | — | 1st (1,815) |
| AA-Briefcase (long-horizon knowledge) | **2nd (1,527)** | 3rd (1,495) | 1st (1,587) |
| BrowseComp (information seeking) | **91.2/100** | — | — |

Arena.ai CEO Anastasios Angelopoulos called it "the single biggest release of the year" and "the moment that OSS Chinese models have surpassed US models." Artificial Analysis ranked K3 on par with OpenAI GPT-5.5 and Claude Opus 4.8 on complex, multi-step tasks.

## The Architecture Behind the Scale

Moonshot says K3 achieves roughly **2.5× better scaling efficiency** than its predecessor Kimi K2. The headline architectural innovation is **Attention Residuals** — a technique that delivers approximately 25% higher training efficiency at under 2% additional compute cost. The model's 1-million-token context window allows it to process entire large codebases or document corpora in a single prompt.

<div class="article-callout tip">
<strong>48-Hour Autonomous Chip Design Demo</strong><br>
In a demonstration included in Moonshot's technical documentation, Kimi K3 was given a single task: design a physical chip capable of running a nano-scale version of itself. Over 48 hours of continuous autonomous operation — with no human intervention — K3 completed the full chip design pipeline from architectural planning through optimization and verification using open-source EDA tools. The result: a 4mm² functional chip design achieving timing convergence at 100 MHz and decoding more than 8,700 tokens per second in simulation.
</div>

## Pricing: The Other Weapon

Price is where Kimi K3 may do the most damage to US rivals:

- **Input (cache miss):** $3 per million tokens
- **Input (cache hit):** $0.30 per million tokens
- **Output (including reasoning):** $15 per million tokens

For comparison, Anthropic's Fable 5 charges $50 per million output tokens and OpenAI's GPT-5.6 Sol charges $30. Kimi K3's output pricing comes in at 30–70% cheaper, continuing the aggressive price war initiated by DeepSeek in early 2025 and now standard practice among Chinese AI labs.

<div class="article-callout info">
<strong>Try It Now — Full Weights July 27</strong><br>
Kimi K3's chat interface is live at kimi.com with no credit card required. Full model weights are scheduled for release on July 27, 2026 under a modified MIT license, enabling independent researchers to download, run, and verify the model's benchmark claims for themselves.
</div>

## Industry Reaction: "Another DeepSeek Moment"

The AI community is drawing direct parallels to DeepSeek R1's January 2025 release, which triggered a roughly $1 trillion selloff in US tech stocks and upended assumptions about China's AI capabilities. Kimi K3 may carry even greater implications given its scale and open-weight nature.

Constellation Research analyst Holger Mueller identified three factors that make K3 stand out: "It's the largest open-weights model we've ever seen, it's multimodal with its visual feedback mechanism, and it's a lot cheaper than comparable models available now."

Former White House AI policy adviser Sriram Krishnan described the release as "a big moment, with multiple implications for the entire industry."

Moonshot's trajectory mirrors that of DeepSeek. The company had slid from third to seventh place in China's monthly active user rankings after DeepSeek R1's release in 2025. Its pivot to open-source — starting with Kimi K2 in July 2025 and accelerating through K2.5 in January 2026 — was a deliberate attempt to reclaim relevance. K3 is the culmination of that strategy.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
  <li>Kimi K3 at 2.8T parameters is the world's largest open-weight AI model — roughly 2× the previous record holder</li>
  <li>Ranks 2nd overall on Vals AI, 1st on Arena.ai's frontend engineering benchmark — ahead of GPT-5.6 Sol</li>
  <li>Output priced at $15/M tokens — 70% cheaper than Fable 5 ($50) and 50% cheaper than GPT-5.6 Sol ($30)</li>
  <li>Full weights release July 27, 2026 — independent verification begins then</li>
  <li>Moonshot is seeking $2B at a $30B valuation ahead of a planned Hong Kong IPO</li>
</ul>
</div>

## What Happens on July 27

When the weights go public, the "largest open model" claim stops being a spec sheet and becomes something any developer can download and test. If independent evaluations confirm K3's benchmark scores, it will be increasingly difficult for closed-source providers to justify premium pricing on capability grounds alone. Moonshot also released two updates to Kimi Code (v0.25.0 and v0.26.0) on the same day as K3's announcement — adding subagent tooling and background task management to directly challenge Anthropic's Claude Code and Google's Gemini CLI in the agentic coding market.

The open-source frontier has effectively arrived at the proprietary frontier. The field just got a lot more crowded.
