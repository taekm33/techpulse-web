---
title: "AI Is Now Doing AI Research: Recursive's 'Eureka Machine' Sets SOTA on Three Benchmarks"
summary: "Recursive Superintelligence released the first results from its automated AI research system in June 2026. The system — which autonomously proposes ideas, writes code, runs experiments, and validates results — achieved state-of-the-art performance on NanoChat, NanoGPT Speedrun, and NVIDIA's SOL-ExecBench simultaneously."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["Recursive", "automated AI research", "self-improving AI", "GPU kernels", "NanoGPT"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — On June 11, 2026, Recursive Superintelligence published the first results from its automated AI research system. The system set new state-of-the-art scores on all three benchmarks it was applied to: NanoChat (BPB 0.9372→0.9109), NanoGPT Speedrun (79.7s→77.5s), and NVIDIA SOL-ExecBench (score 0.699→0.754). No human researchers designed any of the winning solutions — the AI did.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/PMCBt-4b0Nc" title="Recursive Superintelligence: Why Self-Improving AI is the Next Frontier" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Core Thesis: AI Is Code, and AI Can Code

Richard Socher, CEO and co-founder of Recursive Superintelligence, summarizes the company's thesis in a single sentence: **"AI is code, and AI can code."** When those two facts connect, the self-improvement loop closes.

The goal isn't a better chatbot or code completion tool. Recursive is building **Recursive Self-Improving Superintelligence (RSI)** — a system that automates the scientific method itself. The results published on June 11 represent v0.1 of that system, which Socher calls the "Eureka Machine": one program you point at a hard problem and get useful inventions out of.

## How the Automated Research Loop Works

The system automates the entire research cycle end-to-end:

1. **Ideation** — Autonomously generates hypotheses for improving a target objective
2. **Implementation** — Translates hypotheses into executable code
3. **Experimentation** — Runs code against real hardware to measure outcomes
4. **Validation** — Filters out reward hacks and variance before counting results as genuine improvements
5. **Next-step selection** — Uses experimental history to decide where to explore next

The system runs many research threads in parallel, preserves useful context from prior experiments, and merges promising branches. A key capability demonstrated in the GPU kernel benchmark: **optimizations discovered in one task (memory transfer strategies, blocking approaches, reduction techniques) are automatically reused across related tasks**.

## Three Benchmarks, Three New Records

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">0.9109</span>
<span class="article-stats__label">NanoChat BPB (was 0.9372 community best)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">77.5s</span>
<span class="article-stats__label">NanoGPT Speedrun training time (was 79.7s)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">0.754</span>
<span class="article-stats__label">SOL-ExecBench mean score (was 0.699)</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">18%</span>
<span class="article-stats__label">Reduction in gap to hardware limit on ExecBench</span>
</div>
</div>

| Benchmark | Task | Previous SOTA | Recursive | Improvement |
|-----------|------|---------------|-----------|-------------|
| NanoChat Autoresearch | Train small LM to lowest loss in 5-min budget | 0.9372 BPB | 0.9109 BPB | 1.3× faster to same loss |
| NanoGPT Speedrun | Fastest time to train GPT to 3.28 val loss on 8×H100 | 79.7s | 77.5s | 2.2s faster |
| SOL-ExecBench | Optimize 235 real-world GPU kernels | 0.699 SOL | 0.754 SOL | 18% gap reduction to limit |

The NanoGPT Speedrun context matters: this benchmark was started by Andrej Karpathy and has been continuously optimized by the community through 83 documented contributions over more than two years, compressing training time from roughly 45 minutes down to 79.7 seconds. Recursive's system squeezed out an additional 2.2 seconds on top of that — comparable to or larger than recent individual human contributions.

For SOL-ExecBench, NVIDIA defines SOL 0.5 as the baseline PyTorch implementation and SOL 1.0 as the theoretical hardware limit. Recursive's system ran on all 235 kernels simultaneously, achieving an overall SOL of 0.754 and claiming **#1 on NVIDIA's official leaderboard** in the overall category and four sub-categories.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Why These Findings Are Published Openly</strong><br>Recursive open-sourced the system's discoveries specifically to let the community verify that the solutions are "creative and benign" rather than trivial optimizations or dangerous approaches. The team emphasizes transparency as central to safe RSI development — every discovery can be inspected and re-run externally.</div>
</div>

## The Team and Capital Behind Recursive

The seven co-founders combine deep academic research with frontier lab operational experience. Co-founders include Alexey Dosovitskiy (lead author of the Vision Transformer, ViT), Yuandong Tian (Director of Research Scientists at Meta FAIR, co-author of ELF OpenGo), Jeff Clune (pioneer of continuous safety loops and "rainbow teaming"), and Tim Rocktäschel. Four members co-authored the Darwin Gödel Machine paper alongside Jeff Clune.

In May 2026, Recursive raised $650M at a **$4.65 billion valuation**, co-led by Google Ventures. A team of fewer than 30 people, less than two months after closing that round, delivered three externally verifiable SOTA results — a direct response to investor confidence.

<div class="article-callout info">
<div class="article-callout__icon">📌</div>
<div class="article-callout__body"><strong>What's Next</strong><br>Recursive's roadmap has two phases: first, build a system with the equivalent of "50,000 PhDs" focused on automating AI science itself; second, apply that system to humanity's hardest quantitative problems — drug discovery, battery chemistry, nuclear fusion physics. The team says they're already pointing this system at more complex real-world scientific research tasks.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Recursive published results from an AI system that autonomously runs the full research loop — ideation, coding, experimentation, validation</li>
<li>New state-of-the-art on all three benchmarks applied to: NanoChat, NanoGPT Speedrun, NVIDIA SOL-ExecBench</li>
<li>Beat a 2+ year community-optimized NanoGPT Speedrun record by an additional 2.2 seconds</li>
<li>Claimed #1 on NVIDIA's official GPU kernel leaderboard, overall and in 4 sub-categories</li>
<li>All discoveries open-sourced for community verification and safety inspection</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Further Reading</strong><br>— <a href="https://www.recursive.com/articles/first-steps-toward-automated-ai-research" target="_blank" rel="noopener noreferrer">Recursive Official Blog: First Steps Toward Automated AI Research</a><br>— <a href="https://research.nvidia.com/benchmarks/sol-execbench/leaderboard/collection/1/B200" target="_blank" rel="noopener noreferrer">NVIDIA SOL-ExecBench Official Leaderboard (B200)</a><br>— <a href="https://www.gv.com/news/recursive-superintelligence-self-improving-ai" target="_blank" rel="noopener noreferrer">Google Ventures: Why Self-Improving AI Is the Next Frontier</a></div></div>
