#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const MANIFEST_PATHS = [
  ".antigravity-plugin/plugin.json",
  ".claude-plugin/plugin.json",
  ".codex-plugin/plugin.json",
];

const CHANGELOG_PATH = "CHANGELOG.md";

function printHelp() {
  console.log(`Usage: node scripts/bump-version.mjs <patch|minor|major> [--dry-run]

Synchronizes the semantic version across all platform plugin manifests:
  - .antigravity-plugin/plugin.json
  - .claude-plugin/plugin.json
  - .codex-plugin/plugin.json
and prepends a new release section to CHANGELOG.md.

Options:
  --dry-run   Preview the next version and affected files without writing changes.
  -h, --help  Show this help message.
`);
}

function parseSemver(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) {
    throw new Error(`Invalid semantic version: "${version}" (expected X.Y.Z)`);
  }
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
  };
}

function bumpSemver(version, bumpType) {
  const { major, minor, patch } = parseSemver(version);
  if (bumpType === "major") return `${major + 1}.0.0`;
  if (bumpType === "minor") return `${major}.${minor + 1}.0`;
  if (bumpType === "patch") return `${major}.${minor}.${patch + 1}`;
  throw new Error(`Unsupported bump type: "${bumpType}"`);
}

function formatDateUTC() {
  return new Date().toISOString().slice(0, 10);
}

function updateChangelog(content, nextVersion) {
  const heading = `## [${nextVersion}] - ${formatDateUTC()}`;
  if (content.includes(`## [${nextVersion}]`)) {
    return content;
  }

  const entry = `${heading}\n\n### Changed\n- Synchronized plugin release ${nextVersion}.\n\n`;
  const firstReleaseIdx = content.search(/^## \[/m);
  if (firstReleaseIdx === -1) {
    const trimmed = content.trimEnd();
    return `${trimmed}\n\n${entry}`;
  }

  return (
    content.slice(0, firstReleaseIdx) +
    entry +
    content.slice(firstReleaseIdx)
  );
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    printHelp();
    process.exit(0);
  }

  const dryRun = args.includes("--dry-run");
  const positional = args.filter((arg) => !arg.startsWith("-"));

  if (positional.length !== 1 || !["patch", "minor", "major"].includes(positional[0])) {
    console.error('Error: Please specify exactly one bump type: "patch", "minor", or "major".');
    printHelp();
    process.exit(1);
  }

  const bumpType = positional[0];
  const loadedManifests = MANIFEST_PATHS.map((relPath) => {
    const absPath = path.join(ROOT_DIR, relPath);
    const raw = fs.readFileSync(absPath, "utf8");
    const json = JSON.parse(raw);
    return { relPath, absPath, json };
  });

  const versions = new Set(loadedManifests.map((m) => m.json.version));
  if (versions.size !== 1) {
    const details = loadedManifests
      .map((m) => `  - ${m.relPath}: ${m.json.version}`)
      .join("\n");
    throw new Error(`Manifest versions are out of sync:\n${details}`);
  }

  const currentVersion = loadedManifests[0].json.version;
  const nextVersion = bumpSemver(currentVersion, bumpType);

  if (dryRun) {
    console.log(`[dry-run] Version bump (${bumpType}): ${currentVersion} -> ${nextVersion}`);
    for (const m of loadedManifests) {
      console.log(`[dry-run] Would update ${m.relPath}`);
    }
    console.log(`[dry-run] Would prepend "## [${nextVersion}] - ${formatDateUTC()}" to ${CHANGELOG_PATH}`);
    return;
  }

  for (const m of loadedManifests) {
    m.json.version = nextVersion;
    fs.writeFileSync(m.absPath, `${JSON.stringify(m.json, null, 2)}\n`, "utf8");
  }

  const changelogAbsPath = path.join(ROOT_DIR, CHANGELOG_PATH);
  const currentChangelog = fs.existsSync(changelogAbsPath)
    ? fs.readFileSync(changelogAbsPath, "utf8")
    : "# Changelog\n\n";
  const updatedChangelog = updateChangelog(currentChangelog, nextVersion);
  fs.writeFileSync(changelogAbsPath, updatedChangelog, "utf8");

  console.log(`Bumped ui-agency-kit from ${currentVersion} to ${nextVersion}`);
}

main();
