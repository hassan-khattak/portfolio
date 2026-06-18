# Portfolio

A minimal portfolio project containing a single `index.html`. This README gives quick steps to start and develop locally.

## Quick start

- Open the site directly in your browser:

  - macOS: `open index.html`
  - or double-click `index.html` in Finder

- Serve on a local HTTP server (recommended for testing things like fetch or routing):

  - Python 3 (works on macOS):

    ```bash
    python3 -m http.server 8000
    open http://localhost:8000
    ```

## Project structure

- `index.html` — the entry point for the portfolio site.

## Development notes

- Add `styles/` for CSS and `assets/` for images and media.
- Use a simple build tool or bundler only when needed (e.g., for SASS, TypeScript, or heavy JS).

## Deployment

- GitHub Pages: push to a repository and enable Pages in the repo settings (use `main` or `gh-pages` branch).
- Netlify / Vercel: drag-and-drop the site folder or connect the repo for automatic deploys.

## Next steps (suggested)

1. Add a `LICENSE` file.
2. Create a `styles/` folder and a base CSS file.
3. Add metadata to `index.html` (title, description, social preview images).
4. Initialize a git repo if you haven't: `git init && git add . && git commit -m "initial"`.

If you'd like, I can: add a starter CSS, wire up a contact form, or scaffold a simple build flow — tell me which and I'll implement it.

---

Generated on 18 June 2026.
