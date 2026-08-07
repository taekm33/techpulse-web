---
draft: true
title: "OpenAI's Unreleased 'Astra' Model Solves 10 Long-Standing Math Problems for $2,000"
summary: "OpenAI announced that an internal build of its next major model, Astra, cracked ten open problems spanning group theory, sphere packing, and quantum complexity — each unsolved for over a decade — and published machine-checkable Lean 4 proofs for every result."
category: "ai-news"
date: "2026-08-02"
readingTime: 5
tags: ["OpenAI", "Astra", "mathematics", "Lean4", "AI-research"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> OpenAI published a 249-page paper on August 1, 2026, crediting an unreleased internal build of its next model family — now officially named Astra — with solving ten open problems in mathematics and theoretical computer science. Every result comes with a machine-checkable Lean 4 certificate posted to GitHub. Total compute cost across all ten proofs: roughly $2,000 at API rates.
</div>

## What Happened

On August 1, 2026, OpenAI simultaneously published a blog post and a 249-page technical manuscript titled *Ten Advances in Mathematics and Theoretical Computer Science*. The results were produced by an internal, as-yet-unreleased build of Astra — the name OpenAI confirmed publicly for the first time. Each of the ten problems had remained open for at least a decade; most had resisted resolution for far longer.

The headline result is the **first explicit construction of a non-sofic group**: a finitely presented infinite group that resists approximation by finite symmetric groups in the sense formalized by mathematician Mikhail Gromov in 1999. No mathematician or computer had produced such a construction in the 27 years since Gromov introduced the sofic concept.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">10</span>
<span class="stat-label">open math problems solved</span>
</div>
<div class="stat-item">
<span class="stat-number">$2,000</span>
<span class="stat-label">total API compute cost</span>
</div>
<div class="stat-item">
<span class="stat-number">27 yrs</span>
<span class="stat-label">non-sofic group problem was open</span>
</div>
<div class="stat-item">
<span class="stat-number">249 pp.</span>
<span class="stat-label">published technical manuscript</span>
</div>
</div>

## The Ten Results at a Glance

| Field | Result |
|-------|--------|
| Group Theory | First explicit non-sofic group construction (open since 1999) |
| Operator Algebras | Disproof of Connes's rigidity conjecture |
| Geometry | Proof of Ehrhart's volume conjecture |
| Extremal Combinatorics | Three Erdős open problems (#183, #146, #180) resolved |
| Sphere Packing | First improvement to high-dimensional upper bound since 1978 |
| Quantum Complexity | Parallel repetition theorem for two-player quantum games |
| Circuit Complexity | New lower bounds for computing the permanent |

## Why Lean 4 Certificates Change the Conversation

Previous AI math claims asked the community to trust a leaderboard number. Here, every proof is formalized in Lean 4 — a machine-checkable proof language — so any researcher can run the verifier independently. OpenAI also released each model's full chain-of-thought walkthrough, making the reasoning auditable rather than opaque.

Mathematician Thomas Bloom of the University of Manchester, who co-authored the human-written writeup of OpenAI's earlier unit-distance disproof, commented on X that the non-sofic construction "ranks above the unit distance counterexample" in significance. Set theorist Elliot Glazer, who led development of the FrontierMath benchmark, called it "probably the most important math result yet produced with AI assistance."

<div class="article-callout tip">
<strong>What is Lean 4?</strong> Lean 4 is a formal proof assistant that converts mathematical arguments into a language a computer can verify step-by-step. When a proof is formalized in Lean, no human judgment is needed to check it — the software either accepts or rejects the argument. This makes AI-generated math results verifiable in a way that benchmark screenshots are not.
</div>

## Political Timing: Astra and the New Federal Review Framework

The date choice appears deliberate. Executive Order 14409, signed June 2, 2026, gave NSA, CISA, and the Treasury 60 days to design a classified benchmarking process and a voluntary pre-release review framework for "covered frontier models." That 60-day clock expired on August 1 — the same day OpenAI chose to reveal Astra's name and results publicly. CEO Sam Altman demonstrated Astra directly to Washington policymakers during the same week. Astra is widely expected to be among the first models subjected to the new federal review process before any public release.

<div class="article-callout info">
<strong>What about the Millennium Prize Problems?</strong> OpenAI researcher Noam Brown confirmed: "Sadly, no Millennium Prize Problems (yet)." The ten solved problems each stood open for at least a decade — some for over half a century — but none carry the $1 million Clay Institute bounty attached to the seven Millennium Problems.
</div>

## Competitive and Scientific Implications

This release positions Astra as a direct answer to Google DeepMind's AlphaProof and AlphaEvolve lineage in AI-assisted mathematics. It also sets a new competitive benchmark: Paul Erdős's open-problems catalog, which mathematicians had chipped away at by hand for 30+ years, now has three entries resolved by a single model run.

OpenAI simultaneously announced the **ChatGPT for Academic Researchers** program, granting 100,000 scientists free access to frontier models through 2027 — a move that deepens its ties to the scientific community while concentrating research infrastructure on its own platform.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Astra (OpenAI's unreleased next flagship) solved 10 decade-old math problems in one run for ~$2,000</li>
<li>All proofs are Lean 4 certified and machine-checkable — a step beyond typical AI benchmark claims</li>
<li>The non-sofic group construction closes a 27-year-old problem in group theory</li>
<li>Astra's public release date is unannounced; it is expected to be the first model reviewed under new US federal AI oversight rules</li>
<li>OpenAI is giving 100,000 academic researchers free access to frontier models through 2027</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://openai.com/index/ten-advances-in-mathematics/" target="_blank" rel="noopener">OpenAI announcement — Ten advances in mathematics and theoretical computer science</a><br/>
· <a href="https://github.com/openai/ten-proofs" target="_blank" rel="noopener">OpenAI GitHub — Lean 4 formal certificates (openai/ten-proofs)</a><br/>
· <a href="https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups" target="_blank" rel="noopener">The Next Web — coverage of Astra's ten math proofs</a><br/>
</div>
