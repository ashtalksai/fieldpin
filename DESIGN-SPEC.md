# Brand & Design Spec — Fieldpin
**Stage:** 3 (Design) | **Date:** 2026-03-31 | **Mode:** @pipeline

---

## DESIGN DIRECTION

**Tone:** Rugged Reliability — Like a Garmin GPS device, a Leatherman multi-tool, a waterproof field notebook. Built for work. Purposeful every pixel. No decorative fluff.

**The Unforgettable Element:** A living topographic map as the hero background — contour lines in the brand green, gently animated (slow pulse), giving the impression you're looking at ranger territory from above. The map IS the product. It shows up in the hero, in loading states, in empty states.

**Anti-patterns avoided:**
- No purple gradients
- No generic SaaS "clean white with blue" aesthetic
- No Inter/Roboto/Arial
- No concentric circle logos
- No stock ranger photos (all described as illustration/photo direction)

---

## A. BRAND TOKENS

```css
/* Fieldpin Design System — CSS Variables */
:root {
  /* Core Colors */
  --background: #F5F1E8;           /* warm parchment — aged map feel */
  --surface: #FFFFFF;
  --surface-hover: #EDE9E0;
  --border: #D4CDB8;
  --border-strong: #A09880;

  /* Text */
  --text-primary: #1C1A14;         /* near-black, warm brown undertone */
  --text-secondary: #4A4535;       /* dark earth */
  --text-muted: #8A7D65;           /* muted earth */

  /* Brand Colors */
  --accent: #2D6A4F;               /* deep forest green — primary accent */
  --accent-hover: #1B4332;         /* darker forest green on hover */
  --accent-foreground: #FFFFFF;
  --accent-light: #52B788;         /* lighter green for states/tags */
  --amber: #D4A017;                /* earth amber — secondary highlight */
  --amber-hover: #B8860B;
  --amber-light: #F2C94C;          /* warm highlight / warning state */

  /* Status Colors */
  --pin-wildlife: #2D6A4F;         /* green pins */
  --pin-incident: #D4550A;         /* burnt orange pins */
  --pin-trail: #2D6080;            /* slate blue pins */

  /* Semantic */
  --destructive: #C0392B;
  --success: #2D6A4F;
  --warning: #D4A017;
  --info: #2D6080;

  /* Elevation */
  --shadow-card: 0 1px 3px rgba(28,26,20,0.08), 0 4px 12px rgba(28,26,20,0.06);
  --shadow-dropdown: 0 4px 16px rgba(28,26,20,0.12);
  --shadow-modal: 0 8px 32px rgba(28,26,20,0.16);
  --shadow-elevated: 0 2px 8px rgba(28,26,20,0.10), 0 8px 24px rgba(28,26,20,0.08);
}

/* Typography — Fieldpin */
/* Display: Libre Baskerville — historical authority, field notebook feel */
/* Body: DM Sans — clean, legible, large touch targets */
/* Mono: JetBrains Mono — data, GPS coordinates, stats */

--font-display: "Libre Baskerville", Georgia, serif;       /* headings, hero text */
--font-body: "DM Sans", "Helvetica Neue", sans-serif;      /* paragraphs, UI text */
--font-mono: "JetBrains Mono", "Courier New", monospace;   /* GPS coords, data, stats */

/* Type Scale */
/* 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 48 / 64 / 80px */

/* Spacing */
/* Base unit: 4px */
/* Section padding: 96px top/bottom (desktop), 56px (mobile) */
/* Container max-width: 1200px */
/* Content max-width (readable): 760px */

/* Border Radius */
/* Small: 4px (inputs, tags) */
/* Medium: 8px (cards, buttons) */
/* Large: 12px (modals, panels) */
/* Full: 9999px (badges, pills) */
```

### Typography Rationale
- **Libre Baskerville** (serif) for headlines: Evokes field notebooks, government agency documents, and scientific reports. Has authority without being stiff. The serif gives it an analog, trustworthy feel — like something printed on durable paper.
- **DM Sans** for body: Clean geometric sans that pairs perfectly with the display serif. Large x-height means excellent legibility at small sizes — critical for field data tables.
- **JetBrains Mono** for data: GPS coordinates like "44.1234°N, -110.5678°W" need monospace. Also used for stat numbers to prevent layout shift.

### Color Rationale
- **Parchment background (#F5F1E8)**: Feels like a field notebook, not a tech startup. Warm, approachable, tactile. Every competitor uses white or gray — this is immediately distinctive.
- **Forest Green (#2D6A4F)**: Deep, serious, earned. Not the bright "eco" green of every environmental app. This is the color of old-growth forest, not a recycling logo.
- **Earth Amber (#D4A017)**: Secondary highlight. The color of afternoon light through autumn leaves. Used for badges, highlights, and the "Coming Soon" state.
- **Near-black warm (#1C1A14)**: Body text with a brown warmth, not cold blue-black. Everything reads like it was printed, not displayed.

---

## B. SITE MAP

```
Fieldpin — Site Map

Public (web)
├── / (landing)
│   └── Sections: Hero | Social Proof Bar | Problem | Solution | Features Bento | How It Works | Testimonials | Pricing | FAQ | Final CTA | Footer
├── /about
│   └── Sections: Mission Hero | The Problem We Saw | Why We Built It | What Makes Us Different | Meet the Team | CTA
├── /pricing
│   └── Sections: Pricing Hero | Plan Comparison Table | Annual/Monthly Toggle | Pricing FAQ | Government Procurement Note | CTA
├── /contact
│   └── Sections: Contact Hero | Contact Form | Support Info | Demo Booking
├── /signup
├── /login
├── /privacy
├── /terms
├── /deck (pitch presentation)
└── /docs (document hub)
    └── Sections: Research | GTM | Marketing | Brand | Pitch

Authenticated (web dashboard)
├── /dashboard (overview — interactive map view)
├── /dashboard/rangers
├── /dashboard/reports
└── /dashboard/map (full-screen)

Mobile App (React Native)
├── Onboarding (3 screens)
├── Home (map view)
├── New Pin (form flow — 3 templates)
├── My Pins (history list)
├── Sync Status
└── Settings
```

---

## C. PAGE-BY-PAGE DESIGN SPECS

---

### NAVBAR (present on all public pages)

**Desktop (≥1024px):**
- Left: "Fieldpin" wordmark in Libre Baskerville Bold, #2D6A4F — no icon, just the word
- Center: Navigation links — Features | How It Works | Pricing | About (DM Sans 15px, --text-secondary)
- Right: "Log in" (ghost link) | "Start Pilot" button (--accent filled, 8px border-radius, DM Sans 15px medium)
- Background: transparent on hero, switches to --background with border-bottom on scroll (sticky)
- Height: 64px

**Mobile (<1024px):**
- Logo left | hamburger menu icon right (Lucide `Menu` icon, 24px)
- Full-screen drawer: links stacked vertically, "Start Pilot" CTA full-width at bottom
- Drawer background: --background, slides in from right, backdrop overlay 40% black

---

### LANDING PAGE (/)

**Section 1: HERO**

Layout: Two-column, 55% left / 45% right, desktop. Single column, mobile.
Background: Parchment (#F5F1E8) with a subtle topographic contour line pattern — generated in SVG, dark green (#2D6A4F) at 6% opacity. Lines spaced 24px apart, offset diagonally. The pattern creates depth without visual noise.

Left column:
- Badge: "Built for field teams, not GIS analysts" — pill badge, --accent-light background, --accent text, Lucide `Leaf` icon (12px), DM Sans 12px
- Headline: "Field data that doesn't wait for Wi-Fi" — Libre Baskerville Bold, 64px desktop / 40px mobile, --text-primary
- Subline: "Fieldpin works offline, exactly where rangers work. Drop a pin, log the sighting, take the photo — it all syncs the moment signal returns. No pencil. No re-entry. No lost data." — DM Sans 18px, --text-secondary, line-height 1.6
- Primary CTA: "Start your free pilot" — large button, --accent fill, white text, DM Sans 16px medium, 14px padding vertical, 28px padding horizontal, 8px radius
- Secondary CTA: "See how it works ↓" — text link with arrow, --accent color, underline on hover
- Social proof micro: "500+ rangers in beta · 4.9★ rating" — DM Sans 13px, --text-muted

Right column:
- A wilderness map view mockup showing the dashboard from a phone screen — three pins plotted (green/orange/blue), terrain showing hills and trails. The phone is held at a slight angle (10° rotation), dropping a green pin.
- Below the phone: three colored dot indicators with labels "Wildlife ●" "Incident ●" "Trail ●"

Animations (Framer Motion):
- Hero badge: fade up + scale from 0.9, delay 0ms
- Headline: fade up, delay 80ms
- Subline: fade up, delay 160ms
- CTAs: fade up, delay 240ms
- Phone mockup: fade in + slight slide up, delay 320ms
- Topographic background lines: very slow continuous scroll animation (4px per second downward)

**Section 2: SOCIAL PROOF BAR**

Full-width strip, --surface background, 1px border top/bottom (#D4CDB8).
Padding: 24px vertical.

Content (flex row, centered, gaps):
"Trusted by ranger teams in 3 states" · separator · "10,234 pins synced" (JetBrains Mono) · separator · "4.9★ from field users" · separator · "SOC 2 compliant"

Separators: vertical line 1px, --border, 20px height.
Text: DM Sans 14px, --text-secondary. Stats in bold.

**Section 3: PROBLEM**

Background: --background (parchment), full width.
Padding: 96px vertical.

Headline: "Conservation decisions run on whatever survives the trip back to base" — Libre Baskerville Bold, 40px, --text-primary, max-width 680px, centered.
Subline: DM Sans 18px, --text-secondary, centered.

Three pain point cards — horizontal row on desktop, stack on mobile:
Card style: --surface background, --shadow-card, 8px radius, 32px padding.

Card 1 — "The Re-Entry Tax":
- Icon: Lucide `Clock` with an X overlay in --amber
- Headline: "The re-entry tax" — DM Sans 18px bold, --text-primary
- Body: The ranger scenario text — DM Sans 15px, --text-secondary, line-height 1.65
- Small stat: "5 days of data degradation" — JetBrains Mono 12px, --amber

Card 2 — "Software That Wasn't Built for Them":
- Icon: Lucide `LaptopX` (laptop with alert) in --amber
- Same structure

Card 3 — "Nobody Talks to Nobody":
- Icon: Lucide `Unlink2` in --amber
- Same structure

Animation: Cards scroll-reveal — stagger 80ms each, fade up 24px.

**Section 4: SOLUTION**

Background: --accent (#2D6A4F), full bleed. White/parchment text.
Padding: 96px.

Left side (60%):
- Eyebrow: "THE FIELDPIN APPROACH" — DM Sans 11px, tracking 0.12em, white 70% opacity
- Headline: "Built for hands that might be wearing gloves" — Libre Baskerville Bold, 48px, white
- Body: Solution description text — DM Sans 17px, white 85% opacity, line-height 1.7
- Three differentiator points (check marks):
  - "Offline-first architecture — not a feature bolted on"
  - "Pre-built ranger templates — not a form builder"  
  - "10-minute setup — not a 3-day training"
  Check icons: Lucide `CheckCircle2`, --amber-light color.

Right side (40%):
- Phone showing the "Wildlife Sighting" form: species field filled "Black Bear", threat level "High" (orange badge), GPS auto-populated "44.1°N, -110.5°W", photo thumbnail attached.
- Drop shadow on phone: rgba(0,0,0,0.3) 0 24px 60px

**Section 5: FEATURES BENTO GRID**

Background: --background. Padding 96px.

Header:
- Headline: "Everything a ranger needs. Nothing they don't." — Libre Baskerville Bold, 40px, centered
- Subline: DM Sans 17px, --text-secondary, centered

Bento grid (asymmetric, 12-column CSS grid):
- Feature 1 (Offline GPS — LARGE, spans 7 cols x 2 rows): 
  - Background: --text-primary (near-black). White text.
  - Icon: Lucide `MapPin` + diagonal line through signal bars, --amber-light
  - Title: "Offline GPS pinning" — DM Sans 22px bold, white
  - Description: DM Sans 15px, white 80% opacity
  - Visual: small GPS coordinates animating in — "44.1234°N" counting up in JetBrains Mono
  - Corner accent: subtle topographic line pattern in --accent at 15%

- Feature 2 (Pre-built Templates — spans 5 cols x 2 rows):
  - Background: --accent (#2D6A4F). White text.
  - Icon: Lucide `ClipboardList`, white
  - Title: "Pre-built ranger templates"
  - Visual: Three template chips stacked — "🦌 Wildlife Sighting" · "⚠️ Incident Report" · "🥾 Trail Condition"

- Feature 3 (Photo Capture — spans 5 cols x 1 row):
  - Background: --surface. Standard text.
  - Icon: Lucide `Camera`, --accent
  - Title: "Photo capture per pin"
  - Description: compact

- Feature 4 (Auto-Sync — spans 4 cols x 1 row):
  - Background: --amber (#D4A017). Dark text on amber.
  - Icon: Lucide `RefreshCw`, --text-primary
  - Title: "Smart auto-sync"

- Feature 5 (Web Dashboard — spans 3 cols x 2 rows):
  - Background: --surface. Standard text.
  - Icon: Lucide `LayoutDashboard`, --accent
  - Title: "Agency manager dashboard"

- Feature 6 (Network — spans 12 cols x 1 row — full width footer strip):
  - Background: --border (warm neutral). Muted text.
  - Icon: Lucide `Network`, --text-muted
  - Title: "Cross-ranger data network" — COMING SOON badge in --amber pill
  - Full width, slightly different treatment to indicate future state

Grid: 12-column CSS grid, gap 12px, desktop. Mobile: single column stack.
Card padding: 28px. Corner radius: 12px.

Animation: scroll-triggered, stagger 40ms per card.

**Section 6: HOW IT WORKS**

Background: --surface (white). Padding 96px.

Header: centered.
- Headline: "From sighting to report in under 60 seconds" — Libre Baskerville, 40px
- Sub: "Average report time: 47 seconds" — JetBrains Mono, 14px, --accent, centered

Three-column flow (desktop), vertical stack (mobile):

Step 1 — "Drop a pin":
- Phone mockup: wilderness map, pulsing blue dot (user location), big green "+" button bottom center
- Step number: "01" in JetBrains Mono, 48px, --border (very faded)
- Headline: "Drop a pin" — DM Sans 20px bold
- Description: DM Sans 15px, --text-secondary

Between steps: arrow icon (Lucide `ArrowRight` 24px, --border) — hidden on mobile

Step 2 — "Fill the form":
- Phone mockup: Wildlife Sighting form, large touch targets
- Step "02"
- Headline: "Fill the form"
- Description

Step 3 — "It syncs itself":
- Phone mockup: web dashboard with "4 pins synced" notification
- Step "03"
- Headline: "It syncs itself"
- Description

Bottom note: "Works with your existing agency processes. No IT ticket required."

**Section 7: SOCIAL PROOF / TESTIMONIALS**

Background: parchment gradient (#F5F1E8 → #EDE9E0). Padding 96px.

Header: "What rangers are saying" — Libre Baskerville, 40px, centered.

Three testimonial cards — horizontal row, --surface background, --shadow-card, 8px radius:
- Each card: quote text (DM Sans 16px italic, --text-secondary, line-height 1.7) · ranger name (DM Sans 14px bold) · role/location (DM Sans 13px, --text-muted) · avatar placeholder circle (--accent-light background, 40px)
- Left quote mark: large " character, Libre Baskerville, 80px, --accent, opacity 20%, absolute positioned

Stats row below:
"500+ rangers in beta" | "94% sync success rate" | "10.2 hrs/week saved per ranger"
Numbers in JetBrains Mono Bold 36px, --text-primary. Labels in DM Sans 14px, --text-muted.

**Section 8: PRICING**

Background: --text-primary (near-black). Light text.
Padding: 96px.

Header:
- Headline: "Start with the pilot. Stay for the data." — Libre Baskerville Bold, 40px, white
- Subline: "Government procurement moves slowly. The Pilot gets your team using Fieldpin before IT reviews start." — DM Sans 17px, white 70% opacity

Three pricing cards — horizontal row on desktop. Gradient backgrounds:
- Card style: --surface (white) background, 12px radius, --shadow-elevated

Card 1 — Pilot ($49 one-time):
- Badge: "Most Popular for new teams" — --amber-light pill, small
- Price: "$49" in Libre Baskerville Bold 56px, + "one-time" in DM Sans 14px below
- Feature list: Lucide `Check` icons, --accent color
- CTA: "Start Pilot" — --accent filled button
- Card slightly smaller than Professional

Card 2 — Professional ($25/user/mo) — ELEVATED:
- Green ribbon top: "Recommended" in DM Sans 12px on --accent strip
- Price: "$25" in Libre Baskerville Bold 56px + "/user/mo" DM Sans 14px
- Full feature list
- CTA: "Start Professional" — --accent filled, larger button
- This card has a subtle --accent (#2D6A4F) left border 3px

Card 3 — Agency ($49/user/mo annual):
- Badge: "Best value for full teams"
- Price: "$49" + "/user/mo" + "billed annually" note
- CTA: "Contact for Agency" — ghost button on dark

Note below: "14-day money-back guarantee. No setup fees." — DM Sans 13px, white 50%.

Animation: Cards scroll-reveal, stagger, subtle lift on hover.

**Section 9: FAQ**

Background: --background (parchment). Padding 96px.

Header: "Real questions from real rangers" — Libre Baskerville 40px, centered.

Accordion component (shadcn Accordion):
- Each item: DM Sans 16px bold question, regular weight answer
- Expand/collapse icon: Lucide `ChevronDown`, --accent color, rotates 180° on open
- Separator: 1px --border between items
- 6 FAQs from strategist spec

Bottom: "Still have questions? → Contact us" — link, --accent.

**Section 10: FINAL CTA**

Background: Full-width cinematic background — rendered as a CSS gradient: dark forest green (#1B4332) top-left to deep amber-brown (#6B3A1F) bottom-right, with grain overlay.
Padding: 120px vertical.

Content centered:
- Headline: "One pilot season. That's all it takes." — Libre Baskerville Bold, 56px, white
- Subline: DM Sans 20px, white 80% opacity
- Primary CTA: "Start the $49 Pilot →" — large button, white fill, --accent text, 16px padding, 8px radius
- Secondary CTA: "Book a demo for your agency" — ghost white button, 12px padding

**FOOTER**

Background: --text-primary (#1C1A14). White text.
Padding: 64px top, 32px bottom.

Four-column layout:

Col 1 — Brand:
- "Fieldpin" wordmark, Libre Baskerville Bold, --accent-light color
- "Field reporting that works where you work." — DM Sans 14px, white 60%
- Copyright: "© 2026 Fieldpin. All rights reserved." — DM Sans 12px, white 40%

Col 2 — Product:
- "Product" label — DM Sans 11px tracking 0.1em, white 40%
- Links: Features | How It Works | Pricing | Mobile App

Col 3 — Company:
- "Company" label
- Links: About | Contact | Blog | Careers

Col 4 — Legal:
- "Legal" label
- Links: Privacy Policy | Terms of Service
- "support@getfieldpin.com" — small, white 60%

Bottom bar: thin --border separator, then "Built for rangers who work without signal." — DM Sans 12px italic, white 30%, centered.

---

### ABOUT PAGE (/about)

**Hero Section:**
Background: --accent (#2D6A4F). Padding 120px.
- Eyebrow: "OUR MISSION" — DM Sans 11px tracking, white 60%
- Headline: "Fieldpin exists so that the moment of observation is also the moment of record." — Libre Baskerville Bold, 48px, white, max-width 760px
- Subline: "We build tools for the professionals who protect wild places — tools that work as hard as they do, in conditions where other software gives up." — DM Sans 18px, white 80%

**The Problem We Saw (Story section):**
Background: --background. Padding 96px.
Two-column: 50/50 desktop.

Left: Pull quote in large Libre Baskerville Italic 28px, --text-primary — "A ranger completes a 6-hour patrol and spends 2 more hours re-entering notes. The GPS coordinates are approximate. The data that shapes habitat decisions is already wrong."

Right: Full story paragraph (from enrichment doc). DM Sans 16px, --text-secondary, line-height 1.8.

**Three Differentiators:**
Background: --surface. Padding 96px.
Three-column cards with Lucide icons, --accent color.
1. "Templates for ranger forms — not a generic tool"
2. "Offline-first architecture — not a feature bolted on"
3. "We think about the gloved hand in sunlight, not the analyst in the office"

**Team/Studio:**
Background: --background. Padding 96px.
- "Built by ChimeStream" — studio description
- Studio card: --surface, --shadow-card, 12px radius, left --accent border 4px
- ChimeStream description + link to getfieldpin.com

**CTA:**
Background: --accent. Centered. Same styling as landing Final CTA section.

---

### PRICING PAGE (/pricing)

**Pricing Hero:**
Background: --text-primary. Padding 80px.
- Headline: "Find the right plan for your team" — Libre Baskerville, 48px, white
- Monthly/Annual toggle: switch component, DM Sans, white. "Annual saves 18%" badge in --amber pill.

**Feature Comparison Table:**
Full-width table, --surface background, horizontal scroll on mobile.
Headers: Pilot | Professional | Agency
Row groups: Core Features | Data & Export | Support | Billing
Cells: ✅ (--accent) / ❌ (--text-muted) / Text values
Sticky first column on mobile.

**Pricing FAQ:**
3-5 accordion items from strategist spec.

**Government Procurement Note:**
Prominent card, --accent-light background, --accent text.
"We support government procurement billing. Single annual invoice, PO-friendly. Contact us."

---

### AUTH PAGES (/signup, /login)

**Split Layout:**
Left side (55%): Form. Right side (45%): Background + testimonial.

Form side (--surface background):
- "Fieldpin" logo top left, small
- "Create your account" headline — Libre Baskerville Bold, 32px
- Subline: "Start your free 14-day pilot"
- Google Sign In button — full width, standard OAuth styling, 1px --border
- Divider: "or continue with email"
- Email input (shadcn Input, full-width)
- Password input (with show/hide toggle)
- "Create account" button — full-width, --accent fill
- Login link: "Already have an account? Log in"

Right side (--accent dark gradient background):
- Topographic pattern background (same as hero, higher opacity)
- One testimonial card (white card, --shadow-modal) with ranger quote
- "Join 500+ rangers already in the field"

Mobile: Single column, form only, no right panel.

---

### DASHBOARD (/dashboard)

**Layout:**
- Top navigation bar: 64px height, --surface, --shadow-card
  - Left: Fieldpin wordmark + agency name (DM Sans 14px bold) + syncing indicator dot (pulsing green)
  - Center: page title
  - Right: ranger count chip | "Pending Syncs" badge (--amber) | avatar + dropdown
- Left sidebar: 260px, --surface, collapsible on mobile
  - Navigation: Overview | Map | Reports | Rangers | Settings
  - Icons from Lucide: `LayoutDashboard` | `Map` | `FileText` | `Users` | `Settings`
  - Active state: --accent-light background, --accent text, left border 3px

**Main Content — Overview:**
Stat bar (4 cards, horizontal):
- Card: --surface, --shadow-card, 8px radius, 24px padding
- "Total Pins This Month" | "Active Rangers Today" | "Pending Syncs" | "Reports Generated"
- Stat number: JetBrains Mono Bold 32px, --text-primary
- Label: DM Sans 12px, --text-muted
- Delta badge: "+12% vs last month" — --success or --destructive small chip

Map panel (70% width, main):
- Mapbox/OpenStreetMap integrated view
- Pin markers: custom colored circles (green/orange/blue) with count badges for clusters
- Terrain/satellite toggle (top right of map)
- Timeline scrubber (bottom of map): "This week" | "This month" | "Last 3 months" | Custom range
- Date range in JetBrains Mono 12px

Right sidebar (30% width):
- "Recent Activity" header, DM Sans 14px bold
- Activity list: avatar + "Ranger Martinez dropped pin at 14:32" + timestamp
- Each item has pin type colored dot

Bottom drawer (collapsible):
- "This Week" stats — mini bar chart (Recharts) for pins by type
- Trend vs. last week

**Empty State (new agencies):**
- Demo pins visible, labeled "DEMO DATA" in amber badge overlays
- Banner at top: --amber-light background, "This is demo data. Your rangers' real pins will appear here after their first sync." + green "Set up my rangers →" CTA button
- CTA triggers onboarding wizard modal

---

### /dashboard/rangers

**Table view:**
shadcn Table component.
Columns: Avatar | Name | Email | Last Sync (relative time, JetBrains Mono) | Pins This Month | Status chip (Active/Inactive)

"Invite Ranger" button top right — triggers shadcn Dialog modal.
Modal: Email input + auto-generated 6-digit invite code displayed.

**Ranger detail (click row):**
Slide-in sheet from right (shadcn Sheet).
Mini map of their activity, stats, pin history list.

---

### /dashboard/reports

**Filter panel** (top, card):
Date range picker | Ranger multi-select | Report type checkboxes | Park filter
"Export CSV" button (--accent) + "Export PDF" button (ghost)

**Results table:**
Preview of matching pins — timestamp, ranger, type (colored badge), location.
Row count: "Showing 24 reports matching your filters"

---

### /dashboard/map

Full-browser-width map.
No sidebar. Controls in floating overlay panels (rounded cards, --shadow-dropdown).
Satellite / terrain / topo layer toggles.
Print option in overlay.

---

### /contact

**Hero:** Simple, centered. 96px padding.
- Headline: "Get in touch — or book a demo" — Libre Baskerville, 40px
- Subline: DM Sans 17px, --text-secondary

**Two-column layout (60/40):**

Left (form):
shadcn form with zod validation.
Fields: Name | Agency name | Role (Select) | Rangers in team (Select) | Message (Textarea) | "I'd like a demo" (Checkbox)
CTA: "Send message" — --accent button

Right (info card):
--surface card, --shadow-card.
Email: support@getfieldpin.com
Response time note.
"Urgent field issues" note.

---

### /docs HUB (/docs)

**Layout:**
- Left sidebar: 260px, fixed on desktop, hamburger drawer on mobile
  - Items: Research | GTM | Marketing | Brand | Pitch
  - Active: --accent-light background, --accent text
- Right content: rendered section

**Section cards:**
Each section shows: icon (Lucide) | title | summary paragraph | "View Document →" link to Google Doc
Clean reading experience: max-width 680px, DM Sans 16px body.

**Mobile:** Full-width, bottom tab bar for section navigation.

---

### PITCH DECK (/deck)

Full-screen slide navigation. Dark theme: --text-primary background.

Slides (Framer Motion page transitions):
1. Cover: "Fieldpin" + tagline + background topographic map
2. Problem: 3-panel pain points
3. Solution: Product overview
4. Product Demo: Dashboard screenshot
5. Market: TAM/SAM/SOM
6. Business Model: Pricing tiers visual
7. Traction: Ranger count + pins + ratings
8. Team: ChimeStream studio
9. Ask/CTA

Navigation: arrow keys + bottom dots. Progress indicator top.

---

## D. COMPONENT SPECS

**Button (shadcn Button):**
- Primary: --accent fill, white text, DM Sans 15px medium, 10/20px padding, 8px radius
- Ghost: transparent, --text-secondary, 1px --border
- Link: --accent color, underline on hover, no background
- Hover: primary → --accent-hover, scale 1.01, transition 150ms
- Size variants: sm (10/16px pad), md (10/20px), lg (14/28px)

**Card (shadcn Card):**
- Background: --surface
- Border: 1px --border
- Radius: 8px
- Shadow: --shadow-card
- Hover: --shadow-elevated, transform translateY(-2px), transition 200ms

**Input / Select (shadcn):**
- Border: 1px --border
- Focus: 2px --accent outline (no ring-offset)
- Error: 1px --destructive border + error message below
- Background: --surface
- Text: --text-primary, DM Sans 15px
- Placeholder: --text-muted
- Height: 44px (large touch target — glove-friendly)

**Badge (shadcn Badge):**
- Wildlife: --pin-wildlife light background, --pin-wildlife text
- Incident: --pin-incident 15% opacity bg, --pin-incident text
- Trail: --pin-trail 15% opacity bg, --pin-trail text
- Coming Soon: --amber 20% opacity bg, --amber-hover text

**Accordion (shadcn Accordion) — FAQ:**
- Trigger: DM Sans 16px, --text-primary, padding 20px 0
- Content: DM Sans 15px, --text-secondary, padding 0 0 20px
- Separator: 1px --border
- Chevron: --accent, rotates on open

**NavigationMenu (shadcn):**
- Desktop: horizontal flex, DM Sans 15px, --text-secondary
- Hover: --text-primary, smooth color transition 150ms
- Active: --accent color

**Dialog/Sheet (shadcn):**
- Overlay: black 50% opacity
- Sheet slides from right: 480px width
- Dialog centers: max 560px width, --surface, 12px radius, --shadow-modal

**Table (shadcn Table):**
- Header: DM Sans 12px, tracking 0.06em, --text-muted, uppercase
- Rows: alternating --surface / --background (very subtle)
- Borders: 1px --border between rows

---

## E. VISUAL DIRECTION (NO IMAGE GENERATION)

**Logo:**
Word "Fieldpin" in Libre Baskerville Bold. No icon. No symbol.
Color: --accent (#2D6A4F) on light backgrounds, white on dark backgrounds.
Coder creates this as text in JSX with the correct font loaded via Google Fonts.
Favicon: The letter "F" in Libre Baskerville Bold, --accent on --background, 32x32 SVG text element.

**Hero Phone Mockup:**
Coder creates a CSS/HTML phone frame (rounded rectangle, dark bezel, screen content inside).
Screen shows a topographic-style map using a CSS gradient and SVG overlay path for the "terrain lines".
Three colored dots plotted as absolutely-positioned circles.
No external image needed — pure CSS.

**Topographic Background Pattern:**
SVG pattern element — diagonal lines at 45°, --accent color at 6% opacity.
Pattern tile: 24px × 24px, 1px stroke weight.
Applied as CSS background-image with repeat.
Code example:
```svg
<pattern id="topo" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
  <path d="M0 24 L24 0" stroke="#2D6A4F" stroke-width="0.5" opacity="0.06"/>
</pattern>
```

**Feature Icons:**
All Lucide icons from shadcn/ui:
- Offline GPS: `MapPin` (pinned, plus `WifiOff` overlaid small)
- Form templates: `ClipboardList`
- Photo capture: `Camera`
- Auto-sync: `RefreshCw`
- Dashboard: `LayoutDashboard`
- Cross-ranger network: `Network`
- Problem 1 (re-entry): `Clock`
- Problem 2 (complex software): `AlertCircle`
- Problem 3 (isolation): `Unlink2`

**Dashboard Map:**
Use Mapbox GL JS (free tier) or Leaflet.js with OpenStreetMap tiles.
Custom marker styles: CSS-styled divs, rounded circles, colored with product palette.
Clustering: built-in Mapbox clustering.

**Pin Color System:**
- Wildlife sighting: `#2D6A4F` (forest green) — Lucide `Bird`
- Incident report: `#D4550A` (burnt orange) — Lucide `AlertTriangle`
- Trail condition: `#2D6080` (slate blue) — Lucide `Footprints`

---

## F. ARTIST BRIEF

```
ARTIST BRIEF — Fieldpin

Brand Tokens Doc: https://docs.google.com/document/d/1Y5lUN_35OQ7a9LurzGVZqu_elPSY3QyVIxJLZCxei7c

Primary Color: #2D6A4F (deep forest green)
Accent Color: #D4A017 (earth amber)
Background: #F5F1E8 (warm parchment)
Text: #1C1A14 (near-black, warm)
Font: Libre Baskerville (display) / DM Sans (body)

---

Logo:
- Concept: The word "Fieldpin" conveys trustworthy field technology — rugged reliability, scientific precision, outdoor heritage
- Style: WORDMARK ONLY — "Fieldpin" in Libre Baskerville Bold, no icon
- Color: Deep forest green (#2D6A4F) on light backgrounds; clean white on dark backgrounds
- Treatment: No decorative elements. The typography IS the logo. The serif gives it authority without academic stiffness.
- Constraints: Must be legible at 32px (favicon) and 400px (hero). Works in monochrome.
- AVOID: pins icons, GPS symbols, tree shapes, shields, hexagons, circles, any geometric abstraction

OG Image (1200x630):
- Background: near-black (#1C1A14) with subtle topographic line pattern (diagonal SVG lines in forest green at 8% opacity)
- Left side: "Fieldpin" wordmark large (Libre Baskerville, 64px, white)
- Below logo: "Field data that doesn't wait for Wi-Fi" in DM Sans, 24px, white 70%
- Right side: stylized map region with 3 colored dots (green, orange, blue) — abstract, not photorealistic
- Bottom: "getfieldpin.com" in JetBrains Mono, 16px, amber (#D4A017)

LinkedIn Banner (1584x396):
- Background: forest green (#2D6A4F) with topographic line overlay
- Left: "Fieldpin" wordmark in white (Libre Baskerville Bold)
- Center: tagline "Offline field reporting for park rangers and wildlife officers"
- Right: the three colored pin dots with labels: ● Wildlife · ● Incident · ● Trail
- Very clean, professional, institutional feel

Twitter/X Header (1500x500):
- Similar palette to LinkedIn banner but landscape ratio
- More dramatic — full topographic map pattern at higher opacity
- "Fieldpin" wordmark centered, large
- No clutter — just logo + atmosphere

App Icon (1024x1024 — for mobile React Native build):
- Letter "F" in Libre Baskerville Bold
- Color: white "F" on deep forest green (#2D6A4F) background
- Background: rounded square with slight gradient (top: #2D6A4F → bottom: #1B4332)
- Clean, recognizable at 20px on phone home screen
- No decorative elements around the letter
```

---

## G. THE UNFORGETTABLE ELEMENT

**The living topographic map.** It appears in:
1. Hero section background — slow-scrolling diagonal contour lines
2. The phone mockup — screen shows a field map with colored pins
3. Auth page right panel — atmospheric background
4. Pitch deck cover slide — full-bleed
5. Favicon/OG image — hint of topographic lines

Every time a user sees any Fieldpin touchpoint, they see the landscape the rangers work in. It makes abstract "offline field reporting" concrete and visceral. You understand the product in 3 seconds — these tools belong in the field.

**The serif/earth palette combination** is the second unforgettable element. Every other field-tech SaaS uses Inter + blue. Fieldpin uses Libre Baskerville + forest green + parchment. It looks like a well-designed field notebook — purposeful, durable, analog in spirit, digital in execution.

---

## H. MOBILE STRATEGY

**Platform:** React Native + Expo (as specced by planner)

**Tab Navigation (bottom tab bar):**
- `Map` (active on launch) — Lucide `Map` icon
- `New Pin` — Lucide `Plus` with --accent background circle, center tab, elevated
- `My Pins` — Lucide `List`
- `Sync` — Lucide `RefreshCw` with pending count badge
- `Settings` — Lucide `Settings`

**Color on Mobile:**
Same brand tokens, adapted for NativeWind.
- System dark mode: background flips to #1C1A14, surfaces to #2A2720
- Touch targets: minimum 48px height (glove-friendly as per product spec)

**Screen Specs:**

_Home (Map View):_
- Full-screen map (expo-maps or React Native Maps with Mapbox)
- Floating action button (large green circle, + icon): "Drop Pin" — bottom center, 64px diameter
- Top: agency name bar with offline indicator (amber dot + "Offline" when disconnected)
- Pin type filter chips (horizontal scroll): All | Wildlife | Incident | Trail

_New Pin Flow (3 screens):_
Screen 1 — Location lock: Auto-captures GPS. Large pulsing green circle animation (Animated API). "GPS locked — 44.1234°N, -110.5678°W" in JetBrains Mono 14px. "Continue" CTA.
Screen 2 — Choose template: Three large cards (80% screen width), stacked. Each shows icon + name. Tap selects.
Screen 3 — Fill form: Large input fields (minimum 48px height). "Add Photo" button. Required fields marked. "Save Pin" CTA — saves to local SQLite, updates offline pin count.

_Sync Status:_
List of pending pins (unsynced). Each: type badge + timestamp + "Awaiting sync" status.
When connected: auto-sync triggers, progress animation, "All synced" success state.

_Offline Indicator:_
Persistent status bar at top: green "Online" or amber "Offline — 3 pins pending sync". Position: below system status bar.

---

## I. /docs HUB DESIGN SPEC

**Desktop layout:**
- Left sidebar: 240px, fixed scroll, --surface background, 1px right --border
- Sidebar header: "Fieldpin Docs" + agency name small
- Navigation items with Lucide icons:
  - `BookOpen` Research
  - `TrendingUp` GTM  
  - `Megaphone` Marketing
  - `Palette` Brand
  - `Presentation` Pitch
- Active item: --accent-light bg, --accent left border 3px, --accent text
- Content area: remainder, max-width 760px content, 48px padding

**Content cards (each section):**
- Title (DM Sans 20px bold)
- Summary paragraph (DM Sans 15px, --text-secondary)
- "View in Google Drive →" button (ghost, --accent, Lucide `ExternalLink` icon)
- Last updated date (DM Sans 12px, --text-muted)

**Mobile:**
- No sidebar
- "Docs" header with dropdown selector for section (shadcn Select)
- Full-width content cards

---

*Design spec complete. Coder: build from this spec. Brand tokens are source of truth for Tailwind config.*
