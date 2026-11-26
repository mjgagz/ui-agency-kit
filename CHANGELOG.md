# Changelog

All notable changes to `ui-agency-kit` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-26

### Added
- Multi-platform plugin manifests for Google Antigravity (`.antigravity-plugin/plugin.json`), Claude Code (`.claude-plugin/plugin.json`), and OpenAI Codex (`.codex-plugin/plugin.json` + `.agents/plugins/marketplace.json`).
- Minimalist SVG brand mark in `assets/logo.svg`.
- Permanent, project-agnostic UI/UX design rules in `rules/AGENTS.md` plus lightweight entrypoints in `AGENTS.md` and `CLAUDE.md`.
- `ui-agency-flow` workflow skill with decision tree, 5 mandatory phases, UX rubric, live browser checklist, interactive QA checklist, and audit report template.
- Strictly read-only `ui-critic` and `qa-operativo` subagents.
- Synchronized semantic version bump script (`scripts/bump-version.mjs`) and automated GitHub Release workflow (`.github/workflows/release.yml`).
