import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
  Phone,
  Code2,
  Cpu,
  Boxes,
  Workflow,
  Check,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import defaultHero from "@/assets/services-hero-pro.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = servicesData[params.slug];
    if (!service) {
      throw notFound();
    }
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    return {
      meta: [
        { title: `${service?.title || "Service"} | HNR Global PVT LTD` },
        {
          name: "description",
          content: service?.tagline || service?.overview || "Enterprise IT & Engineering Services",
        },
        { property: "og:title", content: `${service?.title} | HNR Global PVT LTD` },
        { property: "og:description", content: service?.overview || "" },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: ServiceDetail };
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // All other services for sidebar / related services
  const otherServices = Object.values(servicesData).filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-background text-foreground">
      {/* Service Hero Banner */}
      <section className="relative isolate overflow-hidden bg-[#030914] min-h-[500px] md:min-h-[560px] flex items-center border-b border-white/10">
        {/* Subtle background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(29,78,216,0.12),transparent)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:py-20 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/60 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-cyan-400 font-bold">{service.shortTitle}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8] backdrop-blur-md">
                  {service.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                  {service.tagline}
                </p>
              </Reveal>

              {/* Core Delivery Highlights */}
              <Reveal delay={250}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-sm">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" /> 100% IP &amp; Code Ownership
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-sm">
                    <Zap className="h-3.5 w-3.5 text-cyan-400" /> Agile 2-Week Sprints
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" /> Enterprise SLA Governed
                  </span>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm md:text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95"
                  >
                    Start This Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+919177111311"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm md:text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
                  >
                    <Phone className="h-4 w-4 text-cyan-400" /> Speak With an Architect
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Showcase Image Card */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative rounded-3xl border border-white/20 bg-white/[0.04] p-3 shadow-2xl shadow-blue-500/15 backdrop-blur-md group overflow-hidden">
                  <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden rounded-2xl bg-slate-900">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      onError={(e) => {
                        e.currentTarget.src = defaultHero;
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Top Floating Active Badge */}
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-2 rounded-full bg-slate-950/80 px-3.5 py-1 text-xs font-semibold text-white border border-white/20 backdrop-blur-md shadow-lg">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active Practice</span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-5 text-white">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#38bdf8] block uppercase">
                        Competency {service.number} • HNR Global
                      </span>
                      <p className="text-base font-bold text-white mt-1 leading-snug">
                        {service.shortTitle} Engineering Pod
                      </p>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main 2 Columns */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview Box */}
            <Reveal>
              <div className="rounded-3xl border border-blue-100 dark:border-blue-950/60 bg-card p-8 md:p-10 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  SERVICE OVERVIEW
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                  Engineering excellence built around your business goals
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>

                {service.capabilities && service.capabilities.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Core Capabilities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          <Check className="h-3.5 w-3.5 text-primary" /> {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Core Offerings Grid */}
            <div>
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  CAPABILITIES &amp; SOLUTIONS
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                  What we deliver in this domain
                </h2>
              </Reveal>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {service.coreOfferings.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 80}>
                    <div className="group flex h-full flex-col justify-between rounded-3xl border border-blue-100/90 dark:border-blue-950/60 bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                          <Boxes className="h-6 w-6" />
                        </div>
                        <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2 text-xs md:text-sm">
                              <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Technology Stack Matrix */}
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  TECH ECOSYSTEM
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                  Technologies &amp; Frameworks We Use
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {service.techStack.map((techGroup) => (
                    <div
                      key={techGroup.category}
                      className="rounded-2xl border border-border/80 bg-muted/30 p-5"
                    >
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                        {techGroup.category}
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {techGroup.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-lg border border-border/60 bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-2xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Delivery Process Roadmap */}
            <div>
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  HOW WE DELIVER
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                  Proven 4-Step Engineering Process
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.process.map((step, idx) => (
                  <Reveal key={step.step} delay={idx * 80}>
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-primary/20 bg-card p-6 shadow-xs">
                      <div>
                        <span className="text-3xl font-black text-primary/30">{step.step}</span>
                        <h4 className="mt-3 text-base font-bold text-foreground">{step.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Stage Validated
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <Reveal>
              <div className="rounded-3xl border border-blue-100 dark:border-blue-950/60 bg-gradient-to-br from-blue-50/50 via-card to-card p-8 md:p-10 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  BUSINESS VALUE
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                  Key Benefits for Your Organization
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">{b.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Service FAQ */}
            <div>
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  COMMON QUESTIONS
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                  Frequently Asked Questions
                </h2>
              </Reveal>
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
                {service.faqs.map((faq, i) => (
                  <div key={faq.question} className="p-6">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 text-left font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-base md:text-lg">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground animate-in fade-in-50">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Quick Contact Card */}
            <div className="rounded-3xl border border-primary/30 bg-primary p-8 text-white shadow-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" /> Direct Consultation
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-snug">
                Ready to accelerate with {service.shortTitle}?
              </h3>
              <p className="mt-3 text-sm text-white/85 leading-relaxed">
                Connect with our Principal Architect or Staffing Director to discuss your exact timeline and tech requirements.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+919177111311"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-primary shadow-md hover:bg-white/95 transition-all"
                >
                  <Phone className="h-4 w-4" /> Call +91-9177111311
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  Request a Custom Proposal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Other Services Nav */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <h4 className="text-base font-bold text-foreground">Explore Other Services</h4>
              <div className="mt-4 space-y-2">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    to="/services/$slug"
                    params={{ slug: other.slug }}
                    className="flex items-center justify-between rounded-xl p-3 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-primary transition-all group"
                  >
                    <span>{other.title}</span>
                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <CtaBand />
    </div>
  );
}
