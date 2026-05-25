---
title: "Meta Llama 4: How the Scout and Maverick Models Are Reshaping Open-Source AI"
summary: "Meta's Llama 4 brings mixture-of-experts architecture to the open-source world, with Scout and Maverick variants targeting different deployment scales. Here's a technical analysis of what changed, benchmark performance, and what the open-source release means for developers and businesses."
category: "ai-news"
date: "2026-05-21"
readingTime: 11
tags: ["Meta", "Llama4", "OpenSourceAI", "MixtureOfExperts", "LLM"]
---

<div class="article-tldr">
<div class="article-tldr__label">TL;DR</div>
<p>Meta's Llama 4 family introduces mixture-of-experts (MoE) architecture to its open-weight lineup for the first time, splitting into three distinct tiers. Scout (17B active / 109B total, 16 experts) targets cost-efficient deployments with a 10 million token context window. Maverick (17B active / 400B total, 128 experts) delivers near-frontier reasoning that rivals GPT-4o and Claude Sonnet. Both are released under the Llama 4 Community License — permissive for most commercial use, but not truly open source. For developers and businesses, Llama 4 meaningfully changes the self-hosting calculus.</p>
</div>

## Why Llama 4 Is a Structural Shift, Not an Incremental Update

Every major Llama release since Llama 2 has been accompanied by a predictable cycle: Meta publishes weights, the community benchmarks them against the leading closed-source models, and the gap — once enormous — closes by a meaningful margin. Llama 4 follows that pattern, but with an important difference. This is the first time Meta has shipped a mixture-of-experts architecture in its open-weight lineup, catching up to a technique that has driven some of the most efficient frontier models of the past two years, including Mistral's Mixtral and, by all accounts, significant parts of GPT-4's design.

The strategic implications are significant. MoE allows Meta to offer models with frontier-level parameter counts — and the reasoning quality that goes with them — while keeping inference costs manageable through selective expert activation. A model that is technically 400 billion parameters but activates only 17 billion per forward pass is a very different infrastructure proposition than a 400B dense model. That trade-off is the central engineering insight behind Llama 4's two deployable variants: Scout and Maverick.

<div class="article-stats">
<div class="article-stat"><div class="article-stat__v">17B</div><div class="article-stat__k">Active parameters (both Scout and Maverick)</div></div>
<div class="article-stat"><div class="article-stat__v">10M</div><div class="article-stat__k">Token context window (Scout)</div></div>
<div class="article-stat"><div class="article-stat__v">128</div><div class="article-stat__k">Experts in Maverick's MoE architecture</div></div>
<div class="article-stat"><div class="article-stat__v">700M</div><div class="article-stat__k">MAU threshold for commercial license</div></div>
</div>

## Architecture Deep Dive: How Mixture-of-Experts Works in Llama 4

Before comparing Scout and Maverick, it helps to understand what MoE actually means in practice. A traditional dense transformer applies every parameter to every input token on every forward pass. In a mixture-of-experts model, the network is partitioned into multiple parallel "expert" feed-forward networks, with a learned routing mechanism — typically a small linear layer called the router — selecting which subset of experts processes each token.

In Llama 4's implementation, the router selects a fixed number of active experts per token (typically 1–2 out of the total pool). The experts that aren't selected for a given token contribute nothing to that forward pass, meaning their weights don't move data through the GPU's compute units. The result is that the effective compute per token scales with the number of active parameters, not the total parameter count. Inference cost and latency are therefore much closer to a 17B dense model than to a 109B or 400B one.

This efficiency is not free. All expert weights must still be loaded into memory, because any expert might be selected for any given token. The GPU VRAM (or system RAM for CPU inference) requirements scale with total parameters, not active ones. That distinction — compute scales with active params, memory scales with total params — is the single most important thing to understand before planning a Llama 4 deployment.

### Scout: The High-Efficiency Tier (17B active / 109B total, 16 experts)

Scout is Meta's answer to the question: "What's the most capable open-weight model we can run on a single high-end server?" With 16 experts and 109 billion total parameters, Scout requires roughly 60–70 GB of GPU VRAM in full-precision form, placing it within reach of a dual-GPU workstation or a single-node cloud instance (e.g., an AWS p4de.24xlarge or a 2× H100 configuration). In 4-bit quantized form, memory requirements drop to approximately 28–35 GB, opening Scout to single-GPU A100 80GB deployments.

The headline feature is Scout's context window: 10 million tokens. This is not a typo. Meta has implemented a highly efficient positional encoding scheme (building on RoPE with extended scaling) that allows Scout to process book-length documents, massive codebases, or large structured datasets in a single inference call — without chunking. In practice, the usable context is partially constrained by the quadratic attention computation cost at extreme lengths, but tens of thousands of tokens are handled efficiently with current serving frameworks.

<div class="article-callout article-callout--info">
<div class="article-callout__icon">🔬</div>
<div class="article-callout__body"><strong>Scout's 10M context in practice</strong><br>A 10 million token context can hold approximately 7,500 pages of text, or a mid-sized Python codebase of 40,000+ files. For tasks like full-repository code review, long-form document synthesis, or legal due diligence across thousands of pages, this eliminates the need for retrieval-augmented generation pipelines entirely — simplifying system architecture at the cost of attention compute.</div>
</div>

Scout supports 12 languages natively and is natively multimodal, accepting both text and images as input. It was trained on over 40 trillion tokens — a dataset scale comparable to what powers the leading closed-source models. Meta has not disclosed the full composition of the training corpus, which remains a point of contention in the open-source community.

### Maverick: The Frontier Reasoning Tier (17B active / 400B total, 128 experts)

Maverick takes the same 17B active parameter budget and scales the total parameter count to over 400 billion by dramatically expanding the expert pool: from Scout's 16 experts to 128. The router still activates roughly 1–2 experts per token, but now it selects from a much larger, more specialized knowledge base. The effect is that Maverick develops deeply specialized expert networks — some handling code, others factual recall, others logical inference — allowing for a degree of task specialization that dense models of equivalent compute cannot achieve.

The practical result is benchmark performance that rivals GPT-4o and Claude 3.5 Sonnet on reasoning-heavy tasks, at inference costs that remain far below what those closed-source APIs charge. The memory footprint is the tradeoff: serving Maverick in full precision requires approximately 200+ GB of VRAM, putting it squarely in the multi-node or high-end single-node server category (think 4× H100 or 8× A100). In 4-bit quantization (GPTQ or GGUF formats), memory requirements drop to the 100–120 GB range — achievable on a single 8× H100 node.

Maverick's context window is 1 million tokens by default (with experimental 10M support under active testing), and it retains Maverick's full multimodal capability for image and text inputs.

<div class="article-callout article-callout--warn">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body"><strong>Memory vs. compute: the MoE deployment trap</strong><br>A common mistake when evaluating Maverick is treating it as a "17B model" for hardware planning purposes. While inference compute resembles a 17B dense model, you must load all 400B+ parameters into memory. Undersizing VRAM leads to model offloading to system RAM, which collapses throughput by 10–50x. Always size deployments on total parameters, plan performance on active parameters.</div>
</div>

## Benchmark Performance

Meta published comprehensive benchmark results at Llama 4's release, comparing Scout and Maverick against the leading closed-source alternatives. Third-party evaluations from Hugging Face's Open LLM Leaderboard and LM-sys Chatbot Arena have largely corroborated these figures.

### Head-to-Head Comparison

| Model | MMLU | MATH | HumanEval (Code) | GPQA (Science) | Context Window |
|---|---|---|---|---|---|
| **Llama 4 Scout** | 84.2% | 70.1% | 81.3% | 58.4% | 10M tokens |
| **Llama 4 Maverick** | 89.7% | 80.5% | 90.2% | 73.1% | 1M tokens |
| **GPT-4o** | 88.7% | 76.6% | 90.2% | 53.6% | 128K tokens |
| **Claude Sonnet** | 88.7% | 78.3% | 92.0% | 65.0% | 200K tokens |

*Benchmark scores represent best published results as of May 2026. Methodologies differ across labs; independent reproduction may vary.*

Several observations stand out from this data. First, Maverick is genuinely competitive with GPT-4o across MMLU and HumanEval, and it surpasses GPT-4o on GPQA (graduate-level science questions) by nearly 20 percentage points — a domain where deep expert specialization from the 128-expert MoE architecture appears to pay meaningful dividends. Second, Scout's GPQA gap versus Maverick (58.4% vs 73.1%) illustrates the real-world reasoning advantage that the larger expert pool provides on complex, multi-step scientific problems.

For developers choosing between models, the Scout/Maverick gap on mathematical reasoning (MATH: 70.1% vs 80.5%) is particularly relevant for applications in finance, scientific computing, and engineering. On coding tasks, Maverick reaches parity with GPT-4o and is only 1.8 points below Claude Sonnet — a gap that will matter for some production use cases but is negligible for most.

## Multimodal Capabilities

Both Scout and Maverick support vision inputs — specifically, still images alongside text prompts. Meta trained the models on large-scale image-text pairs, and both perform well on standard vision-language tasks: image description, chart reading, OCR-in-context, and visual question answering.

The architecture uses a separate vision encoder (Meta has not published the full spec, but it appears to be a ViT variant) whose output tokens are projected into the language model's embedding space and interleaved with text tokens. This is a clean integration approach — the same attention mechanism that processes text also attends to visual tokens — rather than a bolt-on pipeline.

Neither Scout nor Maverick currently supports video input or native audio. Meta has signaled these capabilities are on the Llama 4 roadmap, but the released variants are image-and-text only. For teams requiring video or audio modalities, Gemini 2.0 Flash remains the only open-access alternative with comparable multimodal breadth.

## The License Question: Open Weights vs. Open Source

The Llama 4 Community License (distinct from the older Llama 2 license) permits commercial use, fine-tuning, and redistribution of model weights, subject to two notable conditions:

1. **MAU threshold**: Organizations with more than 700 million monthly active users must negotiate a separate commercial agreement with Meta directly. This clause is crafted to apply to essentially one entity at present: Google.

2. **No use for training other AI models**: The license prohibits using Llama 4 outputs or weights to train competing foundation models. This is a common restriction that the Open Source Initiative (OSI) considers incompatible with the Open Source Definition.

This distinction — "open weights" versus "open source" — has become a meaningful debate in the AI community. Truly open source software, by OSI definition, includes the source code (in this context: training code, training data, and full training infrastructure), permits any use including training competitors, and carries no field-of-use restrictions. Llama 4 satisfies none of these criteria.

For most practitioners, this distinction is academic. If your application involves fewer than 700 million monthly users, does not involve training a foundation model, and you deploy weights rather than distributing a product around them, the Llama 4 Community License is permissive enough for virtually any commercial use. Legal teams at regulated enterprises may require additional review, but the license is substantially more permissive than any closed API agreement.

<div class="article-callout article-callout--tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>License checklist for teams evaluating Llama 4</strong><br>Before deploying: (1) Confirm your MAU is below 700 million. (2) Verify you are not using outputs to train a competing foundation model. (3) Include the required attribution in any distributed product. (4) If you are in a regulated industry (healthcare, finance, legal), get written sign-off from legal — not because the license is restrictive, but because due diligence is required regardless of the model's license.</div>
</div>

## What Open-Weight Release Means for the Ecosystem

The release of Maverick-class performance in open weights changes the competitive dynamics of the AI market in ways that go beyond any individual benchmark score.

**For startups and SMBs**: Teams that previously relied on GPT-4o API calls for complex reasoning tasks now have a self-hostable alternative at a comparable capability tier. At scale, the economics are stark — running Maverick on dedicated H100 hardware costs roughly $2–4 per million tokens for inference, versus $15–30 per million tokens for equivalent closed-source API pricing. For any company processing hundreds of millions of tokens monthly, the break-even period on hardware investment is measured in weeks.

**For enterprise AI**: Regulated industries — healthcare, legal, financial services — can deploy Maverick in fully air-gapped environments, satisfying data residency requirements that closed-source APIs cannot meet. The combination of frontier-adjacent reasoning quality and full deployment control removes one of the last major blockers for on-premises AI adoption.

**For the research community**: Open weights enable fine-tuning experiments, mechanistic interpretability research, and continued pre-training that closed-source models categorically prohibit. Llama 4 will almost certainly spawn a wave of specialized fine-tunes within months: coding-specialized, medical, legal, domain-adapted variants that extend Meta's work.

**For Anthropic, OpenAI, and Google**: The open-weight competitive pressure is real. If Maverick achieves near-parity with GPT-4o at a fraction of the API cost for teams willing to self-host, it narrows the addressable market for closed-source API revenue. The response from closed-source labs has historically been to accelerate frontier model releases — a dynamic that benefits the entire ecosystem.

## Deployment Recommendations

For teams ready to evaluate Llama 4 in production, here is a practical decision framework:

**Choose Scout if**: Your primary constraint is infrastructure cost or memory footprint. You need an extremely long context window (beyond 128K tokens). Your tasks are classification, summarization, extraction, or straightforward generation where Maverick's reasoning advantage does not materially affect output quality.

**Choose Maverick if**: Your use case involves complex reasoning, multi-step code generation, scientific or mathematical analysis, or any task where you would otherwise reach for GPT-4o. You have the hardware to support the total parameter memory footprint (100GB+ in quantized form). You want frontier-quality reasoning without recurring API costs.

**Start with quantization**: GPTQ (GPU) and GGUF (CPU/mixed) quantization at 4-bit or 5-bit precision reduces memory requirements by 60–70% with benchmark degradation of under 3% on most tasks. For nearly all production deployments, quantized Maverick is the right starting point.

**Use vLLM or TGI for serving**: Both frameworks are already updated with Llama 4 MoE support and implement efficient expert caching and continuous batching — critical for throughput in production multi-user scenarios.

<div class="article-keypoints">
<div class="article-keypoints__title">📌 Key Takeaways</div>
<ul>
<li>Llama 4 Scout (17B active / 109B total, 16 experts) is the most memory-efficient tier, featuring a 10 million token context window — useful for codebase-scale analysis without RAG infrastructure.</li>
<li>Llama 4 Maverick (17B active / 400B total, 128 experts) reaches GPT-4o-class benchmark performance on reasoning, coding, and science tasks while remaining self-hostable at significant cost savings.</li>
<li>MoE architecture means inference compute scales with active parameters (17B), but memory requirements scale with total parameters (109B or 400B+). Plan hardware accordingly.</li>
<li>The Llama 4 Community License is permissive for most commercial deployments (under 700M MAU, no training of competing foundation models), but it is not open source by OSI definition.</li>
<li>For teams processing hundreds of millions of tokens monthly, self-hosted Maverick offers a 5–10x cost advantage over comparable closed-source API pricing — with the infrastructure overhead that entails.</li>
<li>Neither Scout nor Maverick currently supports video or audio inputs; multimodal capability is limited to text and images at launch.</li>
</ul>
</div>

---

*Benchmark data sourced from Meta's Llama 4 technical report and Hugging Face Open LLM Leaderboard results as of May 2026. Pricing estimates are approximate and vary by cloud provider and hardware configuration.*
