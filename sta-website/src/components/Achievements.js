"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";
import styles from "./Achievements.module.css";

const STATS = [
  { num: 10, suffix: "+", label: "Years of Excellence", icon: "🏛️" },
  { num: 500, suffix: "+", label: "Players Trained", icon: "👥" },
  { num: 50, suffix: "+", label: "Tournament Wins", icon: "🏆" },
  { num: 3, suffix: "", label: "Sports Disciplines", icon: "🎾" },
  { num: 15, suffix: "+", label: "National Players Produced", icon: "🇮🇳" },
  { num: 6, suffix: "", label: "Days a Week Training", icon: "📅" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.statNum}>
      {count}{suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section className={`${styles.achievements} section-dark section-padding`} id="achievements" ref={ref}>
      {/* Background accent */}
      <div className={styles.bgAccent} />

      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Achievements & Legacy</span>
          <h2 className="section-title">
            Numbers That Speak <span className={styles.titleHL}>Volumes</span>
          </h2>
          <p className="section-desc">
            A decade of consistent excellence, measured in champions produced,
            trophies won, and lives transformed through sport.
          </p>
        </div>

        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`${styles.statCard} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.statIcon}>{stat.icon}</span>
              <AnimatedCounter target={stat.num} suffix={stat.suffix} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Video CTA */}
        <div className={`${styles.videoCta} reveal reveal-delay-3`}>
          <div className={styles.videoBox}>
            <div className={styles.playBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-navy)">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <div>
              <h4 className={styles.videoTitle}>Watch: 10 Years of STA</h4>
              <p className={styles.videoDesc}>The journey of building champions in Indore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
