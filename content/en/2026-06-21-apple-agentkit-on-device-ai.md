---
title: "Apple Unveils AgentKit: On-Device AI Agents That Never Touch the Cloud"
summary: "At WWDC 2026, Apple introduced AgentKit, a framework letting iPhone and Mac run multi-step AI agent workflows entirely on-device, targeting enterprise customers blocked by data-residency rules."
category: "ai-news"
date: "2026-06-21"
readingTime: 5
tags: ["Apple", "AgentKit", "on-device AI", "WWDC2026", "privacy"]
---

<div class="article-tldr">
Apple introduced AgentKit at WWDC 2026, a framework that runs multi-step AI agent tasks entirely on iPhone and Mac hardware without sending prompts to the cloud. The system chains tool calls — email, calendar, file search, document summarization — within a single user-approved session, and Apple is betting that on-device privacy guarantees will unlock enterprise deployments in regulated industries that cloud-based assistants have struggled to reach.
</div>

Apple introduced AgentKit on Monday at its annual developer conference in Cupertino, a software framework that executes multi-step artificial intelligence tasks entirely on iPhone and Mac hardware without routing prompts through cloud servers. The announcement is Apple's most direct response yet to enterprise buyers who have blocked cloud-based AI assistants over data-residency and data-leakage concerns.

## What Apple Shipped

AgentKit lets third-party apps chain on-device model calls — search, calendar updates, document summarization — inside a single workflow that requires explicit user approval. Apple executives said personal data is processed only in encrypted local memory, with intermediate states deleted once a task completes. For regulated industries, that architecture removes one of the biggest objections to generative AI adoption: the risk of sensitive data leaving a controlled environment.

Developers get APIs to register tools — email clients, file browsers, health records — that agents can invoke after a user grants consent for that session. Apple demonstrated a travel-rebooking scenario in which an agent read a cancellation email, searched for alternate flights, and presented options without ever transmitting mailbox contents to an external server.

## The Technical Details

Technical briefings show inference latency averaging 1.2 seconds per step on iPhone 17 Pro hardware, powered by a 7-billion-parameter model optimized for Apple's neural engine. Apple did not disclose parameter counts for any larger on-device models currently in development.

<div class="article-stats">
<strong>1.2s</strong> Average per-step inference latency on iPhone 17 Pro<br/>
<strong>7B</strong> Parameters in the on-device model powering AgentKit<br/>
<strong>July 2026</strong> Public beta launch, with general availability in September alongside iOS 20 and macOS 16
</div>

Enterprise IT administrators get mobile device management (MDM) controls to disable agent tool access by app category. Banks and hospital systems piloting the beta said they could allow summarization of internal documents while blocking web-browsing tools entirely — a level of granularity cloud-based assistants have generally not offered.

<div class="article-callout tip">
If your organization handles regulated data, start mapping which document types and workflows you'd whitelist under AgentKit's MDM category controls now — the managed enterprise preview opens next month.
</div>

## Competitive Landscape

Microsoft and Google continue to route most Copilot and Gemini features through cloud infrastructure, though both have expanded offline subsets over the past year. Apple's wager is that strong privacy guarantees will accelerate deployments in European financial services and U.S. healthcare, sectors where general counsel offices have slowed cloud-assistant rollouts over compliance concerns. Analysts at Canalys noted that Apple's timing lines up closely with EU Data Act enforcement windows that penalize unclear cross-border data flows.

Samsung and Huawei already ship on-device assistants in Asian markets, but neither currently offers a third-party agent framework with comparable tool-registration APIs, leaving Apple with a meaningful lead in this specific niche.

| Item | Detail |
|---|---|
| Announced | June 22, 2026, WWDC |
| Architecture | Fully on-device, no cloud routing |
| Public beta | July 2026 |
| General availability | iOS 20 / macOS 16 (September) |
| Launch partners | Adobe, SAP, Salesforce |

## Open Questions

Developers at WWDC described AgentKit's documentation as clearer than last year's rocky Apple Intelligence rollout, but several engineers cautioned that complex agents requiring reasoning over large corpora will remain cloud-bound, since local models still can't match frontier systems on open-ended research tasks.

<div class="article-callout info">
U.S. lawmakers are examining whether agent-driven actions count as "automated decision-making" under pending AI governance bills. Apple published a companion white paper requiring explicit human confirmation for payments, account deletion, and outbound communications.
</div>

Adobe, SAP, and Salesforce all announced same-day integrations for document and CRM workflows, each stressing that customer data stays on-device for defined actions, with optional cloud escalation available only when users approve it individually for specific tasks.

<div class="article-keypoints">
<ul>
<li>AgentKit runs multi-step AI workflows entirely on iPhone and Mac, without sending data to the cloud</li>
<li>Targets enterprise customers in finance and healthcare that cloud-based AI assistants have struggled to reach</li>
<li>Public beta arrives in July; general availability ships with iOS 20 and macOS 16 in September</li>
<li>Complex reasoning tasks over large corpora still require cloud-based models, limiting AgentKit's scope for now</li>
</ul>
</div>
