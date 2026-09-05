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
} from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";
import about from "@/assets/about.jpg";
import svcAI from "@/assets/svc-ai.jpg";
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
          "HNR Global PVT LTD delivers custom software, product engineering, mobile apps, AI and IT recruitment from Visakhapatnam and Hyderabad.",
      },
      { property: "og:title", content: "HNR Global PVT LTD | Technology Partner" },
      {
        property: "og:description",
        content:
          "Custom software, product engineering, digital transformation and IT staffing for enterprises across 15+ sectors.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "50+", label: "Successful product launches" },
  { value: "100+", label: "Enterprise clients served" },
  { value: "500+", label: "Tech professionals placed" },
  { value: "95%", label: "Client retention rate" },
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    eyebrow: "ENTERPRISE SOFTWARE & CRM",
    body: "ERP, CRM, BI dashboards, workflow automation and legacy modernisation built around your business.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    link: "/services/custom-software-development",
  },
  {
    icon: Boxes,
    title: "Product Engineering",
    eyebrow: "SaaS & CLOUD ARCHITECTURE",
    body: "MVPs in weeks, full-cycle engineering, optimisation and cloud-native architecture on AWS, Azure and GCP.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "/services/product-engineering",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    eyebrow: "iOS, ANDROID & FLUTTER",
    body: "Native iOS and Android plus cross-platform apps in Flutter and React Native, built to scale.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    link: "/services/mobile-app-development",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Solutions",
    eyebrow: "GENERATIVE AI & AUTOMATION",
    body: "Helping organizations adopt Generative AI, intelligent automation, and AI-powered business solutions.",
    image: svcAI,
    link: "/services/ai-intelligent-solutions",
  },
  {
    icon: Users,
    title: "IT Recruitment & Staffing",
    eyebrow: "TALENT & STAFF AUGMENTATION",
    body: "Permanent hiring, contract staffing, executive search, campus recruitment and full RPO.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    link: "/services/it-recruitment-staffing",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    eyebrow: "STRATEGY & ROADMAPPING",
    body: "Assess your landscape, define the roadmap and execute transformation with minimal disruption.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "/services/digital-transformation",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery & Strategy",
    description: "We align on business goals, map out technical architecture, and establish sprint deliverables with clear KPIs.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Architecture & Design",
    description: "Creating scalable cloud-native architectures, intuitive UX prototypes, and modular codebase foundations.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Agile Engineering & QA",
    description: "Iterative two-week development sprints with automated testing, continuous integration, and regular code reviews.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deployment & Scaling",
    description: "Seamless production rollout, zero-downtime deployment pipelines, 24/7 SLA support, and continuous enhancement.",
  },
];

const testimonials = [
  {
    quote: "The software engineering and DevOps implementation by HNR Global was exceptional! The hands-on architecture and zero-downtime microservices helped us scale smoothly across regions.",
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
    quote: "Best enterprise technology consulting partner! Their cloud-native modernization and automated workflows transformed our legacy systems and reduced operating overhead by 40%.",
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
    a: "All projects are governed by strict NDAs, ISO 9001:2015 processes, and GDPR-compliant security practices. All IP rights belong 100% to our clients upon code delivery.",
  },
  {
    q: "What geographic locations do you operate from?",
    a: "Our primary delivery centers are located in Hyderabad (India's premier IT hub) and Visakhapatnam, giving our clients a dual-city talent advantage with cost efficiency and business continuity.",
  },
];

const topics = [
  { icon: Brain, label: "Artificial intelligence (AI)" },
  { icon: Cloud, label: "Cloud & hybrid IT" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Database, label: "Data analytics" },
  { icon: Cpu, label: "Quantum computing" },
  { icon: Boxes, label: "Supply chain ecosystems" },
];

const endToEnd = [
  "Business consulting",
  "Systems integration",
  "Managed IT services",
  "Application services",
  "Infrastructure services",
  "Business process services",
];

const industries = [
  { icon: Landmark, label: "Banking & Capital Markets" },
  { icon: Radio, label: "Communications & Media" },
  { icon: Zap, label: "Energy & Utilities" },
  { icon: Flame, label: "Oil & Gas" },
  { icon: Building2, label: "Government" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: FileText, label: "Insurance" },
  { icon: FlaskConical, label: "Life Sciences" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail & Consumer" },
  { icon: Orbit, label: "Space & Technology" },
  { icon: Truck, label: "Transportation & Logistics" },
  { icon: Cloud, label: "Cloud & IT Services" },
];

const techStack = [
  {
    name: "Java",
    category: "Enterprise & Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    category: "AI, ML & Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: ".NET",
    category: "Enterprise Solutions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Node.js",
    category: "Scalable API & Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    category: "Frontend UI Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Full-Stack Web Apps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Angular",
    category: "Enterprise Web",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue.js",
    category: "Modern Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "TypeScript",
    category: "Type-Safe Systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Flutter",
    category: "Cross-Platform Mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    category: "Cloud Orchestration",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Azure",
    category: "Cloud Services",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Google Cloud",
    category: "GCP Cloud Solutions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    category: "NoSQL Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section - Full Viewport 100vh like Collabera */}
      <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-[#030914]">
        {/* Crystal Clear Background Video covering full 100vh */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroVideoPlaylist className="w-full h-full object-cover object-center brightness-105 contrast-105" />
          {/* Subtle directional gradient: dark on left for text contrast, 100% transparent on right for video clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#030914]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Hero Content - Clean, Iconic & High Impact like Collabera */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-36 pb-20 md:pt-44 md:pb-28 w-full flex flex-col items-center text-center">
          <Reveal>
            <h1 className="tracking-tight text-white select-none">
              <span className="block font-serif italic font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white/90 mb-1 md:mb-2">
                Engineering
              </span>
              <span className="block font-black tracking-wider uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                TOMORROW
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal">
              Empowering global enterprises with elite IT talent, scalable software engineering, and transformative digital solutions.
            </p>
          </Reveal>

          {/* Dual Split Action Cards */}
          <Reveal delay={220} className="w-full max-w-2xl mt-8 sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/services"
                className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/95 hover:bg-white text-[#030914] backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/25 text-left border border-white/40"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0052cc] block">
                    For Enterprises
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#0f172a] block mt-1 group-hover:text-[#0052cc] transition-colors">
                    Hire Specialized Talent &rarr;
                  </span>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0052cc]/10 text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/careers"
                className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/50 text-left"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#38bdf8] block">
                    For Tech Professionals
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white block mt-1 group-hover:text-[#38bdf8] transition-colors">
                    Explore High-Growth Roles &rarr;
                  </span>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#38bdf8] group-hover:text-[#030914] transition-all">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee Banner for Technologies */}
      <section className="border-y border-border bg-muted/40 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Technologies We Build With
          </p>
          <Marquee items={techStack} subtitle="Core Stack" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            End-to-End Technology & Talent Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed">
            We combine product engineering discipline with deep recruitment expertise so you get both the software and the people to scale it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-card via-card to-primary/[0.03] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:to-primary/[0.08]">
                {/* Header Image with overlay & glass icon */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Top Gradient Line Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Glassmorphic Icon Badge */}
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                    <s.icon className="h-5 w-5" />
                  </span>

                  {/* Title Overlay */}
                  <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white leading-snug drop-shadow-sm">
                    {s.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      {s.eyebrow}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-foreground/75">
                      {s.body}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      to={s.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEW SECTION: How We Work (Delivery Roadmap) */}
      <section className="bg-muted/30 border-y border-border/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Delivery Process
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Proven 4-step engineering roadmap
            </h2>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed">
              From initial roadmap discovery to post-launch scaling, our agile delivery process guarantees transparency, code quality, and predictable milestones.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, idx) => (
              <Reveal key={p.step} delay={idx * 100}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-primary/20 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold shadow-inner">
                        <p.icon className="h-6 w-6" />
                      </span>
                      <span className="text-3xl font-black text-primary/25 group-hover:text-primary/40 transition-colors">{p.step}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/75">{p.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Sprint Verified
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION (Matching reference structure with website theme colors) */}
      <section className="bg-background py-24 border-y border-border">
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

          {/* Carousel container with side arrows */}
          <div className="relative mt-16">
            {/* Left Nav Arrow */}
            <button
              type="button"
              aria-label="Previous testimonial"
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Testimonial Cards Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 100}>
                  <div className="relative flex h-full flex-col justify-between rounded-2xl border border-primary/20 bg-card p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                    <div>
                      {/* Quote Icon & Tag */}
                      <div className="flex items-center justify-between">
                        <Quote className="h-8 w-8 text-primary fill-primary/15" />
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {t.tag}
                        </span>
                      </div>

                      {/* Testimonial Quote */}
                      <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/80 font-normal">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Row with Avatar & Rating */}
                    <div className="mt-8 flex items-center gap-3.5 border-t border-border/80 pt-5">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="h-12 w-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-foreground truncate">{t.author}</h4>
                        <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                        <div className="mt-1 flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              aria-label="Next testimonial"
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <span className="h-2 w-8 rounded-full bg-primary transition-all duration-300" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
        </div>
      </section>

      {/* Industries We Serve - Cards Grid */}
      <section className="bg-muted/40 py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Sector Depth That Shortens Delivery
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 50}>
                <div className="group flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-card px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:bg-primary/5 cursor-default">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold leading-snug text-foreground/80 group-hover:text-foreground transition-colors">
                    {ind.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
            >
              Explore all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* REDESIGNED: Why Choose HNR Global Section */}
      <section className="bg-gradient-to-b from-background via-muted/20 to-background py-28 border-t border-border">
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
                    <MapPin className="h-4 w-4 text-sky-400" />
                    <span>Hyderabad & Visakhapatnam</span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-900/85 backdrop-blur-md p-4 text-white shadow-xl">
                    <div className="grid grid-cols-2 gap-3 divide-x divide-white/10">
                      <div>
                        <div className="text-2xl font-black text-sky-400">99.4%</div>
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
                      <h4 className="mt-3.5 text-base font-bold text-foreground">Agile Engineering & QA</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        Rigorous 2-week development cadences, automated test coverage, and continuous integration.
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-primary/15 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-foreground">ISO & Security Compliance</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        ISO 9001:2015 certified workflows, GDPR compliance, and strict NDA-backed data protection.
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-primary/15 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Award className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-foreground">Senior Architect Delivery</h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                        Direct access to principal engineers, transparent tracking, and reliable 24/7 SLA responsiveness.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:gap-3 hover:shadow-md"
                    >
                      About Our Delivery Standards <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Frequently Asked Questions (FAQ) */}
      <section className="bg-muted/30 border-t border-border py-24">
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
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold text-base md:text-lg hover:text-primary transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""
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
