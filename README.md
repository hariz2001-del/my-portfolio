# Hariz Helmi — portfolio

React + Vite online CV and portfolio. It combines the one-page resume with detailed project evidence: work history, education, technical practice, transferable skills and current project status.

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

Project and skill copy lives in [`src/data/portfolio.js`](src/data/portfolio.js); the fuller CV is in [`src/pages/About.jsx`](src/pages/About.jsx). Keep each status and contribution current before publishing. Aztech Calli is on hold and intentionally has no live link. Do not present planned WordPress work, unfinished Vista features or course-level DevOps exercises as completed production experience.
