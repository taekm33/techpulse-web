---
title: "Meituan Open-Sources 'LongCat-2.0' — the 1.6T Stealth Model That Quietly Topped OpenRouter for Two Months"
summary: "China's Meituan has open-sourced LongCat-2.0, a 1.6-trillion-parameter MoE model, under an MIT license, claiming it was pretrained entirely on domestic AI chips without Nvidia hardware. The release also revealed it was the real identity behind 'Owl Alpha,' an anonymous model that had quietly ranked among OpenRouter's top models for two months. The actual model weights, however, are not yet available."
category: "ai-news"
date: "2026-07-05"
readingTime: 6
tags: ["Meituan", "LongCat-2.0", "open-source LLM", "China AI", "domestic chips", "MoE"]
---

<div class="article-tldr">
On June 30, Chinese tech giant Meituan open-sourced LongCat-2.0, a 1.6-trillion-parameter Mixture-of-Experts model, under an MIT license. The model natively supports a 1-million-token context window and, according to Meituan, was pretrained entirely on roughly 50,000 domestic Chinese AI accelerator chips without using any Nvidia GPUs. The release also confirmed LongCat-2.0 was the real identity behind "Owl Alpha," a stealth model that had anonymously ranked among the top models globally on OpenRouter for nearly two months. It reportedly edges out GPT-5.5 on the SWE-bench Pro benchmark — but the actual model weights have not been released yet.
</div>

Meituan, the Chinese delivery-platform giant with a growing AI research arm, unveiled its large language model LongCat-2.0 across GitHub, Hugging Face, and its own platform. The model uses a Mixture-of-Experts (MoE) architecture with 1.6 trillion total parameters, of which an average of roughly 48 billion are activated per inference call.

## The stealth model behind the curtain

The most notable part of the announcement isn't the model itself — it's what it turned out to be. A preview version had already been running anonymously on OpenRouter and Meituan's own longcat.ai under the name "Owl Alpha" for close to two months. During that stretch, Owl Alpha reportedly held a spot in the global top three by call volume on OpenRouter, and reportedly ranked first on Hermes Agent, second on Claude Code integrations, and third on OpenClaw in monthly usage rankings among agent frameworks. Meituan's official unveiling confirmed that this anonymous top performer was LongCat-2.0 all along.

<div class="article-stats">
<strong>Release date</strong> June 30, 2026<br/>
<strong>Total parameters</strong> 1.6 trillion (MoE, ~48B activated on average)<br/>
<strong>Context window</strong> Native 1 million tokens<br/>
<strong>License</strong> MIT (fully open-source)<br/>
<strong>Training infrastructure</strong> ~50,000 domestic AI accelerator chips (ASICs), no Nvidia GPUs claimed
</div>

## Pretrained entirely on domestic chips — but unverified

According to Meituan, LongCat-2.0 was pretrained from scratch on a supercluster of roughly 50,000 domestic Chinese AI accelerator chips, without any Nvidia hardware in the loop. That's a step beyond what earlier Chinese flagship models have claimed. DeepSeek's V4-pro, for instance, reportedly leaned on domestic chips for inference but still relied on foreign silicon for the far more compute-intensive pretraining phase. It's worth flagging, though, that this infrastructure claim comes entirely from Meituan itself — no independent third party has verified it yet.

## Benchmarks — a narrow edge over GPT-5.5

Meituan's self-reported benchmark results show LongCat-2.0 posting competitive numbers on coding-agent evaluations.

| Benchmark | LongCat-2.0 | Comparison |
|---|---|---|
| SWE-bench Pro | 59.5 | GPT-5.5: 58.6 |
| Terminal-Bench 2.1 | 70.8 | — |
| SWE-bench Multilingual | 77.3 | — |
| FORTE (enterprise workflow simulator) | 73.2 | — |

<div class="article-callout tip">
Beating GPT-5.5 on SWE-bench Pro is a notable claim, but it's Meituan's own self-reported number. Frontier-model benchmark comparisons can swing significantly depending on evaluation setup, so it's safer to treat these figures as provisional until independent labs reproduce them.
</div>

## What's still missing: the actual weights

As of publication, both the GitHub and Hugging Face repositories for LongCat-2.0 display a "Model weights coming soon — stay tuned!" message instead of downloadable weights. In other words, the license and technical documentation are out, but developers can't actually download and run the model yet.

<div class="article-callout info">
An MIT license is one of the most permissive open-source licenses available, allowing unrestricted commercial use. Announcing that license for a 1.6-trillion-parameter model is itself unusual — but exactly when and in what form (quantization, file sizes, etc.) the weights will actually ship remains unconfirmed. Real-world usability will need to be reassessed once the weights are out.
</div>

## Why it matters

LongCat-2.0 is generating attention on two fronts at once: its open-source license and its claimed use of fully domestic training infrastructure. Both claims still need scrutiny — the chip-sourcing claim requires independent verification, and the open-source promise won't mean much until weights actually ship. What's already verifiable is the model's real-world track record: two months anonymously holding a top spot on OpenRouter is a usage signal that predates today's announcement. Whether LongCat-2.0 lives up to the hype will likely hinge on what happens after the weights drop and independent benchmarks come in.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.longcatai.org/models/longcat-2" target="_blank" rel="noopener">LongCat-2.0 official model page (longcatai.org)</a><br/>
· <a href="https://www.scmp.com/tech/tech-trends/article/3358854/china-debuts-biggest-ai-model-trained-local-chips-meituan-releases-longcat-20" target="_blank" rel="noopener">South China Morning Post — China debuts biggest AI model trained on local chips (June 30, 2026)</a><br/>
· <a href="https://siliconangle.com/2026/06/30/chinas-meituan-open-sources-massive-longcat-2-0-ai-model-saying-trained-domestic-chips/" target="_blank" rel="noopener">SiliconANGLE — China's Meituan open-sources massive LongCat-2.0 AI model (June 30, 2026)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Meituan open-sourced the 1.6-trillion-parameter MoE model LongCat-2.0 under an MIT license on June 30</li>
<li>Native 1-million-token context window; claimed to be pretrained on ~50,000 domestic AI accelerator chips (unverified by third parties)</li>
<li>Confirmed as the real identity of "Owl Alpha," a stealth model that anonymously held a top-three OpenRouter ranking for two months</li>
<li>Self-reported SWE-bench Pro score of 59.5 narrowly beats GPT-5.5's 58.6</li>
<li>Actual model weights are not yet released — GitHub and Hugging Face pages still say "coming soon"</li>
<li>Unlike DeepSeek's V4-pro, Meituan claims domestic chips were used even for the compute-heavy pretraining stage — adding a new data point to China's AI chip self-sufficiency narrative</li>
</ul>
</div>
