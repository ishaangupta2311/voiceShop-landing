# VoiceShop marketing site

Marketing website for VoiceShop, the voice-first AI sales agent for Shopify
(internally the `digital-salesman-app` repository). This branch holds five
switchable landing-page concepts — the active concept lives in the URL path
(`/say-the-word`, `/the-wave`, `/signal`, `/loudmouth`, `/subtitles`) and a
persistent control cycles between them.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint

## Local development

Use Node.js 20.19.x, 22.13 or newer, or 24+, then install dependencies and run:

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

The product source of truth lives in the sibling `digital-salesman-app`
repository. Marketing claims should stay aligned with capabilities verified
there.
