---
title: "AI Finds a 'CRISPR Cousin' on Its Own: Anthropic Unveils 'ART,' a Novel Enzyme System Discovered by Claude"
summary: "Anthropic says roughly 950 Claude agents ran for 21 hours across more than 200,000 reverse transcriptases to uncover a previously undescribed enzyme system it calls ART. Its CRISPR-like repeat arrays hint at gene-editing potential, but the company also disclosed that repeating the same search failed to reproduce the find."
category: "ai-news"
date: "2026-09-24"
readingTime: 6
tags: ["Anthropic", "Claude", "AI Agents", "AI for Science", "CRISPR"]
---

<div class="article-tldr">
On September 23, Anthropic said its AI model Claude autonomously surfaced a previously uncharacterized enzyme system in bacteriophages, which it named Array-associated Reverse Transcriptases (ART). About 950 Claude agents worked for 21 hours, sifting through more than 200,000 reverse transcriptases to narrow the field to roughly 3,500 candidates. ART carries CRISPR-like repeat sequences, raising the prospect of a programmable genetic tool. But Anthropic also disclosed a reproducibility limit — rerunning the identical search did not surface the same result — laying bare both the promise and the open questions of AI-driven discovery.
</div>

Anthropic reported that its AI model Claude independently combed vast genomic data to identify an enzyme system that had not previously been characterized. The system, named Array-associated Reverse Transcriptases (ART), was found in the DNA of bacteriophages — viruses that infect bacteria. The work was released as a preprint, meaning it has not yet been peer-reviewed.

## About 950 Agents, 21 Hours

What sets this apart is that the search was driven by a swarm of AI agents rather than by people. Researchers supplied the initial prompt, high-level direction, and laboratory validation; the agents themselves handled the exploration, candidate selection, and judgment calls.

<div class="article-stats">
<strong>Agents deployed</strong> ~950 (Claude)<br/>
<strong>Time taken</strong> ~21 hours<br/>
<strong>Tokens consumed</strong> ~210 million<br/>
<strong>Data searched</strong> 200,000+ reverse transcriptases<br/>
<strong>Candidates</strong> ~3,500 → top 20 analyzed in depth
</div>

The agents scanned an enormous DNA-sequence database, investigated reverse transcriptase (RT) families, and used their own judgment to flag promising candidates. They then produced human-readable analysis reports for the 20 most compelling ones, from which the ART system emerged. The reverse transcriptase itself was already known; Claude's contribution was spotting the regularly spaced repeat array and a partner gene alongside it — features earlier genome reports had missed.

## Why the CRISPR Resemblance Matters

The ART system has three parts: a reverse transcriptase, a partner gene believed to work with it, and an array of evenly spaced DNA repeats. It is that repeat array — structurally similar to the CRISPR arrays behind modern gene editing — that drew the most attention.

| Component | Role |
|---|---|
| Reverse transcriptase (RT) | Core enzyme that copies RNA back into DNA |
| Partner gene | A gene thought to operate together with the RT |
| Repeat DNA array | Evenly spaced repeats resembling a CRISPR array |

In early experiments, the repeat array was expressed as short RNAs — hinting that, like CRISPR, it could be programmed to target specific sequences. Feng Zhang, the MIT and Broad Institute scientist who pioneered CRISPR, reviewed the findings and called it "an exciting example of how AI agents can contribute to biological discovery."

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/uhJJgc-0iTQ" title="Building more effective AI agents — Anthropic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## A Clear Limit: Reproducibility

Anthropic was candid about the caveats. When the same search was run ten more times, it failed to surface the array again. The company attributed this to the sheer scale of the search and the agents' unpredictable behavior. By contrast, in fixed tests where the DNA sequences were provided directly, detection rates exceeded 90%.

<div class="article-callout tip">
Any team looking to fold AI into a research pipeline should separate "one impressive result" from "a repeatable workflow." This case shows that large-scale autonomous search can generate genuinely new hypotheses — but reproducing and validating them still falls to people and the lab.
</div>

## What It Means

The announcement suggests AI is moving beyond organizing and summarizing information toward proposing patterns in scientific data that humans have overlooked. At the same time, the reproducibility issue and the preprint status make clear that AI discovery does not yet replace the scientific fundamentals of validation and experiment. The real question ahead is how humans verify the hypotheses these agents raise and turn them into practical applications.

<div class="article-callout info">
A candidate proposed by AI is not a "discovery" but a "target for verification." Whether ART holds real function and application value must be confirmed through further experiments and peer review.
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.anthropic.com/news/claude-discovers-novel-enzyme-system" target="_blank" rel="noopener">Anthropic — Claude discovers a novel enzyme system (official)</a><br/>
· <a href="https://thenextweb.com/news/anthropic-claude-enzyme-system-crispr-like-repeats" target="_blank" rel="noopener">The Next Web — Claude finds CRISPR-like repeats</a><br/>
· <a href="https://www.unite.ai/anthropic-says-claude-discovered-a-new-enzyme-system-resembling-crispr/" target="_blank" rel="noopener">Unite.AI — Claude discovered a new enzyme system resembling CRISPR</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic says Claude agents discovered a novel enzyme system, ART, in bacteriophages (Sept 23)</li>
<li>~950 agents, 21 hours and ~210M tokens searched 200,000+ reverse transcriptases; 20 of ~3,500 candidates analyzed in depth</li>
<li>ART's CRISPR-like repeat arrays raise the prospect of a programmable genetic tool</li>
<li>CRISPR pioneer Feng Zhang called it an "exciting example" of AI contributing to biology</li>
<li>But the identical search failed to reproduce the find over 10 reruns, and it remains a preprint — validation is still a human and lab job</li>
</ul>
</div>
