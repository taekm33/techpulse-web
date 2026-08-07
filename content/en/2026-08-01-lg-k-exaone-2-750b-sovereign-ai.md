---
draft: true
title: "LG AI Research Releases K-EXAONE 2.0: Korea's Largest 750B AI Model Goes Open-Source Under Apache 2.0"
summary: "LG AI Research has open-sourced K-EXAONE 2.0, a 750-billion-parameter foundation model — Korea's largest — under the Apache 2.0 license on Hugging Face. The model beats or matches GLM-5.1, DeepSeek V4 Pro Max, and Qwen3.5 on long-context understanding, agentic tool use, and safety benchmarks."
category: "ai-news"
date: "2026-08-01"
readingTime: 5
tags: ["LG", "K-EXAONE", "SovereignAI", "OpenSource", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: On July 31, 2026, LG AI Research published <strong>K-EXAONE 2.0</strong> — a 750-billion-parameter AI foundation model — to Hugging Face under the permissive <strong>Apache 2.0 license</strong>, making it freely available for commercial use. Developed as the second deliverable of South Korea's government-backed Sovereign AI Foundation Model Project, it scores <strong>70.1 average across 24 benchmarks</strong> (up from 63.3 for the first-phase 236B model), outperforming GLM-5.1, DeepSeek V4 Pro Max, and Qwen3.5 on long-context understanding and AI safety, while matching them on instruction following.
</div>

## Korea's Own Frontier-Scale AI

South Korea's bid for AI sovereignty just got its biggest milestone yet. LG AI Research, the AI arm of LG Group, released K-EXAONE 2.0 on July 31, 2026 — a **750-billion-parameter** language model that the company describes as the largest AI foundation model independently developed in Korea to date. The scale is a more-than-threefold jump over the first-phase model (236B parameters).

What sets this release apart is not just size. Every stage of development — model architecture, data preparation, large-scale distributed training, and inference infrastructure — was completed in-house by the LG AI Research team without outsourcing to foreign partners or using licensed third-party frameworks. The model is also now open under the **Apache 2.0 license**, removing the commercial-use restrictions that previously applied to earlier EXAONE models.

## Benchmark Performance at a Glance

LG AI Research published results across 24 benchmarks in 9 categories, including the official evaluation criteria used by South Korea's Sovereign AI Foundation Model Project.

| Benchmark | K-EXAONE 2.0 | GLM-5.1 | Qwen3.5 | DeepSeek V4 Pro Max |
|-----------|-------------|---------|---------|---------------------|
| 24-benchmark average | **70.1** | — | — | — |
| OpenAI-MRCR (long context) | **94.4** | 71.5 | — | — |
| Ko-LongBench (long context) | **89.6** | 83.6 | — | — |
| Tau3-Bench Banking (agentic) | **14.2** | 11.5 | 13.4 | — |
| Safety avg. (KGC-Safety + ROK-Fortress) | **94.6** | 71.3 | 89.0 | 65.2 |

Across the three major long-context benchmarks, K-EXAONE 2.0 scores more than 10% higher than GLM-5.1 on average. On agentic tool use (Tau3-Bench Banking), it outscores both GLM-5.1 and Qwen3.5. Coding and agentic-coding benchmarks improved roughly **30%** over the first-phase model.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">750B</span>
<span class="stat-label">Parameters — Korea's largest AI foundation model</span>
</div>
<div class="stat-item">
<span class="stat-number">70.1</span>
<span class="stat-label">Average score across 24 benchmarks (vs. 63.3 for phase-1)</span>
</div>
<div class="stat-item">
<span class="stat-number">+30%</span>
<span class="stat-label">Improvement on coding & agentic-coding benchmarks</span>
</div>
<div class="stat-item">
<span class="stat-number">10 languages</span>
<span class="stat-label">Supported — added French, Italian, Portuguese, Polish</span>
</div>
</div>

## Safety and Multilingual Expansion

Safety was a deliberate design priority. On the combined KGC-Safety and ROK-Fortress benchmarks — which test compliance with Korean-specific and global AI safety standards as well as geopolitically sensitive scenarios — K-EXAONE 2.0 averaged **94.6**, well above GLM-5.1 (71.3), DeepSeek V4 Pro Max (65.2), and Qwen3.5 (89.0).

<div class="article-callout info">
<strong>New language support:</strong> K-EXAONE 2.0 now supports <strong>10 languages</strong>. The original six (Korean, English, Spanish, German, Japanese, and Vietnamese) have been joined by French, Italian, Portuguese, and Polish. LG AI Research says this makes K-EXAONE 2.0 the Korean-developed AI foundation model with the broadest multilingual coverage, strengthening its appeal for global sovereign-AI deployments beyond South Korea.
</div>

## The Multimodal Side: EXAONE 4.5

Alongside the flagship language model release, LG AI Research highlighted its vision-language model (VLM) **EXAONE 4.5**, introduced earlier this year. On an average across 13 evaluation benchmarks — covering general visual understanding and document understanding over complex multimodal content — EXAONE 4.5 outperformed GPT-5 mini, Claude Sonnet 4.5, and Qwen3-VL. The five document-understanding benchmarks included infographics and technical documents combining images and text, tasks that stress multimodal reasoning beyond simple captioning.

<div class="article-callout tip">
<strong>For developers:</strong> K-EXAONE 2.0 is available now on <strong>Hugging Face</strong> under the LGAI-EXAONE organization, licensed under Apache 2.0 for both research and commercial use at no cost. An official public evaluation platform for the Sovereign AI Foundation Model Project's second-round assessment is in final preparation. A service letting the general public interact with K-EXAONE 2.0 directly is also in development.
</div>

## What "Sovereign AI" Means — and Why It Matters

The term "sovereign AI" refers to a foundation model that a country or organization fully controls: the training data, the weights, the infrastructure, and the governance. Unlike API-only services from foreign providers, a sovereign model can be deployed on-premises, audited independently, and tuned to local regulatory and cultural requirements.

For South Korea, K-EXAONE 2.0 represents a statement of capability: that a domestic research team can independently train and evaluate a frontier-scale model competitive with the world's most capable open-weight systems. The commercial license change is also strategically significant — it means Korean enterprises, hospitals, government agencies, and startups can build products on top of K-EXAONE 2.0 without navigating restrictive licensing agreements.

LG AI Research co-president Woohyung Lim framed this release as a starting point rather than a destination: *"The current model is not the final destination but the starting point for fully unlocking the potential of frontier-scale AI models. We will continue advancing K-EXAONE through higher-quality data, continued post-training, reinforcement learning, and more sophisticated inference technologies."*

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>LG AI Research releases K-EXAONE 2.0 (750B parameters) on Hugging Face, July 31, 2026</li>
<li>Apache 2.0 license — free for commercial use, no restrictions</li>
<li>24-benchmark average score of 70.1, more than 10% above first-phase model (63.3)</li>
<li>Outperforms GLM-5.1, DeepSeek V4 Pro Max, and Qwen3.5 on long-context understanding and safety</li>
<li>Agentic coding benchmarks improved ~30%; instruction-following on par with global frontier models</li>
<li>EXAONE 4.5 VLM beats GPT-5 mini, Claude Sonnet 4.5, and Qwen3-VL on 13-benchmark average</li>
<li>10-language support added; domain-specific expert AI models planned for release next week</li>
</ul>
</div>

An open-source, Apache-licensed Korean frontier model that matches or beats the leading global alternatives on safety, long-context reasoning, and agentic capability is no longer a theoretical goal — it shipped this week. The next test is whether K-EXAONE 2.0 can earn adoption outside Korea and whether the domain-specific models landing next week close the gap further for real-world enterprise deployments.

<div class="article-callout info">
<strong>Sources</strong><br/>
· <a href="https://www.lgresearch.ai/news/view?seq=678" target="_blank" rel="noopener">LG AI Research — Official press release: K-EXAONE 2.0</a><br/>
· <a href="https://huggingface.co/LGAI-EXAONE" target="_blank" rel="noopener">Hugging Face — LGAI-EXAONE model page</a><br/>
</div>
