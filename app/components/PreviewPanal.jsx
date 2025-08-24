import React from "react";

const PreviewPanal = ({ resumeData }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } =
    resumeData.data;

  return (
    <div className="flex justify-center p-4 bg-gray-100">
      <div
        className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-3 gap-6 overflow-hidden"
        style={{
          width: "794px",   // A4 width at 96dpi
          height: "1123px", // A4 height at 96dpi
          fontSize: "12px", // standard CV readable size
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
            <h2 className="text-base font-semibold">{personalInfo.fullName || "Your Name"}</h2>
            <p className="text-gray-600 text-sm">{personalInfo.profession || "Your Profession"}</p>
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
                  <li key={idx}>{skill}</li>
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
                  <li key={idx}>{cert}</li>
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
                    {job.role} – <span className="text-gray-600">{job.Company}</span>
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {job.StartDate} - {job.EndDate || "Present"}
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
                     {job.Description}
                  </ul>
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
                  <p className="text-xs text-gray-600">{edu.institution}</p>
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
    </div>
  );
};

export default PreviewPanal;
