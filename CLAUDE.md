@AGENTS.md

# Claude Code Prompt: Grenada Community Tennis Ladder

Build a single-page landing page at the root route (`/`) of this existing Next.js 15+ / Tailwind v4 project. The page is a community tennis ladder for Grenada, presented by Mount Cinnamon Beach & Wellness Resort. The chairman, Barry Collymore, is the face of the initiative.

---

## Design System

### Fonts (load via `next/font/google`)

- **Barlow Condensed** (weights: 400, 500, 600, 700, 800, 900) — all section headings, bold sport display type. Always uppercase.
- **Cormorant** (weights: 300, 400, 500; italic: 300, 400) — editorial accents, the blockquote, decorative elements.
- **Outfit** (weights: 300, 400, 500, 600) — all body text, UI elements, labels, form inputs, buttons, navigation.

### Colors

```
navy:        #0C2340  (primary dark)
navy-deep:   #081A30  (hero gradient start)
navy-mid:    #163054  (step cards)
navy-light:  #1E4068  (step cards)
cinnamon:    #C17A3E  (primary accent)
cinnamon-light: #D4956A (hover states, gradients)
sand:        #F5F0E8  (warm neutral cards)
sand-border: #F0ECE6  (borders, rules)
cream:       #FAFAF7  (section backgrounds)
white:       #FFFFFF  (content sections)
text-dark:   #0C2340
text-mid:    rgba(12,35,64,.45)
text-light:  rgba(12,35,64,.2)
```

### Spacing rhythm

- Section padding: `py-16 md:py-20 px-5 md:px-12`
- Max content width: `max-w-[1200px] mx-auto`
- Card gap: `gap-4`
- Horizontal rule dividers between major sections (1px, sand-border color)

---

## Logo

Place the Mount Cinnamon logo at `/public/images/mount-cinnamon-logo.png`. It has a transparent background. Render it in the nav (h-8) and footer (h-7, 50% opacity). The logo file is already in the project at that path (or will be placed there).

---

## Page Structure (top to bottom)

### 1. Fixed Navigation

- Transparent initially, transitions to `navy/97% opacity` with `backdrop-blur-lg` on scroll (use a scroll listener via `useEffect` in a client component)
- Left: Mount Cinnamon logo
- Right: nav links — "Ladder", "Join", "Report", "Rules" (hide Rules on mobile)
- Links: Outfit 12px, weight-500, uppercase, letter-spacing 1px, white at 50% opacity, hover white
- Smooth scroll on click to section IDs

### 2. Hero Section

- Background: linear gradient 160deg from navy-deep to navy to #14365C
- Subtle court-line texture overlay (CSS repeating-linear-gradient, white lines at 3% opacity, 40px grid)
- Faint centered circle decoration (200px, 1px border, white at 2% opacity)
- **Massive typography**: "TENNIS" in Barlow Condensed 900, `text-[clamp(72px,12vw,160px)]`, white, line-height 0.85
- **"LADDER"** same size but **outlined only**: `text-transparent` with `-webkit-text-stroke: 1.5px rgba(255,255,255,0.2)`
- Below the type: flex row wrapping, with:
  - Left: description paragraph (Outfit 15px, 300 weight, white at 40%, max-w-[360px]) + two buttons ("Join Now" cinnamon fill, "Rankings" ghost with white border at 12%)
  - Right: three stat blocks — Players count, Matches count, "Free" entry — Barlow Condensed 36px 700 white, labels Outfit 9px uppercase white at 20%
- Padding: top clamp(120px,16vw,180px), bottom clamp(48px,6vw,72px)

### 3. Barry Feature Section (card grid)

- Background: cream
- 4-column grid on desktop, 2-col tablet, 1-col mobile
- **Card 1 (Title card)**: cinnamon gradient background (160deg, #C17A3E to #D4956A). "YOUR HOST" in Barlow Condensed 32px 800 uppercase white. Description text below. @barrycolly Instagram link at bottom. Decorative circle in bottom-right corner (120px, white border at 15%, partially offscreen).
- **Card 2 (Portrait card)**: navy gradient background. Placeholder with faint "BC" watermark (Cormorant 140px, white at 2%) and a subtle person silhouette SVG (6% opacity). "PHOTO" label top-right (8px, white at 10%). Bottom gradient overlay with name "BARRY COLLYMORE" in Barlow Condensed 22px 700 uppercase white, subtitle "Chairman" in Outfit 11px white at 30%.
- **Cards 3-4 (Quote card, spans 2 columns)**: white background, 1px sand-border. Large opening quote mark (Cormorant 48px, cinnamon at 15%). Blockquote in Cormorant italic 22px. Attribution below with a 24px cinnamon line + "Barry Collymore, Chairman" in Outfit 11px uppercase.

### 4. How It Works Section

- Horizontal rule divider above
- "HOW IT WORKS" in Barlow Condensed clamp(36px,5vw,56px) 900 uppercase navy
- 4-column grid:
  - **Card 1 (Description card)**: sand background. Body text in Outfit 13px 300 at 50% opacity. "3 STEPS" label at bottom in cinnamon.
  - **Cards 2-4 (Step cards)**: navy backgrounds (graduating lighter: #0C2340, #163054, #1E4068). Each has a large faint step number (Barlow Condensed 72px 900, white at 4%) in top-right. Step title in Barlow Condensed 24px 700 uppercase white. Description in Outfit 13px 300 white at 45%. "STEP 01/02/03" label at bottom in Outfit 10px white at 15%.

### 5. Ladder Section

- Horizontal rule divider above
- "LADDER" in Barlow Condensed, same size as How It Works heading
- "Live" indicator in top-right with a 6px cinnamon dot
- 2-column grid:
  - **Left: Leaderboard table**
    - Header row: # / Player / W-L in Outfit 9px 600 uppercase, text at 20% opacity, 2px bottom border
    - Player rows: grid of 44px / 1fr / 56px. Rank number in Barlow Condensed 18px 700 (rank 1 = cinnamon, ranks 2-3 = navy, rest = 20% opacity). Player name in Outfit 14px (Barry = 600 weight + "Chairman" label in cinnamon 8px uppercase). W-L in Outfit 12px at 20%. Empty slots ("—") at 15% opacity. 1px sand-border bottom on each row. Hover: cream background.
    - Note below table: Outfit 11px italic at 20% — "Registered players receive the private directory via email."
  - **Right column**:
    - "About the Ladder" info card: sand background, padding 36px. "ABOUT THE LADDER" Barlow Condensed 20px 700 uppercase navy. Description in Outfit 13px 300 at 45%.
    - Recent Results (only if matches exist): "RECENT RESULTS" label in cinnamon. Each result: winner (Outfit 13px 600 cinnamon) "def." (at 15%) loser (at 40%), score + date on right (Outfit 11px at 15%).

### 6. Join + Report Section

- Background: cream
- 2-column grid:
  - **Join card (left)**: navy background, padding 48px. "JOIN THE LADDER" Barlow Condensed 28px 800 uppercase white. Description Outfit 13px 300 white at 30%. Two inputs (full name, email) with dark field styling (white at 4% bg, white at 8% border, white text). "JOIN NOW" cinnamon button full width.
  - **Report card (right)**: white background, 1px sand-border. "REPORT A MATCH" same heading style in navy. Two select dropdowns (Winner, Loser filtered to exclude winner), score input + date input in 2-col grid. "SUBMIT RESULT" navy button full width.
- Success states: 2px cinnamon top border + confirmation text.

### 7. Rules Section

- Horizontal rule divider above
- Collapsible: "RULES & GUIDELINES" Barlow Condensed 24px 800 uppercase navy, with a "+" toggle (cinnamon, rotates 45deg when open) on the right
- When expanded: responsive grid of 5 small cards (sand background, padding 16px 20px). Each card has a rule number (Barlow Condensed 16px 700 cinnamon) and rule text (Outfit 13px 300 at 40%).
- Rules:
  1. Challenge up to 3 spots above your rank.
  2. Defenders must accept within 48 hours or forfeit.
  3. Play anywhere. Mount Cinnamon court fees split evenly.
  4. Players provide their own tennis balls.
  5. Best two out of three sets. Winner reports.

### 8. Footer

- Background: navy
- Single row flex: left = logo (28px height, 50% opacity) + "Grenada Community Tennis Ladder" (Outfit 12px, white at 15%). Right = @barrycolly and @mountcinnamongrenada Instagram links (Outfit 11px, white at 12%) + phone number.

---

## Data & State Management

### Players & Matches

- Store in a `players` state array: `[{ id, name, w, l }]` — 10 slots, slot 1 is "Barry Collymore", rest default to "—"
- Store in a `matches` state array: `[{ id, winner, loser, score, date }]`
- **For now, use localStorage** for persistence (`grd-tennis-v6` key). Load on mount, save on every mutation.
- Later this will be migrated to Supabase.

### Join logic

- Find first player with name "—", replace with submitted name. Save.
- Show success message for 5 seconds.

### Match reporting logic

- Increment winner's W count, increment loser's L count.
- **If the winner was ranked below the loser** (higher index), swap their positions in the array.
- Save. Show success message for 5 seconds.

### Active players

- Filter: `players.filter(p => p.name !== "—")`
- Only active players appear in the Winner/Loser dropdowns.
- Loser dropdown excludes the currently selected winner.

---

## Component Architecture

```
app/
  page.tsx           — Server component, renders <TennisLadder />
  components/
    tennis-ladder.tsx — "use client" — main page component with all state
    nav.tsx           — "use client" — fixed nav with scroll detection
    hero.tsx          — Hero section (can be server component)
    barry-grid.tsx    — Barry feature card grid
    how-it-works.tsx  — Steps card grid
    ladder.tsx        — "use client" — leaderboard + results
    action-cards.tsx  — "use client" — join + report forms
    rules.tsx         — "use client" — collapsible rules
    footer.tsx        — Footer
```

All state lives in `tennis-ladder.tsx` and is passed down as props. The child client components that need interactivity (nav, ladder, action-cards, rules) receive props or callbacks.

---

## Technical Notes

- Next.js 15+ App Router, all components in `app/` directory
- Tailwind v4 — use `@theme` in CSS for custom colors, or define as CSS variables. Use utility classes throughout, no inline styles.
- Use `next/font/google` to load all three font families. Apply via CSS variable strategy (`--font-barlow`, `--font-cormorant`, `--font-outfit`).
- Smooth scroll: add `scroll-behavior: smooth` to html via global CSS.
- All external links (`mountcinnamon.com`, Instagram) open in new tabs with `rel="noopener noreferrer"`.
- Mobile responsive: 4-col grids become 2-col at `md` breakpoint, 1-col at `sm`. Hero type scales with clamp().
- No external dependencies beyond what's in the project. No animation libraries needed — CSS transitions and keyframes only.

---

## Content

### Barry's quote

"Tennis in Grenada is about community, competition, and getting out on the court. I wanted a simple way for all of us to find matches and elevate our game."

### Hero description

"Challenge local players, climb the ranks, and prove you own the court. No entry fees. Presented by Mount Cinnamon Resort, Grand Anse Beach, Grenada."

### Instagram links

- Barry: https://www.instagram.com/barrycolly/
- Resort: https://www.instagram.com/mountcinnamongrenada/

### Resort website

https://www.mountcinnamon.com/

### Contact

- admin@grenadatennisladder.com
- +1 473-439-9900
- Grand Anse Beach, St. George's, Grenada
