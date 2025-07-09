# Harney County Digital Wellness Website

A comprehensive resource for Harney County families to build healthy digital habits and navigate online safety challenges.

## 🎯 Project Overview

This website provides practical tools and resources for parents and families in Harney County, Oregon, to address:
- Screen time management
- Online safety and cyberbullying prevention
- Mindful digital breaks and alternatives
- Local support resources
- Family media planning

**Created for:** Harney County families  
**Backed by:** Pacific University research team  
**Approved by:** Harney County School District

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── manifest.webmanifest
├── src/
│   ├── components/         # Reusable components
│   │   ├── ScreenTimeCalculator.tsx
│   │   ├── FamilyAssessmentQuiz.tsx
│   │   └── FamilyMediaPlanGenerator.tsx
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Homepage
│   │   ├── quick-start.astro
│   │   ├── screen-time.astro
│   │   ├── online-safety.astro
│   │   ├── mindful-breaks.astro
│   │   ├── survey.astro
│   │   ├── resources.astro
│   │   └── get-help.astro
│   └── styles/
│       └── global.css
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml
└── package.json
```

## 🎨 Design System

### Colors
The site uses the [Flexoki color palette](https://stephango.com/flexoki) - an inky color scheme for prose and code with warm, analog-inspired tones.

- **Primary (Flexoki Blue):** `#205EA6` - Trust, stability, professionalism
- **Secondary (Flexoki Green):** `#66800B` - Growth, balance, nature  
- **Accent (Flexoki Magenta):** `#A02F6F` - Encouraging action buttons
- **Base (Flexoki Paper):** `#FFFCF0` - Warm, comfortable background

*Color palette used under MIT license with attribution to [Flexoki](https://stephango.com/flexoki).*

### Typography
- Clean, readable fonts optimized for busy parents
- Generous spacing for quick scanning
- Mobile-first responsive design

### Components
- **daisyUI** components for consistent UI elements
- **Tailwind CSS** for utility-first styling
- Touch-friendly button sizes (44px minimum)
- Card-based layouts for digestible information

## 📋 Content Guidelines for Pacific University Team

### Content Structure
The site now uses **Markdown files** for easy content editing! 

**Content is organized in two ways:**
1. **Markdown Files** (`src/content/pages/`) - For most page content (recommended)
2. **Astro Components** (`src/pages/`) - For pages needing complex interactivity

**Currently converted to Markdown:**
- ✅ `/get-help` - `src/content/pages/get-help.md`
- ✅ `/quick-start` - `src/content/pages/quick-start.md`

**Still in Astro components (ready to convert):**
- `/screen-time` - Has interactive calculator
- `/online-safety` - Standard content page
- `/mindful-breaks` - Standard content page  
- `/survey` - Has external form integration
- `/resources` - Standard content page
- `/` (homepage) - Complex layout, keep as component

### Editing Content in Markdown

**To edit existing pages:**
1. Navigate to `src/content/pages/`
2. Edit the `.md` files directly
3. Use standard Markdown syntax
4. Special callouts use `> **PACIFIC UNIVERSITY TEAM:** text` format

**Example content structure:**
```markdown
---
title: "Page Title"
description: "Meta description"
hero:
  title: "Hero Title"
  subtitle: "Hero subtitle"
  gradient: "from-green-50 to-blue-50"
---

## Section Title

Content goes here...

> **PACIFIC UNIVERSITY TEAM:** This is a placeholder section

### Subsection

More content...
```

### Placeholder Content
You'll find sections marked:
```markdown
> **PACIFIC UNIVERSITY TEAM:** Add content description here
```

These indicate where content needs to be added. Each placeholder includes specific guidance on what should be included.

### Content Priorities

#### High Priority (Complete First)
1. **Crisis Support Contacts** (`/get-help`)
   - Symmetry Care contact information
   - Local crisis resources
   - School counselor contacts

2. **Family Assessment Quiz** (`/quick-start`)
   - Interactive questionnaire
   - Personalized recommendations
   - Resource routing

3. **Screen Time Calculator** (`/screen-time`)
   - Age-based recommendations
   - Oregon/National comparisons
   - Visual charts and feedback

#### Medium Priority
1. **Cyberbullying Content** (`/online-safety`)
   - Warning signs and prevention
   - Response strategies
   - Local reporting procedures

2. **Family Media Plan Generator** (`/screen-time`)
   - Interactive plan creation
   - PDF generation
   - Customizable templates

#### Lower Priority
1. **Mindful Activities Content** (`/mindful-breaks`)
   - Age-appropriate activities
   - DIY craft instructions
   - Local activity suggestions

## 🔧 Interactive Components to Implement

### 1. Family Assessment Quiz
**File:** `src/components/FamilyAssessmentQuiz.tsx`
- Multi-step questionnaire
- Branching logic based on responses
- Personalized resource recommendations
- Results export/email functionality

### 2. Screen Time Calculator  
**File:** `src/components/ScreenTimeCalculator.tsx`
- Age-based input validation
- Visual data representation (Chart.js)
- Comparison with state/national averages
- Reduction strategy suggestions

### 3. Family Media Plan Generator
**File:** `src/components/FamilyMediaPlanGenerator.tsx`
- Multi-step form wizard
- PDF generation (jsPDF)
- Customizable family agreements
- Print-friendly formatting

### Suggested Libraries
```bash
npm install chart.js react-chartjs-2 jspdf react-hook-form
```

## 🔗 External Integration Tasks

### Survey Integration
1. Create Typeform survey
2. Replace placeholder link in `/survey` page
3. Consider embedding vs. external link

### Social Media Safety Links
Verify and update all platform safety links in `/online-safety` and `/resources`:
- Instagram Safety Center
- Snapchat Safety Center  
- TikTok Safety Hub
- YouTube Safety
- Discord Safety
- Facebook/Meta Safety

### Local Contacts
Update all local contact information in `/get-help`:
- Nicki Henshaw (title, contact info)
- Additional school contacts
- Symmetry Care details
- Local crisis resources

## 🚀 Deployment

### GitHub Pages (Automatic)
GitHub Pages automatically **purges its CDN cache** every time you push a new commit to the published branch. If you notice stale files (e.g., old links, missing images), simply push any commit—even a documentation tweak—and the new build will invalidate the cache within a few minutes.
The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment
```bash
# Build the site
npm run build

# The `dist/` folder contains the built site
# Upload contents to your web server
```

## 📱 Progressive Web App (PWA)

The site includes basic PWA capabilities:
- Web app manifest for "Add to Home Screen"
- Offline-friendly static generation
- Mobile-optimized interface

To enhance PWA features, consider adding:
- Service worker for offline functionality
- App shell caching strategy
- Push notifications for resource updates

## ♿ Accessibility

The site follows WCAG 2.1 AA standards:
- Semantic HTML structure
- Proper heading hierarchy  
- Alt text for images
- Keyboard navigation support
- High contrast color ratios
- Touch-friendly interaction targets

### Testing Accessibility
```bash
# Install accessibility testing tools
npm install -g @axe-core/cli

# Run accessibility tests
axe --save results.json http://localhost:4321
```

## 📊 Analytics & Monitoring

Consider implementing:
- **Plausible Analytics** (privacy-friendly, cookie-free)
- **Google Analytics 4** with privacy settings
- **Hotjar** for user behavior insights
- **Web Vitals** monitoring

Example Plausible integration:
```html
<script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
```

## 🧪 Testing

### Recommended Testing Strategy
1. **Manual Testing**
   - Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
   - Mobile responsiveness (iOS Safari, Android Chrome)
   - Accessibility with screen readers

2. **Automated Testing**
   - Lighthouse CI for performance/accessibility
   - Playwright for end-to-end testing
   - Jest for component unit tests

3. **User Testing**
   - Test with actual Harney County parents
   - Gather feedback on navigation and content clarity
   - Validate local resource accuracy

## 🔒 Security Considerations

- No user data collection or storage
- Static site generation for security
- External form handling (Typeform) for surveys
- HTTPS enforcement via GitHub Pages
- No server-side processing required

## 📞 Support & Questions

For technical questions about this implementation:
- Review the Astro documentation: https://docs.astro.build
- Check daisyUI components: https://daisyui.com
- Tailwind CSS reference: https://tailwindcss.com

For content and local resource questions:
- Contact Pacific University research team
- Consult with Harney County School District
- Verify local contact information with sources

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

**Conditions:**
- 📋 License and copyright notice must be included

This project is created for Harney County families and may include references to external resources. Please ensure all content and links comply with applicable usage rights and provide proper attribution where required.

---

**Built with:** Astro, Tailwind CSS, daisyUI  
**Deployed on:** GitHub Pages  
**Color Palette:** [Flexoki](https://stephango.com/flexoki) (MIT License)  
**Maintained by:** Pacific University Research Team
