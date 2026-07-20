---
title: "Moonshot AI Drops Kimi K3: The World's Largest Open-Weight Model at 2.8 Trillion Parameters"
summary: "China's Moonshot AI has released Kimi K3, a 2.8-trillion-parameter open-weight model that benchmarks show is neck-and-neck with top proprietary AI systems from Anthropic and OpenAI — at a fraction of the price."
category: "ai-news"
date: "2026-07-20"
readingTime: 5
tags: ["KimiK3", "MoonshotAI", "OpenSourceAI", "ChinaAI", "LLM"]
---

<div class="article-tldr">
<div class="article-tldr__label">TL;DR</div>
<p>Moonshot AI launched <strong>Kimi K3</strong> on July 16, 2026 — a 2.8-trillion-parameter open-weight model and the largest of its kind ever released. It ranks just below Claude Fable 5 and GPT-5.6 Sol on major benchmarks, tops the Frontend Code Arena leaderboard outright, and costs up to 70% less than Western rivals. Full model weights drop on July 27.</p>
</div>

## What Is Kimi K3?

Beijing-based AI startup **Moonshot AI** — backed by Alibaba — unveiled **Kimi K3** on July 16, 2026, describing it as the world's first open-weight model in the 3-trillion-parameter class. With **2.8 trillion total parameters**, it dwarfs the nearest open-source competitors: DeepSeek V4 Pro (1.6T), Moonshot's own previous Kimi K2 (1T), and Alibaba's Qwen series (397B).

The model is built on Moonshot's proprietary **Kimi Delta Attention** and **Attention Residuals** architectures, combined with a Mixture-of-Experts (MoE) framework that activates 16 out of 896 expert modules at a time. Moonshot claims these choices deliver roughly **2.5× better scaling efficiency** compared to Kimi K2, while the Attention Residuals mechanism alone contributes about 25% higher training efficiency at less than 2% additional cost.

<div class="article-stats">
<div class="article-stats__item">
  <span class="article-stats__value">2.8T</span>
  <span class="article-stats__label">Parameters — largest open-weight model ever</span>
</div>
<div class="article-stats__item">
  <span class="article-stats__value">1M</span>
  <span class="article-stats__label">Token context window</span>
</div>
<div class="article-stats__item">
  <span class="article-stats__value">$15</span>
  <span class="article-stats__label">Per 1M output tokens (vs. $50 for Claude Fable 5)</span>
</div>
</div>

## Benchmark Performance: How Close to the Frontier?

Moonshot's internal results, combined with third-party evaluations from Artificial Analysis, Vals AI, and Arena.ai, paint a consistent picture: Kimi K3 sits firmly in the tier just below the top two proprietary models.

| Benchmark | Kimi K3 | GPT-5.6 Sol | Claude Fable 5 |
|-----------|---------|-------------|----------------|
| GDPval-AA v2 (real-world tasks) | 1,687 | 1,747.8 | **1,815** |
| AA-Briefcase (long-horizon agents) | **1,527** | 1,495 | 1,587 |
| BrowseComp (info retrieval) | **91.2** | — | — |
| Frontend Code Arena (Arena.ai) | **#1 (1,679)** | #2 | #3 |
| SWE Marathon (software engineering) | **42.0 (top score)** | — | — |

The Frontend Code Arena result is particularly striking. Arena.ai CEO Anastasios Angelopoulos called the release "the single biggest release of the year" and suggested it marks the moment Chinese open-source models have overtaken their US counterparts in at least one major domain.

<div class="article-callout tip">
<strong>Caveat:</strong> All benchmark figures are self-reported by Moonshot AI or drawn from third-party tests run before the public weight release. The community will be able to independently replicate these numbers starting July 27, when the full model weights go live.
</div>

## The 48-Hour Autonomous Agent Demo

To showcase Kimi K3's long-horizon capabilities, Moonshot ran a pair of headline demonstrations.

In the first, the model was tasked with **designing a physical chip** — specifically, a nano-scale version of the architecture that runs itself. Over a continuous 48-hour autonomous session using only open-source electronic design automation (EDA) tools, Kimi K3 completed the full chip design pipeline: architectural design, optimization passes, and timing verification. The result was a functional 4mm² chip design converging at 100 MHz, capable of decoding more than 8,700 tokens per second in simulation.

In the second demo, Kimi K3 reproduced a **computational astrophysics research workflow** (the I-Love-Q universal relations) in approximately **two hours** — a task Moonshot estimates takes an experienced researcher one to two weeks. The workflow involved reviewing more than 20 papers, evaluating over 300 equations of state, generating more than 3,000 lines of Python code, and producing an interactive HTML dashboard.

## Pricing and Availability

Kimi K3 is available today via Kimi.com, the Kimi mobile apps (iOS, Android, HarmonyOS), Kimi Work, and Kimi Code — the company's open-source coding agent that competes directly with Claude Code and Gemini CLI.

API pricing is aggressive:

- **Input tokens:** $3 per million (cache miss) / $0.30 per million (cache hit)
- **Output tokens:** $15 per million

That's roughly one-third the price of Claude Fable 5 ($50/M output) and half that of GPT-5.6 Sol ($30/M output). Automatic context caching requires no special API parameters, which Moonshot positions as a developer-experience advantage over competitors that require explicit cache management.

<div class="article-callout info">
<strong>Key date:</strong> Full model weights are scheduled for public release by July 27, 2026, under a modified MIT license. Once available, anyone will be able to download, self-host, fine-tune, and build on top of Kimi K3 at zero API cost.
</div>

## Another DeepSeek Moment?

The last time a Chinese lab released a cheap, capable open model — DeepSeek R1 in January 2025 — roughly $1 trillion was wiped from US tech stock valuations overnight. Analysts are drawing the comparison again.

Constellation Research analyst Holger Mueller identified three distinct strengths: "It's the largest open-weights model we've ever seen, it's multimodal with its visual feedback mechanism, and it's a lot cheaper than comparable models available now." He added: "This may well be another DeepSeek moment."

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
  <li>Kimi K3's 2.8 trillion parameters make it the largest open-weight AI model ever announced</li>
  <li>It tops Arena.ai's Frontend Code Arena, beating both Claude Fable 5 and GPT-5.6 Sol</li>
  <li>Autonomous 48-hour chip design and 2-hour astrophysics research demos show strong long-horizon agent capability</li>
  <li>Output token pricing at $15/M is 70% cheaper than Claude Fable 5 and 50% cheaper than GPT-5.6 Sol</li>
  <li>Full open weights release on July 27 will allow community verification and self-hosting</li>
</ul>
</div>

Moonshot's timing was deliberate — the launch landed just before the 2026 World Artificial Intelligence Conference in Shanghai. The company is simultaneously seeking $2 billion in new funding at a $30 billion valuation ahead of a planned Hong Kong listing. Whether K3's benchmark numbers hold up under community scrutiny on July 27 will be the decisive test of whether this is a genuine inflection point or a well-timed press moment.

<div class="article-callout info">
<strong>Related Reading &middot; Official Sources</strong><br/>
&middot; <a href="" target="_blank" rel="noopener">Moonshot AI on GitHub https://github.com/MoonshotAI</a><br/>
&middot; <a href="https://huggingface.co/moonshotai" target="_blank" rel="noopener">Kimi on Hugging Face</a><br/>
&middot; <a href="https://www.moonshot.ai/" target="_blank" rel="noopener">Moonshot AI official site</a><br/>
</div>
