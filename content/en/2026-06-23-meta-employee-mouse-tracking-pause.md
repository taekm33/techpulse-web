---
title: "Meta Pauses Employee Mouse-and-Keystroke Tracking Program After Sensitive Data Exposure"
summary: "Meta has halted its internal Model Capability Initiative, which logged employee mouse movements and keystrokes to train its AI models, after sensitive staff data was left accessible to the entire company."
category: "it-news"
date: "2026-06-23"
readingTime: 5
tags: ["Meta", "data-security", "employee-monitoring", "AI-training-data", "privacy"]
---

<div class="article-tldr">
Meta has paused an internal program called the Model Capability Initiative (MCI) that captured employees' mouse movements, clicks, and keystrokes to feed its AI models. The pause follows revelations that sensitive employee data collected by the tool — including private conversations and performance records — was inadvertently readable by anyone at the company. The program had already drawn employee pushback over surveillance concerns, and the timing now collides with a security incident.
</div>

Meta said on Monday, June 22, 2026, that it would halt an internal tool tracking staff mouse movements and digital activity used to train its AI models, while it investigates how a trove of sensitive employee data ended up accessible to the entire company. The pause came after documents reviewed by Reuters showed the exposure was broader than intended.

## What MCI Actually Collected

The tool at the center of the controversy is the Model Capability Initiative, or MCI, rolled out in April 2026. It captured the mouse movements, clicks, and keystrokes of US-based employees, with occasional screenshots, feeding the resulting data into Meta's models as training material. According to the reporting, the exposed material reportedly included private conversations, performance data, and transcriptions — records that are sensitive even when handled carefully by HR, let alone made visible across an entire workforce.

Meta spokesperson Tracy Clayton said the company had "carefully designed this program with privacy safeguards" and that it has "no indication at this time that any data was improperly accessed by Meta employees," but is pausing the initiative while it investigates. The company declined to say how long the halt would last, leaving the program suspended indefinitely with no stated reopening date or commitment about whether it will return in its current form.

<div class="article-stats">
<strong>Launch date:</strong> April 2026<br/>
<strong>Pause date:</strong> June 22, 2026<br/>
<strong>Scope:</strong> All US-based Meta employees<br/>
<strong>Exposure:</strong> Sensitive data readable company-wide
</div>

## A Program Already Under Fire

MCI was contentious from the start, and not only because of this security lapse. Employees had objected to being surveilled by software explicitly built to learn from their own work, a tension that sharpened considerably given the timing — the program's rollout overlapped with a period of job cuts at the company. That backdrop means this isn't simply a technical misconfiguration story; it lands on top of an existing trust deficit between staff and management over how their data and labor get used to build the very systems that may eventually replace parts of their jobs.

| Aspect | Detail |
|---|---|
| Program name | Model Capability Initiative (MCI) |
| Data collected | Mouse movements, clicks, keystrokes, screenshots |
| Purpose | Training data for Meta's AI models |
| Incident | Sensitive employee data exposed company-wide |
| Current status | Paused pending investigation |

<div class="article-callout tip">
For IT and security teams building internal AI training-data pipelines from employee activity, this incident is a reminder to enforce strict least-privilege access controls and apply anonymization or masking at the point of collection — not after the fact — so that an access-control misconfiguration can't expose identifiable personal data company-wide.
</div>

<div class="article-callout info">
Logging keystrokes and screenshots tied to identifiable employees runs directly into data-protection regimes like Europe's GDPR, which sets a high bar for processing personal data and treats workplace consent as inherently weak given the power imbalance between employer and staff. Programs like MCI illustrate why employee-monitoring AI initiatives face mounting legal exposure even when framed as model-improvement efforts.
</div>

## What Comes Next

The episode is a sharp illustration of the risks lurking behind a broader industry trend: AI companies increasingly mining their own employees' day-to-day digital behavior to sharpen internal models. Meta has not said how long the pause will last or whether MCI will return in its current form, a redesigned version, or not at all. The incident is likely to draw scrutiny toward other large tech companies running similar internal data-collection programs, and toward regulators already watching how workplace AI training intersects with privacy law.

<div class="article-keypoints">
<ul>
<li>Meta paused its MCI program, which tracked employee mouse and keyboard activity to train AI models.</li>
<li>Sensitive employee data, including private conversations and performance records, was exposed company-wide.</li>
<li>The program had already faced internal backlash, compounded by its timing alongside layoffs.</li>
<li>The episode raises fresh GDPR and privacy-law concerns about employee-derived AI training data.</li>
</ul>
</div>
