---
title: "Microsoft Work IQ APIs Go GA June 16: The Intelligence Layer That Powers M365 Agents"
summary: "Microsoft confirmed a June 16 general availability date for Work IQ APIs — the same intelligence layer that powers Copilot, now open to external developers building agents on Microsoft 365 data. A new AI credit cost management dashboard ships alongside it."
category: "dev-trend"
date: "2026-06-07"
readingTime: 5
tags: ["Microsoft-WorkIQ", "M365-API", "enterprise-AI", "Copilot", "developer-API"]
---

<div class="article-tldr">
Microsoft announced on June 2, 2026 that <strong>Work IQ APIs</strong> will reach general availability on June 16, 2026. Work IQ is the intelligence layer inside Microsoft 365 that understands how work gets done across an organization. Opening it to external developers means agents can now reason over M365 emails, meetings, documents, and Teams conversations — with the same context Copilot already uses — through a production-ready, enterprise-grade API surface.
</div>

## What Work IQ Is (and Why It Matters)

Microsoft 365 is where most enterprise knowledge lives: email threads, meeting transcripts, shared documents, Teams conversations, calendar history. Individually these are raw records. Work IQ is the layer that understands **how they connect** — who owns what project, which decisions happened in which meetings, what follow-ups were promised and to whom.

Work IQ APIs make this understanding queryable and actionable by external agents. Charles Lamanna, Microsoft CVP, framed the shift clearly: software is moving from "applications built for people" to "agents that can reason, retrieve context, and act on a user's behalf." Work IQ is the API surface that transition requires.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-number">June 16</span>
    <span class="stat-label">Work IQ API General Availability date</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">Available now</span>
    <span class="stat-label">Public preview on GitHub ahead of GA</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">Tenant / Group / User</span>
    <span class="stat-label">Granularity levels for AI credit spending limits</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">First product</span>
    <span class="stat-label">Work IQ APIs — first in new cost management dashboard</span>
  </div>
</div>

## API Domain Structure

Work IQ APIs cover the domains agents need to operate inside M365:

- **Contextual retrieval**: Search across emails, meetings, documents, and Teams for relevant organizational context
- **Task execution**: Agents perform actions directly inside M365 apps on a user's behalf
- **Organizational intelligence**: Understand team structure, work patterns, and decision history
- **Data governance**: Access controls inherit from existing M365 RBAC — agents see only what their principal can see

<div class="article-callout tip">
**Start building now**: The Work IQ APIs are in public preview on GitHub today. Building against the preview means your agent is production-ready on June 16 GA day. If you're already using Microsoft Graph API for M365 data access, review the Work IQ migration path — it replaces many CRUD-style patterns with agent-oriented query and action APIs.
</div>

## The AI Credit Cost Management Dashboard

Work IQ ships alongside a new **AI credit cost management dashboard** in the Microsoft 365 admin center. This addresses a real enterprise friction point: as organizations deploy more Copilot-connected agents, finance and IT teams need visibility and guardrails over AI consumption costs.

| Capability | Details |
|-----------|---------|
| Usage visibility | Per-agent, per-service AI credit consumption breakdown |
| Billing model | Toggle between prepaid or pay-as-you-go Copilot Credits |
| Spending limits | Set caps at tenant, group, and individual user level |
| Credit request management | Admins approve or deny user credit requests |

Work IQ APIs are the first product managed through this dashboard. Copilot Studio and additional Copilot Credit products will be added over time.

## What This Unlocks for Agent Developers

The practical value is **organizational context quality**. Generic RAG pipelines over uploaded documents are useful. Agents that understand the actual history of a project — who said what in which meeting, which email chain preceded which decision, which documents are authoritative — are substantially more useful. Work IQ enables the second category.

Concrete agent patterns this unlocks:

- *Pre-meeting prep*: "Summarize everything relevant to my 2pm client call — their emails, our proposals, and any open action items"
- *Weekly reporting*: "Draft Q2 progress update by pulling from relevant Teams threads and recent project documents"
- *Onboarding assistant*: "Give this new hire context on the Acme project by surfacing key decisions and their rationale from the last 90 days"

<div class="article-callout info">
**Security reminder**: Work IQ APIs operate on top of M365's existing role-based access control. An agent executing as a service principal can only access data that principal is authorized to see. Design your service account permission scopes carefully — overly broad service accounts will surface more data than intended to the agent.
</div>

## Work IQ vs. Microsoft Graph API

The existing Microsoft Graph API gives programmatic access to M365 data in a CRUD-style interface designed for application developers. Work IQ is designed for agent-oriented access: semantically rich queries, action execution with intent, and organizational context retrieval rather than raw object reads.

Think of Graph as "get me this specific email thread" versus Work IQ as "find everything relevant to this project decision and help me act on it." Both have their place — Work IQ targets the higher-level agent reasoning layer.

Integration with agent frameworks like LangChain, AutoGen, or Microsoft's own Semantic Kernel should be straightforward given Work IQ's agent-first design.

<div class="article-keypoints">

## Key Takeaways

- **GA: June 16** — Work IQ APIs move from preview to production-ready on June 16, 2026
- **Build now**: Public preview on GitHub available today, ahead of GA
- **Same layer as Copilot**: External developers get access to the M365 intelligence infrastructure Microsoft uses internally
- **Cost controls**: Granular AI credit spending limits at tenant, group, and user levels
- **Agent-first design**: Purpose-built for agent reasoning, not CRUD data access like Graph API
- **Roadmap**: Copilot Studio and additional Copilot Credit products coming to the cost dashboard

</div>

## Developer Opportunity

Work IQ APIs create a new category of enterprise agent products: assistants that are deeply contextual to a specific organization's actual history and work patterns rather than generic knowledge. ISVs, consulting firms, and internal IT teams that build on Work IQ before competitors will have a head start in the enterprise AI agent market. The June 16 GA date is a specific, near-term milestone worth targeting — early integrations built on preview should be production-deployable day one.
