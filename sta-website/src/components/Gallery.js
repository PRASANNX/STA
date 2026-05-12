"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.querySelectorAll(".gallery-card"),
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  const items = [
    { title: "Grand Ace Court", desc: "Premium hard court built for high-performance training.", size: "lg" },
    { title: "Serena Arena", desc: "Indoor clay-feel court for tactical mastery.", size: "sm" },
    { title: "Pickleball Hub", desc: "India's fastest growing sport, now at STA.", size: "sm" },
    { title: "Elite Lounge", desc: "Relax and review your game in our player lounge.", size: "md" },
  ];

  return (
    <section ref={sectionRef} id="gallery" className="py-[100px] lg:py-[150px] px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-[800px] mb-16">
        <div className="section-badge">Facility Tour</div>
        <h2 className="font-heading text-[clamp(48px,6vw,88px)] leading-[0.9] text-navy uppercase mb-6">
          Take A Tour <br />
          <span className="text-sky">Of Our Facilities</span>
        </h2>
        <p className="text-muted text-[16px] leading-[1.8] max-w-[500px]">
          Reserve a court for focused practice, team drills, or private coaching sessions, and elevate your game to the next level.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`gallery-card relative rounded-[40px] overflow-hidden bg-navy group cursor-pointer shadow-[0_20px_40px_rgba(27,42,107,0.1)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(27,42,107,0.2)] ${
                item.size === 'lg' ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-auto md:h-[400px]'
            }`}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10 opacity-80 transition-opacity group-hover:opacity-90"></div>
            
            {/* Placeholder Text for Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span className="font-heading text-8xl text-white uppercase -rotate-12 select-none">STA</span>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-10 left-10 right-10 z-20 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h4 className="font-heading text-3xl text-white uppercase mb-2 tracking-[1px]">{item.title}</h4>
                <p className="text-white/60 text-[12px] leading-[1.6] max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                </p>
            </div>

            {/* Play/View Button */}
            <div className="absolute top-10 right-10 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                <span className="text-xl">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
