# NED Admission Assistant

**BuildByte 2026 — IEEE NED Student Branch**

A centralized, no-login web platform for NED University aspirants: a verified
admission timeline, a department directory, a live merit calculator, an AI
branch-recommendation tool, and an FAQ chatbot — built to replace thousands of
repeated, one-on-one senior/volunteer conversations with an instant answer.

## Team

- _Add team member names + roles here_

## Solution overview

Every admission cycle, the same questions get asked and answered informally —
one student at a time. This doesn't scale. This platform puts verified NED
admission information in one place and layers instant, AI-assisted guidance
on top of it, so repeated questions get answered immediately and seniors /
admission-cell volunteers can focus on what actually needs a human.

## Features

| # | Feature | Where |
|---|---|---|
| 1 | Admission timeline (static, verified) | `src/components/Timeline.jsx` |
| 2 | Department & programme directory | `src/components/Departments.jsx` |
| 3 | Live merit calculator (60% test + 40% HSC-I) | `src/components/MeritCalculator.jsx` |
| 4 | AI branch recommendation | `src/components/BranchRecommendation.jsx` + `src/lib/recommend.js` |
| 5 | Previous merit list PDF viewer | `src/components/MeritListViewer.jsx` |
| 6 | Floating FAQ chatbot | `src/components/ChatWidget.jsx` |

No login, no accounts, nothing saved server-side — every tool is stateless,
matching the MVP non-goals in the PRD.

## Tech stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Routing/state:** plain React state (single page, anchor-linked sections)
- **AI:** the branch recommendation currently runs a local scoring function
  so the demo works with zero backend dependency and zero API latency risk.
  `src/lib/recommend.js` documents exactly how to swap it for a real Claude
  or OpenAI API call (e.g. a Supabase Edge Function) without touching any
  component — see the comment at the top of that file.
- **Data:** static JS modules in `src/data/` (departments, timeline, merit
  formula, FAQ). Swap these for a Supabase `departments` / `deadlines` table
  later without changing component code — each component just imports data.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Before demo day — data you should verify

The seed data in `src/data/deadlines.js` and `src/data/departments.js` is
pulled from public NED sources (official admissions schedule + department
pages), but **you must verify exact current-cycle dates, seat counts, and
fee figures** against the official portal before presenting:

- https://www.neduet.edu.pk/admission
- Official admissions schedule PDF (linked in `Timeline.jsx`)

Also drop real merit-list PDFs into `public/merit-lists/` and update the
`href` values in `meritLists` (`src/data/deadlines.js`).

## Project structure

```
ned-admission-assistant/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Timeline.jsx
│   │   ├── Departments.jsx
│   │   ├── MeritCalculator.jsx
│   │   ├── BranchRecommendation.jsx
│   │   ├── MeritListViewer.jsx
│   │   ├── ChatWidget.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── departments.js
│   │   ├── deadlines.js
│   │   └── faq.js
│   └── lib/
│       └── recommend.js
├── public/
│   └── merit-lists/        ← put PDFs here
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Design

A "drafting sheet" visual language: deep blueprint-navy backgrounds, a faint
grid, amber accents for anything time-sensitive (deadlines, CTAs), and
corner registration marks on key panels — nodding to engineering drawings,
since every visitor is (or is about to become) an engineering student.
Typefaces: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
(data — scores, dates, labels).

## Deploying

The PRD targets Vercel:

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly at vercel.com/new — it auto-detects Vite.

## Uploading to GitHub

From inside the `ned-admission-assistant` folder:

```bash
git init
git add .
git commit -m "Initial commit — NED Admission Assistant"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

If you don't have a repo yet:

1. Go to https://github.com/new
2. Name it (e.g. `ned-admission-assistant`), leave it **empty** (no README/
   .gitignore/license — you already have those), set visibility, click
   **Create repository**.
3. Copy the HTTPS URL GitHub shows you and use it as `<repo-url>` above.
4. Run the four commands above from your terminal, inside this project
   folder.
5. Refresh the GitHub page — your code should be there.

If `git push` asks for a password: GitHub no longer accepts your account
password over HTTPS. Use a Personal Access Token instead
(Settings → Developer settings → Personal access tokens → Tokens (classic)
→ Generate new token, scope `repo`), and paste the token in place of your
password when prompted. Or push over SSH if you already have an SSH key
added to your GitHub account.

## Non-goals (explicitly deferred — say this in the pitch)

No accounts/login, no multi-university coverage, no merit trend charts, no
saved checklists, no payment/application submission — this is an
information + guidance layer, not an application portal.
