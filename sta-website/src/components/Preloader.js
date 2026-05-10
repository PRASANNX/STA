"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const ballRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        onComplete?.();
      },
    });

    // Phase 1: Ball draws itself (scale from 0)
    tl.fromTo(
      ballRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Phase 2: Text reveals
    tl.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

    // Phase 3: Hold to allow WebGL compiling, then wipe away
    tl.to({}, { duration: 1.0 });

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
    });

    return () => tl.kill();
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center gap-6"
    >
      {/* Animated Ball */}
      <div
        ref={ballRef}
        className="w-20 h-20 rounded-full bg-accent shadow-[0_0_60px_rgba(200,232,53,0.4)] flex items-center justify-center"
        style={{ transform: "scale(0)" }}
      >
        <div className="w-full h-full rounded-full relative overflow-hidden">
          <div className="absolute w-full h-[2px] bg-background/30 top-1/2 -translate-y-1/2 -rotate-[20deg]" />
          <div className="absolute w-full h-[2px] bg-background/20 top-1/2 -translate-y-1/2 rotate-[30deg]" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center" style={{ opacity: 0 }} ref={textRef}>
        <div className="font-heading text-[48px] md:text-[64px] tracking-[4px] text-foreground leading-none">
          STA
        </div>
      </div>
      <div
        ref={subtextRef}
        className="text-[11px] tracking-[4px] text-muted uppercase font-medium"
        style={{ opacity: 0 }}
      >
        Surya Tennis & Pickleball Academy
      </div>
    </div>
  );
}
