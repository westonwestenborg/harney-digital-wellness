# Dark Mode Removal Plan
## Harney County Digital Wellness Website

**Date:** August 23, 2025
**Goal:** Completely eliminate all dark mode support and references to ensure single light-mode UI treatment

---

## Current Status Analysis

### ✅ Already Light-Mode Locked
- HTML has `data-theme="flexoki"` hardcoded in `src/layouts/Layout.astro:15`
- No theme switching JavaScript exists anywhere in codebase
- No localStorage/sessionStorage theme persistence
- Custom "flexoki" theme only defines light mode colors
- No CSS dark mode selectors in custom stylesheets

### 🔍 Minimal Dark Mode References Found
The site is already **functionally light-mode only**, but has these vestigial references:

1. **daisyUI Configuration** - includes default "light" theme option
2. **Favicon SVG** - responds to system dark mode preference
3. **CSS Comment** - misleading reference to "light/dark mode"

---

## Files Requiring Changes

### 1. `tailwind.config.js` (Lines 59-91)
**Current:**
```javascript
daisyui: {
  themes: [
    "light",  // ← REMOVE THIS
    {
      flexoki: {
        // ... custom theme definition
      },
    },
  ],
},
```

**Action:** Remove `"light"` from themes array to force only custom flexoki theme

### 2. `public/favicon.svg` (Lines 5-7)
**Current:**
```css
@media (prefers-color-scheme: dark) {
    path { fill: #FFF; }
}
```

**Action:** Remove entire dark mode media query block

### 3. `src/styles/digital-wellness-theme.css` (Line 4)
**Current:**
```css
/* Hero Section Backgrounds - Responsive to light/dark mode */
```

**Action:** Update comment to remove misleading dark mode reference

---

## Detailed Removal Steps

### Step 1: Remove daisyUI Light Theme Option
**File:** `tailwind.config.js`
**Line:** 61
**Change:**
```diff
  daisyui: {
    themes: [
-     "light",
      {
        flexoki: {
          // Core brand colors - semantic meaning for digital wellness
```

**Result:** Forces daisyUI to use only the custom flexoki theme, preventing any automatic light/dark switching

### Step 2: Remove Favicon Dark Mode CSS
**File:** `public/favicon.svg`
**Lines:** 5-7
**Change:**
```diff
  <style>
      path { fill: #000; }
-     @media (prefers-color-scheme: dark) {
-         path { fill: #FFF; }
-     }
  </style>
```

**Result:** Favicon will always use black fill regardless of system preference

### Step 3: Update CSS Comment
**File:** `src/styles/digital-wellness-theme.css`
**Line:** 4
**Change:**
```diff
- /* Hero Section Backgrounds - Responsive to light/dark mode */
+ /* Hero Section Backgrounds - Light mode styling */
```

**Result:** Removes misleading reference to dark mode responsiveness

---

## Verification Steps

### 1. Build Test
```bash
npm run build
```
Ensure no build errors after changes

### 2. Development Server Test
```bash
npm run dev
```
Visit http://localhost:4321 and verify:
- Site loads with consistent light theme
- All colors match Flexoki light palette
- No visual inconsistencies

### 3. Browser Testing
Test in multiple browsers with different system preferences:
- **Chrome** - Light system theme
- **Chrome** - Dark system theme
- **Firefox** - Light system theme
- **Firefox** - Dark system theme
- **Safari** - Light system theme
- **Safari** - Dark system theme

**Expected Result:** Site should look identical in all cases

### 4. Developer Tools Check
In browser dev tools:
- Inspect `<html>` element - should show `data-theme="flexoki"`
- Check computed CSS variables - all should be light mode values
- Favicon should be black in both light/dark system preferences

---

## Risk Assessment

### 🟢 Low Risk Changes
All proposed changes are **extremely low risk** because:

1. **No functional impact** - site already locked to light mode
2. **No user-facing changes** - visual appearance remains identical
3. **No JavaScript involved** - purely CSS/configuration changes
4. **Easily reversible** - changes are minimal and well-documented

### 🔒 Rollback Plan
If any issues arise, simply revert the three changes:
1. Add `"light"` back to daisyUI themes array
2. Restore favicon dark mode CSS
3. Revert CSS comment

---

## Post-Removal Benefits

### 1. **Cleaner Configuration**
- Removes unused daisyUI light theme
- Eliminates confusing theme options
- Clearer intent for future developers

### 2. **Consistent Branding**
- Favicon matches site's light theme in all contexts
- No unexpected dark mode artifact behaviors

### 3. **Simplified Maintenance**
- No need to test dark mode scenarios
- Reduced CSS complexity
- Clear single-theme approach

### 4. **Performance**
- Slightly smaller CSS bundle (removes unused light theme)
- No theme switching logic overhead

---

## Implementation Checklist

- [ ] **Step 1:** Remove `"light"` from `tailwind.config.js` themes array
- [ ] **Step 2:** Remove dark mode CSS from `public/favicon.svg`
- [ ] **Step 3:** Update comment in `src/styles/digital-wellness-theme.css`
- [ ] **Verification:** Run `npm run build` - confirm no errors
- [ ] **Verification:** Run `npm run dev` - confirm site loads correctly
- [ ] **Verification:** Test in multiple browsers/system themes
- [ ] **Verification:** Check favicon appearance in both light/dark OS modes
- [ ] **Documentation:** Update CLAUDE.md if needed
- [ ] **Git:** Commit changes with clear message

---

## Conclusion

This plan removes all vestigial dark mode references while maintaining the site's current light-mode-only functionality. The changes are minimal, low-risk, and easily reversible, ensuring a clean single-theme implementation for the Harney County Digital Wellness website.

**Total Changes:** 3 files, ~5 lines of code
**Estimated Time:** 15 minutes
**Risk Level:** Very Low
