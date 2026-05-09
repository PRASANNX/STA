"use client";

import Link from "next/link";

export default function Gallery() {
  return (
    <section id="gallery" className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-navy-2 reveal-item">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-6">
            Life At STA
          </div>
          <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] m-0 text-white">
            Action <span className="text-lime">&</span> Energy
          </h2>
        </div>
        <Link 
          href="https://instagram.com" 
          target="_blank"
          className="bg-transparent text-white border-[1.5px] border-[rgba(200,232,53,0.3)] px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-[1px] uppercase transition-all hover:bg-lime hover:border-lime hover:text-navy inline-flex items-center justify-center whitespace-nowrap self-start lg:self-auto"
        >
          Follow @STA.Indore
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[600px]">
        {/* Large item taking 2x2 */}
        <div className="col-span-2 row-span-2 bg-card rounded-2xl overflow-hidden relative group">
          <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center gap-3 p-6 bg-navy border border-[rgba(200,232,53,0.15)] transition-all group-hover:border-[rgba(200,232,53,0.4)]">
            <span className="text-[28px]">🎾</span>
            <div className="text-[12px] text-muted font-medium tracking-[1px] text-center uppercase">Tournament Finals</div>
          </div>
        </div>
        
        {/* Standard items */}
        {[
          { icon: "🏓", label: "Pickleball Drop-In" },
          { icon: "🏆", label: "State Champions" },
          { icon: "👨‍👩‍👧", label: "Kids Batch" },
          { icon: "🎾", label: "Evening Lights" }
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-2xl overflow-hidden relative group">
            <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center gap-3 p-6 bg-navy border border-[rgba(200,232,53,0.15)] transition-all group-hover:border-[rgba(200,232,53,0.4)]">
              <span className="text-[28px]">{item.icon}</span>
              <div className="text-[12px] text-muted font-medium tracking-[1px] text-center uppercase">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
