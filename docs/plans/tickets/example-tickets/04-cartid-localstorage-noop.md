## Task
- Stop noisy `localStorage` writes/logs by making `setCartId()` a **no-op when the cart id hasn’t changed**.

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
- Update `setCartId(cartId)`:
  - Read current stored value: `const current = getCartId()`
  - If `cartId` is truthy:
    - If `current === cartId`, return (no write, no log).
    - Else write and log once.
  - If `cartId` is falsy:
    - If `current` is already null/empty, return (no log).
    - Else remove and log once.
- Keep behavior of `fetchJSON()` that calls `setCartId(data.id)` when a cart id is present.

## Done Criteria
- Repeated `GET /api/cart` responses that return the same cart id do **not** trigger repeated “Cart ID saved…” logs.
- Summarize changes in ≤5 bullets.

