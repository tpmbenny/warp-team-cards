# Warp Engineering Team Cards (local prototype)

This is a static, fully client-side page that recreates the look of the “Warp Eng Team.png” and adds an interactive flip for each engineer’s card.

- Front of each card: exact visual slice of the original PNG (you’ll export slices once).
- Back of each card: bio bullet points and LinkedIn link (opens in a new tab).
- Hover (desktop) / focus (keyboard) / tap (touch) flip the card. Leaving/unfocusing flips it back; tapping outside closes it.

## Files

- index.html — Page skeleton and 5 team sections (Code, Agents, Revenue, Quality, Warp 3)
- styles.css — Global styles, starry background, responsive grid, and 3D flip cards
- app.js — Data (names, bullets, LinkedIn) and rendering/interaction logic
- assets/
  - Warp Eng Team.png — the original reference image (place here)
  - fronts/ — put your sliced card-front PNGs here (see below)

## Run locally

- Just open index.html in your browser. No build step or server is required because data is inline in app.js.
- If you later externalize the data to a JSON file, most browsers will block `file://` fetches. In that case, run a tiny local server (e.g., `python -m http.server`) and visit http://localhost:8000.

## Slicing the card fronts (pixel-perfect)

1) Open `assets/Warp Eng Team.png` in any graphics editor (Preview, Figma, Photoshop, GIMP, etc.).
2) For each visible engineer card, draw a tight rectangular crop around the card edges (include the whole card; exclude the gaps).
3) Export each as PNG (keep original resolution; 2x/export only if quality holds).
4) Save into `assets/fronts/` with these exact filenames:

Code
- code-aloke-d.png
- code-kevin-c.png
- code-abhi-p.png
- code-kevin-y.png
- code-pei.png
- code-lucie-l.png
- code-moira-h.png
- code-jordan-p.png

Agents
- agents-advait-m.png
- agents-zach-b.png
- agents-roland-h.png
- agents-ben-h.png
- agents-david-s.png
- agents-harry-a.png
- agents-maggie-s.png

Revenue
- revenue-jeff-l.png
- revenue-andrew-s.png
- revenue-tyler-l.png
- revenue-andy-c.png

Quality
- quality-suraj-g.png
- quality-daniel-p.png
- quality-matt-a.png
- quality-lili.png

Warp 3
- warp3-ben-n.png
- warp3-ian-h.png

Once these files exist, reload index.html — the fronts will display exactly as in the PNG.

## Font and background

- Font stack is web-safe: "Trebuchet MS", "Segoe UI", Tahoma, Arial, sans-serif — visually similar to Space Grotesk while avoiding a network font.
- Background is a CSS-only starry sky approximation (no image dependency) per your request.

## Accessibility and behavior

- Cards are focusable buttons (role=button, tabindex=0) with aria-pressed tracking the flipped state.
- Keyboard: Enter/Space toggles, Escape closes any open card, focus flips (mirrors hover), blur flips back.
- Touch: tapping a card toggles; tapping outside closes.
- LinkedIn links open in a new tab with `rel=noopener`.
- Respects `prefers-reduced-motion` by disabling the flip transition.

## Editing bios and links

- All data is defined in `app.js` in the `TEAM_DATA` constant. Update bullets or LinkedIn URLs there.
- Only engineers present in the PNG are included (others from the DOCX are intentionally omitted).

## Notes

- If a specific slice has a different height/width ratio, you can set a per-card aspect ratio:
  - Add a `ratio` to that member in `TEAM_DATA`, then apply it as an inline style (e.g., `card.style.aspectRatio = member.ratio`). The default is `3 / 4`.
- For best visual fidelity, export slices at original resolution — they’ll scale down nicely via CSS.

