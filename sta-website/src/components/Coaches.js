"use client";

export default function Coaches() {
  const coaches = [
    {
      initials: "SY",
      name: "Suryansh Yadav",
      role: "Founder & Head Coach",
      badge: "Director",
      bio: "Visionary founder of STA with 10+ years developing junior and adult players. Director of Surya Pickleball Academy. Trains players from grassroots to competitive levels."
    },
    {
      initials: "SS",
      name: "Suryan Shadav",
      role: "Performance Coach",
      bio: "International-style coach handling beginners, intermediates, and advanced players. Focused on performance-track development."
    },
    {
      initials: "KS",
      name: "Kawaljeet Sir",
      role: "Guest Champion Coach",
      bio: "Renowned coach who has produced multiple national and international players. Leads special camps and elite training programs at STA."
    }
  ];

  return (
    <section id="coaches" className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-navy-2 reveal-item">
      <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-6">
        Meet The Team
      </div>
      <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-12 text-white">
        The Coaches<br />Behind Your<br /><span className="text-lime">Game</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((c, i) => (
          <div key={i} className="bg-card border border-[rgba(200,232,53,0.15)] rounded-2xl p-7 relative transition-transform hover:-translate-y-1 hover:border-[rgba(200,232,53,0.4)]">
            {c.badge && (
              <span className="absolute top-6 right-6 bg-lime text-navy px-3 py-1 rounded text-[10px] font-bold tracking-[1.5px] uppercase">
                {c.badge}
              </span>
            )}
            <div className="w-16 h-16 rounded-full bg-navy border border-[rgba(200,232,53,0.3)] flex items-center justify-center font-heading text-[24px] text-lime mb-6 shadow-[0_0_15px_rgba(200,232,53,0.1)]">
              {c.initials}
            </div>
            <div>
              <div className="text-[12px] font-semibold text-lime uppercase tracking-[1px] mb-1">{c.role}</div>
              <div className="font-heading text-[28px] tracking-[1px] text-white mb-3">{c.name}</div>
              <p className="text-muted text-[13px] leading-[1.6]">
                {c.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-muted text-[13px] mt-8 text-center">
        + A team of dedicated junior and adult development coaches.
      </p>
    </section>
  );
}
