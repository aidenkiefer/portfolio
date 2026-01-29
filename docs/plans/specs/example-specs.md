# Cart widget refresh specs (static-site widget)

This spec is the **only context** needed to execute the cart widget tickets in `docs/plans/tickets/cart/`.

## Scope

- **In scope**: The static marketing-site cart/account widget at `apps/store/public/widget.js`.
- **Out of scope**: Any changes to the Shopify Storefront API logic, `/api/cart` contract, or store app UI.
- **Goal**: Reduce unnecessary network requests from the widget while preserving correctness and UX.

## Where the widget runs

- `apps/store/public/widget.js` is served and included by static pages (marketing site).
- The widget should **NOT** run on the Next.js app; it already checks for `#__next` and skips init to avoid hydration conflicts.

## Current behavior (baseline)

### Network calls

- On init, the widget runs:
  - `refreshCart()` → `GET /api/cart`
  - `refreshAccount()` → `GET /api/account/me`
- The widget then polls forever:
  - `setInterval(..., 60000)` calls `refreshCart(false)` and `refreshAccount()` when dropdowns are closed.
- Opening dropdowns forces refresh:
  - Opening cart: `refreshCart(true)`
  - Opening account: `refreshAccount(true)`

### Cart ID persistence (cross-domain)

- Static pages use `localStorage` key **`n2_cartId`**.
- Widget sends `X-Cart-Id: <id>` on requests when available.
- `fetchJSON()` writes cart IDs to `localStorage` by calling `setCartId(data.id)` when the response includes a cart id.

### Account caching exists; cart caching does not

- `refreshAccount()` caches for **5 minutes** in-memory (`accountDataCache`).
- `refreshCart()` has **no TTL** and does **no request coalescing**.

## Constraints (must not break)

- **Correctness**: Server is source of truth. Never fabricate cart state client-side.
- **UX**:
  - Do not “spam refresh” while the cart dropdown is open (existing behavior: avoid refresh unless forced).
  - Keep initial load behavior (one cart fetch + one account fetch) unless explicitly changed by ticket.
- **Compatibility**: No build tooling; this is a plain browser script. Keep changes ES2019+ compatible.

## Completed vs pending fixes (source of truth)

See `docs/implementation/cart-upgrades.md` “Fix plan status”.

As of current code review, only this is done:
- ✅ **Singleton init guard**: `window.__N2_WIDGET_INITIALIZED__`

Still pending (each has a ticket in `docs/plans/tickets/cart/`):
- ⏳ **Cart refresh coalescing** (single in-flight request)
- ⏳ **Cart TTL** (skip GET if fresh and not forced)
- ⏳ **Reduce/remove polling** (prefer event-driven refresh)
- ⏳ **Stop localStorage write/log spam** (write only when value changes)
- ⏳ **Optional logging hygiene** (DEBUG gate)

## Definitions / acceptance criteria (used by tickets)

### Coalescing (in-flight request sharing)

- If multiple calls to `refreshCart()` happen concurrently, the widget should issue **at most one** `GET /api/cart` and share the result.

### Cart TTL

- If cart was fetched recently (e.g. within \(15–30s\)), `refreshCart(false)` should return cached `cartData` without hitting the network.
- `refreshCart(true)` must bypass TTL.

### Polling changes

- Goal is to eliminate or dramatically reduce background `GET /api/cart`.
- Preferred: no polling; refresh on `visibilitychange` and on dropdown open (TTL-gated).
- If polling remains, it must be “sane”:
  - longer interval (e.g. 180–300s)
  - only when `document.visibilityState === 'visible'`

### localStorage writes/logging

- `setCartId(cartId)` should:
  - read the current stored value
  - only write + log when the value **changes**
  - avoid noisy logs on no-op writes

### Logging hygiene (optional)

- Add a single `DEBUG` flag to control verbose logging.
- Keep **errors** visible even when DEBUG is off.

