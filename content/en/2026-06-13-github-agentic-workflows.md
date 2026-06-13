---
title: "GitHub Agentic Workflows Hits Public Preview: Write English, Get Automation"
summary: "GitHub's Agentic Workflows entered public preview on June 11, 2026, letting developers define AI-driven repository automation in plain-language Markdown files. The system compiles natural language into standard Actions YAML and runs AI agents inside GitHub Actions with sandboxed, read-only defaults."
category: "dev-trend"
date: "2026-06-13"
readingTime: 5
tags: ["GitHub", "AI Agents", "GitHub Actions", "DevTools", "Automation"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — GitHub's <strong>Agentic Workflows</strong> is now in public preview (June 11, 2026). Write automation rules in a plain Markdown file. GitHub Copilot CLI compiles them into standard Actions YAML. AI agents then run inside GitHub Actions to triage issues, diagnose CI failures, update docs, and more — with read-only defaults and sandboxed execution.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/XisVQoz5grw" title="How to use agentic workflows for your repos | GitHub Checkout" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Core Idea: If You Can Say It, You Can Automate It

GitHub Agentic Workflows is built on a single observation: most repository automation is well-understood in plain English, but translating that understanding into YAML pipelines has always required specialized knowledge. The project removes that translation layer.

Developed by GitHub Next, GitHub, Azure Core, and Microsoft Research, Agentic Workflows lets you write automation logic in a natural language Markdown file. The GitHub Copilot CLI compiles it into standard Actions YAML. Standard GitHub Actions runners execute it. The whole stack reuses your existing runner groups and policy constraints — no new infrastructure required.

The result is that a project maintainer can describe what they want ("triage open issues daily, prioritize bugs, send stale issues to the stale queue, open a PR with the changes") and the system handles everything else.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">18+</span>
<span class="article-stats__label">Pre-built workflow templates available</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">Read-only</span>
<span class="article-stats__label">Default agent permission mode</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">100%</span>
<span class="article-stats__label">Reuses existing Actions infrastructure</span>
</div>
</div>

## How It Works

### Step 1: Write the Markdown

Create a `.md` file in your repository. The front matter specifies triggers and permissions; the body is plain natural language describing what you want the agent to do.

```markdown
---
trigger: schedule(daily)
permissions: read
outputs: pull_request
---
Every day at 8am, review open issues on the main branch.
Relabel issues tagged 'bug' with priority: high.
Add a 'stale' label to any issue inactive for more than 7 days.
Submit changes as a pull request for human review.
```

### Step 2: Compile

Run `gh aw compile` from the CLI. The Copilot CLI reads your Markdown and generates a standard, version-controllable Actions YAML file. You can review and edit the generated YAML before committing.

### Step 3: Run

On trigger, GitHub Actions spins up the agent in a sandboxed container behind the **Agent Workflow Firewall**. The agent accesses GitHub content through integrity filter rules, proposes changes through the Safe Outputs process, and a dedicated threat detection job scans all proposed changes before they're applied.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>Getting Started</strong><br>
Install the CLI extension, then trigger your first workflow in minutes. Browse prebuilt templates on GitHub Next's agentics repository — they cover issue triage, CI doctor, compliance reporting, documentation sync, and more. No personal access token (PAT) required as of the June 11 update.
</div>
</div>

## Security Architecture

Agentic Workflows treats security as a default, not a configuration option.

| Layer | What It Does |
|-------|-------------|
| Read-only default permissions | Agents can read repository content; write access must be explicitly granted |
| Sandboxed container | Isolated execution; external network access is restricted |
| Agent Workflow Firewall | Only whitelisted API endpoints are accessible |
| Safe Outputs process | Output validation before any changes are applied |
| Threat detection job | Pre-apply scan of all proposed code or content changes |
| No PAT required | Agents authenticate securely without personal access tokens |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body">
<strong>Real-World Usage</strong><br>
The Home Assistant open-source project is already using Agentic Workflows for issue triage, significantly reducing maintainer burden. The Astro framework team built a "super Dependabot" that automatically opens framework upgrade PRs. Serge, Hugging Face's new AI code reviewer, is also integrating with the GitHub Actions ecosystem to automate pull request review at scale.
</div>
</div>

## What You Can Automate Today

The pre-built workflow library covers the most common repository maintenance pain points:

- **Issue Triage** — Auto-label, prioritize, and assign issues by type and age
- **CI Doctor** — Diagnose failing CI jobs and propose fixes as PRs
- **Documentation Sync** — Keep docs current with code changes
- **Stale Management** — Identify and handle inactive issues and PRs
- **Compliance Reporting** — Generate audit reports on schedule
- **Dependency Updates** — Evaluate and open upgrade PRs for outdated dependencies

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Public preview launched June 11, 2026 — open to all GitHub users</li>
<li>Natural language Markdown → standard Actions YAML via Copilot CLI</li>
<li>Read-only by default; all proposed changes submitted as pull requests for human review</li>
<li>Fully reuses existing GitHub Actions runners, policies, and infrastructure</li>
<li>Core use cases: issue triage, CI self-repair, doc updates, compliance reports</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Documentation</strong><br>— <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions — Official Overview &amp; Getting Started</a><br>— <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot — The Engine Behind Agentic Workflows</a><br>— <a href="https://github.com/github-early-access" target="_blank" rel="noopener noreferrer">GitHub Early Access — Apply for Public Preview</a></div></div>
