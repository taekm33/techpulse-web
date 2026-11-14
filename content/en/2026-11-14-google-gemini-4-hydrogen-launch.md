---
title: "Google Launches Gemini 4 Hydrogen: Free in the Gemini App and Search, $1.50/$7.50 on the API — Double 3.8 Flash Until January 1"
summary: "Google released Gemini 4 Hydrogen on November 12, 2026, a fast execution model for coding and agent work that replaces Gemini 3.8 Flash as the everyday tier. It is rolling out to the Gemini app (including free users via Auto), Google Search's AI Mode, AI Studio and the Gemini API at $1.50 per million input tokens and $7.50 per million output tokens. That is twice 3.8 Flash's current promotional rate, but identical to the rate 3.8 Flash moves to on January 1, 2027. This public-source analysis covers what is confirmed, what is not, and how to time a migration."
category: "ai-news"
date: "2026-11-14"
readingTime: 7
tags: ["Google", "Gemini", "Gemini 4 Hydrogen", "AI models", "API pricing", "Google Search", "Antigravity"]
---

<div class="article-tldr">
Google introduced <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/" target="_blank" rel="noopener">Gemini 4 Hydrogen</a> at <strong>10 a.m. PT on Thursday, November 12, 2026</strong>. It is the fast, lower-cost member of the Gemini 4 family, built to execute coding and agent tasks while Carbon and Argon handle long-horizon reasoning. It is rolling out globally to the Gemini app, Google Search, AI Studio, the Gemini API, Gemini for business and (for paid AI Pro/Ultra subscribers) Antigravity. API pricing is a flat <strong>$1.50 input / $7.50 output per million tokens</strong> across the full 1M-token window.
</div>

This article is an analysis of public sources: Google's announcement posts, the Gemini API documentation and rate card, and press coverage. We did not run the model; every benchmark and speed figure below is Google's claim or a reported third-party result.

## Who should care

- **Teams running Gemini 3.8 Flash in production.** Hydrogen is Google's recommended upgrade path, but today it costs twice as much per token. That gap closes on January 1, 2027, so the next seven weeks are the natural evaluation window.
- **Developers building multi-agent systems.** Google is pitching Hydrogen as the worker and verifier model under a Carbon coordinator, and it is now the default model behind the Antigravity agent in Gemini Managed Agents.
- **Everyday Gemini and Search users.** No subscription is required. Hydrogen is now the default model in AI Mode, and free Gemini app users get it through Auto model selection when Google judges it fits the prompt.
- **Publishers and merchants who depend on Google traffic.** Google calls this the biggest model upgrade to Search yet, with more tables, images and comparison layouts in answers.

## What is confirmed (Google's own materials)

<div class="article-stats">
<strong>Release</strong> November 12, 2026, 10:00 a.m. PT (18:00 UTC), gradual global rollout<br/>
<strong>Model ID</strong> gemini-4-hydrogen, on both free and paid API tiers<br/>
<strong>Paid price per 1M tokens</strong> $1.50 input · $7.50 output (thinking tokens included) · $0.075 cached (implicit caching only)<br/>
<strong>Context</strong> 1,048,576 tokens shared by input, thinking and output; 65,536-token synchronous output; up to 1M with background long decode<br/>
<strong>Thinking levels</strong> low, medium, high (default), new xhigh<br/>
<strong>Claimed results</strong> Artificial Analysis Intelligence Index 51 at high (Argon 50; 54 at xhigh); Terminal-Bench 4.1 57% vs 18.2% for 3.8 Flash; tasks finish 2.5x faster<br/>
<strong>Surfaces</strong> AI Studio, Gemini API, Android Studio, Gemini for business, Gemini app, Google Search, Antigravity (AI Pro/Ultra)
</div>

In the launch post, Koray Kavukcuoglu, Google DeepMind SVP and chief AI architect, positions Hydrogen as a model that can "stand on its own" for everyday work or act as the execution engine beside Carbon and Argon. Alongside it, Google added <strong>Orchestrator</strong> to Antigravity, which switches between Carbon and Hydrogen inside one session. Google says Orchestrator reached near-Carbon success on Terminal-Bench 4.0 while using 24% less quota and finishing 19% faster on average.

The <a href="https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen" target="_blank" rel="noopener">developer guide</a> says Hydrogen cuts fabricated claims by more than 5x versus 3.8 Flash by flagging missing context rather than guessing, and batches file-read and search tool calls in parallel. On safety, Google reports up to 81% less overreach in agentic tasks and a 96.7% score on its internal agent-honesty evaluation.

### The pricing math

The official <a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener">Gemini Developer API rate card</a> lists 3.8 Flash at <strong>$0.75 / $3.75 through December 31, 2026</strong> and <strong>$1.50 / $7.50 starting January 1, 2027</strong>. Hydrogen is already at $1.50 / $7.50 with no scheduled change. Take a month of 20M input and 4M output tokens: 3.8 Flash costs $30 today and Hydrogen $60. From January 1, both cost $60 on standard input/output rates. Cache pricing still differs afterward ($0.075 for Hydrogen vs $0.15 for 3.8 Flash), and Hydrogen does not support explicit caching. On the free tier, Google's table states that your content is used to improve its products; on the paid tier it is not.

Some early coverage described Hydrogen's price as "unchanged from 3.8 Flash." That is only true against Flash's post-January rate, not what you are billed today.

## Not confirmed / outlook

- **Independent benchmarks.** The headline numbers come from Google. AI Times (Korea) reported that Box CEO Aaron Levie saw agent accuracy rise from 74% to 79% versus Flash, that Zapier measured 51.1% task success (Argon: 51.3%) at roughly half the cost per task, and that Hydrogen still trailed Claude Sonnet 5.5 on Terminal-Bench (63.9%). We have not reviewed those evaluations directly.
- **Rollout timing.** Google says the model is "rolling out." When it reaches every account, region and Workspace tenant is not specified; it may not appear immediately.
- **Architecture.** Press reports cite the model card as saying Hydrogen was adapted from Carbon. Parameter count and internal design have not been disclosed.
- **Longer-term pricing.** No future change is listed for Hydrogen today. Whether it stays at $1.50 / $7.50 beyond 2027 is unknown.

## What it means for developers and users

For a team on 3.8 Flash, the decision is mostly about timing. Through December 31 Flash stays at half price, so there is little reason to move a high-volume workload early unless Hydrogen's quality gain is worth paying double. From January 1 the comparison becomes quality and total token use at the same list price. Because output pricing includes thinking tokens, a model that thinks more can still cost more on identical prompts, so measure total tokens, not just the rate.

For Search users, the <a href="https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/" target="_blank" rel="noopener">Search announcement</a> describes better handling of multi-part and typo-filled questions and an improved query fan-out that surfaces a broader range of links. 9to5Google reports Hydrogen is the AI Mode default and is used for the hardest questions in AI Overviews.

<div class="article-callout tip">
<strong>Practical steps</strong><br/>
1. <strong>Benchmark on your own traffic.</strong> Run a sample of real requests at all four thinking levels with a generous max_output_tokens, then pick the lowest level that clears your quality bar, as Google's guide recommends.<br/>
2. <strong>Check for breaking changes.</strong> Explicit context caching is not supported on Hydrogen. Hard-coded low output caps (such as 8,192) can truncate answers once thinking tokens are counted; raise them to the 65,536 default or lower the thinking level instead.<br/>
3. <strong>Set a migration date before January 1.</strong> Budget for 3.8 Flash doubling on New Year's Day and plan the cutover around it.<br/>
4. <strong>Consider splitting work.</strong> If you pay Argon or Carbon rates for routine edits and test runs, test whether Hydrogen can take those steps; AI Times puts their launch rates at $2 / $10, above Hydrogen's.<br/>
5. <strong>Keep sensitive data off the free tier.</strong> Free-tier inputs are used to improve Google's products.
</div>

For context on the larger Gemini 4 models, see our earlier <a href="/2026-10-14-google-gemini-4-argon-broad-availability/">coverage of Gemini 4 Argon's broad availability</a>.

## Limitations

This piece relies on Google's announcement, developer and Search blog posts, the AI Studio developer guide and pricing page, and reporting from 9to5Google and AI Times, all checked on November 14, 2026. We did not run the model or reproduce any figure. Prices and availability can change, and the model card's detailed safety evaluations are outside the scope of this article.

<p><em>Last verified 2026-11-14.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/" target="_blank" rel="noopener">Google Blog — Introducing Gemini 4 Hydrogen (Nov 12, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/" target="_blank" rel="noopener">Google Blog — Gemini 4 Hydrogen: everyday coding and agentic workflows for developers</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/" target="_blank" rel="noopener">Google Blog — Google Search gets a major upgrade with Gemini 4 Hydrogen</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen" target="_blank" rel="noopener">Gemini API docs — What's new in Gemini 4 Hydrogen</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener">Gemini API docs — Gemini Developer API pricing</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://9to5google.com/2026/11/12/gemini-4-hydrogen-launch/" target="_blank" rel="noopener">9to5Google — Google announces Gemini 4 Hydrogen with 'significant leaps' in speed, intelligence</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.aitimes.com/news/articleView.html?idxno=217352" target="_blank" rel="noopener">AI Times (Korea) — Google launches Gemini 4 Hydrogen, outscoring Argon (Korean)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Google released Gemini 4 Hydrogen on Nov 12, 2026 — the fast execution tier of Gemini 4, succeeding 3.8 Flash</li>
<li>Available to everyone in the Gemini app (free users via Auto) and Google Search, where it is now the AI Mode default</li>
<li>API: $1.50 / $7.50 per 1M tokens, flat across 1M context — double 3.8 Flash until Dec 31, identical from Jan 1, 2027</li>
<li>Four thinking levels including new xhigh; explicit caching unsupported, so check code before migrating</li>
<li>Benchmarks are Google's claims; independent results, rollout timing and long-term pricing remain unconfirmed</li>
</ul>
</div>
