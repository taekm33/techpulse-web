---
title: "Mistral Releases Weights for Trillion-Parameter Mistral Large 4 — Self-Hostable, but MaaS Needs a Separate License"
summary: "Mistral AI published the weights of Mistral Large 4 (nicknamed Le Chonk) on Hugging Face on October 29, 2026 (per press reports), three weeks after its public preview. It is a mixture-of-experts model with roughly 1 trillion total and 52 billion active parameters, takes text and image input, and supports a 1M-token context. The Mistral Ecosystem Open-Weight License is a modified MIT license that allows commercial use, but companies selling the model as a service need a separate commercial license. API pricing is $0.70 input and $2.10 output per million tokens. This public-source analysis covers what is confirmed, what hardware it implies, and who should evaluate it."
category: "ai-news"
date: "2026-10-31"
readingTime: 6
tags: ["Mistral AI", "Mistral Large 4", "Le Chonk", "open weights", "MoE", "self-hosting"]
---

<div class="article-tldr">
Mistral AI has released the weights of <strong>Mistral Large 4 (ML4, "Le Chonk")</strong> on <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank" rel="noopener">Hugging Face</a>. TechCrunch and SiliconANGLE date the release to <strong>October 29, 2026</strong>. The model has <strong>~1T total parameters (1.05T per Mistral's docs)</strong> and <strong>52B active</strong> per token, takes text and image input, outputs text, and supports a <strong>1M-token context</strong>. The license permits commercial use, but <strong>operating a Model-as-a-Service business requires a separate commercial license</strong> from Mistral. All benchmark figures are Mistral's own.
</div>

This article is an analysis of public sources: Mistral's blog posts, API documentation, the Hugging Face model card, and press coverage. We did not download or run the model or reproduce any benchmark.

## Who this matters to

- **Enterprises and public-sector teams that cannot send data to third-party APIs**: another frontier-class candidate for on-premises or private-cloud deployment.
- **Teams building coding agents or security automation**: Mistral positions ML4 for agentic coding and cybersecurity.
- **Startups and hosts planning to resell model access**: the license's MaaS clause applies to you.
- **Small teams running open models on a few GPUs**: a 1T-parameter model needs a high-end multi-GPU server, so expectations should be set accordingly.

## Confirmed facts (Mistral's official materials)

In its <a href="https://mistral.ai/news/mistral-large-4/" target="_blank" rel="noopener">October 6 preview announcement</a>, Mistral said it would "release the weights by the end of the month." It then published the <a href="https://mistral.ai/news/mistral-large-4-oss/" target="_blank" rel="noopener">open-weight announcement</a>, which carries no visible date; the October 29 date comes from press reports. SiliconANGLE reported the model received three additional weeks of reinforcement training after the preview.

<div class="article-stats">
<strong>Weights released</strong> 2026-10-29 (per press); preview 2026-10-06<br/>
<strong>Size</strong> ~1T total (1.05T in API docs) / 52B active parameters; 1.6B vision encoder<br/>
<strong>Architecture</strong> MoE — 128 routed experts, 4 active per token, plus 1 shared expert<br/>
<strong>I/O</strong> Text and image in, text out<br/>
<strong>Context</strong> 1M tokens<br/>
<strong>Reasoning modes</strong> low / medium / high (default)<br/>
<strong>License</strong> Mistral Ecosystem Open-Weight License (modified MIT); MaaS requires a separate commercial license<br/>
<strong>API pricing</strong> $0.70 input / $0.07 cached input / $2.10 output per million tokens<br/>
<strong>Training</strong> 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own European data centers
</div>

Two checkpoints are available: the base <code>Mistral-Large-4-1T-A52B</code> and an <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B-NVFP4" target="_blank" rel="noopener">NVFP4 checkpoint</a> targeting Blackwell GPUs. The model card lists dedicated vLLM and SGLang Docker images, plus Transformers and llama.cpp (GGUF). The API model ID is <code>mistral-large-4</code> per <a href="https://docs.mistral.ai/models/mistral-large-4-0" target="_blank" rel="noopener">Mistral's API docs</a>. The announcement also lists Microsoft Foundry, <a href="https://build.nvidia.com/mistralai/mistral-large-4-1t-a52b" target="_blank" rel="noopener">NVIDIA-hosted endpoints</a>, and OpenRouter as access points.

## Performance claims (company-reported)

These figures come from Mistral's announcement and have not been independently reproduced.

| Benchmark | Mistral-reported result |
|---|---|
| Terminal-Bench 4.0 | 41% (up from 28% in preview) |
| Artificial Analysis Coding Agent Index | 48% — tied with GLM-5.3, using 47% fewer tokens per task |
| FrontierCode 2.0 | 19.7% |
| Artificial Analysis Cyber Index | 51% |
| Refusal of malicious cyber requests | 96.6% |

Mistral calls ML4 "the best open-weight model for coding." TechCrunch likewise framed China's GLM-5.3 as its closest open-weight peer. Comparisons with leading closed models were published only for the preview build, so they don't settle where the released version stands.

## Unconfirmed or forward-looking (kept separate)

- **Hardware floor**: The model card gives no minimum spec. Its vLLM and SGLang examples assume an 8-GPU node (tensor parallel 8). By simple arithmetic, FP8 weights alone are about 1TB, which exceeds eight 80GB GPUs (640GB). Which 8-GPU configurations suffice is **unconfirmed** in official materials.
- **Language coverage**: The card text says "160+ languages, including every official language of the European Union," while the Hugging Face header tag shows "39 languages." The exact list is **unconfirmed**.
- **Cloud availability by region**: Mistral lists Microsoft Foundry, but regional availability there and on AWS or Google Cloud is not stated, so it is **unconfirmed**.
- **Le Chat**: The announcement names Mistral Studio, Vibe, and the API; it does not say whether the consumer Le Chat app uses ML4.

## What it means for readers

The main change is that **a model claiming top-tier open-weight coding performance can now run inside your own infrastructure**. Mistral's Pierre Stock told TechCrunch it offers "access that can't be cut off by definition because the model is open-weighted." For organizations trying to reduce API dependency, or bound by data-residency rules, that is worth evaluating.

It is **not a small-team model**, though. Only 52B parameters are active per token, but all experts must sit in memory, so self-hosting means a high-end GPU server. Without one, start with the API and decide on self-hosting after measuring quality on your own workloads. Compare its $0.70/$2.10 pricing against your current model's actual bill on the same tasks, not just list prices.

Read the <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE" target="_blank" rel="noopener">license text</a> closely. Internal use and embedding the model in your own product are allowed, but offering the model as a service requires a separate commercial agreement. "Open weight" here does not mean the same thing as Apache 2.0 or plain MIT.

<div class="article-callout tip">
<strong>What you can do now</strong><br/>
1. <strong>Evaluate via API first</strong>: Run your own tasks against <code>mistral-large-4</code> in Mistral Studio and compare quality and cost with your current model.<br/>
2. <strong>Size hardware before self-hosting</strong>: FP8 weights alone are roughly 1TB. Add KV-cache headroom for long contexts, and consider the NVFP4 checkpoint if you run Blackwell GPUs.<br/>
3. <strong>Have legal review the license</strong>: Check whether your product counts as Model-as-a-Service, especially if customers call the model through your API.<br/>
4. <strong>Test non-English use cases directly</strong>: The language list is inconsistent across official pages, so verify with your own evaluation set.<br/>
5. <strong>Treat benchmarks as claims</strong>: All published figures are Mistral's. Keep your own task-level measurements.
</div>

## Limitations

This analysis relies on two Mistral blog posts, Mistral's API documentation, the Hugging Face model card and license, and TechCrunch and SiliconANGLE coverage, all checked on October 31. Performance figures are company-reported, with no independent reproduction yet. Minimum hardware, exact language coverage, and regional cloud availability could not be confirmed. Official materials disagree on total parameters (~1T vs. 1.05T) and language count (160+ vs. a 39-language tag). Pricing may change.

<p><em>Last verified 2026-10-31.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://mistral.ai/news/mistral-large-4-oss/" target="_blank" rel="noopener">Mistral AI — Mistral Large 4 (Le Chonk) is now open weight</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://mistral.ai/news/mistral-large-4/" target="_blank" rel="noopener">Mistral AI — Introducing Mistral Large 4 (preview, 2026-10-06)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank" rel="noopener">Mistral on Hugging Face — Mistral-Large-4-1T-A52B model card</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE" target="_blank" rel="noopener">Mistral Ecosystem Open-Weight License text</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B-NVFP4" target="_blank" rel="noopener">Mistral on Hugging Face — NVFP4 checkpoint</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://docs.mistral.ai/models/mistral-large-4-0" target="_blank" rel="noopener">Mistral API docs — Mistral Large 4 (model ID, pricing, context)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/" target="_blank" rel="noopener">TechCrunch — Mistral releases weights for its trillion-parameter model (2026-10-29)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://siliconangle.com/2026/10/29/mistral-releases-open-weights-for-mistral-large-4-providing-sovereign-control-for-the-companys-le-chonk-ai-model/" target="_blank" rel="noopener">SiliconANGLE — Sovereign control and extra training (2026-10-29)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Mistral released Mistral Large 4 weights on Hugging Face on Oct 29 (per press): ~1T total / 52B active MoE</li>
<li>Text and image input, 1M-token context, low/medium/high reasoning modes</li>
<li>Modified MIT license allows commercial use; Model-as-a-Service requires a separate license</li>
<li>Coding and cyber benchmarks are company-reported; no independent reproduction yet</li>
<li>FP8 weights alone are ~1TB — most teams should evaluate via API ($0.70/$2.10 per M tokens) first</li>
</ul>
</div>
