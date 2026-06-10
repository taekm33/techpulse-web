---
title: "Gemini 3.5 Live Translate: Real-Time Voice Translation in 70+ Languages"
summary: "Google launched Gemini 3.5 Live Translate on June 9, 2026 — a streaming audio model that translates speech continuously across 70+ languages while preserving the speaker's intonation, pacing, and pitch."
category: "ai-news"
date: "2026-06-10"
readingTime: 5
tags: ["Gemini", "Google", "real-time-translation", "voice-AI", "Google-Meet"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Google's Gemini 3.5 Live Translate is a streaming speech-to-speech model that handles 70+ languages without manual configuration, preserves speaker voice characteristics, and operates continuously without waiting for full sentences. It's available now in the Google Translate app (Android/iOS), rolling out to Google Meet, and open to developers via the Gemini Live API.
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/xdPIwgDriTg" title="Introducing Gemini's speech-to-speech translation capabilities" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-stats">
  <div class="article-stats__item"><span class="article-stats__value">70+</span><span class="article-stats__label">Supported languages</span></div>
  <div class="article-stats__item"><span class="article-stats__value">2,000+</span><span class="article-stats__label">Language pairs in one meeting</span></div>
  <div class="article-stats__item"><span class="article-stats__value">5→70+</span><span class="article-stats__label">Google Meet language expansion</span></div>
  <div class="article-stats__item"><span class="article-stats__value">Now</span><span class="article-stats__label">Public developer preview (Live API)</span></div>
</div>

## What Is Gemini 3.5 Live Translate?

**Gemini 3.5 Live Translate**, announced June 9, 2026, is Google's latest audio AI model built for live speech-to-speech translation. Unlike traditional turn-by-turn systems that wait for a speaker to finish before generating a response, Gemini 3.5 Live Translate processes audio as it streams in. The result: fluid, near-real-time translated speech that stays just a few seconds behind the original speaker throughout the session.

The model automatically detects languages from over 70 options — no manual setup required. It preserves the speaker's **intonation, pacing, and pitch**, so translated speech sounds natural rather than robotic. Noise robustness ensures the model handles unpredictable environments, from crowded conference rooms to outdoor settings. All generated audio carries Google's SynthID inaudible watermark.

## Where Is It Available?

### Google Translate App (Android & iOS)

The Google Translate app's Live Translate feature now runs on Gemini 3.5 Live Translate, rolling out globally on both platforms today. Connect any pair of headphones and tap "Live translate" to start. On Android, Google is also introducing a new **listening mode** that streams translated audio directly through the phone's earpiece — no headphones required. Simply hold the phone to your ear like a regular call.

### Google Meet

Speech translation in Google Meet is being upgraded from the previous five-language limit to **70+ languages**, enabling more than 2,000 language combinations in a single meeting — no longer limited to translation via English as an intermediary. A new button in the meeting controls row provides instant access. The upgrade is rolling out in private preview to select Google Workspace business customers this month, with a broader rollout later this year.

### Gemini Live API & Google AI Studio

Developers can access Gemini 3.5 Live Translate immediately through the Gemini Live API in public preview. The Gemini Cookbook includes example code for dubbing, simultaneous multilingual translation, and live interpretation workflows. Grab, the Southeast Asian ride-hailing service, is already piloting the model for driver-passenger communication across language barriers.

## Key Technical Characteristics

| Feature | Detail |
|---------|--------|
| Language detection | Automatic, no manual setup |
| Supported languages | 70+ |
| Translation mode | Continuous streaming (not turn-by-turn) |
| Voice preservation | Intonation, pacing, pitch maintained |
| Noise robustness | Handles loud unpredictable environments |
| Safety | SynthID watermark on all output audio |

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Developer tip:</strong> The Gemini Live API public preview is accessible for free in Google AI Studio. Check the Gemini Cookbook for live dubbing and multi-language translation demos. For enterprise integration, consider pairing the Live API with real-time speaker diarization for automatic per-speaker translation channels in large multilingual meetings.
</div>
</div>

## Why This Matters

Live speech-to-speech translation has historically required professional interpreters or dedicated hardware. Gemini 3.5 Live Translate brings this capability to a smartphone, enabling truly spontaneous cross-language conversation in any setting.

The Google Meet upgrade from 5 to 70+ languages is perhaps the most immediate enterprise impact. Teams no longer need a shared working language — members can speak their native language and be understood directly, without routing through English. For global organizations running international standups, client calls, or multi-region all-hands meetings, this removes a persistent friction point.

The continuous streaming architecture is what makes Gemini 3.5 Live Translate feel different from prior attempts. By generating speech as it listens — rather than processing complete utterances — the model maintains the natural rhythm of conversation. Gaps and pauses match the original speaker rather than introducing the artificial silences typical of batch-mode systems.

For developers, the public Gemini Live API opens new applications: live dubbing of video content, multilingual broadcast assistants, real-time interpretation apps, and language-agnostic customer service bots.

<div class="article-callout info">
<div class="article-callout__icon">💬</div>
<div class="article-callout__body"><strong>Rollout timeline:</strong> Google Translate app (Android/iOS) — available now globally. Developer public preview (Gemini Live API + AI Studio) — available now. Google Meet business private preview — starting this month. Google Meet general availability — later this year.
</div>
</div>

<div class="article-keypoints">
<strong>Key Points</strong>
<ul>
<li>Gemini 3.5 Live Translate: streaming speech-to-speech translation across 70+ languages, no manual language setup</li>
<li>Preserves speaker intonation, pacing, and pitch; noise-robust for real-world environments</li>
<li>Google Translate app (Android/iOS) updated now; Android adds new headphone-free "listening mode"</li>
<li>Google Meet: 5 → 70+ languages, 2,000+ language combinations per meeting</li>
<li>Gemini Live API developer public preview available immediately in Google AI Studio</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Resources · Official Sources · How to Use</strong><br>— <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/" target="_blank" rel="noopener noreferrer">Gemini 3.5 Live Translate Official Announcement (Google Blog)</a><br>— <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer">Google AI Studio — Try Gemini Live API</a><br>— <a href="https://ai.google.dev/gemini-api/docs/live" target="_blank" rel="noopener noreferrer">Gemini Live API Documentation</a></div></div>
