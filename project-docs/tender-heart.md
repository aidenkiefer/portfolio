---
title: "Tender Heart Vintage Website"
slug: "tender-heart-vintage"
date_range: "2024 – 2025"
role: "Solo; Full-stack Developer"
status: "Completed"
visibility: "Public"
case_study_recommended: true
repo_public: true
links:
  repo: "TODO"
  demo: "https://tenderheartvintage.com"
  writeup: "TODO"
tech_stack:
  - "HTML5 — evidence: code/*.html files with semantic markup"
  - "CSS3 — evidence: code/css/styles.css with custom properties and animations"
  - "Vanilla JavaScript — evidence: code/js/*.js files, no framework dependencies"
  - "Cloudflare Pages — evidence: wrangler.toml deployment configuration"
  - "Cloudflare Workers — evidence: functions/api/*.js serverless functions"
  - "Cloudflare R2 — evidence: wrangler.toml R2 binding, functions use env.R2"
  - "Resend API — evidence: functions/api/submissions/contact.js email integration"
  - "Fetch API — evidence: code/js/api-client.js uses native fetch()"
  - "LocalStorage — evidence: extensive use in admin.js, main.js, events.js"
tags:
  - "Full-stack"
  - "Serverless"
  - "CMS"
  - "Accessibility"
  - "Responsive Design"
---

## Overview

A full-stack website for a local vintage shop built with a serverless JAMstack architecture. Features a client-side content management system, event management, form submissions with email notifications, and comprehensive accessibility features. The site emphasizes community connection and face-to-face relationships, serving as both an online presence and community hub.

## Problem / Motivation

Tender Heart Vintage needed a modern, accessible website that could be managed by non-technical staff without requiring a traditional database or server infrastructure. The solution needed to support community events, consignment services, and content updates while maintaining fast performance and WCAG 2.1 AA accessibility compliance. The architecture had to be cost-effective, scalable, and easy to deploy.

## What I Built

- Built a complete website with 7 core pages (home, events, consign, story, visit, contact, admin) using semantic HTML5 and responsive CSS3
- Implemented a client-side CMS with localStorage persistence and Cloudflare R2 synchronization for content management
- Created serverless API endpoints using Cloudflare Workers for events, listings, form submissions, and image uploads
- Developed an admin dashboard with authentication, event management, featured items management, and form submission review
- Built a RESTful API client with automatic fallback to localStorage when API calls fail
- Implemented real-time cross-tab content synchronization using localStorage events
- Added floating particle animations, auto-scrolling gallery, and interactive carousels using vanilla JavaScript
- Integrated Resend API for email notifications on form submissions
- Designed and implemented comprehensive timezone handling for event dates to prevent display bugs

## Technical Highlights

- **Serverless Architecture**: Deployed on Cloudflare Pages with Workers for API endpoints, eliminating server management overhead
- **Progressive Enhancement**: Site functions without JavaScript; enhanced features load progressively for better accessibility
- **Dual Storage Strategy**: Content stored in both localStorage (immediate access) and Cloudflare R2 (persistence), with automatic sync
- **Caching Strategy**: Implemented ETag-based HTTP caching and Cache-Control headers for optimal performance
- **Timezone Handling**: Created custom `parseLocalDate()` function to handle date-only strings in local timezone, preventing UTC conversion bugs
- **Error Handling**: Comprehensive try-catch blocks with graceful fallbacks throughout the application
- **Cross-Tab Communication**: Real-time content updates across browser tabs using localStorage events
- **Accessibility-First Design**: WCAG 2.1 AA compliant with keyboard navigation, ARIA labels, high contrast ratios, and screen reader support

## Architecture (High-level)

```
Client (HTML/CSS/JS)
    ↓ fetch()
Cloudflare Workers (functions/api/)
    ↓ R2 API
Cloudflare R2 (Object Storage)
    ↓ Resend API
Email Notifications
```

**Content Flow:**
- Admin updates content → localStorage → API → R2 → Frontend fetches from R2
- Form submissions → API → R2 storage + Email notification
- Images → Upload API → R2 → Served via CDN

## Evidence-based Stack & Tools

- **HTML5** — evidence: `code/*.html` files with semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- **CSS3** — evidence: `code/css/styles.css` with CSS custom properties (`:root` variables), animations, and modern features
- **Vanilla JavaScript** — evidence: `code/js/*.js` files, no package.json or npm dependencies found
- **Cloudflare Pages** — evidence: `wrangler.toml` line 1-2 shows Pages configuration with assets directory
- **Cloudflare Workers** — evidence: `functions/api/events/index.js` exports `onRequestGet` function (Workers API)
- **Cloudflare R2** — evidence: `wrangler.toml` lines 9-12 shows R2 bucket binding, `functions/api/events/index.js` line 9 uses `env.R2.get()`
- **Resend API** — evidence: `functions/api/submissions/contact.js` lines 88-101 shows fetch to `https://api.resend.com/emails`
- **Fetch API** — evidence: `code/js/api-client.js` lines 21, 56, 70, 96, 114, 130, 144, 170, 188, 210, 232 use `fetch()`
- **LocalStorage** — evidence: `code/js/admin.js` line 48, `code/js/main.js` line 185, `code/js/events.js` line 22 use `localStorage.getItem/setItem`

## Key Concepts Demonstrated

- **JAMstack Architecture**: JavaScript, APIs, and Markup without traditional server infrastructure
- **Serverless Functions**: Stateless API endpoints that scale automatically
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features load progressively
- **Client-Side State Management**: localStorage for immediate access with R2 for persistence
- **RESTful API Design**: Standard HTTP methods (GET, POST, PUT, DELETE) with proper status codes
- **Caching Strategies**: ETag validation, Cache-Control headers, and client-side cache busting
- **Error Handling & Fallbacks**: Graceful degradation when API calls fail, fallback to localStorage
- **Cross-Tab Communication**: Using localStorage events for real-time synchronization
- **Timezone Handling**: Parsing date-only strings in local timezone to prevent UTC conversion issues
- **Accessibility Patterns**: Semantic HTML, ARIA attributes, keyboard navigation, screen reader support

## How to Run Locally

**Prerequisites:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Cloudflare account (for full functionality with R2 and Workers)

**Install:**
- No installation required for static site viewing
- For full functionality, deploy to Cloudflare Pages (requires `wrangler.toml` configuration)

**Run:**
```bash
# Static site only (no API functionality)
cd code
python -m http.server 8000
# Visit http://localhost:8000/index.html

# Full functionality requires Cloudflare Pages deployment
npx wrangler pages dev code --port 8080
```

**Tests:**
- Manual testing via browser DevTools console
- No automated test suite found in repository

## What I'd Improve Next

- Add automated testing suite (unit tests for date parsing, integration tests for API endpoints)
- Implement proper authentication system (currently uses localStorage, should use server-side sessions)
- Add image optimization pipeline (WebP conversion, responsive image sets)
- Implement rate limiting on API endpoints to prevent abuse
- Add monitoring and error tracking (e.g., Sentry integration)
- Create build pipeline for CSS/JS minification and bundling
- Add TypeScript for better type safety in complex functions

## Notes / Redactions (if needed)

- Admin credentials are hardcoded in `code/js/admin.js` (lines 4-7) — should be moved to environment variables in production
- Email API key (Resend) is configured via Cloudflare environment variables (not in repo) — safe
- No sensitive customer data in repository — form submissions stored in R2, not in codebase
- Store address and contact information is public business information — safe to publish
