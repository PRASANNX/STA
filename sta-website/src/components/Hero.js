"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { View } from "@react-three/drei";

export default function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.8 }); // Wait for preloader

      // Badge slides in
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // H1 words stagger in
      if (h1Ref.current) {
        const lines = h1Ref.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { y: 80, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.3"
        );
      }

      // Paragraph fades in
      tl.fromTo(
        pRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // CTAs slide up
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-12 pt-[100px] pb-[60px] relative overflow-hidden text-center lg:text-left"
      id="hero"
    >
      <div className="hero-bg"></div>
      <div className="relative z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-7"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></span>
          10 Years of Excellence
        </div>

        <h1
          ref={h1Ref}
          className="font-heading text-[clamp(64px,8vw,110px)] leading-[0.95] tracking-[1px] mb-2 overflow-hidden"
        >
          <span className="hero-line block" style={{ opacity: 0 }}>Surya</span>
          <span className="hero-line block" style={{ opacity: 0 }}>Tennis</span>
          <span className="hero-line block text-[clamp(50px,6vw,90px)] text-lime italic font-light" style={{ opacity: 0 }}>&</span>
          <span className="hero-line block" style={{ opacity: 0 }}>Pickleball</span>
          <span className="hero-line block text-lime" style={{ opacity: 0 }}>Academy</span>
        </h1>

        <p
          ref={pRef}
          className="text-muted text-[15px] leading-[1.7] max-w-[420px] mb-9 mx-auto lg:mx-0"
          style={{ opacity: 0 }}
        >
          Indore&apos;s premier sports academy — producing State, National &
          International players under the leadership of{" "}
          <strong className="text-lime font-semibold">
            Director Suryansh Yadav
          </strong>
          .
        </p>

        <div
          ref={ctaRef}
          className="flex gap-3.5 flex-wrap justify-center lg:justify-start"
          style={{ opacity: 0 }}
        >
          <Link
            href="#cta"
            className="bg-lime text-navy px-7 py-3.5 rounded-full font-bold text-[14px] no-underline inline-flex items-center gap-2 transition-all border-none cursor-pointer tracking-[0.3px] hover:bg-lime-2 hover:-translate-y-0.5"
          >
            Book Free Trial
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="bg-transparent text-white px-7 py-3.5 rounded-full font-semibold text-[14px] no-underline inline-flex items-center gap-2 transition-all border-[1.5px] border-white/25 hover:border-lime hover:text-lime"
          >
            Our Story
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center mt-12 lg:mt-0">
        <div className="view-container h-[400px] w-full max-w-[500px]">
          {/* WebGL Ball now renders globally from Scene.js */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted text-[11px] tracking-[2px] uppercase flex flex-col items-center gap-2">
            <span>Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-lime to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
