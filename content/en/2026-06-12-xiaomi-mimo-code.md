---
title: "Xiaomi Open-Sources MiMo Code: The AI Coding Agent That Remembers"
summary: "Xiaomi released MiMo Code under the MIT license — a terminal-native coding agent with persistent cross-session memory and a self-evolution system. The company claims it outperforms Claude Code on 200-step long-horizon coding tasks."
category: "ai-news"
date: "2026-06-12"
readingTime: 5
tags: ["xiaomi", "mimo-code", "ai-coding-agent", "open-source", "terminal"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Xiaomi's MiMo team open-sourced <strong>MiMo Code v0.1.0</strong> under the MIT license on June 10, 2026. It is a terminal-native AI coding agent built on top of OpenCode with persistent cross-session memory, subagent orchestration, and a self-evolution system. Xiaomi claims it outperforms Claude Code on software engineering tasks involving 200 or more sequential steps.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/08X2cLpra9I" title="Xiaomi MiMo-Code: The Coding Agent That Remembers" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Memory Problem No One Fixed — Until Now

Every AI coding agent resets to zero when you close the terminal session. That context loss is the reason agents that work brilliantly on a single-session task collapse on week-long feature builds. Xiaomi's MiMo Code was built explicitly to solve this.

Released on June 10, 2026 as a fork of OpenCode, MiMo Code adds a **persistent memory system** that preserves project understanding across sessions and a **self-evolution (dream/distill) mechanism** that automatically reviews, condenses, and improves stored memory over time. The result is an agent that can carry a multi-session refactor without losing the thread.

<div class="article-stats">
<div class="article-stat"><span class="article-stat__value">5,700+</span><span class="article-stat__label">GitHub Stars in 2 days</span></div>
<div class="article-stat"><span class="article-stat__value">200+</span><span class="article-stat__label">Sequential task steps handled</span></div>
<div class="article-stat"><span class="article-stat__value">1M</span><span class="article-stat__label">Context tokens (MiMo Auto, free)</span></div>
</div>

## Architecture: Computation, Memory, Evolution

The official technical blog describes MiMo Code's design around three themes. **Computation**: a goal-driven autonomous loop runs on top of a main-loop state machine, with subagent orchestration for parallel sub-tasks. **Memory**: structured encoding persists project knowledge between sessions so the agent stays coherent across hundreds of steps and multiple logins. **Evolution**: the dream/distill mechanism periodically reviews and condenses stored context, pruning noise and reinforcing what matters — it learns from each session.

## Feature Comparison

| Feature | MiMo Code | Claude Code | GitHub Copilot |
|---------|-----------|-------------|----------------|
| Cross-session memory | ✅ Persistent | ❌ Resets | ❌ Resets |
| Open source | ✅ MIT | ❌ Proprietary | ❌ Proprietary |
| Built-in free model | ✅ MiMo Auto | ❌ | ❌ |
| Long-horizon (200+ steps) | ✅ Designed for it | Limited | Limited |
| Subagent orchestration | ✅ | ✅ | ❌ |
| Voice input | ✅ (login required) | ❌ | ❌ |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Install in One Line</strong><br>Run <code>curl -fsSL https://mimo.xiaomi.com/install | bash</code> or <code>npm install -g @mimo-ai/cli</code>. On first launch, the TUI guides model configuration. Existing Claude Code credentials can be imported in one step — no manual API key setup required.
</div>
</div>

## Model Flexibility: The Ecosystem Bet

MiMo Code is not locked to Xiaomi's models. It ships with **MiMo Auto** — a free-for-limited-time multimodal model based on MiMo-V2.5 with a 1 million token context window — but supports Xiaomi MiMo Platform OAuth, imported Claude Code config, or any OpenAI-compatible API endpoint. The memory system and agentic workflows are the differentiator. The model layer is pluggable.

**Compose mode** targets professional-grade delivery from idea to shippable product, framing it as "a professional development team for one person." Real-time streaming voice input via TenVAD and MiMo ASR is available for logged-in users.

With over 5,700 GitHub stars in two days, developers are paying attention. The benchmark claim — outperforming Claude Code on 200-step tasks — is notable, but the more durable differentiator may simply be that it remembers where you left off.

<div class="article-keypoints">
<ul>
<li>MIT-licensed, terminal-native open-source coding agent built as a fork of OpenCode</li>
<li>Persistent cross-session memory keeps project context alive across sessions and restarts</li>
<li>Self-evolution (dream/distill) automatically condenses and improves stored memory</li>
<li>Claims to outperform Claude Code on software engineering tasks with 200+ sequential steps</li>
<li>Ships with free MiMo Auto model (1M token context); supports any OpenAI-compatible API</li>
</ul>
</div>

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>
— <a href="https://github.com/XiaomiMiMo/MiMo-Code" target="_blank" rel="noopener noreferrer">MiMo Code Official GitHub Repository (MIT License, v0.1.0)</a><br>
— <a href="https://github.com/XiaomiMiMo/MiMo-Code/releases/tag/v0.1.0" target="_blank" rel="noopener noreferrer">v0.1.0 Release Notes and Download</a><br>
— <a href="https://raw.githubusercontent.com/XiaomiMiMo/MiMo-Code/main/README.md" target="_blank" rel="noopener noreferrer">README: Installation, Quick Start, and Configuration Guide</a>
</div>
</div>
