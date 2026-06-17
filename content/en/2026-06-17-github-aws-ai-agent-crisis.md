---
title: "AI Coding Agents Broke GitHub's Reliability, So Microsoft Turned to Rival AWS"
summary: "Microsoft confirmed it is routing GitHub traffic through Amazon Web Services after an unprecedented surge in AI coding agent activity pushed the platform past its contracted reliability thresholds. GitHub logged nine service-degrading incidents in May alone, and June availability is estimated well below the 'three nines' standard."
category: "dev-trend"
date: "2026-06-17"
readingTime: 5
tags: ["GitHub", "AWS", "AICodingAgents"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Mc3I3Aua2iw" title="AI Agents Are Breaking Microsoft GitHub" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> On June 16, 2026, Microsoft confirmed it is provisioning extra cloud capacity from AWS — its biggest cloud competitor — to keep GitHub running. AI coding agents generate traffic patterns no capacity model anticipated, and GitHub logged nine service-degrading incidents in May alone, with June availability estimated well below 99%. The Azure migration is underway but can't absorb demand fast enough, making the AWS arrangement a stopgap until deeper architectural work finishes.
</div>

Microsoft confirmed it is routing part of GitHub's traffic through Amazon Web Services, first reported by Business Insider. The reason is straightforward: AI coding agents hammer GitHub's API continuously, in a pattern that looks nothing like human developer behavior.

## A traffic curve nobody modeled

<div class="article-stats">
<div><strong>275M</strong><br>commits processed per week (April 2026)</div>
<div><strong>9</strong><br>service-degrading incidents in May 2026 alone</div>
<div><strong>325%</strong><br>growth in AI-agent-opened pull requests, Sept 2025 → March 2026</div>
</div>

GitHub COO Kyle Daigle confirmed in April that the platform was processing 275 million commits per week — on pace for 14 billion for all of 2026, a 14x jump from the 1 billion recorded across all of 2025. GitHub Actions compute minutes climbed from 500 million per week in 2023 to 1 billion in 2025, then hit 2.1 billion in a single week in early 2026. Pull requests opened by AI agents surged from roughly 4 million in September 2025 to more than 17 million in March 2026 — a 325% jump in six months.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body">
<strong>Why agents are different</strong><br>
Cursor, Claude Code, GitHub Copilot, Devin, and dozens of competitors interact with GitHub purely through the API and command line — no UI login, no weekends off. Every PR an agent opens triggers a cascade of infrastructure work: database writes, webhook fan-outs, CI runner allocation, search index updates, artifact storage. GitHub CTO Vlad Fedorov pinned the root cause on "rapid load growth, architectural coupling that allowed localized issues to cascade across critical services, and inability of the system to adequately shed load from misbehaving clients."
</div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>AWS just buys time</strong><br>
GitHub was built in 2008 on a Ruby on Rails monolith, and a nearly two-million-line core application still runs at its center. The Azure migration is targeting completion by 2027, and 40% of monolith traffic had moved to Azure as of May — but migration pace hasn't kept up with demand growth, so AWS capacity is filling the gap. Microsoft says it is "both accelerating our move to Azure and continuing to explore a multi-cloud strategy."
</div>
</div>

## Timeline of the crisis

| Date | Event |
|---|---|
| October 2025 | GitHub begins a plan to grow capacity 10x |
| February 2026 | Target revised to 30x as agent traffic outpaces forecasts |
| April 9–13, 2026 | Agent session wait times spike to 54 minutes (normal: 15–40 seconds) |
| May 2026 | Nine service-degrading incidents |
| June 16, 2026 | Microsoft confirms the AWS capacity arrangement |

GitHub's own availability reports show the platform missed its "three nines" (99.9% uptime) commitment in both February and March 2026, and June's estimated availability is well below that bar. The same week the AWS arrangement became public, a separate deal surfaced showing Google paying SpaceX $920 million per month for AI compute capacity from October 2026 through June 2029 — evidence that AI agent demand is outrunning capacity planning industry-wide, not just at GitHub.

<div class="article-keypoints">
<ul>
<li>Engineering teams relying on GitHub Actions for production CI/CD should establish fallback paths to GitLab CI, CircleCI, or self-hosted runners now.</li>
<li>Monitor GitHub's status page proactively, and confirm with your enterprise account team what remediation commitments apply when contracted availability isn't met.</li>
<li>Consider internally rate-limiting agentic workflows that multiply API calls, so they don't contribute to platform-wide saturation.</li>
</ul>
</div>

GitHub's COO has expressed confidence that availability problems will shrink by September 2026, but reaching that bar requires more than added capacity — it requires decoupling the monolith, implementing load-shedding for misbehaving clients, and finishing the migration of performance-critical code from Ruby to Go.

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>Related resources, official sources & further reading</strong><br>
— <a href="https://www.techtimes.com/articles/318481/20260616/githubs-ai-agent-crisis-forces-microsoft-tap-aws-outages-break-enterprise-slas.htm" target="_blank" rel="noopener noreferrer">Tech Times: GitHub's AI Agent Crisis Forces Microsoft to Tap AWS</a><br>
— <a href="https://letsdatascience.com/news/github-capacity-surge-pushes-microsoft-to-aws-13a2ffa4" target="_blank" rel="noopener noreferrer">Let's Data Science: GitHub Capacity Surge Pushes Microsoft to AWS</a><br>
— <a href="https://www.githubstatus.com/" target="_blank" rel="noopener noreferrer">GitHub official status page (live availability)</a><br>
— <a href="https://github.blog/news-insights/company-news/" target="_blank" rel="noopener noreferrer">GitHub official blog: monthly availability reports</a>
</div>
</div>
