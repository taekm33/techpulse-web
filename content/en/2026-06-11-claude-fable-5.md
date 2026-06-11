---
title: "Claude Fable 5 Is Here: Mythos-Class AI for Everyone"
summary: "Anthropic has launched Claude Fable 5, its most capable publicly available model yet. Built for days-long autonomous tasks and equipped with safety classifiers, it marks the first general release of Mythos-class AI capabilities."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["Claude", "Anthropic", "AI Model", "Fable 5", "Agentic AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic launched Claude Fable 5 on June 9, 2026, making Mythos-class capabilities available to all users for the first time. The model features built-in safety classifiers for cybersecurity and biology domains, falls back to Opus 4.8 for flagged requests (under 5% of sessions), and can operate autonomously for days on end. It sets new state-of-the-art scores on software engineering, finance, legal, and scientific research benchmarks.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">$10</span><span class="article-stats__label">per million input tokens</span></div>
  <div class="article-stats__item"><span class="article-stats__value">$50</span><span class="article-stats__label">per million output tokens</span></div>
  <div class="article-stats__item"><span class="article-stats__value">&lt;5%</span><span class="article-stats__label">safety fallback rate</span></div>
  <div class="article-stats__item"><span class="article-stats__value">Days</span><span class="article-stats__label">max autonomous runtime</span></div>
</div>

## The Wait Is Over: Mythos Goes Public

Back in April, Anthropic quietly released Claude Mythos Preview — but only to a tightly controlled group of cyber defenders and critical infrastructure providers through Project Glasswing. The reason was stark: the model could autonomously discover thousands of cybersecurity vulnerabilities, and in the wrong hands, that capability could be catastrophic.

After months of refining safety systems, Anthropic has now released **Claude Fable 5**, a model built on the same foundation as Mythos but wrapped with new safety classifiers. These classifiers automatically redirect high-risk queries — touching cybersecurity, biology, and chemistry — to Claude Opus 4.8. In practice, this affects fewer than 5% of all sessions, meaning the vast majority of users get full Mythos-level performance.

## Long-Horizon Autonomy: The Core Capability Leap

What sets Fable 5 apart from every previous Claude model is its ability to work for **days without human intervention**. Earlier models excelled at discrete, session-length tasks. Fable 5 is built for the kind of open-ended, multi-phase projects that previously demanded constant oversight.

Real-world validation has been swift. Stripe reported that Fable 5 compressed months of engineering into days — performing a codebase-wide migration across a 50-million-line Ruby codebase in a single day, a task that would have taken a full team over two months. Cognition's FrontierCode evaluation, which measures both coding quality and production standards, ranked Fable 5 highest among frontier models even at medium effort.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Developer Tip</strong><br>Access Fable 5 via the API using model ID <code>claude-fable-5</code>. It supports task budgets (set the <code>task-budgets-2026-03-13</code> header), the memory tool, code execution, and vision. Build fallback logic for safety classifier redirects — the response will come from Opus 4.8 and users will be notified when it occurs.</div>
</div>

## Performance Across Domains

Fable 5 doesn't just excel at coding. Anthropic and early access partners report state-of-the-art performance across a wide range of knowledge-intensive domains:

- **Finance**: Topped Hebbia's senior-level Finance Benchmark with major gains in document reasoning and chart interpretation. IMC called it "near-perfect" across trading analysis evaluations including root-cause analysis and expected-value calculations.
- **Vision**: New state-of-the-art for vision-based tasks — extracting precise data from scientific figures, reconstructing web app source code from screenshots, and beating Pokémon FireRed using only raw game screenshots and no helper tools.
- **Science**: In protein design experiments, Mythos 5 (the same base model) matched or outperformed human experts with full bioinformatics tooling — advancing several drug design candidates for experimental follow-up.
- **Legal**: In blind document review, legal teams at early access customers found Fable 5's redlines matched or beat the incumbent model every time.

## Model Comparison

| Model | Capabilities | Safety Classifiers | Availability |
|-------|--------------|--------------------|--------------|
| Claude Fable 5 | Mythos-class, general use | Cyber + bio/chem classifiers active | Generally available |
| Claude Mythos 5 | Same base model as Fable 5 | Classifiers partially lifted | Project Glasswing partners only |
| Claude Opus 4.8 | Previous flagship general model | Standard safeguards | Generally available |

## Pricing and Availability

Both Fable 5 and Mythos 5 are priced at **$10 per million input tokens** and **$50 per million output tokens** — less than half the price of Claude Mythos Preview. The models are available on the Claude API, Amazon Bedrock, Vertex AI, and Microsoft Foundry.

For subscription users: Fable 5 is included at no extra cost through **June 22, 2026** on Pro, Max, Team, and Enterprise seat-based plans. After that date, usage credits will be required. Anthropic has committed to restoring Fable 5 to standard subscription plans as quickly as capacity allows.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>What About Claude Mythos 5?</strong><br>Mythos 5 is the same underlying model as Fable 5, but with safety classifiers partially lifted. It is currently available exclusively to Project Glasswing cybersecurity partners (cyber classifiers removed) and will soon expand to select biology researchers (bio/chem classifiers removed). A broader Trusted Access Program is forthcoming.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Claude Fable 5 is the first publicly available Mythos-class model, capable of multi-day autonomous operation without human intervention</li>
<li>Safety classifiers redirect risky cybersecurity and biology queries to Opus 4.8, affecting under 5% of sessions</li>
<li>Sets new SOTA benchmarks in software engineering, finance, legal, vision, and scientific research</li>
<li>API model ID: <code>claude-fable-5</code> — $10 input / $50 output per million tokens</li>
<li>Free for existing subscribers until June 22; usage credits required after that</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · How to Get Started</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic Official Announcement: Claude Fable 5 & Mythos 5</a><br>— <a href="https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5" target="_blank" rel="noopener noreferrer">Claude API Docs: Fable 5 Integration Guide & Model IDs</a><br>— <a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener noreferrer">Claude Fable 5 Product Page — Anthropic</a><br>— <a href="https://aws.amazon.com/about-aws/whats-new/2026/06/claude-fable-5-aws/" target="_blank" rel="noopener noreferrer">AWS: Claude Fable 5 on Amazon Bedrock</a></div></div>
