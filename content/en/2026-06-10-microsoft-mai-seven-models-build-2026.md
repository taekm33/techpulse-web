---
title: "Microsoft Build 2026: Seven MAI Models Challenge OpenAI and Anthropic"
summary: "Microsoft AI unveiled seven in-house AI models at Build 2026, spanning reasoning, coding, image, voice, and transcription. MAI-Thinking-1 matches Claude Opus 4.6 on SWE-Bench Pro without any third-party model distillation."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Microsoft", "MAI", "AI Models", "MAI-Thinking-1", "Build2026"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> At Microsoft Build 2026, CEO Mustafa Suleiman announced seven new internally-developed MAI models: MAI-Thinking-1 (reasoning), MAI-Code-1-Flash (coding), MAI-Image-2.5 (image generation and editing), MAI-Transcribe-1.5 (speech-to-text), and MAI-Voice-2 (text-to-speech), plus Flash variants. Built from scratch without distilling from other labs, the family targets "Humanist Superintelligence."
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Microsoft Goes All-In on Its Own Models

After years of backing OpenAI with billions in investment, Microsoft is now fielding its own frontier models. At Build 2026, Microsoft AI CEO Mustafa Suleiman unveiled seven MAI models built entirely in-house — no distillation from external labs, no opaque datasets. The models span reasoning, coding, image generation, voice synthesis, and transcription, positioning Microsoft as a serious contender in the foundation-model race.

<div class="article-stats">
<strong>📊 Key Numbers</strong>
<ul>
<li>MAI-Thinking-1 active parameters: <strong>35B</strong> (MoE, ~1T total)</li>
<li>SWE-Bench Pro score: <strong>53%</strong> (matches Claude Opus 4.6)</li>
<li>AIME 2025 score: <strong>97.0%</strong></li>
<li>MAI-Transcribe-1.5: <strong>5× faster</strong> than competing transcription models</li>
<li>MAI-Code-1-Flash active parameters: <strong>5B</strong></li>
</ul>
</div>

## The Full MAI Model Lineup

| Model | Category | Highlights |
|---|---|---|
| MAI-Thinking-1 | Reasoning / Text | 35B active, 256K context, competitive with Opus 4.6 on SWE-Bench |
| MAI-Code-1-Flash | Coding | 5B active, deep GitHub Copilot / VS Code integration |
| MAI-Image-2.5 | Image gen + edit | Arena.ai #2 family, image-to-image editing supported |
| MAI-Image-2.5-Flash | Image (lite) | Faster, more cost-efficient flash variant |
| MAI-Transcribe-1.5 | Transcription | 43 languages, domain terminology, 5× speed advantage |
| MAI-Voice-2 | Speech synthesis | 15 languages, voice cloning from a short sample |
| MAI-Voice-2-Flash | Speech (lite) | Ultra-efficient low-cost variant, coming soon |

## MAI-Thinking-1: Microsoft's First LLM

MAI-Thinking-1 is Microsoft AI's debut large language model, purpose-built for reasoning, mathematics, and software engineering at enterprise scale. Its Mixture-of-Experts architecture keeps inference overhead lean — 35 billion active parameters out of roughly 1 trillion total — while delivering benchmark scores that punch far above its weight class.

Independent human raters on Surge preferred MAI-Thinking-1 over Sonnet 4.6 in blind side-by-side evaluations. On SWE-Bench Pro — the toughest publicly available coding benchmark — it scores 53%, matching Claude Opus 4.6. On AIME 2025 it reaches 97.0%, showing strong generalization in mathematical reasoning. With a starting price of $5 per million input tokens, it is also among the most cost-efficient options in its tier.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Developer Note</strong><br>MAI-Thinking-1 is available in private preview on Microsoft Foundry now; public preview on MAI Playground is coming soon. MAI-Code-1-Flash is already deeply integrated into GitHub Copilot CLI and VS Code, making it well-suited for agentic coding workflows. Models will also be available on OpenRouter, Fireworks, and Baseten — and for the first time, developers can fine-tune the weights directly.</div>
</div>

## Coding, Images, Voice — and Healthcare AI

MAI-Code-1-Flash targets the growing market for inference-efficient coding agents. At 5 billion active parameters, it is comparable to Haiku in capability but optimized specifically for Microsoft's stack, deeply embedded into GitHub Copilot and VS Code toolchains. MAI-Image-2.5 adds image-to-image editing and control-with-preservation to its text-to-image generation, landing at second place in the Arena.ai image generation leaderboard.

Beyond the model launch, Microsoft announced a partnership with Mayo Clinic to co-create a frontier AI model for healthcare, combining Mayo Clinic's clinical expertise and de-identified longitudinal data with Microsoft's foundational AI capabilities.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Availability</strong><br>MAI-Thinking-1: private preview on Foundry now (request access). MAI-Image-2.5 and MAI-Transcribe-1.5: available directly in Foundry. MAI-Voice-2-Flash: coming soon. Developer weight fine-tuning is enabled for the first time across the MAI family.</div>
</div>

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Microsoft built seven frontier AI models from scratch, without distilling from third-party labs</li>
<li>MAI-Thinking-1 matches Claude Opus 4.6 on SWE-Bench Pro at a competitive $5/M-token price</li>
<li>Full multimodal coverage: reasoning, code, image generation and editing, voice, and transcription</li>
<li>Models available on OpenRouter and Fireworks; developer fine-tuning opened for the first time</li>
<li>Microsoft–Mayo Clinic healthcare AI collaboration announced alongside the model family</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Resources</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">Microsoft AI: Full MAI Model Launch Blog Post</a><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">Introducing MAI-Thinking-1 — Official Announcement</a><br>— <a href="https://microsoft.ai/models/mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 Model Specs &amp; Access Request</a><br>— <a href="https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632" target="_blank" rel="noopener noreferrer">Azure AI Foundry Blog: MAI Model Availability</a></div></div>
