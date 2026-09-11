import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  Radio,
  Zap,
  Flame,
  Building2,
  HeartPulse,
  ShieldCheck,
  FlaskConical,
  Factory,
  ShoppingBag,
  Rocket,
  Truck,
  Cloud,
  Cpu,
  Lock,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  TrendingUp,
  Globe2,
  Search,
  Database,
  Server,
  FileCheck2,
  ChevronRight,
  ShieldAlert,
  BarChart3,
  Phone,
  FileCheck,
  Shield,
  Gauge,
  Activity,
  Check,
} from "lucide-react";
import bgIndustries from "@/assets/bg-industries-building.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Sectors | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "HNR Global delivers domain-ready technology solutions across 13+ industries — banking, healthcare, manufacturing, energy, retail, logistics, and space.",
      },
      { property: "og:title", content: "Industries & Sectors | HNR Global PVT LTD" },
      {
        property: "og:description",
        content: "Sector depth that shortens your digital transformation journey.",
      },
    ],
  }),
  component: Industries,
});

const sectors = [
  {
    id: "banking-capital-markets",
    icon: Landmark,
    title: "Banking & Capital Markets",
    category: "finance",
    body:
      "Core banking modernisation, digital lending platforms, wealth management portals and regulatory compliance automation for banks and financial institutions.",
    badge: "FinTech & Banking",
    tags: ["Core Banking", "Lending APIs", "RegTech", "Risk Automation"],
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    title: "Insurance",
    category: "finance",
    body:
      "Policy administration systems, automated underwriting, claims intelligence, fraud detection and InsurTech API platforms for insurers and brokers.",
    badge: "InsurTech",
    tags: ["Claims AI", "Policy Admin", "Fraud Detection", "Broker Portals"],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Health & Care",
    category: "health",
    body:
      "EMR/EHR systems, telemedicine platforms, hospital information systems, claims processing and HIPAA-compliant data analytics for healthcare providers.",
    badge: "HealthTech",
    tags: ["HIPAA Ready", "Telehealth", "EHR Sync", "Care Analytics"],
  },
  {
    id: "life-sciences",
    icon: FlaskConical,
    title: "Life Sciences & Pharma",
    category: "health",
    body:
      "Clinical trial data management, regulatory submission tools, pharmacovigilance systems and digital lab platforms for pharma and biotech companies.",
    badge: "BioTech",
    tags: ["Clinical Trials", "Lab Automation", "GAMP 5", "FDA Submissions"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    category: "industrial",
    body:
      "MES, predictive maintenance, quality management, IoT-connected shop floors and ERP modernisation for discrete and process manufacturers.",
    badge: "Smart Factory",
    tags: ["IoT Telemetry", "MES Systems", "Predictive Maint.", "Supply Chain"],
  },
  {
    id: "energy-utilities",
    icon: Zap,
    title: "Energy & Utilities",
    category: "industrial",
    body:
      "Smart grid analytics, asset performance management, outage prediction and energy trading systems for power utilities and renewable energy providers.",
    badge: "CleanTech",
    tags: ["Smart Grid", "SCADA Integration", "Renewables", "Asset Health"],
  },
  {
    id: "oil-gas",
    icon: Flame,
    title: "Oil & Gas",
    category: "industrial",
    body:
      "Upstream exploration data platforms, pipeline monitoring, HSE compliance systems and IoT-enabled field operations for O&G enterprises.",
    badge: "Energy",
    tags: ["Pipeline Sensors", "HSE Analytics", "Field Operations", "Asset Twin"],
  },
  {
    id: "transportation-logistics",
    icon: Truck,
    title: "Transportation & Logistics",
    category: "logistics",
    body:
      "Fleet management, route optimisation, freight visibility platforms and warehouse management systems for logistics and mobility companies.",
    badge: "Supply Chain",
    tags: ["Route Engine", "Fleet Telematics", "WMS & Yard", "Tracking APIs"],
  },
  {
    id: "retail-consumer",
    icon: ShoppingBag,
    title: "Retail, Consumer & Services",
    category: "retail",
    body:
      "Unified commerce platforms, loyalty engines, supply chain visibility and AI-driven demand forecasting for retailers and consumer brands.",
    badge: "Omnichannel",
    tags: ["Headless Commerce", "Loyalty Hubs", "Demand AI", "Inventory Sync"],
  },
  {
    id: "communications-media",
    icon: Radio,
    title: "Communications & Media",
    category: "telecom",
    body:
      "BSS/OSS transformation, OTT platforms, subscriber management and AI-driven content personalisation for telcos and media companies.",
    badge: "Telecom",
    tags: ["BSS/OSS", "OTT Streaming", "Billing Engines", "Subscriber AI"],
  },
  {
    id: "government-public",
    icon: Building2,
    title: "Government & Public Sector",
    category: "public",
    body:
      "Citizen service portals, e-governance platforms, document management and inter-agency integration solutions built for national security and scale.",
    badge: "GovTech",
    tags: ["e-Governance", "Zero-Trust", "Citizen Portals", "Inter-Agency"],
  },
  {
    id: "space-technology",
    icon: Rocket,
    title: "Space & Aerospace Tech",
    category: "space",
    body:
      "Ground control systems, satellite telemetry processing, mission planning software and data pipelines for space agencies and new-space startups.",
    badge: "Aerospace",
    tags: ["Ground Station", "Telemetry Pipelines", "Flight Software", "Mission Planning"],
  },
  {
    id: "cloud-it-services",
    icon: Cloud,
    title: "Cloud & IT Services",
    category: "tech",
    body:
      "Multi-cloud migrations, enterprise SaaS platform engineering, FinOps cloud cost governance and managed infrastructure services for technology enterprises.",
    badge: "Enterprise IT",
    tags: ["Cloud Migration", "Managed IT", "FinOps", "Multi-Cloud"],
  },
];


const highlights = [
  {
    icon: Globe2,
    value: "13+",
    label: "Verticals Mastered",
    desc: "From tier-1 banking to aerospace telemetry",
    tag: "Global Reach",
  },
  {
    icon: Layers,
    value: "100+",
    label: "Enterprise Clients",
    desc: "Delivered for Fortune 500s & high-growth leaders",
    tag: "Proven Trust",
  },
  {
    icon: TrendingUp,
    value: "50+",
    label: "Mission-Critical Systems",
    desc: "High-concurrency systems handling millions of events",
    tag: "High Velocity",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Engineering Depth",
    desc: "Premier delivery hubs in Visakhapatnam & Hyderabad",
    tag: "Enterprise Tier",
  },
];

// Unified HNR Royal Blue and Sapphire palette (No clashing mismatched neon colors)
const crossCapabilities = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    subtitle: "Multi-Cloud & Zero-Downtime Migration",
    desc: "AWS, Azure, and GCP architectures engineered for zero-downtime, continuous compliance, and scalable cost governance.",
    highlights: ["Kubernetes & Hybrid Orchestration", "Automated FinOps Cost Governance", "99.999% SLA High-Availability"],
    tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
  {
    icon: Cpu,
    title: "Data & Enterprise AI",
    subtitle: "High-Throughput Analytics & LLMOps",
    desc: "Convert fragmented departmental data into actionable foresight with real-time streaming pipelines, custom RAG assistants, and predictive models.",
    highlights: ["Real-Time Event Ingestion & Kafka", "Custom GenAI & LLM Guardrails", "Autonomous Predictive Workflows"],
    tags: ["PyTorch", "LangGraph", "FastAPI", "Snowflake", "dbt"],
  },
  {
    icon: Lock,
    title: "Security & Zero-Trust",
    subtitle: "End-to-End Defensive Posture",
    desc: "Enterprise defensive posture built directly into the CI/CD pipeline, meeting the stringent mandates of regulated banking and health markets.",
    highlights: ["Continuous DevSecOps Vulnerability Scans", "Role-Based Access Control (RBAC)", "Automated Regulatory Audit Trails"],
    tags: ["Zero-Trust", "Vault", "SIEM", "SAST/DAST", "SOC 2"],
  },
  {
    icon: Workflow,
    title: "Integration & APIs",
    subtitle: "Composable Enterprise Middleware",
    desc: "Unify legacy mainframes, modern SaaS platforms, and partner portals with high-throughput, fault-tolerant micro-gateways.",
    highlights: ["GraphQL & REST Gateway Routing", "Event-Driven EDA & Webhook Queues", "B2B EDI & Partner Data Hubs"],
    tags: ["GraphQL", "REST", "gRPC", "Kafka", "Kong"],
  },
];

const transformationSteps = [
  {
    step: "01",
    phase: "Phase 1 · Weeks 1–2",
    title: "Sector Diagnostic & Scoping",
    desc: "We analyze regulatory constraints, legacy technical debt, and vertical KPIs to formulate an actionable delivery blueprint.",
    deliverables: ["Regulatory & Security Audit", "Technical Debt Mapping", "Risk Mitigation Matrix"],
    icon: Search,
  },
  {
    step: "02",
    phase: "Phase 2 · Weeks 2–4",
    title: "Pre-Built Domain Accelerators",
    desc: "Leverage our repository of pre-tested domain modules, data schemas, and compliance patterns to compress initial discovery.",
    deliverables: ["Domain API Scaffolding", "Database Schema Architecture", "CI/CD Pipeline Setup"],
    icon: Database,
  },
  {
    step: "03",
    phase: "Phase 3 · Bi-Weekly Sprints",
    title: "Agile Engineering & Integration",
    desc: "Dedicated squads build, test, and integrate mission-critical capabilities with bi-weekly demonstrable delivery milestones.",
    deliverables: ["Continuous Feature Shipping", "Automated QA Regression", "Legacy Mainframe Sync"],
    icon: Server,
  },
  {
    step: "04",
    phase: "Phase 4 · Continuous",
    title: "Scale, Audit & Optimization",
    desc: "Stress-testing under high concurrency, rigorous regulatory audit approvals, and automated telemetry for 99.999% uptime.",
    deliverables: ["High-Concurrency Load Tests", "Regulatory Sign-Off Dossier", "24/7 SLA Observability"],
    icon: FileCheck2,
  },
];

const complianceStandards = [
  {
    name: "ISO 27001",
    scope: "Information Security Management",
    desc: "Stringent protocols protecting client intellectual property and sensitive corporate data.",
    badge: "Certified Standard",
  },
  {
    name: "SOC 2 Type II",
    scope: "Trust Services Criteria",
    desc: "Independently audited controls covering operational security, availability, and privacy.",
    badge: "Audited & Verified",
  },
  {
    name: "HIPAA Ready",
    scope: "Health Information Privacy",
    desc: "End-to-end encryption and BAA compliance for protected electronic health information (ePHI).",
    badge: "Compliant Healthcare",
  },
  {
    name: "PCI-DSS Level 1",
    scope: "Payment Card Security",
    desc: "Bank-grade transactional tokenization and encryption standards for financial platforms.",
    badge: "Secured Payments",
  },
  {
    name: "GDPR Compliant",
    scope: "Data Sovereignty & Privacy",
    desc: "Strict adherence to user privacy rights, consent tracking, and localized data retention.",
    badge: "Protected Privacy",
  },
  {
    name: "CMMI Level 3",
    scope: "Process & Engineering Maturity",
    desc: "Standardized, highly predictable software development and project lifecycle governance.",
    badge: "Engineering Maturity",
  },
];

const provenOutcomes = [
  {
    stat: "40%",
    metricTitle: "Turnaround Reduction",
    sector: "Banking & Financial Services",
    icon: Landmark,
    headline: "Automated Loan Underwriting & Approval",
    desc: "Modernized legacy origination workflows into a straight-through digital lending engine with automated KYC & credit bureau sync.",
    impactPoint: "Origination cycle reduced from 5 days to 4 hours",
  },
  {
    stat: "99.999%",
    metricTitle: "System Uptime",
    sector: "Energy & Utilities",
    icon: Zap,
    headline: "Smart Grid Real-Time Event Pipeline",
    desc: "Ingesting over 50 million daily smart meter telemetry events with sub-second anomaly detection and automated grid failover.",
    impactPoint: "Zero downtime across 18 consecutive months",
  },
  {
    stat: "60%",
    metricTitle: "Faster Data Ingestion",
    sector: "Health & Life Sciences",
    icon: HeartPulse,
    headline: "Unified FHIR Clinical Trial Lakehouse",
    desc: "Connected 40+ global clinical trial sites into an auditable, HIPAA-compliant data platform with automated FDA submission export.",
    impactPoint: "Trial phase completion accelerated by 4 months",
  },
  {
    stat: "35%",
    metricTitle: "Downtime Prevented",
    sector: "Manufacturing & Industry 4.0",
    icon: Factory,
    headline: "Edge IoT Predictive Maintenance",
    desc: "Deployed sensor telemetry across 12 assembly lines predicting equipment bearing wear 72 hours before catastrophic failure.",
    impactPoint: "Saved over ₹3.8 Cr in unexpected factory stops",
  },
];

function Industries() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setFilter("all");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 250);
    }
  }, []);

  const filteredSectors =
    filter === "all" ? sectors : sectors.filter((s) => s.category === filter);

  return (
    <div className="overflow-hidden">
      {/* ── Page Hero with Prominent, CLEARLY VISIBLE Skyscraper Background ── */}
      <section className="relative isolate overflow-hidden min-h-[540px] md:min-h-[600px] flex items-center bg-[#030914] border-b border-white/10">
        {/* The building background image is now clearly visible with 90% opacity and vibrant brightness */}
        <img
          src={bgIndustries}
          alt="Modern enterprise skyline"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-110 opacity-90 hero-zoom"
        />

        {/* Balanced elegant gradient veil so the cityscape shines while text is 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#030914]/65 to-[#030914]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 w-full">
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/75 mb-5 uppercase tracking-wider">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-cyan-400">Industries</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8] backdrop-blur-md shadow-lg">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" /> Sector Expertise & Engineering Depth
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md whitespace-normal md:whitespace-nowrap">
              Sector Depth That Shortens Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Transformation
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed max-w-4xl font-normal drop-shadow-sm whitespace-normal md:whitespace-nowrap">
              Pre-built domain accelerators and battle-tested compliance patterns across 13+ global enterprise verticals.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#sectors-section"
                className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 px-7 py-3.5 text-sm md:text-base font-bold text-white shadow-xl transition-all hover:scale-105"
              >
                Explore 13+ Sectors <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 px-7 py-3.5 text-sm md:text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-105 shadow-md"
              >
                Reach Out to Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── AT A GLANCE (Stat Cards Redesign) ── */}
      <section className="relative -mt-12 z-20 mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-border/80 bg-background/95 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border/80 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  AT A GLANCE · INDUSTRY FOOTPRINT
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>Enterprise Domain Readiness</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 90}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border/90 bg-gradient-to-br from-card to-muted/30 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                        <h.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-md bg-muted/80">
                        {h.tag}
                      </span>
                    </div>

                    <div className="text-4xl font-extrabold tracking-tight text-primary group-hover:scale-105 transition-transform origin-left">
                      {h.value}
                    </div>

                    <h3 className="mt-2 text-base font-bold text-foreground">
                      {h.label}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── SECTORS WE SERVE (Centered + Preserved Rosette Seal Design) ── */}
      <section id="sectors-section" className="mx-auto max-w-7xl px-6 py-28 scroll-mt-20">
        <Reveal className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            SECTORS WE SERVE
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
            Domain Knowledge Baked Into Every Engagement
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
            Our engineers and consultants carry real industry experience — not just technology
            expertise. We understand compliance mandates, mission-critical tolerances, and industry
            workflows from day one.
          </p>

          {/* Quick Filter Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Sectors (12)" },
              { id: "finance", label: "Banking & Insurance" },
              { id: "health", label: "Healthcare & Life Sciences" },
              { id: "industrial", label: "Manufacturing & Energy" },
              { id: "logistics", label: "Logistics & Supply Chain" },
              { id: "telecom", label: "Telecom & Media" },
              { id: "public", label: "Government & Public" },
              { id: "space", label: "Aerospace & Space" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filter === btn.id
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Sector Grid with Preserved Rosette Seal Badges */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article
                id={s.id}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-blue-100/90 dark:border-blue-950/60 bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 scroll-mt-32"
              >
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.14_250/0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      {s.badge}
                    </span>
                  </div>

                  {/* Rosette Seal Icon Badge */}
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25 group-hover:border-primary group-hover:rotate-45 transition-all duration-700" />
                    <div className="absolute inset-2 rounded-full bg-blue-50/80 dark:bg-blue-950/50 border border-primary/20 group-hover:bg-primary transition-all duration-300 shadow-inner" />
                    <s.icon className="relative z-10 h-9 w-9 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-primary tracking-tight transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3.5 text-sm md:text-[15px] leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {s.body}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-border/60 flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform"
                  >
                    Consult Squad <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── REDESIGNED: CROSS-INDUSTRY CAPABILITIES (Fixed Colors & High-Contrast Harmonious UI) ── */}
      <section className="bg-slate-50/80 dark:bg-[#030e24] py-28 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              CROSS-INDUSTRY CAPABILITIES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
              Horizontal Strengths That Multiply Sector Value
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              Industry solutions are only as strong as their underlying technical foundation. We inject battle-tested horizontal engineering depth into every vertical deployment.
            </p>
          </Reveal>

          {/* Clean, harmonious cards with HNR royal blue accents (No clashing mismatched colors) */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {crossCapabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 90}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
                  {/* Subtle top primary accent line on hover */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />

                  <div>
                    {/* Icon + Category Pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <cap.icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-muted/80 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                        {cap.title.split("&")[0]}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
                      {cap.subtitle}
                    </p>

                    <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                      {cap.desc}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="mt-5 space-y-2 border-t border-border/70 pt-4">
                      {cap.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tooling Tags */}
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-muted/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDESIGNED: MEASURABLE OUTCOMES (High-Impact Executive Metrics Showcase) ── */}
      <section className="bg-background py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Activity className="h-3.5 w-3.5" /> MEASURABLE IMPACT
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
              Proven Outcomes Across Enterprise Verticals
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              We don't just ship code — we deliver measurable operational velocity, uptime, and financial return.
            </p>
          </Reveal>

          {/* 4 Rich Outcome Cards with Sector Badges and Impact Point */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {provenOutcomes.map((item, idx) => (
              <Reveal key={item.headline} delay={idx * 80}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-muted/20 p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl">
                  {/* Metric Ribbon Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {item.sector}
                        </span>
                        <p className="text-xs text-muted-foreground">{item.metricTitle}</p>
                      </div>
                    </div>

                    <div className="text-4xl md:text-5xl font-black text-primary group-hover:scale-105 transition-transform origin-right">
                      {item.stat}
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {item.headline}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Impact Highlight Badge */}
                  <div className="mt-6 flex items-center gap-2.5 rounded-2xl bg-primary/5 border border-primary/15 px-4 py-2.5 text-xs md:text-sm font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{item.impactPoint}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDESIGNED: DELIVERY BLUEPRINT (Connected 4-Stage Process Timeline) ── */}
      <section className="bg-slate-50/70 dark:bg-[#020b1e] py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              ENGINEERING BLUEPRINT
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
              How We Accelerate Sector Modernisation
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              A disciplined, risk-managed 4-stage execution model tuned specifically for regulated and high-throughput industries.
            </p>
          </Reveal>

          {/* Stepper Grid with Phase Header & Deliverables */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transformationSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        {s.step}
                      </span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
                        {s.phase}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Key Deliverables */}
                    <div className="mt-5 space-y-1.5 border-t border-border/70 pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Key Deliverables:
                      </p>
                      {s.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                          <Check className="h-3 w-3 text-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="mt-6 pt-2">
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(i + 1) * 25}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDESIGNED: REGULATORY COMPLIANCE & TRUST CENTER ── */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-4 w-4" /> REGULATORY TRUST
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Engineered for strictly regulated environments
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed font-normal">
                  In banking, healthcare, and critical infrastructure, compliance isn't an afterthought. Every line of code, automated CI/CD pipeline, and cloud datastore meets global regulatory benchmarks from day zero.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    Request Compliance Dossier <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: 6 Official Certification Shield Cards */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {complianceStandards.map((item, idx) => (
                  <Reveal key={item.name} delay={idx * 60}>
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-extrabold text-foreground">
                          {item.name}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {item.scope}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global CTA Band ── */}
      <CtaBand />
    </div>
  );
}
