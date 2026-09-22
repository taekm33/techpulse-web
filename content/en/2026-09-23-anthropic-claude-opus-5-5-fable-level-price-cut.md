---
title: "Anthropic Launches Claude Opus 5.5: Fable-Level Performance at a 20% Lower Price"
summary: "On September 22, Anthropic released Claude Opus 5.5. It delivers performance on par with the higher-tier Fable 5.1 while cutting input and output token prices 20% below Opus 5, and costs about 40% less to run on typical workloads. It sharply outperforms Opus 5 on coding, computer-use, and knowledge-work benchmarks."
category: "ai-news"
date: "2026-09-23"
readingTime: 6
tags: ["Anthropic", "Claude", "Opus 5.5", "AI Model", "Coding AI"]
---

<div class="article-tldr">
Anthropic released its next model, Claude Opus 5.5, on September 22, 2026. The company says it matches the performance of its higher-tier Fable 5.1 on most work, and actually surpasses it on agentic coding, knowledge work, and computer use. At the same time, input and output token prices are 20% lower than Opus 5, and running costs drop roughly 40% on typical workloads. From day one it is available in the Claude apps and API, plus AWS, Google Cloud, Microsoft Azure, and GitHub Copilot.
</div>

Anthropic officially launched its new large language model, Claude Opus 5.5, on September 22. The company described it as "a major step up from Opus 5 with improvements in performance and safety." Two things stand out: top-tier capability at a lower price, and a clear jump in measured coding and agentic performance.

## Cheaper to run, stronger on tasks

Opus 5.5 is priced at $4 per million input tokens and $20 per million output tokens — each 20% below Opus 5's $5 and $25. Cache reads, which heavily shape cost in repeated calls, fall to $0.20 per million tokens, 60% cheaper than Opus 5's $0.50. Anthropic says that on typical workloads Opus 5.5 costs about 40% less to run than Opus 5, and generates output more than 30% faster.

<div class="article-stats">
<strong>Release</strong> September 22, 2026<br/>
<strong>Input / output price</strong> $4 / $20 per 1M tokens (20% below Opus 5)<br/>
<strong>Cache reads</strong> $0.20 per 1M tokens (60% cheaper)<br/>
<strong>Running cost</strong> ~40% lower on typical workloads<br/>
<strong>Output speed</strong> 30%+ faster than Opus 5
</div>

## Big gains on coding and agentic benchmarks

In benchmarks published by Anthropic, Opus 5.5 beat Opus 5 across coding, computer use, and knowledge work — with the largest gains on terminal and coding tests that mimic real development environments.

| Benchmark | Opus 5.5 | Opus 5 |
|---|---|---|
| Terminal-Bench 4.0 (terminal tasks) | 66.4% | 52.3% |
| CursorBench 4.0 (editor coding) | 57.8% | 46.6% |
| FrontierCode v1.1 (hard coding) | 54.4% | 48.0% |
| OSWorld 2.0 (computer use, partial) | 81.8% | 74.0% |
| GDPval-AA v2.1 (knowledge work, Elo) | 1846 | 1708 |

Anthropic claims Opus 5.5 matches or exceeds OpenAI's GPT-6 Astra on several benchmarks while costing just 20-40% as much. One early tester reportedly audited a 200,000-line codebase in under three hours — a task that took Opus 5 more than 20 hours — and another completed a 680,000-line code migration in less than a day.

<div class="article-callout tip">
With price cuts and lower cache costs stacking together, the savings are largest in agentic workflows that call the same context repeatedly, such as iterative code review and refactoring. Teams working on large codebases may want to re-run the numbers on any Opus 5-based pipeline.
</div>

## Safety and communication upgrades too

Anthropic emphasized safety alongside raw performance. The company says Opus 5.5 earned "the best scores of any model to date" on its automated behavioral audit, and its prompt-injection resistance tied the higher-tier Fable 5.1 on the Gray Swan benchmark. New safeguards cover cybersecurity, biology, and distillation protection.

The model's communication style was also revised: Opus 5.5 puts the most important information up front, uses less jargon, and better follows user-provided writing guidelines.

<div class="article-callout info">
Alongside the launch, Anthropic raised five-hour usage limits across Pro, Max, Team, and seat-based Enterprise plans, and is offering a one-time rate-limit reset usable between September 22 and October 22.
</div>

## Why it matters

Opus 5.5 blurs the old split between a pricier top model and a cheaper lower one, pushing top-tier capability into a lower price band. That strategy lines up with the frontier price war unfolding as rivals cut their own prices the same week. In a market where raw performance alone no longer locks in customers, this launch signals that price-performance is becoming the next battleground.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.anthropic.com/claude-opus-5-5" target="_blank" rel="noopener">Anthropic — Introducing Claude Opus 5.5 (official)</a><br/>
· <a href="https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot/" target="_blank" rel="noopener">GitHub Changelog — Claude Opus 5.5 now available in GitHub Copilot (9/22)</a><br/>
· <a href="https://www.macrumors.com/2026/09/22/anthropic-claude-opus-5-5/" target="_blank" rel="noopener">MacRumors — Anthropic Launches Claude Opus 5.5 (9/22)</a><br/>
· <a href="https://9to5mac.com/2026/09/22/anthropic-upgrades-claude-with-new-opus-5-5-model-details-here/" target="_blank" rel="noopener">9to5Mac — Anthropic upgrades Claude with new Opus 5.5 model (9/22)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic released Claude Opus 5.5 on September 22, claiming higher-tier Fable 5.1-level performance</li>
<li>Input/output prices down 20%, cache reads down 60%, running cost down ~40%, output 30%+ faster</li>
<li>Sharp gains over Opus 5 on coding and computer-use benchmarks (Terminal-Bench 4.0 66.4%, CursorBench 4.0 57.8%)</li>
<li>Claims parity with GPT-6 Astra on several benchmarks at 20-40% of the cost</li>
<li>Available day one across Claude apps, API, AWS, Google Cloud, Azure, and GitHub Copilot</li>
</ul>
</div>
