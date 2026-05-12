"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Reveal the large background text
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".bg-text-line"),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 0.05,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Image card animation
    gsap.fromTo(
      sectionRef.current.querySelector(".about-image-card"),
      { scale: 0.8, opacity: 0, rotate: -5 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-[100px] lg:py-[180px] px-6 lg:px-12 relative overflow-hidden bg-cream">
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none px-4">
        <div className="bg-text-line font-heading text-[clamp(100px,20vw,300px)] leading-[0.8] text-navy opacity-0 whitespace-nowrap">
          SKILLED QUALITY
        </div>
        <div className="bg-text-line font-heading text-[clamp(100px,20vw,300px)] leading-[0.8] text-navy opacity-0 whitespace-nowrap translate-x-[10%]">
          FOCUS INSTRUCTOR
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Right: Text Content (Higher Z-index) */}
        <div className="order-2 lg:order-1">
          <div className="section-badge">About the Academy</div>
          <h2 className="font-heading text-[clamp(48px,6vw,88px)] leading-[1] tracking-[1px] text-navy mb-8 uppercase">
            A Decade of <br />
            <span className="text-orange">Champions</span>
          </h2>
          <p className="text-dark/70 text-[16px] leading-[1.8] max-w-[480px] mb-10">
            Founded by Suryansh Yadav, Surya Tennis Academy has spent 10 years building a legacy in Indore. 
            From beginner kids to competitive adults, we train players who go on to compete at state, national, and international levels.
          </p>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-5xl text-navy">100%</span>
              <span className="text-[11px] text-muted uppercase tracking-[2px] font-bold">Focus on Quality</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-5xl text-navy">#01</span>
              <span className="text-[11px] text-muted uppercase tracking-[2px] font-bold">Trusted in Indore</span>
            </div>
          </div>
        </div>

        {/* Left: Featured Image Card */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="about-image-card relative w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(27,42,107,0.15)] bg-navy">
            {/* Placeholder for coach image */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading text-9xl -rotate-12">
              STA
            </div>
            {/* Floating Info Overlay */}
            <div className="absolute bottom-10 left-10 z-20">
              <h4 className="font-heading text-3xl text-white mb-1 uppercase">Suryansh Yadav</h4>
              <p className="text-sky text-[12px] font-bold tracking-[2px] uppercase">Director & Head Coach</p>
            </div>
            
            {/* Navigation Arrows (Decorative like reference) */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-2">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-colors cursor-pointer">
                    ←
                </div>
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition-colors cursor-pointer">
                    →
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
