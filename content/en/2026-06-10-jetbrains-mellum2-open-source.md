---
title: "JetBrains Open-Sources Mellum2: A Fast 12B MoE Model for Software Engineering"
summary: "JetBrains released Mellum2 on June 1, 2026 — a 12B Mixture-of-Experts model with only 2.5B active parameters per token, delivering 2× faster inference than comparable dense models. Released under Apache 2.0, it targets routing, RAG, sub-agents, and private on-premises deployment."
category: "dev-trend"
date: "2026-06-10"
readingTime: 5
tags: ["JetBrains", "open-source", "coding-model", "MoE", "software-engineering"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> JetBrains open-sourced Mellum2 on June 1, 2026 — a 12B MoE language model with 2.5B active parameters per token, designed for the infrastructure layer of AI software engineering systems. It delivers 2× faster inference than similarly sized dense models, supports 128K context, and is fully Apache 2.0. Three checkpoints (Base, Instruct, Thinking) are available on Hugging Face.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/yUW8cBjL0LU" title="JetBrains Mellum2 is FAST — but Ollama Can't Run It (Yet)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">12B</span><span class="article-stats__label">Total parameters</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2.5B</span><span class="article-stats__label">Active parameters per token</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2×+</span><span class="article-stats__label">Faster inference vs dense peers</span></div>
  <div class="article-stats__item"><span class="article-stats__value">128K</span><span class="article-stats__label">Context window</span></div>
</div>

## What Is Mellum2?

**Mellum2** is an open-weight 12B-parameter Mixture-of-Experts language model released by JetBrains on June 1, 2026. The company behind PyCharm and IntelliJ originally launched Mellum in late 2024 as a compact, proprietary code-completion model for its own IDEs. Mellum2 is a full generational upgrade: built from scratch (not a fine-tune), covering both natural language and code, and open from day one under Apache 2.0.

The core premise of Mellum2 is efficient inference for production software engineering workflows. With 64 experts and only 8 activated per token, the model delivers intelligence at the level of a 12B dense model while computing at the cost of a 2.5B dense model — resulting in more than 2× faster inference compared to similarly sized open models.

## Architecture Highlights

Mellum2 was pre-trained on approximately 10.6 trillion tokens through a three-phase curriculum that progressively shifts the data mix from diverse web content toward code and mathematics (code ratio: 23% → 42% → 59%).

Key architectural decisions, each validated by ablation with inference efficiency as a constraint:

- **Grouped-Query Attention (GQA)** with 4 KV heads — reduces memory footprint during inference
- **Sliding Window Attention** on 3 of every 4 layers — efficient long-context processing without full attention overhead
- **Multi-Token Prediction (MTP)** head — serves as both an auxiliary pretraining objective and a built-in draft model for speculative decoding
- **Layer-selective YaRN** — extends context to 128K tokens
- **Muon optimizer + FP8 hybrid precision** — training efficiency at scale

Two post-training variants ship alongside the base: an **Instruct** model for direct task completion and a **Thinking** model that emits an explicit reasoning trace before its final answer (trained with RL on verifiable rewards).

## What Is It For?

Mellum2 is not a replacement for frontier coding models. It targets the **infrastructure layer** of agentic AI systems — the high-volume, latency-sensitive calls that don't need a GPT-5.4-class model but still need to be fast, accurate, and self-hosted.

Modern AI development pipelines involve far more than a single model call. Routing decisions, retrieval augmentation, summarization, planning steps, validation checks, and tool invocations all happen at scale. Many are latency-sensitive. Mellum2 is built for this tier.

| Use Case | What Mellum2 Does |
|----------|-------------------|
| Routing | Classify requests to the right agent or tool |
| RAG | Retrieve, read, and summarize documents |
| Sub-agents | Execution layer in multi-agent pipelines |
| Code generation | Autocompletion, editing, refactoring |
| Summarization | Long thread or document condensation |
| Function calling | Tool use in agentic workflows |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Running Mellum2 locally:</strong> Ollama support requires a custom llama.cpp build (the Mellum architecture PR is not yet merged). Use vLLM for the easiest path:<br>
<code>vllm serve JetBrains/Mellum-2-12B-instruct --enable-auto-tool-choice --tool-call-parser hermes --port 8000</code><br>
Then connect an MCP CLI or Hermes Agent to the localhost endpoint for file system tool use or full agentic workflows.
</div>
</div>

## Why It Matters: Closing the Gap Claude Code Can't

JetBrains' blog describes Mellum2's positioning clearly: it goes "where Claude Code can't." Managed coding tools like Claude Code, GitHub Copilot, and Cursor all require third-party API calls. For teams with strict data residency requirements — healthcare systems, financial institutions, defense contractors — that's a blocker. Mellum2 runs entirely on infrastructure you control.

Beyond privacy, Mellum2's Apache 2.0 license means organizations can fine-tune the model on their own codebases and redeploy without royalties or usage restrictions. The full technical report (arXiv 2605.31268) publishes the complete architecture rationale, data pipeline details, and training recipe for reproducibility.

For developers who don't need the biggest model but do need something fast, private, and customizable at the routing/RAG/sub-agent layer, Mellum2 fills a gap that until now required expensive proprietary APIs or underperforming smaller open models.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body"><strong>Benchmarks:</strong> Mellum2 is competitive with open-weight baselines in the 4B–14B range across code generation, math, reasoning, tool use, and knowledge benchmarks — while running at the per-token compute cost of a 2.5B dense model. The JetBrains team used inference efficiency on commodity GPUs as an explicit design constraint throughout development.
</div>
</div>

<div class="article-keypoints">
<strong>Key Points</strong>
<ul>
<li>Mellum2: 12B MoE, only 2.5B active params per token — 2× faster inference than dense peers</li>
<li>64 experts, 8 active per token; GQA, Sliding Window Attention, MTP for speculative decoding</li>
<li>128K context window via layer-selective YaRN; 10.6T token three-phase pre-training</li>
<li>Three checkpoints: Base, Instruct, Thinking — all Apache 2.0 on Hugging Face</li>
<li>Targets routing, RAG, sub-agents, and private on-premises deployment where managed APIs can't go</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · How to Use</strong><br>— <a href="https://blog.jetbrains.com/ai/2026/06/mellum2-goes-open-source-a-fast-model-for-ai-workflows/" target="_blank" rel="noopener noreferrer">Mellum2 Open-Source Launch Post (JetBrains AI Blog)</a><br>— <a href="https://huggingface.co/collections/JetBrains/mellum-2" target="_blank" rel="noopener noreferrer">Mellum2 Models on Hugging Face</a><br>— <a href="https://arxiv.org/abs/2605.31268" target="_blank" rel="noopener noreferrer">Mellum2 Technical Report (arXiv)</a></div></div>
