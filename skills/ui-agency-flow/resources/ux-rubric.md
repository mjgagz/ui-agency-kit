# UX Rubric

Reference criteria for visual audits, design plans, and final self-critique.

## 1. Five Mandatory UX Laws

| Law | Principle | Concrete Verification |
| :--- | :--- | :--- |
| **Krug's Third Law** | Eliminate needless words | Remove filler subtitles, welcome banners, and redundant helper copy. Every label must earn its space. |
| **Hick's Law** | Reduce choice paralysis | Exactly one unmistakable primary CTA per view, section, or modal. Secondary actions use subdued styles; rare actions move to overflow menus. |
| **Fitts's Law** | Optimize target size & proximity | Primary and frequent controls have comfortable hit areas (minimum ~36–40px height for buttons/inputs) and sit close to the content they govern. |
| **Miller's Law** | Respect cognitive chunking | Group navigation items, KPIs, filter controls, and form sections into clear blocks of 4 to 7 elements. |
| **Occam's Razor** | Remove non-functional chrome | Strip decorative borders, nested boxes, redundant badges, and icons that do not clarify hierarchy or state. |

## 2. Data & Operational Standards

- **Tabular numerals**: apply `font-variant-numeric: tabular-nums` to all KPIs, currency amounts, counts, IDs/folios, dates, and numeric table columns.
- **Spacing rhythm**: keep margins, paddings, and gaps strictly on a 4px / 8px scale.
- **Restrained color system**: low-saturation neutral surfaces; reserve the accent color exclusively for primary actions, active states, or real semantic alerts.
- **Keyboard ergonomics**: support `Cmd/Ctrl + K` for search/command palette where applicable, `Esc` to close modals/drawers/popovers, and `Enter` to submit primary forms.
- **Local token fidelity**: use the target repository's existing CSS variables, theme tokens, and component primitives.

## 3. Prohibited Anti-Patterns

- Neon colors, artificial glow effects, blur halos, or decorative gradients without functional meaning.
- Generic boilerplate templates with uniform, undifferentiated card grids.
- Filler copy such as *"¡Bienvenido de nuevo!"*, *"Welcome back!"*, or *"Aquí puedes gestionar..."*.
- Flat visual hierarchy where every metric, card, or button competes with equal emphasis.
- Destructive actions (delete, revoke, reset) styled with the same visual weight as the primary constructive CTA.
