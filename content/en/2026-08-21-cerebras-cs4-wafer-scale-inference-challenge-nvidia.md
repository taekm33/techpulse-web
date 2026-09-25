---
title: "Cerebras Unveils CS-4: Three Wafer-Sized Chips, Up to 30x Faster Inference Than GPUs"
summary: "Cerebras built its CS-4 rack-scale system from three next-generation Wafer Scale Engine 3 Turbo processors, claiming 750 PFLOPS of AI compute and more than 4,400 tokens per second per user on GPT-OSS-120B — up to 30x faster than GPU systems, with up to 10x the throughput per watt of the CS-3. First shipments begin this quarter."
category: "ai-news"
date: "2026-08-21"
readingTime: 6
tags: ["Cerebras", "AI chips", "inference", "Nvidia", "wafer-scale"]
---

<div class="article-tldr">
Cerebras Systems (NASDAQ: CBRS) introduced the CS-4 on August 18. Instead of stitching together many small GPUs, the company builds processors the size of an entire silicon wafer — and the CS-4 packs three of its new WSE-3 Turbo wafers into a single rack. It delivers 750 PFLOPS of AI compute, 129.6 PB/s of memory bandwidth, and more than 4,400 tokens per second per user on GPT-OSS-120B inference, which Cerebras says is up to 30x faster than GPU-based systems. Throughput per watt is up to 10x that of the prior CS-3. The focus is inference speed, not training — and it takes direct aim at the inference market Nvidia GPUs have dominated. First shipments begin this quarter (Q3 2026).
</div>

Cerebras has announced the CS-4, which the company calls "the fastest AI accelerator in the industry." While most AI chips connect many small silicon dies, Cerebras has stuck to an unusual approach: using an entire wafer as a single processor. The CS-4 bundles three of its newest wafers into one rack-scale system and is the first product built on a new platform architecture called Nexus.

## What was announced

The CS-4 is built from three new WSE-3 Turbo (WSE-3T) processors. As a full system it delivers 750 PFLOPS of AI compute, 7.2 terabits per second of I/O, and 129.6 petabytes per second of memory bandwidth. Total compute-fabric bandwidth jumps to 160.5 PB/s, and wafer-to-wafer latency drops as low as two microseconds — enabling large clusters and support for models with more than 50 trillion parameters, the company says. The core message is that speed equals productivity. "Historically, fast inference meant using smaller and less capable models," said CEO Andrew Feldman. "Cerebras CS-4 delivers industry-leading speeds on the largest frontier models."

<div class="article-stats">
<strong>AI compute</strong> 750 PFLOPS (6x the CS-3)<br/>
<strong>Memory bandwidth</strong> 129.6 PB/s<br/>
<strong>Inference speed</strong> 4,400+ TPS per user (GPT-OSS-120B)<br/>
<strong>vs. GPUs</strong> up to 30x faster · up to 10x the throughput per watt of CS-3<br/>
<strong>Build</strong> three WSE-3 Turbo wafers · first Nexus platform product<br/>
<strong>First shipments</strong> Q3 2026
</div>

## What the numbers say

Cerebras' headline benchmark is on GPT-OSS-120B. Given identical prompts, the CS-4 produces more than 4,400 tokens per second per user, which the company says is up to 30x faster than GPU solutions. "Being 30 times faster doesn't just make a response feel fast," said CTO Sean Lie. "It gives an agentic system room for more than an order of magnitude as much reasoning, verification, or tool use in the same wall-clock time." Cerebras notes in a footnote that actual throughput varies by model architecture, context length, precision, and serving configuration. It is worth keeping in mind that the benchmark is a vendor measurement based on a single open-weight model.

| Metric | CS-3 (one wafer) | CS-4 (three wafers) |
|---|---|---|
| AI compute | 125 PFLOPS | 750 PFLOPS |
| Memory bandwidth | 21.6 PB/s | 129.6 PB/s |
| On-chip fabric bandwidth | 26.7 PB/s | 160.5 PB/s |
| System I/O bandwidth | 1.2 Tbps | 7.2 Tbps |
| I/O latency | 5 microseconds | 2 microseconds |

## Chip and system design

The CS-4's engine, the WSE-3 Turbo, remains "the largest AI processor ever built." It packs four trillion transistors and 900,000 AI-optimized cores across 46,225 square millimeters of silicon, with 44GB of SRAM integrated directly on the wafer. Versus the prior generation, per-wafer AI compute doubles to 250 PFLOPS and memory bandwidth doubles to 43.2 PB/s. The system design also changed. A rear-mounted "Backpack" module decouples compute from the power supplies, cutting deployment time from days to hours and reducing component count by 50%, the company says. Cerebras also moved power conversion roughly 100x closer to the processor — from about 50mm on conventional GPU boards to around 0.5mm — nearly eliminating board-level power loss.

<div class="article-callout tip">
The "30x" headline refers to inference, not training — and specifically to tokens per second per user (TPS/user). That is a different metric from total throughput or training performance, aimed at areas like coding agents and reasoning services where response latency directly shapes the product experience.
</div>

## Why it matters now

As AI spending shifts from training toward inference, the opening for alternative architectures in the inference market Nvidia has effectively dominated is widening. Cerebras' bet is to use a whole wafer instead of connecting many small chips, arguing that this reduces chip-to-chip communication bottlenecks and wins on speed. But figures like 30x and 10x are vendor benchmarks, not independent results; real-world performance across workloads and model sizes will be tested by outside parties after Q3 shipments. Cerebras counts OpenAI, G42, and AWS among its major customers, and how much the CS-4 cracks the inference competitive landscape is the key thing to watch.

<div class="article-keypoints">
<ul>
<li>Cerebras unveiled the CS-4 on Aug. 18 — a rack-scale system built from three new WSE-3 Turbo wafers, the first product on the Nexus platform</li>
<li>750 PFLOPS of AI compute, 129.6 PB/s memory bandwidth, wafer-to-wafer latency as low as 2μs, and claimed support for models over 50 trillion parameters</li>
<li>More than 4,400 TPS per user on GPT-OSS-120B — up to 30x faster than GPUs, with up to 10x the throughput per watt of the CS-3 (vendor benchmarks)</li>
<li>WSE-3 Turbo: four trillion transistors, 900,000 cores, 44GB SRAM; per-wafer compute and memory bandwidth both doubled</li>
<li>Redesigned system with a Backpack module and near-processor power conversion; first shipments in Q3 2026, taking direct aim at Nvidia in inference</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://investors.cerebras.ai/news-releases/news-release-details/cerebras-unveils-cs-4-30-times-faster-gpu-based-solutions" target="_blank" rel="noopener">Cerebras — Cerebras Unveils CS-4: Up to 30 Times Faster than GPU-based Solutions (official press release)</a><br/>
<a href="https://www.hpcwire.com/off-the-wire/cerebras-introduces-cs-4-with-750-pflops-of-ai-compute/" target="_blank" rel="noopener">HPCwire — Cerebras Introduces CS-4 with 750 PFLOPS of AI Compute</a><br/>
<a href="https://www.techzine.eu/news/infrastructure/143699/cerebras-launches-cs-4-for-faster-ai-inference/" target="_blank" rel="noopener">Techzine — Cerebras launches CS-4 for faster AI inference</a><br/>
<a href="https://qz.com/cerebras-cs-4-server-system-ai-inference-081926" target="_blank" rel="noopener">Quartz — Cerebras CS-4 server system claims 30x faster AI inference</a>
</div>
