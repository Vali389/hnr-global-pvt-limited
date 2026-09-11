import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Users,
  Briefcase,
  GitBranch,
  ArrowRight,
  Sparkles,
  Clock,
  Target,
  FileCheck,
} from "lucide-react";
import heroClean from "@/assets/delivery-hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Enterprise Delivery Model | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "A clear enterprise delivery framework: Discovery & Strategy, Architecture & Design, Agile Engineering & QA, and Deployment & Scaling, combined with 8 flexible engagement models.",
      },
      { property: "og:title", content: "Enterprise Delivery Model | HNR Global" },
      {
        property: "og:description",
        content:
          "Learn how HNR Global guarantees transparency, predictability, and velocity through our 4-phase delivery framework.",
      },
    ],
  }),
  component: DeliveryModelPage,
});

const deliveryPhases = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    icon: Compass,
    subtitle: "Aligning Business Objectives & Technical Foundations",
    description:
      "Align business goals, understand current-state architecture, identify requirements, define KPIs and establish delivery milestones.",
    deliverables: [
      "Current-state system and data architecture audit",
      "Functional and non-functional requirements specification",
      "Executive KPI alignment and sprint milestone roadmap",
      "Risk assessment, data sovereignty, and compliance blueprint",
    ],
    qualityGate: "Milestone 0: Technical Architecture RFC Sign-off",
  },
  {
    phase: "02",
    title: "Architecture & Design",
    icon: Layers,
    subtitle: "Blueprint for Scalability, UX & Security",
    description:
      "Create scalable solution architecture, UX direction, security considerations, integration patterns and a maintainable engineering foundation.",
    deliverables: [
      "High-fidelity interactive Figma wireframes and design system tokens",
      "Target microservices architecture and database ER diagrams",
      "API contract specifications (OpenAPI / GraphQL schema)",
      "Zero-trust security and IAM authorization policies",
    ],
    qualityGate: "Milestone 1: Prototype Validation & Architecture Approval",
  },
  {
    phase: "03",
    title: "Agile Engineering & QA",
    icon: Code2,
    subtitle: "Controlled Iterations with Continuous Verification",
    description:
      "Develop in controlled iterations with code reviews, automated testing, continuous integration, security checks and transparent progress tracking.",
    deliverables: [
      "Bi-weekly sprint demos with deployable staging releases",
      "Automated unit, integration, and Playwright end-to-end test suites",
      "Automated SAST, DAST, and container vulnerability scanning",
      "Real-time Jira / GitHub burndown tracking and weekly status reports",
    ],
    qualityGate: "Milestone 2: 100% Automated Regression & Security Pass",
  },
  {
    phase: "04",
    title: "Deployment & Scaling",
    icon: Rocket,
    subtitle: "Zero-Downtime Rollout & Continuous Optimization",
    description:
      "Release through controlled deployment pipelines, establish monitoring and observability, stabilize production and continuously improve the solution.",
    deliverables: [
      "Canary and blue-green automated production deployments",
      "Centralized distributed tracing, Prometheus metrics, and APM alerting",
      "Comprehensive runbooks, architectural handover, and team training",
      "Ongoing 24/7 reliability SLA monitoring and FinOps optimization",
    ],
    qualityGate: "Milestone 3: Production SLA Validation & Operational Handover",
  },
];

const engagementModels = [
  {
    title: "Dedicated Engineering Teams",
    desc: "Autonomous turnkey squads (Tech Lead, Senior Engineers, QA, Scrum Master) dedicated 100% to your roadmap.",
    idealFor: "Long-term product roadmaps and enterprise platforms requiring sustained velocity.",
  },
  {
    title: "Project-Based / Fixed-Cost Delivery",
    desc: "Fixed-scope, milestone-driven delivery with guaranteed timelines, transparent pricing, and defined deliverables.",
    idealFor: "Clearly specified projects, MVPs, and migrations with bounded requirements.",
  },
  {
    title: "Staff Augmentation",
    desc: "Seamlessly plug top 3% senior engineers directly into your in-house teams under your direct management.",
    idealFor: "Rapid capacity scaling, niche skill gaps, and accelerating sprint deliverables.",
  },
  {
    title: "Contract-to-Hire",
    desc: "Evaluate technical talent on live production deliverables before extending permanent corporate employment.",
    idealFor: "De-risking permanent technical hiring and assessing cultural alignment.",
  },
  {
    title: "Managed Teams",
    desc: "HNR Global assumes full operational, delivery, and quality accountability for specific modules or service lines.",
    idealFor: "Non-core platform maintenance, QA automation, and legacy system modernization.",
  },
  {
    title: "Technology Consulting",
    desc: "Strategic technical assessments, cloud audits, AI feasibility studies, and enterprise architecture blueprints.",
    idealFor: "CTOs and engineering leaders navigating complex migrations or technology vendor selection.",
  },
  {
    title: "RPO / Talent Acquisition",
    desc: "End-to-end recruitment process outsourcing managing candidate sourcing, technical vetting, and onboarding.",
    idealFor: "Enterprises scaling new engineering centers or hiring 20+ specialized engineers.",
  },
  {
    title: "Strategic Transformation Engagements",
    desc: "Comprehensive modernization overhauling antiquated core infrastructure, processes, and cloud operating models.",
    idealFor: "Enterprise-wide digital transformation, monolith decomposition, and cloud migration.",
  },
];

function DeliveryModelPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="ENTERPRISE DELIVERY FRAMEWORK"
        title="Predictable Delivery. Transparent Governance. Engineering Discipline."
        subtitle="Our 4-phase enterprise framework builds confidence with global enterprise buyers, providing clear operational visibility from day one."
        bgImage={heroClean}
      />

      {/* 4-Phase Delivery Framework */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                THE 4-PHASE LIFECYCLE
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
                How We Deliver Complex Enterprise Systems
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Structured stage-gates with verifiable sign-offs, preventing scope creep and guaranteeing on-time, compliant software delivery.
              </p>
            </div>
          </Reveal>

          {/* Stepper Pipeline with Connecting Line */}
          <div className="relative">
            {deliveryPhases.map((phase, idx) => {
              const Icon = phase.icon;
              const isLast = idx === deliveryPhases.length - 1;

              return (
                <Reveal key={phase.phase} delay={idx * 50}>
                  <div className="relative flex items-stretch gap-4 sm:gap-6 md:gap-8 group">
                    {/* Stepper Rail & Connector Line Between Cards */}
                    <div className="flex flex-col items-center shrink-0">
                      {/* Step Indicator Node */}
                      <div className="relative z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white font-mono font-bold text-sm sm:text-base shadow-md shadow-primary/25 ring-4 ring-background transition-transform duration-300 group-hover:scale-105">
                        {phase.phase}
                      </div>

                      {/* Stepper Line connecting between cards to the next card */}
                      {!isLast && (
                        <div className="relative w-0.5 flex-1 my-2 bg-slate-200 dark:bg-slate-800">
                          {/* Colored Stepper Track */}
                          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/70 to-primary/30" />
                          {/* Midpoint pulse dot */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary ring-2 ring-background" />
                        </div>
                      )}
                    </div>

                    {/* Compact Card with Decreased Height */}
                    <div className={`flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-primary/40 hover:shadow-md ${!isLast ? "mb-5 sm:mb-6" : ""}`}>
                      <div className="grid gap-5 lg:grid-cols-12 items-center">
                        {/* Phase Info (Decreased vertical height) */}
                        <div className="lg:col-span-5 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                              Phase {phase.phase}
                            </span>
                            <span className="text-muted-foreground/30">•</span>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground font-semibold">
                              <Icon className="h-3.5 w-3.5 text-primary" />
                              <span>Stage Gate</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight">
                              {phase.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-primary/90 mt-0.5">
                              {phase.subtitle}
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {phase.description}
                          </p>

                          <div className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-foreground">
                            <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="truncate">{phase.qualityGate}</span>
                          </div>
                        </div>

                        {/* Deliverables List (Decreased height 2x2 grid) */}
                        <div className="lg:col-span-7 rounded-xl bg-muted/30 border border-border/60 p-3.5 sm:p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                              Key Deliverables &amp; Artifacts
                            </h4>
                            <span className="text-[10px] font-mono font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                              4 Milestones
                            </span>
                          </div>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {phase.deliverables.map((del) => (
                              <div
                                key={del}
                                className="flex items-start gap-2 rounded-lg border border-border/50 bg-background/90 px-3 py-1.5 text-xs text-foreground/90 font-medium shadow-2xs"
                              >
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                <span className="leading-snug">{del}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Engagement Models */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                FLEXIBLE PARTNERSHIPS
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
                Enterprise Engagement Models
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Flexible operational frameworks tailored to your roadmap velocity, governance standards, and financial models.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 40}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {model.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                      Best For:
                    </span>
                    <p className="text-xs text-foreground/80 font-medium">
                      {model.idealFor}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Communication Cadences */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                OPERATIONAL GOVERNANCE
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
                Governance & Communication Cadences
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Transparent sprint cadences, enterprise security standards, and SLA-backed engineering accountability.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Transparent Sprint Cadences</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  2-week sprints, daily standups, weekly stakeholder demos, and bi-weekly sprint planning with transparent Jira burndown access.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Strict IP &amp; Security</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  100% code ownership, bilateral NDAs, secure VPN connections, zero-trust repository access, and SOC 2 / ISO compliant development environments.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Guaranteed SLA Response</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dedicated customer success directors, 24/7 on-call engineering escalation, and contractually guaranteed issue remediation response windows.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
