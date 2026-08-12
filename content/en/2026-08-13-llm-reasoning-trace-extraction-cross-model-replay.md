---
title: "Using a Weak Model to Steal a Strong Model's 'Inner Thoughts' — the Replay Flaw in OpenAI, Anthropic, and Google Reasoning APIs"
summary: "Researchers replayed OpenAI, Anthropic, and Google's encrypted reasoning blocks into weaker sibling models to recover hidden chain-of-thought in plaintext. Across 6,708 public agent logs they decoded more than 315,000 reasoning blocks and pulled out hundreds of secrets, including API keys and passwords. All three providers have shipped server-side mitigations."
category: "hot-issue"
date: "2026-08-13"
readingTime: 6
tags: ["AI security", "LLM", "reasoning models", "prompt injection", "OpenAI", "Anthropic", "Google"]
---

<div class="article-tldr">
The "encrypted reasoning blocks" that OpenAI, Anthropic, and Google pass back and forth to preserve conversation context turned out to be signed with a single provider-wide key — not bound to any user, session, or model. Researchers replayed a block produced by a strong flagship model into a cheap sibling model in the same family and had it transcribe the hidden chain-of-thought in plaintext. From 6,708 public agent logs they decoded more than 315,000 blocks and recovered hundreds of secrets, including API keys and passwords. All three providers deployed server-side mitigations, and the researchers say the original attack no longer reproduces.
</div>

The internal "thinking" a reasoning model does before it answers is treated by vendors as both intellectual property and a safety mechanism, so it is never exposed in plaintext. Instead, the API hands this reasoning trace to the client as an **encrypted envelope** and takes it back on the next call, preserving multi-turn context without server-side state. A paper published on August 12, 2026 — "Stealing Reasoning Traces from Proprietary LLM APIs" — found a large hole in exactly that design.

## How it breaks — "a weak model as a decryption oracle"

The trick is not to crack the encryption. The envelope is left intact; the weakness is in **how the receiving side accepts and processes it**. According to the researchers, all three providers authenticated reasoning envelopes with a global, provider-wide key rather than cryptographically binding each one to a user account, session ID, or model tier. As a result, an envelope built by a heavily guarded flagship could be fed straight into a different model from the same provider.

The attack uses a cheap, lightweight model as a kind of decryption oracle. You capture an encrypted reasoning block emitted by a frontier model (say, Claude Opus 4.8), inject it into a call to a smaller sibling (say, Claude Haiku 4.5), and instruct that model to transcribe the internal thinking verbatim. Because lighter models lack the aggressive anti-distillation and safety guardrails enforced on flagship tiers, they comply and print the hidden reasoning in plaintext. The paper reports the same cross-model compatibility across OpenAI's GPT family and Google's Gemini lineup.

<div class="article-stats">
<strong>Paper</strong> Stealing Reasoning Traces from Proprietary LLM APIs (arXiv:2608.09867)<br/>
<strong>Published</strong> 2026-08-12<br/>
<strong>Public agent logs analyzed</strong> 6,708<br/>
<strong>Reasoning blocks decoded</strong> 315,320<br/>
<strong>Secrets recovered (partial)</strong> 62 API keys, 33 passwords, and hundreds more artifacts
</div>

## What actually leaked

Analyzing 6,708 agent transcripts scraped from GitHub, Hugging Face, and similar public sources, the team decoded 315,320 reasoning blocks. Even after excluding benchmark data, hundreds of privacy artifacts and credentials came out of genuine user sessions — 62 API keys, 33 passwords, plus access tokens and personal emails. The sharper danger: much of this data lived **only inside the hidden reasoning and never appeared in the visible answer**. A developer could scrub the readable conversation perfectly and still leave secrets sitting inside an envelope that another account could replay and extract.

| Provider | Originating flagship | Weak model used as oracle |
|---|---|---|
| Anthropic | Claude Opus 4.8 / Sonnet 5 | Claude Haiku 4.5 |
| OpenAI | GPT-5.6 / GPT-5 | GPT-5.6 Luna · GPT-5-mini class |
| Google | Gemini 3 / 3.1 Pro | Gemini 3.1 Flash class |

## Beyond data leaks — invisible prompt injection

That same portability opens a second attack surface. The researchers built an encrypted reasoning block carrying a malicious instruction, then replayed it into an unrelated task, causing the receiving model to take an attacker-directed action (such as a file upload). Because the instruction **never appears in the visible text**, monitoring tools that inspect only the conversation history miss it entirely. For autonomous agent workflows this is especially dangerous.

<div class="article-callout info">
The paper lays out four abuse paths: (1) stealing proprietary reasoning for model distillation, (2) extracting private data from other users' published traces, (3) recovering harmful content hidden behind a safe visible answer, and (4) concealing prompt injections inside opaque reasoning blocks.
</div>

## Where things stand — and the open questions

The researchers disclosed their findings responsibly to the three providers plus Microsoft and Hugging Face, and all three vendors deployed server-side mitigations. Per the paper's reproducibility statement, **the main extraction attack no longer reproduces as of August 2026.** Open questions remain, however. It is not clear that any of the three has issued a public statement explicitly confirming the flaw, and whether the hundreds of thousands of blocks already sitting in public repositories remain decodable is a separate matter. The work builds on May 2026 research by Johns Hopkins cryptographer Matthew Green, who showed encrypted reasoning blocks could be replayed across sessions and accounts but stopped short of a reliable secret-extraction method.

<div class="article-callout tip">
If you build agents: always strip reasoning blocks and opaque signature fields from any logs you publish. Sanitizing the visible text is not enough — the secrets live inside the envelope.
</div>

## What it means

The episode shows how brittle the assumption "hide the chain-of-thought and it's safe" really is. The encryption was never broken; a single design choice — not binding the envelope to **who and which model may open it** — exposed all three major providers at once. The proposed fixes are structural: cryptographically bind reasoning envelopes to the originating model, session, and user; reject blocks submitted to a different model tier; and rotate legacy signing keys to invalidate envelopes already sitting in public logs. In an era where agents run everywhere, "hidden thinking" is no longer a safe hiding place.

<div class="article-keypoints">
<ul>
<li>Replay an encrypted reasoning block from a strong model into a weaker sibling, and the hidden chain-of-thought comes back in plaintext.</li>
<li>The cause is not broken crypto but a design that authenticated envelopes with one provider-wide key instead of binding them to user, session, and model.</li>
<li>From 6,708 public logs the team decoded ~315,000 blocks, leaking hundreds of secrets (62 API keys, 33 passwords) — many present only in the reasoning, never in the visible answer.</li>
<li>Beyond data theft, it becomes a channel for invisible prompt injection.</li>
<li>All three providers shipped server-side mitigations that block the original attack, but the residual risk of already-published blocks is a separate, open question.</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://arxiv.org/abs/2608.09867" target="_blank" rel="noopener">Paper: Stealing Reasoning Traces from Proprietary LLM APIs (arXiv)</a><br/>
<a href="https://thehackernews.com/2026/08/openai-anthropic-google-api-flaw-let.html" target="_blank" rel="noopener">The Hacker News — OpenAI, Anthropic, Google API Flaw Let Weaker AI Models Decode Stronger Models' Reasoning</a><br/>
<a href="https://cybersecuritynews.com/top-ai-models-apis-flaw-exposes-hidden-reasoning/" target="_blank" rel="noopener">Cyber Security News — LLM APIs Vulnerability Exposes Hidden Reasoning Traces</a><br/>
<a href="https://blog.cryptographyengineering.com/2026/05/29/fooling-around-with-encrypted-reasoning-blobs/" target="_blank" rel="noopener">Matthew Green — Fooling around with encrypted reasoning blobs (prior work, 2026-05)</a>
</div>
