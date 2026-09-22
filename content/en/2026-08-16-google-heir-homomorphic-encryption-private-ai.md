---
title: "Google Open-Sources 'HEIR,' a Compiler That Runs AI on Encrypted Data"
summary: "Google has released HEIR, an open-source homomorphic-encryption (FHE) compiler toolchain. It converts trained AI models to run inference directly on encrypted inputs, so a server returns results without ever seeing the underlying data. Google shipped four working demos: recommendations, fraud detection, intrusion detection, and hotword spotting."
category: "dev-trend"
date: "2026-08-16"
draft: true
readingTime: 6
tags: ["Google", "homomorphic encryption", "FHE", "privacy", "AI infrastructure"]
---

<div class="article-tldr">
On August 14, Google unveiled <strong>HEIR</strong>, an open-source compiler for homomorphic encryption. HEIR converts an already-trained AI model so it can <strong>run inference directly on encrypted inputs</strong> — the server only ever processes ciphertext and never sees the raw data. Google paired the release with <strong>four working applications</strong>: recommendations, credit-card fraud detection, network-intrusion detection, and hotword spotting. The goal: let non-cryptographers add encrypted inference with something close to a "one-click" flow.
</div>

Google has added a new tool to its Private Computing Toolkit. On August 14, Google staff software engineer Jeremy Kun introduced <strong>HEIR</strong> (Homomorphic Encryption Intermediate Representation) on the company's official blog — an open-source compiler toolchain and development platform for homomorphic encryption. Its core capability comes down to one thing: <strong>automatically converting an AI model trained to run on plaintext into one that runs on ciphertext</strong>.

## The trade-off homomorphic encryption rewrites

The classic security dilemma is stark. Protect data with end-to-end encryption and the service provider can no longer offer features that depend on that data, such as spam or virus detection. Offer those features and the data has to be exposed to the server. In heavily regulated sectors like healthcare and finance, the conflict bites even harder.

Homomorphic encryption (FHE) fundamentally alters this. Because computation runs <strong>directly on ciphertext</strong>, a server can process encrypted inputs and return encrypted results without ever seeing the information inside. A cloud service could, for instance, serve content recommendations without knowing the user's features. There is still a cost overhead, but as Google frames it, the question has shifted from privacy-versus-capability to one of cost — and that cost is falling fast.

## The real problem HEIR solves — usability

Performance was never the only obstacle. Efficiently porting an existing program to FHE has required a team of cryptographers doing the conversion by hand. HEIR targets exactly that usability barrier. A developer writes a program in Python and annotates which values are secret; HEIR compiles the rest. Under the hood it builds on the MLIR compiler infrastructure to represent and scale complex models across multiple dialects, and it generates code for standard FHE libraries such as OpenFHE and Lattigo.

Google says that since announcing its intentions in 2023, the homomorphic-encryption community has embraced HEIR. It has become a research platform as well as a tool: cryptographers can focus on their own optimizations while reusing existing infrastructure for testing, benchmarking, and comparison. To date, four peer-reviewed publications have been built on HEIR.

<div class="article-stats">
<strong>Announced</strong> August 14, 2026 (Google official blog, Jeremy Kun)<br/>
<strong>What it is</strong> Open-source homomorphic-encryption compiler toolchain and dev platform<br/>
<strong>Foundation</strong> MLIR · targets OpenFHE and Lattigo libraries<br/>
<strong>Demo applications</strong> 4 (latency measured on single-threaded CPU)<br/>
<strong>Peer-reviewed papers built on HEIR</strong> 4<br/>
<strong>Project intentions announced</strong> 2023
</div>

## Four working applications

To show "how far homomorphic encryption has come," Google shared four private-inference applications compiled with HEIR. Source code for all of them is in the GitHub repository.

| Application | Collaboration | What it protects |
|---|---|---|
| Deep Learning Recommendation Model (DLRM) | Belfort Labs · LG · NYU | Serves recommendations without exposing user features |
| Credit-card fraud detection | Niobium · hardshell.ai | Flags fraud while hiding the underlying transaction |
| Network intrusion detection (Kitsune) | Niobium | Detects anomalies without revealing packet contents |
| Hotword detection | Belfort Labs | Recognizes wake words while protecting audio privacy |

Latency for all four is reported on a single-threaded CPU. Google says it is working with homomorphic-encryption hardware-accelerator companies — Belfort, Niobium, Cornami, and Optalysys — and plans to demonstrate their latency benefits separately in the near future.

<div class="article-callout tip">
<strong>Why it matters now</strong> As AI expands into personal and regulated data, the value of "using AI features without handing over the data" grows. HEIR is an attempt to lower the entry barrier — cryptographic expertise — down to a compiler step.
</div>

## What's left, and where it goes

It would be premature to say HEIR has reached its "one-click encrypted inference" vision. FHE's compute overhead is still large, and the latency figures are single-threaded-CPU numbers — some distance from large-scale production. But the direction is clear. As FHE's bottleneck shifts from feasibility to cost, an automated compiler layer meshing with dedicated accelerators pulls the practical arrival of privacy-preserving AI closer. That Google released this in the open also reads as a play for standards and ecosystem leadership.

<div class="article-keypoints">
<ul>
<li>Google open-sourced HEIR, a homomorphic-encryption compiler (Aug 14), that converts trained AI models to run inference on encrypted inputs.</li>
<li>Developers write Python and annotate secret values; HEIR compiles the rest. MLIR-based, with OpenFHE and Lattigo backends.</li>
<li>Four working demos — recommendations, fraud detection, intrusion detection, hotword spotting — with source published (single-threaded CPU).</li>
<li>Collaborating with FHE accelerator firms Belfort, Niobium, Cornami, Optalysys. The bottleneck is moving from "possible" to "cheap."</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/" target="_blank" rel="noopener">Google Blog — How Google is Making Private AI Practical with Homomorphic Encryption</a><br/>
<a href="https://heir.dev/" target="_blank" rel="noopener">HEIR — Official Project Site</a><br/>
<a href="https://github.com/google/heir" target="_blank" rel="noopener">GitHub — google/heir (open-source repo)</a><br/>
<a href="https://arxiv.org/abs/2508.11095" target="_blank" rel="noopener">arXiv — HEIR: A Universal Compiler for Homomorphic Encryption</a>
</div>
