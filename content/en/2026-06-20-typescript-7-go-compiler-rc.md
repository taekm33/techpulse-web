---
title: "TypeScript 7.0 RC Lands: Rewriting the Compiler in Go Makes Builds 10x Faster"
summary: "Microsoft has shipped the release candidate for TypeScript 7.0, a from-scratch port of the compiler from JavaScript to Go. The VS Code codebase's type-check time dropped from 77.8 seconds to 7.5 seconds."
category: "dev-trend"
date: "2026-06-20"
readingTime: 5
tags: ["TypeScript", "Microsoft", "Compilers"]
---

<div class="article-tldr">
<strong>TL;DR</strong> Microsoft released the TypeScript 7.0 release candidate on June 18. The headline change is a full port of the compiler from JavaScript to Go, combining native execution speed with shared-memory parallelism to deliver roughly 10x faster type-checking on average. Teams at Bloomberg, Figma, Notion, and Vercel have been testing pre-release builds for over a year, and stable GA is expected within about a month.
</div>

TypeScript has run on the same architecture since Microsoft introduced it in 2010: a compiler (`tsc`) written in TypeScript itself, transpiled to JavaScript, and executed on Node.js. That design carried two structural bottlenecks — V8's JIT warm-up overhead and a strictly single-threaded execution model. TypeScript 7.0 throws out that foundation entirely, porting the compiler, language service, and tooling to Go. Microsoft is careful to call this a "port," not a rewrite: the type-checking logic was methodically carried over rather than redesigned, so the new compiler is intended to enforce exactly the same semantics developers already rely on from 6.0.

The speedup comes from two stacking effects. Running as a native binary eliminates Node.js/V8 JIT warm-up, accounting for roughly a 3-4x gain on its own. On top of that, Go's goroutines enable shared-memory parallel processing across cores, adding another 2-3x. Because the two effects compound, larger codebases see the most dramatic improvements. Microsoft says it spent over a year running pre-release builds with engineering teams at Bloomberg, Canva, Figma, Google, Lattice, Linear, Miro, Notion, Slack, Vanta, Vercel, and VoidZero, and describes the feedback as overwhelmingly positive.

The most concrete number comes from testing against VS Code's own 1.5-million-line codebase: a full `tsc` run dropped from 77.8 seconds to 7.5 seconds, a 10.4x improvement. Editor project-load time fell from 9.6 seconds to 1.2 seconds — about 8x faster — because the language server itself is now Go-native, not just the command-line compiler. Memory usage came in at roughly half of the JavaScript implementation, and Microsoft notes it hasn't even focused on memory optimization yet. The team also reports language server command failures dropped more than 20x compared to 6.0, a sign of broader stability gains alongside the raw speed numbers.

<div class="article-stats">

| Metric | TypeScript 6.0 | TypeScript 7.0 RC |
|---|---|---|
| VS Code (1.5M LOC) build time | 77.8s | 7.5s |
| Editor project load time | 9.6s | 1.2s |
| Memory usage | Baseline | ~50% |
| Language server command failures | Baseline | ~1/20 |

</div>

Adoption is meant to be frictionless. Running `npm install -D typescript@rc` installs the new compiler side-by-side with any existing version without conflicts, and the package still ships a `tsc` binary, so existing build scripts don't need to change. The one caveat: projects relying on the programmatic compiler API — tools and plugins that call into TypeScript's internals directly — should hold off until 7.1, since that surface isn't fully stabilized yet. Microsoft also published a compatibility package, `@typescript/typescript6`, which provides a `tsc6` binary and re-exports the 6.0 API for teams that need to run both versions during the transition.

<div class="article-callout tip">
<strong>Practical tip</strong> If you're running a large monorepo or a CI pipeline with significant type-check time, benchmark the RC on a separate branch before committing to it. One team in the early-adopter program reported cutting roughly $800/month in GitHub Actions runner costs purely from faster type-check jobs.
</div>

<div class="article-callout info">
<strong>Worth noting</strong> The size of the speedup scales with codebase size. Small, single-file projects will barely notice the difference, while large projects with many files benefit most because parallelism compounds with the native execution gains.
</div>

<div class="article-keypoints">
<strong>Key points</strong>
<ul>
<li>TypeScript 7.0 ports the compiler, language service, and tooling from JavaScript to Go</li>
<li>It's a port, not a rewrite — type-checking behavior matches TypeScript 6.0</li>
<li>VS Code's codebase saw 10x+ faster builds and 8x faster editor load times</li>
<li>Stable GA is expected roughly a month after the June 18 RC release</li>
</ul>
</div>

Microsoft expects to ship the stable 7.0 release within about a month of this RC, and says changes from here on will focus on regression fixes rather than behavior changes — meaning the RC is close to what developers will actually run in production. After 14 years of TypeScript compiling itself in JavaScript, the move to a native Go implementation could reshape build and CI cost structures across the entire ecosystem, not just for Microsoft's own large-scale projects.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://devblogs.microsoft.com/typescript/" target="_blank" rel="noopener">Microsoft — TypeScript Dev Blog (official)</a><br/>
· <a href="https://github.com/microsoft/typescript-go" target="_blank" rel="noopener">microsoft/typescript-go (GitHub, official)</a>
</div>