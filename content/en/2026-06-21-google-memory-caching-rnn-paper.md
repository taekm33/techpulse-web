---
title: "Google's 'Memory Caching' Paper Gives RNNs a Growing Memory, Challenging the Transformer-Only Era"
summary: "A new Google research paper, 'Memory Caching: RNNs with Growing Memory,' proposes letting recurrent models cache compressed memory checkpoints across segments instead of relying on a single fixed hidden state—offering a middle ground between cheap recurrence and expensive full attention."
category: "dev-trend"
date: "2026-06-21"
readingTime: 5
tags: ["Google", "MemoryCaching", "RNN", "Transformers", "LLMArchitecture"]
---

<div class="article-tldr">
Google researchers have published "Memory Caching: RNNs with Growing Memory," a paper that lets recurrent models save compressed memory checkpoints at segment boundaries as they process a sequence. Later tokens can retrieve from both the current online memory and these older cached checkpoints, giving RNN-style models a form of growing memory without paying the full quadratic cost of Transformer attention. The result is a new design point between fixed-memory RNNs and token-level attention.
</div>

For nearly a decade, the Transformer has been the default architecture behind almost every major leap in large language models. Its core advantage comes from self-attention, which lets every token directly retrieve information from any previous token in the context. That capability is what makes Transformers so good at recall, reference resolution, and in-context learning. But it comes at a steep price: as sequences get longer, the number of token-to-token interactions grows quickly, and the key-value (KV) cache needed at inference time grows right along with it, making long-context serving expensive in both compute and memory.

Recurrent neural networks took the opposite approach. By compressing the entire past into a single fixed-size hidden state, RNNs stay cheap and efficient regardless of sequence length. The tradeoff is that as the sequence grows, more and more information has to be squeezed into the same fixed amount of state, and precise recall of facts from early in a long sequence tends to degrade or disappear entirely.

## What's New in Memory Caching

Google's paper attacks this tradeoff directly. Instead of trying to replace attention outright, or accepting a single fixed-size memory, Memory Caching divides the sequence into segments. At the end of each segment, the model compresses what it has processed into a memory checkpoint and stores it in a cache. As the model continues processing new tokens, it can retrieve not only from its current, still-updating memory state but also from this growing collection of cached checkpoints from earlier in the sequence.

This effectively turns memory capacity into a dial rather than a fixed quantity. With few cached states, the model behaves close to a standard RNN. With more cached states retained, it behaves closer to full attention — without ever paying attention's per-token quadratic cost. The paper introduces four concrete variants for using these cached memories: Residual Memory, Gated Residual Memory, Memory Soup, and Sparse Selective Caching, and evaluates them across language modeling, Needle-in-a-Haystack retrieval, in-context retrieval, LongBench, and MQAR benchmarks.

## Not the End of Transformers — But a New Design Axis

Crucially, the paper doesn't claim Transformers are obsolete. On the most recall-intensive tasks, full attention still wins. What the results do suggest is that the usual framing — "efficient RNNs versus expensive attention" — is incomplete. There's a third point in the design space: recurrent models whose memory grows with the sequence, just not at the token level.

This puts Memory Caching in the same lineage as recent efficiency-focused architectures like RWKV, RetNet, Mamba, and Titans, all of which blur the line between attention and recurrence in different ways. The likely trajectory isn't a single architecture replacing attention outright, but a gradual shift toward hybrid memory systems: attention where precise token-level access matters, recurrent compression where efficiency is the priority, and cached memory checkpoints where long-range retrieval needs something in between.

<div class="article-stats">
<strong>Key numbers</strong><br>
- Memory structure: one fixed hidden state → a growing cache of compressed segment checkpoints<br>
- Proposed variants: 4 (Residual Memory, Gated Residual Memory, Memory Soup, Sparse Selective Caching)<br>
- Benchmarks evaluated: 5+, including language modeling, Needle-in-a-Haystack, in-context retrieval, LongBench, and MQAR
</div>

<div class="article-callout tip">
For developers building long-context applications — document summarization, agents that accumulate conversation history, or RAG pipelines — this isn't a drop-in replacement to adopt today. Treat it as a signal that hybrid memory architectures are becoming a credible option for cutting long-context serving costs without sacrificing recall.
</div>

<div class="article-callout info">
Memory Caching sits on the same research trajectory as linear attention, RWKV, RetNet, Mamba, and Titans — all efforts to blur the line between attention and recurrence. The underlying question hasn't changed: how much of the past should a model store, how compressed should it be, and how should the model retrieve it when it matters?
</div>

<div class="article-keypoints">
<strong>Key takeaways</strong><br>
- Gives RNN-style models a memory that grows with sequence length, without full token-level attention<br>
- Stores compressed memory checkpoints per segment that later tokens can retrieve from<br>
- Doesn't replace Transformers outright — offers a new tradeoff point between cost and recall accuracy<br>
- Could influence how long-context agents and RAG systems are architected going forward
</div>

| Architecture | Memory mechanism | Cost profile | Long-range recall |
|---|---|---|---|
| Standard Transformer | Full token-level retention | Cost grows sharply with sequence length | Very strong |
| Standard RNN | Single fixed-size hidden state | Very efficient | Weak |
| Memory Caching | Growing cache of compressed segment checkpoints | Close to RNN, grows gradually | Moderate to strong |

Industry observers are treating this less as something to deploy immediately and more as a reference point for the long-context efficiency work already underway at OpenAI, Anthropic, and Meta. As agentic AI systems increasingly need to retain sprawling conversation and task histories over long sessions, demand for architectures that cut serving costs without losing recall accuracy is only set to grow.
