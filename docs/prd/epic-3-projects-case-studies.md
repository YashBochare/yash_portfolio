# PRD: Epic 3 - Projects & Case Studies

**Epic ID:** 3  
**Epic Name:** Projects & Case Studies  
**Priority:** HIGH  
**Status:** Ready for Development

## Epic Goal
Showcase work effectively through a filterable project grid with detailed case study modals, demonstrating technical skills and problem-solving abilities.

## User Stories

### Story 3.1: Create Project Data Structure
**Priority:** HIGH  
**Effort:** 1 hour  
**Story File:** [story-3.1-project-data.yaml](file:///Users/yash/yash_portfolio/docs/stories/story-3.1-project-data.yaml)

**As a** Developer  
**I want** A JSON schema for project data  
**So that** Projects can be managed separately from code

**Acceptance Criteria:**
- `projects.json` created with complete schema
- Schema includes: id, title, category, description, image, technologies, caseStudy
- Case study structure: problem, solution, tech, result
- Minimum 2-3 sample projects with placeholder data

---

### Story 3.2: Design Project Card Component
**Priority:** HIGH  
**Effort:** 2 hours  
**Story File:** [story-3.2-project-card.yaml](file:///Users/yash/yash_portfolio/docs/stories/story-3.2-project-card.yaml)

**As a** Developer  
**I want** A reusable project card component  
**So that** Projects display consistently with hover effects

**Acceptance Criteria:**
- ProjectCard component created
- Displays: thumbnail, title, description, tech tags
- Hover effect: lift and shadow increase
- onClick handler for modal
- Responsive and dark mode support

---

### Story 3.3: Implement Project Grid with Filter Logic
**Priority:** MEDIUM  
**Effort:** 2-3 hours  
**Story File:** [story-3.3-project-filter.yaml](file:///Users/yash/yash_portfolio/docs/stories/story-3.3-project-filter.yaml)

**As a** Developer  
**I want** A filterable project grid  
**So that** Visitors can filter projects by category

**Acceptance Criteria:**
- Filter pills dynamically generated from project categories
- Active filter highlighted
- Grid filters projects on click
- Responsive grid (1 col mobile, 2 tablet, 3 desktop)
- Uses ProjectCard component

---

### Story 3.4: Build Project Detail Modal (Case Study)
**Priority:** HIGH  
**Effort:** 3 hours  
**Story File:** [story-3.4-project-modal.yaml](file:///Users/yash/yash_portfolio/docs/stories/story-3.4-project-modal.yaml)

**As a** Developer  
**I want** A modal showing full project case study  
**So that** Visitors can read detailed project information

**Acceptance Criteria:**
- Reusable Modal component created
- ProjectModal displays: Problem → Solution → Tech → Result
- Close button and backdrop click to close
- Scroll lock when modal open
- Escape key closes modal
- Smooth animations with Framer Motion

---

## Epic Success Criteria
- [ ] Project filtering works smoothly
- [ ] All project cards display correctly with hover effects
- [ ] Modal opens/closes with smooth animations
- [ ] Case study format is clear and readable
- [ ] Responsive on all screen sizes
- [ ] Dark mode support
- [ ] No console errors
- [ ] Accessibility: keyboard navigation works

## Dependencies
- **Prerequisite:** Epic 2 (Landing Sections) must be completed
- **Blocks:** Epic 4 (Social Proof & Contact) can start after this epic

## Technical Notes
- Headless content pattern (projects.json)
- Framer Motion for modal animations
- Dynamic filter generation from data
- Scroll lock implementation for modal

## Estimated Total Effort
**8-10 hours** for complete epic
