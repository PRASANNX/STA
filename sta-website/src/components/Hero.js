"use client";

import dynamic from "next/dynamic";
import styles from "./Hero.module.css";

const TennisBall3D = dynamic(() => import("./TennisBall3D"), { ssr: false });

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.bgOverlay} />
      <div className={styles.bgPattern} />

      <div className={styles.content}>
        <div className={styles.textSide}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            10 Years of Excellence
          </div>

          <h1 className={styles.title}>
            Surya Tennis
            <br />
            <span className={styles.ampersand}>&</span> Pickleball
            <br />
            <span className={styles.highlight}>Academy</span>
          </h1>

          <p className={styles.subtitle}>
            Indore's premier sports academy — producing State, National &
            International players under the leadership of{" "}
            <strong>Director Suryansh Yadav</strong>.
          </p>

          <div className={styles.ctas}>
            <a href="#join" className="btn btn-primary">
              Book Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-outline-light">
              Our Story
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Years</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Players Trained</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Sports</span>
            </div>
          </div>
        </div>

        <div className={styles.ballSide}>
          <TennisBall3D className={styles.ball3d} />
          <div className={styles.ballGlow} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollPrompt}>
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.scrollBall}>
          <div className={styles.scrollBallInner} />
        </div>
      </div>
    </section>
  );
}
