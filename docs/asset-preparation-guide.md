# Asset Preparation Guide

This guide provides specifications for all visual assets needed for your portfolio website. You can either prepare assets to these specifications OR use placeholders initially and replace them later.

## Profile Picture

**Purpose:** Displayed in the About Me section

### Specifications
- **Dimensions:** 400x400 pixels (square)
- **Format:** WebP (preferred) or PNG/JPG
- **File Size:** < 200KB
- **Background:** Solid color or professional setting
- **Quality:** High resolution, well-lit, professional appearance

### Placeholder Option
Use UI Avatars service (already implemented in Story 2.2):
```
https://ui-avatars.com/api/?name=Your+Name&size=400&background=3B82F6&color=fff
```

---

## Project Thumbnails

**Purpose:** Displayed on project cards in the Projects section

### Specifications
- **Aspect Ratio:** 16:9 (e.g., 800x450 pixels)
- **Format:** WebP (preferred) or PNG/JPG
- **File Size:** < 300KB each
- **Content:** Screenshot of project, mockup, or representative image
- **Quantity:** 2-3 minimum for MVP

### Placeholder Options
- **Placeholder.com:** `https://via.placeholder.com/800x450`
- **Unsplash:** Free stock photos from https://unsplash.com/
- **Screenshots:** Take screenshots of your actual projects

### Naming Convention
```
project-1-thumbnail.webp
project-2-thumbnail.webp
project-3-thumbnail.webp
```

Place in `public/assets/projects/` folder.

---

## Resume PDF

**Purpose:** Downloadable from navbar "Resume" button

### Specifications
- **Format:** PDF only
- **File Size:** < 2MB
- **Filename:** `resume.pdf`
- **Location:** `public/resume.pdf`
- **Content:** Professional, up-to-date, well-formatted

### Tips
- Use a clean, modern template
- Include: contact info, summary, experience, education, skills
- Ensure it's ATS-friendly (Applicant Tracking System)
- Export from Google Docs, Canva, or LaTeX

### Placeholder Option
- Link to LinkedIn profile instead
- Or create a simple one-page resume quickly

---

## Certificate Images (Optional)

**Purpose:** Displayed in Certificates/Achievements section

### Specifications
- **Aspect Ratio:** 3:2 or 4:3 (e.g., 600x400 pixels)
- **Format:** WebP or PNG/JPG
- **File Size:** < 200KB each
- **Content:** Actual certificate images or badge graphics

### Placeholder Option
Use generic placeholder images:
```
https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Certificate
```

Or skip this section entirely for MVP.

---

## Favicon (Optional but Recommended)

**Purpose:** Browser tab icon

### Specifications
- **Dimensions:** 32x32 pixels (or 512x512 for high-res)
- **Format:** ICO, PNG, or SVG
- **Filename:** `favicon.ico`
- **Location:** `public/favicon.ico`

### Quick Generation
- Use your initials as a simple favicon
- Generate at https://favicon.io/
- Or use a simple icon from https://heroicons.com/

---

## Social Media Icons

**Already Handled:** SVG icons are included in the Footer component code (Story 1.4). No action needed.

---

## Asset Checklist

Before starting development, ensure you have:

- [ ] Profile picture (or placeholder strategy decided)
- [ ] 2-3 project thumbnails (or placeholder strategy decided)
- [ ] Resume PDF (or LinkedIn link as alternative)
- [ ] Certificate images (or decision to skip for MVP)
- [ ] Favicon (optional)

---

## File Organization

Recommended folder structure in `public/`:

```
public/
├── resume.pdf
├── favicon.ico
└── assets/
    ├── profile.webp
    ├── projects/
    │   ├── project-1.webp
    │   ├── project-2.webp
    │   └── project-3.webp
    └── certificates/
        ├── cert-1.webp
        └── cert-2.webp
```

---

## Image Optimization Tips

### Converting to WebP
```bash
# Using online tools
https://squoosh.app/

# Or using command line (if you have cwebp installed)
cwebp input.png -o output.webp
```

### Compressing Images
- Use https://tinypng.com/ for PNG/JPG
- Use https://squoosh.app/ for all formats
- Aim for < 300KB per image

---

## When to Prepare Assets

**Option 1: Before Development**
- Prepare all assets before Story 1.1
- Allows for realistic testing during development
- Portfolio looks complete from day one

**Option 2: During Development**
- Use placeholders during Stories 1.1-4.3
- Replace with real assets before Story 5.1 (deployment)
- Faster to start development

**Recommendation:** Use placeholders initially (Option 2) to avoid blocking development. Replace before deployment.

---

## Need Help?

- **Design Tools:** Canva (free), Figma (free)
- **Photo Editing:** Photopea (free, browser-based)
- **Stock Photos:** Unsplash, Pexels (free)
- **Resume Templates:** Canva, Google Docs templates
