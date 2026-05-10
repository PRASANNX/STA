"use client";

import { useState } from "react";
import useAppStore from "@/store/useAppStore";

const allPrograms = [
  { id: 1, sport: "tennis", sportName: "🎾 Tennis", title: "Junior Starter", age: "Kids · Age 5–12 · Beginner", price: "₹2,500" },
  { id: 2, sport: "tennis", sportName: "🎾 Tennis", title: "Performance Track", age: "Teens · Age 13–17 · Intermediate", price: "₹3,500" },
  { id: 3, sport: "tennis", sportName: "🎾 Tennis", title: "Adult Coaching", age: "Adults · Age 18+ · All Levels", price: "₹3,000" },
  { id: 4, sport: "pickleball", sportName: "Pickleball", title: "Intro to Pickleball", age: "All Ages · Beginner", price: "₹2,500" },
  { id: 5, sport: "pickleball", sportName: "Pickleball", title: "Pickleball Advanced", age: "All Ages · Competitive", price: "₹3,000" },
  { id: 6, sport: "tt", sportName: "🏓 Table Tennis", title: "TT Standard", age: "All Ages · All Levels", price: "₹2,000" }
];

export default function Programs() {
  const [filter, setFilter] = useState("all");
  const setActiveSport = useAppStore((state) => state.setActiveSport);

  const filteredPrograms = allPrograms.filter((p) => {
    if (filter === "all") return true;
    if (filter === "kids") return p.age.includes("Kids");
    if (filter === "teens") return p.age.includes("Teens");
    if (filter === "adults") return p.age.includes("Adults");
    return p.sport === filter;
  });

  return (
    <section id="programs" className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-background-2 reveal-item">
      <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
        Training Programs
      </div>
      <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-4 text-foreground">
        Find Your<br />
        <span className="text-accent">Program</span>
      </h2>
      <p className="text-muted text-[15px] leading-[1.7] max-w-[500px] mb-8">
        Open every day for coaching. Court bookings available Tuesday–Sunday.
      </p>

      {/* Toggles */}
      <div className="flex flex-wrap gap-3 mb-12">
        {[
          { id: "all", label: "All Programs" },
          { id: "tennis", label: "🎾 Tennis" },
          { id: "pickleball", label: "Pickleball" },
          { id: "tt", label: "🏓 Table Tennis" },
          { id: "kids", label: "Kids (5–12)" },
          { id: "teens", label: "Teens (13–17)" },
          { id: "adults", label: "Adults (18+)" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer border ${
              filter === btn.id
                ? "bg-accent text-background border-accent shadow-[0_0_15px_rgba(200,232,53,0.3)]"
                : "bg-transparent text-muted border-[rgba(200,232,53,0.3)] hover:border-accent hover:text-foreground"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setActiveSport(p.sport)}
            onMouseLeave={() => setActiveSport("tennis")}
            className="bg-surface border border-[rgba(200,232,53,0.15)] rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[rgba(200,232,53,0.4)]"
          >
            <div className="p-7 pb-6 border-b border-[rgba(200,232,53,0.1)]">
              <div className="inline-flex items-center gap-1.5 bg-background border border-[rgba(200,232,53,0.2)] px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-[1px] text-foreground mb-5">
                {p.sportName}
              </div>
              <h3 className="font-heading text-[28px] tracking-[1px] text-foreground mb-2">{p.title}</h3>
              <p className="text-accent text-[13px] font-medium mb-5">{p.age}</p>
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-[rgba(200,232,53,0.5)]"></div>
                6:00–10:00 AM &nbsp;|&nbsp; 4:00–10:00 PM
              </div>
            </div>
            <div className="p-6 pt-5 flex items-center justify-between">
              <div className="text-[13px] text-muted">
                From <strong className="text-foreground text-[16px]">{p.price}/mo</strong>
              </div>
              <a href="#cta" className="text-accent text-[13px] font-semibold tracking-[1px] uppercase no-underline hover:underline">
                Enroll →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
