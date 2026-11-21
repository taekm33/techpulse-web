---
title: "Google Genie 4 Leaves Research Preview: AI Ultra Access in Project Genie, Gemini API at About $0.10 per Second"
summary: "Google opened its Genie 4 interactive world model to eligible Google AI Ultra subscribers in Project Genie on November 18, 2026, and to developers through the Gemini API and Google AI Studio on November 19. It streams 720p, 24fps worlds with native stereo audio that can be steered by text mid-session. API use needs a paid-tier key and costs about $0.10 per second with audio. This analysis of public materials covers what is confirmed, what is not, and how to budget a pilot."
category: "ai-news"
date: "2026-11-21"
readingTime: 6
tags: ["Google", "Google DeepMind", "Genie 4", "world model", "Gemini API", "Google AI Ultra", "Project Genie"]
---

<div class="article-tldr">
Genie 4, the world model Google DeepMind showed to trusted testers on October 27, is now in wider hands. On <strong>November 18</strong> Google began <a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/" target="_blank" rel="noopener">rolling it out in Project Genie to eligible Google AI Ultra subscribers</a>. A day later it posted that <a href="https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/" target="_blank" rel="noopener">Genie 4 is available on the Gemini API and in Google AI Studio</a>. The developer docs put the price at <strong>roughly $0.10 per second of output, stereo audio included</strong>, and require a paid-tier API key.
</div>

This piece is an analysis of public materials: two Google blog posts, the DeepMind research overview, the Google AI Studio Genie documentation, and press coverage. TechPulse did not run the model, so nothing below is a measurement of image quality or latency; figures are as published by Google or reported by the outlets cited.

## Who should care

- **Game designers, previs and XR teams** who want a fast way to sketch a space, walk through it, and change the weather or lighting with a sentence before committing artists' time.
- **Robotics and agent researchers.** Google lists training robots and AI agents as a target use, and DeepMind's overview shows Genie 4 simulating Apptronik's Apollo humanoid playing checkers alongside Gemini 4 Argon.
- **Google AI Ultra subscribers**, who are the first consumer group in. Decrypt puts the U.S. Ultra plan at $199.99 a month. Google AI Pro members can only join a waitlist for now.
- **Developers pricing a product feature.** Billing is per second of streamed world, so session length and concurrency drive cost directly.

## What Google has confirmed

<div class="article-stats">
<strong>Timeline</strong> Oct 27 research preview (trusted testers) → Nov 18 Project Genie for eligible Ultra subscribers → Nov 19 Gemini API and AI Studio<br/>
<strong>Model ID</strong> genie-4, via the Interactions API on v1beta, streamed over WebRTC or WebSocket; browser clients use ephemeral auth tokens<br/>
<strong>Output</strong> 1280×720 (16:9) at 24fps with 48 kHz stereo audio; no portrait mode, no configurable frame rate<br/>
<strong>Inputs</strong> text, one 16:9 starting image, keyboard and camera actions; no live mic or webcam input, no function calling<br/>
<strong>Billing</strong> paid-tier key; 240 video output tokens per frame (5,760 tokens/sec), about $0.10/sec with audio<br/>
<strong>Responsiveness (per docs)</strong> first frame in about 5–9 seconds; mid-session text edits show up in about 1–2 seconds<br/>
<strong>Provenance</strong> SynthID watermark on all video and audio
</div>

The <a href="https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/" target="_blank" rel="noopener">October 27 DeepMind post</a> called Genie 4 its first real-time world model to generate audio natively (music, ambient sound and dialogue) and described Gemini models acting as a director that plans scenes and checks consistency. At that point it was a research preview, with Ultra subscribers and early API partners named as the next groups. This week's two posts deliver on that plan.

The November 18 post also upgraded the older Genie 3 experience inside Project Genie: worlds can now be explored for up to three minutes per generation, up from 60 seconds, with 360-degree panorama grounding and world chaining. That three-minute figure is for Genie 3; Google's blog does not state a session length for Genie 4.

## Unconfirmed or still open

- **Session cap.** The AI Studio docs' limitations section says visual stability "may degrade past 60-90 seconds" with a "hard cap" of 120 seconds. Whether that is a firm per-session API limit or quality guidance is not spelled out elsewhere.
- **Eligibility.** Google says "eligible" Ultra subscribers without listing countries or age rules. The first Project Genie release in January was limited to U.S. adults 18+, and Engadget reported a global adult rollout in May, but Genie 4's eligibility list is not published.
- **GA vs. preview.** Neither post labels the API release as generally available, and it sits on the v1beta endpoint, so terms could change.
- **Pro timing.** Google has not said when AI Pro subscribers move off the waitlist.

## What it means in practice

The cost math is simple and worth doing before any demo. At about $0.10 per second, a minute of streamed world is roughly $6 and an hour roughly $360; a full 120-second run is about $12. Those are our own multiplications from the published rate, before taxes and any rate-limit tiers. That pricing fits internal prototyping and research far better than an always-on consumer feature.

Latency depends on geography. The docs list data centers in the United States, Western Europe and Japan, and target under 150 ms round trips across North America, Western and Central Europe and East Asia. Teams elsewhere should test from their own networks.

Content rules matter for studios. Prompts or images containing identifiable real people, public figures, or copyrighted brand IP may be blocked or can end a stream, so pitching a licensed franchise through Genie 4 is likely to hit filters.

<div class="article-callout tip">
<strong>Practical next steps</strong><br/>
1. <strong>Ultra subscribers</strong>: open <a href="https://labs.google/projectgenie" target="_blank" rel="noopener">Project Genie</a> and check whether Genie 4 appears; the rollout is gradual.<br/>
2. <strong>Pro subscribers</strong>: join the waitlist on the same page; no date has been given.<br/>
3. <strong>Developers</strong>: read the pricing and rate-limit sections linked from the <a href="https://aistudio.google.com/docs/genie" target="_blank" rel="noopener">Genie 4 docs</a>, then pilot with short sessions on a paid key. Enforce a session timer and a billing alert in code from day one.<br/>
4. <strong>Prompt prep</strong>: prepare 16:9 starting images and avoid real people or branded characters.<br/>
5. <strong>Publishing output</strong>: everything carries SynthID; set an AI-disclosure policy before using clips publicly.
</div>

## Limitations of this article

Based on the Google posts of November 18 and 19, the DeepMind overview of October 27, the AI Studio Genie documentation, and reporting from Decrypt, TechCrunch and Engadget, all checked on November 21. Google itself lists camera latency, intricate physical interactions, real-time audio precision and long-term scene permanence as open problems. Pricing and access can change.

<p><em>Last checked 2026-11-21.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/" target="_blank" rel="noopener">Google Blog — Genie 4 now available in Project Genie (Nov 18, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/" target="_blank" rel="noopener">Google Blog — Genie 4 is now available on the Gemini API (Nov 19, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/" target="_blank" rel="noopener">Google DeepMind — Genie 4: A new generation of world simulation (Oct 27, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aistudio.google.com/docs/genie" target="_blank" rel="noopener">Google AI Studio docs — Genie 4 (pricing, output specs, limitations)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://decrypt.co/383572/google-genie-4-ultra-subscribers-build-ai-worlds-real-time" target="_blank" rel="noopener">Decrypt — Google's Genie 4 Is Here, Letting Ultra Subscribers Build AI Worlds in Real Time</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/" target="_blank" rel="noopener">TechCrunch — Google's Genie 4 world model adds audio, more realistic worlds, and real-time steering</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.engadget.com/2176797/project-genie-adds-google-street-view-integration-and-goes-live-for-global-ai-ultra-users/" target="_blank" rel="noopener">Engadget — Project Genie goes live for global AI Ultra users (May 2026, Genie 3 era)</a>
</div>

<div class="article-keypoints">
<ul>
<li>Genie 4 moved from trusted-tester preview (Oct 27) to Project Genie for eligible AI Ultra subscribers (Nov 18) and the Gemini API/AI Studio (Nov 19)</li>
<li>Streams 720p, 24fps worlds with 48 kHz stereo audio; text prompts can change weather, lighting, objects and events mid-session</li>
<li>API: model genie-4 on v1beta, paid-tier key, about $0.10/sec with audio (roughly $6/min by simple math)</li>
<li>AI Pro is waitlist-only; Genie 3 exploration in Project Genie extended from 60 seconds to 3 minutes</li>
<li>Not yet published: Genie 4 eligibility by country, a firm session cap, GA status and Pro timing</li>
</ul>
</div>
