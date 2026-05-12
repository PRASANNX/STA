"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: "Years Legacy" },
  { value: 500, suffix: "+", label: "Players Trained" },
  { value: 3, suffix: "", label: "Sports Offered" },
  { value: 7, suffix: "", label: "Days Coaching" },
];

export default function Stats() {
  const containerRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        stats.forEach((stat, i) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 2,
            ease: "expo.out",
            delay: i * 0.1,
            onUpdate: () => {
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.round(obj.val);
                return next;
              });
            },
          });
        });

        gsap.fromTo(
          containerRef.current.querySelectorAll(".stat-item"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        );
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-navy/10 bg-white"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`stat-item py-12 lg:py-16 text-center relative transition-colors hover:bg-cream/50 ${
            i < 3 ? "lg:border-r border-navy/10" : ""
          } ${i < 2 ? "border-b lg:border-b-0 border-navy/10" : ""} ${i === 2 ? "border-b md:border-b-0 border-navy/10" : ""}`}
        >
          <div className="font-heading text-[clamp(50px,6vw,80px)] text-navy leading-none mb-2">
            {counts[i]}
            <span className="text-orange">{stat.suffix}</span>
          </div>
          <div className="text-[11px] text-muted tracking-[2px] uppercase font-bold">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
