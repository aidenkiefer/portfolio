---
title: "DataDuel"
slug: "data-duel"
date_range: "2025"
role: "Team of 7; Full-stack developer"
status: "Completed"
visibility: "Public"
case_study_recommended: true
repo_public: true
links:
  repo: "TODO"
  demo: "TODO"
  writeup: "TODO"
tech_stack:
  - "Flask 3.0.0 — evidence: requirements.txt line 1"
  - "Python 3.8+ — evidence: app.py, backend structure"
  - "Supabase (PostgreSQL) — evidence: requirements.txt line 5, supabase_stravaDB/strava_user.py"
  - "Vanilla JavaScript (ES6+) — evidence: frontend/*.js files, no framework imports"
  - "Strava API v3 — evidence: app.py OAuth implementation, strava_parser.py"
  - "flask-cors 4.0.0 — evidence: requirements.txt line 2"
  - "Cloudflare Pages — evidence: wrangler.toml, DEPLOYMENT.md"
  - "Render.com — evidence: Procfile, DEPLOYMENT.md"
tags:
  - "full-stack"
  - "fitness"
  - "api-integration"
  - "oauth"
  - "algorithm"
  - "real-time"
---

## Overview
DataDuel is a web application that creates fair fitness competition by scoring runners based on personal improvement rather than raw performance. The platform integrates with Strava to sync running activities and uses a custom algorithm that rewards progress relative to individual baselines, ensuring beginners and elite runners can compete on equal footing.

## Problem / Motivation
Traditional fitness leaderboards reward raw athletic ability, which demotivates casual runners and creates an unfair competitive environment. A beginner improving their 5K time by 30 seconds deserves the same recognition as an elite runner improving by 10 seconds, but existing platforms don't account for this. DataDuel solves this by implementing an improvement-based scoring system that normalizes performance across fitness levels, gamifies consistency through badges and challenges, and creates social engagement through friends and custom leagues.

## What I Built
- Built a Flask REST API backend with 20+ endpoints handling OAuth, activity sync, scoring, and social features
- Implemented OAuth 2.0 flow with Strava API including automatic token refresh and session management
- Designed and implemented an improvement-based scoring algorithm that compares current metrics to personal baselines across speed, distance, and time
- Created a gamification system with automatic badge awarding (moving time, distance, speed) and weekly challenges (3+ runs, 15km+, 5-day streak)
- Built a streak calculation system that tracks consecutive days with activities and handles edge cases
- Developed a friends system with request/accept/reject functionality using Supabase PostgreSQL database
- Implemented custom leagues feature allowing users to create private groups with separate leaderboards
- Created a route discovery system with search and filtering capabilities
- Built environment-aware frontend configuration that auto-detects development vs production
- Implemented centralized authentication helper with automatic token refresh to handle Supabase session expiration

## Technical Highlights
- **Improvement-based scoring algorithm**: Compares current period metrics (average speed, max speed, distance, moving time) against personal baselines calculated from all historical activities, applying different scoring logic for improving, declining, or maintaining performance
- **OAuth 2.0 with automatic token refresh**: Implemented complete OAuth flow with Strava, handling token expiration, refresh tokens, and secure storage in Supabase database
- **Dual storage architecture**: Migrated from JSON file storage to Supabase PostgreSQL while maintaining backward compatibility, supporting both storage methods during transition
- **Real-time leaderboard system**: Global and league-specific leaderboards that update dynamically as users sync activities, with proper UUID-based user identification
- **Gamification engine**: Automatic badge detection (moving time ≥1000s, distance ≥5000m, max speed ≥4 m/s) and weekly challenge tracking with automatic reset
- **Streak calculation algorithm**: Validates consecutive days with activities, handles multiple activities per day, and properly breaks streaks when gaps exceed 24 hours
- **Friends system with Supabase**: Bidirectional friendship tracking, friend request workflow, and user search functionality with proper UUID handling
- **Environment-aware deployment**: Frontend auto-detects localhost vs production and routes API calls accordingly, backend supports both local JSON and Supabase storage via environment variables

## Architecture (High-level)
```
Frontend (Cloudflare Pages)
  ↓ HTTPS/REST API
Backend (Flask on Render.com)
  ↓ Database Queries + External API
Supabase PostgreSQL + Strava API
```

**Component Breakdown:**
- **Frontend**: Static HTML/CSS/JS served from Cloudflare Pages CDN, uses Fetch API for backend communication
- **Backend**: Flask REST API with CORS enabled, handles OAuth callbacks, activity parsing, score calculation, and data persistence
- **Database**: Supabase PostgreSQL for user profiles, friends, leagues, and authentication; JSON files for MVP data storage
- **External APIs**: Strava API v3 for activity data and OAuth authentication

## Evidence-based Stack & Tools
- **Flask 3.0.0** — evidence: requirements.txt line 1, app.py imports Flask
- **Python 3.8+** — evidence: app.py, Person.py, Score.py, backend structure
- **Supabase 2.0.0** — evidence: requirements.txt line 5, supabase_stravaDB/strava_user.py imports create_client
- **PostgreSQL** — evidence: migration_friends.sql, migration_leagues.sql, migration_user_profile.sql in supabase_stravaDB/
- **flask-cors 4.0.0** — evidence: requirements.txt line 2, app.py imports CORS
- **requests 2.31.0** — evidence: requirements.txt line 3, app.py uses requests for Strava API calls
- **python-dotenv 1.0.0** — evidence: requirements.txt line 4, app.py calls load_dotenv()
- **Vanilla JavaScript** — evidence: frontend/*.js files use ES6 modules, no framework dependencies
- **Cloudflare Pages** — evidence: wrangler.toml configures deployment, DEPLOYMENT.md documents setup
- **Render.com** — evidence: Procfile specifies web server command, DEPLOYMENT.md documents backend deployment

## Key Concepts Demonstrated
- **OAuth 2.0 authentication flow** — Authorization code grant with token refresh
- **RESTful API design** — Consistent endpoint patterns, proper HTTP methods, JSON responses
- **Database schema design** — Normalized tables for users, friends, leagues, challenges with foreign key relationships
- **Algorithm design** — Improvement-based scoring with baseline calculation and scaling logic
- **Data normalization** — Converting raw Strava API responses to structured Person objects with calculated metrics
- **Session management** — Supabase JWT token handling with automatic refresh before expiration
- **CORS configuration** — Cross-origin resource sharing for frontend-backend separation
- **Environment configuration** — Dynamic API URL selection based on hostname detection
- **Gamification mechanics** — Badge system, challenge tracking, streak calculation
- **Real-time data synchronization** — Activity sync from external API with local state updates

## How to Run Locally
- **Prereqs**: Python 3.8+, Strava API credentials, Supabase account
- **Install**: `pip install -r requirements.txt`
- **Run Backend**: `cd DataDuel/backend && python app.py` (runs on http://localhost:5000)
- **Run Frontend**: Open `DataDuel/frontend/index.html` in browser or use Live Server on port 5500
- **Tests**: `cd DataDuel && python main_test.py` (runs test suite for Person, Score, badges, challenges)

## What I'd Improve Next
- Migrate fully from JSON storage to Supabase for all data (currently hybrid approach)
- Implement proper session management with Flask-Login or JWT tokens instead of file-based tokens
- Add rate limiting to protect against Strava API limits and prevent abuse
- Implement caching layer for frequently accessed data (leaderboards, user profiles)
- Add comprehensive error handling and user-friendly error messages throughout the frontend
- Implement WebSocket connections for real-time leaderboard updates without polling
- Add unit tests for the scoring algorithm edge cases and integration tests for the OAuth flow
- Optimize database queries with proper indexing and query optimization for large user bases

## Notes / Redactions (if needed)
- This is a class project (CS422) - repository may be private or require authentication
- Strava API credentials and Supabase keys should be redacted from any public documentation
- Some hardcoded URLs in code (localhost:5500, localhost:5000) are development-specific and should be environment variables
- The Supabase service role key visible in strava_user.py should be moved to environment variables for production
