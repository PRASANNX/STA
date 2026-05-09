"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Gallery.module.css";

const GALLERY_ITEMS = [
  { title: "Golden Hour Training", tag: "Training", aspect: "tall", emoji: "🌅" },
  { title: "Junior Championship Rally", tag: "Tournament", aspect: "wide", emoji: "🏆" },
  { title: "Pickleball Dink Clinic", tag: "Pickleball", aspect: "square", emoji: "🥒" },
  { title: "Summer Camp 2025", tag: "Camp", aspect: "tall", emoji: "☀️" },
  { title: "Trophy Celebration", tag: "Achievement", aspect: "square", emoji: "🎉" },
  { title: "Coach & Student Moment", tag: "Community", aspect: "wide", emoji: "🤝" },
  { title: "STA Family Day", tag: "Community", aspect: "square", emoji: "👨‍👩‍👧‍👦" },
  { title: "Court Side Action", tag: "Training", aspect: "tall", emoji: "🎾" },
];

export default function Gallery() {
  const ref = useScrollReveal();

  return (
    <section className={`${styles.gallery} section-light section-padding`} id="gallery" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Gallery & Moments</span>
          <h2 className="section-title">
            Life at <span className={styles.titleHL}>STA</span>
          </h2>
          <p className="section-desc">
            From intense training sessions to joyful celebrations — capturing the
            spirit of the STA Family.
          </p>
        </div>

        <div className={styles.masonry}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${styles[item.aspect]} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.itemInner}>
                <span className={styles.itemEmoji}>{item.emoji}</span>
                <div className={styles.itemOverlay}>
                  <span className={styles.itemTag}>{item.tag}</span>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.instaCta} reveal`}>
          <a
            href="https://instagram.com/surya_tennis_academy_indore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            Follow @surya_tennis_academy_indore
          </a>
        </div>
      </div>
    </section>
  );
}
