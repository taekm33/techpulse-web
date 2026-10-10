---
title: "Anthropic Launches 'Cyber Mission': Free AI Vulnerability Scans for Open Source and a Critical Infrastructure Defense Program"
summary: "On October 8, 2026, Anthropic announced the Anthropic Cyber Mission, a long-term program to support defenders. It starts with two efforts: the Critical Infrastructure Defense Program (CIDP), which gives operational-technology security providers Claude models and on-site engineers (11 founding partners), and OSS Scanner, a free, opt-in service that periodically scans critical open-source projects. The key caveat: scanner reports are model-generated and sent without human review. Here is what maintainers and security teams should know, based on public materials."
category: "ai-news"
date: "2026-10-10"
readingTime: 6
tags: ["Anthropic", "Claude", "Cybersecurity", "Open Source", "OSS Scanner", "Critical Infrastructure"]
---

<div class="article-tldr">
On October 8, 2026, Anthropic announced the <strong>Anthropic Cyber Mission</strong>, which it calls "a long-term commitment to securing the systems everyone depends on." It starts in two areas: (1) the <strong>Critical Infrastructure Defense Program (CIDP)</strong>, which gives providers that secure operational technology (power grids, water systems, transportation) access to frontier Claude models, on-site engineers, and threat research; and (2) <strong>OSS Scanner</strong>, a <strong>free</strong>, opt-in service that periodically scans critical open-source projects and sends a reproducer and a candidate fix. Anthropic says the scanner's reports are model-generated and sent <strong>without human review</strong>, so some may be wrong or overstate severity.
</div>

This article is an analysis of public materials: Anthropic's announcement, its research post, the OSS Scanner page, and press coverage. We did not enroll a project or review any scanner output ourselves.

## Who should care

- **Open-source maintainers**: If you maintain widely used libraries or infrastructure software, you may be eligible for free AI scanning. Enrolling also means a steady stream of unvalidated reports, so you need the capacity to triage them.
- **Enterprise security and DevSecOps teams**: Disclosures in the open-source packages you depend on may pick up. It's a good time to review how quickly you ship dependency updates.
- **OT, manufacturing, and energy security teams**: CIDP targets this sector directly. Its first cohort is security providers, not individual utilities or operators.

## What is confirmed

In its <a href="https://www.anthropic.com/news/anthropic-cyber-mission" target="_blank" rel="noopener">announcement</a>, Anthropic acknowledges that frontier models "can be misused to exploit vulnerabilities and conduct cyber operations." It says it wants to put tools, research, and resources in defenders' hands first.

<div class="article-stats">
<strong>Announced</strong> October 8, 2026<br/>
<strong>Initial focus</strong> Critical infrastructure, open-source software<br/>
<strong>CIDP founding partners</strong> 11<br/>
<strong>OSS Scanner cost</strong> Free (Anthropic covers it)<br/>
<strong>OSS Scanner review</strong> Model-generated, sent without human review<br/>
<strong>Company forecast</strong> "In two years, AI will favor defense"
</div>

### Critical Infrastructure Defense Program (CIDP)

CIDP gives operational-technology (OT) security providers access to frontier Claude models, on-site engineers, and threat research. The 11 founding partners named in the announcement are Accenture, Booz Allen, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks, PwC, and Rockwell Automation. Anthropic says it is starting with a "small cohort of providers" and will expand to more partners and sectors "over the coming months." It points out that OT systems "often cannot be taken offline to patch." Companies that build security products or services for critical infrastructure can <a href="https://claude.com/form/critical-infrastructure-defense-program-interest" target="_blank" rel="noopener">register interest</a>.

### OSS Scanner: free vulnerability scans for open source

According to Anthropic's <a href="https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source" target="_blank" rel="noopener">research post</a>, OSS Scanner runs periodic scans on enrolled projects using the company's strongest models, including Claude Mythos. The service is modeled on Google's OSS-Fuzz. Each report includes a self-contained reproducer, an explanation of the bug (with a bisection to when it was introduced, where possible), and a candidate patch when one is available.

The <a href="https://red.anthropic.com/oss-scanner" target="_blank" rel="noopener">OSS Scanner page</a> sets out the enrollment rules:

- It accepts "established projects that have a critical impact on infrastructure and user security." Anthropic decides case by case.
- **Only core maintainers** can enroll, and Anthropic verifies each one manually.
- To enroll, open a PR to the <a href="https://github.com/anthropics/oss-scanner" target="_blank" rel="noopener">anthropics/oss-scanner repository</a> that adds a `project.yaml` (git URL, contact email, path to a Dockerfile that builds the project offline). Any git URL works, so projects don't have to be on GitHub.
- Scans run without internet access after the Dockerfile build. There's no fixed scan schedule.

## Accuracy: read the numbers with their caveats

The announcement says Anthropic expects "a true-positive rate above 90%." The research post gives more detail from the pilot. Penetration testers reviewed 97 critical- and high-severity findings across 48 projects, and 85 (88%) met Anthropic's coordinated-disclosure bar. Of the other 12, 11 were real issues that were already known or duplicated other findings, and one was a false positive. Anthropic also notes that some maintainers said severity ratings were inflated or that the scanner misread their threat model. All of these figures come from Anthropic. There is no independent evaluation yet.

## What the press flagged

<a href="https://itdaily.com/news/security/anthropic-on-a-mission-to-improve-the-security-of-critical-infrastructure-and-open-source/" target="_blank" rel="noopener">ITdaily</a> noted that CIDP's commercial terms weren't disclosed. It also said it's unclear whether partners get free access or who pays for model compute. The announcement doesn't give an overall budget for the Cyber Mission either.

## Unconfirmed and forward-looking (kept separate from facts)

- **Who else can join CIDP**: Whether utilities, operators, or security firms outside the founding cohort (including outside the U.S.) can join, and on what terms, is **unconfirmed**.
- **Regional limits**: The OSS Scanner page lists no country or region restrictions. Approval is at Anthropic's discretion, so eligibility for any specific project is **unconfirmed** until you apply.
- **"AI will favor defense in two years"**: This is Anthropic's forecast, not an established fact.

## What it means for developers and security teams

If OSS Scanner scales, more vulnerability fixes and disclosures could arrive at once in widely used open-source projects. In the research post, Anthropic says it found more than 29,000 candidate vulnerabilities over the past six months and manually triaged about 6,000. Its stated concern is that finding bugs has become faster than fixing them. Downstream users should expect more frequent advisories and patch releases to act on.

<div class="article-callout tip">
<strong>What you can do now</strong><br/>
1. <strong>Maintainers</strong>: Check the eligibility criteria (critical impact, capacity to handle high/critical reports). Prepare a Dockerfile that builds offline, then enroll via PR. Add a PGP key if you want encrypted reports.<br/>
2. <strong>If you receive a report</strong>: It hasn't been human-reviewed. Confirm it with the reproducer before acting, and re-score severity against your own threat model.<br/>
3. <strong>Enterprise security teams</strong>: Subscribe to security advisories for your key open-source dependencies and review your update cadence.<br/>
4. <strong>Security research and defense teams</strong>: Also look at Anthropic's <a href="https://www.anthropic.com/news/cyber-verification-program" target="_blank" rel="noopener">Cyber Verification Program</a>, which offers tiered model access for defense and red-team work.
</div>

## Limitations

This article relies only on Anthropic's materials and early press coverage. The accuracy figures come from Anthropic's own pilot, and CIDP's cost structure and terms for non-founding participants aren't public. Actual report quality and the triage load on maintainers will only become clear after the service has run for a while and outside evaluations appear.

<p><em>Last verified 2026-10-10.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.anthropic.com/news/anthropic-cyber-mission" target="_blank" rel="noopener">Anthropic — Introducing the Anthropic Cyber Mission (2026-10-08)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source" target="_blank" rel="noopener">Anthropic Research — Launching an opt-in vulnerability-finding service for open source (2026-10-08)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://red.anthropic.com/oss-scanner" target="_blank" rel="noopener">Anthropic — OSS Scanner page</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/anthropics/oss-scanner" target="_blank" rel="noopener">GitHub — anthropics/oss-scanner repository</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.anthropic.com/news/cyber-verification-program" target="_blank" rel="noopener">Anthropic — Expanded Cyber Verification Program (2026-10-06)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://itdaily.com/news/security/anthropic-on-a-mission-to-improve-the-security-of-critical-infrastructure-and-open-source/" target="_blank" rel="noopener">ITdaily — Anthropic on a mission for better security of critical infrastructure and open source (2026-10-09)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic announced the Cyber Mission on October 8, 2026, starting with critical infrastructure and open source</li>
<li>CIDP: Claude models and on-site engineers for OT security providers; 11 founding partners; commercial terms not disclosed</li>
<li>OSS Scanner: free periodic scans for critical open-source projects; core maintainers enroll via GitHub PR; reports go out without human review</li>
<li>In Anthropic's pilot, 85 of 97 findings (88%) met its disclosure bar; not independently verified</li>
<li>Eligibility for organizations outside the founding cohort, and regional limits, are unconfirmed</li>
</ul>
</div>
