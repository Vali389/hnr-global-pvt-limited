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
import aiSolutionsHero from "@/assets/ai-solutions-hero.jpg";
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

// Section 2: Services — Website Overview (All 8 Services with custom imagery)
const services = [
  {
    num: "01",
    icon: Code2,
    title: "Custom Software Development",
    eyebrow: "ENTERPRISE SOFTWARE & CRM",
    body: "ERP, CRM, BI dashboards, workflow automation and legacy modernisation built around your business workflows.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    link: "/services/custom-software-development",
  },
  {
    num: "02",
    icon: Boxes,
    title: "Product Engineering",
    eyebrow: "SaaS & CLOUD ARCHITECTURE",
    body: "MVPs in weeks, full-cycle engineering, optimization and cloud-native architecture on AWS, Azure and GCP.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "/services/product-engineering",
  },
  {
    num: "03",
    icon: Brain,
    title: "AI & Intelligent Solutions",
    eyebrow: "GENERATIVE AI & AUTOMATION",
    body: "Helping organizations move from AI experimentation to practical enterprise solutions, RAG assistants, and automation.",
    image: aiSolutionsHero,
    link: "/services/ai-intelligent-solutions",
  },
  {
    num: "04",
    icon: Cloud,
    title: "Cloud & DevOps",
    eyebrow: "MULTI-CLOUD & KUBERNETES",
    body: "Enterprise cloud engineering, multi-region cloud migrations, automated CI/CD pipelines, and FinOps governance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "/services/cloud-devops",
  },
  {
    num: "05",
    icon: Database,
    title: "Data Engineering & Analytics",
    eyebrow: "DATA PLATFORMS & BI",
    body: "Modern data foundations, Snowflake/Databricks lakehouses, real-time analytics, and automated Power BI dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/services/data-engineering-analytics",
  },
  {
    num: "06",
    icon: Smartphone,
    title: "Mobile Engineering",
    eyebrow: "iOS, ANDROID & FLUTTER",
    body: "Secure, intuitive and scalable mobile applications across iOS, Android, Flutter and React Native with offline sync.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    link: "/services/mobile-engineering",
  },
  {
    num: "07",
    icon: Users,
    title: "Technology Talent Solutions",
    eyebrow: "STAFF AUGMENTATION & SQUADS",
    body: "Permanent hiring, contract staffing, dedicated engineering squads, executive search, and end-to-end recruitment process outsourcing.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    link: "/services/technology-talent-solutions",
  },
  {
    num: "08",
    icon: RefreshCw,
    title: "Digital Transformation",
    eyebrow: "MODERNIZATION & STRATEGY",
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
      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="relative isolate overflow-hidden min-h-screen flex flex-col justify-between pt-28 pb-10 bg-[#06152F] border-b border-blue-900/40">
        {/* Ambient Volumetric Glow Blooms */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <HeroVideoPlaylist className="w-full h-full object-cover object-center brightness-105 contrast-105 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#06152F]/95 via-[#081e42]/85 to-[#002f8a]/80" />
          <div className="absolute top-1/4 right-[10%] w-[700px] h-[700px] rounded-full bg-[#003BB2]/35 blur-[140px]" />
          <div className="absolute top-1/3 right-[18%] w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/20 blur-[110px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#003BB2]/20 blur-[130px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06152F] via-transparent to-transparent z-10" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-20 flex-1 mx-auto max-w-5xl px-6 flex flex-col items-center justify-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-4 rounded-full border border-blue-500/35 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Enterprise Technology &amp; Talent Partner
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight whitespace-pre-line">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                TOMORROW
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-normal">
              Shaping the future of technology through human-centric innovation, resilient enterprise software, and world-class engineering squads.
            </p>
          </Reveal>

          {/* Dual Split Action Cards */}
          <Reveal delay={240} className="w-full max-w-2xl mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/companies"
                className="group flex flex-col justify-between gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 block">
                    For Companies
                  </span>
                  <span className="mt-1.5 block text-lg font-semibold leading-snug text-white transition-colors">
                    Delivering Client Success &amp; Scale
                  </span>
                </div>
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/40 text-white group-hover:bg-white group-hover:text-blue-700 group-hover:scale-110 shadow-lg transition-all">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/careers"
                className="group flex flex-col justify-between gap-5 rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa] p-5 text-left shadow-xl shadow-blue-700/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 block">
                    For Job Seekers
                  </span>
                  <span className="mt-1.5 block text-lg font-semibold leading-snug text-white transition-colors">
                    Find Your Next Career Breakthrough
                  </span>
                </div>
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/40 text-white group-hover:bg-white group-hover:text-blue-700 group-hover:scale-110 shadow-lg transition-all">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Floating Trust Metric Bar (ConfigUSA Style) */}
        <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 mt-12">
          <div className="mx-auto max-w-5xl w-full">
            <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md shadow-elegant ring-1 ring-black/5">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-slate-200/60">
                <div className="group flex flex-col items-center text-center gap-1.5 px-3 py-3.5 transition-colors hover:bg-blue-50/40">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <Users className="h-4 w-4" />
                  </span>
                  <div className="text-xl md:text-2xl font-black tracking-tight leading-none tabular-nums text-gradient-brand">
                    500+
                  </div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Professionals Placed
                  </div>
                </div>

                <div className="group flex flex-col items-center text-center gap-1.5 px-3 py-3.5 transition-colors hover:bg-blue-50/40">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div className="text-xl md:text-2xl font-black tracking-tight leading-none tabular-nums text-gradient-brand">
                    100+
                  </div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Happy Clients
                  </div>
                </div>

                <div className="group flex flex-col items-center text-center gap-1.5 px-3 py-3.5 transition-colors hover:bg-blue-50/40">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <Layers className="h-4 w-4" />
                  </span>
                  <div className="text-xl md:text-2xl font-black tracking-tight leading-none tabular-nums text-gradient-brand">
                    13+
                  </div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Industries Served
                  </div>
                </div>

                <div className="group flex flex-col items-center text-center gap-1.5 px-3 py-3.5 transition-colors hover:bg-blue-50/40">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div className="text-xl md:text-2xl font-black tracking-tight leading-none tabular-nums text-gradient-brand">
                    98.4%
                  </div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Client Retention
                  </div>
                </div>

                <div className="group flex flex-col items-center text-center gap-1.5 px-3 py-3.5 transition-colors hover:bg-blue-50/40 col-span-2 sm:col-span-1">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                    <Rocket className="h-4 w-4" />
                  </span>
                  <div className="text-xl md:text-2xl font-black tracking-tight leading-none tabular-nums text-gradient-brand">
                    24/7
                  </div>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Global Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLIENT / TECH MARQUEE (ConfigUSA Style) ── */}
      <section className="bg-gradient-to-r from-[#f8fafc] via-[#edf4fc] to-[#f8fafc] border-b border-blue-100/80 py-8 sm:py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] text-blue-700 mb-6 sm:mb-8">
            OUR TECH STACK — ENTERPRISE TECHNOLOGIES WE BUILD WITH
          </p>
          <Marquee items={techStack} subtitle="Core Stack" />
        </div>
      </section>

      {/* ── SECTION 3: ALL 8 SERVICES ("WHAT WE DO" - ConfigUSA Style) ── */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#f1f6fc] to-[#e4eef9] border-b border-blue-200/50 relative overflow-hidden">
        {/* Soft Volumetric Background Glows */}
        <div className="pointer-events-none absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-blue-300/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-36 right-1/4 h-96 w-96 rounded-full bg-cyan-300/15 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center text-blue-700">
              <span className="h-px w-6 bg-blue-600" />
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight text-slate-900">
              End-to-End Capabilities That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Drive Outcomes
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base leading-relaxed text-center text-slate-600 font-medium max-w-2xl mx-auto">
              From custom enterprise software to Generative AI, cloud DevOps and specialized engineering pods, we build and scale high-impact solutions.
            </p>
          </Reveal>

          {/* 8-Card Responsive Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <Link
                  to={s.link}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-[0_24px_48px_rgba(29,78,216,0.14)] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 relative"
                >
                  {/* Header Image with Zoom & Dark Gradient */}
                  <div className="relative h-52 overflow-hidden shrink-0 bg-slate-900">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />

                    {/* Frosted Glass Icon Badge */}
                    <span className="absolute top-3 left-3 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300 shadow-md">
                      <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                    </span>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-col flex-1 p-6 pt-5 pb-8">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-blue-600 mb-2.5 leading-tight">
                      {s.eyebrow}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify flex-1 font-medium">
                      {s.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>

                  {/* Shine Swipe */}
                  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
                    <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shine" />
                  </div>

                  {/* Bottom Accent Brand Line */}
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ENTERPRISE DELIVERY MODEL ROADMAP ── */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-[#edf4fc] to-[#f8fafc] border-b border-blue-100/70 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <Reveal className="text-center max-w-4xl mx-auto">
            <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center text-blue-700">
              <span className="h-px w-6 bg-blue-600" />
              Delivery Framework
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight text-slate-900">
              Enterprise Delivery Model:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                4 Proven Phases
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              A clear agile delivery framework that guarantees predictability, transparency, and velocity across all client engagements.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-blue-100/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-elegant">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold shadow-xs group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-black text-slate-300 font-mono">
                        {p.step}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-blue-600">
                      {p.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-600">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    <span>Verified Quality Gate</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/delivery"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:scale-105 hover:gap-3"
            >
              <span>Explore Full Delivery &amp; Governance Model</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 5: FULL-STACK EXPERTISE TEASER ── */}
      <section className="bg-white py-24 border-b border-blue-100/70 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Full-Stack Expertise
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-900 leading-tight">
                  Engineering Depth Across the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                    Modern Stack
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  From frontier Generative AI and low-latency microservices to distributed multi-cloud platforms and enterprise databases, our specialized engineering squads build mission-critical solutions.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:scale-105 hover:gap-3"
                  >
                    <span>View Technology Matrix</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all"
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
                      <div className="rounded-2xl border border-blue-100/80 bg-white p-5 shadow-card hover:border-blue-400/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">{t.domain}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
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

      {/* ── SECTION 6: ALL 13 INDUSTRIES WE SERVE ── */}
      <section className="bg-gradient-to-b from-[#edf4fc] via-[#f1f6fc] to-[#e4eef9] py-24 border-b border-blue-200/50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <Reveal className="text-center max-w-4xl mx-auto">
            <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center text-blue-700">
              <span className="h-px w-6 bg-blue-600" />
              Industries We Serve
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight text-slate-900">
              13 Sector Specializations That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Shorten Delivery
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Deep domain context across regulated industries, banking platforms, manufacturing operations, and high-tech SaaS.
            </p>
          </Reveal>

          {/* 13 Industry Cards Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3.5">
            {industries.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 30}>
                <div className="group flex flex-col items-center justify-between gap-3 rounded-2xl border border-blue-100/80 bg-white p-4 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-elegant h-full cursor-default">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono text-blue-600 font-semibold block uppercase">
                      {ind.category}
                    </span>
                    <p className="mt-1 text-xs font-bold leading-snug text-slate-800 group-hover:text-blue-600 transition-colors">
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
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all"
            >
              <span>Explore All 13 Sector Capabilities &amp; Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 7: FLEXIBLE ENGAGEMENT MODELS ── */}
      <section className="bg-white py-24 border-b border-blue-100/70 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center text-blue-700">
              <span className="h-px w-6 bg-blue-600" />
              Engagement Models
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight text-slate-900">
              Flexible Engagement Frameworks for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Every Need
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Tailored collaboration structures designed to match your budget, roadmap velocity, and operational governance.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 40}>
                <div className="group rounded-2xl sm:rounded-3xl border border-blue-100/80 bg-white p-6 shadow-card transition-all duration-300 hover:border-blue-400 hover:shadow-elegant hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {model.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHY CHOOSE HNR GLOBAL ("WHO WE ARE") ── */}
      <section className="py-24 lg:py-28 bg-gradient-to-b from-white via-[#f0f6fe] to-[#e6f1fc] relative overflow-hidden border-b border-blue-100/50">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-blue-400/12 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            {/* Left Column: Visual with floating stat cards (5 cols) */}
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 shadow-elegant bg-white p-3 group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
                    <img
                      src={about}
                      alt="HNR Global delivery team collaborating"
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Hyderabad &amp; Visakhapatnam</span>
                    </div>

                    {/* Bottom Stats Overlay */}
                    <div className="absolute bottom-4 inset-x-4 z-10 rounded-2xl bg-slate-950/85 backdrop-blur-md p-4 border border-white/15 shadow-2xl text-white">
                      <div className="grid grid-cols-2 gap-3 divide-x divide-white/15">
                        <div>
                          <div className="text-2xl font-black text-cyan-400">99.4%</div>
                          <div className="text-xs text-white/75 font-medium">On-Time Sprints</div>
                        </div>
                        <div className="pl-3">
                          <div className="text-2xl font-black text-white">4.9 / 5</div>
                          <div className="text-xs text-white/75 font-medium">Client Rating</div>
                        </div>
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
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Who We Are
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-900 leading-tight">
                    Dual-City Advantage.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                      Global Delivery Standards.
                    </span>
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    Operating from Hyderabad (India’s premier IT hub) and Visakhapatnam, we combine top-tier engineering talent with operational agility, continuity, and cost efficiency.
                  </p>

                  {/* 4 Feature Cards */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-card hover:shadow-elegant hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-xs">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Dual-City Talent Synergies
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        Tier-1 engineering depth with resilient multi-center business continuity and high talent retention.
                      </p>
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-card hover:shadow-elegant hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-xs">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Agile Engineering &amp; QA
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        Rigorous 2-week development cadences, automated test coverage, and continuous integration pipelines.
                      </p>
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-card hover:shadow-elegant hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-xs">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Security &amp; Governance
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        Bilateral NDA protection, RBAC, zero-trust infrastructure, and strict code review SLAs.
                      </p>
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-card hover:shadow-elegant hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-xs">
                        <Award className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Senior Architect Delivery
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        Direct access to principal engineers, transparent sprint tracking, and reliable SLA responsiveness.
                      </p>
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:gap-3"
                    >
                      <span>More About HNR Global</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: SUCCESS STORIES / TESTIMONIALS ── */}
      <section className="bg-gradient-to-b from-[#f5f9fe] via-[#edf4fc] to-[#f5f9fe] border-b border-blue-100/70 py-24 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center text-blue-700">
              <span className="h-px w-6 bg-blue-600" />
              Success Stories
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight text-slate-900">
              Proven Outcomes for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Real Organizations
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Hear from CTOs and engineering directors who rely on HNR Global for mission-critical software engineering and tech talent.
            </p>
          </Reveal>

          <div className="relative mt-14">
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 100}>
                  <div className="relative flex h-full flex-col justify-between rounded-3xl border border-blue-100/80 bg-white p-7 md:p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-elegant">
                    <div>
                      <div className="flex items-center justify-between">
                        <Quote className="h-8 w-8 text-blue-600 fill-blue-50" />
                        <span className="rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {t.tag}
                        </span>
                      </div>

                      <p className="mt-5 text-sm md:text-base leading-relaxed text-slate-700 font-medium">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="h-12 w-12 rounded-full object-cover border-2 border-blue-200 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-slate-900 truncate">{t.author}</h4>
                        <p className="text-xs text-slate-500 truncate font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FAQ SECTION ── */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-[#f1f6fc] to-[#f8fafc] border-b border-blue-100/80 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center text-blue-700">
              <span className="h-px w-6 bg-blue-600" />
              Got Questions?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight text-slate-900">
              Clear Answers for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Every Partnership
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Everything you need to know about partnering with HNR Global PVT LTD.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={faq.q} delay={idx * 60}>
                  <div className="rounded-2xl border border-blue-100/80 bg-white shadow-card overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold text-base md:text-lg text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
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

