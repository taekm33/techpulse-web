---
title: "Claude Fable 5 Launch: Anthropic's Most Capable Model Goes Public"
summary: "Anthropic released Claude Fable 5 on June 9, 2026 — a Mythos-class model with safety classifiers enabling broad public access. It scores 95% on SWE-bench Verified and can run autonomously for days."
category: "ai-news"
date: "2026-06-16"
readingTime: 5
tags: ["Claude", "Anthropic", "LLM", "AI Model", "Agentic AI"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Anthropic launched Claude Fable 5 on June 9, 2026: a Mythos-class model made safe for general use. It achieves 95% on SWE-bench Verified and 80% on SWE-bench Pro. Priced at $10 input / $50 output per million tokens — less than half the cost of Claude Mythos Preview. It's purpose-built for long-horizon autonomous agent work lasting days without human intervention.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Why Now? From Mythos Preview to Fable 5

Claude Mythos Preview — Anthropic's previous frontier model — was powerful enough to identify thousands of cybersecurity vulnerabilities. Rather than risk that capability being misused, Anthropic restricted it to Project Glasswing: a US government partnership focused on finding and patching critical infrastructure flaws before bad actors could exploit them.

Over the following months, Anthropic engineered automated safety classifiers that detect high-risk requests (cybersecurity exploits, dangerous biology) and redirect them to Claude Opus 4.8. Those classifiers are now robust enough that the underlying Mythos-class capability can be released broadly — that release is Claude Fable 5.

Claude Mythos 5 also launched simultaneously: it's the same model as Fable 5 but with the cyber and biology classifiers lifted, available only to Glasswing partners and approved biosecurity researchers.

## Performance at a Glance

<div class="article-stats">
  <div class="article-stat-item">
    <span class="stat-value">95%</span>
    <span class="stat-label">SWE-bench Verified</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">80%</span>
    <span class="stat-label">SWE-bench Pro</span>
  </div>
  <div class="article-stat-item">
    <span class="stat-value">$10 / $50</span>
    <span class="stat-label">Price per million tokens (input / output)</span>
  </div>
</div>

## Fable 5 vs. Mythos Preview

| Feature | Claude Mythos Preview | Claude Fable 5 |
|---|---|---|
| Access | Glasswing partners only | Generally available |
| Pricing (in/out) | Higher | $10 / $50 per M tokens |
| Cyber safety classifiers | None | Auto-classify & redirect |
| Long-horizon agents | Yes | Enhanced |
| Biology safety classifiers | None | High-risk requests blocked |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Subscription Plan Users: Note the Access Window</strong><br>Fable 5 is fully available on the Claude API and consumption-based Enterprise plans from launch day. For Pro, Max, Team, and seat-based Enterprise subscription plans, Fable 5 is included at no extra cost through June 22. From June 23 onward, using it will require usage credits. Anthropic plans to restore Fable 5 as a standard subscription inclusion once capacity allows.</div>
</div>

## Built for Long-Horizon Agentic Work

The defining capability of Fable 5 is sustained autonomous operation. While earlier Claude models excel at individual tasks, Fable 5 is designed to maintain coherent, goal-directed work across multi-day projects — coding agents, research pipelines, financial analysis workflows, and legal review tasks that previously required constant human supervision.

Key supported capabilities:
- **Effort control** and **Task Budgets** (manage inference cost per task)
- **Memory Tool** — persistent context across sessions
- **Code Execution** — sandboxed runtime
- **Context Editing** (beta) — trim and restructure long conversations
- **Compaction** — efficient long-context management

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Developer Quick Start</strong><br>Use model ID <code>claude-fable-5</code> on the Claude API, Amazon Bedrock, Google Vertex AI, or Microsoft Foundry. Mythos 5 uses <code>claude-mythos-5</code> and requires Glasswing access. Pricing is identical for both: $10 input / $50 output per million tokens, with a 90% discount on cached input tokens.</div>
</div>

## Safety Architecture: The Classifier System

Rather than wholesale restricting a model's capabilities, Anthropic built domain-specific safety classifiers that intercept requests touching high-risk areas — cyberweapon development, dangerous pathogens — and route them to Claude Opus 4.8 instead. Fable 5 itself handles everything else. Anthropic acknowledges the classifiers are broad today and commits to refining them over time so legitimate security research and biology queries are handled appropriately.

This architecture represents a shift in how frontier AI labs think about safety: instead of choosing between capability and safety, Anthropic is betting on fine-grained real-time intervention.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Claude Fable 5 is the first Anthropic model bringing Mythos-class capability to the general public</li>
<li>95% on SWE-bench Verified, 80% on SWE-bench Pro</li>
<li>$10 / $50 per million tokens — more than 50% cheaper than Mythos Preview</li>
<li>Designed for multi-day autonomous agentic workflows without human intervention</li>
<li>Automatic safety classifiers redirect high-risk requests to Claude Opus 4.8</li>
<li>Claude Mythos 5 (classifiers lifted) is available simultaneously for Glasswing partners</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Developer Docs</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic Official Announcement — Claude Fable 5 & Mythos 5</a><br>— <a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener noreferrer">Claude Fable 5 Product Page (Pricing & Availability)</a><br>— <a href="https://platform.claude.ai/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5.md" target="_blank" rel="noopener noreferrer">Developer Docs — API Integration & Model IDs</a></div></div>
