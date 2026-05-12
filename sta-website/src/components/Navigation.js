"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between glass backdrop-blur-[12px] border-b border-navy/5">
      <Link href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-8 h-8 rounded-full bg-navy relative flex items-center justify-center shrink-0">
          <div className="w-2 h-2 rounded-full bg-orange"></div>
        </div>
        <div>
          <div className="font-heading text-xl tracking-[2px] text-navy leading-none">STA</div>
          <div className="text-[9px] tracking-[3px] text-muted font-medium uppercase">Surya Tennis Academy</div>
        </div>
      </Link>
      
      <ul className="hidden lg:flex gap-8 list-none">
        <li><Link href="#about" className="text-navy/60 no-underline text-[11px] font-bold tracking-[2px] uppercase transition-colors hover:text-orange">About</Link></li>
        <li><Link href="#programs" className="text-navy/60 no-underline text-[11px] font-bold tracking-[2px] uppercase transition-colors hover:text-orange">Programs</Link></li>
        <li><Link href="#coaches" className="text-navy/60 no-underline text-[11px] font-bold tracking-[2px] uppercase transition-colors hover:text-orange">Coaches</Link></li>
        <li><Link href="#gallery" className="text-navy/60 no-underline text-[11px] font-bold tracking-[2px] uppercase transition-colors hover:text-orange">Facilities</Link></li>
        <li><Link href="#booking" className="text-navy/60 no-underline text-[11px] font-bold tracking-[2px] uppercase transition-colors hover:text-orange">Booking</Link></li>
      </ul>
      
      <div className="flex items-center gap-3">
        <a href="https://wa.me/919754544265" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#25D366] text-white border-none py-2.5 px-5 rounded-full cursor-pointer text-[12px] font-bold no-underline transition-all hover:bg-[#20bd5c] hover:-translate-y-0.5">
          WhatsApp
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">→</span>
        </a>
        <a href="#cta" className="bg-navy text-white border-none py-2.5 px-6 rounded-full cursor-pointer text-[12px] font-bold no-underline transition-all tracking-[1px] uppercase hover:bg-orange hover:-translate-y-0.5 shadow-lg">
          Trial
        </a>
      </div>
    </nav>
  );
}
