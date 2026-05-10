"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const pillarsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !pillarsRef.current) return;

    // Pillar cards stagger in with slight rotation
    const cards = pillarsRef.current.querySelectorAll(".pillar-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, rotateY: 8 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Timeline dots pulse sequentially
    const dots = sectionRef.current.querySelectorAll(".timeline-dot");
    gsap.fromTo(
      dots,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.4,
        ease: "back.out(2)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: dots[0]?.parentElement?.parentElement,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-[72px] lg:py-[120px] px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text & Timeline */}
        <div className="reveal-item">
          <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
            About STA
          </div>
          <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-4">
            A Decade of Turning<br />Raw Talent Into<br />
            <span className="text-accent">Champions</span>
          </h2>
          <div className="text-muted text-[15px] leading-[1.7] max-w-[500px] mb-8">
            Founded by Suryansh Yadav, Surya Tennis Academy has spent 10 years building a legacy in Indore. From beginner kids to competitive adults, we train players who go on to compete at state, national, and international levels.
          </div>

          {[
            { title: "Founded in Indore", desc: "Started with a single court and a vision to build champions at Kanadia Main Road." },
            { title: "Surya Pickleball Academy launched", desc: "Expanding beyond tennis to India's fastest-growing sport." },
            { title: "PWR 200, League of Champions & more", desc: "Hosting and winning marquee tournaments in Indore." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-6">
              <div className="timeline-dot w-2.5 h-2.5 rounded-full bg-[rgba(200,232,53,0.4)] border-2 border-accent mt-1.5 shrink-0 shadow-[0_0_10px_rgba(200,232,53,0.5)]" style={{ transform: "scale(0)" }}></div>
              <p className="text-[14px] leading-[1.6] text-foreground/90 m-0">
                <strong className="text-foreground font-semibold">{item.title}</strong> — {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Pillars Grid */}
        <div ref={pillarsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {[
            { icon: "🎾", title: "Tennis First", desc: "Structured coaching for all ages. Beginner to advanced, juniors to adults.", lime: true },
            { icon: "🏓", title: "Pickleball", desc: "Surya Pickleball Academy — Indore's go-to hub for India's fastest-growing sport." },
            { icon: "🏆", title: "Tournament Ready", desc: "Competitive track coaching to prepare players for state and national tournaments." },
            { icon: "👨‍👩‍👧", title: "STA Family", desc: "More than an academy — a community of players, parents, and coaches." },
          ].map((p, i) => (
            <div
              key={i}
              className={`pillar-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(200,232,53,0.08)] ${
                p.lime
                  ? "bg-accent text-background"
                  : "bg-surface border border-[rgba(200,232,53,0.15)]"
              }`}
              style={{ opacity: 0 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[20px] mb-4 ${
                  p.lime ? "bg-background/10" : "bg-[rgba(200,232,53,0.1)]"
                }`}
              >
                {p.icon}
              </div>
              <h4
                className={`font-heading text-[22px] tracking-[1px] mb-2 ${
                  p.lime ? "" : "text-foreground"
                }`}
              >
                {p.title}
              </h4>
              <p
                className={`text-[13px] leading-[1.6] ${
                  p.lime ? "text-background/80" : "text-muted"
                }`}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
