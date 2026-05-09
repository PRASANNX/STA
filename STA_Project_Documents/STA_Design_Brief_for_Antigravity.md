# Design Brief & UI/UX Instructional Document
**Project:** Surya Tennis Academy (STA) – Premium Scrollable Landing Page
**For:** Antigravity Design Team
**Version:** 1.0

## Executive Summary
We are building a **premium single-page scrollable landing website** for Surya Tennis Academy in Indore. The reference aesthetic is **https://tarubali.com/** — an immersive, elegant, high-end brand experience with beautiful product photography, generous whitespace, sophisticated typography, subtle micro-animations, and a luxurious yet approachable feel.

**Key Differentiation & Hero Feature:**
Instead of the product bottle in Taru Bali, our central visual hero is a **realistic 3D or advanced illustrated Tennis Ball (primary) / Pickleball (secondary)** that **rotates in sync with the user's scroll progress**. This ball should feel premium, tactile, and dynamic — the "product" of the academy.

You will receive a separate folder/package containing:
- All visual references (buttons, icons, color swatches, component examples, photography style guides, coach photos, gallery images, moodboard).
- High-resolution academy photos, reels screenshots, and branding assets.

**Your Task:** Analyze all provided visual references thoroughly. Synthesize them into a cohesive UI/UX system that feels like "Taru Bali meets premium sports academy" — elegant, energetic, trustworthy, and distinctly STA.

---

## 1. Core Design Principles (Must Follow)

**1.1 Aesthetic Direction**
- **Reference:** tarubali.com (study the scroll feel, image treatment, typography pairing, spacing, hover states, section transitions).
- **Adaptation:** Replace serene botanical calmness with **dynamic tennis energy** while maintaining premium minimalism.
- **Mood:** Professional yet approachable. Disciplined excellence. Community warmth. Youthful energy.
- **Photography Style:** Cinematic action shots (kids smashing forehands, pickleball dinks, golden hour courts, trophy close-ups, smiling coach-player moments). Heavy use of shallow depth of field, authentic unposed training moments. Consistent color grading across all images.

**1.2 The Rotating Ball – Signature Animation**
- **Behavior:** A prominent ball (approx 15-25% of viewport on desktop) floats in a dedicated "channel" or follows a subtle path.
  - As user scrolls, the ball **rotates proportionally** (use scroll progress 0-100% mapped to rotation degrees).
  - Recommendation: 2-3 full rotations across the entire page length for satisfying feel.
  - Different sections can trigger slight texture/appearance changes (e.g., ball "seams" align to reveal stats, or it switches to pickleball with hole pattern visible when in Pickleball section).
- **Technical Expectation:** Smooth 60fps performance. Use Three.js, React-Three-Fiber, or GSAP + canvas/WebGL. Provide fallback (CSS rotating sphere with texture or SVG animation) for simpler implementation.
- **States:** Hover = subtle bounce + speed increase. Mobile = gentler rotation or tap-to-spin.
- **Asset Needs:** High-quality 3D model or texture maps of official-looking tennis ball (fuzzy felt texture, precise seam lines) and pickleball (perforated plastic texture). Yellow-green primary with STA branding subtly incorporated if possible.

**1.3 Color Palette**
**[INSERT YOUR COLOR PALETTE REFERENCE IMAGE/SWATCHES HERE]**

**Primary:**
- Court Green: [Specify hex]
- Tennis Ball Yellow: [Specify hex]
- Energy Orange/Red: [Specify hex]

**Supporting:**
- Deep Navy / Charcoal (text)
- Warm Off-white / Light Beige backgrounds
- Accent gradients (green → yellow)

Ensure high contrast for accessibility. Dark mode variant for evening training feel is encouraged but not mandatory.

**1.4 Typography**
- **Headings:** Bold, modern sans-serif with sporty condensed weight for impact (similar to Taru Bali's elegant scale). Consider slight tracking for premium feel.
- **Body:** Clean, highly readable sans-serif. Good hierarchy.
- **Accent:** Perhaps a display font for "10 Years of Excellence" or coach quotes.
- Scale: Generous (H1 4-6rem on desktop, scaling gracefully).

---

## 2. Component Library & UI Elements
Use the visual references you will be provided as the **source of truth** for exact button styles, iconography, card treatments, etc.

**Required Components (Adapt to provided visuals):**

**2.1 Navigation**
- Minimal sticky top nav (logo left, "Programs", "Coaches", "Gallery", "Camps" links that smooth-scroll).
- Right side: WhatsApp icon + "Book Trial" button.
- Optional: Vertical progress tracker on left rail styled as tennis court lines or ball trajectory.

**2.2 Buttons & CTAs**
- **Primary CTA:** "Book Free Trial Session" – bold, rounded, with subtle ball icon or shadow that lifts on hover (perhaps with rotation animation).
- **Secondary:** "WhatsApp Suryansh Sir" – green background with WhatsApp icon, deep link ready.
- **Tertiary:** Outlined "Learn More", "View All Programs".
- Hover States: Must feel energetic – scale, shadow, color shift, or micro ball rotation.

**2.3 Cards & Sections**
- Program cards: Clean with sport icon, timings badge, price, "Enroll" button.
- Coach profile cards: Circular or dynamic photo with overlay on hover revealing bio snippet.
- Testimonial cards: Warm, authentic with photo + quote.

**2.4 Icons**
**[REFERENCE ALL PROVIDED ICONS]** 
- Tennis racket, pickleball paddle, trophy, calendar, location pin, WhatsApp, Instagram, etc.
- Consistent stroke weight and style. Consider duotone or gradient versions.

**2.5 Forms**
- Clean, minimal contact/enquiry form.
- Inputs with focus states that echo the ball rotation or green accent.

---

## 3. Page Structure & Section-Specific Design Instructions

**Hero Section (Above the fold + first scroll)**
- Full viewport height.
- Background video loop or parallax image of academy action.
- Large centered or asymmetrically placed headline + subheadline.
- **The Ball** must be the undeniable focal point — floating prominently, already slowly rotating.
- Scroll prompt (down arrow that bounces like a ball).

**About Story**
- Split layout or full-width with image on one side, narrative on other. Ball continues rotating in background or side column.

**Programs**
- Use horizontal scroll or grid with strong visual hierarchy.
- Each category has its own mini-ball variant or colored accent.

**Coaches**
- Large impactful portraits. Kawaljeet Sir highlighted for producing national players. Suryansh Yadav given director treatment.

**Achievements**
- Stats with ball "hitting" numbers or animated counters as ball rolls past.

**Gallery**
- Masonry or horizontal scroll with lightbox. Mix stills + embedded Instagram reels.

**Camps & Events**
- Timeline or card layout with strong CTAs.

**Final CTA / Footer**
- Large "Ready to Join the STA Legacy?" with multiple contact options.
- Map. Social proof bar. Footer with full contact (Address, +91 9754544265, info@sta.ind.in).

**Transitions Between Sections:**
- Smooth. Consider ball "traveling" between sections or leaving motion trails. Use Taru Bali style section dividers (subtle lines or botanical/ in this case, court net inspired elements).

---

## 4. Technical & Deliverable Guidelines

- **Mobile-First:** The rotating ball must work beautifully on mobile (perhaps smaller, fixed position with scroll still driving rotation).
- **Performance:** < 3s LCP. Optimize 3D assets heavily.
- **Accessibility:** ARIA labels, keyboard navigation, reduced motion option (that pauses ball rotation).
- **Handover:** 
  - Figma file with full responsive artboards, component library, animation prototypes (especially ball scroll behavior).
  - Style guide page.
  - All assets organized.
  - Micro-animation specs.

- **Animation Polish:** Every scroll should feel intentional. Micro-interactions on hover/tap. Parallax on supporting images.

---

## 5. Assets & References Provided Separately
1. **Visual Reference Pack** (buttons, icons, colors, UI components).
2. **Photography & Content Assets** (academy photos, coach images, gallery, reels).
3. **Client Requirement Snapshot** (detailed text, bios, timings, positioning lines).
4. **PRD Document** (this package includes the accompanying PRD).

**Instruction:** Thoroughly review the Taru Bali website experience (scroll multiple times, note every transition and visual treatment). Then deeply analyze every visual reference we provide. The final design must feel like a natural evolution — premium botanical care brand transformed into **premium tennis & pickleball academy experience**.

We want visitors to feel the discipline, joy, legacy, and community of STA the moment they land on the page. The rotating ball should be addictive to scroll with.

Please present 2-3 concept directions in the first review, with special focus on different approaches to the rotating ball (realistic 3D vs illustrated vs mixed media).

**Questions?** Reach out immediately.

**Let's create something players and parents will be proud to share.**

---
*Approved for use with all provided visual references and the STA Client Requirement Snapshot.*
