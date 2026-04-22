# 🤖 RobotixAcademy

> AI & Robotics Education for Kids — A full-stack PWA built with Next.js 16, Neon PostgreSQL, and Firebase Auth.

**Live Site:** https://robotixacademy.vercel.app  
**Admin Panel:** https://robotixacademy.vercel.app/admin  
**GitHub:** https://github.com/abhaykaiautomation/robotixacademy

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Getting Started (Local)](#getting-started-local)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Firebase Auth Setup](#firebase-auth-setup)
- [PWA — Install on iPhone](#pwa--install-on-iphone)
- [Admin Dashboard](#admin-dashboard)
- [Deploy to Vercel](#deploy-to-vercel)
- [Testing Checklist](#testing-checklist)

---

## Overview

RobotixAcademy is an EdTech company website that:
- Showcases AI & Robotics programs for kids aged 6–16
- Lets parents enroll their children via an online form
- Saves enrollments to a Neon PostgreSQL database
- Has a Firebase-authenticated admin dashboard to view all enrollments
- Works as an installable PWA on iPhone and Android (no App Store needed)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 |
| Fonts | Nunito (headings) + Poppins (body) via `next/font/google` |
| Database | Neon PostgreSQL (serverless) |
| Auth | Firebase Authentication (Google + Email/Password) |
| Hosting | Vercel |
| PWA | Custom service worker + Web App Manifest |
| Language | TypeScript |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, Navbar, Footer, PWA
│   ├── globals.css             # Tailwind v4 theme (colors, animations)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us
│   ├── programs/page.tsx       # All programs
│   ├── kits/page.tsx           # Robotics kits shop
│   ├── gallery/page.tsx        # Project gallery
│   ├── contact/page.tsx        # Enrollment form
│   ├── admin/
│   │   ├── page.tsx            # Admin dashboard (server component, auth-gated)
│   │   ├── LogoutButton.tsx    # Client sign-out button
│   │   └── login/
│   │       ├── page.tsx        # Login page wrapper (Suspense)
│   │       └── LoginForm.tsx   # Firebase login form (Google + Email)
│   └── api/
│       ├── enroll/route.ts         # POST — save enrollment to DB
│       └── admin/
│           ├── enrollments/route.ts # GET — fetch all enrollments
│           └── session/route.ts     # POST/DELETE — create/clear Firebase session cookie
├── components/
│   ├── Navbar.tsx              # Sticky nav with mobile hamburger
│   ├── Footer.tsx              # Site footer
│   ├── Hero.tsx                # Home hero with animated SVG robot
│   ├── Features.tsx            # 6-feature grid
│   ├── ProgramsSection.tsx     # 3 program cards
│   ├── Testimonials.tsx        # Parent/student reviews
│   ├── CTASection.tsx          # Enroll CTA + WhatsApp button
│   ├── PWAProvider.tsx         # Registers service worker on mount
│   └── InstallBanner.tsx       # "Add to Home Screen" banner
├── lib/
│   ├── db.ts                   # Neon SQL client (lazy-initialized)
│   ├── firebase-client.ts      # Firebase client SDK (browser)
│   └── firebase-admin.ts       # Firebase Admin SDK (server, lazy-initialized)
└── proxy.ts                    # Next.js 16 Proxy (replaces middleware) — guards /admin

public/
├── manifest.json               # PWA Web App Manifest
├── sw.js                       # Service Worker (cache-first for assets, network-first for pages)
└── icons/                      # PNG icons at 7 sizes (72px – 512px)

scripts/
└── generate-icons.js           # Generates all PNG icons using only Node.js built-ins
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Features, Programs, Testimonials, CTA |
| `/programs` | All 4 programs with modules and enroll button |
| `/kits` | 4 robotics kits with pricing and order form |
| `/about` | Team, mission, company timeline |
| `/gallery` | 12-item project gallery with filter tags |
| `/contact` | Enrollment form (saves to Neon DB) |
| `/admin` | Protected dashboard — view all enrollments |
| `/admin/login` | Firebase login (Google Sign-In + Email/Password) |

---

## Getting Started (Local)

### Prerequisites
- Node.js 18+
- A [Neon](https://neon.tech) account (free tier works)
- A [Firebase](https://console.firebase.google.com) project

### 1. Clone the repo

```bash
git clone https://github.com/abhaykaiautomation/robotixacademy.git
cd robotixacademy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
# Then fill in the values — see Environment Variables section below
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file in the project root with the following:

```env
# ── Neon PostgreSQL ──────────────────────────────────────────────────────────
# Get from: neon.tech → Project → Connection Details → Connection string
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require

# ── Firebase Client SDK ──────────────────────────────────────────────────────
# Get from: Firebase Console → Project Settings → Your Apps → Web App config
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# ── Firebase Admin SDK ───────────────────────────────────────────────────────
# Get from: Firebase Console → Project Settings → Service Accounts → Generate new private key
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

> **Note:** `.env.local` is gitignored and will never be committed. Never share these values publicly.

---

## Database

The `enrollments` table is created automatically on the first form submission (via `initDb()`). No manual migration needed.

**Schema:**

```sql
CREATE TABLE IF NOT EXISTS enrollments (
  id          SERIAL PRIMARY KEY,
  parent_name TEXT        NOT NULL,
  child_name  TEXT        NOT NULL,
  age         INTEGER     NOT NULL,
  email       TEXT        NOT NULL,
  phone       TEXT        NOT NULL,
  program     TEXT        NOT NULL,
  message     TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

**API endpoints:**

| Method | Route | Description |
|---|---|---|
| `POST` | `/api/enroll` | Save a new enrollment |
| `GET` | `/api/admin/enrollments` | Fetch all enrollments (admin) |
| `POST` | `/api/admin/session` | Create Firebase session cookie |
| `DELETE` | `/api/admin/session` | Clear session (logout) |

---

## Firebase Auth Setup

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a project named `RobotixAcademy`
3. **Enable Authentication** → Get started → enable:
   - **Google** provider
   - **Email/Password** provider
4. **Add admin user:** Authentication → Users → Add user (your admin email + password)
5. **Get Client config:** Project Settings → Your Apps → Web App → copy config values into `.env.local`
6. **Get Admin SDK key:** Project Settings → Service Accounts → Generate new private key → copy `project_id`, `client_email`, `private_key` into `.env.local`
7. **Authorized domains:** Authentication → Settings → Authorized domains → add:
   - `localhost`
   - `robotixacademy.vercel.app`

---

## PWA — Install on iPhone

The site is a Progressive Web App. No App Store required.

**Share this link:** `https://robotixacademy.vercel.app`

### iPhone installation steps:
1. Open the link in **Safari** (not Chrome — must be Safari on iOS)
2. Tap the **Share** button ⬆️ at the bottom of the screen
3. Scroll down and tap **"Add to Home Screen"** ➕
4. Tap **Add** in the top-right corner

The app installs with the purple robot icon and opens fullscreen.

### Android installation:
Chrome shows a native **"Install App"** banner automatically. Tap **Install**.

### Regenerate icons:
```bash
node scripts/generate-icons.js
```
This creates PNG icons at all required sizes in `public/icons/` using only Node.js built-ins (no dependencies).

---

## Admin Dashboard

The `/admin` route is protected by:
1. **Next.js Proxy** (`src/proxy.ts`) — redirects to `/admin/login` if no session cookie
2. **Firebase Admin SDK** — verifies the session cookie server-side on every load

### Access:
1. Go to `https://robotixacademy.vercel.app/admin`
2. Sign in with Google or Email/Password (must be a registered Firebase user)
3. View all enrollment requests in a live table

### Dashboard features:
- Total enrollments count
- This month's count
- Unique programs count
- Average child age
- Full enrollment table with parent name, child name, age, email, phone, program, message, date
- Sign out button

---

## Deploy to Vercel

### First-time deploy:
```bash
npx vercel --prod --yes
```

### Subsequent deploys (via GitHub):
Vercel auto-deploys on every push to `main`. Just:
```bash
git add .
git commit -m "your change"
git push
```

### Add environment variables to Vercel:
```bash
echo "your-value" | npx vercel env add VARIABLE_NAME production
```

Or go to: Vercel Dashboard → Project → Settings → Environment Variables

---

## Testing Checklist

### Public site
- [ ] Home page loads with animated robot hero
- [ ] Navbar links navigate correctly
- [ ] Programs page shows all 4 programs with correct age groups
- [ ] Kits page shows all 4 kits with pricing
- [ ] About page shows team and timeline
- [ ] Gallery page shows 12 items with filter tags
- [ ] Footer links work

### Enrollment form (`/contact`)
- [ ] All required fields validate (empty submit shows errors)
- [ ] Successful submission shows 🎉 confirmation screen
- [ ] Entry appears in Neon DB (check admin dashboard)
- [ ] Error state shown if DB is down

### Admin dashboard (`/admin`)
- [ ] Unauthenticated visit redirects to `/admin/login`
- [ ] Google Sign-In works (requires authorized domain in Firebase)
- [ ] Email/Password login works
- [ ] After login, dashboard loads with enrollment table
- [ ] Stats cards show correct counts
- [ ] Sign Out clears session and redirects to login

### PWA (on iPhone)
- [ ] Open `https://robotixacademy.vercel.app` in Safari
- [ ] Install banner appears after 3 seconds
- [ ] Share ⬆️ → "Add to Home Screen" installs the app
- [ ] App icon appears on home screen
- [ ] App opens fullscreen (no browser bar)
- [ ] App works offline (previously visited pages load)

### PWA (on Android)
- [ ] Open site in Chrome
- [ ] Native install banner appears
- [ ] Tap Install — app installs on home screen
- [ ] App opens standalone

### Responsive design
- [ ] Mobile (375px) — all pages look correct
- [ ] Tablet (768px) — grid layouts adjust properly
- [ ] Desktop (1280px+) — full layout renders

---

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Purple | `#6C3CE1` | Primary, buttons, headings |
| Orange | `#FF6B35` | Secondary CTAs, accents |
| Yellow | `#FFD60A` | Highlights, badges |
| Teal | `#00C9A7` | Success, feature cards |
| Navy | `#1A1A2E` | Dark backgrounds, text |
| Lavender | `#F8F7FF` | Page background |

---

*Built with Next.js 16 · Deployed on Vercel · Database on Neon · Auth by Firebase*
