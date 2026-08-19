---
title: "Anthropic Says Claude Designed Protein Binders Largely on Its Own — Hitting 14 of 15 Targets"
summary: "Anthropic published lab-validated results showing Claude designed de novo protein binders with minimal human intervention, succeeding on 14 of 15 targets. Success rates of 22-35% beat the typical 10-15% industry range, with Adaptyv Bio and Twist Bioscience independently synthesizing and testing the designs."
category: "ai-news"
date: "2026-08-20"
readingTime: 6
tags: ["Anthropic", "Claude", "protein design", "AI drug discovery", "biotech"]
---

<div class="article-tldr">
Anthropic says Claude, given a single human-written prompt, ran most of the workflow autonomously to design de novo protein binders and confirmed binding on 14 of 15 targets. Adaptyv Bio and Twist Bioscience synthesized and tested a total of 1,320 designs, with two independent labs confirming 354 as binders. Success rates ranged from 22% to 35% depending on setup, versus a typical industry range of 10-15%. Anthropic says it still blocks life-science tasks in its most capable model and is preparing an access program for scientists.
</div>

Anthropic has published research claiming its model Claude designed novel protein binders largely on its own, then passed independent wet-lab validation. A protein binder is a small protein engineered to latch onto a specific target protein — a starting point for drugs, diagnostics, and research tools. The notable part is that Claude took one detailed human-written prompt and then handled most of the pipeline itself, from researching targets to selecting binding sites and optimizing designs.

## What Claude did

Claude researched the targets, chose binding sites (epitopes), and orchestrated open-source structure- and sequence-design tools to generate candidates, optimizing them in silico. It then screened for solubility, expressibility, and novelty before producing ranked designs. The actual protein synthesis and binding assays were handled by external partners Adaptyv Bio and Twist Bioscience, which independently produced and tested the model-generated sequences.

<div class="article-stats">
<strong>Targets hit</strong> 14 of 15<br/>
<strong>Designs made & tested</strong> 1,320<br/>
<strong>Confirmed binders</strong> 354 (verified by two independent labs)<br/>
<strong>Success rate</strong> 22-35% (industry typical 10-15%)<br/>
<strong>Models used</strong> Claude Opus 4.8, Mythos Preview
</div>

## What the numbers really say

Beating the typical industry range by roughly two-to-one is striking, but the individual cases are more telling. Anthropic says Mythos Preview, in single-target mode, achieved a 40% hit rate against RBX1 — far above the 3.7% average among participants in Adaptyv's public competition — and its top-ranked design was a high-affinity binder that outperformed the contest's winning entry. Some of Claude's strongest designs bound several times more tightly than the best previously published de novo binder.

| Metric | Claude | Benchmark |
|---|---|---|
| Overall success rate | 22-35% | Industry typical 10-15% |
| RBX1 single-target hit rate | 40% (Mythos Preview) | Competition average 3.7% |
| Binding strength | Best designs several times stronger | Best published de novo binder |

<div class="article-callout tip">
The "14 of 15" headline is easy to misread. In practice the system produced many candidates per target and only a fraction bound. The metric that matters is not how many targets were covered but what share of generated designs actually stuck — the success rate.
</div>

## Validation and pushback

The weight of the result rests on independent verification. Claude did the designing, but synthesis and binding assays were run by two outside labs — not Anthropic — and binding was cross-confirmed by both. Skeptics remain, though. Martin Shkreli, the "Pharma Bro," dismissed the work as "not impressive." Deep-learning tools such as RFdiffusion have already shown strong performance in binder design, so opinions split on whether Claude's contribution is genuinely new science or a capable orchestration of existing tools.

## Guardrails and open questions

Anthropic is treating this as a double-edged capability. The company says it still blocks life-science tasks in its most capable model and is preparing a separate access program open only to vetted scientists. Protein design can accelerate drug discovery while also touching on biological misuse concerns, leaving "who gets access, and how far" as a question as important as the technology itself.

<div class="article-keypoints">
<ul>
<li>Anthropic says Claude, from a single human prompt, autonomously designed de novo protein binders, confirming binding on 14 of 15 targets</li>
<li>Adaptyv Bio and Twist Bioscience synthesized and tested 1,320 designs; two independent labs confirmed 354 binders</li>
<li>Success rate of 22-35% beat the typical 10-15%; Mythos Preview hit 40% on RBX1 vs a 3.7% competition average</li>
<li>Skeptics including Martin Shkreli question how novel the contribution is versus existing deep-learning tools</li>
<li>Anthropic blocks life-science tasks in its strongest model and is preparing a scientist-only access program</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://www.anthropic.com/research/Claude-accelerates-protein-design" target="_blank" rel="noopener">Anthropic — How Claude is accelerating protein design and analytical chemistry (official)</a><br/>
<a href="https://www-cdn.anthropic.com/30bf50e22a01388bb29bf077ee3f244531594b7a.pdf" target="_blank" rel="noopener">Anthropic — Autonomous de novo protein binder design with Claude (research report PDF)</a><br/>
<a href="https://www.adaptyvbio.com/blog/anthropic-1" target="_blank" rel="noopener">Adaptyv Bio — Benchmarking Claude's protein designs in the wet lab (partner case study)</a><br/>
<a href="https://finance.biggo.com/news/098c484e-bac4-4d7e-a4e2-0ca0127b8d37" target="_blank" rel="noopener">BigGo Finance — Anthropic Says Claude Autonomously Designed Proteins, Hitting 14 of 15 Targets</a>
</div>
