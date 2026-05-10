"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const reviews = [
  {
    text: "\"My son joined STA at age 7 and in just 2 years he's competing at district level. Suryansh sir's coaching is exceptional.\"",
    initials: "RP",
    name: "Rajesh Patel",
    role: "Parent of Junior Player",
  },
  {
    text: "\"Best academy in Indore. The facilities are great, the coaches are professional, and the STA community feels like family.\"",
    initials: "AS",
    name: "Anita Sharma",
    role: "Adult Member",
  },
  {
    text: "\"Started pickleball at 45 and never felt out of place. The coaches are patient and encouraging. Highly recommend!\"",
    initials: "VG",
    name: "Vijay Gupta",
    role: "Pickleball Member",
  },
  {
    text: "\"The multi-sport approach sets STA apart. My kids train in both tennis and pickleball, and they love every session.\"",
    initials: "MK",
    name: "Meera Kulkarni",
    role: "Parent, Multi-Sport",
  },
  {
    text: "\"Coach Kawaljeet Sir's bootcamp transformed my game. I went from casual player to competing in PWR 200 in just 6 months.\"",
    initials: "DV",
    name: "Dhruv Verma",
    role: "Competitive Player",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    // Make the track draggable for swipe-based interaction
    const cards = trackRef.current.querySelectorAll(".testimonial-card");
    const cardWidth = 360;
    const gap = 20;
    const totalWidth = (cardWidth + gap) * cards.length - gap;
    const viewportWidth = window.innerWidth;
    const maxDrag = Math.max(0, totalWidth - viewportWidth + 48);

    Draggable.create(trackRef.current, {
      type: "x",
      bounds: { minX: -maxDrag, maxX: 0 },
      inertia: true,
      edgeResistance: 0.8,
      throwResistance: 2000,
      cursor: "grab",
      activeCursor: "grabbing",
      onDrag: function () {
        // Subtle skew based on drag velocity
        const velocity = this.getDirection() === "left" ? -1 : 1;
        gsap.to(cards, {
          skewX: velocity * 1.5,
          duration: 0.2,
          ease: "power1.out",
        });
      },
      onDragEnd: function () {
        gsap.to(cards, {
          skewX: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      },
    });

    // Staggered reveal on scroll
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-background overflow-hidden"
    >
      <div className="reveal-item">
        <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
          Reviews
        </div>
        <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-14 text-foreground">
          The STA
          <br />
          <span className="text-accent">Family Speaks</span>
        </h2>
      </div>

      <div className="overflow-visible cursor-grab select-none">
        <div
          ref={trackRef}
          className="flex gap-5"
          style={{ width: "max-content" }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="testimonial-card w-[340px] md:w-[380px] shrink-0 bg-surface border border-[rgba(200,232,53,0.15)] rounded-2xl p-7 transition-shadow hover:shadow-[0_0_30px_rgba(200,232,53,0.08)]"
              style={{ opacity: 0 }}
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-accent text-[14px]">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-foreground text-[14px] leading-[1.7] mb-5 italic opacity-90">
                {r.text}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(200,232,53,0.15)] border border-[rgba(200,232,53,0.3)] flex items-center justify-center shrink-0 font-heading text-[16px] text-accent">
                  {r.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-foreground">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-muted">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-[11px] text-muted tracking-[2px] uppercase text-center lg:text-left">
        ← Drag to explore →
      </div>
    </section>
  );
}
