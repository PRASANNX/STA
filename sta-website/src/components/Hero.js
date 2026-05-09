"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const wrapperRef = useRef(null);
  const sceneRef = useRef(null);

  // Pickleball Hole Data
  const holes = [
    {top:18,left:35,w:9,h:9},{top:20,left:55,w:8,h:8},{top:20,left:72,w:7,h:7},
    {top:32,left:22,w:10,h:10},{top:32,left:44,w:9,h:9},{top:34,left:62,w:8,h:8},{top:30,left:78,w:7,h:7},
    {top:46,left:15,w:9,h:9},{top:47,left:35,w:10,h:10},{top:46,left:55,w:9,h:9},{top:47,left:72,w:8,h:8},{top:44,left:86,w:6,h:6},
    {top:60,left:22,w:9,h:9},{top:60,left:42,w:9,h:9},{top:60,left:62,w:8,h:8},{top:58,left:78,w:7,h:7},
    {top:74,left:30,w:9,h:9},{top:73,left:50,w:8,h:8},{top:74,left:68,w:7,h:7},
    {top:82,left:40,w:8,h:8},{top:83,left:58,w:7,h:7},
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scene = sceneRef.current;
    let ticking = false;
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;

    function getScrollProgress() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    }

    function onScroll() {
      const progress = getScrollProgress();
      targetY = progress * 360 * 2.5;
      targetX = progress * 360 * 0.8;
      if (!ticking) {
        requestAnimationFrame(render);
        ticking = true;
      }
    }

    function render() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (wrapper) {
        wrapper.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      }
      ticking = false;

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        ticking = true;
        requestAnimationFrame(render);
      }
    }

    const onMouseEnter = () => {
      targetY += 60;
      targetX += 20;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (scene) scene.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scene) scene.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-12 pt-[100px] pb-[60px] relative overflow-hidden text-center lg:text-left" id="hero">
      <div className="hero-bg"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-lime var(--animate-pulse-custom)"></span>
          10 Years of Excellence
        </div>
        <h1 className="font-heading text-[clamp(64px,8vw,110px)] leading-[0.95] tracking-[1px] mb-2">
          Surya<br />Tennis<br />
          <span className="text-[clamp(50px,6vw,90px)] text-lime italic font-light">&</span><br />
          Pickleball<br />
          <span className="text-lime">Academy</span>
        </h1>
        <p className="text-muted text-[15px] leading-[1.7] max-w-[420px] mb-9 mx-auto lg:mx-0">
          Indore's premier sports academy — producing State, National & International players under the leadership of <strong className="text-lime font-semibold">Director Suryansh Yadav</strong>.
        </p>
        <div className="flex gap-3.5 flex-wrap justify-center lg:justify-start">
          <Link href="#cta" className="bg-lime text-navy px-7 py-3.5 rounded-full font-bold text-[14px] no-underline inline-flex items-center gap-2 transition-all border-none cursor-pointer tracking-[0.3px] hover:bg-lime-2 hover:-translate-y-0.5">
            Book Free Trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="#about" className="bg-transparent text-white px-7 py-3.5 rounded-full font-semibold text-[14px] no-underline inline-flex items-center gap-2 transition-all border-[1.5px] border-white/25 hover:border-lime hover:text-lime">
            Our Story
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center mt-12 lg:mt-0">
        <div className="ball-scene" ref={sceneRef}>
          <div className="ball-wrapper" ref={wrapperRef}>
            <div className="ball-sphere">
              {holes.map((h, i) => (
                <div
                  key={i}
                  className="ball-hole"
                  style={{ top: `${h.top}%`, left: `${h.left}%`, width: `${h.w}%`, height: `${h.h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted text-[11px] tracking-[2px] uppercase flex flex-col items-center gap-2">
            <span>Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-lime to-transparent var(--animate-scroll-arrow)"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
