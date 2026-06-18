---
title: "GitHub Copilot App Goes GA — From Issue to Merge in One App"
summary: "GitHub has shipped the general availability release of its native GitHub Copilot desktop app for macOS, Windows, and Linux, unifying issues, PRs, and isolated agent sessions with a new agent-merge feature that closes out the SDLC on its own."
category: "dev-trend"
date: "2026-06-18"
readingTime: 5
tags: ["GitHubCopilot", "AgenticDevelopment", "DeveloperTools"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/mv6MMQ2j128" title="How to ship from issue to merge with the GitHub Copilot app | demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> On June 17, 2026, GitHub announced general availability of the GitHub Copilot app, a native desktop home for agent-driven development on macOS, Windows, and Linux. Since its technical preview at Microsoft Build, GitHub added Canvases, cloud automations, and bring-your-own model/tools support. The app centralizes issues and PRs, runs each session in its own isolated git worktree, and uses a new "agent merge" feature to handle reviews, CI, and merging without human babysitting.</div>

GitHub has moved its Copilot desktop app out of technical preview and into general availability, just a couple of weeks after first demoing it at Microsoft Build 2026. The pitch is straightforward: stop losing context every time you switch between an issue, a pull request, and a half-finished branch, and let the app manage your entire workflow in one place.

## A Mission Control for Agent Work, Not Just a Chatbot

<div class="article-stats">
<div><strong>3 platforms</strong><br>macOS, Windows, and Linux support at GA</div>
<div><strong>1 unified inbox</strong><br>Issues and PRs from every repo in one view</div>
<div><strong>N isolated worktrees</strong><br>Each session runs in its own git worktree, in parallel</div>
</div>

The app's central idea is handling the full software development lifecycle — from picking up an issue to landing a merged PR — inside a single screen. Issues and PRs are automatically grouped into "Active" (assigned to or opened by you), "Review requested," and "Done," with the option to define custom sections using any GitHub search query. Clicking an item and starting a new session checks that branch out into its own git worktree, so editing files in one session never bleeds into another — no more stashing changes or running `git checkout` to context-switch.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>Agent merge closes the loop</strong><br>Every few minutes it checks whether review threads have been addressed, CI is green, and the branch is clean. If something's blocking progress, it works on it; if it's truly stuck, it pings you. Otherwise, it merges the PR on its own.</div>
</div>

## Three Additions Since the Preview: Canvases, Cloud Automations, and BYO Models

Since the technical preview, GitHub has shipped three notable additions. First, "Canvases" give the user and the agent a shared, bidirectional surface — a plan, a PR, a terminal, or a browser session — so progress stays visible instead of getting buried in chat. Second, "Cloud automations" let recurring agent work (like triaging new issues or sweeping stale branches) run on a schedule in the cloud, independent of whether your machine is even on. Third, "Bring your own model and tools" lets users pick the model behind each session and connect external tools via MCP servers — GitHub's own demos show third-party agents like Claude Code and Codex available alongside Copilot's defaults.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body">
<strong>Access requirements</strong><br>The app requires an active paid GitHub Copilot subscription (Pro or above). On Copilot Business or Enterprise plans, an org or enterprise admin must enable Copilot CLI in policy settings before users can access the app.</div>
</div>

## Pricing at a Glance

| Plan | Monthly cost (per user) | Notes |
|---|---|---|
| Free | $0 | 2,000 completions/month, access to Haiku 4.5, GPT-5 mini, and more |
| Pro | $10 | Copilot app, cloud agent, code review, $15/mo in credits |
| Pro+ | $39 | Premium models including Opus, audit logs, $70/mo in credits |
| Max | $100 | Priority access to new models, 2.9x+ usage vs. Pro+ |

<div class="article-keypoints">
<strong>Key takeaways</strong>
<ul>
<li>A unified issue/PR inbox plus per-task isolated worktrees eliminate context-switching overhead</li>
<li>"Agent merge" handles reviews, CI, and merging automatically, turning PRs into largely self-closing work items</li>
<li>Canvases, cloud automations, and bring-your-own model/tools expand on what shipped in the technical preview</li>
<li>Requires a paid Copilot plan (Pro or higher); enterprise admins must explicitly enable access</li>
</ul>
</div>

In GitHub's own demo, an engineer summed up the shift: "A week ago, a good day for me was shipping one pull request. Today, three of them shipped themselves and two issues already have a head start." Pulling agent work out of a chat window and into a visible, navigable workspace is the real story behind this GA release — not a new model, but a new place to manage the work models are already doing.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Docs</strong><br>— <a href="https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/" target="_blank" rel="noopener noreferrer">GitHub Changelog: GitHub Copilot app generally available</a><br>— <a href="https://gh.io/gh-copilot-app-download" target="_blank" rel="noopener noreferrer">GitHub Copilot app product page & download</a><br>— <a href="https://gh.io/github-app-docs" target="_blank" rel="noopener noreferrer">GitHub Copilot app official documentation</a></div></div>
