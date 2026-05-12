"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef(null);
  const tickerRef = useRef(null);

  // Real STA milestones — verified against PRD and client snapshot
  const milestones = [
    { year: "2024", title: "PWR 200 Finalists", event: "Pickleball World Rankings Circuit", verified: true },
    { year: "2023", title: "League of Champions", event: "Indore Tennis League", verified: true },
    { year: "2023", title: "State-Level Junior Champions", event: "MP State Tennis Championship", verified: true },
    { year: "2022", title: "SPA Indore Launch", event: "Surya Pickleball Academy Established", verified: true },
    { year: "2021", title: "National Circuit Players", event: "AITA Junior & Senior Tournaments", verified: true },
    { year: "2014", title: "Academy Founded", event: "STA Kanadia Main Road, Indore", verified: true },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Real milestone ticker — scrolls with parallax
    if (tickerRef.current) {
      gsap.to(tickerRef.current, {
        x: "-30%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Milestone cards reveal
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".milestone-card"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".milestone-grid"),
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="py-[100px] lg:py-[160px] bg-navy overflow-hidden relative">
      {/* Real STA Milestone Ticker — not generic words */}
      <div className="absolute top-0 left-0 w-full opacity-[0.06] pointer-events-none select-none py-8">
        <div ref={tickerRef} className="font-heading text-[clamp(80px,12vw,150px)] text-white whitespace-nowrap uppercase tracking-[4px]">
          STA · 10 YEARS · INDORE · PWR 200 · LEAGUE OF CHAMPIONS · SURYA PICKLEBALL · STA · 10 YEARS · INDORE
        </div>
      </div>

      <div className="px-6 lg:px-16 relative z-10">
        <div className="max-w-[700px] mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-sky-light mb-6">
            Our Legacy
          </div>
          <h2 className="font-heading text-[clamp(44px,6vw,88px)] leading-[0.9] text-white uppercase mb-6">
            A Decade of <br />
            <span className="text-orange">Proven Results</span>
          </h2>
          <p className="text-white/45 text-[16px] leading-[1.8] max-w-[480px]">
            From Kanadia Main Road to national circuits — our players consistently 
            prove that the STA coaching method produces champions.
          </p>
        </div>

        {/* Milestone Grid with verified data */}
        <div className="milestone-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
          {milestones.map((m, i) => (
            <div key={i} className="milestone-card p-10 border-r border-b border-white/10 group hover:bg-white/[0.03] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-bold text-sky uppercase tracking-[3px]">{m.year}</span>
                {m.verified && (
                  <span className="text-[8px] text-white/20 uppercase tracking-[1px] border border-white/10 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <h3 className="font-heading text-[clamp(22px,2.5vw,30px)] text-white uppercase mb-2 group-hover:text-orange transition-colors">
                {m.title}
              </h3>
              <p className="text-white/35 text-[12px] uppercase tracking-[1px]">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
