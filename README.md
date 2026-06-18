# Portfolio

A small, static portfolio site. Recent cleanup: CSS has been moved to `styles/style.css` and JavaScript moved to `scripts/main.js` so the project is easier to maintain.

## Quick start

- Open in your browser:

  - macOS: `open index.html`

- Serve locally (recommended):

  - Python 3 (example uses port 8080):

    ```bash
    python3 -m http.server 8080
    open http://localhost:8080
    ```

  - Or use any static file server (live-server, http-server, etc.).

## Project structure

- `index.html` — entry point and simple HTML shell.
- `styles/style.css` — main stylesheet (extracted from the HTML).
- `scripts/main.js` — main UI scripts (matrix effect, terminal demo, smooth scroll, mobile nav, reveal animations).
- `assets/` — (suggested) images, icons, and media.

## Development notes

- The HTML is intentionally minimal — presentational code lives in `styles/` and `scripts/`.
- Start the dev server (see Quick start) and open the site to verify assets load.
- To add build tooling (SASS/TypeScript/bundling), initialize npm and add a simple build step.

## Recommended next steps

1. Add a `.gitignore` (e.g., `.DS_Store`, `node_modules/`).
2. Add a `LICENSE` file (MIT recommended if you want permissive licensing).
3. Add meta tags (description, Open Graph) and a `favicon.ico` for better sharing and polish.
4. (Optional) Initialize npm and add a dev script for a live server (e.g., `live-server` or `http-server`).

## How I verified

- Confirmed `styles/style.css` and `scripts/main.js` are present and served by a local Python server on port 8080.

---

Generated on 18 June 2026.
