# MAKAZI Education Initiative website

A responsive Next.js website with a database-free content workflow. Public website content is kept in TypeScript files under `data/`; images are stored in `public/images/`.

## Updating site content

- Organization profile, mission, vision, impact count and values: `data/organization.ts`
- Navigation links: `data/navigation.ts`
- Programs and their detail-page content: `data/programs.ts`
- Verified news articles: `data/news.ts`
- Consent-reviewed impact stories: `data/impact-stories.ts`
- Approved reports and downloadable resources: `data/resources.ts`
- Gallery items and category labels: `data/gallery.ts`
- Homepage copy, map embed and visitor-facing notes: `data/site-settings.ts`
- Images: place optimized files in `public/images/` and reference them with paths such as `/images/community-photo.webp`.

Only add verified facts. Before adding a child's name, personal story or identifiable image, obtain and document appropriate consent. The included generated images are representative illustrations, not evidence of a specific MAKAZI activity. Do not add invented testimonials, partner names, results, financial details or organizational history.

To add a news article, add an object to `newsArticles` in `data/news.ts` with a unique `slug`, title, excerpt, ISO date (`YYYY-MM-DD`), category, image path, descriptive alt text, and article paragraphs in `content`. The listing, search, article route and sitemap use that shared data.

To add a program, add an object to `programs` in `data/programs.ts`. Its `slug` becomes `/programs/<slug>`.

## Forms and submissions

Forms validate in the browser and POST JSON to `NEXT_PUBLIC_FORM_ENDPOINT` when it is configured. Configure that public endpoint in the Vercel project environment and ensure the receiving service validates submissions, applies server-side spam/rate protections, and permits the website origin (CORS). The endpoint receives a `type` field and the submitted fields. The website does not store submissions. Without the endpoint, the submit action remains unavailable and the page points visitors to the organization's published phone and email instead. No payment provider or payment details are configured.

## Local development and deployment

Install dependencies with `pnpm install`, then run `pnpm dev`. Deploy to Vercel by connecting the repository/project and using the standard Next.js build. No database, authentication service, or backend credentials are required. Optional environment variables are `NEXT_PUBLIC_FORM_ENDPOINT` for form delivery and `NEXT_PUBLIC_SITE_URL` for canonical metadata and sitemap URLs. If the site URL is not set, Vercel deployments use their deployment hostname.
