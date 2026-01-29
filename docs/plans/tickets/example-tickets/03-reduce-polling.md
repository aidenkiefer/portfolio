## Task
- Reduce or remove background polling in the widget so it does **not** continuously call `GET /api/cart` while the user is idle.

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
- Preferred approach (Option A from spec):
  - Remove the `setInterval(..., 60000)` polling entirely.
  - Add a `document.addEventListener('visibilitychange', ...)` handler:
    - When `document.visibilityState === 'visible'`, call `refreshCart(false)` and `refreshAccount(false)` (these should be TTL/cached from other tickets).
  - Keep the existing “refresh on dropdown open” behavior.
- Preserve the existing guards:
  - Do not init on `#__next`.
  - Do not refresh while dropdown is open (unless forced).

## Done Criteria
- Background `setInterval` polling is removed.
- Widget still refreshes on initial load and on dropdown open.
- Returning to the tab triggers a refresh (TTL/cached behavior acceptable).
- Summarize changes in ≤5 bullets.

