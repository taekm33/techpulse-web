---
title: "Weaviate Launches Engram GA: Production-Grade Long-Term Memory for AI Agents"
summary: "Weaviate has made Engram generally available — a managed memory and context service that gives AI agents the ability to remember users across sessions, learn from experience, and share state across multi-agent systems, all built on the battle-tested Weaviate vector database."
category: "ai-news"
date: "2026-06-15"
readingTime: 5
tags: ["Weaviate", "Engram", "AIAgents", "LongTermMemory", "VectorDatabase"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Weaviate's Engram is now generally available in Weaviate Cloud with a free tier (1,000 pipeline runs/month) and paid plans from $45/month. Engram handles memory as infrastructure: async pipelines extract facts from raw events, reconcile them against existing memories, and persist structured state to Weaviate's vector DB, which agents can then query using hybrid semantic + keyword search.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/9Au5iPhOUBA" title="AI Agent Memory Systems Explained (2026) — Vector, Graph, RAG &amp; Reflection Loops" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Problem: Stateless LLMs Can't Actually Learn

As AI agents move into production, teams run into the same wall: **LLMs are stateless**. Every API call starts from scratch. The model knows nothing about the user's preferences from last week, the decision the agent made in a previous session, or the feedback the user gave yesterday.

The workarounds most teams reach for don't scale:

- **Replaying full conversation histories** into the context window — costs explode as histories grow
- **Hand-curating fact files** — becomes a maintenance nightmare as users and data multiply  
- **Building custom memory systems** — months of engineering work before you can even start on the actual product

Weaviate CEO Bob van Luijt put it plainly: *"Memory is the difference between an agent that answers a question and an agent that gets better at its job."*

With Engram now GA, Weaviate is offering that memory layer as managed infrastructure — so teams can skip straight to building the product.

<div class="article-stats">
<div class="article-stat">
<span class="stat-value">Free</span>
<span class="stat-label">Tier includes 1,000 pipeline runs/month</span>
</div>
<div class="article-stat">
<span class="stat-value">$45/mo</span>
<span class="stat-label">Starting price for paid plans</span>
</div>
<div class="article-stat">
<span class="stat-value">150M+</span>
<span class="stat-label">Monthly downloads of open-source Weaviate</span>
</div>
</div>

## How Engram Works: The Memory Pipeline

Engram treats memory as structured, evolving infrastructure — not an ever-growing pile of context. The core is a three-stage async pipeline:

<div class="article-callout tip">
<div class="article-callout__icon">⚙️</div>
<div class="article-callout__body"><strong>The Three-Stage Memory Pipeline</strong><br>
<strong>1. Extract</strong> — Pull discrete facts from raw text, conversations, or pre-extracted data. ("Lives in Berlin." "Prefers dark mode.")<br>
<strong>2. Transform</strong> — Reconcile new facts against what's already stored: deduplicate, handle preference changes, update time-evolving facts.<br>
<strong>3. Commit</strong> — Persist the clean memory state to the Weaviate vector database.<br>
The pipeline is fire-and-forget: applications hand off raw events and keep working while memory builds in the background — no latency added to the critical path.</div>
</div>

Once stored, memories are served through Weaviate's hybrid search — combining **vector similarity** (semantic understanding) with **BM25 keyword search** — so agents can retrieve relevant context using natural language queries.

## Scoping: The Right Memory to the Right Agent

One of Engram's design pillars is isolation by default with sharing when needed. Memory is scoped at multiple levels:

- **Project scope**: memories stay within a project
- **User scope**: each user's memories are isolated from other users (required when using the `UserKnowledge` topic)
- **Custom scope properties**: add `conversation_id` or any other property to scope memories further

In multi-agent scenarios, agents can also be granted access to a shared memory pool, enabling coordinated handoffs and collaborative workflows.

## Ready-Made Templates for Common Use Cases

Rather than forcing teams to understand the full pipeline architecture before getting started, Engram ships with templates for the most common memory patterns:

| Template | What It Does |
|----------|-------------|
| **Personalization** | Remembers user preferences, past interactions, stated goals across sessions |
| **Continual Learning** | Lets agents improve from feedback over time, updating what they know |
| **Multi-Agent Shared State** | Gives multiple agents access to a shared context pool for coordination |

Teams that outgrow templates can drop down to direct pipeline control — customizing individual extraction prompts, reconciliation logic, and commit strategies — without leaving the platform.

<div class="article-callout info">
<div class="article-callout__icon">🏗️</div>
<div class="article-callout__body"><strong>Engram vs. Building Your Own Memory System</strong><br>A custom memory layer requires choosing an extraction LLM, writing deduplication logic, operating a vector store, tuning retrieval, and handling edge cases like preference changes and conflicting facts. Engram ships all of that as a managed service, backed by the same Weaviate infrastructure that serves over 150 million downloads per month.</div>
</div>

## A Concrete Example: Adding Long-Term Memory to a Chat App

The quickstart pattern shows how straightforward integration can be:

1. **After each conversation turn**: send messages to Engram via `memories.add()` — returns a `run_id` immediately
2. **Background pipeline**: extracts structured facts like "lives in Berlin," "prefers specialty coffee," "uses dark mode"
3. **Before the next response**: query `memories.search(query=user_input, user_id="alice")` to retrieve relevant context
4. **LLM call**: inject retrieved memories into the system prompt for a personalized, context-aware response

Stop and restart the process — the agent still knows what it learned about Alice from three sessions ago.

The same pattern scales to multi-agent architectures by using shared group scopes, letting a scheduler agent, executor agent, and reviewer agent all draw from the same organizational memory.

<div class="article-keypoints">
<strong>Key Takeaways</strong>
<ul>
<li>Weaviate Engram is now GA: managed memory and context service for AI agents, built on open-source Weaviate vector DB</li>
<li>Three-stage async pipeline: Extract → Transform (dedup + reconcile) → Commit</li>
<li>Scoping ensures memory isolation per project/user, with optional sharing for multi-agent workflows</li>
<li>Ready-made templates: Personalization, Continual Learning, Multi-Agent Shared State</li>
<li>Hybrid retrieval: vector similarity + BM25 keyword search</li>
<li>Available now in Weaviate Cloud — free tier (1,000 runs/month) and paid plans from $45/month</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Sources &amp; Official References</strong><br>— <a href="https://weaviate.io/blog/engram-generally-available" target="_blank" rel="noopener noreferrer">Weaviate Blog: Engram is now Generally Available — official announcement</a><br>— <a href="https://weaviate.io/product/engram" target="_blank" rel="noopener noreferrer">Engram Product Page — features, pricing, and getting started</a><br>— <a href="https://docs.weaviate.io/engram" target="_blank" rel="noopener noreferrer">Engram Documentation — REST API, Python SDK, architecture concepts</a><br>— <a href="https://docs.weaviate.io/engram/quickstart" target="_blank" rel="noopener noreferrer">Engram Quickstart Tutorial — create a project, store your first memory, search it</a></div></div>
