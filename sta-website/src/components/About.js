"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Timeline items stagger in
    const items = sectionRef.current.querySelectorAll(".timeline-item");
    gsap.fromTo(
      items,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".timeline-track"),
          start: "top 80%",
          once: true,
        },
      }
    );

    // Right-side heading reveal
    gsap.fromTo(
      sectionRef.current.querySelector(".about-heading"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-[100px] lg:py-[160px] px-6 lg:px-16 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left: STA-Specific Story + Timeline */}
        <div>
          <div className="section-badge">Our Story</div>
          
          <div className="about-heading">
            <h2 className="font-heading text-[clamp(44px,5vw,80px)] leading-[0.9] text-navy uppercase mb-8 tracking-[1px]">
              From a Single <br />
              Court to a <br />
              <span className="text-orange">Champion Factory.</span>
            </h2>
          </div>

          <p className="text-dark/60 text-[16px] leading-[1.8] max-w-[480px] mb-12">
            Founded by <strong className="text-navy font-semibold">Suryansh Yadav</strong>, 
            Surya Tennis Academy started with a single court on Kanadia Main Road and a mission: 
            make world-class racquet sport coaching accessible in Central India. 
            A decade later, STA has trained hundreds of players who compete at State, 
            National, and International levels — and launched Surya Pickleball Academy, 
            Indore&apos;s first dedicated pickleball training hub.
          </p>

          {/* Timeline — Real STA milestones */}
          <div className="timeline-track flex flex-col gap-8 border-l-2 border-navy/10 pl-8 ml-3">
            {[
              {
                year: "2014",
                title: "STA Founded in Indore",
                desc: "Started with a single court at Kanadia Main Road, Alok Nagar with Director Suryansh Yadav's vision of building champions.",
              },
              {
                year: "2020",
                title: "Surya Pickleball Academy (SPA) Launched",
                desc: "Expanded beyond tennis into India's fastest-growing racquet sport with dedicated coaching programs.",
              },
              {
                year: "2023",
                title: "PWR 200 · League of Champions",
                desc: "Hosted and competed in marquee tournaments. STA players consistently ranked in state and national circuits.",
              },
              {
                year: "2024",
                title: "10 Years of Excellence",
                desc: "A decade of producing champions across Tennis, Pickleball, and Table Tennis. The STA Family grows stronger.",
              },
            ].map((item, i) => (
              <div key={i} className="timeline-item relative" style={{ opacity: 0 }}>
                {/* Dot on timeline */}
                <div className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-navy border-2 border-white"></div>
                <span className="text-[10px] font-bold text-orange uppercase tracking-[2px] mb-1 block">
                  {item.year}
                </span>
                <h4 className="font-heading text-2xl text-navy uppercase mb-2 tracking-[0.5px]">
                  {item.title}
                </h4>
                <p className="text-dark/50 text-[13px] leading-[1.6] max-w-[360px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24">
          {[
            {
              icon: "🎾",
              title: "Tennis First",
              desc: "Structured coaching from beginner to advanced for juniors (age 5+) and adults. Every-day coaching, court booking Tue–Sun.",
              accent: true,
            },
            {
              icon: "🏓",
              title: "Pickleball Hub",
              desc: "Surya Pickleball Academy — Indore's go-to training centre for India's fastest-growing racquet sport.",
            },
            {
              icon: "🏆",
              title: "Tournament Track",
              desc: "Competitive coaching to prepare players for state and national circuits. PWR 200, League of Champions, and more.",
            },
            {
              icon: "👨‍👩‍👧",
              title: "The STA Family",
              desc: "More than an academy — a community of players, parents, and coaches who train, compete, and grow together.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`p-8 rounded-[32px] transition-all duration-300 hover:-translate-y-1 ${
                p.accent
                  ? "bg-navy text-white shadow-[0_20px_50px_rgba(27,42,107,0.15)]"
                  : "bg-cream border border-navy/5 hover:border-sky/30 hover:shadow-[0_20px_40px_rgba(27,42,107,0.06)]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[22px] mb-5 ${
                  p.accent ? "bg-white/10" : "bg-navy/5"
                }`}
              >
                {p.icon}
              </div>
              <h4
                className={`font-heading text-2xl tracking-[1px] mb-3 uppercase ${
                  p.accent ? "" : "text-navy"
                }`}
              >
                {p.title}
              </h4>
              <p
                className={`text-[13px] leading-[1.7] ${
                  p.accent ? "text-white/70" : "text-dark/50"
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
