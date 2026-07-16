# schockaertks.com

The personal website of [Kristof Schockaert](https://schockaertks.com), a freelance Power Platform and Dynamics 365 technical consultant and AI-native developer based in Belgium.

The site presents Kristof's services, working style, experience and technical toolbox, with a stable URL for the latest CV.

## Highlights

- Responsive, accessible single-page portfolio
- Light and dark themes that initially follow the visitor's system preference
- Service coverage across Power Platform and Dynamics 365 Sales, Marketing, Customer Service and Field Service
- Experience timeline and current development toolbox
- Stable `/cv` URL for the latest published PDF
- Canonical metadata, Open Graph data, robots policy and sitemap
- Permanent redirects for legacy website and CV URLs
- Static output with no runtime services or environment variables

## Stack

- [Astro](https://astro.build/) for static site generation
- [Tailwind CSS](https://tailwindcss.com/) through its Vite integration
- Self-hosted Bricolage Grotesque, IBM Plex Sans and IBM Plex Mono font packages
- GitHub for source control and Vercel for continuous deployment

## Local development

Requirements:

- Node.js 24 or newer
- npm 11 or newer

```sh
npm install
npm run dev
```

Astro starts the development server and prints the local URL in the terminal.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the generated production build |
| `npm run astro -- <command>` | Run an Astro CLI command |

## Project structure

```text
public/                 Static assets, portrait, favicon, CV, robots and sitemap
src/components/         Page sections and reusable interface components
src/layouts/            Shared document shell, metadata and theme bootstrap
src/pages/              Astro routes
src/styles/             Global design system and responsive styles
astro.config.mjs        Astro, site URL and Tailwind configuration
vercel.json             Legacy URL redirects and URL normalization
```

## Publishing the CV

The public CV URL is:

```text
https://schockaertks.com/cv
```

To publish an update, replace:

```sh
public/cv/Kristof-Schockaert-CV.pdf
```

Keep the public filename unchanged so existing links continue to work. Versioned Word and PDF source files remain local under the ignored `docs/` directory.

## Deployment

The `master` branch is connected directly to the `schockaertks-com` Vercel project. Pull requests receive preview deployments and merges to `master` publish to production.

The canonical production URL is [https://schockaertks.com](https://schockaertks.com).

## License

Copyright © Kristof Schockaert. The source is published for operational transparency; no reuse license is granted.
