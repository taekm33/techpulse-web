---
title: "Microsoft Build 2026: Seven New In-House MAI Models Including MAI-Thinking-1 and MAI-Code-1-Flash"
summary: "Microsoft unveiled a family of seven in-house AI models at Build 2026, spanning reasoning, coding, image generation, voice, and transcription — signaling a clear push to reduce reliance on OpenAI and build its own frontier AI stack."
category: "ai-news"
date: "2026-06-08"
readingTime: 5
tags: ["Microsoft", "MAI", "Build2026", "MAI-Thinking-1", "GitHub Copilot"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — At Microsoft Build 2026 on June 2, Microsoft AI CEO Mustafa Suleyman introduced 7 new in-house MAI models: MAI-Thinking-1 (reasoning), MAI-Code-1-Flash (coding), MAI-Image-2.5 (image gen + editing), MAI-Voice-2 (TTS), and MAI-Transcribe-1.5 (speech-to-text). All were trained from scratch without distillation from third-party models.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/OvLIae4HCeM" title="Microsoft AI CEO unveils 7 new AI models | Mustafa Suleyman at Microsoft Build 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Building a "Hill-Climbing Machine"

Microsoft AI CEO **Mustafa Suleyman** framed the MAI model family as the first concrete steps toward "Humanist Superintelligence" — AI designed to serve people, not replace them. Critically, every model in the family was trained from scratch on clean, commercially licensed, enterprise-grade data with zero distillation from third-party models including OpenAI or Anthropic. This signals Microsoft is building genuine AI independence.

<div class="article-stats">
  <div class="article-stats__item">
    <span class="article-stats__value">7</span>
    <span class="article-stats__label">New MAI Models Announced</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">35B</span>
    <span class="article-stats__label">Active Params (MAI-Thinking-1)</span>
  </div>
  <div class="article-stats__item">
    <span class="article-stats__value">43</span>
    <span class="article-stats__label">Languages (MAI-Transcribe-1.5)</span>
  </div>
</div>

## The Full MAI Model Lineup

| Model | Modality | Key Feature | Availability |
|-------|----------|------------|-------------|
| MAI-Thinking-1 | Text/Reasoning | 35B active params MoE, 256K context | Private preview |
| MAI-Code-1-Flash | Coding | GitHub Copilot + VS Code native | GA (individuals) |
| MAI-Image-2.5 | Image | Text-to-image + image editing, Arena #3 | Foundry now |
| MAI-Image-2.5 Flash | Image | Faster/cheaper variant | Foundry now |
| MAI-Voice-2 | Speech (TTS) | 15+ languages, voice cloning | Azure Speech |
| MAI-Transcribe-1.5 | Speech (STT) | 43 languages, FLEURS #1 | Azure Speech |
| MAI-Voice-2 Flash | Speech | Fast variant | Coming soon |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>How does MAI-Thinking-1 compare to the competition?</strong><br>
MAI-Thinking-1 is a sparse Mixture of Experts model with 35B active parameters (~1T total). Microsoft says independent blind raters prefer it over Claude Sonnet 4.6, and it matches Claude Opus 4.6 on SWE-Bench Pro software engineering tasks. It supports a 256K token context window and is built for complex multi-step instructions and code generation.</div>
</div>

## MAI-Code-1-Flash in GitHub Copilot Now

**MAI-Code-1-Flash** is a 5B active-parameter lightweight model purpose-built for the GitHub Copilot harness. It rolled out immediately to VS Code Copilot individual users with no setup required. The model uses "adaptive thinking" — staying concise on simple tasks, spending more reasoning budget on complex ones. This directly competes with Anthropic's Claude Haiku at a lower inference cost.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>New Hardware: Surface RTX Spark Dev Box</strong><br>
Microsoft also announced the Surface RTX Spark Dev Box, powered by NVIDIA RTX Spark with 128GB unified memory. It can run models up to 120B parameters locally at up to 1 petaflop of AI compute. Targeted at developers needing local agent pipelines and fine-tuning workloads, it will be available later in 2026 in the US.</div>
</div>

## Microsoft Foundry Becomes an Agent-First OS

Build 2026 turned **Microsoft Foundry** into a full agent lifecycle platform with three new layers:

**Build layer:**
- Toolboxes with MCP-native tool management and auto-auth
- Work IQ API GA on June 16 — agents can access Microsoft 365 mail, calendar, files

**Deploy layer:**
- Hosted Agents in Foundry Agent Service reaching GA in 30 days
- "Autopilot Agents" with Entra identity, Teams presence, org-chart placement

**Operate layer:**
- OpenTelemetry tracing across every model call, tool invocation, and sub-agent hop
- Agent Optimizer: turns production failures into ranked prompt/skill improvements

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
  <li>Microsoft publicly signals AI independence with 7 models built without third-party distillation</li>
  <li>MAI-Thinking-1: 35B MoE reasoning model matching Opus 4.6 on SWE-Bench Pro</li>
  <li>MAI-Code-1-Flash: live now in GitHub Copilot + VS Code with zero setup</li>
  <li>MAI-Image-2.5: ranked #3 on Arena.ai for image generation families</li>
  <li>Microsoft Foundry upgraded to a full agent build/deploy/operate platform</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · Getting Started</strong><br>— <a href="https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" target="_blank" rel="noopener noreferrer">MAI 7 Models Announcement (Microsoft AI)</a><br>— <a href="https://microsoft.ai/news/introducing-mai-thinking-1/" target="_blank" rel="noopener noreferrer">MAI-Thinking-1 Deep Dive</a><br>— <a href="https://microsoft.ai/news/introducingmai-code-1-flash/" target="_blank" rel="noopener noreferrer">MAI-Code-1-Flash for GitHub Copilot</a><br>— <a href="https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/new-mai-models-in-microsoft-foundry-across-text-image-voice-and-speech/4524632" target="_blank" rel="noopener noreferrer">MAI Models in Microsoft Foundry — Pricing & Availability</a></div></div>
