---
title: "NVIDIA Rubin: Inside the GPU Architecture That Comes After Blackwell"
summary: "NVIDIA's Rubin architecture is the successor to Blackwell, promising massive leaps in AI training and inference performance. Here's what we know about the specs, timeline, and implications for the AI industry."
category: "it-news"
date: "2026-05-22"
readingTime: 9
tags: ["NVIDIA", "Rubin", "GPU", "AIHardware", "Blackwell"]
---

<div style="background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.25rem 1.5rem;border-radius:0 8px 8px 0;margin:0 0 2rem 0;">
  <p style="font-weight:700;font-size:1rem;margin:0 0 0.75rem 0;color:#0369a1;">TL;DR</p>
  <ul style="margin:0;padding-left:1.25rem;color:#0c4a6e;line-height:1.7;">
    <li>NVIDIA Rubin is the next-generation GPU architecture following Blackwell, targeting a <strong>2026 introduction</strong> with full data center ramp in 2027.</li>
    <li>Rubin introduces <strong>HBM4 memory</strong>, a new NVLink generation, and substantially higher FP4/FP8 tensor core throughput versus Blackwell.</li>
    <li>Expected performance uplift for AI training: <strong>2–3x over GB200</strong>; inference throughput gains could exceed 3x in bandwidth-bound workloads.</li>
    <li>Rubin directly competes with AMD's forthcoming MI400 series and Google's TPU v6, in an accelerator market projected to exceed $250B by 2027.</li>
    <li>All specifications in this article are based on NVIDIA roadmap announcements and analyst projections — <strong>final specs have not been officially confirmed</strong>.</li>
  </ul>
</div>

The cadence of NVIDIA GPU architecture generations has become one of the most consequential product schedules in the technology industry. The jump from Hopper to Blackwell set a new benchmark for what AI hardware could achieve. Now, with Blackwell systems only beginning to reach full deployment at hyperscalers, the industry's attention is turning to what comes next: **Rubin**.

Named after Vera Rubin, the astronomer whose observations provided key evidence for dark matter, Rubin is poised to continue NVIDIA's pattern of aggressive generational performance scaling. Based on NVIDIA's publicly shared roadmap slides, analyst reports, and supply chain intelligence, this is the most comprehensive technical picture available of what Rubin means for AI infrastructure.

<div style="background:#fff7ed;border-left:4px solid #f97316;padding:1.25rem 1.5rem;border-radius:0 8px 8px 0;margin:2rem 0;">
  <p style="font-weight:700;font-size:0.9rem;margin:0 0 0.5rem 0;color:#9a3412;text-transform:uppercase;letter-spacing:0.05em;">Important Note</p>
  <p style="margin:0;color:#7c2d12;">NVIDIA has not yet published a final Rubin datasheet. Specifications referenced in this article are drawn from NVIDIA GTC roadmap materials, analyst briefings, and supply chain reporting as of May 2026. Figures marked as "projected" or "estimated" should be treated as subject to change.</p>
</div>

## What Is Rubin, and Why Does It Matter?

NVIDIA operates a two-year GPU architecture cadence for its data center lineup. Hopper launched in 2022, Blackwell in 2024, and Rubin is slated for first silicon in late 2026, with system-level products (likely in a "Grace Rubin" superchip format) ramping through 2027.

At a high level, Rubin is expected to deliver on three fronts:

1. **Memory technology transition** — Moving from HBM3e (Blackwell) to HBM4, which delivers meaningfully higher bandwidth per stack and lower power per bit.
2. **Compute density uplift** — A new tensor core generation with improved FP4 and FP8 throughput, building on the mixed-precision execution introduced in Blackwell.
3. **Interconnect expansion** — A next-generation NVLink (informally referred to as NVLink 6.0 in analyst reports) with higher per-GPU bandwidth than Blackwell's 1.8 TB/s bidirectional.

These three levers — memory bandwidth, compute throughput, and interconnect speed — are precisely the bottlenecks that constrain modern LLM training and inference at scale. Rubin addresses all three simultaneously.

<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:1.5rem;margin:2rem 0;">
  <p style="font-weight:700;font-size:1rem;margin:0 0 1.25rem 0;color:#1e293b;">Projected Rubin Performance Snapshot</p>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;">
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:1rem;text-align:center;">
      <p style="font-size:1.75rem;font-weight:800;margin:0;color:#6366f1;">~4,000+</p>
      <p style="font-size:0.8rem;color:#64748b;margin:0.25rem 0 0 0;">FP8 TFLOPS (per GPU, estimated)</p>
    </div>
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:1rem;text-align:center;">
      <p style="font-size:1.75rem;font-weight:800;margin:0;color:#6366f1;">~16 TB/s</p>
      <p style="font-size:0.8rem;color:#64748b;margin:0.25rem 0 0 0;">HBM4 memory bandwidth (projected)</p>
    </div>
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:1rem;text-align:center;">
      <p style="font-size:1.75rem;font-weight:800;margin:0;color:#6366f1;">288 GB+</p>
      <p style="font-size:0.8rem;color:#64748b;margin:0.25rem 0 0 0;">HBM4 capacity per GPU (projected)</p>
    </div>
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:1rem;text-align:center;">
      <p style="font-size:1.75rem;font-weight:800;margin:0;color:#6366f1;">3.6 TB/s</p>
      <p style="font-size:0.8rem;color:#64748b;margin:0.25rem 0 0 0;">NVLink 6.0 bidirectional BW (projected)</p>
    </div>
  </div>
  <p style="font-size:0.75rem;color:#94a3b8;margin:1rem 0 0 0;">All figures are analyst estimates and NVIDIA roadmap projections. Not confirmed as final specifications.</p>
</div>

## Rubin vs. Blackwell: The Architecture Comparison

The clearest way to frame Rubin is relative to Blackwell, since Blackwell is the current production standard. The table below summarizes key projected differences:

| Specification | Blackwell B200 | Rubin (Projected) | Delta |
|---|---|---|---|
| Architecture | Blackwell | Rubin | — |
| Process node | TSMC N4P | TSMC N3P (estimated) | ~1 gen improvement |
| FP8 TFLOPS | ~2,250 | ~4,000–4,500 | ~1.8–2x |
| FP4 TOPS | ~4,500 | ~8,000–9,000 | ~1.8–2x |
| HBM generation | HBM3e | HBM4 | Next-gen |
| Memory capacity | 192 GB | 288–384 GB (est.) | ~1.5–2x |
| Memory bandwidth | 8 TB/s | 14–16 TB/s (est.) | ~1.75–2x |
| NVLink generation | NVLink 5.0 | NVLink 6.0 (est.) | Next-gen |
| NVLink BW (bidir.) | 1.8 TB/s | 3.2–3.6 TB/s (est.) | ~2x |
| TDP (estimated) | 1,000W | 1,200–1,500W (est.) | Higher |
| Expected availability | 2024–2025 (current) | Late 2026–2027 | ~2 years |

*All Rubin figures are projected estimates, not official NVIDIA specifications.*

The pattern is clear: roughly 2x across nearly every dimension. This mirrors the Hopper-to-Blackwell improvement cadence, suggesting NVIDIA has found a reliable upgrade lever in memory technology generation changes combined with process node advancement.

## HBM4: The Memory Leap

High Bandwidth Memory is arguably the most important specification for AI workloads. Training and inference for large language models are fundamentally memory-bandwidth-bound — the GPU must move model weights and activations from memory to compute units faster than computation can consume them. Every doubling of memory bandwidth translates directly into higher throughput for memory-bound workloads.

HBM4, developed by SK Hynix and Samsung, is the fourth generation of the high-bandwidth memory standard. Key improvements over HBM3e:

- **Higher per-stack bandwidth**: HBM4 interfaces are expected to operate at 6.4 Gbps per pin (up from ~4.8 Gbps for HBM3e), yielding approximately 2 TB/s per stack in 8-stack configurations.
- **Increased stack height**: HBM4 supports taller stacks with more die layers, increasing capacity per stack to an estimated 48–64 GB (versus 24 GB for HBM3e stacks).
- **Improved power efficiency**: HBM4 targets roughly 20–25% lower power per bit transferred compared to HBM3e.

For a Rubin GPU with 6–8 HBM4 stacks, total bandwidth in the range of 14–16 TB/s is plausible. This compares to 8 TB/s for Blackwell B200 and 3.35 TB/s for the H100 — a roughly 5x bandwidth improvement over the H100 generation in approximately four years.

<div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:1.25rem 1.5rem;border-radius:0 8px 8px 0;margin:2rem 0;">
  <p style="font-weight:700;font-size:0.9rem;margin:0 0 0.5rem 0;color:#15803d;text-transform:uppercase;letter-spacing:0.05em;">Why This Matters for Inference</p>
  <p style="margin:0;color:#14532d;">For LLM inference, the critical bottleneck is loading model weights from memory into compute units for each forward pass. A model like a 70B-parameter LLaMA variant requires moving roughly 140 GB of FP16 weights per forward pass. At 8 TB/s (Blackwell), that takes ~17.5 microseconds of pure memory bandwidth. At 16 TB/s (Rubin, projected), it halves to ~8.75 microseconds — meaning Rubin can serve roughly 2x more inference requests per second for the same model, purely from the memory bandwidth improvement, before any compute improvements are counted.</p>
</div>

## NVLink 6.0 and Multi-GPU Scaling

For training frontier-scale models, the bottleneck is rarely a single GPU — it's how efficiently hundreds or thousands of GPUs can communicate during gradient synchronization and pipeline parallelism steps. NVLink interconnect bandwidth is therefore as important as per-GPU compute.

Blackwell's NVLink 5.0 delivers 1.8 TB/s bidirectional bandwidth per GPU within an NVL72 rack. If Rubin ships with NVLink 6.0 at approximately double the bandwidth (~3.6 TB/s), this would halve the communication overhead for model-parallel training across GPUs within the same system.

The expected product configuration — tentatively referred to in analyst reports as a "GR200 NVL72" or similar — would follow Blackwell's approach of combining a next-generation Grace CPU with two Rubin GPUs per superchip, then connecting 36 superchips (72 GPUs) via NVLink fabric in a single rack. If this design holds:

- **Total FP8 compute per rack**: ~300+ PFLOPS (versus ~162 PFLOPS for NVL72 Blackwell)
- **Total HBM4 memory**: ~20–27 TB (versus ~13.5 TB for Blackwell NVL72)
- **Total memory bandwidth**: ~1,000+ TB/s aggregate (versus ~576 TB/s for Blackwell NVL72)

These rack-level numbers are what matter for frontier model training. A cluster of ten such racks would deliver over 3 exaFLOPS of FP8 compute — enough to train a GPT-4-scale model in days rather than months.

## Timeline: When Does Rubin Arrive?

NVIDIA's roadmap as shared at GTC 2024 positioned Rubin for a 2026 introduction. Based on subsequent supply chain intelligence and analyst reports:

- **First Rubin silicon tape-out**: Estimated Q3 2025 (TSMC N3P process)
- **Engineering samples and customer sampling**: H1 2026
- **First commercial Rubin-based products**: Late 2026 (likely DGX-format systems for AI labs)
- **Hyperscaler ramp and cloud availability**: 2027

This timeline implies Blackwell will have roughly a two-year window as the production workhorse for AI infrastructure — mirroring how Hopper ran from 2022 to 2024. For hyperscalers currently building out Blackwell-based clusters, the calculus is clear: Blackwell infrastructure purchased now depreciates against Rubin availability in 2027, but the AI compute backlog means every GPU-year of Blackwell is still economically valuable.

<div style="background:#fefce8;border-left:4px solid #eab308;padding:1.25rem 1.5rem;border-radius:0 8px 8px 0;margin:2rem 0;">
  <p style="font-weight:700;font-size:0.9rem;margin:0 0 0.5rem 0;color:#854d0e;text-transform:uppercase;letter-spacing:0.05em;">Planning Consideration for Infrastructure Buyers</p>
  <p style="margin:0;color:#713f12;">Organizations evaluating multi-year GPU infrastructure commitments should weigh the opportunity cost carefully. Locking into large Blackwell contracts through 2027 means operating through the early Rubin ramp without access to next-gen hardware. However, given the consistent AI compute demand backlog, waiting for Rubin is not a free option — the training and inference workloads that aren't run on Blackwell today don't get cheaper by waiting. Most serious AI infrastructure operators are expected to adopt a Blackwell-now, Rubin-supplement approach rather than a wholesale wait strategy.</p>
</div>

## Competitive Landscape: What AMD, Google, and Others Are Doing

Rubin does not arrive into a vacuum. The AI accelerator competitive landscape in 2026–2027 will be more contested than at any prior point.

**AMD MI400 Series**: AMD's CDNA 4-based MI400 is expected to compete directly with Rubin in the 2027 timeframe. AMD has made significant progress with MI300X and is expected to continue improving ROCm software support. Early MI400 projections suggest memory bandwidth comparable to Rubin's HBM4 specs, which would make AMD genuinely competitive on a per-spec basis — though CUDA's ecosystem advantage will remain a meaningful differentiator.

**Google TPU v6**: Google's internal Trillium TPU (v6) is already in production and reportedly delivers a 4.7x performance improvement over its predecessor per chip. TPU v6 is available on Google Cloud and directly enables competitive inference pricing on Vertex AI. Google's custom silicon trajectory, if maintained, will produce chips purpose-optimized for transformer inference at a cost efficiency that general-purpose GPUs cannot fully match for Gemini-serving workloads.

**Amazon Trainium 3**: Amazon's third-generation Trainium chip is expected to arrive alongside Rubin in the 2026–2027 window, targeting training workloads for Amazon's internal model development. Trainium 3 is not broadly available as a commercial product, but it affects the AWS cost structure for AI training services.

**Intel Gaudi 3 / Falcon Shores**: Intel's AI accelerator roadmap remains the weakest of the major players, but Falcon Shores (a combined GPU/XPU architecture targeting 2025–2026) represents Intel's attempt to consolidate its server AI strategy. Performance projections have been modest compared to NVIDIA and AMD, and software ecosystem maturity continues to lag.

For most enterprise and cloud AI buyers, the competitive question in 2027 is not "Rubin or something else" — it will be "how much Rubin can we get, and at what premium." AMD's MI400 is the only realistic alternative for buyers unwilling to pay NVIDIA's margin, assuming AMD continues its software progress trajectory.

<div style="background:#fdf4ff;border-left:4px solid #a855f7;padding:1.25rem 1.5rem;border-radius:0 8px 8px 0;margin:2rem 0;">
  <p style="font-weight:700;font-size:0.9rem;margin:0 0 0.5rem 0;color:#7e22ce;text-transform:uppercase;letter-spacing:0.05em;">The Custom Silicon Wildcard</p>
  <p style="margin:0;color:#581c87;">Google and Amazon's custom silicon efforts matter less for their current performance than for their long-term pricing signal. If hyperscalers can internally cover 40–60% of their compute needs with in-house chips optimized for their specific model architectures, their dependence on NVIDIA pricing decreases materially. This is the structural threat to NVIDIA's data center margin — not AMD winning GPU-to-GPU benchmarks, but hyperscalers reducing the number of NVIDIA GPUs they need to buy in the first place.</p>
</div>

## Implications for AI Companies and Cloud Providers

The arrival of Rubin in 2026–2027 will reshape AI infrastructure economics in several ways.

**For cloud providers (AWS, Azure, Google Cloud, Oracle Cloud)**: The infrastructure build cycle restarts. Providers who aggressively over-provisioned Blackwell capacity in 2025–2026 will face a write-down cycle as Rubin systems achieve better price-performance. Providers who were conservative will rush to place Rubin orders, repeating the supply scramble seen with H100 and Blackwell. Early access to Rubin samples will translate to GPU cloud competitive advantage — the first cloud to offer Rubin-class inference at scale will be able to undercut Blackwell-era pricing while maintaining higher margins.

**For AI labs doing frontier training**: Rubin's 2x compute and memory bandwidth improvement means the "next frontier model" can be trained on similar cluster sizes to current models but at 2x the effective scale, or at the same effective scale with half the time. For labs whose training run cadence is currently Blackwell-limited, Rubin access in 2027 directly accelerates the research timeline.

**For enterprise AI buyers**: The Blackwell-to-Rubin transition means enterprise buyers are probably better served today by cloud-based AI services (which abstract the hardware generation question) than by on-premises GPU investments that could be partially stranded by Rubin's arrival. For on-prem investments, DGX B200 systems purchased in 2026 will retain workload-handling capability for 4–5 years, but at degrading cost-performance relative to Rubin cloud alternatives.

## What Stays Uncertain

Several significant questions about Rubin remain genuinely open:

- **TSMC N3P availability and yield**: A Rubin tapeout on TSMC's N3P process depends on TSMC's capacity allocation in a context where Apple, AMD, Qualcomm, and others also compete for N3 capacity. Yield issues could push timelines or force design modifications.
- **Final FP4 implementation**: FP4 compute (4-bit floating point) was introduced at scale with Blackwell. Rubin's FP4 throughput projections assume continued maturation of FP4 inference quality — if FP4 model quality issues persist, the FP8 specs become more relevant than the headline FP4 numbers.
- **Thermal and power constraints**: Blackwell B200 already operates at 1,000W TDP. Rubin at 1,200–1,500W pushes data center power density to challenging levels. How NVIDIA manages the power-performance tradeoff in Rubin's final design will determine whether the projected performance gains are accessible in realistic data center deployments.
- **NVLink 6.0 specification confirmation**: The NVLink 6.0 bandwidth projections are based on extrapolation from NVIDIA's historical interconnect scaling, not disclosed specifications.

---

<div style="background:#1e293b;color:#e2e8f0;border-radius:8px;padding:1.5rem 1.75rem;margin:2.5rem 0;">
  <p style="font-weight:700;font-size:1rem;margin:0 0 1rem 0;color:#f1f5f9;">Key Takeaways</p>
  <ul style="margin:0;padding-left:1.25rem;line-height:1.85;color:#cbd5e1;">
    <li>Rubin is NVIDIA's next GPU architecture after Blackwell, with first commercial systems expected in <strong style="color:#e2e8f0;">late 2026</strong> and hyperscaler ramp through <strong style="color:#e2e8f0;">2027</strong>.</li>
    <li><strong style="color:#e2e8f0;">HBM4 memory</strong> is the single biggest enabling technology — doubling bandwidth over HBM3e with higher capacity per stack, directly accelerating memory-bandwidth-bound AI inference.</li>
    <li>Projected FP8 throughput (~4,000+ TFLOPS) and NVLink 6.0 bandwidth (~3.6 TB/s) suggest roughly <strong style="color:#e2e8f0;">2x generational improvement</strong> across the critical AI compute specs — consistent with NVIDIA's Hopper-to-Blackwell pattern.</li>
    <li>AMD MI400 and Google TPU v6 represent the most credible competitive alternatives, but CUDA's ecosystem advantage and NVLink's multi-GPU scaling remain NVIDIA's structural moat.</li>
    <li>All Rubin specifications in this article are <strong style="color:#e2e8f0;">projected estimates</strong>, not finalized figures. Treat them as directional, not definitive, until NVIDIA publishes an official Rubin datasheet.</li>
    <li>Enterprise buyers should plan for a Blackwell-now, Rubin-supplement strategy rather than waiting — the compute demand backlog means Blackwell ROI remains strong despite Rubin's approaching availability.</li>
  </ul>
</div>

*TechPulse covers AI and technology from a practitioner's perspective. Specifications and timelines reflect best available public information as of May 2026. For official NVIDIA product information, refer to [nvidia.com](https://nvidia.com).*
