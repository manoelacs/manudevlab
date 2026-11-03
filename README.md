# manudevlab.com

The website for **Manudev Lab**, a small software lab run by Manoela Cassia dos Santos. It has two pages:

- `/` shows the lab, its products and how to get in touch
- `/about` is the "Who I am" page

Built with Next.js (App Router) and TypeScript. The fonts are self-hosted through Fontsource.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

| What | File |
| --- | --- |
| Instagram, LinkedIn, photos | `src/data/site.ts` |
| Contact email (hidden from bots) | `src/components/EmailButton.tsx` |
| Products and side quests | `src/data/products.ts` |
| Home page | `src/app/page.tsx` |
| Who I am page | `src/app/about/page.tsx` |
| Colors, fonts and styles | `src/app/globals.css` |

### Adding the photos

1. Put the files in `public/images/`, for example `office.jpg` and `portrait.jpg`.
2. In `src/data/site.ts`, set `photos.office = "/images/office.jpg"` and `photos.portrait = "/images/portrait.jpg"`.

Until you do this, each photo spot shows a labelled placeholder.

## Deploy

This is a standard Next.js app, so it deploys to Vercel without extra setup:

1. Import the repository in Vercel.
2. Add `manudevlab.com` under Project → Settings → Domains.
