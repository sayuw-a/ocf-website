---
name: OCF at UVA
description: The public site for Orthodox Christian Fellowship at UVA — a warm, unhurried threshold into the Church's life on Grounds.
colors:
  beeswax-amber: "#b45309"
  beeswax-amber-deep: "#92400e"
  paper-cream: "#f5efe4"
  surface-white: "#ffffff"
  ink-stone: "#1c1917"
  body-stone: "#44403c"
  border-stone-light: "#e7e5e4"
  border-stone: "#d6d3d1"
  deep-navy: "#183b67"
  deep-navy-footer: "#152f52"
  moss-kicker: "#064e3b"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.6rem, 4vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  body:
    fontFamily: "'Alegreya Sans', 'Avenir Next', 'Segoe UI', sans-serif"
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.82
  label:
    fontFamily: "'Alegreya Sans', 'Avenir Next', 'Segoe UI', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  pill: "9999px"
  lg: "30px"
  md: "24px"
  sm: "18px"
spacing:
  gap-sm: "1rem"
  gap-md: "1.5rem"
  gap-lg: "2.5rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.beeswax-amber}"
    textColor: "{colors.paper-cream}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.beeswax-amber-deep}"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-stone}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  panel:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "24px 32px"
---

# Design System: OCF at UVA

## 1. Overview

**Creative North Star: "The Open Door"**

The site is a threshold, not a pitch. Someone arriving here should feel the same thing they'd feel stepping into the narthex before a service: warm light, unhurried pacing, nothing demanding a decision before they've had a chance to look around. The palette stays close to candlelight and cream paper rather than screen-bright color; typography pairs a quiet serif for headings with a plain, legible sans for everything the reader actually has to read. Decoration is rare and always has a reason — a soft shadow under a photograph, a warm border around a panel — never a gradient or an icon added because a section "needed something."

The system explicitly rejects two failure modes: the generic SaaS landing page (gradient hero banners, bold sans-only headlines stacked over feature-grid cards, urgency-driven CTA copy) and the corporate megachurch site (stock worship-band photography, stage lighting, salesy calls to action). Both read as performance; this site should read as an honest description of a place that already exists, told plainly enough that showing up feels like the obvious next step.

**Key Characteristics:**
- Warm cream paper background, never stark white or dark-mode black
- One confident accent (amber) used sparingly — buttons and links, not backgrounds
- Serif display type for headings, humanist sans for body copy — a quiet, literary pairing
- Generous rounded corners (18–30px) throughout; no sharp rectangles, no pills-everywhere either
- Shadows are soft and warm-toned, reserved for photography and floating panels
- Deep navy appears only as a structural band (nav, footer) — it frames the page, it doesn't accent it

## 2. Colors

The palette is deliberately narrow: one warm neutral surface, one confident accent, and a small set of supporting neutrals that includes a structural dark navy. Nothing else competes for attention.

### Primary
- **Beeswax Amber** (`#b45309`): The single accent color. Used on primary buttons, inline text links, and small emphasis marks (external-link underlines, hover states). It should read as candle-warm, not corporate-orange — reserve it for things the user can act on.
  - **Beeswax Amber, Deep** (`#92400e`): Hover/active state for the primary accent only. Never used at rest.

### Neutral
- **Paper Cream** (`#f5efe4`): The body background — a warm off-white layered with two soft radial/linear gradients (near-white top glow fading into a slightly deeper cream toward the bottom). This is the room's ambient light, not a flat fill.
- **Surface White** (`#ffffff`, typically at 70–90% opacity over the cream): Card and panel backgrounds — `page-panel`, `start-card`, `home-proof-card`. Always translucent over the cream, never fully opaque white; the paper should still read through.
- **Ink Stone** (`#1c1917`, Tailwind `stone-900`): Primary text color for headings and high-emphasis copy.
- **Body Stone** (`#44403c`, Tailwind `stone-700`/`800` depending on context): Body copy and secondary text — never lighter than this for anything a visitor is expected to read.
- **Border Stone** (`#d6d3d1` / `#e7e5e4`, Tailwind `stone-300`/`200`): Hairline borders on panels, dividers between list items and sections.
- **Deep Navy** (`#183b67` nav / `#152f52` footer): A structural neutral, not an accent — it exists only as the full-bleed band that opens and closes the page (sticky nav, footer). It never appears as a text color, button fill, or small UI element; its job is to frame the cream page between two quiet dark bookends.
- **Moss Kicker** (`#064e3b`, Tailwind `emerald-900`, used at reduced opacity): A quiet secondary mark reserved for small uppercase kicker labels (hero eyebrow, "quick answers" labels). Treat it as a neutral utility color, not a second brand accent — it should never compete with amber for attention.

### Named Rules
**The One Accent Rule.** Beeswax Amber is the only color used to signal "you can act on this." If a new element needs to draw the eye toward an action, it earns amber; if it's just informative, it stays in the neutral stone/navy range. Do not introduce a second "bright" color for emphasis.

**The Navy Bookend Rule.** Deep Navy is structural, not decorative. It appears exactly twice per page — the top nav band and the footer band — and nowhere else. A navy button, navy card, or navy text color is always wrong.

## 3. Typography

**Display Font:** Newsreader (serif), falling back to Georgia, then Times New Roman
**Body Font:** Alegreya Sans, falling back to Avenir Next, then Segoe UI

**Character:** A quiet literary pairing — a warm-humanist serif for anything the eye should land on first, a plain, highly legible sans for anything meant to be read at length. Neither face is loud; the contrast between them, not the boldness of either, is what creates hierarchy.

### Hierarchy
- **Display** (600 weight, `clamp(2.6rem, 4vw, 4.5rem)`, line-height 0.96, letter-spacing -0.02em): Page titles and the homepage hero headline. Always paired with `text-wrap: balance` so lines break evenly.
- **Headline** (600 weight, `clamp(2rem, 3vw, 3rem)`, line-height 1.02, letter-spacing -0.018em): Section headings within a page.
- **Title** (600 weight, ~1.4–1.5rem, line-height ~1.1): Card and panel headings (officer names, event titles, FAQ summaries) — still serif, one step down from Headline.
- **Body** (400 weight, 1.06rem, line-height 1.82, max 62ch): Paragraph copy. The generous line-height and capped measure are deliberate — this is a site meant to be read unhurried, not skimmed.
- **Label** (500 weight, 0.72–0.8rem, letter-spacing 0.14–0.18em, uppercase): Kicker text only (hero eyebrow, quick-answer terms). Always paired with Moss Kicker or Amber color, never plain stone.

### Named Rules
**The Serif-Leads Rule.** Every heading-level element uses the display serif; body copy never does. A sans-serif heading or a serif paragraph both break the pairing's logic.

## 4. Elevation

Flat by default. Most surfaces — panels, cards, buttons, nav — carry a hairline border instead of a shadow. Shadows appear in exactly one context: lifting photography and a small number of floating panels off the page, always in a warm, low-contrast brown tone rather than neutral black. A shadow on a plain content card or button would be a mistake here; borders and translucent white fills carry that job instead.

### Shadow Vocabulary
- **Photo Lift** (`box-shadow: 0 10px 22px rgba(90, 68, 38, 0.08)`): Under framed photographs (`home-hero-photo`, `home-story-photo`). The warm brown tint keeps it from reading as generic UI drop-shadow.
- **Note Lift** (`box-shadow: 0 10px 20px rgba(90, 68, 38, 0.08)`): Under small floating callouts layered on top of a hero photo (`home-hero-note`).

### Named Rules
**The Photography-Only Rule.** Shadows exist to lift images and the rare floating note off the page. Cards, panels, and buttons stay flat with a border instead — never add a shadow to a card just to give it "depth."

## 5. Components

### Buttons
- **Shape:** Fully rounded pill (`border-radius: 9999px`)
- **Primary:** Beeswax Amber background, cream text, medium weight, `px-6 py-3`. Hover deepens to Beeswax Amber Deep. This is the only button style that carries fill color — it marks the one action per section that matters most.
- **Secondary:** Translucent white/stone-50 background, hairline stone-300 border, stone-800 text. Hover shifts the border and background toward warm amber tints rather than darkening — it should feel like it's warming up, not just "less important."
- **Focus:** All buttons use a 2px amber outline with offset on `:focus-visible`, matching whichever variant's amber tone is closest.

### Cards / Panels
- **Corner Style:** Large, soft radii — 24–30px depending on size (hero shells largest, small notes smallest). Never sharp corners.
- **Background:** Translucent white (70–90% opacity) over the cream page background — the paper always reads through slightly.
- **Shadow Strategy:** None by default (see Elevation). A hairline `stone-200/90` border does the separation work instead.
- **Internal Padding:** Generous — `p-6 sm:p-8` for primary panels, `p-5 sm:p-6` for secondary/soft panels.

### Navigation
- **Style:** Full-bleed Deep Navy band, sticky to the top of the viewport. Logo set in the display serif at `2rem`. Links are pill-shaped on hover/active (a subtle white-tinted fill), never underlined.
- **Active state:** Active link gets a faint amber-tinted fill (`bg-amber-50/12`) and brightens text to a warm off-white — restrained, not a bold color change.
- **Mobile:** Collapses to a single menu button (pill-bordered, top-right) that expands a stacked link list inline below the bar, same navy background.

### Disclosure (FAQ)
- **Style:** `<details>`/`<summary>` pairs inside a bordered, rounded panel matching the standard card treatment. The expand affordance is a plain `+` glyph in amber that rotates 45° to become a `×` on open — no chevron icon, no extra decoration.

### Photography
- **Frame:** Rounded corners (20–22px), a thin white/80 border, and the Photo Lift shadow. Photos are placed asymmetrically (large + small overlapping pair in the hero) rather than in a uniform grid — this is the one place the layout is allowed to feel a little informal, like snapshots pinned up rather than a stock photo gallery.

## 6. Do's and Don'ts

### Do:
- **Do** keep Beeswax Amber (`#b45309`) as the only "actionable" color — buttons and links, nothing else.
- **Do** use the display serif (Newsreader) for every heading level and the humanist sans (Alegreya Sans) for every paragraph; never swap them.
- **Do** cap body copy at 62ch and use generous line-height (1.75–1.82) — the site is meant to be read unhurried.
- **Do** keep Deep Navy confined to the nav and footer bands only.
- **Do** use soft, warm-toned shadows (`rgba(90, 68, 38, ...)`) only under photography and floating notes; leave cards and panels flat with a hairline border.
- **Do** let photography sit asymmetrically and slightly informally (overlapping frames, uneven sizes) rather than in a uniform grid.

### Don't:
- **Don't** build a generic SaaS landing page: no gradient hero banners, no bold sans-only headline stacks, no feature-grid card walls, no urgency-driven CTA copy ("Don't miss out!", "Limited spots!").
- **Don't** reach for corporate-megachurch signals: no stock worship-band photography, no stage lighting, no salesy CTA language.
- **Don't** add a second bright accent color alongside amber; Moss Kicker stays a quiet neutral utility, not a brand color.
- **Don't** use `border-left`/`border-right` as a colored accent stripe (the current `.home-moment-item` left-border is a legacy exception, not a pattern to repeat elsewhere).
- **Don't** add drop shadows to cards, panels, or buttons — flat-plus-border is the system, shadows are reserved for photography.
- **Don't** use sharp/unrounded corners anywhere; the softest radius in the system is 18px.
