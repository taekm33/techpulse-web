---
title: "GitLab Transcend 2026: Four Major Innovations for Agentic DevSecOps at Scale"
summary: "At Transcend 2026 in London, GitLab announced four new capabilities for enterprise teams running AI agents at scale: next-generation SCM (50x faster agent task execution), GitLab Orbit context graph (45x fewer hallucinations), Governance for Agents, and GitLab Flex pricing."
category: "dev-trend"
date: "2026-06-15"
readingTime: 5
tags: ["GitLab", "DevSecOps", "AgenticAI", "GitLabOrbit", "DeveloperTools"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — At GitLab Transcend 2026 (London, June 10), GitLab unveiled <strong>four new capabilities</strong> designed for engineering teams running AI agents at enterprise scale: ① Next-Gen SCM (50x faster agent tasks) ② GitLab Orbit context graph (45x fewer hallucinations) ③ Governance for Agents (audit and control for every agent action) ④ GitLab Flex (flexible credit model). GitLab also surpassed $1 billion in annual revenue last quarter.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/ekcw1yn21jQ" title="GitLab Transcend - Keynote" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Problem: Infrastructure Built for Human-Speed Development Is Breaking

GitLab CEO Bill Staples opened the Transcend 2026 keynote with a direct diagnosis: "As engineering teams scale agent activity, the infrastructure, governance, and commercial models built for human-speed delivery are showing strain."

The four capabilities announced at Transcend directly target the four bottlenecks that emerge at agent scale: task speed, context fragmentation, compliance exposure, and cost unpredictability. The event was broadcast live to over 15,000 registered participants worldwide, with Mercedes-Benz, Google Cloud, AWS, and Stanford's SWEPR research group as featured partners.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">50×</span>
<span class="article-stats__label">Faster agent task execution (Next-Gen SCM)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">45×</span>
<span class="article-stats__label">Fewer hallucinations (GitLab Orbit)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">11×</span>
<span class="article-stats__label">Faster agent response time (GitLab Orbit)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">$1B+</span>
<span class="article-stats__label">GitLab annual revenue (crossed last quarter)</span>
</div>
</div>

## Innovation 1: Next-Generation Source Code Management (Private Beta)

Today's Git servers require agents to clone entire repositories, generating massive network traffic and token waste on large codebases.

GitLab's **Next-Generation SCM** lets agents query the repository server-side for exactly what each task requires. Each agent is scoped to the minimum visibility its task needs. Internal testing shows:

- Agent task completion up to **50x faster**
- Token consumption up to **2x lower**
- Network traffic up to **1,000x lower**

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Join the Waitlist</strong><br>Next-Gen SCM is in private beta. GitLab Ultimate customers can register interest at <a href="https://gitlab.com/explore" target="_blank" rel="noopener noreferrer">gitlab.com</a> through their account team.</div>
</div>

## Innovation 2: GitLab Orbit — Context Graph (Public Beta)

Agents working across a software lifecycle see code, work items, pipelines, deployments, and production signals as disconnected fragments. That fragmentation is a primary driver of hallucinations.

**GitLab Orbit** maps all of these into a unified context graph for the entire software lifecycle — the same source of truth for both agents and engineers. Based on internal testing, agents using Orbit:

- Responded up to **11x faster**
- Used up to **4.5x fewer tokens**
- Produced up to **45x fewer hallucinations**

Orbit also runs as a **standalone data product** with open APIs, making the same context layer available to third-party agents and external tools.

## Innovation 3: Governance for Agents (Private Beta)

When agents commit code, remediate vulnerabilities, and trigger deployments — compliance requires auditability of every action.

**Governance for Agents** wraps identity, policy, audit, and approval around every agent action. It provides real-time visibility into inputs, reasoning, tool calls, and high-risk or anomalous activity across the organization.

| Control Layer | What It Does |
|---------------|--------------|
| Identity | Unique agent ID and permission scope per task |
| Policy | Automated enforcement of cost budgets and permission boundaries |
| Audit | Full log of inputs, reasoning, and tool calls |
| Approval | Human review gate before high-risk agent actions |

It extends GitLab Ultimate's existing security agents (which automate vulnerability triage and remediation) with a full compliance and governance layer.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Innovation 4: GitLab Flex</strong><br>A single annual commitment that covers platform seats, GitLab Credits, and new eligible capabilities. Organizations adjust their monthly reservations across all three without contract amendments — designed specifically to handle the unpredictable cost profile of agent-driven development.</div>
</div>

## Stanford Research: Measuring AI's Impact on Engineering Productivity

Stanford's Software Engineering Productivity Research (SWEPR) group presented findings from a study spanning 600+ organizations on the quantified impact of AI on engineering productivity — one of the first large-scale empirical studies of its kind.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>GitLab by the Numbers</strong><br>GitLab surpassed $1 billion in annual revenue last quarter, now serves more than 50 million users, hundreds of thousands of organizations, and more than 50% of the Fortune 100.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Next-Gen SCM (private beta): server-side queries deliver 50x faster agent tasks, 2x fewer tokens, 1,000x less network traffic.</li>
<li>GitLab Orbit (public beta): unified context graph cuts hallucinations 45x and improves agent response time 11x.</li>
<li>Governance for Agents (private beta): identity, policy, audit, and approval on every agent action for enterprise compliance.</li>
<li>GitLab Flex: one annual commitment with monthly adjustments across seats, credits, and features — no contract amendments.</li>
<li>GitLab crossed $1B annual revenue last quarter; Stanford SWEPR research validates AI-driven productivity gains at scale.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Resources</strong><br>— <a href="https://gitlab.com/explore" target="_blank" rel="noopener noreferrer">GitLab Explore — browse public projects and access waitlist registration</a><br>— <a href="https://gitlab.com/gitlab-org/gitlab" target="_blank" rel="noopener noreferrer">GitLab open-source repository — platform source code and issue tracker</a><br>— <a href="https://gitlab.com/gitlab-com/www-gitlab-com" target="_blank" rel="noopener noreferrer">gitlab-com/www-gitlab-com — official GitLab documentation and blog source</a></div></div>
