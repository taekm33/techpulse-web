---
title: "npm 12 Blocks Install Scripts by Default — Here's What Breaks and How to Prepare"
summary: "GitHub's npm v12, due in July 2026, makes install scripts, Git dependencies, and remote URL dependencies opt-in instead of automatic — the biggest security overhaul in npm's history, triggered by the Shai-Hulud supply-chain worm."
category: "dev-trend"
date: "2026-06-12"
readingTime: 5
tags: ["npm", "Security", "SupplyChain", "JavaScript", "DevTools"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> GitHub announced on June 9 that <strong>npm v12</strong> (estimated July 2026) will block dependency install scripts by default, end automatic resolution of Git dependencies, and block remote URL dependencies. All three behaviors that previously ran automatically during <code>npm install</code> will now require explicit opt-in. npm becomes the last major package manager to adopt these secure defaults — pnpm, Bun, Yarn Berry, and Deno already block install scripts by default.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/gwTQLZSIlsU" title="A single PR just hijacked the NPM registry..." loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## Why Now: The Shai-Hulud Worm

The catalyst was unmistakable. On May 11, 2026, a threat group called **TeamPCP** released what researchers dubbed the "Mini Shai-Hulud" worm — the most sophisticated npm supply-chain attack on record. Without stealing a single credential, the attackers chained three GitHub Actions vulnerabilities to hijack TanStack's legitimate release pipeline and publish 84 malicious package versions across 42 packages.

Within six minutes, the worm had self-propagated. By end of day, over **170 packages on npm and PyPI** were infected, including packages with 12+ million weekly downloads. The attack vector was painfully simple: `postinstall` scripts that ran automatically the moment a developer typed `npm install`.

<div class="article-stats">
<div class="stat-item"><span class="stat-number">42</span><span class="stat-label">Packages directly compromised</span></div>
<div class="stat-item"><span class="stat-number">170+</span><span class="stat-label">Packages infected after propagation</span></div>
<div class="stat-item"><span class="stat-number">12M+</span><span class="stat-label">Weekly downloads of TanStack React Router</span></div>
<div class="stat-item"><span class="stat-number">July 2026</span><span class="stat-label">npm 12 estimated release</span></div>
</div>

## The Three Breaking Changes

### 1. `allowScripts` defaults to OFF

`npm install` will no longer execute `preinstall`, `install`, or `postinstall` scripts from any dependency unless it has been explicitly approved. This includes:

- Native module builds triggered via `node-gyp` (packages with a `binding.gyp` are now blocked)
- `prepare` scripts from Git, local file, and linked dependencies

To manage your allowlist:

```bash
# See what would be blocked
npm approve-scripts --allow-scripts-pending

# Approve packages you trust
npm approve-scripts

# Explicitly block packages
npm deny-scripts
```

Results are written to `package.json` under `allowScripts`, pinned to installed versions (e.g., `[email protected]: true`). **Commit this file so your whole team gets the same policy.**

### 2. `--allow-git` defaults to `none`

`npm install` will no longer resolve Git dependencies (direct or transitive) unless explicitly permitted. This closes a code-execution path where a Git dependency's `.npmrc` could override which Git executable was used — bypassing `--ignore-scripts` entirely.

### 3. `--allow-remote` defaults to `none`

Dependencies from remote URLs (HTTPS tarballs, etc.) — both direct and transitive — are blocked unless permitted. The `--allow-file` and `--allow-directory` flags are not changing.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>How to Prepare Right Now</strong><br>Upgrade to <strong>npm 11.16.0 or later</strong> and run your normal install. npm will print warnings for every behavior that will break under v12. Run <code>npm approve-scripts --allow-scripts-pending</code> to generate your allowlist, approve what you trust, and commit <code>package.json</code>. After that, only approved scripts keep running after the upgrade.</div>
</div>

## Package Manager Security Defaults: State of Play

| Package Manager | Default Behavior | Allowlist Support |
|----------------|-----------------|-------------------|
| npm 11.x (current) | Auto-run (warnings only) | Advisory only |
| **npm 12 (July 2026)** | **Blocked by default** | **allowScripts in package.json** |
| pnpm v10+ | Blocked by default | trustedDependencies |
| Yarn Berry | Blocked by default | — |
| Bun | Blocked + auto-whitelist | trustedDependencies |
| Deno | Blocked by default | deno approve-scripts |

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>What Will Break</strong><br>Projects using native modules with node-gyp (sharp, canvas, bcrypt, sqlite3, etc.) or esbuild will fail to install without an approved allowlist. CI/CD pipelines that rely on postinstall scripts for build steps will also break. Run <code>npm approve-scripts --allow-scripts-pending</code> now — before upgrading — to identify affected packages and build your migration plan.</div>
</div>

## Community Reaction

The developer community has largely welcomed the change. The most common reaction: "npm is the last major package manager to block install scripts by default — this is long overdue." pnpm's safer defaults have been one of its main selling points for years, and the TanStack incident demonstrated exactly why.

A minority of developers have noted the limitation: *"Now all the malware can move from the install script to the module itself."* This is true — npm 12 eliminates the most common automatic-execution attack vector, but it is not a full registry security guarantee. The goal is to close the most exploited path, not to solve supply-chain security entirely.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>npm v12 (July 2026): install scripts blocked by default — explicit opt-in required via allowScripts</li>
<li>Git dependencies and remote URL dependencies also blocked by default in v12</li>
<li>Triggered by the Shai-Hulud worm (May 2026): 170+ packages infected via postinstall auto-execution</li>
<li>Upgrade to npm 11.16.0 now to see v12 preview warnings and build your allowlist</li>
<li>Projects using esbuild, node-gyp, or postinstall build steps must migrate before upgrading</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Sources &amp; Further Reading</strong><br>— <a href="https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/" target="_blank" rel="noopener noreferrer">GitHub Official Changelog — Upcoming Breaking Changes for npm v12</a><br>— <a href="https://www.bleepingcomputer.com/news/security/github-announces-npm-security-changes-to-tackle-supply-chain-attacks/" target="_blank" rel="noopener noreferrer">BleepingComputer — npm 12 Security Changes Deep Dive</a><br>— <a href="https://github.com/npm/rfcs/pull/868" target="_blank" rel="noopener noreferrer">npm RFC PR #868 — Make Install Scripts Opt-In (full technical spec)</a></div></div>
