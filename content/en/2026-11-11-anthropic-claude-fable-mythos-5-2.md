---
title: "Anthropic Ships Claude Fable 5.2 and Mythos 5.2: 20% Cheaper API, a Free Week for Pro, and a 30-Day Retention Catch"
summary: "Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 on November 9, 2026. They are one underlying model with two access tiers: Fable 5.2 ships with cyber and biology safeguards to every paid plan and the major clouds, while Mythos 5.2 is limited to organizations in Anthropic's verification programs. API pricing drops to $8/$40 per million input/output tokens from $10/$50. Here is what changes for subscribers, API teams and enterprise admins, with the launch-offer deadlines and the open questions, based on public sources."
category: "ai-news"
date: "2026-11-11"
readingTime: 7
tags: ["Anthropic", "Claude Fable 5.2", "Claude Mythos 5.2", "Claude", "LLM pricing", "AI models", "Amazon Bedrock"]
---

<div class="article-tldr">
On <strong>November 9, 2026</strong>, Anthropic <a href="https://www.anthropic.com/claude-fable-and-mythos-5-2" target="_blank" rel="noopener">introduced Claude Fable 5.2 and Claude Mythos 5.2</a>, roughly two months after the 5.1 release. Both names point to <strong>the same underlying model</strong>. Fable 5.2 carries cybersecurity and biology safeguards and is open to all paid Claude plans and API customers; Mythos 5.2 keeps those capabilities and is reserved for vetted organizations. List price falls to <strong>$8 input / $40 output per million tokens</strong>, 20% below Fable 5.1.
</div>

This is an analysis of public material: Anthropic's announcement, developer docs and pricing page, Help Center articles, the AWS launch post, and press coverage. We did not run the model or reproduce any result; every benchmark and anecdote below is Anthropic's own claim or a reporter's account.

## Who should care

- **Claude Pro and Team standard-seat subscribers**: Fable normally runs on pay-as-you-go usage credits on these plans. Through <strong>November 16 at 11:59 pm PT</strong> it is included in your plan, capped at 50% of weekly limits.
- **Max, Ultra and Team premium-seat subscribers**: Fable was already included; you now also get one to three "Fable resets" depending on tenure.
- **Teams paying API bills**: anyone already on Fable 5.1 gets a 20% lower rate by switching the model ID. The bigger decision may be whether you need Fable at all versus Opus 5.5.
- **Security and life-sciences organizations**: Mythos 5.2 requires approval through the Cyber Verification Program or Life Sciences Verification Program.
- **Enterprise admins**: Fable 5.2 is off by default on Enterprise plans, but is added automatically to Fable-enabled roles seven days after launch unless you opt out.

## What Anthropic has confirmed

<div class="article-stats">
<strong>Release date</strong> November 9, 2026<br/>
<strong>Model IDs</strong> claude-fable-5-2; claude-mythos-5-2 (verified orgs only)<br/>
<strong>Price per MTok</strong> $8 input, $40 output, $0.20 cache hits (Fable 5.1: $10 / $50 / $0.25)<br/>
<strong>Fast mode</strong> up to 2.5x faster generation at $16 input / $80 output<br/>
<strong>Context / output</strong> 1M-token context, 128K max output, June 2026 knowledge cutoff<br/>
<strong>Speed claim</strong> outputs up to 30% faster than the 5.1 models<br/>
<strong>Platforms</strong> Claude apps (paid plans), Claude API, Amazon Bedrock and Claude Platform on AWS, Google Cloud, Microsoft Foundry<br/>
<strong>Data handling</strong> "Covered Model": 30-day retention required; no zero data retention unless Anthropic authorizes it
</div>

The prices come straight from Anthropic's <a href="https://platform.claude.com/docs/en/about-claude/pricing" target="_blank" rel="noopener">pricing page</a>, which still lists Fable 5.1 at $10/$50, and the specs from the <a href="https://platform.claude.com/docs/en/about-claude/models/overview" target="_blank" rel="noopener">models overview</a>. Notably, Anthropic itself does not position Fable as the default: it tells users to start most coding and knowledge work on <strong>Claude Opus 5.5</strong> ($4/$20) and move up to Fable or Mythos only for the most ambitious, open-ended technical problems. It also pitches Fable 5.2 as an "Advisor" that smaller models consult, or an "Orchestrator" that hands simpler subtasks to cheaper models.

### The headline claims

- **Code that gets merged**: on FrontierCode 2.0, which scores whether maintainers would accept a model's changes, Anthropic reports 49.1% at Xhigh effort for Fable 5.2, versus 32.4% for Fable 5.1, 45.5% for Opus 5.5 and 42.8% for OpenAI's GPT-6 Astra. At High effort, Fable 5.2 roughly matched Opus 5.5's best score at about half the cost per task, the company says.
- **Multi-day agent runs**: an Anthropic engineer gave Fable 5.2 an empty folder and asked for a prototype operating system; the model coordinated more than 1,000 subagents for eight days and produced a system that boots on a laptop. A separate 1,000-agent run formalized Fermat's Last Theorem in Lean in 30 hours.
- **Security (Mythos 5.2)**: on Anthropic's internal CVE Rediscovery test across 1,829 published CVEs, Mythos 5.2 scored 89.6% versus 78.3% for Mythos 5.1, and found 10.2% more vulnerabilities than Opus 5.5. A Firefox security tester quoted in the post said Mythos 5.2 roughly doubled its vulnerability-discovery metrics compared with Mythos 5.1.
- **Fewer false refusals**: Anthropic says Fable 5.2's cyber and bio safeguards are as robust as 5.1's while blocking fewer legitimate requests.

## What is not yet established

- **Independent replication**: none of the benchmarks or showcase projects above has been reproduced by a third party in the sources reviewed for this article. Korean outlets reported that Fable 5.2 placed first on Artificial Analysis's Intelligence Index at 65 points; we did not find that figure in a primary source and treat it as reported, not confirmed.
- **Mythos expansion abroad**: Korean coverage (Aju Business Daily) says Anthropic plans to open Mythos to companies outside the US; Anthropic's own post only says it is "continuing to expand" the Cyber Verification Program. No timeline is public.
- **Export-control risk**: in June, a US Commerce Department order took Fable 5 and Mythos 5 offline worldwide for 19 days before Anthropic <a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank" rel="noopener">redeployed them on June 30</a>. Nothing similar has been announced for 5.2, but the episode is a reminder that a single frontier model can disappear from a production stack overnight.
- **Real-world cost**: Fable consumes plan limits faster than other models, and Anthropic has not published typical token counts per task outside its own benchmark charts.

## What it means for you

For individual subscribers, the practical news is the <a href="https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers" target="_blank" rel="noopener">launch offer</a>. Pro and Team standard seats can spend up to half their weekly limit on any Fable model (5.2, 5.1 or 5) until November 16 at 11:59 pm PT (2:59 am ET on November 17), plus one reset that expires at the same moment. Max, Ultra and premium seats get one reset if they have subscribed for under six months, two for six to twelve months and three beyond that, all expiring March 8, 2027 at 11:59 pm PT. Resets only go to accounts whose paid billing was in place before 10:00 am PT on November 9. The Free plan, self-serve Enterprise and usage-based Enterprise plans are excluded. Your default model does not change, so you have to pick Fable 5.2 from the model picker, and Claude Code needs version 2.1.321 or later.

For engineering and compliance teams, the retention terms matter more than the discount. The <a href="https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2" target="_blank" rel="noopener">developer docs</a> classify both models as Covered Models that require 30-day retention, which rules out existing zero-data-retention arrangements unless Anthropic signs off. According to the <a href="https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/" target="_blank" rel="noopener">AWS launch post</a>, Bedrock users must set a data-retention mode on the account or project before invoking the model, with Amazon staff performing safety review inside the AWS boundary; eligible customers can use zero retention for internal workloads until Anthropic's Enterprise Frontier Safeguards arrive. Teams in regulated industries such as healthcare or finance should check those terms against their own obligations before routing sensitive data to Fable 5.2.

<div class="article-callout tip">
<strong>Practical next steps</strong><br/>
1. <strong>Pro users</strong>: before the November 16 PT cutoff, run a handful of your real tasks on both Fable 5.2 and Opus 5.5 and decide whether the difference justifies paying usage credits afterward. Watch Settings &gt; Usage, since Fable drains limits faster.<br/>
2. <strong>Reset holders</strong>: a reset returns usage already spent; it does not raise your cap. Save it until you are close to a limit, then use Settings &gt; Usage &gt; "Reset for free."<br/>
3. <strong>API teams on Fable 5.1</strong>: swap in claude-fable-5-2 behind a flag and compare quality and spend; also test whether Opus 5.5 at half the price is enough for most traffic.<br/>
4. <strong>Enterprise admins</strong>: decide which roles should get Fable 5.2 before the automatic enablement seven days after launch, and confirm the 30-day retention requirement fits your data policies.<br/>
5. <strong>Security and biotech teams</strong>: if you need Mythos 5.2, apply to the relevant verification program. Anthropic says Claude Enterprise customers can also reach Mythos 5.2 through Claude Security code scanning without joining the Cyber Verification Program.
</div>

## Limits of this article

This piece relies on Anthropic's announcement, developer documentation, pricing page, Help Center articles and Supported Regions Policy, the AWS Machine Learning blog, and reporting by Reuters (via The Star), Yahoo Finance and Aju Business Daily, all checked on November 11, 2026. We had no access to the model and reproduced nothing. Prices, promotions and availability can change, and the system card's detailed safety findings are outside this article's scope.

<p><em>Last verified 2026-11-11.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.anthropic.com/claude-fable-and-mythos-5-2" target="_blank" rel="noopener">Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2 (Nov 9, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2" target="_blank" rel="noopener">Claude Docs — What's new in Claude Fable 5.2 (platforms, retention)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://platform.claude.com/docs/en/about-claude/pricing" target="_blank" rel="noopener">Claude Docs — Pricing</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://platform.claude.com/docs/en/about-claude/models/overview" target="_blank" rel="noopener">Claude Docs — Models overview</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers" target="_blank" rel="noopener">Claude Help Center — Claude Fable 5.2 launch offers</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan" target="_blank" rel="noopener">Claude Help Center — Claude Fable models on your plan</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank" rel="noopener">Anthropic — Redeploying Claude Fable 5 (Jun 30, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/" target="_blank" rel="noopener">AWS Machine Learning Blog — Introducing Claude Fable 5.2 on AWS</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.thestar.com.my/tech/tech-news/2026/11/10/anthropic-unveils-new-fable-mythos-models-as-competition-heats-up-ahead-of-ipo" target="_blank" rel="noopener">The Star (Reuters) — Anthropic unveils new Fable, Mythos models as competition heats up ahead of IPO</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://finance.yahoo.com/technology/article/anthropic-debuts-claude-fable-52-and-mythos-52-models-as-ipo-nears-190405087.html" target="_blank" rel="noopener">Yahoo Finance — Anthropic debuts Claude Fable 5.2 and Mythos 5.2 models as IPO nears</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.ajupress.com/view/20261110091270160" target="_blank" rel="noopener">Aju Press — Anthropic Launches 'Claude Fable 5.2' and 'Claude Mythos 5.2' with 20% Price Reduction</a>
</div>

<div class="article-keypoints">
<ul>
<li>Fable 5.2 and Mythos 5.2 are one model with two access tiers; Mythos needs verification-program approval</li>
<li>API price cut 20% to $8/$40 per million tokens; optional fast mode at $16/$80</li>
<li>Pro and Team standard seats get Fable in-plan through Nov 16, 11:59 pm PT, capped at 50% of weekly limits</li>
<li>Both are 30-day-retention Covered Models, so check data policies before production use</li>
<li>Benchmarks and showcase projects are Anthropic's claims; independent replication is still pending</li>
</ul>
</div>
