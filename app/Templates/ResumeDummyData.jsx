export const dummyResume = {
  id: "Resume",
  title: "Alex Johnson",
  templateId: "modern-minimalist",
  data: {
    personalInfo: {
      fullName: "Alex Johnson",
      profession: "Full Stack Developer",
      location: "New York, USA",
      phone: "+1 555-123-4567",
      email: "alex.johnson@example.com",
      citizenship: "Indian",
      dateOfBirth: "1992-06-10",
      maritalStatus: "Married",
      portfolioWebsite: "http://localhost:3000/profilePicture.jpeg",
      profileImage: "/profilePicture.jpeg",
    },
    hobby:
      "Running a YouTube channel with advice for young artists on how to promote their work and become graphic design entrepreneurs.",
    summary: `Full Stack Developer with 6+ years of experience building web applications and scalable solutions. 
Proficient in React, Node.js, Python, and cloud technologies. Passionate about AI, automation, and modern web design.`,
    workExperience: [
      {
        id: "work_001",
        role: "Senior Full Stack Developer",
        company: "TechNova Inc",
        startDate: "2021-03-01",
        endDate: "Present",
        description:
          "Leading a team of developers to build scalable e-commerce platforms with React, Node.js, and AWS.",
        submitted: true,
      },
      {
        id: "work_002",
        role: "Frontend Developer",
        company: "PixelWorks",
        startDate: "2018-05-01",
        endDate: "2021-02-28",
        description:
          "Developed interactive web applications using React.js, Redux, and TypeScript.",
        submitted: true,
      },
      {
        id: "work_003",
        role: "Junior Web Developer",
        company: "WebSolutions Ltd",
        startDate: "2016-06-01",
        endDate: "2018-04-30",
        description:
          "Worked on WordPress and custom PHP websites, ensuring responsive design and SEO optimization.",
        submitted: true,
      },
    ],
    languages: [
      { name: "English - C1" },
      { name: "Hindi - C2" },
      { name: "Gujarati - C2" },
    ],
    education: [
      {
        id: "edu_001",
        degree: "MSc Computer Science",
        school: "Columbia University",
        startDate: "2014-09-01",
        endDate: "2016-06-30",
        description:
          "Specialized in Artificial Intelligence and Web Development.",
        submitted: true,
      },
      {
        id: "edu_002",
        degree: "BSc Information Technology",
        school: "New York University",
        startDate: "2010-09-01",
        endDate: "2014-06-30",
        description:
          "Focused on software development, databases, and networking.",
        submitted: true,
      },
    ],
    skills: [
      { id: "skill_001", name: "React.js", rating: 9, submitted: true },
      { id: "skill_002", name: "Node.js", rating: 8, submitted: true },
      { id: "skill_003", name: "Python", rating: 7, submitted: true },
      { id: "skill_004", name: "AWS", rating: 8, submitted: true },
      { id: "skill_005", name: "Docker", rating: 7, submitted: true },
    ],
    projects: [
      {
        id: "proj_001",
        name: "E-Shop Platform",
        description:
          "A scalable e-commerce platform with React and Node.js backend.",
        link: "https://eshop.example.com",
        submitted: true,
      },
      {
        id: "proj_002",
        name: "AI Chatbot",
        description:
          "Intelligent customer support chatbot using Python and NLP.",
        link: "https://chatbot.example.com",
        submitted: true,
      },
      {
        id: "proj_003",
        name: "Portfolio Website",
        description:
          "Personal portfolio website built with React and TailwindCSS.",
        link: "https://alexjohnson.dev",
        submitted: true,
      },
    ],
    certifications: [
      {
        id: "cert_001",
        name: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        year: "2022",
        submitted: true,
      },
      {
        id: "cert_002",
        name: "Full Stack Web Development",
        organization: "Coursera",
        year: "2020",
        submitted: true,
      },
      {
        id: "cert_003",
        name: "React Developer Certification",
        organization: "Meta",
        year: "2021",
        submitted: true,
      },
    ],
  },
};
