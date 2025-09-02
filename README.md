# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

```
birthday-project
├─ astro.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ audio
│  │  └─ sound1.mp3
│  ├─ favicon.svg
│  ├─ fonts
│  │  ├─ HughisLifePersonalUse-Italic.eot
│  │  ├─ HughisLifePersonalUse-Italic.svg
│  │  ├─ HughisLifePersonalUse-Italic.ttf
│  │  ├─ HughisLifePersonalUse-Italic.woff
│  │  └─ HughisLifePersonalUse-Italic.woff2
│  ├─ images
│  │  ├─ 1-piece.png
│  │  ├─ bg.png
│  │  ├─ cake-front.png
│  │  ├─ cake.png
│  │  ├─ player.png
│  │  └─ trak.png
│  ├─ scripts
│  │  ├─ main.js
│  │  ├─ page.js
│  │  ├─ responsive.js
│  │  └─ sound.js
│  └─ vendor
│     ├─ gsap.min.js
│     ├─ howler.min.js
│     └─ jquery.min.js
├─ README.md
├─ src
│  ├─ pages
│  │  └─ index.astro
│  └─ styles
│     ├─ abstracts
│     │  ├─ _breakpoints.scss
│     │  ├─ _fonts.scss
│     │  ├─ _index.scss
│     │  ├─ _mixins.scss
│     │  └─ _variables.scss
│     ├─ base
│     │  ├─ _index.scss
│     │  ├─ _settings.scss
│     │  └─ _typography.scss
│     ├─ components
│     │  ├─ _button.scss
│     │  ├─ _index.scss
│     │  └─ _input.scss
│     ├─ layouts
│     │  ├─ _content.scss
│     │  └─ _index.scss
│     ├─ pages
│     │  └─ _index.scss
│     ├─ styles.scss
│     └─ vendor
│        └─ normalize.scss
└─ tsconfig.json

```