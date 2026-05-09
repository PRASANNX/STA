"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🎾</span>
              <div>
                <span className={styles.logoName}>Surya Tennis</span>
                <span className={styles.logoSub}>Academy</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Indore's premier tennis, pickleball & table tennis academy.
              10+ years of building champions and the STA Family.
            </p>
            <div className={styles.socials}>
              <a href="https://instagram.com/surya_tennis_academy_indore" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://wa.me/919754544265" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <a href="#about" className={styles.footerLink}>About Us</a>
            <a href="#programs" className={styles.footerLink}>Programs</a>
            <a href="#coaches" className={styles.footerLink}>Our Coaches</a>
            <a href="#gallery" className={styles.footerLink}>Gallery</a>
            <a href="#camps" className={styles.footerLink}>Camps & Events</a>
          </div>

          {/* Sports */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Sports</h4>
            <a href="#programs" className={styles.footerLink}>Tennis</a>
            <a href="#programs" className={styles.footerLink}>Pickleball</a>
            <a href="#programs" className={styles.footerLink}>Table Tennis</a>
            <a href="#join" className={styles.footerLink}>Book Free Trial</a>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <a href="tel:+919754544265" className={styles.footerLink}>+91 9754544265</a>
            <a href="mailto:info@sta.ind.in" className={styles.footerLink}>info@sta.ind.in</a>
            <span className={styles.footerLink}>1427, Kanadia Main Road</span>
            <span className={styles.footerLink}>Alok Nagar, Indore</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Surya Tennis & Pickleball Academy. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed by <strong>Antigravity</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
