# Epic 4: Social Proof & Contact

## Overview
**Goal:** Establish professional credibility through experience and testimonials, and provide a functional communication channel.

**Value:**
- **Credibility:** Detailed work history and testimonials validate skills.
- **Engagement:** Contact form enables direct outreach for opportunities.

## User Stories

### Story 4.1: Build Experience Timeline
**As a** Visitor,
**I want** to see a timeline of the developer's work experience,
**so that** I can assess their career progression and role capability.

**Acceptance Criteria:**
- Vertical timeline component created.
- Displays Role, Company, Date, and Description.
- Responsive design (stacked on mobile).

### Story 4.2: Build Testimonial Slider
**As a** Visitor,
**I want** to read testimonials from colleagues or clients,
**so that** I can trust the developer's soft skills and reliability.

**Acceptance Criteria:**
- Slider component with auto-play and manual controls.
- Displays Quote, Author Name, Role, and optional Image.
- Smooth transitions between slides.

### Story 4.3: Implement Contact Form with EmailJS
**As a** Visitor,
**I want** to send a message directly from the website,
**so that** I don't need to open my email client manually.

**Acceptance Criteria:**
- Form fields: Name, Email, Subject, Message.
- Form validation (required fields, valid email format).
- Integration with EmailJS for sending emails.
- Success and Error notifications (Toast or inline).
- Loading state handling.

## Technical Considerations
- **Animations:** Use `framer-motion` for timeline entrance.
- **Forms:** Use `react-hook-form` for management.
- **Email:** `emailjs-com` or `@emailjs/browser`.
- **Validation:** Basic regex or schema validation.

## Design
- **Timeline:** Clean vertical line with dots for milestones.
- **Testimonials:** Card style within a carousel container.
- **Contact:** Clean form with visible focus states.
