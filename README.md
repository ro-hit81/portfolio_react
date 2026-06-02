# Rohit Khati Portfolio

Personal portfolio site for Earth Observation, remote sensing, and AI work.

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Deployed](https://img.shields.io/badge/Deployed-Live-success?style=for-the-badge)

## Getting Started

### Requirements
- Node.js 18+
- npm

### Install and Run
```bash
git clone https://github.com/ro-hit81/portfolio_react.git
cd portfolio_react
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build
```bash
npm run build
npm run start
```

## Project Structure

This repository currently contains two app trees:
- `app/` is the active Next.js App Router implementation used by the site.
- `src/` contains a smaller mirrored set of components and shared code.

```text
portfolio_react/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── academic/
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navigation.tsx
│   │   ├── effects/
│   │   │   └── ScrollFadeOverlay.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Publications.tsx
│   │   │   ├── Awards.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── WorldMapJourney.tsx
│   │   │   ├── NewWorldMapJourney.tsx
│   │   │   └── LeafletWorldMap.tsx
│   │   └── ui/
│   │       └── ThankYouPopup.tsx
│   └── styles/components/
│       ├── Hero.module.css
│       ├── Navigation.module.css
│       ├── About.module.css
│       ├── Skills.module.css
│       ├── Blog.module.css
│       ├── Projects.module.css
│       ├── Publications.module.css
│       ├── Awards.module.css
│       └── Contact.module.css
├── public/
│   ├── rohit.jpeg
│   ├── favicon.svg
│   └── docs/
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Key Sections

- Hero: personal introduction, stats, resume link, and academic background CTA.
- Navigation: sticky section navigation with active section highlighting and mobile menu.
- About: overview of background and focus areas.
- Skills: technical stack and Earth Observation capabilities.
- Blog: writing and knowledge-sharing section.
- Projects: selected portfolio work and case studies.
- Publications: research papers, thesis, and academic outputs.
- Awards: recognitions and achievements.
- Contact: contact form and social links.
- Academic: dedicated page for education and academic background.

## Notable UI Pieces

- ScrollFadeOverlay: soft scroll-based visual layering across sections.
- Hero module styles: animated intro, profile card, and CTA layout.
- Publications module: research cards with DOI and paper links.
- World map journey components: alternative map-style storytelling sections.

## Tech Stack

- Next.js 15 with the App Router
- React 19
- TypeScript
- CSS Modules for component styling
- Lucide React icons

## Customization Notes

- Update personal content in the section components under `app/components/sections/`.
- Update global metadata in `app/layout.tsx`.
- Update page composition in `app/page.tsx`.

## License

Open source under the MIT License.

## Links

- Live site: https://www.rohit81.com.np/
- GitHub: https://github.com/ro-hit81
- LinkedIn: https://linkedin.com/in/rhtkht/

Built with ❤️ and ☕ by Rohit Khati
