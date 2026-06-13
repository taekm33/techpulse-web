---
title: "Angular v22: Signal Forms Go Stable, OnPush Becomes the Default — The Signal Era Matures"
summary: "Angular v22 graduates Signal Forms, Angular Aria, and the Asynchronous Reactivity APIs to stable status. OnPush is now the default change detection strategy, and new APIs like @Service, injectAsync, and template spread syntax dramatically improve developer ergonomics."
category: "dev-trend"
date: "2026-06-13"
readingTime: 5
tags: ["Angular", "Angular22", "SignalForms", "TypeScript", "Frontend", "WebDevelopment"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: Angular v22, released June 3, 2026, is the most consequential Angular release in years. It promotes Signal Forms, Angular Aria, and the resource/httpResource APIs from experimental to production-stable, sets OnPush as the new default change detection strategy, introduces the @Service decorator and injectAsync for cleaner service definitions and lazy loading, and adds significant template improvements including spread syntax, arrow functions, and @switch exhaustive checks. TypeScript 6 is supported.
</div>

## "Production Ready Is the Name of the Game"

The Angular team's theme for v22 is straightforward: stop shipping APIs as experiments and start shipping them as the foundations developers can build on with confidence. Three APIs that have been in developer preview or experimental status crossed the finish line in this release.

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/0nFiHt4sr8o" title="Building scalable AI powered web apps with Angular" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Three APIs Now Stable for Production

### Signal Forms: The New Standard for Angular Form Handling

Signal Forms replace both Reactive Forms and Template-driven Forms with a unified, signal-based approach. The API combines strong TypeScript type safety with the declarative ergonomics of template binding and the fine-grained reactivity of Angular Signals.

```typescript
import { form } from "@angular/forms/signals";

class Payment {
  readonly paymentModel = signal({ paymentType: '', amount: 0 });
  readonly f = form(paymentModel, schema => {
    required(schema.paymentType, { message: 'Required field' });
  });
}
```

When a single field changes, only that field's dependents re-evaluate — no unnecessary full-component re-renders. Signal Forms are fully compatible with the existing `ControlValueAccessor` ecosystem, meaning third-party component libraries require no immediate changes.

### Angular Aria: Accessible by Default

Angular Aria's twelve UI accessibility patterns are now stable and production-ready. The package handles all accessibility semantics — keyboard navigation, screen reader announcements, ARIA attributes — while developers focus on styling and business logic. Full integration with Signal Forms means accessibility metadata flows automatically through form state.

### resource, rxResource, and httpResource: Declarative Async Data

```typescript
export class WeatherComponent {
  selectedCity = signal('Chicago');
  weather = httpResource<{ temperature: number; condition: string }>(() =>
    `https://api.example.com/v1/forecast/${this.selectedCity()}`
  );
}
```

When `selectedCity` changes, `httpResource` automatically re-fetches. Loading, error, and data states are managed by the API — no manual RxJS subscriptions required. The new `chain()` method allows resources to depend on other resources, with the second request automatically waiting for the first to complete.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">3</span><span class="stat-label">APIs graduated to stable in this release</span></div>
<div class="stat-item"><span class="stat-number">100K+</span><span class="stat-label">GitHub stars on angular/angular</span></div>
<div class="stat-item"><span class="stat-number">TypeScript 6</span><span class="stat-label">Official support</span></div>
<div class="stat-item"><span class="stat-number">OnPush</span><span class="stat-label">New default change detection strategy</span></div>
</div>

## OnPush Is Now the Default

Starting in v22, all new Angular applications use **OnPush change detection by default**. This aligns with Zoneless Angular and means performance-optimized change detection applies to every new component without explicit configuration. The old default — `ChangeDetectionStrategy.Default` — is renamed to `ChangeDetectionStrategy.Eager` for clarity, and the CLI's migration script handles the rename automatically for existing projects.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Upgrading from v21</strong><br>Run <code>ng update @angular/core@22</code> and let the automatic migration handle <code>ChangeDetectionStrategy.Default → Eager</code> renaming. Signal Forms are backwards-compatible with <code>ControlValueAccessor</code>, so third-party form components continue to work. Review the deprecation of Webpack builders and <code>@angular-devkit/build-angular</code> if you use non-standard build configurations.</div>
</div>

## New APIs That Improve Day-to-Day Development

| API / Feature | What It Does |
|---------------|-------------|
| `@Service` decorator | Cleaner replacement for `@Injectable({ providedIn: 'root' })` |
| `injectAsync` | Lazy-loads services on demand with code splitting support |
| Template spread syntax | Use `{...obj}`, `[...arr]`, and spread in function calls directly in templates |
| Arrow functions in templates | Inline simple arrow functions instead of creating helper methods |
| `@switch` multi-case matching | Multiple cases share a single output block; exhaustive checks via `@default never` |
| HTML element comments | Comment individual attributes and bindings directly in templates |
| Platform Navigation API | Router integrates with the browser's native Navigation API |
| `withExperimentalAutoCleanupInjectors` | Route injectors automatically destroyed when route is no longer active |

## The `@Service` Decorator in Practice

```typescript
import { Service } from '@angular/core';

@Service()
export class UserStore {
  private users = signal<User[]>([]);
  readonly users$ = this.users.asReadonly();
  
  addUser(user: User) {
    this.users.update(current => [...current, user]);
  }
}
```

That single `@Service()` annotation replaces `@Injectable({ providedIn: 'root' })` for the vast majority of use cases, making the intent unmistakably clear.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Coming in Q3 2026: @boundary Error Boundaries</strong><br>Angular v22 previews <code>@boundary { } @error (let err) { }</code> — template-level error boundaries that catch component failures without crashing the entire page. A payment checkout component that throws an error will render fallback content rather than a blank screen. Full developer preview is targeted for Q3 2026.</div>
</div>

## Angular for the Agentic Era

v22 also focuses Angular's AI story. Angular MCP tools — including `devserver.wait_for_build`, `devserver.start`, and `devserver.stop` — are now stable, enabling self-healing loops where AI agents build, observe output, and iterate autonomously. **Angular Agent Skills** provide AI coding assistants with up-to-date context on modern Angular patterns including Signal Forms and Angular Aria.

Experimental **WebMCP** support allows Angular apps to expose structured tools directly to AI assistants running in the browser — a forward-looking integration for agentic UI workflows.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Signal Forms, Angular Aria, and resource/httpResource are now production-stable — build with confidence</li>
<li>OnPush is the new default change detection strategy — performance by default for all new apps</li>
<li>@Service decorator and injectAsync simplify service definitions and enable lazy loading</li>
<li>Template gains spread syntax, arrow functions, multi-case @switch, and HTML comments</li>
<li>TypeScript 6 fully supported; Angular MCP tools stabilized for agentic development</li>
<li>Webpack and @angular-devkit/build-angular deprecated — migrate to the application builder</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources & Downloads</strong><br>— <a href="https://github.com/angular/angular/releases/tag/v22.0.0" target="_blank" rel="noopener noreferrer">Angular v22.0.0 Official GitHub Release Notes</a><br>— <a href="https://github.com/angular/angular/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Angular Full CHANGELOG</a><br>— <a href="https://github.com/angular/angular-cli/releases" target="_blank" rel="noopener noreferrer">Angular CLI Latest Releases & Downloads</a></div></div>
