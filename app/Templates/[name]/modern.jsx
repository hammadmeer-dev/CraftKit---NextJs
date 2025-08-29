import React from "react";

const ModernTemplate = ({ resumeData }) => {
  // Fallback mock data
  const defaultData = {
    personalInfo: {
      fullName: "AUSTIN BRONSON",
      profession: "Sales Force Team Leader",
      location: "4710 Bus Boulevard, Flintstone, GA 30725",
      phone: "+(0) 1 2345 555",
      email: "contact@yourdomain.com",
      portfolioWebsite: "https://yourdomain.com",
      profileImage: "", // optional placeholder
    },
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: [
      { name: "Graphic Design" },
      { name: "Web Develop" },
      { name: "Lorem Ipsum" },
    ],
    workExperience: [
      {
        role: "SALES FORCE TEAM LEADER",
        company: "ABC Corp",
        startDate: "2006",
        endDate: "NOW",
        description:
          "Managed a sales team and achieved revenue targets.",
      },
      {
        role: "SALES MANAGER",
        company: "XYZ Ltd",
        startDate: "2003",
        endDate: "2006",
        description: "Oversaw regional sales and team training.",
      },
    ],
    education: [
      {
        degree: "High School Diploma",
        school: "HIGH SCHOOL OF DESIGN",
        startDate: "1996",
        endDate: "1999",
      },
    ],
    projects: [
      { name: "Project Alpha", description: "Built a CRM tool for sales tracking." },
    ],
    certifications: [
      { name: "Certified Sales Leader", organization: "Sales Org" },
    ],
  };

  // Merge user data with defaults
  const {
    personalInfo,
    summary,
    workExperience,
    education,
    skills,
    projects,
    certifications,
  } = { ...defaultData, ...resumeData.data };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-3 gap-6 overflow-hidden"
      style={{
        width: "794px",   // A4 width
        height: "1123px", // A4 height
        fontSize: "12px",
        lineHeight: "1.4",
      }}
    >
      {/* Left Sidebar */}
      <div className="col-span-1 border-r pr-4">
        {/* Profile Image */}
        {personalInfo.profileImage && (
          <div className="flex justify-center mb-4">
            <img
              src={personalInfo.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
          </div>
        )}

        {/* Personal Info */}
        <div className="mb-6">
          <h2 className="text-base font-semibold">{personalInfo.fullName}</h2>
          <p className="text-gray-600 text-sm">{personalInfo.profession}</p>
          <p className="mt-2 text-xs">{personalInfo.location}</p>
          <p className="text-xs">{personalInfo.phone}</p>
          <p className="text-xs">{personalInfo.email}</p>
          {personalInfo.portfolioWebsite && (
            <a
              href={personalInfo.portfolioWebsite}
              className="text-blue-600 text-xs underline"
              target="_blank"
              rel="noreferrer"
            >
              {personalInfo.portfolioWebsite}
            </a>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Certifications</h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  {cert.name}
                  <p className="text-xs text-gray-600">{cert.organization}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="col-span-2 pl-4 overflow-hidden">
        {/* Summary */}
        {summary && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Summary</h3>
            <p className="text-gray-700 text-xs">{summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {workExperience.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Work Experience</h3>
            {workExperience.map((job, idx) => (
              <div key={idx} className="mb-3">
                <p className="font-semibold text-xs">
                  {job.role} – <span className="text-gray-600">{job.company}</span>
                </p>
                <p className="text-[10px] text-gray-500">
                  {job.startDate} - {job.endDate || "Present"}
                </p>
                <p className="text-xs text-gray-700 mt-1">{job.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Education</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-semibold text-xs">{edu.degree}</p>
                <p className="text-xs text-gray-600">{edu.school}</p>
                <p className="text-[10px] text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Projects</h3>
            {projects.map((proj, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-semibold text-xs">{proj.name}</p>
                <p className="text-xs text-gray-700">{proj.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
