import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Cpu,
  Bot,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  Terminal,
  Database,
  Network,
  ShieldCheck,
  Lock,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Zap,
  Globe2,
  Award,
  Users2,
  Building,
  Check,
  ChevronRight,
  Shield,
  Activity,
  Workflow,
  Radio,
} from "lucide-react";
import heroClean from "@/assets/expertise-hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Technology Expertise & Architecture | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "Engineering depth across the modern enterprise technology stack: AI & Data, Application Engineering, Frontend, Mobile, Cloud, DevOps, Databases, and System Integration.",
      },
      { property: "og:title", content: "Technology Expertise | HNR Global PVT LTD" },
      {
        property: "og:description",
        content:
          "Explore HNR Global's full-stack technology capabilities, enterprise architecture standards, and security readiness.",
      },
    ],
  }),
  component: ExpertisePage,
});

interface TechDomain {
  id: string;
  number: string;
  name: string;
  tagline: string;
  icon: any;
  leadDescription: string;
  technologies: { name: string; category: string }[];
  architecturalPillars: string[];
}

const techDomains: TechDomain[] = [
  {
    id: "ai-data",
    number: "01",
    name: "AI & Data",
    tagline: "Generative AI, Large Language Models, Vector Search & Enterprise Lakehouses",
    icon: Bot,
    leadDescription:
      "Helping organizations move from AI experimentation to practical enterprise solutions. We build high-ROI AI architectures bridging frontier models with production resilience, intelligent search, predictive analytics, and enterprise AI assistants.",
    technologies: [
      { name: "Python", category: "Core Language" },
      { name: "TensorFlow", category: "Deep Learning" },
      { name: "PyTorch", category: "Deep Learning" },
      { name: "Generative AI", category: "LLMs & Multimodal" },
      { name: "RAG", category: "Knowledge Retrieval" },
      { name: "Machine Learning", category: "Predictive Analytics" },
      { name: "NLP", category: "Text Intelligence" },
      { name: "Computer Vision", category: "OCR & Inspection" },
      { name: "Power BI", category: "Business Intelligence" },
      { name: "Databricks", category: "Data Lakehouse" },
      { name: "Snowflake", category: "Cloud Warehouse" },
    ],
    architecturalPillars: [
      "Zero-hallucination semantic RAG with auditable citation anchors",
      "Enterprise zero-data-retention private cloud & on-prem LLM endpoints",
      "Automated feature stores, drift monitoring, and continuous MLOps pipelines",
      "Sub-second vector retrieval with hybrid keyword-dense embedding search",
    ],
  },
  {
    id: "app-eng",
    number: "02",
    name: "Application Engineering",
    tagline: "Enterprise Systems, Microservices, High-Concurrency APIs & Distributed Workflows",
    icon: Code2,
    leadDescription:
      "Enterprise software built around your workflows. We combine modern backend design patterns, asynchronous non-blocking architectures, and strict domain-driven modeling to deliver mission-critical ERP, CRM, and transaction engines.",
    technologies: [
      { name: "Java", category: "Enterprise Backend" },
      { name: "Spring Boot", category: "Microservices" },
      { name: "Microsoft .NET", category: "Enterprise Solutions" },
      { name: "C#", category: "Core Language" },
      { name: "Python", category: "FastAPI / Django" },
      { name: "Node.js", category: "NestJS / Express" },
    ],
    architecturalPillars: [
      "Domain-Driven Design (DDD) with clear bounded contexts",
      "Non-blocking asynchronous I/O architectures with reactive drivers",
      "Stateless horizontally autoscaling microservices behind API Gateways",
      "Strict contract validation with OpenAPI 3 and automated schema tests",
    ],
  },
  {
    id: "frontend",
    number: "03",
    name: "Frontend Engineering",
    tagline: "Design Systems, Micro-Frontends, Server-Side Rendering & 60fps Web Apps",
    icon: Layers,
    leadDescription:
      "We design and build sub-second, accessible, and responsive user interfaces that wow users. Clean atomic component libraries, strict TypeScript typing, and optimized Core Web Vitals ensure exceptional enterprise usability.",
    technologies: [
      { name: "React", category: "Core UI Framework" },
      { name: "Next.js", category: "SSR / SSG Platform" },
      { name: "Angular", category: "Enterprise Modular Web" },
      { name: "Vue.js", category: "Progressive Web Apps" },
      { name: "TypeScript", category: "Type-Safe Foundation" },
    ],
    architecturalPillars: [
      "Token-driven unified enterprise design systems with Dark/Light modes",
      "Streaming server-side rendering (SSR) and partial hydration",
      "WCAG 2.1 AA accessibility compliance across all interactive elements",
      "Sub-second Largest Contentful Paint (LCP) and zero layout shifts",
    ],
  },
  {
    id: "mobile",
    number: "04",
    name: "Mobile Engineering",
    tagline: "iOS, Android, Flutter, React Native & Enterprise Mobility Solutions",
    icon: Smartphone,
    leadDescription:
      "One experience across every device. We engineer silky-smooth 60fps mobile applications for customer engagement and field enterprise workforces, backed by robust offline caching and biometric hardware security.",
    technologies: [
      { name: "Flutter", category: "Cross-Platform" },
      { name: "React Native", category: "Cross-Platform" },
      { name: "Swift", category: "Native iOS" },
      { name: "SwiftUI", category: "Modern iOS UI" },
      { name: "Kotlin", category: "Native Android" },
    ],
    architecturalPillars: [
      "Offline-first architecture with local SQLite/WatermelonDB conflict sync",
      "Hardware-level biometric FaceID/Fingerprint and Keychain cryptographic store",
      "Automated TestFlight and Google Play Internal testing pipelines",
      "Native module bridges for Bluetooth, geofencing, and camera sensors",
    ],
  },
  {
    id: "cloud",
    number: "05",
    name: "Cloud",
    tagline: "AWS, Azure, Google Cloud, Multi-Region Infrastructure & FinOps Governance",
    icon: Cloud,
    leadDescription:
      "Enterprise cloud engineering designed for agility, fault-tolerance, and financial governance. We help enterprises migrate, modernize, and operate multi-cloud environments that eliminate single-vendor lock-in.",
    technologies: [
      { name: "AWS", category: "EKS, RDS, S3, Lambda" },
      { name: "Microsoft Azure", category: "AKS, Cosmos, Entra ID" },
      { name: "Google Cloud", category: "GKE, BigQuery, Vertex AI" },
    ],
    architecturalPillars: [
      "Well-Architected Framework compliance across all cloud tenants",
      "Multi-region automated failover and active-passive disaster recovery",
      "Continuous FinOps rightsizing cutting idle compute costs by up to 40%",
      "Zero-trust VPC networking with immutable private subnets",
    ],
  },
  {
    id: "devops",
    number: "06",
    name: "DevOps & Platform Engineering",
    tagline: "Kubernetes, GitOps, Terraform, Automated CI/CD & Distributed Observability",
    icon: Terminal,
    leadDescription:
      "Accelerating engineering velocity from git push to production. We establish immutable Infrastructure as Code, automated blue-green delivery pipelines, and comprehensive distributed telemetry.",
    technologies: [
      { name: "Docker", category: "Containerization" },
      { name: "Kubernetes", category: "Cluster Orchestration" },
      { name: "Terraform", category: "Infrastructure as Code" },
      { name: "Jenkins", category: "Enterprise Automation" },
      { name: "GitHub Actions", category: "Modern CI/CD" },
      { name: "GitLab CI/CD", category: "DevSecOps Pipelines" },
    ],
    architecturalPillars: [
      "Automated canary and blue-green deployments with instantaneous rollback",
      "Declarative GitOps repository synchronization using ArgoCD",
      "Automated SAST, DAST, and container vulnerability scanning gates",
      "Distributed tracing with OpenTelemetry and unified SIEM alerting",
    ],
  },
  {
    id: "databases",
    number: "07",
    name: "Databases",
    tagline: "PostgreSQL, MongoDB, MySQL, SQL Server & Oracle Enterprise Storage",
    icon: Database,
    leadDescription:
      "Resilient, highly available data storage engineered for transactional ACID compliance and high-throughput query performance. We design partitioned schemas, multi-region replication, and automated disaster recovery.",
    technologies: [
      { name: "PostgreSQL", category: "Primary Relational / pgvector" },
      { name: "MongoDB", category: "Document Store" },
      { name: "MySQL", category: "Web Relational" },
      { name: "SQL Server", category: "Microsoft Enterprise" },
      { name: "Oracle", category: "Enterprise ERP & Mainframe" },
    ],
    architecturalPillars: [
      "Active-active read replicas with automated connection pooling",
      "Transparent Data Encryption (TDE) at rest and TLS in transit",
      "Continuous point-in-time recovery (PITR) with automated daily backups",
      "Partitioned tables and index profiling for multi-million row datasets",
    ],
  },
  {
    id: "integration",
    number: "08",
    name: "Integration & Architecture",
    tagline: "REST APIs, GraphQL, Microservices, Event-Driven Architecture & Serverless",
    icon: Network,
    leadDescription:
      "Unifying fragmented enterprise IT ecosystems through decoupled, fault-tolerant event streams and modern API gateways. We connect proprietary legacy backends with modern cloud SaaS platforms.",
    technologies: [
      { name: "REST APIs", category: "OpenAPI 3 Standards" },
      { name: "GraphQL", category: "Federated Unified Schemas" },
      { name: "Microservices", category: "Decoupled Scalable Services" },
      { name: "Event-Driven Architecture", category: "Streaming Pub/Sub" },
      { name: "API Gateways", category: "Kong, Envoy, AWS Gateway" },
      { name: "Serverless Architecture", category: "Event-Triggered Micro-Compute" },
    ],
    architecturalPillars: [
      "Idempotent API endpoints with automated circuit breakers",
      "Dead-letter queues (DLQ) and guaranteed at-least-once delivery",
      "Microservice boundaries modeled around DDD business aggregates",
      "Zero-downtime backward-compatible semantic API versioning",
    ],
  },
];

const securityGovernanceList = [
  {
    icon: Lock,
    title: "NDA-Backed Confidentiality",
    desc: "Bilateral non-disclosure agreements, complete intellectual property assignment, and strict air-gapped repository protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Controls (RBAC)",
    desc: "Principle of least privilege enforced across code repositories, cloud infrastructures, staging environments, and database clusters.",
  },
  {
    icon: Activity,
    title: "Secure API Communication",
    desc: "TLS 1.3 encryption in transit, mutual TLS (mTLS) between internal microservices, and OAuth 2.0 / JWT token validation.",
  },
  {
    icon: Database,
    title: "Data Encryption At Rest & Transit",
    desc: "AES-256 cryptographic encryption for all databases, object storage buckets, and secrets dynamically managed via key vaults.",
  },
  {
    icon: CheckCircle2,
    title: "Authentication & Authorization",
    desc: "Enterprise SSO integrations with Okta, Azure Active Directory, and SAML 2.0 with mandatory Multi-Factor Authentication (MFA).",
  },
  {
    icon: Workflow,
    title: "Secure SDLC Practices",
    desc: "Threat modeling, automated peer code reviews on every pull request, and automated static code quality gates.",
  },
  {
    icon: Shield,
    title: "Vulnerability Management",
    desc: "Continuous automated dependency scanning to remediate CVEs, license conflicts, and container vulnerabilities.",
  },
  {
    icon: FileCheck,
    title: "Audit Trails & SIEM Logging",
    desc: "Centralized immutable audit logs capturing every administrative API call, system deployment, and data access event.",
  },
  {
    icon: Server,
    title: "Disaster Recovery & Redundancy",
    desc: "Multi-region redundant cloud snapshots with tested recovery time objective (RTO < 1h) and continuous backup verification.",
  },
  {
    icon: Globe2,
    title: "Privacy-by-Design Governance",
    desc: "Data isolation principles directly engineered into relational database schemas and data pipelines.",
  },
  {
    icon: Bot,
    title: "Responsible AI Governance",
    desc: "Prompt injection defenses, PII data sanitization, hallucination guardrails, and enterprise Zero Data Retention (ZDR) endpoints.",
  },
  {
    icon: Award,
    title: "Code Review & Quality SLA",
    desc: "Strict two-senior-engineer sign-off requirements, automated regression coverage, and guaranteed remediation turnarounds.",
  },
];

function ExpertisePage() {
  const [activeDomainId, setActiveDomainId] = useState<string>("ai-data");

  const scrollToDomain = (id: string) => {
    setActiveDomainId(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Page Hero: Consistent with Brand & Other Pages */}
      <PageHero
        eyebrow="Technology Expertise"
        title="Engineering Depth Across the Modern Enterprise Stack"
        subtitle="Full-stack engineering capabilities, resilient cloud architectures, and disciplined enterprise governance."
        bgImage={heroClean}
      />

      {/* Quick Domain Jump Navigation Bar - Clean Light, NO scrollbar */}
      <section className="sticky top-20 z-30 bg-card/95 backdrop-blur-md border-y border-border py-3 px-4 sm:px-6 shadow-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shrink-0">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Domains
          </span>
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 w-full md:w-auto">
            {techDomains.map((d) => {
              const Icon = d.icon;
              const isActive = activeDomainId === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => scrollToDomain(d.id)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-muted/70 border border-border text-foreground/80 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-primary"}`} />
                  <span>{d.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALL 8 TECHNOLOGY EXPERTISE DOMAINS (Section-by-Section matching Homepage theme) */}
      <section className="py-16 sm:py-24 space-y-16 sm:space-y-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Enterprise Stack Overview
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                8 Specialized Technology Domains
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                Comprehensive engineering depth spanning artificial intelligence, high-concurrency microservices, cloud platforms, and mission-critical databases.
              </p>
            </div>
          </Reveal>

          {/* Stack of All 8 Domains */}
          <div className="space-y-12 sm:space-y-16">
            {techDomains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div
                  id={domain.id}
                  key={domain.id}
                  className="scroll-mt-36 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Subtle top accent highlight in primary blue */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                  <div className="grid gap-8 lg:grid-cols-12 items-start">
                    {/* Left Column: Domain info and Tech chips */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-xs">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="font-mono text-xs font-bold text-primary tracking-widest block">
                              DOMAIN {domain.number}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
                              {domain.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-primary leading-snug">
                          {domain.tagline}
                        </p>

                        <p className="mt-4 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                          {domain.leadDescription}
                        </p>
                      </div>

                      {/* Verified Tech Ecosystem Tags */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Verified Ecosystem
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {domain.technologies.map((t) => (
                            <div
                              key={t.name}
                              className="flex items-center gap-2 rounded-xl bg-muted/40 border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                            >
                              <Check className="h-3 w-3 text-primary" />
                              <span>{t.name}</span>
                              <span className="text-[10px] text-muted-foreground border-l border-border pl-2">
                                {t.category}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA Link */}
                      <div className="pt-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer group/link"
                        >
                          <span>Request {domain.name} Architecture Review</span>
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Architectural Pillars & Code Sovereignty */}
                    <div className="lg:col-span-5 space-y-5">
                      {/* Architecture Principles Card */}
                      <div className="rounded-2xl border border-border bg-muted/20 p-5 sm:p-6 space-y-3.5">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5" /> Architecture Standards
                        </span>
                        <ul className="space-y-2.5">
                          {domain.architecturalPillars.map((p, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Code Sovereignty Badge */}
                      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-center gap-3.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div className="text-xs">
                          <p className="font-bold text-foreground">100% Code &amp; IP Ownership</p>
                          <p className="text-muted-foreground text-[11px] mt-0.5">
                            All source code, models, and architectures transfer fully to client ownership.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 14: SECURITY, GOVERNANCE & ENTERPRISE READINESS */}
      <section className="py-20 sm:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl mb-14 text-center sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <ShieldCheck className="h-4 w-4" /> Enterprise Security &amp; Governance
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                Security, Governance &amp; Enterprise Readiness
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                For multinational enterprise buyers, security is foundational. Every solution we engineer enforces zero-trust architecture, automated vulnerability gating, and bilateral contractual confidentiality.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {securityGovernanceList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 30}>
                  <div className="group rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md h-full flex flex-col justify-between">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <Reveal>
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-[#041f54] via-[#030914] to-[#00347f] p-8 sm:p-14 text-white shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8] block">
                LET'S TALK ARCHITECTURE
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-white">
                Schedule an Architectural &amp; Feasibility Review
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
                Connect directly with our Principal Solutions Architects in Visakhapatnam and Hyderabad to review your existing codebase, technical debt roadmap, or squad ramp-up timeline.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-[#38bdf8] hover:bg-[#00a8ff] text-[#030914] px-7 py-3.5 text-sm font-bold shadow-lg shadow-[#38bdf8]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Reach Out to Our Team
                </Link>
                <Link
                  to="/delivery"
                  className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  Explore Delivery Framework →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom Global CTA */}
      <CtaBand />
    </div>
  );
}
