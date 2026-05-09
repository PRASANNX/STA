"use client";

import Link from "next/link";

export default function JoinCTA() {
  return (
    <section id="cta" className="py-[120px] px-6 lg:px-12 bg-gradient-to-b from-navy-2 to-navy text-center relative overflow-hidden reveal-item">
      {/* Background Decor */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,232,53,0.06)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-6">
          Join STA
        </div>
        <h2 className="font-heading text-[clamp(48px,6vw,88px)] leading-none tracking-[1px] mb-4 text-white">
          Ready to Join<br />The <span className="text-lime">STA Legacy?</span>
        </h2>
        <p className="text-muted text-[16px] leading-[1.7] max-w-[480px] mx-auto mb-12">
          Book a free trial session today. No commitment. Just come, play, and feel the STA difference.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="https://wa.me/919754544265" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white border-none py-3.5 px-7 rounded-full cursor-pointer text-[14px] font-semibold no-underline inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Suryansh Sir
          </a>
          <a href="mailto:info@sta.ind.in" className="bg-transparent text-white border-[1.5px] border-[rgba(200,232,53,0.3)] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:bg-lime hover:border-lime hover:text-navy inline-flex items-center justify-center">
            Book Free Trial Session
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-10 lg:gap-14">
          <div className="flex flex-col items-center gap-1.5">
            <div className="text-[11px] text-muted tracking-[2px] uppercase font-medium">Call / WhatsApp</div>
            <div className="text-[15px] text-lime font-semibold">+91 97545 44265</div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="text-[11px] text-muted tracking-[2px] uppercase font-medium">Email</div>
            <div className="text-[15px] text-lime font-semibold">info@sta.ind.in</div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="text-[11px] text-muted tracking-[2px] uppercase font-medium">Location</div>
            <div className="text-[15px] text-lime font-semibold">Kanadia Main Road, Indore</div>
          </div>
        </div>
      </div>
    </section>
  );
}
