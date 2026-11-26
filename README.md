# UI Agency Kit

Multi-agent UI/UX design, visual audit, and interactive QA plugin compatible simultaneously with **Google Antigravity**, **Claude Code**, and **OpenAI Codex**.

## Architecture

Each platform reads its own dedicated manifest while sharing a single source of truth for rules, skills, and subagents (with no root `plugin.json` to avoid schema collisions):

- `.antigravity-plugin/plugin.json` — Google Antigravity manifest
- `.claude-plugin/plugin.json` — Claude Code manifest
- `.codex-plugin/plugin.json` & `.agents/plugins/marketplace.json` — OpenAI Codex manifest & local marketplace entry
- `rules/AGENTS.md` — Permanent UI/UX rules (technical minimalism, 5 UX laws, `tabular-nums`, 4px/8px scale, live browser verification)
- `skills/ui-agency-flow/` — 5-phase UI workflow skill + checklists and report template
- `agents/ui-critic.md` — Read-only live visual & UX auditor
- `agents/qa-operativo.md` — Read-only interactive flow, filter, modal, and form QA tester

## Installation & Updates

### Google Antigravity

Install directly from this repository (local path or Git URL):

```bash
agy plugin install <repo-url-or-local-path>
```

Update to the latest version:

```bash
agy plugin update ui-agency-kit
```

### Claude Code

Install from your local clone or repository marketplace:

```bash
claude plugin marketplace add <repo-url-or-local-path>
claude plugin install ui-agency-kit
```

Update:

```bash
claude plugin update ui-agency-kit
```

### OpenAI Codex

This repository includes `.agents/plugins/marketplace.json` and `.codex-plugin/plugin.json` so Codex can discover `ui-agency-kit` directly from the repository or local clone. Pull the latest commit (`git pull`) to update.

## Usage Examples

- **Visual Audit (`ui-critic`)**:
  > Audita visualmente `http://localhost:3000/dashboard` con `ui-critic` y clasifica los hallazgos en Crítico, Alto y Pulido.
- **Interactive QA (`qa-operativo`)**:
  > Ejecuta `qa-operativo` sobre el flujo de filtros y creación de registros en `http://localhost:3000/orders`.
- **Guided Redesign (`/ui-agency-flow`)**:
  > Usa `/ui-agency-flow` para diagnosticar y proponer un plan de rediseño para la vista de facturación antes de editar código.

## Releasing a New Version

Bump all 3 manifests and `CHANGELOG.md` in sync locally:

```bash
node scripts/bump-version.mjs patch --dry-run
node scripts/bump-version.mjs patch
```

Or trigger the **Release** workflow manually in GitHub Actions (`Actions -> Release -> Run workflow`) choosing `patch`, `minor`, or `major`.
