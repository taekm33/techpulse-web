---
title: "Angular v22 Released: Signal Forms Go Stable, WebMCP and AI Agent Skills Arrive"
summary: "Angular v22 ships with Signal Forms, Angular Aria, and asynchronous reactivity APIs promoted to production-stable status, plus experimental WebMCP support and new Angular Agent Skills — positioning the framework as an AI-native development platform."
category: "dev-trend"
date: "2026-06-05"
readingTime: 5
tags: ["Angular", "Angular22", "WebMCP", "SignalForms", "frontend"]
---

<div class="article-tldr">
Angular v22 is officially available. The headline changes are the graduation of Signal Forms, Angular Aria, and the resource/httpResource APIs to production-stable status — features that have been in developer preview since Angular v21. Beyond stability, v22 makes a deliberate push into AI-native development with stable Angular MCP tooling, new Angular Agent Skills, and experimental WebMCP support that lets Angular apps expose structured tools for AI agents to consume.
</div>

## Three Major APIs Hit Production Stability

The most immediately impactful changes in Angular v22 are the features moving from developer preview to stable. These are now safe to ship to users without worrying about breaking API changes in future releases.

### Signal Forms
Signal Forms replaces the existing ReactiveFormsModule complexity with a declarative, type-safe form management system built on Angular's Signal primitives. After gathering feedback throughout the v21 cycle, the API has been refined and is now considered production-ready. The Angular team has updated the official guide on angular.dev with migration patterns and new examples.

### Angular Aria
Angular Aria provides a set of accessibility patterns that handle WCAG compliance automatically, allowing developers to focus on business logic and styling while the framework handles accessible component behavior. Introduced in v21 as a bold bet on standards-first accessibility, it's now stable and recommended for all production components.

### resource and httpResource
The asynchronous reactivity APIs — `resource` for generic async data and `httpResource` for HTTP-specific workflows — are both production-ready. These APIs integrate server data fetching directly into Angular's Signal-based reactivity model, eliminating the awkward bridge between async operations and the reactive graph.

<div class="article-stats">

| Feature | v21 Status | v22 Status |
|---------|------------|------------|
| Signal Forms | Developer Preview | ✅ Stable |
| Angular Aria | Developer Preview | ✅ Stable |
| resource / httpResource | Developer Preview | ✅ Stable |
| WebMCP Support | Not available | Experimental |
| AI Agent Skills | Not available | New |

</div>

## Angular Goes AI-Native

The Angular team frames v22 as the framework's entry into AI-native development. Three parallel tracks define this shift.

### Stable Angular MCP Tooling
Angular's Model Context Protocol server — which gives AI coding agents structured access to Angular development workflows — has reached stable status in this release. New tools added to v1.1.1 include `devserver.start` and `devserver.stop`, allowing agents to manage the development server lifecycle directly rather than relying on terminal commands. Testing and end-to-end tools are also stable.

<div class="article-callout tip">
Angular MCP's `ai_tutor`, `modernize`, and `onpush_zoneless_migration` tools are all stable in v22. If you're using an AI coding agent like Google Antigravity for Angular development, connecting it to the Angular MCP server will give it real-time awareness of your running app's state — including live component trees and route structures.
</div>

### Angular Agent Skills
AI coding tools often struggle with Angular's latest APIs because their training data doesn't include patterns from recent major versions. Angular Agent Skills are a direct fix for this problem — standardized, agent-readable files that give AI assistants immediate, accurate context on modern Angular development.

Two skills ship with v22:

- **angular-developer**: Core best practices and guidelines for modern Angular, with a focus on Signal Forms and Angular Aria. The file itself is under 140 lines and uses progressive disclosure, pulling in deep reference material only when the agent actually needs it.
- **angular-new-app**: A guided environment setup skill for developers starting Angular projects in an agentic context for the first time.

Both skills are available immediately in any environment where you run agentic workflows, including Google Antigravity.

### Experimental WebMCP
The most forward-looking addition in v22 is experimental WebMCP support. WebMCP (Web Model Context Protocol) is a proposed web standard that allows web pages to register structured tools that visiting AI agents can discover and invoke — without resorting to DOM scraping or screenshot-based interaction.

Angular v22's WebMCP support covers:
- Tool definitions scoped to the entire app, individual routes, or services
- Automatic tool generation from dynamic Signal Forms

<div class="article-callout info">
Chrome 149, released the same week as Angular v22, added WebMCP debugging tools to DevTools' Application panel. Developers can enable them via `#devtools-webmcp-support` and `#enable-webmcp-testing` flags to inspect tool schemas, run tools manually, and monitor invocation events — useful for developing and debugging Angular WebMCP integrations.
</div>

## API Quality-of-Life Improvements

### The New @Service Decorator
Angular v22 introduces `@Service` as an ergonomic replacement for `@Injectable({ providedIn: 'root' })` for the common case of defining global singletons. The `@Injectable` decorator remains for cases requiring deeper configuration or constructor injection. The goal is to make intent explicit at a glance.

### Asynchronous Dependency Injection with injectAsync
`injectAsync` brings code-splitting to services for the first time. Previously, only components and routes could be lazily loaded. Now, large service dependencies can be loaded on demand, reducing initial bundle size for applications with heavy optional features.

### Arrow Functions in Templates
Angular v22 adds support for arrow functions directly in template expressions, reducing the need for wrapper methods in component classes for simple transformations.

<div class="article-keypoints">

**Key Takeaways**
- Signal Forms, Angular Aria, and resource/httpResource APIs are now production-stable in v22
- Angular MCP tooling is stable — AI agents can now start/stop dev servers and run tests autonomously
- Angular Agent Skills give AI coding tools accurate, up-to-date context on modern Angular patterns
- Experimental WebMCP lets Angular apps expose structured tools for AI agents to interact with directly
- New @Service decorator and injectAsync API improve code clarity and enable service-level code splitting

</div>

Angular v22 lands at an interesting moment: the framework is simultaneously consolidating its reactive programming model with Signal stabilizations while staking out a position as the first mainstream frontend framework designed to work with AI agents as first-class consumers. WebMCP is experimental today, but if it becomes a web standard — and Chrome's support suggests momentum — Angular will already have a head start.
<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://blog.angular.dev/angular-v22-is-now-available" target="_blank" rel="noopener">Angular v22 Official Release Blog</a><br/>
· <a href="https://angular.dev/guide/signals/signal-forms" target="_blank" rel="noopener">Signal Forms Official Guide</a><br/>
· <a href="https://angular.dev/reference/releases/22.0" target="_blank" rel="noopener">Angular v22 Release Notes</a><br/>
· <a href="https://github.com/angular/angular/releases" target="_blank" rel="noopener">Angular GitHub Releases</a><br/>
</div>
