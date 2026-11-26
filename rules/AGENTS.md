# UI Agency Kit — Permanent Design & UX Rules

These rules apply whenever designing, auditing, refactoring, or verifying any user interface. They are project-agnostic and must always harmonize with the active repository's own design tokens and conventions.

## 1. Aesthetic Direction

- **Technical minimalism**: aim for crisp, modern product craftsmanship inspired by disciplined native/desktop software (clean typography, clear hierarchy, generous breathing room, deliberate borders and surfaces).
- **Low-saturation surfaces**: build on neutral dark or clean light surfaces with subtle elevation steps rather than heavy drop shadows or noisy backgrounds.
- **Restrained accent color**: reserve the brand or primary accent color strictly for the primary action, active navigation/selection state, or real status alerts. Everything else stays neutral.

## 2. Five Mandatory UX Laws

1. **Krug's Third Law ("Get rid of half the words, then get rid of half of what's left")**: cut redundant instructions, filler subtitles, and repetitive labels to the bare minimum required for clarity.
2. **Hick's Law**: expose a single, unmistakable primary action per view, section, or modal. Secondary actions must step back visually; rare actions belong in overflow menus.
3. **Fitts's Law**: provide comfortable, generous clickable/tappable hit targets for frequent actions and keep related controls spatially close to the content they act upon.
4. **Miller's Law**: group navigation items, metrics, filters, and form fields into scannable chunks of 4 to 7 items. Break dense screens into clear visual groups.
5. **Occam's Razor**: remove every border, card container, divider, badge, or icon that does not serve a concrete hierarchical or functional purpose.

## 3. Data Density & Operational Ergonomics

- **Tabular numerals**: enforce `font-variant-numeric: tabular-nums` on KPIs, monetary amounts, IDs/folios, counters, timestamps, and numeric table columns so values align cleanly and never jitter on update.
- **4px / 8px spacing scale**: keep padding, gaps, and layout rhythm strictly aligned to a 4px/8px grid.
- **Minimum clicks & keyboard fluency**: streamline repetitive operational tasks and support standard keyboard ergonomics (`Cmd/Ctrl + K` for command/search, `Esc` to dismiss modals/drawers/popovers, `Enter` to confirm primary form submission).

## 4. Respect the Local Repository

- Always inspect the target project's existing design tokens, CSS/Tailwind configuration, component primitives, and local guidelines before editing any file.
- Extend and compose existing tokens and components instead of introducing hardcoded colors, arbitrary spacing, or parallel styling systems.

## 5. Absolute Prohibitions

- No neon palettes, artificial glows, blur halos, or decorative gradients without functional meaning.
- No generic boilerplate dashboard templates or unrefined stock card grids.
- No filler copy (e.g., "¡Bienvenido de nuevo!", "Welcome back!", "Aquí puedes gestionar tus...").
- No visual flatland where every card, KPI, or button carries the same visual weight.
- No destructive buttons (delete, revoke, reset) styled with the same visual emphasis as the primary constructive action.

## 6. Mandatory Live Browser Verification

- No UI change or audit is complete until verified in a real running browser:
  - **Google Antigravity**: use `/browser` (browser subagent).
  - **Claude Code / OpenAI Codex**: use Chrome DevTools MCP or Playwright MCP.
- Confirm clean console/network state, clear 3-second visual hierarchy, responsive behavior, and interactive flows before reporting completion.
