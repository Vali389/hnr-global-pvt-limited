import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight,
  Globe2,
  Linkedin,
  Twitter,
  Instagram,
  FileCheck,
  Headphones,
} from "lucide-react";
import bgContact from "@/assets/bg-contact.jpeg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "Get in touch with HNR Global PVT LTD. Delivery centers in Visakhapatnam and Hyderabad. Contact us for custom software, product engineering, and IT staffing.",
      },
      { property: "og:title", content: "Contact Us | HNR Global PVT LTD" },
      {
        property: "og:description",
        content:
          "Start a conversation with our technology experts in Visakhapatnam and Hyderabad.",
      },
    ],
  }),
  component: Contact,
});

const officeLocations = [
  {
    city: "Visakhapatnam (Headquarters)",
    badge: "Primary Delivery Center",
    address: "DNo. 5-138, 1st street, Near:Postoffice, Simhachalam, Visakhapatnam. 530028.",
    hours: "Mon – Fri: 9:00 AM – 7:30 PM IST",
    phone: "+91-9177111311",
    email: "info@hnrglobal.tech",
    mapUrl: "https://maps.app.goo.gl/odJ32fdL9ChEiUGE7",
    embedMapUrl: "https://maps.google.com/maps?q=DNo.%205-138,%201st%20street,%20Near%20Postoffice,%20Simhachalam,%20Visakhapatnam%20530028&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Hyderabad Hub",
    badge: "Tech & Talent Center",
    address: "AR Brindavan Teachers Colony Rd, Raghavendra Colony, Ramachandrapuram, Hyderabad, Telangana 502032",
    hours: "Mon – Fri: 9:30 AM – 7:00 PM IST",
    phone: "+91-9177111311",
    email: "hr@hnrglobal.tech",
    mapUrl: "https://maps.app.goo.gl/ZCY9vjFUL5MoPWAX9?g_st=iw",
    embedMapUrl: "https://maps.google.com/maps?q=AR%20Brindavan%20Teachers%20Colony%20Rd,%20Raghavendra%20Colony,%20Ramachandrapuram,%20Hyderabad,%20Telangana%20502032&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Discovery & NDA",
    desc: "We sign an NDA and schedule a 30-minute scoping session to review your goals, architecture, and timeline.",
  },
  {
    step: "02",
    title: "Solution Blueprint",
    desc: "Within 48 hours, our senior architects deliver a technical approach, milestones, and squad composition.",
  },
  {
    step: "03",
    title: "Sprint Kickoff",
    desc: "Your dedicated engineering pod is onboarded and shipping code within 5 business days.",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Software Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        eyebrow="Contact & Collaboration"
        title="Let's Build Something Extraordinary Together"
        subtitle="Connect with our engineering leaders in Visakhapatnam and Hyderabad for custom solutions and talent."
        bgImage={bgContact}
      />

      {/* ── MAIN GET IN TOUCH SECTION (Split Form & Info Layout) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030e24] via-[#05183d] to-[#020b1e] py-24 text-white">
        {/* Ambient atmospheric lighting */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-8 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl">
                  {/* Subtle top gradient accent */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-400 via-primary to-blue-600" />

                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                      <Sparkles className="h-3.5 w-3.5" /> Direct Inquiry
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for new projects
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-slate-300 font-normal">
                    Fill out the form below. A senior engineer or solution consultant will respond within 24 hours.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center animate-in fade-in duration-300">
                      <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h3 className="mt-4 text-2xl font-extrabold text-white">
                        Thank You, {formData.name || "Friend"}!
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-slate-200 max-w-md mx-auto leading-relaxed">
                        Your message regarding <strong>{formData.service}</strong> has been received. Our technology team will reach out directly to{" "}
                        <span className="text-sky-300 font-semibold">{formData.email}</span> within 24 hours.
                      </p>
                      <div className="mt-6 flex justify-center gap-3">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="rounded-xl bg-white px-6 py-2.5 text-xs font-bold text-primary hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          Send another inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Enter your Name"
                            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 outline-none transition-all focus:border-sky-400 focus:bg-white/15 focus:ring-2 focus:ring-sky-400/20"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter a valid email address"
                            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 outline-none transition-all focus:border-sky-400 focus:bg-white/15 focus:ring-2 focus:ring-sky-400/20"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 91771 11311"
                            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 outline-none transition-all focus:border-sky-400 focus:bg-white/15 focus:ring-2 focus:ring-sky-400/20"
                          />
                        </div>

                        {/* Primary Service / Requirement */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                            Primary Requirement Needed
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-white/15 bg-[#0a1a3a] px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 cursor-pointer"
                          >
                            <option value="Custom Software Development">Custom Software Development</option>
                            <option value="Product Development & Engineering">Product Development & Engineering</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="IT Recruitment & Staffing">IT Recruitment & Staffing</option>
                            <option value="Non-IT Staffing & Talent Solutions">Non-IT Staffing & Talent Solutions</option>
                            <option value="Non-IT Operational & Business Requirement">Non-IT Operational & Business Requirement</option>
                            <option value="Digital Transformation Consulting">Digital Transformation Consulting</option>
                            <option value="AI, Data & Intelligent Automation">AI, Data & Intelligent Automation</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Enter your message (project goals, tech stack, timeline)..."
                          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 outline-none transition-all focus:border-sky-400 focus:bg-white/15 focus:ring-2 focus:ring-sky-400/20 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-300">
                          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>100% Confidential · Strict NDA Protection</span>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-sky-500/25 cursor-pointer disabled:opacity-50"
                        >
                          {submitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right Column: "Get in touch" Suite (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={100}>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Get in touch
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed font-normal">
                    We ensure reliability, low latency, and mission-critical safety for every technology engagement.
                  </p>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Whether you require a dedicated engineering squad or strategic digital transformation, our teams in Visakhapatnam and Hyderabad are ready to partner.
                  </p>
                </div>
              </Reveal>

              {/* Direct Channels Cards */}
              <Reveal delay={150}>
                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+919177111311"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Call Support
                      </p>
                      <p className="text-base font-bold text-white">+91-9177111311</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@hnrglobal.tech"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30 group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        General &amp; Client Inquiry
                      </p>
                      <p className="text-base font-bold text-white">info@hnrglobal.tech</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hr@hnrglobal.tech"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-400/30 group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Careers &amp; Talent HR
                      </p>
                      <p className="text-base font-bold text-white">hr@hnrglobal.tech</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919177111311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Instant WhatsApp
                      </p>
                      <p className="text-base font-bold text-white">Chat with Team Live</p>
                    </div>
                  </a>
                </div>
              </Reveal>

              {/* Social Channels (Twitter, Instagram, LinkedIn matching reference) */}
              <Reveal delay={200}>
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Connect On Social
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-sky-500 hover:border-sky-400 hover:scale-110 shadow-sm"
                      aria-label="Twitter / X"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-pink-600 hover:border-pink-500 hover:scale-110 shadow-sm"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-blue-600 hover:border-blue-500 hover:scale-110 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY HUBS & OFFICE LOCATIONS ── */}
      <section className="bg-background py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              OUR PRESENCE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              Dual Delivery Hubs in India
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Operating state-of-the-art technological facilities in Andhra Pradesh and Telangana.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {officeLocations.map((loc, idx) => (
              <Reveal key={loc.city} delay={idx * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                      {loc.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-primary" /> {loc.hours}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {loc.city}
                  </h3>

                  <p className="mt-4 flex items-start gap-3 text-sm md:text-base text-foreground/80 leading-relaxed font-normal">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{loc.address}</span>
                  </p>

                  {/* Interactive Embedded Google Map */}
                  <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted/40 shadow-inner h-56 sm:h-64 w-full relative">
                    <iframe
                      title={`${loc.city} Google Map`}
                      src={loc.embedMapUrl}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={`tel:${loc.phone}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4 text-primary" /> {loc.phone}
                    </a>
                    <a
                      href={`mailto:${loc.email}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      <Mail className="h-4 w-4" /> {loc.email}
                    </a>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-xs"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Open in Google Maps</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT ROADMAP ── */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              WHAT HAPPENS NEXT
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              From First Inquiry to Active Sprint
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {roadmapSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 100}>
                <div className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-xs hover:border-primary/40 hover:shadow-md transition-all">
                  <span className="text-4xl font-black text-primary/25">{step.step}</span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
