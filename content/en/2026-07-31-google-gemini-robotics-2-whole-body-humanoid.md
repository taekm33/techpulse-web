---
draft: true
title: "Google DeepMind Unveils Gemini Robotics 2 — From Feet to Fingertips, AI Now Controls a Humanoid's Whole Body"
summary: "Google DeepMind introduced Gemini Robotics 2, a physical-AI model that enables whole-body humanoid control, fine dexterity, and multi-robot collaboration. Built from three models—action, reasoning, and on-device—it adapts to entirely new robot bodies in just a few hours."
category: "ai-news"
date: "2026-07-31"
readingTime: 6
tags: ["GoogleDeepMind", "Gemini", "humanoid", "physical-AI", "robotics"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: On July 30, 2026, Google DeepMind unveiled Gemini Robotics 2. Moving beyond earlier upper-body-only manipulation, it delivers <strong>whole-body humanoid control</strong> (feet to fingertips), fine manipulation with a 22-degree-of-freedom five-fingered hand, and <strong>multi-robot collaboration</strong>. It ships as three models—action (VLA), reasoning (ER), and on-device—with the on-device model adapting to entirely new robot bodies in <strong>just a few hours (fewer than 200 examples)</strong>. The reasoning model, ER 2, is available now in Google AI Studio.
</div>

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/4lSQnrMC6nY" title="Gemini Robotics 2 brings whole body intelligence to robots" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## AI Gets a Whole Body

Until now, most robots have been pre-programmed or teleoperated for narrow, repetitive tasks. They lacked the ability to learn for themselves or adapt to unpredictable environments, and transferring a learned skill from one robot body to another remained extremely difficult.

**Gemini Robotics 2**, unveiled by Google DeepMind on July 30, 2026, takes direct aim at that wall. Announced by Carolina Parada, the model is described as "the intelligence layer powering the next generation of truly adaptable robots." Three capabilities anchor it—intelligent **whole-body control**, advanced **dexterity**, and **multi-robot collaboration**.

For example, Gemini Robotics 2 can drive a humanoid to walk, crouch, stretch, and manipulate objects to clean up a cluttered room—and team up with other robots to finish the job faster.

## Three Models: Action, Reasoning, On-Device

Gemini Robotics 2 is split into three models with distinct roles.

| Model | Type | Role |
|------|------|------|
| Gemini Robotics 2 | VLA (vision-language-action) | Converts vision and language into motor control. Drives full humanoids and bi-arm robots |
| Gemini Robotics ER 2 | ER (embodied reasoning VLM) | The high-level "brain." Plans multi-step tasks, tracks progress, coordinates multiple robots |
| Gemini Robotics On-Device 2 | On-device VLA | Runs locally without a network. Rapidly adapts to new robot bodies |

The VLA model turns visual and language instructions into real motor control so the robot can act. The ER model is the "brain" that observes the room, reasons about the required steps, coordinates with the VLA, and tracks progress until the task is done. This setup lets robots execute multi-minute tasks involving hundreds of decisions, self-correct when a step fails, and generalize to novel situations.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">3 models</span>
<span class="stat-label">VLA · ER · On-Device</span>
</div>
<div class="stat-item">
<span class="stat-number">22 DoF</span>
<span class="stat-label">SharpaWave five-fingered hand</span>
</div>
<div class="stat-item">
<span class="stat-number">A few hours</span>
<span class="stat-label">To adapt to a new body (&lt;200 examples)</span>
</div>
<div class="stat-item">
<span class="stat-number">Minutes</span>
<span class="stat-label">Single-task length (hundreds of decisions)</span>
</div>
</div>

## The First Steps of Whole-Body Humanoid Control

The world is built for human movement—reaching, bending, and balancing in tight, cluttered spaces. Where earlier models controlled only a humanoid's upper body for table-top tasks, Gemini Robotics 2 expands physical AI into **whole-body motion**.

DeepMind demonstrated instructing Apptronik's **Apollo 2** humanoid: *"Put the watering can into the green bin in the bottom shelf."* Apollo processed the instruction, walked to the table, picked up the watering can, took a few steps to the shelves, and placed it precisely at its destination. DeepMind noted that "while our robots have more to advance in movement speed, this is an important step toward the skills needed to complete more complex, real-world tasks that require whole-body coordination."

## Fingertip Precision—and Robot Teamwork

To be genuinely useful in homes and workplaces, robots need finesse. Gemini Robotics 2 unlocks a new level of dexterity across end effectors, whether the robot uses hands or grippers. It can operate the five-fingered, 22-degree-of-freedom **SharpaWave hand** on Apollo 2 to tie knots or seal a ziplock bag, and it can run the two-fingered parallel grippers on a **Franka Duo** for complex tasks like tight packing.

<div class="article-callout info">
<strong>Selected DeepMind benchmarks:</strong> On whole-body manipulation, Apollo 2 scored 68.4% picking from a table, 45.7% from the floor, and 76.3% from a shelf. Gripper work (Franka Duo) was strong, with precise insertion at 89.6%. Multi-finger dexterity remains the frontier, however: unscrewing a bulb hit 92%, but screwing a bulb in was 36% and tying a trash bag 44%.
</div>

This update also introduces **multi-robot collaboration**. ER 2 handles communication and coordination across robots, letting different machine types jointly solve workflows a single robot could not complete alone.

## An On-Device Model That Works Without a Network

Many robotic applications must operate without network latency or internet connectivity. **Gemini Robotics On-Device 2** targets those constraints as the most efficient VLA, optimized to run locally on robotic devices.

The model is natively multi-embodiment and inherits the "motion transfer" techniques from Gemini Robotics 1.5. It can adapt to new bi-arm robot bodies—even ones with drastically different shapes, sensors, and degrees of freedom—with **typically fewer than 200 examples and a few hours** of adaptation.

<div class="article-callout tip">
<strong>Safety by default:</strong> DeepMind also released <strong>ASIMOV-Agentic</strong>, a new benchmark for agentic safety. It measures the reasoning agent's ability to refuse unsafe tool calls from a VLA, to predict whether a task is possible, and to proactively request human intervention when uncertain. ER 2 can detect when humans are nearby and bring the robot to a safe stop—making it, per DeepMind, its safest robotics model to date.
</div>

## Access and Significance

The reasoning model, **Gemini Robotics ER 2**, is available now in Google AI Studio and in private preview on the Gemini Enterprise Agent Platform. The VLA and On-Device models are going first to early-access partners, including Apptronik, Boston Dynamics, and Agile Robots.

DeepMind frames Gemini Robotics 2 as "an important milestone on the path toward solving AGI in the physical world"—the goal being to move past single-task automation toward general-purpose intelligence.

<div class="article-keypoints">
<h3>Key Takeaways</h3>
<ul>
<li>Google DeepMind unveiled its physical-AI model, Gemini Robotics 2, on July 30, 2026</li>
<li>Moves beyond upper-body manipulation to whole-body humanoid control (feet to fingertips)—demonstrated with Apptronik's Apollo 2</li>
<li>Three models: VLA (action), ER (reasoning), and on-device; ER 2 coordinates multi-robot teamwork</li>
<li>The on-device model adapts to new robot bodies with fewer than 200 examples in a few hours</li>
<li>ER 2 is available now in Google AI Studio; VLA and on-device go to early-access partners</li>
<li>A new safety benchmark, ASIMOV-Agentic, ships alongside; DeepMind calls this its safest robotics model yet</li>
</ul>
</div>

Robots that judge and move on their own in the physical world have long been a dream. That Gemini Robotics 2 has begun intelligently controlling a real humanoid's entire body is a signal that the dream has taken a decisive step out of the lab and into reality.

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/" target="_blank" rel="noopener">Google DeepMind Blog — Gemini Robotics 2 brings whole body intelligence to robots</a><br/>
· <a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/" target="_blank" rel="noopener">Google Developer Blog — Gemini Robotics ER 2</a><br/>
· <a href="https://thenextweb.com/news/gemini-robotics-2-whole-body-humanoid-control" target="_blank" rel="noopener">The Next Web — Gemini Robotics 2 controls whole humanoids</a><br/>
· <a href="https://www.marktechpost.com/2026/07/30/google-deepmind-gemini-robotics-2-whole-body-control-dexterity-multi-robot-collaboration/" target="_blank" rel="noopener">MarkTechPost — Google DeepMind ships three physical AI models</a><br/>
</div>
