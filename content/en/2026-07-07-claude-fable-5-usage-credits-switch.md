---
title: "Claude Fable 5 Leaves Subscription Plans Today, Shifts to Usage-Credit Billing"
summary: "Anthropic's flagship model Claude Fable 5 stops being included free within Pro, Max, and Team subscription limits as of today, July 7. Starting July 8, it bills through usage credits at standard API rates ($10 per million input tokens, $50 per million output tokens). Anthropic says the shift is temporary and it plans to restore subscription inclusion once capacity allows."
category: "ai-news"
date: "2026-07-07"
readingTime: 5
tags: ["Anthropic", "Claude", "Fable 5", "pricing", "usage-credits"]
---

<div class="article-tldr">
Anthropic's most capable model, Claude Fable 5, stops being free within Pro, Max, Team, and select Enterprise subscription limits as of today, July 7, 2026. From July 8, it moves to usage-credit billing at standard API rates — $10 per million input tokens and $50 per million output tokens. The change lands just a week after Fable 5 was redeployed globally following a US government export-control suspension in June. Anthropic says the shift is temporary and it intends to restore subscription inclusion once it has enough capacity.
</div>

Anthropic announced on June 30 that Claude Fable 5 would be included for Pro, Max, Team, and select premium Enterprise plans for up to 50% of weekly usage limits through July 7, after which it would only be available via usage credits. Today is that deadline.

## Why the Sudden Shift to Paid Access

Anthropic says demand for Fable 5 has been "very high, and difficult to predict." Rather than risk cutting off subscription access abruptly later, the company chose to roll it out conservatively and in stages from the start. Fable 5 remains fully available on the API and on consumption-based Enterprise plans regardless — this change only affects subscription plans.

A Claude Code lead engineer clarified on X that while Fable 5 does come off subscriptions after July 7, the company aims "to restore Fable as a standard part of our subscriptions as soon as capacity allows," echoing language from Anthropic's own blog post that it will bring the model back "when sufficient capacity allows us to do so."

<div class="article-stats">
<strong>Subscription inclusion ends:</strong> July 7, 2026<br/>
<strong>Post-deadline rate:</strong> $10 / 1M input tokens · $50 / 1M output tokens<br/>
<strong>Affected plans:</strong> Pro, Max, Team, select premium Enterprise<br/>
<strong>Unaffected:</strong> Opus 4.8, Sonnet, Haiku (stay within normal plan limits)
</div>

## A Two-Month Rollercoaster

Fable 5 (alongside its cybersecurity-focused sibling, Mythos 5) launched on June 9, only to have access suspended worldwide three days later, on June 12, under a US government export-control directive. That order followed a report that Amazon researchers had found a way to bypass Fable 5's safeguards to get the model to identify software vulnerabilities. Anthropic worked with the government to build an improved safety classifier that blocks the reported bypass, and the export controls were lifted on June 30, clearing the way for Fable 5 to be redeployed globally on July 1. Mythos 5 was also restored to a set of US organizations following government approval on June 26.

Anthropic said the new classifier blocks the reported bypass technique in more than 99% of cases, with blocked requests automatically routed to Opus 4.8 instead. Notably, the company's own testing found that weaker models — including Opus 4.8, GPT-5.5, and Kimi K2.7 — could identify the same vulnerabilities Fable 5 did in the original report, suggesting the incident was less a uniquely dangerous Fable 5 capability and more a borderline call about where to set the model's safety margin.

| Date | Event |
|---|---|
| 2026-06-09 | Fable 5 and Mythos 5 launch |
| 2026-06-12 | US export-control directive suspends all access |
| 2026-06-30 | Export controls lifted |
| 2026-07-01 | Fable 5 redeployed globally with new safety classifier |
| 2026-07-07 | Last day of free subscription inclusion |
| 2026-07-08 | Usage-credit billing begins |

<div class="article-callout tip">
If you're a Pro, Max, or Team subscriber who relies on Fable 5 regularly, enable and set a spending cap on usage credits now under Settings → Usage on claude.ai — otherwise access may simply stop working once July 8 arrives. Opus 4.8, Sonnet, and Haiku remain unaffected and stay within your normal subscription limits.
</div>

<div class="article-callout info">
Anthropic says it's also working with Amazon, Microsoft, Google, and other Project Glasswing partners on a shared industry framework for objectively scoring the severity of AI jailbreaks — a direct response to the kind of bypass that triggered this whole episode.
</div>

## What Comes Next

The episode illustrates how tightening safeguards on frontier models translates directly into availability and cost trade-offs: a wider safety margin means more false positives, and the resulting compute overhead gets passed on as capacity constraints. Anthropic has stressed the pricing shift is temporary, but without a firm date for restoring free subscription access, Pro and Max users should expect to manage usage credits carefully for the foreseeable future.

<div class="article-keypoints">
<ul>
<li>Claude Fable 5 exits free subscription inclusion on July 7; usage-credit billing ($10/1M input, $50/1M output) starts July 8.</li>
<li>The change comes just a week after Fable 5 was redeployed on July 1, following a US export-control suspension lifted June 30.</li>
<li>Anthropic calls the shift temporary and says it will restore subscription inclusion once capacity allows.</li>
<li>Opus 4.8, Sonnet, and Haiku are unaffected and remain within normal subscription limits.</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank" rel="noopener">Anthropic — Redeploying Fable 5 (official announcement)</a><br/>
<a href="https://www.anthropic.com/news/fable-safeguards-jailbreak-framework" target="_blank" rel="noopener">Anthropic — More details on Fable 5's cyber safeguards and jailbreak framework</a><br/>
<a href="https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/" target="_blank" rel="noopener">BleepingComputer — Claude Fable 5 isn't permanently leaving subscriptions</a><br/>
<a href="https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans" target="_blank" rel="noopener">Claude Support — Manage usage credits for paid Claude plans</a>
</div>
