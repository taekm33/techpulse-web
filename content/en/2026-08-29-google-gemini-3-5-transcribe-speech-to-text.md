---
title: "Google Unveils Gemini 3.5 Transcribe — Betting on Precision With a 2.6% Word Error Rate"
summary: "Google launched Gemini 3.5 Transcribe, its latest speech-to-text model, on Aug. 26. It posts a 2.6% average word error rate for non-streaming and 4.0% for streaming as measured by Artificial Analysis, beating its own Chirp 3, and auto-detects more than 85 languages. It ships as two separate APIs — one for real-time streaming, one for pre-recorded audio — and already powers Gboard Rambler, the Gemini app on macOS, and Antigravity."
category: "ai-news"
date: "2026-08-29"
readingTime: 6
tags: ["Google", "Gemini", "speech recognition", "STT", "AI model"]
---

<div class="article-tldr">
Google introduced <strong>Gemini 3.5 Transcribe</strong> on Aug. 26. As the "most precise speech-to-text model yet," accuracy is the pitch: as measured by third-party firm Artificial Analysis, it hits a <strong>2.6% word error rate for non-streaming and 4.0% for streaming</strong>, and it auto-detects <strong>more than 85 languages</strong>. It goes beyond raw dictation — stripping fillers like "um" and "ah" and cleaning up self-corrections such as "let's meet Tuesday—no, Wednesday." It ships as <strong>two separate APIs</strong>, one for real-time and one for pre-recorded audio, now open in public preview for developers and enterprises.
</div>

The contest over voice interfaces is shifting from "how well does it hear you" to "how cleanly does it write you down." Announcing Gemini 3.5 Transcribe on Aug. 26, Google said that unlike conventional speech recognition that struggles with background noise, jargon, and disfluency, the model "converts raw audio directly into accurate, polished, formatted text." It already powers first-party products including Rambler on Android's Gboard and the Gemini app on macOS.

## Why Two Separate APIs

The model comes not as one endpoint but as two distinct APIs, because the jobs differ.

The real-time `gemini-3.5-transcribe-live` runs continuous, bidirectional streaming with sub-second latency through the Live API — aimed at voice agents and live captioning where instant response matters. The pre-recorded `gemini-3.5-transcribe`, by contrast, uses the Interactions API to transcribe meetings, call logs, and more with speaker attribution and word-level timestamps — suited to batch work like post-call analytics pipelines.

<div class="article-stats">
<strong>Non-streaming WER</strong> 2.6% (measured by Artificial Analysis)<br/>
<strong>Streaming WER</strong> 4.0%<br/>
<strong>Languages</strong> 85+ auto-detected<br/>
<strong>Speaker attribution</strong> Up to 3 in pre-recorded audio (3+ experimental)<br/>
<strong>Real-time latency</strong> Sub-second
</div>

## What Changed Versus Chirp 3

Google calls it a "major advancement" over 2025's Chirp 3. By the numbers, time to final transcription improves by 70%. On the multilingual FLEURS benchmark, across a set of top languages and locales, it posts 5.50% WER in streaming and 5.04% non-streaming, beating Chirp 3.

Beyond accuracy, the standout is task delegation. Through function calling, the model can hand complex jobs — image generation, file analysis — to other Gemini models. In the macOS Gemini app, that means summarizing a local file or generating an image at the cursor using only your voice.

| Metric | Gemini 3.5 Transcribe | vs. prior (Chirp 3) |
|---|---|---|
| Non-streaming WER | 2.6% (Artificial Analysis) | Improved |
| Streaming WER | 4.0% | Improved |
| FLEURS streaming WER | 5.50% | Beats Chirp 3 |
| Time to final transcription | — | 70% faster |
| Speaker attribution | Up to 3 (with timestamps) | Newly strengthened |

<div class="article-callout info">
Word Error Rate (WER) is better when lower. Note that Google's 2.6% and 4.0% figures come from third-party Artificial Analysis rather than Google itself — and that on the multilingual FLEURS benchmark the numbers climb into the 5% range. In other words, real-world performance in English-heavy settings may differ from performance across all 85+ languages.
</div>

## Where You Can Use It

Availability splits across developers, enterprises, and everyone else. Developers can access it in public preview through the Gemini API in Google AI Studio and in Antigravity. Enterprises get preview access via the Gemini Enterprise Agent Platform, with Gemini Enterprise for Customer Experience coming soon. Consumers can already try it in the Gemini app on macOS (English) and Rambler on Android, with a Chrome feature — talk to type in any web field — arriving next.

<div class="article-callout tip">
The easiest way to try it is Rambler on Android's Gboard or the Gemini app on macOS. Developers should call the two model names distinctly in Google AI Studio: `gemini-3.5-transcribe` for pre-recorded audio and `gemini-3.5-transcribe-live` for real-time. Voice infrastructure platforms including LiveKit, Pipecat, LangChain, and Vercel already support the Live API integration.
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/" target="_blank" rel="noopener">Google — Intelligent transcription with Gemini 3.5 Transcribe (official announcement)</a><br/>
· <a href="https://ai.google.dev/gemini-api/docs/transcribe" target="_blank" rel="noopener">Google — Gemini API transcription documentation</a><br/>
· <a href="https://9to5google.com/2026/08/26/gemini-3-5-transcribe/" target="_blank" rel="noopener">9to5Google — Google launches Gemini 3.5 Transcribe</a><br/>
· <a href="https://www.engadget.com/2244799/google-gemini-latest-transcription-model-can-turn-ramblings-into-structured-text/" target="_blank" rel="noopener">Engadget — Google's latest transcription model turns ramblings into structured text</a>
</div>

<div class="article-keypoints">
<ul>
<li>Google launched Gemini 3.5 Transcribe, its latest speech-to-text model, on Aug. 26</li>
<li>2.6% non-streaming / 4.0% streaming WER (Artificial Analysis); auto-detects 85+ languages</li>
<li>Split into real-time (`-live`) and pre-recorded APIs; pre-recorded adds up to 3-speaker attribution with timestamps</li>
<li>70% faster time to final transcription than Chirp 3; function calling delegates work to other Gemini models</li>
<li>Public preview for developers and enterprises; ships in Gboard Rambler, macOS app, and Antigravity, with Chrome coming</li>
</ul>
</div>
