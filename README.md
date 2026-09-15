# Handoff: THAI JET Asia — Flight Search (Next.js + TypeScript → Vercel)

## Overview
Mobile flight-search screen for the fictional airline **THAI JET Asia**, used as a film prop.
The user enters 4 fields (origin, destination, travel date, passengers), taps **ค้นหาเที่ยวบิน**,
and gets **8 flight results**. Every visible piece of text on screen is **inline-editable by tapping it**,
so the film crew can type arbitrary values on camera. No backend, no real flight data.

Target stack: **Next.js (App Router) + TypeScript**, deployed to **Vercel** from the GitHub `main` branch.

## About the Design Files
`Thai Jet Asia App.dc.html` in this bundle is a **design reference prototype written in HTML** —
it shows the intended look and behavior. It is **not production code to copy**. Recreate the screen
as React components in the Next.js app using its own conventions (App Router, CSS Modules /
Tailwind / styled-components — whatever the repo already uses). If the repo is empty, scaffold with
`npx create-next-app@latest --typescript`.

## Fidelity
**High-fidelity.** Colors, type sizes, spacing, radii, shadows and copy below are final — match them.

## Screens / Views
Single screen (one route, `/`). Two states: **search form only** → after search, **form + results list**.

### Device frame (prototype only)
The prototype centers a 390px-wide rounded card (radius 38px) on a `#e9ecf1` page to simulate a phone.
In the real app this is a normal full-viewport mobile page: page background `#f2f4f7`, content max-width 430px centered.

### 1. App bar (white, `#fff`, padding 16px 18px 0, bottom shadow `0 1px 0 rgba(22,30,60,.07)`)
- **Hamburger (left)** — three 19×2px bars, `#1f2d5e`, 4.5px gap, 4px padding, radius 6px,
  hover background `rgba(31,45,94,.08)`. **Action: reset** (see Interactions).
- **Logo (center)** — `assets/tja-wordmark.png`, height **39px**. The source PNG has a thin grey frame;
  the prototype crops it with `clip-path: inset(4% 1.2%)`. Prefer shipping a pre-cropped/transparent asset.
- **Account icon (right)** — 26×26 line icon: circle cx12 cy8 r4 + shoulder arc
  `M4.5 20c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5`, stroke `#54607d`, width 1.7, round caps. Decorative.

### 2. Tab row (3 equal columns, 13px/600, bottom border `1px rgba(22,30,60,.09)`)
- `จองเที่ยวบิน` — active: color `#1f2d5e`, 2.5px bottom border `#1f2d5e`, `margin-bottom:-1px`.
- `เช็คอิน` — inactive, `#9aa4ba`, weight 500. (Decorative in the top bar.)
- `จัดการการจอง` — inactive, same style.
Padding per tab: 10px 0 11px, text-align center.

### 3. Search card
White, radius 16px, padding 14px 16px 16px, shadow `0 2px 10px rgba(22,30,60,.07), 0 0 0 1px rgba(22,30,60,.05)`.
- Row 1: grid `1fr 40px 1fr`, gap 6px, items centered.
  - **Origin block** (left aligned): label `ขาไป` (10.5px/500, `#8892a8`, letter-spacing .3px);
    city name **editable**, 21px/600, `#1b2650`, default `สกลนคร`; IATA code **editable**,
    11.5px/500, `#96a0b5`, letter-spacing 1px, default `SNO`. Column gap 3px.
  - **Swap button**: 38×38 circle, background `#f0f3f9`, border `1px rgba(35,48,107,.12)`,
    glyph `⇄` 15px/600 `#25336f`, hover background `#e3e9f6`.
  - **Destination block**: same as origin but `text-align:right`, label `ไปยัง`,
    defaults `ดอนเมือง` / `DMK`.
- Divider: 1px `rgba(22,30,60,.09)`, margin 12px 0.
- Row 2: grid `1fr 1fr`, gap 14px.
  - `วันที่เดินทาง` — editable value 16px/600 `#1b2650`, default `15 ก.ย. 2569` (Buddhist era).
  - `จำนวนผู้โดยสาร` — editable value 16px/600, default `1 คน`.
- **Search button**: margin-top 18px, full width, radius 12px, padding 15px 0, centered
  `ค้นหาเที่ยวบิน` 16px/600 `#fff`, background `linear-gradient(180deg,#2a3a7d,#1e2a5c)`,
  shadow `0 6px 16px -6px rgba(30,42,92,.65)`; hover `linear-gradient(180deg,#31438f,#233268)`,
  active `transform: translateY(1px)`.

### 4. Results header (only after search)
- `เที่ยวบินขาไป` 12px/600 `#25336f`.
- Route line 15.5px/600 `#1b2650`: `"{origin} — {destination}"` read from the (possibly edited) fields.
- Meta line 11.5px/400 `#8892a8`: `"{date} · {passengers} · {n} เที่ยวบิน"`.
- **Sort pill** (right): white, border `1px rgba(35,48,107,.16)`, radius 20px, padding 8px 12px,
  11.5px/600 `#25336f`; label toggles `⇅ เรียงตามเวลา` ↔ `⇅ เรียงตามราคา`.

### 5. Flight card ×8 (gap 10px)
White, radius 14px, padding 12px 14px, shadow `0 1px 6px rgba(22,30,60,.07), 0 0 0 1px rgba(22,30,60,.05)`;
hover `0 6px 18px -8px rgba(22,30,60,.35), 0 0 0 1px rgba(35,48,107,.18)`.
Grid `44px 1fr auto`, gap 12px, centered. Entry animation: `tjaIn` — opacity 0→1,
translateY(10px)→0, .32s ease both.
- **Airline mark**: `assets/tja-mark.png`, width 44px.
- **Middle**: times row — departure & arrival **editable**, 17px/600 `#1b2650`, separated by a
  26×1px `#c6cede` line, gap 8px. Meta row 10.5px/400 `#8892a8`, gap 8px:
  flight code · origin IATA · `→` · destination IATA · duration (all editable except the arrow).
- **Right**: `เริ่มต้น` 9.5px/400 `#8892a8` above **editable** price 16px/700 `#25336f`;
  chevron `›` 15px/600 `#b6bfd2`.
- Footnote under the list, centered, 11px/400 `#96a0b5`:
  `ราคารวมภาษีและค่าธรรมเนียม · แตะที่ข้อความใดก็ได้เพื่อแก้ไข`.

### 6. Bottom nav (fixed to the frame bottom)
Background `rgba(255,255,255,.96)`, `backdrop-filter: blur(8px)`, top border `1px rgba(22,30,60,.09)`,
padding 9px 8px 18px, 4 equal columns, 10px labels, icon 15×15 above label (gap 5px).
- `ค้นหา` — active, `#25336f`, weight 600, circle icon (2px border).
- `การจองของฉัน` — `#9aa4ba`, 14×15 rounded-rect icon.
- `เช็คอิน` — **Action: toggle edit lock** (see Interactions). Hover color `#1f2d5e`.
- `เพิ่มเติม` — `#9aa4ba`, `···` glyph.

## Interactions & Behavior
1. **Search** — tapping `ค้นหาเที่ยวบิน` reads the current text of the 4 fields (+ the two IATA codes)
   into trip state and reveals the results list with 8 cards. Re-tapping re-reads the fields.
2. **Inline editing** — all values listed as *editable* use `contentEditable` and are **uncontrolled**:
   never re-render them from state while typing (it moves the caret). Read `textContent` on demand.
   Styling of editable text: `outline:none; cursor:text; border-radius:3px; transition: background .12s`;
   hover `background: rgba(35,48,107,.08); box-shadow: 0 0 0 2px rgba(35,48,107,.08)`;
   focus `background: rgba(35,48,107,.06); box-shadow: 0 0 0 2px rgba(35,48,107,.45)`.
   In React add `suppressContentEditableWarning`.
3. **Swap** — the circular `⇄` swaps origin↔destination city AND IATA code by swapping the DOM
   text of the two pairs; if results are already shown it re-runs search so the header updates.
4. **Edit lock** — bottom-nav `เช็คอิน` toggles `locked`. When locked every editable element gets
   `contentEditable={false}` (so hover/focus highlights disappear and text can't be changed);
   blur the active element when locking. No status badge is shown — the toggle is silent by design.
5. **Reset** — the hamburger restores the 4 fields (and IATA codes) to their defaults, hides the
   results, resets sort to time, unlocks editing, and scrolls to top. Because results unmount,
   any edits inside flight cards are discarded on reset.
6. **Sort** — the pill toggles time order (source order) ↔ ascending price (numeric `n`).
7. Cards, tabs and nav items are otherwise non-navigating (film prop — no routes beyond `/`).

## State Management
```ts
type Trip = { origin: string; dest: string; oc: string; dc: string; date: string; pax: string };
const [searched, setSearched] = useState(false);
const [sort, setSort] = useState<'time' | 'price'>('time');
const [trip, setTrip] = useState<Trip | null>(null);
const [locked, setLocked] = useState(false);
```
Field values live in the DOM (refs to the contentEditable nodes), not in state.
Refs needed: origin, originCode, dest, destCode, date, pax. No data fetching — flight data is a
local constant array (see `flights.ts` below). Optional: persist edited flight rows to
`localStorage` so a reload on set keeps the prop's text.

### Seed data
```ts
export const FLIGHTS = [
  { dep: '06:20', arr: '07:50', code: 'TJ 1410', dur: '1 ชม. 30 น.', price: '฿1,490', n: 1490 },
  { dep: '08:05', arr: '09:35', code: 'TJ 1412', dur: '1 ชม. 30 น.', price: '฿1,390', n: 1390 },
  { dep: '09:40', arr: '11:10', code: 'TJ 1414', dur: '1 ชม. 30 น.', price: '฿1,540', n: 1540 },
  { dep: '11:00', arr: '12:30', code: 'TJ 1416', dur: '1 ชม. 30 น.', price: '฿1,590', n: 1590 },
  { dep: '13:15', arr: '14:45', code: 'TJ 1418', dur: '1 ชม. 30 น.', price: '฿1,650', n: 1650 },
  { dep: '14:45', arr: '16:20', code: 'TJ 1420', dur: '1 ชม. 35 น.', price: '฿1,690', n: 1690 },
  { dep: '17:25', arr: '18:55', code: 'TJ 1422', dur: '1 ชม. 30 น.', price: '฿1,790', n: 1790 },
  { dep: '19:50', arr: '21:20', code: 'TJ 1424', dur: '1 ชม. 30 น.', price: '฿1,890', n: 1890 },
];
```

## Design Tokens
**Colors** — navy ink `#1b2650`; brand navy `#1f2d5e`; accent navy `#25336f`;
button gradient `#2a3a7d → #1e2a5c` (hover `#31438f → #233268`); muted text `#8892a8`;
inactive `#9aa4ba`; code grey `#96a0b5`; chevron `#b6bfd2`; divider line `#c6cede`;
hairline `rgba(22,30,60,.09)`; surface `#fff`; app background `#f2f4f7`; page behind frame `#e9ecf1`;
swap chip `#f0f3f9` (hover `#e3e9f6`); account icon `#54607d`.
**Type** — `'IBM Plex Sans Thai'` for Thai/UI copy, `'IBM Plex Sans'` for times/codes/prices,
weights 400/500/600/700. Scale: 9.5 / 10 / 10.5 / 11 / 11.5 / 12 / 13 / 15.5 / 16 / 17 / 21 px.
In Next.js load both via `next/font/google`.
**Spacing** — 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18 px; screen padding 14px; bottom padding 96px (nav clearance).
**Radius** — 3 (editable), 6, 12 (button), 14 (flight card), 16 (search card), 20 (pill), 38 (device frame), 50% (circles).
**Shadows** — listed per component above.

## Assets
- `assets/tja-wordmark.png` — horizontal THAI JET Asia lockup, used in the app bar (user-supplied).
  Has a thin grey frame in the source file; crop or re-export with transparency.
- `assets/tja-mark.png` — tall mark + wordmark, used inside each flight card (user-supplied).
Both are the user's own brand files — keep them; don't substitute stock logos.
Icons (hamburger, account, nav, chevron, arrows) are CSS boxes / inline SVG / text glyphs, no icon library needed.

## Files
- `Thai Jet Asia App.dc.html` — the design reference prototype (open in a browser; it self-renders).
- `assets/tja-wordmark.png`, `assets/tja-mark.png` — brand assets.

## Suggested Next.js structure
```
app/layout.tsx          fonts (IBM Plex Sans Thai + IBM Plex Sans), lang="th"
app/page.tsx            'use client' — screen + all state
components/AppBar.tsx   hamburger (reset) · logo · account icon · tab row
components/SearchCard.tsx   4 editable fields + swap + search button
components/FlightCard.tsx   one result row
components/BottomNav.tsx    4 items, เช็คอิน = lock toggle
components/Editable.tsx     contentEditable wrapper (ref, locked, defaultValue)
lib/flights.ts          FLIGHTS seed array
public/brand/*.png      assets
```
Deploy: push to `main` on GitHub → import the repo in Vercel → framework preset Next.js, no env vars needed.
