# CraftKit - Next.js Resume Builder

CraftKit is a modern, customizable resume builder built with Next.js. It allows users to create professional resumes using various templates and a structured data format.

## 🚀 Live Demo

Check out the live application: [craftkit.netlify.app](https://craftkit.netlify.app)

## Features

- Multiple resume templates including Modern, Creative, and Technical styles
- Easy-to-use editor for personal information, work experience, education, skills, projects, certifications, and more
- Live preview of resume templates
- Export resumes as PDF
- Responsive design and mobile-friendly

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hammadmeer-dev/CraftKit---NextJs.git
cd CraftKit---NextJs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `app/Templates/ResumeDummyData.jsx`: Contains the sample resume data structure used across templates.
- `app/Templates/TemplateRegistry.jsx`: Registers available resume templates.
- `app/Templates/[name]/`: Directory containing individual resume template components.
- `app/ResumeEditor/`: Pages and components for editing resume data.
- `app/api/export-pdf/`: API route for exporting resumes as PDF.
- `app/components/Form/`: Form components for editing different resume sections.

## Creating a New Resume Template

To add a new resume template, follow these steps:

1. Create a new React component in `app/Templates/[name]/` that accepts `resumeData` as a prop.
2. Use the data structure defined in `app/Templates/ResumeDummyData.jsx` to access resume information.
3. Register your template in `app/Templates/TemplateRegistry.jsx` by importing it and adding it to the `templates` array.
4. Style your template using Tailwind CSS or custom styles.
5. Test your template by running the development server and selecting it in the app.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on how to contribute to this project.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## License

This project is licensed under the MIT License.

---

CraftKit is an open-source project. Contributions and feedback are welcome!
