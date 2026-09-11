import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Cpu,
  Cloud,
  BarChart3,
  Network,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  Smartphone,
  Users,
  RefreshCw,
  Database,
} from "lucide-react";
import heroConfig from "@/assets/services-hero-unique.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { CtaBand } from "@/components/site/CtaBand";
import { primaryServicesList } from "@/data/servicesData";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Enterprise IT & Engineering Services | HNR Global" },
      {
        name: "description",
        content:
          "End-to-end custom software development, product engineering, AI solutions, cloud & DevOps, data engineering, mobile engineering, technology talent, and digital transformation.",
      },
      { property: "og:title", content: "Services Overview | HNR Global PVT LTD" },
      {
        name: "og:description",
        content:
          "Explore HNR Global's 8 core enterprise services delivering modern engineering practices and measurable business outcomes.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons: Record<string, any> = {
  "01": Code2,
  "02": Layers,
  "03": Bot,
  "04": Cloud,
  "05": Database,
  "06": Smartphone,
  "07": Users,
  "08": RefreshCw,
};

const serviceCoreFocus: Record<string, string[]> = {
  "01": ["Enterprise Applications", "CRM & ERP", "APIs & Integrations", "Workflow Automation"],
  "02": ["SaaS Architecture", "Rapid MVP", "Cloud Native", "Platform Engineering"],
  "03": ["GenAI & LLMs", "Machine Learning", "Enterprise RAG", "Computer Vision"],
  "04": ["AWS & Azure & GCP", "Kubernetes", "CI/CD Automation", "FinOps & Observability"],
  "05": ["Modern Data Platforms", "Data Engineering & ETL", "Power BI & Tableau", "Governance"],
  "06": ["iOS & Android", "Flutter & React Native", "Offline-First", "App Store Release"],
  "07": ["Staff Augmentation", "Dedicated Squads", "Contract-to-Hire", "Executive Search"],
  "08": ["Legacy Modernization", "Process Automation", "Cloud Transformation", "Technology Strategy"],
};

function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="ENTERPRISE SERVICES"
        title="High-Impact Technology Solutions Built Around Your Business"
        subtitle="Custom software, product engineering, AI solutions, cloud DevOps, and elite engineering talent."
        bgImage={heroConfig}
      />

      {/* Services Table Matrix Overview */}
      <section className="relative overflow-hidden bg-[#030914] py-20 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8]">
                SERVICES OVERVIEW
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
                8 Specialized Core Competencies
              </h2>
              <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
                Combining agile software craftsmanship, deep domain engineering, and disciplined governance to power enterprise scale.
              </p>
            </div>
          </Reveal>

          {/* Grid of 8 Service Summary Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {primaryServicesList.map((svc, idx) => {
              const Icon = serviceIcons[svc.number] || Code2;
              const focusItems = serviceCoreFocus[svc.number] || [];

              return (
                <Reveal key={svc.slug} delay={idx * 50}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: svc.slug }}
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#38bdf8]/60 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-[#38bdf8]/10"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#38bdf8]">
                          {svc.number}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#38bdf8] border border-white/10 group-hover:bg-[#38bdf8] group-hover:text-black transition-all duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                        {svc.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {svc.tagline}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {focusItems.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="inline-block rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#38bdf8] group-hover:translate-x-1 transition-transform">
                      <span>Explore Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ticker of Core Technologies */}
      <section className="border-y border-border bg-muted/40 py-5">
        <Marquee
          items={[
            "Custom Software",
            "Product Engineering",
            "Generative AI & RAG",
            "Cloud & DevOps",
            "Data Engineering",
            "Mobile Apps",
            "Technology Talent",
            "Digital Transformation",
            "Kubernetes",
            "Snowflake",
            "AWS & Azure",
            "Spring Boot",
            "React & Next.js",
          ]}
        />
      </section>

      {/* Deep-Dive Sections for Each Service */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              IN-DEPTH CAPABILITIES
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Engineering Depth Across Every Dimension
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Every engagement is architected for long-term scalability, backed by automated quality assurance and governed by clear SLAs.
            </p>
          </div>

          <div className="space-y-16">
            {primaryServicesList.map((service, index) => {
              const isEven = index % 2 === 1;
              const Icon = serviceIcons[service.number] || Code2;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-xs transition-all duration-300 hover:shadow-lg"
                >
                  <div className="grid gap-10 lg:grid-cols-12 items-center">
                    {/* Text Column */}
                    <div className={`space-y-6 lg:col-span-7 ${isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-mono font-bold text-sm">
                          {service.number}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {service.eyebrow}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-foreground">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-base font-semibold text-primary/90">
                          {service.tagline}
                        </p>
                      </div>

                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                        {service.overview}
                      </p>

                      {/* Capabilities pills */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                          Featured Capabilities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.slice(0, 6).map((cap) => (
                            <span
                              key={cap}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tech ecosystem summary */}
                      <div className="rounded-xl bg-muted/30 border border-border/60 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                          Technology Ecosystem:
                        </span>
                        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                          {service.techEcosystem.slice(0, 10).join(" • ")}
                          {service.techEcosystem.length > 10 && " • ..."}
                        </p>
                      </div>

                      <div>
                        <Link
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all group"
                        >
                          <span>Explore Full {service.shortTitle} Architecture</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : ""}`}>
                      <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl group">
                        <img
                          src={service.heroImage}
                          alt={service.title}
                          className="h-[360px] md:h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8]">
                            HNR Global Solution Pod
                          </span>
                          <p className="mt-1 text-base font-bold text-white line-clamp-2">
                            {service.businessValue}
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

      <CtaBand />
    </div>
  );
}
