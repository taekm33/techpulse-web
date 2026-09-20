---
title: "'Plugin4Shell' Hits All Four Major AI Coding Agents — Claude Code, Codex, Copilot and Gemini CLI"
summary: "Security lab AIR disclosed Plugin4Shell, what it calls the AI agent ecosystem's first supply-chain vulnerability. The zero-click RCE bypasses plugin SHA pinning to push malicious code into plugins that are already installed and trusted, exposing Claude Code, Codex, GitHub Copilot and Gemini CLI. Anthropic and OpenAI shipped patches; the other two vendors have not."
category: "it-news"
date: "2026-09-21"
readingTime: 6
tags: ["security-vulnerability", "ai-coding-agents", "claude-code", "supply-chain-attack", "Plugin4Shell"]
---

<div class="article-tldr">
On September 17, security lab AIR disclosed Plugin4Shell, which it calls the AI agent ecosystem's first supply-chain vulnerability. It is a zero-click remote code execution (RCE) flaw that bypasses SHA pinning — the mechanism meant to lock a plugin to a specific, reviewed version — to swap malicious code into plugins that are already installed and trusted. All four major agents, Claude Code, Codex, GitHub Copilot and Gemini CLI, shared the same weakness. Anthropic (Claude Code) and OpenAI (Codex) have patched, but Microsoft's Copilot has no fix yet and Google chose to deprecate Gemini CLI rather than patch it.
</div>

Security lab AIR disclosed a zero-click remote code execution vulnerability against AI coding agents, dubbed Plugin4Shell, on September 17. The researchers called it "the first supply chain vulnerability of the AI agent ecosystem." The core point is stark: anyone who installs plugins from a marketplace is exposed, and not only careless users. The victim only has to have a plugin installed — from a marketplace they trust, reviewed and pinned exactly as the security model intends.

## Why SHA pinning broke

Plugin "SHA pinning" locks an installed plugin to a specific version of code that passed review. Once a plugin clears review, pinning is supposed to mean its code cannot change without the developer's knowledge. Plugin4Shell defeats that guarantee.

According to AIR, every one of the four agents checks out the pinned commit but never verifies that the checkout actually landed there — letting an attacker swap in malicious code while the pin still looks intact. The researchers describe this as a "plugin SHA-pinning bypass." Claude Code, Codex and GitHub Copilot share one variant, tied to how git handles branch names; Gemini CLI is exposed through a separate mechanism in how it fetches and checks out pinned commits, though the outcome is the same.

<div class="article-stats">
<strong>Name</strong> Plugin4Shell (plugin SHA-pinning bypass)<br/>
<strong>Affected</strong> Claude Code · Codex · GitHub Copilot · Gemini CLI<br/>
<strong>Disclosed</strong> September 17, 2026 (AIR)<br/>
<strong>First found</strong> May 2026, then privately reported to each vendor<br/>
<strong>Type</strong> Zero-click RCE · supply-chain attack
</div>

## Why it's "zero-click"

The flaw is dangerous because it reaches people who did everything right. AIR says it "is not only an install-time bug, and that is what makes it zero-click." Because background auto-update — the default in Claude Code and Codex — re-runs the same git checkout, the swap reaches already-installed plugins with no user action the moment the marketplace bumps the pinned SHA.

There is a condition, though. AIR notes the attack "only works where a branch can be named like a hash." That is git's default behavior, but some hosts forbid it: GitHub rejects a 40-hex branch name outright, while others — Bitbucket among them, and any self-hosted git server — allow it.

## How an attacker gets in

AIR laid out two paths. In the first, an attacker publishes a plugin that works exactly as advertised, passes review and gains adopters, then turns it malicious later. The researchers say earlier work proved this out: a plugin they built spread to more than 26,000 agents before being pulled.

In the second, an attacker takes over the repository behind a plugin others wrote and users already trust, then uses the same bypass to push malicious code to everyone who has it installed. AIR demonstrated this kind of takeover in separate research it calls SkillJacking, where it found 925 skills already in active use had been hijacked from their original maintainers, reaching 134,000 agents. "Together, the chain is proven end to end — takeovers happen at scale, and Plugin4Shell defeats the mechanism built to contain them," the researchers said.

## Vendors responded unevenly

Because the check runs inside the agent rather than at the marketplace, AIR says no marketplace can guarantee the protection on its own. Each vendor has to fix it in the agent itself, and where a fix exists, updating is the only complete remedy.

| Product | Vendor | Response |
|---|---|---|
| Claude Code | Anthropic | Patched in version 2.1.179 |
| Codex | OpenAI | Patched in version 0.146.0 |
| GitHub Copilot | Microsoft | No patch shipped |
| Gemini CLI | Google | Deprecated — users directed to new agent, Antigravity |

Google went the other way, deprecating Gemini CLI rather than patching it — which means every existing install stays exposed indefinitely. Google's advice to those users is to move to Antigravity, a newer agent built without the plugin pinning system this attack relies on.

<div class="article-callout tip">
The action to take is clear. Update Claude Code to 2.1.179 or later and Codex to 0.146.0 or later now. Copilot and Gemini CLI users have no patch, so re-check the source and permissions of every installed plugin or skill and minimize exposure from automatic updates.
</div>

## What it means

Plugin4Shell exposes a blunt truth: AI coding agents inherit the same access as the developer running them — local source, cloud credentials, SSH keys, internal repositories, secrets. The plugin and skill marketplaces built for convenience have become a new supply-chain attack surface. With the "pinned means safe" assumption broken, agent vendors need to verify checkout results by default, and users have to manage the trust chain of their extensions as carefully as they manage code.

<div class="article-callout info">
The access you grant an AI agent should be treated the same as access granted to a human developer. This case is a reminder that the more extensions you add for convenience, the larger the attack surface grows.
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.air.security/blog-posts/plugin4shell" target="_blank" rel="noopener">AIR — Plugin4Shell official disclosure (original research)</a><br/>
· <a href="https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/" target="_blank" rel="noopener">Help Net Security — Zero-click RCE hits four major AI coding agents</a><br/>
· <a href="https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html" target="_blank" rel="noopener">The Hacker News — Plugin4Shell lets repository owners swap pinned plugin code</a><br/>
· <a href="https://cybersecuritynews.com/plugin4shell-zero-click-rce/" target="_blank" rel="noopener">Cybersecurity News — Plugin4Shell zero-click RCE details</a>
</div>

<div class="article-keypoints">
<ul>
<li>AIR disclosed Plugin4Shell, the AI agent ecosystem's "first supply-chain vulnerability," on September 17</li>
<li>It bypasses plugin SHA pinning to push malicious code into already-installed plugins — a zero-click RCE</li>
<li>Claude Code, Codex, GitHub Copilot and Gemini CLI were all affected</li>
<li>Background auto-update spreads it with no user action — but only on hosts that allow hash-like branch names</li>
<li>Anthropic (2.1.179) and OpenAI (0.146.0) patched; Copilot is unpatched and Gemini CLI was deprecated</li>
</ul>
</div>
