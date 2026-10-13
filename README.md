# CraftKit — Next.js Resume Builder

CraftKit is a resume builder built with Next.js, React, and Tailwind CSS. Create a resume using a structured editor, preview different layouts, and export a PDF.

**Live app:** https://craftkit.netlify.app

## Features

- Resume editor for personal details, experience, education, skills, projects, and other sections
- Three registered layouts: Modern, Creative, and Formal
- Live resume preview
- PDF export
- Responsive interface

## Run locally

### Prerequisites

- Node.js 20 or newer (recommended for this Next.js 15 project)
- npm

```bash
git clone https://github.com/hammadmeer-dev/CraftKit---NextJs.git
cd CraftKit---NextJs
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm run start
```

> PDF export uses a server-side Puppeteer route. Environments without a compatible Chromium installation may need additional deployment configuration.

## Project structure

- `app/Templates/ResumeDummyData.jsx`: example resume data
- `app/Templates/TemplateRegistry.jsx`: available template registrations
- `app/Templates/[name]/`: resume template components
- `app/ResumeEditor/`: resume editing pages and components
- `app/api/export-pdf/`: PDF export API route
- `app/components/Form/`: form components for resume sections

## Add a resume template

1. Review `app/Templates/ResumeDummyData.jsx` to understand the expected resume data.
2. Create a template component under `app/Templates/[name]/` that accepts `resumeData`.
3. Import and register it in the `templates` array in `app/Templates/TemplateRegistry.jsx`.
4. Check its layout in the running app and verify PDF output where applicable.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contributor instructions.

## Documentation

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Licensing

No root `LICENSE` file was found during this documentation update. Check with the repository owner before assuming permission to redistribute or reuse this code.
