# Product Requirements Document (PRD)
**Project:** Surya Tennis Academy (STA) Official Landing Page Website
**Version:** 1.0
**Date:** [Insert Current Date]
**Prepared by:** [Your Name/Agency]

## 1. Project Overview

### 1.1 Project Goal
Create a premium, single-page scrollable landing website for Surya Tennis Academy (STA) in Indore that captures the energy of tennis and pickleball training while establishing a legacy brand presence. The site must replace fragmented directory listings with a cohesive digital home that drives trial bookings, WhatsApp enquiries, and enrollment.

The design must draw heavy inspiration from https://tarubali.com/ — an elegant, immersive, image-heavy scroll experience with natural motion, generous whitespace, high-quality photography, and premium minimalist aesthetic — but adapted to the dynamic world of sports with a signature **scroll-activated rotating tennis/pickleball** as the central visual motif.

### 1.2 Objectives
- Communicate 10+ years of excellence under Director Suryansh Yadav.
- Highlight core offerings: Tennis (primary), Pickleball (secondary), Table Tennis (tertiary).
- Drive conversions: Free trial bookings, WhatsApp chats with coaches, camp enrollments.
- Showcase social proof, achievements, coaches, and vibrant academy life through gallery.
- Create emotional connection through dynamic scroll interactions featuring a rotating ball.

### 1.3 Scope
- **In Scope:** Single-page scrollable landing page (Hero through Footer), custom scroll-linked 3D/Canvas ball animation, responsive design (mobile-first), basic form handling for enquiries, integration points for WhatsApp and booking.
- **Out of Scope (Phase 1):** Full multi-page site, admin panel/CMS, complex backend booking engine, e-commerce for merchandise. These can be Phase 2.

## 2. Target Audience
- **Primary:** Parents of children (5-17) in Indore interested in structured sports training.
- **Secondary:** Adult players (18+) seeking fitness, skill development, or social pickleball.
- **Tertiary:** Competitive juniors/teens aiming for tournaments; potential corporate/event partners.
- **Psychographics:** Value discipline, legacy, professional coaching, community ("STA Family"), and visible results (national/international players produced).

Languages: Hindi + English (bilingual elements where appropriate).

## 3. Key User Flows & CTAs
1. **Discover & Inspire** → Scroll through hero, about, programs.
2. **Learn About Team** → Coach profiles.
3. **See Proof** → Achievements, Gallery, Testimonials.
4. **Take Action** → Multiple sticky/floating CTAs:
   - "Book Free Trial"
   - "WhatsApp Suryansh Yadav Sir" (+91 9754544265)
   - "Enquire Now" (form)

## 4. Content & Information Architecture (Scrollable Sections)

**Section 1: Hero / Introduction**
- Large cinematic background (academy courts at golden hour or action shots).
- Prominent headline: "Surya Tennis & Pickleball Academy | 10 Years of Excellence in Indore"
- Subheadline referencing Suryansh Yadav's leadership.
- **Signature Element:** Large floating/centered Tennis Ball (or interchangeable with Pickleball) that begins rotating slowly as soon as scroll starts. Rotation tied to scroll progress (GSAP + Three.js or equivalent recommended).
- Primary CTAs: "Book Free Trial" + "Watch 10 Years Video"

**Section 2: Our Story / About STA**
- 10-year journey narrative.
- Founder spotlight on Suryansh Yadav.
- Positioning: "Producing State, National & International Players" + "The STA Family".

**Section 3: Programs & Training**
- Horizontal or card-based showcases with tabs/filters (Kids | Teens | Adults | Tennis | Pickleball | Table Tennis).
- Key info per program: Timings (6-10 AM | 4-10 PM, closed Mondays for booking), levels, benefits, starting fees (placeholders – to be finalized).
- "Coaching available every day; court booking closed on Mondays."

**Section 4: Meet Our Coaches**
- Hero cards for:
  1. Suryansh Yadav – Director & Head Coach
  2. Suryan Shadav – International-style / Performance Coach
  3. Kawaljeet Sir – Guest Champion Coach (national/international player producer)
- Supporting line: "+ Team of dedicated junior and adult development coaches."

**Section 5: Achievements & Legacy**
- Statistics, tournament wins, "10 Years of Excellence" highlights.
- Embed or link to YouTube highlight reel.

**Section 6: Gallery & Moments**
- Masonry grid or scrollable horizontal reels showing training, tournaments, camps, trophies, happy families.
- Instagram-style feed integration if possible.

**Section 7: Camps, Tournaments & Events**
- Upcoming summer/winter camps.
- Signature events (PWR 200, League of Champions, Pickleball tournaments).

**Section 8: Testimonials & Social Proof**
- Parent/student quotes, review snippets from JustDial/BookMyPlayer.

**Section 9: Join the STA Family (Final CTA Section)**
- Enquiry form + prominent WhatsApp button + contact details.
- Map embed (address: 1427, Kanadia Main Road, Alok Nagar, Indore).

**Footer:** Social links (Instagram @surya_tennis_academy_indore, Facebook), contact, legal.

## 5. Design & Animation Requirements
(See separate **Design Brief for Antigravity** document for exhaustive details.)

**Core Visual Motif:**
- A high-fidelity 3D or advanced 2.5D **Tennis Ball** (primary) that can toggle to **Pickleball** in relevant sections.
- **Scroll-Linked Rotation:** The ball must rotate smoothly in correlation with vertical scroll position. Full 360° rotation across major sections or continuous gentle spin that accelerates/decelerates. Consider texture mapping real ball feel, seam rotation revealing stats or section titles.
- Overall aesthetic: Premium sport-luxury blend of Taru Bali (minimalist, high-end photography, earthy yet vibrant tones, smooth micro-animations) + tennis energy (vibrant greens, dynamic angles, motion).

**Technical Recommendations:**
- Next.js / React or Webflow/Framer for development.
- GSAP + ScrollTrigger for animations.
- Three.js or model-viewer for the interactive ball (or CSS 3D + canvas fallback).
- Optimized performance (especially mobile scroll).

## 6. Functional Requirements
- Fully responsive (mobile-first).
- Sticky navigation or scroll progress indicator themed as "sets" or ball trajectory.
- WhatsApp deep links (`https://wa.me/919754544265`).
- Enquiry form (Name, Phone, Age Group, Sport Interest, Message) – submissions to info@sta.ind.in + notification to admin.
- SEO optimized (meta, schema for LocalBusiness, fast loading).
- Analytics integration (GA4).

## 7. Content Sources
- All text pulled from provided **Client Requirement Snapshot**.
- High-resolution photos, reels, coach headshots from Instagram/Facebook and client-provided assets.
- Logo: STA mark (to be provided or created).

## 8. Success Metrics
- Bounce rate < 45%.
- Average scroll depth > 70%.
- Conversion rate on "Book Trial" and WhatsApp clicks > 8%.
- Time on page > 90 seconds.

**Next Steps:** Share visual references (color palette, button styles, icons, photography moodboard) with Antigravity alongside the **Design Instructional Document**.

---
*This PRD supersedes earlier multi-page outlines and focuses on a high-impact scrollable landing page experience.*
