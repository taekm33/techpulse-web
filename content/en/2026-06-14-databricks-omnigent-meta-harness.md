---
title: "Databricks Open-Sources Omnigent: A Meta-Harness to Unify Your AI Agents"
summary: "Databricks released Omnigent, an open-source meta-harness that sits above Claude Code, Codex, Pi, and custom agents — adding composition, stateful policy governance, and live session sharing. Apache 2.0, available now in alpha."
category: "dev-trend"
date: "2026-06-14"
readingTime: 5
tags: ["omnigent", "databricks", "ai-agents", "meta-harness", "open-source"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Databricks released Omnigent on June 13, 2026 — an open-source meta-harness that sits one abstraction layer above existing AI coding agents. It unifies Claude Code, Codex, Pi, and any custom agent behind a single interface, enforces stateful policies across agent sessions, and enables live real-time collaboration. Created by Matei Zaharia, original creator of Apache Spark and MLflow, under Apache 2.0.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/heouBA5U1bE" title="Genie Code in action – Databricks Official AI Agent End-to-End Demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is a Meta-Harness?

An agent harness is the scaffolding that turns a model into an agent — giving it the ability to read files, run terminal commands, and call external APIs. Claude Code, Codex, and Pi are all harnesses.

A meta-harness sits one level up: a layer that wraps multiple harnesses simultaneously, so the same policies, sessions, and collaboration tools apply regardless of which underlying agent is running. Databricks describes the meta-harness as the next major abstraction layer in the AI stack, comparable in importance to how cloud infrastructure abstracted individual servers.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>The core insight</strong><br>Agent harnesses made models swappable. Omnigent makes harnesses swappable. Switching from Claude Code to Codex becomes a one-line change, with no re-integration work and no session context lost.</div>
</div>

## Three Core Capabilities

### Composition

Omnigent wraps Claude Code, Codex, Pi, OpenAI Agents SDK, Claude Agents SDK, and custom agents behind a single uniform API. Multi-agent workflows — where several agents work on sub-tasks in parallel, or a coordinator delegates to specialists — can be configured without rewriting integration code.

### Control

Traditional agent policies are prompt-based, meaning the agent itself enforces them and can be overridden by context drift or adversarial input. Omnigent's policies are **stateful and contextual**: they track agent actions at the meta-harness layer and can enforce rules like "pause when session spend exceeds $3" or "require human approval before any `git push` that follows an `npm install`" — enforced by the harness, not by the model.

An OS sandbox called Omnibox intercepts network requests so agents never see credentials directly. Secrets like GitHub tokens are injected only on approved outbound requests via an egress proxy.

### Collaboration

Agent sessions can be shared via URL. Teammates can join a live session, review files, leave comments, co-drive the agent, or fork the conversation — all in real time, without copy-pasting between tools.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">Apache 2.0</span><span class="stat-label">Open source license</span></div>
<div class="stat-item"><span class="stat-number">138+</span><span class="stat-label">GitHub stars within two days</span></div>
<div class="stat-item"><span class="stat-number">4</span><span class="stat-label">Interfaces: terminal, web, desktop, mobile</span></div>
</div>

## Architecture

Omnigent has two components.

**Runner:** Wraps any agent in a sandboxed session with a uniform API. One command starts a terminal UI and simultaneously launches a local web UI at `http://localhost:6767` — the same session, reachable from browser, phone, or desktop app.

**Server:** Handles policies and sharing, exposing every session over terminal, web app, and API. Deploy to a server with a stable URL (Fly.io, Railway, Modal, Daytona, Render) and sessions become reachable from anywhere, including mobile.

## Feature Comparison

| Feature | Single Harness (e.g., Claude Code) | Omnigent Meta-Harness |
|---|---|---|
| Agents & models | One harness; swap models inside | Claude Code, Codex, Pi, SDKs, custom — interchangeable |
| Switching cost | Re-integrate per tool | One-line change |
| Interfaces | Terminal or that tool's UI | Terminal, web, desktop, mobile, APIs — synced |
| Governance | Allow/deny lists, prompt-based | Stateful contextual policies at harness layer |
| Cost control | Manual tracking | Budget policy auto-pauses at thresholds |
| Collaboration | Copy-paste between tools | Live shared sessions, co-drive, fork |
| Sandbox | Tool-dependent | OS sandbox + egress-proxy secret injection |
| Cloud execution | Local machine | Disposable Modal or Daytona sandboxes |
| License | Varies | Apache 2.0, open source |

## Getting Started

Omnigent requires Python 3.12+, Node.js 22 LTS, and tmux. Install in a single command:

```bash
uv tool install -q --python 3.12 git+https://github.com/omnigent-ai/omnigent.git
omnigent
```

Omnigent supports four credential types: first-party API keys (Anthropic, OpenAI), Claude Pro/Max or ChatGPT subscriptions, any OpenAI- or Anthropic-compatible gateway (OpenRouter, LiteLLM, Ollama, vLLM, Azure), and Databricks workspace profiles. Switch models mid-session with the `/model` command.

<div class="article-callout info">
<div class="article-callout__icon">🗓️</div>
<div class="article-callout__body"><strong>Databricks Data + AI Summit 2026</strong><br>Omnigent will be formally presented at Databricks Data + AI Summit (June 15–18, Moscone Center, San Francisco). Matei Zaharia's keynote is expected to include live demos and additional announcements. The virtual experience is free.</div>
</div>

## Roadmap

<div class="article-keypoints">
<ul>
<li>Automatic meta-harness level optimization with GEPA</li>
<li>Code-based introspection within agents, similar to MemEx and RLM</li>
<li>Omnigent Server MCP so agents can work across sessions</li>
<li>Additional harness integrations (community patches welcome)</li>
<li>Deploy targets: Fly.io, Railway, Render, Modal, Daytona sandboxes</li>
</ul>
</div>

## Why This Matters

Omnigent is not just a developer convenience. It stakes out the infrastructure layer above every AI coding agent that exists today. The policies, integrations, and session habits that accumulate inside a meta-harness over time create the same kind of durable switching costs that made data platforms sticky — even when the underlying code is open source.

Databricks open-sourced Omnigent two days before its own annual summit keynote. The adoption signal that accumulates this weekend becomes the data Matei Zaharia walks onto the keynote stage with on Monday.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://github.com/omnigent-ai/omnigent" target="_blank" rel="noopener noreferrer">GitHub: omnigent-ai/omnigent (source code, install guide, Apache 2.0)</a><br>— <a href="https://pypi.org/project/omnigent/" target="_blank" rel="noopener noreferrer">PyPI: omnigent package (pip/uv install)</a><br>— <a href="https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents" target="_blank" rel="noopener noreferrer">Databricks Blog: Introducing Omnigent (official announcement)</a></div></div>
