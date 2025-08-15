import React from 'react';

const PreviewPanel = ({ resumeData }) => {
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gray-100 p-6 overflow-y-auto h-full">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto min-h-[800px]">
        {/* Resume Preview */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center border-b pb-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">
              {resumeData?.data?.personalInfo?.fullName || 'Your Name'}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {resumeData?.data?.personalInfo?.profession || 'Your Profession'}
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              {resumeData?.data?.personalInfo?.location && (
                <p>{resumeData.data.personalInfo.location}</p>
              )}
              <p className="flex flex-wrap justify-center gap-x-2">
                {resumeData?.data?.personalInfo?.phone && (
                  <span>{resumeData.data.personalInfo.phone}</span>
                )}
                {resumeData?.data?.personalInfo?.email && (
                  <span>{resumeData.data.personalInfo.email}</span>
                )}
                {resumeData?.data?.personalInfo?.portfolioWebsite && (
                  <span>{resumeData.data.personalInfo.portfolioWebsite}</span>
                )}
              </p>
            </div>
          </div>

          {/* Summary */}
          {resumeData?.data?.summary && (
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">Summary</h2>
              <p className="text-gray-700 leading-relaxed">{resumeData.data.summary}</p>
            </div>
          )}

          {/* Work Experience */}
          {resumeData?.data?.workExperience?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">Work Experience</h2>
              <div className="space-y-4">
                {resumeData.data.workExperience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h3 className="font-medium text-gray-800">{exp.role}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{exp.company}</span>
                      <span>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {resumeData?.data?.education?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">Education</h2>
              <div className="space-y-4">
                {resumeData.data.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{edu.school}</span>
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="mt-2 text-gray-700 text-sm">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {resumeData?.data?.skills?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.data.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {resumeData?.data?.projects?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">Projects</h2>
              <div className="space-y-4">
                {resumeData.data.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h3 className="font-medium text-gray-800">{project.name}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        {project.link}
                      </a>
                    )}
                    {project.description && (
                      <p className="mt-2 text-gray-700 text-sm">{project.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {resumeData?.data?.certifications?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-3 border-b pb-1">Certifications</h2>
              <div className="space-y-4">
                {resumeData.data.certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h3 className="font-medium text-gray-800">{cert.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{cert.issuer}</span>
                      <span>{cert.date && formatDate(cert.date)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;