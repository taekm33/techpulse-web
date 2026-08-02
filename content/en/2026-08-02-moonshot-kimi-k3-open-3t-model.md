---
title: "Moonshot AI's Kimi K3: The World's First Open 3-Trillion-Parameter Model Takes On Proprietary Giants"
summary: "Chinese AI startup Moonshot AI has released Kimi K3, a 2.8-trillion-parameter open-weight model that marks the first entry into the 3T-class for any publicly available model. It challenges GPT-5.6 Sol and Claude Fable 5 head-to-head across coding, reasoning, and agentic benchmarks while undercutting them significantly on price."
category: "ai-news"
date: "2026-08-02"
readingTime: 5
tags: ["Kimi K3", "open-source AI", "MoE", "Moonshot AI", "AI benchmarks"]
---

<div class="article-tldr">
Moonshot AI has released <strong>Kimi K3</strong>, a 2.8-trillion-parameter open-weight model and the world's first to enter the 3-trillion-parameter class. Built on a sparse Mixture-of-Experts (MoE) architecture that activates only 104 billion parameters per token, it features a 1-million-token context window and native vision capabilities. On key coding and agentic benchmarks it meets or surpasses GPT-5.6 Sol and Claude Fable 5 — at a fraction of the price.
</div>

For the past two years, the multi-trillion-parameter frontier has been walled off behind proprietary walls. OpenAI, Anthropic, and Google could train at a scale that open-source labs simply couldn't match. Moonshot AI's Kimi K3, released July 27, 2026, has changed that calculus. At 2.8 trillion total parameters, it is the first openly available model to breach the 3-trillion boundary, and it arrives with benchmark scores that force a direct comparison with the best closed models on the market.

## Architecture: Scaling Without the Compute Bill

Kimi K3's headline number is 2.8 trillion parameters, but the model only activates **104 billion of them per token** through its Stable LatentMoE framework, which selects 16 out of 896 specialized expert sub-networks for each input token. This sparse approach means inference costs are far lower than the raw parameter count implies.

Three architectural innovations underpin the design:

- **Kimi Delta Attention (KDA):** A hybrid linear attention mechanism that efficiently handles the model's 1-million-token context window without quadratic attention overhead.
- **Attention Residuals (AttnRes):** Selectively retrieves representations across depth rather than accumulating them uniformly, improving multi-step reasoning without additional parameters.
- **Stable LatentMoE with Quantile Balancing:** Derives expert allocation directly from router-score quantiles, eliminating the unstable hyperparameter tuning common in earlier MoE designs.

Together, Moonshot says these advances deliver **2.5× the scaling efficiency of Kimi K2** — more capability extracted from the same compute budget.

<div class="article-stats">
<strong>Total parameters</strong> 2.8 trillion (104B active per token)<br/>
<strong>Expert pool</strong> 896 experts, 16 activated per token<br/>
<strong>Context window</strong> 1,048,576 tokens (~1 million)<br/>
<strong>Vision encoder</strong> MoonViT-V2 (401M parameters)<br/>
<strong>API input pricing</strong> $0.30/M (cache hit) · $3.00/M (cache miss)<br/>
<strong>API output pricing</strong> $15.00/M tokens
</div>

## Benchmark Results: Where It Leads and Where It Trails

| Benchmark | Kimi K3 | GPT-5.6 Sol | Claude Fable 5 |
|---|---|---|---|
| GPQA Diamond | 93.5 | 94.1 | 92.6 |
| Terminal-Bench 2.1 | 88.3 | 88.8 | 88.0 |
| ProgramBench | **77.8** | 77.6 | 76.8 |
| SWE-Marathon | **42.0** | 39.0 | 35.0 |
| BrowseComp | **91.2** | 90.4 | 88.0 |
| MCPMark-Verified | **94.5** | 92.9 | 87.4 |
| FrontierSWE | **81.2** | 71.3 | 86.6 |

Kimi K3 leads on SWE-Marathon (real-world long-horizon engineering tasks), BrowseComp (complex web reasoning), and MCPMark (tool-call accuracy), which are three benchmarks that matter most for agentic deployments. It ties or narrowly trails on raw reasoning tasks like GPQA Diamond. Where it clearly lags is on creative tasks and complex multi-step mathematical reasoning — areas where Claude Fable 5 and GPT-5.6 Sol still hold a lead.

<div class="article-callout tip">
Kimi K3 always runs in thinking mode. You can tune cost and latency via the <code>reasoning_effort</code> parameter: <code>low</code> for fast batch jobs, <code>high</code> for most production tasks, and <code>max</code> (the default) for frontier-quality output. There's no way to disable reasoning entirely — factor that into latency budgets.
</div>

## Availability and Market Impact

Kimi K3 is available through four channels: **Kimi.com** (consumer), **Kimi Work** and **Kimi Code** (enterprise/developer products), the **Kimi API** (OpenAI-compatible), and via **Together AI** for API access outside China. Open weights are downloadable from GitHub under [MoonshotAI/Kimi-K3](https://github.com/MoonshotAI/Kimi-K3), allowing teams to self-host.

Demand at launch overwhelmed Moonshot's infrastructure: the company temporarily paused new API subscriptions within days of release. That level of market response is unusual even for well-funded proprietary releases, let alone an open-weight model.

The pricing is aggressive. At $0.30 per million cache-hit input tokens, Kimi K3 substantially undercuts leading closed models while offering comparable — and in some areas superior — output quality.

<div class="article-callout info">
<strong>Official resources</strong><br/>
<a href="https://www.kimi.com/blog/kimi-k3" target="_blank" rel="noopener">Moonshot AI Technical Blog — Kimi K3</a><br/>
<a href="https://github.com/MoonshotAI/Kimi-K3" target="_blank" rel="noopener">GitHub — MoonshotAI/Kimi-K3 (weights, architecture, benchmarks)</a><br/>
<a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart" target="_blank" rel="noopener">Kimi Developer Docs — K3 Quickstart</a>
</div>

## What This Means for the AI Landscape

Two shifts are worth watching. First, **the parameter ceiling for open models is no longer a ceiling**. For years, practitioners accepted that trillion-scale reasoning was reserved for API-gated proprietary services. Kimi K3 breaks that assumption and gives enterprises a credible self-hostable alternative for workloads demanding long-context reasoning and coding.

Second, **Chinese open-source AI has reached parity benchmarks**. Moonshot AI held the top spot for open-model scale in nine of the twelve months preceding this release. Kimi K3 is the clearest signal yet that the gap between Eastern and Western AI labs has narrowed to individual benchmark points rather than orders of magnitude.

For developers building agentic systems today, Kimi K3's performance on MCP tooling, terminal automation, and long-horizon coding — all areas increasingly critical to production agent pipelines — makes it one of the most practical open-weight options available at any price.

<div class="article-keypoints">
<ul>
<li>Kimi K3 is the first open-weight model at the 3-trillion-parameter class (2.8T total, 104B active per token via MoE).</li>
<li>Three architectural innovations — KDA, AttnRes, Stable LatentMoE — deliver 2.5× the scaling efficiency of its predecessor K2.</li>
<li>Outperforms GPT-5.6 Sol and Claude Fable 5 on SWE-Marathon, BrowseComp, and MCPMark; competitive across nearly all other benchmarks.</li>
<li>Available as open weights and via API at $0.30/M input tokens (cache hit); API subscriptions temporarily paused due to overwhelming demand at launch.</li>
</ul>
</div>
