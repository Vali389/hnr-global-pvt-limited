export interface MarqueeItem {
  name: string;
  icon?: string;
  category?: string;
}

export function Marquee({
  items,
  slow = false,
  subtitle,
}: {
  items: (string | MarqueeItem)[];
  slow?: boolean;
  subtitle?: string;
}) {
  const loop = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      {/* Left/Right Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      <div className={slow ? "marquee-track-slow" : "marquee-track"}>
        {loop.map((item, i) => {
          const name = typeof item === "string" ? item : item.name;
          const icon = typeof item === "string" ? undefined : item.icon;
          const itemSubtitle =
            typeof item === "string" ? subtitle : item.category || subtitle;

          return (
            <div
              key={`${name}-${i}`}
              className="group mx-2.5 flex items-center gap-3.5 rounded-2xl bg-card/90 hover:bg-card border border-border/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md px-5 py-3.5 shrink-0"
            >
              {icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted/60 p-1.5 transition-transform group-hover:scale-110">
                  <img
                    src={icon}
                    alt={name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {name}
                </span>
                {itemSubtitle && (
                  <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground/80 whitespace-nowrap">
                    {itemSubtitle}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
