"use client";

import { useState } from "react";
import useAppStore from "@/store/useAppStore";

const allPrograms = [
  { id: 1, sport: "tennis", sportName: "Tennis", title: "Junior Starter", age: "Age 5–12 · Beginner", price: "₹2,500" },
  { id: 2, sport: "tennis", sportName: "Tennis", title: "Performance Track", age: "Age 13–17 · Intermediate", price: "₹3,500" },
  { id: 3, sport: "tennis", sportName: "Tennis", title: "Adult Coaching", age: "Age 18+ · All Levels", price: "₹3,000" },
  { id: 4, sport: "pickleball", sportName: "Pickleball", title: "Intro to Pickleball", age: "All Ages · Beginner", price: "₹2,500" },
  { id: 5, sport: "pickleball", sportName: "Pickleball", title: "Pickleball Advanced", age: "All Ages · Competitive", price: "₹3,000" },
  { id: 6, sport: "tt", sportName: "Table Tennis", title: "TT Standard", age: "All Ages · All Levels", price: "₹2,000" }
];

export default function Programs() {
  const [filter, setFilter] = useState("all");
  const setActiveSport = useAppStore((state) => state.setActiveSport);

  const filteredPrograms = allPrograms.filter((p) => {
    if (filter === "all") return true;
    if (filter === "kids") return p.age.includes("Age 5–12");
    if (filter === "teens") return p.age.includes("Age 13–17");
    if (filter === "adults") return p.age.includes("Age 18+");
    return p.sport === filter;
  });

  return (
    <section id="programs" className="py-[100px] lg:py-[150px] px-6 lg:px-12 bg-cream overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-[600px]">
          <div className="section-badge">Training Programs</div>
          <h2 className="font-heading text-[clamp(48px,6vw,88px)] leading-[0.9] text-navy uppercase mb-4">
            Find Your <br />
            <span className="text-sky">Perfect Match</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { id: "all", label: "All" },
            { id: "tennis", label: "Tennis" },
            { id: "pickleball", label: "Pickleball" },
            { id: "tt", label: "Table Tennis" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-[1px] transition-all cursor-pointer border-2 ${
                filter === btn.id
                  ? "bg-navy border-navy text-white"
                  : "bg-transparent border-navy/10 text-navy hover:border-navy/30"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setActiveSport(p.sport)}
            onMouseLeave={() => setActiveSport("tennis")}
            className="group bg-white rounded-[32px] p-8 border border-navy/5 transition-all duration-500 hover:border-sky/30 hover:shadow-[0_30px_60px_rgba(27,42,107,0.05)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-orange uppercase tracking-[2px]">{p.sportName}</span>
                <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center group-hover:bg-sky/10 transition-colors">
                    <span className="text-navy">→</span>
                </div>
              </div>
              <h3 className="font-heading text-4xl text-navy uppercase mb-2 tracking-[1px]">{p.title}</h3>
              <p className="text-muted text-[13px] font-medium mb-6 uppercase tracking-[1px]">{p.age}</p>
              
              <div className="flex flex-col gap-3 pt-6 border-t border-navy/5">
                 <div className="flex items-center gap-2 text-[11px] text-muted font-bold uppercase tracking-[1px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
                    Professional Coaching
                 </div>
                 <div className="flex items-center gap-2 text-[11px] text-muted font-bold uppercase tracking-[1px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky"></span>
                    Flexible Batch Timings
                 </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-muted uppercase tracking-[1px] block">Starting from</span>
                <span className="font-heading text-2xl text-navy">{p.price}<small className="text-[12px] lowercase font-body"> / mo</small></span>
              </div>
              <a href="#cta" className="bg-navy text-white px-6 py-3 rounded-full font-bold text-[12px] uppercase tracking-[1px] hover:bg-orange transition-all">
                Enroll
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
