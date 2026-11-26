---
name: ui-agency-flow
description: >-
  Guides agency-grade UI/UX design, layout refactoring, view redesign, visual
  audit, interactive QA, and live browser verification across web applications.
  Use when auditing an existing screen, testing interactive flows and forms,
  polishing or redesigning an interface, or designing a new view or modal.
---

# UI Agency Flow

Structured workflow for delivering disciplined, high-craft UI/UX design, audits, and interactive QA. Always inspect the target repository's design tokens, CSS/styling architecture, and local rules before proposing or making any change.

## Decision Tree (Choose the Active Route)

1. **Visual Audit Only** (no code edits requested):
   - Delegate to `ui-critic` (or follow its read-only protocol).
   - Inspect the live app in a real browser against [UX Rubric](resources/ux-rubric.md) and [Browser Checklist](resources/browser-checklist.md).
   - Return findings in 3 severity levels (`Crítico`, `Alto`, `Pulido`) using [Audit Report Example](examples/audit-report.md). Stop after reporting.
2. **Functional QA Audit Only** (flows, filters, forms, edge cases; no code edits):
   - Delegate to `qa-operativo` (or follow its read-only protocol).
   - Execute [QA Flows Checklist](resources/qa-flows-checklist.md) in a live browser.
   - Report reproducible step-by-step bugs (`Esperado` vs. `Real`) with console/network evidence. Stop after reporting.
3. **Redesign or Polish of an Existing View**:
   - Execute all 5 mandatory phases below, pausing at **Phase 2 (Design Plan)** for explicit user approval before editing code.
4. **New View, Page, or Modal**:
   - Before entering Phase 1/2, recommend `/grill-me` (in Antigravity) or run a short edge-case briefing covering: primary user goal, empty/loading/error states, validation rules, keyboard shortcuts, and destructive confirmations.
   - Once aligned, execute the 5 mandatory phases below.

## Five Mandatory Phases

### Phase 1: Diagnosis
- Inspect local design tokens, layout primitives, CSS variables, and component files in the target repository.
- Open the running application in a live browser (if available) to capture baseline screenshots and inspect real hierarchy, density, and console/network health.
- Evaluate current friction against [UX Rubric](resources/ux-rubric.md).

### Phase 2: Design Plan (Approval Gate)
- Present a concise, concrete design plan before modifying files:
  - Target files/components to touch.
  - Visual hierarchy changes (what becomes primary, what steps back, what gets removed per Krug & Occam).
  - Data alignment (`tabular-nums`), 4px/8px spacing adjustments, and keyboard ergonomics.
  - Exact scope boundaries (what will NOT be touched).
- **Stop and wait for explicit user approval** before moving to Phase 3 (unless the user explicitly waived the approval gate).

### Phase 3: Surgical Execution
- Apply focused, minimal edits using the repository's existing tokens and component primitives.
- Avoid introducing ad-hoc hardcoded colors, unrequested dependencies, or unrelated refactors.
- Preserve accessibility semantics (labels, focus rings, keyboard handlers, contrast).

### Phase 4: Live Browser Verification
- Verify the updated UI in a real browser:
  - **Google Antigravity**: use `/browser` (browser subagent).
  - **Claude Code / OpenAI Codex**: use Chrome DevTools MCP or Playwright MCP.
- Run every item in [Browser Checklist](resources/browser-checklist.md) and, when interactive controls or forms changed, [QA Flows Checklist](resources/qa-flows-checklist.md).
- Fix any visual defect, layout overflow, console error, or failed network request discovered during verification.

### Phase 5: Self-Critique & Final Report
- Review the live result critically against [UX Rubric](resources/ux-rubric.md) to confirm no anti-patterns slipped in.
- Deliver the final summary following [Audit Report Example](examples/audit-report.md): changes/findings summary, browser verification evidence, resolved items, and at most 2 optional follow-up improvements.

## Internal Resources

- [UX Rubric](resources/ux-rubric.md) — Five mandatory UX laws, data standards, and prohibited anti-patterns.
- [Browser Checklist](resources/browser-checklist.md) — Visual, responsive, contrast, and console/network verification criteria.
- [QA Flows Checklist](resources/qa-flows-checklist.md) — End-to-end interactive flow, filter, modal, and form edge-case test matrix.
- [Audit Report Example](examples/audit-report.md) — Concise reporting template for audits and completed redesigns.
