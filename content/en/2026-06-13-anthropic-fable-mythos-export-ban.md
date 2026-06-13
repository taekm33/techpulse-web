---
title: "US Government Forces Anthropic to Disable Fable 5 & Mythos 5 — A Historic AI Export Control Escalation"
summary: "The US Commerce Department issued an export control directive ordering Anthropic to suspend access to its most advanced AI models for all foreign nationals, forcing a global shutdown that sent shockwaves through the industry."
category: "ai-news"
date: "2026-06-13"
readingTime: 5
tags: ["Anthropic", "Fable5", "Mythos5", "AI Regulation", "Export Controls", "National Security"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: At 5:21 PM ET on June 12, 2026, the US Commerce Department ordered Anthropic to suspend all access to Claude Fable 5 and Mythos 5 for foreign nationals — including foreign Anthropic employees on US soil. Unable to enforce nationality checks at the API level, Anthropic shut both models down for every customer worldwide. The company called it a "misunderstanding" and is working to restore access. It marks the first time the US government has directly applied export controls to a commercial AI model's inference weights.
</div>

## What Is Claude Fable 5?

Just three days before the shutdown, on June 9, 2026, Anthropic launched **Claude Fable 5** — its most capable model ever released to the public. Fable 5 is a "Mythos-class" model with extensive safety guardrails applied, allowing general deployment without the unrestricted cybersecurity capabilities that made the underlying Mythos model too sensitive for public release. Concurrently, **Claude Mythos 5** — the same model with some safety guardrails lifted — was made available only to vetted partners through **Project Glasswing**, Anthropic's collaboration with the US government for cyber defense.

The launch video, which amassed over 637,000 views in days, emphasized that Fable 5 had undergone thousands of hours of red-team testing alongside the US government and the UK AI Safety Institute.

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/Y9Wz2PV404E" title="Introducing Claude Fable 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Directive: What Happened and When

On a Friday afternoon, Anthropic received a letter from Commerce Secretary Howard Lutnick to CEO Dario Amodei. The directive stated that Fable 5 and Mythos 5 would require an export license for transfer to any foreign national — whether inside or outside the United States. The letter cited "national security authorities" but provided no specific technical details.

According to reporting by Axios, the administration's concerns stemmed from another company claiming it had demonstrated a jailbreak technique against Mythos 5. The administration had previously asked Anthropic to pause the model releases but was rebuffed, which reportedly contributed to the escalation.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">5:21 PM ET</span><span class="stat-label">Time directive was received</span></div>
<div class="stat-item"><span class="stat-number">637K+</span><span class="stat-label">Views on Fable 5 launch video</span></div>
<div class="stat-item"><span class="stat-number">1M tokens</span><span class="stat-label">Fable 5 context window</span></div>
<div class="stat-item"><span class="stat-number">0 hours</span><span class="stat-label">Prior notice before enforcement</span></div>
</div>

## Why Anthropic Had to Shut Everyone Out

There is no practical way to verify a user's nationality from an API key. Faced with this reality and the threat of financial and civil penalties for non-compliance, Anthropic took the only available path: **disabling Fable 5 and Mythos 5 for all customers worldwide**, including those who are US citizens. AWS confirmed that Anthropic requested it revoke access across all regions.

Anthropic stated: "The net effect of this order is that we must abruptly disable Fable 5 and Mythos 5 for all our customers to ensure compliance. Access to all other Anthropic models will not be affected. We believe this is a misunderstanding and are working to restore access as soon as possible."

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>For Developers</strong><br>Applications pinned to <code>claude-fable-5</code> endpoints will error or may silently fall back. Switch to <code>claude-opus-4-8</code> as the closest currently available alternative. Monitor Anthropic's status page and X/Twitter account for restoration updates.</div>
</div>

## A Comparison: Old vs. New Export Control Playbook

| Dimension | Previous US Export Controls | This Directive |
|-----------|----------------------------|----------------|
| Target | Chips, specific software | AI model weights directly |
| Scope | Country or entity-level | Nationality-based (incl. US-based foreigners) |
| Notice | Advance notice given | Received at 5:21 PM Friday, enforced immediately |
| Justification | Detailed technical grounds | No specific details provided |

## Broader Context: A Strained Relationship

This action did not occur in isolation. In early March 2026, the US Department of Defense classified Anthropic as a "supply chain risk" — a designation Amodei called legally untenable and vowed to challenge in court. Reports indicate the core tension stems from Anthropic's refusal to allow Claude to be used for mass domestic surveillance programs and fully autonomous weapons systems without restrictions.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Industry Implications</strong><br>Anthropic warned: "If this standard was applied across the industry, we believe it would essentially halt all new model deployments for all frontier model providers." OpenAI, Google DeepMind, and Meta — all of which have foreign national employees and global user bases — face the same structural vulnerability to similar directives.</div>
</div>

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>First-ever direct US export controls applied to commercial AI model inference weights</li>
<li>Anthropic shut down Fable 5 and Mythos 5 for all users globally — the only compliant option</li>
<li>Triggered by an alleged jailbreak demonstration; Anthropic disputes its severity</li>
<li>All other Claude models (Opus 4.8, Sonnet 4.6, Haiku, etc.) remain fully operational</li>
<li>Anthropic filed confidentially for a US IPO just weeks earlier, adding investor pressure to the situation</li>
<li>Sets a precedent: frontier AI models may now be treated as strategic national infrastructure subject to export law</li>
</ul>
</div>

## What Comes Next

Anthropic has promised a detailed update within days. The company is contesting the directive and believes access can be restored once the government's concerns are addressed. However, if the standard is sustained, every major AI lab deploying globally will need to grapple with nationality-based access controls — a technically and legally daunting challenge that could reshape how frontier AI models are distributed worldwide.

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Developer Resources</strong><br>— <a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener noreferrer">Anthropic Official Announcement: Claude Fable 5 & Mythos 5 (includes export control statement)</a><br>— <a href="https://github.com/anthropics/anthropic-sdk-python" target="_blank" rel="noopener noreferrer">Anthropic Python SDK — Switch to fallback models immediately</a><br>— <a href="https://github.com/anthropics/anthropic-cookbook" target="_blank" rel="noopener noreferrer">Anthropic Cookbook — Recipes for Claude API integration</a></div></div>
