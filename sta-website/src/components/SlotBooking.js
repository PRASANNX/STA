"use client";

import { useState } from "react";
import useAppStore from "@/store/useAppStore";

const sportData = {
  tennis: {
    label: "Tennis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M18.09 5.91A10 10 0 0 0 5.91 18.09" />
        <path d="M5.91 5.91A10 10 0 0 0 18.09 18.09" />
      </svg>
    ),
    sessions: [
      { type: "Private Lesson", desc: "1-on-1 personalized coaching with certified pro", price: "₹800/hr" },
      { type: "Group Session", desc: "Train together, improve faster, enjoy the game", price: "₹400/hr" },
      { type: "Trial Session", desc: "Meet your coach and try a class before committing", price: "Free" },
    ],
    slots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
    courts: "4 Professional Courts",
    availability: "Tue – Sun",
  },
  pickleball: {
    label: "Pickleball",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    sessions: [
      { type: "Beginner Coaching", desc: "Learn the basics of pickleball with expert coaches", price: "₹600/hr" },
      { type: "Open Play", desc: "Drop-in sessions, all levels welcome", price: "₹300/hr" },
      { type: "Trial Session", desc: "Try pickleball for the first time — on us", price: "Free" },
    ],
    slots: ["6:00 AM", "7:00 AM", "8:00 AM", "5:00 PM", "6:00 PM", "7:00 PM"],
    courts: "2 Dedicated Courts",
    availability: "Tue – Sun",
  },
  tt: {
    label: "Table Tennis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="15" cy="9" r="7" />
        <path d="M7.5 16.5L3 21" />
        <path d="M5 14l-2 2" />
        <circle cx="6" cy="18" r="2" />
      </svg>
    ),
    sessions: [
      { type: "Standard Training", desc: "All-level table tennis coaching in indoor facility", price: "₹500/hr" },
      { type: "Advanced Drills", desc: "High-intensity practice for competitive players", price: "₹700/hr" },
      { type: "Trial Session", desc: "See if TT is the right fit for you", price: "Free" },
    ],
    slots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"],
    courts: "6 Indoor Tables",
    availability: "Mon – Sun",
  },
};

export default function SlotBooking() {
  const [activeSport, setLocalSport] = useState("tennis");
  const setGlobalSport = useAppStore((state) => state.setActiveSport);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSportChange = (sport) => {
    setLocalSport(sport);
    setGlobalSport(sport);
    setSelectedSlot(null);
  };

  const data = sportData[activeSport];

  return (
    <section id="booking" className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-background reveal-item">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
          Book a Slot
        </div>
        <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-4 text-foreground">
          Choose Your<br />
          <span className="text-accent">Sport</span>
        </h2>
        <p className="text-muted text-[15px] leading-[1.7] max-w-[500px] mx-auto">
          Select your sport, pick a time slot, and book your session instantly.
        </p>
      </div>

      {/* === PILL TOGGLE BUTTONS === */}
      <div className="flex flex-col items-center gap-5 mb-16">
        {Object.entries(sportData).map(([key, sport]) => {
          const isActive = activeSport === key;
          return (
            <button
              key={key}
              onClick={() => handleSportChange(key)}
              className={`
                group relative flex items-center gap-4 w-[280px] sm:w-[320px] h-[72px] rounded-full 
                border-2 cursor-pointer transition-all duration-500 ease-out overflow-hidden
                ${isActive
                  ? "bg-accent border-accent shadow-[0_8px_40px_rgba(200,232,53,0.3)] scale-105"
                  : "bg-surface border-foreground/10 hover:border-foreground/25 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                }
              `}
              style={{
                transform: isActive ? "scale(1.05)" : key === "pickleball" ? "translateX(30px)" : key === "tt" ? "translateX(-20px)" : "",
              }}
            >
              {/* Icon Circle */}
              <div
                className={`
                  w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0 ml-2 transition-all duration-500
                  ${isActive
                    ? "bg-surface text-foreground"
                    : "bg-background text-foreground border border-foreground/10"
                  }
                `}
              >
                {sport.icon}
              </div>

              {/* Label */}
              <span
                className={`
                  text-[18px] font-bold tracking-[1px] uppercase transition-colors duration-300
                  ${isActive ? "text-foreground" : "text-foreground/70"}
                `}
              >
                {sport.label}?
              </span>

              {/* Active Indicator Dot */}
              {isActive && (
                <div className="absolute right-5 w-3 h-3 rounded-full bg-foreground/20 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* === BOOKING CARD === */}
      <div
        className="max-w-[720px] mx-auto bg-surface rounded-3xl border border-foreground/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500"
        key={activeSport}
        style={{ animation: "fadeSlideUp 0.5s ease-out" }}
      >
        {/* Card Header */}
        <div className="px-8 pt-8 pb-6 border-b border-foreground/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-foreground">
                {data.icon}
              </div>
              <div>
                <h3 className="font-heading text-[28px] tracking-[1px] text-foreground leading-none">{data.label}</h3>
                <p className="text-muted text-[12px] mt-0.5">{data.courts} · {data.availability}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Session Types */}
        <div className="px-8 py-6 space-y-4">
          {data.sessions.map((session, i) => (
            <div
              key={i}
              className="flex items-start sm:items-center justify-between gap-4 py-3 border-b border-foreground/5 last:border-0"
            >
              <div className="flex-1">
                <h4 className="text-[15px] font-bold text-foreground">{session.type}</h4>
                <p className="text-muted text-[12px] leading-[1.5] mt-0.5 max-w-[300px]">{session.desc}</p>
              </div>
              <div
                className={`
                  text-[15px] font-bold shrink-0 px-4 py-1.5 rounded-full
                  ${session.price === "Free"
                    ? "bg-accent/20 text-accent-2"
                    : "text-foreground"
                  }
                `}
              >
                {session.price}
              </div>
            </div>
          ))}
        </div>

        {/* Time Slots Grid */}
        <div className="px-8 py-6 bg-background/50">
          <h4 className="text-[11px] font-semibold tracking-[2px] uppercase text-muted mb-4">Available Slots</h4>
          <div className="flex flex-wrap gap-2.5">
            {data.slots.map((slot, i) => (
              <button
                key={i}
                onClick={() => setSelectedSlot(slot)}
                className={`
                  px-4 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 border
                  ${selectedSlot === slot
                    ? "bg-accent text-foreground border-accent shadow-[0_4px_15px_rgba(200,232,53,0.3)]"
                    : "bg-surface text-muted border-foreground/10 hover:border-accent hover:text-foreground"
                  }
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-8 py-6 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`https://wa.me/919754544265?text=Hi%2C%20I'd%20like%20to%20book%20a%20${data.label}%20session${selectedSlot ? `%20at%20${selectedSlot}` : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-foreground px-8 py-3.5 rounded-full font-bold text-[14px] no-underline flex items-center justify-center gap-2 transition-all hover:bg-accent-2 hover:-translate-y-0.5 border-none cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {selectedSlot ? `Book ${selectedSlot} Slot` : "Book via WhatsApp"}
          </a>
          <span className="text-muted text-[12px]">
            {selectedSlot ? `${data.label} · ${selectedSlot}` : "Select a time slot above"}
          </span>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
