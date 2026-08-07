---
draft: true
title: "AI 'Slop' Jammed Apple's Bug Bounty — and Buried a Real $200K macOS Flaw"
summary: "A flood of low-quality, AI-generated 'slop' vulnerability reports clogged Apple's bug bounty review pipeline, so Apple capped how many submissions each researcher can file. The side effect: a genuine macOS full-takeover flaw found by Italian startup Bynario using ChatGPT — worth an estimated $100K–$200K on the black market — couldn't be reported for a while."
category: "it-news"
date: "2026-08-04"
readingTime: 6
tags: ["Apple", "BugBounty", "AISlop", "Cybersecurity", "Vulnerabilities"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Apple's bug bounty program is drowning in AI-mass-produced "slop" reports — polished-looking submissions describing vulnerabilities that don't actually exist. To stop the flood from burning out its reviewers, Apple capped the number of reports each researcher can file. The problem: that cap also blocked a <strong>real, dangerous flaw</strong>. Italian startup Bynario used ChatGPT to find a privilege-escalation bug that grants full control of macOS, but hit the submission limit and couldn't report it.
</div>

Apple has started limiting how many bug reports security researchers can submit. The reason is paradoxical: a torrent of low-quality, hallucinated vulnerability reports churned out by AI had clogged the review pipeline. As reported by the Financial Times and relayed by outlets including The Decoder, it's a textbook — yet counterintuitive — case of AI becoming a cybersecurity risk. What broke the defense wasn't exploit code, but a **pile of useless paperwork**.

## What happened

A bug bounty pays outside researchers who find and report vulnerabilities. But as generative AI went mainstream, plausible-looking "vulnerability reports" written without any real verification began pouring in. Many describe hallucinated flaws that don't reproduce. For a review team that has to read and attempt to reproduce each report by hand, the cost of separating signal from noise explodes.

Apple's answer was to close the valve: cap the number of submissions any single researcher can file, and impose a cooldown period. It's aimed at spammy bulk submissions — but the downside surfaced almost immediately.

## A $200K flaw got blocked

Bynario, an Italian cybersecurity startup, had been using OpenAI's ChatGPT to hunt for security issues. In the process, the team found a serious privilege-escalation vulnerability that could give an attacker **full control of macOS**. Bynario CEO Alfredo Pesoli estimated the flaw's black-market value at $100,000 to $200,000.

But when they went to report it to Apple, they were blocked — they'd hit the submission cap and couldn't file. In effect, the defender had bolted its own door shut. Apple only reached out to Bynario directly after the story was published.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">$100K–$200K</span>
<span class="stat-label">Estimated black-market value of the blocked flaw</span>
</div>
<div class="stat-item">
<span class="stat-number">Full takeover</span>
<span class="stat-label">Impact of the macOS vulnerability</span>
</div>
<div class="stat-item">
<span class="stat-number">5×</span>
<span class="stat-label">Security fixes in Apple's latest update vs. usual</span>
</div>
<div class="stat-item">
<span class="stat-number">Cap + cooldown</span>
<span class="stat-label">Apple's anti-slop measure</span>
</div>
</div>

## The irony: Apple hunts bugs with AI too

There's a layer that complicates the story. Apple itself is using AI from Anthropic and OpenAI to hunt for vulnerabilities. According to The Decoder, its latest update shipped roughly five times as many security fixes as usual. So both the defender and the reporters are wielding the same tools — while the reporting channel gets choked with AI-generated noise.

That raises a question about the long-term viability of bug bounties. Rafe Pilling of Sophos told the FT that bug bounty programs have shifted from *finding* vulnerabilities to *validating* them "at machine speed." One plausible trajectory: big tech companies internalize vulnerability discovery with their own AI rather than leaning on external reports.

<div class="article-callout info">
<strong>What is "AI slop"?</strong> The term refers to low-quality, inaccurate content mass-produced by AI. In the bug bounty context, it means reports that dress up hallucinated, non-reproducible vulnerabilities as convincing technical write-ups. The core problem is an asymmetry: the cost of generating one more report approaches zero, while the cost of verifying it is still bound to human time.
</div>

## Why it matters

This case compresses the "shadow side of security automation" into a single episode. AI lowered the barrier to entry for vulnerability hunting — but it also sharply degraded the **signal-to-noise ratio**. The moment a real threat gets buried under fakes, automation stops being a defense and becomes a vulnerability itself. As Bynario shows, even a well-intentioned researcher can lose the channel to report a legitimate find.

<div class="article-callout tip">
<strong>The question companies should ask</strong> Throttling submissions is only a stopgap. The real fix is to automate and structure the verification itself — verification gates that mechanically require proof of reproducibility, confidence-based priority queues, and reputation penalties for repeat spammers. The design should shift from *narrowing* the reporting channel to *filtering* it.
</div>

<div class="article-keypoints">
<h3>Key points</h3>
<ul>
<li>Apple, buried under AI-mass-produced "slop" vulnerability reports, capped per-researcher submissions and added a cooldown period.</li>
<li>The side effect: a macOS full-takeover flaw found by Italian startup Bynario via ChatGPT (estimated $100K–$200K on the black market) couldn't be reported for a time.</li>
<li>Apple itself hunts vulnerabilities with Anthropic and OpenAI models; its latest update shipped ~5× the usual security fixes.</li>
<li>A Sophos expert: bug bounties have shifted from "finding" flaws to "validating them at machine speed."</li>
<li>Capping submissions is a stopgap — the real fix is filtering by design: reproducibility gates, confidence queues, reputation penalties.</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://the-decoder.com/a-real-macos-flaw-worth-200k-went-unreported-because-apples-bug-bounty-inbox-was-full-of-ai-slop/" target="_blank" rel="noopener">The Decoder — A real macOS flaw worth $200K went unreported</a><br/>
· <a href="https://www.computerworld.com/article/4204385/apple-and-the-invisible-wolf-ai-slop-drowns-real-security-threats.html" target="_blank" rel="noopener">Computerworld — Apple and the invisible wolf: AI slop drowns real security threats</a><br/>
· <a href="https://www.neowin.net/news/apple-takes-action-to-limit-spammy-bug-reports-generated-by-ai/" target="_blank" rel="noopener">Neowin — Apple takes action to limit spammy bug reports generated by AI</a><br/>
· <a href="https://security.apple.com/bounty/" target="_blank" rel="noopener">Apple Security Bounty — official program page</a><br/>
</div>
