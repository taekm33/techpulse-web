---
title: "Claude Fable 5: Anthropic's Most Powerful Public Model Is Now Live"
summary: "Anthropic launched Claude Fable 5 on June 9, 2026 — a Mythos-class model with safety classifiers enabled for general use. It tops benchmarks in coding, knowledge work, vision, and multi-day autonomous task completion, available now on Claude API, Bedrock, Vertex AI, and Foundry."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["claude-fable-5", "anthropic", "ai-model", "llm", "benchmark"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Anthropic launched Claude Fable 5 on June 9, 2026. It is the same underlying model as Claude Mythos — the most capable model Anthropic has ever built — now made safe for general release via safety classifiers that automatically route high-risk requests. It leads all tested benchmarks in coding, financial analysis, vision, and long-horizon autonomous work. Priced at $10/M input and $50/M output tokens, it is generally available today across major cloud platforms.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5 – Official Anthropic Launch Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Story Behind Fable 5

Claude Mythos was never a public model — because when Anthropic finished training it, they discovered it could find thousands of cybersecurity vulnerabilities. Rather than releasing it broadly, they handed it to the people protecting the world's critical software and put it to work patching vulnerabilities before attackers could exploit them.

Claude Fable 5 is Anthropic's answer to the question of how to release a model that capable. It shares the same underlying weights as Claude Mythos but adds **safety classifiers** that automatically detect and redirect requests in high-risk domains (cybersecurity, biology) to Claude Opus 4.8. The model's full capabilities remain available; the specific capabilities most likely to enable mass harm are routed away.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Fable 5 vs. Mythos 5</strong><br>Fable 5 is the general-availability version with safety classifiers active. Mythos 5 is the same model with classifiers lifted in specific domains, available only to approved Project Glasswing partners (cybersecurity organizations, select biology researchers). Both share identical pricing and context window specs.</div>
</div>

## Benchmark Leadership

<div class="article-stats">
<div class="stat-item"><span class="stat-number">46%</span><span class="stat-label">FrontierCode (Cognition Labs) — best in class</span></div>
<div class="stat-item"><span class="stat-number">97.0%</span><span class="stat-label">AIME 2025 mathematical reasoning</span></div>
<div class="stat-item"><span class="stat-number">90%+</span><span class="stat-label">Anthropic's core analytics benchmark (+10pts vs Opus)</span></div>
</div>

| Domain | Performance |
|---|---|
| Software engineering | #1 FrontierCode, CursorBench, ViBench |
| Mathematical reasoning | AIME 2025: 97.0% / AIME 2026: 94.5% |
| Financial knowledge work | #1 Hebbia Finance Benchmark (senior-level reasoning) |
| Vision | Scientific figure extraction, screenshot-to-webapp reconstruction |
| Autonomous operation | Multi-day uninterrupted sessions; self-tests its own work |

## What "Longer and More Complex" Really Means

Stripe reported that during early testing, Fable 5 compressed **months of engineering into days**. In a 50-million-line Ruby codebase, the model performed a codebase-wide migration in a single day that would have taken a full engineering team more than two months by hand. It did so while meeting the standards of high-quality production codebases — not just completing the task, but completing it correctly.

Trading analysis firm IMC noted that Fable 5 "aced" their trading analysis evaluations across factual lookup, conceptual reasoning, root-cause analysis, and expected-value analysis — "nearly across the board."

<div class="article-callout info">
<div class="article-callout__icon">🎮</div>
<div class="article-callout__body"><strong>The Pokémon FireRed test</strong><br>As a proxy for complex visual reasoning and long-term planning, Anthropic had Fable 5 play Pokémon FireRed using only a vision harness with minimal scaffolding. Previous Claude models struggled with this even with additional helpful tools. Fable 5 beat the game. It also reached the final act of Slay the Spire three times more often than prior models, using file-based memory it managed autonomously.</div>
</div>

## Pricing and Availability

Fable 5 is priced at **$10 per million input tokens** and **$50 per million output tokens** — less than half the price of the original Claude Mythos Preview. Prompt caching applies a 90% discount on input tokens.

Available on:
- Claude API (`claude-fable-5`)
- Amazon Bedrock (Claude Platform on AWS)
- Google Cloud Vertex AI
- Microsoft Foundry

**Subscription plans:** Fable 5 is included at no extra cost on Pro, Max, Team, and seat-based Enterprise plans through June 22, 2026. After that date, using Fable 5 will require usage credits while Anthropic scales capacity. The goal is to restore it as a standard plan feature as soon as capacity allows.

## Supported Features

<div class="article-keypoints">
<ul>
<li>1M token context window by default; up to 128k output tokens per request</li>
<li>Effort parameter and task budgets (beta: task-budgets-2026-03-13 header)</li>
<li>Memory tool, code execution, programmatic tool calling</li>
<li>Tool result clearing via context editing (beta: context-management-2025-06-27 header)</li>
<li>Compaction for long sessions; Vision for image and screenshot understanding</li>
<li>API model ID: <code>claude-fable-5</code></li>
</ul>
</div>

## Safety by Design

Fable 5 represents a new approach to safety architecture. Rather than restricting the model's capabilities, Anthropic's classifiers **detect the context** of a request and route it appropriately. A developer asking how to secure a web server gets Fable 5's full power. A request touching on active cyberweapon development gets redirected to Opus 4.8, which still provides useful assistance on the legitimate aspects.

Anthropic acknowledges the current classifiers are broad and will continue refining them to better allow safe requests that currently trigger false positives.

## The Bigger Picture

Fable 5 is not a marginal improvement — it opens a class of long-horizon problems that were genuinely out of reach for earlier models. Multi-day autonomous sessions. Self-testing code. Codebase migrations at scale. Financial analysis at senior analyst quality. These are qualitative capability jumps.

The combination of Mythos-class performance with practical safety controls represents Anthropic's most direct argument that powerful AI and safe AI are not in fundamental tension.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic: Official Claude Fable 5 & Mythos 5 launch post (full benchmarks)</a><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5.md" target="_blank" rel="noopener noreferrer">Claude Developer Docs: API integration guide and supported features</a><br>— <a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener noreferrer">Claude Fable 5 product page: benchmarks, pricing, and access</a></div></div>
