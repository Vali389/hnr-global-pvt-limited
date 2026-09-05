import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#030e24] via-[#05183d] to-[#020b1e] text-white py-24 border-t border-white/10">
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
            READY TO GET STARTED?
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's build what your business needs next
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            Share your requirement and our team will come back with a delivery approach, timeline
            and the right mix of engineering and talent.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 shadow-lg hover:bg-white/90"
            >
              Talk to our team
            </Link>
            <a
              href="tel:+919177111311"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              +91-9177111311
            </a>
            <a
              href="https://wa.me/919177111311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
