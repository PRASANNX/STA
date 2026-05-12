"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    text: "My son joined STA at age 7 and in just 2 years he's competing at district level.",
    name: "Rajesh Patel",
    role: "Parent",
    pos: { top: "10%", left: "5%" },
    color: "bg-navy"
  },
  {
    text: "Best academy in Indore. The facilities are great and the community feels like family.",
    name: "Anita Sharma",
    role: "Adult Member",
    pos: { top: "50%", left: "15%" },
    color: "bg-orange"
  },
  {
    text: "Started pickleball at 45 and the coaches are patient and encouraging. Highly recommend!",
    name: "Vijay Gupta",
    role: "Pickleballer",
    pos: { top: "25%", left: "40%" },
    color: "bg-sky"
  },
  {
    text: "The multi-sport approach sets STA apart. My kids train in both tennis and pickleball.",
    name: "Meera Kulkarni",
    role: "Parent",
    pos: { top: "60%", left: "55%" },
    color: "bg-navy"
  },
  {
    text: "Coach Kawaljeet Sir's bootcamp transformed my game. Competing in PWR 200 now!",
    name: "Dhruv Verma",
    role: "Pro Player",
    pos: { top: "15%", left: "75%" },
    color: "bg-orange"
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".testimonial-bubble");
    
    cards.forEach((card, i) => {
        // Floating animation
        gsap.to(card, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
        });

        // Scroll reveal
        gsap.fromTo(card, 
            { scale: 0.5, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    once: true
                }
            }
        );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="py-[120px] lg:py-[200px] bg-cream relative overflow-hidden min-h-[800px]">
      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6 mb-20">
        <div className="section-badge mb-6">Testimonials</div>
        <h2 className="font-heading text-[clamp(50px,8vw,100px)] leading-[0.9] text-navy uppercase tracking-[1px]">
          What Our <br />
          <span className="text-sky">Community Says</span>
        </h2>
        <p className="text-muted text-[16px] leading-[1.8] mt-6 max-w-[500px] mx-auto">
            Experience the transformation. Join the hundreds of players who have found their passion at STA.
        </p>
      </div>

      {/* Floating Bubbles Container */}
      <div className="relative w-full h-[600px] hidden lg:block">
        {reviews.map((r, i) => (
          <div 
            key={i} 
            className={`testimonial-bubble absolute p-8 rounded-[40px] shadow-xl max-w-[300px] border-2 border-white/20 text-white ${r.color}`}
            style={{ top: r.pos.top, left: r.pos.left }}
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-white text-[12px]">★</span>)}
            </div>
            <p className="text-[14px] leading-[1.6] mb-6 font-medium italic">
                "{r.text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-[14px]">
                    {r.name.charAt(0)}
                </div>
                <div>
                    <div className="text-[13px] font-bold uppercase tracking-[1px]">{r.name}</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-[1px]">{r.role}</div>
                </div>
            </div>
            {/* Arrow Pointer */}
            <div className={`absolute bottom-[-10px] left-10 w-5 h-5 rotate-45 ${r.color}`}></div>
          </div>
        ))}
      </div>

      {/* Mobile Grid */}
      <div className="lg:hidden flex flex-col gap-6 px-6">
        {reviews.map((r, i) => (
          <div key={i} className={`p-8 rounded-[30px] text-white ${r.color}`}>
            <p className="text-[14px] leading-[1.6] mb-6 font-medium italic">"{r.text}"</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">{r.name.charAt(0)}</div>
                <div className="text-[12px] font-bold">{r.name} · {r.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
          <button className="bg-navy text-white px-10 py-4 rounded-full font-heading text-xl uppercase tracking-[1px] hover:bg-orange transition-all">
              View All Reviews
          </button>
      </div>
    </section>
  );
}
