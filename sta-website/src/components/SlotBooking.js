"use client";

import { useState, useCallback } from "react";
import useAppStore from "@/store/useAppStore";

const sportData = {
  tennis: {
    label: "Tennis",
    sessions: [
      { type: "Free Trial Session", price: "Free", status: "Start Here", isTrial: true },
      { type: "Private Coaching", price: "₹800/hr", status: "1-on-1" },
      { type: "Group Batch", price: "₹2,500/mo", status: "Best Value" },
    ],
    slots: { morning: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM"], evening: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
  },
  pickleball: {
    label: "Pickleball",
    sessions: [
      { type: "Free Trial Session", price: "Free", status: "Start Here", isTrial: true },
      { type: "Beginner Class", price: "₹600/hr", status: "Popular" },
      { type: "Open Play", price: "₹300/hr", status: "Community" },
    ],
    slots: { morning: ["6:00 AM", "7:00 AM", "8:00 AM"], evening: ["5:00 PM", "6:00 PM", "7:00 PM"] },
  },
  tt: {
    label: "Table Tennis",
    sessions: [
      { type: "Free Trial Session", price: "Free", status: "Start Here", isTrial: true },
      { type: "Standard Session", price: "₹500/hr", status: "All Levels" },
    ],
    slots: { morning: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM"], evening: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"] },
  },
};

export default function SlotBooking() {
  const [activeSport, setLocalSport] = useState("tennis");
  const setGlobalSport = useAppStore((state) => state.setActiveSport);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedSession, setSelectedSession] = useState(0); // Trial card selected by default
  const [showToast, setShowToast] = useState(false);

  const handleSportChange = (sport) => {
    setLocalSport(sport);
    setGlobalSport(sport);
    setSelectedSlot(null);
    setSelectedSession(0);
  };

  // L-05: Success toast before WhatsApp redirect
  const handleBooking = useCallback(() => {
    const data = sportData[activeSport];
    const session = data.sessions[selectedSession];

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      const msg = `Hi, I'd like to book a ${data.label} ${session.type}${selectedSlot ? ` at ${selectedSlot}` : ""}. Please confirm availability.`;
      window.open(`https://wa.me/919754544265?text=${encodeURIComponent(msg)}`, "_blank");
    }, 1500);
  }, [activeSport, selectedSession, selectedSlot]);

  const data = sportData[activeSport];

  return (
    <section id="booking" className="py-[100px] lg:py-[160px] px-6 lg:px-16 bg-cream relative overflow-hidden">
      {/* Success Toast (L-05) */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-navy text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-[fadeSlideUp_0.3s_ease-out]">
          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[12px]">✓</span>
          <span className="font-bold text-[14px]">Redirecting to WhatsApp...</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Heading + Sport Toggles */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="section-badge">Book a Session</div>
          <h2 className="font-heading text-[clamp(44px,5vw,80px)] leading-[0.9] tracking-[1px] text-navy mb-4 uppercase">
            Game On, <br />
            <span className="text-sky">Play Hard.</span>
          </h2>
          <p className="text-dark/50 text-[15px] leading-[1.7] max-w-[400px] mb-6">
            Coaching every day. Court bookings Tuesday–Sunday. Morning &amp; evening batches available.
          </p>

          <div className="flex flex-col gap-4">
            {Object.entries(sportData).map(([key, sport]) => {
              const isActive = activeSport === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSportChange(key)}
                  className={`group flex items-center justify-between px-8 py-5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-navy border-navy text-white scale-[1.02] shadow-[0_12px_30px_rgba(27,42,107,0.15)]"
                      : "bg-transparent border-navy/10 text-navy hover:border-navy/25"
                  }`}
                >
                  <span className="font-heading text-2xl uppercase tracking-[1px]">{sport.label}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all text-[14px] ${
                    isActive ? "bg-orange text-white" : "bg-navy/5 text-navy"
                  }`}>
                    {isActive ? "✓" : "+"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Booking Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-navy/5">
            {/* Session Cards — Trial is DOMINANT (C-05) */}
            <div className="space-y-4 mb-10">
              {data.sessions.map((session, i) => {
                const isSelected = selectedSession === i;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedSession(i)}
                    className={`w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-3xl border-2 transition-all text-left cursor-pointer ${
                      session.isTrial
                        ? isSelected
                          ? "bg-navy border-navy text-white shadow-[0_12px_30px_rgba(27,42,107,0.2)]"
                          : "bg-navy/5 border-navy/20 text-navy hover:border-navy/40"
                        : isSelected
                        ? "bg-sky/10 border-sky text-navy"
                        : "bg-white border-navy/5 text-navy hover:border-navy/10"
                    }`}
                  >
                    <div className="mb-3 sm:mb-0">
                      <span className={`text-[9px] font-bold uppercase tracking-[2px] mb-1 block ${
                        session.isTrial && isSelected ? "text-orange" : session.isTrial ? "text-orange" : "text-sky"
                      }`}>
                        {session.status}
                      </span>
                      <h4 className="font-heading text-2xl uppercase">{session.type}</h4>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`font-heading text-xl ${session.isTrial ? "text-orange" : ""}`}>{session.price}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] ${
                        isSelected ? "bg-orange border-orange text-white" : "border-navy/20"
                      }`}>
                        {isSelected && "✓"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Time Slots with Morning/Evening separators */}
            <div className="mb-10">
              <h4 className="font-heading text-xl text-navy mb-4 uppercase tracking-[1px]">Select Time</h4>

              <div className="mb-4">
                <span className="text-[9px] font-bold text-orange uppercase tracking-[2px] mb-2 block">Morning Batch</span>
                <div className="flex flex-wrap gap-2">
                  {data.slots.morning.map((slot, i) => (
                    <button
                      key={`m-${i}`}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-5 py-3 rounded-2xl font-bold text-[13px] transition-all border-2 cursor-pointer ${
                        selectedSlot === slot
                          ? "bg-navy border-navy text-white shadow-md"
                          : "bg-cream border-navy/5 text-navy hover:border-navy/15"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[9px] font-bold text-sky uppercase tracking-[2px] mb-2 block">Evening Batch</span>
                <div className="flex flex-wrap gap-2">
                  {data.slots.evening.map((slot, i) => (
                    <button
                      key={`e-${i}`}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-5 py-3 rounded-2xl font-bold text-[13px] transition-all border-2 cursor-pointer ${
                        selectedSlot === slot
                          ? "bg-navy border-navy text-white shadow-md"
                          : "bg-cream border-navy/5 text-navy hover:border-navy/15"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Confirm — enlarged WhatsApp CTA (C-05) */}
            <div className="pt-8 border-t border-navy/5">
              <button
                onClick={handleBooking}
                className="w-full bg-navy text-white py-5 rounded-full font-heading text-2xl uppercase tracking-[2px] hover:bg-orange transition-all cursor-pointer shadow-[0_10px_30px_rgba(27,42,107,0.15)]"
              >
                {data.sessions[selectedSession]?.isTrial ? "Book Free Trial via WhatsApp" : "Confirm via WhatsApp"} →
              </button>
              <p className="text-center text-[11px] text-muted mt-4">
                You&apos;ll be redirected to WhatsApp to confirm with the STA team directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
