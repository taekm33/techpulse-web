---
title: "Google's Gemini Managed Agents API: Stateful AI Agents in a Single HTTP Call"
summary: "At Google I/O 2026, Google launched the Gemini Managed Agents API — one POST call provisions an isolated Linux sandbox, runs your agent, and returns stateful results. Combined with ADK 2.0 GA, the entire agentic infrastructure stack collapses to an API."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["Google", "Gemini", "Managed Agents API", "ADK 2.0", "AI Agents", "Google I/O 2026"]
---

<div class="article-tldr">
Google's <strong>Gemini Managed Agents API</strong>, launched at Google I/O 2026, eliminates the VM provisioning, Docker setup, and orchestration boilerplate traditionally required to deploy AI agents. A single POST to <code>/v1beta/interactions</code> spins up an isolated Linux sandbox, runs your agent, and returns a stateful environment ID that persists across sessions. No database, no queue, no state machine on your end. The launch is paired with <strong>ADK 2.0 GA</strong> across Python, TypeScript, Go, Java, and Kotlin.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/VGpfnbr7rso" title="Build long-running agents with Google's Agentic Stack | The Agent Factory" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Infrastructure Problem, Solved

Deploying a production AI agent typically means wrangling VMs, Docker containers, a state database, queuing infrastructure, and an orchestration layer. Google's pitch with the Managed Agents API is straightforward: make the infrastructure problem disappear into an HTTP call.

The core mechanism is the new **Interactions API** (`POST /v1beta/interactions`). Pass an agent ID and a prompt, and Google provisions an isolated Linux container, runs the agent inside it, and returns the result. The agent has full Bash terminal access, can install packages, and can write files.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">7 days</span>
<span class="stat-label">Sandbox TTL — resume same filesystem state with environment_id</span>
</div>
<div class="stat-item">
<span class="stat-number">55 days</span>
<span class="stat-label">Interaction retention on paid tier (free tier: 1 day)</span>
</div>
<div class="stat-item">
<span class="stat-number">5 languages</span>
<span class="stat-label">ADK 2.0 GA — Python, TypeScript, Go, Java, Kotlin</span>
</div>
</div>

## Stateful by Design

What separates the Managed Agents API from a simple code execution sandbox is **persistence**. Each interaction returns an `environment_id`. Pass that ID on your next call and the agent resumes in the exact same environment — same filesystem, same installed packages, same working state — without any database or queue on your end.

The sandbox has a 7-day TTL. Network isolation is off by default; external access requires an explicit allowlist. Paid-tier interactions are retained for 55 days; free tier, 1 day.

This design enables a class of **long-running agents** that couldn't previously exist without significant infrastructure investment:
- Multi-day HR onboarding coordinators waiting for human signatures
- Agents that autonomously build and configure operating systems
- Creative agents generating complex 3D scenes in Blender over several days

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Getting Started</strong><br>You need the <code>google-genai</code> Python package at version 1.55.0 or later. The default managed agent — <code>antigravity-preview-05-2026</code> — runs on Gemini 3.5 Flash and uses the same runtime powering Google's own first-party products. Network isolation is off by default; enable external access via an explicit allowlist in your interaction request.</div>
</div>

## ADK 2.0: From Hierarchical to Graph-Based

Google also shipped **ADK 2.0** to general availability at Google I/O 2026. The headline change: replacing the old hierarchical executor with a **graph-based workflow engine**. This gives developers a continuous slider between dynamic model-led reasoning and strict deterministic pipelines.

| Feature | ADK 2.0 |
|---------|---------|
| Workflow engine | Graph-based (replaces hierarchical executor) |
| Execution style | Dynamic reasoning ↔ deterministic pipelines |
| Multi-agent support | Collaborative Workflows with parallel/sequential sub-agents |
| Languages (GA) | Python, TypeScript, Go, Java, Kotlin |
| CLI | `agy` command (replaces Gemini CLI) |
| IDE | Antigravity 2.0 (VS Code-based, up to 5 parallel agents) |

## Antigravity 2.0 and the Full Stack

The launch includes **Antigravity 2.0** — a full desktop IDE (VS Code-based) with a Manager View that orchestrates up to five parallel agents simultaneously. The `agy` CLI replaces the old Gemini CLI. Pricing runs from free preview up to $700/month for the highest quota tier.

Google positions this as its complete **Gemini Enterprise Agent Platform**: ADK for building, Agent CLI for quick deployment, Antigravity for IDE-based development, and Managed Agents for hosting — all connected through the Interactions API.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Availability</strong><br>— Gemini Managed Agents API: Public preview (built-in Antigravity &amp; Deep Research agents)<br>— ADK 2.0: GA in Python, TypeScript, Go, Java, Kotlin<br>— Antigravity 2.0 IDE: Public preview<br>— Pricing: Free preview up to $700/month (highest quota tier)<br>— Custom agents: Build with ADK and host on your own infrastructure using the SDK</div>
</div>

## How It Compares to OpenAI and Anthropic

Google, OpenAI (Codex), and Anthropic (Claude Code) are all converging on cloud-hosted sandbox architectures. The key differentiator for Gemini Managed Agents is the **isolation-by-default** posture: agents run inside Google's infrastructure, isolated from external networks unless you explicitly open them. This optimizes for a different threat model than Claude Code, which runs locally with full filesystem and network access. Neither approach is universally better — they target different deployment contexts and trust requirements.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Gemini Managed Agents API: Single POST call provisions a stateful Linux sandbox agent — no VMs, Docker, or state management required</li>
<li>environment_id enables session resumption with same filesystem state across calls</li>
<li>ADK 2.0 GA: graph-based workflow engine, Python/TS/Go/Java/Kotlin supported</li>
<li>Antigravity 2.0 IDE: VS Code-based with Manager View for up to 5 parallel agents</li>
<li>Long-running agents (days to weeks) officially supported with durable state checkpoints and event-driven dormancy</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://byteiota.com/gemini-managed-agents-api-stateful-ai-agents-one-call/" target="_blank" rel="noopener noreferrer">Gemini Managed Agents API — Technical Deep Dive (byteiota)</a><br>— <a href="https://google.github.io/adk-docs/2.0" target="_blank" rel="noopener noreferrer">Google ADK 2.0 — Official Documentation</a><br>— <a href="https://www.youtube.com/watch?v=VGpfnbr7rso" target="_blank" rel="noopener noreferrer">Google Cloud Tech — Building Long-Running Agents (Live Demo)</a><br>— <a href="https://www.youtube.com/watch?v=OdrOmc_RX8A" target="_blank" rel="noopener noreferrer">Google for Developers — Build Agents with Gemini API (Google I/O 2026)</a></div></div>
