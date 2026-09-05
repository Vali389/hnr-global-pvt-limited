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
} from "lucide-react";
import heroConfig from "@/assets/services-hero-pro.jpg";
import heroClean from "@/assets/hero-clean.jpg";
import heroMesh from "@/assets/hero-mesh.jpg";
import svcAi from "@/assets/svc-ai.jpg";
import aboutImg from "@/assets/about.jpg";
import bgAbout from "@/assets/bg-about.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "Custom software, product engineering, mobile apps, IT recruitment, digital transformation consulting and AI services.",
      },
      { property: "og:title", content: "Services | HNR Global PVT LTD" },
      {
        property: "og:description",
        content: "End-to-end services and key technology topics delivered by HNR Global PVT LTD.",
      },
    ],
  }),
  component: Services,
});

const endToEnd = [
  "Business consulting",
  "Systems integration",
  "Managed IT services",
  "Application services",
  "Infrastructure services",
  "Business process services",
];

const keyTopics = [
  { label: "Artificial intelligence (AI)", icon: Bot },
  { label: "Cybersecurity", icon: ShieldCheck },
  { label: "Quantum computing", icon: Cpu },
  { label: "Cloud & hybrid IT", icon: Cloud },
  { label: "Data analytics", icon: BarChart3 },
  { label: "Supply chain ecosystems", icon: Network },
];

const detailed = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    intro: "Bespoke software solutions tailored to your unique business requirements.",
    points: [
      "Enterprise Resource Planning (ERP) systems",
      "Customer Relationship Management (CRM) platforms",
      "Business Intelligence & Analytics dashboards",
      "Workflow automation tools",
      "Legacy system modernisation",
    ],
    tech: "Java, Python, .NET, Node.js, React, Angular, Vue.js",
    image: heroClean,
  },
  {
    slug: "product-engineering",
    title: "Product Development & Engineering",
    intro: "From concept to launch and beyond — your end-to-end product partner.",
    points: [
      "MVP development: rapid prototyping in weeks, not months",
      "Full-cycle product engineering: design, develop, deploy, scale",
      "Product optimisation and technical debt reduction",
      "Cloud-native solutions across AWS, Azure and GCP",
    ],
    tech: "React, Next.js, Flutter, Kubernetes, Docker, Microservices",
    image: heroConfig,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    intro: "Native and cross-platform apps that engage users and drive business results.",
    points: [
      "Native iOS and Android apps",
      "Cross-platform apps (Flutter, React Native)",
      "Enterprise mobile solutions",
      "App modernisation and maintenance",
    ],
    tech: "Swift, Kotlin, Flutter, React Native",
    image: heroMesh,
  },
  {
    slug: "it-recruitment-staffing",
    title: "IT Recruitment & Staffing Solutions",
    intro: "Finding the right talent is hard. We make it effortless.",
    points: [
      "Permanent hiring across all levels",
      "Contract staffing for project-based needs",
      "Executive search: CTO, VP Engineering, Principal Architects",
      "Campus recruitment from premier institutions",
      "RPO: end-to-end hiring management",
    ],
    tech: "Full Stack, DevOps & Cloud, Data Science & AI/ML, QA Automation, Product, UI/UX",
    image: aboutImg,
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Consulting",
    intro: "Strategic guidance to navigate your digital journey with confidence.",
    points: [
      "Assess current technology landscape",
      "Define a digital roadmap aligned with business goals",
      "Select the right technologies and partners",
      "Execute transformation with minimal disruption",
    ],
    tech: "BPM, process mining, change management",
    image: bgAbout,
  },
  {
    slug: "ai-intelligent-solutions",
    title: "AI, Data & Intelligent Automation",
    intro: "Practical AI applied where it produces measurable value.",
    points: [
      "AI assistants and document intelligence",
      "Predictive analytics and forecasting",
      "Data platforms, warehousing and governance",
      "Intelligent process automation",
    ],
    tech: "Python, LLM platforms, MLOps, modern data stack",
    image: svcAi,
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="High-impact technology solutions and measurable value"
        subtitle="From consulting and integration to managed services, engineering and talent — delivered by one accountable partner."
        bgImage={heroConfig}
      />

      {/* END-TO-END SERVICES & KEY TOPICS SECTION (Image 1 reference) */}
      <section className="relative overflow-hidden bg-[#020b1e] py-24 text-white">
        {/* Subtle ambient lighting */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-2">
          {/* Left Column: End-to-End Services */}
          <Reveal>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              END-TO-END SERVICES
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
              One partner across the full technology lifecycle
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {endToEnd.map((item) => (
                <div
                  key={item}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.1] hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer"
                >
                  <span className="text-slate-200 group-hover:text-white font-medium">{item}</span>
                  <ArrowRight className="h-4 w-4 text-sky-400/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-300" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Key Topics */}
          <Reveal delay={120}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              KEY TOPICS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
              Where technology is heading
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {keyTopics.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm font-medium text-slate-100 backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.1] hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400 border border-sky-400/20 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="text-slate-200 group-hover:text-white font-medium truncate">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-6">
        <Marquee items={keyTopics.map((t) => t.label).concat(endToEnd)} />
      </section>

      <section className="bg-background pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Detailed capabilities</h2>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed">
              Every engagement is staffed with senior engineers, backed by QA automation and delivered
              on agile cadences.
            </p>
          </Reveal>
        </div>
      </section>

      {detailed.map((s, i) => (
        <section
          key={s.title}
          className={`py-20 ${i % 2 === 1 ? "bg-muted/30" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
            <Reveal delay={100} className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <div className="mt-3.5 h-1 w-14 rounded-full bg-primary" />
                <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/75">
                  {s.intro}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm md:text-base leading-relaxed text-foreground/80 font-normal">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tech Stack:</span>
                  <span className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {s.tech}
                  </span>
                </div>

                <div className="mt-8">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:gap-3 hover:shadow-md"
                  >
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/50 bg-muted group">
                <img
                  src={s.image}
                  alt={s.title}
                  onError={(e) => {
                    e.currentTarget.src = heroConfig;
                  }}
                  className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
