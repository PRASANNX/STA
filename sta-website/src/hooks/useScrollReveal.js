"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Give DOM a small tick to render everything
    const timeoutId = setTimeout(() => {
      const elements = gsap.utils.toArray(".reveal-item");

      elements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Trigger when top of element reaches 85% down viewport
            once: true,       // Only animate once
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
