---
title: "NVIDIA Launches Cosmos 3 — Open World Foundation Model for Physical AI"
summary: "At Computex 2026, NVIDIA unveiled Cosmos 3, the world's first fully open omnimodel combining vision reasoning, world generation, and action prediction in a single system — slashing physical AI training cycles from months to days."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["NVIDIA", "Cosmos 3", "Physical AI", "Robotics", "Autonomous Vehicles", "Open Source AI"]
---

<div class="article-tldr">
NVIDIA officially launched <strong>Cosmos 3</strong> at GTC Taipei (Computex 2026) on May 31, 2026. Built on a breakthrough Mixture-of-Transformers architecture, it is the world's first fully open omnimodel that natively handles text, images, video, ambient sound, and actions — all in a single system. Model weights are freely available on Hugging Face, and the launch is accompanied by six open-source synthetic datasets for robotics, autonomous driving, and more.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/q7Hj3J9SOXw" title="Introducing NVIDIA Cosmos 3: The Open Model That Thinks, Generates, and Acts" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is Cosmos 3?

Previous NVIDIA Cosmos models were purpose-built: Cosmos Predict for future prediction, Cosmos Transfer for domain transfer, Cosmos Reason for physical AI understanding, and Cosmos Policy for action generation. **Cosmos 3 unifies all of these capabilities into a single open omnimodel.**

The model accepts text, images, video, ambient sound, and actions as input — and can generate any combination of those modalities as output. A single model checkpoint now covers the full pipeline: visual reasoning → physically accurate synthetic video generation → action output.

NVIDIA's core pitch: physical AI systems should **think before they act**. Cosmos 3 is the infrastructure that makes that possible at scale, reducing training and evaluation cycles from months to days.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">64B</span>
<span class="stat-label">Cosmos 3 Super parameters — datacenter-grade physical reasoning</span>
</div>
<div class="stat-item">
<span class="stat-number">16B</span>
<span class="stat-label">Cosmos 3 Nano parameters — workstation and edge deployment</span>
</div>
<div class="stat-item">
<span class="stat-number">Months → Days</span>
<span class="stat-label">Reduction in physical AI training and evaluation cycle time</span>
</div>
</div>

## Two Models: Nano and Super

Cosmos 3 ships in two configurations:

| Model | Parameters | Primary Use Case | Target Hardware |
|-------|-----------|-----------------|-----------------|
| Cosmos 3 Nano | 16B | Real-time robotics inference, edge deployment | NVIDIA RTX PRO 6000 |
| Cosmos 3 Super | 64B | Large-scale synthetic data generation, advanced physical reasoning | NVIDIA Hopper / Blackwell |
| Cosmos 3 Edge | Coming soon | Real-time inference at the edge | Edge devices |

Nano is designed to run on workstation-class GPUs for real-time robotics applications. Super targets datacenter GPUs for high-fidelity synthetic data generation and the most demanding physical reasoning tasks.

## Mixture-of-Transformers Architecture

The technical breakthrough in Cosmos 3 is its **Mixture-of-Transformers (MoT)** architecture. This design subsumes multiple traditionally separate architectures — vision-language models (VLM), world models, world action models (WAM), and vision-language-action (VLA) models — into a single unified system.

This means that post-training Cosmos 3 on a specific domain transforms it into a world action model capable of perceiving its environment, reasoning about physics, generating plausible futures, and producing appropriate actions — all from a single checkpoint.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Getting Started</strong><br>Model weights for Cosmos 3 Nano and Super are available immediately on Hugging Face. Post-training scripts, example code, and six open-source SDG datasets are on GitHub at github.com/nvidia/cosmos. Developers can also try Cosmos 3 through NVIDIA NIM microservices — the Cosmos 3 Reasoner NIM is available now, with the Generator NIM following soon.</div>
</div>

## NVIDIA Cosmos Coalition

Alongside the model launch, NVIDIA announced the **Cosmos Coalition** — a collaboration between world model builders and AI developers. Founding members include Agile Robots, Black Forest Labs, Generalist, LTX, Runway, and Skild AI. The coalition is focused on advancing the next generation of open world models for physical AI applications.

## Open-Source Datasets

NVIDIA simultaneously released six synthetic data generation (SDG) datasets covering:
- Robotics manipulation
- Physics simulation
- Spatial reasoning
- Human motion
- Autonomous driving
- Warehouse environments

These datasets are designed for post-training Cosmos 3 and other physical AI models, and are available on Hugging Face alongside the model weights.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Availability</strong><br>— Cosmos 3 Nano &amp; Super: Available now on Hugging Face and GitHub<br>— Cosmos 3 Edge: Coming soon for real-time edge inference<br>— Cosmos 3 Reasoner NIM: Available now via NVIDIA NIM microservices<br>— Cosmos 3 Generator NIM: Coming soon<br>— Cloud deployment: Baseten, CoreWeave, Microsoft Azure, Nebius, Deep Infra, Classmethod</div>
</div>

## Why World Models Matter for Physical AI

Training robots and autonomous vehicles requires vast amounts of real-world data — which is expensive to collect and nearly impossible to gather for rare edge cases. Cosmos 3 solves this by generating **physically accurate synthetic video and action scenarios at scale**, letting teams train and evaluate models against conditions they couldn't easily reproduce in the real world.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Cosmos 3 is the world's first fully open omnimodel — handling text, image, video, sound, and action I/O in a single model</li>
<li>Mixture-of-Transformers architecture unifies VLM, world model, WAM, and VLA into one checkpoint</li>
<li>Available in two sizes: Nano (16B) for edge/workstation, Super (64B) for datacenter</li>
<li>NVIDIA Cosmos Coalition launched with Agile Robots, Runway, and other partners</li>
<li>Six open-source SDG datasets released alongside model weights on Hugging Face</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai" target="_blank" rel="noopener noreferrer">NVIDIA Newsroom — Official Cosmos 3 Press Release</a><br>— <a href="https://github.com/nvidia/cosmos" target="_blank" rel="noopener noreferrer">GitHub — NVIDIA Cosmos Open-Source Code &amp; Examples</a><br>— <a href="https://developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3/" target="_blank" rel="noopener noreferrer">NVIDIA Developer Blog — Technical Deep Dive</a><br>— <a href="https://blogs.nvidia.com/blog/cosmos-3-physical-ai-open-world-foundation-model/" target="_blank" rel="noopener noreferrer">NVIDIA Blog — "How Cosmos 3 Helps Physical AI Think Before It Acts"</a></div></div>
