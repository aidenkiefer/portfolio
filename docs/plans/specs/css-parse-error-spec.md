# CSS Parse Error: Invalid `.[-:|]` Rule (Spec)

This spec describes a **reproducible CSS parsing error** that occurs when building or running the Next.js dev server. The error appears during CSS optimization/generation and blocks clean dev builds (500 on `/`) or produces warnings during `npm run build`.

## 1. Issue Summary

- **Symptom:** Parsing CSS source code fails with "Unexpected token Semicolon."
- **Location:** The failure is reported in the **generated/compiled** CSS, not in the hand-written source. The line number (e.g. ~1410) refers to the **output** of the Tailwind/PostCSS pipeline, not `app/globals.css` (which is only ~180 lines).
- **Invalid rule:**
  ```css
  .\[-\:\|\] {
    -: |;
  }
  ```
  Unescaped, this is selector `.[-:|]` with declaration `-: |;` (property `-`, value `|`), which is invalid CSS.
- **Impact:** Dev server can return 500 on `/`; production build may complete but with a clear warning during CSS optimization.

## 2. Environment & Stack

- **Framework:** Next.js 16.x (Turbopack for dev).
- **Styling:** Tailwind CSS v4, configured via:
  - `app/globals.css`: `@import "tailwindcss"`, `@theme { ... }`, `@layer base { ... }`, and previously a custom `@layer utilities { .text-balance { text-wrap: balance; } }` (that block has been removed in an attempted fix).
  - `tailwind.config.ts`: minimal config with `content` pointing at `./app/**/*.{js,ts,jsx,tsx,mdx}`, `./components/**/*.{js,ts,jsx,tsx,mdx}`, `./pages/**/*.{js,ts,jsx,tsx,mdx}`.
  - `postcss.config.mjs`: `@tailwindcss/postcss` and `autoprefixer`.
- **Observation:** The bad rule looks like a **Tailwind arbitrary-value** class: selector `.[-:|]` suggests a class name literally `[-:|]` (e.g. from a utility like `[someArbitraryValue]`). The declaration `-: |;` suggests the parser interpreted the arbitrary value as **property `-`** and **value `|`**, which would be invalid.

## 3. What Was Tried (So Far)

- **Removing custom `.text-balance`:** The custom `@layer utilities { .text-balance { text-wrap: balance; } }` block was removed from `app/globals.css` so the file no longer defines `.text-balance`. Tailwind v4 provides a built-in `text-balance` utility. After removal:
  - `npm run build` **succeeds** (exit 0) but the **same warning** still appears during CSS optimization ("Found 1 warning while optimizing generated CSS" with the `.[-:\|] { -: |; }` snippet).
  - So the bad rule is **not** coming from that custom utility block; it is generated from elsewhere.
- **Searching the repo:** Grep and manual search for the exact pattern `[-:|]`, `-: |`, or similar in `app/`, `components/`, `content/`, and `*.mdx` did **not** find any obvious source (no `className` with that string, no matching comment or string). The content config does **not** include `docs/` or `.claude/`, so those directories are not scanned by Tailwind for class names.
- **No other custom utilities:** Beyond the removed `.text-balance`, there are no other custom `@layer utilities` or arbitrary-property rules in `app/globals.css`.

## 4. Hypotheses (For the Ticket to Investigate)

1. **Mis-parsed custom utility:** Some other custom CSS (in `globals.css` or imported CSS) might be parsed by Tailwind/PostCSS in a way that produces an arbitrary property with name `-` and value `|`. For example, a typo or edge case in a `@layer utilities` or `@theme` rule.
2. **Tailwind v4 bug:** The Tailwind v4 pipeline might generate this rule from a built-in utility or from scanning content when it encounters a certain character sequence (e.g. in a string or comment that looks like a class).
3. **Content-scan false positive:** A file under `content` (e.g. in `app/`, `components/`, `pages/`) might contain a substring that Tailwind’s scanner interprets as a class name (e.g. inside JSX, a template literal, or an MDX file). The pattern might be split across lines or hidden in a way that grep didn’t match.
4. **Third-party or generated CSS:** A dependency or generated CSS (e.g. from a Next.js plugin or Tailwind plugin) might inject this rule. Less likely if the repo has no such plugins, but worth ruling out.

## 5. Constraints for a Fix

- **Do not** remove or weaken Tailwind/PostCSS in a way that breaks the existing design system (e.g. `@theme` variables, `@layer base` styles in `app/globals.css`).
- **Do not** change design or layout of the site just to avoid the error; the goal is to eliminate the invalid rule or its source.
- **Prefer** finding and removing or correcting the **source** of the bad rule (e.g. a bad class in source, or a mis-parsed custom rule) over post-processing or patching the compiled CSS, unless that’s the only viable option and is documented.
- If the cause is a **Tailwind v4 bug**, document it and consider a minimal workaround (e.g. override in `globals.css` or a PostCSS step) only if upstream fix isn’t available.

## 6. Success Criteria

- Running `npm run dev` and opening `/` does **not** result in a 500 or a CSS parse error in the terminal.
- Running `npm run build` completes **without** the "Found 1 warning while optimizing generated CSS" for the `.[-:\|] { -: |; }` rule.
- No new layout or styling regressions; the site still uses the intended Tailwind theme and base styles.

## 7. Reference Files

- `app/globals.css` — Tailwind import, `@theme`, `@layer base`; no custom `@layer utilities` at time of spec.
- `tailwind.config.ts` — Content paths and minimal config.
- `postcss.config.mjs` — PostCSS plugins.
- `package.json` — Next and Tailwind versions.
- This spec: `docs/plans/specs/css-parse-error-spec.md`.

## 8. Error Output (Reference)

Example from dev server:

```
Parsing CSS source code failed
  1408 |   }
  1409 |   .\[-\:\|\] {
> 1410 |     -: |;
      |         ^
  1411 |   }
  1412 |   .group-hover\:translate-x-1 {
Unexpected token Semicolon
```

Example from build:

```
Found 1 warning while optimizing generated CSS:
  .\[-\:\|\] {
    -: |;
  ^-- Unexpected token Semicolon
```
