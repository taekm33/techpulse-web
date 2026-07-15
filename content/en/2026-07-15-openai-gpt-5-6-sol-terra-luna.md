---
title: "OpenAI Launches GPT-5.6: Meet Sol, Terra, and Luna"
summary: "OpenAI's new three-tier GPT-5.6 family brings a flagship reasoner, a balanced workhorse, and an ultra-cheap speed demon — all with a million-token context window and multi-agent orchestration built in."
category: "ai-news"
date: "2026-07-15"
readingTime: 5
tags: ["OpenAI", "GPT-5.6", "LLM", "AI", "GenerativeAI"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> On July 9, 2026, OpenAI shipped GPT-5.6 as a three-model family — Sol, Terra, and Luna — featuring a shared 1M-token context window, programmatic tool calling, and a new "Ultra" multi-agent orchestration mode. Sol set a new all-time record on the Agents' Last Exam benchmark, beating Claude Fable 5 by 13.1 points.
</div>

## What Is GPT-5.6?

OpenAI dropped the GPT-5.6 model family on July 9, 2026, at 10 a.m. PT — not as a single model, but as a **tiered lineup of three**: Sol, Terra, and Luna. The strategy mirrors how cloud providers sell compute in different instance classes, letting developers and enterprises pick the capability-to-cost ratio that fits their workload rather than overpaying for horsepower they don't need.

All three models share a common baseline: a **knowledge cutoff of February 16, 2026**, a **one-million-token context window**, and a **128,000-token maximum output length**. Programmatic tool calling in OpenAI's Responses API is supported across the board, making agentic pipeline construction significantly simpler.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">53.6</span>
<span class="stat-label">Sol score on Agents' Last Exam — all-time high</span>
</div>
<div class="stat-item">
<span class="stat-number">1M</span>
<span class="stat-label">Shared context window across all three models (tokens)</span>
</div>
<div class="stat-item">
<span class="stat-number">$1/M</span>
<span class="stat-label">Luna's input price — the lowest in the GPT-5.6 family</span>
</div>
</div>

## Breaking Down the Three Tiers

| Model | Best For | Input (per 1M tokens) | Output (per 1M tokens) |
|-------|----------|-----------------------|------------------------|
| **Sol** | Frontier reasoning, coding, science | $5.00 | $30.00 |
| **Terra** | Balanced everyday work | $2.50 | $15.00 |
| **Luna** | High-volume, speed-sensitive tasks | $1.00 | $6.00 |

### Sol — The New Flagship

Sol sets a new bar for both intelligence and efficiency. On *Agents' Last Exam* — an evaluation covering long-horizon professional workflows across 55 fields — Sol scored **53.6**, eclipsing Claude Fable 5 by 13.1 points. OpenAI claims Sol delivers state-of-the-art results in coding, knowledge work, cybersecurity, and scientific reasoning. At $5.00 per million input tokens and $30.00 per million output tokens, it sits in the premium tier alongside other frontier models.

### Terra — The Balanced Workhorse

Terra is positioned to deliver GPT-5.5-level quality at roughly half the cost, making it the pragmatic default for enterprise deployments that need solid performance without Sol's price tag. At $2.50/$15.00, Terra fits squarely in the middle of the market and is likely to become the most widely used of the three.

### Luna — Speed and Scale

Luna is the fastest and most cost-effective member of the family at $1.00/$6.00. It's purpose-built for high-frequency, high-volume applications — think real-time chat, autocomplete, document triage, and other latency-sensitive pipelines where raw throughput matters more than frontier reasoning.

<div class="article-callout tip">
<strong>Developer tip:</strong> All three GPT-5.6 models are already available in GitHub Copilot. Use Sol for deep code review and architecture tasks, Terra for routine PR summaries, and Luna for inline autocomplete to keep token costs in check without sacrificing day-to-day quality.
</div>

## The New "Ultra" Orchestration Mode

The most architecturally interesting addition in GPT-5.6 is **Ultra** — OpenAI's highest-capability setting, which coordinates multiple agents across parallel workstreams to complete complex tasks faster than any single-model call can. Rather than running inference sequentially, Ultra fans work out to specialized sub-agents and synthesizes their outputs, collapsing the wall-clock time for multi-step professional tasks.

This moves multi-agent orchestration from a DIY integration challenge to a first-class API feature, which is a significant shift for enterprise buyers who have previously had to stitch together agentic pipelines with LangChain, custom orchestration code, or OpenAI's Assistants API.

<div class="article-callout info">
<strong>Availability:</strong> GPT-5.6 Sol, Terra, and Luna are live via the OpenAI API and ChatGPT, and are immediately available in GitHub Copilot. All three support programmatic tool calling through the Responses API.
</div>

## Competitive Implications

GPT-5.6 lands in the middle of one of the most competitive stretches in LLM history. Anthropic shipped Claude Sonnet 5 and Fable 5 earlier in July; xAI's Grok 4.5 is a 1.5-trillion-parameter Mixture-of-Experts model trained on Cursor interaction data; Meta's Muse Spark 1.1 added a 1M-token context window; and Google continues expanding its AI infrastructure globally.

Sol's 13.1-point lead on Agents' Last Exam is notable because it is specifically an agentic benchmark — measuring how well models handle real, multi-step professional work rather than isolated question-answering. If that advantage holds up in production, it may tip enterprise decisions in OpenAI's favor for agentic automation use cases, which are increasingly the highest-value AI deployments.

Luna's $1.00/M input price is equally significant: it undercuts many competing models and makes large-scale inference projects economically viable for a much broader set of companies.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
  <li>OpenAI launched GPT-5.6 on July 9, 2026 — a three-model family: Sol, Terra, and Luna</li>
  <li>Sol set an all-time Agents' Last Exam record at 53.6 — 13.1 points ahead of Claude Fable 5</li>
  <li>All models share a 1M-token context window and 128K max output</li>
  <li>New "Ultra" mode enables parallel multi-agent orchestration at the API level</li>
  <li>Luna at $1.00/M input tokens makes frontier-quality LLMs economically accessible at scale</li>
  <li>All three models immediately available in GitHub Copilot</li>
</ul>
</div>
