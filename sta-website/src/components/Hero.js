"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      // Badge slides in
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // Headline words stagger reveal
      if (h1Ref.current) {
        const lines = h1Ref.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.12,
          },
          "-=0.3"
        );
      }

      // Subtitle fades in
      tl.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      // CTA slides up
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );

      // Scroll prompt fades in last
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-cream"
      id="hero"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(93,173,226,0.06)_0%,transparent_70%)]"></div>

      {/* Content — left-aligned, the 3D ball occupies right side via Scene.js */}
      <div className="relative z-10 w-full px-6 lg:px-16 pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[120px]">
        <div className="max-w-[700px]">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="section-badge mb-8"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
            10 Years of Excellence
          </div>

          {/* Single Massive Headline — no duplicates */}
          <h1
            ref={h1Ref}
            className="font-heading text-[clamp(52px,9vw,120px)] leading-[0.88] tracking-[1px] text-navy uppercase mb-8 overflow-hidden"
          >
            <span className="hero-line block" style={{ opacity: 0 }}>
              WHERE
            </span>
            <span className="hero-line block" style={{ opacity: 0 }}>
              CHAMPIONS
            </span>
            <span className="hero-line block text-sky" style={{ opacity: 0 }}>
              ARE MADE.
            </span>
          </h1>

          {/* Subtitle — STA-specific, not generic gym copy */}
          <p
            ref={subRef}
            className="text-dark/60 text-[16px] lg:text-[18px] leading-[1.7] max-w-[440px] mb-10"
            style={{ opacity: 0 }}
          >
            Indore&apos;s premier tennis &amp; pickleball academy — producing
            State, National &amp; International players under{" "}
            <strong className="text-navy font-semibold">
              Director Suryansh Yadav
            </strong>
            .
          </p>

          {/* Single Primary CTA — only "Book Free Trial" belongs here */}
          <div ref={ctaRef} style={{ opacity: 0 }}>
            <Link
              href="#cta"
              className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-full font-heading text-xl uppercase tracking-[1px] transition-all hover:bg-orange hover:-translate-y-0.5 shadow-[0_12px_40px_rgba(27,42,107,0.25)]"
            >
              Book Free Trial
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[14px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll prompt — bottom center */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-navy/30 text-[10px] tracking-[3px] uppercase flex flex-col items-center gap-2 z-10"
        style={{ opacity: 0 }}
      >
        <span>Scroll to explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-sky to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
