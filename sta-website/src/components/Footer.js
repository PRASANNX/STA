"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-[100px]">
      {/* Massive Vibrant Brand Block */}
      <div className="bg-orange px-6 lg:px-12 py-20 lg:py-32 relative overflow-hidden">
        {/* Massive Background Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <h2 className="font-heading text-[22vw] text-white/10 whitespace-nowrap leading-none uppercase">
                SURYA TENNIS
            </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="font-heading text-[clamp(60px,10vw,140px)] leading-[0.85] text-white uppercase mb-8 tracking-[1px]">
                    STAY IN THE <br />
                    <span className="text-navy">LOOP.</span>
                </h3>
                <p className="text-white/80 text-[18px] leading-[1.7] max-w-[400px] mb-12">
                    Subscribe to get the latest tournament news, training schedules, and exclusive membership offers.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="flex-1 bg-white/10 border-2 border-white/20 px-8 py-4 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-navy transition-all"
                    />
                    <button className="bg-navy text-white px-10 py-4 rounded-full font-heading text-xl uppercase tracking-[1px] hover:bg-white hover:text-navy transition-all">
                        Join Now
                    </button>
                </form>
            </div>

            <div className="flex flex-col lg:items-end">
                <div className="flex flex-wrap lg:justify-end gap-10 mb-16">
                    <div className="flex flex-col gap-4">
                        <span className="text-[11px] font-bold text-navy uppercase tracking-[2px]">Academy</span>
                        <Link href="#about" className="text-white font-heading text-2xl uppercase hover:text-navy transition-colors">Our Story</Link>
                        <Link href="#programs" className="text-white font-heading text-2xl uppercase hover:text-navy transition-colors">Programs</Link>
                        <Link href="#coaches" className="text-white font-heading text-2xl uppercase hover:text-navy transition-colors">Coaches</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[11px] font-bold text-navy uppercase tracking-[2px]">Sports</span>
                        <Link href="#" className="text-white font-heading text-2xl uppercase hover:text-navy transition-colors">Tennis</Link>
                        <Link href="#" className="text-white font-heading text-2xl uppercase hover:text-navy transition-colors">Pickleball</Link>
                        <Link href="#" className="text-white font-heading text-2xl uppercase hover:text-navy transition-colors">Table Tennis</Link>
                    </div>
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-4">
                    {['IG', 'FB', 'YT', 'WA'].map((social) => (
                        <a 
                            key={social} 
                            href="#" 
                            className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white font-bold hover:bg-white hover:text-orange transition-all"
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-white py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-navy/5">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-navy relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>
            <span className="text-[12px] font-bold text-navy uppercase tracking-[2px]">© {new Date().getFullYear()} Surya Tennis Academy</span>
        </div>
        
        <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-bold text-navy/40 uppercase tracking-[2px] hover:text-navy transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold text-navy/40 uppercase tracking-[2px] hover:text-navy transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[10px] font-bold text-navy/40 uppercase tracking-[2px] hover:text-navy transition-colors">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}
