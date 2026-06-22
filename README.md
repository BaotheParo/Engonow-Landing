# ENGONOW IELTS Master — Landing Page

Static landing page. The page is a single HTML entry point that renders a
React app (loaded from CDN and transpiled in-browser by Babel). All app code
lives in `landing/` as `.jsx` modules.

## Run it locally

Babel will **not** transpile the `.jsx` files from a `file://` URL, so you must
serve the folder over HTTP:

```bash
cd "ENGONOW Landing"
python3 -m http.server 8000
```

Then open: http://localhost:8000/ENGONOW%20IELTS%20Master%20Landing.html

> Needs an internet connection — React, ReactDOM, Leaflet, Babel, and the
> Montserrat font are loaded from CDNs.

## Project structure

```
ENGONOW IELTS Master Landing.html   # entry point (loads the .jsx modules)
landing/
  App.jsx                           # composes all sections
  Hero.jsx Method.jsx Teachers.jsx Segments.jsx FAQ.jsx Lead.jsx Bot.jsx
  Primitives.jsx                    # shared UI atoms
  landing.css                       # all styles
  image-slot.js                     # helper for swappable image slots
  icons/                            # 36 SVG icons
  students/  avatars/               # photo assets
  engonow-logo.png  hero-photo.png  # brand + hero imagery
```

## What to work on

The revision spec is in `brief/landing page - IELTS.docx` (section-by-section
redlines + color palette). Real photos to drop in are in `source-assets/`
(e.g. `LOGO.png`, `LE ANH THU.png`, `LE PHAN GIA BAO.png`, `ĐOÀN MINH NHẬT.png`).
Work on a branch and open a PR for review before merging to `main`.
