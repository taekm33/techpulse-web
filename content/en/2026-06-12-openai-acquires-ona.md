---
title: "OpenAI Acquires Ona to Power Long-Running Codex Agents in the Enterprise"
summary: "OpenAI is acquiring cloud execution startup Ona to let Codex agents keep working inside a customer's own cloud environment even after a session ends — removing the biggest enterprise blocker for persistent AI agents."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["OpenAI", "Codex", "AI Agents", "Cloud", "Enterprise"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> On June 11, 2026, OpenAI announced the acquisition of <strong>Ona</strong>, a cloud execution and orchestration startup. Ona's technology enables AI agents to operate inside a customer's own cloud environment — persisting beyond any single session — and will be integrated into Codex to serve enterprises with strict security and governance requirements.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/_-cdky1tbaQ" title="OpenAI + Dell Bring Codex On-Prem (AI Agents Behind the Firewall)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Ona?

Ona is a developer infrastructure company that has spent years building secure, reproducible cloud environments for software development. The company has helped more than **2 million developers** move their work off local machines and into persistent cloud workspaces. It supports multiple shared customers alongside OpenAI, meaning integration is already underway.

The acquisition price has not been disclosed. Regulatory approvals are still pending; until then, OpenAI and Ona will continue to operate independently.

## Why OpenAI Needs This

Codex has grown explosively. OpenAI now reports more than **5 million weekly active users** — a **400% jump** from the start of 2026. More importantly, the nature of the work has shifted: users are no longer asking Codex to write a function. They want it to refactor an entire codebase, investigate a security incident, or automate a week-long research pipeline.

That kind of work cannot be tied to an open browser tab or a running laptop. Agents need somewhere to live between user interactions.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">5M+</span><span class="stat-label">Codex weekly active users</span></div>
<div class="stat-item"><span class="stat-number">400%</span><span class="stat-label">Growth since early 2026</span></div>
<div class="stat-item"><span class="stat-number">2M+</span><span class="stat-label">Developers on Ona's platform</span></div>
<div class="stat-item"><span class="stat-number">June 11</span><span class="stat-label">Acquisition announced</span></div>
</div>

## What Ona Brings to Codex

The core value is Ona's **customer-controlled execution model**: agents run inside the organization's own cloud infrastructure, not on OpenAI's shared servers. OpenAI provides the intelligence and orchestration; the customer controls where it runs, what it can access, how credentials are scoped, and how every action is logged.

| Feature | Codex Today | Codex + Ona |
|---------|-------------|-------------|
| Execution | Local sandbox or OpenAI-hosted | Customer's own cloud |
| Session persistence | Active session required | Continues after laptop closes |
| Data location | Routes through OpenAI infrastructure | Stays inside customer network |
| Enterprise audit trail | Limited | Full credential + activity logging |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Key Enterprise Advantage</strong><br>For regulated industries — finance, healthcare, defense — the ability to keep all code and data inside their own infrastructure is often the difference between "approved pilot" and "blocked by legal." Ona's model threads that needle: enterprise-grade control without giving up OpenAI's model capabilities.</div>
</div>

## What the Leaders Said

OpenAI Core Products Lead **Thibault Sottiaux**: *"Enterprises want powerful agents that can do real work while meeting the security and control requirements of their environments. Ona will help us make Codex easier to deploy securely across production workflows for customers operating at the highest standards of trust and scale."*

Ona Co-Founder and CEO **Johannes Landgraf**: *"Agents need more than intelligence; they need a trusted workspace. We built Ona to give agents cloud environments with the context, control and collaboration enterprises require. Joining OpenAI lets us bring that foundation into Codex."*

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Competitive Context</strong><br>Anthropic's Claude is being deployed inside KPMG's 276,000-person workforce and deepening ties with enterprise security programs. GitHub Copilot already sits in hundreds of thousands of enterprise environments. OpenAI's response with Ona targets the data residency and security boundary barriers that have slowed enterprise rollouts — the deepest moat in the market.</div>
</div>

## What Happens Next

After regulatory approvals close, the Ona team joins OpenAI and works with the Codex team to scale persistent, customer-controlled agent execution worldwide. Existing Ona customers retain access throughout the transition.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>OpenAI announced acquisition of cloud execution startup Ona on June 11, 2026</li>
<li>Codex now has 5M+ weekly users, up 400% since early 2026 — persistent execution is the next bottleneck</li>
<li>Ona lets Codex agents keep working inside a customer's own cloud after a session ends</li>
<li>Customer-controlled execution model: data stays inside enterprise network, full audit logging</li>
<li>Ona team joins OpenAI Codex team post-close to accelerate enterprise deployment</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Further Reading</strong><br>— <a href="https://openai.com/index/openai-to-acquire-ona/" target="_blank" rel="noopener noreferrer">OpenAI Official Announcement — OpenAI to Acquire Ona</a><br>— <a href="https://developers.openai.com/codex/enterprise/admin-setup" target="_blank" rel="noopener noreferrer">Codex Enterprise Admin Setup Guide (OpenAI Developers)</a><br>— <a href="https://economictimes.indiatimes.com/tech/artificial-intelligence/openai-to-acquire-ona-to-strengthen-codex-cloud-capabilities/articleshow/131664834.cms" target="_blank" rel="noopener noreferrer">Analysis: Why OpenAI Acquired Ona — The Economic Times</a></div></div>
