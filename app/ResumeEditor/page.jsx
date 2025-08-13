"use client";
import React, { useState, useEffect } from 'react';
import EditorSidebar from '../components/EditorSidebar';
import PreviewPanal from '../components/PreviewPanal';
import EditContentSection from '../components/EditContentSection';


export default function ResumeEditor() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'editor'
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
      <EditorSidebar/>

      {/* Editor Content */}
      <div className="flex-1 flex">
        {/* Form Panel */}
       <EditContentSection resumeData={resumeData} setResumeData={setResumeData}/>

        {/* Preview Panel */}
        <PreviewPanal resumeData={resumeData}/>
      </div>
    </div>
  );
}