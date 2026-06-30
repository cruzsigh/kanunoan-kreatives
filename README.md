# Kanunoan Kreatives — Website

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:
```bash
npm run build
```
Output goes to `dist/`.

## Structure
- `src/components/` — Navbar, Hero, About, Services, Work, Contact, Footer
- `src/components/MaskIcon.jsx` — recolors the monochrome brand SVGs to any palette color via CSS mask (no need to manually recolor each asset)
- `src/assets/svg/` — all your uploaded logo/icon SVGs
- `src/assets/fonts/` — Linewleum (heading) + Tomarik family (body/accent)
- `src/styles/global.css` — palette as CSS variables (--cream, --yellow, --orange, --teal, --blue, --navy), typography, layout

## Notes
- Color palette assumed from your swatch: #FCF9CF, #F8E293, #EF914C, #327C7C, #1C5372 (one digit was unclear in the screenshot — double check this one), #14364E. Edit in `src/styles/global.css` if any are off.
- "Work" section uses solid-color placeholder tiles — swap in real project photography in `src/components/Work.jsx`.
- The contact form doesn't submit anywhere yet — wire it to email/Formspree/your backend when ready.
