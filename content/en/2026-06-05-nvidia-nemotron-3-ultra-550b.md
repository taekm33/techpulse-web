---
title: "NVIDIA Nemotron 3 Ultra 550B: America's Best Open Model Still Trails China"
summary: "NVIDIA unveiled Nemotron 3 Ultra at Computex 2026 — the most intelligent US open-weights AI model at 550B parameters, but still 6 points behind China's Kimi K2.6 on the Artificial Analysis Intelligence Index."
category: "ai-news"
date: "2026-06-05"
readingTime: 5
tags: ["NVIDIA", "Nemotron", "open-weights", "LLM", "Computex2026"]
---

<div class="article-tldr">
<strong>TL;DR</strong>
<ul>
<li>NVIDIA launched Nemotron 3 Ultra (550B total / 55B active params) at Computex 2026, claiming the top spot among US open-weights AI models</li>
<li>Scores 48 on the Artificial Analysis Intelligence Index — ahead of all US competitors but behind China's Kimi K2.6 at 54</li>
<li>Key differentiator: 300+ tokens/second inference speed, 3–6× faster than comparable Chinese models in production</li>
</ul>
</div>

NVIDIA CEO Jensen Huang unveiled **Nemotron 3 Ultra** during his Computex 2026 keynote on June 1, completing the Nemotron 3 family that began with the Nano variant in December 2025. The model officially released on June 4, 2026, available on HuggingFace, OpenRouter, and NVIDIA NIM.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote with Jensen Huang Highlights (NVIDIA official)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Architecture: Hybrid Mamba-Transformer MoE

Nemotron 3 Ultra uses a novel hybrid **Mamba-2 / Transformer / Mixture-of-Experts** architecture. With 550 billion total parameters but only 55 billion active per token (90% sparsity), the model achieves intelligence comparable to much larger dense models while keeping inference costs closer to a 55B-class system. It supports up to **1 million tokens** of context, a meaningful advantage for long-running enterprise AI agents where competing Chinese models often max out at 256K.

<div class="article-stats">
<div class="stat-item">
<span class="stat-value">550B</span>
<span class="stat-label">Total Parameters</span>
</div>
<div class="stat-item">
<span class="stat-value">48 / 100</span>
<span class="stat-label">Intelligence Index Score</span>
</div>
<div class="stat-item">
<span class="stat-value">300+</span>
<span class="stat-label">Tokens/sec Inference Speed</span>
</div>
</div>

## Performance: US #1, But China Still Leads

On the Artificial Analysis Intelligence Index, Nemotron 3 Ultra scores **48**, making it the most intelligent open-weights model released by a US lab. It comfortably leads Google's Gemma 4 31B (39), Nemotron 3 Super (36), and OpenAI's gpt-oss-120b (33).

However, the China-US open-weights gap persists. Moonshot's Kimi K2.6 leads at **54**, followed by GLM-5.1 (51) and MiniMax-M2.7 (49). Nemotron 3 Ultra narrows the gap considerably compared to prior US models but does not close it.

<div class="article-callout tip">
<strong>Pro Tip:</strong> NVIDIA also offers an NVFP4 quantized version of Nemotron 3 Ultra for even higher inference throughput. On GB200 hardware with NVFP4, it achieves 5.9× the throughput of GLM-5.1 and 4.8× that of Kimi K2.6 — critical for cost-sensitive enterprise deployments.
</div>

## Speed: The Real Competitive Edge

Where Nemotron 3 Ultra clearly dominates is **inference speed**. On a pre-release DeepInfra endpoint, it served over 300 tokens per second — roughly 3–6× faster than comparable models from DeepSeek and Moonshot (typically 50–100 tokens/sec in production). For enterprise agentic workflows where latency directly impacts user experience and cost, this gap is decisive.

NVIDIA frames speed as the key selling point: even if intelligence benchmarks favor Chinese open models, Nemotron 3 Ultra is the fastest intelligent open model US developers can access commercially.

## Benchmark Comparison

| Benchmark | Nemotron 3 Ultra | Kimi K2.6 | GLM-5.1 | Qwen3.5 |
|---|---|---|---|---|
| Agent Productivity | 91% | 91% | 84% | 89% |
| Long-Horizon Planning | 33% | 29% | 40% | 30% |
| Coding | 54% | 67% | 64% | 53% |
| Instruction Following | 82% | 74% | 77% | 78% |
| Professional Work | 56% | 56% | 46% | 53% |
| Long Context (1M tokens) | 95% | N/A | N/A | 90% |

Nemotron wins on instruction following, professional tasks, and long-context handling. It trails on coding and long-horizon planning — areas where Kimi K2.6 and GLM-5.1 hold a clear edge.

<div class="article-callout info">
<strong>License Note:</strong> Nemotron 3 Ultra is released under the NVIDIA Open Model License, permitting commercial use. Unusually, NVIDIA also published training recipes and a substantial portion of the training data alongside the weights, going further than most US frontier model releases.
</div>

## What This Means

Nemotron 3 Ultra is a genuine milestone for US open-source AI. It narrows the gap with China's open-weights frontier and offers a commercially viable, blazing-fast alternative for enterprise teams who need to self-host. The remaining 6-point intelligence gap with Kimi K2.6 suggests the China-US open-weights race is far from over — but with Computex 2026 behind us, the next round of NVIDIA model releases may be just months away.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>First US open-weights model to reach an intelligence score of 48 on the Artificial Analysis Index</li>
<li>China's Kimi K2.6 still leads at 54 — the US-China open-weights intelligence gap remains real</li>
<li>Inference speed of 300+ tokens/sec is 3–6× faster than comparable Chinese models in production</li>
<li>Hybrid Mamba-2 / Transformer / MoE architecture with 1M token context at competitive cost</li>
<li>Commercially usable under NVIDIA Open Model License; training recipes and data also published</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://developer.nvidia.com/nemotron NVIDIA Nemotron developer page" target="_blank" rel="noopener"></a><br/>
· <a href="https://blogs.nvidia.com/" target="_blank" rel="noopener">NVIDIA Blog</a><br/>
· <a href="https://www.nvidia.com/en-us/ai-data-science/foundation-models/" target="_blank" rel="noopener">NVIDIA Foundation Models</a><br/>
</div>
