"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
            // Optional: stop observing once revealed
            // observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Give the DOM a tiny bit of time to render all items before observing
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-item");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
}
