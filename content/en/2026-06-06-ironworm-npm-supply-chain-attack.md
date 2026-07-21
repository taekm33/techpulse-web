---
title: "IronWorm Malware Hits 36 npm Packages in Sophisticated Supply Chain Attack"
summary: "JFrog discovered IronWorm, a Rust-based infostealer malware that infected 36 npm packages, hides behind an eBPF kernel rootkit, communicates via Tor, and self-propagates using stolen npm credentials — one of the most technically advanced supply chain attacks targeting the JavaScript ecosystem."
category: "it-news"
date: "2026-06-06"
readingTime: 5
tags: ["Security", "npm", "SupplyChain", "Malware", "OpenSource"]
---

<div class="article-tldr">
Supply chain security firm JFrog disclosed IronWorm on June 4, 2026 — a Rust-compiled infostealer that infected 36 npm packages, conceals itself with an eBPF kernel rootkit, exfiltrates stolen secrets via GitHub Actions disguised as lint output, and self-propagates by publishing trojanized versions of packages owned by its victims. The attack was contained early, but represents a significant escalation in npm supply chain attack sophistication.
</div>

## What Makes IronWorm Different

Most npm supply chain attacks are written in JavaScript, making them relatively straightforward to detect through static analysis. IronWorm breaks from this pattern with three technical capabilities that distinguish it from previous attacks.

**Rust-compiled binary**: IronWorm is distributed as a Rust ELF binary executed through the `preinstall` npm lifecycle hook. This defeats most JavaScript-focused static analysis tools, increases execution performance, and complicates reverse engineering.

**eBPF kernel rootkit**: IronWorm deploys an eBPF-based rootkit that operates at the Linux kernel level. This allows it to hide its presence from standard process monitoring tools and security scanners that operate in user space — a technique borrowed from advanced persistent threat (APT) toolkits and rarely seen in npm supply chain attacks.

**Tor network C2**: Exfiltrated data is transmitted to the attacker over the Tor network, defeating IP-based detection and making infrastructure attribution extremely difficult.

## Attack Chain: How It Spreads

The campaign originated from a compromised npm account named `asteroiddao`. This account published package versions containing the Rust ELF binary, which executed automatically via the `preinstall` script when any developer or CI system ran `npm install`.

Upon execution, IronWorm harvests **86 environment variables** and **20 credential files** from the compromised system. High-value targets include:

- OpenAI, AWS, and Anthropic API keys
- npm credentials and Trusted Publishing secrets
- HashiCorp Vault configuration files
- SSH keys
- Exodus cryptocurrency wallet files

<div class="article-stats">

| Metric | Value |
|--------|-------|
| Infected npm packages | 36 |
| Environment variables targeted | 86 |
| Credential file types targeted | 20 |
| Malware language | Rust |
| C2 communication | Tor network |
| Initial compromised account | asteroiddao |

</div>

## Self-Propagation: The Most Dangerous Feature

What separates IronWorm from a standard infostealer is its worm-like propagation mechanism. After stealing npm credentials — including Trusted Publishing secrets used by CI/CD pipelines to publish directly to npm — IronWorm uses those credentials to publish trojanized versions of packages owned by the victim developer.

This creates a cascading infection chain: one compromised developer account can infect their downstream users, whose credentials IronWorm then harvests to infect another tier of the dependency graph. The Trusted Publishing vector is particularly dangerous because it allows IronWorm to push malicious commits directly into the victim's repository, embedding the malware upstream rather than only in published package versions.

<div class="article-callout tip">
**Immediate actions**: If you use any packages listed in JFrog's advisory, upgrade to the clean versions immediately. Rotate all API keys (npm, AWS, OpenAI, Anthropic), revoke and regenerate SSH keys, and enable two-factor authentication on every npm and GitHub account. Audit CI/CD secrets stored in environment variables — assume they are compromised if the system ran npm install against an affected package.
</div>

## GitHub Actions as an Exfiltration Channel

JFrog's investigation uncovered a particularly evasive exfiltration method. IronWorm serializes collected secrets into a single value and writes it to a file with a name designed to look like normal lint or formatting output — the kind of file a developer or security reviewer would dismiss without scrutiny.

This file is then transmitted to the attacker via GitHub Actions, exploiting GitHub's legitimate infrastructure rather than generating suspicious outbound network connections. Because the exfiltration piggybacks on normal CI artifact uploads, it bypasses network-layer security controls that would flag unusual external connections.

## Concurrent Campaign: binding.gyp

During the same window, Endor Labs and StepSecurity identified a separate but similar attack using JavaScript-based malware named `binding.gyp`. This campaign performed registry poisoning and GitHub Actions infection using a different mechanism.

The simultaneous timing of two distinct npm supply chain campaigns raises the possibility of a coordinated offensive against the JavaScript ecosystem rather than independent opportunistic attacks.

<div class="article-callout info">
**Early containment**: Ox Security reported that IronWorm was detected early enough to prevent spread to high-traffic packages. However, the attack's technical sophistication suggests the tactics will appear in future campaigns, likely targeting higher-impact packages.
</div>

## Defense Recommendations

| Action | Priority | Owner |
|--------|----------|-------|
| Upgrade all affected packages immediately | Immediate | All developers |
| Rotate API keys and SSH keys | Immediate | All developers |
| Enable 2FA on npm and GitHub accounts | Immediate | All developers |
| Audit CI/CD environment variable secrets | Within 24h | DevOps teams |
| Deploy eBPF-based runtime detection tooling | Short term | Security teams |
| Establish Trusted Publishing secret rotation policy | Short term | DevOps teams |

<div class="article-keypoints">

### Key Takeaways

- **IronWorm** is a Rust-based npm supply chain attack using an eBPF rootkit and Tor C2
- **36 packages infected**; targets 86 environment variables and 20 credential file types
- **Self-propagates** by publishing trojanized versions of packages owned by compromised accounts
- **Exfiltrates via GitHub Actions** using fake lint/format output files to evade detection
- **Immediate action required**: upgrade affected packages, rotate all API keys, enable 2FA

</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://docs.npmjs.com/trusted-publishers" target="_blank" rel="noopener">npm Trusted Publishing docs</a><br/>
· <a href="https://github.com/advisories" target="_blank" rel="noopener">GitHub Advisory Database</a><br/>
· <a href="https://openssf.org/" target="_blank" rel="noopener">OpenSSF — open source supply chain security</a><br/>
</div>
