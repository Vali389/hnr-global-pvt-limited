import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients | HNR Global PVT LTD" },
      {
        name: "description",
        content:
          "Trusted by 100+ enterprise clients across 13+ sectors. See how HNR Global PVT LTD delivers measurable outcomes through technology.",
      },
      { property: "og:title", content: "Clients | HNR Global PVT LTD" },
      {
        property: "og:description",
        content: "100+ enterprise clients, 95% retention rate. Real results, real relationships.",
      },
    ],
  }),
  component: Clients,
});

const stats = [
  { value: "100+", label: "Enterprise clients served" },
  { value: "95%", label: "Client retention rate" },
  { value: "50+", label: "Products launched" },
  { value: "500+", label: "Tech professionals placed" },
];

const testimonials = [
  {
    quote:
      "HNR Global delivered our ERP modernisation on time and under budget. Their team understood our manufacturing workflows deeply from day one — there was almost no ramp-up time.",
    name: "Rajesh K.",
    title: "CTO, Manufacturing Enterprise",
    sector: "Manufacturing",
    rating: 5,
  },
  {
    quote:
      "We engaged HNR Global for IT staffing and were impressed by the quality of candidates. They filled 12 senior roles in under 6 weeks — something our internal team had struggled with for months.",
    name: "Priya M.",
    title: "VP Engineering, Fintech Startup",
    sector: "Banking & Fintech",
    rating: 5,
  },
  {
    quote:
      "Their digital transformation roadmap gave us a clear path through a very complex legacy landscape. The team was proactive, communicative and genuinely invested in our success.",
    name: "Anil S.",
    title: "Head of IT, Logistics Company",
    sector: "Transportation & Logistics",
    rating: 5,
  },
  {
    quote:
      "The mobile app HNR Global built for us has a 4.8-star rating on both app stores. They nailed the UX and delivered a rock-solid Flutter codebase that our internal team can maintain easily.",
    name: "Deepa R.",
    title: "Product Director, Retail Brand",
    sector: "Retail & Consumer",
    rating: 5,
  },
  {
    quote:
      "HNR Global's AI and data analytics platform reduced our forecasting errors by 34%. The ROI was visible within the first quarter of go-live.",
    name: "Suresh T.",
    title: "Chief Digital Officer, Energy Company",
    sector: "Energy & Utilities",
    rating: 5,
  },
  {
    quote:
      "What sets HNR Global apart is their accountability. They don't just deliver code — they take ownership of outcomes. That's rare in the outsourcing world.",
    name: "Meena P.",
    title: "CEO, Healthcare SaaS Platform",
    sector: "Healthcare",
    rating: 5,
  },
];

const trustPoints = [
  [
    "ISO 9001:2015 certified",
    "Globally recognised quality management standard across all delivery processes.",
  ],
  [
    "GDPR & data security compliant",
    "Robust data handling, NDA-first engagement and security-by-design principles.",
  ],
  [
    "Agile delivery cadence",
    "Two-week sprints, weekly demos and transparent progress tracking via your preferred tools.",
  ],
  [
    "Dedicated account managers",
    "A single point of contact for every engagement — responsive, accountable and proactive.",
  ],
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by enterprises across 13+ sectors"
        subtitle="We measure success by our clients' outcomes — not just deliverables. A 95% retention rate is our strongest proof point."
        bgImage={heroImg}
      />

      {/* Stats */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-8 py-10 text-center">
              <p className="text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-base text-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Client stories
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What our clients say about working with us
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <article className="card-elevated flex h-full flex-col p-7">
                <Quote className="h-8 w-8 text-primary opacity-60" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <Stars count={t.rating} />
                  <p className="mt-3 font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                  <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {t.sector}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust & compliance */}
      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Why clients trust us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built on accountability, transparency and results
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {trustPoints.map(([title, body], i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 p-6">
                  <p className="font-semibold text-primary">{title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
