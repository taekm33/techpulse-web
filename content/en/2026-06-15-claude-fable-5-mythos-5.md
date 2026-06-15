---
title: "Anthropic Launches Claude Fable 5 — Then Suspends It Three Days Later"
summary: "Anthropic released Claude Fable 5 and Mythos 5 on June 9, marking the first public release of a Mythos-class model with safety guardrails. Just three days later, on June 12, Anthropic suspended access to both models without disclosing a reason or recovery timeline."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["claude", "anthropic", "fable5", "ai-models", "llm"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic launched <strong>Claude Fable 5</strong> on June 9: the first Mythos-class model made broadly available, priced at $10 input / $50 output per million tokens — less than half the cost of Claude Mythos Preview. Three days later, on June 12, Anthropic suspended access to both Fable 5 and Mythos 5 with no stated reason and no recovery timeline. As of June 15, both models remain inaccessible.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Mythos-Class?

Anthropic's model hierarchy runs Haiku → Sonnet → Opus → **Mythos**, with Mythos representing a capability tier previously unavailable to the general public. The predecessor, Claude Mythos Preview, was restricted to a small group of cybersecurity defenders and critical infrastructure providers through **Project Glasswing**, a collaboration with the US government. The reason: Mythos Preview was capable of autonomously discovering thousands of zero-day security vulnerabilities — a capability too powerful to release openly without guardrails.

Fable 5 is Anthropic's answer: the same underlying Mythos architecture, but with a comprehensive safety layer that redirects high-risk cybersecurity and biology queries to Opus 4.8 instead of processing them directly.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">$10</span>
<span class="article-stats__label">Per million input tokens</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">$50</span>
<span class="article-stats__label">Per million output tokens</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">June 22</span>
<span class="article-stats__label">Planned end of free access for subscribers</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">June 12</span>
<span class="article-stats__label">Date access was suspended (still offline)</span>
</div>
</div>

## Fable 5 vs. Mythos 5: Same Core, Different Keys

Anthropic launched both models simultaneously on June 9.

| Attribute | Claude Fable 5 | Claude Mythos 5 |
|-----------|---------------|-----------------|
| Base model | Identical | Identical |
| Cybersecurity guardrails | Active (redirects high-risk queries) | Lifted |
| Biology/chemistry guardrails | Active | Partially lifted (planned) |
| Availability | All paid subscribers | Project Glasswing partners only |
| Pricing (input / output) | $10 / $50 per million tokens | Same |

Mythos 5 is, in Anthropic's words, "the same underlying model as Fable 5, but with safeguards lifted in some areas." It carries the strongest cybersecurity capabilities of any model in the world, per Anthropic, and access is restricted to organizations with established trust relationships with the US government.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>API Access After Recovery</strong><br>Once service is restored, developers can call Fable 5 using the model ID <code>claude-fable-5</code> via the Claude API. API and consumption-based Enterprise plans have full access. Pro, Max, Team, and seat-based Enterprise plans had free access planned through June 22 before the suspension occurred.</div>
</div>

## The Core Capability: Days-Long Autonomous Work

The defining feature of Fable 5 is **sustained autonomy**. Anthropic stated the model "can stay with a problem far longer than any model before it" and is capable of "operating for days without intervention." This is a direct pitch at agentic workflows where models must maintain context across hundreds of steps: large software migrations, multi-stage research projects, financial modeling, legal document analysis.

Anthropic's benchmark framing is telling: "The longer and more complex the task, the larger Fable 5's lead over our other models." This is not a model optimized for single-turn performance — it is built for endurance.

## The Suspension: Three Days and Gone

On June 12, three days after launch, Anthropic posted a brief notice on the Fable 5 product page:

> *"We are suspending access to Claude Fable 5 and Claude Mythos 5. We apologize for this disruption to our customers and are working to restore access as soon as possible."*

No cause was given. Speculation in the developer community centers on three scenarios: infrastructure overload from unexpectedly high demand, an edge case discovered in the safety systems post-launch, or a deliberate capacity-management pause. As of June 15, no recovery date has been announced.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>How the Safety Guardrails Work</strong><br>Fable 5's guardrails automatically review requests that touch high-risk areas such as cybersecurity exploits or biology. Those requests are redirected to Opus 4.8, which handles them with standard safety policies. Anthropic noted the guardrails are "broad today" and will be refined over time to allow safe requests through while blocking genuinely dangerous ones.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Claude Fable 5 is the first Mythos-class model available to the general public, equipped with cybersecurity and biology safety guardrails.</li>
<li>Claude Mythos 5 is the same base model with guardrails lifted, restricted to Project Glasswing partners with US government oversight.</li>
<li>Pricing: $10 input / $50 output per million tokens — less than half of Claude Mythos Preview's price.</li>
<li>Key capability: days-long autonomous operation, with performance advantages that grow with task length and complexity.</li>
<li>Access was suspended June 12 with no stated reason or recovery timeline. Both models remain offline as of June 15.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Documentation</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic Official Announcement — Claude Fable 5 &amp; Mythos 5 launch details and pricing</a><br>— <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">Claude Product Page — Current model availability and service status</a><br>— <a href="https://www.anthropic.com/api" target="_blank" rel="noopener noreferrer">Anthropic API Docs — Model IDs, pricing, and integration guides</a></div></div>
