"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Two distinct sets of testimonials — no duplicates (H-07)
const parentReviews = [
  {
    text: "My son joined STA at age 7 and in just 2 years he's competing at district level. Suryansh sir's coaching methodology is exceptional — he builds fundamentals before competition.",
    name: "Rajesh Patel",
    role: "Parent · Junior Tennis",
    color: "bg-navy",
  },
  {
    text: "Best academy in Indore, hands down. The facilities are maintained to a high standard and the coaching staff genuinely care about every player's development.",
    name: "Anita Sharma",
    role: "Parent · Multi-Sport",
    color: "bg-sky",
  },
  {
    text: "The multi-sport approach sets STA apart. My kids train in both tennis and pickleball — it's improved their agility and they love every session.",
    name: "Meera Kulkarni",
    role: "Parent · Tennis & Pickleball",
    color: "bg-navy",
  },
];

const playerReviews = [
  {
    text: "Started pickleball at SPA when I was 45. The coaches never made me feel out of place — patient, encouraging, and professional. Now I play competitive doubles!",
    name: "Vijay Gupta",
    role: "Member · Pickleball",
    color: "bg-orange",
  },
  {
    text: "Kawaljeet Sir's bootcamp transformed my backhand completely. I went from a casual weekend player to competing in the PWR 200 circuit in just 6 months.",
    name: "Dhruv Verma",
    role: "Competitive Player · Tennis",
    color: "bg-navy",
  },
  {
    text: "The evening batch timing works perfectly for working professionals. The coaching is structured, the drills are intense, and I've lost 8kg since joining!",
    name: "Priya Deshmukh",
    role: "Member · Adult Tennis",
    color: "bg-sky",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".review-card");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".reviews-grid"),
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const ReviewCard = ({ review }) => (
    <div className={`review-card ${review.color} p-8 lg:p-10 rounded-[32px] text-white`}>
      <div className="flex gap-1 mb-5">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className="text-white/80 text-[12px]">★</span>
        ))}
      </div>
      <blockquote className="text-[15px] leading-[1.7] mb-8 font-medium">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-5 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center font-heading text-[16px]">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-[13px] font-bold">{review.name}</div>
          <div className="text-[10px] text-white/50 uppercase tracking-[1px]">{review.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-[100px] lg:py-[160px] px-6 lg:px-16 bg-cream overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-[600px]">
          <div className="section-badge">Testimonials</div>
          <h2 className="font-heading text-[clamp(44px,6vw,80px)] leading-[0.9] text-navy uppercase mb-4">
            The STA Family <br />
            <span className="text-sky">Speaks</span>
          </h2>
        </div>
        <p className="text-dark/50 text-[15px] leading-[1.7] max-w-[380px]">
          Real feedback from parents and players across our Tennis, Pickleball, and Table Tennis programs.
        </p>
      </div>

      {/* Two distinct review groups — parents & players */}
      <div className="reviews-grid space-y-16">
        {/* Parents Section */}
        <div>
          <span className="text-[10px] font-bold text-orange uppercase tracking-[3px] mb-6 block">
            What Parents Say
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentReviews.map((r, i) => (
              <ReviewCard key={`parent-${i}`} review={r} />
            ))}
          </div>
        </div>

        {/* Players Section */}
        <div>
          <span className="text-[10px] font-bold text-sky uppercase tracking-[3px] mb-6 block">
            What Players Say
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playerReviews.map((r, i) => (
              <ReviewCard key={`player-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
