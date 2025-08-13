import React from 'react'

const PreviewPanal = ({resumeData}) => {
  return (
    <div className="w-1/2 bg-gray-100 p-6 overflow-y-auto">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto min-h-[800px]">
            {/* Resume Preview */}
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b pb-6">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">
                  {resumeData.data.personalInfo.fullName || 'Your Name'}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {resumeData.data.personalInfo.profession || 'Your Profession'}
                </p>
                <div className="text-sm text-gray-500 space-y-1">
                  {resumeData.data.personalInfo.location && (
                    <p>{resumeData.data.personalInfo.location}</p>
                  )}
                  <p>
                    {resumeData.data.personalInfo.phone && `${resumeData.data.personalInfo.phone} • `}
                    {resumeData.data.personalInfo.email && `${resumeData.data.personalInfo.email} • `}
                    {resumeData.data.personalInfo.portfolioWebsite}
                  </p>
                </div>
              </div>

              {/* Summary */}
              {resumeData.data.summary && (
                <div>
                  <h2 className="text-xl font-semibold text-blue-600 mb-3">Summary</h2>
                  <p className="text-gray-700 leading-relaxed">{resumeData.data.summary}</p>
                </div>
              )}

              {/* Placeholder sections */}
              <div className="text-gray-400 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
                  <p>Work experience will appear here...</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Education</h2>
                  <p>Education details will appear here...</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Skills</h2>
                  <p>Skills will appear here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PreviewPanal