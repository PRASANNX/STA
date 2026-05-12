"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const imageContainerRef = useRef(null);
  const overlayTextRef = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Headline animation - split into two parts for better control
      tl.fromTo(
        headlineRef.current.querySelectorAll(".headline-word"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.1,
        }
      );

      // Image container reveal - grows and fades in
      tl.fromTo(
        imageContainerRef.current,
        { scale: 0.95, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Overlay text within image
      tl.fromTo(
        overlayTextRef.current.querySelectorAll(".overlay-line"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4"
      );

      // Bottom bar elements
      tl.fromTo(
        bottomBarRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white pt-[120px] pb-[40px] px-6 lg:px-12 flex flex-col items-center"
      id="hero"
    >
      {/* Top Heading */}
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold uppercase tracking-[3px] text-navy/40 mb-4 block">
          Achieve Your Sporting Goals
        </span>
        <h1
          ref={headlineRef}
          className="font-heading text-[clamp(60px,12vw,160px)] leading-[0.85] text-navy uppercase tracking-[-2px] flex flex-col items-center"
        >
          <span className="headline-word block overflow-hidden">FIND YOUR</span>
          <span className="headline-word block overflow-hidden">STRENGTH</span>
        </h1>
      </div>

      {/* Main Image Container */}
      <div
        ref={imageContainerRef}
        className="relative w-full max-w-[1200px] aspect-[16/9] lg:aspect-[21/9] rounded-[40px] lg:rounded-[60px] overflow-hidden bg-navy group shadow-[0_40px_100px_rgba(27,42,107,0.15)]"
      >
        {/* Background Image / Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-sky opacity-80 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="font-heading text-[20vw] text-white select-none">STA</div>
        </div>

        {/* Action Image Mockup (since generation failed) */}
        <div className="absolute inset-0 z-0">
            {/* Visual representation of a court/player could go here */}
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-sky)_0%,_transparent_70%)] opacity-30"></div>
        </div>

        {/* Overlay Text */}
        <div ref={overlayTextRef} className="absolute inset-0 flex flex-col justify-center px-10 lg:px-20 z-10">
          <h2 className="font-heading text-[clamp(40px,8vw,100px)] leading-[0.9] text-white uppercase max-w-[500px]">
            <span className="overlay-line block">INSIDE</span>
            <span className="overlay-line block">AND OUT.</span>
          </h2>
        </div>

        {/* Bottom Left Info */}
        <div ref={bottomBarRef} className="absolute bottom-8 lg:bottom-12 left-10 lg:left-20 right-10 lg:right-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 z-20">
          <p className="text-white/60 text-[13px] leading-[1.6] max-w-[300px]">
            We are dedicated to helping you achieve your fitness goals and improve your overall health and well-being.
          </p>
          
          <div className="flex items-center gap-6">
             <div className="flex flex-col items-end">
                <span className="text-white/40 text-[10px] uppercase tracking-[1px] mb-1">Duration</span>
                <span className="text-white text-[14px] font-bold">10+ Years</span>
             </div>
             <Link 
                href="#cta" 
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center text-navy hover:bg-orange hover:text-white transition-all duration-300 shadow-xl"
             >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
             </Link>
          </div>
        </div>
      </div>

      {/* Floating CTA integrated into scroll flow */}
      <div className="mt-12 flex gap-4">
          <Link 
            href="#cta" 
            className="bg-navy text-white px-10 py-4 rounded-full font-heading text-xl uppercase tracking-[1px] hover:bg-orange transition-all"
          >
            Join the Legacy
          </Link>
      </div>
    </section>
  );
}
