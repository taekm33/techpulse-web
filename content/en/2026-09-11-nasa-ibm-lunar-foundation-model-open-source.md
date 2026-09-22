---
title: "NASA and IBM Release Open-Source AI Foundation Model Built for Lunar Science"
summary: "NASA and IBM Research have launched an open-source AI foundation model for analyzing the Moon's surface. Trained on 17 years of Lunar Reconnaissance Orbiter data, it supports crater mapping, volcanic-feature detection and polar-ice prediction, with weights and code fully public on Hugging Face and GitHub."
category: "ai-news"
date: "2026-09-11"
draft: true
readingTime: 6
tags: ["NASA", "IBM", "foundation-model", "open-source", "space"]
---

<div class="article-tldr">
NASA, working with IBM Research and several universities, has released the NASA-IBM Lunar Foundation Model — among the first open-source AI foundation models built specifically for lunar science. It was pre-trained on roughly 2 million image tiles gathered by the Lunar Reconnaissance Orbiter (LRO) over 17 years, and can be fine-tuned with only small amounts of labeled data for tasks like crater mapping, identifying young volcanic features and estimating polar-ice stability. The model weights and full codebase are freely available on Hugging Face and GitHub.
</div>

NASA is bringing artificial intelligence into the study of the Moon. On September 10, the agency unveiled the **NASA-IBM Lunar Foundation Model**, developed with IBM Research and several academic institutions. It is among the first open-source AI models built specifically for lunar science, trained primarily on data from NASA's Lunar Reconnaissance Orbiter (LRO). The model is hosted publicly on [Hugging Face](https://huggingface.co/collections/nasa-ibm-ai4science/nasa-ibm-lunar-fm-and-downstream-models) for anyone to use, with the complete codebase available on [GitHub](https://github.com/NASA-IMPACT/NASA-IBM-Lunar-Foundation-Model) for testing and experimentation.

## A foundation model trained on 17 years of lunar data

Unlike traditional models that require building and training specialized algorithms from scratch for each task, foundation models are pre-trained on vast, unlabeled datasets. The broad knowledge acquired during that pre-training lets them generalize across many scientific domains through quick fine-tuning, using only small amounts of labeled data.

The model was trained on data the LRO has accumulated over the past 17 years. The orbiter has captured most of the lunar surface in detail, producing an almost seamless high-resolution mosaic — and the mission has generated more data than all of NASA's other planetary missions combined. The NASA-IBM model was trained on roughly 2 million image tiles drawn from that dataset, comprising more than 1 million high-resolution camera images at 1-meter resolution and nearly 964,000 multispectral images at 100-meter resolution. It also drew on high-resolution imagery and terrain data from other missions, including NASA's GRAIL (Gravity Recovery and Interior Laboratory), NASA's Lunar Prospector, and JAXA's (Japan Aerospace Exploration Agency) SELENE.

<div class="article-stats">
<strong>Image tiles used for training</strong> ~2 million<br/>
<strong>High-resolution images</strong> 1M+ (1-meter resolution)<br/>
<strong>Multispectral images</strong> ~964,000 (100-meter resolution)<br/>
<strong>LRO data span</strong> 17 years<br/>
<strong>Release</strong> Open source (weights on Hugging Face + code on GitHub)
</div>

## Craters, volcanoes and polar ice in one model

Because the model is already pre-trained, planetary scientists can adapt it to many lunar research tasks using only small amounts of labeled data. Three uses stand out.

| Task | Scientific significance |
|---|---|
| Crater mapping | Every crater is formed by an impact, so crater counts and measurements are essential for dating the lunar surface and reconstructing solar-system history |
| Identifying young volcanic features (irregular mare patches) | These relatively young-looking structures challenge established lunar-cooling timelines, offering clues to the Moon's thermal evolution |
| Estimating polar-ice stability | Permanently shadowed regions stay cold enough to trap ice for up to billions of years; predicting where ice is stable helps map resources for future exploration |

According to NASA, the model matched or exceeded several strong baseline models across every evaluated task, with a clear advantage on estimating polar-ice stability. In one demonstration, it compared LRO images taken before and after a SpaceX rocket body impacted near Einstein crater, detecting existing craters (blue boxes) and flagging the newly formed impact crater (red box). Because the post-impact image was excluded from pre-training, the test showed the model can be fine-tuned to recognize novel surface changes between observations.

<div class="article-callout tip">
The point of a foundation model is reuse. A single pre-trained model can be repurposed for craters, volcanoes or ice with only a little task-specific data — sharply cutting the cost and time of training a dedicated model from scratch every time.
</div>

## Extending an open-science strategy

<div class="article-callout info">
"NASA has spent decades building an extraordinary scientific record of the Moon, but collecting data is only part of the job. We also have to make data easier for scientists to explore and use. The NASA-IBM Lunar Foundation Model shows what's possible when we bring AI to NASA's petabytes of scientific data." — Kevin Murphy, chief science data officer and acting chief data and AI officer at NASA Headquarters
</div>

The model is part of the AI-for-science strategy run by NASA's Office of the Chief Science Data Officer. It joins a growing family of models from the NASA-IBM partnership, including the Prithvi models for Earth observation and the Surya model for heliophysics. The lunar model is integrated into the open-source TerraTorch toolkit, and the team released machine-learning-ready pre-training datasets and benchmark collections alongside it, plus a companion technical report published on Hugging Face.

Within NASA, the Impact AI team at Marshall Space Flight Center in Huntsville, Alabama led development, collaborating with the agency's Science Mission Directorate Planetary Science Division, Goddard Space Flight Center and Ames Research Center. Academic experts from the Universities Space Research Association (USRA), the SETI Institute, the University of Maryland, Baltimore County (UMBC) and Howard University also contributed.

## What it means

The release sits at the intersection of two trends: the explosion of space-science data, and the spread of domain-specific scientific foundation models. By opening the weights, code and datasets, NASA is aiming for reproducible research and inviting scientists worldwide to compare and refine the model directly. As lunar south-pole ice prospecting and crewed exploration plans accelerate, tools that automate and speed up surface analysis could become a foundation for real mission planning.

<div class="article-keypoints">
<ul>
<li>NASA and IBM released an open-source AI foundation model for lunar science, with weights, code and datasets fully public on Hugging Face and GitHub</li>
<li>Pre-trained on ~2 million image tiles from 17 years of LRO data, also drawing on GRAIL, Lunar Prospector and JAXA's SELENE</li>
<li>Applied to crater mapping, young-volcanic-feature detection and polar-ice-stability estimation, with a clear edge on ice-stability prediction</li>
<li>The third domain model in NASA's AI-for-science strategy, after Prithvi (Earth observation) and Surya (heliophysics)</li>
</ul>
</div>

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
<a href="https://science.nasa.gov/science-research/artificial-intelligence-lunar-foundation-model/" target="_blank" rel="noopener">NASA Science — NASA, IBM Launch AI Foundation Model for Lunar Science</a><br/>
<a href="https://huggingface.co/collections/nasa-ibm-ai4science/nasa-ibm-lunar-fm-and-downstream-models" target="_blank" rel="noopener">Hugging Face — NASA-IBM Lunar FM and downstream models collection</a><br/>
<a href="https://github.com/NASA-IMPACT/NASA-IBM-Lunar-Foundation-Model" target="_blank" rel="noopener">GitHub — NASA-IBM Lunar Foundation Model codebase</a><br/>
<a href="https://science.nasa.gov/artificial-intelligence-science" target="_blank" rel="noopener">NASA — Artificial Intelligence for Science</a>
</div>
