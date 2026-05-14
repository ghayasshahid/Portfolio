# Ghayas Shahid — Portfolio Website

## Goal
Position me as an AI-powered MERN developer who ships production-grade apps.
Not just a student — someone ready to work tomorrow.
Every word should make a hiring manager think "this person ships real things."

## About Me
- Name: Ghayas Shahid
- CS Student at FAST NUCES, Lahore (2023–Present, 4th year)
- Email: ghayasshahid12@gmail.com
- LinkedIn: https://www.linkedin.com/in/ghayasshahid1/
- GitHub: https://github.com/ghayasshahid
- WhatsApp: +923019106147
- I build full-stack MERN apps with AI features integrated from day one

## Tone & Messaging Rules
- Sound confident, not desperate
- IMPACT over features — bad: "built a portal", good: "eliminated double-bookings with real-time conflict detection"
- AI angle = smart features in MERN apps, not data science / ML pipelines
- Never say "I am a student" — say "CS student building production-grade apps"
- Tagline: "Full-Stack Developer. AI-Powered Products. Real Impact."

## Tech Stack (MERN is priority)
- Frontend: React.js, Next.js, HTML/CSS
- Backend: Node.js, Express.js
- Databases: MongoDB, PostgreSQL, Firebase
- Mobile: Flutter, SwiftUI
- Languages: JavaScript, Python, C/C++, SQL, Swift
- AI angle: AI-driven features, smart matching, intelligent APIs
- Tools: Git, VS Code, Vercel, Postman

## Projects
1. Interngram — AI-driven internship portal (React, Node.js, MongoDB, ML, JWT)
2. VenueFlow — Venue booking with real-time conflict detection (React, Node, PostgreSQL)
3. KhelKood — Sports matchmaking app (Flutter, Firebase)
4. Restaurant Manager — Unified ops dashboard (React, Node, MongoDB)
5. Solitaire — C++ game engine with OOP/STL
6. Alphabet Catcher — x86 Assembly arcade game

## Awards & Certificates
- High Achiever Award — 8 A* and A grades, O-Levels
- Harvard CS50x Certificate of Excellence
- Harvard CS50 Python Certificate
- Machine Learning — Kaggle Certificate
- iOS App Development Bootcamp — Angela Yu
- Sr Vice President — NUCES CBS (Character Building Society)
  Organized speaker sessions and interactive programs for student wellbeing

## Sections Order
1. Hero — name, tagline, availability badge, CTAs
2. About — 3 paras, MERN + AI focus, confident tone
3. Tech Stack — MERN row first, then languages, mobile/AI, tools
4. Selected Work — 6 project cards with GitHub links
5. Awards & Certificates — list, O-Levels on top
6. Contact — Email, LinkedIn, WhatsApp, GitHub

---

## Design System (copy this into any future project)

### Stack
Vanilla HTML + CSS + JavaScript only. No frameworks. Fast, zero dependencies.

### Colors — always as CSS custom properties
```css
:root {
  --bg:        #0a0a0f;   /* near-black base */
  --bg-alt:    #0d0d1a;   /* alternating sections */
  --bg-card:   #0f0f1c;   /* card surfaces */
  --teal:      #64ffda;   /* primary accent, all interactive highlights */
  --purple:    #7b5ea7;   /* secondary accent, borders, subtle glows */
  --text:      #ccd6f6;   /* body text */
  --text-dim:  #8892b0;   /* muted labels */
  --white:     #e8f1ff;   /* headings, strong elements */
  --ease:      cubic-bezier(0.16, 1, 0.3, 1);  /* snappy ease-out */
  --r:         10px;
}
```
Use `rgba()` variants for borders/glows — never solid teal or purple borders.

### Fonts — three roles, never mixed
- **Syne** (700/800) — display only: hero name, big headings. Tight tracking (`-0.03em`).
- **Space Grotesk** (400–700) — body, nav, buttons, section titles.
- **JetBrains Mono** (400/500) — labels, chips, terminal, section numbers.
- Size: always `clamp()` for headings, never fixed `px`.

### Background Texture
**Dot grid** on hero via `::before`:
```css
background-image: radial-gradient(circle, rgba(100,255,218,0.04) 1px, transparent 1px);
background-size: 44px 44px;
```
**Noise grain** — fixed SVG, full page, `z-index: 9000`, `opacity: 0.036`:
```html
<svg class="noise-svg" aria-hidden="true" focusable="false">
  <filter id="noise-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise-filter)"/>
</svg>
```

### Ambient Orbs (hero depth)
Three divs: `border-radius:50%`, `filter:blur(88px)`, slow float animation.
Teal top-right, purple bottom-left, small teal mid. Opacity below 0.6.
```css
@keyframes floatOrb {
  0%,100% { transform: translate(0,0); }
  33%     { transform: translate(28px,-18px); }
  66%     { transform: translate(-18px,12px); }
}
```

### Scroll Reveal
One `IntersectionObserver`, `threshold: 0.1`. Add class `.in` to trigger.
Use `--delay` custom property on elements for stagger. One-shot (unobserve after trigger).
```css
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
  transition-delay: var(--delay, 0s);
}
.reveal.in { opacity: 1; transform: translateY(0); }
```

### Custom Cursor (desktop only)
`cursor-dot` (5px, instant) + `cursor-ring` (36px, lerped at 0.22).
Guard with `window.matchMedia('(hover: hover)')`. Ring uses `mix-blend-mode: difference`.
Expand ring on hover over interactive elements.

### Magnetic Buttons
On `.magnetic` elements, pull toward cursor at 28% delta. Reset on mouseleave.
```js
const dx = (e.clientX - (r.left + r.width/2)) * 0.28;
const dy = (e.clientY - (r.top + r.height/2)) * 0.28;
el.style.transform = `translate(${dx}px,${dy}px)`;
```

### Typing Effect (hero)
Array of phrases, cycle with type→pause→delete→next. Type at 46ms/char,
delete at 22ms/char, pause 2.6s on complete. ~25 lines vanilla JS, no library needed.

### Cards
- Border `1px solid rgba(123,94,167,0.15)` at rest → teal on hover
- `translateY(-5px)` + teal box-shadow on hover
- `::before` pseudo = 2px gradient top bar (`teal→purple`), `scaleX(0→1)` on hover
- Ghost number: oversized Syne numeral, `opacity:0.025`, absolute top-right
- Clickable: empty `<a class="card-link">` absolutely positioned at `z-index:1`, content at `z-index:2`

### Marquee
Duplicate chips twice in track, animate `translateX(0→-50%)`.
Alternate rows use `animation-direction:reverse`. Pause on hover.
Mask edges: `mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`.

### Terminal Widget
Fake macOS terminal. Three dots, filename bar, syntax-colored spans:
`.tc` comment (dim italic) · `.tk` key (teal) · `.to` operator (purple) · `.tv` value (amber) · `.tv.teal` boolean true.
Always `overflow-x: auto` on body.

### Scroll Indicator
SVG chevron only — no text. Bounces down with `translateY(0→6px)` keyframe.
`pointer-events: none`. Avoids layout collision with CTA buttons.

### Nav
Transparent → `rgba(10,10,15,0.85)` + `backdrop-filter:blur(16px)` after 50px scroll.
Scrollspy via `IntersectionObserver` at `threshold:0.35`.
Mobile: hamburger with `max-height` slide transition.

### Mobile Rules
- Contact CTAs: `grid; grid-template-columns: 1fr 1fr`, primary spans full width
- Stat cards: `min-width:0` to prevent overflow, reduce font-size on tiny screens
- `webkit-text-stroke`: 1.5px on mobile vs 2px desktop
- NEVER `cursor:none` on touch — always guard with `(hover:hover)`
- Section padding: 110px desktop → 80px mobile

### Coding Rules
- GPU-only animations: `transform` and `opacity` only — never animate `height`, `width`, `top`, `left`
- All easing uses `--ease: cubic-bezier(0.16,1,0.3,1)` — snappy, not floaty
- No animation libraries — everything in vanilla CSS keyframes + JS
- `will-change: transform` on cursor elements only
- Mobile first always
- No comments explaining what code does — only comments for non-obvious WHY
