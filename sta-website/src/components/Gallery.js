"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { icon: "🎾", label: "Training Sessions", large: true },
  { icon: "🏆", label: "Tournament Wins" },
  { icon: "👨‍👩‍👧", label: "STA Family" },
  { icon: "🏕️", label: "Summer Camps" },
  { icon: "🎉", label: "Events" },
  { icon: "⭐", label: "Achievements" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".gallery-cell");

    // Staggered reveal with scale + fade
    gsap.fromTo(
      items,
      { y: 60, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Parallax: odd columns move slower
    items.forEach((item, i) => {
      const speed = i % 2 === 0 ? 20 : -20;
      gsap.to(item, {
        y: speed,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-background-2"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-item">
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
            Life At STA
          </div>
          <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] m-0 text-foreground">
            Action <span className="text-accent">&</span> Energy
          </h2>
        </div>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="bg-transparent text-foreground border-[1.5px] border-[rgba(200,232,53,0.3)] px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-[1px] uppercase transition-all hover:bg-accent hover:border-accent hover:text-background inline-flex items-center justify-center whitespace-nowrap self-start lg:self-auto"
        >
          Follow @STA.Indore
        </Link>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[240px]"
      >
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`gallery-cell bg-surface rounded-2xl overflow-hidden relative group cursor-pointer ${
              item.large ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2" : ""
            }`}
            style={{ opacity: 0 }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 bg-background border border-[rgba(200,232,53,0.15)] rounded-2xl transition-all duration-300 group-hover:border-accent group-hover:bg-surface group-hover:scale-[1.02]">
              <span className="text-[36px] transition-transform duration-300 group-hover:scale-125">
                {item.icon}
              </span>
              <div className="text-[12px] text-muted font-medium tracking-[1px] text-center uppercase transition-colors group-hover:text-accent">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
