"use client";

import Link from "next/link";
import { View } from "@react-three/drei";
import TennisBall3D from "@/components/canvas/TennisBall3D";

export default function Hero() {
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
        <div className="view-container">
          <View className="absolute inset-0">
            <TennisBall3D />
          </View>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted text-[11px] tracking-[2px] uppercase flex flex-col items-center gap-2">
            <span>Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-lime to-transparent var(--animate-scroll-arrow)"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
