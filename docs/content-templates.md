# Content Templates

This guide provides templates and examples for all text content needed in your portfolio. Use these as starting points and customize with your own information.

## Personal Information

### Your Name
```
Replace "Your Name" in Hero section with your actual name
Example: "John Smith" or "Jane Doe"
```

### Professional Role/Title
```
Replace "Developer" in Hero typing animation with your primary role
Examples:
- "Full Stack Developer"
- "Frontend Engineer"
- "UI/UX Designer"
- "Software Engineer"
```

### Typing Animation Roles
```javascript
// Replace in Hero.jsx
const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Problem Solver',
  'Open Source Contributor'
];
```

---

## About Me Section

### Template
```
Hi! I'm [Your Name], a [Your Role] based in [Location]. I specialize in [Primary Skills/Technologies].

I'm passionate about [What drives you]. With [X years/months] of experience in [Industry/Field], I've worked on [Types of projects].

When I'm not coding, you can find me [Hobbies/Interests]. I'm always eager to learn new technologies and collaborate on interesting projects.
```

### Example
```
Hi! I'm Alex Chen, a Full Stack Developer based in San Francisco. I specialize in building scalable web applications with React and Node.js.

I'm passionate about creating user-friendly interfaces that solve real problems. With 3 years of experience in web development, I've worked on everything from e-commerce platforms to data visualization tools.

When I'm not coding, you can find me hiking in the Bay Area or contributing to open-source projects. I'm always eager to learn new technologies and collaborate on interesting projects.
```

### Length Guidelines
- **Minimum:** 100 words (2 paragraphs)
- **Maximum:** 200 words (3 paragraphs)
- **Tone:** Professional but friendly

---

## Project Case Studies

### Template
```
Title: [Project Name]
Category: [React / Design / Fullstack / etc.]
Description: [One-sentence summary]

Problem:
[2-3 sentences describing the problem or challenge this project addressed]

Solution:
[3-4 sentences explaining your approach and what you built]

Technologies:
[List of technologies used, e.g., "React, Tailwind CSS, Firebase, Framer Motion"]

Result:
[2-3 sentences about outcomes, metrics, or impact]
```

### Example 1: E-Commerce Platform
```
Title: ShopEasy - Modern E-Commerce Platform
Category: Fullstack
Description: A responsive e-commerce platform with real-time inventory management

Problem:
Small businesses struggled with outdated e-commerce solutions that were difficult to manage and didn't provide a good mobile experience. They needed an affordable, modern platform that was easy to use.

Solution:
I built ShopEasy, a full-stack e-commerce platform using React for the frontend and Node.js with Express for the backend. The platform features a responsive design, real-time inventory updates, and an intuitive admin dashboard. I implemented Stripe for secure payments and used Firebase for real-time data synchronization.

Technologies:
React, Node.js, Express, MongoDB, Stripe API, Firebase, Tailwind CSS, Redux

Result:
The platform now serves 50+ small businesses with a 98% uptime rate. Users report 40% faster checkout times compared to their previous solution, and mobile conversion rates increased by 25%.
```

### Example 2: Portfolio Website
```
Title: Personal Portfolio v2
Category: React
Description: A modern, animated portfolio showcasing my work and skills

Problem:
My previous portfolio was outdated and didn't reflect my current skill level. I needed a platform that would impress recruiters and showcase my frontend capabilities.

Solution:
I designed and built a new portfolio from scratch using React and Vite for optimal performance. I implemented dark mode, smooth scroll animations with Framer Motion, and a dynamic typing effect. The site features a project filtering system and integrates with EmailJS for the contact form.

Technologies:
React, Vite, Tailwind CSS, Framer Motion, EmailJS, Vercel

Result:
Achieved a Lighthouse performance score of 95+. The portfolio has received positive feedback from recruiters and led to 3 interview opportunities within the first month of launch.
```

### Minimum Requirements
- **Number of Projects:** 2-3 for MVP
- **Problem Length:** 2-3 sentences
- **Solution Length:** 3-4 sentences
- **Result Length:** 2-3 sentences (include metrics if possible)

---

## Experience/Internship Entries

### Template
```
Company: [Company Name]
Role: [Your Job Title]
Dates: [Month Year] - [Month Year / Present]

Bullet Points:
- [Impact-based achievement with metric if possible]
- [Technical skill or responsibility]
- [Collaboration or leadership example]
- [Another achievement or contribution]
```

### Example 1
```
Company: TechStart Inc.
Role: Frontend Developer Intern
Dates: Jun 2024 - Aug 2024

Bullet Points:
- Developed 5+ responsive React components used across 3 major product features
- Improved page load time by 30% through code splitting and lazy loading
- Collaborated with design team to implement new UI design system
- Participated in code reviews and contributed to team documentation
```

### Example 2
```
Company: University Web Services
Role: Student Web Developer
Dates: Jan 2023 - May 2024

Bullet Points:
- Maintained and updated 10+ university department websites
- Implemented accessibility improvements achieving WCAG 2.1 AA compliance
- Trained 5 new student developers on WordPress and web standards
- Reduced support tickets by 25% through improved documentation
```

### Tips for Bullet Points
- Start with action verbs (Developed, Implemented, Improved, Led, etc.)
- Include metrics when possible (%, numbers, time saved)
- Focus on impact, not just tasks
- Keep each point to 1-2 lines

---

## Skills Lists

### Template
```json
{
  "languages": ["Language 1", "Language 2", "Language 3"],
  "frameworks": ["Framework 1", "Framework 2", "Framework 3"],
  "tools": ["Tool 1", "Tool 2", "Tool 3"]
}
```

### Example
```json
{
  "languages": [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "HTML5",
    "CSS3",
    "SQL"
  ],
  "frameworks": [
    "React",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Next.js",
    "Redux"
  ],
  "tools": [
    "Git & GitHub",
    "VS Code",
    "Figma",
    "Postman",
    "MongoDB",
    "Firebase"
  ]
}
```

### Guidelines
- **Minimum per category:** 3 skills
- **Maximum per category:** 8 skills
- Be honest - only list skills you're comfortable discussing
- Order by proficiency (strongest first)

---

## Testimonials (Optional)

### Template
```
Quote: "[What they said about you]"
Author: [Person's Name]
Role: [Their Title, Company]
```

### Examples
```
Quote: "Alex delivered exceptional work on our e-commerce platform. Their attention to detail and problem-solving skills were outstanding."
Author: Sarah Johnson
Role: Product Manager, ShopEasy

Quote: "A talented developer with great communication skills. Always met deadlines and produced clean, maintainable code."
Author: Michael Chen
Role: Senior Developer, TechStart Inc.
```

### Tips
- Ask former colleagues, clients, or professors
- Keep quotes to 1-2 sentences
- Focus on specific skills or qualities
- Get permission before using

---

## Social Links

Update in `Footer.jsx`:

```javascript
const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
};
```

---

## Content Checklist

Before deployment, ensure you have:

- [ ] Personal name and role
- [ ] Typing animation roles (4-5 variations)
- [ ] About me bio (100-200 words)
- [ ] 2-3 project case studies
- [ ] 1-2 experience entries
- [ ] Skills lists (languages, frameworks, tools)
- [ ] Social media links
- [ ] Testimonials (optional)

---

## Placeholder Strategy

If you're not ready with content:

1. **Use generic placeholders** during development (Stories 1.1-4.3)
2. **Replace before deployment** (Story 5.1)
3. **Update anytime** after launch (content is in JSON files, easy to change)

---

## Writing Tips

### Be Specific
❌ "Worked on web development"
✅ "Developed 5+ responsive React components"

### Use Metrics
❌ "Improved performance"
✅ "Improved page load time by 30%"

### Show Impact
❌ "Built a website"
✅ "Built an e-commerce platform serving 50+ businesses"

### Keep It Concise
- Use bullet points
- Avoid jargon
- Write for recruiters (they skim!)

---

## Need Inspiration?

Check out these portfolio examples:
- https://brittanychiang.com/
- https://jacekjeznach.com/
- https://caferati.me/

Remember: Your content should be authentic and reflect YOUR unique experience and personality!
