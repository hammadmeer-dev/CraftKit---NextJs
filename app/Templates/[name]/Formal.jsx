import React from "react";

const FormalResumeTemplate = ({ resumeData }) => {
  // Fallback mock data matching your PDF
  const defaultData = {
    personalInfo: {
      fullName: "Hammad Farooq Meer",
      profession: "MERN Stack Developer",
      location: "Sialkot (Lahore)",
      phone: "+92 309 6154 169",
      email: "hammad24197@gmail.com",
      portfolio: "Portfolio",
      linkedin: "Linkedin",
      github: "Github",
      profileImage: "",
    },
    summary: `MERN Stack Developer experienced in building secure, scalable, and high-performance web applications. Proficient in React.js, Node.js, MongoDB, Express.js, and REST APIs, with additional expertise in WordPress development. Passionate about integrating AI tools and Large Language Models (LLMs) to enhance productivity and create smarter solutions. Strong focus on modern UI/UX design, API integration, and performance optimization.`,
    workExperience: [
      {
        role: "WORDPRESS DESIGNER",
        company: "WSolutionz",
        startDate: "Jul 2021",
        endDate: "Nov 2022",
        description: `1. Designed and developed responsive WordPress websites premium/custom themes.
2. Customized layouts, typography, and branding to align with client requirements.
3. Installed, configured, and optimized plugins for SEO, Performance, and advanced functionality.
4. Ensured cross-browser compatibility, mobile responsiveness, and optimal performance.
5. Collaborated directly with clients to gather requirements and deliver tailored web solutions.`,
      },
      {
        role: "MERN STACK DEVELOPMENT",
        company: "Self-Learning",
        startDate: "",
        endDate: "",
        description: `1. Built full-stack apps using MongoDB, Express.js, React.js, Node.js with modern best practices.
2. Created responsive website clones and custom UIs with HTML, CSS and JavaScript.
3. Integrated LLMs and developed small custom AI models for intelligent app features.
4. Connected REST APIs, implemented JWT authentication, and optimized app performance.
5. Developed multiple projects across different frameworks and technologies as part of self-directed learning.`,
      },
    ],
    education: [
      {
        degree: "Bachelor of Science (BS), Information Technology",
        school: "University of Sialkot, Pakistan",
        startDate: "2021",
        endDate: "2025",
      },
    ],
    projects: [
      {
        name: "Traveller",
        description:
          "MERN-based social networking platform for sharing trips & connecting with travelers.",
        features: "AI-powered travel suggestions, authentication, and real-time updates.",
        link: "Github",
      },
      {
        name: "Foodie",
        description:
          "Fully responsive MERN application for browsing and purchasing groceries online.",
        features: "Shopping cart, product filtering, and secure checkout.",
        link: "Github",
      },
    ],
    skills: {
      frontend: "React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS",
      backend: "Node.js, Express.js, REST APIs, JWT Authentication",
      database: "MongoDB",
      tools: "Git/GitHub, WordPress, Netlify, Vercel, Firebase, Postman",
      ai: "LLM Integration, Prompt Engineering",
    },
  };

  // Merge user data with defaults
  const {
    personalInfo,
    summary,
    workExperience,
    education,
    projects,
   skills
  } = { ...defaultData, ...resumeData?.data };

  return (
    <div
      className="bg-white shadow-lg p-10 mx-auto"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontSize: "10.5px",
        lineHeight: "1.6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-3 mb-4">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName}</h1>
        <div className="text-xs space-x-2">
          <span>Address: {personalInfo.location}</span>
          <span>|</span>
          <span>Email: {personalInfo.email}</span>
          <span>|</span>
          <span>Mobile: {personalInfo.phone}</span>
        </div>
        <div className="text-xs mt-1 space-x-2">
          <a href={personalInfo.githubLink} className="text-blue-600 underline">
            {personalInfo.portfolioWebsite}
          </a>
          <span>|</span>
          <a href={personalInfo.linkedInLink} className="text-blue-600 underline">
            {personalInfo.linkedInLink}
          </a>
          <span>|</span>
          <a href={personalInfo.githubLink} className="text-blue-600 underline">
            {personalInfo.githubLink}
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase mb-2">Professional Summary</h2>
        <p className="text-justify">{summary}</p>
      </div>

      {/* Work Experience */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase mb-2">Work Experience</h2>
        {workExperience.map((job, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xs font-bold uppercase">{job.role}</h3>
              <span className="text-xs font-bold">{job.company}</span>
            </div>
            {job.startDate && (
              <p className="text-xs italic mb-1">
                ( {job.startDate}{job.endDate && `-${job.endDate}`})
              </p>
            )}
            <div className="text-xs whitespace-pre-line">{job.description}</div>
          </div>
        ))}
      </div>

      {/* Professional Education */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase mb-2">Professional Education</h2>
        {education.map((edu, idx) => (
          <div key={idx}>
            <p className="text-xs">
              <span className="font-bold">{edu.degree}</span> – {edu.school} (
              {edu.startDate}–{edu.endDate})
            </p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase mb-2">Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} className="mb-2">
            <p className="text-xs">
              <span className="font-bold">{proj.name}</span> – {proj.description}
            </p>
            <p className="text-xs">
              Features: {proj.features} (
              <a href="#" className="text-blue-600 underline">
                {proj.link}
              </a>
              )
            </p>
          </div>
        ))}
      </div>

      {skills?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {skills?.map((skill, idx) => (
                <li key={idx}>{skill.name}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default FormalResumeTemplate;