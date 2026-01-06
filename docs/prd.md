

# Product Requirements Document (PRD): Personal Portfolio Website

**Version:** 1.0
**Status:** Approved
**Date:** January 6, 2026

## 1. Goals and Background Context
**Goals:**
*   Create a professional, modern online identity for the user.
*   Showcase technical skills and experience through detailed case studies.
*   Provide a frictionless way for recruiters/clients to contact the user.
*   Demonstrate frontend proficiency via high-quality UI interactions (Dark Mode, Animations).

**Background:**
The user is a {Student/Developer/Designer} needing a centralized portfolio. Existing solutions are either too generic or lack specific feature showcases. This project is a greenfield build using modern web technologies.

## 2. Requirements

### 2.1 Functional Requirements (FR)
*   **FR1 - Navigation:** Fixed/Sticky navigation bar with links to sections: About, Projects, Skills, Experience, Contact. "Download Resume" button prominent.
*   **FR2 - Theme Toggle:** A visible toggle switch to switch between Light and Dark modes. Preference should be saved in local storage.
*   **FR3 - Hero Section:** Display headline, subtext, and a "typing" animation effect for the role/skills text.
*   **FR4 - Project Filtering:** The Projects section must allow filtering by category (e.g., React, Design, Fullstack).
*   **FR5 - Project Cards:** Each card links to a detail view or modal containing the case study (Problem -> Solution -> Tech -> Result).
*   **FR6 - Contact Form:** A functional form (Name, Email, Message) that integrates with an email service (e.g., EmailJS, Formspree) to send messages without a custom backend.
*   **FR7 - Testimonials:** A slider/carousel component to display client/peer reviews.

### 2.2 Non-Functional Requirements (NFR)
*   **NFR1 - Responsiveness:** Layout must adapt seamlessly to Mobile (320px+), Tablet, and Desktop.
*   **NFR2 - Performance:** Lighthouse Performance score > 90. Fast initial load.
*   **NFR3 - Accessibility:** Proper contrast ratios (WCAG AA), semantic HTML, and keyboard navigation support.
*   **NFR4 - No Blog:** The system must NOT include blog functionality or folders.

## 3. User Interface Design Goals
*   **Aesthetic:** Minimal, clean, professional.
*   **Typography:** Sans-serif, highly readable.
*   **Motion:** Smooth transitions on hover states; subtle entrance animations (fade-in) for sections on scroll.
*   **Theme:**
    *   *Light Mode:* High brightness, clean whites/grays.
    *   *Dark Mode:* Deep blues/grays (not pure black) to reduce eye strain.

## 4. Technical Assumptions
*   **Architecture:** Single Page Application (SPA) or Static Site Generator (SSG).
*   **Hosting:** Vercel / Netlify / GitHub Pages.
*   **Data Strategy:** Content (projects, skills) stored in JSON files or local constants for easy editing (Headless approach).

## 5. Epic List
1.  **Epic 1: Foundation & Navigation:** Project setup, responsive layout, Navbar, Footer, Dark Mode engine.
2.  **Epic 2: Landing Sections:** Hero (with animation), About, Skills, Certificates.
3.  **Epic 3: Projects & Case Studies:** Project grid, filtering logic, project details view.
4.  **Epic 4: Social Proof & Contact:** Experience timeline, Testimonials slider, Contact form integration.

## 6. Epic Details

### Epic 1: Foundation & Navigation
*   **Goal:** Establish the app structure, global styling, and navigation.
*   **Stories:**
    *   1.1 Setup Project Repo & Tech Stack.
    *   1.2 Implement Global Layout & Responsive Navbar.
    *   1.3 Implement Dark/Light Mode Context & Toggle.
    *   1.4 Implement Footer with Social Links.

### Epic 2: Landing Sections
*   **Goal:** Create the personal introduction areas.
*   **Stories:**
    *   2.1 Build Hero Section with Typing Animation.
    *   2.2 Build About Me Section.
    *   2.3 Build Skills Grid (categorized).
    *   2.4 Build Certificates/Achievements Section.

### Epic 3: Projects & Case Studies
*   **Goal:** Showcase work effectively.
*   **Stories:**
    *   3.1 Design Project Card Component.
    *   3.2 Implement Project Grid with Filter Logic (JS).
    *   3.3 Build Project Detail View/Modal (Case Study format).

### Epic 4: Social Proof & Contact
*   **Goal:** Validate skills and enable communication.
*   **Stories:**
    *   4.1 Build Experience/Internship Timeline.
    *   4.2 Build Testimonial Slider Component.
    *   4.3 Implement Contact Form & Email Service Integration.

***

### 🧱 **Handoff & Next Steps**

The PRD is ready.
**Please save the content above into `docs/prd.md`.**

Once you have done that, I will hand you over to **Sally (UX Expert)**. She will define the specific visual structure (Wireframes/UI Spec) and help generate the AI Prompt you asked for to build this quickly.

**Type `next` when you are ready to proceed to the UX Phase.**