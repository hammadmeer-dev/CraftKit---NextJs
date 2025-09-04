import React from "react";

const PrabhaDinResume = ({ resumeData }) => {
  const {
    personalInfo,
    summary,
    workExperience,
    education,
    skills,
    projects,
    certifications,
    languages,
    hobby,
    achievements,
  } = { ...resumeData.data };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-3 gap-6 overflow-hidden"
      style={{
        width: "794px",
        height: "1123px",
        fontSize: "12px",
        lineHeight: "1.4",
      }}
    >
      {/* Left Sidebar */}
      <div className="col-span-1 border-r pr-4">
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
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {skills.map((skill, idx) => (
                <li key={skill.id || idx}>
                  {skill.name} {skill.rating && `(${skill.rating}/10)`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {languages?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">
              Languages
            </h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {languages.map((language, idx) => (
                <li key={idx}>
                  {language.name} – {language.level}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  {cert.name}{" "}
                  {cert.date && (
                    <span className="text-xs text-gray-600">({cert.date})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Personal Details */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold border-b pb-1 mb-2">
            Personal Info
          </h3>
          <p className="text-xs text-gray-700">
            <span className="font-medium">Citizenship:</span>{" "}
            {personalInfo?.citizenship}
          </p>
          <p className="text-xs text-gray-700">
            <span className="font-medium">Date of Birth:</span>{" "}
            {personalInfo?.dateOfBirth}
          </p>
          <p className="text-xs text-gray-700">
            <span className="font-medium">Marital Status:</span>{" "}
            {personalInfo?.maritalStatus}
          </p>
        </div>

        {/* Hobby */}
        {hobby && (
          <div>
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">Hobby</h3>
            <p className="text-xs text-gray-700">{hobby}</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="col-span-2 pl-4 overflow-hidden">
        {/* Summary */}
        {summary && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">
              Summary
            </h3>
            <p className="text-gray-700 text-xs">{summary}</p>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Key Achievements</h3>
            {achievements.map((ach, index) => (
              <div className="mb-2 bg-gray-100 p-2 rounded" key={index}>
                <p className="text-xs text-gray-700">{ach}</p>
              </div>
            ))}
          </div>
        )}

        {/* Work Experience */}
        {workExperience.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">
              Work History
            </h3>
            {workExperience.map((job, idx) => (
              <div key={idx} className="mb-3">
                <p className="font-semibold text-xs">
                  {job.position} –{" "}
                  <span className="text-gray-600">{job.company}</span>
                </p>
                <p className="text-[10px] text-gray-500">
                  {job.startDate} - {job.endDate}
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  {job.description || job.responsibilities?.join(", ")}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold border-b pb-1 mb-2">
              Education
            </h3>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-semibold text-xs">{edu.degree}</p>
                <p className="text-xs text-gray-600">{edu.institution}</p>
                <p className="text-[10px] text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-xs text-gray-700 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Declaration */}
        <div className="mt-6 pt-4 border-t text-xs text-gray-600">
          <p>
            <strong>Declaration:</strong> The information stated above is true
            to the best of my knowledge and belief.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrabhaDinResume;
