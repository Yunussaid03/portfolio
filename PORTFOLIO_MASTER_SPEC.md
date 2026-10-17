# MASTER AGENTIC EXECUTION SPECIFICATION: YUNUS SAID KHAIDUM PORTFOLIO REBUILD

## 0. AGENT DIRECTIVE & OBJECTIVE
You are tasked with executing a complete, ground-up UI/UX and architectural overhaul of Yunus Said Khaidum's Next.js developer portfolio (`https://yunus-yunussaid2704-3180s-projects.vercel.app/` / `yunus.software`).

**Core Mandate:**
- Replace the existing template and remove all snowflake animations (`❄`).
- Remove deprecated projects (`StudyTrack` and `UniWallet`).
- Implement an ultra-modern, high-contrast, dark-mode engineering portfolio inspired by top-tier developer portfolios (`emmabostian/developer-portfolios`, Linear, Vercel, and Mercedes-Benz MBUX telemetry).
- Build interactive React/Tailwind components for all 7 projects—using real screenshots where available and custom-coded interactive system visualizers/mockups for ongoing or backend-heavy projects (ZERO generic stock photos).
- Split the Experience section into two distinct tracks: **Track A (Software & AI Engineering)** and **Track B (Leadership, Campus & Community)**.
- Build a **"Beyond The Terminal" Personal Bento Grid** and an **Interactive Command-Line Terminal Footer**.

---

## 1. CANDIDATE PROFILE & CORE METADATA
- **Full Name:** Yunus Said Khaidum
- **Positioning Title:** Full-Stack Software Engineer & AI Systems Architect
- **Location:** Sepang / Kuala Lumpur, Malaysia (Open to Global Remote & Hybrid)
- **Education:** 3rd-Year B.Sc. in Computer Science and Technology — Xiamen University Malaysia (School of Computing and Data Science)
- **Spoken Languages:** English, Arabic, Hindi, Swahili
- **Social & Contact Links:**
  - **Portfolio Domain:** `https://yunus.software` (Current Vercel preview: `https://yunus-yunussaid2704-3180s-projects.vercel.app/`)
  - **GitHub:** `https://github.com/Yunussaid03`
  - **LinkedIn:** `https://www.linkedin.com/in/yunus-said-6340253b8/`
  - **Email:** `mailto:yunussaid2704@gmail.com`
  - **Instagram:** `https://instagram.com/kingsman_.__`

---

## 2. DESIGN SYSTEM & VISUAL ARCHITECTURE ("OBSIDIAN TELEMETRY")
1. **Remove Legacy Visuals:** Strip out all falling snowflake `<div>❄</div>` elements from the current DOM.
2. **Color Palette:**
   - **Primary Canvas:** Deep Obsidian `#06080D`
   - **Elevated Card Surface:** `#0B0F17` with `1px solid rgba(255, 255, 255, 0.08)` borders and subtle radial hover spotlight.
   - **Primary Accent (Telemetry Cyan):** `#00F0FF` / Tailwind `cyan-400`
   - **Live Status / Success (Emerald):** `#10B981` / Tailwind `emerald-400`
   - **Luxury / Automotive Accent (Amber Gold):** `#F59E0B` / Tailwind `amber-400` (used for KL Motoren Werke & MBUX Degradation states)
   - **Alert / Critical Accent (Crimson):** `#EF4444` / Tailwind `rose-500` (used for MBUX Emergency state & Page Fault indicators)
3. **Typography:**
   - **Headings & Display:** `Geist Sans` or `Inter` (tight tracking `-0.03em`, bold/extrabold).
   - **Telemetry, Tags, Timestamps & Terminal:** `Geist Mono` or `JetBrains Mono`.
4. **Background Treatment:**
   - Fixed subtle architectural grid (`background-size: 44px 44px`, `1px` lines at `3%` white opacity) with a top radial cyan/blue atmospheric glow.

---

## 3. SECTION-BY-SECTION IMPLEMENTATION BLUEPRINT

### SECTION 1: STICKY GLASSMORPHIC NAVBAR
- **Left:** Monospace brand mark `YUNUS.SOFTWARE` with a pulsing emerald status dot (`AVAILABLE FOR PROJECTS & ROLES`).
- **Center/Right Navigation Links:** `Projects`, `In The Lab`, `Experience`, `Stack`, `Off-Screen`, `Terminal`.
- **CTA Button:** `GitHub ↗` linking to `https://github.com/Yunussaid03`.

---

### SECTION 2: HERO SECTION (HIGH-IMPACT VALUE PROPOSITION)
- **Top Telemetry Badge:** `FULL-STACK ENGINEER • AI INTEGRATOR • B2B SYSTEMS ARCHITECT`
- **Main Headline:**
  > Building **Safety-Critical AI**, **Enterprise ERPs**, and **High-Conversion Web Platforms**.
- **Sub-Headline Copy:**
  > "Hi, I'm **Yunus Said Khaidum** — a Software Engineer and Computer Science student at Xiamen University Malaysia. I architect production-grade web applications, multi-tenant fleet ERPs, fintech payment pipelines, and autonomous AI workflows that solve real operational problems."
- **Primary CTAs:**
  - Button 1 (Primary Solid Cyan): `Explore Flagship Work ↓` (`#projects`)
  - Button 2 (Secondary Glassmorphic): `GitHub (@Yunussaid03) ↗` (`https://github.com/Yunussaid03`)
  - Button 3 (Monospace Link): `klmw.my (Live Client Site) ↗` (`https://www.klmw.my`)
- **Quick Proof Bar (4 Metric Pills):**
  - `57+ Vehicles` — Managed via B2B Fleet ERP Architecture
  - `MBTMY 2026` — Mercedes-Benz Vibathon Safety-Critical AI
  - `Production Web` — Live Commercial Automotive & Fintech Deployments
  - `4 Languages` — English, Arabic, Swahili & Hindi

---

### SECTION 3: DUAL-TRACK EXPERIENCE & LEADERSHIP MATRIX
**CRITICAL REQUIREMENT:** Do NOT mix technical software roles with non-technical university/leadership roles in a single timeline. Render a **2-Column Split Layout** on desktop (or clean tabbed view on mobile):

#### LEFT COLUMN: `[01] SOFTWARE & AI ENGINEERING EXPERIENCE`
1. **Tech Associate (Internship)** — **GETAcademy**
   - **Dates:** Sep 2026 – Present
   - **Location:** Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia (Hybrid)
   - **Details:** Working as a Tech Associate within the IT & Technology team, supporting technology initiatives, platform architecture, and digital projects across the organization.
   - **Tags:** `IT Infrastructure` `Digital Platforms` `Full-Stack Support`

2. **Software Engineer (Part-Time)** — **Freelance (Self-Employed)**
   - **Dates:** Jun 2026 – Present
   - **Location:** Kenya (Remote)
   - **Details:** Architecting and developing a full-stack B2B Fleet Management ERP (**KettyFleet**) for a commercial fleet operator managing approximately 57 vehicles. Engineered multi-tenant booking lifecycles, automated invoicing, and real-time fleet dispatch tracking.
   - **Tags:** `PostgreSQL` `REST APIs` `React` `TypeScript` `Supabase` `System Architecture`

3. **Backend AI Engineer - Intern** — **FlyRank AI**
   - **Dates:** Jun 2026 – Sep 2026 (4 mos)
   - **Location:** Sepang, Selangor, Malaysia (Remote)
   - **Details:** Interned at FlyRank AI ("The Autopilot for Organic Growth") focusing on Backend AI Engineering, automated content/data pipelines, and scalable backend services.
   - **Tags:** `Backend AI Engineering` `LLM Pipelines` `API Architecture`

4. **Freelance Full Stack Developer** — **Freelance**
   - **Dates:** 2026
   - **Location:** Remote
   - **Details:**
     - Integrated a secure fintech payment gateway (**IntaSend API**), establishing native **Safaricom M-Pesa STK Push** functionalities, processing automated webhook callbacks, and handling real-time transaction verification.
     - Engineered and deployed the commercial digital platform for **KL Motoren Werke (`klmw.my`)** with custom DNS and Cloudflare edge optimization.
   - **Tags:** `IntaSend API` `M-Pesa STK Push` `Cloudflare DNS` `Full-Stack Web`

#### RIGHT COLUMN: `[02] LEADERSHIP, CAMPUS & VOLUNTEERING`
1. **Assistant Head of People Management** — **AIESEC** (Apprenticeship)
   - **Dates:** Apr 2024 – Sep 2025 (1 yr 6 mos)
   - **Location:** Malaysia (On-site)
   - **Details:** Led talent acquisition efforts from high-traffic recruitment fairs to conducting one-on-one candidate interviews. Facilitated key internal operational meetings and championed Voice of Customer (VOC) initiatives to shape organizational strategy and culture.
   - **Tags:** `Leadership` `Talent Acquisition` `Team Operations` `Presentation Skills`

2. **Qualification Reviewer** — **Xiamen University Malaysia** (Part-time)
   - **Dates:** May 2025 – Jun 2025 (2 mos)
   - **Location:** Malaysia (Hybrid)
   - **Details:** Reviewed and audited official qualification documents for regional **SEA-CICSIC** competition participants; awarded Certificate of Appreciation.
   - **Tags:** `Project Management` `Compliance Review` `Data Verification`

3. **Student Assistant** — **Xiamen University Malaysia** (Part-time)
   - **Dates:** Sep 2024 – Dec 2024 (4 mos)
   - **Location:** Selangor, Malaysia (On-site)
   - **Details:** Facilitated new student enrollment across campus and guided cohorts through onboarding and medical examination workflows.

4. **Volunteering Sub-Section (Compact Badges at bottom of Right Column):**
   - **Safety Coordinator — Rotaract Club of Xiamen University Malaysia** *(Dec 2024 • Arts and Culture)*: Certified Safety Coordinator for campus-wide cultural events.
   - **Hydration Station Volunteer — Standard Chartered KL Marathon** *(Oct 2024 • Health)*: Supported marathon athletes and logistics at high-volume hydration stations.

---

### SECTION 4: TIER 1 — FLAGSHIP PRODUCTION & HACKATHON CASE STUDIES
Render these 3 flagship projects as large, full-width interactive case study blocks.

#### PROJECT 01: MBUX Shadow AI (Mercedes-Benz Vibathon 2026)
- **Repository:** `https://github.com/jjibrah/MercedesBenzVibathon`
- **Category Badge:** `MERCEDES-BENZ VIBATHON 2026 • SAFETY-CRITICAL EDGE AI`
- **Title:** MBUX Shadow AI — Self-Healing Automotive Cockpit & Watchdog
- **Problem & Engineering Summary:**
  Built with Team *The Vanguard Analysts* for Mercedes-Benz Tech Malaysia. Shadow AI is a zero-distraction, two-tier autonomous watchdog embedded into the MBUX infotainment cluster. It continuously monitors real-time vehicle compute telemetry (memory usage spikes, elevated CPU loads) and executes silent background self-healing (**Graceful Degradation**) so navigation and critical sport gauges never freeze at high speeds.
- **Key Technical Highlights:**
  - **3-State Adaptive Cockpit:** Dynamically transitions between *Standard Telemetry*, *Degraded Sport Cluster (Graceful Degradation Active)*, and *Emergency Sport Cluster*.
  - **ShadowAgent Watchdog (`ShadowAgent.js`):** Detects memory leaks and background app hangs, automatically shedding non-essential processes while preserving Mapbox GL navigation and speed/RPM telemetry.
  - **Voice & Audio Synthesis:** Web Speech API integration (`MBUXVoice.js`) for hands-free driver alerts.
- **Tech Stack Pills:** `React 19` `Vite` `Tailwind CSS` `Mapbox GL` `Lucide React` `Web Speech API` `Edge Telemetry`
- **Interactive Visual Component Requirement:**
  Build a **3-Tab Cockpit State Switcher** wrapping the 3 provided screenshots:
  - Tab 1 (`Graceful Degradation`): Displays `shadow-degraded.png` (117 km/h Degraded Sport Cluster with traffic rebalancing).
  - Tab 2 (`Emergency Cluster`): Displays `shadow-emergency.png` (119 km/h Emergency Sport Cluster).
  - Tab 3 (`Shadow AI Watchdog Modal`): Displays `shadow-modal.png` (Diagnostic overlay showing `Memory usage high`, `CPU load elevated`, `System stable — 8 background tasks resolved`).

#### PROJECT 02: KL Motoren Werke (`klmw.my`)
- **Live URL:** `https://www.klmw.my/index.html` (and `https://www.klmw.my`)
- **Category Badge:** `LIVE COMMERCIAL PRODUCTION • AUTOMOTIVE DIGITAL PLATFORM`
- **Title:** KL Motoren Werke — Continental & Luxury Automotive Service Platform
- **Problem & Engineering Summary:**
  End-to-end commercial web platform engineered for **KL Motoren Werke Sdn Bhd**, Kuala Lumpur's premier independent specialist for German, Continental, and Asian vehicles (BMW, Mercedes-Benz, Porsche, Audi, Volkswagen, Mini). Designed to replace opaque workshop quotes with a high-conversion, transparent digital booking experience.
- **Key Technical Highlights:**
  - **12-Category Service & Pricing Matrix:** Interactive filtering across Preventive Maintenance, Engine & Mechanical, Transmission/Drivetrain (ZF/DSG/PDK), ECU Coding, and Corporate Fleet packages.
  - **Multi-Marque Specialist Architecture:** Dedicated diagnostic breakdowns for Continental, Japanese, Korean, and Malaysian marques.
  - **Corporate Fleet & WhatsApp Concierge Pipeline:** Integrated SST/E-Invoice compliant corporate fleet inquiry routing, interactive multi-bay workshop gallery, and Cloudflare edge caching/DNS optimization.
- **Tech Stack Pills:** `HTML5 / CSS3 / JS` `Responsive UI Architecture` `Cloudflare Edge & DNS` `SEO Schema` `WhatsApp Conversion API`
- **Interactive Visual Component Requirement:**
  Capture high-resolution screenshots of `https://www.klmw.my/index.html` (Hero section + Service Pricing Matrix + Brand Specialist Grid) OR render an interactive **macOS Safari Dark-Mode Browser Frame** featuring a live preview toggle and a direct `"Launch Live Site (klmw.my) ↗"` button.

#### PROJECT 03: CampusRelay (XMUM P2P Mobility Marketplace)
- **Repository:** `https://github.com/Yunussaid03/campusrelay`
- **Category Badge:** `FULL-STACK MARKETPLACE • GEOSPATIAL CAMPUS MOBILITY`
- **Title:** CampusRelay — Peer-to-Peer Vehicle & Micro-Mobility Sharing Platform
- **Problem & Engineering Summary:**
  A two-sided peer-to-peer rental marketplace engineered for the Xiamen University Malaysia (XMUM) community. Enables students and vehicle hosts to list, discover, and rent cars, scooters, and mobility accessories across campus with pin-accurate pickup coordination.
- **Key Technical Highlights:**
  - **Dual-Console Role Switching:** Instant state switching between the **Student/Renter Marketplace** and the **XMUM Lender Console** with real-time RM wallet balance tracking.
  - **Interactive Leaflet.js GIS Map:** Live campus map cluster browsing and 1-click coordinate pin-dropping when creating new vehicle listings.
  - **Conditional Lock-Code Security:** Physical lock combinations and key-box codes remain encrypted/hidden on the backend and are only revealed to approved renters upon booking confirmation.
- **Tech Stack Pills:** `PHP 8` `MySQL` `JavaScript (ES6+)` `Leaflet.js` `OpenStreetMap API` `HTML5/CSS3`
- **Interactive Visual Component Requirement:**
  Build a **4-View Interactive Gallery Switcher** using the 4 provided CampusRelay screenshots:
  - View 1: `campusrelay-map.png` (Interactive Campus Browse Map with live blue location pins).
  - View 2: `campusrelay-lender.png` (XMUM Lender Console showing RM 50.00 wallet, Bike Accessories, and Reserved Mercedes AMG).
  - View 3: `campusrelay-form.png` (Add Listing form with interactive Leaflet pin-drop map and conditional lock code field).
  - View 4: `campusrelay-listing.png` (Registered Proton listing card with parking spot `LY3` and lock code management).

---

### SECTION 5: TIER 2 — "IN THE LAB" (ONGOING R&D PROJECTS)
**CRITICAL VISUAL REQUIREMENT:** Since these two ongoing projects do not have static screenshots yet, **DO NOT use stock photos**. Build **custom, animated React/Tailwind UI & System Architecture Widgets** inside their cards to visually prove the engineering under the hood.

#### PROJECT 04: KettyFleet ERP (`BUILDING / PRODUCTION R&D`)
- **Repository:** `https://github.com/Yunussaid03/kettyfleet`
- **Live Badge:** Pulsing Emerald Badge — `ACTIVE DEVELOPMENT • 57-VEHICLE B2B FLEET`
- **Title:** KettyFleet ERP — Multi-Tenant Enterprise Fleet & Dispatch System
- **Problem & Engineering Summary:**
  A full-stack B2B Enterprise Resource Planning (ERP) platform architected for a commercial fleet operator in Kenya managing ~57 vehicles. Digitizes the entire lifecycle from customer vehicle booking and digital contract signing to pre/post-rental inspections, automated invoicing, and maintenance scheduling.
- **Tech Stack Pills:** `TypeScript` `React 18` `Vite` `Tailwind CSS` `Supabase` `PostgreSQL` `Shadcn UI` `React Query`
- **Custom Coded Visual Artifact to Render in Card:**
  Build an interactive **"Live Fleet Telemetry & Dispatch Pipeline" UI Widget** directly in React/Tailwind showing:
  - Top KPI bar: `TOTAL FLEET: 57 UNITS` | `DISPATCHED: 42` | `MAINTENANCE: 4` | `AVAILABLE: 11`
  - Animated 4-step transaction pipeline: `[01. Booking Verified]` ➔ `[02. Digital Inspection Logged]` ➔ `[03. M-Pesa / Invoice Synced]` ➔ `[04. Vehicle Dispatched]`
  - Simulated live vehicle status rows (e.g., `KDJ 482X • Toyota Prado • Active Lease`, `KDM 109A • Nissan Urvan • Inspection Pending`).

#### PROJECT 05: OmniExtract AI (`BUILDING / AI MICROSERVICE`)
- **Repository:** `https://github.com/Yunussaid03/omniextract-ai`
- **Live Badge:** Pulsing Cyan Badge — `ACTIVE R&D • MULTIMODAL AI INGESTION`
- **Title:** OmniExtract AI — Multimodal Document & Media Extraction Pipeline
- **Problem & Engineering Summary:**
  An intelligent backend ingestion microservice and workspace that transforms unstructured multi-format inputs (PDF invoices, receipts, audio notes, images) into structured, validated relational data and automated Google Sheets exports using Google Gemini AI and persistent context memory.
- **Tech Stack Pills:** `TypeScript` `React 19` `Express.js` `Google Gemini API` `SQLite (better-sqlite3)` `Google OAuth 2.0` `Framer Motion`
- **Custom Coded Visual Artifact to Render in Card:**
  Build an **Animated Multimodal Extraction Pipeline Widget** in React/Tailwind:
  - Left Node (Unstructured Input): Icons/badges for `PDF Invoice`, `Voice Memo`, `Scanned Receipt`.
  - Center Node (Engine): Glowing `Gemini 2.5 Multimodal Parser + Context Memory` processor.
  - Right Node (Structured Output): Live-updating monospace JSON/Spreadsheet preview:
    ```json
    {
      "vendor": "KL Motoren Werke",
      "invoice_id": "INV-2026-089",
      "confidence": 0.994,
      "status": "SYNCED_TO_SHEETS"
    }
    ```

---

### SECTION 6: TIER 3 — CORE AI & SYSTEMS ENGINEERING (UPGRADED EXISTING PROJECTS)
**NOTE:** Explicitly delete `StudyTrack` and `UniWallet` from the codebase. Keep and upgrade `Storygen Agent` and `Algorithm Optimization Engine` with custom interactive visuals.

#### PROJECT 06: Storygen Agent — Multimodal AI Narrative Engine
- **Repository:** `https://github.com/Yunussaid03/storygen-agent`
- **Title:** Storygen Agent — Context-Aware Multimodal Storytelling Platform
- **Problem & Engineering Summary:**
  An autonomous AI storytelling engine that pairs ultra-low-latency **Groq LLaMA** text generation with dynamic scene illustration via **Pollinations AI**, backed by **Supabase** user authentication and cloud story persistence.
- **Tech Stack Pills:** `Python` `Streamlit` `Groq API (LLaMA)` `Pollinations AI` `Supabase Auth & DB`
- **Custom Coded Visual Artifact to Render in Card:**
  Build a **Split-Screen Multimodal Studio Mockup** in Tailwind:
  - Left pane: Simulated prompt console (`"Generate a cyberpunk noir detective scene in Kuala Lumpur 2088..."`) with token streaming speed badge (`480 tokens/sec via Groq`).
  - Right pane: Stylized visual story card with generated scene metadata, mood tags, and Supabase cloud sync status.

#### PROJECT 07: Page Replacement Algorithm Optimization Engine
- **Repository:** `https://github.com/Yunussaid03/algorithm-optimization-engine`
- **Title:** OS Memory Page Replacement Visualizer & Benchmark Engine
- **Problem & Engineering Summary:**
  A systems programming and algorithm benchmarking toolkit that simulates and compares operating system virtual memory page replacement policies (**FIFO**, **LRU**, and **Optimal/OPT**) across customizable reference strings and frame capacities.
- **Tech Stack Pills:** `Algorithms & Data Structures` `Systems Programming` `JavaScript / Python` `Memory Management`
- **Custom Coded Visual Artifact to Render in Card:**
  Build a **Working Mini Interactive Page-Replacement Simulator** right inside the card:
  - Allow the user to click between `[LRU]`, `[FIFO]`, and `[OPT]` and step through reference string `[7, 0, 1, 2, 0, 3, 0, 4, 2, 3]`.
  - Display 3 physical memory frame slots (`FRAME_00`, `FRAME_01`, `FRAME_02`) and live `CACHE HIT` (emerald) vs. `PAGE FAULT` (crimson) counters.

---

### SECTION 7: "BEYOND THE TERMINAL" — PERSONALITY & COMPETITIVE EDGE BENTO GRID
Create a 5-tile Bento Grid that highlights Yunus's off-screen discipline and analytical mindset:
1. **Pitch & Friday Futsal:** "Every Friday night on the futsal court or football pitch. High-tempo play, spatial awareness, and team chemistry."
2. **Strength & Hypertrophy:** "Consistent weightlifting and body-composition tracking—paired with high-protein meal prep (air-fried chicken, pilau, Jollof rice)."
3. **Fantasy Premier League (FPL) Analytics:** "Engineered custom Telegram AI bots (`Kingsman`) using Pipedream and live Premier League APIs to model xGI, fixture swings, and differential captaincy."
4. **Tactical Precision (Chess & 8-Ball Pool):** "Calculating geometric angles on the pool table and multi-move tactics on the chessboard."
5. **Competitive Gaming & Cardistry:** "High-APM competitive gaming (`eFootball`) and practicing sleight-of-hand card manipulation."

---

### SECTION 8: INTERACTIVE ZSH TERMINAL FOOTER
Upgrade the existing static footer (`$ whoami / yunus-said`) into a **real, interactive client-side terminal component**:
- Pre-populated history showing `$ whoami` and `$ status --current`.
- Interactive input prompt where visitors can type commands:
  - `help` ➔ Lists available commands (`whoami`, `stack`, `projects`, `experience`, `fpl`, `contact`, `clear`)
  - `stack` ➔ Prints categorized tech stack
  - `projects` ➔ Prints numbered list of the 7 portfolio projects with links
  - `fpl` ➔ Prints an Easter egg message from the Kingsman FPL Telegram Agent
  - `contact` ➔ Prints direct email, GitHub, and LinkedIn links
  - `clear` ➔ Clears terminal output

---

## 4. IMAGE ASSET MAPPING INSTRUCTIONS FOR THE AGENT
Place the 7 provided user screenshots into `public/projects/` with the following exact filenames:
1. `public/projects/shadow-emergency.png` — MBUX 119 km/h Emergency Sport Cluster screenshot.
2. `public/projects/shadow-degraded.png` — MBUX 117 km/h Degraded Sport Cluster (Graceful Degradation Active) screenshot.
3. `public/projects/shadow-modal.png` — Shadow AI Activity modal overlay screenshot.
4. `public/projects/campusrelay-listing.png` — CampusRelay Registered Proton listing screenshot.
5. `public/projects/campusrelay-map.png` — CampusRelay Interactive Campus Browse Map (Leaflet) screenshot.
6. `public/projects/campusrelay-lender.png` — CampusRelay XMUM Lender Console (Bike Accessories & Mercedes AMG) screenshot.
7. `public/projects/campusrelay-form.png` — CampusRelay Add Listing form with pin-drop map screenshot.
8. For `klmw.my`: Run a headless browser capture of `https://www.klmw.my/index.html` into `public/projects/klmw-hero.png` and `public/projects/klmw-services.png`, OR mount the interactive `KlmwBrowserShowcase` component.

---

## 5. DEFINITION OF DONE (ACCEPTANCE CRITERIA)
- [ ] Zero snowflake `❄` elements anywhere in the DOM.
- [ ] `StudyTrack` and `UniWallet` are completely removed.
- [ ] All 7 specified projects (`Shadow AI`, `KL Motoren Werke`, `CampusRelay`, `KettyFleet ERP`, `OmniExtract AI`, `Storygen Agent`, `Algorithm Optimization Engine`) are rendered with interactive tabs or custom-coded live UI visualizers.
- [ ] Experience section is cleanly separated into **Software & AI Engineering** vs. **Leadership, Campus & Volunteering**.
- [ ] Fully responsive across mobile (`375px`), tablet (`768px`), and desktop (`1440px+`), passing `next build` with zero TypeScript or ESLint errors.