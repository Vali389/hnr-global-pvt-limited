import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Workflow,
  Sparkles,
  ArrowRight,
  TrendingUp,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Star,
  Quote,
  Target,
  BarChart3,
  Globe2,
} from "lucide-react";
import heroImg from "@/assets/services-hero-pro.jpg";
import philosophyImg from "@/assets/about.jpg";
import pillarsImg from "@/assets/ai-advantage.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "For Companies | Delivering Client Success | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "At HNR Global, we believe technology creates its greatest impact when powered by the right people, ideas, and expertise. Discover how we partner with forward-thinking enterprises.",
      },
      { property: "og:title", content: "For Companies | Delivering Client Success | HNR Global" },
      {
        property: "og:description",
        content:
          "Strategic technology solutions, elite engineering talent, and outcome-driven partnerships that help modern enterprises thrive.",
      },
    ],
  }),
  component: CompaniesPage,
});

const stats = [
  { value: "100+", label: "Enterprise Clients Partnered", icon: Globe2 },
  { value: "95%", label: "Long-Term Retention Rate", icon: HeartHandshake },
  { value: "500+", label: "Senior Technologists Placed", icon: Users },
  { value: "50+", label: "Mission-Critical Systems Shipped", icon: Rocket },
];

const engagementModels = [
  {
    icon: Users,
    title: "Dedicated Engineering Squads",
    tag: "AUTONOMOUS & AGILE",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    desc: "Cross-functional teams of software architects, full-stack engineers, and QA leads fully integrated into your sprint cycles, taking total ownership of deliverables.",
  },
  {
    icon: Cpu,
    title: "Specialized Talent Augmentation",
    tag: "ON-DEMAND EXPERTISE",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    desc: "Deploy pre-vetted niche talent—from AI/ML engineers to cloud infrastructure specialists—within 48 hours to accelerate roadmap velocity.",
  },
  {
    icon: Workflow,
    title: "End-to-End Product Engineering",
    tag: "CONCEPT TO SCALE",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    desc: "Full lifecycle software delivery: discovery, UI/UX architecture, scalable cloud-native backend development, CI/CD pipelines, and 24/7 SLA maintenance.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Consulting & Modernization",
    tag: "TRANSFORMATION",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    desc: "Legacy system refactoring, cloud migrations (AWS/Azure/GCP), data pipelines, and Generative AI adoption roadmaps customized for measurable ROI.",
  },
];

const clientPillars = [
  {
    icon: HeartHandshake,
    title: "Human-Centric Philosophy",
    narrative:
      "Technology creates its greatest impact when powered by the right people, ideas, and expertise. We ensure people remain at the heart of every solution we deliver.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Delivery",
    narrative:
      "Every engagement is architected around measurable business outcomes, operational efficiency, and the unique strategic priorities of our enterprise clients.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, Transparency & Accountability",
    narrative:
      "Successful partnerships are built on radical transparency and consistent performance. We move beyond traditional consulting to build long-term, value-driven alliances.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Innovation",
    narrative:
      "We embrace emerging technologies and evolving industry trends to help clients remain competitive, adaptive, and prepared for rapid market shifts.",
  },
];

const testimonials = [
  {
    quote:
      "HNR Global provided a dedicated squad of 8 senior full-stack and cloud engineers who transformed our legacy logistics core into an event-driven microservices architecture. Our release cadence increased 4x.",
    author: "Rajesh Varma",
    role: "VP of Technology",
    company: "Global Supply Chain Enterprise",
  },
  {
    quote:
      "What sets HNR Global apart is their human-centric mindset and complete accountability. They don't just supply resumes; they understand our business priorities and deliver exceptional engineering caliber.",
    author: "Sarah Jenkins",
    role: "Head of Digital Transformation",
    company: "FinTech Innovations Inc.",
  },
  {
    quote:
      "Their recruitment team closed 12 mission-critical technical leadership roles in under 5 weeks. The candidates were not only technically superior but aligned seamlessly with our culture.",
    author: "Priya Menon",
    role: "Chief Talent Officer",
    company: "Healthcare SaaS Platform",
  },
];

function CompaniesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <PageHero
        eyebrow="FOR COMPANIES & ENTERPRISES"
        title="Delivering to Our Client Success"
        subtitle="Shaping the future of technology through human-centric innovation, specialized talent solutions, and high-performance engineering partnerships."
        bgImage={heroImg}
      />

      {/* Key Proof Metrics Ribbon */}
      <section className="border-b border-border bg-card/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 border border-border/60 hover:border-primary/40 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section 1: OUR PHILOSOPHY & COMMITMENT
          Left side: Narrative text | Right side: Professional Image */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  OUR PHILOSOPHY & COMMITMENT
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  Where Exceptional People Power World-Class Technology
                </h2>
              </Reveal>

              <Reveal delay={100} className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed font-normal">
                <p>
                  At <strong className="text-foreground font-semibold">HNR Global</strong>, we believe technology creates its greatest impact when powered by the right people, ideas, and expertise. Our mission is to deliver transformative talent solutions, engineering excellence, and technology services that help organizations thrive in an era of relentless market evolution.
                </p>
                <p>
                  We partner with forward-thinking companies to address complex business and workforce challenges with confidence. Our approach combines deep industry knowledge, modern technology, and a profound understanding of people—ensuring our human-centric philosophy keeps people at the heart of every technology and business solution we deliver.
                </p>
                <p>
                  By combining industry-focused expertise with innovative thinking, we help organizations turn challenges into opportunities. Together, we shape the future by connecting exceptional talent, innovative technology, and meaningful business outcomes.
                </p>
              </Reveal>

              <Reveal delay={150} className="pt-2">
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-foreground/85">
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 95% Client Retention Rate
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Long-Term Strategic Alliances
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Human-Centric Innovation
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Professional Image */}
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl group">
                  <img
                    src={philosophyImg}
                    alt="HNR Global Engineering & Talent Team"
                    className="w-full h-[460px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/85 via-[#030914]/20 to-transparent pointer-events-none" />

                  {/* Floating Overlay Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-card/90 dark:bg-[#0a1628]/90 backdrop-blur-xl border border-border shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                        <Sparkles className="h-4 w-4" /> Trusted Strategic Partner
                      </span>
                      <span className="text-xs font-extrabold text-foreground bg-primary/10 px-2 py-0.5 rounded-md">
                        100+ Clients
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 font-normal leading-relaxed">
                      "Technology creates its greatest impact when powered by the right people, ideas, and expertise."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: OUR STRATEGIC PILLARS
          Left side: Professional Image | Right side: Content & Precise Compact Cards */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Professional Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal delay={100}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl group">
                  <img
                    src={pillarsImg}
                    alt="HNR Global Strategic Technology Innovation"
                    className="w-full h-[480px] md:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Bottom Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#030914]/90 backdrop-blur-xl border border-white/15 text-white shadow-xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-1.5">
                      <Target className="h-4 w-4" /> Measurable Enterprise Impact
                    </div>
                    <p className="text-xs text-slate-300 font-normal leading-relaxed">
                      Connecting exceptional talent, innovative engineering, and meaningful business outcomes that drive sustained growth.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Content & Precise Compact Cards */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  OUR STRATEGIC PILLARS
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  Engineered for Enterprise Value
                </h2>
                <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed font-normal">
                  We go beyond traditional staffing and consulting. Our dedicated teams work closely with enterprise clients to understand their goals, challenges, and strategic priorities—creating sustainable business value through consistent performance and transparent accountability.
                </p>
              </Reveal>

              {/* 4 Precise Compact Cards */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                {clientPillars.map((p, idx) => (
                  <Reveal key={p.title} delay={idx * 60}>
                    <div className="h-full rounded-2xl border border-border bg-card p-4.5 sm:p-5 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <p.icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-foreground">
                            {p.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                          {p.narrative}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Precise Capability Callout */}
              <Reveal delay={180}>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4.5 sm:p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Full-Spectrum Capability & Talent Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                    Our engineering capabilities support organizations in developing, optimizing, and delivering next-generation technology solutions. We provide highly skilled professionals who bring the expertise, agility, and innovation required to accelerate business growth and ensure future-ready competitiveness.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Enterprise Engagement Models */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              ENGAGEMENT MODELS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Flexible Engagement Tailored to Your Scale
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Whether you need dedicated engineering squads, rapid staff augmentation, or turnkey product modernization, our delivery frameworks adapt seamlessly.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, i) => (
              <Reveal key={model.title} delay={i * 60}>
                <div className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div>
                    <span
                      className={`inline-block border px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-4 ${model.badgeColor}`}
                    >
                      {model.tag}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
                      <model.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-foreground/75 leading-relaxed font-normal">
                      {model.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#020b1e] via-[#05183d] to-[#030914] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Trusted by Industry Leaders
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <Reveal key={t.author} delay={idx * 80}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-sky-400/40 transition-colors">
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed italic font-normal">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="font-bold text-white text-base">{t.author}</p>
                    <p className="text-xs text-sky-300">{t.role}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <CtaBand />
    </div>
  );
}
