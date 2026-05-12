"use client";

import Link from "next/link";

export default function JoinCTA() {
  return (
    <section id="cta" className="py-[120px] lg:py-[200px] px-6 lg:px-12 bg-navy relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky/5 -skew-x-12 transform origin-top translate-x-[20%]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 text-center max-w-[900px] mx-auto">
        <div className="section-badge !bg-white/10 !border-white/20 !text-sky-light mb-8">Ready to Start?</div>
        
        <h2 className="font-heading text-[clamp(60px,10vw,140px)] leading-[0.85] text-white uppercase mb-10 tracking-[1px]">
          Join The <br />
          <span className="text-orange">STA Legacy</span>
        </h2>
        
        <p className="text-white/50 text-[18px] leading-[1.7] max-w-[500px] mx-auto mb-14">
          Become part of Indore&apos;s most successful sports community. Book your first trial session completely free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/919754544265" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-orange text-white px-12 py-5 rounded-full font-heading text-2xl uppercase tracking-[2px] hover:bg-[#e06a15] transition-all hover:-translate-y-1 shadow-[0_15px_40px_rgba(244,121,32,0.3)]"
          >
            Claim Free Trial
          </a>
          <a 
            href="mailto:info@sta.ind.in"
            className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-full font-heading text-2xl uppercase tracking-[2px] hover:bg-white hover:text-navy transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10 pt-16">
            <div>
                <span className="text-sky font-heading text-4xl block mb-1">01</span>
                <span className="text-white/40 text-[11px] uppercase tracking-[2px] font-bold">Expert Coaches</span>
            </div>
            <div>
                <span className="text-sky font-heading text-4xl block mb-1">02</span>
                <span className="text-white/40 text-[11px] uppercase tracking-[2px] font-bold">Premium Courts</span>
            </div>
            <div>
                <span className="text-sky font-heading text-4xl block mb-1">03</span>
                <span className="text-white/40 text-[11px] uppercase tracking-[2px] font-bold">Proven Results</span>
            </div>
        </div>
      </div>
    </section>
  );
}
