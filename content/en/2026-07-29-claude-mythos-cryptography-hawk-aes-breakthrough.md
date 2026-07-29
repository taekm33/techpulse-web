---
title: "Claude Mythos Autonomously Cracks Cryptographic Algorithms in Landmark AI Security Breakthrough"
summary: "Anthropic's Claude Mythos Preview independently discovered mathematical weaknesses in HAWK, a post-quantum signature scheme under NIST evaluation, and dramatically accelerated attacks on a reduced-round AES variant — the first time AI has autonomously found flaws that eluded years of human expert review."
category: "hot-issue"
date: "2026-07-29"
readingTime: 5
tags: ["Claude Mythos", "cryptography", "AI security", "HAWK", "AES"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: Anthropic announced on July 28, 2026 that Claude Mythos Preview autonomously discovered a flaw in HAWK — a NIST post-quantum signature candidate — halving its effective key strength in just 60 hours. The same model also improved the speed of attacks on a reduced-round AES variant by 200–800×. Neither result threatens production systems today, but the findings mark the first proven case of AI independently discovering mathematical flaws in cryptographic algorithms that survived years of expert human review.
</div>

## A Quiet Wednesday That Shook the Cryptography World

On July 28, 2026, Anthropic published research that may be remembered as a turning point in both artificial intelligence and computer security. Their frontier model, Claude Mythos Preview, did what generations of cryptanalysts working together had not: it found — on its own — a meaningful mathematical weakness in an algorithm designed to secure data against even quantum computers.

The implications extend far beyond this single result. If AI can now conduct cryptographic research at the level of the world's top experts, the entire field of how we discover, disclose, and respond to security vulnerabilities is due for a rethink.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">60 hrs</span>
<span class="stat-label">Time to discover HAWK vulnerability</span>
</div>
<div class="stat-item">
<span class="stat-number">200–800×</span>
<span class="stat-label">Speed improvement on AES attack</span>
</div>
<div class="stat-item">
<span class="stat-number">50%</span>
<span class="stat-label">Reduction in HAWK effective key strength</span>
</div>
<div class="stat-item">
<span class="stat-number">~$100K</span>
<span class="stat-label">API cost per result during development</span>
</div>
</div>

## What Happened: Two Findings That Rewrote the Playbook

### Finding 1: Breaking HAWK in 60 Hours

HAWK is one of the third-round candidate algorithms in NIST's post-quantum cryptography (PQC) standardization process — a global effort to build signature schemes that can resist attacks from future quantum computers. The algorithm had already survived two rounds of rigorous evaluation by the world's best cryptographers, spanning more than two years.

Working alongside a single Anthropic researcher over the course of roughly one week, Claude Mythos Preview improved the best-known attack on HAWK — effectively halving the algorithm's key strength. Had HAWK been deployed at scale as a post-quantum standard before this discovery, billions of digitally signed communications could have become vulnerable.

### Finding 2: Autonomous AES Attack, 200–800× Faster

The second finding involved a reduced-round variant of AES (Advanced Encryption Standard), the symmetric cipher at the heart of nearly all encrypted internet traffic. Researchers study simplified versions of AES to stress-test the full cipher's robustness.

Here, Mythos operated on a scaffold built by a single Anthropic researcher — and then worked **completely autonomously**, with no further human guidance. The result: a new attack method that is 200 to 800 times faster than the previous state of the art. The attack eliminates one of the guesses an attacker needs to make, dramatically reducing the computational effort required.

<div class="article-callout tip">
<strong>Important context:</strong> Neither result affects production systems today. HAWK is not yet deployed; the AES attack targets a deliberately weakened research variant, not the full cipher used in TLS, banking, and secure communications. These findings represent cryptanalysis working as intended — stress-testing before real-world deployment.
</div>

## How It Was Done

Anthropic's account of the research process is remarkable for its efficiency:

- **HAWK attack**: one researcher collaborated with Claude over roughly a week of work
- **AES attack**: one researcher built a scaffold; Claude then operated fully autonomously to discover the result
- **Cost**: approximately **$100,000 in API costs** per result — expensive by consumer standards, but trivial compared to the years of human expert time that previously left these gaps unfound

After observing these two primary results, the team broadened their search and have already begun discovering additional cryptographic attack improvements, which they plan to disclose in follow-up publications.

<div class="article-callout info">
<strong>Open science:</strong> Anthropic partnered with researchers at ETH Zurich, Tel Aviv University, and the University of Haifa to build <strong>CryptanalysisBench</strong>, an open benchmark that packages cryptographic ciphers for standardized LLM evaluation. The goal is to let any researcher replicate and extend these findings — and to keep the broader scientific community informed as AI capabilities evolve.
</div>

## The Broader Trend: AI Is Now Doing Research-Level Mathematics

This result sits within a wave of AI-driven mathematical breakthroughs that has accelerated sharply in 2026:

| Result | Model | Organization | Date |
|--------|-------|--------------|------|
| Several open Erdős problems resolved | Gemini | Google | Early 2026 |
| Unit Distance Conjecture proved | GPT | OpenAI | Mid-2026 |
| Jacobian Conjecture resolved | Claude Fable 5 | Anthropic | July 2026 |
| HAWK & AES-round vulnerabilities found | Claude Mythos Preview | Anthropic | July 28, 2026 |

What distinguishes the cryptography findings is their **immediate practical relevance**. Mathematical conjectures, however impressive, remain abstract. Cryptographic algorithms secure email, banking transactions, and government communications right now — or in HAWK's case, they were about to.

## Opportunity and Risk: Two Sides of the Same Capability

Anthropic frames its findings in cautiously optimistic terms: this is cryptanalysis working as designed, catching flaws before deployment. But the research team is also candid about the risk side of the ledger.

> "Many ciphers protecting modern systems have received less scrutiny than they deserve — they might still have important weaknesses lying dormant that LLMs will soon be able to discover."

The cybersecurity industry is already grappling with AI finding software bugs faster than human teams can triage and patch them. Anthropic predicts the same bottleneck will soon arrive in academic cryptography, where the volume of AI-generated findings may outpace researchers' capacity to validate and act on them.

The dual-use concern is real: the same capability that lets defenders audit algorithms at scale could allow adversaries to search for exploitable weaknesses in deployed cryptography at unprecedented speed and low cost.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Claude Mythos Preview halved HAWK's effective key strength in 60 hours — the first AI-discovered flaw in a NIST post-quantum candidate that survived two rounds of human expert review</li>
<li>Mythos autonomously improved AES reduced-round attack speed by 200–800×, operating without human guidance after initial scaffold setup</li>
<li>Neither result affects today's production systems, but both signal that AI-assisted cryptanalysis is now a practical reality</li>
<li>CryptanalysisBench (in partnership with ETH Zurich, Tel Aviv, and Haifa) is now open for other researchers to replicate and build on these results</li>
<li>Anthropic will host an academic workshop in the coming weeks to discuss governance, disclosure norms, and the evolving role of AI in security research</li>
</ul>
</div>

## What Comes Next

Anthropic has committed to hosting an academic workshop involving academia, government, and industry to address the governance questions these findings raise. Key questions on the agenda include how AI labs should behave if they discover vulnerabilities in **deployed** cryptosystems — ones whose compromise would have immediate real-world impact — rather than candidate algorithms still in evaluation.

The research team is also continuing broader audits of cryptographic algorithms, looking for additional weaknesses that may have been missed by human review. Given that Claude went from unable to analyze even basic ciphers to outpacing expert cryptanalysts in the span of roughly one year, the pace of AI capability growth in this domain alone warrants urgent attention from the security community.

For enterprises and governments relying on algorithms that have received less scrutiny than HAWK, the message is clear: the window for proactive security auditing is open now, and it may not stay open long.
