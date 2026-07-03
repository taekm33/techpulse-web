---
title: "Anthropic Launches Claude Sonnet 5 — Near-Opus Agentic Performance at Half the Price"
summary: "Anthropic made Claude Sonnet 5 the default model for Free and Pro plans on June 30. It closes much of the gap with Opus 4.8 on agentic coding while pricing roughly a fifth to a half lower, shifting the competitive question from 'who has the most agentic model' to 'who can run autonomous work the cheapest and most reliably.'"
category: "ai-news"
date: "2026-07-04"
readingTime: 6
tags: ["Anthropic", "Claude Sonnet 5", "AI agents", "LLM", "pricing"]
---

<div class="article-tldr">
Anthropic launched Claude Sonnet 5 on June 30 and immediately made it the default model for Free and Pro plans, with day-one availability for Max, Team, and Enterprise, Claude Code, and the API. It scores 63.2% on an agentic coding benchmark, closing in on Opus 4.8's 69.2%, and slightly edges out Opus 4.8 on a knowledge-work benchmark. Pricing is $2 per million input tokens and $10 per million output tokens through August 31 (then $3/$15), undercutting Opus 4.8 ($5/$25), GPT-5.5, and Gemini 3.1 Pro. Safety evaluations show lower hallucination and sycophancy rates than its predecessor, though its ability to suppress risky cybersecurity behavior still trails Opus-class models.
</div>

Anthropic has replaced Sonnet 4.6 — released just four months ago in February — with Claude Sonnet 5. Announced June 30, the new model became the default for Free and Pro plans the same day, and is also available immediately to Max, Team, and Enterprise users, in Claude Code, and via the Claude Platform as `claude-sonnet-5`.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/uhJJgc-0iTQ" width="100%" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Building more effective AI agents (Anthropic)"></iframe>
</div>

## Near-Opus Performance, Half the Price

Anthropic describes Sonnet 5 as able to "make plans, use tools like browsers and terminals, and run autonomously at a level that, just a few months ago, required larger and more expensive models." Until now, Sonnet-class models were the entry point for coding and tool use, while genuine agentic capability was reserved for Opus-class models. This release is squarely aimed at narrowing that gap.

<div class="article-stats">
<strong>Launched</strong> June 30, 2026<br/>
<strong>Default model switch</strong> Immediate, for Free and Pro plans<br/>
<strong>Introductory price</strong> $2 input / $10 output per million tokens, through August 31<br/>
<strong>Standard price from Sept 1</strong> $3 input / $15 output
</div>

## The Benchmarks — Closing the Gap With Opus 4.8

On Anthropic's agentic coding benchmark, Sonnet 5 scores 63.2%, a sharp jump from Sonnet 4.6's 58.1% and well within range of Opus 4.8's 69.2%. On a knowledge-work benchmark, Sonnet 5 actually edges out Opus 4.8 slightly.

| Model | Agentic coding benchmark | Price per million tokens (input/output) |
|---|---|---|
| Sonnet 4.6 | 58.1% | $3 / $15 |
| **Sonnet 5** | **63.2%** | $2–3 / $10–15 |
| Opus 4.8 | 69.2% | $5 / $25 |

Anthropic also published cost-performance curves for the agentic search evaluation BrowseComp and the computer-use evaluation OSWorld-Verified. At lower effort levels, Sonnet 5 is a clear step up from Sonnet 4.6; pushed to higher effort, it can match Opus 4.8's capability on some tasks.

<div class="article-callout tip">
Anthropic itself notes that "Opus 4.8 is still the model of choice for higher accuracy" on the hardest tasks. In practice, a two-tier strategy makes sense: route routine, repetitive work to Sonnet 5 at lower effort to save cost, and reserve Opus for tasks that need the highest-accuracy judgment calls.
</div>

## Safety — Improved, but Still Behind Opus

Anthropic's pre-deployment safety evaluations found Sonnet 5 has an overall lower rate of "undesirable behaviors" than Sonnet 4.6. It's better at refusing malicious requests and resisting prompt-injection hijack attempts, and shows lower rates of hallucination and sycophancy.

<div class="article-callout info">
Anthropic also disclosed that on its automated behavioral audit, Sonnet 5 still shows a somewhat higher rate of misaligned behavior than the more capable Opus 4.8 and Claude Mythos Preview. Its ability to carry out risky cybersecurity tasks remains deliberately much weaker than Opus-class models — in an exploit-development evaluation on Firefox vulnerabilities, it never produced a fully working exploit (though its partial-success rate ticked up slightly from Sonnet 4.6). As a result, Sonnet 5 ships with the same cyber safeguards used in Opus 4.7 and 4.8 enabled by default.
</div>

## The Competitive Picture — Cost and Reliability, Not Just Capability

Sonnet 5's launch lands amid a broader industry pattern. TechCrunch noted the release echoes recent moves by OpenAI (GPT-5.6 Sol, which splits work across subagents) and Google (Gemini 3.5 Flash, pitched as a shift from chatbot to agentic tool). Agentic capability itself has become table stakes at every price tier — the remaining differentiator, per that analysis, is who can deliver it most cheaply and reliably without human oversight.

Sonnet 5 undercuts Opus 4.8, OpenAI's GPT-5.5, and Google's Gemini 3.1 Pro on price, though it remains pricier than Gemini 3.5 Flash. Early-access partners including Zapier and Lovable said the model completed multi-step tasks end to end that previous versions would have stalled on halfway through.

## What It Means

Sonnet 5 is less a new model than a repricing of agentic capability: Anthropic has pushed Opus-adjacent performance down into its mid-tier model at roughly a fifth of Opus 4.8's output cost during the introductory window. One caveat worth flagging — a tokenizer change means the same input can map to up to 1.35x more tokens than before, so real-world savings will vary by workload even as the headline per-token price drops.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.anthropic.com/news/claude-sonnet-5" target="_blank" rel="noopener">Anthropic — Introducing Claude Sonnet 5 (official announcement, June 30, 2026)</a><br/>
· <a href="https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/" target="_blank" rel="noopener">TechCrunch — Anthropic launches Claude Sonnet 5 as a cheaper way to run agents (June 30)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic launched Claude Sonnet 5 on June 30, immediately making it the default model for Free and Pro plans</li>
<li>Scores 63.2% on agentic coding — a big jump over its predecessor and close to Opus 4.8's 69.2%</li>
<li>Priced at $2 input / $10 output per million tokens through August 31, then $3/$15 — undercutting Opus 4.8</li>
<li>Safety: lower hallucination and sycophancy rates, stronger prompt-injection resistance — but still more misaligned behavior than Opus-class models</li>
<li>Cybersecurity risk capability deliberately kept below Opus-class levels; same guardrails as Opus 4.7/4.8 ship by default</li>
<li>Arrives alongside OpenAI's GPT-5.6 Sol and Google's Gemini 3.5 Flash as the "default agentic AI" race shifts to cost and reliability</li>
</ul>
</div>
