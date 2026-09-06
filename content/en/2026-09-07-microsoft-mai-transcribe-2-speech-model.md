---
title: "Microsoft Ships 10-Cent Speech Model ‘MAI-Transcribe-2,’ Taking Direct Aim at OpenAI, Google and ElevenLabs"
summary: "Microsoft AI released MAI-Transcribe-2 on September 3, a speech-recognition model that supports 60 languages, bundles speaker diarization and word-level timestamps by default, and is priced at $0.10 per hour of audio — the lowest on the market. It is Microsoft's third speech model in five months and the clearest sign yet that its push to reduce OpenAI dependence is maturing fastest in transcription."
category: "ai-news"
date: "2026-09-07"
readingTime: 6
tags: ["Microsoft", "Speech Recognition", "MAI", "STT", "OpenAI"]
---

<div class="article-tldr">
Microsoft AI released its own speech-to-text model, <strong>MAI-Transcribe-2</strong>, on Thursday, September 3. It supports 60 languages and includes speaker diarization, word-level timestamps and code switching as base features, priced at <strong>$0.10 per hour of audio (a limited-time offer through year-end)</strong>. The company claims it beats OpenAI's GPT-Transcribe, Google's Gemini 3.5 Transcribe and ElevenLabs' Scribe v2 on accuracy, speed and price. It is Microsoft's third speech model in five months, and the clearest proof yet of a strategy that swaps in-house models into products once powered by OpenAI.
</div>

Microsoft AI on Thursday, September 3, released **MAI-Transcribe-2**, calling it "the fastest, most accurate and cheapest speech recognition model in the world." The figure that deserves a pause is the price: $0.10 per hour of audio. When Microsoft shipped the first model in this line just five months ago, it charged $0.36 an hour — making Thursday's early-bird rate roughly 72% cheaper. For an enterprise processing 100,000 hours of call-center audio a year, the bill drops from $36,000 to $10,000.

## Bundled Into the Base Price: Features Rivals Sell Separately

Language support jumps to 60, up from 43 in June's MAI-Transcribe-1.5 and 25 in April's original release. Microsoft says it built the model for the messy audio real businesses generate — background noise, low-quality recordings, overlapping speech — rather than clean studio conditions.

What matters more than the language count is what Microsoft folded into the base product. Speaker diarization sorts out who said what in a multi-person recording, the difference between a wall of text and a usable meeting transcript. Word-level timestamps enable search, editing and video alignment. Keyword biasing lets developers feed in drug names, product codes or employee names so the model stops mangling jargon. Automatic language identification means users no longer declare the language in advance.

Two features stand out. A configurable output style offers a "verbatim" mode that preserves every "um" and false start for compliance and legal teams, and a "clean" mode that strips fillers for readable captions and notes. Code switching handles conversations that drift between languages mid-sentence — Microsoft explicitly names Hinglish and Spanglish. Specialty vendors have historically charged premiums for each of these; Microsoft includes them all for a dime.

<div class="article-stats">
<strong>Released</strong> September 3, 2026<br/>
<strong>Price</strong> $0.10 per hour of audio (limited-time through year-end)<br/>
<strong>Languages</strong> 60 · FLEURS average word error rate (WER) 5.2%<br/>
<strong>Available on</strong> Microsoft Foundry · MAI Playground · OpenRouter
</div>

## How to Read the Benchmark Claims

Microsoft's performance claims rest on three different yardsticks. First, it ranks number one on FLEURS, the standard multilingual benchmark, across 60 languages with an average WER of 5.2%. Notably, that average actually rose from the 3.7% reported for version 1.5 in June — almost certainly a reflection of broader coverage (folding in low-resource languages) rather than regression. Buyers should request the per-language breakdown.

Second, Microsoft says the model ranks second on independent benchmarker Artificial Analysis's WER leaderboard and defines that firm's accuracy-latency Pareto frontier; it ranked third in June, meaning it has cleared ElevenLabs. Third, on raw speed it claims to be 10× faster than OpenAI's GPT-Transcribe, 7× faster than ElevenLabs' Scribe v2 and 5× faster than Google's Gemini 3.5 Transcribe, per Artificial Analysis evaluations.

| Metric | MAI-Transcribe-2 | Prior (1.5, June) |
|---|---|---|
| Languages | 60 | 43 |
| FLEURS avg WER | 5.2% | 3.7% |
| Artificial Analysis rank | 2nd | 3rd |
| Price per hour | $0.10 | — |

## Three Models in Five Months — and the OpenAI Pullback

The pace is the story within the story. April 2 brought MAI-Transcribe-1 (25 languages, $0.36); June 2 brought 1.5 (43 languages, keyword biasing); September 3 brought 2.0 (60 languages, diarization, timestamps, code switching, $0.10). Three releases in five months, each expanding language coverage by roughly 40% while adding features competitors gate behind premium tiers.

Behind that speed is what Microsoft AI CEO Mustafa Suleyman described as "a small, focused 10-person team" that was "liberated from any of the bureaucracy." He said the model runs at "half the GPU cost of the other state-of-the-art models" — a substantial saving for Microsoft.

<div class="article-callout info">
Strategic context: Microsoft has invested more than $13 billion in OpenAI and hosts its models across Azure, Office and Copilot. But two partnership amendments — in October 2025 and April 2026 — widened Microsoft's room to go independent, and each was followed by more in-house MAI models. Bloomberg reported in July that Microsoft had begun routing some Word and Excel prompts to its own MAI models. Transcription, with its bounded problem and objective metric, became the first modality where the substitution strategy fully matured.
</div>

## The Open Questions

For all its benchmark specificity, the release leaves practical questions open. The $0.10 rate is called a launch offer with no end date or standard price named. There is nothing on real-time streaming, which voice agents and live captioning require. A 5.2% average across 60 languages could hide 3% on major languages and 12% on low-resource ones, so buyers should test their specific languages. Word error rate does not measure speaker attribution, and no diarization error rate is given. And for medical, legal and financial audio, the release says nothing about data residency, retention, or whether submitted audio feeds future training.

<div class="article-callout tip">
Practical take: transcription is becoming cheap enough that it stops being a line item anyone argues about. Before deploying, though, get in writing: (1) the standard price after the promo ends, (2) whether real-time streaming is supported, (3) per-language accuracy for the languages you actually use, (4) a diarization error rate, and (5) the data retention and re-training policy. The gap between a leaderboard win and a production deployment usually comes down to these five.
</div>

## What It Signals

MAI-Transcribe-2 reads less like a product announcement than a template. Microsoft's AI unit now ships models for images, voice, transcription, code, reasoning and cybersecurity, each optimized aggressively for inference cost, priced below the frontier labs, distributed through Foundry, and quietly swapped into Microsoft's own products. This is not an attempt to build one model that beats GPT or Gemini at everything — it is a portfolio play to serve most enterprise workloads without paying anyone else, and to sell the surplus at prices the specialists cannot match. Transcription simply happened to mature first.

<div class="article-keypoints">
<ul>
<li>Microsoft AI released MAI-Transcribe-2 on September 3 — $0.10 per hour (limited-time through year-end), roughly 72% cheaper than five months ago.</li>
<li>Supports 60 languages with speaker diarization, word-level timestamps and code switching (Hinglish, Spanglish) as base features.</li>
<li>Claims #1 on FLEURS (5.2% avg WER across 60 languages), #2 on the Artificial Analysis WER leaderboard, and 10× the speed of GPT-Transcribe.</li>
<li>Third speech model in five months (April → June → September); CEO Suleyman cites a "10-person team" running at "half the GPU cost."</li>
<li>The first mature modality in Microsoft's push to cut OpenAI dependence — MAI models already handle some Word and Excel prompts (Bloomberg).</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/" target="_blank" rel="noopener">Microsoft AI — MAI-Transcribe-2 official announcement</a><br/>
<a href="https://venturebeat.com/infrastructure/microsoft-ais-mai-transcribe-2-undercuts-openai-google-and-elevenlabs-on-price-and-speed" target="_blank" rel="noopener">VentureBeat — Microsoft AI’s MAI-Transcribe-2 undercuts OpenAI, Google and ElevenLabs on price and speed</a><br/>
<a href="https://artificialanalysis.ai/speech-to-text/non-streaming" target="_blank" rel="noopener">Artificial Analysis — Speech-to-Text leaderboard (independent benchmark)</a>
</div>
