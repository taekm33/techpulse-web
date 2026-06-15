---
title: "Microsoft Launches 7 In-House MAI Models at Build 2026 — Declaring AI Stack Independence"
summary: "Microsoft AI unveiled seven new models at Build 2026 spanning image, voice, transcription, reasoning, and coding — all trained on proprietary data without distillation from third-party models. MAI-Code-1-Flash immediately shipped inside GitHub Copilot and VS Code."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["microsoft", "mai", "build2026", "ai-models", "github-copilot"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — Microsoft AI launched the <strong>MAI model family</strong> — seven models spanning image generation, voice synthesis, transcription, reasoning, and coding — at Microsoft Build 2026. All models were trained from scratch on clean, traceable, enterprise-grade Microsoft data, without distillation from OpenAI or any third-party models. MAI-Code-1-Flash is live in GitHub Copilot and VS Code today.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleiman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Declaration: Humanist Superintelligence

Microsoft AI CEO Mustafa Suleyman opened the Build 2026 keynote with a simple statement: Microsoft's goal is **Humanist Superintelligence** — AI designed to serve people, not replace them. The MAI model family is the first concrete step toward that mission.

More significant than the models themselves is what Suleyman emphasized about how they were built: "We don't distill from other labs and we don't rely on opaque data. Our datasets are clean, traceable, and enterprise-grade." This is a direct signal that Microsoft — which has been a major Azure reseller of OpenAI models — is now building its own complete AI stack.

<div class="article-stats">
<div class="article-stats__item">
<span class="article-stats__value">7</span>
<span class="article-stats__label">New models announced simultaneously</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">43</span>
<span class="article-stats__label">Languages supported by MAI-Transcribe-1.5</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">51.2%</span>
<span class="article-stats__label">MAI-Code-1-Flash on SWE-Bench Pro</span>
</div>
<div class="article-stats__item">
<span class="article-stats__value">5B</span>
<span class="article-stats__label">MAI-Code-1-Flash active parameters</span>
</div>
</div>

## The Seven Models, Explained

### MAI-Image-2.5 & Flash
A multimodal image model supporting both text-to-image generation and precise image editing. It ranks **#2 on the Arena leaderboard for image editing**, surpassing Google's Nano Banana Pro. Already live in PowerPoint and rolling out to OneDrive, with availability on Microsoft Foundry for developers. The Flash variant optimizes for production-scale cost and latency.

### MAI-Transcribe-1.5
The headline claim: **the world's best transcription model**, with state-of-the-art word error rate (WER) across 43 languages on the FLEURS multilingual benchmark. It transcribes an hour of audio in under 15 seconds — up to 5× faster than Gemini 3.1 and GPT-4o-Transcribe at comparable accuracy. **Keyword Biasing** allows users to supply domain-specific terminology, reducing WER by up to 30%. Integrating into Copilot, Teams, GitHub, and Dynamics 365 Contact Centre.

### MAI-Voice-2 & Flash
High-quality speech generation across 15 languages, with the ability to adapt to a speaker's voice from a short audio sample. Voice-2-Flash is optimized for ultra-low-latency real-time voice agents.

### MAI-Thinking-1
Microsoft AI's first dedicated reasoning model. It reaches **97.0% on AIME 2025** and **94.5% on AIME 2026**, demonstrating strong mathematical and scientific reasoning competitive with models in its weight class. In blind human side-by-side evaluations, it outperforms Claude Sonnet 4.6. Currently available in private preview on Microsoft Foundry.

### MAI-Code-1-Flash
At just 5B active parameters, MAI-Code-1-Flash achieves **51.2% on SWE-Bench Pro** — 16 percentage points ahead of Claude Haiku 4.5 (35.2%) on the same benchmark. It solves harder problems with up to **60% fewer tokens** on SWE-Bench Verified, reducing latency and cost simultaneously. **Adaptive Solution Length Control** automatically calibrates response depth to task complexity. Rolling out today as a selectable model in VS Code GitHub Copilot.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>How to Access MAI Models</strong><br>MAI models are available via <strong>Microsoft Foundry</strong>, as well as OpenRouter, Fireworks AI, and Baseten. For the first time, developers can <strong>fine-tune model weights directly</strong> through Foundry. MAI-Code-1-Flash requires no setup for GitHub Copilot users in VS Code — it appears in the model picker automatically as the rollout progresses.</div>
</div>

## The Full MAI Family at a Glance

| Model | Category | Key Metric | Where Available |
|-------|----------|------------|-----------------|
| MAI-Image-2.5 | Image gen + editing | Arena image editing #2 | PowerPoint, OneDrive, Foundry |
| MAI-Image-2.5-Flash | Image (efficient) | Cost/speed optimized | Foundry |
| MAI-Transcribe-1.5 | Speech-to-text | Best WER in 43 languages | Copilot, Teams, GitHub, Foundry |
| MAI-Voice-2 | Text-to-speech | 15 languages, voice adapt | Copilot |
| MAI-Voice-2-Flash | Voice (low latency) | Ultra-low latency | Voice agents |
| MAI-Thinking-1 | Reasoning | AIME 2026: 94.5% | Foundry (private preview) |
| MAI-Code-1-Flash | Coding | SWE-Bench Pro: 51.2% | GitHub Copilot, VS Code |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Microsoft + Mayo Clinic: Medical AI</strong><br>Alongside the MAI model family, Suleiman announced that Microsoft and Mayo Clinic are co-creating a frontier AI model for healthcare. The collaboration combines Mayo Clinic's world-leading clinical expertise and de-identified longitudinal clinical data with Microsoft's foundational AI capabilities — marking MAI's first major domain-specific vertical application.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Microsoft AI launched 7 new MAI models at Build 2026 spanning image, transcription, voice, reasoning, and coding.</li>
<li>All models trained on proprietary Microsoft data only — no distillation from OpenAI or third-party models.</li>
<li>MAI-Code-1-Flash: 5B params, SWE-Bench Pro 51.2%, live in GitHub Copilot and VS Code immediately.</li>
<li>MAI-Transcribe-1.5: best-in-class WER across 43 languages, 5× faster than comparable models.</li>
<li>Available on Foundry, OpenRouter, Fireworks, Baseten — weight fine-tuning permitted for the first time.</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Documentation</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Microsoft AI Blog — Full MAI family announcement with specs and vision</a><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">Introducing MAI-Thinking-1 — Reasoning model benchmarks and Foundry access</a><br>— <a href="https://microsoft.ai/news/introducingmai-code-1-flash/" target="_blank" rel="noopener noreferrer">Introducing MAI-Code-1-Flash — GitHub Copilot integration and SWE-Bench results</a></div></div>
