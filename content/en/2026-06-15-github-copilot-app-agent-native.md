---
title: "GitHub Copilot App: The Agent-Native Desktop That Takes Code From Issue to Merge"
summary: "GitHub launched the GitHub Copilot App at Microsoft Build 2026 — a desktop experience built for the agentic era. Git worktree session isolation, automated Agent Merge, Copilot SDK GA, and cloud/local sandboxes make it the most complete agentic developer environment yet."
category: "dev-trend"
date: "2026-06-15"
readingTime: 5
tags: ["github", "copilot", "agentic", "developer-tools", "devtools"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — GitHub unveiled the <strong>GitHub Copilot App</strong> at Microsoft Build 2026: a desktop experience that manages agentic coding sessions from issue to merged pull request. Key features include Git worktree-isolated parallel agent sessions, autonomous Agent Merge, the <strong>GitHub Copilot SDK</strong> (now GA in 6 languages), a Rubber Duck CLI agent, voice mode, and cloud/local sandboxes. Available now in technical preview for Copilot Pro through Enterprise users.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/8OcHV-Yo5Ac" title="4 GitHub updates from Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Why GitHub Built a Dedicated App

GitHub's platform numbers tell the story: commits nearly doubled year-over-year to **1.4 billion per month**, and GitHub Actions exceeded **2 billion minutes per week**. Agents are driving this growth — but the tools built for human-paced development are showing strain under agent-paced workloads.

The core problem: agents need to work on multiple issues in parallel without conflicts, and need support to carry a pull request all the way to merge — not just to submission. The GitHub Copilot App was built specifically for this workflow from the ground up.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">1.4B</span>
<span class="article-stats__label">GitHub commits per month (2× year-over-year)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">2B+</span>
<span class="article-stats__label">GitHub Actions minutes per week</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">6</span>
<span class="article-stats__label">Copilot SDK supported languages (GA)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">50×</span>
<span class="article-stats__label">Faster agent task speed with next-gen SCM (private beta)</span>
</div>
</div>

## Four Core Features

### 1. My Work — The Agentic Control Center
The app opens to a **My Work** view showing all work in motion across connected repositories: active sessions, issues, pull requests, and background automations in a single pane. Adding a new repository requires no local clone — the app loads it directly.

### 2. Git Worktree Session Isolation
When you assign an agent to multiple issues simultaneously, the app creates a separate **Git worktree** for each session. Agents work in parallel without stepping on each other's changes — no stashing, no branch juggling, no merge conflicts between concurrent agent sessions.

### 3. Agent Merge
Once a PR is submitted, activating **Agent Merge** hands the rest of the process to Copilot. It monitors CI checks, responds to code review feedback, resolves merge conflicts, and babysits the PR through to merge. The human developer stays in control — approving the final outcome, not managing the process.

### 4. Canvases — Bidirectional Agent Workspaces
Canvases are shared workspaces where agents and developers collaborate on the same artifacts: browser sessions, terminals, deployments, workflow states. Agents update the canvas as they work; developers can edit, reorder, approve, or redirect the work at any point.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Getting Started Today</strong><br>The GitHub Copilot App is in technical preview for Copilot Pro, Pro+, Business, and Enterprise users. Access it at <a href="https://github.com/features/copilot" target="_blank">github.com/features/copilot</a>. Once installed, add a repository from a local path or directly from GitHub — no clone required — and start an agentic session immediately.</div>
</div>

## Copilot SDK: Now Generally Available

The **GitHub Copilot SDK** shipped GA at Build 2026 in Node.js/TypeScript, Python, Go, .NET, Rust, and Java. It exposes the same agentic runtime that powers the Copilot App itself — meaning developers can embed GitHub Copilot's full agent loop into their own applications, internal tools, and custom workflows. Partner agent apps from LaunchDarkly, Bright, Amplitude, Sonar, Endor Labs, Octopus, and Miro are already available through the Copilot App.

## Full Feature Overview

| Feature | What It Does | Status |
|---------|-------------|--------|
| Copilot App | Agent-native desktop (issue → merge) | Technical preview |
| Git Worktree isolation | Parallel agent sessions, no conflicts | Included |
| Agent Merge | CI, review, conflict resolution — automatic | Included |
| Canvases | Bidirectional human-agent workspaces | Included |
| Copilot CLI Voice Mode | Control Copilot CLI by voice | New |
| Rubber Duck Agent | Built-in critical thinking CLI companion | New |
| Copilot SDK | Embed agent runtime in your apps | GA (6 languages) |
| Cloud + Local Sandboxes | Safe isolated environments for agent experiments | New |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>What Is the Rubber Duck Agent?</strong><br>The Rubber Duck agent is a new built-in agent in Copilot CLI that acts as a constructive critic — instead of immediately writing code, it helps you think through the problem and improve your approach. It's a reference to "rubber duck debugging," a software engineering technique where explaining a problem to an inanimate object helps you find the solution yourself. The Rubber Duck agent brings this to AI-assisted development.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>GitHub Copilot App is a dedicated desktop experience for agent-native development, covering the full issue-to-merge workflow.</li>
<li>Git worktree isolation enables parallel agent sessions on multiple issues simultaneously without conflicts.</li>
<li>Agent Merge autonomously handles CI checks, code review responses, and merge conflicts — human approves the outcome.</li>
<li>GitHub Copilot SDK is now GA in 6 languages — embed the same agent runtime powering Copilot in your own tools.</li>
<li>Available now in technical preview for all Copilot Pro through Enterprise users; cloud and local sandboxes included.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Documentation</strong><br>— <a href="https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/" target="_blank" rel="noopener noreferrer">GitHub Blog — Copilot App agent-native desktop experience announcement</a><br>— <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot Features Page — Technical preview access and feature overview</a><br>— <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot Docs — SDK usage, agent integration, and configuration guides</a></div></div>
