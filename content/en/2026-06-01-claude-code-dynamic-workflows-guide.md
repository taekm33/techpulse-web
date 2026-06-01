---
title: "Claude Code Dynamic Workflows: Hundreds of Agents, One Session"
summary: "Anthropic's Dynamic Workflows let Claude Code orchestrate up to 1,000 parallel subagents automatically. Here's what it means for enterprise engineering teams."
category: "dev-trend"
date: "2026-06-01"
readingTime: 7
tags: ["Claude", "Anthropic", "DynamicWorkflows", "AIcoding", "ClaudeCode"]
---

<div class="article-tldr">
**TL;DR** — Anthropic shipped Dynamic Workflows in Claude Code on May 28, 2026, alongside Claude Opus 4.8. The feature lets Claude plan a large engineering task, write a JavaScript orchestration script, fan work across hundreds of parallel subagents, run adversarial verification on every result, and hand you a finished output — all without manual orchestration. The headline use case: Bun's 750,000-line Zig-to-Rust port completed in 11 days with 99.8% test coverage.
</div>

## What Dynamic Workflows Actually Does

Traditional Claude Code sessions are powerful but serial. One agent, one context window, one task at a time. For routine coding work that's fine. For a codebase-wide security audit, a 500-file framework migration, or a language port at scale, serialization becomes the bottleneck.

Dynamic Workflows removes that bottleneck by moving the orchestration plan from Claude's context into a **JavaScript script that a background runtime executes**. Claude writes the script based on your task description. The runtime fans work across subagents in parallel. Intermediate results live in script variables — not Claude's context — so the plan stays coherent no matter how large the task grows.

<div class="article-stats">
| Metric | Value |
|--------|-------|
| Max concurrent agents per workflow | **16** |
| Max total agents per run | **1,000** |
| Bun migration (Zig → Rust) | **750,000 lines** |
| Bun migration duration | **11 days** |
| Test suite pass rate post-migration | **99.8%** |
| Plans with access | Max, Team, Enterprise |
| Default state on Max/Team | **On** |
| Default state on Enterprise | **Off** (admin enables) |
</div>

---

## The Verification Loop: What Makes It Different

Parallel execution is table stakes in 2026. What separates Dynamic Workflows from simply running multiple Claude Code sessions is the **adversarial verification layer**.

Here's how a workflow run progresses:

1. **Plan phase** — Claude reads your task description, decomposes it into independent units of work, and writes an orchestration script
2. **Fan-out phase** — The runtime spawns parallel subagents, each handling an independent unit
3. **Adversarial review** — A second set of agents independently challenges the primary agents' outputs, looking for errors, edge cases, and incorrect assumptions
4. **Convergence** — The run continues iterating until results from primary and adversarial agents agree
5. **Integration** — Verified results are folded together; you receive a single coordinated answer

<div class="article-callout tip">
**Why this matters for security audits**: Traditional automated security scans produce high false-positive rates because a single pass can't verify its own findings. Dynamic Workflows' adversarial structure — one set of agents finding issues, another independently trying to refute them — produces a report where every finding has been challenged before it reaches you.
</div>

---

## Real-World Use Cases and When to Use Them

Anthropic is explicit about where Dynamic Workflows shines. The pattern is consistent: **many independent units of work verifiable by existing tests**.

### Strong fits

**Large-scale migrations** — Framework upgrades, API deprecations, language ports spanning thousands of files. Claude handles decomposition, parallel execution, and test-gate verification.

**Codebase-wide audits** — Security reviews (OWASP), dead code scans, missing test coverage analysis. Independent agents cover separate domains while adversarial agents challenge each finding.

**Critical refactors requiring verification** — When a single overlooked file means a production bug, the adversarial loop reduces that risk structurally rather than relying on human review alone.

**Stress-testing plans** — Draft an architecture proposal from multiple independent angles before committing. The workflow surfaces contradictions you'd find weeks later in implementation.

### Weak fits

Tasks with tight cross-file dependencies that can't be parallelized, codebases with weak or absent test coverage (the quality gate disappears), and work requiring a single coherent architectural decision across the entire codebase.

<div class="article-callout info">
**The Bun example in detail**: Jarred Sumner used Dynamic Workflows to port Bun from Zig to Rust. Workflow 1 mapped the correct Rust lifetime for every struct field in the Zig codebase. Workflow 2 spawned parallel agents per file — Zig to Rust, behavior-identical — with two independent reviewers per file. Workflow 3 drove the build and test suite until both ran clean. A final overnight workflow addressed unnecessary data copies and opened one PR per fix for final review. 750,000 lines. 11 days. 99.8% test pass rate.
</div>

---

## Comparing Orchestration Options in Claude Code

Dynamic Workflows is one of three multi-agent patterns now available in Claude Code. Choosing the right one depends on what you know upfront.

| | Manual Subagents | Agent Teams | Dynamic Workflows |
|--|--|--|--|
| Decomposition | Developer defines | Developer defines roles | Claude plans automatically |
| Scale | A few agents | Named team roster | Dozens to hundreds |
| Coordination | Manual handoffs | Role-based plan | Automatic with verification |
| Resumable | No | No | Yes (checkpoint-based) |
| Best for | Ad-hoc delegation | Known role decomposition | One-off large-scale work |

The decision rule: **if you can name the roles upfront, Agent Teams fit. If you don't yet know how to decompose the task, Dynamic Workflows fit.**

---

## How to Get Started

**Activation**: Dynamic Workflows are on by default for Max and Team plan users. Enterprise users need admin activation in Claude Code settings.

**Starting a workflow**: Two methods.

```bash
# Method 1: Ask directly in your Claude Code session
"Create a workflow to audit this codebase for OWASP vulnerabilities"

# Method 2: Enable ultracode mode for automatic workflow planning
/effort ultracode
```

**Ultracode mode** sets effort to `xhigh` and lets Claude decide when a task warrants a workflow. It applies to every task in the session — token usage increases accordingly.

<div class="article-callout warn">
**Token cost warning**: Dynamic Workflows consume substantially more tokens than standard Claude Code sessions. Anthropic recommends starting on a scoped task — a single directory or service — to calibrate usage before pointing a workflow at a full codebase. Shared context (codebase overview, migration spec) read by many subagents benefits from prompt caching, which cuts repeated input costs by up to 90%.
</div>

---

## Claude Opus 4.8: The Model Underneath

Dynamic Workflows launched alongside **Claude Opus 4.8**, which brings specific improvements relevant to unattended runs. Anthropic reports Opus 4.8 scores 0% on uncritically reporting flawed results and is 4x less likely than 4.7 to let a defect pass unflagged. For a workflow running hundreds of agents with no human in the loop, that honesty improvement translates directly into fewer false passes reaching you.

Pricing is unchanged from Opus 4.7: **$5/M input, $25/M output**. Fast Mode runs at 2.5× speed and is now 3× cheaper than the previous generation's Fast Mode: **$10/M input, $50/M output**.

---

## The Broader Shift

Dynamic Workflows represents a meaningful change to what "a single Claude Code session" can accomplish. Work that previously required sprint-level planning — a full codebase security audit, a major framework migration, a large-scale refactor — now has a different answer: describe the goal, turn on a workflow, review the output.

The combination of automatic decomposition, parallel execution, adversarial verification, and checkpoint-based resumability removes the four blockers that made unattended large-scale engineering automation impractical. Whether this proves transformative in production depends on test suite quality — the verification loop is only as reliable as the tests it runs against.

<div class="article-keypoints">

**Key Takeaways**

1. **Dynamic Workflows** orchestrate Claude-written JavaScript scripts that run hundreds of parallel subagents — no manual orchestration needed
2. **Adversarial verification** is built in: a second agent set challenges primary findings before results reach you
3. **Proven at scale**: Bun's 750,000-line Zig-to-Rust port completed in 11 days, 99.8% test pass rate
4. **Availability**: Max and Team plans on by default; Enterprise requires admin activation; Pro not included at launch
5. **Token economics**: Substantially higher than standard sessions — scope your first run, use prompt caching on shared context

</div>
