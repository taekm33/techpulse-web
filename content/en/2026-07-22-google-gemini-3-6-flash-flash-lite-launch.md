---
title: "Google Ships Gemini 3.6 Flash and 3.5 Flash-Lite — Cheaper and Faster, but Still No 'Pro'"
summary: "Google DeepMind released Gemini 3.6 Flash, 3.5 Flash-Lite, and the security-focused 3.5 Flash Cyber on July 21. The workhorse 3.6 Flash uses 17% fewer output tokens, costs less, and improves on coding and knowledge-work benchmarks. But the long-awaited flagship Gemini 3.5 Pro was absent again — as DeepMind teased that pre-training for Gemini 4 has begun."
category: "ai-news"
date: "2026-07-22"
readingTime: 6
tags: ["Google", "Gemini", "AI models", "AI pricing", "DeepMind"]
---

<div class="article-tldr">
On July 21, Google DeepMind released three new Gemini models at once: Gemini 3.6 Flash, Gemini 3.5 Flash-Lite, and the security-specialized 3.5 Flash Cyber. The flagship of the batch, 3.6 Flash, uses 17% fewer output tokens than the previous 3.5 Flash while costing less, and posts gains across coding, knowledge work, and computer-use benchmarks. Its knowledge cutoff also jumps from January 2025 to March 2026. Still missing, however, is the flagship Gemini 3.5 Pro that customers have awaited since May. DeepMind said 3.5 Pro is in partner testing — and that it has begun its "most ambitious" pre-training run yet, for Gemini 4.
</div>

Google DeepMind unveiled three new Gemini models on July 21, a "workhorse" lineup built for efficiency, latency, and reliability aimed at customers running AI agents at scale — squarely targeting coding and cost. Yet the most talked-about part of the launch was not what shipped, but what didn't: Google's top-tier flagship, Gemini 3.5 Pro, was a no-show once again.

## Gemini 3.6 Flash — 17% Fewer Tokens, Lower Price

The centerpiece is Gemini 3.6 Flash, the successor to the 3.5 Flash unveiled at I/O 2026 in May. Reflecting developer and customer feedback, Google says the model is "more token efficient across tasks." Per the Artificial Analysis Index, it consumes 17% fewer output tokens than 3.5 Flash and takes fewer reasoning steps and tool calls to complete multi-step workflows.

The price came down, too. Output dropped from $9 to $7.50 per million tokens, with input at $1.50 per million. Higher performance at a lower price is the familiar arc of the recently intensifying AI price war.

<div class="article-stats">
<strong>Announced</strong> July 21, 2026 · Google DeepMind<br/>
<strong>Models</strong> Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber<br/>
<strong>3.6 Flash pricing</strong> $1.50 input · $7.50 output (per 1M tokens; was $9 output)<br/>
<strong>Output tokens</strong> 17% fewer vs 3.5 Flash (Artificial Analysis Index)<br/>
<strong>Knowledge cutoff</strong> January 2025 → March 2026<br/>
<strong>Still missing</strong> Flagship Gemini 3.5 Pro (unchanged since February)
</div>

## Reading the Benchmarks

By Google's own figures, 3.6 Flash improves clearly on coding and research tasks, delivering "higher precision with fewer unwanted code edits and reduced execution loops."

| Area | Benchmark | 3.5 Flash | 3.6 Flash |
|---|---|---|---|
| Coding | DeepSWE | 37% | 49% |
| ML research | MLE Bench | 49.7% | 63.9% |
| Knowledge work | GDPval-AA | 1349 | 1421 |
| Computer use | OSWorld-Verified | 78.4% | 83% |

## Flash-Lite and Flash Cyber

Gemini 3.5 Flash-Lite is built for high-throughput, low-latency work such as agentic search and document processing. Google says it offers "significantly better quality" than March's 3.1 Flash-Lite, while pricing sits at $0.30 input and $2.50 output per million tokens — among the cheapest in its class. It sharply outpaces its predecessor on Terminal-Bench 2.1 (54% vs 31%) and long-context handling (GDM-MRCR v2, 72.2% vs 60.1%).

The third model, 3.5 Flash Cyber, is tuned to detect, validate, and patch code-security vulnerabilities at scale. Google's automated CodeMender tool uses agents built on it. Because of misuse concerns, it is available first only to governments and trusted partners as a limited-access pilot.

<div class="article-callout info">
Gemini 3.6 Flash and 3.5 Flash-Lite are available in the Gemini app starting on launch day, with Flash-Lite also coming to Search. Developers can access them through Google Antigravity, AI Studio, and Android Studio.
</div>

## So Why Is There Still No 'Pro'?

The real story sits in the gap. Google's top-tier flagship, Gemini Pro, has not been updated since February. In the meantime, OpenAI shipped GPT-5.5 and began rolling out its GPT-5.6 family, while Anthropic launched Claude Opus 4.8 and Sonnet 5 and widened access to Fable 5 — underscoring how fast rival labs have been shipping.

Last week, Bloomberg reported that Google was delaying 3.5 Pro after falling short of internal performance goals (see our July 19 report). On July 21, DeepMind product lead Logan Kilpatrick said 3.5 Pro is testing with partners and that the team hopes it will "land soon."

<div class="article-callout tip">
Front-loading efficient "Flash" models is effective for retaining customers who run agents at massive scale. But the longer the top-end Pro slot stays empty, the more it can weigh on Google in the race for frontier prestige.
</div>

## What It Means

With this lineup, Google banks the practical wins of cheaper, faster, more reliable production models. Lower prices and token savings translate directly into cost cuts for enterprises running agents in bulk. At the same time, DeepMind signaled where the next fight is headed, saying it has "already started" its most ambitious pre-training run for Gemini 4. The open question is when the Pro gap closes. If Google holds the base with value-tier models but fails to finish the flagship, it risks continuing to cede the highest-end coding and reasoning workloads to its rivals.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" target="_blank" rel="noopener">Google (The Keyword) — Official announcement: Gemini 3.6 Flash, 3.5 Flash-Lite, Flash Cyber</a><br/>
· <a href="https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/" target="_blank" rel="noopener">TechCrunch — Google releases three new Gemini models — but no 3.5 Pro (7/21)</a><br/>
· <a href="https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/" target="_blank" rel="noopener">9to5Google — Google launches Gemini 3.6 Flash and 3.5 Flash-Lite, teases Gemini 4 (7/21)</a><br/>
· <a href="https://www.bloomberg.com/news/articles/2026-07-16/google-gemini-launch-delayed-as-tech-falls-short-of-internal-goals" target="_blank" rel="noopener">Bloomberg — Gemini launch delayed as tech falls short of internal goals (7/16, background)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Google DeepMind released Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber on July 21</li>
<li>3.6 Flash: 17% fewer output tokens, output price cut from $9 to $7.50, cutoff now March 2026</li>
<li>Broad gains — coding (DeepSWE 49% vs 37%) and ML research (MLE Bench 63.9% vs 49.7%)</li>
<li>Flash Cyber targets vulnerability detection/patching, limited to governments and trusted partners</li>
<li>Flagship 3.5 Pro absent again — DeepMind says pre-training for Gemini 4 has begun</li>
</ul>
</div>
