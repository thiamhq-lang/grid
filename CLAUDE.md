# Project notes for Claude

Portfolio homepage for Nabeela (digital design student, Yrgo). Plain HTML/CSS/JS, no framework, no build step.

## Source of truth: Figma
- File: https://www.figma.com/design/dxjd7ioEeHb3gU9r0Wq4tH/Portfolio-Nabeela
- Final pages: **Ready design › Homepage** section (Homepage - desktop 1440, Homepage - mobile 375).
- Components: **Design Foundations › Blocks**, **Cards & links**, and **Work in progress** (newest class work).
- Always read the Figma **annotations** (Dev Mode, tag "Interaction") for behaviour.
- Make a plan before building. Keep one topic per chat.

## Design tokens (mirror the Figma variables)
- Colours: background `#F6F4F0`, text `#111111`, secondary text 62% black, borders 18% black.
- Breakpoint: desktop ≥ 768px (12 cols, margin 32, gap 32, gap-lg 80); mobile < 768px (6 cols, margin 16, gap 16, gap-lg 40).
- Type: Heading 128/60, Subheading 32/24, Body 24/20, Link L 48/32, Link S 24/20 (desktop/mobile).
  Headings Inter Bold (stand-in for Satoshi), everything else DM Mono.
- Image ratios: 16:9, 4:5, 5:4. Corner radius 0.

## Conventions
- All tokens live at the top of `css/styles.css`. Use them, never hard-code colours or sizes.
- Grid placement uses `grid-column` with the same spans as the Figma components.
- Images: put originals in `images/originals/`, run `python3 scripts/build-images.py`, use `<picture>` with WebP + JPEG `srcset`. Lazy-load anything below the first screen.
- Slider controls: `#arrow_back` / `#arrow_forward`, one card per step, disabled at the ends, hidden on phones.
  On phones, tapping the outer 25% left/right of the slider moves one card.
- Live site: GitHub Pages from `main` (or `gh-pages`) at https://thiamhq-lang.github.io/grid/
- Keep it accessible: alt text, labelled buttons, visible focus, respect `prefers-reduced-motion`.
