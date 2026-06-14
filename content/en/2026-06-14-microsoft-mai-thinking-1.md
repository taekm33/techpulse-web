---
title: "Microsoft Unveils MAI Family: 7 In-House AI Models Including MAI-Thinking-1 Reasoning Model"
summary: "Microsoft AI announced a family of seven in-house models at Build 2026, spanning reasoning, coding, image, voice, and transcription. MAI-Thinking-1 achieves 97% on AIME 2025 and 53% on SWE-Bench Pro, trained entirely without distillation from third-party models."
category: "ai-news"
date: "2026-06-14"
readingTime: 5
tags: ["Microsoft", "MAI", "AI models", "reasoning AI", "Microsoft Build"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — At Microsoft Build 2026, Microsoft AI CEO Mustafa Suleyman unveiled the <strong>MAI model family</strong> — seven models built in-house across reasoning, coding, image, voice, and transcription. MAI-Thinking-1, the flagship reasoning model, hits 97% on AIME 2025 and matches Claude Opus 4.6 on SWE-Bench Pro, all without distilling from any external model's outputs.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Why Microsoft Built Its Own Models

For years, Microsoft's AI strategy centered on its exclusive partnership with OpenAI. That relationship hasn't ended, but Build 2026 marked a clear inflection point: Microsoft now has its own frontier model family, developed entirely in-house under the MAI brand.

The driving philosophy is what Microsoft calls **Humanist Superintelligence** — advanced AI designed to serve people and organizations rather than replace them. The Hill-Climbing Machine is the operational expression of this philosophy: a co-designed training pipeline where data, rewards, evaluation environments, and compute are all continuously improved so model capability rises predictably over time.

## The Seven MAI Models

| Model | Category | Key Highlights |
|-------|----------|----------------|
| MAI-Thinking-1 | Reasoning | 35B active params MoE, 256k context, SWE-Bench Pro 53% |
| MAI-Code-1-Flash | Coding | 5B active params, deeply integrated with GitHub Copilot |
| MAI-Image-2.5 | Image | Text-to-image generation and editing, surpasses Arena benchmark leaders |
| MAI-Image-2.5-Flash | Image (efficient) | Lower-cost variant of MAI-Image-2.5 |
| MAI-Transcribe-1.5 | Transcription | World-best accuracy, 5× faster than competitors, 43 languages |
| MAI-Voice-2 | Voice | Natural-sounding speech across 15 languages, short-sample voice adaptation |
| MAI-Voice-2-Flash | Voice (efficient) | Ultra-efficient variant of MAI-Voice-2 (coming soon) |

## MAI-Thinking-1: Technical Deep Dive

MAI-Thinking-1 is a Sparse Mixture of Experts model with approximately one trillion total parameters and **35 billion active parameters per forward pass**. This architecture delivers frontier reasoning at a fraction of the compute cost of comparably performing dense models.

The model supports a **256k token context window**, making it suitable for large codebase analysis, extended document comprehension, and multi-turn agentic tasks. Despite its medium size in the weight class, independent human raters on Surge — evaluating 1,276 tasks across single-turn and multi-turn scenarios — **preferred MAI-Thinking-1 over Claude Sonnet 4.6**.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">97%</span>
<span class="article-stats__label">AIME 2025 accuracy</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">94.5%</span>
<span class="article-stats__label">AIME 2026 accuracy</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">53%</span>
<span class="article-stats__label">SWE-Bench Pro score</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">1.4×</span>
<span class="article-stats__label">Better perf/watt vs NVIDIA GB-200 on Maia 200</span>
</div>
</div>

What makes this model particularly notable is its training lineage: **zero distillation from third-party models**. Microsoft did not use outputs from OpenAI, Anthropic, or Google to supervise training. The datasets are described as clean, traceable, and enterprise-grade — a meaningful differentiator for regulated industries where data provenance matters.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>How to Access MAI Models</strong><br>MAI-Thinking-1 is available in <strong>private preview on Microsoft Foundry</strong> today, with a public preview on MAI Playground coming soon. MAI-Code-1-Flash is already integrated into GitHub Copilot across VS Code and the broader Microsoft developer stack. Frontier Tuning allows enterprise customers to fine-tune model weights with their own proprietary data.</div>
</div>

## Healthcare Partnership with Mayo Clinic

Alongside the model launch, Microsoft announced a collaboration with Mayo Clinic to co-create a **frontier AI model for healthcare**. The project will combine Mayo Clinic's de-identified clinical data and longitudinal patient insights with Microsoft's foundational AI infrastructure to build a model specialized for clinical decision support and diagnostics.

<div class="article-callout info">
<div class="article-callout__icon">📌</div>
<div class="article-callout__body"><strong>Enterprise Deployment Context</strong><br>MAI models are available through Microsoft Foundry and will run on Azure, on-premises infrastructure, and Windows devices. The same NVFP4-style quantization approach Microsoft uses internally allows the same checkpoint to run across different hardware classes. Microsoft also announced Majorana 2, a quantum computing chip intended for longer-term integration into AI workloads.</div>
</div>

## Market Implications

Microsoft's entry into the model-building space reshapes competitive dynamics. The frontier model market previously revolved around OpenAI, Anthropic, and Google DeepMind. Microsoft now adds a player with unmatched enterprise distribution (Azure, Office 365, GitHub, Teams), deep hardware investment (Maia chips, datacenter scale), and direct access to hundreds of millions of developers via GitHub Copilot.

MAI-Code-1-Flash's tight GitHub Copilot integration is particularly significant: it means Microsoft can iterate on coding AI faster than any external vendor could, using real developer feedback at scale.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Microsoft unveiled 7 in-house MAI models at Build 2026 spanning reasoning, coding, image, voice, and transcription</li>
<li>MAI-Thinking-1 achieves AIME 2025 97%, SWE-Bench Pro 53% — trained entirely without third-party model distillation</li>
<li>The Hill-Climbing Machine pipeline enables continuous, systematic capability improvement over time</li>
<li>MAI-Code-1-Flash is integrated into GitHub Copilot; MAI-Thinking-1 is in private preview on Microsoft Foundry</li>
<li>Partnership with Mayo Clinic to build a healthcare-specialized frontier model announced simultaneously</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Documentation</strong><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 Official Announcement (Microsoft AI)</a><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Full MAI Family Blog Post — Hill-Climbing Machine</a><br>— <a href="https://azure.microsoft.com/en-us/products/ai-foundry/" target="_blank" rel="noopener noreferrer">Microsoft AI Foundry — Access MAI Models</a></div></div>
