# Hariz Helmi — portfolio

React + Vite portfolio for product, systems and cloud/DevOps-adjacent opportunities. The content focuses on documented work and distinguishes live products, previews, in-progress projects and course practice.

## Local development

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. The production check is `npm run build`; generated files go to `dist/`.

## Cloudflare Pages settings

- Repository: `hariz2001-del/my-portfolio`
- Expected production branch: `main` (confirm against the existing Pages project before redeploying)
- Build command: `npm run build`
- Build output directory: `dist`

Cloudflare Pages serves the React Router routes as an SPA when there is no top-level `404.html` in the build output. No environment variables are required for this frontend. Publishing/deployment is a separate step.

## Updating portfolio content

Project and skill copy lives in [`src/data/portfolio.js`](src/data/portfolio.js). Keep each status and contribution current before publishing. In particular, do not present planned WordPress work, unfinished Vista features or course-level DevOps exercises as completed production experience.
