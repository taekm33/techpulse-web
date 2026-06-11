---
title: "Google Launches Gemini 3.5 Live Translate: Real-Time Voice Translation Across 70+ Languages"
summary: "Google's new speech-to-speech translation model delivers near real-time voice translation across 70+ languages with natural-sounding output. Available now via Gemini Live API, Google Translate, and Google Meet."
category: "ai-news"
date: "2026-06-11"
readingTime: 5
tags: ["gemini", "translation", "real-time", "google", "speech-to-speech"]
---

<div class="article-tldr">
<strong>TL;DR:</strong> Google released <strong>Gemini 3.5 Live Translate</strong> on June 9, 2026 — a speech-to-speech AI model that translates spoken conversations in near real-time across 70+ languages. It preserves the speaker's voice characteristics and is available today via the Gemini Live API, Google Translate (iOS/Android), and Google Meet (enterprise private preview).
</div>

<div class="article-stats">
<div class="stat-item"><span class="stat-number">70+</span><span class="stat-label">Supported Languages</span></div>
<div class="stat-item"><span class="stat-number">2,000+</span><span class="stat-label">Language Pairs in Google Meet</span></div>
<div class="stat-item"><span class="stat-number">128K</span><span class="stat-label">Input Token Context Limit</span></div>
</div>

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/TNwKs39uSVk" title="Introducing Gemini 3.5 Live Translate" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

## The Language Barrier Just Got a Lot Smaller

On June 9, 2026, Google officially launched **Gemini 3.5 Live Translate**, a new member of the Gemini 3.5 model family purpose-built for real-time, bidirectional speech translation. Unlike conventional translation tools that wait for a speaker to finish before generating output, Gemini 3.5 Live Translate processes audio continuously — staying just a few seconds behind the speaker with no awkward pauses or choppy audio.

The model automatically detects the input language and generates smooth, natural-sounding speech in the target language, faithfully preserving the speaker's intonation, pacing, and pitch. This is a significant step beyond robotic-sounding machine translation outputs.

## How It Works

Gemini 3.5 Live Translate is based on Gemini 3 Pro and operates through the **Gemini Live API**. It accepts a raw 16-bit PCM audio stream at 16kHz and outputs translated audio at 24kHz. Developers configure a `translationConfig` object in their session setup, specifying a `targetLanguageCode` using BCP-47 codes (e.g., `"ko"` for Korean, `"ja"` for Japanese).

The model handles multilingual inputs seamlessly — if a speaker switches languages mid-conversation, Gemini 3.5 Live Translate detects the switch automatically without any manual reconfiguration. It also includes noise robustness for real-world environments like busy conference rooms or outdoor settings.

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Developer Tip</strong><br>Set <code>echoTargetLanguage: true</code> in your <code>translationConfig</code> if you want the model to echo back audio that's already in the target language. This is useful for bilingual sessions where some speakers may already know both languages. Audio chunks should be sent in 100ms intervals for optimal latency.</div>
</div>

## Model Specifications

| Property | Value |
|---|---|
| Model ID | `gemini-3.5-live-translate-preview` |
| Input | Audio (speech stream) |
| Output | Translated audio + text transcript |
| Languages | 70+ (BCP-47 codes) |
| Input audio format | 16-bit PCM, 16kHz, mono |
| Output audio format | 16-bit PCM, 24kHz, mono |
| Input token limit | 131,072 tokens |
| Output token limit | 65,536 tokens |
| Based on | Gemini 3 Pro |

## Where You Can Use It Right Now

**For Developers — Gemini Live API (Public Preview)**: Integrate Gemini 3.5 Live Translate into your apps today via `gemini-3.5-live-translate-preview` in the Gemini Live API or Google AI Studio. This is the most flexible option for building custom translation experiences, from live event captioning to real-time dubbing pipelines.

**For Everyone — Google Translate (Android & iOS)**: The model is rolling out globally on the Google Translate app. Connect any pair of headphones for the best experience. Android users also get a new "listening mode" — just hold your phone to your ear like a regular call to hear translations through the earpiece, no headphones needed.

**For Enterprises — Google Meet (Private Preview)**: Google Meet's speech translation is upgrading from 5 languages to 70+, and from English-only translation to 2,000+ language pair combinations in a single meeting. Enterprise Workspace customers can apply for private preview now, with broader rollout planned for later in 2026.

<div class="article-callout info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Current Limitations</strong><br>As a preview model, Gemini 3.5 Live Translate has some known limitations: voice characteristics may shift after long pauses or during rapid multi-speaker exchanges, and language detection can struggle with strong non-native accents or very similar languages. Google DeepMind's model card provides full disclosure of these known issues.</div>
</div>

## Real-World Use Cases

From a product perspective, the potential applications are broad:

- **Multilingual remote meetings**: Teams across Korea, Japan, France, and Brazil can each speak in their native language and hear real-time translated audio.
- **International education**: Lectures, training sessions, and online courses can be delivered simultaneously in dozens of languages.
- **Live event interpretation**: Conference organizers can offer attendees a QR-code-accessible translated audio stream without hiring on-site interpreters.
- **Content dubbing**: Developers can build automated dubbing pipelines for video content.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Gemini 3.5 Live Translate provides real-time, continuous speech-to-speech translation across 70+ languages</li>
<li>Preserves speaker intonation, pacing, and pitch for natural-sounding output</li>
<li>Available via Gemini Live API in public preview — developers can integrate today</li>
<li>Google Meet gains 2,000+ language pair support (enterprise private preview)</li>
<li>Android "listening mode" enables earphone-free real-time translation</li>
</ul>
</div>

<div class="article-callout info"><div class="article-callout__icon">🔗</div><div class="article-callout__body"><strong>Official Resources & Documentation</strong><br>— <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/" target="_blank" rel="noopener noreferrer">Google Blog: Gemini 3.5 Live Translate Announcement</a><br>— <a href="https://ai.google.dev/gemini-api/docs/live-api/live-translate" target="_blank" rel="noopener noreferrer">Gemini Live API: Live Translation Developer Guide (with code examples)</a><br>— <a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.5-live-translate-preview" target="_blank" rel="noopener noreferrer">Model Specifications: gemini-3.5-live-translate-preview</a><br>— <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer">Try it now in Google AI Studio</a></div></div>
