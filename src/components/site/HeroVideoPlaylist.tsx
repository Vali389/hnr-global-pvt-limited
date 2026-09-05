import { useState, useRef, useEffect } from "react";
import heroVideo from "@/assets/hero-reel2.mp4";
import heroBg from "@/assets/hero-vortex.jpg";

export function HeroVideoPlaylist({ className = "w-full h-full object-cover" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback silently if autoplay policy requires interaction
      });
    }
  }, [mounted]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        src={heroVideo}
        poster={heroBg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        suppressHydrationWarning
        className={className}
      />
    </div>
  );
}
