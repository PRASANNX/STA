"use client";

import { useState } from "react";
import useAppStore from "@/store/useAppStore";

export default function SportSelector() {
  const [active, setActive] = useState(0);
  const setActiveSport = useAppStore((state) => state.setActiveSport);

  const sports = [
    { name: "TENNIS", icon: "🎾", store: "tennis" },
    { name: "PICKLEBALL", icon: "🏓", store: "pickleball" },
    { name: "TABLE TENNIS", icon: "🏓", store: "tt" },
    { name: "FITNESS", icon: "🏋️", store: "tennis" }
  ];

  return (
    <div className="mt-14 flex flex-col gap-3 max-w-[480px]">
      {sports.map((sport, idx) => {
        const isActive = active === idx;
        return (
          <div
            key={idx}
            onMouseEnter={() => {
              setActive(idx);
              setActiveSport(sport.store);
            }}
            onMouseLeave={() => setActiveSport("tennis")}
            className={`flex items-center justify-between px-7 py-4 rounded-[60px] border-[1.5px] cursor-pointer transition-all duration-250 relative overflow-hidden group ${
              isActive
                ? "bg-accent border-accent"
                : "border-[rgba(200,232,53,0.15)] hover:bg-accent hover:border-accent"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-[22px]">{sport.icon}</span>
              <span
                className={`font-heading text-[24px] tracking-[2px] ${
                  isActive ? "text-background" : "text-foreground group-hover:text-background"
                }`}
              >
                {sport.name}
              </span>
            </div>
            <div
              className={`text-[20px] transition-transform duration-200 ${
                isActive
                  ? "text-background rotate-45"
                  : "text-foreground group-hover:text-background group-hover:rotate-45"
              }`}
            >
              ↗
            </div>
          </div>
        );
      })}
    </div>
  );
}
