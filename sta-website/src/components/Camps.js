"use client";

export default function Camps() {
  const camps = [
    {
      status: "Upcoming",
      title: "Summer Tennis Camp 2026",
      desc: "Intensive summer program for juniors aged 7–16. Focus on technique, fitness, and match play. Led by Suryansh Yadav and team.",
      date: "May–June 2026",
      age: "Age 7–16"
    },
    {
      status: "Upcoming",
      title: "Pickleball Bootcamp",
      desc: "Weekend intensive with Coach Kawaljeet Sir. Open to beginners and intermediates. Limited slots available.",
      date: "June 2026",
      age: "All Ages"
    },
    {
      status: "Past Event",
      title: "PWR 200 Tournament",
      desc: "Marquee pickleball tournament hosted at STA courts. 200+ participants. Major highlight in the STA legacy.",
      date: "Concluded"
    },
    {
      status: "Past Event",
      title: "League of Champions",
      desc: "Premier inter-club tennis championship. STA players dominated across multiple categories and age groups.",
      date: "Concluded"
    }
  ];

  return (
    <section id="camps" className="py-[72px] lg:py-[120px] px-6 lg:px-12 bg-background-2 reveal-item">
      <div className="inline-flex items-center gap-2 bg-[rgba(200,232,53,0.1)] border border-[rgba(200,232,53,0.3)] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-6">
        Camps & Events
      </div>
      <h2 className="font-heading text-[clamp(48px,6vw,72px)] leading-none tracking-[1px] mb-14 text-foreground">
        Train Hard.<br /><span className="text-accent">Play Bigger.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {camps.map((camp, i) => {
          const isUpcoming = camp.status === "Upcoming";
          return (
            <div key={i} className="bg-surface border border-[rgba(200,232,53,0.15)] rounded-2xl p-8 relative transition-transform hover:-translate-y-1 hover:border-[rgba(200,232,53,0.4)]">
              <div className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[1.5px] uppercase mb-5 ${
                isUpcoming 
                  ? "bg-[rgba(57,211,83,0.1)] text-green-bright border border-[rgba(57,211,83,0.25)]" 
                  : "bg-[rgba(136,146,164,0.1)] text-muted border border-[rgba(200,232,53,0.15)]"
              }`}>
                {camp.status}
              </div>
              <h3 className="font-heading text-[30px] tracking-[1px] text-foreground mb-2.5">{camp.title}</h3>
              <p className="text-muted text-[13px] leading-[1.6] mb-5">
                {camp.desc}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-[12px] text-muted">
                  <svg className="w-3.5 h-3.5 stroke-lime fill-none stroke-2" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
                  {camp.date}
                </div>
                {camp.age && (
                  <div className="flex items-center gap-1.5 text-[12px] text-muted">
                    <svg className="w-3.5 h-3.5 stroke-lime fill-none stroke-2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                    {camp.age}
                  </div>
                )}
              </div>

              <button className={`bg-transparent border-[1.5px] border-[rgba(200,232,53,0.15)] text-foreground px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all ${
                isUpcoming ? "cursor-pointer hover:bg-accent hover:border-accent hover:text-background" : "opacity-50 cursor-default"
              }`}>
                {isUpcoming ? "Register Now →" : "View Highlights"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
