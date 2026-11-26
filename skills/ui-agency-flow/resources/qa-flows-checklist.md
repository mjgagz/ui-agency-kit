# Interactive QA Flows Checklist

Execute these checks in a real browser (`/browser` in Antigravity, or Chrome DevTools MCP / Playwright MCP in Claude Code and Codex). Inspect console and network output at every step.

## 1. Navigation & Routing
- [ ] Navigate across primary routes, sidebar links, breadcrumbs, and internal tabs.
- [ ] Confirm active navigation states update accurately and browser Back/Forward works without broken state.

## 2. Search & Combined Filters
- [ ] Test free-text search with matching queries, partial terms, special characters, and zero-result queries (verify clear empty state).
- [ ] Combine two or more filters simultaneously and confirm results match all active criteria.
- [ ] Trigger filter reset / clear-all and confirm UI controls and displayed data fully revert to default state.

## 3. Modals, Drawers & Popovers
- [ ] Open and close via trigger button, close (`X` / Cancel) button, backdrop click (if supported), and `Esc` key.
- [ ] Confirm focus returns cleanly and underlying page scroll/state is not left locked after dismissal.

## 4. Form Validation & Edge Cases
- [ ] **Empty submission**: submit with required fields empty; verify clear, actionable inline error messages.
- [ ] **Invalid input**: test malformed emails, negative/non-numeric amounts, out-of-range dates, or invalid formats.
- [ ] **Boundary values**: test minimum/maximum lengths, zero values, very large numbers, and long unbroken strings.
- [ ] **Rapid double-click**: click the submit button twice rapidly; confirm loading/disabled guard prevents duplicate requests or duplicate records.

## 5. Feedback & State Persistence
- [ ] Verify clear success or error feedback appears after mutations (toast, inline banner, or updated row).
- [ ] Reload the page (`F5` / full refresh) after a valid mutation and confirm persisted state matches expectations.
- [ ] Confirm console and network logs remain free of uncaught exceptions and unexpected `404`/`500` responses throughout all steps.
