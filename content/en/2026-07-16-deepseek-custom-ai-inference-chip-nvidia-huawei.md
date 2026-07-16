---
title: "DeepSeek Is Building Its Own AI Inference Chip to Cut Reliance on Nvidia and Huawei"
summary: "The Chinese AI startup DeepSeek has quietly begun designing a proprietary AI inference chip, aiming to reduce its dependence on Nvidia and Huawei processors amid tightening US export controls."
category: "ai-news"
date: "2026-07-16"
readingTime: 5
tags: ["DeepSeek", "AI chip", "semiconductor", "Nvidia", "inference"]
---

<div class="article-tldr">
Reuters reported on July 7, 2026 that DeepSeek is quietly developing its own AI inference chip to reduce dependence on Nvidia and Huawei processors. The effort began about a year ago and remains in an early stage, but the news sent Nvidia shares down roughly 1.6% in premarket trading — a signal that even an early-stage project can move markets when the broader "silicon independence" trend is already in full swing.
</div>

## Why DeepSeek Is Going In-House on Chips

DeepSeek burst onto the global AI scene with a series of high-performance, low-cost language models that challenged assumptions about how much compute is needed to reach frontier quality. The company has relied on Nvidia GPUs and Huawei Ascend processors for both training and serving those models. With US export restrictions on advanced semiconductors to China continuing to tighten, that dual dependency creates a structural supply risk — and DeepSeek appears to have decided the safest answer is to design its own silicon.

<div class="article-stats">

| Metric | Detail | Source |
|--------|--------|--------|
| Project start | ~1 year ago | 3 Reuters sources |
| Nvidia premarket drop on news | ~1.6% | July 7, 2026 |
| AI companies building own chips | OpenAI, Anthropic, DeepSeek | Multiple reports |

</div>

According to Reuters, DeepSeek has been hiring chip-design engineers through private channels and holding talks with design houses, foundries, and memory vendors. The company has not made any public announcement about the project, and the effort is described as early-stage — meaning volume production is likely years away.

## Inference, Not Training: A Strategic Choice

The new chip is aimed specifically at **inference** — the phase where a trained model generates responses for users — rather than training, which is the computationally intensive process of building a model from scratch.

<div class="article-callout info">
**Training vs. Inference:** Training a large language model is a one-time (or periodic) event that requires massive parallel compute. Inference is continuous: every user query triggers it. At scale, inference costs can account for 70–90% of total AI operating expenses, making it the dominant cost center for any production AI service.
</div>

Targeting inference makes strategic sense for DeepSeek. The company's models are already trained; the ongoing cost pressure comes from serving millions of queries. A custom inference chip co-designed with DeepSeek's own model architectures could simultaneously cut per-query costs and reduce supply-chain exposure — two goals that a general-purpose GPU from a foreign vendor cannot fully address.

## Part of a Broader Industry Wave

DeepSeek is not alone. The move is part of a sweeping trend of AI companies building proprietary silicon to reduce dependence on Nvidia's dominant H-series GPUs.

- **OpenAI** recently unveiled *Jalapeno*, its first custom inference chip co-developed with Broadcom.
- **Anthropic** has been reported to be weighing its own processor program.
- **Etched** launched with a $5 billion valuation and $1 billion in signed contracts for specialized AI inference chips, pointing to a market where dedicated inference capacity is already large enough to support a new cohort of hardware companies.

<div class="article-callout tip">
**What this means for developers:** Even if you're not a hyperscaler, the proliferation of inference-focused chips from startups like Etched — and cloud providers building on them — means lower inference costs and more competitive pricing are coming. Watch for new inference-as-a-service offerings optimized for specific model families in the next 12–18 months.
</div>

## Near-Term Impact on Nvidia Is Limited

Analysts note that DeepSeek's project poses no immediate threat to Nvidia's revenue. Early-stage chip efforts commonly take three to five years to reach commercial production, and they frequently encounter setbacks along the way. Nvidia's data-center GPU business continues to operate with massive order backlogs.

However, the directional signal matters: every major AI lab that moves toward custom silicon erodes the long-term assumption of permanent Nvidia dependency. The stock market's quick 1.6% response reflects that investors are tracking the trend, not just the timeline.

<div class="article-keypoints">

**Key Takeaways**

- DeepSeek has been quietly developing a custom AI inference chip for about a year, per Reuters and three sources familiar with the effort.
- The chip targets inference, not training — addressing the largest ongoing operational cost for a production AI service.
- US semiconductor export restrictions are the structural driver pushing Chinese AI firms toward in-house silicon.
- OpenAI, Anthropic, and hardware startups like Etched are all pursuing similar strategies, making this a broad industry shift rather than an isolated move.
- The project is early-stage; Nvidia faces no immediate revenue risk, but the long-term competitive landscape is evolving.

</div>

## Looking Ahead

If DeepSeek's chip effort advances to production, it will mark a meaningful milestone in the US–China semiconductor rivalry: a Chinese AI lab achieving meaningful independence from both Western and domestic chip suppliers. More immediately, it is likely to accelerate hiring in chip-design talent across China's AI sector and prompt other Chinese labs to announce or accelerate their own silicon programs. The details to watch: any public partner announcements, foundry agreements (particularly with SMIC or TSMC's non-restricted nodes), and whether DeepSeek begins publishing inference benchmarks on its own hardware.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://techstartups.com/2026/07/07/deepseek-is-building-its-own-ai-chip-to-cut-reliance-on-nvidia-and-huawei/" target="_blank" rel="noopener">Tech Startups — DeepSeek is building its own AI chip to cut reliance on Nvidia and Huawei (Reuters)</a><br/>
· <a href="https://wccftech.com/deepseek-building-its-own-inference-chip-to-break-free-from-nvidia-huawei/" target="_blank" rel="noopener">Wccftech — DeepSeek building its own inference chip to break free from Nvidia and Huawei</a><br/>
</div>
