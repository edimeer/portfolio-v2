# Edi Meer | Freelance Portfolio

Portfolio site for my freelance work: GoHighLevel builds first, plus automation, AI and web development.

**Live site:** https://edimeer.github.io/portfolio-v2/

## What's on the page

- Hero with an animated GoHighLevel-style workflow
- Services: GoHighLevel builds, automation and AI, web and code
- Work: side projects with walkthrough videos (play on hover) and live links
- Stack: the tools I use, grouped by area
- Contact: how a project goes, plus booking, email and LinkedIn links

Dark theme by default with a light theme toggle that remembers your choice. Animations turn off when the visitor has `prefers-reduced-motion` set.

## Built with

- HTML
- [Tailwind CSS](https://tailwindcss.com/) v3 (compiled with the Tailwind CLI)
- Vanilla JavaScript for the theme toggle, mobile menu, scroll reveal, workflow animation and hover-play videos
- Space Grotesk and JetBrains Mono from Google Fonts
- Hosted on GitHub Pages

## Project structure

```
portfolio-v2/
├── .github/workflows/    # Deploy to GitHub Pages
├── index.html            # All page content
├── src/input.css         # Tailwind entry file, color tokens, components
├── tailwind.config.js    # Fonts and color names mapped to the tokens
├── assets/
│   ├── styles.css        # Compiled CSS (rebuilt by CI on deploy)
│   ├── main.js           # Theme, menu, reveal, workflow, hover-play
│   ├── logos/            # Tool logos (SVG)
│   └── work/             # Walkthrough videos for the side projects
└── package.json
```

## Run locally

Requires [Node.js](https://nodejs.org/) and Python 3 (or any static file server).

```bash
npm install
npm run dev          # rebuilds CSS on every change
```

In a second terminal:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Change the colors

All colors live as CSS variables at the top of `src/input.css`: one set for dark (`:root`) and one for light (`html.light`). Change a value there and every part of the page that uses it follows.

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the CSS and deploys to GitHub Pages on every push to `main`.

One-time setup: in the repo's **Settings > Pages**, set **Source** to **GitHub Actions**.

## Credits

Tool and brand logos belong to their owners and are shown only to indicate the tools I work with. Logo sources: [Devicon](https://devicon.dev/), [Simple Icons](https://simpleicons.org/) and [selfh.st/icons](https://selfh.st/icons/) (Microsoft Copilot). The Google Workspace and Excel logos are simple SVGs written for this site.

## License

Copyright (c) 2026 Edi Meer. All rights reserved. See [LICENSE](LICENSE).
