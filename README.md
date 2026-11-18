<div align="center">

# Enzo Kiyoshi — Portfolio

Personal portfolio of **Enzo Kiyoshi Kagueyama Sampaio** — Computer Science student, developer and professional handball athlete.

Built with plain **HTML, CSS and JavaScript** — no frameworks, no runtime dependencies.

🔗 **Live site:** [kiyoshi-portfolio.vercel.app](https://kiyoshi-portfolio.vercel.app/)

🇺🇸 English · [🇧🇷 Português](README.pt-BR.md)

</div>

---

## Overview

A fast, responsive, multilingual portfolio designed around a dark, editorial look: large serif typography, a subtle grid background and a minimal icon sidebar.

### Features

- **Dark / light theme** — toggle in the sidebar, preference saved in the browser
- **4 languages** — English, Portuguese, French and Spanish, with a switcher always visible at the top of the page
- **Responsive layout** — icon sidebar on desktop, hamburger menu on mobile
- **Certificates by category** — Programming & Development, Data & AI, Design, Economics & Business — each opens in a zoomable viewer (keyboard arrows, `Esc` and click-outside to close)
- **Detailed About page** — education and experience timelines, skills and languages
- **CV download** — one click from the home and About pages
- **Scroll animations and scroll-spy** navigation, with no animation library

## Tech

| | |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS custom properties (theming), Grid, Flexbox — split into one file per concern |
| Behavior | Vanilla JavaScript (ES5-compatible modules, no bundler) |
| i18n | Lightweight dictionary-based translation (`data-i18n` attributes) |
| Build | A single dependency-free Node script that bundles the source into self-contained pages |
| Hosting | Static — works on Vercel, GitHub Pages or any static host |

## Project structure

```
.
├── index.html · about.html     Generated, self-contained pages (what gets deployed)
├── Curriculo_Enzo_Kiyoshi.pdf  Résumé
├── src/                        Source code
│   ├── home.html · about-page.html  Page markup
│   ├── css/                    Styles (base, layout, sidebar, hero, certificates, …)
│   ├── js/                     Theme, i18n, lightbox, scroll-spy, reveal, certificates
│   │   └── i18n/               Translations (EN / PT / FR / ES)
│   └── assets/                 Certificate images and résumé PDF
└── scripts/build.mjs           Bundles src/ into the root pages
```

## Running locally

No installation needed — open `src/home.html` in a browser to run the source version, or `index.html` at the root for the built version.

To regenerate the built pages after changing the source (Node.js 18+):

```bash
node scripts/build.mjs
```

The build inlines CSS, JavaScript and images into `index.html` and `about.html`, so the site works on any host with zero configuration.

## Deployment

The project is a static site: import the repository on [Vercel](https://vercel.com) (or enable GitHub Pages) and deploy with the default settings.

## Contact

- **GitHub** — [@ekiyoshiks](https://github.com/ekiyoshiks)
- **LinkedIn** — [Enzo Sampaio](https://www.linkedin.com/in/enzo-sampaio-460541239/)
- **Email** — [kiyoshienzo@gmail.com](mailto:kiyoshienzo@gmail.com)
