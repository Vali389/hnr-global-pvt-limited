import { useRef, useEffect } from "react";
import heroVideo from "@/assets/hero-reel2.mp4";
import heroBg from "@/assets/hero-vortex.jpg";

export function HeroVideoPlaylist({ className = "w-full h-full object-cover" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

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
        onCanPlay={() => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        }}
        aria-hidden="true"
        suppressHydrationWarning
        className={className}
      />
    </div>
  );
}
