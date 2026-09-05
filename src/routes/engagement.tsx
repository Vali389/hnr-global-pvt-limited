import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Code2,
  UserPlus,
  Briefcase,
  Lightbulb,
  Layers,
  Settings,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/engagement")({
  head: () => ({
    meta: [
      { title: "Engagement Models | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "Flexible client engagement models for IT companies and traditional non-IT enterprises — product partnerships, dedicated teams, staff augmentation, and digital transformation.",
      },
      { property: "og:title", content: "Engagement Models | HNR Global PVT LTD" },
      {
        property: "og:description",
        content:
          "Tailored engagement models designed to match your scale, speed, and delivery requirements.",
      },
    ],
  }),
  component: Engagement,
});

const itModels = [
  {
    icon: Code2,
    title: "Product Development Partnership",
    subtitle: "Co-building products from MVP to scale",
    description:
      "We act as your extended engineering team, taking product ownership from ideation, architecture, and prototyping to full scale and deployment.",
    highlights: [
      "MVP in weeks to validate key market hypotheses",
      "Full-cycle product design & engineering",
      "Dedicated tech lead, developers, and QA",
      "Agile 2-week sprint iterations with continuous deployment",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Development Teams",
    subtitle: "Augmenting in-house tech teams",
    description:
      "Scale your engineering capacity seamlessly with dedicated, full-time remote engineers who work directly with your tools, processes, and leadership.",
    highlights: [
      "Direct integration into your Jira, Slack, & GitHub workflows",
      "Full control over sprint backlog and priorities",
      "Zero recruitment & HR overhead for your team",
      "Flexible sizing with easy scaling up or down",
    ],
  },
  {
    icon: UserPlus,
    title: "Staff Augmentation",
    subtitle: "Providing skilled developers on contract",
    description:
      "Fill specific skill gaps or overcome tight deadlines with hand-picked developers, cloud architects, and QA engineers on contract basis.",
    highlights: [
      "Vetted talent available on short notice",
      "Full Stack, DevOps, Data Science, AI/ML, and Mobile expertise",
      "Flexible duration: short-term or long-term projects",
      "Transparent hourly or monthly billing models",
    ],
  },
  {
    icon: Briefcase,
    title: "Project-Based Delivery",
    subtitle: "Fixed-scope, fixed-timeline engagements",
    description:
      "Ideal for well-defined projects. We deliver end-to-end against clear requirements, fixed budgets, and guaranteed delivery milestones.",
    highlights: [
      "Fixed cost and guaranteed timeline delivery",
      "Clear milestone-based payment schedules",
      "Complete SLA and post-launch maintenance period",
      "End-to-end accountability from requirement to launch",
    ],
  },
];

const nonItModels = [
  {
    icon: Lightbulb,
    title: "Digital Transformation Consulting",
    subtitle: "Assessing current state & defining the roadmap",
    description:
      "We help traditional enterprises assess existing legacy systems, uncover process bottlenecks, and map out a practical digital adoption plan.",
    highlights: [
      "Technology audit & architecture assessment",
      "ROI-driven digital roadmap definition",
      "Vendor & platform selection guidance",
      "Minimal operational disruption during rollout",
    ],
  },
  {
    icon: Layers,
    title: "End-to-End Solution Delivery",
    subtitle: "Requirements to deployment and support",
    description:
      "Turn key enterprise requirements like ERP, CRM, MES, or BI dashboards into custom-built software solutions with full maintenance.",
    highlights: [
      "Custom software built around your exact business process",
      "Integration with legacy systems and hardware/IoT",
      "Comprehensive user testing & acceptance (UAT)",
      "Long-term post-deployment support",
    ],
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    subtitle: "Ongoing maintenance, upgrades & enhancements",
    description:
      "Offload system maintenance, cloud infrastructure management, security patches, and application enhancements to our experts.",
    highlights: [
      "24/7 infrastructure & application monitoring",
      "Proactive security patching & compliance compliance",
      "Predictable operational expense (OpEx) model",
      "Dedicated L1/L2/L3 support desk",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Change Management",
    subtitle: "Upskilling internal teams on new systems",
    description:
      "Ensure successful software adoption across your organisation through structured user training, documentation, and change management programs.",
    highlights: [
      "Role-based user training programs",
      "Standard Operating Procedure (SOP) documentation",
      "Interactive workshops & video walk-throughs",
      "Ongoing helpdesk support during transition",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across 15+ IT & traditional sectors ensures we understand your specific regulatory, technical, and business metrics.",
  },
  {
    title: "Technology + Business Alignment",
    description:
      "We don't just write code — we solve real business problems with scalable digital solutions that deliver measurable ROI.",
  },
  {
    title: "Scalable & Flexible",
    description:
      "From high-growth tech startups to established global enterprises, our engagement models adapt seamlessly as your goals evolve.",
  },
];

function Engagement() {
  return (
    <>
      <PageHero
        eyebrow="Engagement Models"
        title="Flexible partnership models designed around your goals"
        subtitle="Whether you need a dedicated engineering team, staff augmentation, project-based delivery, or enterprise digital transformation — we adapt to your cadence."
        bgImage={heroMesh}
      />

      {/* IT Clients Models */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            For IT & Tech Companies
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Accelerate product development & team capacity
          </h2>
          <p className="mt-4 text-base text-foreground/75 leading-relaxed">
            Tailored engagement models for SaaS platforms, tech startups, and ISVs requiring engineering speed and flexibility.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {itModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <article className="card-elevated flex h-full flex-col p-8">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{m.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {m.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-foreground/75">{m.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Non-IT Clients Models */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              For Traditional Enterprises
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              End-to-end digital transformation & support
            </h2>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed">
              Comprehensive technology services for manufacturing, banking, retail, healthcare, and energy sectors.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {nonItModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <article className="card-elevated flex h-full flex-col p-8">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <m.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{m.title}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {m.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-foreground/75">
                    {m.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm">
                    {m.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Why Choose HNR Global
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built for long-term technology partnership
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-8 backdrop-blur">
                  <h3 className="text-xl font-bold text-primary">{w.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-navy-foreground/80">
                    {w.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Discuss your engagement model <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
