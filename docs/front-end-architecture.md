# Frontend Architecture: Personal Portfolio

**Version:** 1.0
**Date:** January 6, 2026
**Author:** Architect (Winston)

## 1. Technical Summary
A **Single Page Application (SPA)** built with **React (Vite)**. It uses **Tailwind CSS** for styling and **Framer Motion** for the requested animations (typing effect, scroll reveals). Data for projects and skills is separated into JSON/Config files ("Headless" pattern) to allow easy content updates without touching component code.

## 2. Tech Stack

| Category | Technology | Version | Purpose | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Framework** | React (Vite) | 18+ | UI Library | Industry standard, massive ecosystem, easy to learn. |
| **Build Tool** | Vite | Latest | Bundler | Extremely fast dev server and optimized production build. |
| **Styling** | Tailwind CSS | 3.4+ | Styling | Utility-first, handles Dark Mode and Responsiveness natively. |
| **Animation** | Framer Motion | Latest | Motion | Simplifies complex animations like "Typing" and "Scroll Reveal". |
| **Forms** | React Hook Form | Latest | Form Logic | Lightweight validation for the Contact Form. |
| **Email** | EmailJS / Formspree | - | Email Service | Serverless email sending (No backend required). |
| **Routing** | React Router | 6+ | Navigation | Client-side routing for SPA feel (even if sections are anchors). |

## 3. Project Structure
We will use a feature-based structure to keep things organized.

```text
portfolio-root/
├── public/
│   ├── assets/              # Static images (profile pic, project thumbnails)
│   └── resume.pdf           # The downloadable resume file
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI (Buttons, Card, SectionWrapper)
│   │   ├── layout/          # Navbar, Footer, Layout Container
│   │   └── sections/        # Big section blocks (Hero, About, Projects...)
│   ├── context/             # React Context (ThemeContext for Dark Mode)
│   ├── data/                # Static Content (projects.json, skills.json)
│   ├── hooks/               # Custom Hooks (useScrollPosition, useTypingEffect)
│   ├── styles/              # Global CSS (Tailwind imports)
│   ├── App.jsx              # Main Entry
│   └── main.jsx             # DOM Rendering
├── .eslintrc.cjs
├── tailwind.config.js
└── vite.config.js
```

## 4. Key Implementation Patterns

### 4.1 Dark Mode Strategy
We will use Tailwind's `darkMode: 'class'` strategy.
1.  Create a `ThemeContext` that checks `localStorage` on load.
2.  If 'dark', add `class="dark"` to the `<html>` or root `<div>`.
3.  Components use `dark:` modifier: `<div className="bg-white dark:bg-slate-900">`.

### 4.2 "Headless" Content Management
To avoid hardcoding text inside components (making updates painful), we store data in `src/data/`:

*   `projects.js`: Array of objects `{ id, title, category, image, caseStudy: {...} }`.
*   `skills.js`: Object with arrays `{ languages: [], tools: [] }`.

This allows the **Project Filter** logic to simply `filter()` this array based on the selected category state.

### 4.3 Animation Strategy (Framer Motion)
*   **Typing Effect:** Use a `useTypingEffect` hook or Framer Motion's `staggerChildren` on the text characters.
*   **Scroll Reveal:** Create a `<Reveal>` wrapper component using `whileInView={{ opacity: 1, y: 0 }}`. Wrap every major section in this to get that "smooth entrance" effect.

### 4.4 Contact Form
*   Use **React Hook Form** to manage input state and validation (required fields, email regex).
*   `onSubmit` handler triggers the **EmailJS** SDK to send the data payload.

## 5. Component Standards

### 5.1 Naming Convention
*   **Files:** PascalCase for components (`ProjectCard.jsx`), camelCase for hooks (`useTheme.js`).
*   **Exports:** Named exports preferred (`export const Hero = ...`).

### 5.2 Component Template
```jsx
// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      {/* Content */}
    </section>
  );
};
```

## 6. Testing & Quality
*   **Linting:** ESLint + Prettier (Standard Vite config).
*   **Accessibility:** All images must have `alt` tags. All buttons must have `aria-label` if icon-only.
*   **Performance:** Images must be WebP/Avif format.

***

