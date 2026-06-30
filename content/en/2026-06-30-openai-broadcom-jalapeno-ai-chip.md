---
title: "OpenAI Unveils 'Jalapeño,' Its First Custom AI Chip — Teaming With Broadcom to Challenge NVIDIA in Inference"
summary: "OpenAI and Broadcom revealed Jalapeño, OpenAI's first custom-designed AI accelerator. Built from scratch for LLM inference and developed from design to tape-out in just nine months, it claims roughly 50% cost savings over typical AI GPUs — taking direct aim at NVIDIA's grip on the inference market."
category: "it-news"
date: "2026-06-30"
readingTime: 6
tags: ["OpenAI", "Broadcom", "AI chips", "Jalapeño", "NVIDIA"]
---

<div class="article-tldr">
On June 24, OpenAI and Broadcom unveiled Jalapeño, OpenAI's first in-house AI accelerator. Described as an "Intelligence Processor" purpose-built for LLM inference, it was designed from a blank slate using lessons drawn from the systems OpenAI runs every day — ChatGPT, Codex, and the API. It went from initial design to manufacturing tape-out in just nine months, an unusually fast ASIC cycle for high-performance silicon. Broadcom claims roughly 50% cost savings versus typical AI GPUs, putting OpenAI squarely into the inference market NVIDIA has effectively dominated.
</div>

OpenAI and Broadcom unveiled Jalapeño, OpenAI's first custom AI chip, on June 24. It is the first AI accelerator in a multi-generation compute platform the two companies are building together, architected around OpenAI's vision for the future of LLM inference.

## An 'Intelligence Processor' Built From Scratch for Inference

Jalapeño is not a general-purpose GPU but an accelerator **purpose-built for large language model (LLM) inference**. OpenAI says it designed the chip "from a blank slate," informed by the systems it operates daily across ChatGPT, Codex, the API, and future agentic products — while also accounting for current and future LLMs across the wider industry, not just its own workloads.

<div class="article-stats">
<strong>Unveiled</strong> June 24, 2026<br/>
<strong>Development partner</strong> Broadcom<br/>
<strong>Development time</strong> ~9 months, design to tape-out<br/>
<strong>Cost impact</strong> ~50% savings vs typical AI GPUs (per Broadcom)
</div>

The most striking detail is **development speed**: from initial design to tape-out in just nine months, which OpenAI and Broadcom believe is the fastest ASIC development cycle ever achieved in high-performance advanced semiconductors. The finished chip was handed to OpenAI CEO Sam Altman and President Greg Brockman by Broadcom President and CEO Hock Tan and President Charlie Kawwas.

## Why Build Your Own Chip — Vertical Integration Toward the 'Full Stack'

The core motivation is **cost and control**. According to Broadcom's Hock Tan, Jalapeño is showing cost savings of roughly 50% compared with typical AI GPUs. Unlike training, which happens once per model, inference runs every time a user makes a request — so at the scale OpenAI operates, inference cost directly shapes the economics of the business.

<div class="article-callout tip">
For any company designing AI infrastructure, this episode underscores that a dedicated-silicon strategy to structurally lower the cost-per-inference can matter as much as securing training GPUs for long-term competitiveness.
</div>

OpenAI plans to use the chip to bring gigawatt-scale data centers online with Microsoft and other partners beginning in 2026 — part of a "full stack" strategy in which it controls not just models and software but also the chips and data centers beneath them.

## Taking Aim at NVIDIA's Inference Stronghold

The announcement is also a clear move against **NVIDIA**. NVIDIA has effectively dominated AI accelerators for both training and inference, but Big Tech is increasingly turning to custom silicon to cut costs and reduce supply-chain dependence. With OpenAI now joining Google (TPU), Amazon (Trainium), and Meta in fielding its own inference chip, competition is set to intensify precisely in the inference segment where NVIDIA earns much of its profit.

<div class="article-callout info">
That said, custom chips will not replace NVIDIA overnight. Building out design, validation, mass production, and a software ecosystem takes time, and Jalapeño itself starts from OpenAI's own workload optimization. In the near term, a mixed approach — running NVIDIA alongside custom silicon — is the likely outcome.
</div>

## What It Means

Jalapeño's debut shows that AI competition has expanded beyond model performance into a **battle over the cost of inference infrastructure**. The compressed nine-month cycle demonstrates how quickly Big Tech and semiconductor partners can now turn out bespoke silicon. The key things to watch are real-world production and deployment results, and whether the claimed 50% savings hold up.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://openai.com/index/openai-broadcom-jalapeno-inference-chip/" target="_blank" rel="noopener">OpenAI — Jalapeño inference chip (official announcement)</a><br/>
· <a href="https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/" target="_blank" rel="noopener">TechCrunch — OpenAI unveils its first custom chip, built by Broadcom (June 24)</a><br/>
· <a href="https://www.cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html" target="_blank" rel="noopener">CNBC — OpenAI and Broadcom reveal Jalapeño, first AI chip (June 24)</a>
</div>

<div class="article-keypoints">
<ul>
<li>OpenAI unveiled Jalapeño, its first custom AI chip co-developed with Broadcom, on June 24</li>
<li>An LLM-inference accelerator designed from scratch using ChatGPT/Codex/API operating experience</li>
<li>Design to tape-out in nine months (claimed fastest-ever ASIC cycle); ~50% cost savings vs typical GPUs</li>
<li>Gigawatt-scale data centers with Microsoft and partners from 2026 — a "full stack" vertical-integration play</li>
<li>Joins Google and Amazon in challenging NVIDIA's dominance of the inference market</li>
</ul>
</div>
