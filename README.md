# Love & Rope Studio Website

This website is for Love & Rope Studio, a shibari teacher offering group classes and private sessions.

Live site:

```text
https://keyvaann.github.io/rope/
```

## Editing The Website

The easiest way to update the website is with Pages CMS.

1. Go to `https://app.pagescms.org`
2. Sign in with GitHub
3. Open the `keyvaann/rope` website
4. Choose the section you want to edit
5. Make your changes
6. Save

After saving, GitHub will automatically publish the updated website. This usually takes a minute or two.

## Editing Sections

Pages CMS is split into simple sections:

- `Site Settings`: studio name, teacher name, email, location, and social links
- `Home Page`: homepage headline, introduction, feature cards, and homepage images
- `About Page`: teacher bio, teaching philosophy, experience text, and about page image
- `Classes Page`: class descriptions, what to bring, and safety expectations
- `Private Sessions Page`: private session text, pricing, and preparation notes
- `Contact Page`: contact text, privacy note, location, social link, and contact image

## Adding Images

The site includes starter images. You can replace them with your own photos in Pages CMS.

Current starter images and licenses are listed in `IMAGE_CREDITS.md`.

When adding an image, also add clear alt text. Alt text should briefly describe the image for someone who cannot see it.

Good examples:

- `Hands demonstrating a beginner rope tie`
- `Portrait of the shibari teacher`
- `Rope arranged on soft fabric in warm light`

Recommended image sizes:

- Hero images: `2400 x 1600`
- About page image or teacher portrait: `1200 x 1500`
- Class and session cards: `1600 x 1200`
- Detail images: `1600 x 1000`

## What To Update First

Before sharing the site publicly, update this starter content:

- Studio name
- Teacher name
- Email address
- Location
- Bio
- Class descriptions
- Private session descriptions
- Pricing
- Social links
- Images and image descriptions

## For Developers

This is a lightweight Astro static site deployed to GitHub Pages.

Content files live in:

```text
src/content/settings.json
src/content/pages/home.json
src/content/pages/about.json
src/content/pages/classes.json
src/content/pages/private-sessions.json
src/content/pages/contact.json
```

Page files live in:

```text
src/pages/
```

Run locally:

```bash
nvm use
npm install
npm run dev
```

Build the site:

```bash
npm run build
```

Check types and build together:

```bash
npm run check
```

GitHub Pages deployment is handled by:

```text
.github/workflows/deploy.yml
```

The Pages CMS configuration is:

```text
.pages.yml
```
