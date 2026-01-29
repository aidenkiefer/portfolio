## Task
- Add a **short TTL cache** to `refreshCart()` in the widget so non-forced refreshes do not always hit the network.

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
- Add:
  - `let cartLastFetchedAt = 0`
  - `const CART_TTL_MS = 30000` (30s; can be adjusted if needed, but keep it small)
- In `refreshCart(force = false)`:
  - If not forced and cart is not open, and `cartData` exists, and `Date.now() - cartLastFetchedAt < CART_TTL_MS`, return `cartData` without fetching.
  - When a cart fetch succeeds, set `cartLastFetchedAt = Date.now()`.
- Preserve existing forced behavior:
  - `refreshCart(true)` bypasses TTL.
- Preserve existing error behavior:
  - Do not clear cart state on error.

## Done Criteria
- When the widget is idle, repeated `refreshCart(false)` calls within TTL do **not** call `GET /api/cart`.
- Forced refresh still calls the network.
- Summarize changes in ≤5 bullets.

