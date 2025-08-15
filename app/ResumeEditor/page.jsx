"use client";
import React, { useState } from 'react';
import EditorSidebar from '../components/EditorSidebar';
import PreviewPanal from '../components/PreviewPanal';
import EditContentSection from '../components/EditContentSection';

export default function ResumeEditor() {
  const [resumeData, setResumeData] = useState({
    title: 'Untitled Resume',
    templateId: 'modern-minimalist',
    data: {
      personalInfo: {
        fullName: '',
        profession: '',
        location: '',
        phone: '',
        email: '',
        portfolioWebsite: ''
      },
      summary: '',
      workExperience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: []
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <EditorSidebar />

      {/* Editor Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Form Panel */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r">
          <EditContentSection resumeData={resumeData} setResumeData={setResumeData} />
        </div>

        {/* Preview Panel */}
        <div className="w-full md:w-1/2">
          <PreviewPanal resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}
