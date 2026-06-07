---
title: "Alibaba Qwen3.7-Plus: The Computer-Use AI Agent That Unifies Screens, Terminals, and Cloud Consoles"
summary: "Alibaba's Qwen3.7-Plus merges GUI navigation, CLI execution, coding, and cloud-console automation into a single hybrid agent. With ScreenSpot Pro 79.0 and Terminal-Bench 70.3, it formally enters the computer-use race against Anthropic, OpenAI, and Microsoft."
category: "ai-news"
date: "2026-06-07"
readingTime: 5
tags: ["Qwen3.7-Plus", "computer-use-AI", "Alibaba", "multimodal-agent", "AI-agents"]
---

<div class="article-tldr">
Alibaba's Tongyi Qianwen team launched <strong>Qwen3.7-Plus</strong> on June 6, 2026 — a multimodal interactive hybrid agent that reads screens, executes terminal commands, writes code, and operates cloud consoles inside a single agent loop. In a headline demo, the model ran continuously for 11 hours, made over 1,000 agent calls, and generated more than 10,000 lines of code to build a vocabulary app from scratch.
</div>

## Why Computer-Use AI Matters

Large language models used to stop at text generation. Computer-use AI takes the next step: perceiving live screen state and translating that perception into concrete actions — clicks, keystrokes, terminal commands, API calls. Anthropic pioneered the category in October 2024 with Claude 3.5 Sonnet; OpenAI followed with Operator, and Microsoft Research shipped Fara1.5 browser agents in May 2026.

Qwen3.7-Plus enters this space with a broader claim: unifying **visual perception, coding, browser control, and cloud-console operation** in one proprietary model rather than stitching together specialized tools.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-number">79.0</span>
    <span class="stat-label">ScreenSpot Pro score (screen-grounding benchmark)</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">70.3</span>
    <span class="stat-label">Terminal-Bench score (terminal-task benchmark)</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">10,000+</span>
    <span class="stat-label">Lines of code generated in 11-hour continuous agent run</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">$0.40 / M</span>
    <span class="stat-label">Input token price (output $2.40/M)</span>
  </div>
</div>

## Core Capabilities

### Screen Perception and GUI Control
Qwen3.7-Plus adds native vision input and screenshot perception that lets the model locate buttons, fields, and UI states with precision. The model translates that understanding into action sequences — click, type, scroll, navigate — executed through agent tool calls rather than simulated keystrokes.

### The macOS Stocks App Reconstruction
In the most-cited demo, Qwen3.7-Plus parsed the macOS Stocks app interface, generated SwiftUI code, connected a live market API, compiled the result, and automatically ran ten functional tests — all without human intervention. This end-to-end loop (perception → code → compile → test) illustrates the intended enterprise use case.

### Cloud Console Automation
Through the Qwen for Chrome extension, users can authorize the agent to operate cloud dashboards. In the demonstrated scenario, the agent selected a low-cost virtual server instance by navigating a cloud console UI autonomously.

<div class="article-callout tip">
**Developer note**: Qwen3.7-Plus supports the Anthropic API protocol and is compatible with Claude Code, the OpenClaw agent gateway, and Alibaba's Qwen Code. Teams running Anthropic-based pipelines can substitute or augment with Qwen3.7-Plus without rebuilding their agent stack.
</div>

## Competitive Landscape

| Model | Company | Primary Scope | Notable Trait |
|-------|---------|---------------|---------------|
| Claude Computer Use | Anthropic | Screen + mouse + keyboard | Category pioneer (Oct 2024) |
| Operator | OpenAI | Browser automation | ChatGPT integrated |
| Fara1.5 (4B/9B/27B) | Microsoft Research | Browser agents | Multi-size, lightweight |
| Qwen3.7-Plus | Alibaba | GUI + CLI + code + cloud | Unified hybrid model |

## Long-Running Agent Durability

A single-task demo and an eleven-hour continuous run represent fundamentally different engineering challenges. Long-horizon agents must handle error recovery, maintain coherent context across hundreds of tool calls, manage cascading dependencies, and degrade gracefully rather than silently hallucinating results. Qwen's vocabulary-app demo — 1,000+ agent calls, 10,000+ lines of code — is a deliberate signal that this model is designed for sustained agentic workflows, not just polished one-shot demos.

<div class="article-callout info">
**Pricing context**: Qwen3.7-Plus at $0.40/M input and $2.40/M output is priced roughly **6× cheaper** than Alibaba's language-only Qwen3.7-Max ($2.50/M input, $7.50/M output). Adding vision and agentic capabilities while cutting costs is a deliberate positioning move to drive adoption.
</div>

## Caveats Worth Noting

Alibaba's announced figures — benchmark scores, pricing, demo results — are attributed claims without an independent public specification sheet at launch. Long action chains in live environments compound small mistakes in ways that benchmarks rarely surface. Real-world enterprise adoption will depend on whether Alibaba can back these demos with production-grade reliability, observability tooling, and enterprise support infrastructure.

<div class="article-keypoints">

## Key Takeaways

- **Unified scope**: GUI, CLI, coding, and cloud console in one agent loop — broader than most competitors
- **Benchmarks**: ScreenSpot Pro 79.0 and Terminal-Bench 70.3 are competitive opening numbers
- **Pricing**: $0.40/M input positions it well below proprietary frontier models
- **Compatibility**: Anthropic API protocol support enables immediate drop-in use for Claude-based stacks
- **Durability demo**: 11-hour / 1,000+ call run provides evidence for long-horizon stability
- **Verification gap**: Third-party benchmark replication and independent spec confirmation still pending

</div>

## What This Means for the Market

The computer-use category spent most of 2025 focused on browser automation. Qwen3.7-Plus raises the floor by claiming native coverage of app interfaces, terminals, and cloud consoles in a single model. Its Anthropic API compatibility is strategically important — it lowers the switching cost for enterprise teams already invested in Claude-based tooling, making Qwen3.7-Plus a credible day-one candidate for hybrid or fallback deployments. Whether the unified scope holds under production load will determine how seriously enterprises adopt it by Q3 2026.
