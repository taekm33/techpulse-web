---
title: "Microsoft Launches MAI-Thinking-1: A Reasoning Model Built From Scratch That Rivals Frontier Giants"
summary: "Microsoft AI has unveiled MAI-Thinking-1, its first in-house reasoning model trained entirely on proprietary data without distillation from other labs. The 35B-active-parameter MoE model matches Claude Opus 4.6 on SWE-Bench Pro and achieves 97% on AIME 2025."
category: "ai-news"
date: "2026-06-09"
readingTime: 5
tags: ["Microsoft", "MAI-Thinking-1", "reasoning model", "AI", "LLM"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — At Microsoft Build 2026, Microsoft AI CEO Mustafa Suleyman unveiled a family of seven new MAI models. The flagship, MAI-Thinking-1, is a sparse MoE reasoning model with 35B active parameters that hits 97% on AIME 2025 and 53% on SWE-Bench Pro — matching Claude Opus 4.6 — while being trained entirely without distillation from other labs.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Is MAI-Thinking-1?

On June 2, 2026, Microsoft AI announced **MAI-Thinking-1** alongside six other new MAI models at Microsoft Build 2026. It is the company's first proprietary reasoning model — built entirely in-house without distilling knowledge from competing labs such as Anthropic or OpenAI.

The defining characteristic of MAI-Thinking-1 is its independence. Microsoft states that every training sample is "clean, traceable, and enterprise-grade." The model was optimized on Microsoft's own **Maia 200** chip and benchmarked directly against NVIDIA's GB-200, marking a milestone in the company's effort to build a self-sufficient AI hardware and software stack.

<div class="article-stats">
<strong>Key Stats</strong>
<ul>
  <li>⚙️ <strong>35B active parameters</strong> (~1T total, sparse MoE)</li>
  <li>📐 <strong>256K token context window</strong> (fits a 600-page document)</li>
  <li>🏆 <strong>AIME 2025: 97.0%</strong> · AIME 2026: 94.5%</li>
  <li>💻 <strong>SWE-Bench Pro: 53%</strong> (on par with Claude Opus 4.6)</li>
  <li>👥 <strong>Human preference</strong>: preferred over Sonnet 4.6 in blind side-by-side evals</li>
</ul>
</div>

## Architecture: Punching Above Its Weight Class

MAI-Thinking-1 uses a **Sparse Mixture-of-Experts (MoE)** architecture. While the total parameter count is approximately 1 trillion, only 35 billion are activated during inference. This design gives the model the reasoning capacity of a much larger dense model while keeping inference costs comparable to a medium-size deployment.

The 256K context window is large enough to load a full 600-page document in a single prompt — a significant practical advantage for enterprise document analysis workflows. The model also supports function calling and multi-layered instruction following, designed to fit naturally into agentic pipelines.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Developer Note</strong><br>MAI-Thinking-1 is compatible with the Chat Completions API and supports function calling. It is available in Private Preview on Microsoft Foundry today, with Public Preview on the MAI Playground coming soon. Enterprises can request early access through the Foundry interest form.</div>
</div>

## Benchmark Comparison

| Model | SWE-Bench Pro | AIME 2025 | Active Params | Context |
|-------|:---:|:---:|:---:|:---:|
| MAI-Thinking-1 | **53%** | **97.0%** | 35B | 256K |
| Claude Opus 4.6 | ~53% | — | Undisclosed | — |
| Claude Sonnet 4.6 | — | — | Undisclosed | — |

SWE-Bench Pro is widely considered the most rigorous real-world coding benchmark — it measures a model's ability to resolve actual GitHub issues end-to-end. Matching Claude Opus 4.6 on this task signals that Microsoft's independent training pipeline has reached frontier capability.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>The Full MAI Model Family (7 models)</strong><br>Announced at Build 2026: MAI-Thinking-1 (reasoning), MAI-Code-1-Flash (coding), MAI-Image-2.5 & 2.5-Flash (image generation), MAI-Voice-2 & 2-Flash (voice), MAI-Transcribe-1.5 (transcription). Microsoft frames these as the first concrete step toward its "Humanist Superintelligence" mission.</div>
</div>

## Why This Matters for Enterprises

Beyond raw benchmark numbers, MAI-Thinking-1 is designed specifically for enterprise production. Native integration with Azure's security, compliance, procurement, and governance workflows means large organizations can deploy it without rebuilding their existing operational infrastructure. The model's default response style is explicitly tuned for enterprise contexts — concise, professional, and multi-turn coherent.

The Maia 200 optimization angle is also strategically significant. By training and serving a frontier reasoning model on its own chip, Microsoft is reducing dependence on NVIDIA for the most expensive inference workloads and building toward a vertically integrated AI stack.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>MAI-Thinking-1 is Microsoft's first independent reasoning model — no distillation from other labs</li>
  <li>35B active parameters in a MoE design outperforms far larger dense models on cost and speed</li>
  <li>Matches Claude Opus 4.6 on SWE-Bench Pro (53%) and scores 97% on AIME 2025</li>
  <li>Optimized on Microsoft's own Maia 200 chip — a milestone in the company's AI hardware strategy</li>
  <li>Available now in Azure Foundry Private Preview; MAI Playground public preview coming soon</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Further Reading</strong><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 Official Announcement (Microsoft AI)</a><br>— <a href="https://microsoft.ai/models/mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 Model Page & Foundry Preview Sign-Up</a><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Full MAI Model Family Launch Blog</a></div></div>
