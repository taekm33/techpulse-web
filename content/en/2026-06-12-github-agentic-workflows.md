---
title: "GitHub Agentic Workflows Hits Public Preview: Write a Markdown File, Get an AI Agent in GitHub Actions"
summary: "GitHub Agentic Workflows is now in public preview for all Copilot subscribers. Define automation in plain English markdown, compile it to Actions YAML, and let AI agents handle issue triage, CI analysis, and doc updates autonomously."
category: "dev-trend"
date: "2026-06-12"
readingTime: 5
tags: ["github", "agentic-workflows", "github-actions", "copilot", "ci-cd"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> GitHub released <strong>Agentic Workflows</strong> in public preview on June 11, 2026 — available to all GitHub Copilot subscribers after a four-month closed technical preview. Write automation instructions in plain English markdown, compile them with <code>gh aw compile</code>, and an AI agent runs inside GitHub Actions to handle reasoning-heavy tasks like issue triage, CI failure diagnosis, and documentation updates.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/XisVQoz5grw" title="How to use agentic workflows for your repos | GitHub Checkout" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## CI/CD Just Got a Judgment Layer

Traditional CI/CD pipelines excel at deterministic tasks — build the container, run the tests, deploy the artifact. They cannot triage a flood of GitHub issues, diagnose why a flaky test started failing on Tuesdays, or update documentation to match a refactored API. Those tasks require reading context and making judgment calls. That is what GitHub Agentic Workflows is for.

Launched in public preview on June 11, 2026, it adds an AI reasoning layer on top of existing GitHub Actions without replacing anything. Deterministic steps still run deterministically. The agentic layer handles the tasks where humans were previously the only option.

<div class="article-stats">
<div class="article-stat"><span class="article-stat__value">4 months</span><span class="article-stat__label">Technical preview period</span></div>
<div class="article-stat"><span class="article-stat__value">All plans</span><span class="article-stat__label">Copilot Free through Enterprise</span></div>
<div class="article-stat"><span class="article-stat__value">~10 min</span><span class="article-stat__label">Time to first workflow run</span></div>
</div>

## How It Works: Markdown to Actions in Two Steps

1. Create a plain English **markdown file** in `.github/workflows/` describing what the agent should do.
2. Run `gh aw compile` on that file to generate a `.lock.yml` — a standard GitHub Actions workflow file.

The `.lock.yml` runs as a normal Actions workflow on a schedule or triggered by events. There is no new runtime to learn. The compiled lockfile defines how a containerized AI agent — Copilot, Claude, Gemini, or OpenAI Codex — reads the repository context, takes action, and creates a PR with the result.

**New in public preview:** Agentic Workflows now supports GitHub Actions' built-in `GITHUB_TOKEN`, eliminating the need to create and manage a separate Personal Access Token.

## Prebuilt Workflow Examples

| Workflow | What It Does | Trigger |
|---------|-------------|---------|
| Issue Triage | Classify and label new issues automatically | Issue opened |
| CI Doctor | Diagnose failures, propose fix PR | CI failure |
| Daily Repo Status | Create daily repo health report as issue | Schedule |
| Doc Sync | Update docs to match code changes | PR merge |
| Compliance Check | Detect policy violations and report | Push |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>5-Minute Quick Start</strong><br>Install: <code>gh extension install github/gh-aw</code><br>Add a prebuilt workflow: <code>gh aw add-wizard githubnext/agentics/daily-repo-status</code><br>The interactive wizard handles engine selection, secret setup, and workflow file creation. First run takes about 10 minutes total.
</div>
</div>

## Why the Technical Preview Took Four Months

The four months were not feature development — they were security architecture. Teams in the technical preview consistently said they would never give an LLM unconstrained write access to production repositories. GitHub's answer is the **lockfile and safe outputs pattern**: the agent operates in an isolated containerized environment, and the lockfile strictly defines what it can modify, read, and produce. The permissions, secrets, runner environments, review gates, and audit logs are all inherited from — and controlled by — the existing Actions configuration.

The design principle: "agent decides, trusted step executes." The agent cannot escalate its own permissions.

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>
— <a href="https://github.com/github/gh-aw" target="_blank" rel="noopener noreferrer">GitHub Agentic Workflows CLI (gh-aw) Official Repository</a><br>
— <a href="https://github.com/githubnext/agentics" target="_blank" rel="noopener noreferrer">Prebuilt Workflow Examples Repository (agentics)</a><br>
— <a href="https://github.com/github/gh-aw/releases" target="_blank" rel="noopener noreferrer">gh-aw Release History and Latest Version Download</a>
</div>
</div>

<div class="article-keypoints">
<ul>
<li>Plain English markdown compiles to GitHub Actions YAML via <code>gh aw compile</code></li>
<li>AI agents handle judgment-heavy tasks: issue triage, CI diagnosis, doc updates</li>
<li>Choose from Copilot, Claude, Gemini, or OpenAI Codex as the AI engine</li>
<li>Built-in GITHUB_TOKEN support eliminates PAT management overhead</li>
<li>Available to all Copilot subscribers (Free, Pro, Pro+, Business, Enterprise)</li>
</ul>
</div>
