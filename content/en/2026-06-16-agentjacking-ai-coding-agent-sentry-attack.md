---
title: "Agentjacking: The Attack That Hijacks AI Coding Agents with a Single Fake Sentry Error"
summary: "Security researchers at Tenet Security have demonstrated a new attack class called Agentjacking that hijacks AI coding agents — including Claude Code, Cursor, and Codex — using nothing but a fake Sentry error report. No malware, no stolen credentials, no breach: just a public API and an 85% exploitation rate across the industry's most widely-used agents."
category: "hot-issue"
date: "2026-06-16"
readingTime: 5
tags: ["Agentjacking", "AI Security", "Claude Code", "Cursor", "MCP", "Prompt Injection", "Sentry"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Tenet Security's Threat Labs has demonstrated that AI coding agents including Claude Code, Cursor, and Codex can be hijacked by injecting a fake Sentry error into an organization's error-monitoring project. The attack requires no authentication beyond a public Sentry DSN, achieved an 85% exploitation success rate in controlled testing, and has exposed 2,388 organizations — with all steps appearing fully authorized to traditional security defenses.
</div>

<div class="article-stats">
  <div class="stat-item"><span class="stat-value">85%</span><span class="stat-label">Agent Exploitation Success Rate (controlled)</span></div>
  <div class="stat-item"><span class="stat-value">2,388</span><span class="stat-label">Organizations Found Exposed</span></div>
  <div class="stat-item"><span class="stat-value">100+</span><span class="stat-label">Real-World Agent Executions Confirmed</span></div>
  <div class="stat-item"><span class="stat-value">0</span><span class="stat-label">Security Controls That Detected It</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/cVWB58kEt-Y" title="BlueHat 2026: Securing the future of AI: Securing MCP with defense in depth patterns" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Agentjacking?

AI coding agents have evolved far beyond autocomplete. Tools like Claude Code, Cursor, and Codex now read files, execute terminal commands, query external services, and make code changes autonomously. Through the **Model Context Protocol (MCP)**, these agents connect to external services — including error-tracking platform Sentry — and treat the data returned as authoritative system output.

Agentjacking exploits exactly this trust relationship. An attacker uses a Sentry DSN — a public, write-only credential intentionally embedded in website JavaScript — to inject a crafted fake error event into a target's Sentry project. When a developer asks their AI coding agent to investigate open Sentry issues, the agent retrieves the injected event alongside real errors. Because the agent cannot distinguish real crash reports from planted ones, it follows the attacker's embedded instructions — executing attacker-controlled code with the developer's own system privileges.

## The Attack Chain: Six Steps to Compromise

**Step 1 — Find the DSN**: Sentry DSNs are intentionally public, embedded in frontend JavaScript for crash reporting. Discovery methods include inspecting a website's source code, Censys internet scans, or GitHub code search.

**Step 2 — Inject the event**: POST a crafted error event to Sentry's ingest endpoint using only the DSN. No authentication is required. Sentry processes the event identically to a legitimate application crash.

**Step 3 — Markdown injection**: The injected event contains carefully structured Markdown in the message and context fields. When the Sentry MCP server returns this to the AI agent, the Markdown renders as structured content — headings, code blocks, tables — visually identical to Sentry's own system template, including a fake `## Resolution` section.

**Step 4 — Agent manipulation**: When a developer asks their agent to "fix unresolved Sentry issues," the agent queries Sentry via MCP and receives the injected event. It cannot distinguish attacker content from legitimate guidance and follows the embedded instructions.

**Step 5 — Code execution**: The agent runs an attacker-specified `npx` command. The package downloads from the public npm registry and executes with the developer's full local privileges.

**Step 6 — Data exfiltration**: AWS keys, GitHub tokens, Sentry auth tokens, git credentials, private repository URLs, and CI/CD pipeline secrets are silently sent to the attacker's server — with no visible indication to the developer.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Why Traditional Defenses Fail</strong><br>Tenet calls this the "Authorized Intent Chain." Every step in the attack chain is authorized behavior: Sentry operates as designed, the DSN is public by policy, the npm package downloads via standard channels, and the agent executes commands as part of its normal workflow. EDR, WAF, IAM, VPN, and firewalls detect nothing — because there is nothing unauthorized to detect.</div>
</div>

## Real-World Validation: What Tenet Found

This was not a theoretical exercise. Tenet's Threat Labs conducted controlled real-world validation:

- **2,388 organizations** discovered with injectable DSNs via passive reconnaissance (Censys indexing, code search, CDN extraction). 71 ranked in the Tranco top-1 million domains.
- **100+ confirmed agent executions** across real organizations — Claude Code, Cursor, and Codex all acted on injected errors.
- **85% exploitation success rate** — even when agents were given explicit system prompts instructing them to ignore untrusted data.
- Exposed organizations spanned a **Fortune 500 company ($250B+ parent)**, a $2B+ hosting infrastructure provider, a scientific computing firm, and — notably — a **cloud security vendor**.

In each case, the agent surrendered live cloud credentials, source-control tokens, and infrastructure access data. All captured material was redacted by Tenet; no systems were compromised beyond confirming exposure.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Sentry's Response</strong><br>Tenet disclosed to Sentry on June 3, 2026. Sentry acknowledged the issue the same day but declined to fix it at the root, characterizing it as "not technically defensible" at the ingestion layer. Sentry added a global content filter blocking one specific payload string — treating a symptom, not the cause. The underlying attack surface remains open.</div>
</div>

## Beyond Sentry: A Systemic Problem

The researchers are clear that this is not a Sentry-specific vulnerability. The attack class applies wherever AI agents retrieve and act on externally-influenced data through trusted integrations. Support tickets, GitHub issues, documentation wikis, and any other MCP-connected data source with writable external interfaces carry the same risk class.

A separate recent incident — where an AI email agent was manipulated into leaking AWS keys — demonstrates the same underlying principle playing out across different integration types.

## Mitigation Strategies

| Action | Description | Priority |
|---|---|---|
| Audit all MCP integrations | Map every external service your agent can query | High |
| Identify untrusted-data sources | Flag tools that return externally writable content | High |
| Minimize agent execution permissions | Apply least-privilege to what agents can run | High |
| Deploy MCP gateway proxy | Inspect and policy-gate all agent tool calls | Medium |
| Full agent execution logging | Track what each agent executes and why | Medium |

Microsoft's MSRC BlueHat 2026 presentation (video above) provides a practical framework for enterprise-grade MCP security governance, including gateway proxies, LLM-as-judge techniques, and quarantined model patterns.

<div class="article-keypoints">
<h4>Key Points</h4>
<ul>
  <li>Agentjacking hijacks Claude Code, Cursor, and Codex via fake Sentry error events — no malware, no breach required</li>
  <li>Achieves 85% agent exploitation success rate; 2,388 organizations confirmed exposed including Fortune 500 firms</li>
  <li>Attack bypasses all traditional security controls (EDR, WAF, IAM, VPN) because every step is authorized behavior</li>
  <li>Sentry declined to fix the root issue, calling it "not technically defensible" at the ingestion layer</li>
  <li>Risk extends beyond Sentry to any MCP-connected tool returning externally-writable data — the attack surface is systemic</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Further Reading</strong><br>— <a href="https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/" target="_blank" rel="noopener noreferrer">Tenet Security: Full Agentjacking Research Report (technical details)</a><br>— <a href="https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/" target="_blank" rel="noopener noreferrer">Cloud Security Alliance: CSA Research Note on Agentjacking (June 12, 2026)</a><br>— <a href="https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/" target="_blank" rel="noopener noreferrer">Infosecurity Magazine: Attack mechanics &amp; defense analysis</a><br>— <a href="https://docs.sentry.io/" target="_blank" rel="noopener noreferrer">Sentry Official Documentation (DSN security guidelines)</a></div></div>
