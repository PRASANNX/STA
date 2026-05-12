"use client";

import Link from "next/link";

export default function JoinCTA() {
  return (
    <section id="cta" className="py-[120px] lg:py-[200px] px-6 lg:px-16 bg-navy relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky/[0.03] -skew-x-12 transform origin-top translate-x-[20%]"></div>

      <div className="relative z-10 text-center max-w-[900px] mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-sky-light mb-8">
          Ready to Start?
        </div>

        <h2 className="font-heading text-[clamp(52px,9vw,130px)] leading-[0.85] text-white uppercase mb-10 tracking-[1px]">
          Join The <br />
          <span className="text-orange">STA Legacy</span>
        </h2>

        <p className="text-white/45 text-[18px] leading-[1.7] max-w-[480px] mx-auto mb-14">
          Become part of Indore&apos;s most successful sports community. 
          Book your first trial session completely free — no commitments, just play.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="https://wa.me/919754544265?text=Hi%2C%20I'd%20like%20to%20book%20a%20free%20trial%20session%20at%20STA."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-orange text-white px-12 py-5 rounded-full font-heading text-2xl uppercase tracking-[2px] hover:bg-[#e06a15] transition-all hover:-translate-y-1 shadow-[0_15px_40px_rgba(244,121,32,0.3)]"
          >
            Claim Free Trial
          </a>
          <a
            href="mailto:info@sta.ind.in"
            className="w-full sm:w-auto bg-transparent text-white border-2 border-white/15 px-12 py-5 rounded-full font-heading text-2xl uppercase tracking-[2px] hover:bg-white hover:text-navy transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* Compelling verified reasons — not generic "01 02 03" (H-08, L-06) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10 pt-16">
          <div className="text-left sm:text-center">
            <div className="font-heading text-5xl text-sky mb-3">10+</div>
            <h4 className="font-heading text-lg text-white uppercase tracking-[1px] mb-2">
              Years Building Champions
            </h4>
            <p className="text-white/30 text-[12px] leading-[1.6]">
              Founded 2014 by Director Suryansh Yadav. Continuous coaching excellence for a decade.
            </p>
          </div>
          <div className="text-left sm:text-center">
            <div className="font-heading text-5xl text-sky mb-3">3</div>
            <h4 className="font-heading text-lg text-white uppercase tracking-[1px] mb-2">
              Sports, One Academy
            </h4>
            <p className="text-white/30 text-[12px] leading-[1.6]">
              Tennis (primary), Pickleball (SPA), and Table Tennis — all under one roof with specialist coaches.
            </p>
          </div>
          <div className="text-left sm:text-center">
            <div className="font-heading text-5xl text-sky mb-3">7</div>
            <h4 className="font-heading text-lg text-white uppercase tracking-[1px] mb-2">
              Days of Coaching
            </h4>
            <p className="text-white/30 text-[12px] leading-[1.6]">
              Coaching available every day. Morning (6–10 AM) and evening (4–10 PM) batches. Court booking Tue–Sun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
