---
title: "EU AI Act: The Complete Guide for Developers and Companies"
summary: "Everything you need to know about the EU AI Act — the risk-based classification system, enforcement timeline, GPAI model obligations, fine structure, how it compares to US and Chinese regulation, and a practical compliance checklist for startups and enterprises."
category: "it-news"
date: "2026-04-25"
tags: ["eu-ai-act", "regulation", "compliance", "risk-management", "llm"]
readingTime: 14
---

The EU AI Act is the world's first comprehensive legal framework for artificial intelligence. It entered into force in August 2024 and will be fully applicable by August 2027, with different provisions taking effect on a staggered timeline. For developers and companies building AI systems that touch EU markets — or that could touch them — understanding this law is no longer optional.

This guide cuts through the complexity. We cover the risk classification system, what each tier means in practice, the specific obligations for general-purpose AI models (the provision most relevant to LLM developers), the fine structure, and how the EU's approach compares to regulatory frameworks in the US and China. We close with a practical compliance checklist for startups and enterprises.

## The Core Architecture: Risk-Based Classification

The EU AI Act does not regulate "AI" as a monolithic category. It uses a risk-based pyramid: the higher the potential harm of an AI system, the stricter the regulatory requirements. Understanding where your system falls in this pyramid is the first step to understanding your obligations.

### Prohibited AI (Unacceptable Risk)

The top of the risk pyramid — systems that are banned outright within the EU. The Act prohibits:

- **Subliminal manipulation systems**: AI that operates below conscious awareness to distort behavior in harmful ways
- **Exploitation of vulnerabilities**: Systems that exploit age, disability, or social/economic circumstances to manipulate decisions
- **Social scoring by public authorities**: Government systems that score citizens on behavior across multiple domains and use that score to restrict social participation
- **Predictive policing based solely on profiling**: Predicting crime risk based only on personal characteristics without prior criminal behavior
- **Real-time remote biometric identification in public spaces**: With limited exceptions (narrow law enforcement use cases requiring judicial authorization)
- **Emotion recognition in workplaces and education**: AI systems that infer emotional states in these contexts
- **Biometric categorization inferring sensitive characteristics**: Systems that categorize people by protected characteristics (race, political opinions, religion, sexual orientation) from biometric data

The prohibition on real-time biometric identification in public spaces is the most commercially significant. Systems that identify individuals by face, gait, or other biometric markers in public — without individualized prior authorization — are banned. This has significant implications for retail analytics, event security systems, and smart city applications.

### High-Risk AI Systems

High-risk AI systems are not banned but face substantial compliance obligations. The Act identifies two categories of high-risk systems:

**Annex I: AI in products covered by EU safety legislation**
These are AI systems embedded in regulated products: medical devices, machinery, toys, aviation components, vehicles, radio equipment, and similar. If the AI is a safety component of a product regulated under existing EU product safety law, it's high-risk.

**Annex III: Standalone high-risk AI systems**
These cover specific application domains regardless of product category:
- Biometric identification and categorization
- Critical infrastructure management (power grids, water, transport)
- Education and vocational training (AI that determines access to educational institutions or assessments)
- Employment, worker management, and hiring (AI used in CV screening, promotion decisions, task allocation)
- Essential private services and public benefits (credit scoring, insurance, social benefits eligibility)
- Law enforcement (polygraphs, crime risk assessment, evidence evaluation)
- Migration and asylum processing
- Administration of justice

**What high-risk compliance requires:**
- Conduct a conformity assessment before deployment
- Implement risk management systems
- Maintain technical documentation
- Use high-quality, representative training data with bias testing
- Keep logs of system operation (automatic logging)
- Enable human oversight mechanisms
- Achieve accuracy and robustness standards
- Register in the EU's AI systems database (for public-facing systems)

High-risk compliance is substantial. Estimate 6-18 months for a greenfield implementation, depending on system complexity.

### Limited-Risk AI (Transparency Obligations)

Limited-risk systems have lighter obligations focused on transparency:

- **Chatbots and conversational AI**: Must disclose to users that they are interacting with an AI, not a human
- **Deepfakes**: Synthetic audio-visual content must be labeled as AI-generated or manipulated
- **Emotion recognition and biometric categorization systems**: Must inform people of their use
- **AI-generated text on matters of public interest**: Must be labeled as AI-generated

These obligations apply at the point of deployment. If you're building a customer service chatbot, a disclosure banner is your main compliance deliverable. If you're generating news summaries or policy documents with AI, labeling is required.

### Minimal-Risk AI (No Additional Obligations)

The vast majority of AI applications fall here. Spam filters, AI-powered video games, recommendation systems, most productivity tools, and most content generation tools for personal use face no additional obligations beyond existing EU law (GDPR, consumer protection, etc.).

The Act explicitly encourages voluntary codes of conduct for minimal-risk systems, but these are not mandatory.

## The GPAI Provisions: What Foundation Model Developers Face

Chapter V of the AI Act introduces a category-breaking provision: obligations for providers of General Purpose AI models (GPAI). This is the provision most relevant to companies developing or deploying LLMs, diffusion models, and other foundation models.

### What Qualifies as a GPAI Model

A GPAI model is an AI model trained on large datasets using self-supervised learning at scale, capable of performing a wide range of tasks — designed to be used in multiple downstream applications. This definition captures virtually all major LLMs: GPT-4, Claude, Gemini, Llama, Mistral, and similar.

Notably, the GPAI provisions apply to model developers (providers), not to businesses that deploy pre-built GPAI models in applications (deployers). If you're calling the OpenAI API to build a product, OpenAI has GPAI obligations; you have deployment obligations only if your application becomes high-risk.

### Obligations for All GPAI Providers

All GPAI model providers (open source and commercial) must:

1. **Maintain technical documentation** covering training methodology, evaluation results, capabilities and limitations, intended use, and measures taken to address safety risks

2. **Publish a summary of training data** content to the EU AI Office

3. **Comply with copyright law** and publish an adequately detailed summary of training data for copyright compliance verification

4. **Cooperate with national authorities** on requests for documentation and information

### Additional Obligations for Systemic Risk GPAI Models

GPAI models above a training compute threshold of 10^25 FLOPs — a threshold that captures the largest frontier models — face additional "systemic risk" obligations:

- Conduct **adversarial testing** (red teaming) on known or foreseeable risks
- Report **serious incidents** to the EU AI Office (within 72 hours of becoming aware)
- Implement **cybersecurity protections** for model weights and infrastructure
- Report **energy consumption** during training and inference to the EU AI Office

The 10^25 FLOP threshold is significant. At current training efficiency levels, this captures models roughly at the scale of GPT-4 and above. Smaller frontier models (in the 7B-70B parameter range trained at standard data scales) fall below this threshold, though the threshold is designed to be updated as compute scales.

### Open Source Exemptions

The GPAI provisions include a partial exemption for open source models: providers who release model weights publicly under open source licenses are exempt from the documentation and copyright summary requirements, with one important exception — models that pose systemic risk (above the 10^25 FLOP threshold) are NOT exempt, even if open source.

This is a pragmatic acknowledgment that open source models have different liability structures while still capturing the highest-risk deployments. Llama 4 Scout and similar smaller open-weight models likely fall under the open source exemption; a hypothetical fully open GPT-5 equivalent would not.

## Enforcement Timeline

The EU AI Act does not apply all at once. The staggered timeline reflects the complexity of implementation:

| Date | Milestone |
|---|---|
| August 1, 2024 | Act enters into force |
| February 2, 2025 | Prohibited AI practices become enforceable |
| August 2, 2025 | GPAI obligations and AI Office governance begin |
| August 2, 2026 | High-risk AI (Annex III) obligations apply; transparency obligations for limited-risk |
| August 2, 2027 | Full application including high-risk AI in regulated products (Annex I) |

The most immediate enforcement action applies to prohibited AI: social scoring systems, real-time biometric identification in public, and the other outright bans have been enforceable since February 2025. If your system falls into any prohibited category, you needed to address this already.

GPAI obligations are in force now (from August 2025). LLM providers with EU market reach should have their documentation and copyright compliance in order.

High-risk system obligations (Annex III) become enforceable in August 2026 — this is the next major compliance deadline for most enterprise AI developers.

## Fine Structure

The AI Act's fine structure is designed to be significant relative to company size:

| Violation | Maximum Fine |
|---|---|
| Prohibited AI practices | €35 million or 7% of global annual turnover (whichever is higher) |
| Other violations (incl. GPAI) | €15 million or 3% of global annual turnover |
| Providing incorrect information to authorities | €7.5 million or 1.5% of global annual turnover |

For context: 7% of Google's global turnover would represent approximately $19 billion. 7% of a $10 million ARR startup is $700,000. The fine structure scales with company size, making the proportional burden broadly similar across organizations.

Enforcement will be carried out by national market surveillance authorities in each EU member state, coordinated by the EU AI Office at the European level. The AI Office has specific oversight responsibility for GPAI providers.

Like GDPR enforcement, actual fines will take time to develop as authorities build enforcement capacity and pursue test cases. But unlike early GDPR, the AI Act creates the EU AI Office as a dedicated enforcement body from day one, suggesting more proactive enforcement than the privacy regulation saw in its early years.

## Regulatory Comparison: EU, US, and China

The EU AI Act exists in a global regulatory context. Understanding the comparative landscape matters for companies operating internationally.

| Dimension | EU AI Act | US Approach | China AI Regulation |
|---|---|---|---|
| Framework type | Comprehensive binding legislation | Executive Orders + sector rules | Incremental binding rules by use case |
| Risk classification | Yes (four tiers) | No systematic classification | Yes (by application type) |
| GPAI/Foundation models | Yes (dedicated chapter) | NIST AI RMF (voluntary) | Yes (AIGC regulations) |
| Prohibited AI categories | Yes (7 prohibited uses) | No formal prohibitions | Limited |
| Compliance burden | High (high-risk systems) | Low-moderate (mostly voluntary) | Moderate |
| Enforcement body | EU AI Office + national authorities | FTC, sector regulators | CAC, MIIT, SAMR |
| Maximum fine | 7% global turnover | Varies by sector | CNY 500,000 (≈$70,000) for most rules |
| Open source treatment | Partial exemption | Not addressed | Limited exemption |
| Extraterritorial reach | Yes (EU market impact) | Limited | Yes (China market impact) |
| Implementation timeline | 2024-2027 | Ongoing | 2023-present (staged) |

### The US Approach

The United States has not passed comprehensive AI legislation. The federal approach combines:
- **Executive Order 14110 (Biden, Oct 2023)**: Directed agencies to develop AI safety standards, reporting requirements for frontier model training, and sector-specific guidance. Much of this was rolled back or deprioritized under the subsequent administration.
- **NIST AI Risk Management Framework**: A voluntary framework for managing AI risks, widely adopted by companies seeking to demonstrate AI governance maturity.
- **Sector-specific regulation**: FDA guidance for AI in medical devices, FTC enforcement against deceptive AI practices, CFPB guidance on AI in lending, and similar.

The result is a patchwork without a comprehensive federal law. Several states (California, Colorado, Illinois, Texas) have enacted or are considering AI-specific legislation, creating additional complexity for US-based companies.

### Chinese AI Regulation

China has taken an incremental, use-case-specific approach:
- **Algorithm Recommendation Regulation (2022)**: Rules for content recommendation algorithms, including transparency and opt-out requirements
- **Deep Synthesis (Deepfake) Regulation (2022)**: Labeling requirements for AI-generated content
- **AIGC (Generative AI) Regulation (2023)**: Applies to generative AI services offered to Chinese users — requires content filtering for prohibited categories, real-name verification for users, and registration with authorities

Chinese regulation focuses heavily on content control and national security concerns rather than the safety/rights-based framework of the EU. The fine structure is much lighter (CNY 500,000 ≈ $70,000 maximum for most provisions), but enforcement is backed by the threat of market access loss, which is more significant.

## Practical Compliance Checklist

### For Startups

**Immediate actions (before August 2026):**

- [ ] Classify your AI system(s) using the risk pyramid — is anything you're building likely high-risk or prohibited?
- [ ] If you're building a chatbot or conversational AI, implement clear AI disclosure in your user interface
- [ ] If you're generating any synthetic media (images, audio, video), implement AI-generated content labeling
- [ ] If you're using a commercial LLM API (OpenAI, Anthropic, Google), verify that the provider has addressed their GPAI compliance obligations — this is not your responsibility, but knowing your supply chain matters
- [ ] If you're building anything that touches employment, credit scoring, or benefits eligibility, assume high-risk classification and plan accordingly
- [ ] Consult legal counsel with EU AI Act expertise before launching in EU markets if you're uncertain about risk classification

**Documentation to prepare:**
- [ ] Technical documentation describing your AI system's purpose, capabilities, and limitations
- [ ] Data governance documentation (training data sources, data quality measures)
- [ ] Incident response procedures
- [ ] Human oversight mechanisms for any consequential AI decisions

### For Enterprise Companies

**Governance framework:**
- [ ] Appoint an AI compliance lead or committee
- [ ] Map all AI systems in production to the risk classification tiers
- [ ] Establish a process for classifying new AI systems before deployment
- [ ] Integrate AI risk assessment into product development lifecycle

**High-risk systems (if applicable):**
- [ ] Commission conformity assessments for all Annex III systems
- [ ] Implement logging and audit trail infrastructure
- [ ] Establish human oversight mechanisms with documented procedures
- [ ] Register in the EU AI database (for public-facing high-risk systems)
- [ ] Conduct bias testing on training data

**GPAI providers:**
- [ ] Prepare and maintain technical documentation per Article 53
- [ ] Publish training data summary
- [ ] Assess training compute to determine systemic risk threshold applicability
- [ ] If above 10^25 FLOPs: establish adversarial testing program, incident reporting procedure, energy consumption tracking

**Ongoing compliance:**
- [ ] Monitor EU AI Office guidance and delegated acts (the Act delegates substantial rule-making to the Commission)
- [ ] Track national implementation across relevant EU markets
- [ ] Establish vendor due diligence process for AI components from third parties
- [ ] Train product and engineering teams on AI Act obligations

## What This Means Going Forward

The EU AI Act is not the end of AI regulation — it's the beginning. The Act's delegated act mechanism means the EU Commission will issue detailed implementing regulations that flesh out the requirements. The codes of practice for GPAI models, being developed with industry input through 2025-2026, will determine what compliance actually looks like for LLM providers.

The extraterritorial reach of the Act is real. Any company offering AI systems or services that can be used by people in the EU — regardless of where the company is based — is subject to the Act if they are "placing" AI systems on the EU market or putting them into service in the EU. The practical question of what "placing on the EU market" means for a US-based SaaS company with European customers will be resolved through enforcement practice over time.

For developers and companies: the time to understand and prepare for AI Act compliance is now, not after August 2026. The companies that treat compliance as a last-minute checkbox exercise will be the ones facing enforcement action and expensive remediation. The companies that build AI governance into their product development process will have a structural advantage as regulation expands — not just in the EU, but in the jurisdictions that will inevitably follow the EU's lead.

---

*This article reflects EU AI Act provisions as enacted. Delegated acts, implementing regulations, and enforcement guidance continue to be developed and may affect compliance requirements. Consult qualified legal counsel for advice on your specific situation.*

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener">European Commission — AI regulatory framework (official)</a><br/>
· <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener">EUR-Lex — AI Act full text (Reg. 2024/1689)</a><br/>
· <a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener">The EU AI Act Explorer</a>
</div>