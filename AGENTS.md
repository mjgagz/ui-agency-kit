# UI Agency Kit (Codex Entrypoint)

Permanent UI/UX rules live in [`rules/AGENTS.md`](./rules/AGENTS.md). Read and follow them on every UI task, respecting the local repository's tokens and architecture.

## Available Capabilities

- **Workflow skill (`ui-agency-flow`)**: invoke via `$ui-agency-flow` or by referencing `skills/ui-agency-flow/SKILL.md` for structured UI diagnosis, approval-gated redesigns, new views, and live browser verification.
- **Visual audit (`ui-critic`)**: read-only visual & UX review persona defined in [`agents/ui-critic.md`](./agents/ui-critic.md). Inspects the live app via Chrome DevTools MCP or Playwright MCP without editing code.
- **Functional QA (`qa-operativo`)**: read-only interactive flow & form tester defined in [`agents/qa-operativo.md`](./agents/qa-operativo.md). Executes `skills/ui-agency-flow/resources/qa-flows-checklist.md` in a real browser and reports reproducible bugs.
