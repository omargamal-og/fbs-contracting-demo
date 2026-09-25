# FBS Contracting — Angular Presentation Demo V4

Premium bilingual Angular microsite concept for **FBS Contracting**.

## What changed in V4
- Complete Arabic / English localization across every visible section.
- Proper RTL / LTR document direction.
- Arabic project names, city names, categories, filters, forms, footer and accessibility labels.
- Language saved in `localStorage`.
- Language reflected safely in the URL as `?lang=ar` or `?lang=en` — this avoids refresh/404 problems on GitHub Pages.
- Localized page title and meta description.
- GitHub Pages deployment workflow included.
- No API or backend required.

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:4200`.

## GitHub Pages deployment
A workflow is already included at `.github/workflows/deploy-pages.yml`.

1. Create a GitHub repository and push this project.
2. In GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually).
4. The workflow builds Angular using the repository name as the base path and publishes `dist/fbs-contracting-demo/browser`.

## Important presentation note
The current construction photography is placeholder imagery for the presentation concept. Replace it with approved FBS Contracting project photography and the official brand assets before production use.
