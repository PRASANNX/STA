"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Programs.module.css";

const PROGRAMS = [
  {
    id: 1, sport: "Tennis", category: "Kids",
    title: "Junior Tennis Foundations",
    age: "5–12 years",
    level: "Beginner to Intermediate",
    timing: "6:00 – 8:00 AM",
    desc: "Build fundamentals with fun drills, mini-court games, and age-appropriate technique training.",
    icon: "🎾", color: "#2D6A4F",
  },
  {
    id: 2, sport: "Tennis", category: "Teens",
    title: "Competitive Tennis Program",
    age: "13–17 years",
    level: "Intermediate to Advanced",
    timing: "6:00 – 10:00 AM",
    desc: "Tournament preparation, match strategy, physical conditioning, and mental toughness training.",
    icon: "🏆", color: "#1A5C3A",
  },
  {
    id: 3, sport: "Tennis", category: "Adults",
    title: "Adult Tennis Training",
    age: "18+ years",
    level: "All Levels",
    timing: "4:00 – 10:00 PM",
    desc: "Fitness-focused sessions, social play, and structured skill development for working professionals.",
    icon: "💪", color: "#40916C",
  },
  {
    id: 4, sport: "Pickleball", category: "All",
    title: "Pickleball Academy",
    age: "All Ages",
    level: "Beginner to Advanced",
    timing: "4:00 – 10:00 PM",
    desc: "India's fastest-growing sport — learn dinks, drives, and strategy on professional courts.",
    icon: "🥒", color: "#C7F93E",
  },
  {
    id: 5, sport: "Table Tennis", category: "All",
    title: "Table Tennis Training",
    age: "All Ages",
    level: "All Levels",
    timing: "6:00 – 10:00 PM",
    desc: "Indoor training facility with professional tables, coaching, and competitive practice sessions.",
    icon: "🏓", color: "#FF6B35",
  },
  {
    id: 6, sport: "Tennis", category: "Kids",
    title: "Weekend Tennis Camp",
    age: "6–15 years",
    level: "All Levels",
    timing: "Sat–Sun 7:00 AM",
    desc: "Intensive weekend sessions perfect for school-going kids. Fun, fitness, and fundamentals.",
    icon: "⭐", color: "#2D6A4F",
  },
];

const FILTERS = ["All", "Tennis", "Pickleball", "Table Tennis"];

export default function Programs() {
  const ref = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.sport === activeFilter);

  return (
    <section className={`${styles.programs} section-dark section-padding`} id="programs" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Programs & Training</span>
          <h2 className="section-title">
            Train Like a <span className={styles.titleHL}>Champion</span>
          </h2>
          <p className="section-desc">
            From first-time players to tournament competitors — structured programs
            for every age, skill level, and sport.
          </p>
        </div>

        {/* Filters */}
        <div className={`${styles.filters} reveal reveal-delay-1`}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Info Banner */}
        <div className={`${styles.infoBanner} reveal reveal-delay-2`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          Coaching available every day — Court booking closed on Mondays
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {filtered.map((program, i) => (
            <div
              key={program.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{program.icon}</span>
                <div className={styles.cardBadges}>
                  <span className={styles.sportBadge} style={{ background: program.color, color: program.color === "#C7F93E" ? "#1a2a44" : "#fff" }}>
                    {program.sport}
                  </span>
                  <span className={styles.ageBadge}>{program.age}</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardDesc}>{program.desc}</p>
              <div className={styles.cardMeta}>
                <div className={styles.metaItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  {program.timing}
                </div>
                <div className={styles.metaItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  {program.level}
                </div>
              </div>
              <a href="#join" className={styles.cardCta}>
                Enroll Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
