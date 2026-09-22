---
title: "Anthropic Locks Out Claude Users After Infostealers Hijack Login Sessions"
summary: "General-purpose infostealer malware on users' own PCs—Vidar, Lumma, RedLine and others—copied Claude session cookies and drained paid usage without passwords or 2FA. Anthropic signed affected accounts out, removed saved payment methods, and refunded unauthorized charges. 'Session theft' that sidesteps 2FA is emerging as the new credential theft."
category: "hot-issue"
date: "2026-09-01"
draft: true
readingTime: 5
tags: ["security", "Anthropic", "infostealer", "session-hijacking"]
---

<div class="article-tldr">
General-purpose infostealer malware infecting users' own computers copied the Claude login session cookies stored in their browsers, letting attackers walk into accounts and burn through paid usage without a password or a second factor. Anthropic responded by signing affected accounts out to invalidate the stolen sessions, removing saved payment methods, and refunding unauthorized charges. The company stressed the root cause was device infection, not the platform: it has "no reason to believe this malware is related to Claude, installed through Claude, or related to anything you did with Claude."
</div>

Anthropic has begun locking users out of their Claude accounts after their login sessions were compromised through infostealer malware. In emails sent to affected users last week, the company said the campaign originated from malicious software installed on users' own computers—not a breach of the Claude platform itself.

## What was stolen

The malware Anthropic named in its emails is not targeted—it is commodity infostealer software. On Windows, the company identified Vidar, Lumma (LummaC2), StealC, RedLine and Acreed; on a small number of Macs, Atomic Stealer (AMOS). "It's general-purpose malware that typically arrives with an unofficial download or a malicious app, and it quietly copies saved passwords, login cookies in browsers, and credentials for other apps running locally," Anthropic said. "Your Claude session was likely one of the many things it collected."

<div class="article-stats">
<strong>Malware found (Windows)</strong> Vidar · Lumma (LummaC2) · StealC · RedLine · Acreed<br/>
<strong>Malware found (Mac)</strong> Atomic Stealer (AMOS), small number<br/>
<strong>What was taken</strong> Browser session cookies · saved passwords · local credentials<br/>
<strong>Anthropic response</strong> Forced sign-out + payment method removed + charges refunded
</div>

## Why 2FA didn't help

The key shift is that session theft is replacing credential theft. Two-factor authentication protects the moment of login, but once a user is signed in, the site hands their browser a session cookie so they don't have to re-authenticate on every click. Infostealers copy that cookie, and an attacker who "replays" it is treated as an already-logged-in user—no password needed, no second factor to crack.

With that access, attackers ran down victims' paid usage quotas. Anthropic detected the unusual usage patterns and responded by forcing sign-outs, removing saved payment methods, and refunding the unauthorized charges.

## What victims should do

Anthropic warned that "signing you out of Claude stops the stolen sessions, but it doesn't remove the malware," and told victims to scan for and remove the malware first. Only then should they proceed:

| Step | Action |
|---|---|
| 1 | Scan for and remove the malware from the PC (first priority) |
| 2 | Set a new password and enable 2FA on the email account used for Claude |
| 3 | Update passwords saved in browsers; check card statements |
| 4 | Re-add a payment method only if continuing to use the account |
| 5 | Sign out and back in to other online services to invalidate their active sessions |

<div class="article-callout tip">
Only re-add a payment method after the malware is fully removed. If an infection remains, a freshly entered card can simply be stolen again.
</div>

## What it means

The incident shows AI subscription services becoming a fresh monetization target for infostealers. One affected user traced their infection to a pirated game downloaded from a Russian underground forum. Anthropic said it has "no reason to believe this malware is related to Claude, installed through Claude, or related to anything you did with Claude," and that "phones and tablets do not appear to have been involved." Users should also watch for copy-cat emails impersonating Anthropic that exploit this campaign as a pretext.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://www.helpnetsecurity.com/2026/08/31/claude-accounts-compromised-through-infostealer/" target="_blank" rel="noopener">Help Net Security — Anthropic locks out Claude users after infostealers hijack login sessions</a><br/>
<a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-warns-infostealer-malware-is-hijacking-claude-sessions-to-drain-usage/" target="_blank" rel="noopener">BleepingComputer — Anthropic warns infostealer malware is hijacking Claude sessions to drain usage</a><br/>
<a href="https://www.securityweek.com/anthropic-warns-claude-users-of-infostealer-malware-infections/" target="_blank" rel="noopener">SecurityWeek — Anthropic Warns Claude Users of Infostealer Malware Infections</a><br/>
<a href="https://securityaffairs.com/198166/ai/infostealers-are-hijacking-claude-sessions-and-draining-subscriptions.html" target="_blank" rel="noopener">Security Affairs — Infostealers Are Hijacking Claude Sessions and Draining Subscriptions</a>
</div>

<div class="article-keypoints">
<ul>
<li>Commodity infostealers (Vidar, Lumma, StealC, RedLine, Acreed; AMOS on Mac) copied Claude session cookies from users' PCs and drained paid usage.</li>
<li>Replaying session cookies bypasses passwords and 2FA—"session theft" is emerging as the successor to credential theft.</li>
<li>Anthropic responded with forced sign-outs, payment-method removal, and refunds, stressing the cause was device infection, not the platform.</li>
<li>Victims must remove the malware first, then reset passwords, enable 2FA, and only afterward re-add a payment method.</li>
</ul>
</div>
