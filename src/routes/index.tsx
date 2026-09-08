import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  Compass,
  Layers,
  Rocket,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  ShieldCheck,
  MapPin,
  Landmark,
  Radio,
  Zap,
  Flame,
  Building2,
  HeartPulse,
  FileText,
  FlaskConical,
  Factory,
  ShoppingCart,
  Orbit,
  Truck,
  Terminal,
  Network,
  RefreshCw,
  Check,
  Briefcase,
  GitBranch,
} from "lucide-react";
import about from "@/assets/about.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { CtaBand } from "@/components/site/CtaBand";
import { HeroVideoPlaylist } from "@/components/site/HeroVideoPlaylist";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HNR Global PVT LTD | Software, Product & IT Talent Partner" },
      {
        name: "description",
        content:
          "HNR Global delivers custom software, product engineering, AI solutions, cloud DevOps, data analytics, mobile engineering and IT talent from Hyderabad and Visakhapatnam.",
      },
      { property: "og:title", content: "HNR Global PVT LTD | Technology Partner" },
      {
        property: "og:description",
        content:
          "Custom software, product engineering, digital transformation and IT staffing for enterprises across 13+ sectors.",
      },
    ],
  }),
  component: Home,
});

// Section 16: Enterprise Credibility & Proof Points
const stats = [
  { value: "15+", label: "Years Combined Leadership", detail: "Senior architects and delivery leaders" },
  { value: "500+", label: "Tech Professionals Placed", detail: "Vetted engineers and talent solutions" },
  { value: "100+", label: "Enterprise Engagements", detail: "Successful client deliveries" },
  { value: "95%", label: "Client Retention Rate", detail: "Long-term client partnerships" },
];

// Section 2: Services — Website Overview (All 8 Services with custom imagery)
const services = [
  {
    num: "01",
    icon: Code2,
    title: "Custom Software Development",
    eyebrow: "ENTERPRISE SOFTWARE & CRM",
    focus: "Enterprise applications • CRM • ERP • APIs • Automation",
    body: "ERP, CRM, BI dashboards, workflow automation and legacy modernisation built around your business workflows.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    link: "/services/custom-software-development",
  },
  {
    num: "02",
    icon: Boxes,
    title: "Product Engineering",
    eyebrow: "SaaS & CLOUD ARCHITECTURE",
    focus: "SaaS • MVP • Cloud Native • Platform Engineering",
    body: "MVPs in weeks, full-cycle engineering, optimization and cloud-native architecture on AWS, Azure and GCP.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "/services/product-engineering",
  },
  {
    num: "03",
    icon: Brain,
    title: "AI & Intelligent Solutions",
    eyebrow: "GENERATIVE AI & AUTOMATION",
    focus: "Enterprise AI Solutions • Automation • Intelligent Systems",
    body: "Helping organizations move from AI experimentation to practical enterprise solutions, RAG assistants, and automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    link: "/services/ai-intelligent-solutions",
  },
  {
    num: "04",
    icon: Cloud,
    title: "Cloud & DevOps",
    eyebrow: "MULTI-CLOUD & KUBERNETES",
    focus: "AWS • Azure • Google Cloud • Kubernetes • CI/CD",
    body: "Enterprise cloud engineering, multi-region cloud migrations, automated CI/CD pipelines, and FinOps governance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "/services/cloud-devops",
  },
  {
    num: "05",
    icon: Database,
    title: "Data Engineering & Analytics",
    eyebrow: "DATA PLATFORMS & BI",
    focus: "Data Platforms • Data Engineering • BI • Analytics",
    body: "Modern data foundations, Snowflake/Databricks lakehouses, real-time analytics, and automated Power BI dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/services/data-engineering-analytics",
  },
  {
    num: "06",
    icon: Smartphone,
    title: "Mobile Engineering",
    eyebrow: "iOS, ANDROID & FLUTTER",
    focus: "iOS • Android • Flutter • React Native",
    body: "Secure, intuitive and scalable mobile applications across iOS, Android, Flutter and React Native with offline sync.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    link: "/services/mobile-engineering",
  },
  {
    num: "07",
    icon: Users,
    title: "Technology Talent Solutions",
    eyebrow: "STAFF AUGMENTATION & SQUADS",
    focus: "Staff Augmentation • RPO • Contract Staffing • Executive Search",
    body: "Permanent hiring, contract staffing, dedicated engineering squads, executive search, and end-to-end recruitment process outsourcing.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    link: "/services/technology-talent-solutions",
  },
  {
    num: "08",
    icon: RefreshCw,
    title: "Digital Transformation",
    eyebrow: "MODERNIZATION & STRATEGY",
    focus: "Modernization • Automation • Cloud Transformation • Strategy",
    body: "Modernize legacy systems, automate processes, eliminate technical debt, and establish scalable cloud operating models.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "/services/digital-transformation",
  },
];

// Section 12: Enterprise Delivery Model
const processSteps = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery & Strategy",
    subtitle: "Aligning Objectives & Technical Roadmap",
    description: "Align business goals, understand current-state architecture, identify requirements, define KPIs and establish delivery milestones.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Architecture & Design",
    subtitle: "Scalable Architecture, UX & Security",
    description: "Create scalable solution architecture, UX direction, security considerations, integration patterns and a maintainable engineering foundation.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Agile Engineering & QA",
    subtitle: "Controlled Iterations & Continuous Verification",
    description: "Develop in controlled iterations with code reviews, automated testing, continuous integration, security checks and transparent progress tracking.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deployment & Scaling",
    subtitle: "Zero-Downtime Rollout & 24/7 SLA",
    description: "Release through controlled deployment pipelines, establish monitoring and observability, stabilize production and continuously improve the solution.",
  },
];

// Section 13: Enterprise Engagement Models
const engagementModels = [
  {
    title: "Dedicated Engineering Teams",
    desc: "Autonomous cross-functional squads dedicated 100% to your product roadmap with embedded QA and Scrum Master.",
  },
  {
    title: "Project-Based / Fixed-Cost Delivery",
    desc: "Guaranteed scope, timeline, and deliverables with milestone-based sign-offs and zero budget creep.",
  },
  {
    title: "Staff Augmentation",
    desc: "Scale your internal engineering team on-demand with pre-vetted senior developers within 1-2 weeks.",
  },
  {
    title: "Contract-to-Hire",
    desc: "Evaluate technical excellence and cultural alignment before transitioning contract specialists into full-time roles.",
  },
  {
    title: "Managed Teams",
    desc: "Full accountability for platform operations, continuous feature enhancement, and 24/7 reliability SLAs.",
  },
  {
    title: "Technology Consulting",
    desc: "Principal architect assessments for modernization, cloud migration, legacy refactoring, and AI roadmaps.",
  },
  {
    title: "RPO / Talent Acquisition",
    desc: "End-to-end recruitment process outsourcing for rapid hiring surges and specialized niche roles.",
  },
  {
    title: "Strategic Transformation Engagements",
    desc: "Comprehensive multi-phase modernization programs transitioning legacy monoliths to agile cloud systems.",
  },
];

// Section 11: Technology Stack Highlights for Teaser
const techHighlights = [
  {
    domain: "AI & Data",
    icon: Brain,
    description: "Enterprise Generative AI, RAG knowledge retrieval, predictive machine learning models, and modern cloud data lakehouses.",
  },
  {
    domain: "Application Engineering",
    icon: Code2,
    description: "High-concurrency microservices, enterprise ERP and CRM platforms, and secure transaction workflows with low-latency APIs.",
  },
  {
    domain: "Frontend Engineering",
    icon: Layers,
    description: "High-performance responsive web applications, component design systems, and fast server-rendered customer portals.",
  },
  {
    domain: "Mobile Engineering",
    icon: Smartphone,
    description: "Native iOS and Android alongside Flutter and React Native cross-platform apps with offline sync and biometric security.",
  },
  {
    domain: "Cloud & DevOps",
    icon: Cloud,
    description: "Multi-region cloud infrastructure, automated GitOps CI/CD delivery pipelines, and Kubernetes container management.",
  },
  {
    domain: "Databases & Integration",
    icon: Database,
    description: "Mission-critical relational and document databases, distributed Kafka event streams, and enterprise API gateways.",
  },
];

// Section 15: Industries We Serve (All 13 from user specification, Cloud & IT Services first)
const industries = [
  { icon: Cloud, label: "Cloud & IT Services", category: "Enterprise IT" },
  { icon: Landmark, label: "Banking & Capital Markets", category: "Finance" },
  { icon: Radio, label: "Communications & Media", category: "Telecom" },
  { icon: Zap, label: "Energy & Utilities", category: "Utilities" },
  { icon: Flame, label: "Oil & Gas", category: "Energy" },
  { icon: Building2, label: "Government", category: "Public" },
  { icon: HeartPulse, label: "Healthcare", category: "HealthTech" },
  { icon: FileText, label: "Insurance", category: "InsurTech" },
  { icon: FlaskConical, label: "Life Sciences", category: "Pharma" },
  { icon: Factory, label: "Manufacturing", category: "Industry 4.0" },
  { icon: ShoppingCart, label: "Retail & Consumer", category: "E-Commerce" },
  { icon: Orbit, label: "Space & Technology", category: "High-Tech" },
  { icon: Truck, label: "Transportation & Logistics", category: "Supply Chain" },
];

const testimonials = [
  {
    quote: "The software engineering and DevOps implementation by HNR Global was exceptional. The hands-on architecture and zero-downtime microservices helped us scale smoothly across regions.",
    author: "Rajesh Kumar",
    role: "Director of Engineering at FinTech Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    tag: "Cloud & DevOps",
  },
  {
    quote: "We engaged HNR Global for dedicated full-stack engineering and IT talent. Their senior developers integrated seamlessly and delivered our core SaaS platform ahead of schedule.",
    author: "Priya Sharma",
    role: "VP of Technology at HealthTech Solutions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    tag: "Full Stack & Talent",
  },
  {
    quote: "Best enterprise technology consulting partner. Their cloud-native modernization and automated workflows transformed our legacy systems and reduced operating overhead by 40%.",
    author: "Mohammed Irfan",
    role: "Chief Technology Officer at LogiCorp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    tag: "Enterprise Cloud",
  },
];

const faqs = [
  {
    q: "What engagement models do you offer for software development?",
    a: "We offer dedicated engineering teams (monthly team model), project-based fixed-cost delivery, staff augmentation, and strategic consulting engagements tailored to your roadmap.",
  },
  {
    q: "How fast can HNR Global deploy tech talent or start a new project?",
    a: "Our talent pipeline enables us to onboard pre-vetted engineers within 1 to 2 weeks, while project discovery and sprint kick-offs typically begin within 5 to 7 business days.",
  },
  {
    q: "How do you protect intellectual property and ensure data security?",
    a: "All projects are governed by strict NDAs, bilateral confidentiality agreements, and secure SDLC practices. All intellectual property and code rights transfer 100% to our clients upon code delivery.",
  },
  {
    q: "What geographic locations do you operate from?",
    a: "Our primary delivery centers are located in Hyderabad (India's premier IT hub) and Visakhapatnam, giving our clients a dual-city talent advantage with cost efficiency and business continuity.",
  },
];

const techStack = [
  { name: "Java", category: "Enterprise & Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", category: "AI, ML & Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: ".NET", category: "Enterprise Solutions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Node.js", category: "Scalable API & Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", category: "Frontend UI Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Full-Stack Web Apps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Angular", category: "Enterprise Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue.js", category: "Modern Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "TypeScript", category: "Type-Safe Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Flutter", category: "Cross-Platform Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Docker", category: "Containerization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", category: "Cloud Orchestration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", category: "Cloud Infrastructure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", category: "Cloud Services", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", category: "GCP Cloud Solutions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "PostgreSQL", category: "Relational Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "NoSQL Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section - Full Viewport 100vh */}
      <section className="relative isolate overflow-hidden min-h-screen flex flex-col items-center justify-center bg-[#06152f]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroVideoPlaylist className="w-full h-full object-cover object-center brightness-105 contrast-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06152f]/90 via-[#06152f]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06152f]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full flex-1 mx-auto max-w-6xl px-6 pt-32 md:pt-40 flex flex-col items-center justify-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Enterprise Technology &amp; Talent Partner
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 tracking-tight text-white select-none">
              <span className="block font-serif italic font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90 mb-1 md:mb-2">
                Engineering
              </span>
              <span className="block font-black tracking-wider uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                TOMORROW
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal">
              Shaping the Future of Technology Through Human-Centric Innovation
            </p>
          </Reveal>

          {/* Dual Split Action Cards - Glass + Gradient */}
          <Reveal delay={240} className="w-full max-w-3xl mt-8 sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/companies"
                className="group flex flex-col justify-between gap-10 rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6 backdrop-blur-xl text-left shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200 block">
                    For Companies
                  </span>
                  <span className="mt-2 block text-2xl sm:text-[1.7rem] font-light leading-tight text-white transition-colors">
                    Delivering to Our Client Success
                  </span>
                </div>
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/40 text-white group-hover:bg-white group-hover:text-[#1d4ed8] group-hover:scale-110 shadow-lg transition-all">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/careers"
                className="group flex flex-col justify-between gap-10 rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa] p-5 sm:p-6 text-left shadow-2xl shadow-[#1d4ed8]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#3b82f6]/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200 block">
                    For Job Seekers
                  </span>
                  <span className="mt-2 block text-2xl sm:text-[1.7rem] font-light leading-tight text-white transition-colors">
                    Find Your Next Job
                  </span>
                </div>
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/40 text-white group-hover:bg-white group-hover:text-[#1d4ed8] group-hover:scale-110 shadow-lg transition-all">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats Bar overlapping the hero bottom edge */}
        <div className="relative z-10 w-full mx-auto max-w-6xl px-6 pb-8 md:pb-10">
          <Reveal delay={320}>
            <div className="relative rounded-2xl border border-slate-200/70 bg-white/95 backdrop-blur-xl p-6 shadow-[0_24px_60px_-24px_rgba(2,6,23,0.55)] md:p-8">
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#38bdf8]" />
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] bg-clip-text text-transparent text-3xl md:text-4xl font-black tabular-nums">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                      {s.label}
                    </div>
                    <div className="mt-0.5 text-[11px] font-normal text-slate-500">{s.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee Banner for Core Technologies */}
      <section className="border-y border-border bg-[#f1f6fc] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Technologies We Build With
          </p>
          <Marquee items={techStack} subtitle="Core Stack" />
        </div>
      </section>

      {/* ALL 8 ENTERPRISE SERVICES (Section 2) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            End-to-End Technology &amp; Talent Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed">
            We combine product engineering discipline with deep talent solutions so you get both the high-performance software and the engineering squads to scale it.
          </p>
        </Reveal>

        {/* 8-Card Responsive Grid - 3 cards per row for spacious, clear visibility */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-xl">
                {/* Header Image with overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  {/* Top Gradient Accent Line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#38bdf8] opacity-90 group-hover:opacity-100 transition-opacity" />

                  {/* Glassmorphic Icon Badge */}
                  <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d4ed8]/85 backdrop-blur-md border border-white/30 text-white shadow-lg">
                    <s.icon className="h-5 w-5" />
                  </span>

                  {/* Title Overlay */}
                  <h3 className="absolute bottom-3 left-4 right-4 text-base font-bold text-white leading-snug drop-shadow-sm">
                    {s.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                      {s.eyebrow}
                    </span>
                    <p className="mt-2 text-xs font-semibold text-foreground/90 leading-tight">
                      {s.focus}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-foreground/70 line-clamp-3">
                      {s.body}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60">
                    <Link
                      to={s.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all group-hover:gap-2.5"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION: Enterprise Delivery Model Roadmap (Section 12) */}
      <section className="bg-[#f4f8fe] border-y border-border/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              DELIVERY FRAMEWORK
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Enterprise Delivery Model: 4 Proven Phases
            </h2>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed font-normal">
              A clear delivery framework that guarantees predictability, transparency, and velocity across all client engagements.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-primary/20 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold shadow-inner">
                        <p.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-primary">{p.subtitle}</p>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/75">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Verified Quality Gate
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/delivery"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:from-[#2563eb] hover:to-[#60a5fa] hover:gap-3"
            >
              <span>Explore Full Delivery &amp; Governance Model</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EXTRA SECTION: Technology Expertise Teaser (Section 11) */}
      <section className="bg-background py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  FULL-STACK EXPERTISE
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
                  Engineering Depth Across the Modern Stack
                </h2>
                <p className="mt-4 text-sm sm:text-base text-foreground/75 leading-relaxed font-normal">
                  From frontier Generative AI and low-latency microservices to distributed multi-cloud platforms and enterprise databases, our specialized engineering squads build mission-critical solutions.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:from-[#2563eb] hover:to-[#60a5fa] hover:gap-3"
                  >
                    <span>View Technology Matrix</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-all"
                  >
                    <span>Consult an Architect</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 6 Stack Domain Chips */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {techHighlights.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <Reveal key={t.domain} delay={idx * 50}>
                      <div className="rounded-2xl border border-border bg-card p-5 shadow-xs hover:border-primary/50 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h4 className="text-sm font-bold text-foreground">{t.domain}</h4>
                        </div>
                        <p className="text-xs text-foreground/75 leading-relaxed font-normal">
                          {t.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 13 INDUSTRIES WE SERVE (Section 15) */}
      <section className="bg-[#eef4fb] py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              13 Sector Specializations That Shorten Delivery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed font-normal">
              Deep domain context across regulated industries, heavy manufacturing, financial platforms, and high-tech SaaS.
            </p>
          </Reveal>

          {/* 13 Industry Cards Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3.5">
            {industries.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 30}>
                <div className="group flex flex-col items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-card p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg h-full cursor-default">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono text-primary font-semibold block uppercase">
                      {ind.category}
                    </span>
                    <p className="mt-1 text-xs font-bold leading-snug text-foreground/90 group-hover:text-foreground transition-colors">
                      {ind.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:gap-3 transition-all"
            >
              <span>Explore All 13 Sector Capabilities &amp; Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EXTRA SECTION: Enterprise Engagement Models (Section 13) */}
      <section className="bg-background py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              ENGAGEMENT MODELS
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl text-foreground">
              Flexible Engagement Frameworks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed font-normal">
              Tailored collaboration structures designed to match your budget, roadmap velocity, and operational governance.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 40}>
                <div className="group rounded-2xl border border-primary/15 bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md h-full flex flex-col justify-between">
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3.5">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                      {model.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HNR GLOBAL SECTION */}
      <section className="bg-gradient-to-b from-background via-muted/20 to-background py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            {/* Left Column: Visual with floating stat cards (5 cols) */}
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl bg-card">
                  <img
                    src={about}
                    alt="HNR Global delivery team collaborating"
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="h-[440px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-slate-950/75 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white shadow-lg flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#38bdf8]" />
                    <span>Hyderabad &amp; Visakhapatnam</span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-900/85 backdrop-blur-md p-4 text-white shadow-xl">
                    <div className="grid grid-cols-2 gap-3 divide-x divide-white/10">
                      <div>
                        <div className="text-2xl font-black text-[#38bdf8]">99.4%</div>
                        <div className="text-xs text-slate-300 font-medium">On-Time Sprints</div>
                      </div>
                      <div className="pl-3">
                        <div className="text-2xl font-black text-white">4.9 / 5</div>
                        <div className="text-xs text-slate-300 font-medium">Client Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Content & 4 Feature Cards (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    WHY CHOOSE HNR GLOBAL
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-foreground">
                    Dual-city advantage, global delivery standards
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
                    Operating from Hyderabad (India’s premier IT hub) and Visakhapatnam (emerging tech innovation zone), we combine top-tier engineering talent with operational agility and cost optimization.
                  </p>

                  {/* 4 Feature Cards */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="group rounded-2xl border border-primary/15 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-foreground">Dual-City Talent Synergies</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        Tier-1 engineering depth with resilient multi-center business continuity and high retention.
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-primary/15 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-foreground">Agile Engineering &amp; QA</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        Rigorous 2-week development cadences, automated test coverage, and continuous integration.
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-primary/15 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-foreground">Security &amp; Governance</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        Bilateral NDA protection, RBAC, zero-trust infrastructure, and strict code review SLAs.
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-primary/15 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Award className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-foreground">Senior Architect Delivery</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        Direct access to principal engineers, transparent tracking, and reliable SLA responsiveness.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-[#2563eb] hover:to-[#60a5fa] hover:gap-3 hover:shadow-lg"
                    >
                      <span>About Our Delivery Standards</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="bg-background py-24 border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              SUCCESS STORIES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-foreground">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
              Hear from CTOs and engineering directors who rely on HNR Global for software engineering and tech talent.
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 100}>
                  <div className="relative flex h-full flex-col justify-between rounded-2xl border border-primary/20 bg-card p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                    <div>
                      <div className="flex items-center justify-between">
                        <Quote className="h-8 w-8 text-primary fill-primary/15" />
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {t.tag}
                        </span>
                      </div>

                      <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/80 font-normal">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3.5 border-t border-border/80 pt-5">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="h-12 w-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-foreground truncate">{t.author}</h4>
                        <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#f4f8fe] border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Got Questions?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-foreground/75 leading-relaxed">
              Everything you need to know about partnering with HNR Global PVT LTD.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={faq.q} delay={idx * 60}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold text-base md:text-lg hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-base text-foreground/75 leading-relaxed border-t border-border/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
