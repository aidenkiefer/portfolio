## Task
- Add an optional **DEBUG logging flag** to the widget so verbose logs can be silenced without hiding errors.

## Mandatory skill usage
- Read `.claude/skills/skills/using-superpowers/SKILL.md` and use relevant skills as needed **before doing anything else**.

## Reference Docs (read-only)
- docs/plans/claude-workflow-opt.md
- docs/plans/specs/cart-specs.md
- docs/implementation/cart-upgrades.md

## Allowed Files (ONLY these)
- apps/store/public/widget.js

## Hard Limits
- **Max tool calls**: 10
- **Scope**: Do not read files outside the list above
- **No discovery**: Do not explore other directories
- **No repo-wide search**: Avoid `grep`/`rg`/`ls` across the whole repo
- **If blocked**: Stop and ask me to add a specific file

## Instructions
- Implement a single `const DEBUG = false` (or environment-driven heuristic) near the top-level configuration.
- Add a tiny helper:
  - `function debugLog(...args) { if (DEBUG) console.log(...args) }`
- Replace the noisiest `console.log(...)` calls in high-frequency paths with `debugLog(...)`:
  - `fetchJSON()` “Fetching” and “API response” logs
  - `setCartId()` success logs
  - (Optional) init diagnostics logs
- Do **not** hide:
  - `console.error(...)`
  - `console.warn(...)`

## Done Criteria
- With DEBUG disabled, normal operation produces dramatically fewer logs, but errors still surface.
- Summarize changes in ≤5 bullets.

