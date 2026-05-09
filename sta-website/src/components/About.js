"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./About.module.css";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className={`${styles.about} section-light section-padding`} id="about" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Image Side */}
          <div className={`${styles.imageCol} reveal`}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderContent}>
                  <span className={styles.placeholderIcon}>🎾</span>
                  <span>Suryansh Yadav</span>
                  <span className={styles.placeholderSub}>Director & Head Coach</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className={styles.imageAccent} />
              <div className={styles.imageDots} />
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.expNum}>10+</span>
              <span className={styles.expText}>Years of<br/>Excellence</span>
            </div>
          </div>

          {/* Text Side */}
          <div className={styles.textCol}>
            <div className="reveal">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                A Decade of Building
                <br />
                <span className={styles.titleAccent}>Champions</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className={styles.lead}>
                Founded in Indore over a decade ago, Surya Tennis Academy (STA) has
                grown into one of Central India's most respected sports training
                centers — a place where discipline, passion, and community converge.
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <p className={styles.body}>
                Under the visionary leadership of <strong>Director Suryansh Yadav</strong>,
                STA has trained numerous junior and adult players who have gone on
                to compete at state, national, and international levels. More than
                just coaching — we build character, confidence, and lifelong athletes.
              </p>
            </div>
            <div className={`${styles.pillars} reveal reveal-delay-3`}>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>🏆</span>
                <div>
                  <h4 className={styles.pillarTitle}>Championship Legacy</h4>
                  <p className={styles.pillarText}>State, National & International level players produced</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>👨‍👩‍👧‍👦</span>
                <div>
                  <h4 className={styles.pillarTitle}>The STA Family</h4>
                  <p className={styles.pillarText}>A community built on shared passion and mutual growth</p>
                </div>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>🎯</span>
                <div>
                  <h4 className={styles.pillarTitle}>3 Sports, 1 Mission</h4>
                  <p className={styles.pillarText}>Tennis, Pickleball & Table Tennis under one roof</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
