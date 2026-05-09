"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Parent of Junior Player",
    text: "My son joined STA at age 8 and within two years, he was competing at state level. Suryansh Sir doesn't just coach tennis — he builds character. The STA Family is our second home.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    role: "Adult Player",
    text: "I picked up tennis at 35 and never thought I could improve this much. The evening adult sessions are perfectly structured — great fitness, great fun, and wonderful people.",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    role: "Pickleball Enthusiast",
    text: "The pickleball program at STA is fantastic! Professional courts, expert coaching, and a vibrant community. Best decision I made for my health and social life.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Tournament Player, Age 16",
    text: "Training under Kawaljeet Sir was a game changer. His experience at the national level translates directly into the court — I've won 3 state tournaments this year!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section className={`${styles.testimonials} section-light section-padding`} id="testimonials" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Voices of the <span className={styles.titleHL}>STA Family</span>
          </h2>
        </div>

        <div className={styles.carousel}>
          <div className={`${styles.quoteCard} reveal reveal-delay-1`}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.quoteText}>{TESTIMONIALS[active].text}</p>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorAvatar}>
                {TESTIMONIALS[active].name.charAt(0)}
              </div>
              <div>
                <span className={styles.authorName}>{TESTIMONIALS[active].name}</span>
                <span className={styles.authorRole}>{TESTIMONIALS[active].role}</span>
              </div>
            </div>
            <div className={styles.stars}>
              {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Sources */}
        <div className={`${styles.sources} reveal reveal-delay-2`}>
          <span className={styles.sourceLabel}>Trusted on</span>
          <div className={styles.sourceLogos}>
            <span className={styles.sourceBadge}>⭐ JustDial 4.8</span>
            <span className={styles.sourceBadge}>⭐ Google 4.7</span>
            <span className={styles.sourceBadge}>⭐ BookMyPlayer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
