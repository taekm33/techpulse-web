---
title: "Cohere Open-Sources North Mini Code: An Agentic Coding Model That Runs on a Single H100"
summary: "Cohere launched North Mini Code 1.0 on June 9, 2026 under the Apache 2.0 license — its first open-source agentic coding model. At 30B total / 3B active parameters (MoE), it runs on a single H100 at FP8, supports a 256K token context, and offers a self-hosted alternative to managed models like Claude Fable 5."
category: "dev-trend"
date: "2026-06-10"
readingTime: 5
tags: ["Cohere", "NorthMiniCode", "OpenSource", "AI Coding", "Agents"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Cohere released North Mini Code 1.0 on June 9, 2026 under Apache 2.0. The 30B total / 3B active MoE model runs on a single H100, supports 256K context with 64K max generation, and is purpose-built for agentic software engineering. It's the first model in Cohere's open North series — a direct self-hosted alternative to managed coding models like Claude Fable 5 ($50/M output tokens).
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/WUwTmJPK0GU" title="Testing Cohere North Mini Code Locally on H100" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## What Happened

On June 9, 2026, Cohere released **North Mini Code 1.0** — its first open-source model and the inaugural member of the North model family — under the Apache 2.0 license. The weights are freely available on Hugging Face for anyone to download, run, fine-tune, and deploy, including for commercial purposes.

Cohere co-founder Nick Frosst framed the release in explicitly ideological terms: "Now more than ever I think this tech needs to be built in public so that those using it are in control. Small, open source, transparent and sovereign, vs large, expensive, proprietary and hegemonic."

<div class="article-stats">
<strong>Key Numbers</strong>
<ul>
  <li>⚙️ <strong>Model size:</strong> 30B total parameters, 3B active (MoE: 128 experts, 8 active per token)</li>
  <li>📏 <strong>Context:</strong> 256K total context window, 64K max generation length</li>
  <li>🖥️ <strong>Minimum hardware:</strong> 1× H100 at FP8 precision (also runs via MLX on Mac Studio ~20GB RAM)</li>
  <li>📜 <strong>License:</strong> Apache 2.0 (free to use, modify, and commercialize)</li>
  <li>📈 <strong>Coding benchmark:</strong> 33.4 on the Artificial Analysis Coding Index</li>
</ul>
</div>

## The Strategic Context

The current agentic coding landscape forces a tradeoff: managed models (Claude Fable 5, GitHub Copilot, Cursor) offer the best quality but require sending code to external servers and paying per token. Claude Fable 5 charges $50 per million output tokens. For high-volume production pipelines, that compounds fast.

North Mini Code positions itself at the opposite end: you own the hardware, you own the inference, your code never leaves the building. The Apache 2.0 license means there are no legal restrictions on how you deploy or modify it.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Runs on a Mac Studio Too</strong><br>Nick Frosst demoed North Mini Code running locally on a Mac Studio via MLX at around 20GB of RAM. Because only 3B of the model's 30B parameters are active at inference time, the actual compute cost is closer to a 3B dense model. If you have an H100 you're ready to go. If not, a Mac M-series machine with sufficient RAM is enough for personal experimentation.</div>
</div>

## Architecture Deep Dive

North Mini Code uses a **Mixture-of-Experts (MoE)** architecture with 128 experts, 8 of which activate per token. This design means:

- **30B total parameters, but only 3B are active per forward pass** — inference cost matches a 3B dense model
- **Runs on a single H100** at FP8 precision (minimum hardware spec)
- **2.8× higher output throughput** than Mistral Devstral Small 2 (a comparable 24B dense model) in internal Cohere tests under identical hardware configurations

The model includes integrated tool-use capabilities and supports **interleaved thinking** — a technique that Cohere says improves performance on multi-step agentic tasks by letting the model reason between tool calls.

| Capability | Description |
|-----------|-------------|
| Sub-agent orchestration | Delegates and coordinates complex tasks to sub-agents |
| System architecture mapping | Understands full codebase structure across files |
| Code review | Multi-file review and improvement suggestions |
| Terminal tasks | Shell commands, package scripts, CLI tooling |
| OpenCode compatibility | Works out of the box with OpenCode and most coding agents |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>One Tradeoff to Know: Output Token Verbosity</strong><br>Independent benchmarking by Artificial Analysis found North Mini Code generates roughly 3× as many output tokens as comparable models on the same tasks. In high-volume production pipelines, this verbosity compounds inference cost and latency in ways that benchmark rankings don't capture. Measure it against your actual workload before committing to it for production agentic pipelines.</div>
</div>

## Fable 5 vs North Mini Code: Choosing the Right Approach

| Factor | Claude Fable 5 | North Mini Code |
|--------|----------------|-----------------|
| Operation model | Managed cloud | Self-hosted (on-prem or cloud) |
| Cost structure | $50/M output tokens | Hardware cost only |
| Data sovereignty | Sent to cloud | Stays local |
| License | Proprietary | Apache 2.0 |
| Setup complexity | Zero (API key only) | H100 required + env setup |
| Performance tier | Frontier | Competitive small model |

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>Cohere launched North Mini Code 1.0 on June 9 under Apache 2.0 — first open-source agentic coding model from Cohere</li>
  <li>30B total / 3B active MoE architecture — single H100 at FP8, also runs on Mac Studio via MLX</li>
  <li>256K token context, 64K max generation — handles large codebases in a single pass</li>
  <li>Full data sovereignty: no external API calls, no per-token pricing after hardware is paid for</li>
  <li>Watch for output verbosity — 3× more tokens than comparable models per Artificial Analysis tests</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Resources &amp; Docs</strong><br>— <a href="https://github.com/CohereLabs" target="_blank" rel="noopener noreferrer">CohereLabs GitHub — North Mini Code weights and official code</a><br>— <a href="https://github.com/cohere-ai/cohere-python" target="_blank" rel="noopener noreferrer">Cohere Python SDK (GitHub) — official API integration library</a><br>— <a href="https://pypi.org/project/cohere/" target="_blank" rel="noopener noreferrer">PyPI: cohere package — pip install cohere to use the Cohere API</a></div></div>
