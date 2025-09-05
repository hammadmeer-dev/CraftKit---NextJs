# Contributing to CraftKit

Thank you for your interest in contributing to CraftKit! This document provides guidelines and instructions for contributors who want to add new resume templates or improve the project.

## Repository

The project is hosted on GitHub: [https://github.com/hammadmeer-dev/CraftKit---NextJs](https://github.com/hammadmeer-dev/CraftKit---NextJs)

## Getting Started

1. **Fork the repository**: Click the "Fork" button on the GitHub repository page to create your own copy.

2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/CraftKit---NextJs.git
   cd CraftKit---NextJs
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Creating a New Resume Template

CraftKit allows you to create custom resume templates. Follow these steps to add a new template:

### Step 1: Understand the Data Structure

The resume data follows a specific structure defined in `app/Templates/ResumeDummyData.jsx`. This file contains a `dummyResume` object that serves as a template for the data structure. Key sections include:

- `personalInfo`: Full name, profession, contact details, etc.
- `summary`: Professional summary
- `workExperience`: Array of work experiences
- `education`: Array of educational qualifications
- `skills`: Array of skills with ratings
- `projects`: Array of projects
- `certifications`: Array of certifications
- `languages`: Array of languages
- `hobby`: Personal interests

Use this structure to ensure your template can handle all the data fields properly.

### Step 2: Create the Template Component

1. Create a new file in `app/Templates/[name]/` directory. For example, `app/Templates/[name]/MyTemplate.jsx`.

2. Build your template component using React. The component should accept a `resumeData` prop that contains the resume information.

   Example structure:
   ```jsx
   import React from 'react';

   const MyTemplate = ({ resumeData }) => {
     const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages, hobby } = resumeData.data;

     return (
       <div className="resume-template">
         {/* Your template JSX here */}
         <header>
           <h1>{personalInfo.fullName}</h1>
           <p>{personalInfo.profession}</p>
         </header>
         {/* Add other sections */}
       </div>
     );
   };

   export default MyTemplate;
   ```

3. Style your template using Tailwind CSS classes or custom CSS.

### Step 3: Register the Template

1. Open `app/Templates/TemplateRegistry.jsx`.

2. Import your new template component at the top:
   ```jsx
   import MyTemplate from "./[name]/MyTemplate";
   ```

3. Add your template to the `templates` array:
   ```jsx
   export const templates = [
     // ... existing templates
     {
       id: "my-template",
       name: "My Custom Template",
       description: "A description of your template.",
       category: "Custom",
       component: MyTemplate,
     },
   ];
   ```

### Step 4: Test Your Template

1. Run the development server: `npm run dev`

2. Navigate to the template selection page.

3. Choose your new template and fill in the resume data.

4. Verify that all sections render correctly and the layout is responsive.

### Step 5: Submit Your Contribution

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add new resume template: My Custom Template"
   ```

2. Push to your fork:
   ```bash
   git push origin main
   ```

3. Create a Pull Request on the original repository with a clear description of your changes.

## Code Style and Guidelines

- Follow the existing code style and structure.
- Use meaningful variable and function names.
- Add comments for complex logic.
- Ensure your template is mobile-responsive.
- Test your changes thoroughly before submitting.

## Need Help?

If you have questions or need assistance, feel free to open an issue on the GitHub repository or reach out to the maintainers.

Thank you for contributing to CraftKit!
