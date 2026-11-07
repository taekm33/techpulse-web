---
title: "OpenAI Launches GPT-6 Cyber: A 'Critical'-Rated Security Model Limited to Approved Daybreak Red Customers"
summary: "On November 5, OpenAI released GPT-6 Cyber, a GPT-6 Astra variant trained for vulnerability discovery, exploit validation and patch drafting. OpenAI reports 48.5% on ExploitGym (up from 32.1%), 99.93% scope adherence without safety prompts, 948 Linux kernel privilege-escalation exploits and 81 new high-severity Firefox bugs. Rated Critical under its Preparedness Framework, it is available only to select approved Daybreak Red customers via the API and Codex at $20/$100 per million input/output tokens. A public-source analysis of what security and infrastructure teams should take from it."
category: "ai-news"
date: "2026-11-07"
readingTime: 7
tags: ["OpenAI", "GPT-6 Cyber", "Daybreak", "Cybersecurity", "Linux kernel", "Firefox", "AI safety"]
---

<div class="article-tldr">
OpenAI announced <a href="https://openai.com/index/introducing-gpt-6-cyber/" target="_blank" rel="noopener">GPT-6 Cyber</a> on <strong>Thursday, November 5, 2026</strong>. It is a cyber-specialized version of GPT-6 Astra, post-trained to find vulnerabilities, build working exploits to prove impact, and propose patches while staying inside the scope a researcher authorizes. OpenAI rates its cyber capability <strong>Critical</strong>, the top tier of its Preparedness Framework, and is not releasing it broadly: access starts with <strong>a select group of approved Daybreak Red customers</strong> through the API and Codex. If you are a regular ChatGPT or API customer, you cannot call it today.
</div>

This is an analysis of public material: OpenAI's announcement, system card, developer documentation and Linux research report, Mozilla's blog, and press coverage. We had no access to the model and did not reproduce any result; every figure below is OpenAI's or a publication's.

## Who should care

- **Enterprise red teams and AppSec leads.** A commercial model that runs the find-reproduce-exploit-patch loop is now on the market, gated behind an application and review.
- **Platform and SRE teams running Linux fleets.** OpenAI's headline Linux finding is about local privilege escalation, which matters most on shared hosts, CI runners and multi-tenant infrastructure.
- **Open-source maintainers.** Expect more machine-generated vulnerability reports and candidate patches. OpenAI points maintainers to Patch the Planet, run with Trail of Bits, Calif and HackerOne.
- **Everyone else.** You won't use the model, but you will likely see more frequent browser and kernel security updates. Installing them promptly is the practical takeaway.

## What OpenAI has confirmed

<div class="article-stats">
<strong>Announced</strong> November 5, 2026 (US)<br/>
<strong>Base</strong> Cyber-specialized variant of GPT-6 Astra (system card)<br/>
<strong>ExploitGym</strong> 48.5% vs. 32.1% for GPT-5.6 Cyber (~51% relative gain)<br/>
<strong>Black-box web pentest recall</strong> 40.3% vs. 32.0% for GPT-6 Astra<br/>
<strong>RemoteExploitBench</strong> 95% of tasks completed; Astra under Daybreak Blue refused all of them<br/>
<strong>Scope adherence (Honeypot eval)</strong> 99.93% without deployment prompt, 100% with it; GPT-5.6 Cyber 94.49%<br/>
<strong>Preparedness rating</strong> Critical (GPT-5.6 Cyber was High)<br/>
<strong>Context</strong> 1.05M tokens, 128K max output, text and image input<br/>
<strong>Price</strong> $20 input / $2 cached input / $100 output per 1M tokens (short context)<br/>
<strong>Access</strong> Select approved Daybreak Red customers, API and Codex
</div>

The <a href="https://deploymentsafety.openai.com/gpt-6-cyber/introduction" target="_blank" rel="noopener">system card</a> frames the model as built for authorized work such as vulnerability discovery, exploit development and web pentesting, with training aimed at fewer cyber refusals, staying within the user's authorized scope, and keeping refusals outside cybersecurity. The <a href="https://developers.openai.com/api/docs/models/gpt-6-cyber" target="_blank" rel="noopener">model page in the developer docs</a> lists the model ID <code>gpt-6-cyber</code>, the pricing above, cache writes at $25 per million tokens for 30 minutes or $50 for 12 hours, and states that an organization "needs Daybreak Red access and approval." The Batch and fine-tuning endpoints are not supported.

### The real-world evidence OpenAI cites

**Linux.** In a November 4 report, <a href="https://openai.com/index/a-thousand-fewer-paths-to-root/" target="_blank" rel="noopener">"A thousand fewer paths to root,"</a> OpenAI describes a five-stage pipeline (target selection, static scanning, dynamic reproduction, exploitability assessment, patch generation, then human review) run in mid-October against the kernel master branch on a stock desktop distribution. It produced 2,308 candidates, reproduced 1,724, and yielded working local privilege escalation exploits for 948 distinct bugs, at $1,213,430 in API credits, about $1,279 per unique exploit. A July run with GPT-5.6 Sol found 166. OpenAI says it disclosed 304 critical findings to maintainers with candidate patches. The next day, the launch post identified GPT-6 Cyber as the model behind that run.

**Firefox.** OpenAI says the model produced evidence and reproducible tests for 81 new vulnerabilities that Mozilla classified as high severity, and showed 30 known issues were worse than previously assessed. Mozilla's October 29 post, <a href="https://blog.mozilla.org/en/firefox/privacy-security/defending-patch-gap/" target="_blank" rel="noopener">"Defending the patch gap against automated attackers,"</a> says the Firefox team has used frontier models from Anthropic and OpenAI since February and has shipped more than seven times as many security fixes as in the same period of 2025.

## What is not yet established

- **Independent replication.** All benchmark numbers, including the new RemoteExploitBench and Honeypot evaluations, are OpenAI's own. <a href="https://www.csoonline.com/article/4245265/openai-built-an-ai-pipeline-to-find-exploit-and-patch-linux-flaws.html" target="_blank" rel="noopener">CSO Online</a> notes the Linux report does not give a full remediation breakdown for all 948 findings.
- **What "948" means.** These are local exploits that need an existing foothold, not remote break-ins, and the pipeline targeted security-relevant parts of the kernel rather than auditing all of it. It is not a count of newly disclosed CVEs.
- **Production behavior.** The 99.93% scope result describes an evaluation, not a guarantee for live engagements. OpenAI's own Linux pipeline still ended with a human researcher reviewing every exploit and patch.
- **Timing of wider access.** OpenAI says it will expand to all Daybreak Red customers "soon," with no date.
- **Daybreak Blue data use.** <a href="https://thehackernews.com/2026/11/openai-launches-gpt-6-cyber-after-ai.html" target="_blank" rel="noopener">The Hacker News</a> reports that, starting November 29, OpenAI plans to use Daybreak Blue session content from personal accounts to strengthen misuse safeguards even when the "improve the model" setting is off. Check OpenAI's current terms before relying on that setting.

## What it means for security and infrastructure teams

The most consequential line is in the Linux report, not the launch post: for the near term, OpenAI writes, a low-privileged account on a system missing available patches should be treated as functionally equivalent to root against a well-resourced attacker. If your threat model still treats "unprivileged shell" as a contained incident, that assumption is weaker than it was a month ago.

On cost, $100 per million output tokens is steep next to general-purpose models, but OpenAI's own numbers put a successful exploit at about $359 in credits on average. The report also says every result went through human review before disclosure, so budget for expert triage time, not just tokens.

<div class="article-callout tip">
<strong>Practical steps</strong><br/>
1. <strong>Shorten kernel patch latency.</strong> Audit how long Linux hosts run behind the latest kernel, and plan reboots or live patching, starting with hosts that have many low-privilege users or run untrusted CI jobs.<br/>
2. <strong>Add isolation layers.</strong> The OpenAI report recommends sandboxing such as gVisor or Firecracker to limit blast radius; containers alone may not be enough.<br/>
3. <strong>Don't delay browser updates.</strong> Mozilla warns that attackers can reverse-engineer a fix before most users receive it. Review any enterprise policy that holds Firefox updates back.<br/>
4. <strong>If you want access,</strong> apply through <a href="https://openai.com/daybreak/" target="_blank" rel="noopener">Daybreak</a> as an individual or organization. OpenAI verifies applicants and reviews intended use. Have a written rules-of-engagement document and an IP allowlist plan ready; <a href="https://www.securityweek.com/openai-says-new-gpt-6-cyber-model-hunts-flaws-without-crossing-the-line/" target="_blank" rel="noopener">SecurityWeek</a> also notes a separate Daybreak Red group for approved critical-infrastructure defenders.<br/>
5. <strong>Compare on outcomes.</strong> When weighing any gated security model, measure cost per validated finding and analyst hours, not list price per token.
</div>

## Limitations

This piece relies on OpenAI's announcement, system card, developer docs and Linux report, Mozilla's blog, and reporting from The Verge, The Hacker News, SecurityWeek and CSO Online, all checked on November 7. We could not access GPT-6 Cyber. Pricing and access terms may change. Some outlets cite additional figures, such as how many of the 948 bugs were previously unknown, that we could not find in OpenAI's own materials, so we left them out.

<p><em>Last verified 2026-11-07.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://openai.com/index/introducing-gpt-6-cyber/" target="_blank" rel="noopener">OpenAI — GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents (Nov 5, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://deploymentsafety.openai.com/gpt-6-cyber/introduction" target="_blank" rel="noopener">OpenAI Deployment Safety Hub — GPT-6 Cyber System Card</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://developers.openai.com/api/docs/models/gpt-6-cyber" target="_blank" rel="noopener">OpenAI developer docs — GPT-6-Cyber model page (specs, pricing, access)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://openai.com/index/a-thousand-fewer-paths-to-root/" target="_blank" rel="noopener">OpenAI — A thousand fewer paths to root (Nov 4, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://openai.com/daybreak/" target="_blank" rel="noopener">OpenAI — Daybreak program and application</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.mozilla.org/en/firefox/privacy-security/defending-patch-gap/" target="_blank" rel="noopener">Mozilla — Defending the patch gap against automated attackers (Oct 29, 2026)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.theverge.com/ai-artificial-intelligence/1027599/openai-gpt-6-cyber-launch" target="_blank" rel="noopener">The Verge — OpenAI says GPT-6 Cyber is better at finding vulnerabilities without going out of bounds</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://thehackernews.com/2026/11/openai-launches-gpt-6-cyber-after-ai.html" target="_blank" rel="noopener">The Hacker News — OpenAI Launches GPT-6 Cyber After AI Helps Find 81 Firefox Flaws, 948 Linux Exploits</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.securityweek.com/openai-says-new-gpt-6-cyber-model-hunts-flaws-without-crossing-the-line/" target="_blank" rel="noopener">SecurityWeek — OpenAI Says New GPT-6 Cyber Model Hunts Flaws Without Crossing the Line</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.csoonline.com/article/4245265/openai-built-an-ai-pipeline-to-find-exploit-and-patch-linux-flaws.html" target="_blank" rel="noopener">CSO Online — OpenAI built an AI pipeline to find, exploit and patch Linux flaws</a>
</div>

<div class="article-keypoints">
<ul>
<li>OpenAI launched GPT-6 Cyber on Nov 5, rated Critical for cybersecurity under its Preparedness Framework</li>
<li>Reported 48.5% on ExploitGym (from 32.1%) and 99.93% scope adherence; all figures are OpenAI's and not independently replicated</li>
<li>Linux pipeline: 948 unique local privilege escalation exploits for about $1.21M in credits; 81 new high-severity Firefox bugs</li>
<li>Access is limited to select approved Daybreak Red customers via API and Codex at $20/$100 per 1M input/output tokens</li>
<li>Near-term action: cut kernel patch latency, add sandbox layers, and keep browsers updated</li>
</ul>
</div>
