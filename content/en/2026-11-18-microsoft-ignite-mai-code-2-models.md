---
title: "Microsoft Ignite 2026: Seven In-House MAI Models, With MAI Code 2 Already in GitHub Copilot's Model Picker"
summary: "At Ignite 2026 on November 17, Microsoft AI released seven models spanning coding, security, images, voice, clinical transcription and decision-making. MAI Code 2 and MAI Code 2 Flash went live in GitHub Copilot the same day, with Flash available even on the Free and Student plans. This public-source analysis explains what the '98% of GPT-6.1 Sol at 40% of the cost' claim actually measures, who can use each model, what admins should check, and what is still unknown."
category: "ai-news"
date: "2026-11-18"
readingTime: 6
tags: ["Microsoft", "Ignite 2026", "MAI Code 2", "GitHub Copilot", "Microsoft Foundry", "MAI Image 2.7", "MAI Realtime 1", "AI models"]
---

<div class="article-tldr">
On <strong>November 17, 2026</strong>, during the Ignite keynote in San Francisco, Microsoft AI published a <a href="https://microsoft.ai/news/microsoft-ignite-2026/" target="_blank" rel="noopener">lineup of seven in-house models</a>. The part most developers can use today is <strong>MAI Code 2</strong> (Copilot Pro and above) and <strong>MAI Code 2 Flash</strong> (every plan including Free and Student), both selectable in GitHub Copilot now. The headline price-performance numbers are Microsoft's own evaluations, and the cost comparisons use a 50% promotional price.
</div>

This article is an analysis of public material: Microsoft AI's model posts, the Official Microsoft Blog, GitHub's changelog and press coverage. We did not run the models or reproduce any benchmark; every figure below comes from Microsoft or from the cited reporting.

## Who should care

- **Copilot users on any plan.** A new option appears in the model picker. Free-tier users get MAI Code 2 Flash; MAI Code 2 needs Pro, Pro+, Max, Business or Enterprise.
- **Copilot Business and Enterprise admins.** Under default model enablement, new models switch on automatically. If your organization reviews models before rollout, check the policy now.
- **Teams pinned to MAI-Code-1.1-Flash.** GitHub will retire it across all Copilot experiences on December 18, 2026.
- **Builders on Microsoft Foundry.** Image and real-time voice models opened in preview, giving new price points for product-image editing and voice agents.
- **Security teams.** MAI Cyber 2 Flash is not sold as an API; it ships only inside Microsoft security products.

## What Microsoft and GitHub confirmed

<div class="article-stats">
<strong>Coding</strong> MAI Code 2 and Code 2 Flash, generally available in GitHub Copilot; Code 2 Flash also in limited-access preview on Foundry<br/>
<strong>Claimed coding results</strong> 98% of GPT-6.1 Sol at ~40% of the cost; 96% of Claude Opus 5.5 at 5% (four-benchmark average, 50% promo price)<br/>
<strong>Image</strong> MAI Image 2.7 ~$35 per 1,000 images; 2.7 Flash ~$10 per 1,000 (Foundry public preview)<br/>
<strong>Voice</strong> MAI Realtime 1 from $0.01 per audio minute, plus reasoning at $1 / $5 per million input / output tokens; no charge during limited preview<br/>
<strong>Security</strong> MAI Cyber 2 Flash, 1M-token context, list price $0.10 / $0.50 per million input / output tokens, rolling into MDASH from mid-December<br/>
<strong>Also announced</strong> Microsoft-Decision-1.1 (GA), Dragon Copilot Transcribe on MAI-Transcribe-2, Maia 200 accelerator running Microsoft's largest models, MAI Licensed Weights
</div>

### The coding models, in detail

According to the <a href="https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/" target="_blank" rel="noopener">GitHub changelog</a>, both models appear in VS Code, Visual Studio, Copilot CLI, the Copilot cloud agent, the Copilot app, github.com, GitHub Mobile, JetBrains, Xcode and Eclipse, and are billed under usage-based billing. The same entry says they are available "to eligible GitHub Copilot subscribers on annual plans," so monthly subscribers may want to confirm in their own picker. MAI Code 2 was also added to the Standard tier of <a href="https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/" target="_blank" rel="noopener">Copilot Fusion</a>, which routes between models automatically.

The <a href="https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/" target="_blank" rel="noopener">model announcement</a> is unusually candid about scope: the models are tuned for everyday enterprise coding and are "explicitly not yet tuned" for fundamental science research or very long-horizon agentic work. The 98% figure averages DeepSWE 1.1, Terminal Bench 2.1 and SWE-Atlas, run on Microsoft's internal MSBench platform through Copilot CLI at max reasoning effort, with FrontierCode 1.1 scores taken from Artificial Analysis. In a blind front-end comparison, 258 annotators preferred MAI Code 2 over GPT-6 Sol 64% of the time. Releases on OpenRouter, Vercel, Hermes, OpenCode and Kilo are described only as coming "soon."

### Image, voice and security

Microsoft says <a href="https://microsoft.ai/news/introducing-mai-image-2-7/" target="_blank" rel="noopener">MAI Image 2.7</a> held the top spot on Artificial Analysis image editing as of November 16, four Elo points ahead of GPT Image 2.6 Sunburst (max). It supports transparent backgrounds and already powers Bing Image Creator. <a href="https://microsoft.ai/news/introducing-mai-realtime-1/" target="_blank" rel="noopener">MAI Realtime 1</a>, Microsoft's first speech-to-speech model, is compatible with the OpenAI Realtime API, which lowers the cost of trying it on an existing voice app. The <a href="https://microsoft.ai/news/introducing-mai-cyber-2-flash/" target="_blank" rel="noopener">MAI Cyber 2 Flash post</a> discloses that 92 of CyberGym-E2E's 905 tasks overlapped with projects in its training data; Microsoft dropped those tasks for every model and reported on the remaining 813.

### Licensed weights

Satya Nadella's <a href="https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/" target="_blank" rel="noopener">keynote remarks</a> introduced MAI Licensed Weights, letting "trusted customers" access Microsoft AI model weights. We could not find published eligibility rules or pricing.

## Unconfirmed or forward-looking

- **Independent results.** All performance and cost claims are Microsoft's. Because some comparisons use a promotional price, the gap at list price will likely be narrower. When the promotion ends is not stated.
- **MAI Code 2 API pricing.** We did not find a published per-token price for MAI Code 2 outside Copilot's usage-based billing.
- **Regional availability.** Microsoft did not say which Azure regions host the Foundry previews, or whether EU data-residency options apply at launch. Unconfirmed.
- **Model size.** Korean outlet AI Times reported MAI Code 2 is a 2.8-trillion-parameter mixture-of-experts model with 80 billion active parameters. That figure does not appear in the Microsoft posts cited here.
- **A general frontier model.** AI Times reports that Microsoft is separately developing a general-purpose frontier model; no release timeline has been given.

## What it means in practice

<a href="https://www.theverge.com/tech/1035766/microsoft-just-announced-a-bunch-of-new-ai-models" target="_blank" rel="noopener">The Verge</a> framed the day as Microsoft pushing several in-house models at once. In its own keynote, Suleyman's pitch was that "token spend is going through the roof" for enterprise buyers. For a Copilot shop the immediate question is not whether MAI Code 2 is the best model, but whether it is good enough for the bulk of routine tickets. If so, the remaining premium-model budget can go to design work and long agent runs, which Microsoft itself says these models are not built for.

<div class="article-callout tip">
<strong>Practical steps</strong><br/>
1. <strong>Individual developers:</strong> open the Copilot chat model picker and look for MAI Code 2 or MAI Code 2 Flash. If Code 2 is missing, check your plan tier and billing cycle.<br/>
2. <strong>Admins:</strong> review the Copilot model policy. Leaving the global default on means MAI models are enabled for your users automatically.<br/>
3. <strong>MAI-Code-1.1-Flash users:</strong> update scripts and configs that hard-code the model name before December 18.<br/>
4. <strong>Cost trial:</strong> send the same 10–20 real issues to your current model and to MAI Code 2; track mergeable changes and billed usage, then repeat after the promotional price ends.<br/>
5. <strong>Voice-agent teams:</strong> if your app already speaks the OpenAI Realtime API, request the Foundry limited preview for MAI Realtime 1; Microsoft says preview usage is not billed.
</div>

For earlier MAI releases, see our coverage of <a href="/2026-09-07-microsoft-mai-transcribe-2-speech-model/">MAI-Transcribe-2</a> and <a href="/2026-07-28-microsoft-mai-cyber-perception-security-ai/">MAI Cyber</a>.

## Limitations

This piece relies on five Microsoft AI posts, the Official Microsoft Blog, Microsoft Source, GitHub's changelog, The Verge and AI Times, all checked on November 18. We ran nothing ourselves. Dragon Copilot and Decision 1.1 are mentioned only briefly. Prices and availability can change.

<p><em>Last verified 2026-11-18.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://microsoft.ai/news/microsoft-ignite-2026/" target="_blank" rel="noopener">Microsoft AI — Seven new world class models at scalable price-performance (Nov 17, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/" target="_blank" rel="noopener">Microsoft AI — MAI Code 2 and Code 2 Flash</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://microsoft.ai/news/introducing-mai-image-2-7/" target="_blank" rel="noopener">Microsoft AI — MAI Image 2.7</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://microsoft.ai/news/introducing-mai-realtime-1/" target="_blank" rel="noopener">Microsoft AI — MAI Realtime 1</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://microsoft.ai/news/introducing-mai-cyber-2-flash/" target="_blank" rel="noopener">Microsoft AI — MAI Cyber 2 Flash</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://microsoft.ai/news/microsoft-ignite-2026-mai-keynote/" target="_blank" rel="noopener">Microsoft AI — Ignite 2026 MAI keynote transcript</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/" target="_blank" rel="noopener">The Official Microsoft Blog — Ignite 2026: Building the frontier ecosystem</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://news.microsoft.com/source/2026/11/17/microsoft-ignite-2026-empowering-human-ambition-intelligence-and-trust/" target="_blank" rel="noopener">Microsoft Source — Ignite 2026 announcements roundup</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/" target="_blank" rel="noopener">GitHub Changelog — MAI Code 2 and MAI Code 2 Flash in GitHub Copilot</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/" target="_blank" rel="noopener">GitHub Changelog — Copilot Fusion updates</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.blog/changelog/month/11-2026/" target="_blank" rel="noopener">GitHub Changelog — November 2026 (MAI-Code-1.1-Flash deprecation notice)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.theverge.com/tech/1035766/microsoft-just-announced-a-bunch-of-new-ai-models" target="_blank" rel="noopener">The Verge — Microsoft just announced a bunch of new AI models</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.aitimes.com/news/articleView.html?idxno=217511" target="_blank" rel="noopener">AI Times (Korean) — MS launches MAI Code 2</a>
</div>

<div class="article-keypoints">
<ul>
<li>Microsoft AI shipped seven in-house models at Ignite 2026 on November 17, covering coding, security, image, voice, transcription and decisions</li>
<li>MAI Code 2 (Pro and up) and MAI Code 2 Flash (all plans, including Free) are live in GitHub Copilot's model picker</li>
<li>"98% of GPT-6.1 Sol at 40% of the cost" is Microsoft's own four-benchmark average, priced at a 50% promotion</li>
<li>New models auto-enable for Copilot Business/Enterprise by default; MAI-Code-1.1-Flash retires December 18</li>
<li>MAI Code 2 API pricing, Azure regions for previews and the promotion end date remain unconfirmed</li>
</ul>
</div>
