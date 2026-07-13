---
title: "Meta's Custom AI Chip MTIA Enters Production in September — Trimming the 'Nvidia Bill'"
summary: "According to Reuters, citing an internal memo, Meta is on track to begin mass-producing the latest version of its MTIA (Meta Training and Inference Accelerator) AI chip in September. Broadcom handles the design, Taiwan's TSMC manufactures, with memory from Samsung, storage from SanDisk, and fiber optics from Sumitomo Electric. It's the latest chapter in Big Tech's custom-silicon race to cut its dependence on Nvidia and AMD GPUs."
category: "it-news"
date: "2026-07-14"
readingTime: 6
tags: ["Meta", "MTIA", "AI chip", "Broadcom", "TSMC", "semiconductors", "Nvidia"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Meta is set to begin <strong>mass-producing</strong> the latest version of its in-house <strong>MTIA</strong> AI chip <strong>in September</strong> (Reuters, citing an internal memo). Broadcom <strong>designs</strong> the chip, <strong>TSMC manufactures</strong> it, and the supply chain extends to memory (Samsung), storage (SanDisk), and fiber optics (Sumitomo Electric). At least one chip <strong>passed testing in about six weeks</strong>. The goal is clear — <strong>cutting spend on Nvidia and AMD GPUs</strong>. Meta plans to deploy <strong>7GW</strong> of compute this year and double that next year, with 2026 capital expenditure reaching <strong>$125–145 billion</strong>.
</div>

Meta is on track to begin mass-producing the latest version of its self-designed AI accelerator chip in September, Reuters reported on July 9, 2026, citing an internal memo. The chip is the newest generation of the <strong>MTIA (Meta Training and Inference Accelerator)</strong> program Meta has run since 2023, and it is central to the company's push to lower the cost of the GPUs it buys from Nvidia and AMD. Per the memo, at least one chip cleared its testing phase in roughly six weeks.

## Who Does What — Reshaping the Supply Chain

This chip isn't something Meta builds alone. Meta works with <strong>Broadcom</strong> on the chip design, but the actual <strong>manufacturing is handled by Taiwan's TSMC</strong>. On top of that, <strong>memory (RAM) comes from Samsung</strong>, <strong>storage from SanDisk</strong>, and <strong>fiber-optic equipment from Sumitomo Electric</strong>. In other words, behind a single AI chip sits a multinational semiconductor supply chain spanning the US, Taiwan, Korea, and Japan.

<div class="article-stats">
<strong>Production start</strong> September 2026 (planned)<br/>
<strong>Program</strong> MTIA (Meta Training and Inference Accelerator)<br/>
<strong>Design partner</strong> Broadcom · <strong>Manufacturing</strong> TSMC (Taiwan)<br/>
<strong>Component supply</strong> memory=Samsung · storage=SanDisk · optics=Sumitomo Electric<br/>
<strong>Testing</strong> at least one chip, ~6 weeks<br/>
<strong>Compute deployment</strong> 7GW this year · double next year<br/>
<strong>2026 capital expenditure</strong> $125–145 billion
</div>

## Why Build Its Own Chip — the 'Nvidia Bill' and Modular Design

The reason Meta keeps investing in custom silicon is simple. As AI training and inference demand explodes, the GPU bill it pays Nvidia and AMD has ballooned to a level that's hard to sustain. In March, Meta detailed <strong>four new chips</strong> developed under the MTIA program; some are already deployed or will be this year or next. The company says it designs these chips using a <strong>modular chiplet</strong> approach — precisely because AI workloads shift so fast that it needs flexibility for how requirements will have changed by the time chips reach production.

At the time, Meta wrote that "each MTIA generation builds on the last, using modular chiplets, incorporating the latest AI workload insights and hardware technologies, and deploying on a shorter cadence." The intended uses are <strong>training its ranking and recommendation models</strong>, broader AI workloads, and <strong>inference</strong> aimed at its applications.

<div class="article-callout tip">
An important caveat: custom chips don't "replace" GPUs — they complement them. According to Reuters, Meta expects to save on costs with MTIA while still spending plenty with Nvidia and AMD. Custom chips go first into areas with clear, repetitive workloads like recommendation systems, while frontier-scale training still leans on general-purpose GPUs. This is less "de-Nvidia" than "managing Nvidia dependence."
</div>

## The Compute Arms Race — Every Big Tech Firm Is Building Silicon

This isn't a Meta-only move. Trying to stem the flow of capital to Nvidia via in-house chips is an industry-wide trend. Last month OpenAI unveiled its first custom inference processor built with Broadcom, and Anthropic is reported to be discussing developing its own chips with Samsung. Amazon (Trainium) and Google (TPU) have designed their own AI training and inference chips for years. A wave of AI-chip startups has sprung up to meet skyrocketing demand.

Behind all of it sits Meta's enormous compute-expansion plan. Meta is pouring tens of billions into data center and power deals worldwide to train and deploy its <strong>Muse Spark</strong> series of AI models. The company plans to deploy <strong>7GW</strong> of compute this year and double that next year, with 2026 capital expenditure projected at <strong>$125–145 billion</strong>. Shaving even a little off that spending curve makes custom silicon a necessity, not a luxury.

<div class="article-callout info">
The core facts in this article (September production, six-week test pass, supply-chain makeup, 7GW deployment) rest on a Meta <strong>internal memo</strong> obtained by Reuters. Meta declined to comment. The specific timeline should therefore be read as an internal plan rather than an officially confirmed company announcement.
</div>

## What to Watch Next

Three things are worth watching. First, whether September production stays on schedule and how much it lowers Meta's GPU procurement share from Q4 onward. Second, Broadcom's rise as an "anti-Nvidia design house" as it designs custom chips for Meta and OpenAI at the same time. Third, whether custom chips can expand beyond recommendation and inference into frontier model training. The moment that boundary is crossed will mark the real start of any "de-Nvidia" shift.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://techcrunch.com/2026/07/09/metas-new-ai-chips-will-begin-production-in-september/" target="_blank" rel="noopener">TechCrunch — Meta's new AI chips will begin production in September (citing Reuters, 7/9)</a><br/>
· <a href="https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/" target="_blank" rel="noopener">Meta AI Blog — Scaling MTIA: AI chips for billions (the four new chips, official)</a><br/>
· <a href="https://ai.meta.com/blog/meta-training-inference-accelerator-AI-MTIA/" target="_blank" rel="noopener">Meta AI Blog — Introducing the MTIA program (2023, official)</a><br/>
· <a href="https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/" target="_blank" rel="noopener">Meta AI Blog — Introducing Muse Spark (compute-demand context, official)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Meta will begin mass-producing its latest in-house MTIA AI chip in September 2026 (Reuters, citing an internal memo)</li>
<li>Design=Broadcom, manufacturing=TSMC / memory=Samsung, storage=SanDisk, optics=Sumitomo Electric</li>
<li>Goal = cut spend on Nvidia/AMD GPUs (complement, not replace) · modular chiplet design</li>
<li>Uses = ranking/recommendation model training, broad AI workloads, app inference / making its own chips since 2023</li>
<li>Context = 7GW compute deployment this year, doubling next; 2026 capex $125–145B — the latest chapter of Big Tech's custom-silicon race</li>
</ul>
</div>
