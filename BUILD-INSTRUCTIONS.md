# Fieldpin Build Instructions

Read DESIGN-SPEC.md for the complete design spec. Build EVERY page from that spec.

## Project: Fieldpin — Offline Field Reporting for Park Rangers

### Brand Identity
- Colors: #F5F1E8 (parchment bg), #2D6A4F (forest green accent), #D4A017 (amber), #1C1A14 (text)
- Fonts: Libre Baskerville (display), DM Sans (body), JetBrains Mono (data/stats)
- Logo: "Fieldpin" wordmark in Libre Baskerville Bold, forest green. No icon.

### Tech Stack
- Next.js 14+ App Router, TypeScript
- shadcn/ui components (already installed)
- Tailwind CSS
- Framer Motion for animations
- Lucide React icons
- NextAuth.js for auth (email + Google OAuth)
- Prisma + Postgres for database
- Leaflet.js for maps (use react-leaflet)

## CRITICAL BUILD ORDER

### 1. Tailwind Config + Global CSS + Fonts
Set up the brand tokens as CSS variables. Load Google Fonts (Libre Baskerville, DM Sans, JetBrains Mono). Configure the full color palette from the design spec.

### 2. Shared Layout (Navbar + Footer)
- Navbar: "Fieldpin" wordmark left, nav links center, "Log in" ghost + "Start Pilot" CTA right. Mobile hamburger with slide-out drawer. Sticky on scroll with bg change.
- Footer: 4-column, dark bg (#1C1A14), white text. Product/Company/Legal links + brand description.
- These MUST appear on every public page.

### 3. Landing Page (/) — 11 sections
Build ALL 11 sections exactly as specified in DESIGN-SPEC.md:
1. Hero: 2-column split, topo SVG background, phone mockup in CSS, badge, CTA buttons
2. Social Proof Bar: trust stats strip
3. Problem: 3 pain point cards
4. Solution: green bg, checkmark differentiators, phone showing form
5. Features Bento Grid: asymmetric 12-col grid, 6 feature cards with different bg colors
6. How It Works: 3-step flow with step numbers
7. Testimonials: 3 quote cards + stats row
8. Pricing: dark bg, 3 tier cards (Pilot $49, Professional $25/user/mo, Agency $49/user/mo)
9. FAQ: 6 accordion items
10. Final CTA: gradient bg, centered headline
11. Footer (shared)

Use Framer Motion for scroll-reveal animations (fade-up with stagger).

### 4. Auth Pages (/signup, /login)
- Split layout: 55% form / 45% topo background + testimonial
- Google OAuth button + email/password form
- Wire to NextAuth.js with credentials + Google providers
- Signup creates user in DB, redirects to /dashboard
- Login authenticates, redirects to /dashboard

### 5. Dashboard (/dashboard)
- Sidebar nav (Overview, Map, Reports, Rangers, Settings)
- Stat bar: 4 KPI cards with JetBrains Mono numbers
- Map panel: Use Leaflet with OpenStreetMap tiles, custom colored markers
- Activity feed sidebar
- Empty state with demo data + amber "DEMO DATA" banner
- Sub-pages: /dashboard/rangers (table), /dashboard/reports (table with filters), /dashboard/map (fullscreen)

### 6. Standard Pages
- /about: Mission hero (green bg), story section, 3 differentiator cards, team section
- /pricing: Hero, feature comparison table, annual/monthly toggle, pricing FAQ, govt procurement note
- /contact: 2-column, form with shadcn inputs + zod validation, info card
- /privacy: Full privacy policy text specific to Fieldpin (GPS data, offline storage, agency isolation)
- /terms: Full terms of service text specific to Fieldpin

### 7. Shell Pages (content added later)
- /deck: Pitch deck shell with Framer Motion slide navigation, dark theme, arrow key nav + dots
- /docs: Document hub with 260px sidebar, 5 sections (Research, GTM, Marketing, Brand, Pitch), placeholder content cards

### 8. Health Endpoint
- /api/health returns { status: "ok", timestamp: ISO date }

## Implementation Details

### Topographic SVG Background Pattern
```svg
<pattern id="topo" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
  <path d="M0 24 L24 0" stroke="#2D6A4F" stroke-width="0.5" opacity="0.06"/>
</pattern>
```
Use as CSS background-image on hero, auth right panel.

### Phone Mockup (CSS only)
Build a phone frame with rounded rectangle, dark bezel, screen content inside showing a map with colored dots. No external image.

### Pin Color System
- Wildlife: #2D6A4F (green) — Bird icon
- Incident: #D4550A (orange) — AlertTriangle icon
- Trail: #2D6080 (blue) — Footprints icon

### Component Styling
- All inputs: 44px height (glove-friendly)
- Buttons: 8px radius, DM Sans 15px
- Cards: --surface bg, 1px border, 8px radius, hover lifts 2px
- Tables: uppercase 12px headers, alternating rows

### Content
Use REAL content from the design spec. Every section has specific headlines, descriptions, and copy specified. Do NOT use lorem ipsum.

### Prisma Schema
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String?
  image     String?
  role      String   @default("ranger")
  agencyId  String?
  agency    Agency?  @relation(fields: [agencyId], references: [id])
  pins      Pin[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Agency {
  id        String   @id @default(cuid())
  name      String
  users     User[]
  pins      Pin[]
  createdAt DateTime @default(now())
}

model Pin {
  id          String   @id @default(cuid())
  type        String   // wildlife, incident, trail
  latitude    Float
  longitude   Float
  data        Json
  photos      String[] // URLs
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  agencyId    String?
  agency      Agency?  @relation(fields: [agencyId], references: [id])
  syncedAt    DateTime?
  createdAt   DateTime @default(now())
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

### Database
Connection: postgresql://postgres:<password>@k80c0s08c84kgcs44kckcos0:5432/fieldpin
(Create the DB first via SSH)

### Responsive
Test at 375px. All grids → single column. Navbar → hamburger. Font scales down.

## DO NOT
- Use lorem ipsum
- Use placeholder images (use CSS-created visuals, Lucide icons, SVG patterns)
- Skip any page from the site map
- Skip the navbar or footer on any page
- Use default shadcn styling without brand tokens
- Create mobile React Native app (web only for MVP)
