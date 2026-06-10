---
title: "Claude Fable 5 Launches: Anthropic Brings Mythos-Class AI to the Public"
summary: "Anthropic released Claude Fable 5 on June 9, 2026 — the first publicly available Mythos-class model. It scores 91 on the senior-engineer benchmark versus 63 for Opus 4.8, excels at long-running agentic tasks, and is available via API today. Subscription users get free access through June 22."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Anthropic", "Claude", "Fable5", "Mythos", "AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic launched Claude Fable 5 on June 9, 2026, marking the first time Mythos-class capabilities are available to the general public. The model is accessible via <code>claude-fable-5</code> in the API at $10/M input and $50/M output tokens. Subscription users (Pro, Max, Team, Enterprise) get it included at no extra cost through June 22, after which usage credits are required.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/GrdEid8H6H4" title="We Tested Anthropic's Fable 5 for a Week" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Happened

On June 9, 2026, Anthropic made its most capable model publicly available for the first time. **Claude Fable 5** is a Mythos-class model with safeguards that redirect certain requests in cybersecurity, biology, chemistry, and model distillation to Claude Opus 4.8. According to Anthropic, these fallbacks occur in fewer than 5% of sessions, meaning most users interact with the full Mythos-class model.

Simultaneously, Anthropic launched **Claude Mythos 5** — the same underlying model with some safeguards removed — exclusively for Project Glasswing partners: vetted cyberdefenders, critical infrastructure providers, and, eventually, life sciences researchers via a separate biology program.

<div class="article-stats">
<strong>Key Numbers</strong>
<ul>
  <li>🏆 <strong>Senior-Engineer Benchmark:</strong> Fable 5 → 91/100 vs Opus 4.8 → 63/100 vs GPT-5.5 → 62/100</li>
  <li>💰 <strong>Pricing:</strong> $10/M input tokens · $50/M output tokens (2× Opus cost)</li>
  <li>📅 <strong>Subscription free window:</strong> June 9 – June 22 (Pro, Max, Team, Enterprise)</li>
  <li>🔗 <strong>Context window:</strong> 1 million tokens</li>
  <li>🛡️ <strong>Safety fallback rate:</strong> &lt;5% of sessions</li>
</ul>
</div>

## Why Fable 5 Matters

### A Step-Change in Coding Performance

Dan Shipper, CEO of Every, spent a week testing Fable 5 using an in-house "senior-engineer benchmark" — presenting the model with a real production codebase and asking how it would refactor it from first principles. Fable 5 scored **91 out of 100**, matching a human senior engineer given a single prompt. The previous best was Opus 4.8 at 63. GPT-5.5 landed at 62.

The key differentiator isn't raw intelligence but **autonomous endurance**: Fable 5 takes on large, multi-file projects with fewer corrections and check-ins than previous models. It's designed for the kind of work where you hand off a project and come back to a result.

### Updated Claude Model Tiers

| Tier | Use Case | Best For |
|------|----------|----------|
| Haiku | Ultra-fast, lightweight | Simple automation |
| Sonnet | Balanced | Everyday tasks |
| Opus | Complex collaboration | Synchronous complex work |
| **Fable (Mythos-class)** | **Highest capability, public** | **Autonomous long projects** |
| Mythos | Highest capability, restricted | Cybersecurity / infrastructure |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>How to Start Using Fable 5 Right Now</strong><br>Install the SDK: <code>pip install anthropic</code>. Then pass <code>model="claude-fable-5"</code> in your API call. For subscription users on Pro, Max, Team, or seat-based Enterprise, the model is included at no extra cost through June 22 — this is the window to run your most ambitious evaluations for free.</div>
</div>

## Where Is It Available?

Fable 5 is live today across all major platforms:

- **Claude API** (model ID: `claude-fable-5`)
- **Amazon Bedrock** and **Claude Platform on AWS**
- **Microsoft Foundry**
- **Claude.ai** (Pro, Max, Team, and seat-based Enterprise through June 22)

On June 23, Anthropic will remove Fable 5 from subscription plans and require usage credits. The company says it intends to restore it as a standard subscription benefit as soon as capacity allows.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>What Is Project Glasswing?</strong><br>Project Glasswing is Anthropic's restricted access program for Mythos-class models, launched in April 2026 in collaboration with the US government. Glasswing partners — currently around 40 organizations including cloud providers, OS vendors, and critical infrastructure operators — receive access to Mythos 5, which has cybersecurity safeguards removed. A broader trusted-access program is in development to eventually expand Mythos access. A separate biology program will give selected life sciences researchers access with bio/chemistry safeguards removed while retaining cyber restrictions.</div>
</div>

## Industry Reactions

GitHub CEO Thomas Dohmke called Fable 5 "a real step forward for the developers GitHub serves," noting it tackled long-horizon coding tasks "with a level of autonomy and reliability that exceeded expectations." AWS launched Fable 5 on Amazon Bedrock the same day, describing it as built for "ambitious, long-running and complex work that previous models couldn't sustain."

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>Claude Fable 5 is Anthropic's first publicly available Mythos-class model, launched June 9, 2026</li>
  <li>Scores 91/100 on the senior-engineer benchmark — 28 points above Opus 4.8 and GPT-5.5</li>
  <li>Available now via Claude API, Amazon Bedrock, Microsoft Foundry, and Claude.ai</li>
  <li>Subscription users get free access through June 22; usage credits required from June 23</li>
  <li>Mythos 5 (same model, safeguards removed) remains restricted to Project Glasswing partners</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Resources &amp; Docs</strong><br>— <a href="https://github.com/anthropics/anthropic-sdk-python" target="_blank" rel="noopener noreferrer">Anthropic Python SDK (GitHub) — get started with claude-fable-5</a><br>— <a href="https://pypi.org/project/anthropic/" target="_blank" rel="noopener noreferrer">PyPI: anthropic package — pip install anthropic</a><br>— <a href="https://github.com/anthropics/courses" target="_blank" rel="noopener noreferrer">Anthropic Courses (GitHub) — API tutorials and code examples</a></div></div>
