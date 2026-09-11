import { HeroVideoPlaylist } from "@/components/site/HeroVideoPlaylist";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgVideo,
}: {
  eyebrow: string;
  title: string | ReactNode;
  subtitle: string;
  bgImage?: string;
  bgVideo?: string;
}) {
  // Render title with signature white + blue gradient styling if string
  const renderTitle = () => {
    if (typeof title !== "string") return title;
    const words = title.trim().split(" ");
    if (words.length <= 2) {
      return (
        <>
          <span className="text-white">{words[0]} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
            {words.slice(1).join(" ")}
          </span>
        </>
      );
    }
    const splitIndex = words.length > 5 ? words.length - 2 : words.length - 1;
    const firstPart = words.slice(0, splitIndex).join(" ");
    const secondPart = words.slice(splitIndex).join(" ");
    return (
      <>
        <span className="text-white">{firstPart} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
          {secondPart}
        </span>
      </>
    );
  };

  return (
    <section className="relative isolate overflow-hidden surface-navy min-h-[65vh] md:min-h-[72vh] flex flex-col justify-center items-center bg-[#030914] border-b border-slate-800/80">
      {bgImage ? (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-85 hero-zoom brightness-105"
        />
      ) : bgVideo ? (
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-85 hero-zoom brightness-105"
        />
      ) : (
        <HeroVideoPlaylist className="absolute inset-0 h-full w-full object-cover opacity-85 hero-zoom brightness-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/65 via-[#030914]/40 to-[#030914]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#030914]/45 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl lg:max-w-6xl px-6 pt-16 pb-14 md:pt-20 md:pb-18 w-full flex flex-col items-center text-center -mt-8 sm:-mt-12 md:-mt-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-blue-300 backdrop-blur-md shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {eyebrow}
        </span>
        <h1 className="mt-4 text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.2] tracking-tight whitespace-normal md:whitespace-nowrap drop-shadow-md text-center">
          {renderTitle()}
        </h1>
        <p className="mt-3.5 text-xs sm:text-sm md:text-base lg:text-[1.05rem] text-slate-100 max-w-4xl mx-auto leading-relaxed font-normal whitespace-normal md:whitespace-nowrap drop-shadow-sm text-center">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
