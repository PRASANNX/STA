"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Coaches.module.css";

const COACHES = [
  {
    name: "Suryansh Yadav",
    role: "Director & Head Coach",
    badge: "Founder",
    bio: "Visionary leader who built STA from the ground up over 10+ years. His dedication to producing champions and fostering the STA Family is the heartbeat of the academy.",
    color: "#C7F93E",
    emoji: "👑",
  },
  {
    name: "Suryan Shadav",
    role: "Performance Coach",
    badge: "International Style",
    bio: "Brings an international approach to performance coaching. Specializes in advanced technique refinement, physical conditioning, and competitive match preparation.",
    color: "#40916C",
    emoji: "🎯",
  },
  {
    name: "Kawaljeet Sir",
    role: "Guest Champion Coach",
    badge: "National Player Producer",
    bio: "A celebrated name in Indian tennis coaching. Known for producing national and international level players. His guest sessions at STA are highly sought after.",
    color: "#FF6B35",
    emoji: "🏆",
  },
];

export default function Coaches() {
  const ref = useScrollReveal();

  return (
    <section className={`${styles.coaches} section-light section-padding`} id="coaches" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Meet Our Coaches</span>
          <h2 className="section-title">
            Guided by the <span className={styles.titleHL}>Best</span>
          </h2>
          <p className="section-desc">
            World-class coaching from passionate mentors who have dedicated their
            lives to building champions on and off the court.
          </p>
        </div>

        <div className={styles.grid}>
          {COACHES.map((coach, i) => (
            <div
              key={coach.name}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder} style={{
                  background: `linear-gradient(135deg, ${coach.color}20, ${coach.color}40)`,
                  borderColor: `${coach.color}30`,
                }}>
                  <span className={styles.coachEmoji}>{coach.emoji}</span>
                </div>
                <span className={styles.badge} style={{ background: coach.color, color: coach.color === "#C7F93E" ? "#1a2a44" : "#fff" }}>
                  {coach.badge}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.coachName}>{coach.name}</h3>
                <span className={styles.coachRole}>{coach.role}</span>
                <p className={styles.coachBio}>{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.supporting} reveal reveal-delay-3`}>
          <p>+ Team of dedicated junior and adult development coaches</p>
        </div>
      </div>
    </section>
  );
}
