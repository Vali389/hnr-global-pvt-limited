import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Rocket,
  Heart,
  GraduationCap,
  Coffee,
  Send,
  Star,
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  PhoneCall,
  Laptop,
  Coins,
} from "lucide-react";
import bgCareers from "@/assets/bg-careers-building.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Open Roles | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "Join HNR Global PVT LTD — build world-class software, grow your career, and work with industry experts in Visakhapatnam and Hyderabad.",
      },
      { property: "og:title", content: "Careers & Open Roles | HNR Global PVT LTD" },
      {
        property: "og:description",
        content: "Explore exciting career opportunities at HNR Global across engineering, design, AI, and recruitment.",
      },
    ],
  }),
  component: Careers,
});

const perks = [
  {
    icon: Rocket,
    title: "Fast-Track Growth",
    desc: "Clear career ladders, quarterly reviews, and internal mobility across projects and teams.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    desc: "₹25,000/year per employee for certifications, courses, conferences, and books.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive medical cover for you and your family, plus mental wellness support.",
  },
  {
    icon: Coffee,
    title: "Flexible Culture",
    desc: "Hybrid work options, flexible hours, and a no-micromanagement philosophy.",
  },
  {
    icon: Users,
    title: "Diverse Teams",
    desc: "Work alongside engineers, designers, product managers, and domain experts from 10+ industries.",
  },
  {
    icon: Star,
    title: "Performance Bonus",
    desc: "Transparent incentive structure with project bonuses and referral rewards.",
  },
];

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  compensation: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  offerings: string[];
}

const openings: JobOpening[] = [
  {
    id: "sr-fullstack-eng",
    title: "Senior Full Stack Engineer",
    department: "Software Engineering",
    location: "Visakhapatnam / Hybrid",
    type: "Full-Time",
    experience: "4–7 years",
    compensation: "Competitive + Performance Bonus",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    description:
      "Lead end-to-end feature architecture and delivery on high-throughput enterprise SaaS platforms. You will design fault-tolerant microservices, mentor junior engineers, and partner directly with global enterprise stakeholders.",
    responsibilities: [
      "Architect and ship scalable web apps using React, Next.js, and Node.js microservices.",
      "Design normalized relational databases and optimize complex SQL queries on PostgreSQL.",
      "Collaborate with DevOps engineers on AWS container orchestration and CI/CD pipelines.",
      "Conduct code reviews, drive architectural RFCs, and establish testing standards.",
    ],
    requirements: [
      "4+ years of hands-on experience building production full-stack systems.",
      "Strong proficiency in TypeScript, modern React, state management, and Node.js.",
      "Experience with cloud services (AWS S3, ECS, RDS, Lambda) and Docker.",
      "Excellent problem-solving skills and clear verbal communication.",
    ],
    offerings: [
      "Competitive base salary with annual performance incentives.",
      "Flexible hybrid working model (2 days office / 3 days remote).",
      "Comprehensive family health insurance + wellness coverage.",
      "₹25,000 annual professional development stipend.",
    ],
  },
  {
    id: "flutter-dev",
    title: "Flutter Mobile Developer",
    department: "Mobile Engineering",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "2–5 years",
    compensation: "Market Leading CTC",
    skills: ["Flutter", "Dart", "Firebase", "REST / GraphQL", "BLoC", "CI/CD"],
    description:
      "Build silky-smooth, 60fps cross-platform mobile applications for iOS & Android. You will work on mission-critical fintech, healthtech, and logistics consumer apps used by thousands of daily users.",
    responsibilities: [
      "Develop cross-platform native-feeling applications using Flutter and Dart.",
      "Implement robust state management using BLoC or Riverpod architecture.",
      "Integrate complex RESTful APIs, WebSockets, payment gateways, and push notifications.",
      "Manage release cycles, TestFlight builds, and Google Play Console deployments.",
    ],
    requirements: [
      "2+ years of dedicated commercial Flutter & Dart development.",
      "Demonstrated track record of live apps published to the App Store or Google Play.",
      "Experience with secure offline caching, SQLite, and biometric authentication.",
      "Strong aesthetic sensibility and adherence to Material Design & Apple HIG.",
    ],
    offerings: [
      "Top-of-market salary benchmarked to tech hub standards.",
      "Latest M-series MacBook Pro development machine.",
      "Flexible hours with a focus on outcome over seat time.",
      "Fast-track promotion path into Mobile Lead roles.",
    ],
  },
  {
    id: "devops-cloud-eng",
    title: "DevOps & Cloud Infrastructure Engineer",
    department: "Infrastructure & Platform",
    location: "Visakhapatnam",
    type: "Full-Time",
    experience: "3–6 years",
    compensation: "Attractive Industry Package",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"],
    description:
      "Design, deploy, and automate zero-downtime cloud infrastructure across AWS, Azure, and GCP environments. You will be the guardian of enterprise security, high availability, and automated deployments.",
    responsibilities: [
      "Define and provision cloud resources using Terraform and Infrastructure-as-Code.",
      "Architect and operate autoscaling Kubernetes clusters (EKS / GKE) for high resilience.",
      "Build and maintain secure GitHub Actions CI/CD pipelines with automated security scans.",
      "Setup centralized observability, distributed tracing, and automated alerting.",
    ],
    requirements: [
      "3+ years managing multi-tier Linux production environments in AWS or GCP.",
      "Hands-on production Kubernetes orchestration and Helm chart management.",
      "Experience with SOC 2 / ISO 27001 hardening and secrets management (HashiCorp Vault).",
      "Solid scripting skills in Bash or Python for automated operations.",
    ],
    offerings: [
      "Comprehensive compensation with on-call premium allowance.",
      "100% sponsored cloud certifications (AWS Solutions Architect, CKA, etc.).",
      "Premium health insurance for self and dependents.",
      "Collaborative engineering culture with zero red tape.",
    ],
  },
  {
    id: "ai-ml-eng",
    title: "AI & Machine Learning Engineer",
    department: "AI & Data Solutions",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "2–4 years",
    compensation: "High Equity / Tier-1 CTC",
    skills: ["Python", "PyTorch", "LLMs", "RAG", "Vector DBs", "FastAPI", "MLOps"],
    description:
      "Build intelligent enterprise automation pipelines, custom Retrieval-Augmented Generation (RAG) knowledge assistants, and predictive analytics models for Fortune 500 clients.",
    responsibilities: [
      "Develop and deploy enterprise RAG pipelines using LangChain, LlamaIndex, and vector databases.",
      "Fine-tune open-weight models (Llama 3, Mistral) for specific domain vocabularies.",
      "Expose high-throughput inference APIs using FastAPI, Docker, and vLLM / Triton.",
      "Build automated data ingestion, chunking, and continuous model evaluation pipelines.",
    ],
    requirements: [
      "Strong foundation in Python, linear algebra, statistics, and machine learning fundamentals.",
      "Experience implementing production GenAI / LLM applications and prompt engineering.",
      "Familiarity with vector databases (Pinecone, Qdrant, pgvector) and embedding models.",
      "Comfortable reading recent ML research papers and translating them into code.",
    ],
    offerings: [
      "Access to dedicated GPU compute clusters for experimentation.",
      "Mentorship from veteran AI researchers and senior architects.",
      "Attendance sponsorship at leading AI & tech conferences.",
      "High-visibility impact on strategic enterprise contracts.",
    ],
  },
  {
    id: "it-recruiter",
    title: "Senior IT Recruiter (Technical Hiring)",
    department: "Talent Acquisition",
    location: "Visakhapatnam / Hyderabad",
    type: "Full-Time",
    experience: "2–5 years",
    compensation: "Base + Lucrative Placement Incentives",
    skills: ["Tech Sourcing", "LinkedIn Recruiter", "Boolean Search", "Screening", "Offer Negotiation"],
    description:
      "Drive end-to-end technical recruitment for high-profile clients across India and global markets. You will source, assess, and place elite software engineers, architects, and technology leaders.",
    responsibilities: [
      "Manage full hiring lifecycle: sourcing, tech screening, interview scheduling, and closing.",
      "Build proactive candidate talent pipelines across Full Stack, DevOps, AI, and Cloud niches.",
      "Partner with client hiring managers to calibrate job descriptions and salary bands.",
      "Deliver an exceptional candidate experience with timely communication and feedback.",
    ],
    requirements: [
      "2+ years of technical recruitment experience within IT services or staffing agencies.",
      "Deep understanding of modern tech stacks, roles, and software engineering terminology.",
      "Proven capability to source passive candidates via LinkedIn, GitHub, and niche communities.",
      "High energy, articulate communication, and strong negotiation skills.",
    ],
    offerings: [
      "Uncapped monthly and quarterly placement incentive structure.",
      "Modern AI sourcing tools and LinkedIn Recruiter enterprise seats provided.",
      "Clear pathway to Talent Acquisition Lead and Client Partner roles.",
      "Friendly, energetic, and supportive team environment.",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "Senior UI/UX & Product Designer",
    department: "Design & Innovation",
    location: "Visakhapatnam / Remote",
    type: "Full-Time",
    experience: "2–5 years",
    compensation: "Competitive Design CTC",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing", "Tailwind"],
    description:
      "Craft visually stunning, accessible, and intuitive digital interfaces for complex enterprise SaaS tools and consumer mobile apps. You will collaborate closely with product managers and engineers from napkin sketch to final pixel.",
    responsibilities: [
      "Create interactive high-fidelity prototypes, wireframes, and design flows in Figma.",
      "Maintain and expand comprehensive design systems with tokens, variants, and component states.",
      "Conduct usability tests and user interviews to turn qualitative feedback into product clarity.",
      "Work side-by-side with frontend engineers to ensure 100% design fidelity in production.",
    ],
    requirements: [
      "Portfolio showcasing end-to-end SaaS or mobile product design casework.",
      "Mastery of Figma (auto-layout, components, variables, interactive prototypes).",
      "Deep empathy for user workflows combined with sharp visual typography and layout skills.",
      "Basic knowledge of HTML/CSS constraints is a strong plus.",
    ],
    offerings: [
      "Direct creative ownership over high-profile client applications.",
      "Latest design hardware and premium Figma/Adobe Creative Cloud subscriptions.",
      "Hybrid/Remote flexibility with balanced work-life boundaries.",
      "Health coverage, learning allowances, and team offsites.",
    ],
  },
];

function JobDetailModal({
  job,
  onClose,
}: {
  job: JobOpening | null;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl border border-border bg-background shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="relative border-b border-border bg-muted/40 p-6 md:p-8 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {job.department}
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Actively Hiring
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            {job.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-xs md:text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> {job.type}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-primary" /> {job.experience}
            </span>
            <span className="flex items-center gap-1.5">
              <Coins className="h-4 w-4 text-primary" /> {job.compensation}
            </span>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
          {/* Overview */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-primary">
              Role Overview
            </h3>
            <p className="mt-2.5 text-base text-foreground/80 leading-relaxed font-normal">
              {job.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-primary">
              What You'll Do
            </h3>
            <ul className="mt-3 space-y-2.5">
              {job.responsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-primary">
              What We're Looking For
            </h3>
            <ul className="mt-3 space-y-2.5">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Tech Stack */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-primary">
              Required Tech & Domain Skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Offerings / Perks */}
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary">
              What We Offer You
            </h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {job.offerings.map((off) => (
                <li key={off} className="flex items-center gap-2.5 text-sm text-foreground/85">
                  <Sparkles className="h-4 w-4 text-primary shrink-0" />
                  <span>{off}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form Box */}
          <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Apply for this position
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                  Takes less than 2 minutes. Our recruitment squad replies within 24 hours.
                </p>
              </div>
              <a
                href={`mailto:hr.hnrglobal@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                Or Email Direct <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="mt-3 text-lg font-bold text-foreground">
                  Application Received!
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thank you, <strong>{formData.name || "Candidate"}</strong>. Our talent team has received your application for <strong>{job.title}</strong> and will reach out to schedule an introductory call.
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="rounded-xl bg-primary px-5 py-2 text-xs font-semibold text-white"
                  >
                    Back to Opportunities
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1">
                      Years of Experience *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 4.5 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1">
                    LinkedIn / GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile or portfolio"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1">
                    Brief Note / Highlight
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're most excited to work on..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>Your data is confidential and never shared</span>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/90 transition-all hover:scale-105 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Application"} <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({
  job,
  onSelect,
}: {
  job: JobOpening;
  onSelect: (job: JobOpening) => void;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
      {/* Top indicator glow line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              {job.department}
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
              Full-Time
            </span>
          </div>

          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>

          <div className="mt-2.5 flex flex-wrap gap-4 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-primary" /> {job.experience}
            </span>
            <span className="flex items-center gap-1.5">
              <Coins className="h-3.5 w-3.5 text-primary" /> {job.compensation}
            </span>
          </div>

          <p className="mt-3 text-sm text-foreground/75 line-clamp-2 leading-relaxed font-normal">
            {job.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.skills.map((s) => (
              <span
                key={s}
                className="rounded-md bg-muted/80 px-2.5 py-1 text-xs font-medium text-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 flex items-center md:flex-col gap-2">
          <button
            onClick={() => onSelect(job)}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 hover:scale-105 transition-all cursor-pointer"
          >
            View Role & Apply <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Careers & Culture"
        title="Build the future of enterprise technology with us"
        subtitle="Join a high-performance team delivering world-class software across 15+ industries. Grow fast, learn daily, and do the best work of your career."
        bgImage={bgCareers}
      />

      {/* Why join us — perks */}
      <section className="relative overflow-hidden py-24">
        {/* subtle dot-grid background */}
        <div className="absolute inset-0 section-dots opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              WHY HNR GLOBAL
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              More than a job — a career that moves
            </h2>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed font-normal">
              We invest heavily in our people. Whether you're a fresh graduate or a seasoned
              engineer, you'll find a clear growth path, a collaborative culture, and meaningful
              work.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <article className="card-elevated group h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Life at HNR strip */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030e24] via-[#05183d] to-[#020b1e] py-24 text-white">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
                LIFE AT HNR GLOBAL
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
                High standards, human-first culture
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                We believe that great software is built by happy, empowered people. That's why
                we've built a culture that balances high performance with genuine care for our
                team members — from flexible hours to leadership access.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {[
                  "Flat hierarchy — your ideas reach decision-makers directly",
                  "Agile engineering squads with end-to-end product ownership",
                  "Hackathons, internal tech talks, and innovation sprints",
                  "Direct mentorship and open-door policy with senior architects",
                  "Annual team offsites, hackfests, and celebration events",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["15+", "Industries Served"],
                  ["50+", "Custom Systems Shipped"],
                  ["500+", "Talent Placed Globally"],
                  ["95%", "Retention Rate"],
                ].map(([val, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md hover:border-sky-400/40 transition-colors"
                  >
                    <p className="text-3xl md:text-4xl font-extrabold text-white">{val}</p>
                    <p className="mt-2 text-xs md:text-sm text-slate-300">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div className="absolute inset-0 section-dots opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              Open Positions
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Explore our current open mandates. Don't see your exact role? Email your CV directly to{" "}
              <a
                href="mailto:hr.hnrglobal@gmail.com"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                hr.hnrglobal@gmail.com
              </a>{" "}
              — we always welcome talented technologists.
            </p>
          </Reveal>

          <div className="mt-14 space-y-5">
            {openings.map((job, i) => (
              <Reveal key={job.id} delay={i * 60}>
                <JobCard job={job} onSelect={(j) => setSelectedJob(j)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <JobDetailModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-900 py-20 text-white text-center">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
              Ready to make your next career move?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-blue-100 font-normal">
              Send your CV directly to our HR team or ping us on WhatsApp — we review and respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hr.hnrglobal@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-primary transition-transform hover:scale-105 shadow-lg"
              >
                <Send className="h-4 w-4" /> Email Your CV
              </a>
              <a
                href="https://wa.me/919177111311"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 hover:scale-105"
              >
                WhatsApp HR Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
