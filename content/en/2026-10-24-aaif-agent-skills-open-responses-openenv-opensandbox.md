---
title: "Agentic AI Foundation Takes In Agent Skills, Open Responses, OpenEnv and OpenSandbox — What Changes for Builders"
summary: "On October 22, 2026, the Linux Foundation's Agentic AI Foundation (AAIF) added four hosted projects at AGNTCon + MCPCon North America in San Jose: Anthropic's Agent Skills, OpenAI's Open Responses, Hugging Face's OpenEnv and Alibaba's OpenSandbox. That brings AAIF from three launch projects in December 2025 to ten. None of these is a new product; what moved is who governs them. This public-materials analysis separates what the foundation and project repos confirm from what is still open, and lists practical checks for teams shipping agents."
category: "dev-trend"
date: "2026-10-24"
readingTime: 6
tags: ["AAIF", "Agent Skills", "Open Responses", "OpenEnv", "OpenSandbox", "AI agents", "Linux Foundation"]
---

<div class="article-tldr">
The <strong>Agentic AI Foundation (AAIF)</strong>, part of the Linux Foundation, announced four new hosted projects on <strong>October 22, 2026</strong> in San Jose. <strong>Agent Skills</strong> (Anthropic) is a folder-based format for packaging agent instructions and scripts. <strong>Open Responses</strong> (OpenAI) is a multi-provider API spec derived from the Responses API. <strong>OpenEnv</strong> (Hugging Face) is a framework for reinforcement-learning environments. <strong>OpenSandbox</strong> (Alibaba) is an isolated execution platform for agents. AAIF now hosts <strong>ten</strong> projects, up from three at launch. All four were already public; the change is <strong>vendor-neutral governance</strong>, not a breaking change to anyone's code.
</div>

This is an analysis of public materials: the Linux Foundation and AAIF announcements, four AAIF blog posts, the projects' GitHub repositories and press coverage. We did not install or benchmark any of the projects.

## Who should care

- **Teams that already ship skills** (SKILL.md folders) for Claude Code or other agents — the format's stewardship moves from one vendor's docs to a foundation-run spec.
- **Developers juggling several model APIs** — Open Responses aims to make the endpoint and model name configuration rather than separate adapter code.
- **RL and evaluation researchers** — OpenEnv gives environments a common client/server interface you can package and publish.
- **Product teams whose agents run code** — OpenSandbox targets the isolation layer for commands, files and browsers.

## What is confirmed

The <a href="https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox" target="_blank" rel="noopener">Linux Foundation press release</a> dates the announcement to October 22, timed with AGNTCon + MCPCon North America (October 22–23, San Jose McEnery Convention Center). The six existing AAIF projects are MCP, goose, AGENTS.md, the Agent2Agent (A2A) protocol, Agent Router and agentgateway. AAIF was formed in <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" target="_blank" rel="noopener">December 2025</a> with MCP, goose and AGENTS.md.

<div class="article-stats">
<strong>Announced</strong> Oct 22, 2026 (Pacific Time)<br/>
<strong>AAIF hosted projects</strong> 3 at launch (Dec 2025) → 10<br/>
<strong>Agent Skills</strong> from Anthropic · code Apache 2.0, docs CC BY 4.0<br/>
<strong>Open Responses</strong> from OpenAI · spec based on the Responses API · Apache 2.0 per repo<br/>
<strong>OpenEnv</strong> from Hugging Face · RL environments exposing MCP and Gym<br/>
<strong>OpenSandbox</strong> from Alibaba · Apache 2.0 · Docker and Kubernetes runtimes
</div>

| Project | Contributor | What it does | Repo |
|---|---|---|---|
| Agent Skills | Anthropic | Packages instructions, scripts and resources in a folder built around SKILL.md, loaded by agents on demand | <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener">agentskills/agentskills</a> |
| Open Responses | OpenAI | Shared schema for requests, outputs, streaming events and tool calls across providers, plus a compliance tester | <a href="https://github.com/openresponses/openresponses" target="_blank" rel="noopener">openresponses/openresponses</a> |
| OpenEnv | Hugging Face | reset()/step()/state() clients against containerized environment servers; publishable to Hugging Face Spaces | <a href="https://github.com/huggingface/OpenEnv" target="_blank" rel="noopener">huggingface/OpenEnv</a> |
| OpenSandbox | Alibaba | Sandboxed code execution, commands, files and browser/desktop sessions with unified APIs | <a href="https://github.com/opensandbox-group/OpenSandbox" target="_blank" rel="noopener">opensandbox-group/OpenSandbox</a> |

Per <a href="https://aaif.io/blog/agent-skills-sharing-team-expertise-across-ai-agents" target="_blank" rel="noopener">AAIF's Agent Skills post</a>, more than 70 agent platforms support the format, over one million skills were listed on the skills.sh registry in seven months, and installs total nearly 280 million — figures it attributes to <a href="https://vercel.com/blog/state-of-agent-skills" target="_blank" rel="noopener">Vercel's State of Agent Skills report</a>, not an independent audit. A multi-company Technical Steering Committee will guide the spec. The post is explicit that a skill supplies instructions, not permissions.

The <a href="https://aaif.io/blog/what-open-responses-changes-for-ai-developers" target="_blank" rel="noopener">Open Responses post</a> cites two implementations today: Databricks Model Serving exposes an Open Responses endpoint for Claude, Gemini and hosted open models, and Vercel AI Gateway offers an OpenResponses API. Providers can add features as namespaced extensions. The <a href="https://www.openresponses.org/specification" target="_blank" rel="noopener">specification</a> is public.

The <a href="https://github.com/opensandbox-group/OpenSandbox" target="_blank" rel="noopener">OpenSandbox README</a> lists SDKs for Python, Java/Kotlin, TypeScript/JavaScript, C#/.NET and Go, an `osb` CLI and an MCP server. AAIF's <a href="https://aaif.io/blog/training-agents-for-real-world-tasks-with-openenv" target="_blank" rel="noopener">OpenEnv post</a> describes TRL integration and a Turing "Calendar Gym" result of roughly 90% task success with explicit calendar IDs versus about 40% with natural-language descriptions — a single reported example, not a benchmark suite.

## Unconfirmed and outlook

- **Spec changes**: No announced changes to the SKILL.md format or the Open Responses schema after the move. Committee rosters and a first revision timeline are not public — **unconfirmed**.
- **Cross-vendor adoption**: Nothing in these materials says Anthropic's API will speak Open Responses natively or that OpenAI products will adopt Agent Skills. The Databricks example is an intermediary platform — **unconfirmed**.
- **Enterprise support terms**: No SLA, certification or conformance badge program was announced. Open Responses ships a compliance tester, but no official certification — **unconfirmed**.
- **Whether neutrality sticks**: Techstrong.ai frames the next test as whether this governance model yields practical interoperability among competitors. A foundation logo is not the same as industry-wide adoption.

## What it means for teams in the US and elsewhere

The practical signal is **lower lock-in risk**. If your company has encoded internal know-how as skills, there is now a neutral spec to target, which matters when procurement asks what happens if you switch agent vendors. Multi-model products get a credible reference schema to standardize adapters against, and the Platinum-tier members listed on <a href="https://aaif.io/members" target="_blank" rel="noopener">AAIF's members page</a> include AWS, Google, Microsoft, Anthropic, OpenAI, Cloudflare, Block and Bloomberg.

What it does <strong>not</strong> do is make third-party skills safe. Skills can carry scripts and links; we covered a <a href="/2026-09-28-ai-agent-skills-placeholder-domains-clickfix-scam/">placeholder-domain attack against skills</a> last month. Governance is not supply-chain security.

<div class="article-callout tip">
<strong>Practical next steps</strong><br/>
1. <strong>Lint your skills against the spec</strong>: confirm each SKILL.md has at least the `name` and `description` metadata and clear instructions as described at <a href="https://agentskills.io" target="_blank" rel="noopener">agentskills.io</a>.<br/>
2. <strong>Treat external skills like dependencies</strong>: pin versions, review bundled scripts and outbound links, and keep agent permissions least-privilege, since skills do not grant access.<br/>
3. <strong>Map your API layer to Open Responses</strong>: diff your current request/stream/tool-call shapes against the spec, run the repo's compliance tester against any gateway you use, and keep provider-only features behind extensions.<br/>
4. <strong>Pilot sandboxing locally first</strong>: if agents execute code, try OpenSandbox's Docker runtime before evaluating Kubernetes, and run it through your normal security review.<br/>
5. <strong>Weigh in where it counts</strong>: each repo takes issues and discussions; companies wanting a formal seat can look at AAIF membership.
</div>

## Limitations

This piece relies on the Linux Foundation and AAIF announcements, four AAIF blog posts, the four GitHub repositories, the AAIF members page and two press articles, all checked October 22–24. Adoption metrics come from AAIF and Vercel and were not independently verified. Committee composition, revision schedules and vendor product roadmaps were not available. Membership lists change.

<p><em>Last verified 2026-10-24.</em></p>

<div class="article-callout info">
<strong>Sources (primary vs. press/analysis)</strong><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox" target="_blank" rel="noopener">Linux Foundation — AAIF announces four new projects (Oct 22, 2026)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aaif.io/news/agentic-ai-foundation-announces-four-new-projects" target="_blank" rel="noopener">AAIF news — four new projects</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" target="_blank" rel="noopener">Linux Foundation — formation of AAIF (Dec 2025)</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aaif.io/blog/agent-skills-sharing-team-expertise-across-ai-agents" target="_blank" rel="noopener">AAIF blog — Agent Skills</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aaif.io/blog/what-open-responses-changes-for-ai-developers" target="_blank" rel="noopener">AAIF blog — Open Responses</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aaif.io/blog/training-agents-for-real-world-tasks-with-openenv" target="_blank" rel="noopener">AAIF blog — OpenEnv</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://aaif.io/blog/the-sandbox-as-an-agent-primitive" target="_blank" rel="noopener">AAIF blog — OpenSandbox</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener">GitHub — Agent Skills specification</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://www.openresponses.org/specification" target="_blank" rel="noopener">Open Responses specification</a><br/>
· <span class="src-role">[Primary]</span> <a href="https://github.com/opensandbox-group/OpenSandbox" target="_blank" rel="noopener">GitHub — OpenSandbox</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://www.unite.ai/agentic-ai-foundation-adds-four-projects-to-reach-10-in-first-year/" target="_blank" rel="noopener">Unite.AI — AAIF reaches 10 projects in first year (Oct 22, 2026)</a><br/>
· <span class="src-role">[Press/Analysis]</span> <a href="https://techstrong.ai/building-with-ai/featured/agentic-ai-foundation-adds-four-new-open-agent-projects/" target="_blank" rel="noopener">Techstrong.ai — open governance analysis (Oct 23, 2026)</a>
</div>

<div class="article-keypoints">
<ul>
<li>AAIF added Agent Skills, Open Responses, OpenEnv and OpenSandbox on Oct 22, growing from 3 to 10 hosted projects</li>
<li>All four were already public; the change is neutral, multi-company governance</li>
<li>Agent Skills adoption figures (70+ platforms, 1M+ skills, ~280M installs) are AAIF/Vercel numbers</li>
<li>Spec revisions, native cross-vendor support and certification programs remain unconfirmed</li>
<li>Next steps: lint skills to spec, review third-party skills like dependencies, test API layers against Open Responses</li>
</ul>
</div>
