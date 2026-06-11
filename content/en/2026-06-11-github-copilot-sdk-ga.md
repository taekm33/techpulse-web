---
title: "GitHub Copilot SDK Goes GA: Embed the Agent Runtime Directly in Your Apps"
summary: "GitHub Copilot SDK reached general availability at Microsoft Build 2026 with support for six languages. Combined with the new agent-native Copilot App and cloud/local sandboxes, it marks a major shift toward agent-native software development."
category: "dev-trend"
date: "2026-06-11"
readingTime: 5
tags: ["github", "copilot", "sdk", "agents", "developer-tools"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> GitHub's Copilot SDK reached <strong>general availability</strong> on June 2, 2026 at Microsoft Build, adding Rust and Java support (now 6 languages total) and stabilizing the production API surface. Alongside it, GitHub launched the <strong>Copilot App</strong> — an agent-native desktop client — plus cloud and local sandboxes for safe agentic tool execution.
</div>

<div class="article-stats">
<div class="stat-item"><span class="stat-number">6</span><span class="stat-label">Supported Languages at GA</span></div>
<div class="stat-item"><span class="stat-number">GA</span><span class="stat-label">Released June 2, 2026</span></div>
<div class="stat-item"><span class="stat-number">180M+</span><span class="stat-label">GitHub Developers Worldwide</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/R5ouLL_UA3o" title="Not sure where to start with the GitHub Copilot SDK?" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## One Runtime to Power Everything

At Microsoft Build 2026, GitHub announced that the **Copilot SDK is now generally available** — a production-ready API that exposes the same agentic runtime powering GitHub Copilot across all its surfaces: github.com, VS Code, CLI, and the new desktop app.

The central idea is compelling: instead of every team assembling their own patchwork of AI orchestration, tool calling, streaming, and multi-turn session management, they can build directly on the same battle-tested engine that GitHub itself uses. Since entering public preview, the SDK has been adopted for CI/CD assistants, internal developer platforms, code analysis tools, and customer-facing AI features.

## Installing the SDK

```bash
# Node.js / TypeScript
npm install @github/copilot-sdk

# Python
pip install github-copilot-sdk

# Go
go get github.com/github/copilot-sdk/go

# .NET
dotnet add package GitHub.Copilot.SDK

# Rust (new at GA — bundles Copilot CLI binary by default)
cargo add github-copilot-sdk

# Java (new at GA — available via Maven and Gradle)
```

The SDK works by initializing a Copilot client, creating a session with a specified model and tools, and then sending prompts to receive streamed multi-turn responses. The agent runtime handles planning, tool invocation, file edits, and session continuity — developers only need to write the domain logic on top.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>BYOK Support</strong><br>As of GA, the Copilot SDK is available to non-Copilot subscribers via Bring Your Own Key (BYOK). This means teams can embed Copilot's agent runtime in products used by customers who don't have a GitHub Copilot subscription — a significant unlock for building Copilot-powered SaaS features.</div>
</div>

## What's New Since Public Preview

| Feature | Preview | GA |
|---|---|---|
| Languages | Node.js, Python, Go, .NET | + Rust, Java (new) |
| Multi-client sessions | Not supported | Supported — multiple clients can contribute tools/permissions to one session |
| Slash commands | Select SDKs | All SDKs |
| Interactive input prompts | Select SDKs | All SDKs |
| API stability | Subject to change | Production-ready, stable surface |
| Connection diagnostics | Basic | Improved debugging for slow/failing connections |

## The GitHub Copilot App: Agent-Native Desktop

Alongside the SDK GA, GitHub launched the **GitHub Copilot App** in technical preview — available for Windows, macOS, and Linux for existing Copilot Pro, Pro+, Business, and Enterprise subscribers.

This is not just another editor integration. The Copilot App is a dedicated workspace for directing multiple AI agents simultaneously:

**My Work view**: A unified dashboard showing active agent sessions, issues, pull requests, and background automations across all connected repositories.

**Canvas**: A bidirectional work surface where agents display plans, code diffs, browser sessions, and terminal output — and where developers can edit, reorder, approve, or redirect work in real time on the same surface.

**Isolated worktrees**: Every session runs in its own Git worktree, so parallel agents never step on each other's changes.

**Agent Merge**: Carries pull requests through code review, CI checks, and merge — with human approval gates wherever the team requires them.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Partner Agent Apps</strong><br>The Copilot App integrates partner-built agent apps from LaunchDarkly, Bright, Amplitude, Sonar, PagerDuty, Miro, Octopus Deploy, and others. Issues can be directly assigned to partner agents, and their workflows run natively inside the Copilot App without leaving GitHub.</div>
</div>

## Cloud & Local Sandboxes

Two new sandboxing modes shipped alongside the GA:

**Local Sandbox**: Enable with `/sandbox enable` inside any Copilot session. Shell commands initiated by Copilot run with restricted filesystem, network, and system access. Built on Microsoft MXC technology for consistent isolation across all three major operating systems. Enterprise teams can enforce sandbox policies via Microsoft Intune and other MDM platforms.

**Cloud Sandbox**: Launch a fully isolated, ephemeral GitHub-hosted Linux environment with `copilot --cloud`. Each session inherits existing Copilot cloud agent policies. Ideal for compute-intensive workflows or running multiple agent tasks in parallel without local resource constraints.

## Practical Use Cases

Teams that have already adopted the SDK in preview have used it to build:

- **Internal code analysis tools** that run Copilot's agent loop on proprietary codebases
- **Custom release-notes generators** triggered by CI pipelines
- **Support workflow agents** that triage and respond to user tickets using codebase context
- **Educational AI tutors** embedded in learning platforms

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Copilot SDK is now production-ready GA with stable API surface across 6 languages</li>
<li>Rust and Java added at GA; all SDKs now support slash commands and multi-client sessions</li>
<li>BYOK support lets non-Copilot subscribers use the SDK in third-party applications</li>
<li>GitHub Copilot App is a new agent-native desktop workspace (tech preview, Win/Mac/Linux)</li>
<li>Local and cloud sandboxes add safe isolation for agentic tool execution</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Resources & Documentation</strong><br>— <a href="https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/" target="_blank" rel="noopener noreferrer">GitHub Changelog: Copilot SDK Generally Available</a><br>— <a href="https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/" target="_blank" rel="noopener noreferrer">GitHub Blog: The Agent-Native Desktop Experience</a><br>— <a href="https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/" target="_blank" rel="noopener noreferrer">GitHub Changelog: Cloud and Local Sandboxes (Public Preview)</a><br>— <a href="https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/" target="_blank" rel="noopener noreferrer">Download the GitHub Copilot App (Windows / macOS / Linux)</a></div></div>
