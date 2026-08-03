---
title: "OpenAI's Astra Solves 10 Decade-Old Math Problems With Machine-Verifiable Lean 4 Proofs"
summary: "OpenAI's unreleased Astra model has cracked ten long-standing open problems in mathematics and theoretical computer science, publishing machine-checkable Lean 4 certificates on GitHub — a structural leap beyond social validation that changes how AI math results can be trusted."
category: "ai-news"
date: "2026-08-03"
readingTime: 5
tags: ["OpenAI", "Astra", "mathematics", "Lean4", "AI research"]
---

<div class="article-tldr">
OpenAI's internal Astra model solved 10 open math problems — some unsolved for 27+ years — and published all proofs as machine-verifiable Lean 4 certificates on GitHub under Apache 2.0. Total compute cost: ~$2,000 at Sol API rates. The mathematician who debunked OpenAI's false 2025 math claim independently called this result "big news."
</div>

## What Happened

On August 1, 2026, OpenAI published a 249-page technical manuscript announcing that an internal version of its next major model, **Astra**, had produced ten new results in mathematics and theoretical computer science. Each result ships with a Lean 4 machine-checkable certificate — publicly available on OpenAI's GitHub under an Apache 2.0 license — meaning any reader with a laptop can independently verify the proofs without specialized expertise or waiting for peer review.

Astra is OpenAI's unreleased next flagship, which the company describes as a "next major model family." Industry observers expect it to be positioned as GPT-6 or a high-capability tier above the current GPT-5.6 Sol/Terra/Luna lineup.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-number">10</span>
    <span class="stat-label">Open problems solved</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">~$2,000</span>
    <span class="stat-label">Total compute cost (Sol API rates)</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">249 pages</span>
    <span class="stat-label">Technical manuscript length</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">27 years</span>
    <span class="stat-label">Longest open problem solved (non-sofic group)</span>
  </div>
</div>

## Ten Results Across Six Mathematical Domains

The breadth of the problems distinguishes this release from earlier AI math milestones, which typically focused on a single catalogue or discipline.

| Domain | Key Result |
|--------|-----------|
| Group Theory | Constructed a non-sofic group — a 27-year open problem |
| von Neumann Algebras | Disproved Connes's rigidity conjecture |
| High-Dimensional Geometry | First sphere-packing density upper bound improvement since 1978 |
| Quantum Complexity | Proved a parallel repetition theorem for two-player quantum games |
| Extremal Combinatorics | Three Erdős catalogue problems resolved, including #183; Ehrhart's volume conjecture proved |
| Lattice Cryptography | New lower bounds on circuit complexity of computing the permanent |

## Why Lean 4 Verification Changes Everything

<div class="article-callout tip">
<strong>Machine verification vs. social validation</strong>
Every prior AI-mathematics milestone relied on social validation: gathering a group of expert mathematicians to read, evaluate, and co-sign an argument. This is strong, but it depends on expert availability and can take months. A Lean 4 certificate is structurally different. Lean 4's trusted kernel gives a binary verdict — the proof either compiles or it doesn't. No PhD required, no review backlog, and no dependency on any lab's reputation. Any researcher or developer can run the check themselves in minutes. This is the first time the AI math field has a publicly reproducible, machine-checkable scoreboard that any party can audit.
</div>

OpenAI published the 249-page manuscript alongside a 62-page walkthrough describing how each argument came together. Every Lean 4 certificate file is freely available on GitHub, and the Apache 2.0 license permits commercial use and derivative works.

## The 2025 Failure and Why This Is Different

This announcement is inseparable from a prominent controversy. In October 2025, then-OpenAI VP Kevin Weil claimed on X that GPT-5 had solved ten Erdős problems. The claim collapsed within days when Thomas Bloom — who maintains erdosproblems.com and was asked to verify the results — found that the model had retrieved existing solutions from the mathematical literature, not produced original proofs. He called the announcement "a dramatic misrepresentation." Google DeepMind CEO Demis Hassabis described it as "embarrassing." Weil departed OpenAI in April 2026.

The August 2026 Astra announcement differs in three structural ways from the 2025 false claim: the problems span six distinct mathematical domains rather than a single catalogue; all proofs are formalized in Lean 4 with machine-checkable certificates that any reader can run; and Bloom himself — the researcher who dismantled the 2025 announcement — called these results "big news" and rated them more significant than OpenAI's May 2026 Erdős unit distance result.

<div class="article-callout info">
<strong>Regulatory timeline and academic access</strong>
Astra is expected to be among the first models evaluated under the U.S. government's voluntary pre-release review framework established by Executive Order 14409, which requires developers to submit advanced AI models for federal safety and risk assessment before public release. No public release date has been announced. Separately, OpenAI announced it is providing 100,000 academic researchers with free access to its frontier models through 2027 — deepening its ties to the scientific community while the most powerful models remain on its own platform.
</div>

## The Competitive Picture

Before August 1, the headline in AI-assisted mathematics belonged to DeepMind's AlphaProof Nexus, which solved nine Erdős problems with Lean-verified proofs in May 2026. Astra answered with ten, across a wider range of mathematical domains, using a model not purpose-built for formal reasoning.

Crucially, both labs now use Lean 4 as their standard verification backend. The AI mathematics field has converged on a single machine-checkable scoreboard — one where results can be compared across organizations without requiring any party to trust another's word.

## The $2,000 Signal

OpenAI's head of mathematics research, Sébastien Bubeck, described each result as "beautiful" on X. Researcher Noam Brown added a detail that may be more significant than the headline count: *"We didn't spend a lot on each problem. It's possible to push test-time compute much further."*

The implication is direct: if ten results spanning six mathematical domains cost approximately $2,000, the marginal cost of additional breakthroughs is low and declining. OpenAI chief scientist Jakub Pachocki has framed the company's broader goal as a research-intern-level AI scientist by September 2026 and a fully autonomous AI researcher by early 2028. Ten Lean-verified results across six domains is the most concrete evidence yet that the trajectory is real.

The OpenAI announcement cited the Leiden Declaration on AI and Mathematics — published June 2, 2026, and endorsed by the International Mathematical Union with over 3,000 signatories including Terence Tao and Peter Scholze — explicitly crediting Astra as the source of the mathematical ideas rather than the human researchers who prepared the manuscripts. That disclosure stance directly addresses one of the declaration's five identified risks from AI in mathematics.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
  <li>OpenAI's Astra solved 10 open math problems with machine-verifiable Lean 4 proofs — anyone can independently check the results on GitHub</li>
  <li>~$2,000 total compute cost signals the potential for radically affordable AI-assisted mathematical research at scale</li>
  <li>Thomas Bloom — who debunked OpenAI's false 2025 claim — independently endorsed this result as significant</li>
  <li>Astra surpasses DeepMind AlphaProof Nexus (9 results) across a broader mathematical domain set; both labs now use Lean 4 as their standard verification backend</li>
  <li>Federal pre-release review likely before public launch; no release date announced; academic access to frontier models expanding through 2027</li>
</ul>
</div>
