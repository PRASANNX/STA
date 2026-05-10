"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const achievements = [
    {
      num: "10+",
      title: "Years of Excellence",
      desc: "A decade-long journey of turning raw talent into competitive champions.",
    },
    {
      num: "PWR",
      title: "PWR 200 Tournament",
      desc: "Hosted marquee pickleball tournaments putting Indore on the national map.",
    },
    {
      num: "LOC",
      title: "League of Champions",
      desc: "Premier tennis event organized and championed by STA players and directors.",
    },
    {
      num: "3×",
      title: "Sports Mastery",
      desc: "Expanded from Tennis to Pickleball and Table Tennis with dedicated coaching.",
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".achievement-card");

    // Each card slides in from the right with stagger
    gsap.fromTo(
      cards,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // The big numbers have a scale pop
    const nums = cardsRef.current.querySelectorAll(".achievement-num");
    gsap.fromTo(
      nums,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-[72px] lg:py-[120px] px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(200,232,53,0.05)_0%,transparent_70%)] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
        <div className="reveal-item">
          <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
            Legacy
          </div>
          <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-4 text-foreground">
            10 Years.
            <br />
            Countless
            <br />
            <span className="text-accent">Champions</span>
          </h2>
          <p className="text-muted text-[15px] leading-[1.7] max-w-[400px]">
            From state-level titles to international courts — STA players
            compete at every level.
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-5">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="achievement-card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-surface border border-[rgba(200,232,53,0.1)] transition-all duration-300 hover:-translate-x-2 hover:border-accent hover:shadow-[0_0_30px_rgba(200,232,53,0.08)]"
              style={{ opacity: 0 }}
            >
              <div className="achievement-num font-heading text-[48px] text-accent leading-none w-24 shrink-0">
                {item.num}
              </div>
              <div>
                <h4 className="font-heading text-[24px] tracking-[1px] text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted text-[13px] leading-[1.6] m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
