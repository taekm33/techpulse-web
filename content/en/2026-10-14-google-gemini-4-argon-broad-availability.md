---
title: "Gemini 4 Argon Opens Up: Paid API, AI Pro and Ultra Get Google's Frontier Model — Intro Pricing Ends Nov. 30"
summary: "On Oct. 13, 2026, Google widened access to Gemini 4 Argon beyond the cyber-defense partners who got it on Sept. 30. Developers on the paid Gemini API tier, enterprises, and Google AI Pro and Ultra subscribers (Gemini app and AI Mode in Search) can now use it; free users cannot. API pricing is $2/$10 per million input/output tokens through Nov. 30, then doubles to $4/$20. Here is what is confirmed, what is still unclear, and how to plan around the price change, based on public sources."
category: "ai-news"
date: "2026-10-14"
readingTime: 6
tags: ["Google", "Gemini", "Gemini 4 Argon", "Gemini API", "AI Mode"]
---

<div class="article-tldr">
Google moved <strong>Gemini 4 Argon</strong> from a gated cyber-defense preview to general paid access on <strong>Oct. 13, 2026</strong>. It is now on the <strong>paid tier of the Gemini API</strong> for developers and enterprises, and in the <strong>Gemini app and AI Mode in Search</strong> for <strong>Google AI Pro and Ultra</strong> subscribers. The free tier is excluded. Introductory API pricing of <strong>$2 input / $10 output per million tokens</strong> runs through <strong>Nov. 30</strong>; from Dec. 1 it becomes <strong>$4 / $20</strong>. Most performance numbers are Google's own.
</div>

This is an analysis of public material: Google's official posts and developer documentation plus press coverage. We did not run the model or reproduce any benchmark.

## Who should care

- **Teams building on the Gemini API.** A new top-end model is live on the paid tier today, and the discount window is roughly seven weeks. Budgets written now need to assume December's list price.
- **Google AI Pro ($19.99/month in the U.S., per press reports) and Ultra subscribers.** Argon shows up as a model choice in the Gemini app and AI Mode at no extra charge, with Ultra getting higher limits.
- **Security teams.** Google says it is expanding its Fairwind Program, which offers Argon without cyber guardrails to vetted defenders, to hundreds more partners.
- **Free users.** Not included in this release, in either the consumer app or the API.

## What Google confirmed

In the <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/" target="_blank" rel="noopener">Oct. 13 launch post</a>, Google DeepMind's Koray Kavukcuoglu said Argon is "globally available today for developers and enterprises via the API." A <a href="https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" target="_blank" rel="noopener">separate Gemini app post</a> said Pro and Ultra subscribers can now use it.

<div class="article-stats">
<strong>Timeline</strong> Sept. 30 limited cyber-defender release → Oct. 13 paid developers, enterprises, Pro/Ultra<br/>
<strong>Gemini app + AI Mode</strong> Google AI Pro and Ultra<br/>
<strong>Google Antigravity</strong> Ultra subscribers<br/>
<strong>Gemini API</strong> Paid tier only; model ID <code>gemini-4-argon</code><br/>
<strong>Intro price (through Nov. 30)</strong> $2 input / $10 output per 1M tokens (output includes thinking tokens)<br/>
<strong>List price (from Dec. 1)</strong> $4 input / $20 output per 1M tokens<br/>
<strong>Token limit</strong> 1M unified input-output (per Google)
</div>

The <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noopener">Gemini API pricing page</a> adds detail: cached input is $0.10 per million tokens (rising to $0.20), with implicit caching only and no explicit cache support. Batch requests cost half the standard rate. The page says Argon is not available on the free tier. Google's <a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/" target="_blank" rel="noopener">developer post</a> also lists AI Studio and Android Studio as entry points.

The Gemini app also gained a "tasks" mode, switched on with a toggle in the chat window. Google says Gemini can keep working while you are away from your computer, and it now connects to more than 40 apps, including Instacart, OpenTable, Adobe and Shopify. Antigravity's agentic coding interface is available inside the Gemini app for macOS.

For researchers, Google is offering up to 10,000 scientists six months of free access to Antigravity's highest usage tier, subject to eligibility, capacity and selection.

## The performance claims, and who made them

Google reports a No. 1 ranking on the Vals Index (finance, coding, legal and tax tasks), 87% on the ERQA embodied-reasoning benchmark, and an indirect prompt-injection attack success rate of 0.7% across 15 adaptive attempts on Gray Swan's benchmark. Its <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" target="_blank" rel="noopener">Sept. 30 announcement</a> put Argon at 77.9% on DeepSWE v1.1, a long-horizon software engineering test. <a href="https://siliconangle.com/2026/10/13/gemini-4-argon-reaches-gemini-app-pro-and-ultra-subscribers-alongside-a-new-tasks-mode/" target="_blank" rel="noopener">SiliconANGLE</a> noted that Google's chart shows Claude Opus 5.5 at 74.2% on that test, and that the comparison comes from Google itself.

The one outside figure in early coverage comes via <a href="https://www.engadget.com/2285023/google-gemini-4-argon-is-now-available-in-the-gemini-app-and-ai-mode-in-search/" target="_blank" rel="noopener">Engadget</a>, which reported that Artificial Analysis scores Argon level with OpenAI's GPT-6 Astra on its Intelligence Index at about 60% of the cost per task at introductory prices. We have not checked that figure against Artificial Analysis directly, and the cost advantage shrinks once the intro pricing ends.

## Still unconfirmed

- **Country and language coverage.** Google calls the API release global but publishes no country list for the app or AI Mode. <a href="https://www.searchenginejournal.com/google-gemini-4-argon-ai-mode/592806/" target="_blank" rel="noopener">Search Engine Journal</a> reported that the AI Mode rollout is gradual, that its own Pro account did not show Argon at first, and that no language was specified.
- **Tasks mode regions.** SiliconANGLE, citing Google's plans page, said tasks mode is limited to select countries for now. Which countries is unconfirmed.
- **Exact usage limits.** Google says Ultra gets higher Argon limits than Pro but has not published numbers in these posts.
- **Rest of the family.** Google said it looks forward to "bringing you the rest of the Gemini 4 family" but gave no dates.

## What it means for your bill

The headline change for developers is a built-in price cliff. Every cost model built on today's $2/$10 rates will be off by a factor of two on Dec. 1. Because output pricing includes thinking tokens, workloads that lean on long reasoning can produce output bills well above what the visible response length suggests.

The 1M-token unified limit makes single-pass work over large codebases or document sets practical, but filling that window at list price costs about $4 in input alone per full-context call.

<div class="article-callout tip">
<strong>Practical next steps</strong><br/>
1. <strong>Subscribers:</strong> check the model picker in the Gemini app and the "+" menu in AI Mode. If Argon is missing, the rollout may not have reached your account yet.<br/>
2. <strong>Developers:</strong> run your own eval set against <code>gemini-4-argon</code> on a billed key before Nov. 30, while tokens cost half.<br/>
3. <strong>Budget at list price:</strong> measure output including thinking tokens and re-price at $4/$20 before committing a production rollout.<br/>
4. <strong>Cut costs:</strong> keep long, repeated prompt prefixes stable so implicit caching applies, and move non-urgent jobs to batch at half price.
</div>

## Limitations

This piece relies on Google's Oct. 13 posts and documentation and same-day press coverage. Benchmark and safety figures are Google's, with limited independent replication so far. Regional availability and per-tier limits were not published in the sources consulted, and a staged rollout means access can change over the coming days.

<p><em>Last verified 2026-10-14.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/" target="_blank" rel="noopener">Google — Gemini 4 Argon launch post (Oct. 13, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" target="_blank" rel="noopener">Google — Gemini 4 Argon in the Gemini app, tasks mode (Oct. 13, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/" target="_blank" rel="noopener">Google — Gemini 4 Argon for developers (Oct. 13, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noopener">Google AI for Developers — Gemini API pricing</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" target="_blank" rel="noopener">Google — Gemini 4 Argon first announcement (Sept. 30, 2026)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.engadget.com/2285023/google-gemini-4-argon-is-now-available-in-the-gemini-app-and-ai-mode-in-search/" target="_blank" rel="noopener">Engadget — Gemini 4 Argon now in the Gemini app and AI Mode (Oct. 13, 2026)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.searchenginejournal.com/google-gemini-4-argon-ai-mode/592806/" target="_blank" rel="noopener">Search Engine Journal — Google adds Gemini 4 Argon to AI Mode (Oct. 13, 2026)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://siliconangle.com/2026/10/13/gemini-4-argon-reaches-gemini-app-pro-and-ultra-subscribers-alongside-a-new-tasks-mode/" target="_blank" rel="noopener">SiliconANGLE — Argon reaches Pro and Ultra subscribers alongside tasks mode (Oct. 13, 2026)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Oct. 13: Gemini 4 Argon opens to paid API developers, enterprises, and Google AI Pro/Ultra subscribers; free tier excluded</li>
<li>API: $2/$10 per 1M input/output tokens through Nov. 30, then $4/$20; batch at half price, implicit caching only</li>
<li>1M unified token limit; model ID <code>gemini-4-argon</code></li>
<li>Benchmark wins are mostly Google's own numbers; independent checks are still thin</li>
<li>Evaluate before the discount ends, but budget production at list price</li>
</ul>
</div>
