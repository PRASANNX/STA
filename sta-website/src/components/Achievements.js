"use client";

export default function Achievements() {
  const achievements = [
    {
      num: "10+",
      title: "Years of Excellence",
      desc: "A decade-long journey of turning raw talent into competitive champions."
    },
    {
      num: "PWR",
      title: "PWR 200 Tournament",
      desc: "Hosted marquee pickleball tournaments putting Indore on the national map."
    },
    {
      num: "LOC",
      title: "League of Champions",
      desc: "Premier tennis event organized and championed by STA players and directors."
    },
    {
      num: "3×",
      title: "Sports Mastery",
      desc: "Expanded from Tennis to Pickleball and Table Tennis with dedicated coaching."
    }
  ];

  return (
    <section id="achievements" className="py-[72px] lg:py-[120px] px-6 lg:px-12 relative overflow-hidden reveal-item">
      {/* Background decoration matching prototype style */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(200,232,53,0.05)_0%,transparent_70%)] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-lime mb-6">
            Legacy
          </div>
          <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-4 text-white">
            10 Years.<br />Countless<br /><span className="text-lime">Champions</span>
          </h2>
          <p className="text-muted text-[15px] leading-[1.7] max-w-[400px]">
            From state-level titles to international courts — STA players compete at every level.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-card border border-[rgba(200,232,53,0.1)] transition-transform hover:-translate-x-2 hover:border-lime">
              <div className="font-heading text-[48px] text-lime leading-none w-24 shrink-0">
                {item.num}
              </div>
              <div>
                <h4 className="font-heading text-[24px] tracking-[1px] text-white mb-2">{item.title}</h4>
                <p className="text-muted text-[13px] leading-[1.6] m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
