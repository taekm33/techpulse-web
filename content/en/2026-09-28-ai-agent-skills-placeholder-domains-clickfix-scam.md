---
title: "Placeholder Domains in AI Agent Skills Turn Malicious — third-party.com Now Serves ClickFix"
summary: "Unreserved 'placeholder' domains used for years as documentation examples have been snapped up by attackers. Security firm Manifold Security found that third-party.com — referenced across GitHub and roughly 349 AI agent skills — now delivers ClickFix malware, while yoursite.com and your-domain.com push scams and scareware at macOS users."
category: "hot-issue"
date: "2026-09-28"
readingTime: 6
tags: ["AI agents", "security", "ClickFix", "supply chain", "skills"]
---

<div class="article-tldr">
Domains that developers used only as examples in documentation are now registered and serving malicious content. Security startup Manifold Security disclosed that third-party.com — cited across GitHub and roughly 349 AI agent skills — delivers ClickFix malware, while yoursite.com and your-domain.com serve scams and scareware to macOS users. Because AI agents tend to trust and call the URLs baked into skill documentation, the case exposes a stark supply-chain risk: a domain you trust today can change hands tomorrow.
</div>

According to research published on September 23–24 by security startup Manifold Security, unreserved placeholder domains that were used for years only as "examples" in developer documentation have been registered by attackers and now resolve to live malicious pages. References to these domains are hardcoded across hundreds of thousands of GitHub files and roughly 349 AI agent skills — exposing the automated agents that read and call those URLs.

## What Happened — When an Example Domain Becomes a Weapon

The pivot point is reservation. Domains like example.com, example.org, and example.net are permanently reserved by IANA for documentation (RFC 2606), so no one can register them. Domains such as third-party.com, yoursite.com, and your-domain.com, by contrast, were merely treated as examples — they were never reserved, so anyone can buy them. Attackers walked straight through that gap. Manifold's research (led by Head of Research Ax Sharma and researcher Cody Nash) confirmed the domains are hardcoded not only in GitHub code and docs but inside AI agent skills.

<div class="article-stats">
<strong>AI agent skills citing the domains</strong> ~349<br/>
<strong>GitHub files referencing yoursite.com</strong> 185,000+<br/>
<strong>Referencing your-domain.com</strong> 174,000+<br/>
<strong>Repositories referencing third-party.com</strong> 1,700+
</div>

## What Each Domain Delivers

The same "example domain" delivers different payloads depending on who now owns it. Here is what Manifold observed across the three domains.

| Domain | Malicious content served | Primary target |
|---|---|---|
| third-party.com | ClickFix malware (fake Cloudflare check → clipboard poisoning → PowerShell execution) | Windows |
| yoursite.com | Investment fraud disguised as fake news articles | macOS |
| your-domain.com | Scareware (fake macOS security alerts) and investment fraud | macOS |

In particular, yoursite.com and your-domain.com were seen impersonating a bogus "macOS Security Center" to push fraudulent McAfee renewals, and using counterfeit BBC News and ZDFheute articles to funnel victims toward investment-scam pages.

## How ClickFix Infects

The ClickFix lure on third-party.com is social engineering. A page disguised as a Cloudflare or reCAPTCHA verification screen appears, and behind it JavaScript silently copies a malicious command into the victim's clipboard. The page then instructs the user to "press Windows Key + R, paste with Ctrl+V, and run it to complete verification." Anyone who follows along executes a PowerShell command that pulls and runs code from a remote server (elxxvvx[.]xyz).

Manifold summed up the danger this way: "The victim runs the attacker's command with their own permissions, and no file was ever downloaded for an antivirus to catch." According to security vendor ESET, ClickFix campaigns surged 517% between late 2024 and mid-2025.

<div class="article-callout tip">
If an unfamiliar site tells you to "press Windows Key + R and paste to run" in order to verify yourself, it is effectively always a scam. No legitimate CAPTCHA or verification flow ever asks a user to execute a command.
</div>

## Why Scanners Missed It — the Cloaking Trap

The campaign survived so long because it screens its visitors — a technique called cloaking. Windows users get the full ClickFix lure and macOS users get scareware, but a request from a Linux or datacenter IP receives an ordinary parking page. On top of that, the malicious redirect only fires after the page's JavaScript runs, so static checks and reputation scanners that only fetch text never see the lure. As Manifold put it, "the redirect to the scam fires after the page's JavaScript runs, so a text fetch never sees it, whatever User-Agent you send."

## Why This Is Especially Dangerous for AI Agents

The real severity comes from automation. AI agents tend to trust and call URLs written in skill and tool documentation as-is, inheriting the risk of domains their authors never intended to be malicious. Manifold called it "the curl | bash problem wearing a different hat," warning that "a domain you trust today can change hands tomorrow, and the trusted endpoint simply starts returning something else." Public skills found citing the placeholders include shopify-expert (in jeffallan/claude-skills, ~11,000 stars), alova-server-usage, and dynamic-dashboard-builder, with traces also surfacing in Chromium's developer docs, Sanity's Playwright testing skill, and Vercel's Turborepo unit tests.

<div class="article-callout info">
A static file scan cannot see what a website decides to send back. The real threat only appears at request time, from the caller — the agent — that actually makes the request. In the agent era, supply-chain review has to move beyond "what does the code say" to "what does that URL return right now."
</div>

## What to Do About It

Manifold's guidance is direct. Use only RFC 2606-reserved domains (example.com, example.org, example.net, or .example) as examples in documentation and skills, and never cite — or allowlist — a live domain you do not control. Teams should sweep already-published skills, tests, and docs for unreserved placeholders like third-party.com, yoursite.com, your-domain.com, and yourcompany.com, and replace them.

## What It Means Going Forward

The incident is a warning about how the AI agent ecosystem will govern its "supply chain of trust." As architectures in which agents autonomously call URLs from documentation spread, every static URL embedded in a skill becomes a promise that can break at any time. A seemingly trivial convention — the example domain — has turned into a large attack surface, and both skill publishers and framework providers now need basic hygiene that makes reserved domains the default.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.manifold.security/blog/placeholder-domains-ads-serve-scams" target="_blank" rel="noopener">Manifold Security — Placeholder Domains Whose Ads Serve Scams (original research)</a><br/>
· <a href="https://www.manifold.security/blog/third-party-com-placeholder-clickfix" target="_blank" rel="noopener">Manifold Security — third-party.com Placeholder Now Serves ClickFix</a><br/>
· <a href="https://thehackernews.com/2026/09/placeholder-third-partycom-referenced.html" target="_blank" rel="noopener">The Hacker News — third-party.com Referenced Across 1,700+ Repos Now Serves Malicious Content</a><br/>
· <a href="https://hackread.com/placeholder-domains-ai-agent-skills-redirect-scams/" target="_blank" rel="noopener">HackRead — Placeholder Domains Used by 349 AI Agent Skills Redirecting to Scams</a>
</div>

<div class="article-keypoints">
<ul>
<li>Unreserved placeholder domains once used as documentation examples (third-party.com, yoursite.com, your-domain.com) were registered and now serve malicious content</li>
<li>Roughly 349 AI agent skills and hundreds of thousands of GitHub files reference these domains</li>
<li>third-party.com pushes ClickFix to Windows users; the others serve macOS scams and scareware via cloaking</li>
<li>Because agents call skill URLs as-is, the supply-chain risk propagates automatically</li>
<li>Fix: use only RFC 2606-reserved example domains and audit/replace them in existing skills and docs</li>
</ul>
</div>
