---
title: "Anthropic Releases FlashProve: An Open-Source Prototype That Cryptographically Proves Which Model Wrote a Reply"
summary: "Anthropic has published FlashProve, an Apache 2.0 research prototype that uses zkSNARKs to prove an AI reply came from a committed set of model weights without revealing those weights. On a 4-bit Llama 4 Maverick (400B-parameter MoE), one H100 generates proofs at about 110 tokens per second, with roughly 19 MB of proof per 1,024-token request that a CPU can check in about 17 to 21 seconds. The catch: a 1,024-token context cap, an integer-model and greedy-decoding assumption, an unmaintained repository, and no deployment plans. A public-source analysis of what it proves, what it does not, and what builders can do now."
category: "ai-news"
date: "2026-11-04"
readingTime: 6
tags: ["Anthropic", "FlashProve", "zkSNARK", "Provable Inference", "AI Security", "Open Source"]
---

<div class="article-tldr">
Anthropic's Frontier Red Team released <strong>FlashProve</strong>, a <a href="https://github.com/anthropics/FlashProve" target="_blank" rel="noopener">research prototype on GitHub</a> under <strong>Apache 2.0</strong>. It lets a model provider publish a hidden commitment to its weights and then attach a <strong>zero-knowledge proof</strong> to each reply showing that the committed model produced it. Anthropic reports that for a 4-bit <strong>Llama 4 Maverick</strong> (400B-parameter mixture of experts), a single H100 proves at about <strong>110 tokens/second</strong>, each 1,024-token request yields a proof of about <strong>19 MB</strong>, and verification runs on a CPU in roughly <strong>17–21 seconds</strong>. TechCrunch reports there are no plans to deploy it at Anthropic or any other lab.
</div>

This is an analysis of public materials: Anthropic's research post, technical report and repository documentation, plus TechCrunch's coverage. We did not build the code or generate or check any proofs.

## Who should care

- **Teams buying model access through routers or resellers.** Today you cannot confirm the model you paid for is the one answering. This is a working sketch of how that could change.
- **Model evaluators, auditors and policy staff.** The post frames provable inference as a way to confirm the evaluated model is the served model, and that only approved models are served.
- **Security engineers running inference.** One stated use case is detecting a compromised server, or a substituted model, slipping responses into genuine traffic.
- **Everyday Claude users.** Nothing changes for now.

## What Anthropic actually released

The post, <a href="https://www.anthropic.com/research/provable-inference" target="_blank" rel="noopener">"Progress on provable inference for large language models,"</a> carries a Nov. 2, 2026 date; <a href="https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/" target="_blank" rel="noopener">TechCrunch</a> describes it as published Tuesday, Nov. 3. Co-authors include researchers affiliated with EPFL, MIT and StarkWare. Anthropic lists five artifacts: the post, a <a href="https://assets.claude.com/a492b1fea80e6dcfe4e908ed77bd44961f8c02c2.pdf" target="_blank" rel="noopener">technical report</a>, a protocol specification written by Claude, code (a CUDA prover, a fast C++ verifier and a Lean verifier), and Lean 4 proofs of the top-level security statements with a visualizer.

<div class="article-stats">
<strong>Model shown</strong> Llama 4 Maverick, 400B MoE, 4-bit (~232 GB)<br/>
<strong>Prover throughput</strong> ~110 tokens/s of prefill on one H100, batches of 24 requests<br/>
<strong>Overhead</strong> ~70–95x the GPU time vLLM needs for the same prompt length<br/>
<strong>Proof size</strong> ~19 MB per 1,024-token request<br/>
<strong>Verification</strong> no GPU; ~17 s on 24 threads, ~21 s single-threaded (as stated in the post)<br/>
<strong>Commitment</strong> ~39 minutes once per model; re-commit after ~16 million requests<br/>
<strong>Context limit</strong> 1,024 tokens<br/>
<strong>License</strong> Apache 2.0 for code, Lean proofs and docs<br/>
<strong>Repo status</strong> v0.16.0, "not maintained, not accepting contributions"
</div>

Anthropic says Claude produced the optimizations that make the system substantially faster than earlier open-source efforts, which it describes as orders of magnitude slower. Because Claude's design choices can be hard to evaluate, the team says it pinned the security claims to auditable Lean statements. The post also notes that Anthropic's public roadmap goal of a provable-inference prototype by Sept. 30, 2026 was met by a <strong>separate</strong> project that signs inference traffic and recomputes it on a trusted server; FlashProve pursues the same goal by a different route.

## Read the fine print: what a passing proof means

The repository is unusually blunt about scope. Per its <a href="https://github.com/anthropics/FlashProve/blob/main/integrations/README.md" target="_blank" rel="noopener">integration guide</a>, a pass means only that, under the integer model committed to a given commitment ID, the checked tokens meet the acceptance policy.

1. **It does not tell you which model was committed.** Whether the commitment matches the advertised model is a separate trust problem. The docs say never to take the commitment ID from the server you are checking.
2. **It proves an integer approximation under greedy decoding.** Sampled outputs from a floating-point engine can diverge. A looser "clipped gap" policy returns <code>WITHIN LIMITS</code> rather than <code>YES</code>, which the docs say "says much less."
3. **The fast verifier is tested, not proven.** The Lean theorems cover the protocol and the Lean verifier; the guide states that no theorem covers <code>cp_verify</code> or the Python scripts.
4. **The serve-then-prove pipeline has not run live.** The <a href="https://github.com/anthropics/FlashProve/blob/main/guide/how-it-works.md" target="_blank" rel="noopener">how-it-works guide</a> says serving with vLLM and proving afterward "has not run live as one service on a trained model."
5. **Side channels and long contexts are out of scope.** Timing attacks are not addressed, and 1,024 tokens is far below typical chat context.

## Unconfirmed and speculative (kept separate)

- **Production use.** Anthropic calls this "intermediate progress, and not a completed research agenda." Whether proofs will ever ship with the Claude API is unconfirmed.
- **Industry adoption.** No other provider has said it will publish weight commitments.
- **Independent benchmarks.** All speed and size figures are Anthropic's; no third-party reproduction has been published yet.
- **Regulatory pull.** The post sketches regulators using proofs for model approval and compute pacing. We are not aware of any current rule that requires this; treat it as a proposal.
- **Cost in practice.** The software is free and available worldwide, but the prover needs a dedicated H100 80 GB with CUDA 13.2. Cloud pricing for that varies by provider and is not addressed in the materials.

## What it means for builders

The interesting part is not speed; it is that a zero-knowledge approach now works on a 400B-parameter MoE with released code. If routing marketplaces and enterprise buyers start asking "prove it," this is the kind of mechanism they would point to. For now, the 70–95x overhead and 1,024-token cap make it a research and audit tool, not something you would bolt onto a production API.

<div class="article-callout tip">
<strong>Practical next steps</strong><br/>
1. <strong>Build the verifier.</strong> Route 1 in the README needs only Linux, g++ 13+ and under 2 GB of RAM to check a stored example proof. Record both the exit code and the last line.<br/>
2. <strong>Brief your security team on trust anchors.</strong> A passing proof is only as good as where the commitment ID came from. Write that into your threat model.<br/>
3. <strong>Tighten router contracts now.</strong> Until proofs exist, ask resellers for per-request model logs and audit rights.<br/>
4. <strong>Have an H100?</strong> Start with the synthetic small-model route (about 29 minutes to build, under a minute to run). The real Maverick route needs 330 GB of RAM and 245 GB of disk.<br/>
5. <strong>Treat vendor numbers as claims.</strong> Re-measure on your own hardware before citing them.
</div>

## Limitations

This piece relies on Anthropic's post, technical report and repository README and guides, and on TechCrunch, all checked on Nov. 4, 2026. No code was run. The post's Nov. 2 date and the reported Nov. 3 publication may reflect time zones; we could not confirm. The repository is an unmaintained artifact, so its documentation may not be updated.

<p><em>Last checked 2026-11-04.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.anthropic.com/research/provable-inference" target="_blank" rel="noopener">Anthropic — Progress on provable inference for large language models (Nov. 2, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://assets.claude.com/a492b1fea80e6dcfe4e908ed77bd44961f8c02c2.pdf" target="_blank" rel="noopener">Anthropic — FlashProve technical report (PDF)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/anthropics/FlashProve" target="_blank" rel="noopener">GitHub anthropics/FlashProve — README (performance, requirements, license)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/anthropics/FlashProve/blob/main/integrations/README.md" target="_blank" rel="noopener">FlashProve integration guide — what a pass means</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/anthropics/FlashProve/blob/main/guide/how-it-works.md" target="_blank" rel="noopener">FlashProve — How it works</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/" target="_blank" rel="noopener">TechCrunch — Anthropic is working on a system to prove AI models' identity (Nov. 3, 2026)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Anthropic open-sourced FlashProve (Apache 2.0), a zkSNARK prototype proving a reply came from committed, hidden weights</li>
<li>Company figures on 4-bit Llama 4 Maverick: ~110 tokens/s proving on one H100, ~19 MB per 1,024-token request, ~17–21 s CPU verification</li>
<li>A pass does not identify which model was committed; the commitment ID must come from a trusted channel</li>
<li>Limits: 1,024-token context, integer model with greedy decoding, unmaintained repo, no deployment plans per TechCrunch</li>
<li>Useful now as an audit and research tool; for production, push routers for model logs and audit rights</li>
</ul>
</div>
