---
title: "GitHub Copilot's Token Meter Is Running — Devs React as VS Code Agents Hit Stable"
summary: "June 1, 2026 marked GitHub Copilot's switch from flat-rate requests to token-based AI Credits billing. Alongside the billing change, VS Code shipped a stable Agents Window, air-gapped BYOK support, and enterprise-managed plugin deployment."
category: "dev-trend"
date: "2026-06-09"
readingTime: 5
tags: ["GitHub Copilot", "VS Code", "AI Coding", "Usage Billing", "Developer Tools"]
---

<div class="article-tldr">
GitHub Copilot switched to <strong>token-based AI Credits billing</strong> on June 1, 2026. One credit equals one cent, and usage now varies dramatically based on model choice and session complexity — some developers burned through a month of credits in a single day. Simultaneously, VS Code shipped a stable Agents Window (v1.120), air-gapped bring-your-own-key support (v1.122), and organization-wide plugin management for enterprises.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/mv6MMQ2j128" title="How to ship from issue to merge with the GitHub Copilot app | demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## How the New Billing Works

Under the old system, every interaction — a quick question or an hour-long agentic refactor — consumed a single "premium request." The cross-subsidy meant heavy users were effectively subsidized by light users, and GitHub said the system was "absorbing much of the escalating inference cost."

That's over. Every interaction now consumes AI Credits proportional to actual token usage (input, output, and cached tokens) at the model's published API rates.

**The math:** 1 AI Credit = $0.01 USD. A quick question to a lightweight model might cost under 1 credit. A multi-file agentic session using a frontier model across a large codebase can cost hundreds of credits.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">1,500</span>
<span class="stat-label">Monthly credits with Copilot Pro ($10/mo)</span>
</div>
<div class="stat-item">
<span class="stat-number">7,000</span>
<span class="stat-label">Monthly credits with Copilot Pro+ ($39/mo)</span>
</div>
<div class="stat-item">
<span class="stat-number">20,000</span>
<span class="stat-label">Monthly credits with Copilot Max ($100/mo)</span>
</div>
</div>

## Plan Breakdown

| Plan | Price/mo | Base Credits | Flex Allotment | Total Credits |
|------|----------|--------------|----------------|---------------|
| Copilot Pro | $10 | 1,000 | 500 | **1,500** |
| Copilot Pro+ | $39 | 3,900 | 3,100 | **7,000** |
| Copilot Max | $100 | 10,000 | 10,000 | **20,000** |

Key notes:
- **Base credits** always equal your subscription price (1:1 ratio, never changes)
- **Flex allotment** is variable and may adjust as AI pricing evolves
- **Code completions and Next Edit Suggestions** remain unlimited on all paid plans — they don't consume credits

## Developer Reactions: The Credit Shock

The first week of metered billing surfaced real cost data that was invisible under the old system. Reports from developers include:

- A "build a Minesweeper game" prompt via Claude Haiku 4.5: **94 credits**
- A single complex prompt: **171 credits**
- "A few prompts": **700 credits**
- Two Copilot-driven commits: **5,000 credits** — 25% of Copilot Max's monthly allowance

The underlying cause: agentic mode makes multiple model calls per task. Long chat threads re-send the entire conversation history as input tokens with every message. A three-day thread doesn't just grow linearly — every response includes the full prior context as input.

One developer, after watching 21% of their Pro credits disappear on day one, wrote: "I have a feeling I'll be going somewhere else pretty soon." Others are revisiting workflow habits that made sense under flat-rate pricing but don't hold up under token metering.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Practical Tips to Manage Credit Spend</strong><br>— <strong>Use Auto Model Selection:</strong> Gets a 10% discount on model costs automatically<br>— <strong>Start fresh chats often:</strong> Long threads re-send full context as input tokens every time<br>— <strong>Route lightweight tasks to lighter models:</strong> Commit messages, rename suggestions, title generation<br>— <strong>Configure model routing by task type</strong> in VS Code settings (admins can set this organization-wide)<br>— <strong>Monitor daily usage</strong> in GitHub Settings → Billing with alerts at 75%, 90%, 100% of budget</div>
</div>

## VS Code Updates: Agents Hit Stable

Alongside the billing change, GitHub shipped VS Code versions 1.120–1.123 across May and early June, crossing several meaningful thresholds.

### Agents Window Goes Stable (v1.120, May 13)
The Agents Window moved from experimental to **Stable Preview**. It's a dedicated surface for directing multi-step coding tasks — reviewing changes across projects, managing parallel workstreams — without editing files line by line.

### Remote Agent Support (v1.121, May 20)
Developers can now run agent sessions on remote machines over SSH or Dev Tunnels, with sessions continuing even after the local client disconnects. Useful for long-running agentic jobs that shouldn't be interrupted by a laptop going to sleep.

### Air-Gapped BYOK (v1.122, May 28)
The most significant enterprise update. Previously, BYOK model support required a GitHub OAuth handshake with github.com — meaning it couldn't work in network-isolated environments. v1.122 removed that dependency. Configure one BYOK model through the Command Palette, and the Chat view activates without any GitHub sign-in. Requests route directly to the configured provider.

For true air-gap deployment, pair the BYOK provider with a local inference server (Ollama, vLLM, or Foundry Local running inside the isolated network) and set `COPILOT_OFFLINE=true` to disable telemetry. Zero outbound traffic.

### Enterprise-Managed Plugins (June 5, Public Preview)
Admins at Copilot Business and Enterprise organizations can now configure and distribute custom agents, skills, and MCP server configurations across their entire engineering organization from a single policy file at `.github-private/.github/copilot/settings.json`.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>What This Means for Regulated Industries</strong><br>The combination of air-gapped BYOK, FedRAMP Moderate authorization (obtained April 2026), and organization-wide plugin management removes the last structural blockers for defense contractors, healthcare organizations, and financial institutions that previously couldn't adopt GitHub Copilot tooling. Full agentic AI coding in a network-isolated environment is now technically and compliantly possible at enterprise scale.</div>
</div>

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>GitHub Copilot moved to token-based AI Credits billing on June 1, 2026 — 1 credit = $0.01 USD.</li>
<li>Developer backlash is real: agentic workflows and long chat threads can burn through monthly credits fast.</li>
<li>Code completions remain unlimited on all paid plans — the meter only runs for chat, agents, and code review.</li>
<li>VS Code v1.120 shipped a stable Agents Window; v1.122 added air-gapped BYOK support for network-isolated environments.</li>
<li>Enterprise-managed plugins allow organization-wide Copilot configuration from a single policy file.</li>
<li>Regulated industries (defense, healthcare, finance) now have a clear path to full Copilot deployment at scale.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Resources</strong><br>— <a href="https://github.com/features/copilot/plans" target="_blank" rel="noopener noreferrer">GitHub Copilot Plans &amp; Pricing (Official)</a><br>— <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot Feature Overview</a><br>— <a href="https://github.com/microsoft/Lens" target="_blank" rel="noopener noreferrer">Microsoft Lens on GitHub — Efficient AI Model Reference</a><br>— <a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener noreferrer">OpenAI Cookbook — AI Coding Agent Examples</a></div></div>
