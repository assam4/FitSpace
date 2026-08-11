# FitSpace

Fitness landing page built with React and Vite. Includes a header with navigation, an auto-playing banner slider, and split content sections.

## Stack

- React 19
- Vite 8
- React Router DOM 7
- Oxlint

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Project structure

```
src/
  components/
    Header/          # Logo, nav links, language toggle, CTA
    Slider/          # Event banners with dots + autoplay
    SplitSection/    # Text + image sections
  pages/
    Home.jsx         # Main page composition
  constants.js       # Navigation, banners, section content
public/
  images/            # Logos, icons, content photos
  event_banners/     # Slider banners
```

Static assets live in `public/` and are referenced by absolute paths (e.g. `/images/brand_logo_vector.png`) from `src/constants.js`.

## Notes

- Hovering the slider pauses autoplay; leaving resumes it.
- Routes are defined in `App.jsx`; page content currently maps to `Home` while additional pages are placeholders.
