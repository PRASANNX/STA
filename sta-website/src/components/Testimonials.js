"use client";

export default function Testimonials() {
  const reviews = [
    {
      text: "\"My son joined STA at age 7 and in just 2 years he's competing at district level. Suryansh sir's coaching is exceptional.\"",
      initials: "RP",
      name: "Rajesh Patel",
      role: "Parent of Junior Player"
    },
    {
      text: "\"Best academy in Indore. The facilities are great, the coaches are professional, and the STA community feels like family.\"",
      initials: "AS",
      name: "Anita Sharma",
      role: "Adult Member"
    },
    {
      text: "\"Started pickleball at 45 and never felt out of place. The coaches are patient and encouraging. Highly recommend!\"",
      initials: "VG",
      name: "Vijay Gupta",
      role: "Pickleball Member"
    }
  ];

  return (
    <section className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-navy reveal-item">
      <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-6">
        Reviews
      </div>
      <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-14 text-white">
        The STA<br /><span className="text-lime">Family Speaks</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card border border-[rgba(200,232,53,0.15)] rounded-2xl p-7 transition-transform hover:-translate-y-1">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-lime text-[14px]">★</span>
              ))}
            </div>
            <blockquote className="text-white text-[14px] leading-[1.7] mb-5 font-style-italic italic opacity-90">
              {r.text}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(200,232,53,0.15)] border border-[rgba(200,232,53,0.3)] flex items-center justify-center shrink-0 font-heading text-[16px] text-lime">
                {r.initials}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white">{r.name}</div>
                <div className="text-[11px] text-muted">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
