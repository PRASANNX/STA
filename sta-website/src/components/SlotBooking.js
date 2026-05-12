"use client";

import { useState } from "react";
import useAppStore from "@/store/useAppStore";

const sportData = {
  tennis: {
    label: "Tennis",
    color: "var(--color-navy)",
    sessions: [
      { type: "Private Lesson", price: "₹800 / hour", status: "Popular" },
      { type: "Group Session", price: "₹400 / hour", status: "Best Value" },
      { type: "Trial Session", price: "Free", status: "New" },
    ],
    slots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
  },
  pickleball: {
    label: "Pickleball",
    color: "var(--color-sky)",
    sessions: [
      { type: "Beginner Class", price: "₹600 / hour", status: "Fastest Growing" },
      { type: "Open Play", price: "₹300 / hour", status: "Community" },
      { type: "Trial Session", price: "Free", status: "New" },
    ],
    slots: ["6:00 AM", "7:00 AM", "8:00 AM", "5:00 PM", "6:00 PM", "7:00 PM"],
  },
  tt: {
    label: "Table Tennis",
    color: "var(--color-orange)",
    sessions: [
      { type: "Pro Drills", price: "₹700 / hour", status: "Intense" },
      { type: "Standard Session", price: "₹500 / hour", status: "All Levels" },
      { type: "Trial Session", price: "Free", status: "New" },
    ],
    slots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"],
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
    <section id="booking" className="py-[100px] lg:py-[150px] px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: Sport Toggles (Delution Style) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="section-badge">Booking Center</div>
          <h2 className="font-heading text-[clamp(48px,6vw,88px)] leading-[0.9] tracking-[1px] text-navy mb-8 uppercase">
            Game On, <br />
            <span className="text-sky">Play Hard.</span>
          </h2>

          <div className="flex flex-col gap-4">
            {Object.entries(sportData).map(([key, sport]) => {
              const isActive = activeSport === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSportChange(key)}
                  className={`
                    group flex items-center justify-between px-8 py-5 rounded-full border-2 transition-all duration-300
                    ${isActive 
                        ? "bg-navy border-navy text-white scale-105 shadow-[0_15px_30px_rgba(27,42,107,0.2)]" 
                        : "bg-transparent border-navy/10 text-navy hover:border-navy/30"
                    }
                  `}
                >
                  <span className="font-heading text-2xl uppercase tracking-[1px]">
                    {sport.label}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-orange text-white' : 'bg-navy/5 text-navy'}`}>
                    {isActive ? '✓' : '+'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Booking Interface (TENISTA Style) */}
        <div className="lg:col-span-7">
          <div className="bg-cream rounded-[40px] p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-navy/5">
            <div className="mb-10">
                <h3 className="font-heading text-4xl text-navy mb-2 uppercase">{data.label} Packages</h3>
                <div className="h-1 w-20 bg-orange rounded-full"></div>
            </div>

            <div className="space-y-4 mb-10">
              {data.sessions.map((session, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-3xl bg-white border border-navy/5 hover:border-sky/30 transition-all group">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-orange mb-1 block">{session.status}</span>
                    <h4 className="font-heading text-2xl text-navy uppercase">{session.type}</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                        <span className="text-[11px] text-muted uppercase tracking-[1px] block">Price</span>
                        <span className="font-heading text-xl text-navy">{session.price}</span>
                    </div>
                    <button className="bg-navy text-white px-6 py-3 rounded-full font-bold text-[12px] uppercase tracking-[1px] hover:bg-orange transition-all">
                        Select
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-heading text-2xl text-navy mb-6 uppercase tracking-[1px]">Select Time Slot</h4>
              <div className="flex flex-wrap gap-2">
                {data.slots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSlot(slot)}
                    className={`
                      px-5 py-3 rounded-2xl font-bold text-[13px] transition-all border-2
                      ${selectedSlot === slot 
                        ? "bg-orange border-orange text-white shadow-[0_10px_20px_rgba(244,121,32,0.3)]" 
                        : "bg-white border-navy/5 text-navy hover:border-sky"
                      }
                    `}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <span className="text-[11px] text-muted uppercase tracking-[2px] block mb-1">Total Confirmation</span>
                    <span className="font-heading text-3xl text-navy uppercase">{activeSport} · {selectedSlot || '---'}</span>
                </div>
                <a
                    href={`https://wa.me/919754544265?text=Hi%2C%20I'd%20like%20to%20book%20a%20${data.label}%20session${selectedSlot ? `%20at%20${selectedSlot}` : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-navy text-white px-10 py-4 rounded-full font-heading text-xl uppercase tracking-[2px] hover:bg-orange transition-all text-center"
                >
                    Confirm Booking
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
