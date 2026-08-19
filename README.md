# FitSpace

Fitness landing page built with React and Vite. Page copy lives in `src/constants.js`. Images are imported from `src/assets/`.

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

Open the local URL shown by Vite (usually `http://localhost:5173`).

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
  assets/                # photos and icons
  constants.js           # texts + imported images
  components/
  pages/
    Home.jsx             # composes the home page
```

## Notes

- Hovering the slider pauses autoplay; leaving resumes it.
- Routes are defined in `App.jsx`; page content currently maps to `Home` while additional pages are placeholders.
