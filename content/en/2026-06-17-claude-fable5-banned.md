---
title: "Claude Fable 5 Banned 76 Hours After Launch: What the US Government Actually Ordered"
summary: "Anthropic's most capable public model, Claude Fable 5, along with enterprise-only Mythos 5, was disabled worldwide on June 12 under a US Commerce Department export control directive. Here's the timeline, the dispute, and what it means for builders."
category: "ai-news"
date: "2026-06-17"
readingTime: 5
tags: ["Anthropic", "Claude", "AIRegulation"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/jfoVr4g6HvU" title="Anthropic disables top AI models after US foreign access order" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> Anthropic launched Claude Fable 5 (a guardrailed, publicly available Mythos-class model) and the enterprise-only Mythos 5 on June 9. On June 12, the US Commerce Department issued an export control directive ordering Anthropic to cut off all foreign nationals from both models, citing national security. Because Anthropic couldn't verify nationality in real time, it disabled both models for every customer worldwide. Anthropic disputes the severity of the underlying jailbreak finding, calling it a "narrow, non-universal" bypass already replicable on other public models like GPT-5.5.
</div>

On June 9, Anthropic released Claude Fable 5 — the first time it brought a Mythos-class model, previously reserved for a handful of cybersecurity partners, to the general public — alongside the more capable, enterprise-restricted Mythos 5. Both were touted as state-of-the-art across industry benchmarks. Seventy-six hours later, both were gone.

At 5:21 p.m. ET on June 12, Anthropic received a directive from the US Commerce Department citing "national security authorities," instructing it to immediately suspend access to Fable 5 and Mythos 5 for "any foreign national, whether inside or outside the United States, including foreign national Anthropic employees." With no practical way to verify nationality per-request, Anthropic disabled both models for its entire global customer base. All other Claude models — Opus 4.8, Sonnet 4.6, Haiku — remained unaffected.

<div class="article-stats">
<div><strong>76 hours</strong><br>Time from launch to shutdown</div>
<div><strong>5:21pm ET</strong><br>When the directive arrived (June 12)</div>
<div><strong>0</strong><br>Specific technical details disclosed by the government</div>
</div>

## The government's claim vs. Anthropic's rebuttal

The Commerce Department's letter reportedly didn't specify the exact vulnerability — only that it had become aware of a method to "jailbreak" Fable 5. According to Anthropic, the only evidence shared was verbal, describing a narrow bypass that essentially amounted to asking the model to read a specific codebase and identify software flaws.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body">
<strong>Anthropic's official statement</strong><br>
"The vulnerabilities all appear relatively simple, and we have found that other publicly-available models are able to discover them as well without requiring a bypass... If this standard was applied across the industry, we believe it would essentially halt all new model deployments for all frontier model providers."
</div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>Context worth knowing</strong><br>
Fable 5 and Mythos 5 build on Claude Mythos Preview, released in April under "Project Glasswing," a cybersecurity initiative that gave select security firms limited access. Anthropic was already in a separate standoff with the Department of Defense, which had labeled it a "supply chain risk" earlier this year — a designation Anthropic is contesting in court.
</div>
</div>

## Timeline

| Time | Event |
|---|---|
| Jun 9 | Claude Fable 5 / Mythos 5 publicly released |
| Jun 12, 1:00pm ET | Commerce Dept. calls Anthropic to order disablement |
| Jun 12, 5:21pm ET | Formal export control directive received |
| Jun 12, evening | Anthropic disables both models for all customers worldwide |
| Jun 15 | Senior Anthropic staff meet with the administration to seek resolution |

## What builders and enterprise users should do

<div class="article-keypoints">
<ul>
<li>Any workflow built on Fable 5 or Mythos 5 needs an immediate fallback to Opus 4.8 or another available model.</li>
<li>Teams running Mythos via direct API access reported costs as high as $300–600/hour — factor that into any migration plan.</li>
<li>This episode is already being cited as a precedent for governments unilaterally pulling a "too powerful" frontier model. Diversifying away from single-model, single-vendor dependence is now a more concrete operational risk to plan for.</li>
</ul>
</div>

Anthropic calls the episode a "misunderstanding" and says it's working to restore access as quickly as possible, but as of this writing no restoration timeline has been announced.

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>Official Sources &amp; Further Reading</strong><br>
— <a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener noreferrer">Anthropic's official statement on the suspension</a><br>
— <a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener noreferrer">CNBC: Anthropic disables access to Fable 5, Mythos 5</a><br>
— <a href="https://cyberscoop.com/us-government-anthropic-fable-5-mythos-5-export-controls/" target="_blank" rel="noopener noreferrer">CyberScoop: full breakdown of the directive and industry reaction</a>
</div>
</div>
