---
title: "Anthropic Launches Claude Science Beta: An AI Workbench Built to Compress Years of Research Into Days"
summary: "Anthropic released Claude Science on June 30, a dedicated AI workbench for scientists that unifies 60-plus scientific databases, multi-agent orchestration, and on-premises compute management into a single research environment. Early adopters report completing literature reviews in a fraction of the time and running genomics analyses ten times faster."
category: "ai-news"
date: "2026-07-02"
readingTime: 7
tags: ["Anthropic", "Claude Science", "AI research", "life sciences", "multi-agent"]
---

<div class="article-tldr">
Anthropic launched Claude Science in beta on June 30, 2026 — a full-stack AI workbench for researchers that combines 60-plus scientific databases, specialist sub-agents, a built-in reviewer agent, and flexible compute management in a single environment. It runs on users' own infrastructure (laptop, Linux box, or HPC cluster), so sensitive data never leaves the lab. Backed by the $400 million acquisition of Coefficient Bio and the hiring of Nobel laureate John Jumper, the platform is Anthropic's most substantial push into life sciences to date. Grants of up to $30,000 in credits are available for research projects; applications close July 15, 2026.
</div>

Last fall, Anthropic announced a push into life sciences. Six months later, Claude Science is the result — not a new model, but a research environment designed to eliminate the context-switching and pipeline friction that consume a scientist's day.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/idtMsa_1yNk" width="100%" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Introducing Claude Science (now in beta)"></iframe>
</div>

## The Problem: Research Tools Are Fragmented

A typical day for a computational biologist involves shuttling between PubMed, Jupyter, R, an HPC terminal, and a roster of domain databases — each with its own schema and query language. Submitting a cluster job, waiting for results, and pulling them back often takes longer than the analysis itself. Claude Science collapses these steps into a single conversation, from literature review through multi-step execution to figure generation and manuscript refinement. Every output carries a full reproducibility trail: the exact code, environment, and message history that produced it.

## How It Works: Three-Tier Agent Architecture

<div class="article-stats">
<strong>Built-in databases & tools</strong> 60+<br/>
<strong>Supported domains</strong> Genomics, single-cell, proteomics, structural biology, cheminformatics<br/>
<strong>Underlying model</strong> Claude Opus 4.8 (no special gating or new model)<br/>
<strong>Platforms</strong> macOS · Linux (local, SSH, HPC login node)<br/>
<strong>Grant size</strong> Up to $30,000 in credits per project (up to 50 projects)
</div>

Claude Science runs three tiers of agents working in concert:

- **Coordinating Agent**: Interprets a plain-language research question, devises a strategy, and delegates to the right specialist agent from a library of 60-plus curated skills and connectors.
- **Specialist Agents**: Query and synthesize across domain-specific sources — UniProt, PDB, Ensembl, ClinVar, ChEMBL, GEO, and more — and tap into NVIDIA's BioNeMo Agent Toolkit for access to life sciences models including Evo 2, Boltz-2, and OpenFold3.
- **Reviewer Agent**: Runs continuously, flagging incorrect citations, untraceable numbers, and figures that don't match their underlying code — and self-correcting as the pipeline runs.

Researchers can fork a session at any point to compare two approaches without losing the original thread. Because agents hold context in memory across a running session, even massive datasets only need to be loaded once.

<div class="article-callout tip">
Claude Science runs on your lab's own infrastructure — your laptop, Linux server, or HPC login node. Large or sensitive datasets never leave your systems; only the context needed for each analysis step is sent to Claude.
</div>

## Early Results: Cutting Years Down to Weeks

Anthropic shared three concrete cases from the beta period:

**Manifold Bio** (tissue-targeting medicines): The company used Claude Science to nominate targets for its latest experiments, assessing surface expression, trafficking, and safety for hundreds of targets — end-to-end, incorporating proprietary internal data as context — in a workflow that previously required manual coordination across multiple tools.

**Jérôme Lecoq, Allen Institute (neuroscientist)**: Built a multi-agent "computational review template" with about 20 custom skills. Sub-agents read thousands of papers, extracted central claims and key quantitative findings into an evidence database, then constructed a narrative review section by section — each section written by a specialized sub-agent, with actor-critic pairs checking accuracy and citation fidelity. Reviews that once took his team **up to two years** are now produced in far less time, many running over 100 pages.

**Stephen Francis, UCSF Brain Tumor Center (epidemiologist)**: Used Claude Science to accelerate molecular epidemiology studies of glioma. Comprehensive germline analyses across multiple approaches now complete in **roughly one-tenth the previous time**. His group independently validated the results.

## What's Behind It: A $400M Acquisition and a Nobel Laureate

Two strategic moves set the stage for Claude Science.

In April, Anthropic acquired **Coefficient Bio** for approximately $400 million in stock. The stealth startup — fewer than ten employees, mostly former Genentech computational biologists — brought deep expertise in protein design and biomolecule modeling.

On June 19, **John Jumper** announced he was leaving Google DeepMind for Anthropic. Jumper shared the 2024 Nobel Prize in Chemistry with DeepMind's Demis Hassabis for co-developing AlphaFold, the protein structure prediction system. Recruiting one of the field's most decorated scientists signals that Anthropic's science ambitions extend well beyond tooling.

<div class="article-callout info">
Claude Science is not a new AI model. It runs on existing Claude Opus 4.8 with no special access or gating. The differentiation lies in the research environment, agent orchestration, and the 60-plus pre-configured scientific databases and tools — not in underlying model capability.
</div>

## Availability and Grants

Claude Science beta is available at **claude.com/science** for all **Pro, Max, Team, and Enterprise** plan users on macOS and Linux. Team and Enterprise admins must enable it first. Academic and nonprofit research labs can apply for discounted Team plan seats.

**AI for Science Grants**: Anthropic is funding up to 50 projects with grants of up to $30,000 in Claude Science credits. Modal is also providing up to $2,000 in compute for select projects. Applications are open through **July 15, 2026**, with award notifications by July 31. Projects run September 1 – December 1, 2026. The early focus is on biology and biomedical research — apply at the link below.

## Why It Matters

Claude Science is Anthropic's attempt to occupy the operating layer for scientific research the way Claude Code has for software development. Rather than selling model access, it's building the environment researchers work in — which makes switching costs higher and domain-specific feedback loops tighter.

The harder question is whether the 10x productivity claims will hold across diverse research contexts beyond the beta cohort. Independent replication studies and peer-reviewed benchmarks will be the real test. For now, the early signals — a Nobel laureate hire, a $400M acquisition, and credible early-adopter case studies — suggest Anthropic is serious about this space.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.anthropic.com/news/claude-science-ai-workbench" target="_blank" rel="noopener">Anthropic — Claude Science, an AI workbench for scientists (Jun 30, 2026)</a><br/>
· <a href="https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/" target="_blank" rel="noopener">TechCrunch — Claude Science bets on workflow, not a new model, to win over scientists</a><br/>
· <a href="https://thenextweb.com/news/john-jumper-nobel-deepmind-leaves-anthropic-alphafold" target="_blank" rel="noopener">The Next Web — Nobel laureate John Jumper leaves Google DeepMind for Anthropic</a><br/>
· <a href="https://www.statnews.com/2026/06/30/anthropic-release-claude-science-ceo-dario-amodei/" target="_blank" rel="noopener">STAT News — Anthropic releases Claude Science, aimed at researchers and pharma</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic launched Claude Science beta on June 30 — a full-stack AI workbench for researchers, free for Pro, Max, Team, and Enterprise plan subscribers</li>
<li>60-plus scientific databases and tools unified in one environment; three-tier multi-agent system handles planning, execution, and verification</li>
<li>All data processing happens on users' own infrastructure — sensitive datasets never leave the lab</li>
<li>Early results: Allen Institute reduced 2-year literature reviews to weeks; UCSF epidemiology analyses completed in one-tenth the prior time</li>
<li>Backed by $400M Coefficient Bio acquisition and Nobel laureate John Jumper's move from Google DeepMind</li>
<li>AI for Science grants: up to $30,000 per project — applications close July 15, 2026</li>
</ul>
</div>
