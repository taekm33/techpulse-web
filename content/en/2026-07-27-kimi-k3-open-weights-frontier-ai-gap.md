---
title: "Moonshot AI Drops Kimi K3 Open Weights: The World's Largest Open-Weight Model Is Now Free to Download"
summary: "Moonshot AI released the full weights of Kimi K3 on July 27 — a 2.8-trillion-parameter model that beats closed frontiers on coding benchmarks. With the world's largest open-weight model now free to download, the AI pricing ceiling just cracked."
category: "ai-news"
date: "2026-07-27"
readingTime: 5
tags: ["Kimi K3", "open-source AI", "Moonshot AI", "Chinese AI", "LLM"]
---

<div class="article-tldr">
Moonshot AI released the full weights of Kimi K3 on July 27, 2026 — a 2.8-trillion-parameter Mixture-of-Experts model and the largest open-weight AI system ever made freely downloadable. Competing head-to-head with top closed models on coding and agentic benchmarks, K3 signals that the performance gap between open and closed AI has narrowed to single-digit percentage points. Anyone with sufficient infrastructure can now self-host a frontier-class model without paying OpenAI, Anthropic, or Google.
</div>

The day the AI frontier became something you download arrived on July 27, 2026. Moonshot AI, a Beijing-based startup, released the full model weights for Kimi K3 on Hugging Face — making the 2.8-trillion-parameter model available for anyone to run, fine-tune, and deploy commercially. For an industry built around API access fees, this is a structural event, not just a product launch.

## What Kimi K3 Is

Kimi K3 uses a Mixture-of-Experts (MoE) architecture. Of its 896 experts, only 16 are activated per token — meaning roughly 50 billion parameters do the actual work in any given inference pass. This design keeps computational costs manageable despite the headline-grabbing total parameter count.

<div class="article-stats">
<strong>Total parameters</strong> 2.8 trillion (largest open-weight model ever)<br/>
<strong>Active parameters per token</strong> ~50 billion (16 experts activated)<br/>
<strong>Context window</strong> 1 million tokens<br/>
<strong>Program Bench score</strong> 77.8 — #1 across all tested models<br/>
<strong>Arena Frontend Code leaderboard</strong> 1,679 pts — #1, ahead of Claude Fable 5 (1,631)<br/>
<strong>Download size</strong> ~594 GB (native MXFP4 safetensors); ~1.4 TB with runtime overhead
</div>

Moonshot introduced two architectural innovations: **Kimi Delta Attention** and **Attention Residuals**, which together deliver up to 6.3× faster decoding in million-token contexts. Native multimodal support is built in, and the model targets long-horizon coding, complex knowledge work, and deep reasoning — the exact workloads where enterprises pay the most per token.

## Benchmark Reality Check

Moonshot's honesty is refreshing. The company openly acknowledges that K3 trails Claude Fable 5 and GPT-5.6 Sol on the Artificial Analysis Intelligence Index overall. But the aggregate score obscures where K3 genuinely dominates.

| Benchmark | Kimi K3 | Claude Fable 5 | GPT-5.6 Sol |
|---|---|---|---|
| AI Intelligence Index | 57 (4th) | 1st | 2nd |
| Program Bench | **77.8 (1st)** | — | — |
| Terminal Bench 2.1 | 2nd | — | 1st |
| BrowseComp | **1st** | — | — |
| Arena Frontend Code | **1,679 pts (1st)** | 1,631 | 1,618 |

For developers, the jobs-to-be-done ranking matters more than the headline aggregate. If your workload is code generation, agentic web research, or frontend development, K3 is already the best model available — and it's free to self-host.

<div class="article-callout info">
<strong>Open weights vs. open source</strong><br/>
Moonshot is releasing trained model parameters, not training code, data, or the full reproduction pipeline. The expected license is a Modified MIT License, permitting commercial deployment, fine-tuning, and redistribution. For most practical purposes this is sufficient openness. Researchers who want to fully reproduce K3's training will find limits — but developers who want to deploy it won't.
</div>

## The Self-Hosting Reality

Kimi K3 is not a model you spin up on a laptop. The MXFP4 safetensors release weighs roughly 594 GB; add runtime overhead and KV cache and you're looking at approximately 1.4 TB of storage before the first token is generated. That rules out hobbyist rigs and most small startups.

But it does not rule out cloud providers, well-funded AI teams, or enterprises already running GPU clusters. For them, the calculus shifts: instead of paying per token to Anthropic or OpenAI, they pay for hardware, power, and engineering — and keep the margin. Together AI and Modal confirmed day-zero hosted access for developers who want to experiment without managing their own infrastructure.

<div class="article-callout tip">
<strong>Fastest path to try K3 today</strong><br/>
If you don't have your own GPU cluster, head to Together AI or Modal — both confirmed hosted access from the moment weights dropped. You get frontier-level coding performance at cloud API pricing, no hardware management required. For teams building agentic workflows or heavy code-generation pipelines, this is the immediate low-friction evaluation path.
</div>

## Geopolitical Ripples

K3's release is not purely a technical story. The US export control strategy on advanced AI chips was designed to limit China's ability to train and serve frontier models. Moonshot trained K3 under those constraints — and then made it free to download globally.

The fundamental asymmetry: you can restrict chip exports, but you cannot embargo a file once it circulates. The Trump administration has accused Moonshot of stealing American technology, and the White House is actively considering restricting access to Chinese open-weight models. China's Ministry of Commerce has been separately consulting companies about export controls on AI models and training data — a sign that Beijing also views model weights as strategic assets.

Meanwhile, the Nvidia and Microsoft-led **Open Secure AI Alliance**, announced the same morning, explicitly cited open models as defensive assets and argued that blanket restrictions would "weaken defensive capacity." The policy and industry battle lines are forming fast.

## What This Means for Western AI Labs

Moonshot closed a $2 billion funding round in May at a $20 billion valuation. Bloomberg reported the company is preparing for a Hong Kong IPO with a potential pre-IPO valuation as high as $50 billion. Annual recurring revenue has reached $300 million. Open-sourcing K3 generates developer goodwill at scale and cements Moonshot's relevance ahead of an IPO.

The real risk to OpenAI, Anthropic, and Google is not that K3 beats them on every benchmark — it doesn't, yet. The risk is that customers conclude K3 is *good enough*, and that self-hosting it makes their AI inference margin visible and controllable. Open weights don't make inference free. They make the margin transparent. That transparency is the threat.

Regulated enterprises won't casually route sensitive data through a Chinese-hosted API. Procurement inertia, compliance paperwork, and contract terms still favor established Western providers. But the assumption that only a handful of US labs can operate near the frontier has now been empirically disproved by a Beijing startup operating under chip restrictions.

<div class="article-keypoints">
<ul>
<li>Moonshot AI released Kimi K3 full weights on July 27 — 2.8 trillion parameters, the largest open-weight AI model ever, available for free download under a Modified MIT License.</li>
<li>K3 leads all models on Program Bench (77.8), BrowseComp, and Arena's Frontend Code leaderboard — ahead of Claude Fable 5 and GPT-5.6 Sol on those specific tasks.</li>
<li>Overall 4th on the Artificial Analysis Intelligence Index, behind Fable 5, GPT-5.6 Sol, and Claude Opus 4.8 — Moonshot acknowledges the gap honestly.</li>
<li>Self-hosting requires ~1.4 TB storage and datacenter-class hardware; Together AI and Modal offer day-zero hosted access for lower-friction evaluation.</li>
<li>US export controls cannot retroactively block distributed model weights — K3's release sharpens a policy debate that has no clean technical solution.</li>
</ul>
</div>

<div class="article-callout info">
<strong>Sources</strong><br/>
<a href="https://huggingface.co/moonshotai/Kimi-K3" target="_blank" rel="noopener">Hugging Face — Kimi K3 model page</a><br/>
<a href="https://glitchwire.com/news/kimi-k3-open-sources-today-the-frontier-gap-just-shrunk/" target="_blank" rel="noopener">Glitchwire — Kimi K3 Open-Sources Today. The Frontier Gap Just Shrunk.</a><br/>
<a href="https://startupfortune.com/moonshot-ai-releases-kimi-k3-open-weights-making-the-worlds-largest-open-weight-model-free-to-download/" target="_blank" rel="noopener">Startup Fortune — Moonshot AI releases Kimi K3 open weights</a><br/>
<a href="https://www.calcalistech.com/ctechnews/article/bk00cvunbzg" target="_blank" rel="noopener">Ctech — China just dropped a 2.8-trillion-parameter bomb on the AI race</a>
</div>
