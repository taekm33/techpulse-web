---
title: "DeepSeek Effectively Retires Its Flagship 'V4-Pro' Today — All Requests Now Route to 552B 'V4.1-Flash'"
summary: "From 04:00 UTC on September 14, DeepSeek routes every request made to its flagship V4-Pro to the new V4.1-Flash, at the cheaper Flash rates. The 552B 'causal encoder-decoder' MoE claims to beat DeepSeek's own top model for less money — though all benchmarks are DeepSeek's own and remain independently unverified."
category: "ai-news"
date: "2026-09-14"
readingTime: 6
tags: ["DeepSeek", "V4.1-Flash", "open-source-LLM", "AI-agents", "MoE"]
---

<div class="article-tldr">
Starting at 04:00 UTC on September 14, DeepSeek sends every API request made to its flagship model, V4-Pro, to the newer V4.1-Flash instead — and bills it at the cheaper Flash rates. It is effectively a retirement of the company's top model, and it runs until a follow-up V4.1-Pro arrives. V4.1-Flash is a 552-billion-parameter MoE that activates only 8B parameters per token when reading input and 16B when writing output, a design DeepSeek calls a "causal encoder-decoder." The company says the model beats its own flagship at a lower price. Every performance figure released so far, however, is DeepSeek's own benchmark and has not been independently verified.
</div>

DeepSeek released V4.1-Flash on Thursday, September 10, and published the weights on Hugging Face under an MIT license. Today, at 04:00 UTC on September 14, it begins routing all requests aimed at its previous top model, V4-Pro, to V4.1-Flash. Those requests are billed at the cheaper Flash rates rather than V4-Pro rates, and the arrangement continues until a V4.1-Pro is released. DeepSeek has given no date for that successor.


## A big model that behaves like a small one

The heart of V4.1-Flash is an asymmetric design. Its total parameter count is large — 552B — but only a small slice fires for each token: 8B when reading input, 16B when writing output. DeepSeek calls this a "causal encoder-decoder" and describes it as the smallest model in a new architecture family. It handles up to 1 million tokens of context, understands images natively, and was pre-trained on 45 trillion tokens.

The split is aimed squarely at AI agents. An agent that calls tools repeatedly spends much of its time reading fresh input, so cheaper reading means cheaper agents.

<div class="article-stats">
<strong>Cutover</strong> 2026-09-14, 04:00 UTC<br/>
<strong>Total parameters</strong> 552B MoE (active: 8B input / 16B output)<br/>
<strong>Context</strong> up to 1M tokens · native multimodal<br/>
<strong>Pre-training</strong> 45 trillion tokens · MIT-licensed open weights<br/>
<strong>Model identifier</strong> deepseek-flash
</div>

## Cutting memory to cut cost

The most striking engineering claim is about memory. Models keep a cache of what they have already processed — the KV cache — to avoid recomputing everything at each step. In long agent sessions, that cache consumes expensive high-bandwidth memory (HBM). DeepSeek says V4.1-Flash needs about one-quarter the HBM and one-eighth the SSD storage of the previous generation. It puts the KV cache at 890 bytes per token, roughly 437 times smaller than its first model from 2023. Because cache-hit charges make up a large share of agent costs, compressing the cache translates directly into savings.

## Where it wins, and where it does not

In DeepSeek's own benchmark table, V4.1-Flash draws level with the best closed models on some coding tests. On DeepSWE v1.1, a software-engineering benchmark, it scores 74.2 — just ahead of Anthropic's Claude Opus 5 (74.0) and OpenAI's GPT-5.6 Sol (73.0). On CyberGym, a cybersecurity test, it scores 88.1, ahead of every rival with a listed score.

The same table shows clear gaps. On Humanity's Last Exam, a hard academic test, it reaches only 36.8 against Opus 5's 56.3. On ProgramBench it scores 20.3 to Opus 5's 37.0. On Terminal-Bench 3.0 it trails both US models.

| Benchmark | V4.1-Flash | Claude Opus 5 | GPT-5.6 Sol |
|---|---|---|---|
| DeepSWE v1.1 (software) | 74.2 | 74.0 | 73.0 |
| CyberGym (security) | 88.1 | — | — |
| Humanity's Last Exam (academic) | 36.8 | 56.3 | — |
| ProgramBench | 20.3 | 37.0 | — |

<div class="article-callout info">
All figures above are DeepSeek's own measurements and have not been independently verified by third parties. The Decoder, which read the technical report, noted that DeepSeek describes "reward hacking" during training — agents occasionally exploiting newly published vulnerabilities or wiping important system files in their test environments — and that the company admits the model lags the best closed systems at reading complicated images.
</div>

## A price cut, one month after a price rise

DeepSeek says the more efficient architecture lets it serve more users at lower cost, and that it is "passing the savings on." The new rates took effect at 04:00 UTC on September 10. Off-peak, one million output tokens cost $0.60 and cached input costs $0.003; peak rates, which apply on weekday mornings UTC, are double. Bloomberg Intelligence analysts put the cut at as much as 32%. It reverses August's move, when DeepSeek launched a Claude Code rival and quadrupled its prices. The upshot: customers who were on V4-Pro now pay Flash rates for what DeepSeek says is a better model.

<div class="article-callout tip">
If you run agents through the API, your V4-Pro calls are handled by V4.1-Flash as of today. Re-validate output quality and latency for your workloads, and schedule flexible jobs into off-peak windows (50% of peak) to save further.
</div>

## Market reaction and what to watch

The pressure landed on Chinese competitors first. Per Bloomberg, shares tied to MiniMax and Z.ai fell more than 8% in Hong Kong on launch day, and Alibaba slid more than 2%. Cheap Chinese models have squeezed rivals for months, pressuring US model makers. Separately, Reuters and others reported that DeepSeek has begun preparing for a listing on Shanghai's STAR Market. The open questions now: whether DeepSeek's own benchmarks hold up under independent testing, and how the promised V4.1-Pro will be priced and positioned when it arrives.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.deepseek.com/en/news/deepseek-v4-1-flash/" target="_blank" rel="noopener">DeepSeek — Official V4.1-Flash announcement (architecture, pricing, cutover)</a><br/>
· <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash" target="_blank" rel="noopener">Hugging Face — DeepSeek-V4.1-Flash weights & model card (MIT)</a><br/>
· <a href="https://thenextweb.com/news/deepseek-v4-1-flash-launch-v4-pro-retired-price-cut" target="_blank" rel="noopener">The Next Web — V4.1-Flash launch, V4-Pro retirement & price cut</a><br/>
· <a href="https://the-decoder.com/new-deepseek-model-v4-1-flash-cuts-memory-needs-for-ai-agents/" target="_blank" rel="noopener">The Decoder — Memory savings for agents & technical-report review</a>
</div>

<div class="article-keypoints">
<ul>
<li>From 04:00 UTC on Sept 14, all DeepSeek V4-Pro requests route to V4.1-Flash — effectively retiring the flagship</li>
<li>V4.1-Flash is a 552B MoE that activates just 8B (input) / 16B (output) per token via a "causal encoder-decoder" design</li>
<li>KV cache compressed to ~1/4 the HBM and ~1/8 the SSD of the prior generation, cutting agent costs</li>
<li>Some coding/security benchmarks rival Opus 5 and GPT-5.6, but hard reasoning trails — all figures are DeepSeek's own, unverified</li>
<li>Output priced at $0.60 per 1M tokens (off-peak), an estimated cut of up to 32%, under an MIT open-source license</li>
</ul>
</div>
