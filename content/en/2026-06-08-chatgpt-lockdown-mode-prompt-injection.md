---
title: "OpenAI Adds Lockdown Mode to ChatGPT to Block Prompt Injection Data Theft"
summary: "OpenAI's new Lockdown Mode disables live browsing, agent mode, and deep research to prevent attackers from exploiting ChatGPT as a data exfiltration vector via prompt injection."
category: "ai-news"
date: "2026-06-08"
readingTime: 5
tags: ["ChatGPT", "Security", "PromptInjection", "OpenAI", "AISecurity"]
---

<div class="article-tldr">
OpenAI has launched <strong>Lockdown Mode</strong> for ChatGPT, a new security setting that disables live web browsing, agent mode, deep research, image retrieval, Canvas networking, and file downloads. Available across all plans — Free, Go, Plus, Pro, and self-serve Business — it's designed to cut off the outbound channels attackers use to steal data through prompt injection.
</div>

## The Problem Lockdown Mode Solves

Prompt injection is the attack technique where a malicious payload hidden in external content — a web page, a PDF, an image caption — tricks an AI model into executing attacker-controlled instructions. When an agent has live network access, those instructions can direct it to forward sensitive information to an attacker-controlled server. The user never sees it happen.

Security researchers have demonstrated this class of attack against agents from Anthropic, Google, and Microsoft through their GitHub Actions integrations. All three companies paid bug bounties for the findings but published no public advisories. The underlying problem is structural: large language models cannot reliably distinguish between data and instructions.

OpenAI's response is pragmatic. Rather than claiming to have solved prompt injection at the model level, the company has opted to give users a kill switch that removes the outbound channels entirely.

## What Gets Disabled

When Lockdown Mode is turned on, ChatGPT loses the following capabilities:

- **Live web browsing** — falls back to cached content only
- **Agent mode** — disabled entirely
- **Deep research** — disabled
- **Image retrieval** — disabled
- **Canvas networking** — disabled
- **File downloads** — disabled

Lockdown Mode and Developer Mode are mutually exclusive; enabling one automatically disables the other. Alongside the feature, OpenAI also launched session management controls that let users review active ChatGPT sessions and log out of individual devices.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">6</span>
<span class="stat-label">Features disabled in Lockdown Mode</span>
</div>
<div class="stat-item">
<span class="stat-number">5</span>
<span class="stat-label">Plans supported (including Free)</span>
</div>
<div class="stat-item">
<span class="stat-number">3</span>
<span class="stat-label">AI vendors with confirmed agent hijacks</span>
</div>
</div>

## Context: The AI Agent Security Crisis

The timing is not coincidental. Days before OpenAI's announcement, attackers used prompt injection to compromise Meta's AI support chatbot, which then handed over access to high-profile Instagram accounts including a dormant Obama White House page, beauty retailer Sephora, and a senior US Space Force official. Meta's stock fell more than 5% on the news.

The incident highlighted what security experts have been warning for months: companies are deploying AI agents with broad privileges over sensitive functions — account recovery, data access, workflow automation — before the technology is mature enough to handle adversarial inputs safely.

<div class="article-callout tip">
<strong>Practical guidance:</strong> If you process sensitive or confidential information in ChatGPT, enabling Lockdown Mode significantly reduces your exposure to data exfiltration. The trade-off is losing agentic functionality, but for high-stakes workflows that trade-off is worth making.
</div>

<div class="article-callout info">
<strong>Important caveat:</strong> OpenAI explicitly states that Lockdown Mode "does not guarantee that data exfiltration cannot happen." Risk may remain through enabled third-party apps, unforeseen capability combinations, or newly discovered techniques.
</div>

## Feature Comparison

| Capability | Lockdown Mode ON | Lockdown Mode OFF |
|------------|:----------------:|:-----------------:|
| Live browsing | ❌ (cache only) | ✅ |
| Agent mode | ❌ | ✅ |
| Deep research | ❌ | ✅ |
| Image retrieval | ❌ | ✅ |
| File downloads | ❌ | ✅ |
| Data exfiltration risk | ✅ Reduced | ⚠️ Present |

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Lockdown Mode blocks six outbound-capable features to cut off data exfiltration pathways.</li>
<li>Available on all ChatGPT plans including the free tier.</li>
<li>OpenAI does not claim to have solved prompt injection — this is an operational control, not a technical fix.</li>
<li>The launch follows a wave of high-profile AI agent security incidents, including the Meta Instagram account compromise.</li>
<li>Lockdown Mode and Developer Mode cannot be active simultaneously.</li>
</ul>
</div>

## What This Means for AI Security

OpenAI's move signals a broader shift in how the industry thinks about AI agent security. For the past year, the dominant posture has been to add capabilities and address security problems reactively. Lockdown Mode is a rare proactive measure — an acknowledgment that the attack surface is real and that users deserve explicit controls to manage their own risk.

The harder problem remains unsolved. As agents acquire more permissions — calendar access, email, code execution, financial tools — the consequences of a successful prompt injection attack grow more severe. The industry needs model-level solutions that can reliably separate untrusted data from trusted instructions. Until that exists, operational controls like Lockdown Mode are the most reliable defense available.

For security teams evaluating AI tools in enterprise environments, this feature is worth building into your usage policies today.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">OWASP — Top 10 for LLM Applications</a><br/>
· <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" target="_blank" rel="noopener">OWASP — GenAI Security Project</a>
</div>