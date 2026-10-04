# portfolio

Personal portfolio of Kamil Mandi — Network & Security Automation · DevSecOps · Cloud.

**Live:** https://gokunguru.github.io/portfolio/

## Stack

React 19 · TypeScript · Vite. No UI framework or animation library: plain CSS, self-hosted fonts, IntersectionObserver for scroll reveals.

## Development

```bash
npm ci
npm run dev      # local dev server
npm run build    # type-check and production build into dist/
```

All content lives in [`src/data.ts`](src/data.ts).

## Deployment

Every push to `main` is built and deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
