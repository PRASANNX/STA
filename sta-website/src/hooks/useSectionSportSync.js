"use client";

import { useEffect } from "react";
import useAppStore from "@/store/useAppStore";

/**
 * M-06: Maps ball color to semantic sections via IntersectionObserver.
 * - Tennis sections (hero, about, coaches) → tennis (default green)
 * - Pickleball sections (gallery, camps) → pickleball (lime yellow)
 * - Table Tennis / booking → tt (orange)
 * - All others → tennis (default)
 */
const sectionSportMap = {
  hero: "tennis",
  about: "tennis",
  programs: "tennis",
  booking: "tt",
  coaches: "tennis",
  achievements: "tennis",
  gallery: "pickleball",
  camps: "pickleball",
  cta: "tennis",
};

export function useSectionSportSync() {
  const setActiveSport = useAppStore((state) => state.setActiveSport);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observers = [];

    Object.entries(sectionSportMap).forEach(([sectionId, sport]) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSport(sport);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSport]);
}
