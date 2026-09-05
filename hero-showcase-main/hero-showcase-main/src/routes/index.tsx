import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-vortex.jpg";
import heroVideo from "@/assets/hero-reel2.mp4.asset.json";
import logo from "@/assets/hnr-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HNR Global Pvt Ltd — Talent & Workforce Solutions" },
      {
        name: "description",
        content:
          "HNR Global Pvt Ltd connects companies with exceptional talent and helps professionals find roles where they grow.",
      },
      { property: "og:title", content: "HNR Global Pvt Ltd — Talent & Workforce Solutions" },
      {
        property: "og:description",
        content:
          "Leadership hiring, flexible workforce solutions and scaled recruitment from HNR Global Pvt Ltd.",
      },
    ],
  }),
  component: Index,
});

const navItems = ["Services", "Industries", "Join Us", "Who We Are"];

function Index() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <video
          src={heroVideo.url}
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-veil" />

        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <img
            src={logo.url}
            alt="HNR Global Pvt Ltd"
            className="h-9 w-auto rounded-sm bg-foreground/95 px-2 py-1 md:h-11"
          />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#hero"
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
            <a
              href="#hero"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </nav>
        </header>

        <div
          id="hero"
          className="relative z-10 flex min-h-[calc(100vh-6.5rem)] flex-col items-center justify-center px-6 pb-16"
        >
          <h1 className="text-center">
            <span className="block font-display text-5xl italic leading-none text-foreground/95 sm:text-7xl md:text-8xl">
              In pursuit of
            </span>
            <span className="mt-2 block text-shine text-6xl font-light uppercase leading-none tracking-[0.02em] sm:text-8xl md:text-[8.5rem]">
              Greatness
            </span>
          </h1>

          <div className="mt-14 grid w-full max-w-3xl grid-cols-1 sm:grid-cols-2">
            <a
              href="#hero"
              className="group flex flex-col justify-between gap-10 bg-foreground/12 p-7 backdrop-blur-md transition-colors hover:bg-foreground/20"
            >
              <span>
                <span className="block font-display text-lg text-foreground/70">For Companies</span>
                <span className="mt-2 block text-3xl font-light leading-tight text-foreground">
                  Find Amazing Talent
                </span>
              </span>
              <ArrowRight className="ml-auto size-7 text-foreground transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#hero"
              className="group flex flex-col justify-between gap-10 bg-primary p-7 transition-colors hover:bg-primary/90"
            >
              <span>
                <span className="block font-display text-lg text-primary-foreground/75">
                  For Job Seekers
                </span>
                <span className="mt-2 block text-3xl font-light leading-tight text-primary-foreground">
                  Find Your Dream Job
                </span>
              </span>
              <ArrowRight className="ml-auto size-7 text-primary-foreground transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
