# Portfolio Templates

A collection of six portfolio designs by Hyunbin Kim, presented as an interactive front-end project. Explore different visual styles, switch between desktop and mobile previews, and try the color-theme controls inside the live demos.

[Collection website](https://tylerkim-design-portfolio.vercel.app/templates) · [Hyunbin’s portfolio](https://www.hyunbinkim.dev/)

## The collection

| Template | Direction |
| --- | --- |
| Cashmere | Editorial · Masonry |
| Blooming | Expressive · Colorful |
| Moderneon | Expressive · Dark |
| Neumorphism | Minimal · Soft UI |
| Newtro | Editorial · Retro |
| Staircase | Minimal · Geometric |

The demos use content for a fictional creative named John Doe. This project originally served as a template-based freelance website; the current UI focuses on the design collection and its implementation.

## Stack and structure

- Next.js Pages Router and React for the showcase and statically generated preview routes.
- Sass modules for responsive page and component styles.
- A shared local JSON catalog for template names, categories, descriptions, images, and live-demo URLs.
- Separately hosted template demos, with Contentful-powered content editing.

The showcase can build without Contentful credentials. The embedded demos depend on their own hosting and CMS configuration.

## Local development

Use Node.js 24 (see `.nvmrc`). The existing Next.js 12 runtime is incompatible with Node.js 25.

```sh
nvm use
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). For production:

```sh
npm run build
npm start
```

## Routes

- `/` and `/templates`: collection, design-style filters, and desktop/mobile thumbnails.
- `/templates/[template]`: live demo with viewport controls and a direct demo link.
- `/about`: project background and design/engineering decisions.
- `/documents`: architecture, CMS, page structure, and development notes.

## Adding a template

Add an entry in `data/templates.json` and desktop/mobile preview images (including the WebP thumbnails referenced by the catalog) under `public/images/templates`. Use an existing category (`Editorial`, `Minimal`, or `Expressive`) or update the filter list in `components/collection.js`. Update the collection’s editorial count copy when expanding beyond six designs. Next.js generates preview routes from the catalog at build time.

The gallery is available without loading the externally hosted demos; the live websites load only when opening a template preview.
