---
title: "Anthropic Releases Claude Fable 5: The Most Powerful AI Model Available to the Public"
summary: "Anthropic's first Mythos-class model for general use ships with safety guardrails that auto-route high-risk requests to Opus 4.8, while 95% of sessions run on full Fable 5. Priced at $10/M input tokens — less than half the cost of Mythos Preview."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["Claude", "Anthropic", "AI", "Fable5", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Anthropic launched <strong>Claude Fable 5</strong> on June 9, 2026 — the first publicly available Mythos-class model. It carries automated safety guardrails that redirect cybersecurity and biology queries to Opus 4.8, with 95% of sessions running at full Fable 5 capability. API pricing starts at $10 per million input tokens.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Claude Fable 5?

On June 9, 2026, Anthropic released **Claude Fable 5**, making the Mythos architecture publicly available for the first time. Previously, this same underlying architecture (Claude Mythos Preview) had been restricted to vetted cybersecurity defenders through Project Glasswing. Fable 5 represents Anthropic's answer to the challenge of deploying frontier-level intelligence both safely and broadly.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">$10</span><span class="stat-label">per million input tokens</span></div>
<div class="stat-item"><span class="stat-number">$50</span><span class="stat-label">per million output tokens</span></div>
<div class="stat-item"><span class="stat-number">95%</span><span class="stat-label">of sessions run on full Fable 5</span></div>
<div class="stat-item"><span class="stat-number">&lt;5%</span><span class="stat-label">guardrail trigger rate</span></div>
</div>

## Why Mythos Preview Was Never Released Publicly

During training and evaluation of Mythos Preview, Anthropic discovered the model was capable of independently finding **thousands of cybersecurity vulnerabilities**. Rather than risk misuse, Anthropic chose not to release it publicly — instead deploying it to help defenders patch critical infrastructure flaws before bad actors could exploit them. Fable 5 is the result of that safety-first detour: a model with the same raw capability, refined for responsible broad deployment.

## How the Safety Guardrails Work

Fable 5 introduces an **automated safety routing system**. Queries touching high-risk domains — cybersecurity, biology, chemistry — are automatically reviewed and, if flagged, redirected to Opus 4.8 instead. This means users still get a highly capable response; it just comes from a model without Fable 5's frontier-level capabilities in those specific areas.

Anthropic reports the guardrails trigger in **fewer than 5% of sessions on average**, and acknowledges they are currently calibrated conservatively — some benign requests may be caught. The team is actively working to reduce false positives as they build more capacity.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Free Window for Subscribers</strong><br>From launch through June 22, 2026, Pro, Max, Team, and seat-based Enterprise subscribers can use Fable 5 at no extra cost. After June 22, usage credits will be required. Anthropic has indicated they intend to restore Fable 5 as a standard plan feature once capacity allows.</div>
</div>

## Claude Fable 5 vs. Claude Mythos 5

Alongside Fable 5, Anthropic simultaneously launched **Claude Mythos 5** — the same underlying model but with safeguards lifted in certain areas. Mythos 5 is currently restricted to Glasswing partners (government cyberdefenders and critical infrastructure providers) with the cyber safeguards removed. A broader **trusted access program** for select biology researchers and others is planned for the near future.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Major Price Drop</strong><br>Both Fable 5 and Mythos 5 are priced at $10/M input and $50/M output — more than 50% cheaper than Mythos Preview. Performance is comparable to or slightly better than Mythos Preview in most benchmarks.</div>
</div>

## What Fable 5 Is Built For

Anthropic emphasizes Fable 5's ability to sustain autonomous effort on complex, long-horizon tasks — potentially operating for **days without human intervention**. Target use cases include:

- **Software engineering**: large-scale refactoring, multi-repo debugging, extended agentic coding sessions
- **Research & analysis**: deep literature review, multi-source synthesis, financial modeling
- **Legal & compliance**: document review, contract analysis, regulatory mapping
- **Science**: experimental design, data interpretation, literature summarization

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Claude Fable 5 is the first publicly available Mythos-class model (launched June 9, 2026)</li>
<li>Safety guardrails auto-route risky queries to Opus 4.8 — affects fewer than 5% of sessions</li>
<li>API pricing: $10/M input, $50/M output — over 50% cheaper than Mythos Preview</li>
<li>Free on paid subscription plans through June 22; usage credits required after that</li>
<li>Claude Mythos 5 released simultaneously but restricted to Project Glasswing partners</li>
<li>Available on Claude API, AWS, Google Cloud, and Microsoft Foundry</li>
</ul>
</div>

## Availability & Access

| Plan | Availability | Notes |
|------|-------------|-------|
| Claude API | Immediate, full | `claude-fable-5` model ID |
| Consumption-based Enterprise | Immediate, full | No extra setup |
| Pro / Max / Team / Enterprise | Now through June 22 | Included at no extra cost |
| Pro / Max / Team / Enterprise | After June 22 | Usage credits required |
| AWS / GCP / Microsoft Foundry | Immediate | Full deployment |

## Infrastructure Scale

The Fable 5 launch is backed by a **$35 billion AI compute expansion** financed by Apollo and Blackstone via Broadcom's XPV platform. The initiative targets over 1 gigawatt of AI computing capacity from mid-2026, with a broader goal of 20+ gigawatts through 2028 — enough to sustain frontier model development at scale across multiple labs.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://github.com/anthropics/anthropic-sdk-python" target="_blank" rel="noopener noreferrer">Anthropic Python SDK (GitHub) — Official library for Claude API integration</a><br>— <a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer">Claude Code (GitHub) — Agentic coding CLI powered by Fable 5</a><br>— <a href="https://github.com/anthropics/anthropic-cookbook" target="_blank" rel="noopener noreferrer">Anthropic Cookbook (GitHub) — Prompt examples and API usage guides</a></div></div>
