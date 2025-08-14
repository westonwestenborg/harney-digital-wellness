# Claude Context - Harney County Digital Wellness Website

## Project Overview
A comprehensive digital wellness resource website for Harney County, Oregon families, built with Astro, Tailwind CSS, and daisyUI. Created in partnership with Pacific University research team and approved by Harney County School District #3.

## Tech Stack & Setup
- **Framework:** Astro v5 with static site generation
- **Styling:** Tailwind CSS v3 + daisyUI v5 (custom "harney" theme)
- **Interactivity:** Preact components for future interactive features
- **Content:** Markdown-based content collections for easy editing
- **Deployment:** GitHub Pages (auto-deploy on main branch push)

## Key Commands
```bash
npm run dev     # Start development server (http://localhost:4321)
npm run build   # Build for production
npm run preview # Preview production build locally
```

## Critical Configuration Notes

### Tailwind CSS Version
- **MUST use Tailwind CSS v3.x** (not v4) for Astro compatibility
- Uses `@astrojs/tailwind` integration, not Vite plugin
- Config file: `tailwind.config.js` (CommonJS format)

### Content Structure
- **Markdown content:** `src/content/pages/*.md` (recommended for most pages)
- **Astro components:** `src/pages/*.astro` (for complex interactivity)
- **Converted to Markdown:** `/get-help`, `/quick-start`
- **Still in components:** Homepage, screen-time (interactive), others ready to convert

### Custom Theme Colors
```javascript
// daisyUI theme colors in tailwind.config.js - Flexoki color scheme
flexoki: {
  "primary": "#205EA6",    // Flexoki blue
  "secondary": "#66800B",  // Flexoki green  
  "accent": "#A02F6F",     // Flexoki magenta
  "base-100": "#FFFCF0",   // Flexoki paper background
}
```

## Content Editing Workflow
1. **For content updates:** Edit `src/content/pages/*.md` files
2. **For new pages:** Create new `.md` file + corresponding `.astro` page that imports it
3. **Placeholders:** Look for `> **PACIFIC UNIVERSITY TEAM:**` blocks

## Key Files to Know
- `src/layouts/Layout.astro` - Main site layout with navigation
- `src/components/MarkdownPage.astro` - Renders markdown content with proper styling
- `src/content/config.ts` - Content collections schema
- `tailwind.config.js` - Theme configuration (use CommonJS not ESM)
- `.github/workflows/deploy.yml` - Auto-deployment to GitHub Pages

## Known Issues & Solutions
- **Tailwind opacity classes:** Use `opacity-70` not `text-base-content/70` in @apply directives
- **daisyUI focus states:** Some classes like `text-primary-focus` don't work in @apply, use regular color values
- **Build errors:** Usually related to CSS class compatibility - check Tailwind v3 documentation

## Pacific University Integration Points
- **High Priority:** Crisis contacts in `/get-help`, assessment quiz in `/quick-start`
- **Interactive components:** Pre-built templates in `src/components/` for React/Preact implementation
- **Survey integration:** Typeform embed/link in `/survey` page
- **Local contacts:** All marked with clear PACIFIC UNIVERSITY TEAM placeholders

## Development Notes
- Site builds successfully with current config
- All styling now works correctly (navbar, colors, responsive design)
- Content collections properly configured for Markdown editing
- GitHub Pages deployment tested and working
- PWA manifest included for mobile app-like experience

## Emergency Commands
If styling breaks again:
```bash
npm uninstall tailwindcss @tailwindcss/vite
npm install @astrojs/tailwind tailwindcss@^3.4.0
```

## Future Enhancements Ready
- Interactive components templates created
- Content migration path established  
- Analytics integration planned (Plausible recommended)
- Additional page conversions to Markdown ready to implement