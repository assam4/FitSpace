# FitSpace API

Small Fastify REST server for the FitSpace React app. It sends Home page JSON (text + image URLs) and serves the image files.

The frontend runs on Vite (`http://localhost:5173`). This server runs on `http://127.0.0.1:3000`.

## Stack

- Node.js (ESM, `"type": "module"`)
- Fastify 5
- `@fastify/static`

## Getting started

From this folder:

```bash
npm install
npm run dev
```

The server listens on `http://127.0.0.1:3000` and restarts when you save a file (`node --watch`).

The frontend currently reads data from `src/data/` and images from the repo `public/` folder. This API is optional.

Keep this process running, then start the React app from the repo root (`npm run dev`) if you want JSON from `/api`.

## Images

JSON stores short paths in `data/`, for example `/images/brand_logo_vector.png`.

Before a response is sent, `withPublicOrigin` in `index.js` prefixes image fields with `http://127.0.0.1:3000`. Fields it treats as image paths: `src`, `backgroundText`, `backgroundSrcs`, `media`.

`@fastify/static` serves files from the frontend `public/` folder:

```
GET http://127.0.0.1:3000/event_banners/crossfit.png
  → ../public/event_banners/crossfit.png
```

## Check it works

```bash
curl http://127.0.0.1:3000/api/banners
```

You should see JSON. Image paths in the JSON are full URLs, for example:

`http://127.0.0.1:3000/event_banners/crossfit.png`

Open that URL in the browser. You should see the picture.

## API

All routes are `GET` only. There is no database and no upload.

| Method | Path | Body |
| --- | --- | --- |
| `GET` | `/api/logo` | `{ src, alt }` |
| `GET` | `/api/languages` | `[{ src, alt }, ...]` |
| `GET` | `/api/banners` | `[{ src, alt }, ...]` |
| `GET` | `/api/sections` | split sections (title, text, images) |
| `GET` | `/api/collection` | `{ arrow, items }` |
| `GET` | `/api/feature-card` | feature block (background + media + text) |
| `GET` | `/api/input-section` | subscribe form copy + background image |

Unknown `/api/...` paths return Fastify `404` JSON.

## Images

JSON stores short paths in `data/`, for example `/images/brand_logo_vector.png`.

Before a response is sent, `withPublicOrigin` in `index.js` prefixes image fields with `http://127.0.0.1:3000`. Fields it treats as image paths: `src`, `backgroundText`, `backgroundSrcs`, `media`.

`@fastify/static` serves files from `public/`:

```
GET http://127.0.0.1:3000/event_banners/crossfit.png
  → server/public/event_banners/crossfit.png
```

The app uses `127.0.0.1`, not `localhost`. On macOS `localhost` can use IPv6, while this server listens on IPv4 only. Image tags would fail if the URL used `localhost`.

## Project structure

```
server/
  index.js                 # Fastify app, routes, static files, URL prefix
  data/                    # JSON payloads (no database)
    logo.js
    languages.js
    banners.js
    sections.js
    collection.js
    feature-card.js
    input-section.js
```

Images live in the repo root `public/` folder (`event_banners/`, `images/`, `collection_vectors/`).

To change copy or which photo a block uses, edit the matching file in `src/data/` (frontend) or `server/data/`. To add a new file, put it under the root `public/` and point `src` (or another image key) at `/folder/file.ext`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Fastify with file watch on port 3000 |
