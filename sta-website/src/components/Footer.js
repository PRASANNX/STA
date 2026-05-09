"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-navy-2 border-t border-[rgba(200,232,53,0.15)] py-12 px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link href="#" className="flex items-center gap-2.5 no-underline mb-4">
            <div className="w-8 h-8 rounded-full bg-lime relative flex items-center justify-center shrink-0 after:absolute after:w-full after:h-0.5 after:bg-navy/40 after:rounded-[2px] after:-rotate-20"></div>
            <div>
              <div className="font-heading text-xl tracking-[2px] text-white leading-none">STA</div>
              <div className="text-[9px] tracking-[3px] text-muted font-medium uppercase">Surya Tennis Academy</div>
            </div>
          </Link>
          <p className="text-muted text-[13px] leading-[1.7] max-w-[240px]">
            Building champions in Indore for over 10 years. Central India's premier multi-racquet sports academy.
          </p>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[11px] tracking-[2px] uppercase text-muted font-semibold mb-4">Academy</h5>
          <Link href="#about" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Our Story</Link>
          <Link href="#programs" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Programs</Link>
          <Link href="#coaches" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Coaches</Link>
          <Link href="#camps" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Camps & Events</Link>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[11px] tracking-[2px] uppercase text-muted font-semibold mb-4">Sports</h5>
          <Link href="#programs" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Tennis</Link>
          <Link href="#programs" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Pickleball</Link>
          <Link href="#programs" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Table Tennis</Link>
          <Link href="#programs" className="text-muted text-[13px] mb-2.5 transition-colors hover:text-lime">Fitness</Link>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[11px] tracking-[2px] uppercase text-muted font-semibold mb-4">Contact</h5>
          <span className="text-muted text-[13px] mb-2.5">info@sta.ind.in</span>
          <span className="text-muted text-[13px] mb-2.5">+91 97545 44265</span>
          <span className="text-muted text-[13px] mb-2.5 leading-[1.6]">Kanadia Main Road,<br />Indore, MP</span>
        </div>
      </footer>

      <div className="bg-navy-2 border-t border-[rgba(200,232,53,0.15)] py-5 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted text-[12px] m-0 text-center sm:text-left">
          © {new Date().getFullYear()} Surya Tennis Academy. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href="#" className="w-9 h-9 rounded-full border border-[rgba(200,232,53,0.15)] flex items-center justify-center text-muted text-[14px] transition-all hover:border-lime hover:text-lime">Ig</a>
          <a href="#" className="w-9 h-9 rounded-full border border-[rgba(200,232,53,0.15)] flex items-center justify-center text-muted text-[14px] transition-all hover:border-lime hover:text-lime">Fb</a>
          <a href="#" className="w-9 h-9 rounded-full border border-[rgba(200,232,53,0.15)] flex items-center justify-center text-muted text-[14px] transition-all hover:border-lime hover:text-lime">Yt</a>
        </div>
      </div>
    </>
  );
}
