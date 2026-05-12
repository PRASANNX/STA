"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Coaches() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const coaches = [
    {
      initials: "SY",
      name: "Suryansh Yadav",
      role: "Founder & Head Coach",
      badge: "Director",
      bio: "Visionary founder of STA with 10+ years developing junior and adult players. Director of Surya Pickleball Academy. Trains players from grassroots to competitive levels."
    },
    {
      initials: "SS",
      name: "Suryan Shadav",
      role: "Performance Coach",
      bio: "International-style coach handling beginners, intermediates, and advanced players. Focused on performance-track development."
    },
    {
      initials: "KS",
      name: "Kawaljeet Sir",
      role: "Elite Program Coach",
      bio: "Renowned coach who has produced multiple national and international players. Leads special camps and elite training programs at STA."
    }
  ];

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.querySelectorAll(".coach-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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

  return (
    <section id="coaches" ref={sectionRef} className="py-[100px] lg:py-[150px] px-6 lg:px-12 bg-white relative">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-[600px]">
          <div className="section-badge">The Leadership</div>
          <h2 className="font-heading text-[clamp(48px,6vw,88px)] leading-[0.9] text-navy uppercase mb-4">
            Experts Behind <br />
            <span className="text-orange">Your Evolution</span>
          </h2>
        </div>
        <p className="text-muted text-[15px] leading-[1.7] max-w-[400px]">
          Train with coaches who have a proven track record of producing champions at state, national, and international levels.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coaches.map((c, i) => (
          <div key={i} className="coach-card group relative">
            <div className="bg-cream rounded-[40px] p-8 lg:p-10 border border-navy/5 transition-all duration-500 hover:border-sky/40 hover:shadow-[0_30px_60px_rgba(27,42,107,0.08)]">
              {c.badge && (
                <div className="absolute top-8 right-8 bg-orange text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-[2px] uppercase">
                  {c.badge}
                </div>
              )}
              
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center font-heading text-3xl text-white mb-8 group-hover:bg-orange transition-colors duration-300">
                {c.initials}
              </div>

              <div>
                <span className="text-[10px] font-bold text-sky uppercase tracking-[2px] mb-2 block">{c.role}</span>
                <h3 className="font-heading text-3xl text-navy uppercase mb-4 tracking-[1px]">{c.name}</h3>
                <p className="text-muted text-[14px] leading-[1.7]">
                  {c.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center">
         <div className="w-full max-w-[800px] h-[1px] bg-navy/5 mb-8"></div>
         <p className="text-[12px] text-muted uppercase tracking-[2px] font-bold">
            And a dedicated team of junior development specialists.
         </p>
      </div>
    </section>
  );
}
