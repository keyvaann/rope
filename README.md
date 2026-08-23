# Love & Rope Studio

A lightweight Astro static site for a shibari teacher offering group classes and private sessions.

The site is configured for GitHub Pages project hosting at:

```text
https://USERNAME.github.io/rope/
```

## Edit Site Content

Most simple updates are in:

```text
src/content/site.ts
```

Edit this file to update:

- Studio name
- Teacher name
- Email address
- Location
- Bio
- Class descriptions
- Private session descriptions
- Placeholder pricing
- Social links
- Image filenames, labels, alt text, and recommended sizes

## Images

The site currently uses styled image placeholders. Image details are listed in:

```text
src/content/site.ts
```

Image files should go in:

```text
public/images/
```

Recommended folders:

```text
public/images/hero/
public/images/teacher/
public/images/classes/
public/images/private-sessions/
public/images/details/
```

Recommended dimensions:

- Hero images: `2400 x 1600`
- Teacher portrait: `1200 x 1500`
- Class and session cards: `1600 x 1200`
- Detail images: `1600 x 1000`

Use descriptive alt text in `src/content/site.ts`. Alt text should explain the image for someone who cannot see it.

## Edit Pages

Page files live in:

```text
src/pages/
```

Each `.astro` file maps to a page on the site:

- `index.astro` is the homepage
- `about.astro` is `/about/`
- `classes.astro` is `/classes/`
- `private-sessions.astro` is `/private-sessions/`
- `contact.astro` is `/contact/`

## Run Locally

This project uses Node 22. If you use `nvm`:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Start a local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Deploy To GitHub Pages

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

In the GitHub repository settings:

- Go to `Settings` > `Pages`
- Set `Source` to `GitHub Actions`
- Push to the `main` branch

## Custom Domain Later

The current Astro config is:

```js
site: 'https://USERNAME.github.io',
base: '/rope'
```

For a custom domain, update `astro.config.mjs` to something like:

```js
site: 'https://your-domain.com',
base: '/'
```

Then configure the custom domain in GitHub Pages settings.
