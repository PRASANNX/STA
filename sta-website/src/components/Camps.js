"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Camps.module.css";

const EVENTS = [
  {
    title: "Summer Tennis Intensive",
    date: "June 1 – June 30, 2026",
    type: "Camp",
    desc: "4-week intensive program for juniors covering technique, match play, fitness, and mental conditioning.",
    sport: "Tennis",
    slots: "Limited to 30 players",
  },
  {
    title: "PWR 200 Tournament",
    date: "July 15 – 17, 2026",
    type: "Tournament",
    desc: "STA's signature annual tournament attracting top talent from across Madhya Pradesh and beyond.",
    sport: "Tennis",
    slots: "64 draws",
  },
  {
    title: "League of Champions",
    date: "August 2026",
    type: "League",
    desc: "Season-long competitive league format with rankings, prizes, and the championship trophy.",
    sport: "All Sports",
    slots: "Open Registration",
  },
  {
    title: "Pickleball Social Series",
    date: "Every Saturday",
    type: "Social",
    desc: "Weekly social pickleball sessions — perfect for beginners and recreational players of all ages.",
    sport: "Pickleball",
    slots: "Drop-in available",
  },
];

export default function Camps() {
  const ref = useScrollReveal();

  return (
    <section className={`${styles.camps} section-dark section-padding`} id="camps" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Camps & Tournaments</span>
          <h2 className="section-title">
            Compete, Learn, <span className={styles.titleHL}>Grow</span>
          </h2>
          <p className="section-desc">
            From intensive summer camps to signature tournaments — events that
            challenge, inspire, and bring the community together.
          </p>
        </div>

        <div className={styles.timeline}>
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className={`${styles.eventCard} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.eventLeft}>
                <span className={styles.eventType}>{event.type}</span>
                <span className={styles.eventDate}>{event.date}</span>
              </div>
              <div className={styles.eventDivider}>
                <div className={styles.eventDot} />
                <div className={styles.eventLine} />
              </div>
              <div className={styles.eventRight}>
                <div className={styles.eventMeta}>
                  <span className={styles.sportTag}>{event.sport}</span>
                  <span className={styles.slotsTag}>{event.slots}</span>
                </div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDesc}>{event.desc}</p>
                <a href="#join" className={styles.eventCta}>
                  Register Interest
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
