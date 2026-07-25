---
title: "Anthropic Launches Claude Opus 5 — 'Fable 5-Class Intelligence at Half the Price'"
summary: "Anthropic released Claude Opus 5 across all platforms on July 24, offering intelligence close to its top public model, Fable 5, at half the cost ($5/$25). It set new state-of-the-art marks on coding and knowledge-work benchmarks, and its internal alignment audit rated it the company's most aligned model to date."
category: "ai-news"
date: "2026-07-26"
readingTime: 6
tags: ["Anthropic", "Claude", "Opus 5", "AI models", "coding AI"]
---

<div class="article-tldr">
Anthropic shipped <strong>Claude Opus 5</strong> on July 24, available on every platform. The headline is intelligence approaching its top public model, Fable 5, at half the price — $5 per million input tokens and $25 output, the same as the prior Opus 4.8. It set new highs on coding and knowledge-work benchmarks, and Anthropic's automated behavioral audit rated it "our most aligned model to date." Its dual-use cyber and biology capabilities remain deliberately behind the higher-tier Mythos 5.
</div>

Anthropic has unveiled Claude Opus 5, the newest generation of its Opus tier, and is positioning it as "the one you reach for by default, every day, without thinking about the bill." The message is clear: pull a top-tier model down from special-occasion use into everyday work.

## What changed

The core story is intelligence per dollar. Opus 5 comes close to Fable 5, Anthropic's most capable public model, while costing half as much. Its absolute price is pinned to the previous Opus 4.8 — $5 per million input tokens and $25 output — so the cost held flat while capability jumped.

A low/medium/high effort setting lets customers trade capability against token spend on a per-request basis. According to Anthropic, Opus 5 posts new state-of-the-art results on coding and knowledge-work evaluations including Frontier-Bench and GDPval-AA.

<div class="article-stats">
<strong>Launch</strong> July 24, 2026 (all platforms)<br/>
<strong>Price</strong> $5 input / $25 output per 1M tokens (same as Opus 4.8 · half of Fable 5)<br/>
<strong>Fast mode</strong> ~2.5x default speed at 2x price ($10 / $50)<br/>
<strong>Alignment score</strong> 2.3 misaligned-behavior — lowest of recent models<br/>
<strong>Cyber classifier interventions</strong> ~85% fewer than Fable 5
</div>

## The character behind the benchmarks

Anthropic's charts plot performance by effort setting. On Frontier-Bench v0.1, Opus 5 surpasses every rival and more than doubles Opus 4.8's score at a lower cost per task. On CursorBench 3.2 at max effort, it lands within 0.5% of Fable 5's peak while costing half as much per task.

On ARC-AGI 3, an evaluation of novel problem-solving, Opus 5 scores about three times the next-best model. On the computer-use benchmark OSWorld 2.0, it beats every model at a given cost, surpassing Fable 5's best result at just over a third of the cost.

| Evaluation | Opus 5 result |
|---|---|
| Frontier-Bench v0.1 | #1 of all models · 2x+ over Opus 4.8, at lower cost |
| CursorBench 3.2 (max effort) | Within 0.5% of Fable 5's peak, at half the cost |
| ARC-AGI 3 | ~3x the next-best model |
| OSWorld 2.0 (computer use) | Beats all models at a given cost |

Anthropic paired the launch with early-access customer reports. Cursor called it "near Fable 5 intelligence at Opus speed and cost." Cognition, which builds Devin, said it "approaches Fable-level performance at half the cost" on FrontierCode 1.1. Zapier reported Opus 5 topped its AutomationBench leaderboard and completed, at 100%, a task previous models had failed.

## Alignment and safety

Anthropic says its pre-deployment automated behavioral audit found Opus 5 to be its most aligned model yet. Its overall misaligned-behavior score was 2.3, the lowest of recent models, and it showed lower rates of deceptive behavior and less susceptibility to being tricked into misuse than Opus 4.8, Sonnet 5, or Fable 5.

On safety, Opus 5 is designed not to advance the frontier of risky, dual-use capabilities. It was deliberately kept behind the higher-tier Mythos 5 on both biology research and offensive cybersecurity, and cyber tasks were excluded from training entirely. Opus 5 comes close to Mythos 5 at *finding* vulnerabilities, but lags far behind at turning them into working exploits.

<div class="article-callout info">
Opus 5's cyber classifiers are less restrictive than Fable 5's: they permit finding vulnerabilities in source code but block binary-based scanning, penetration testing, and exploit generation. Anthropic estimates the classifiers intervene roughly 85% less often than on Fable 5, and flagged requests in Claude.ai, Claude Code, and Claude Cowork fall back to Opus 4.8 by default.
</div>

## Two betas along for the ride

The launch also opened two beta features. One lets developers change which tools Claude can use mid-conversation without invalidating the prompt cache. The other, automatic API fallbacks, routes requests flagged by safety classifiers to another model instead of blocking them — turn it on and requests always route to the best available model rather than failing.

## Why it matters

Opus 5's real message sits on the price tag more than the benchmark table. By binding top-tier intelligence to an everyday price rather than a premium one, Anthropic is pushing frontier models from special moments into the daily default. Holding the price at Opus 4.8 levels while raising performance is also a competitive lever — "same cost, higher capability" — in an increasingly crowded frontier market.

<div class="article-keypoints">
<ul>
<li>Claude Opus 5 launched July 24 on all platforms — Fable 5-class intelligence at half the price ($5/$25 in/out).</li>
<li>New highs on coding and knowledge-work benchmarks (Frontier-Bench, GDPval-AA); ~3x the next-best on ARC-AGI 3.</li>
<li>Rated "most aligned model to date" (2.3 misalignment); cyber and biology capabilities kept below Mythos 5 by design.</li>
<li>Ships with Fast mode (2.5x speed, 2x price) plus mid-conversation tool changes and automatic API fallbacks in beta.</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://www.anthropic.com/news/claude-opus-5" target="_blank" rel="noopener">Anthropic — Introducing Claude Opus 5</a><br/>
<a href="https://www.anthropic.com/claude-opus-5-system-card" target="_blank" rel="noopener">Claude Opus 5 System Card</a><br/>
<a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5" target="_blank" rel="noopener">Prompting Claude Opus 5 (Claude Platform docs)</a>
</div>
