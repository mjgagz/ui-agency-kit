# UI Agency Kit (Claude Code Entrypoint)

Permanent UI/UX rules live in [`rules/AGENTS.md`](./rules/AGENTS.md). Read and follow them on every UI task, always inspecting local project tokens and conventions before editing.

## Available Capabilities

- **Workflow skill (`/ui-agency-flow`)**: defined in [`skills/ui-agency-flow/SKILL.md`](./skills/ui-agency-flow/SKILL.md). Guides visual/functional audits, approval-gated redesigns, new view briefings, surgical edits, and live browser verification.
- **Visual audit subagent (`ui-critic`)**: defined in [`agents/ui-critic.md`](./agents/ui-critic.md). Strictly read-only; inspects the live application using Chrome DevTools MCP or Playwright MCP and returns prioritized findings.
- **Functional QA subagent (`qa-operativo`)**: defined in [`agents/qa-operativo.md`](./agents/qa-operativo.md). Strictly read-only; exercises navigation, filters, modals, and form edge cases in a real browser and reports reproducible issues.
