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
      start: "top 80%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        stats.forEach((stat, i) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 2.5,
            ease: "expo.out",
            delay: i * 0.15,
            onUpdate: () => {
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.round(obj.val);
                return next;
              });
            },
          });
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[rgba(200,232,53,0.15)] mx-6 lg:mx-12"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`py-8 text-center relative ${
            i < 3
              ? "border-r-0 lg:border-r border-[rgba(200,232,53,0.15)]"
              : ""
          } ${i < 2 ? "border-b lg:border-b-0 border-[rgba(200,232,53,0.15)]" : ""}`}
        >
          <div className="font-heading text-[52px] text-accent leading-none">
            {counts[i]}
            {stat.suffix}
          </div>
          <div className="text-[12px] text-muted tracking-[1.5px] uppercase mt-1 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
