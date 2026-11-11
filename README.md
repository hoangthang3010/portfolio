# Hoàng Minh Thắng — Portfolio

Portfolio website built with React, TypeScript, and Vite.

## Get started

```sh
npm install
npm run dev
```

## Add the CV

Put the source PDF at `reference/cv.pdf`, then continue building the portfolio
from its content. Files in `reference/` are excluded from Git so the original
CV is not accidentally committed or published as a website asset.

Run a production build with:

```sh
npm run build
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds and deploys the site to GitHub Pages on
every push to `main`. In the repository settings, set **Pages → Build and
deployment → Source** to **GitHub Actions**.
