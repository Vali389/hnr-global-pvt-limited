import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
  Zap,
  MapPin,
  Award,
  CheckCircle2,
  TrendingUp,
  Globe,
  HeartHandshake,
} from "lucide-react";
import about from "@/assets/about.jpg";
import bgAbout from "@/assets/bg-about.jpg";
import aiAdvantage from "@/assets/ai-advantage.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HNR Global PVT LTD | Who We Are" },
      {
        name: "description",
        content:
          "HNR Global PVT LTD bridges innovative technology and real business challenges from Hyderabad and Visakhapatnam.",
      },
      { property: "og:title", content: "About HNR Global PVT LTD" },
      {
        property: "og:description",
        content: "Our mission, vision, values and the people-first principle behind our delivery.",
      },
    ],
  }),
  component: About,
});

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "8+", label: "Years of Excellence" },
  { value: "99.4%", label: "On-Time Delivery" },
  { value: "2", label: "Innovation Hubs" },
];

const pillars = [
  {
    icon: Target,
    title: "Who We Are",
    body: "HNR Global PVT LTD is a leading IT solutions company working with global enterprises to deliver the next level of digital success. Our diligent approach and cutting-edge solutions make us the partner of choice for organisations seeking world-class IT services.",
  },
  {
    icon: Zap,
    title: "What We Do",
    body: "We provide a full suite of IT transformation services — from enterprise-wide BPM to tailored CRM, custom software development, and product engineering. We also drive talent transformation through specialist recruitment and staffing solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Why We Care",
    body: "We impact thousands of people every day through our products and services. We work with innovative clients making a real difference, and we deeply value every team member who helps deliver those outcomes.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We stay ahead of technology curves to future-proof every solution we deliver.",
  },
  {
    icon: Users,
    title: "Client Success",
    desc: "Your growth is our most important success metric. We are invested in your outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Obsession",
    desc: "Every line of code, every hire, every deliverable meets globally recognised standards.",
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    desc: "Rapid iteration, continuous improvement, and measurable outcomes — every sprint.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "Local expertise from two innovation hubs, delivering to clients across the world.",
  },
  {
    icon: TrendingUp,
    title: "People First",
    desc: "Our greatest asset is our people. We invest in growth, culture and well-being.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Bringing unique solutions to life with people & processes"
        subtitle="A trusted partner for companies seeking cutting-edge software solutions and top-tier tech talent — powered by a people-first principle."
        bgImage={bgAbout}
      />

      {/* ── STORY + STATS ── */}
      <section className="relative bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            {/* Left: image with floating badge */}
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
                  <img
                    src={about}
                    alt="HNR Global team collaborating"
                    className="h-[480px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                  {/* Location badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 rounded-xl border border-white/20 bg-slate-950/75 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    <MapPin className="h-4 w-4 text-sky-400" />
                    Hyderabad &amp; Visakhapatnam
                  </div>

                  {/* Award badge */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-900/85 backdrop-blur-md p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                        <Award className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">ISO 9001:2015 Certified</p>
                        <p className="text-xs text-slate-300">Global delivery standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: story text + stats */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  OUR STORY
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-foreground leading-tight">
                  Solutions that deliver — at every scale
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/75 font-normal">
                  HNR Global PVT LTD brings proven delivery experience and an extensive network of expert engineers to help clients achieve their goals. Our highly scalable solutions are made possible by processes honed over years of focus and effort.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/75 font-normal">
                  With teams of highly-trained engineers, deep industry sector knowledge and ongoing technology research, we help clients create custom software that improves operations and opens new markets — adapting alongside them as they evolve.
                </p>

                {/* Stats row */}
                <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  {stats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 80}>
                      <div className="group rounded-2xl border border-primary/15 bg-card p-5 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="text-2xl font-black text-primary">{s.value}</div>
                        <div className="mt-1 text-xs font-medium text-foreground/65 leading-snug">{s.label}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO / WHAT / WHY ── */}
      <section className="bg-muted/40 py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              AT A GLANCE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              Built on purpose, powered by people
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
              Three pillars that define everything we do at HNR Global.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground/75 font-normal flex-1">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              MISSION & VISION
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              Where we stand and where we're headed
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Mission — dark navy card */}
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#041f54] via-[#0a2d7a] to-[#020b1e] p-10 text-white shadow-2xl h-full">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-sky-300">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-white tracking-tight">Our Mission</h3>
                  <div className="mt-3 h-1 w-12 rounded-full bg-sky-400" />
                  <p className="mt-5 text-base leading-relaxed text-slate-200 font-normal">
                    To empower businesses through innovative software development, strategic product engineering and world-class recruitment solutions that accelerate digital transformation and drive sustainable growth.
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {["Accelerate digital adoption", "Build world-class products", "Connect talent with opportunity"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Vision — light card */}
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-10 shadow-sm h-full transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-foreground tracking-tight">Our Vision</h3>
                <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
                <p className="mt-5 text-base leading-relaxed text-foreground/75 font-normal">
                  To be the preferred technology partner for global enterprises, recognised for excellence in product development, operational efficiency, and talent acquisition across every industry we serve.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Global technology leadership", "Operational excellence at scale", "Premier talent ecosystem"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className="bg-muted/40 py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              OUR VALUES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              What drives us every day
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
              Six core values that shape our culture, our work, and our relationships.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group flex h-full gap-5 rounded-2xl border border-primary/15 bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">{v.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70 font-normal">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL CITY CULTURE ── */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            {/* Right: image */}
            <div className="lg:col-span-5 lg:order-2 relative">
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
                  <img
                    src={aiAdvantage}
                    alt="HNR Global Hyderabad and Visakhapatnam delivery centres"
                    className="h-[440px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-900/80 backdrop-blur-md p-4 grid grid-cols-2 gap-4 divide-x divide-white/10">
                    <div>
                      <div className="text-2xl font-black text-primary">8+</div>
                      <div className="text-xs text-slate-300">Years Operating</div>
                    </div>
                    <div className="pl-4">
                      <div className="text-2xl font-black text-white">4.9/5</div>
                      <div className="text-xs text-slate-300">Client Rating</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Left: content */}
            <div className="lg:col-span-7 lg:order-1">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  OUR CULTURE
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-foreground leading-tight">
                  Dual-city roots, global delivery standards
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/75 font-normal">
                  Operating from Hyderabad — India's premier IT hub — and Visakhapatnam, an emerging tech innovation zone, we combine diverse talent pools with operational agility, business continuity, and local insight backed by global standards.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: CheckCircle2, text: "ISO 9001:2015 certified delivery processes" },
                    { icon: CheckCircle2, text: "Agile & Scrum-driven sprint cadences" },
                    { icon: CheckCircle2, text: "Automated QA and code review at every stage" },
                    { icon: CheckCircle2, text: "GDPR and data security compliance" },
                    { icon: CheckCircle2, text: "Senior-led engineering teams on every project" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm md:text-base text-foreground/80 font-normal">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:gap-3 hover:shadow-md"
                  >
                    Explore Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
                  >
                    Get In Touch
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
