import { HeroVideoPlaylist } from "@/components/site/HeroVideoPlaylist";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgVideo,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  bgImage?: string;
  bgVideo?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden surface-navy min-h-[80vh] md:min-h-[86vh] flex items-center bg-[#030914]">
      {bgImage ? (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover hero-zoom brightness-110"
        />
      ) : bgVideo ? (
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-90 hero-zoom brightness-105"
        />
      ) : (
        <HeroVideoPlaylist className="absolute inset-0 h-full w-full object-cover opacity-90 hero-zoom brightness-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/85 via-[#030914]/65 to-[#030914]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#030914]/80 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 pt-36 pb-24 md:pt-44 md:pb-28 w-full flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-md">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent drop-shadow-md">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200/90 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
