"use client";

export default function About() {
  return (
    <section id="about" className="py-[72px] lg:py-[120px] px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Text & Timeline */}
        <div className="reveal-item">
          <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-6">
            About STA
          </div>
          <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-4">
            A Decade of Turning<br />Raw Talent Into<br />
            <span className="text-lime">Champions</span>
          </h2>
          <div className="text-muted text-[15px] leading-[1.7] max-w-[500px] mb-8">
            Founded by Suryansh Yadav, Surya Tennis Academy has spent 10 years building a legacy in Indore. From beginner kids to competitive adults, we train players who go on to compete at state, national, and international levels.
          </div>
          
          <div className="flex gap-4 mb-6 reveal-item delay-100">
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(200,232,53,0.4)] border-2 border-lime mt-1.5 shrink-0 shadow-[0_0_10px_rgba(200,232,53,0.5)]"></div>
            <p className="text-[14px] leading-[1.6] text-white/90 m-0">
              <strong className="text-white font-semibold">Founded in Indore</strong> — Started with a single court and a vision to build champions at Kanadia Main Road.
            </p>
          </div>
          <div className="flex gap-4 mb-6 reveal-item delay-200">
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(200,232,53,0.4)] border-2 border-lime mt-1.5 shrink-0 shadow-[0_0_10px_rgba(200,232,53,0.5)]"></div>
            <p className="text-[14px] leading-[1.6] text-white/90 m-0">
              <strong className="text-white font-semibold">Surya Pickleball Academy launched</strong> — Expanding beyond tennis to India's fastest-growing sport.
            </p>
          </div>
          <div className="flex gap-4 mb-6 reveal-item delay-300">
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(200,232,53,0.4)] border-2 border-lime mt-1.5 shrink-0 shadow-[0_0_10px_rgba(200,232,53,0.5)]"></div>
            <p className="text-[14px] leading-[1.6] text-white/90 m-0">
              <strong className="text-white font-semibold">PWR 200, League of Champions & more</strong> — Hosting and winning marquee tournaments in Indore.
            </p>
          </div>
        </div>

        {/* Right: Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 reveal-item">
          <div className="bg-lime text-navy p-6 rounded-2xl transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-[20px] mb-4">🎾</div>
            <h4 className="font-heading text-[22px] tracking-[1px] mb-2">Tennis First</h4>
            <p className="text-navy/80 text-[13px] leading-[1.6]">Structured coaching for all ages. Beginner to advanced, juniors to adults.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-[rgba(200,232,53,0.15)] transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-[rgba(57,211,83,0.1)] flex items-center justify-center text-[20px] mb-4">🏓</div>
            <h4 className="font-heading text-[22px] tracking-[1px] mb-2 text-white">Pickleball</h4>
            <p className="text-muted text-[13px] leading-[1.6]">Surya Pickleball Academy — Indore's go-to hub for India's fastest-growing sport.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-[rgba(200,232,53,0.15)] transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-[rgba(255,107,53,0.1)] flex items-center justify-center text-[20px] mb-4">🏆</div>
            <h4 className="font-heading text-[22px] tracking-[1px] mb-2 text-white">Tournament Ready</h4>
            <p className="text-muted text-[13px] leading-[1.6]">Competitive track coaching to prepare players for state and national tournaments.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-[rgba(200,232,53,0.15)] transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-[rgba(200,232,53,0.1)] flex items-center justify-center text-[20px] mb-4">👨‍👩‍👧</div>
            <h4 className="font-heading text-[22px] tracking-[1px] mb-2 text-white">STA Family</h4>
            <p className="text-muted text-[13px] leading-[1.6]">More than an academy — a community of players, parents, and coaches.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
