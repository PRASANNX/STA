"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./JoinCTA.module.css";

const WHATSAPP_URL = "https://wa.me/919754544265?text=Hi%20Suryansh%20Sir%2C%20I'm%20interested%20in%20joining%20STA";

export default function JoinCTA() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "", phone: "", age: "", sport: "Tennis", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    console.log("Enquiry submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={`${styles.join} section-padding`} id="join" ref={ref}>
      <div className={styles.bgGlow} />
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Join Us</span>
          <h2 className="section-title">
            Ready to Join the <span className={styles.titleHL}>STA Legacy</span>?
          </h2>
          <p className="section-desc">
            Take the first step towards your tennis journey. Book a free trial
            session or reach out to us directly.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Form */}
          <div className={`${styles.formCard} reveal reveal-delay-1`}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h3>Thank You!</h3>
                <p>We'll get back to you within 24 hours. See you on the court!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Enquire Now</h3>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your name"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="age">Age Group</label>
                    <select id="age" name="age" value={formData.age} onChange={handleChange}>
                      <option value="">Select age group</option>
                      <option value="5-8">5 – 8 years</option>
                      <option value="9-12">9 – 12 years</option>
                      <option value="13-17">13 – 17 years</option>
                      <option value="18+">18+ (Adult)</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="sport">Sport Interest</label>
                    <select id="sport" name="sport" value={formData.sport} onChange={handleChange}>
                      <option value="Tennis">Tennis</option>
                      <option value="Pickleball">Pickleball</option>
                      <option value="Table Tennis">Table Tennis</option>
                      <option value="All">All / Undecided</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message" name="message" rows="3"
                    placeholder="Any questions or specific requirements?"
                    value={formData.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={styles.contactSide}>
            <div className={`${styles.contactCard} reveal reveal-delay-2`}>
              <h3 className={styles.contactTitle}>Direct Contact</h3>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.waBtn}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Suryansh Sir
              </a>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-court-green)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <a href="tel:+919754544265" className={styles.infoValue}>+91 9754544265</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-court-green)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@sta.ind.in" className={styles.infoValue}>info@sta.ind.in</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-court-green)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div>
                    <span className={styles.infoLabel}>Address</span>
                    <span className={styles.infoValue}>1427, Kanadia Main Road,<br/>Alok Nagar, Indore</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-court-green)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <div>
                    <span className={styles.infoLabel}>Timings</span>
                    <span className={styles.infoValue}>6–10 AM & 4–10 PM<br/>Tue – Sun (Mon: No court booking)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className={`${styles.mapCard} reveal reveal-delay-3`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5!2d75.83!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEyLjAiTiA3NcKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "var(--radius-md)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STA Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
