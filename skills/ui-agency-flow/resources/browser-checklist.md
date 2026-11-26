# Live Browser Verification Checklist

Run this checklist in a real browser (`/browser` in Antigravity, or Chrome DevTools MCP / Playwright MCP in Claude Code and Codex) before declaring any UI audit or change complete.

## 1. Console & Network Health
- [ ] Zero uncaught JavaScript errors or React/framework hydration warnings in the browser console.
- [ ] Zero unexpected `4xx` or `5xx` network responses (including broken assets, missing fonts, or failed API calls).

## 2. Three-Second Visual Hierarchy
- [ ] Within 3 seconds of viewing the screen, the primary purpose, key data, and single primary action are immediately obvious.
- [ ] Secondary and destructive actions are visually subordinate to the primary CTA.
- [ ] No unnecessary borders, nested cards, or filler copy clutter the viewport.

## 3. Layout Integrity & Responsive Checkpoints
- [ ] Verified at desktop viewport (~`1440px` wide) and compact laptop viewport (~`1024px` wide).
- [ ] Zero accidental horizontal page scrollbars (`document.documentElement.scrollWidth <= window.innerWidth`).
- [ ] Zero clipped text, overlapping labels, or overflowing table cells without intentional ellipsis (`text-overflow: ellipsis`) or wrapping.

## 4. Typography, Contrast & Data Alignment
- [ ] Sufficient text-to-background contrast across both primary and muted labels, badges, and interactive states (hover, focus, disabled).
- [ ] `font-variant-numeric: tabular-nums` is active on KPIs, amounts, folios, and numeric table columns.
- [ ] Spacing follows a consistent 4px/8px rhythm.

## 5. Visual Evidence
- [ ] Before/after screenshots captured for redesigns or fixes (or current-state annotated screenshots for read-only audits).
