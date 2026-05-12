"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.8 });

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      if (h1Ref.current) {
        const lines = h1Ref.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { y: 80, opacity: 0, rotateX: 15 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        );
      }

      tl.fromTo(pRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3");
      tl.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-[100px] pb-[60px] relative overflow-hidden bg-navy"
      id="hero"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-navy opacity-80"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky/10 to-transparent"></div>

      <div className="relative z-10 max-w-[900px]">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-sky-light mb-7"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
          10 Years of Excellence
        </div>

        <h1
          ref={h1Ref}
          className="font-heading text-[clamp(56px,10vw,130px)] leading-[0.92] tracking-[2px] mb-6 uppercase overflow-hidden"
        >
          <span className="hero-line block text-white" style={{ opacity: 0 }}>MOVE</span>
          <span className="hero-line block text-white" style={{ opacity: 0 }}>FASTER,</span>
          <span className="hero-line block text-sky" style={{ opacity: 0 }}>PLAY</span>
          <span className="hero-line block text-orange" style={{ opacity: 0 }}>HARDER.</span>
        </h1>

        <p
          ref={pRef}
          className="text-white/60 text-[16px] leading-[1.7] max-w-[480px] mb-9"
          style={{ opacity: 0 }}
        >
          Indore&apos;s premier sports academy — producing State, National &amp;
          International players under the leadership of{" "}
          <strong className="text-orange font-semibold">Director Suryansh Yadav</strong>.
        </p>

        <div
          ref={ctaRef}
          className="flex gap-4 flex-wrap"
          style={{ opacity: 0 }}
        >
          <Link
            href="#cta"
            className="bg-orange text-white px-8 py-4 rounded-full font-bold text-[15px] no-underline inline-flex items-center gap-2 transition-all border-none cursor-pointer tracking-[0.5px] hover:bg-[#e06a15] hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(244,121,32,0.35)]"
          >
            Book Free Trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-[15px] no-underline inline-flex items-center gap-2 transition-all border-[1.5px] border-white/20 hover:border-sky hover:text-sky"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[11px] tracking-[2px] uppercase flex flex-col items-center gap-2 z-10">
        <span>Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-sky to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
