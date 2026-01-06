# Personal Portfolio Website

A modern, responsive personal portfolio website designed to showcase identity, skills, and work. Built with React, Vite, and Tailwind CSS, focusing on a clean aesthetic and smooth user experience.

![Project Preview](/docs/qa/desktop-preview.png)

## 🚀 Features

*   **Hero Section:** Engaging introduction with a dynamic typing animation for roles.
*   **Projects Showcase:** Filterable grid view of case studies with detailed modal views.
*   **Skills Dashboard:** Categorized display of technical proficiency.
*   **Experience Timeline:** Impact-focused professional history.
*   **Testimonials:** Slider component for social proof.
*   **Contact Form:** Functional email integration using EmailJS.
*   **Dark/Light Mode:** Seamless theme switching with persistent user preference.
*   **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

*   **Frontend Library:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [EmailJS](https://www.emailjs.com/)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/yash_portfolio.git
    cd yash_portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components
│   ├── common/       # Buttons, Cards, Inputs
│   ├── layout/       # Navbar, Footer
│   └── sections/     # Page sections (Hero, Projects, etc.)
├── context/          # Global state (ThemeContext)
├── data/             # Static content data (projects, skills)
├── hooks/            # Custom React hooks
└── styles/           # Global styles and Tailwind config
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
