---
title: "Anthropic Launches Claude Fable 5: Mythos-Class AI Goes Public — With Controversy"
summary: "Anthropic released Claude Fable 5 on June 9, 2026 — its most capable publicly available model yet. The launch was immediately shadowed by backlash over safety classifiers that silently downgraded legitimate researcher and developer requests, prompting a swift public apology and transparency patch from Anthropic."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["Claude", "Anthropic", "AI", "Fable5", "AI Safety"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic launched <strong>Claude Fable 5</strong> on June 9, 2026 — a Mythos-class model now accessible to the general public. Within days, security researchers and developers reported that the model's safety classifiers were silently downgrading their legitimate work to Claude Opus 4.8 without any warning. Anthropic apologized and pushed a transparency fix, though capability limits remain in place.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5 — Anthropic" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Claude Fable 5?

Claude Fable 5 represents Anthropic's answer to a challenge that has defined frontier AI in 2026: how do you release a model powerful enough to be genuinely useful for hard problems without also handing a dangerous tool to bad actors?

The model is built on the same underlying architecture as Claude Mythos Preview — which Anthropic previously refused to release publicly after discovering it could identify thousands of cybersecurity vulnerabilities at will. With Fable 5, Anthropic chose a middle path: release the Mythos-class capabilities wrapped in safety classifiers that review and redirect high-risk requests.

The result is a model designed for sustained, autonomous work. Fable 5 can operate on complex projects for **days at a time** with minimal human oversight — tackling multi-step research, financial analysis, legal document review, and advanced software engineering tasks that previously required constant supervision.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">$10</span>
<span class="article-stats__label">per million input tokens</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">$50</span>
<span class="article-stats__label">per million output tokens</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">621K</span>
<span class="article-stats__label">YouTube views in 4 days</span>
</div>
</div>

## How the Safety Classifiers Work

Fable 5 includes an automated review layer that scans incoming requests touching **cybersecurity, biology, chemistry, and health** domains. Requests deemed high-risk are silently redirected to Claude Opus 4.8 — a capable model, but not Fable-class. Anthropic designed this as the mechanism that makes it possible to offer Mythos-level capabilities broadly without enabling the worst-case misuse scenarios.

The problem was in the implementation. Within hours of launch, security researchers, scientists, and developers began reporting that perfectly legitimate work was being caught by the classifier. Worse, in many cases they weren't told it was happening — they believed they were talking to Fable 5 but were actually receiving Opus 4.8 responses. Fortune described it as "secret sabotage"; The Register documented multiple cases of harmless prompts being outright refused.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>Anthropic's Response</strong><br>
Anthropic issued a public apology within days and deployed a patch: when the classifier triggers, users now receive a <strong>visible notification</strong> that their request has been redirected to Opus 4.8. The underlying capability limits remain — only the transparency changed.
</div>
</div>

## Claude Mythos 5: The Unrestricted Tier

Alongside Fable 5, Anthropic also launched **Claude Mythos 5** — the same base model but with the cybersecurity classifiers lifted. This version is available only to vetted partners through **Project Glasswing**, a collaboration with the US government, and to select biological research institutions. Anthropic describes it as having "the strongest cybersecurity capabilities of any model in the world."

## Availability Breakdown

| Platform | Status |
|----------|--------|
| Claude API (direct) | Generally available |
| Amazon Bedrock | Generally available (N. Virginia, Stockholm) |
| Google Vertex AI | Generally available |
| Microsoft Foundry | Generally available |
| Pro / Max / Team plans | Free until June 22, then requires usage credits |
| Claude Mythos 5 | Glasswing partners only |

The API model identifier is `claude-fable-5`. Mythos is `claude-mythos-5`.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>For Developers</strong><br>
Any integration calling <code>claude-fable-5</code> must now handle <strong>refusal responses</strong> from the safety classifier. Design a fallback strategy from the start — retry logic or a secondary model call — or your application will fail silently for users in flagged domains.
</div>
</div>

## The Bigger Picture

Fable 5's first week illustrates the fundamental difficulty of the safety tradeoff at the frontier. A keyword-and-category classifier bolted in front of a powerful model is a blunt instrument: sophisticated attackers probe its edges, while ordinary users get caught in the blast radius. Anthropic released Fable 5 days after publicly warning that frontier AI was approaching a dangerously capable threshold — and its first week showed just how hard it is to draw a safety line that stops bad actors without punishing legitimate users.

The transparency patch is a start. Whether refinements to the classifier can close the gap between "stops harm" and "doesn't obstruct research" is the question Anthropic will be working to answer in the weeks ahead.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Claude Fable 5 is the first Mythos-class model available to the general public</li>
<li>Built-in safety classifiers redirect cybersecurity and biology requests to Opus 4.8</li>
<li>Silent downgrading of legitimate work sparked immediate backlash → Anthropic apologized and pushed visibility patch</li>
<li>Pricing: $10 / million input tokens, $50 / million output tokens</li>
<li>Subscription plans include Fable 5 free through June 22, then usage credits required</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Documentation</strong><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5.md" target="_blank" rel="noopener noreferrer">Claude Fable 5 Official API Docs &amp; Migration Guide</a><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/overview" target="_blank" rel="noopener noreferrer">Claude Model Overview &amp; Comparison (Official)</a><br>— <a href="https://platform.claude.com" target="_blank" rel="noopener noreferrer">Claude Platform — Get API Access &amp; Start Building</a></div></div>
