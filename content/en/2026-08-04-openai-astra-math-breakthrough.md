---
title: "OpenAI's Astra Cracks 10 Unsolved Math Problems for Just $2,000"
summary: "OpenAI's unreleased Astra model solved 10 longstanding mathematical problems — including a 25-year-old open question in group theory — at a compute cost of roughly $2,000, with all proofs fully machine-verified in Lean 4."
category: "ai-news"
date: "2026-08-04"
readingTime: 5
tags: ["OpenAI", "Astra", "mathematics", "AI research", "Lean4"]
---

<div class="article-tldr">
<strong>TL;DR</strong> — OpenAI's yet-to-be-released model Astra solved 10 mathematical problems that had gone unsolved for a decade or more, at a total compute cost of ~$2,000. Every proof is fully machine-verified using Lean 4 and published on GitHub under Apache 2.0. Mathematicians are calling it the most impressive display of AI mathematical reasoning to date.
</div>

## AI Just Rewrote Math History for the Price of a Used Laptop

On August 1, 2026, OpenAI announced that Astra — its next major model still awaiting public release — had generated solutions to **10 longstanding problems** spanning mathematics and theoretical computer science. Each problem had seen no definitive progress for at least a decade.

Alongside the announcement, OpenAI released a **249-page manuscript** and Lean 4 proof certificates on GitHub under the Apache 2.0 license. The repository's "sorry" count — a Lean marker for incomplete steps — stands at **zero**, meaning every single step across all ten formalized proofs is fully verified. Independent confirmation requires nothing more than running the certificates through the Lean compiler.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">10</span>
<span class="stat-label">Longstanding math problems solved simultaneously</span>
</div>
<div class="stat-item">
<span class="stat-number">$2,000</span>
<span class="stat-label">Total compute cost at GPT-5.6 Sol API rates</span>
</div>
<div class="stat-item">
<span class="stat-number">249</span>
<span class="stat-label">Pages in the published manuscript</span>
</div>
<div class="stat-item">
<span class="stat-number">0</span>
<span class="stat-label">Lean 4 "sorry" count — all proofs complete</span>
</div>
</div>

## What Did Astra Actually Solve?

The most attention-grabbing result is the **first explicit construction of a non-sofic group**. Since mathematician Mikhail Gromov introduced the concept of soficity in 1999, every known countable group had possessed this property. The question of whether a non-sofic group even exists has lingered for 25 years. Astra found one.

| Problem Area | Result |
|---|---|
| Group Theory | First explicit non-sofic group (open since 1999) |
| Operator Algebras | Disproof of Connes's rigidity conjecture |
| Convex Geometry | Proof of Ehrhart's volume conjecture |
| Erdős Problems | 3 solved, including Problem 183 on multicolor Ramsey numbers |
| High-Dimensional Sphere Packing | New bounds established |
| Quantum Parallel Repetition | Hardness result for closest vector problem |

Thomas Bloom, who curates the authoritative erdosproblems.com database, described the batch as "big news" — placing the ten results above the unit distance counterexample that an internal OpenAI model produced in May.

<div class="article-callout tip">
<strong>Why Lean 4 Verification Matters:</strong> Lean's logical kernel is binary — it either accepts or rejects a proof. That means Astra's results don't need committee review or expert endorsement to be validated. Anyone can run the certificates and get a definitive answer. This is a fundamentally new model for mathematical trust.
</div>

## "A Major Step for Scientific Reasoning"

OpenAI's head of mathematics research, Sebastien Bubeck, called the results "beautiful" on X. Research scientist Noam Brown — known for his work on AI poker and game-solving — described it as "a major step for scientific reasoning."

Abhishek Saha at Queen Mary University of London offered this assessment: *"Any one of them would be a significant and impressive achievement. Some are counterexamples; some are proofs — but they all involve putting together existing results in unusual and highly technical ways that no one had done before."*

Saha added that he "would not be surprised if, in two or three years, AI models can build enough new theory to solve some of the deeper questions."

<div class="article-callout info">
<strong>Context:</strong> AI mathematical discovery has been accelerating rapidly. In January 2026, a Google DeepMind team used Gemini to evaluate 700 open Erdős conjectures. In May, an OpenAI model produced the first AI-led solution to the famous unit distance problem. Last month, Claude Fable 5 found a counterexample to the Jacobian conjecture — a problem that had stood for nearly 100 years. Astra's batch of 10 is the largest single AI math announcement yet.
</div>

## The Math Community's Mixed Reaction

The announcement has not been without friction. When OpenAI initially claimed that all 10 results had seen "no progress on the main result for at least a decade," several mathematicians pushed back, noting that some problems had seen significant recent human progress. OpenAI subsequently revised its statement.

More broadly, the International Mathematical Union (IMU) formalized its concerns about AI's role in research in June through the Leiden Declaration, charging that AI companies exploit published research without permission, bypass peer review, and erode standards around proof attribution and credit.

None of the 10 results has yet undergone formal peer review, though the machine-verifiable nature of the Lean proofs provides an unusual substitute for that process.

## What's Next for Astra?

OpenAI has not announced a release date for Astra. The model must clear a federal AI safety review — a process established by executive order in June 2026 — before it can reach users. OpenAI has also not confirmed whether Astra will carry a GPT-6 designation or slot into the existing GPT-5 family.

The broader implication, however, may matter more than the product roadmap. Mathematics has long been considered a uniquely human domain — a place where intuition, creativity, and abstract reasoning converge in ways machines couldn't replicate. That assumption is eroding fast.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>OpenAI's unreleased Astra model solved 10 longstanding math problems for ~$2,000 in compute</li>
<li>All 10 proofs are machine-verified in Lean 4 with zero incomplete steps; code on GitHub (Apache 2.0)</li>
<li>Highlights include the first explicit non-sofic group and disproof of Connes's rigidity conjecture</li>
<li>Astra still awaits public release and must pass a federal AI safety review first</li>
<li>AI mathematical discovery is accelerating sharply — but tension with the academic math community is growing alongside it</li>
</ul>
</div>

The age of AI as a genuine mathematical collaborator — not just a tool — may have arrived. The question now is not whether AI can do math, but how fast it will redefine what "doing math" means.
