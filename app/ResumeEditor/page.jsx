"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import EditorSidebar from "../components/EditorSidebar";
import PreviewPanal from "../components/PreviewPanal";
import EditContentSection from "../components/EditContentSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTemplateStore } from "../Store/templateStore";
import { useResumeStore } from "../Store/resumeStore";
import { generateId } from "@/utils/resumeStorage";

export default function ResumeEditor() {
  const previewRef = useRef();
  const { id } = useParams(); // missing!
  const { selectedTemplate: template, setTemplate } = useTemplateStore();
  const { resume, setResume } = useResumeStore();
  const resumeData = {
    id: generateId(),
    title: "Untitled Resume",
    templateId: { template },
    created: Date.now(),
    data: {
      personalInfo: {
        fullName: "",
        profession: "",
        location: "",
        citizenship: "",
        dateOfBirth: "",
        maritalStatus: "",
        phone: "",
        email: "",
        portfolioWebsite: "",
        profileImage: "",
      },
      summary: "",
      hobby: "",
      languages: [],
      workExperience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: [],
      achievements: [],
    },
  };

  useEffect(() => {
    console.log(useResumeStore.getState());
  }, []);
  const handleExportPDF = async () => {
    if (!previewRef.current) return;

    // Grab actual HTML from preview
    const html = previewRef.current.outerHTML;

    // Send to backend
    const response = await fetch("/api/export-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html }),
    });

    if (!response.ok) {
      alert("Failed to generate PDF");
      return;
    }

    // Convert response to Blob and download
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resume?.title || "resume"}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  };
  useEffect(() => {
    if (!id) {
      setResume(resumeData);
    }
  }, []);

  return (
    <div className="min-h-screen max-w-screen bg-gray-50 flex">
      {/* Sidebar */}
      <EditorSidebar />

      {/* Editor Content */}
      <div className="flex-1 flex flex-col">
        {/* Form Panel */}
        <div className="w-full border-b">
          <EditContentSection onExportPDF={handleExportPDF} />
        </div>

        {/* Preview Panel */}
        <div className="w-full flex-1">
          <PreviewPanal ref={previewRef} resumeData={resume} />
        </div>
      </div>
    </div>
  );
}
