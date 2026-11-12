# Nabeela — Portfolio

Portfolio homepage for Nabeela, a digital designer based in Gothenburg.
Designed in Figma and built with plain HTML, CSS and JavaScript (no framework, no build step).

**Design file:** [Figma › Ready design › Homepage](https://www.figma.com/design/dxjd7ioEeHb3gU9r0Wq4tH/Portfolio-Nabeela?node-id=89-171)

## Run it

Open `index.html` in a browser, or run a local server from the project folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Features

- **Responsive 12 / 6-column grid.** 12 columns with 32px margins and gaps on desktop, 6 columns with 16px on phones (breakpoint at 768px).
- **Design tokens from Figma.** The CSS custom properties in `css/styles.css` mirror the Figma variables (colours, type sizes, margins, gaps), so desktop and mobile switch the same way the `Breakpoint` mode does in Figma.
- **Project slider.** Cards are 8 of 12 columns wide on desktop (4 of 6 on phones) and snap to the grid with CSS scroll snapping. On desktop the ← → buttons move one card at a time and turn grey when there's nowhere left to go, as described in the Figma annotations. On phones you swipe. Arrow keys work when the slider has focus.
- **Responsive images.** Every photo is served as WebP with a JPEG fallback in several widths (`<picture>` + `srcset` + `sizes`), so each device downloads only the size it needs. Images below the first screen are lazy-loaded, and every image has its width and height set to avoid layout jumps.
- **Accessibility.** Semantic landmarks, skip link, visible keyboard focus, alt text, labelled buttons, and reduced motion respected.

## Project structure

```
index.html              Page markup (sections match the Figma components)
css/styles.css          Design tokens + layout + components
js/main.js              Slider controls and phone menu
images/originals/       Full-size original photos
images/*.webp|jpg       Generated web sizes (don't edit by hand)
scripts/build-images.py Makes the web sizes from the originals
```

## From Figma to code

| Figma component | Code |
|---|---|
| Navigation | `<header>` + `.nav` (phone: Menu button) |
| Title Section | `.title` |
| Text Section | `.text` |
| Gallery Grid (Media Cards 16:9, 4:5, 5:4) | `.gallery` + `.media .r-16-9 / .r-4-5 / .r-5-4` |
| List Section | `.list` |
| About Section | `.about` |
| Gallery Slider + Slider controls | `.slider` + `.controls` (`#arrow_back`, `#arrow_forward`) |
| Link Footer (Link Wide) | `.footer` |

## Updating images

1. Put the new full-size photo in `images/originals/` (JPEG or PNG).
2. Run `python3 scripts/build-images.py` (needs `pip install Pillow`).
3. Point the `<picture>` in `index.html` at the new file name and widths the script prints.

## Still to do

- Replace placeholder text (skills, tools, experience, about) and the portrait.
- Replace the placeholder photos with real project images.
- Self-host Satoshi for headings (Inter is used as a stand-in).

## Credits

Placeholder photos via [Lorem Picsum](https://picsum.photos) (Unsplash).
