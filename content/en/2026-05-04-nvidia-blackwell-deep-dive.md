---
title: "NVIDIA Blackwell: Why Every AI Company Is Racing to Get GB200s"
summary: "A technical deep dive into NVIDIA's Blackwell GPU architecture — GB200, B100, and B200 specifications, performance vs. H100, supply constraints, customer orders, AMD competition, and what developers need to know about accessing Blackwell compute."
category: "it-news"
date: "2026-05-04"
tags: ["nvidia", "blackwell", "gpu", "h100", "ai-infrastructure", "datacenter"]
readingTime: 13
---

The AI infrastructure gold rush has a new center of gravity: NVIDIA's Blackwell architecture. The GB200 NVL72 rack — a 72-GPU interconnected compute unit that functions as a single logical system — is the most coveted piece of hardware in the technology industry, with wait lists measured in quarters and prices that make enterprise buyers wince. Understanding Blackwell is essential for anyone building or deploying AI systems at scale. This is the comprehensive technical and strategic overview you need.

<div class="article-video">
<iframe src="https://www.youtube-nocookie.com/embed/kDd24YOeqQQ" title="NVIDIA GTC 2026 Keynote with Jensen Huang Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Background: The H100 Era and Why Blackwell Matters

NVIDIA's H100 (Hopper architecture) defined the modern AI compute landscape. Trained on H100 clusters, virtually every frontier AI model from GPT-4 to Llama 3 to Gemini 1.5 represents massive investments in Hopper-era infrastructure. The AI industry built its foundations on H100.

Blackwell is the generational leap. The performance improvements are not incremental — they're discontinuous — and they're specifically targeted at the training and inference workloads that define modern AI development. Companies that get Blackwell access early have a meaningful competitive advantage; companies that don't are constrained in the scale and speed of their AI development.

This is why the demand is extraordinary and the supply situation is so fraught. It's not just that Blackwell is faster. It's that in AI, compute access IS competitive advantage, and Blackwell is the new frontier of accessible compute.

## The Blackwell Product Family

NVIDIA structured Blackwell across three primary data center GPU products with meaningfully different specifications and market positions.

### B100

The B100 is the entry point of the Blackwell data center lineup — a drop-in upgrade for existing H100 SXM infrastructure. It uses the same SXM5 socket and can be deployed in H100 server designs without major system redesign, making it an attractive upgrade path for operators with existing Hopper investments.

**Key B100 specifications:**
- GPU die: Two GH100 dies connected via NVLink Chip-2-Chip (C2C)
- FP8 tensor core performance: 1.8 PFLOPS
- BF16 tensor core performance: 900 TFLOPS
- HBM3e memory: 192 GB
- Memory bandwidth: 8 TB/s
- TDP: 700W
- NVLink 5.0 bandwidth: 1.8 TB/s (bidirectional)

The B100's backward compatibility is its primary selling point for buyers with significant H100 infrastructure investments.

### B200

The B200 is the flagship single-GPU offering, a discrete upgrade over the B100 with higher clock frequencies and additional memory capacity. It requires dedicated server designs (SXM5 and PCIe variants) but delivers the highest single-chip performance in the lineup.

**Key B200 specifications:**
- FP8 tensor core performance: 2.25 PFLOPS
- BF16 tensor core performance: 1.125 PFLOPS
- HBM3e memory: 192 GB
- Memory bandwidth: 8 TB/s
- TDP: 1,000W
- Form factor: SXM5 (B200 SXM) and PCIe (B200 PCIe)

The B200 is the default choice for new builds from buyers who want maximum per-GPU performance without committing to the integrated GB200 NVL72 system.

### GB200 NVL72

This is the product driving the frenzy. The GB200 NVL72 is not just a GPU — it's a complete compute system. Understanding what it is requires understanding the Grace Blackwell Superchip architecture.

Each Grace Blackwell Superchip (GB200) combines:
- One NVIDIA Grace CPU (72 Arm Neoverse V2 cores)
- Two B200 GPUs
- NVLink-C2C interconnect between CPU and GPU (900 GB/s bidirectional, 7x the bandwidth of PCIe 5.0)

The NVL72 rack takes 36 of these Grace Blackwell Superchips and connects all 72 GPUs via NVLink 5.0, creating a unified all-to-all connected pool of 72 GPUs that can communicate at 1.8 TB/s bidirectional between any pair. From a software perspective, this looks like one massive logical GPU.

**NVL72 system specifications:**
- Total GPU count: 72 B200s
- Total GPU memory: 13,824 GB (13.5 TB)
- Total FP8 compute: 162 PFLOPS
- Total BF16 compute: 81 PFLOPS
- Total system memory bandwidth: 576 TB/s
- Power consumption: ~120 kW (liquid cooled)
- Rack space: ~16U for compute trays + networking

The memory bandwidth is the specification that matters most for LLM inference. 576 TB/s across 72 GPUs enables serving very large models at low latency — entire frontier-scale models that previously required distributed serving across many independent servers can run within a single NVL72 rack.

## Performance Comparison: Blackwell vs. Hopper

The marketing numbers (30x inference improvement over H100) are misleading without context. Here's a more precise breakdown.

| Metric | H100 SXM | B100 | B200 | GB200 NVL72 (per GPU) |
|---|---|---|---|---|
| FP8 TFLOPS | 3,958 | 1,800,000 (PF) | 2,250,000 (PF) | ~2,250,000 (PF) |
| BF16 TFLOPS | 1,979 | 900 | 1,125 | 1,125 |
| HBM capacity | 80 GB | 192 GB | 192 GB | 192 GB |
| Memory BW | 3.35 TB/s | 8 TB/s | 8 TB/s | 8 TB/s |
| NVLink BW | 900 GB/s | 1.8 TB/s | 1.8 TB/s | 1.8 TB/s |
| TDP | 700W | 700W | 1,000W | ~1,600W |

*Note: FP8 is a new precision format introduced at scale with Blackwell; H100's FP8 implementation was limited and not directly comparable to Blackwell's FP8 TFLOPS.*

The meaningful performance comparisons are workload-specific:

**LLM training**: For training runs of models like GPT-4 class size, Blackwell shows approximately 2.5-3x training throughput improvement over H100 at comparable batch sizes, owing to higher memory bandwidth, improved NVLink interconnect, and new hardware features for transformer workloads.

**LLM inference (throughput)**: At batch sizes optimized for throughput, Blackwell shows 4-5x improvement over H100, primarily driven by the larger memory capacity (enabling larger batch sizes without model partitioning) and higher memory bandwidth.

**LLM inference (latency)**: For time-to-first-token at small batch sizes, improvements are more modest — 1.5-2x — since this is compute-bound rather than memory-bandwidth-bound.

**The 30x claim**: NVIDIA's 30x inference improvement figure is calculated for FP8 precision on large batch sizes using the NVL72 all-to-all interconnect and compares against H100 in configurations not optimized for the task. It represents a best case, not a typical case.

## Key Technical Innovations

### FP8 at Scale

Hopper introduced FP8 training support, but Blackwell is the first architecture where FP8 is a practical default for production workloads. The Blackwell FP8 tensor cores deliver twice the FLOPS of BF16 at the same TDP, and NVIDIA's improved dynamic scaling algorithms make FP8 training loss curves match BF16 quality more reliably.

For inference, FP8 quantization on Blackwell is mature enough that most frontier model labs are reporting equivalent or near-equivalent quality to BF16 at half the compute cost. This is the primary driver of the inference efficiency improvements.

### NVLink 5.0 and the NVSwitch

NVLink 5.0 doubles the bandwidth of NVLink 4.0 (H100-era) from 900 GB/s to 1.8 TB/s bidirectional per GPU. When combined with the NVSwitch fabric in the NVL72, this enables all-to-all GPU communication at full bandwidth — any GPU can communicate with any other GPU at 1.8 TB/s, not just adjacent GPUs.

This is significant for model parallelism. Large model training and inference require splitting models across multiple GPUs, and the efficiency of that splitting depends heavily on how quickly GPUs can exchange activations and gradients. With NVLink 5.0, the communication overhead for pipeline parallelism across 72 GPUs within an NVL72 is dramatically lower than the equivalent inter-node communication over InfiniBand.

### Confidential Computing

Blackwell adds hardware-based confidential computing — the ability to run GPU workloads in encrypted memory that's inaccessible even to the host system operator. For cloud deployment, this enables "bring your own model weights" scenarios where a customer can deploy proprietary model weights to cloud infrastructure without the cloud provider being able to access them.

This is a meaningful enterprise security feature, particularly for regulated industries and companies with IP concerns about running proprietary models on shared infrastructure.

### Transformer Engine v2

The Transformer Engine, introduced with Hopper, automates the precision management for transformer model training. Blackwell's Transformer Engine v2 adds support for FP4 precision (for specific operations), improved dynamic range scaling, and better compatibility with varied model architectures.

## Pricing and Supply Reality

The economics of Blackwell are as important as the technical specifications for anyone making infrastructure decisions.

### Pricing

NVIDIA sells GPUs primarily through partners (servers sold by Dell, HPE, Supermicro, etc.) and cloud providers, making retail pricing indicative rather than definitive:

| Product | Estimated Street Price |
|---|---|
| B100 SXM (per GPU) | $28,000 – $35,000 |
| B200 SXM (per GPU) | $35,000 – $45,000 |
| GB200 NVL72 (full rack system) | $3.0M – $3.5M |

Cloud spot pricing (where available):
- B200-equivalent on major clouds: $8 – $15/GPU-hour
- B100 on major clouds: $6 – $10/GPU-hour

These prices represent 30-50% premiums over equivalent H100 pricing at launch. Given the performance improvements, the price-per-FLOP is roughly similar to or better than H100 at current H100 prices.

### Supply Chain Reality

TSMC manufactures the Blackwell dies using its N4P process. Production has ramped more smoothly than Hopper (which was constrained by CoWoS packaging capacity), but demand dramatically exceeds supply. Current allocation status:

- Priority allocations for orders placed before Q3 2025 are beginning to deliver
- New orders placed in 2026 face 6-9 month wait times for B200 configurations
- GB200 NVL72 full rack systems remain extremely constrained, with delivery timelines stretching into late 2026 and 2027 for most buyers
- Cloud availability of Blackwell remains limited and highly competed

## Major Customer Orders

The largest technology companies made massive commitments to Blackwell infrastructure. Public information on these orders provides a sense of the scale of deployment:

| Company | Reported Commitment | Primary Use Case |
|---|---|---|
| Microsoft | ~485,000 B200 GPUs (multiple tranches) | Azure AI services, OpenAI training |
| Google | ~375,000 B200 GPUs | Gemini training, Cloud AI services |
| Meta | ~350,000 B200 GPUs | Llama training, AR/VR research |
| Amazon | ~300,000 B200 GPUs | AWS AI services, Alexa AI |
| Oracle | ~131,000 B200 GPUs | OCI AI infrastructure |
| CoreWeave | ~150,000 B200 GPUs | GPU cloud services |
| xAI | ~200,000 B200 GPUs | Grok training infrastructure |

*Figures are approximate, compiled from public reporting and company statements. Actual figures may differ.*

The scale of these commitments — amounting to millions of GPUs across the industry — explains why NVIDIA's revenue has grown at extraordinary rates and why Blackwell supply remains constrained despite aggressive production ramp.

## AMD MI300X: The Competition Assessment

AMD's MI300X launched as the first credible challenger to H100 supremacy, and in specific workloads, it genuinely competed. How does it fare against Blackwell?

| Spec | NVIDIA B200 | AMD MI300X |
|---|---|---|
| Architecture | Blackwell | CDNA 3 |
| HBM capacity | 192 GB | 192 GB |
| Memory BW | 8 TB/s | 5.3 TB/s |
| FP8 TFLOPS | 2,250 | 2,610 |
| BF16 TFLOPS | 1,125 | 1,307 |
| NVLink/Infinity Fabric BW | 1.8 TB/s | 896 GB/s |
| TDP | 1,000W | 750W |
| Software maturity (ROCm) | CUDA (mature) | ROCm (improving) |

On raw FP8 TFLOPS, the MI300X is actually higher than the B200. On memory bandwidth, it's behind. On interconnect bandwidth for multi-GPU configurations, it's significantly behind.

The real differentiator is software. CUDA's ecosystem advantage — years of optimized libraries, tooling, and developer familiarity — translates to MI300X GPU utilization rates that are systematically lower than equivalent Blackwell configurations in most real workloads. AMD has made significant progress with ROCm 6.x, and several major AI labs have successfully trained frontier models on MI300X clusters, but the software overhead remains real.

The competitive landscape will shift with MI350 (expected late 2026), which AMD has said will feature significant architecture improvements. For now, Blackwell is the dominant choice for new AI infrastructure, with MI300X filling roles where NVIDIA supply is unavailable or where buyers want to maintain negotiating leverage.

## AI Infrastructure Market Outlook

The AI infrastructure market is in a structural build-out phase that shows few signs of slowing. Projections for the data center AI accelerator market:

| Year | Market Size (USD) | NVIDIA Share |
|---|---|---|
| 2024 | $87B | ~88% |
| 2025 | $140B | ~85% |
| 2026E | $195B | ~82% |
| 2027E | ~$250B | ~78% |

NVIDIA's market share erosion is gradual and happening at a time when the overall market is growing rapidly — meaning NVIDIA's absolute revenue continues to grow even as AMD, Intel (Gaudi 3), and custom silicon (Google TPUs, Amazon Trainium, Meta MTIA) take incremental share.

Custom silicon from hyperscalers deserves attention. Google's TPU v5e and Meta's MTIA 2 are optimized for specific inference workloads at a cost efficiency that commercial GPUs can't match for those specific use cases. However, these are purpose-built for internal workloads; they're not available to third parties and don't compete in the general-purpose GPU market.

## What Developers Should Actually Do

If you're building on top of cloud AI APIs, Blackwell's existence matters primarily because it enables the compute capacity that will drive down inference costs over time. The improvements in H100 → Blackwell translate into better price-performance on the cloud services you're already using.

If you're doing your own model training or inference at scale, here's a practical guide to Blackwell access:

**Cloud GPU access (near-term)**: 
- AWS: P5e instances (B200-based) in limited availability
- Azure: ND B200 v5 series in preview
- Google Cloud: A4 instances (Blackwell-based) in select regions
- CoreWeave, Lambda, Vast.ai: B200 and B100 availability with shorter wait times than hyperscalers

**On-premises (longer-term)**:
- DGX B200 server: 8x B200, single-server configuration for medium-scale work
- HGX B200 (OEM): Dell PowerEdge, HPE ProLiant, Supermicro configurations
- GB200 NVL72: Requires dedicated power and cooling infrastructure, suitable only for serious compute operators

**Framework support**:
CUDA 12.5+ is required for full Blackwell feature support. PyTorch 2.4+ includes Blackwell-specific optimizations. JAX and TensorFlow support is available. NVIDIA's TensorRT-LLM inference library has been optimized for Blackwell and is the recommended path for production LLM inference on NVIDIA hardware.

Blackwell is not a product cycle you can ignore if you're serious about AI infrastructure. The performance improvements are genuine, the ecosystem is maturing rapidly, and the cloud availability path — while constrained — is opening up. Plan your access strategy now; the wait times are real and they affect your competitive timeline.

---

*Pricing information reflects market estimates as of Q1 2026. Specifications reflect publicly announced figures. Supply and availability change frequently; verify current availability with vendors.*

<div class="article-callout info">
<strong>Related Reading · Official Sources</strong><br/>
· <a href="https://www.nvidia.com/gtc/keynote/" target="_blank" rel="noopener">NVIDIA — Jensen Huang GTC 2026 Keynote (Blackwell · Vera Rubin)</a><br/>
· <a href="https://resources.nvidia.com/en-us-blackwell-architecture" target="_blank" rel="noopener">NVIDIA — Blackwell Architecture (official)</a><br/>
· <a href="https://www.nvidia.com/gtc/" target="_blank" rel="noopener">NVIDIA GTC official page</a>
</div>