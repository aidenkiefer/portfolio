## Task
- Implement **in-flight request coalescing** for `refreshCart()` in the static-site widget so concurrent refreshes share a single `GET /api/cart`.

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
- Add a single module-level variable (e.g. `let cartRefreshPromise = null`) near other widget state.
- In `refreshCart(force = false)`:
  - If `!force` and a `cartRefreshPromise` exists, return it.
  - Otherwise create the promise for the fetch path (`fetchJSON('/api/cart', { method: 'GET' })`), assign it to `cartRefreshPromise`, and clear it in a `finally`.
- Preserve existing behaviors:
  - do not refresh while cart is open unless forced
  - still update `cartData` and `renderCart()` on successful fetch
  - do not clear cart state on fetch errors

## Done Criteria
- `refreshCart()` issues **at most one** `GET /api/cart` when called multiple times concurrently.
- No behavior regressions for open-cart suppression or forced refresh.
- Summarize changes in ≤5 bullets.

