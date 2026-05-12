"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const awards = [
    { year: "2024", title: "PWR 200 Champions", event: "Pickleball World Rankings" },
    { year: "2023", title: "Academy of the Year", event: "MP Sports Excellence" },
    { year: "2023", title: "National Junior Finalists", event: "AITA Championship" },
    { year: "2022", title: "League of Champions", event: "Indore Tennis League" },
    { year: "2021", title: "10 Years Legacy", event: "STA Indore Anniversary" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Horizontal scroll animation for the ticker
    gsap.to(scrollRef.current, {
      x: "-20%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Award items reveal
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".award-item"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".awards-grid"),
          start: "top 85%",
          once: true,
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="py-[100px] lg:py-[150px] bg-navy overflow-hidden relative">
      {/* Background Ticker */}
      <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none select-none py-10">
        <div ref={scrollRef} className="font-heading text-[150px] text-white whitespace-nowrap uppercase">
          WINNERS BELIEVE ACHIEVE CHAMPIONS WINNERS BELIEVE ACHIEVE CHAMPIONS
        </div>
      </div>

      <div className="px-6 lg:px-12 relative z-10">
        <div className="max-w-[700px] mb-20">
          <div className="section-badge !bg-white/10 !border-white/20 !text-sky-light">Our Legacy</div>
          <h2 className="font-heading text-[clamp(48px,7vw,100px)] leading-[0.9] text-white uppercase mb-6">
            Where Champions <br />
            <span className="text-orange">Are Born</span>
          </h2>
          <p className="text-white/50 text-[16px] leading-[1.8] max-w-[500px]">
            From local tournaments to national championships, our players consistently prove that the STA method works.
          </p>
        </div>

        <div className="awards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
          {awards.map((award, i) => (
            <div key={i} className="award-item p-10 border-r border-b border-white/10 group hover:bg-white/5 transition-all duration-300">
               <span className="text-[12px] font-bold text-sky uppercase tracking-[3px] mb-4 block">{award.year}</span>
               <h3 className="font-heading text-3xl text-white uppercase mb-2 group-hover:text-orange transition-colors">{award.title}</h3>
               <p className="text-white/40 text-[13px] uppercase tracking-[1px]">{award.event}</p>
            </div>
          ))}
          <div className="award-item p-10 border-r border-b border-white/10 flex flex-col justify-center items-start bg-orange/5">
             <h3 className="font-heading text-4xl text-white uppercase leading-none mb-2">Join The</h3>
             <h3 className="font-heading text-4xl text-orange uppercase leading-none">History</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
